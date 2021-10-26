let points = {
    // "1": {
    //     type: "image"
    // },
    // "2": {
    //     type: "image"
    // },
    // "3": {
    //     type: "image"
    // },
    // "4": {
    //     type: "image"
    // },
    // "5": {
    //     type: "image"
    // },
    // "6": {
    //     type: "image"
    // },
    // "7": {
    //     type: "video"
    // },
    // "8": {
    //     type: "image"
    // },
    "1999": {
        type: "sliding_images",
        firstImage: "https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        secondImage: "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
    },
    "1400": {
        type: "image",
        image: "https://i.redd.it/c8djahc8c7871.jpg"
    }
}

const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const onPageLoad = () => {
    let length = Object.keys(points).length;
    for (let key in points) {
        view.addPoint(key);
        view.addMedia(key, points[key]);
    }

    let percentage = 100 / (length + 0.8);
    $(".inside").css("gap", `calc(${percentage}% - 70px)`);
    configureSliders();

    loader.toggle();
}

$(onPageLoad);