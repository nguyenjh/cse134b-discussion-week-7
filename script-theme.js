GOOD_TEXT = "They're just silly little guys.";
EVIL_TEXT = "Usagi my goat."
GOOD_H1 = "Chiikawa and Hachiware Theme";
EVIL_H1 = "Usagi Theme";
GOOD_SRC = "assets/chiikawa.jpg";
GOOD_ALT = "chiikawa and hachiware";
EVIL_SRC = "assets/usagi.jpg";
EVIL_ALT = "usagi";
function setTheme(theme) {
    const root = document.documentElement;
    const my_text = document.getElementById('my-text');
    const my_h1 = document.getElementById('my-header');
    const my_img = document.getElementById('my-image');
    if (theme === 'evil'){
        root.style.setProperty('background', 'var(--bg-color-evil)');
        root.style.setProperty('color', 'var(--text-color-evil)');
        root.style.setProperty('font-family', 'var(--text-font-evil)');
        my_text.innerText = EVIL_TEXT;
        my_h1.innerText = EVIL_H1;
        my_img['src'] = EVIL_SRC;
        my_img['alt'] = EVIL_ALT;
    }
    else{
        root.style.setProperty('background', 'var(--bg-color-good)');
        root.style.setProperty('color', 'var(--text-color-good)');
        root.style.setProperty('font-family', 'var(--text-font-good)');
        my_text.innerText = GOOD_TEXT;
        my_h1.innerText = GOOD_H1;
        my_img['src'] = GOOD_SRC;
        my_img['alt'] = GOOD_ALT;
    }
}
function toggleTheme()
{
    const currTheme = localStorage.getItem('theme') || 'good';
    const newTheme = currTheme === 'good'? 'evil': 'good';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
}

function setSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme) {
        setTheme(savedTheme);
        document.getElementById('themeToggle').checked = (savedTheme === 'evil');
    }
}

document.addEventListener('DOMContentLoaded', setSavedTheme);