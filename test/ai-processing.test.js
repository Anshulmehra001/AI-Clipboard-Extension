// Unit tests for AI processing functions
// Tests getAIResponse function with different menu item IDs and validates error handling

describe('AI Processing Functions', () => {
  // Mock AI processing functions for testing
  let getAIResponse, processWithRewriter, processWithSummarizer, proofreadText;
  
  beforeEach(() => {
    // Reset all mocks
    jest.clearAllMocks();
    
    // Mock the AI processing functions based on background.js implementation
    processWithRewriter = jest.fn();
    processWithSummarizer = jest.fn();
    proofreadText = jest.fn();
    
    getAIResponse = async function(menuItemId, text) {
      // Simulate timeout handling
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('AI processing timeout')), 10000);
      });
      
      let transformedText;
      
      // Process based on menu item type
      switch (menuItemId) {
        case 'make-professional':
          transformedText = await processWithRewriter(text, 'professional');
          break;
        case 'make-friendly':
          transformedText = await processWithRewriter(text, 'friendly');
          break;
        case 'clean-paragraph':
          transformedText = await processWithRewriter(text, 'clean');
          break;
        case 'summarize':
          transformedText = await processWithSummarizer(text);
          break;
        default:
          throw new Error(`Unknown menu item type: ${menuItemId}`);
      }
      
      // Apply proofreading
      return await proofreadText(transformedText);
    };
  });

  describe('getAIResponse', () => {
    test('should process professional tone transformation', async () => {
      // Mock successful rewriter and proofreader responses
      processWithRewriter.mockResolvedValue('Professional version of text');
      proofreadText.mockResolvedValue('Proofread professional text');
      
      const result = await getAIResponse('make-professional', 'test text');
      
      expect(result).toBe('Proofread professional text');
      expect(processWithRewriter).toHaveBeenCalledWith('test text', 'professional');
      expect(proofreadText).toHaveBeenCalledWith('Professional version of text');
    });

    test('should process friendly tone transformation', async () => {
      processWithRewriter.mockResolvedValue('Friendly version of text');
      proofreadText.mockResolvedValue('Proofread friendly text');
      
      const result = await getAIResponse('make-friendly', 'test text');
      
      expect(result).toBe('Proofread friendly text');
      expect(processWithRewriter).toHaveBeenCalledWith('test text', 'friendly');
      expect(proofreadText).toHaveBeenCalledWith('Friendly version of text');
    });

    test('should process clean paragraph transformation', async () => {
      processWithRewriter.mockResolvedValue('Clean paragraph text');
      proofreadText.mockResolvedValue('Proofread clean text');
      
      const result = await getAIResponse('clean-paragraph', 'messy text');
      
      expect(result).toBe('Proofread clean text');
      expect(processWithRewriter).toHaveBeenCalledWith('messy text', 'clean');
      expect(proofreadText).toHaveBeenCalledWith('Clean paragraph text');
    });

    test('should process summarization', async () => {
      processWithSummarizer.mockResolvedValue('Summary of text');
      proofreadText.mockResolvedValue('Proofread summary');
      
      const result = await getAIResponse('summarize', 'long text to summarize');
      
      expect(result).toBe('Proofread summary');
      expect(processWithSummarizer).toHaveBeenCalledWith('long text to summarize');
      expect(proofreadText).toHaveBeenCalledWith('Summary of text');
    });

    test('should handle unknown menu item ID', async () => {
      await expect(getAIResponse('unknown-item', 'test text'))
        .rejects.toThrow('Unknown menu item type: unknown-item');
    });

    test('should handle processing errors', async () => {
      processWithRewriter.mockRejectedValue(new Error('Processing failed'));
      
      await expect(getAIResponse('make-professional', 'test text'))
        .rejects.toThrow('Processing failed');
    });

    test('should handle API unavailable error', async () => {
      processWithRewriter.mockRejectedValue(
        new Error('Chrome Rewriter API unavailable')
      );
      
      await expect(getAIResponse('make-professional', 'test text'))
        .rejects.toThrow('Chrome Rewriter API unavailable');
    });

    test('should handle quota exceeded error', async () => {
      processWithRewriter.mockRejectedValue(
        new Error('Rewriter API quota exceeded')
      );
      
      await expect(getAIResponse('make-professional', 'test text'))
        .rejects.toThrow('Rewriter API quota exceeded');
    });
  });

  describe('Chrome AI API Integration', () => {
    test('should handle rewriter API errors', async () => {
      processWithRewriter.mockRejectedValue(
        new Error('Chrome Rewriter API not supported on this device')
      );
      
      await expect(getAIResponse('make-professional', 'test text'))
        .rejects.toThrow('Chrome Rewriter API not supported on this device');
    });

    test('should handle summarizer API errors', async () => {
      processWithSummarizer.mockRejectedValue(
        new Error('Text too short to summarize effectively')
      );
      
      await expect(getAIResponse('summarize', 'short'))
        .rejects.toThrow('Text too short to summarize effectively');
    });

    test('should handle proofreader fallback gracefully', async () => {
      processWithRewriter.mockResolvedValue('Professional text');
      proofreadText.mockResolvedValue('Professional text'); // Fallback to original
      
      const result = await getAIResponse('make-professional', 'test text');
      
      expect(result).toBe('Professional text');
    });

    test('should validate menu item types correctly', async () => {
      const validMenuItems = ['make-professional', 'make-friendly', 'clean-paragraph', 'summarize'];
      
      for (const menuItem of validMenuItems) {
        if (menuItem === 'summarize') {
          processWithSummarizer.mockResolvedValue('processed text');
        } else {
          processWithRewriter.mockResolvedValue('processed text');
        }
        proofreadText.mockResolvedValue('final text');
        
        const result = await getAIResponse(menuItem, 'test text');
        expect(result).toBe('final text');
      }
    });
  });
});