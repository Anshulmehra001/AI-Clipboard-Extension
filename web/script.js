// AI Visuals Gallery JavaScript

const images = [
    {
        id: 'title-card',
        title: '🎬 1. Title Card',
        description: 'Sleek, minimalist desk in dark office with futuristic keyboard and glowing holographic "Context-Aware Creator" logo.',
        prompt: 'A cinematic wide shot of a sleek, minimalist desk in a dark, modern office at night. A futuristic, backlit keyboard sits on the desk. A glowing holographic logo for "Context-Aware Creator" is projected in the air above the keyboard. Ultra-realistic CGI, dramatic lighting, deep navy blue and electric teal color palette. --ar 16:9 --no ugly, blurry, deformed, watermark.',
        keywords: ['cinematic', 'office', 'holographic', 'logo'],
        demoUse: 'Video opening sequence',
        section: 'Part 1: The Hook'
    },
    {
        id: 'information-overload',
        title: '😤 2. The Problem: Information Overload',
        description: 'Person overwhelmed as dozens of glowing holographic windows erupt from computer screen, filling dark room.',
        prompt: 'A person is seen from behind, sitting in a chair in a dark office, overwhelmed as dozens of glowing, translucent holographic windows showing abstract charts and code erupt from their computer screen, filling the room with a chaotic blue light. Ultra-realistic CGI, cinematic, dramatic angle. --ar 16:9 --no ugly, blurry, deformed, watermark, text, signature.',
        keywords: ['overload', 'chaos', 'holographic', 'overwhelmed'],
        demoUse: 'Problem identification scene',
        section: 'Part 1: The Hook'
    },
    {
        id: 'stressed-user',
        title: '😤 3. The Problem: Stressed User',
        description: 'Cinematic close-up of person\'s face illuminated by computer screen, showing frustration and exhaustion.',
        prompt: 'A cinematic close-up on a person\'s face, illuminated only by the cold, blue light of a computer screen in a dark room. Their expression is one of deep frustration and exhaustion, eyes strained. The screen\'s reflection shows complex, confusing data. Ultra-realistic CGI, shallow depth of field. --ar 16:9 --no ugly, blurry, deformed, watermark, text, signature.',
        keywords: ['stress', 'frustration', 'close-up', 'exhaustion'],
        demoUse: 'Problem identification scene',
        section: 'Part 1: The Hook'
    },
    {
        id: 'ai-transformation-visualized',
        title: '✨ 4. The Solution: AI Transformation Visualized',
        description: 'Glowing holographic interface showing simple sentence transforming into detailed paragraph with connecting line.',
        prompt: 'A glowing holographic user interface floating in a dark room. On the left side, the simple sentence "we should focus on marketing" is written in plain white text. On the right side, a long, well-structured paragraph is highlighted in glowing electric teal. A glowing line connects the two, showing a transformation. Cinematic, high-tech. --ar 16:9 --no ugly, blurry, deformed, watermark, signature.',
        keywords: ['transformation', 'holographic', 'interface', 'AI'],
        demoUse: 'Solution demonstration',
        section: 'Part 2: The Solution & Features'
    },
    {
        id: 'simplifying-jargon',
        title: '🔍 5. Feature: Simplifying Jargon',
        description: 'Futuristic screen showing dense technical jargon being scanned and transformed into simple, clear sentence.',
        prompt: 'A cinematic close-up of a futuristic, translucent glass screen showing a paragraph of dense, technical jargon glowing faintly white. A glowing teal scanner highlights the text, which then transforms into a single, simple sentence written in bright, clear electric teal. Dark, modern office background. --ar 16:9 --no ugly, blurry, deformed, watermark, signature.',
        keywords: ['jargon', 'simplification', 'scanner', 'transformation'],
        demoUse: 'Feature demonstration',
        section: 'Part 2: The Solution & Features'
    },
    {
        id: 'aha-moment',
        title: '💡 6. Feature: "Aha!" Moment',
        description: 'Person\'s face transforming from frustration to understanding, illuminated by soft teal glow from screen.',
        prompt: 'A person looking at their computer screen in a dark room. Their face, which was previously tense, is now illuminated with a soft, warm teal glow from the screen, and a subtle smile of relief and understanding spreads across their face. Cinematic, emotional, shallow depth of field. Ultra-realistic CGI. --ar 16:9 --no ugly, blurry, deformed, watermark.',
        keywords: ['understanding', 'relief', 'transformation', 'emotional'],
        demoUse: 'Feature demonstration',
        section: 'Part 2: The Solution & Features'
    },
    {
        id: 'gemini-nano-cpu',
        title: '🧠 7. The Technology: Gemini Nano CPU',
        description: 'Extreme macro shot of futuristic CPU with glowing electric teal data streams pulsing through circuits.',
        prompt: 'Extreme macro shot of a futuristic CPU processor. Glowing electric teal data streams pulse through its intricate, silver circuits. Dramatic lighting, sharp focus, dark background. Ultra-realistic CGI, cinematic. --ar 16:9 --no ugly, blurry, deformed, watermark, text.',
        keywords: ['CPU', 'macro', 'circuits', 'technology'],
        demoUse: 'Technology explanation',
        section: 'Part 3: The Technology'
    },
    {
        id: 'privacy-shield',
        title: '🔒 8. The Technology: Privacy Shield',
        description: 'Futuristic CPU protected by shimmering teal energy shield deflecting incoming red digital particles.',
        prompt: 'A cinematic shot of a futuristic CPU. A shimmering, semi-transparent teal energy shield materializes around it, deflecting incoming red digital particles that represent threats. A powerful visualization of on-device data protection. Ultra-realistic CGI. --ar 16:9 --no ugly, blurry, deformed, watermark, text.',
        keywords: ['privacy', 'shield', 'protection', 'security'],
        demoUse: 'Privacy assurance',
        section: 'Part 3: The Technology'
    },
    {
        id: 'productive-people',
        title: '🎯 9. The Result: Productive People',
        description: 'Modern collaborative workspace at night with diverse team working happily, holographic interfaces above desks.',
        prompt: 'A cinematic wide shot of a modern, collaborative workspace at night. A diverse team of people are working at their desks, smiling and engaged. Clean, organized holographic user interfaces float above each desk, showing their successful work. A sense of calm productivity. Ultra-realistic CGI. --ar 16:9 --no ugly, blurry, deformed, watermark, text.',
        keywords: ['productivity', 'collaboration', 'success', 'team'],
        demoUse: 'Success demonstration',
        section: 'Part 4: The Outro'
    },
    {
        id: 'final-background',
        title: '🎬 10. Final Background',
        description: 'Serene modern office at night with soft glowing teal and blue bokeh lights from city outside window.',
        prompt: 'A beautiful and serene cinematic background. A dark, modern, out-of-focus office space at night, with soft, glowing teal and blue bokeh lights from the city visible through a large window. A sense of calm and accomplishment. Ultra-realistic CGI. --ar 16:9 --no ugly, blurry, deformed, watermark, text.',
        keywords: ['serene', 'office', 'bokeh', 'accomplishment'],
        demoUse: 'Video conclusion',
        section: 'Part 4: The Outro'
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