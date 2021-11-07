document.addEventListener("mousemove", function(e) {
    const content = document.querySelector('.content');
    const cpu = document.querySelector('.cpu');

    cpu.style.right = 100 + e.pageX/2 + 'px';

    content.style.left = 100 + e.pageX/2 + 'px';
})
