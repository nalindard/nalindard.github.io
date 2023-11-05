const left = document.getElementById('left')

window.onload = () => {
    const devMod = true
    if (!devMod) {
        left.classList.add('left-hide')
        setTimeout(() => { left.classList.remove('left-hide') }, 720)
    }
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


left.onmouseenter = () => left.classList.add('left-hide')
left.onmouseleave = () => left.classList.remove('left-hide')

document.querySelectorAll('.nav-link').forEach(l => l.onmouseover = e => { e.stopPropagation(); r.style.setProperty('--nav-index', e.target.dataset?.index); });
// document.onclick = () => document.body.requestFullscreen()