// Context-Aware Creator - Chrome Extension Background Script
// A smart AI assistant that transforms selected text with contextual actions

// 1. Create context menu items when the extension is installed
chrome.runtime.onInstalled.addListener(() => {
  // Create four distinct context menu items that only appear on text selection
  chrome.contextMenus.create({
    id: 'expand-idea',
    title: 'Expand This Idea',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    id: 'simplify-jargon',
    title: 'Simplify This Jargon',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    id: 'find-action-item',
    title: 'Find the Action Item',
    contexts: ['selection']
  });

  chrome.contextMenus.create({
    id: 'create-tweet',
    title: 'Generate a Tweet from This',
    contexts: ['selection']
  });
});

// 2. Listen for context menu clicks
chrome.contextMenus.onClicked.addListener((info, tab) => {
  // Pass the selected text and tab ID to the main processing function
  if (info.selectionText) {
    handleAIRequest(info.menuItemId, info.selectionText, tab.id);
  }
});

// 3. Main AI processing function
async function handleAIRequest(menuItemId, selectedText, tabId) {
  try {
    // Inject script into webpage where AI APIs are available
    chrome.scripting.executeScript({
      target: { tabId: tabId },
      func: performAITransformation,
      args: [menuItemId, selectedText]
    });

  } catch (error) {
    console.error("Error during AI transformation:", error);
  }
}

// 4. This function runs in the webpage context where AI APIs are available
async function performAITransformation(menuItemId, selectedText) {
  
  // Helper function to get specific prompts based on the action
  function getInstructionsForAction(menuItemId) {
    switch (menuItemId) {
      case 'expand-idea':
        return "Take the following text and expand it into a more detailed paragraph. Elaborate on the key points, providing more context and detail as if writing a professional document.";
      
      case 'simplify-jargon':
        return "Rewrite the following text in simple, easy-to-understand language. Explain any complex terms or jargon as if talking to a complete beginner.";
      
      case 'find-action-item':
        return "Analyze the following text and extract the single most important action item, question, or task. Present it as a clear, concise sentence.";
      
      case 'create-tweet':
        return "Convert the key idea from the following text into an engaging and concise social media post. The post must be under 280 characters and include relevant hashtags.";
      
      default:
        return "Improve and enhance the following text.";
    }
  }

  // Show notification function
  function showNotification(message, isError = false) {
    // Remove any existing notifications
    const existing = document.querySelector('.context-aware-notification');
    if (existing) existing.remove();
    
    const notification = document.createElement('div');
    notification.className = 'context-aware-notification';
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: ${isError ? '#dc3545' : '#28a745'};
      color: white;
      padding: 12px 20px;
      border-radius: 8px;
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      font-size: 14px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      max-width: 300px;
      word-wrap: break-word;
    `;
    document.body.appendChild(notification);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => notification.remove(), 300);
      }
    }, 4000);
  }

  // Function to replace selected text in the page
  function replaceSelectedText(newText) {
    const selection = window.getSelection();
    
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      
      // Replace the selected content with new text
      range.deleteContents();
      const textNode = document.createTextNode(newText);
      range.insertNode(textNode);
      
      // Clear selection and position cursor after the new text
      range.setStartAfter(textNode);
      range.setEndAfter(textNode);
      selection.removeAllRanges();
      selection.addRange(range);
      
      return true;
    }
    
    return false;
  }

  try {
    console.log('Starting AI transformation for:', menuItemId);
    showNotification('🤖 AI is thinking...');

    // Check if Gemini Nano window.ai API is available
    if (!('ai' in window)) {
      throw new Error('Gemini Nano AI not available. Please enable Chrome flags and download model.');
    }

    // Check if we can create a text session
    const canCreate = await window.ai.canCreateTextSession();
    if (!canCreate) {
      throw new Error('Cannot create AI text session. Model may still be downloading.');
    }

    // Get the specific instructions for this action
    const instructions = getInstructionsForAction(menuItemId);
    
    // Create a text session with Gemini Nano
    const textSession = await window.ai.createTextSession();
    
    // Create the prompt combining instructions with selected text
    const prompt = `${instructions}\n\nText to transform: "${selectedText}"`;
    
    // Get the AI response
    const transformedText = await textSession.prompt(prompt);
    
    // Clean up the session
    textSession.destroy();
    
    // Replace the selected text with the transformed text
    const success = replaceSelectedText(transformedText);
    
    if (success) {
      showNotification('✅ Text transformed successfully!');
    } else {
      // Fallback: copy to clipboard
      await navigator.clipboard.writeText(transformedText);
      showNotification('📋 Transformed text copied to clipboard');
    }

  } catch (error) {
    console.error("Error during AI transformation:", error);
    
    // Provide helpful error messages based on common issues
    let errorMessage = error.message;
    
    if (error.message.includes('not available') || error.message.includes('ai')) {
      errorMessage = 'Gemini Nano not available. Check: 1) Chrome flags enabled, 2) Model downloaded, 3) Sufficient disk space (22GB)';
    } else if (error.message.includes('session')) {
      errorMessage = 'AI session failed. Model may still be downloading. Check chrome://on-device-internals';
    }
    
    showNotification(`❌ ${errorMessage}`, true);
  }
}