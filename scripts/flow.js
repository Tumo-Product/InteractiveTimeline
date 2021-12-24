let imagesLoaded = 0;
let points;
let activatedYear = -1;

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const onPageLoad = async () => {
    let data    = await network.getData();
    points      = data.points;

    for (let i = 0; i < points.length; i++) {
        view.addMedia(points[i].key, points[i]);
    }

    $(".wrapper").mouseenter(async function () {  
        activatedYear = $(this);
        view.activate($(this));
    }).mouseleave(function () {
        activatedYear = -1;
        view.deactivate($(this));
    });

    $(".circle").click(function () {
        view.toggleText();
    });
}

const imageLoaded = () => {
    imagesLoaded++;
    if (imagesLoaded === points.length) {
        loader.toggle();
    }
}

$(onPageLoad);