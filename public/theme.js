
(function()
{
    const html = document.documentElement;
    const toggleBtn = document.getElementById('terminal');

    function normalizeTheme(theme)
    {
        return theme === 'terminal' ? 'dark' : theme;
    }

    function updateIcon(theme)
    {
        if (!toggleBtn) return;
        const activeTheme = normalizeTheme(theme);

        toggleBtn.innerHTML = activeTheme === 'dark'
        ? '<i class="fa-solid fa-sun" aria-hidden="true" style="font-size: 1.25em;"></i>'
        : '<i class="fa-solid fa-moon" aria-hidden="true" style="font-size: 1.15em;"></i>';
        toggleBtn.setAttribute('title', activeTheme === 'dark' ? 'Light Theme' : 'Dark Theme');
        toggleBtn.setAttribute('aria-label', activeTheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    }

    const current = normalizeTheme(html.getAttribute('data-theme') || 'light');
    html.setAttribute('data-theme', current);
    localStorage.setItem('theme', current);
    updateIcon(current);

    if (toggleBtn)
    {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = normalizeTheme(html.getAttribute('data-theme') || 'light');
            const next = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateIcon(next);
        });
    }

})();
