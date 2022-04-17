window.addEventListener('load', () => {
    for (let e of document.getElementsByClassName('timeSince')) {
        let start = Date.parse(e.textContent);
        update(e, start);
    }
});

async function update(field, start) {
    setInterval(() => {
        let ellapsed = String((Date.now() - start) / (1000 * 60 * 60 * 24 * 365));
        field.innerHTML = ellapsed.length >= 10 ? ellapsed.substring(0, 10) : ellapsed;
    }, 1000);
}