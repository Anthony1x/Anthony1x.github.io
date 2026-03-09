const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
const langToggle = document.querySelector<HTMLButtonElement>('#lang-toggle');
const discordBtn = document.querySelector<HTMLAnchorElement>('.discord');
const notification = document.querySelector<HTMLDivElement>('#copy-notification');
const root = document.documentElement;
const headline = document.querySelector<HTMLHeadingElement>('#headline');

// Set theme toggle button icon based on current theme
if (themeToggle && root.classList.contains('light-theme')) {
    themeToggle.textContent = '☀️';
}

themeToggle?.addEventListener('click', () => {
    root.classList.toggle('light-theme');
    const isLight = root.classList.contains('light-theme');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
});

langToggle?.addEventListener('click', () => {
    const jp = headline?.querySelector<HTMLSpanElement>('.jp');
    const en = headline?.querySelector<HTMLSpanElement>('.en');

    if (jp && en) {
        if (jp.style.display === 'none') {
            jp.style.display = 'inline';
            en.style.display = 'none';
            langToggle.textContent = '🇯🇵';
            document.title = "Anthonyだよ";
        } else {
            jp.style.display = 'none';
            en.style.display = 'inline';
            langToggle.textContent = '🇬🇧';
            document.title = "I'm Anthony";
        }
    }
});

discordBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const username = "anthonyx";

    navigator.clipboard.writeText(username).then(() => {
        notification.classList.add('show');
        setTimeout(() => {
            notification.classList.remove('show');
        }, 2000);
    });
});
