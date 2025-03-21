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
        width: 117, // Set specific dimensions
        height: 141
    },
    pauseHidden: true
};

// Initialize MineRender per individual with the config ever

var Berry_Diaboli = new SkinRender(baseConfig, document.getElementById("Berry_Diaboli"));
var TheKing1543 = new SkinRender(baseConfig, document.getElementById("TheKing1543"));
var Crazydiamonde2 = new SkinRender(baseConfig, document.getElementById("Crazydiamonde2"));
var TheGibbous = new SkinRender(baseConfig, document.getElementById("TheGibbous"));
var SuperKirbylover = new SkinRender(baseConfig, document.getElementById("SuperKirbylover"));
var Mochi_Toki = new SkinRender(baseConfig, document.getElementById("Mochi_Toki"));


// Render the skin

async function renderAllPlayers() {
    const players = [
        { player: Berry_Diaboli, name: "Berry_Diaboli" },
        { player: TheKing1543, name: "TheKing1543" },
        { player: Crazydiamonde2, name: "Crazydiamonde2" },
        { player: TheGibbous, name: "TheGibbous" },
        { player: SuperKirbylover, name: "SuperKirbylover" },
        { player: Mochi_Toki, name: "Mochi_Toki" }
    ];

    for (const { player, name } of players) {
        console.log(`Rendering ${name}...`);
        await player.render(name);
        console.log(`Finished rendering ${name}`);
        await new Promise(resolve => setTimeout(resolve, 200));
    }
}

renderAllPlayers();


