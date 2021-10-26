const view = {
    addPoint: (point) => {
        let pointElement = `<div id="p_${point}" class="point"><p>${point}</p></div>`;
        $(".inside").append(pointElement);
        $(`#p_${point}`).click(() => {
            let key = $(`#${point} p`).text();
            view.switchMedia(point);
        });
    },

    switchMedia: (key) => {
        $(".wrapper").css({opacity: 0, "pointer-events": "none"});
        $(`#${key}`).css({opacity: 1, "pointer-events": "all"});
        $(".point").removeClass('enabled');
        $(`#p_${key}`).addClass('enabled');
    },

    addMedia: (key, media) => {
        switch (media.type) {
            case "image":
                $(".sliderContainer").append(`
                <div id="${key}" class="wrapper">
                    <img src="${media.image}">
                </div>`);
                break;
            case "sliding_images":
                $(".sliderContainer").append(`
                <div id="${key}" class="wrapper">
                    <div class="comparison-slider">
                        <img src="${media.firstImage}">
                        <div class="resize resizeAnimation" style="width: 98.5%;">
                            <img src="${media.secondImage}">
                        </div>
                        <div class="bullet bulletAnimation">
                            <div><img src="images/icons/slider.png"></div>
                        </div>
                    </div>
                </div>`);
                break;
            case "video":
                $(".sliderContainer").append(`
                <div id="${key}" class="wrapper">
                    ${media.embed}
                </div>
                `);
                break;
        }
    }
}