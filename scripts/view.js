const view = {
    textOpen: false,

    addMedia: (key, media) => {
        switch (media.type) {
            case "image":
                $(".wrapperContainer").append(`
                <div id="${key}" class="wrapper">
                    <img class="image" id="i_${key}" src="">
                    <div class="mask"></div>
                    <p class="key">${key}</p>
                    <div class="gradientContainer">
                        <div class="circle"></div>
                        <p class="text">${media.text}</p>
                        <div class="gradient"></div>
                    </div>
                </div>`);

                
                break;
            case "icon":
                $(".wrapperContainer").append(`
                <div id="${key}" class="wrapper iconBased">
                    <img class="image" id="i_${key}" src="">
                    <div class="mask"></div>
                    <img class="key" src="https://content-tools.tumo.world/FileSystem/data/InteractiveTimeline/${language}/${id}/icons/${key}.png"></img>
                    <img class="keyStroke" src="https://content-tools.tumo.world/FileSystem/data/InteractiveTimeline/${language}/${id}/icons/${key}Stroke.png"></img>
                    <div class="gradientContainer">
                        <div class="circle"></div>
                        <p class="text">${media.text}</p>
                        <div class="gradient"></div>
                    </div>
                </div>`);


                break;
        }

        document.getElementById(`i_${key}`).onload = imageLoaded;
        document.getElementById(`i_${key}`).src = media.image;
        if (media.style !== undefined) {
            document.getElementById(`i_${key}`).style = media.style;
        }
    },
    activate: async(obj) => {
        obj.addClass("active");
        $(".active").addClass("open");

        $(".wrapper").each(function() {
            if (!$(this).hasClass("active")) {
                $(this).find(".key").css("opacity", 0);
                $(this).find(".keyStroke").css("opacity", 0);
            } else {
                $(this).find(".key").css("opacity", 1);
                $(this).find(".keyStroke").css("opacity", 1);
            }
        });

        $(".active .text").css("position", "absolute");
        let height = parseFloat($(".active .text").css("height"));
        
        let offset = $(".active").hasClass("iconBased") ? 115 : 77;
        $(".active .gradientContainer").css("height", height + offset);
        $(".active .text").css("position", "relative");
        await timeout(300);
        $(".active .text").css("opacity", 1);

        view.textOpen = true;
    },
    deactivate: async (obj) => {
        view.closeText();
        obj.removeClass("active");

        view.textOpen = false;
        setTimeout(() => {
            if (activatedYear === -1) {
                $(".wrapper .key").css("opacity", 1);
                $(".wrapper .keyStroke").css("opacity", 1);
            }
        }, 250);
    },
    toggleText: async () => {
        view.textOpen = !view.textOpen;

        if (view.textOpen) {
            view.activate(activatedYear);
        } else {
            view.closeText();
        }
    },
    closeText: async () => {
        $(".active .gradientContainer").css("height", 56);
        $(".active .text").css("opacity", 0);
        $(".active").removeClass("open");
    }
}