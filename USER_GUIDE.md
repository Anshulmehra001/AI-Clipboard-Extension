# 📖 Context-Aware Creator - Complete User Guide

**Everything you need to know to set up, use, and troubleshoot the Context-Aware Creator Chrome extension.**

---

## 🎯 Table of Contents

1. [System Requirements](#-system-requirements)
2. [Complete Setup Guide](#-complete-setup-guide)
3. [How to Use](#-how-to-use)
4. [Troubleshooting](#-troubleshooting)
5. [Advanced Usage](#-advanced-usage)
6. [FAQ](#-frequently-asked-questions)

---

## 💻 System Requirements

### Hardware Requirements
| Component | Minimum | Recommended |
|-----------|---------|-------------|
| **Storage** | 22 GB free space | 30+ GB free space |
| **RAM** | 8 GB | 16+ GB |
| **CPU** | 4 cores | 8+ cores |
| **GPU** | Optional | 4+ GB VRAM |

### Software Requirements
| Software | Version | Notes |
|----------|---------|-------|
| **Chrome Canary** | Latest | **Required** - Regular Chrome won't work |
| **Operating System** | Windows 10/11, macOS 13+, Linux | ChromeOS on Chromebook Plus |
| **Internet** | Unlimited data | Only for initial model download |

### ⚠️ Important Notes
- **Regular Chrome Stable will NOT work** - You must use Chrome Canary or Beta
- **22 GB is temporary** - Final model size is ~2 GB after download
- **Mobile devices not supported** - Desktop/laptop only

---

## 🚀 Complete Setup Guide

### Step 1: Install Chrome Canary

1. **Download Chrome Canary:**
   - Visit: https://www.google.com/chrome/canary/
   - Download and install for your operating system
   - Launch Chrome Canary (look for the yellow icon)

2. **Verify Installation:**
   - Go to `chrome://version/`
   - Confirm you see "Canary" in the version string
   - Version should be 138+ or higher

### Step 2: Enable Chrome AI Flags

1. **Open Chrome Flags:**
   ```
   chrome://flags/
   ```

2. **Enable Required Flags:**
   
   **Flag 1: Prompt API for Gemini Nano**
   ```
   chrome://flags/#prompt-api-for-gemini-nano
   ```
   Set to: **Enabled**
   
   **Flag 2: Optimization Guide On Device Model**
   ```
   chrome://flags/#optimization-guide-on-device-model
   ```
   Set to: **Enabled BypassPerfRequirement**

3. **Restart Chrome:**
   - Click the blue "Relaunch" button at the bottom
   - Chrome will restart with AI features enabled

### Step 3: Download Gemini Nano Model

1. **Check Available Disk Space:**
   - Ensure you have 22+ GB free space
   - Model downloads to your Chrome profile directory

2. **Trigger Model Download:**
   - Open any webpage
   - Press **F12** to open DevTools
   - Go to **Console** tab
   - Run this command:
   ```javascript
   await ai.canCreateTextSession();
   ```

3. **Wait for Download:**
   - Download takes 10-30 minutes depending on connection
   - No progress bar is shown - be patient!
   - Chrome may seem unresponsive during download

### Step 4: Verify AI Model Status

1. **Check Model Status:**
   ```
   chrome://on-device-internals/
   ```
   - Go to **"Model Status"** tab
   - Look for Gemini Nano entries
   - Status should show **"Available"** when ready

2. **Alternative Check:**
   ```
   chrome://components/
   ```
   - Find **"Optimization Guide On Device Model"**
   - Version should be higher than 0.0.0.0

3. **Test AI Availability:**
   ```javascript
   // Run in DevTools Console
   await ai.canCreateTextSession();
   // Should return "readily" when ready
   ```

### Step 5: Install the Extension

1. **Download Extension:**
   - Clone or download this repository
   - Extract to a folder on your computer

2. **Load Extension:**
   - Go to `chrome://extensions/`
   - Enable **"Developer mode"** (toggle top-right)
   - Click **"Load unpacked"**
   - Select the extension folder

3. **Verify Installation:**
   - Extension should appear in your extensions list
   - Icon should be visible in Chrome toolbar
   - Status should show "Enabled"

### Step 6: Test Everything Works

1. **Go to any webpage**
2. **Select some text** (highlight it)
3. **Right-click** to open context menu
4. **Look for Context-Aware Creator options:**
   - 🚀 Expand This Idea
   - 🔍 Simplify This Jargon
   - ✅ Find the Action Item
   - 🐦 Generate a Tweet from This

---

## 🎮 How to Use

### Basic Usage Flow

1. **Navigate to any webpage** (news, articles, emails, etc.)
2. **Select text** by clicking and dragging to highlight
3. **Right-click** on the selected text
4. **Choose transformation** from Context-Aware Creator submenu
5. **Wait 2-5 seconds** for AI processing
6. **See transformed text** replace the original selection

### Transformation Types Explained

#### 🚀 **Expand This Idea**
**Purpose:** Transform brief concepts into detailed, professional content

**Best for:**
- Short notes that need elaboration
- Bullet points to expand into paragraphs
- Brief ideas for presentations or emails

**Example:**
- **Input:** "Remote work benefits"
- **Output:** "Remote work offers numerous benefits including increased flexibility, improved work-life balance, reduced commuting costs and time, access to a global talent pool, and often higher productivity due to fewer office distractions..."

#### 🔍 **Simplify This Jargon**
**Purpose:** Convert complex technical language into plain English

**Best for:**
- Academic papers or research
- Technical documentation
- Legal or medical text
- Complex business language

**Example:**
- **Input:** "The implementation of blockchain technology facilitates decentralized consensus mechanisms"
- **Output:** "Blockchain technology helps multiple computers agree on information without needing a central authority to verify it"

#### ✅ **Find the Action Item**
**Purpose:** Extract the most important task or next step from any text

**Best for:**
- Meeting notes and summaries
- Long email threads
- Project updates
- Task lists buried in text

**Example:**
- **Input:** "Great discussion about the Q4 budget. Marketing wants more spend, engineering needs new servers, and HR is hiring. We should definitely approve the server purchase by next Friday."
- **Output:** "Approve the server purchase by next Friday"

#### 🐦 **Generate a Tweet from This**
**Purpose:** Create engaging social media posts under 280 characters

**Best for:**
- News articles to share
- Blog posts or content
- Company announcements
- Personal achievements

**Example:**
- **Input:** "Our team just completed a 6-month project to build an AI-powered customer service chatbot that reduced response times by 75% and improved customer satisfaction scores significantly."
- **Output:** "🎉 Just shipped our AI chatbot! 75% faster response times + happier customers = mission accomplished! #AI #CustomerService #TeamWin"

### Pro Tips for Better Results

**✅ Do:**
- Select complete sentences or paragraphs
- Use clear, well-written source text
- Keep selections under 500 words
- Wait patiently for processing (2-5 seconds)

**❌ Don't:**
- Select partial sentences or fragments
- Use extremely long text blocks (>1000 words)
- Expect instant results (AI needs processing time)
- Use on heavily formatted text (tables, code, etc.)

---

## 🔧 Troubleshooting

### Extension Issues

#### ❌ **Context menu doesn't appear**

**Symptoms:** Right-clicking on selected text shows no Context-Aware Creator options

**Solutions:**
1. **Ensure text is properly selected** (highlighted in blue)
2. **Check extension is enabled** in `chrome://extensions/`
3. **Reload the webpage** and try again
4. **Restart Chrome** if issue persists

#### ❌ **Extension not loading**

**Symptoms:** Extension doesn't appear in `chrome://extensions/`

**Solutions:**
1. **Verify Developer mode is enabled** (toggle top-right)
2. **Check folder path** when loading unpacked extension
3. **Look for error messages** in extension details
4. **Try reloading the extension** (refresh button)

#### ❌ **Transformations not working**

**Symptoms:** Menu appears but clicking options does nothing

**Solutions:**
1. **Check AI model status** (see AI Issues section)
2. **Open DevTools Console** (F12) and look for errors
3. **Test AI availability:** `await ai.canCreateTextSession()`
4. **Reload extension** in `chrome://extensions/`

### AI Issues

#### ❌ **"AI not available" error**

**Symptoms:** Console shows AI-related errors or `window.ai` is undefined

**Solutions:**
1. **Verify Chrome flags are enabled:**
   - `chrome://flags/#prompt-api-for-gemini-nano` → Enabled
   - `chrome://flags/#optimization-guide-on-device-model` → Enabled BypassPerfRequirement
2. **Restart Chrome completely** after enabling flags
3. **Check model download status** at `chrome://on-device-internals/`
4. **Ensure sufficient disk space** (22+ GB free)

#### ❌ **Model won't download**

**Symptoms:** `ai.canCreateTextSession()` returns "after-download" for extended periods

**Solutions:**
1. **Check available disk space:**
   - Windows: Check C: drive properties
   - Mac: Apple menu → About This Mac → Storage
   - Need 22+ GB free space
2. **Verify internet connection** is stable and unlimited
3. **Try forcing download:**
   ```javascript
   // Run in DevTools Console
   try {
     const session = await ai.createTextSession();
     console.log('Download triggered');
     session.destroy();
   } catch (error) {
     console.log('This may trigger download:', error);
   }
   ```
4. **Restart Chrome and try again**
5. **Check Windows firewall/antivirus** isn't blocking downloads

#### ❌ **Slow or poor AI responses**

**Symptoms:** AI takes very long to respond or gives low-quality results

**Solutions:**
1. **Wait for complete model download** (check `chrome://on-device-internals/`)
2. **Try shorter text selections** (under 200 words)
3. **Ensure good source text quality** (complete sentences, proper grammar)
4. **Check system resources** (close other tabs if low on RAM)
5. **First use is always slower** (model initialization)

### System Issues

#### ❌ **Chrome crashes or freezes**

**Symptoms:** Chrome becomes unresponsive during AI operations

**Solutions:**
1. **Close unnecessary tabs** to free up RAM
2. **Check system resources** (Task Manager/Activity Monitor)
3. **Restart Chrome completely**
4. **Try with smaller text selections**
5. **Ensure adequate RAM** (16+ GB recommended)

#### ❌ **Network/firewall issues**

**Symptoms:** Model download fails or times out

**Solutions:**
1. **Check corporate firewall settings**
2. **Try different network** (home vs office)
3. **Disable VPN temporarily** during download
4. **Check antivirus software** isn't blocking Chrome
5. **Use unlimited data connection** (not metered)

---

## 🔬 Advanced Usage

### Testing and Debugging

#### **Extension Debug Mode**
1. Go to `chrome://extensions/`
2. Find Context-Aware Creator
3. Click **"Inspect views: background page"**
4. Check console for error messages
5. Monitor network requests and API calls

#### **AI Status Monitoring**
```javascript
// Complete AI diagnostic script
async function diagnoseAI() {
  console.log('🔍 AI Diagnostic Report');
  console.log('Chrome version:', navigator.userAgent);
  console.log('AI object available:', typeof window.ai);
  
  if (window.ai) {
    console.log('Available APIs:', Object.keys(window.ai));
    
    if (window.ai.canCreateTextSession) {
      const status = await window.ai.canCreateTextSession();
      console.log('Model status:', status);
      
      if (status === 'readily') {
        console.log('✅ AI is ready to use!');
        
        // Test actual functionality
        try {
          const session = await window.ai.createTextSession();
          const response = await session.prompt('Test');
          console.log('✅ AI test successful:', response.substring(0, 50));
          session.destroy();
        } catch (error) {
          console.log('❌ AI test failed:', error);
        }
      } else {
        console.log('⏳ AI not ready yet:', status);
      }
    }
  } else {
    console.log('❌ AI not available - check Chrome flags');
  }
}

// Run the diagnostic
diagnoseAI();
```

#### **Performance Monitoring**
```javascript
// Monitor AI performance
async function testPerformance() {
  const testText = "This is a test sentence for performance monitoring.";
  const startTime = performance.now();
  
  try {
    const session = await window.ai.createTextSession();
    const response = await session.prompt(`Expand this: ${testText}`);
    const endTime = performance.now();
    
    console.log(`AI Response time: ${endTime - startTime}ms`);
    console.log(`Response length: ${response.length} characters`);
    
    session.destroy();
  } catch (error) {
    console.log('Performance test failed:', error);
  }
}
```

### Custom Development

#### **Modifying Transformation Prompts**
Edit `background.js` to customize AI prompts:

```javascript
// Example: Custom transformation
const customPrompts = {
  'expand': 'Expand this idea with more detail and examples: ',
  'simplify': 'Explain this in simple terms a 12-year-old could understand: ',
  'action': 'What is the most important action item from this text: ',
  'tweet': 'Create an engaging tweet (under 280 chars) from this: '
};
```

#### **Adding New Transformations**
1. **Edit manifest.json** to add new context menu items
2. **Update background.js** with new prompt logic
3. **Test thoroughly** with various text types
4. **Reload extension** to see changes

### Integration with Other Tools

#### **Using with Popular Websites**
- **Gmail:** Transform email drafts and responses
- **Google Docs:** Enhance document content
- **LinkedIn:** Create professional posts
- **Twitter:** Generate engaging content
- **Slack:** Improve team communication

#### **Workflow Integration**
1. **Content Creation:** Draft → Expand → Simplify → Finalize
2. **Research:** Complex text → Simplify → Extract actions
3. **Social Media:** Long content → Generate tweet → Post
4. **Email:** Brief notes → Expand → Professional tone

---

## ❓ Frequently Asked Questions

### General Questions

**Q: Why do I need Chrome Canary instead of regular Chrome?**
A: Chrome's built-in AI features are experimental and only available in pre-release versions (Canary/Beta). Regular Chrome Stable doesn't have these APIs yet.

**Q: Is my data sent to Google or external servers?**
A: No! All AI processing happens locally on your device. No text is sent to external servers, ensuring complete privacy.

**Q: Can I use this extension offline?**
A: Yes, once the Gemini Nano model is downloaded, the extension works completely offline. No internet connection needed for transformations.

**Q: Why does the initial setup require 22 GB of space?**
A: This is temporary space needed for downloading and installing the AI model. The final model size is much smaller (~2 GB).

### Technical Questions

**Q: Will this work on my Chromebook?**
A: Only on Chromebook Plus devices with ChromeOS Platform 16389.0.0+. Regular Chromebooks are not supported.

**Q: Can I use this on mobile devices?**
A: No, Chrome's built-in AI is currently only available on desktop platforms (Windows, Mac, Linux).

**Q: How much RAM does this use?**
A: The AI model uses 1-2 GB of RAM when active. 16+ GB total system RAM is recommended for smooth performance.

**Q: Does this work with all languages?**
A: Currently optimized for English text. Limited support for Spanish and Japanese. Other languages may produce mixed results.

### Troubleshooting Questions

**Q: The model has been "downloading" for hours. Is this normal?**
A: Downloads can take 30+ minutes on slower connections. Check `chrome://on-device-internals/` for actual status. If stuck, restart Chrome and try again.

**Q: I enabled the flags but still get "AI not available" errors.**
A: Make sure you restarted Chrome completely after enabling flags. Also verify you have enough disk space (22+ GB free).

**Q: The extension works sometimes but not others. Why?**
A: This can happen if system resources are low. Close other tabs, ensure adequate RAM, and try with shorter text selections.

**Q: Can I use multiple AI extensions at the same time?**
A: Yes, but they may compete for system resources. If you experience issues, try disabling other AI extensions temporarily.

### Privacy & Security Questions

**Q: What data does the extension collect?**
A: The extension collects no personal data. All text processing happens locally, and no information is transmitted externally.

**Q: Is it safe to use on sensitive documents?**
A: Yes, since all processing is local. However, as with any software, use your judgment with highly confidential information.

**Q: Will Google see my text transformations?**
A: No, Google cannot see your text or transformations. The AI model runs entirely on your device without network communication.

### Performance Questions

**Q: Why is the first transformation slow?**
A: The AI model needs to initialize on first use, which can take 5-10 seconds. Subsequent transformations are much faster (2-3 seconds).

**Q: Can I speed up the AI responses?**
A: Ensure adequate RAM (16+ GB), close unnecessary tabs, and use shorter text selections for faster processing.

**Q: Does this slow down my browser?**
A: The AI model uses resources only when actively processing text. When idle, it has minimal impact on browser performance.

---

## 🆘 Getting Help

### Self-Help Resources

1. **Check this guide first** - Most issues are covered in the troubleshooting section
2. **Verify setup requirements** - Ensure all prerequisites are met
3. **Test with simple examples** - Use short, clear text to isolate issues
4. **Check Chrome AI status** - Use the diagnostic scripts provided

### Reporting Issues

If you still need help:

1. **Gather diagnostic information:**
   - Chrome version (`chrome://version/`)
   - Extension version
   - AI model status (`chrome://on-device-internals/`)
   - Console error messages (F12 → Console)

2. **Create detailed bug report:**
   - Describe exact steps to reproduce
   - Include error messages
   - Specify what you expected vs. what happened
   - Mention your operating system

3. **Submit issue on GitHub:**
   - Use the issue template
   - Include all diagnostic information
   - Be specific and detailed

### Community Support

- **GitHub Discussions** - Ask questions and share tips
- **Chrome AI Developer Community** - Connect with other developers
- **Stack Overflow** - Tag questions with `chrome-ai` and `chrome-extension`

---

## 🔄 Updates and Maintenance

### Keeping Everything Updated

**Chrome Canary Updates:**
- Updates automatically daily
- May occasionally break experimental features
- Check `chrome://help/` to force update check

**Extension Updates:**
- Pull latest changes from repository
- Reload extension in `chrome://extensions/`
- Check for new features and bug fixes

**AI Model Updates:**
- Chrome automatically updates the AI model
- Check `chrome://components/` for latest versions
- No manual action required

### Backup and Recovery

**Extension Settings:**
- Extension has no user settings to backup
- Simply reload from source code if needed

**Chrome Profile:**
- AI model downloads to Chrome profile
- Backup profile to preserve downloaded model
- Restore profile to avoid re-downloading

---

**🎉 You're all set! Enjoy transforming text with the power of local AI.**

*For additional support, check the [README.md](README.md) or create an issue on GitHub.*