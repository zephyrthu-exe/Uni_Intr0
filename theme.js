
(function()
{
    const html = document.documentElement;
    const toggleBtn = document.getElementById('terminal');

    function updateIcon(theme)
    {
        if (!toggleBtn) return;
        toggleBtn.innerHTML = theme === 'terminal'
        ? '<i class="fa-solid fa-sun" style="align-items: center; font-size: 1.4em;" data-bs-toggle="tooltip" data-bs-placement="left" title="Light Theme"></i>'
        : '<i class="fa-solid fa-code" style="font-size: 1.2em;"></i>';
        toggleBtn.setAttribute('title', theme === 'terminal' ? 'Light Theme' : 'Terminal Theme');
    }

    const current = html.getAttribute('data-theme') || 'light';
    updateIcon(current);

    if (toggleBtn)
    {
        toggleBtn.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme') || 'light';
            const next = currentTheme === 'terminal' ? 'light' : 'terminal';

            html.setAttribute('data-theme', next);
            localStorage.setItem('theme', next);
            updateIcon(next);
        });
    }
})();
