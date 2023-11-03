window.onload = () => {

}

const r = document.querySelector(':root')

document.onmousemove = e => {
    r.style.setProperty('--x', e.x);
    r.style.setProperty('--y', e.y);
}

function setTheme() {
    // if (localStorage.getItem('theme') === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    if (localStorage.getItem('theme') === 'dark') {
        r.style.setProperty('--bg', 'black');
        r.style.setProperty('--accent', ' blue');
        r.style.setProperty('--text', ' white');
    }

    // localStorage.setItem('theme', 'dark')
    // alert(localStorage.getItem('theme'))
}

const left = document.getElementById('left')

left.onmouseenter = () => left.classList.add('left-hide')
left.onmouseleave = () => left.classList.remove('left-hide')

document.querySelectorAll('.nav-link').forEach(l => l.onmouseover = e => {e.stopPropagation(); r.style.setProperty('--nav-index', e.target.dataset?.index); console.log(e.target.dataset?.index)});