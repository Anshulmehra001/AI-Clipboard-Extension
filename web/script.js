// AI Visuals Gallery JavaScript

const images = [
    {
        id: 'demo-intro-title',
        title: '🎬 Demo Introduction',
        description: 'Opening title card for demonstration video showcasing Context-Aware Creator extension.',
        prompt: 'Professional video title card with "Context-Aware Creator" text, Chrome extension logo, and flowing AI data streams. Clean, modern design for video introduction.',
        keywords: ['title', 'intro', 'professional', 'video'],
        demoUse: 'Video opening sequence'
    },
    {
        id: 'problem-statement',
        title: '😤 The Problem: Text Transformation Hassle',
        description: 'Visual showing the frustration of copy-paste workflows and switching between apps.',
        prompt: 'Split screen showing frustrated user copying text, switching apps, and pasting. Chaotic workflow with multiple browser tabs and applications. Represents the old way of text processing.',
        keywords: ['problem', 'frustration', 'workflow', 'chaos'],
        demoUse: 'Problem identification scene'
    },
    {
        id: 'solution-preview',
        title: '✨ The Solution: Context-Aware Creator',
        description: 'Clean interface showing the Chrome extension in action with right-click context menu.',
        prompt: 'Clean browser interface with selected text and elegant context menu showing AI transformation options. Professional, modern design highlighting the extension\'s simplicity.',
        keywords: ['solution', 'extension', 'interface', 'clean'],
        demoUse: 'Solution introduction'
    },
    {
        id: 'feature-expand-ideas',
        title: '🚀 Feature Demo: Expand Ideas',
        description: 'Before and after comparison showing brief text transformed into detailed content.',
        prompt: 'Split screen showing "AI will change education" transforming into detailed paragraph. Visual arrows and smooth transition effects. Professional presentation style.',
        keywords: ['expand', 'transformation', 'before-after', 'feature'],
        demoUse: 'Feature demonstration'
    },
    {
        id: 'feature-simplify-jargon',
        title: '🔍 Feature Demo: Simplify Jargon',
        description: 'Complex technical text being transformed into simple, understandable language.',
        prompt: 'Complex technical jargon on left side transforming into simple, clear explanation on right. Visual representation of complexity becoming clarity.',
        keywords: ['simplify', 'jargon', 'clarity', 'transformation'],
        demoUse: 'Feature demonstration'
    },
    {
        id: 'feature-action-items',
        title: '✅ Feature Demo: Find Action Items',
        description: 'Long meeting notes with the key action item highlighted and extracted.',
        prompt: 'Long text block with important action item being highlighted and extracted. Clean, professional interface showing AI\'s ability to find key tasks.',
        keywords: ['action', 'extraction', 'highlight', 'tasks'],
        demoUse: 'Feature demonstration'
    },
    {
        id: 'feature-generate-tweets',
        title: '🐦 Feature Demo: Generate Tweets',
        description: 'Long content being transformed into engaging, concise social media posts.',
        prompt: 'Long article or content transforming into short, engaging tweet with hashtags. Social media interface styling with character count.',
        keywords: ['tweet', 'social', 'concise', 'engagement'],
        demoUse: 'Feature demonstration'
    },
    {
        id: 'chrome-ai-power',
        title: '🧠 Powered by Chrome Built-in AI',
        description: 'Visualization of Gemini Nano processing happening locally on device.',
        prompt: 'Futuristic CPU chip labeled "Gemini Nano" with data streams flowing through it. Emphasis on local processing and privacy. High-tech, professional design.',
        keywords: ['AI', 'local', 'processing', 'Gemini'],
        demoUse: 'Technology explanation'
    },
    {
        id: 'privacy-security',
        title: '🔒 100% Private & Secure',
        description: 'Shield protecting user data with "No External Servers" messaging.',
        prompt: 'Protective shield around user data with "100% Local Processing" and "No Data Sent to Servers" text. Security and privacy focused design.',
        keywords: ['privacy', 'security', 'local', 'protection'],
        demoUse: 'Privacy assurance'
    },
    {
        id: 'workflow-comparison',
        title: '⚡ Old vs New Workflow',
        description: 'Side-by-side comparison of old copy-paste workflow vs new one-click solution.',
        prompt: 'Split screen: Left shows complex multi-step workflow with arrows and multiple apps. Right shows simple one-click solution. Clear visual comparison.',
        keywords: ['comparison', 'workflow', 'efficiency', 'simple'],
        demoUse: 'Workflow comparison'
    },
    {
        id: 'user-testimonial',
        title: '💬 Happy Users',
        description: 'Stylized representation of satisfied users with positive feedback.',
        prompt: 'Happy user silhouettes with speech bubbles containing positive feedback. Professional, clean design showing user satisfaction and success.',
        keywords: ['testimonial', 'satisfaction', 'users', 'feedback'],
        demoUse: 'Social proof'
    },
    {
        id: 'call-to-action',
        title: '📥 Get Started Today',
        description: 'Final call-to-action slide with download/installation instructions.',
        prompt: 'Professional call-to-action design with "Download Now" button, GitHub link, and installation steps. Clean, actionable design.',
        keywords: ['CTA', 'download', 'action', 'installation'],
        demoUse: 'Video conclusion'
    }
];

