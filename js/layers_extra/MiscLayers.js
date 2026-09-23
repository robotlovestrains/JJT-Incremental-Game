addLayer("MISC", {
    name: "MISC",
    symbol: "MISC",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b4b4b4",
    requires: new Decimal(1e1000),
    resource: "Useless Layers",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return true},
    tabFormat: {
        "Minigames": {
            embedLayer: "MiniGames",
            buttonStyle: {
                "color": "#b4b4b4",
                "border": "2px solid #b4b4b4",
            },
        },
        "Events (teaser Not Required)": {
            embedLayer: "Event",
            buttonStyle: {
                "color": "#797979",
                "border": "2px solid #797979",
            },
        },
    },
})

addLayer("MiniGames", {
    name: "Minigames",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b4b4b4",
    requires: new Decimal(1e1000),
    resource: "Useless Layers",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    tabFormat: {
        "Minigame Settings": {
            embedLayer: "MiniSettings",
            buttonStyle: {
                "color": "#b4b4b4",
                "border": "2px solid #b4b4b4",
            },
        },
        "Minigame 1": {
            embedLayer: "MiniGame1",
            buttonStyle: {
                "color": "#b4b4b4",
                "border": "2px solid #b4b4b4",
            },
        },
        "Minigame 1 Achievments": {
            embedLayer: "MiniA1",
            buttonStyle: {
                "color": "#ffff00",
                "border": "2px solid #ffff00",
            },
        },
        "Minigame 2": {
            embedLayer: "MiniGame2",
            buttonStyle: {
                "color": "#b4b4b4",
                "border": "2px solid #b4b4b4",
            },
        },
    },
})

addLayer("Event", {
    name: "Event",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#797979",
    requires: new Decimal(1e1000),
    resource: "Event Points",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    tabFormat: {
        "Halloween": {
            embedLayer: "Halloween",
            buttonStyle: {
                "color": "#c07000",
                "border": "2px solid #c07000",
            },
        },
    },
})

addLayer("MiniSettings", {
    name: "Minigame Settings",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        Mini1: false,
        Mini2: false,
    }},
    color: "#b4b4b4",
    requires: new Decimal(1e1000),
    resource: "Useless Layers",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    tabFormat: [
        ["display-text",
            function() { return 'Each Row is the next Minigame' },
            { "color": "#b4b4b4", "font-size": "24px" }],
        ["display-text",
            function() { return '(row 1: minigame 1. row 2: minigame 2. ect...)' },
            { "color": "#b4b4b4", "font-size": "16px" }],
        "blank",
        "clickables",
    ],
    clickables: {
        11: {
            title: "Disable Minigame 1",
            display() {return player[this.layer].Mini1},
            onClick() {
                player[this.layer].Mini1 = !player[this.layer].Mini1
            },
            canClick: true,
        },
        21: {
            title: "Disable Minigame 2",
            display() {return player[this.layer].Mini2},
            onClick() {
                player[this.layer].Mini2 = !player[this.layer].Mini2
            },
            canClick: true,
        },
    },
})
