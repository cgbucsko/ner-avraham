function handleClickLink(event) {
    const block = event.target.dataset.block;
    document.getElementById(block).scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

document.querySelectorAll('.link').forEach(el => {
    el.addEventListener('click', handleClickLink);
});

let waypoint = new Waypoint({
    element: document.getElementById('mission'),
    handler: function(direction) {
        const nav = document.getElementById('nav');
        if (direction === 'down') {
            nav.classList.add('sticky');
            console.log('waypoint hit');
        } else {
            nav.classList.remove('sticky');
        }
    },
    offset: 65
});