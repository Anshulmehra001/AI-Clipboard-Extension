// AI Visuals Gallery JavaScript

const images = [
    {
        id: 'title-card-background',
        title: '🎬 Title Card Background',
        description: 'Cinematic title card background with gentle waves of glowing electric teal and blue light particles.',
        prompt: 'Cinematic title card background, a vast and minimalist abstract space. Gentle waves of glowing electric teal and blue light particles drift across a deep navy blue textured canvas. A soft, out-of-focus central glow. Digital art, futuristic. --ar 16:9 --no text, words, logos.',
        keywords: ['cinematic', 'title', 'background', 'minimalist'],
        demoUse: 'Video opening sequence',
        section: 'Part 1: The Hook'
    },
    {
        id: 'information-overload',
        title: '😤 The Problem: Information Overload',
        description: 'A faceless human silhouette overwhelmed by chaotic storm of floating holographic windows.',
        prompt: 'Information overload visualized. A faceless human silhouette seen from behind, dwarfed by a chaotic storm of floating holographic windows showing abstract charts and glowing lines of code. Dynamic blue and teal data particles fill the air. Cinematic, futuristic, digital art. --ar 16:9 --no text, words, logos.',
        keywords: ['overload', 'chaos', 'holographic', 'silhouette'],
        demoUse: 'Problem identification scene',
        section: 'Part 1: The Hook'
    },
    {
        id: 'stressed-user',
        title: '😤 The Problem: Stressed User',
        description: 'Emotional burnout from technology showing person frustrated at futuristic desk.',
        prompt: 'Emotional burnout from technology. A minimalist illustration of a person at a futuristic desk, their head buried in their hands in a moment of quiet frustration. The screen casts an overwhelming, complex glow of data onto them. Stylized, faceless character, deep navy and teal color palette. --ar 16:9 --no text, typography.',
        keywords: ['stress', 'frustration', 'burnout', 'overwhelmed'],
        demoUse: 'Problem identification scene',
        section: 'Part 1: The Hook'
    },
    {
        id: 'focused-typing',
        title: '✨ The Solution: Focused Typing',
        description: 'Cinematic close-up of hands typing on sleek, minimalist keyboard with glowing teal light.',
        prompt: 'The moment of creation. A cinematic close-up, top-down view of hands typing on a sleek, minimalist keyboard. The keys are unmarked, glowing with soft teal light from underneath. The background is a clean, dark, reflective surface. Photorealistic details, digital art. --ar 16:9 --no logos.',
        keywords: ['typing', 'creation', 'keyboard', 'cinematic'],
        demoUse: 'Solution introduction',
        section: 'Part 2: The Solution'
    },
    {
        id: 'ai-transformation',
        title: '✨ The Solution: AI Transformation',
        description: 'Visual metaphor showing simple data stream transforming into complex, beautiful network.',
        prompt: 'Visual metaphor for AI transformation. A single, simple data stream on the left transforms into a complex, beautiful, and structured network of glowing data on the right. A clear visual metamorphosis. Minimalist, glowing electric teal on a dark navy canvas, digital art. --ar 16:9 --no text, words.',
        keywords: ['transformation', 'metamorphosis', 'network', 'evolution'],
        demoUse: 'Solution demonstration',
        section: 'Part 2: The Solution'
    },
    {
        id: 'complex-jargon',
        title: '🔍 Feature: Complex Jargon',
        description: 'Abstract visualization of complexity as dense, chaotic knot of glowing data threads.',
        prompt: 'The tangled web of jargon. An abstract visualization of complexity. A dense, chaotic knot of glowing white and purple data threads. The knot is the central focus on a dark navy blue background. Digital art, futuristic. --ar 16:9 --no text, typography.',
        keywords: ['complexity', 'jargon', 'tangled', 'knot'],
        demoUse: 'Feature demonstration - Before',
        section: 'Part 3: The Features'
    },
    {
        id: 'simplified-idea',
        title: '🔍 Feature: Simplified Idea',
        description: 'The clarity of simplification - tangled knot unraveled into single, elegant flowing line.',
        prompt: 'The clarity of simplification. The tangled knot from the previous image has been unraveled into a single, clean, and elegant glowing teal line that flows smoothly across the screen. Minimalist, beautiful, digital art. --ar 16:9 --no text, words.',
        keywords: ['simplicity', 'clarity', 'elegant', 'unraveled'],
        demoUse: 'Feature demonstration - After',
        section: 'Part 3: The Features'
    },
    {
        id: 'aha-moment',
        title: '💡 Feature: Aha Moment',
        description: 'The moment of understanding with human silhouette and bright glowing lightbulb.',
        prompt: 'The moment of understanding. A stylized, minimalist illustration of a human silhouette in profile. A single, bright electric teal lightbulb icon glows brightly beside their head. Dark background, faceless character, digital art. --ar 16:9 --no text, logos.',
        keywords: ['understanding', 'insight', 'lightbulb', 'moment'],
        demoUse: 'Feature demonstration',
        section: 'Part 3: The Features'
    },
    {
        id: 'gemini-nano-cpu',
        title: '🧠 Technology: Gemini Nano CPU',
        description: 'Futuristic glowing CPU chip with "Gemini Nano" etched on surface and intricate circuits.',
        prompt: 'The heart of the AI. A futuristic, glowing teal CPU chip in the center of the screen. Intricate circuits and glowing data paths are visible on its surface. The words "Gemini Nano" are subtly etched onto the chip in a modern, clean font. Dark background, cinematic macro shot, digital art. --ar 16:9.',
        keywords: ['CPU', 'technology', 'Gemini', 'circuits'],
        demoUse: 'Technology explanation',
        section: 'Part 4: The Technology'
    },
    {
        id: 'privacy-shield',
        title: '🔒 Technology: Privacy Shield',
        description: 'Glowing shield forming protective bubble around CPU, deflecting red data particles.',
        prompt: 'On-device privacy visualized. A glowing, semi-transparent teal shield forming a protective bubble around the futuristic CPU from the previous image. The shield deflects small, abstract red data particles representing threats. A clear symbol of security. Digital art. --ar 16:9 --no text, words, logos.',
        keywords: ['privacy', 'security', 'shield', 'protection'],
        demoUse: 'Privacy assurance',
        section: 'Part 4: The Technology'
    },
    {
        id: 'productive-people',
        title: '🎯 Result: Productive People',
        description: 'Minimalist illustration of confident student with organized data streams representing productivity.',
        prompt: 'Human potential unlocked. A minimalist illustration of a student at a futuristic desk, looking up from their screen with a confident smile. Organized streams of glowing data flow around them, representing productivity and clarity. Faceless character, deep blue and teal palette, digital art. --ar 16:9 --no text, words.',
        keywords: ['productivity', 'success', 'confidence', 'organized'],
        demoUse: 'Success demonstration',
        section: 'Part 5: The Outro'
    },
    {
        id: 'final-background',
        title: '🎬 Final Background',
        description: 'Beautiful, calm abstract background with soft bokeh lights conveying accomplishment.',
        prompt: 'Final title card background. A beautiful, calm, and inspiring abstract image. Soft, out-of-focus bokeh lights in shades of deep blue and electric teal drift peacefully across a dark canvas. A feeling of accomplishment. Minimalist, digital art. --ar 16:9 --no text, words, logos.',
        keywords: ['calm', 'inspiring', 'bokeh', 'accomplishment'],
        demoUse: 'Video conclusion',
        section: 'Part 5: The Outro'
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
                <span class="placeholder-text">Cinematic Visual</span>
            </div>
            <h3 class="image-title">${image.title}</h3>
            <div class="section-badge">
                <strong>📽️ ${image.section}</strong>
            </div>
            <p class="image-description">${image.description}</p>
            <div class="demo-usage">
                <strong>🎬 Demo Usage:</strong> ${image.demoUse}
            </div>
            <div class="image-prompt">
                <strong>🎨 Professional Prompt:</strong> ${image.prompt}
            </div>
            <div class="image-keywords">
                <strong>🏷️ Keywords:</strong> ${image.keywords.join(', ')}
            </div>
            <button class="download-btn" onclick="downloadImage('${image.id}', '${image.title}')">
                🎬 Download Cinematic Visual (1920x1080)
            </button>
            <button class="copy-prompt-btn" onclick="copyPrompt('${image.id}')">
                📋 Copy AI Prompt
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

function copyPrompt(imageId) {
    const image = images.find(img => img.id === imageId);
    if (!image) return;
    
    navigator.clipboard.writeText(image.prompt).then(() => {
        // Show temporary success message
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✅ Copied!';
        button.style.background = 'linear-gradient(45deg, #28a745, #20c997)';
        
        setTimeout(() => {
            button.textContent = originalText;
            button.style.background = 'linear-gradient(45deg, #6c757d, #495057)';
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy prompt:', err);
    });
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { images, downloadImage, generateProceduralImage, copyPrompt };
}