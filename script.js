function handleClickLink(event) {
    const block = event.target.dataset.block;
    console.log(block);
    document.getElementById(block).scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
}

document.querySelectorAll('.link').forEach(el => {
    el.addEventListener('click', handleClickLink);
});