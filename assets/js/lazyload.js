function isIE() {
    return navigator.appName == 'Microsoft Internet Explorer' || !!(navigator.userAgent.match(/Trident/) || navigator.userAgent.match(/rv:11/)) || (typeof $.browser !== "undefined" && $.browser.msie == 1);
}

function isBroswerSupportIntersection() {
    return 'IntersectionObserver' in window;
}

$(document).ready(function () {
    if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || isIE() ||
        /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || !isBroswerSupportIntersection()
    ) {
        $(".lazy-load").each(function () {
            $(this).attr('src', $(this).data('data-src'));
        });
    } else {
        var images = document.querySelectorAll(".lazy-load");
        if (images != null) {
            const preloadImage = function (img) {
                const src = img.getAttribute("data-src");
                if (!src)
                    return;
                img.src = src;
                img.removeAttribute('data-src');
            }

            let options = {
                threshold: 0.75,
            }

            const imgObserver = new IntersectionObserver(function (entries, imgObserver) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting)
                        return;

                    preloadImage(entry.target);
                    imgObserver.unobserve(entry.target);
                });
            }, options);

            images.forEach(function (image) {
                imgObserver.observe(image);
            });
        }
    }
});