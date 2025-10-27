// AI Visuals Gallery JavaScript

const images = [
    {
        id: 'title-card-background',
        title: 'Title Card Background',
        description: 'A minimalist, abstract background with glowing blue and teal data streams flowing gently across a dark canvas.',
        prompt: 'A minimalist, abstract background with glowing blue and teal data streams flowing gently from left to right on a dark, textured canvas. A central, soft focal point of light. Digital art, 16:9 aspect ratio.',
        keywords: ['abstract', 'data streams', 'minimalist', 'background']
    },
    {
        id: 'information-overload',
        title: 'Information Overload',
        description: 'A human silhouette overwhelmed by floating holographic windows of charts and text.',
        prompt: 'An abstract representation of information overload. A human silhouette seen from behind, looking at a chaotic explosion of floating holographic windows showing charts, text, and code. Glowing blue and teal data particles fill the air. Dark, futuristic, digital art, 16:9.',
        keywords: ['overload', 'holographic', 'chaos', 'data']
    },
    {
        id: 'stressed-user',
        title: 'Stressed User',
        description: 'A stylized person at a desk, frustrated by a complex screen.',
        prompt: 'A minimalist illustration of a person sitting at a futuristic desk, their head in their hands in a moment of frustration. The computer screen in front of them emits a complex, overwhelming glow of data. Stylized, faceless character, deep blue and teal palette, 16:9.',
        keywords: ['stress', 'frustration', 'desk', 'overwhelmed']
    },
    {
        id: 'focused-typing',
        title: 'Focused Typing',
        description: 'A close-up of hands typing on a glowing, futuristic keyboard.',
        prompt: 'A close-up, top-down view of hands typing on a sleek, minimalist keyboard. The keys are blank, but glowing teal light emanates from between them. The background is a clean, dark surface. Digital art, photorealistic, 16:9.',
        keywords: ['typing', 'keyboard', 'hands', 'focus']
    },
    {
        id: 'ai-transformation',
        title: 'AI Transformation',
        description: 'A visual of a simple data stream elegantly transforming into a complex, structured network.',
        prompt: 'An abstract background showing a single, simple data stream on the left transforming into a complex, beautiful, and structured network of glowing data on the right. A clear visual metamorphosis. Minimalist, glowing blue and teal on a dark canvas, digital art, 16:9.',
        keywords: ['transformation', 'network', 'evolution', 'AI']
    },
    {
        id: 'complex-jargon',
        title: 'Complex Jargon',
        description: 'A tangled, chaotic knot of glowing data threads, representing complexity.',
        prompt: 'An abstract visualization of complexity. A tangled, chaotic knot of glowing white and purple data threads, dense and difficult to follow. The knot is the central focus on a dark blue background. Digital art, 16:9.',
        keywords: ['complexity', 'tangled', 'knot', 'chaos']
    },
    {
        id: 'simplified-idea',
        title: 'Simplified Idea',
        description: 'The tangled knot from the previous image, now unraveled into a single, clean, elegant line.',
        prompt: 'An abstract visualization of simplicity and clarity. The tangled knot from the previous image has been unraveled into a single, clean, and elegant glowing teal line that flows smoothly across the screen. Minimalist, beautiful, digital art, 16:9.',
        keywords: ['simplicity', 'clarity', 'elegant', 'clean']
    },
    {
        id: 'aha-moment',
        title: 'Aha! Moment',
        description: 'A human silhouette with a glowing lightbulb next to their head, symbolizing understanding.',
        prompt: 'A stylized, minimalist illustration of a human silhouette in profile. A single, bright teal lightbulb icon glows brightly next to their head, representing a moment of understanding. Dark background, faceless character, digital art, 16:9.',
        keywords: ['understanding', 'lightbulb', 'insight', 'moment']
    },
    {
        id: 'gemini-nano-cpu',
        title: 'Gemini Nano CPU',
        description: 'A futuristic, glowing CPU chip with "Gemini Nano" subtly etched on it.',
        prompt: 'A futuristic, glowing teal CPU chip in the center of the screen. Intricate circuits and data streams are visible on its surface. The letters "Gemini Nano" are subtly etched onto the chip. Dark background, macro shot, digital art, 16:9.',
        keywords: ['CPU', 'chip', 'technology', 'Gemini Nano']
    },
    {
        id: 'privacy-shield',
        title: 'Privacy Shield',
        description: 'A glowing shield protecting the CPU, symbolizing on-device security.',
        prompt: 'A glowing, semi-transparent teal shield forming a protective bubble around the futuristic CPU from the previous image. The shield deflects small, red data particles, representing threats. A symbol of security and privacy. Digital art, 16:9.',
        keywords: ['privacy', 'security', 'shield', 'protection']
    },
    {
        id: 'productive-student',
        title: 'Productive Student',
        description: 'A stylized student looking happy and productive at their futuristic workspace.',
        prompt: 'A minimalist illustration of a student at a futuristic desk, looking up from their screen with a confident smile. Glowing, organized data streams flow around them. Faceless character, blue and teal palette, 16:9.',
        keywords: ['productivity', 'student', 'success', 'workspace']
    },
    {
        id: 'final-background',
        title: 'Final Background',
        description: 'A beautiful, calm, and inspiring abstract background with soft, out-of-focus lights.',
        prompt: 'A beautiful, calm, and inspiring abstract background. Soft, out-of-focus bokeh lights in shades of deep blue and teal drift peacefully. A feeling of accomplishment and clarity. Minimalist, digital art, 16:9.',
        keywords: ['calm', 'inspiring', 'bokeh', 'peaceful']
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
                <span class="placeholder-text">AI Generated Image</span>
            </div>
            <h3 class="image-title">${image.title}</h3>
            <p class="image-description">${image.description}</p>
            <div class="image-prompt">
                <strong>AI Prompt:</strong> ${image.prompt}
            </div>
            <div class="image-keywords">
                <strong>Keywords:</strong> ${image.keywords.join(', ')}
            </div>
            <button class="download-btn" onclick="downloadImage('${image.id}', '${image.title}')">
                📥 Download PNG (1920x1080)
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