window.addEventListener('scroll', function () {
    var featureItems = document.querySelectorAll('.feature-item');

    featureItems.forEach(function (item) {
        var position = item.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (position < windowHeight) {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }
    });
});