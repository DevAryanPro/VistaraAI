lucide.createIcons();

const darkModeToggleMobile = document.getElementById('dark-mode-toggle-mobile');
const darkModeToggleDesktop = document.getElementById('dark-mode-toggle-desktop');

const isDarkMode = localStorage.getItem('darkMode') === 'true';
if (isDarkMode) {
    document.documentElement.classList.add('dark');
}

function toggleDarkMode() {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
    lucide.createIcons();
}

darkModeToggleMobile.addEventListener('click', toggleDarkMode);
darkModeToggleDesktop.addEventListener('click', toggleDarkMode);

const mobileMenuButton = document.getElementById('mobile-menu-button');
const closeMenuButton = document.getElementById('close-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.remove('hidden');
});

closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
});

window.addEventListener('click', (event) => {
    if (event.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
    }
});

document.getElementById('image-generation-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const prompt = document.getElementById('prompt').value;
    const negativePrompt = document.getElementById('negative-prompt').value;
    const style = document.getElementById('style').value;
    const aspectRatio = document.getElementById('aspect-ratio').value;
    
    if (!prompt.trim()) {
        showError('Please enter a prompt');
        return;
    }
    
    const generateBtn = document.getElementById('generate-btn');
    const generateText = document.getElementById('generate-text');
    const loadingSpinner = document.getElementById('loading-spinner');
    const resultContainer = document.getElementById('result-container');
    const errorMessage = document.getElementById('error-message');
    
    resultContainer.classList.add('hidden');
    errorMessage.classList.add('hidden');
    
    generateText.classList.add('hidden');
    loadingSpinner.classList.remove('hidden');
    generateBtn.disabled = true;
    
    try {
        const response = await fetch('https://aiart-zroo.onrender.com/api/generate', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                video_description: prompt,
                negative_prompt: negativePrompt,
                style_preset: style,
                aspect_ratio: aspectRatio,
                output_format: 'png',
                seed: 0
            })
        });
        
        if (!response.ok) {
            throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        
        const data = await response.json();
        
        if (data.direct_url) {
            const imageUrl = data.direct_url.trim();
            
            if (!imageUrl) {
                throw new Error('No image URL found in response');
            }
            
            const generatedImage = document.getElementById('generated-image');
            const downloadLink = document.getElementById('download-link');
            
            generatedImage.src = imageUrl;
            downloadLink.href = imageUrl;
            resultContainer.classList.remove('hidden');
            
            resultContainer.scrollIntoView({ behavior: 'smooth' });
        } else {
            throw new Error(data.message || 'Failed to generate image');
        }
    } catch (error) {
        console.error('Error:', error);
        showError(`Error: ${error.message}`);
    } finally {
        generateText.classList.remove('hidden');
        loadingSpinner.classList.add('hidden');
        generateBtn.disabled = false;
    }
});

function showError(message) {
    const errorMessage = document.getElementById('error-message');
    const errorText = document.getElementById('error-text');
    
    errorText.textContent = message;
    errorMessage.classList.remove('hidden');
}
