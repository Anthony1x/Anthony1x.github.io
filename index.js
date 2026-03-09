var themeToggle = document.querySelector('#theme-toggle');
var langToggle = document.querySelector('#lang-toggle');
var discordBtn = document.querySelector('.discord');
var notification = document.querySelector('#copy-notification');
var root = document.documentElement;
var headline = document.querySelector('#headline');
// Set theme toggle button icon based on current theme
if (themeToggle && root.classList.contains('light-theme')) {
    themeToggle.textContent = '☀️';
}
themeToggle === null || themeToggle === void 0 ? void 0 : themeToggle.addEventListener('click', function () {
    root.classList.toggle('light-theme');
    var isLight = root.classList.contains('light-theme');
    themeToggle.textContent = isLight ? '☀️' : '🌙';
});
langToggle === null || langToggle === void 0 ? void 0 : langToggle.addEventListener('click', function () {
    var jp = headline === null || headline === void 0 ? void 0 : headline.querySelector('.jp');
    var en = headline === null || headline === void 0 ? void 0 : headline.querySelector('.en');
    if (jp && en) {
        if (jp.style.display === 'none') {
            jp.style.display = 'inline';
            en.style.display = 'none';
            langToggle.textContent = '🇯🇵';
            document.title = "Anthonyだよ";
        }
        else {
            jp.style.display = 'none';
            en.style.display = 'inline';
            langToggle.textContent = '🇬🇧';
            document.title = "I'm Anthony";
        }
    }
});
discordBtn === null || discordBtn === void 0 ? void 0 : discordBtn.addEventListener('click', function (e) {
    e.preventDefault();
    var username = "anthonyx";
    navigator.clipboard.writeText(username).then(function () {
        notification.classList.add('show');
        setTimeout(function () {
            notification.classList.remove('show');
        }, 2000);
    });
});
