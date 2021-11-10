const view = {
    addMedia: (key, media) => {
        switch (media.type) {
            case "image":
                $(".sliderContainer").append(`
                <div id="${key}" class="wrapper">
                    <img src="${media.image}">
                    <div class="mask"></div>
                    <div class="circle"></div>
                    <p>${key}</p>
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