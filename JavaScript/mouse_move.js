document.addEventListener("mousemove", function(e) {
    const content = document.querySelector('.content');
    const cpu = document.querySelector('.cpu');

    cpu.style.right = 80 + e.pageX/2 + 'px';

    content.style.left = 80 + e.pageX/2.25 + 'px';
})
