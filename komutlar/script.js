// Intersection Observer kullanarak komutların belirli bir bölgeye gelince görünmesini sağlayalım
document.addEventListener("DOMContentLoaded", function() {
    var commandItems = document.querySelectorAll(".command-item");
    var options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    var observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("appear");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    commandItems.forEach(function(item) {
        observer.observe(item);
    });
});
