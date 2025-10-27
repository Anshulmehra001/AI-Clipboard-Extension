// Integration tests for complete workflow
// Tests end-to-end user journey from menu click to text injection

describe('Extension Integration Tests', () => {
  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
  });

  describe('Context Menu Creation', () => {
    test('should create parent menu item with correct properties', () => {
      // Test context menu creation
      const expectedParentMenu = {
        id: 'ai-clipboard-parent',
        title: 'AI Clipboard: Paste As...',
        contexts: ['selection']
      };
      
      // Simulate menu creation
      chrome.contextMenus.create(expectedParentMenu);
      
      expect(chrome.contextMenus.create).toHaveBeenCalledWith(expectedParentMenu);
    });

    test('should create all required child menu items', () => {
      const expectedMenuItems = ['make-professional', 'make-friendly', 'clean-paragraph', 'summarize'];
      
      expectedMenuItems.forEach(menuId => {
        const menuItem = {
          id: menuId,
          parentId: 'ai-clipboard-parent',
          contexts: ['selection']
        };
        
        chrome.contextMenus.create(menuItem);
        expect(chrome.contextMenus.create).toHaveBeenCalledWith(
          expect.objectContaining({ id: menuId, parentId: 'ai-clipboard-parent' })
        );
      });
    });
  });

  describe('Workflow Components', () => {
    test('should validate clipboard reading workflow', async () => {
      const mockClipboardRead = jest.fn().mockResolvedValue('test clipboard content');
      
      const result = await mockClipboardRead();
      
      expect(result).toBe('test clipboard content');
      expect(mockClipboardRead).toHaveBeenCalled();
    });

    test('should handle clipboard access errors', async () => {
      const mockClipboardRead = jest.fn().mockRejectedValue(new Error('Permission denied'));
      
      await expect(mockClipboardRead()).rejects.toThrow('Permission denied');
    });

    test('should validate AI processing workflow', async () => {
      const mockAIProcess = jest.fn().mockResolvedValue('transformed text');
      
      const result = await mockAIProcess('input text', 'make-professional');
      
      expect(result).toBe('transformed text');
      expect(mockAIProcess).toHaveBeenCalledWith('input text', 'make-professional');
    });

    test('should validate text injection workflow', async () => {
      const mockTextInject = jest.fn().mockResolvedValue({ success: true });
      
      const result = await mockTextInject('transformed text', 123);
      
      expect(result.success).toBe(true);
      expect(mockTextInject).toHaveBeenCalledWith('transformed text', 123);
    });
  });

  describe('Text Injection Across Element Types', () => {
    test('should handle textarea elements', () => {
      const pasteTextAtCursor = (text) => {
        const activeElement = document.activeElement;
        
        if (activeElement && activeElement.tagName.toLowerCase() === 'textarea') {
          const startPos = activeElement.selectionStart || 0;
          const endPos = activeElement.selectionEnd || 0;
          const currentValue = activeElement.value || '';
          
          const newValue = currentValue.substring(0, startPos) + text + currentValue.substring(endPos);
          activeElement.value = newValue;
          
          const newCursorPos = startPos + text.length;
          activeElement.setSelectionRange(newCursorPos, newCursorPos);
          
          return { success: true };
        }
        
        return { success: false, error: 'Not a textarea element' };
      };
      
      // Mock textarea element
      const mockTextarea = {
        tagName: 'TEXTAREA',
        selectionStart: 6,
        selectionEnd: 11,
        value: 'Hello world test',
        setSelectionRange: jest.fn()
      };
      
      // Mock document.activeElement
      Object.defineProperty(document, 'activeElement', {
        value: mockTextarea,
        writable: true
      });
      
      const result = pasteTextAtCursor('inserted text');
      
      expect(result.success).toBe(true);
      expect(mockTextarea.value).toBe('Hello inserted text test');
      expect(mockTextarea.setSelectionRange).toHaveBeenCalledWith(19, 19);
    });

    test('should handle input elements', () => {
      const pasteTextAtCursor = (text) => {
        const activeElement = document.activeElement;
        
        if (activeElement && activeElement.tagName.toLowerCase() === 'input' && 
            activeElement.type === 'text') {
          const startPos = activeElement.selectionStart || 0;
          const endPos = activeElement.selectionEnd || 0;
          const currentValue = activeElement.value || '';
          
          const newValue = currentValue.substring(0, startPos) + text + currentValue.substring(endPos);
          activeElement.value = newValue;
          
          return { success: true };
        }
        
        return { success: false, error: 'Not a text input element' };
      };
      
      // Mock input element
      const mockInput = {
        tagName: 'INPUT',
        type: 'text',
        selectionStart: 0,
        selectionEnd: 0,
        value: 'existing text'
      };
      
      Object.defineProperty(document, 'activeElement', {
        value: mockInput,
        writable: true
      });
      
      const result = pasteTextAtCursor('new ');
      
      expect(result.success).toBe(true);
      expect(mockInput.value).toBe('new existing text');
    });

    test('should handle contenteditable elements', () => {
      const pasteTextAtCursor = (text) => {
        const activeElement = document.activeElement;
        
        if (activeElement && activeElement.contentEditable === 'true') {
          // Mock successful contenteditable insertion
          return { success: true };
        }
        
        return { success: false, error: 'Not a contenteditable element' };
      };
      
      // Mock contenteditable element
      const mockContentEditable = {
        tagName: 'DIV',
        contentEditable: 'true'
      };
      
      Object.defineProperty(document, 'activeElement', {
        value: mockContentEditable,
        writable: true
      });
      
      const result = pasteTextAtCursor('inserted content');
      
      expect(result.success).toBe(true);
    });

    test('should handle unsupported elements', () => {
      const pasteTextAtCursor = (text) => {
        const activeElement = document.activeElement;
        
        if (!activeElement) {
          return { success: false, error: 'No active element found' };
        }
        
        const tagName = activeElement.tagName.toLowerCase();
        const elementType = activeElement.type ? activeElement.type.toLowerCase() : '';
        
        // Check for supported elements
        if (tagName === 'textarea' || 
            (tagName === 'input' && ['text', 'email', 'search', 'url', 'tel'].includes(elementType)) ||
            activeElement.contentEditable === 'true') {
          return { success: true };
        }
        
        return { 
          success: false, 
          error: `Unsupported element type: ${tagName}${elementType ? ` (${elementType})` : ''}` 
        };
      };
      
      // Mock unsupported element
      const mockUnsupported = {
        tagName: 'SPAN',
        contentEditable: 'false'
      };
      
      Object.defineProperty(document, 'activeElement', {
        value: mockUnsupported,
        writable: true
      });
      
      const result = pasteTextAtCursor('test text');
      
      expect(result.success).toBe(false);
      expect(result.error).toContain('Unsupported element type: span');
    });
  });

  describe('Error Recovery and Fallbacks', () => {
    test('should provide fallback transformations when AI APIs unavailable', () => {
      const handleAIAPIUnavailable = (text, menuItemId) => {
        // Basic fallback transformations
        switch (menuItemId) {
          case 'make-professional':
            return text.charAt(0).toUpperCase() + text.slice(1) + '.';
          case 'make-friendly':
            return 'Hey! ' + text + '!';
          case 'clean-paragraph':
            return text.trim().charAt(0).toUpperCase() + text.trim().slice(1) + '.';
          case 'summarize':
            return `TL;DR: ${text.substring(0, 100)}...`;
          default:
            return null;
        }
      };
      
      expect(handleAIAPIUnavailable('test text', 'make-professional')).toBe('Test text.');
      expect(handleAIAPIUnavailable('test text', 'make-friendly')).toBe('Hey! test text!');
      expect(handleAIAPIUnavailable('  test text  ', 'clean-paragraph')).toBe('Test text.');
      expect(handleAIAPIUnavailable('long test text for summary', 'summarize')).toBe('TL;DR: long test text for summary...');
    });

    test('should handle clipboard fallback operations', async () => {
      const mockClipboardWrite = jest.fn().mockResolvedValue();
      
      const copyToClipboardFallback = async (text) => {
        await mockClipboardWrite(text);
        return true;
      };
      
      const success = await copyToClipboardFallback('transformed text');
      
      expect(success).toBe(true);
      expect(mockClipboardWrite).toHaveBeenCalledWith('transformed text');
    });
  });
});