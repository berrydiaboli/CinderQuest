const baseConfig = {
    showOutlines: false,
    showAxes: false,
    showGrid: false,
    autoResize: false,
    controls: {
        enabled: true,
        zoom: false,
        rotate: true,
        pan: false
    },
    camera: {
        x: -15,
        y: 20,
        z: 25,
        target: [0, 17, 0]
    },
    canvas: {
        width: undefined,
        height: undefined
    },
    pauseHidden: true
};

// Initialize MineRender per individual with the config ever

var Berry_Diaboli = new SkinRender(baseConfig, document.getElementById("Berry_Diaboli"));
var TheKing1543 = new SkinRender(baseConfig, document.getElementById("TheKing1543"));
var Crazydiamonde2 = new SkinRender(baseConfig, document.getElementById("Crazydiamonde2"));
var TheGibbous = new SkinRender(baseConfig, document.getElementById("TheGibbous"));

// Render the skin

Berry_Diaboli.render("Berry_Diaboli");
TheKing1543.render("TheKing1543");
Crazydiamonde2.render("Crazydiamonde2");
TheGibbous.render("TheGibbous");