// Generate procedural image based on keywords and style
function generateProceduralImage(image) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Set 16:9 aspect ratio (1920x1080)
    canvas.width = 1920;
    canvas.height = 1080;
    
    // Create base gradient based on image type
    const gradient = createBaseGradient(ctx, canvas, image.keywords);
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Add visual elements based on keywords
    addVisualElements(ctx, canvas, image);
    
    // Add title and branding
    addTextElements(ctx, canvas, image);
    
    return canvas;
}

function createBaseGradient(ctx, canvas, keywords) {
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    
    if (keywords.includes('calm') || keywords.includes('peaceful')) {
        gradient.addColorStop(0, '#0a0e27');
        gradient.addColorStop(0.5, '#1a2f4a');
        gradient.addColorStop(1, '#2d4561');
    } else if (keywords.includes('chaos') || keywords.includes('overload')) {
        gradient.addColorStop(0, '#270a0e');
        gradient.addColorStop(0.5, '#4a1a2f');
        gradient.addColorStop(1, '#612d45');
    } else if (keywords.includes('technology') || keywords.includes('CPU')) {
        gradient.addColorStop(0, '#0e0a27');
        gradient.addColorStop(0.5, '#2f1a4a');
        gradient.addColorStop(1, '#452d61');
    } else {
        // Default gradient
        gradient.addColorStop(0, '#0a0e27');
        gradient.addColorStop(0.5, '#1a1f3a');
        gradient.addColorStop(1, '#2d3561');
    }
    
    return gradient;
}

function addVisualElements(ctx, canvas, image) {
    const keywords = image.keywords;
    
    // Add data streams
    if (keywords.includes('data') || keywords.includes('streams')) {
        drawDataStreams(ctx, canvas);
    }
    
    // Add network nodes
    if (keywords.includes('network') || keywords.includes('transformation')) {
        drawNetworkNodes(ctx, canvas);
    }
    
    // Add chaos elements
    if (keywords.includes('chaos') || keywords.includes('tangled')) {
        drawChaosElements(ctx, canvas);
    }
    
    // Add tech elements
    if (keywords.includes('CPU') || keywords.includes('chip')) {
        drawTechElements(ctx, canvas);
    }
    
    // Add bokeh lights
    if (keywords.includes('bokeh') || keywords.includes('calm')) {
        drawBokehLights(ctx, canvas);
    }
}

function drawDataStreams(ctx, canvas) {
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.3)';
    ctx.lineWidth = 2;
    
    for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height * (0.2 + i * 0.15));
        
        for (let x = 0; x < canvas.width; x += 50) {
            const y = canvas.height * (0.2 + i * 0.15) + Math.sin(x * 0.01 + i) * 30;
            ctx.lineTo(x, y);
        }
        
        ctx.stroke();
    }
}

function drawNetworkNodes(ctx, canvas) {
    ctx.fillStyle = 'rgba(0, 212, 255, 0.6)';
    
    const nodes = 8;
    for (let i = 0; i < nodes; i++) {
        const x = (canvas.width / (nodes + 1)) * (i + 1);
        const y = canvas.height / 2 + Math.sin(i * 0.8) * 100;
        
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();
        
        // Connect nodes
        if (i > 0) {
            const prevX = (canvas.width / (nodes + 1)) * i;
            const prevY = canvas.height / 2 + Math.sin((i - 1) * 0.8) * 100;
            
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.3)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(prevX, prevY);
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    }
}

