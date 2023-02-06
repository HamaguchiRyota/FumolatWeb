const btn = document.querySelector("#btn-dark-mode");

//OS側の設定判定
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const darkModeOn = darkModeMediaQuery.matches;

darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode-settings', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('dark-mode-settings', 'light');
    }
});

//チェックボックス切り替え判定
btn.addEventListener("change", () => {
    if (btn.checked === true) {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark-mode-settings', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        localStorage.setItem('dark-mode-settings', 'light');
    }
});

//ローカルストレージ判定
if (localStorage.getItem('dark-mode-settings') === 'dark') {
    document.body.classList.add('dark-mode');
    btn.checked = true;
} else if (localStorage.getItem('dark-mode-settings') === 'light') {
    document.body.classList.add('light-mode');
}