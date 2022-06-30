document.addEventListener('DOMContentLoaded', () => {
    const mapForm = document.getElementById("mapForm");
    mapForm.addEventListener('click', (e) => {
        e.stopPropagation();
    });
});


