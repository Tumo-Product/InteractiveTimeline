let points = {
    "1": {
        type: "image"
    },
    "2": {
        type: "image"
    },
    "3": {
        type: "image"
    },
    "4": {
        type: "image"
    },
    "5": {
        type: "image"
    },
    "6": {
        type: "image"
    },
    "7": {
        type: "video"
    },
    "8": {
        type: "image"
    },
    "9": {
        type: "sliding_images"
    },
    "10": {
        type: "image"
    }
}

const onPageLoad = () => {
    let length = Object.keys(points).length;
    for (let key in points) {
        view.addPoint(key);
        view.addMedia(key, points[key]);
    }

    $(".inside").css("gap", `calc(${100 / length}% - 70px)`);

    loader.toggle();
}

$(onPageLoad);