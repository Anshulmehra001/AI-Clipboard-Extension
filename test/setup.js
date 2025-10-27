// Test setup file for Chrome extension testing
// Mock Chrome APIs and global objects

// Mock Chrome APIs
global.chrome = {
  contextMenus: {
    create: jest.fn(),
    removeAll: jest.fn(),
    onClicked: {
      addListener: jest.fn()
    }
  },
  runtime: {
    onInstalled: {
      addListener: jest.fn()
    }
  },
  tabs: {
    get: jest.fn()
  },
  scripting: {
    executeScript: jest.fn()
  },
  notifications: {
    create: jest.fn()
  }
};

// Mock window.ai APIs
global.window = {
  ai: {
    createTextRewriter: jest.fn(),
    createTextSummarizer: jest.fn(),
    createTextProofreader: jest.fn()
  }
};

// Mock navigator.clipboard
global.navigator = {
  clipboard: {
    readText: jest.fn(),
    writeText: jest.fn()
  }
};

// Mock console methods to avoid noise in tests
global.console = {
  ...console,
  log: jest.fn(),
  warn: jest.fn(),
  error: jest.fn()
};