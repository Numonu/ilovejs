import gsap from "gsap";

const title_tl = gsap.timeline();
title_tl.pause();

// prevent layout shifting

const container = document.querySelector(".container") as HTMLElement;
addEventListener("load" , () => {
    //unable animation in mobile devices
    if (window.innerWidth <= 768) {
        container.style.visibility = "inherit";
        title_tl.progress(1);
        return;
    }
    else if (container) {
        container.style.visibility = "inherit";
        title_tl.play();
    }
})

// title reveal

{
    const target = ".title";
    title_tl.from(target, {
        rotateX: 360,
        scale: 0.5,
        opacity: 0,
        stagger: 0.05,
    });

    title_tl.to(
        target,
        {
            y: 15,
            duration: 0.5,
            stagger: 0.05,
        },
        "<20%"
    );

    title_tl.to(
        target,
        {
            y: 0,
            duration: 0.2,
            stagger: 0.05,
        },
        "<20%"
    );
}

// javascript text glowing

{
    const target = ".title-javascript";

    const pinia_color = "rgb(253 224 71)";
    const shadow_color = "rgba(255, 255, 0) 0 0 25px";

    const from = {
        color: pinia_color,
        duration: 1,
        textShadow: shadow_color,
        stagger: 0.05,
    };

    const to = {
        color: "white",
        duration: 1,
        textShadow: "0px 0px 0px",
        stagger: 0.05,
    };

    const endLoop_tl = gsap.timeline({
        repeat: -1,
    });

    endLoop_tl.to(target, from, "<10%");
    endLoop_tl.to(target, to, "<50%");
}

// description reveal

title_tl.from(
    ".description",
    {
        opacity: 0,
        y: 45,
        x: 45,
        scale: 1.2,
        rotateY: "90deg",
        skewX: "35deg",
    },
    "<90%"
);

title_tl.addLabel("description", ">");

// icon reveal

title_tl.from(
    ".js",
    {
        // x : "+=100",
        y: "-=100",

        scale: 0,
        // rotateZ : "180deg",
        stagger: 0.1,
    },
    0
);

title_tl.from(
    ".crown",
    {
        y: "-=50",
        scale: 1.2,
        duration: 0.1,
        opacity: 0,
    },
    "description"
);

title_tl.to(".js", {
    y: "+=5",
    repeat: 1,
    yoyo: true,
    duration: 0.1,
    ease: "none",
});


//javascript em

gsap.from(".javascript" , {
    rotateZ : "-3deg",
    repeat : -1,
    yoyo : true,
    ease : "power1.inOut"
})

//guia em

const guide_tl = gsap.timeline({
    repeat : -1,
    repeatDelay : .5
});

guide_tl.to(".guide" , {
    y : -6,
    duration : .25,
    stagger : 0.05
})

guide_tl.to(".guide" , {
    y : 0,
    duration : .25,
    stagger : 0.05
} , "<10%")