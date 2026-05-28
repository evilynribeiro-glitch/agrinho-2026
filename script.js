// 1. Funcionalidade das Estatísticas Interativas
function revealStat(card) {
    const placeholder = card.querySelector('.stat-placeholder');
    const result = card.querySelector('.stat-result');
    
    if(result.classList.contains('hidden')) {
        result.classList.remove('hidden');
        placeholder.classList.add('hidden');
    } else {
        result.classList.add('hidden');
        placeholder.classList.remove('hidden');
    }
}

// 2. Alternador de Tema (Claro / Escuro)
const themeBtn = document.getElementById('btn-theme');
themeBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.body.removeAttribute('data-theme');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
});

// 3. Ajuste de Tamanho da Letra
let currentFontSize = 16;
const htmlElement = document.documentElement;

document.getElementById('btn-font-increase').addEventListener('click', () => {
    if(currentFontSize < 24) { // Limite máximo para não quebrar o layout
        currentFontSize += 2;
        htmlElement.style.setProperty('--base-font-size', currentFontSize + 'px');
        htmlElement.style.fontSize = currentFontSize + 'px';
    }
});

document.getElementById('btn-font-decrease').addEventListener('click', () => {
    if(
