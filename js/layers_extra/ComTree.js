addLayer("ComTree", {
    name: "Community Tree",
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
        "Points": {
            embedLayer: "ComPoints",
            buttonStyle: {
                "color": "#00acac",
                "border": "2px solid #00acac",
            },
        },
        "Prestige": {
            embedLayer: "ComPrestige",
            buttonStyle: {
                "color": "#2afd6a",
                "border": "2px solid #2afd6a",
            },
        },
    },
})

addLayer("ComPoints", {
    name: "Points",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00acac",
    requires: new Decimal(0),
    resource: "Points",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        gain = new Decimal(0)
        
        //Base
        let Base = new Decimal(1)

        //Multi
        let mult = new Decimal(1)

        //Exp
        let exp = new Decimal(1)

        //Extra
        
        gain = gain.add(Base.times(mult).pow(exp))
        if(player['MiniSettings'].Comm) return new Decimal(0)
        return gain.times(100)
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "The Community Tree" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player[this.layer].points) + ' Points' },
        { "color": "#00acac", "font-size": "24px"}],
        ["display-text",
        function() { return 'You gain +' + format(getResetGain(this.layer).times(layers[this.layer].passiveGeneration())) + ' Points/s' },
        { "color": "#00acac", "font-size": "16px"}],
    ],
    passiveGeneration() {
        let Gen = new Decimal(0.01)
        return Gen
    },
})

addLayer("ComPrestige", {
    name: "Prestige",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#2afd6a",
    requires: new Decimal(10),
    resource: "Points",
    baseResource: "Skill",
    baseAmount() {return player['ComPoints'].points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        gain = new Decimal(1)

        //Multi
        let mult = new Decimal(1)

        //Exp
        let exp = new Decimal(1)
        
        gain = gain.add(mult.pow(exp))
        if(player['MiniSettings'].Comm) return new Decimal(0)
        return gain
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Community Prestige. If You Want To add Something Reply To RobotLoves', who is GameDev BTW, Comment<br>Top Coments (May Verry) By Next Update Adds What Conntent They Said" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You Need Content to Play this game' },
        { "color": "#2afd6a", "font-size": "24px"}],
        "blank",
        "prestige-button",
    ],
})
