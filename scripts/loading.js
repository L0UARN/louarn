window.addEventListener('load', () => {
    if (!document.cookie.includes('loadingDisplayed=1')) {
        document.cookie = `loadingDisplayed=1;expires=${Date.now() + 1000 * 60 * 30}`;

        let container = document.createElement('div');
        container.style.zIndex = '999';
        container.style.position = 'absolute';
        container.style.top = '0';
        container.style.left = '0';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.backgroundColor = '#222222';
        container.style.transition = 'opacity 100ms';
        container.style.padding = '1rem';

        let display = document.createElement('p');
        display.style.display = 'inline';
        display.style.fontFamily = 'Cascadia Code';
        display.style.fontSize = '1.5rem';
        display.style.color = '#FFFFFF';
        display.style.margin = '0';

        let cursor = document.createElement('p');
        cursor.style.fontFamily = 'Cascadia Code';
        cursor.style.fontSize = '1.5rem';
        cursor.style.color = '#FFFFFF';
        cursor.style.margin = '0 0 0 1rem';
        cursor.innerText = '_';

        container.appendChild(display);
        container.appendChild(cursor);

        let body = document.getElementsByTagName('body').item(0);
        body.appendChild(container);
        body.style.overflow = 'hidden';

        progressiveDisplay(display, cursor, container);
    }
});

async function progressiveDisplay(display, cursor, container) {
    let text = [
        'Welcome to Louarn\'s website !',
        '\n\nLoading resources...',
        '\n├ Phase 1: loading skills...',
        '\n│ ├ Hard skills : ok',
        '\n│ └ Soft skills : ok',
        '\n├ Phase 2: loading hobbies...',
        '\n│ ├ Gaming : ok',
        '\n│ ├ Music : ok',
        '\n│ └ Reading : ok',
        '\nDone loading !',
        '\n\nEntering website...\n'
    ]

    let current = [];

    let id1 = setInterval(() => {
        current = text.slice(0, current.length + 1);
        display.innerText = current.join('');

        if (current.length === text.length) {
            container.style.opacity = '0';
            clearInterval(id1);

            setTimeout(() => {
                container.parentElement.style.overflow = 'auto';
                container.remove();
            }, 100);
        }
    }, 200);

    setInterval(() => {
        cursor.style.display = (cursor.style.display === 'none') ? 'inline' : 'none';
    }, 100);
}
