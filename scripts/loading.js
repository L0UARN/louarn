window.addEventListener('load', () => {
    let container = document.createElement('div');
    container.style.zIndex = '999';
    container.style.position = 'absolute';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.backgroundColor = '#222222';
    container.style.transition = 'opacity 100ms';

    let display = document.createElement('p');
    display.style.fontFamily = 'Cascadia Code';
    display.style.fontSize = '1.5rem';
    display.style.color = '#FFFFFF';
    display.style.margin = '1rem';

    container.appendChild(display);
    document.getElementsByTagName('body').item(0).appendChild(container);

    progressiveDisplay(display, container);
});

async function progressiveDisplay(display, container) {
    let text = "Welcome to Louarn's website!\n\n"
        + "Loading resources...\n"
        + "├ Phase 1: loading skills...\n"
        + "│ ├ Hard skills : ok\n"
        + "│ ├ Soft skills : ok\n"
        + "│ └ Mad g@m3r skillz : ok\n"
        + "├ Phase 2: loading hobbies...\n"
        + "│ ├ Gaming : ok\n"
        + "│ ├ Music : ok\n"
        + "│ └ Reading : ok\n"
        + "Done loading !\n\n"
        + "Entering website...\n";

    let current = '';

    let id = setInterval(() => {
        current = text.substring(0, current.length + 1);
        display.innerText = current;

        if (current.length === text.length) {
            container.style.opacity = '0';
            clearInterval(id);

            setTimeout(() => {
                container.remove();
            }, 100);
        }
    }, 16);
}
