document.getElementById('carousel').addEventListener('wheel', function(event) {
    event.preventDefault();
    this.scrollLeft += event.deltaY;
});