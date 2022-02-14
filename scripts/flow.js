let imagesLoaded = 0;
let activatedYear = -1;
let points;

let language    = "";
let id          = "";

let imagesCount = 0;

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const onPageLoad = async () => {
    let data    = await network.getData();
    language    = data.data.language;
    points      = data.data.set.points;
    id          = data.data._id;

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

    $(".circle").click(view.toggleText);
    $(".iconBased .key").click(view.toggleText);
}

const imageLoaded = () => {
    imagesLoaded++;
    if (imagesLoaded === points.length) {
        loader.toggle();
    }
}

$(onPageLoad);