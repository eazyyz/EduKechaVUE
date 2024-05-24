document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.getElementById('burger-checkbox');
    var menuBackground = document.querySelector('.menu_background');

    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            menuBackground.style.display = 'block';
        } else {
            menuBackground.style.display = 'none';
        }
    });
});