function drawChaosElements(ctx, canvas) {
    ctx.strokeStyle = 'rgba(255, 100, 150, 0.4)';
    ctx.lineWidth = 1;
    
    for (let i = 0; i < 20; i++) {
        ctx.beginPath();
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        
        ctx.moveTo(startX, startY);
        
        for (let j = 0; j < 10; j++) {
            const x = startX + (Math.random() - 0.5) * 200;
            const y = startY + (Math.random() - 0.5) * 200;
            ctx.lineTo(x, y);
        }
        
        ctx.stroke();
    }
}

function drawTechElements(ctx, canvas) {
    // Draw circuit patterns
    ctx.strokeStyle = 'rgba(0, 212, 255, 0.4)';
    ctx.lineWidth = 1;
    
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    
    // Draw concentric rectangles
    for (let i = 1; i <= 5; i++) {
        const size = i * 60;
        ctx.strokeRect(centerX - size, centerY - size, size * 2, size * 2);
    }
    
    // Draw connecting lines
    ctx.beginPath();
    ctx.moveTo(centerX - 150, centerY);
    ctx.lineTo(centerX + 150, centerY);
    ctx.moveTo(centerX, centerY - 150);
    ctx.lineTo(centerX, centerY + 150);
    ctx.stroke();
}

function drawBokehLights(ctx, canvas) {
    for (let i = 0; i < 15; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const radius = Math.random() * 40 + 10;
        const opacity = Math.random() * 0.3 + 0.1;
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(0, 212, 255, ${opacity})`);
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)');
        
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
    }
}

function addTextElements(ctx, canvas, image) {
    // Add title
    ctx.fillStyle = '#00d4ff';
    ctx.font = 'bold 72px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(image.title, canvas.width / 2, canvas.height / 2 - 50);
    
    // Add subtitle
    ctx.fillStyle = '#a0a8cc';
    ctx.font = '36px Arial';
    ctx.fillText('AI Generated Visual', canvas.width / 2, canvas.height / 2 + 20);
    
    // Add watermark
    ctx.fillStyle = 'rgba(0, 212, 255, 0.3)';
    ctx.font = '24px Arial';
    ctx.fillText('Context-Aware Creator', canvas.width / 2, canvas.height - 50);
    
    // Add keywords
    ctx.fillStyle = 'rgba(160, 168, 204, 0.6)';
    ctx.font = '18px Arial';
    ctx.fillText(image.keywords.join(' • '), canvas.width / 2, canvas.height - 100);
}

function createImageCard(image) {
    return `
        <div class="image-card">
            <div class="image-placeholder" id="placeholder-${image.id}">
                <span class="placeholder-text">Demo Visual</span>
            </div>
            <h3 class="image-title">${image.title}</h3>
            <p class="image-description">${image.description}</p>
            <div class="demo-usage">
                <strong>🎬 Demo Usage:</strong> ${image.demoUse}
            </div>
            <div class="image-prompt">
                <strong>AI Prompt:</strong> ${image.prompt}
            </div>
            <div class="image-keywords">
                <strong>Keywords:</strong> ${image.keywords.join(', ')}
            </div>
            <button class="download-btn" onclick="downloadImage('${image.id}', '${image.title}')">
                🎬 Download for Video (1920x1080)
            </button>
        </div>
    `;
}

function downloadImage(imageId, title) {
    const image = images.find(img => img.id === imageId);
    if (!image) return;
    
    const canvas = generateProceduralImage(image);
    
    // Convert to blob and download
    canvas.toBlob(function(blob) {
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${imageId}.png`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, 'image/png');
}

function generatePreview(imageId) {
    const image = images.find(img => img.id === imageId);
    if (!image) return;
    
    const canvas = generateProceduralImage(image);
    canvas.style.width = '100%';
    canvas.style.height = '200px';
    canvas.style.objectFit = 'cover';
    canvas.style.borderRadius = '10px';
    
    const placeholder = document.getElementById(`placeholder-${imageId}`);
    if (placeholder) {
        placeholder.innerHTML = '';
        placeholder.appendChild(canvas);
    }
}

// Initialize gallery
document.addEventListener('DOMContentLoaded', function() {
    const gallery = document.getElementById('gallery');
    if (gallery) {
        gallery.innerHTML = images.map(createImageCard).join('');
        
        // Generate previews for all images
        setTimeout(() => {
            images.forEach(image => generatePreview(image.id));
        }, 100);
    }
});

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { images, downloadImage, generateProceduralImage };
}