let imagesLoaded = 0;
let points;
let activatedYear = -1;

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const onPageLoad = async () => {
    points = await network.getData();

    for (let key in points) {
        view.addMedia(key, points[key]);
    }

    $(".wrapper").mouseenter(async function () {  
        view.activate($(this));
        activatedYear = $(this);
    }).mouseleave(function () {
        view.deactivate($(this));
    });

    $(".circle").click(function () {
        view.toggleText();
    });
}

const imageLoaded = () => {
    imagesLoaded++;
    if (imagesLoaded === Object.keys(points).length) {
        loader.toggle();
    }
}

$(onPageLoad);