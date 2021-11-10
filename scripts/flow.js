let points = {
    "1999": {
        type: "image",
        image: "images/smart gallery3.png",
    },
    "1400": {
        type: "image",
        image: "images/smart gallery4.png"
    },
    "1300": {
        type: "image",
        image: "images/smart gallery5.png",
    },
    "1200": {
        type: "image",
        image: "images/smart gallery6.png"
    },
    "1100": {
        type: "image",
        image: "images/smart gallery5.png"
    },
    "1000": {
        type: "image",
        image: "images/smart gallery3.png"
    }
}

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const onPageLoad = () => {
    for (let key in points) {
        view.addMedia(key, points[key]);
    }

    $(".wrapper").mouseenter(function () {
        $(".wrapper p").css("opacity", 0);
        $(this).addClass("active");
    }).mouseleave(function () {
        $(".wrapper p").css("opacity", 1);
        $(this).removeClass("active");
    });

    loader.toggle();
}

$(onPageLoad);