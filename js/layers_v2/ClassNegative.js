addLayer("TFDRM", {
    name: "The First Difficulty",
    symbol: "TFD",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        RT: new Decimal(0),
    }},
    color: "#464646",
    requires: new Decimal(10),
    resource: "The First Difficulty",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        mult = mult.times(buyableEffect(this.layer, 51))
        mult = mult.times(buyableEffect(this.layer, 61))
        mult = mult.times(buyableEffect(this.layer, 62))
        mult = mult.times(buyableEffect(this.layer, 71))
        mult = mult.times(buyableEffect(this.layer, 72))
        mult = mult.times(buyableEffect(this.layer, 111))
        mult = mult.times(buyableEffect(this.layer, 132))
        mult = mult.times(buyableEffect('UIPRM', 12))
        mult = mult.times(buyableEffect('FLNRM', 41)[1])
        mult = mult.times(buyableEffect('TESRM', 11))
        mult = mult.times(buyableEffect(this.layer, 1051))
        mult = mult.times(buyableEffect(this.layer, 1061))
        mult = mult.times(buyableEffect(this.layer, 1062))
        mult = mult.times(buyableEffect(this.layer, 1071))
        mult = mult.times(buyableEffect(this.layer, 1072))

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    onPrestige(gain) {
        player[this.layer].RT = new Decimal(0)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasUpgrade('BSG', 11)) vis = true
        return vis
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        if(hasMilestone('TLGRM', 1)) Gen = Gen.add(0.25)
        if(hasMilestone('XSTRM', 0)) Gen = Gen.add(player['XSTRM'].MEone)
        return Gen
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Welcome to the Remake hope you like this now also the scroll bar is a bug [Row 1] (Brighter for visibility)" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Upgrades": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' The First Difficulty (TFD)' },
                    { "color": "#464646", "font-size": "24px" }],
                ["display-text",
                    function() { return format(player[this.layer].RT)+' Reset Time has Past' },
                    { "color": "#464646", "font-size": "24px" }],
                "blank",
                ["row", [["buyable", 11]]],
                "blank",
                "blank",
                ["row", [["buyable", 21]]],
                "blank",
                "blank",
                ["row", [["buyable", 31], "blank", "blank", "blank", "blank", ["buyable", 32]]],
                "blank",
                "blank",
                ["row", [["buyable", 41]]],
                "blank",
                "blank",
                ["row", [["buyable", 51]]],
                "blank",
                "blank",
                ["row", [["buyable", 61], "blank", "blank", "blank", "blank", ["buyable", 62]]],
                "blank",
                "blank",
                ["row", [["buyable", 71], "blank", "blank", "blank", "blank", ["buyable", 72]]],
                "blank",
                "blank",
                ["row", [["buyable", 81]]],
                "blank",
                "blank",
                ["row", [["buyable", 91]]],
                "blank",
                "blank",
                ["row", [["buyable", 101]]],
                "blank",
                "blank",
                ["row", [["buyable", 111]]],
                "blank",
                "blank",
                ["row", [["buyable", 121]]],
                "blank",
                "blank",
                ["row", [["buyable", 131], "blank", "blank", "blank", "blank", ["buyable", 132]]],
                "blank",
                "blank",
                ["row", [["buyable", 141]]],
                "blank",
                "blank",
                ["row", [["buyable", 151]]],
            ],
        },
        "i Upgrades": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' The First Difficulty (TFD)' },
                    { "color": "#464646", "font-size": "24px" }],
                ["display-text",
                    function() { return format(player[this.layer].RT)+' Reset Time has Past' },
                    { "color": "#464646", "font-size": "24px" }],
                "blank",
                ["row", [["buyable", 1011]]],
                "blank",
                "blank",
                ["row", [["buyable", 1021]]],
                "blank",
                "blank",
                ["row", [["buyable", 1031], "blank", "blank", "blank", "blank", ["buyable", 1032]]],
                "blank",
                "blank",
                ["row", [["buyable", 1041]]],
                "blank",
                "blank",
                ["row", [["buyable", 1051]]],
                "blank",
                "blank",
                ["row", [["buyable", 1061], "blank", "blank", "blank", "blank", ["buyable", 1062]]],
                "blank",
                "blank",
                ["row", [["buyable", 1071], "blank", "blank", "blank", "blank", ["buyable", 1072]]],
                "blank",
                "blank",
                ["row", [["buyable", 1081]]],
                "blank",
                "blank",
                ["row", [["buyable", 1091]]],
                "blank",
                "blank",
                ["row", [["buyable", 1101]]],
            ],
            unlocked() {return inChallenge('ITWRM', 11) || hasChallenge('ITWRM', 11)},
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' The First Difficulty (TFD)' },
                    { "color": "#464646", "font-size": "24px" }],
                ["display-text",
                    function() { return format(player[this.layer].RT)+' Reset Time has Past' },
                    { "color": "#464646", "font-size": "24px" }],
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['TFDRM'].passiveGeneration().lt(0.25)},
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' The First Difficulty (TFD)' },
                    { "color": "#464646", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' TFD/s and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#464646", "font-size": "16px" }],
                ["display-text",
                    function() { return format(player[this.layer].RT)+' Reset Time has Past' },
                    { "color": "#464646", "font-size": "24px" }],
            ],
            unlocked() {return layers['TFDRM'].passiveGeneration().gt(0)},
        },
    },
    buyables: {
        11: {
            title() {return "<h2>TFD #1</h2>"},
            cost(x) { return new Decimal(1) },
            display() { return "<h2>x2 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [21],
        },
        1011: {
            title() {return "<h2>TFD #i1</h2>"},
            cost(x) { return new Decimal(10) },
            display() { return "<h2>x5 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(4).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1021],
            unlocked() {return getBuyableAmount(this.layer, 11).gte(1)},
        },
        21: {
            title() {return "<h2>TFD #2</h2>"},
            cost(x) { return new Decimal(1) },
            display() { return "<h2>x3 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(2).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [31, 32],
            unlocked() {return getBuyableAmount(this.layer, 11).gte(1)},
        },
        1021: {
            title() {return "<h2>TFD #i2</h2>"},
            cost(x) { return new Decimal(10) },
            display() { return "<h2>x7 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(6).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1031, 1032],
            unlocked() {return getBuyableAmount(this.layer, 21).gte(1)},
        },
        31: {
            title() {return "<h2>TFD #3</h2>"},
            cost(x) { return new Decimal(2) },
            display() { return "<h2>x1.5 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(0.5).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [41],
            unlocked() {return getBuyableAmount(this.layer, 21).gte(1)},
        },
        1031: {
            title() {return "<h2>TFD #i3</h2>"},
            cost(x) { return new Decimal(20) },
            display() { return "<h2>x2.5 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1.5).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1041],
            unlocked() {return getBuyableAmount(this.layer, 31).gte(1)},
        },
        32: {
            title() {return "<h2>TFD #4</h2>"},
            cost(x) { return new Decimal(3) },
            display() { return "<h2>x3.14 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(2.14).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [],
            unlocked() {return getBuyableAmount(this.layer, 21).gte(1)},
        },
        1032: {
            title() {return "<h2>TFD #i4</h2>"},
            cost(x) { return new Decimal(30) },
            display() { return "<h2>xpi (π) Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(new Decimal(Math.PI).add(-1)).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [],
            unlocked() {return getBuyableAmount(this.layer, 32).gte(1)},
        },
        41: {
            title() {return "<h2>TFD #5</h2>"},
            cost(x) { return new Decimal(5) },
            display() { return "<h2>x2 Skill again</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [51],
            unlocked() {return getBuyableAmount(this.layer, 31).gte(1)},
        },
        1041: {
            title() {return "<h2>TFD #i5</h2>"},
            cost(x) { return new Decimal(50) },
            display() { return "<h2>x5 Skill again</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(4).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1051],
            unlocked() {return getBuyableAmount(this.layer, 41).gte(1)},
        },
        51: {
            title() {return "<h2>TFD #6</h2>"},
            cost(x) { return new Decimal(15) },
            display() { return "<h2>x2 TFD</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [61, 62],
            unlocked() {return getBuyableAmount(this.layer, 41).gte(1)},
        },
        1051: {
            title() {return "<h2>TFD #i6</h2>"},
            cost(x) { return new Decimal(150) },
            display() { return "<h2>x5 TFD</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(4).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1061, 1062],
            unlocked() {return getBuyableAmount(this.layer, 51).gte(1) && (inChallenge('ITWRM', 11) || inChallenge('ITWRM', 12) || getBuyableAmount('NEGRM', 1051).gte(1))},
        },
        61: {
            title() {return "<h2>TFD #7</h2>"},
            cost(x) { return new Decimal(25) },
            display() { return "<h2>x5 TFD</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(4).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [71],
            unlocked() {return getBuyableAmount(this.layer, 51).gte(1)},
        },
        1061: {
            title() {return "<h2>TFD #i7</h2>"},
            cost(x) { return new Decimal(250) },
            display() { return "<h2>x12 TFD</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(11).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1071],
            unlocked() {return getBuyableAmount(this.layer, 61).gte(1) && (inChallenge('ITWRM', 11) || inChallenge('ITWRM', 12) || getBuyableAmount('NEGRM', 1051).gte(1))},
        },
        62: {
            title() {return "<h2>TFD #8</h2>"},
            cost(x) { return new Decimal(120) },
            display() { return "<h2>x3 TFD</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(2).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1072],
            unlocked() {return getBuyableAmount(this.layer, 51).gte(1)},
        },
        1062: {
            title() {return "<h2>TFD #i8</h2>"},
            cost(x) { return new Decimal(1.2e3) },
            display() { return "<h2>x7 TFD</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(6).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1072],
            unlocked() {return getBuyableAmount(this.layer, 62).gte(1) && (inChallenge('ITWRM', 11) || inChallenge('ITWRM', 12) || getBuyableAmount('NEGRM', 1051).gte(1))},
        },
        71: {
            title() {return "<h2>TFD #9</h2>"},
            cost(x) { return new Decimal(500) },
            display() { return "<h2>x2 Skill and TFD</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [81],
            unlocked() {return getBuyableAmount(this.layer, 61).gte(1)},
        },
        1071: {
            title() {return "<h2>TFD #i9</h2>"},
            cost(x) { return new Decimal(5e3) },
            display() { return "<h2>x5 Skill and TFD</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(4).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1081],
            unlocked() {return getBuyableAmount(this.layer, 71).gte(1) && (inChallenge('ITWRM', 11) || inChallenge('ITWRM', 12) || getBuyableAmount('NEGRM', 1051).gte(1))},
        },
        72: {
            title() {return "<h2>TFD #10</h2>"},
            cost(x) { return new Decimal(1.25e3) },
            display() { return "<h2>x2.5 Skill and TFD</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1.5).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [81],
            unlocked() {return getBuyableAmount(this.layer, 62).gte(1)},
        },
        1072: {
            title() {return "<h2>TFD #i10</h2>"},
            cost(x) { return new Decimal(12.5e3) },
            display() { return "<h2>x6 Skill and TFD</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(5).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1081],
            unlocked() {return getBuyableAmount(this.layer, 72).gte(1) && (inChallenge('ITWRM', 11) || inChallenge('ITWRM', 12) || getBuyableAmount('NEGRM', 1051).gte(1))},
        },
        81: {
            title() {return "<h2>TFD #11</h2>"},
            cost(x) { return new Decimal(5e3) },
            display() { return "<h2>TFD Boost Skill</h2><br><h3>(TFD + 1)^0.1</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(player[this.layer].points).add(1).pow(0.1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [91],
            unlocked() {return getBuyableAmount(this.layer, 71).gte(1) || getBuyableAmount(this.layer, 72).gte(1)},
        },
        1081: {
            title() {return "<h2>TFD #i11</h2>"},
            cost(x) { return new Decimal(50e3) },
            display() { return "<h2>TFD Boost Skill</h2><br><h3>(TFD + 1)^0.3</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(player[this.layer].points).add(1).pow(0.3) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1091],
            unlocked() {return getBuyableAmount(this.layer, 81).gte(1) && (inChallenge('ITWRM', 11) || inChallenge('ITWRM', 12) || getBuyableAmount('NEGRM', 1051).gte(1))},
        },
        91: {
            title() {return "<h2>TFD #12</h2>"},
            cost(x) { return new Decimal(10e3) },
            display() { return "<h2>Skill Boost Itself</h2><br><h3>log10(Skill + 1) + 1</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(player.points).add(1).log10().add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [101],
            unlocked() {return getBuyableAmount(this.layer, 81).gte(1)},
        },
        1091: {
            title() {return "<h2>TFD #i12</h2>"},
            cost(x) { return new Decimal(100e3) },
            display() { return "<h2>Skill Boost Itself</h2><br><h3>log5(Skill + 1) + 1</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(player.points).add(1).log(5).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1101],
            unlocked() {return getBuyableAmount(this.layer, 91).gte(1) && (inChallenge('ITWRM', 11) || inChallenge('ITWRM', 12) || getBuyableAmount('NEGRM', 1051).gte(1))},
        },
        101: {
            title() {return "<h2>TFD #13</h2>"},
            cost(x) { return new Decimal(50e3) },
            display() { return "<h2>Unlock TLG</h2><br><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [111],
            unlocked() {return getBuyableAmount(this.layer, 91).gte(1)},
        },
        1101: {
            title() {return "<h2>TFD #i13</h2>"},
            cost(x) { return new Decimal(500e3) },
            display() { return "<h2>x25 Skill</h2><br><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(24).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return getBuyableAmount(this.layer, 101).gte(1) && (inChallenge('ITWRM', 11) || inChallenge('ITWRM', 12) || getBuyableAmount('NEGRM', 1051).gte(1))},
        },
        111: {
            title() {return "<h2>TFD #14</h2>"},
            cost(x) { return new Decimal(250e3) },
            display() { return "<h2>Skill Boost TFD</h2><br><h3>log25(Skill + 1) + 1</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) && getBuyableAmount('NEGRM', 51).gte(1) },
            effect() { return getBuyableAmount(this.layer, this.id).times(player.points).add(1).log(25).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [121],
            unlocked() {return getBuyableAmount(this.layer, 101).gte(1) && getBuyableAmount('NEGRM', 51).gte(1)},
        },
        121: {
            title() {return "<h2>TFD #15</h2>"},
            cost(x) { return new Decimal(1e6) },
            display() { return "<h2>Reset Time Boost Skill</h2><br><h3>(RT + 1)^0.1 + 1</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) && getBuyableAmount('NEGRM', 51).gte(1) },
            effect() { return getBuyableAmount(this.layer, this.id).times(player[this.layer].RT).add(1).pow(0.1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [131, 132],
            unlocked() {return getBuyableAmount(this.layer, 111).gte(1)},
        },
        131: {
            title() {return "<h2>TFD #16a</h2>"},
            cost(x) { return new Decimal(1e6).times(x.add(1).pow(2)) },
            display() { return "<h2>x2 Skill Per Level and Lock #16b</h2><br><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit()) },
            canAfford() { return player[this.layer].points.gte(this.cost()) && (getBuyableAmount(this.layer, 132).lt(1) || hasMilestone('CSHRM', 2)) && getBuyableAmount('NEGRM', 51).gte(1) },
            effect() { return new Decimal(2).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {return new Decimal(10).add(getBuyableAmount('FLNRM', 72).times(5))},
            branches: [141],
            unlocked() {return getBuyableAmount(this.layer, 121).gte(1)},
        },
        132: {
            title() {return "<h2>TFD #16b</h2>"},
            cost(x) { return new Decimal(1e6).times(x.add(1).pow(2)) },
            display() { return "<h2>x1.2 Skill and TFD Per level and Lock #16a</h2><br><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit()) },
            canAfford() { return player[this.layer].points.gte(this.cost()) && (getBuyableAmount(this.layer, 131).lt(1) || hasMilestone('CSHRM', 2)) && getBuyableAmount('NEGRM', 51).gte(1) },
            effect() { return new Decimal(1.2).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {return new Decimal(10).add(getBuyableAmount('FLNRM', 72).times(5))},
            branches: [141],
            unlocked() {return getBuyableAmount(this.layer, 121).gte(1)},
        },
        141: {
            title() {return "<h2>TFD #17</h2>"},
            cost(x) { return new Decimal(2.5e6) },
            display() { return "<h2>Make the Nerf From Neg into a Buff and It now Boosts the Base but Nerf the Effect a Lot</h2><br><h3>now log25(x + 1) + 1</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) && getBuyableAmount('NEGRM', 51).gte(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [151],
            unlocked() {return getBuyableAmount(this.layer, 131).gte(1) || getBuyableAmount(this.layer, 132).gte(1)},
        },
        151: {
            title() {return "<h2>TFD #18</h2>"},
            cost(x) { return new Decimal(7.5e6) },
            display() { return "<h2>TFD Boost Skill again</h2><br><h3>log10(TFD^2 + 1) + 1</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) && getBuyableAmount('NEGRM', 51).gte(1) },
            effect() { return getBuyableAmount(this.layer, this.id).times(player[this.layer].points).pow(2).add(1).log10().add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [],
            unlocked() {return getBuyableAmount(this.layer, 141).gte(1)},
        },
    },
    automate() {
        player[this.layer].RT = new Decimal(player[this.layer].RT).add(1/20);
        if(hasMilestone('TLGRM', 3)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit)) {
                layers[this.layer].buyables[11].buy()
            };
            if(layers[this.layer].buyables[21].canAfford() && getBuyableAmount(this.layer, 21).lt(layers[this.layer].buyables[21].purchaseLimit)) {
                layers[this.layer].buyables[21].buy()
            };
            if(layers[this.layer].buyables[31].canAfford() && getBuyableAmount(this.layer, 31).lt(layers[this.layer].buyables[31].purchaseLimit)) {
                layers[this.layer].buyables[31].buy()
            };
            if(layers[this.layer].buyables[32].canAfford() && getBuyableAmount(this.layer, 32).lt(layers[this.layer].buyables[32].purchaseLimit)) {
                layers[this.layer].buyables[32].buy()
            };
            if(layers[this.layer].buyables[41].canAfford() && getBuyableAmount(this.layer, 41).lt(layers[this.layer].buyables[41].purchaseLimit)) {
                layers[this.layer].buyables[41].buy()
            };
            if(layers[this.layer].buyables[51].canAfford() && getBuyableAmount(this.layer, 51).lt(layers[this.layer].buyables[51].purchaseLimit)) {
                layers[this.layer].buyables[51].buy()
            };
            if(layers[this.layer].buyables[61].canAfford() && getBuyableAmount(this.layer, 61).lt(layers[this.layer].buyables[61].purchaseLimit)) {
                layers[this.layer].buyables[61].buy()
            };
            if(layers[this.layer].buyables[62].canAfford() && getBuyableAmount(this.layer, 62).lt(layers[this.layer].buyables[62].purchaseLimit)) {
                layers[this.layer].buyables[62].buy()
            };
            if(layers[this.layer].buyables[71].canAfford() && getBuyableAmount(this.layer, 71).lt(layers[this.layer].buyables[71].purchaseLimit)) {
                layers[this.layer].buyables[71].buy()
            };
            if(layers[this.layer].buyables[72].canAfford() && getBuyableAmount(this.layer, 72).lt(layers[this.layer].buyables[72].purchaseLimit)) {
                layers[this.layer].buyables[72].buy()
            };
        }
        if(hasMilestone('TLGRM', 7)) {
            if(layers[this.layer].buyables[81].canAfford() && getBuyableAmount(this.layer, 81).lt(layers[this.layer].buyables[81].purchaseLimit)) {
                layers[this.layer].buyables[81].buy()
            };
            if(layers[this.layer].buyables[91].canAfford() && getBuyableAmount(this.layer, 91).lt(layers[this.layer].buyables[91].purchaseLimit)) {
                layers[this.layer].buyables[91].buy()
            };
            if(layers[this.layer].buyables[101].canAfford() && getBuyableAmount(this.layer, 101).lt(layers[this.layer].buyables[101].purchaseLimit)) {
                layers[this.layer].buyables[101].buy()
            };
            if(layers[this.layer].buyables[111].canAfford() && getBuyableAmount(this.layer, 111).lt(layers[this.layer].buyables[111].purchaseLimit)) {
                layers[this.layer].buyables[111].buy()
            };
            if(layers[this.layer].buyables[121].canAfford() && getBuyableAmount(this.layer, 121).lt(layers[this.layer].buyables[121].purchaseLimit)) {
                layers[this.layer].buyables[121].buy()
            };
            if(layers[this.layer].buyables[131].canAfford() && getBuyableAmount(this.layer, 131).lt(layers[this.layer].buyables[131].purchaseLimit())) {
                layers[this.layer].buyables[131].buy()
            };
            if(layers[this.layer].buyables[132].canAfford() && getBuyableAmount(this.layer, 132).lt(layers[this.layer].buyables[132].purchaseLimit())) {
                layers[this.layer].buyables[132].buy()
            };
            if(layers[this.layer].buyables[141].canAfford() && getBuyableAmount(this.layer, 141).lt(layers[this.layer].buyables[141].purchaseLimit)) {
                layers[this.layer].buyables[141].buy()
            };
            if(layers[this.layer].buyables[151].canAfford() && getBuyableAmount(this.layer, 151).lt(layers[this.layer].buyables[151].purchaseLimit)) {
                layers[this.layer].buyables[151].buy()
            };
        }
        if(hasMilestone('ITWRM', 4)) {
            if(layers[this.layer].buyables[1011].canAfford() && getBuyableAmount(this.layer, 1011).lt(layers[this.layer].buyables[1011].purchaseLimit)) {
                layers[this.layer].buyables[1011].buy()
            };
            if(layers[this.layer].buyables[1021].canAfford() && getBuyableAmount(this.layer, 1021).lt(layers[this.layer].buyables[1021].purchaseLimit)) {
                layers[this.layer].buyables[1021].buy()
            };
            if(layers[this.layer].buyables[1031].canAfford() && getBuyableAmount(this.layer, 1031).lt(layers[this.layer].buyables[1031].purchaseLimit)) {
                layers[this.layer].buyables[1031].buy()
            };
            if(layers[this.layer].buyables[1032].canAfford() && getBuyableAmount(this.layer, 1032).lt(layers[this.layer].buyables[1032].purchaseLimit)) {
                layers[this.layer].buyables[1032].buy()
            };
            if(layers[this.layer].buyables[1041].canAfford() && getBuyableAmount(this.layer, 1041).lt(layers[this.layer].buyables[1041].purchaseLimit)) {
                layers[this.layer].buyables[1041].buy()
            };
        }
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player.points.lt(10)) inactive = true
        return inactive
    },
})

addLayer("TLGRM", {
    name: "The Lower Gap",
    symbol: "TLG",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#004600",
    requires: new Decimal(10000),
    resource: "The Lower Gap",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "static",
    exponent: 1.05,
    base: 10000,
    gainMult() {
        mult = new Decimal(1)

        mult = mult.times(player['SKIPRM'].layerEffect)
        if(hasMilestone(this.layer, 11)) mult = mult.times(player['SKIPRM'].layerEffect.pow(-1))
        if(getBuyableAmount('RTFRM', 31).gte(1)) mult = mult.times(player['SKIPRM'].layerEffect.pow(player[this.layer].points.pow(-1)))

        // softcap
        if(player[this.layer].points.gte(16)) mult = mult.times(new Decimal(1000).pow(player[this.layer].points.add(-15).times(4).pow(1.15)))

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 2,
    layerShown() {
        let vis = false
        if(getBuyableAmount('TFDRM', 101).gte(1) || hasMilestone(this.layer, 0)) vis = true
        return vis
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "This is 1 of the longest layers [Reset 1] (Brighter for visibility)" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Milestone": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' The Lower Gap (TLG)' },
                    { "color": "#004600", "font-size": "24px" }],
                "blank",
                "prestige-button",
                "blank",
                "milestones"
            ],
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 TLG",
            effectDescription: "Unlock Negativity and Keep this layer Unlocked",
            done() { return player[this.layer].points.gte(1) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        1: {
            requirementDescription: "2 TLG",
            effectDescription: "Unlock Ca$h also Autogain 25% of TFD/s and Remove its Reset Button",
            done() { return player[this.layer].points.gte(2) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        2: {
            requirementDescription: "3 TLG",
            effectDescription: "Unlock Unimpossible and Keep the Effect of Uprgade TFD #17",
            done() { return player[this.layer].points.gte(3) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        3: {
            requirementDescription: "4 TLG",
            effectDescription: "Unlock FLN and Autobuy the First 10 TFD Upgrades",
            done() { return player[this.layer].points.gte(4) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        4: {
            requirementDescription: "5 TLG",
            effectDescription: "Unlock True Ease and Allow Both Upgrade FLN #7a and #7b to be Bought and Unlock a FLN Level",
            done() { return player[this.layer].points.gte(5) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        5: {
            requirementDescription: "6 TLG",
            effectDescription: "Unlock 'A' and MaxBuy the True Ease 1st Buyable",
            done() { return player[this.layer].points.gte(6) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        6: {
            requirementDescription: "7 TLG",
            effectDescription: "Unlock ДА and Autogain 25% of UIP and Autoreset for Ca$h and Remove UIP's Reset Button",
            done() { return player[this.layer].points.gte(7) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        7: {
            requirementDescription: "8 TLG",
            effectDescription: "Unlock Exist AutoBuy the Next 8 TFD Upgrade and first 5 Neg Upgrades and Row 1 UIP Buyables",
            done() { return player[this.layer].points.gte(8) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        8: {
            requirementDescription: "9 TLG",
            effectDescription: "I would Like to add a Difficulty but this is the First Side and it has like nothing usefull so x1.5 Skil per TLG",
            done() { return player[this.layer].points.gte(9) },
            unlocked() {return hasMilestone(this.layer, this.id)},
            tooltip() {return "x"+format(new Decimal(1.5).pow(player[this.layer].points))}
        },
        9: {
            requirementDescription: "10 TLG",
            effectDescription: "Unlock Relax and Keep XST Milestones 1 (2nd) and 3 (4th)",
            done() { return player[this.layer].points.gte(10) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        10: {
            requirementDescription: "11 TLG",
            effectDescription: "Unlock Skip and Keep XST Milestone 4 (5th)",
            done() { return player[this.layer].points.gte(11) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        11: {
            requirementDescription: "12 TLG",
            effectDescription: "Unlock Restful and Keep XST Milestone 2 (3rd)",
            done() { return player[this.layer].points.gte(12) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        12: {
            requirementDescription: "13 TLG",
            effectDescription: "Unlock Infinite Dot and Keep ДА Milestone 1 (2nd)",
            done() { return player[this.layer].points.gte(13) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        13: {
            requirementDescription: "14 TLG",
            effectDescription: "Unlock Infinite Easy and Make Upgrade RTF #1 Better [XST Milestone 0] x (1/([Layer Number]^3)) → [XST Milestone 0] x (1/([Layer Number]^1.5))",
            done() { return player[this.layer].points.gte(14) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        14: {
            requirementDescription: "15 TLG",
            effectDescription: "Unlock Infinity and Make Upgrade RTF #1 Better again [XST Milestone 0] x (1/([Layer Number]^3)) → [XST Milestone 0] x (1/([Layer Number]^0.75))",
            done() { return player[this.layer].points.gte(15) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        15: {
            requirementDescription: "16 TLG",
            effectDescription: "Unlock Instant Win and Keep Milestones IFE 2 (3rd) and 3 (4th) but TLG is SOFTCAPED I",
            done() { return player[this.layer].points.gte(16) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        16: {
            requirementDescription: "17 TLG",
            effectDescription: "Unlock Millisecondless and Keep Milestone IFT 0 (1st) and For Every TLG After 16 To 20 Instacomplete 4 more Challenges on Reset (NEXT UPDATE To Much Work)",
            done() { return player[this.layer].points.gte(17) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
    },
})

addLayer("NEGRM", {
    name: "Negativity",
    symbol: "Neg",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        layerEffect: new Decimal(0),
    }},
    color: "#92248F",
    requires: new Decimal(1e3),
    resource: "Negativity",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        mult = mult.times(buyableEffect('UIPRM', 12))
        mult = mult.times(buyableEffect('FLNRM', 41)[2])
        mult = mult.times(buyableEffect('TESRM', 11))
        
        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 0)) vis = true
        return vis
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        if(getBuyableAmount(this.layer, 51).gte(1)) Gen = Gen.add(0.1)
        if(hasMilestone('XSTRM', 0)) Gen = Gen.add(player['XSTRM'].MEone)
        return Gen
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "- and some times double - [Row 1] (Brighter for visibility)" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Upgrades": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Negativity (Neg)' },
                    { "color": "#92248F", "font-size": "24px" }],
                ["display-text",
                    function() {
                        let text = '-' + format(player[this.layer].layerEffect) + ' Skill gain [1.5^cbrt(x) - 1] [after All effects unless specifed]'
                        if(getBuyableAmount('NEGRM', 42).gte(1)) text = '-' + format(player[this.layer].layerEffect) + ' Skill gain [1.5^sqrt(x) - 1] [after All effects unless specifed]'
                        if(getBuyableAmount('TFDRM', 141).gte(1) || hasMilestone('TLGRM', 2)) text = '+' + format(player[this.layer].layerEffect) + ' Base Skill gain [log25(x + 1) + 1]'
                        if(getBuyableAmount('NEGRM', 1042).gte(1)) text = '+' + format(player[this.layer].layerEffect) + ' Base Skill gain [log20(x + 1) + 1]'
                        return text
                    },
                    { "color": "#92248F", "font-size": "24px" }],
                "blank",
                ["row", [["buyable", 11]]],
                "blank",
                "blank",
                ["row", [["buyable", 21]]],
                "blank",
                "blank",
                ["row", [["buyable", 31]]],
                "blank",
                "blank",
                ["row", [["buyable", 41], "blank", "blank", "blank", "blank", ["buyable", 42]]],
                "blank",
                "blank",
                ["row", [["buyable", 51]]],
            ],
        },
        "i Upgrades": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Negativity (Neg)' },
                    { "color": "#92248F", "font-size": "24px" }],
                ["display-text",
                    function() {
                        let text = '-' + format(player[this.layer].layerEffect) + ' Skill gain [1.5^cbrt(x) - 1] [after All effects unless specifed]'
                        if(getBuyableAmount('NEGRM', 42).gte(1)) text = '-' + format(player[this.layer].layerEffect) + ' Skill gain [1.5^sqrt(x) - 1] [after All effects unless specifed]'
                        if(getBuyableAmount('TFDRM', 141).gte(1) || hasMilestone('TLGRM', 2)) text = '+' + format(player[this.layer].layerEffect) + ' Base Skill gain [log25(x + 1) + 1]'
                        if(getBuyableAmount('NEGRM', 1042).gte(1)) text = '+' + format(player[this.layer].layerEffect) + ' Base Skill gain [log20(x + 1) + 1]'
                        return text
                    },
                    { "color": "#92248F", "font-size": "24px" }],
                "blank",
                ["row", [["buyable", 1011]]],
                "blank",
                "blank",
                ["row", [["buyable", 1021]]],
                "blank",
                "blank",
                ["row", [["buyable", 1031]]],
                "blank",
                "blank",
                ["row", [["buyable", 1041], "blank", "blank", "blank", "blank", ["buyable", 1042]]],
                "blank",
                "blank",
                ["row", [["buyable", 1051]]],
            ],
            unlocked() {return inChallenge('ITWRM', 21) || hasChallenge('ITWRM', 21)},
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Negativity (Neg)' },
                    { "color": "#92248F", "font-size": "24px" }],
                ["display-text",
                    function() {
                        let text = '-' + format(player[this.layer].layerEffect) + ' Skill gain [1.5^cbrt(x) - 1] [after All effects unless specifed]'
                        if(getBuyableAmount('NEGRM', 42).gte(1)) text = '-' + format(player[this.layer].layerEffect) + ' Skill gain [1.5^sqrt(x) - 1] [after All effects unless specifed]'
                        if(getBuyableAmount('TFDRM', 141).gte(1) || hasMilestone('TLGRM', 2)) text = '+' + format(player[this.layer].layerEffect) + ' Base Skill gain [log25(x + 1) + 1]'
                        if(getBuyableAmount('NEGRM', 1042).gte(1)) text = '+' + format(player[this.layer].layerEffect) + ' Base Skill gain [log20(x + 1) + 1]'
                        return text
                    },
                    { "color": "#92248F", "font-size": "24px" }],,
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['NEGRM'].passiveGeneration().lt(0.25)},
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Negativity (Neg)' },
                    { "color": "#92248F", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' Neg/s and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#92248F", "font-size": "16px" }],
                ["display-text",
                    function() {
                        let text = '-' + format(player[this.layer].layerEffect) + ' Skill gain [1.5^cbrt(x) - 1] [after All effects unless specifed]'
                        if(getBuyableAmount('NEGRM', 42).gte(1)) text = '-' + format(player[this.layer].layerEffect) + ' Skill gain [1.5^sqrt(x) - 1] [after All effects unless specifed]'
                        if(getBuyableAmount('TFDRM', 141).gte(1) || hasMilestone('TLGRM', 2)) text = '+' + format(player[this.layer].layerEffect) + ' Base Skill gain [log25(x + 1) + 1]'
                        if(getBuyableAmount('NEGRM', 1042).gte(1)) text = '+' + format(player[this.layer].layerEffect) + ' Base Skill gain [log20(x + 1) + 1]'
                        return text
                    },
                    { "color": "#92248F", "font-size": "24px" }],
            ],
            unlocked() {return layers['NEGRM'].passiveGeneration().gt(0)},
        },
    },
    buyables: {
        11: {
            title() {return "<h2>Neg #1</h2>"},
            cost(x) { return new Decimal(10) },
            display() { return "<h2>/1.5 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: /"+format(this.effect().pow(-1))+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1).pow(-1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [21],
        },
        1011: {
            title() {return "<h2>Neg #i1</h2>"},
            cost(x) { return new Decimal(100) },
            display() { return "<h2>/0.75</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: /"+format(this.effect().pow(-1))+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1.333).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1021],
            unlocked() {return getBuyableAmount(this.layer, 11).gte(1)},
        },
        21: {
            title() {return "<h2>Neg #2</h2>"},
            cost(x) { return new Decimal(7) },
            display() { return "<h2>/1.25 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: /"+format(this.effect().pow(-1))+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(0.25).add(1).pow(-1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [31],
            unlocked() {return getBuyableAmount(this.layer, 11).gte(1)},
        },
        1021: {
            title() {return "<h2>Neg #i2</h2>"},
            cost(x) { return new Decimal(70) },
            display() { return "<h2>/0.666 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: /"+format(this.effect().pow(-1))+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(0.5).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1031],
            unlocked() {return getBuyableAmount(this.layer, 21).gte(1)},
        },
        31: {
            title() {return "<h2>Neg #3</h2>"},
            cost(x) { return new Decimal(5) },
            display() { return "<h2>x5 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(4).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [41, 42],
            unlocked() {return getBuyableAmount(this.layer, 21).gte(1)},
        },
        1031: {
            title() {return "<h2>Neg #i3</h2>"},
            cost(x) { return new Decimal(50) },
            display() { return "<h2>/2.5 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect().pow(-1))+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1).pow(-1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1041, 1042],
            unlocked() {return getBuyableAmount(this.layer, 31).gte(1)},
        },
        41: {
            title() {return "<h2>Neg #4a</h2>"},
            cost(x) { return new Decimal(25) },
            display() { return "<h2>/2 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: /"+format(this.effect().pow(-1))+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1).pow(-1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [51],
            unlocked() {return getBuyableAmount(this.layer, 31).gte(1)},
        },
        1041: {
            title() {return "<h2>Neg #i4a</h2>"},
            cost(x) { return new Decimal(250) },
            display() { return "<h2>/0.5 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: /"+format(this.effect().pow(-1))+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1051],
            unlocked() {return getBuyableAmount(this.layer, 41).gte(1)},
        },
        42: {
            title() {return "<h2>Neg #4b</h2>"},
            cost(x) { return new Decimal(25) },
            display() { return "<h2>Buff Neg's Layer Effect</h2><br><h3>make the cbrt a sqrt</h3><br><br><h2>Cost: "+format(this.cost()) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [51],
            unlocked() {return getBuyableAmount(this.layer, 31).gte(1)},
        },
        1042: {
            title() {return "<h2>Neg #i4b</h2>"},
            cost(x) { return new Decimal(250) },
            display() { return "<h2>Buff Neg's Layer Effect</h2><br><h3>log25 → log20</h3><br><br><h2>Cost: "+format(this.cost()) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [1051],
            unlocked() {return getBuyableAmount(this.layer, 42).gte(1)},
        },
        51: {
            title() {return "<h2>Neg #5</h2>"},
            cost(x) { return new Decimal(20) },
            display() { return "<h2>x10 Skill, Unlock more TFD Upgrades and Autogain 10% of Neg/s</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(9).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [],
            unlocked() {return getBuyableAmount(this.layer, 41).gte(1) && getBuyableAmount(this.layer, 42).gte(1)},
        },
        1051: {
            title() {return "<h2>Neg #i5</h2>"},
            cost(x) { return new Decimal(200) },
            display() { return "<h2>/4 Skill, Unlock The Other TFD i Upgrades</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect().pow(-1))+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(3).add(1).pow(-1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return getBuyableAmount(this.layer, 51).gte(1) && (inChallenge('ITWRM', 21) || inChallenge('ITWRM', 22) || inChallenge('ITWRM', 91))},
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player.points.lt(1e3)) inactive = true
        return inactive
    },
    automate() {
        let effect = new Decimal(-1);
        effect = new Decimal(-1).add(new Decimal(1.5).pow(player[this.layer].points.cbrt()));
        if(getBuyableAmount(this.layer, 42).gte(1)) effect = new Decimal(-1).add(new Decimal(1.5).pow(player[this.layer].points.sqrt()));
        if(getBuyableAmount('TFDRM', 141).gte(1) || hasMilestone('TLGRM', 2)) effect = player[this.layer].points.add(1).log(25).add(1);
        if(getBuyableAmount('NEGRM', 1042).gte(1)) effect = player[this.layer].points.add(1).log(20).add(1);
        player[this.layer].layerEffect = effect;
        if(hasMilestone('TLGRM', 7)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit)) {
                layers[this.layer].buyables[11].buy()
            };
            if(layers[this.layer].buyables[21].canAfford() && getBuyableAmount(this.layer, 21).lt(layers[this.layer].buyables[21].purchaseLimit) && getBuyableAmount(this.layer, 11).gte(1)) {
                layers[this.layer].buyables[21].buy()
            };
            if(layers[this.layer].buyables[31].canAfford() && getBuyableAmount(this.layer, 31).lt(layers[this.layer].buyables[31].purchaseLimit) && getBuyableAmount(this.layer, 21).gte(1)) {
                layers[this.layer].buyables[31].buy()
            };
            if(layers[this.layer].buyables[41].canAfford() && getBuyableAmount(this.layer, 41).lt(layers[this.layer].buyables[41].purchaseLimit)) {
                layers[this.layer].buyables[41].buy()
            };
            if(layers[this.layer].buyables[42].canAfford() && getBuyableAmount(this.layer, 42).lt(layers[this.layer].buyables[42].purchaseLimit)) {
                layers[this.layer].buyables[42].buy()
            };
            if(layers[this.layer].buyables[51].canAfford() && getBuyableAmount(this.layer, 51).lt(layers[this.layer].buyables[51].purchaseLimit) && getBuyableAmount(this.layer, 41).gte(1) && getBuyableAmount(this.layer, 42).gte(1)) {
                layers[this.layer].buyables[51].buy()
            };
        }
        if(hasMilestone('ITWRM', 14)) {
            if(layers[this.layer].buyables[1011].canAfford() && getBuyableAmount(this.layer, 1011).lt(layers[this.layer].buyables[1011].purchaseLimit)) {
                layers[this.layer].buyables[1011].buy()
            };
            if(layers[this.layer].buyables[1021].canAfford() && getBuyableAmount(this.layer, 1021).lt(layers[this.layer].buyables[1021].purchaseLimit) && getBuyableAmount(this.layer, 11).gte(1)) {
                layers[this.layer].buyables[1021].buy()
            };
            if(layers[this.layer].buyables[1031].canAfford() && getBuyableAmount(this.layer, 1031).lt(layers[this.layer].buyables[1031].purchaseLimit) && getBuyableAmount(this.layer, 21).gte(1)) {
                layers[this.layer].buyables[1031].buy()
            };
            if(layers[this.layer].buyables[1041].canAfford() && getBuyableAmount(this.layer, 1041).lt(layers[this.layer].buyables[1041].purchaseLimit)) {
                layers[this.layer].buyables[1041].buy()
            };
            if(layers[this.layer].buyables[1042].canAfford() && getBuyableAmount(this.layer, 1042).lt(layers[this.layer].buyables[1042].purchaseLimit)) {
                layers[this.layer].buyables[1042].buy()
            };
        }
    },
})

addLayer("CSHRM", {
    name: "Ca$h",
    symbol: "$",
    position: 2,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#009000",
    requires: new Decimal(100e3),
    resource: "Ca$h",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "static",
    exponent: 2,
    gainMult() {
        mult = new Decimal(1)

        mult = mult.times(buyableEffect('TESRM', 11).pow(-1))

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 1)) vis = true
        return vis
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Money Time [Row 1] (Brighter for visibility)" },
        },
    },
    autoPrestige() {
        let auto = false
        if(hasMilestone('TLGRM', 6)) auto = true
        return auto
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Milestones": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Ca$h ($)' },
                    { "color": "#009000", "font-size": "24px" }],
                "blank",
                "prestige-button",
                "blank",
                "milestones"
            ],
        },
        "Buyables": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Ca$h ($)' },
                    { "color": "#009000", "font-size": "24px" }],
                "blank",
                "prestige-button",
                "blank",
                "buyables"
            ],
            unlocked() {return hasMilestone('CSHRM', 3)},
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 Ca$h",
            effectDescription() {return "x2 Skill per Milestone Effect: x"+format(new Decimal(2).pow(player[this.layer].milestones.length))},
            done() { return player[this.layer].points.gte(1) },
        },
        1: {
            requirementDescription: "3 Ca$h",
            effectDescription() {return "+0.333 Base Skill Gain per Milestone Effect: +"+format(new Decimal(player[this.layer].milestones.length).times(1/3))},
            done() { return player[this.layer].points.gte(3) },
        },
        2: {
            requirementDescription: "5 Ca$h",
            effectDescription() {return "Ca$h Boosts Skill ($+1) and Allow Both Upgrades TFD #16a and #16b to be Bought Effect: x"+format(player[this.layer].points.add(1))},
            done() { return player[this.layer].points.gte(5) },
        },
        3: {
            requirementDescription: "8 Ca$h",
            effectDescription() {return "Unlock Ca$h Buyables"},
            done() { return player[this.layer].points.gte(8) && hasMilestone('FLNRM', 1) },
            unlocked() {return hasMilestone('FLNRM', 1)}
        },
        4: {
            requirementDescription: "6 Ca$h",
            effectDescription() {return "x1e10 Skill"},
            done() { return player[this.layer].points.gte(6) && inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 1) },
            unlocked() {return inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 1)}
        },
        5: {
            requirementDescription: "7 Ca$h",
            effectDescription() {return "x1e10 Skill again and x1,000 UIP, AUI and UUP"},
            done() { return player[this.layer].points.gte(7) && inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 1) },
            unlocked() {return inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 1)}
        },
        6: {
            requirementDescription: "4 Ca$h",
            effectDescription() {return "x1e25 Skill"},
            done() { return player[this.layer].points.gte(4) && inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 2) },
            unlocked() {return inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 2)}
        },
        7: {
            requirementDescription: "6 Ca$h again",
            effectDescription() {return "FLN Levels Don't Reset Upgrades and x1,000 'A'"},
            done() { return player[this.layer].points.gte(6) && inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 2) },
            unlocked() {return inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 2)}
        },
        8: {
            requirementDescription: "2 Ca$h",
            effectDescription() {return "+100 Base Skill gain and x1e20 Skill gain"},
            done() { return player[this.layer].points.gte(2) && inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 3) },
            unlocked() {return inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 3)}
        },
    },
    buyables: {
        11: {
            title() {return "<h2>p2w</h2>"},
            cost(x) { return new Decimal(4).times(new Decimal(2).pow(x.add(1).pow(0.1))).tetrate(x.add(1).pow(0.01)) },
            display() { return "<h2>+x0.5 Skill per level every 10 levels x1.1 Effect</h2><br><br><br><h2>Requires: "+format(this.cost())+" UIP</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(0.5).times(getBuyableAmount(this.layer, this.id)).add(1).times(new Decimal(1.1).pow(new Decimal.floor(getBuyableAmount(this.layer, this.id).times(1/10)))) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player.points.lt(100e3)) inactive = true
        return inactive
    },
    automate() {
        if(getBuyableAmount('RLXRM', 11).gte(1)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit)) {
                layers[this.layer].buyables[11].buy()
            };
        }
    },
})

addLayer("UIPRM", {
    name: "Unimpossible",
    symbol: "UIP",
    position: 3,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        pointsB: new Decimal(0),
        pointsC: new Decimal(0),
    }},
    color: "#580C72",
    requires: new Decimal(10e6),
    resource: "Unimpossible",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        mult = mult.times(buyableEffect('FLNRM', 21))
        mult = mult.times(buyableEffect('FLNRM', 41)[3])
        mult = mult.times(buyableEffect('TESRM', 11))
        if(hasMilestone('CSHRM', 5)) mult = mult.times(1e3)

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 2)) vis = true
        return vis
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "- and some times double - [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        if(hasMilestone('TLGRM', 6)) Gen = Gen.add(0.25)
        if(hasMilestone('XSTRM', 0)) Gen = Gen.add(player['XSTRM'].MEone)
        return Gen
    },
    prestigeButtonText() {return "Reset Skill For +"+format(getResetGain(this.layer))+" Unimpossible, +"+format(getResetGain(this.layer).sqrt())+" Almost Unimpossible and +"+format(getResetGain(this.layer).cbrt())+" Ununpossable<br><br> Next at "+format(getNextAt(this.layer))+" Skill"},
    onPrestige(gain) {
        player[this.layer].pointsB = player[this.layer].pointsB.add(getResetGain(this.layer).sqrt())
        player[this.layer].pointsC = player[this.layer].pointsC.add(getResetGain(this.layer).cbrt())
    },
    tabFormat: {
        "Buyables": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Unimpossible (UIP)' },
                    { "color": "#580C72", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].pointsB) + ' Almost Unimpossible (AUI)' },
                    { "color": "#580C72", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].pointsC) + ' Ununpossable (UUP)' },
                    { "color": "#580C72", "font-size": "24px" }],
                "blank",
                "buyables",
            ],
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Unimpossible (UIP)' },
                    { "color": "#580C72", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].pointsB) + ' Almost Unimpossible (AUI)' },
                    { "color": "#580C72", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].pointsC) + ' Ununpossable (UUP)' },
                    { "color": "#580C72", "font-size": "24px" }],
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['UIPRM'].passiveGeneration().lt(0.25)},
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Unimpossible (UIP)' },
                    { "color": "#580C72", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' UIP/s and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#580C72", "font-size": "16px" }],
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].pointsB) + ' Almost Unimpossible (AUI)' },
                    { "color": "#580C72", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer).sqrt())) + ' AUI/s and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#580C72", "font-size": "16px" }],
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].pointsC) + ' Ununpossable (UUP)' },
                    { "color": "#580C72", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer).cbrt())) + ' UUP/s and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#580C72", "font-size": "16px" }],
            ],
            unlocked() {return layers['UIPRM'].passiveGeneration().gt(0)},
        },
    },
    buyables: {
        11: {
            title() {return "<h2>AAA #1</h2>"},
            cost(x) { return new Decimal(1).times(new Decimal(5).pow(x.pow(1.5))).times(buyableEffect(this.layer, 22)) },
            display() { return "<h2>x"+format(buyableEffect(this.layer, 23))+" Skill per level</h2><br><br><br><h2>Cost: "+format(this.cost())+" UIP</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit()) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return buyableEffect(this.layer, 23).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(!hasChallenge('ITWRM', 31)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {return new Decimal(100).add(buyableEffect(this.layer, 21))},
        },
        12: {
            title() {return "<h2>AA #1</h2>"},
            cost(x) { return new Decimal(1).times(new Decimal(5).pow(x.pow(1.5))).times(buyableEffect(this.layer, 22)) },
            display() { return "<h2>x"+format(buyableEffect(this.layer, 23))+" TFD per level</h2><br><br><br><h2>Cost: "+format(this.cost())+" AUI</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit()) },
            canAfford() { return player[this.layer].pointsB.gte(this.cost()) },
            effect() { return buyableEffect(this.layer, 23).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(!hasChallenge('ITWRM', 31)) player[this.layer].pointsB = player[this.layer].pointsB.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {return new Decimal(100).add(buyableEffect(this.layer, 21))},
        },
        13: {
            title() {return "<h2>A #1</h2>"},
            cost(x) { return new Decimal(1).times(new Decimal(5).pow(x.pow(1.5))).times(buyableEffect(this.layer, 22)) },
            display() { return "<h2>x"+format(buyableEffect(this.layer, 23))+" Neg per level</h2><br><br><br><h2>Cost: "+format(this.cost())+" UUI</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit()) },
            canAfford() { return player[this.layer].pointsC.gte(this.cost()) },
            effect() { return buyableEffect(this.layer, 23).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(!hasChallenge('ITWRM', 31)) player[this.layer].pointsC = player[this.layer].pointsC.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {return new Decimal(100).add(buyableEffect(this.layer, 21))},
        },
        21: {
            title() {return "<h2>AAA #2</h2>"},
            cost(x) { return new Decimal(100).times(new Decimal(5).pow(x.pow(1.5))) },
            display() { return "<h2>Increase Row 1 Buyables' Max amount by 10 per level</h2><br><br><br><h2>Cost: "+format(this.cost())+" UIP</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(10) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(90),
            unlocked() {return inChallenge('ITWRM', 31) || hasChallenge('ITWRM', 31)}
        },
        22: {
            title() {return "<h2>AA #2</h2>"},
            cost(x) { return new Decimal(100).times(new Decimal(5).pow(x.pow(1.5))) },
            display() { return "<h2>/1.1 Row 1 Buyables' Costs per level</h2><br><br><br><h2>Cost: "+format(this.cost())+" AUI</h2><br><h3>Effect: x"+format(this.effect().pow(-1))+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit) },
            canAfford() { return player[this.layer].pointsB.gte(this.cost()) },
            effect() { return new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id)).pow(-1) },
            buy() {
                player[this.layer].pointsB = player[this.layer].pointsB.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(100),
            unlocked() {return inChallenge('ITWRM', 31) || hasChallenge('ITWRM', 31)}
        },
        23: {
            title() {return "<h2>A #2</h2>"},
            cost(x) { return new Decimal(100).times(new Decimal(5).pow(x.pow(1.5))) },
            display() { return "<h2>+0.1 Row 1 Buyables' Effect per level</h2><br><br><br><h2>Cost: "+format(this.cost())+" UUI</h2><br><h3>Effect: x"+format(this.effect().add(-1.1))+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit) },
            canAfford() { return player[this.layer].pointsC.gte(this.cost()) },
            effect() { return new Decimal(1.1).add(getBuyableAmount(this.layer, this.id).times(0.1)) },
            buy() {
                player[this.layer].pointsC = player[this.layer].pointsC.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(100),
            unlocked() {return inChallenge('ITWRM', 31) || hasChallenge('ITWRM', 31)}
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player.points.lt(10e6)) inactive = true
        return inactive
    },
    automate() {
        if(layers['UIPRM'].passiveGeneration().gt(0)) {
            player[this.layer].pointsB = player[this.layer].pointsB.add(getResetGain(this.layer).sqrt().times(layers['UIPRM'].passiveGeneration()).times(0.05));
            player[this.layer].pointsC = player[this.layer].pointsC.add(getResetGain(this.layer).cbrt().times(layers['UIPRM'].passiveGeneration()).times(0.05));
        };
        if(inChallenge('ITWRM', 31)) {
            player[this.layer].points = player[this.layer].points.add(1);
            player[this.layer].pointsB = player[this.layer].pointsB.add(1);
            player[this.layer].pointsC = player[this.layer].pointsC.add(1);
        };
        if(hasMilestone('TLGRM', 7)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit())) {
                layers[this.layer].buyables[11].buy()
            };
            if(layers[this.layer].buyables[12].canAfford() && getBuyableAmount(this.layer, 12).lt(layers[this.layer].buyables[12].purchaseLimit())) {
                layers[this.layer].buyables[12].buy()
            };
            if(layers[this.layer].buyables[13].canAfford() && getBuyableAmount(this.layer, 13).lt(layers[this.layer].buyables[13].purchaseLimit())) {
                layers[this.layer].buyables[13].buy()
            };
        }
        if(hasMilestone('ITWRM', 6)) {
            if(layers[this.layer].buyables[21].canAfford() && getBuyableAmount(this.layer, 21).lt(layers[this.layer].buyables[21].purchaseLimit)) {
                layers[this.layer].buyables[21].buy()
            };
            if(layers[this.layer].buyables[22].canAfford() && getBuyableAmount(this.layer, 22).lt(layers[this.layer].buyables[22].purchaseLimit)) {
                layers[this.layer].buyables[22].buy()
            };
            if(layers[this.layer].buyables[23].canAfford() && getBuyableAmount(this.layer, 23).lt(layers[this.layer].buyables[23].purchaseLimit)) {
                layers[this.layer].buyables[23].buy()
            };
        }
    },
})

addLayer("FLNRM", {
    name: "Friendliness",
    symbol: "FLN",
    position: 4,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        level: new Decimal(0),
        BUpgrades: new Decimal(0),
        LvReq: new Decimal(100e3),
    }},
    color: "#cecece",
    requires: new Decimal(1e9),
    resource: "Friendliness",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        mult = mult.times(buyableEffect(this.layer, 41)[4])
        mult = mult.times(buyableEffect(this.layer, 61))
        mult = mult.times(buyableEffect('TESRM', 11))

        if(inChallenge('ITWRM', 32) || (hasChallenge('ITWRM', 32) && player['ITWRM'].ActiveChallenge)) mult = mult.times(1e3)

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 3)) vis = true
        return vis
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        if(hasMilestone('XSTRM', 0)) Gen = Gen.add(player['XSTRM'].MEone)
        return Gen
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Friends [Row 1]" },
        },
        2: {
            title: "Info About this layer part 2",
            body() { return "Levels reset FLN" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Upgrades": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Friendliness (FLN)' },
                    { "color": "#00ff00", "font-size": "24px" }],
                "blank",
                ["row", [["buyable", 11]]],
                "blank",
                "blank",
                ["row", [["buyable", 21]]],
                "blank",
                "blank",
                ["row", [["buyable", 31]]],
                "blank",
                "blank",
                ["row", [["buyable", 41]]],
                "blank",
                "blank",
                ["row", [["buyable", 51]]],
                "blank",
                "blank",
                ["row", [["buyable", 61]]],
                "blank",
                "blank",
                ["row", [["buyable", 71], "blank", "blank", "blank", "blank", ["buyable", 72]]],
                "blank",
                "blank",
                ["row", [["buyable", 81]]],
            ],
        },
        "Levels": {
            content: [
                ["infobox", 2],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].level) + ' Friendliness level (FLNLV)' },
                    { "color": "#7eb474", "font-size": "24px" }],
                "blank",
                "clickables",
                "blank",
                "milestones",
            ],
            unlocked() {return getBuyableAmount('FLNRM', 51).gte(1)}
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Friendliness (FLN)' },
                    { "color": "#00ff00", "font-size": "24px" }],
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['FLNRM'].passiveGeneration().lt(0.25)}
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Friendliness (FLN)' },
                    { "color": "#00ff00", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' FLN/s and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#00ff00", "font-size": "16px" }],
            ],
            unlocked() {return layers['FLNRM'].passiveGeneration().gt(0)},
        },
    },
    clickables: {
        11: {
            display() {return "Reset Friendliness and Friendliness upgrades exsept #5 For +1 FLN level<br><br> Req: "+format(player[this.layer].points)+"/"+format(player[this.layer].LvReq)+" FLN"},
            canClick() {return player[this.layer].points.gte(player[this.layer].LvReq)},
            onClick() {
                player[this.layer].points = new Decimal(0)
                player[this.layer].level = player[this.layer].level.add(1)
                player[this.layer].BUpgrades = new Decimal(0)
                if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 11, new Decimal(0))
                if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 21, new Decimal(0))
                if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 31, new Decimal(0))
                if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 41, new Decimal(0))
                if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 61, new Decimal(0))
                if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 71, new Decimal(0))
                if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 72, new Decimal(0))
                if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 81, new Decimal(0))
            },
        },
    },
    buyables: {
        11: {
            title() {return "<h2>FLN #1</h2>"},
            cost(x) { return new Decimal(1) },
            display() { return "<h2>Total Upgrades (in this layer) Boost Skill</h2><br><h3>(Upgrades x 5)^0.25 + 1</h3><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(player[this.layer].BUpgrades.times(5).pow(0.25)).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            purchaseLimit: new Decimal(1),
            branches: [21],
        },
        21: {
            title() {return "<h2>FLN #2</h2>"},
            cost(x) { return new Decimal(100) },
            display() { return "<h2>Total Upgrades (in this layer) Boost UIP, AUI and UUP</h2><br><h3>(Upgrades x 2)^0.25 + 1</h3><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(player[this.layer].BUpgrades.times(2).pow(0.25)).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return getBuyableAmount(this.layer, 11).gte(1)},
            branches: [31],
        },
        31: {
            title() {return "<h2>FLN #3</h2>"},
            cost(x) { return new Decimal(5e3) },
            display() { return "<h2>x10 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(9).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return getBuyableAmount(this.layer, 21).gte(1)},
            branches: [41],
        },
        41: {
            title() {return "<h2>FLN #4</h2>"},
            cost(x) { return new Decimal(50e3) },
            display() { return "<h2>x5 TFD, x3 Neg, x2 UIP, AUI, UUP and x1.5 FLN</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return {1: getBuyableAmount(this.layer, this.id).times(4).add(1), 2: getBuyableAmount(this.layer, this.id).times(2).add(1), 3: getBuyableAmount(this.layer, this.id).times(1).add(1), 4: getBuyableAmount(this.layer, this.id).times(0.5).add(1)} },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return getBuyableAmount(this.layer, 31).gte(1)},
            branches: [51],
        },
        51: {
            title() {return "<h2>FLN #5</h2>"},
            cost(x) { return new Decimal(50e3) },
            display() { return "<h2>Unlock Level Sub-Tab</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return getBuyableAmount(this.layer, 41).gte(1) || getBuyableAmount(this.layer, this.id).gte(1)},
            branches: [61],
        },
        61: {
            title() {return "<h2>FLN #6</h2>"},
            cost(x) { return new Decimal(100e3) },
            display() { return "<h2>Total Upgrades (in this layer) Boost FLN</h2><br><h3>sqrt(Upgrades) + 1</h3><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(player[this.layer].BUpgrades.sqrt()).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return (getBuyableAmount(this.layer, 51).gte(1) || getBuyableAmount(this.layer, 61).gte(1)) && hasMilestone(this.layer, 0)},
            branches: [71, 72],
        },
        71: {
            title() {return "<h2>FLN #7a</h2>"},
            cost(x) { return new Decimal(250e3) },
            display() { return "<h2>x10 Skill and Lock #7a</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) && (getBuyableAmount(this.layer, 72).lt(1) || hasMilestone('TLGRM', 4)) },
            effect() { return getBuyableAmount(this.layer, this.id).times(9).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return getBuyableAmount(this.layer, 61).gte(1)},
            branches: [81],
        },
        72: {
            title() {return "<h2>FLN #7b</h2>"},
            cost(x) { return new Decimal(250e3) },
            display() { return "<h2>+5 levels to TFD #16a and #16b and Lock #7a</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) && (getBuyableAmount(this.layer, 71).lt(1) || hasMilestone('TLGRM', 4)) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return getBuyableAmount(this.layer, 61).gte(1)},
            branches: [81],
        },
        81: {
            title() {return "<h2>FLN #8</h2>"},
            cost(x) { return new Decimal(10e6).times(new Decimal(1.1).pow(x.times(3).pow(1))) },
            display() { return "<h2>Does Nothing</h2><br><br><br><h2>Requires: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            unlocked() {return (getBuyableAmount(this.layer, 71).gte(1) || getBuyableAmount(this.layer, 71).gte(1)) && inChallenge('ITWRM', 91)},
            branches: [],
        },
    },
    milestones: {
        0: {
            requirementDescription: "Level 1",
            effectDescription: "Unlock More FLN Upgrades",
            done() { return player[this.layer].level.gte(1) },
        },
        1: {
            requirementDescription: "Level 2",
            effectDescription: "Unlock More Ca$h Milestones",
            done() { return player[this.layer].level.gte(2) },
        },
        2: {
            requirementDescription: "Level 3",
            effectDescription() {return "10^(FLN level) Boost Skill Effect: x"+format(new Decimal(10).pow(player[this.layer].level))},
            done() { return player[this.layer].level.gte(3) && hasMilestone('TLGRM', 4) },
            unlocked() {return hasMilestone('TLGRM', 4)}
        },
        3: {
            requirementDescription: "Level 3 again!",
            effectDescription() {return "Root XST Requirement by 2"},
            done() { return player[this.layer].level.gte(3) && inChallenge('ITWRM', 91) },
            unlocked() {return inChallenge('ITWRM', 91)}
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player.points.lt(1e9)) inactive = true
        return inactive
    },
    automate() {
        player[this.layer].LvReq = new Decimal(100e3).times(new Decimal(50).pow(player[this.layer].level).add(1));
        if(hasMilestone('XSTRM', 1)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit)) {
                layers[this.layer].buyables[11].buy()
            };
            if(layers[this.layer].buyables[21].canAfford() && getBuyableAmount(this.layer, 21).lt(layers[this.layer].buyables[21].purchaseLimit)) {
                layers[this.layer].buyables[21].buy()
            };
            if(layers[this.layer].buyables[31].canAfford() && getBuyableAmount(this.layer, 31).lt(layers[this.layer].buyables[31].purchaseLimit)) {
                layers[this.layer].buyables[31].buy()
            };
            if(layers[this.layer].buyables[41].canAfford() && getBuyableAmount(this.layer, 41).lt(layers[this.layer].buyables[41].purchaseLimit)) {
                layers[this.layer].buyables[41].buy()
            };
            if(layers[this.layer].buyables[51].canAfford() && getBuyableAmount(this.layer, 51).lt(layers[this.layer].buyables[51].purchaseLimit)) {
                layers[this.layer].buyables[51].buy()
            };
        }
        if(hasChallenge('ITWRM', 52)) {
            if(layers[this.layer].buyables[61].canAfford() && getBuyableAmount(this.layer, 61).lt(layers[this.layer].buyables[61].purchaseLimit)) {
                layers[this.layer].buyables[61].buy()
            };
            if(layers[this.layer].buyables[71].canAfford() && getBuyableAmount(this.layer, 71).lt(layers[this.layer].buyables[71].purchaseLimit)) {
                layers[this.layer].buyables[71].buy()
            };
            if(layers[this.layer].buyables[72].canAfford() && getBuyableAmount(this.layer, 72).lt(layers[this.layer].buyables[72].purchaseLimit)) {
                layers[this.layer].buyables[72].buy()
            };
        }
        if(hasMilestone('XSTRM', 3) && player[this.layer].points.gte(player[this.layer].LvReq)) {
            player[this.layer].points = new Decimal(0)
            player[this.layer].level = player[this.layer].level.add(1)
            if(!hasMilestone('CSHRM', 5)) player[this.layer].BUpgrades = new Decimal(0)
            if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 11, new Decimal(0))
            if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 21, new Decimal(0))
            if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 31, new Decimal(0))
            if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 41, new Decimal(0))
            if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 61, new Decimal(0))
            if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 71, new Decimal(0))
            if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 72, new Decimal(0))
            if(!hasMilestone('CSHRM', 5)) setBuyableAmount(this.layer, 81, new Decimal(0))
        };
    },
})

addLayer("TESRM", {
    name: "True Ease",
    symbol: "TES",
    position: 5,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#cecece",
    requires: new Decimal(100e9),
    resource: "True Ease",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        mult = mult.times(buyableEffect(this.layer, 11))

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) inactive = true

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 4)) vis = true
        return vis
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        if(hasMilestone('XSTRM', 0)) Gen = Gen.add(player['XSTRM'].MEone)
        return Gen
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Friends [Row 1]" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Buyables": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' True Ease (TES)' },
                    { "color": "#cecece", "font-size": "24px" }],
                "blank",
                "buyables",
            ],
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' True Ease (TES)' },
                    { "color": "#cecece", "font-size": "24px" }],
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['TESRM'].passiveGeneration().lt(0.25)},
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' True Ease (TES)' },
                    { "color": "#cecece", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' TES/s and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#cecece", "font-size": "16px" }],
            ],
            unlocked() {return layers['TESRM'].passiveGeneration().gt(0)},
        },
    },
    buyables: {
        11: {
            title() {return "<h2>Mega Booster I</h2>"},
            cost(x) { return new Decimal(0.2).times(new Decimal(5).pow(x.add(1).pow(0.25))).tetrate(x.add(1).pow(0.1)) },
            display() { return "<h3>Boost all Non-Static layers (to this Point) by x1.01 per level and Devide all Static layers (to this Point exsept TLG) Requirments by /1.01 (also Points doesn't Count)</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+" and /"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit()) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(1.01).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                if(hasMilestone('TLGRM', 5) && player[this.layer].points.gte(this.cost())){
                    this.buy();
                }
            },
            purchaseLimit() {
                let limit = new Decimal(250)
                if(hasChallenge('ITWRM', 41)) limit = limit.add(100)
                return limit
            },
        },
        12: {
            title() {return "<h2>Mega Booster II</h2>"},
            cost(x) { return new Decimal(20).times(new Decimal(5).pow(x.add(1).pow(0.3))).tetrate(x.add(1).pow(0.07)) },
            display() { return "<h2>x1.1 Skill per level</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit()) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(getBuyableAmount('RLXRM', 31).lt(1)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let limit = new Decimal(150)
                return limit
            },
            unlocked() {return (inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 1)) || (challengeCompletions('ITWRM', 91) == 5)}
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 32)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player.points.lt(100e9)) inactive = true
        return inactive
    },
    automate() {
        if(hasMilestone('XSTRM', 1)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit())) {
                layers[this.layer].buyables[11].buy()
            };
        }
        if(getBuyableAmount('RLXRM', 22).gte(1)) {
            if(layers[this.layer].buyables[12].canAfford() && getBuyableAmount(this.layer, 12).lt(layers[this.layer].buyables[12].purchaseLimit())) {
                layers[this.layer].buyables[12].buy()
            };
        }
    },
})

addLayer("ARM", {
    name: "A",
    symbol: "A",
    position: 6,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(10e12),
    resource: "A",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        if(hasMilestone('ДARM', 2)) mult = mult.times(new Decimal(1.05).pow(player['ДARM'].points))
        if(hasChallenge('ITWRM', 51)) mult = mult.times(1e3)
        if(hasMilestone('CSHRM', 5)) mult = mult.times(1e3)

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 41)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 5)) vis = true
        return vis
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Alphabet [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        if(hasMilestone('ДARM', 0)) Gen = Gen.add(0.25)
        if(hasMilestone('XSTRM', 0)) Gen = Gen.add(player['XSTRM'].MEone)
        return Gen
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Buyables": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + " 'A'" },
                    { "color": "#ffff00", "font-size": "24px" }],
                "blank",
                ["display-text",
                    function() { return 'To Unlock the Next Buyable you Need atleast 10 or Max of the Prev Buyable' },
                    { "color": "#ffff00", "font-size": "24px" }],
                "buyables",
            ],
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + " 'A'" },
                    { "color": "#ffff00", "font-size": "24px" }],
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['ARM'].passiveGeneration().lt(0.25)}
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + " 'A'" },
                    { "color": "#ffff00", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + " 'A'/s and the percent is "+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#ffff00", "font-size": "16px" }],
            ],
            unlocked() {return layers['ARM'].passiveGeneration().gt(0)},
        },
    },
    buyables: {
        11: {
            title() {return "<h2>A</h2>"},
            cost(x) { return new Decimal(0.5).times(new Decimal(2).pow(x.add(1).pow(0.25))).tetrate(x.add(1).pow(0.1)) },
            display() { return "<h3>Add +0.01 Base Skill Gain per level</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: +"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(new Decimal(0.01)) },
            buy() {
                if(!hasMilestone('ДARM', 1)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        12: {
            title() {return "<h2>B</h2>"},
            cost(x) { return new Decimal(25).times(new Decimal(2).pow(x.add(1).pow(0.25))).tetrate(x.add(1).pow(0.1)) },
            display() { return "<h3>Boost Skill Based on 'A'</h3><br><h2>(('A' + 1)^(buyable Amount x 0.025))^(1/(('A' + 1)^-0.01)) Min: x2</h2><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal.max(player[this.layer].points.add(1).pow(getBuyableAmount(this.layer, this.id).times(0.025)).pow(new Decimal(1).times(player[this.layer].points.add(1).pow(-0.01))), new Decimal(2)) },
            buy() {
                if(!hasMilestone('ДARM', 1)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 25,
            unlocked() {return getBuyableAmount(this.layer, 11).gte(10)}
        },
        13: {
            title() {return "<h2>C</h2>"},
            cost(x) { return new Decimal(1.5e6).times(new Decimal(2).pow(x.add(1).pow(0.25))).tetrate(x.add(1).pow(0.01)) },
            display() { return "<h3>Cool Boost Total Buyables (in this layer) boost Skill</h3><br><h2>log25(Buyables x 5 + 1)</h2><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, 11).add(getBuyableAmount(this.layer, 12)).add(getBuyableAmount(this.layer, this.id)).add(getBuyableAmount(this.layer, 14)).add(getBuyableAmount(this.layer, 21)).add(getBuyableAmount(this.layer, 22)).times(5).add(1).log(25) },
            buy() {
                if(!hasMilestone('ДARM', 1)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return getBuyableAmount(this.layer, 12).gte(10)}
        },
        14: {
            title() {return "<h2>D</h2>"},
            cost(x) { return new Decimal(500e6).times(new Decimal(2).pow(x.add(1).pow(0.25))).tetrate(x.add(1).pow(0.01)) },
            display() { return "<h3>Doesn't Have an Effect</h3><br><h2>x1 Skill</h2><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(1).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(!hasMilestone('ДARM', 1)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return getBuyableAmount(this.layer, 13).gte(10)}
        },
        21: {
            title() {return "<h2>E</h2>"},
            cost(x) { return new Decimal(500e15).times(new Decimal(2).pow(x.add(1).pow(0.25))).tetrate(x.add(1).pow(0.01)) },
            display() { return "<h3>Effect: ДА Boost Skill</h3><br><h2>log10(sqrt(ДА) + 1)</h2><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return (player[this.layer].points.sqrt().add(1).log10()).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 5,
            unlocked() {return getBuyableAmount(this.layer, 14).gte(10)}
        },
        22: {
            title() {return "<h2>F</h2>"},
            cost(x) {
                if(inChallenge('ITWRM', 91)) return new Decimal(player[this.layer].points.pow(0.8)).times(new Decimal(2).pow(x.add(1).pow(0.25))).tetrate(x.add(1).pow(0.01))
                return new Decimal(player[this.layer].points).times(new Decimal(2).pow(x.add(1).pow(0.25))).tetrate(x.add(1).pow(0.01))
            },
            display() {
                if(getBuyableAmount(this.layer, this.id).lt(1)) {
                    return "<h3>Funny</h3><br><h2>Funny Boost ^100 'A'</h2><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>"
                }
                else {
                    return "<h3>Failed</h3><br><h2>FAKE (I lied)</h2><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>"
                }
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return getBuyableAmount(this.layer, 21).gte(5)}
        }
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 32)) inactive = true
        if(inChallenge('ITWRM', 41)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player.points.lt(10e12)) inactive = true
        return inactive
    },
    automate() {
        if(hasMilestone('XSTRM', 2)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit)) {
                layers[this.layer].buyables[11].buy()
            };
            if(layers[this.layer].buyables[12].canAfford() && getBuyableAmount(this.layer, 12).lt(layers[this.layer].buyables[12].purchaseLimit)) {
                layers[this.layer].buyables[12].buy()
            };
            if(layers[this.layer].buyables[13].canAfford() && getBuyableAmount(this.layer, 13).lt(layers[this.layer].buyables[13].purchaseLimit)) {
                layers[this.layer].buyables[13].buy()
            };
            if(layers[this.layer].buyables[14].canAfford() && getBuyableAmount(this.layer, 14).lt(layers[this.layer].buyables[14].purchaseLimit)) {
                layers[this.layer].buyables[14].buy()
            };
        }
        if(hasMilestone('ITWRM', 15)) {
            if(layers[this.layer].buyables[21].canAfford() && getBuyableAmount(this.layer, 21).lt(layers[this.layer].buyables[21].purchaseLimit)) {
                layers[this.layer].buyables[21].buy()
            };
        }
        if(inChallenge('ITWRM', 42) || inChallenge('ITWRM', 51) || inChallenge('ITWRM', 52) || inChallenge('ITWRM', 61)) {
            player[this.layer].points = player[this.layer].points.add(0.05);
        };
    },
})

addLayer("ДARM", {
    name: "Felix the ДА",
    symbol: "ДА",
    position: 7,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#00ff00",
    requires: new Decimal(10e9),
    resource: "ДА",
    baseResource: "'A'",
    baseAmount() {return player['ARM'].points},
    type: "static",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 41)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 42)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 6)) vis = true
        return vis
    },
    autoPrestige() {
        let auto = false
        if(getBuyableAmount('RTFRM', 21).gte(1)) auto = true
        return auto
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Alphabet [Row 1]" },
        },
    },
    onPrestige(gain) {
        if(getBuyableAmount('RTFRM', 41).lt(1)) player['ARM'].points = new Decimal(0)
    },
    resetsNothing: true,
    resetDescription: "Reset 'A' (not Buyables) For ",
    tabFormat: {
        "Milestones": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' ДА' },
                    { "color": "#ffffff", "font-size": "24px" }],
                "blank",
                "prestige-button",
                "blank",
                "milestones",
            ],
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 ДА",
            effectDescription: "AutoGain 25% of 'A' and Remove its Reset button",
            done() { return player[this.layer].points.gte(1) },
        },
        1: {
            requirementDescription: "2 ДА",
            effectDescription: "row 1 'A' Buyables Cost Nothing",
            done() { return player[this.layer].points.gte(2) || hasMilestone('TLGRM', 12) },
            unlocked() {return hasMilestone(this.layer, 0) || hasMilestone(this.layer, this.id)},
        },
        2: {
            requirementDescription: "360 ДА",
            effectDescription: "x1.05 'A' Per ДА",
            done() { return (player[this.layer].points.gte(360) && getBuyableAmount('RTFRM', 51).gte(1)) || hasMilestone('ITWRM', 8) },
            tooltip() {return "x"+format(new Decimal(1.05).pow(player[this.layer].points))},
            unlocked() {return (hasMilestone(this.layer, 1) && getBuyableAmount('RTFRM', 51).gte(1)) || hasMilestone(this.layer, this.id)},
        }
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 32)) inactive = true
        if(inChallenge('ITWRM', 41)) inactive = true
        if(inChallenge('ITWRM', 42)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player['ARM'].points.lt(1e9)) inactive = true
        return inactive
    },
})

addLayer("XSTRM", {
    name: "Exist",
    symbol: "XST",
    position: 8,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        MEone: new Decimal(0)
    }},
    color: "#cecece",
    requires: new Decimal(100e15),
    resource: "Exist",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "static",
    exponent: 0.55,
    base: 10,
    gainMult() {
        mult = new Decimal(1)

        if(hasMilestone('ITWRM', 9)) mult = mult.times(new Decimal(10).pow(player['XSTRM'].points.times(1/100).cbrt()).pow(-1))

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 41)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 42)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 51)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        let Exp = new Decimal(1)

        if(hasMilestone('FLNRM', 3)) Exp = Exp.times(2)

        return Exp
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 7)) vis = true
        return vis
    },
    resetsNothing() {
        let resetNothing = false
        if(hasMilestone(this.layer, 4)) resetNothing = true
        return resetNothing
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Big Layer [Row 1]" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Milestones": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Exist (XST)' },
                    { "color": "#cecece", "font-size": "24px" }],
                "blank",
                "prestige-button",
                "blank",
                "milestones",
            ],
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 Exist",
            effectDescription: "AutoGain +0%/s (5% x Exist) of Other Layer (to this Point exsept TLG and Non-Static layers) and at +25%/s Remove thier Reset Buttons [SoftCap: +100%/s, +250%/s and HardCap: +500%/s]",
            done() { return player[this.layer].points.gte(1) },
            tooltip() {return "+"+format(player[this.layer].MEone.times(100))+"%/s"},
        },
        1: {
            requirementDescription: "5 Exist",
            effectDescription: "AutoBuy the First 5 FLN Upgrade and First True Ease Buyable",
            done() { return player[this.layer].points.gte(5) || hasMilestone('TLGRM', 9) },
            unlocked() {return hasMilestone(this.layer, 0) || hasMilestone(this.layer, 0)},
        },
        2: {
            requirementDescription: "75 Exist",
            effectDescription: "AutoBuy row 1 'A' Buyables",
            done() { return player[this.layer].points.gte(75) || hasMilestone('TLGRM', 11) },
            unlocked() {return hasMilestone(this.layer, 1) || hasMilestone(this.layer, 1)},
        },
        3: {
            requirementDescription: "150 Exist",
            effectDescription: "AutoReset For FLNLV",
            done() { return player[this.layer].points.gte(150) || hasMilestone('TLGRM', 9) },
            unlocked() {return hasMilestone(this.layer, 2) || hasMilestone(this.layer, 2)},
        },
        4: {
            requirementDescription: "400 Exist",
            effectDescription: "XST Reset Nothing",
            done() { return (player[this.layer].points.gte(400) && getBuyableAmount('RLXRM', 21).gte(1)) || hasMilestone('TLGRM', 10) },
            unlocked() {return (hasMilestone(this.layer, 3) && getBuyableAmount('RLXRM', 21).gte(1)) || hasMilestone(this.layer, 4)},
        },
        5: {
            requirementDescription: "8 Exist What!",
            effectDescription: "x1e10 Skill",
            done() { return player[this.layer].points.gte(8) && inChallenge('ITWRM', 91) },
            unlocked() {return inChallenge('ITWRM', 91)},
        },
        6: {
            requirementDescription: "100 Exist",
            effectDescription: "x1e10 Skill again",
            done() { return player[this.layer].points.gte(100) && inChallenge('ITWRM', 91) },
            unlocked() {return inChallenge('ITWRM', 91) && hasMilestone(this.layer, 5)},
        },
        7: {
            requirementDescription: "25 Exist",
            effectDescription: "x1e25 Skill and x100 RLX",
            done() { return player[this.layer].points.gte(25) && inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 2)},
            unlocked() {return inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 2)},
        },
    },
    autoPrestige() {
        let auto = false
        if(getBuyableAmount('RLXRM', 21).gte(1)) auto = true
        return auto
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 32)) inactive = true
        if(inChallenge('ITWRM', 41)) inactive = true
        if(inChallenge('ITWRM', 42)) inactive = true
        if(inChallenge('ITWRM', 51)) inactive = true
        return inactive
    },
    automate() {
        if(hasMilestone(this.layer, 0)) {
            if(player[this.layer].MEone = player[this.layer].points.times(0.05).lte(1)) {
                player[this.layer].MEone = player[this.layer].points.times(0.05)
            }
            else {
                if(player[this.layer].MEone = player[this.layer].points.times(0.05).sqrt().lte(2.5)) {
                    player[this.layer].MEone = player[this.layer].points.times(0.05).sqrt()
                }
                else {
                    if(player[this.layer].MEone = player[this.layer].points.times(0.05).sqrt().add(-1.5).cbrt().add(1.5).lte(5)) {
                        player[this.layer].MEone = player[this.layer].points.times(0.05).sqrt().add(-1.5).cbrt().add(1.5)
                    }
                    else {
                        player[this.layer].MEone = new Decimal(5)
                    };
                };
            };
        };
        if(player[this.layer].points.lt(5) && (inChallenge('ITWRM', 52) || inChallenge('ITWRM', 61) || hasChallenge('ITWRM', 61))) {
            player[this.layer].points = new Decimal(5)
        };
    },
})

addLayer("RLXRM", {
    name: "Relax",
    symbol: "RLX",
    position: 9,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#cecece",
    requires: new Decimal(10e18),
    resource: "Relax",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        if(hasMilestone('XSTRM', 7)) mult = mult.times(100)

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 41)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 42)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 51)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 52)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 9)) vis = true
        return vis
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        if(hasMilestone('XSTRM', 0) && (getBuyableAmount('RTFRM', 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71)) && (getBuyableAmount('RTFRM', 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = Gen.add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-3)))
        if(hasMilestone('XSTRM', 0) && getBuyableAmount('RTFRM', 41).gte(1) && (getBuyableAmount('RTFRM', 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = new Decimal(0).add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-2)))
        if(hasMilestone('XSTRM', 0) && hasMilestone('TLGRM', 13) && (getBuyableAmount('RTFRM', 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = new Decimal(0).add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-1.5)))
        if(hasMilestone('XSTRM', 0) && hasMilestone('TLGRM', 14) && (getBuyableAmount('RTFRM', 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = new Decimal(0).add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-0.75)))
        return Gen
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Automation [Row 1]" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Upgrades": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Relax (RLX)' },
                    { "color": "#464646", "font-size": "24px" }],
                "blank",
                ["row", [["buyable", 11]]],
                "blank",
                "blank",
                ["row", [["buyable", 21], "blank", "blank", ["buyable", 22]]],
                "blank",
                ["row", [["buyable", 31]]],
            ],
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Relax (RLX)' },
                    { "color": "#464646", "font-size": "24px" }],
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['RLXRM'].passiveGeneration().lt(0.25)},
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Relax (RLX)' },
                    { "color": "#464646", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' RLX and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#464646", "font-size": "16px" }],
            ],
            unlocked() {return layers['RLXRM'].passiveGeneration().gt(0)},
        },
    },
    buyables: {
        11: {
            title() {return "<h2>RLX #1</h2>"},
            cost(x) { return new Decimal(10) },
            display() { return "<h2>Autobuy the First $ Buyable</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [21, 22],
        },
        21: {
            title() {return "<h2>RLX #2</h2>"},
            cost(x) { return new Decimal(10e3) },
            display() { return "<h2>Autoreset For XST and Unlock a XST Milestone</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [],
            unlocked() {return getBuyableAmount(this.layer, 11).gte(1)},
        },
        22: {
            title() {return "<h2>RLX #3</h2>"},
            cost(x) { return new Decimal(100) },
            display() { return "<h2>AutoBuy TES Buyable 12</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [31],
            unlocked() {return getBuyableAmount(this.layer, 11).gte(1) && inChallenge('ITWRM', 91)},
        },
        31: {
            title() {return "<h2>RLX #4</h2>"},
            cost(x) { return new Decimal(1e3) },
            display() { return "<h2>TES Buyable 12 Cost Nothing</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [],
            unlocked() {return getBuyableAmount(this.layer, 22).gte(1) && inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 1)},
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 32)) inactive = true
        if(inChallenge('ITWRM', 41)) inactive = true
        if(inChallenge('ITWRM', 42)) inactive = true
        if(inChallenge('ITWRM', 51)) inactive = true
        if(inChallenge('ITWRM', 52)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player.points.lt(10e18)) inactive = true
        return inactive
    },
    automate() {
        if(hasMilestone('ITWRM', 5)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit)) {
                layers[this.layer].buyables[11].buy()
            };
            if(layers[this.layer].buyables[21].canAfford() && getBuyableAmount(this.layer, 21).lt(layers[this.layer].buyables[21].purchaseLimit)) {
                layers[this.layer].buyables[21].buy()
            };
        }
    },
})

addLayer("SKIPRM", {
    name: "Skip",
    symbol: "SKIP",
    position: 10,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        layerEffect: new Decimal(0),
        layerEffectb: new Decimal(0),
        layerEffectc: new Decimal(0),
    }},
    color: "#FFAC65",
    requires: new Decimal(1e21),
    resource: "Skip",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 41)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 42)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 51)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 52)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 61)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 10)) vis = true
        return vis
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        if(hasMilestone('XSTRM', 0) && (getBuyableAmount('RTFRM', 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = Gen.add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-3)))
        if(hasMilestone('XSTRM', 0) && getBuyableAmount('RTFRM', 41).gte(1) && (getBuyableAmount('RTFRM', 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = new Decimal(0).add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-2)))
        if(hasMilestone('XSTRM', 0) && hasMilestone('TLGRM', 13) && (getBuyableAmount('RTFRM', 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = new Decimal(0).add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-1.5)))
        if(hasMilestone('XSTRM', 0) && hasMilestone('TLGRM', 14) && (getBuyableAmount('RTFRM', 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = new Decimal(0).add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-0.75)))
        return Gen
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Easier Next TLG [Row 1]" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Boosts": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Skip (SKIP)' },
                    { "color": "#464646", "font-size": "24px" }],
                ["display-text",
                    function() {
                        let text = '/' + format(player[this.layer].layerEffect.pow(-1)) + ' TLG 12 Requirement (x + 1)^1.1'
                        if(getBuyableAmount('RTFRM', 31).gte(1)) text = '/' + format(player[this.layer].layerEffect.pow(-1)) + ' TLG Requirement ((x + 1)^1.1)^(1/TLG)'
                        if(hasChallenge('ITWRM', 62)) text = '/' + format(player[this.layer].layerEffect.pow(-1)) + ' TLG and ITW Requirements ((x + 1)^1.1)^(1/TLG)'
                        return text
                    },
                    { "color": "#464646", "font-size": "24px" }],
                ["display-text",
                    function() {
                        let text = ''
                        if(inChallenge('ITWRM', 91)) text = 'x' + format(player[this.layer].layerEffectb) + ' Skill'
                        return text
                    },
                    { "color": "#464646", "font-size": "24px" }],
                ["display-text",
                    function() {
                        let text = ''
                        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) >= 1)) text = '/' + format(player[this.layer].layerEffectc.pow(-1)) + ' ITW Challenge 17 Requirment'
                        return text
                    },
                    { "color": "#464646", "font-size": "24px" }],
            ],
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Skip (SKIP)' },
                    { "color": "#464646", "font-size": "24px" }],
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['SKIPRM'].passiveGeneration().lt(0.25)},
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Skip (SKIP)' },
                    { "color": "#464646", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' SKIP and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#464646", "font-size": "16px" }],
            ],
            unlocked() {return layers['SKIPRM'].passiveGeneration().gt(0)},
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 32)) inactive = true
        if(inChallenge('ITWRM', 41)) inactive = true
        if(inChallenge('ITWRM', 42)) inactive = true
        if(inChallenge('ITWRM', 51)) inactive = true
        if(inChallenge('ITWRM', 52)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player.points.lt(1e21)) inactive = true
        return inactive
    },
    automate() {
        let effect = new Decimal(1);
        effect = new Decimal(1).times(player[this.layer].points.add(1).pow(1.1)).pow(-1);
        if(getBuyableAmount('RTFRM', 31).gte(1)) effect = new Decimal(1).times(player[this.layer].points.add(1).pow(1.1)).pow(player['TLGRM'].points.pow(-1).times(-1))
        if(hasChallenge('ITWRM', 62)) effect = new Decimal(1).times(player[this.layer].points.add(1).pow(1.1)).pow(player['TLGRM'].points.pow(-1).times(-1))
        player[this.layer].layerEffect = effect;
        effect = new Decimal(1).times(player[this.layer].points.add(1).pow(1.25));
        player[this.layer].layerEffectb = effect;
        effect = new Decimal(1).times(player[this.layer].points.add(1).pow(0.5)).pow(-1);
        if(inChallenge('ITWRM', 91) && challengeCompletions('ITWRM', 91) >= 1) player[this.layer].layerEffectc = effect;
        if(!inChallenge('ITWRM', 91) || challengeCompletions('ITWRM', 91) == 0) player[this.layer].layerEffectc = new Decimal(1);
    },
})

addLayer("RTFRM", {
    name: "Restful",
    symbol: "RTF",
    position: 11,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#006300",
    requires: new Decimal(100e21),
    resource: "Restful",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 41)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 42)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 51)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 52)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 61)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 62)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 11)) vis = true
        return vis
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        if(hasMilestone('XSTRM', 0) && (getBuyableAmount(this.layer, 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = Gen.add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-3)))
        if(hasMilestone('XSTRM', 0) && getBuyableAmount(this.layer, 41).gte(1) && (getBuyableAmount(this.layer, 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = new Decimal(0).add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-2)))
        if(hasMilestone('XSTRM', 0) && hasMilestone('TLGRM', 13) && (getBuyableAmount(this.layer, 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = new Decimal(0).add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-1.5)))
        if(hasMilestone('XSTRM', 0) && hasMilestone('TLGRM', 14) && (getBuyableAmount(this.layer, 11).gte(1) || inChallenge('ITWRM', 71) || hasChallenge('ITWRM', 71))) Gen = new Decimal(0).add(player['XSTRM'].MEone.times(new Decimal(this.position).pow(-0.75)))
        return Gen
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Automation part II [Row 1]" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Upgrades": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Restful (RTF)' },
                    { "color": "#ffffff", "font-size": "24px" }],
                "blank",
                ["row", [["buyable", 11]]],
                "blank",
                "blank",
                ["row", [["buyable", 21]]],
                "blank",
                "blank",
                ["row", [["buyable", 31]]],
                "blank",
                "blank",
                ["row", [["buyable", 41]]],
                "blank",
                "blank",
                ["row", [["buyable", 51]]],

            ],
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Restful (RTF)' },
                    { "color": "#ffffff", "font-size": "24px" }],
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['RTFRM'].passiveGeneration().lt(0.25)},
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Restful (RTF)' },
                    { "color": "#ffffff", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' RTF and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#ffffff", "font-size": "16px" }],
            ],
            unlocked() {return layers['RTFRM'].passiveGeneration().gt(0)},
        },
    },
    buyables: {
        11: {
            title() {return "<h2>RTF #1</h2>"},
            cost(x) { return new Decimal(1) },
            display() { return "<h2>XST Milestone 0 (1st) also Effects All non-static Layers and if it's over +25%/s remove it's reset button</h2><br><h3>[XST Milestone 0] x (1/([Layer Number]^3))</h3><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [21],
        },
        21: {
            title() {return "<h2>RTF #2</h2>"},
            cost(x) { return new Decimal(1e3) },
            display() { return "<h2>Auto Reset for ДА</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return getBuyableAmount(this.layer, 11).gte(1)},
            purchaseLimit: new Decimal(1),
            branches: [31],
        },
        31: {
            title() {return "<h2>RTF #3</h2>"},
            cost(x) { return new Decimal(10e3) },
            display() { return "<h2>SKIP's Effect Now Works OutSide TLG 12 but at a reduced rate</h2><br><h3>[SKIP's effect]^(1/TLG)</h3><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return getBuyableAmount(this.layer, 21).gte(1)},
            purchaseLimit: new Decimal(1),
            branches: [41],
        },
        41: {
            title() {return "<h2>RTF #4</h2>"},
            cost(x) { return new Decimal(1e6) },
            display() { return "<h2>ДА Reset Nothing</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return getBuyableAmount(this.layer, 31).gte(1)},
            purchaseLimit: new Decimal(1),
            branches: [51],
        },
        51: {
            title() {return "<h2>RTF #5</h2>"},
            cost(x) { return new Decimal(100e6) },
            display() { return "<h2>Make RTF Upgrade #1 Better (doen't Update) and Unlock More ДА Milestones</h2><br><h3>[XST Milestone 0] x (1/([Layer Number]^3)) → [XST Milestone 0] x (1/([Layer Number]^2))</h3><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return getBuyableAmount(this.layer, 41).gte(1)},
            purchaseLimit: new Decimal(1),
            branches: [],
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 32)) inactive = true
        if(inChallenge('ITWRM', 41)) inactive = true
        if(inChallenge('ITWRM', 42)) inactive = true
        if(inChallenge('ITWRM', 51)) inactive = true
        if(inChallenge('ITWRM', 52)) inactive = true
        if(inChallenge('ITWRM', 61)) inactive = true
        if(inChallenge('ITWRM', 62)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player.points.lt(100e21)) inactive = true

        return inactive
    },
    automate() {
        if(hasMilestone('ITWRM', 5)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit)) {
                layers[this.layer].buyables[11].buy()
            };
            if(layers[this.layer].buyables[21].canAfford() && getBuyableAmount(this.layer, 21).lt(layers[this.layer].buyables[21].purchaseLimit)) {
                layers[this.layer].buyables[21].buy()
            };
            if(layers[this.layer].buyables[31].canAfford() && getBuyableAmount(this.layer, 31).lt(layers[this.layer].buyables[31].purchaseLimit)) {
                layers[this.layer].buyables[31].buy()
            };
            if(layers[this.layer].buyables[41].canAfford() && getBuyableAmount(this.layer, 41).lt(layers[this.layer].buyables[41].purchaseLimit)) {
                layers[this.layer].buyables[41].buy()
            };
            if(layers[this.layer].buyables[51].canAfford() && getBuyableAmount(this.layer, 51).lt(layers[this.layer].buyables[51].purchaseLimit)) {
                layers[this.layer].buyables[51].buy()
            };
        }
    },
})

addLayer("IFDRM", {
    name: "Inifite Dot",
    symbol: "IF.",
    position: 12,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#cecece",
    requires: new Decimal(0),
    resource: "Inifite Dot",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(1)

        mult = mult.add(buyableEffect(this.layer, 11))
        mult = mult.add(buyableEffect(this.layer, 12))
        mult = mult.add(buyableEffect(this.layer, 13))
        if(hasMilestone('IFERM', 0)) mult = mult.add(24)
        if(hasMilestone('IFERM', 1)) mult = mult.add(75)
        if(hasMilestone('IFTRM', 0)) mult = mult.add(150)
        if(hasMilestone('ITWRM', 12)) mult = mult.add(1e10)

        if(inChallenge('ITWRM', 72)) mult = mult.add(-1e10)
        if(inChallenge('ITWRM', 81)) mult = mult.add(-5e9)
        if(inChallenge('ITWRM', 82)) mult = mult.add(-2.5e9)
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4)) mult = mult.add(-1e10)

        mult = mult.times(buyableEffect(this.layer, 21))
        mult = mult.times(buyableEffect(this.layer, 22))
        mult = mult.times(buyableEffect(this.layer, 23))
        if(hasMilestone('IFERM', 0)) mult = mult.times(1.5)
        if(hasMilestone('IFERM', 1)) mult = mult.times(5)
        if(hasMilestone('IFTRM', 0)) mult = mult.times(10)
        if(hasMilestone('ITWRM', 1)) mult = mult.times(5)
        if(hasMilestone('ITWRM', 12)) mult = mult.times(1e6)

        if(inChallenge('ITWRM', 72)) mult = mult.times(1e-6)
        if(inChallenge('ITWRM', 81)) mult = mult.times(1e-3)
        if(inChallenge('ITWRM', 82)) mult = mult.times(0.2)
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4)) mult = mult.times(1e-6)

        mult = mult.pow(buyableEffect(this.layer, 31))
        mult = mult.pow(buyableEffect(this.layer, 32))
        mult = mult.pow(buyableEffect(this.layer, 33))
        if(hasMilestone('IFERM', 1)) mult = mult.pow(1.1)
        if(hasMilestone('IFTRM', 0)) mult = mult.pow(1.5)
        if(hasMilestone('ITWRM', 1)) mult = mult.pow(1.1)
        if(hasMilestone('ITWRM', 12)) mult = mult.pow(2)

        if(inChallenge('ITWRM', 72)) mult = mult.pow(0.5)
        if(inChallenge('ITWRM', 81)) mult = mult.pow(0.5)
        if(inChallenge('ITWRM', 82)) mult = mult.pow(0.5)
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4)) mult = mult.pow(0.5)

        if(player['IFERM'].RT.lt(0.1) || player['IFTRM'].RT.lt(0.1)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 41)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 42)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 51)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 52)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 61)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 62)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 71)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 12)) vis = true
        return vis
    },
    passiveGeneration: new Decimal(1),
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Infinite Chain Part I [Row 1] (also a little minigame)" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Buyables": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Inifite Dot (IF.)' },
                    { "color": "#ff0000", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration.times(getResetGain(this.layer))) + ' IF.' },
                    { "color": "#ff0000", "font-size": "16px" }],
                "blank",
                "buyables"
            ],
        },
        "Milestones": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Inifite Dot (IF.)' },
                    { "color": "#ff0000", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration.times(getResetGain(this.layer))) + ' IF.' },
                    { "color": "#ff0000", "font-size": "16px" }],
                "blank",
                "milestones"
            ],
        },
    },
    buyables: {
        11: {
            title() {return "<h2>Adder I</h2>"},
            cost(x) { return new Decimal(5).times(new Decimal(2).pow(x.add(1).pow(1/12))).tetrate(x.add(1).pow(0.1)) },
            display() { return "<h3>Add +1 Base IF. Gain per level</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: +"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id) },
            buy() {
                if(!hasMilestone(this.layer, 0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        12: {
            title() {return "<h2>Adder II</h2>"},
            cost(x) { return new Decimal(50).times(new Decimal(2).pow(x.add(1).pow(1/12))).tetrate(x.add(1).pow(0.1)) },
            display() { return "<h3>Add +10 Base IF. Gain per level</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: +"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(10) },
            buy() {
                if(!hasMilestone(this.layer, 0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        13: {
            title() {return "<h2>Adder III</h2>"},
            cost(x) { return new Decimal(500).times(new Decimal(2).pow(x.add(1).pow(1/12))).tetrate(x.add(1).pow(0.1)) },
            display() { return "<h3>Add +100 Base IF. Gain per level</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: +"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(100) },
            buy() {
                if(!hasMilestone(this.layer, 0)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        21: {
            title() {return "<h2>Multiplier I</h2>"},
            cost(x) { return new Decimal(5e3).times(new Decimal(2).pow(x.add(1).pow(1/12))).tetrate(x.times(1/3).add(1).pow(0.05)) },
            display() { return "<h3>Multiply IF. Gain by x2 per level</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(2).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(!hasMilestone(this.layer, 1)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        22: {
            title() {return "<h2>Multiplier II</h2>"},
            cost(x) { return new Decimal(5e6).times(new Decimal(2).pow(x.add(1).pow(1/12))).tetrate(x.times(1/3).add(1).pow(0.05)) },
            display() { return "<h3>Multiply IF. Gain by x3 per level</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(3).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(!hasMilestone(this.layer, 1)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        23: {
            title() {return "<h2>Multiplier III</h2>"},
            cost(x) { return new Decimal(5e9).times(new Decimal(2).pow(x.add(1).pow(1/12))).tetrate(x.times(1/3).add(1).pow(0.05)) },
            display() { return "<h3>Multiply IF. Gain by x4 per level</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(4).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(!hasMilestone(this.layer, 1)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        31: {
            title() {return "<h2>Expontent I</h2>"},
            cost(x) { return new Decimal(5e15).times(new Decimal(2).pow(x.add(1).pow(1/12))).tetrate(x.times(1/9).add(1).pow(0.025)) },
            display() { return "<h3>Exponate IF. Gain by ^1.25 per level</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: ^"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(1.25).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(!hasMilestone(this.layer, 2)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        32: {
            title() {return "<h2>Expontent II</h2>"},
            cost(x) { return new Decimal(5e21).times(new Decimal(2).pow(x.add(1).pow(1/12))).tetrate(x.times(1/9).add(1).pow(0.025)) },
            display() { return "<h3>Exponate IF. Gain by ^1.33 per level</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: ^"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(1.33).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(!hasMilestone(this.layer, 2)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        33: {
            title() {return "<h2>Expontent III</h2>"},
            cost(x) { return new Decimal(5e27).times(new Decimal(2).pow(x.add(1).pow(1/12))).tetrate(x.times(1/9).add(1).pow(0.025)) },
            display() { return "<h3>Exponate IF. Gain by ^1.5 per level</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: ^"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(1.5).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                if(!hasMilestone(this.layer, 2)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
        41: {
            title() {return "<h2>Boost</h2>"},
            cost(x) { return new Decimal(1.79e308) },
            display() { return "<h3>x1e10 Skill</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(1e10).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: 1,
        },
    },
    milestones: {
        0: {
            requirementDescription: "1.79e3 IF.",
            effectDescription: "Autobuy the Row 1 Buyables and they cost nothing",
            done() { return (player[this.layer].points.gte(1.79e3) || hasMilestone('ITWRM', 3)) && !inChallenge('ITWRM', 72) },
        },
        1: {
            requirementDescription: "1.79e30 IF.",
            effectDescription: "Autobuy the Row 2 Buyables and they cost nothing",
            done() { return (player[this.layer].points.gte(1.79e30) || hasMilestone('ITWRM', 3)) && !inChallenge('ITWRM', 72) },
        },
        2: {
            requirementDescription: "1.79e308 IF.",
            effectDescription: "Autobuy the Row 3 Buyables and they cost nothing",
            done() { return (player[this.layer].points.gte(1.79e308) || hasMilestone('ITWRM', 3)) && !inChallenge('ITWRM', 72) },
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 32)) inactive = true
        if(inChallenge('ITWRM', 41)) inactive = true
        if(inChallenge('ITWRM', 42)) inactive = true
        if(inChallenge('ITWRM', 51)) inactive = true
        if(inChallenge('ITWRM', 52)) inactive = true
        if(inChallenge('ITWRM', 61)) inactive = true
        if(inChallenge('ITWRM', 62)) inactive = true
        if(inChallenge('ITWRM', 71)) inactive = true
        return inactive
    },
    automate() {
        if(hasMilestone(this.layer, 0)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit)) {
                layers[this.layer].buyables[11].buy()
            };
            if(layers[this.layer].buyables[12].canAfford() && getBuyableAmount(this.layer, 12).lt(layers[this.layer].buyables[13].purchaseLimit)) {
                layers[this.layer].buyables[12].buy()
            };
            if(layers[this.layer].buyables[13].canAfford() && getBuyableAmount(this.layer, 13).lt(layers[this.layer].buyables[13].purchaseLimit)) {
                layers[this.layer].buyables[13].buy()
            };
        }
        if(hasMilestone(this.layer, 1)) {
            if(layers[this.layer].buyables[21].canAfford() && getBuyableAmount(this.layer, 21).lt(layers[this.layer].buyables[21].purchaseLimit)) {
                layers[this.layer].buyables[21].buy()
            };
            if(layers[this.layer].buyables[22].canAfford() && getBuyableAmount(this.layer, 22).lt(layers[this.layer].buyables[23].purchaseLimit)) {
                layers[this.layer].buyables[22].buy()
            };
            if(layers[this.layer].buyables[23].canAfford() && getBuyableAmount(this.layer, 23).lt(layers[this.layer].buyables[23].purchaseLimit)) {
                layers[this.layer].buyables[23].buy()
            };
        }
        if(hasMilestone(this.layer, 2)) {
            if(layers[this.layer].buyables[31].canAfford() && getBuyableAmount(this.layer, 31).lt(layers[this.layer].buyables[31].purchaseLimit)) {
                layers[this.layer].buyables[31].buy()
            };
            if(layers[this.layer].buyables[32].canAfford() && getBuyableAmount(this.layer, 32).lt(layers[this.layer].buyables[33].purchaseLimit)) {
                layers[this.layer].buyables[32].buy()
            };
            if(layers[this.layer].buyables[33].canAfford() && getBuyableAmount(this.layer, 33).lt(layers[this.layer].buyables[33].purchaseLimit)) {
                layers[this.layer].buyables[33].buy()
            };
        }
        if(hasMilestone('ITWRM', 13)) {
            if(layers[this.layer].buyables[41].canAfford() && getBuyableAmount(this.layer, 41).lt(layers[this.layer].buyables[41].purchaseLimit)) {
                layers[this.layer].buyables[41].buy()
            };
        }
        if((player['IFERM'].RT.lt(0.1) && !hasMilestone('ITWRM', 1)) || (player['IFTRM'].RT.lt(0.1) && !hasMilestone('ITWRM', 11))) {
            player[this.layer].points = new Decimal(0)
        };
    },
})

addLayer("IFERM", {
    name: "Inifite Easy",
    symbol: "IFE",
    position: 13,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        RT: new Decimal(0),
    }},
    color: "#009000",
    requires: new Decimal(1.79e308/2),
    resource: "Inifite Easy",
    baseResource: "IF.",
    baseAmount() {return player['IFDRM'].points},
    type: "static",
    exponent: 0,
    gainMult() {
        mult = new Decimal(1)

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 41)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 42)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 51)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 52)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 61)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 62)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 71)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 72)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 13)) vis = true
        return vis
    },
    autoPrestige() {
        let auto = false
        if(hasMilestone('ITWRM', 2)) auto = true
        if(inChallenge('ITWRM', 81)) auto = false
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4)) auto = false

        return auto
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Infinite Chain Part II [Row 1]" },
        },
    },
    onPrestige(gain) {
        if(!hasMilestone('ITWRM', 1)) {
            if(!hasMilestone(this.layer, 2)) {
                setBuyableAmount('IFDRM', 11, new Decimal(0))
                setBuyableAmount('IFDRM', 12, new Decimal(0))
                setBuyableAmount('IFDRM', 13, new Decimal(0))
            }
            if(!hasMilestone(this.layer, 3)) {
                setBuyableAmount('IFDRM', 21, new Decimal(0))
                setBuyableAmount('IFDRM', 22, new Decimal(0))
                setBuyableAmount('IFDRM', 23, new Decimal(0))
            }
        }
        player[this.layer].RT = new Decimal(0)
    },
    resetsNothing: true,
    resetDescription: "Reset IF. (not Milestones) For ",
    tabFormat: {
        "Milestones": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Inifite Easy (IFE)' },
                    { "color": "#ff0000", "font-size": "24px" }],
                "blank",
                "prestige-button",
                "blank",
                "milestones"
            ],
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 IFE",
            effectDescription: "+24 Base IF. gain and x1.5 IF. gain",
            done() { return player[this.layer].points.gte(1) },
        },
        1: {
            requirementDescription: "2 IFE",
            effectDescription: "+75 Base IF. gain, x5 IF. gain and ^1.1 IF. gain",
            done() { return player[this.layer].points.gte(2) },
            unlocked() {return hasMilestone(this.layer, 0)},
        },
        2: {
            requirementDescription: "4 IFE",
            effectDescription: "IF. row 1 Buyables Can't Be Reset by IFE and IFT",
            done() { return (player[this.layer].points.gte(4) && hasMilestone('IFTRM', 0)) || hasMilestone('TLGRM', 15) },
            unlocked() {return (hasMilestone(this.layer, 1) && hasMilestone('IFTRM', 0)) || hasMilestone(this.layer, this.id)},
        },
        3: {
            requirementDescription: "5 IFE",
            effectDescription: "IF. row 2 Buyables Can't Be Reset by IFE",
            done() { return (player[this.layer].points.gte(5) && hasMilestone('IFTRM', 0)) || hasMilestone('TLGRM', 15) },
            unlocked() {return (hasMilestone(this.layer, 2) && hasMilestone('IFTRM', 0)) || hasMilestone(this.layer, this.id)},
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 32)) inactive = true
        if(inChallenge('ITWRM', 41)) inactive = true
        if(inChallenge('ITWRM', 42)) inactive = true
        if(inChallenge('ITWRM', 51)) inactive = true
        if(inChallenge('ITWRM', 52)) inactive = true
        if(inChallenge('ITWRM', 61)) inactive = true
        if(inChallenge('ITWRM', 62)) inactive = true
        if(inChallenge('ITWRM', 71)) inactive = true
        if(inChallenge('ITWRM', 72)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player['IFDRM'].points.lt(1.79e308)) inactive = true
        return inactive
    },
    automate() {
        player[this.layer].RT = new Decimal(player[this.layer].RT).add(1/20);
    },
})

addLayer("IFTRM", {
    name: "Inifity",
    symbol: "IFT",
    position: 14,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        RT: new Decimal(0),
    }},
    color: "#3f0092",
    requires: new Decimal(3),
    resource: "Inifity",
    baseResource: "IFE",
    baseAmount() {return player['IFERM'].points},
    type: "static",
    exponent: 1.05,
    gainMult() {
        mult = new Decimal(1)

        if(inChallenge('ITWRM', 11)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 12)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 21)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 22)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 31)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 32)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 41)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 42)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 51)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 52)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 61)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 62)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 71)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 72)) mult = new Decimal(0)
        if(inChallenge('ITWRM', 81)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 14)) vis = true
        return vis
    },
    autoPrestige() {
        let auto = false
        if(hasMilestone('ITWRM', 2)) auto = true
        if(inChallenge('ITWRM', 82)) auto = false
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4)) auto = false

        return auto
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Infinite Chain Part III [Row 1]" },
        },
    },
    onPrestige(gain) {
        if(!hasMilestone('ITWRM', 11)) {
                if(!hasMilestone('IFERM', 2)) {
                setBuyableAmount('IFDRM', 11, new Decimal(0))
                setBuyableAmount('IFDRM', 12, new Decimal(0))
                setBuyableAmount('IFDRM', 13, new Decimal(0))
            }
            if(!hasMilestone('ITWRM', 1)) {
                setBuyableAmount('IFDRM', 21, new Decimal(0))
                setBuyableAmount('IFDRM', 22, new Decimal(0))
                setBuyableAmount('IFDRM', 23, new Decimal(0))
            }
            setBuyableAmount('IFDRM', 31, new Decimal(0))
            setBuyableAmount('IFDRM', 32, new Decimal(0))
            setBuyableAmount('IFDRM', 33, new Decimal(0))
            player['IFERM'].points = new Decimal(0)
        }

        player[this.layer].RT = new Decimal(0)
    },
    resetsNothing: true,
    resetDescription: "Reset IFE and IF. (not Milestones) For ",
    tabFormat: {
        "Milestones": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Inifity (IFT)' },
                    { "color": "#5600c7", "font-size": "24px" }],
                "blank",
                "prestige-button",
                "blank",
                "milestones"
            ],
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 IFT",
            effectDescription: "+150 IF. Gain and x10 IF. Gain and ^1.5 IF. Gain and Unlock more IFE Milestones",
            done() { return player[this.layer].points.gte(1) || hasMilestone('TLGRM', 16) },
        },
        1: {
            requirementDescription: "2 IFT",
            effectDescription: "x10,000 Skill Gain",
            done() { return player[this.layer].points.gte(2) },
            unlocked() {return hasMilestone(this.layer, 0)},
        },
    },
    deactivated() {
        let inactive = false
        if(inChallenge('ITWRM', 11)) inactive = true
        if(inChallenge('ITWRM', 12)) inactive = true
        if(inChallenge('ITWRM', 21)) inactive = true
        if(inChallenge('ITWRM', 22)) inactive = true
        if(inChallenge('ITWRM', 31)) inactive = true
        if(inChallenge('ITWRM', 32)) inactive = true
        if(inChallenge('ITWRM', 41)) inactive = true
        if(inChallenge('ITWRM', 42)) inactive = true
        if(inChallenge('ITWRM', 51)) inactive = true
        if(inChallenge('ITWRM', 52)) inactive = true
        if(inChallenge('ITWRM', 61)) inactive = true
        if(inChallenge('ITWRM', 62)) inactive = true
        if(inChallenge('ITWRM', 71)) inactive = true
        if(inChallenge('ITWRM', 72)) inactive = true
        if(inChallenge('ITWRM', 81)) inactive = true
        if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4) && player['IFERM'].points.lt(3)) inactive = true
        return inactive
    },
    automate() {
        player[this.layer].RT = new Decimal(player[this.layer].RT).add(1/20);
    },
})

addLayer("ITWRM", {
    name: "Instant Win",
    symbol: "ITW",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        ActiveChallenge: false,
    }},
    color: "#0000ff",
    requires: new Decimal(1e70),
    resource: "Instant Win",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "static",
    exponent: 1.05,
    base: 5,
    gainMult() {
        mult = new Decimal(1)

        if(hasChallenge(this.layer, 62)) mult = mult.times(player['SKIPRM'].layerEffect)

        if(hasMilestone(this.layer, 16)) mult = new Decimal(0)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 15)) vis = true
        return vis
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Final ShowDown [Row 2]" },
        },
    },
    resetDescription: "Reset All of Class -1 exept This Layer For ",
    tabFormat: {
        "Milestones": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Instant Win (ITW)' },
                    { "color": "#ffffff", "font-size": "24px" }],
                "blank",
                "prestige-button",
                "blank",
                ["display-text",
                    function() { return 'The Milestones Are Missing Maybe You need 1 To Start' },
                    { "color": "#ffffff", "font-size": "16px" }],
                "milestones"
            ],
        },
        "Challenges": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Instant Win (ITW)' },
                    { "color": "#ffffff", "font-size": "24px" }],
                "blank",
                "challenges"
            ],
            unlocked() {return hasMilestone('ITWRM', 0)},
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 ITW",
            effectDescription: "Every Milestone Unlock a Challenge and Unlock the Challenge Sub-tab",
            done() { return player[this.layer].points.gte(1) },
            tooltip() {return format(player[this.layer].points)+" Challenges Unlocked"},
            unlocked() {return hasMilestone(this.layer, this.id)}
        },
        1: {
            requirementDescription: "2 ITW",
            effectDescription: "x5 IF. gain and ^1.1 IF. gain",
            done() { return player[this.layer].points.gte(2) },
            unlocked() {return hasMilestone(this.layer, 0)}
        },
        2: {
            requirementDescription: "3 ITW",
            effectDescription: "Autoreset for IFE and IFT",
            done() { return player[this.layer].points.gte(3) },
            unlocked() {return hasMilestone(this.layer, 1)}
        },
        3: {
            requirementDescription: "4 ITW",
            effectDescription: "Keep IF. Milestones",
            done() { return player[this.layer].points.gte(4) },
            unlocked() {return hasMilestone(this.layer, 2)}
        },
        4: {
            requirementDescription: "5 ITW",
            effectDescription: "Autobuy First 5 TFD i Upgrades",
            done() { return player[this.layer].points.gte(5) },
            unlocked() {return hasMilestone(this.layer, 3)}
        },
        5: {
            requirementDescription: "6 ITW",
            effectDescription: "Autobuy RLX and RTF Upgrades",
            done() { return player[this.layer].points.gte(6) },
            unlocked() {return hasMilestone(this.layer, 4)}
        },
        6: {
            requirementDescription: "7 ITW",
            effectDescription: "Autobuy Row 2 UIP Buyables",
            done() { return player[this.layer].points.gte(7) },
            unlocked() {return hasMilestone(this.layer, 5)}
        },
        7: {
            requirementDescription: "8 ITW",
            effectDescription: "/1e15 Skill When not in a challenge",
            done() { return player[this.layer].points.gte(8) },
            unlocked() {return hasMilestone(this.layer, 6)}
        },
        8: {
            requirementDescription: "9 ITW",
            effectDescription: "Keep ДА Milestone 2 (3rd)",
            done() { return player[this.layer].points.gte(9) },
            unlocked() {return hasMilestone(this.layer, 7)}
        },
        9: {
            requirementDescription: "10 ITW",
            effectDescription: "Devide XST Requirement Based on XST 10^sqrt(XST / 100 + 1)",
            tooltip() {return "/"+format(new Decimal(10).pow(player['XSTRM'].points.times(1/100).cbrt()))+" XST Requirment"},
            done() { return player[this.layer].points.gte(10) },
            unlocked() {return hasMilestone(this.layer, 8)}
        },
        10: {
            requirementDescription: "11 ITW",
            effectDescription: "/1e10 Skill Gain",
            done() { return player[this.layer].points.gte(11) },
            unlocked() {return hasMilestone(this.layer, 9)}
        },
        11: {
            requirementDescription: "12 ITW",
            effectDescription: "IFT Resets Nothing",
            done() { return player[this.layer].points.gte(12) },
            unlocked() {return hasMilestone(this.layer, 10)}
        },
        12: {
            requirementDescription: "13 ITW",
            effectDescription: "+1e10 IF. gain, x1,000,000 IF. gain and ^2 IF. gain",
            done() { return player[this.layer].points.gte(13) },
            unlocked() {return hasMilestone(this.layer, 11)}
        },
        13: {
            requirementDescription: "14 ITW",
            effectDescription: "Autobuy Row 4 IF. Buyable",
            done() { return player[this.layer].points.gte(14) },
            unlocked() {return hasMilestone(this.layer, 12)}
        },
        14: {
            requirementDescription: "15 ITW",
            effectDescription: "Autobuy First 5 Neg i Upgrades",
            done() { return player[this.layer].points.gte(15) },
            unlocked() {return hasMilestone(this.layer, 13)}
        },
        15: {
            requirementDescription: "16 ITW",
            effectDescription: "Autobuy First Row 2 'A' Buyable",
            done() { return player[this.layer].points.gte(16) },
            unlocked() {return hasMilestone(this.layer, 14)}
        },
        16: {
            requirementDescription: "17 ITW",
            effectDescription: "x1,000 Skill and Hardcap ITW",
            done() { return player[this.layer].points.gte(17) },
            unlocked() {return hasMilestone(this.layer, 15)}
        },
    },
    challenges: {
        11: {
            name: "First Win",
            challengeDescription: "Lock Every layer Except This layer, TLG and TFD and Unlock More TFD and ^0.5 Skill",
            goalDescription: "Get 1e10 Skill",
            rewardDescription: "Keep the First 5 Upgrades In this Challenge Unlocked",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(10e9) || hasMilestone('TLGRM', 16)},
            unlocked() {return hasMilestone(this.layer, 0)},
        },
        12: {
            name: "Lower Win",
            challengeDescription: "Prev Challenge Effect but Nerf Skill More ^0.5 → ^0.33",
            goalDescription: "Get 1,000,000 Skill",
            rewardDescription: "Keep Row 2 IF. Buyables On IFT and Keep Row 3 IF. Buyables On IFE",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(1e6) || hasMilestone('TLGRM', 16)},
            unlocked() {return hasMilestone(this.layer, 1)},
        },
        21: {
            name: "Negative Win",
            challengeDescription: "Prev Challenge Effect but Not lock Neg and Unlock More Neg Upgrades but Don't Unlock i6-i13 TFD Upgrades",
            goalDescription: "Get 5e9 Skill",
            rewardDescription: "Keep Row All Upgrades except Neg Upgrade #i5 In this Challenge Unlocked",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(5e9) || hasMilestone('TLGRM', 16)},
            unlocked() {return hasMilestone(this.layer, 2)},
        },
        22: {
            name: "Cashed Win",
            challengeDescription: "Prev Challenge Effect but Not lock Ca$h",
            goalDescription: "Get 1e10 Skill",
            rewardDescription: "x1.5 skill",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(10e9) || hasMilestone('TLGRM', 16)},
            unlocked() {return hasMilestone(this.layer, 3)},
        },
        31: {
            name: "UIP Win",
            challengeDescription: "Prev Challenge Effect but Not lock UIP and Unlock More UIP Buyables and Gain 1 UIP, AUI and UUP/s but Don't Unlock Neg Upgrade i5.",
            goalDescription: "Get 50,000,000 Skill",
            rewardDescription: "Make Row 1 UIP Buyables Cost Nothing and Keep the Buyables Unlocked",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(50e6)},
            unlocked() {return hasMilestone(this.layer, 4)},
        },
        32: {
            name: "Friendly Win",
            challengeDescription: "Prev Challenge Effect but Not lock FLN and ^0.33 → ^0.5 and x1,000 FLN But Don't Gain +1 UIP, AUI and UUP/s",
            goalDescription: "Get 1e12 Skill",
            rewardDescription: "For Each Milestone x2 Skill per Level and x1,000 FLN in ITW Challenges",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            rewardEffect() {return new Decimal(2).pow(player[this.layer].points)},
            rewardDisplay() {return "x"+format(challengeEffect(this.layer, this.id))+" Skill"},
            canComplete: function() {return player.points.gte(1e12)},
            unlocked() {return hasMilestone(this.layer, 5)},
        },
        41: {
            name: "True Ease Win",
            challengeDescription: "Prev Challenge Effect but Not lock TES",
            goalDescription: "Get 1e13 Skill",
            rewardDescription: "Increase The Max Buyable limit 250 → 350",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(10e12)},
            unlocked() {return hasMilestone(this.layer, 6)},
        },
        42: {
            name: "'A' Win",
            challengeDescription: "Prev Challenge Effect but Not lock 'A' and Gain 1 'A'/s",
            goalDescription: "Get 1e16 Skill",
            rewardDescription: "x1,000,000 Skill",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(10e15)},
            unlocked() {return hasMilestone(this.layer, 7)},
        },
        51: {
            name: "Felix the ДА Win",
            challengeDescription: "Prev Challenge Effect but Not lock ДА",
            goalDescription: "Get 2.1e20 Skill",
            rewardDescription: "x1,000 'A'",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(210e18)},
            unlocked() {return hasMilestone(this.layer, 8)},
        },
        52: {
            name: "Exist Win",
            challengeDescription: "Prev Challenge Effect but Not lock XST and Have 5 XST",
            goalDescription: "Get 1e20 Skill",
            rewardDescription: "Autobuy FLN Upgrade #6, #7a and #7b",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(100e18)},
            unlocked() {return hasMilestone(this.layer, 9)},
        },
        61: {
            name: "Relaxed Win",
            challengeDescription: "Prev Challenge Effect but Not lock RLX",
            goalDescription: "Get 1e15 Skill",
            rewardDescription: "Have at least 5 XST and x1,000,000 Skill",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(1e15)},
            unlocked() {return hasMilestone(this.layer, 10)},
        },
        62: {
            name: "Skipped Win",
            challengeDescription: "Prev Challenge Effect but Not lock Skip but Don't gain +1 'A'/s",
            goalDescription: "Get 1e20 Skill",
            rewardDescription: "Skip Also Effects ITW",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(100e18)},
            unlocked() {return hasMilestone(this.layer, 11)},
        },
        71: {
            name: "Restful Win",
            challengeDescription: "Prev Challenge Effect but Not lock RTF and Keep RTF Upgrade #1",
            goalDescription: "Get 1e21 Skill",
            rewardDescription: "Keep RTF Upgrade #1",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(1e21)},
            unlocked() {return hasMilestone(this.layer, 12)},
        },
        72: {
            name: "Infinite Dot Win",
            challengeDescription: "Prev Challenge Effect but Not lock IF. but ^0.5 IF. gain and /1,000,000 IF. gain and -1e10 IF. gain and Don't Get IF. Milestones",
            goalDescription: "Get 1e29 Skill",
            rewardDescription: "x5 Skill",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(100e27)},
            unlocked() {return hasMilestone(this.layer, 13)},
        },
        81: {
            name: "Infinite Easy Win",
            challengeDescription: "Prev Challenge Effect but Not lock IFE and Allow Getting IF. Milestones and x200 IF. Gain and +5e9 IF. Gain but Don't AutoReset IFE",
            goalDescription: "Get 1e30 Skill",
            rewardDescription: "x5 Skill again",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(1e30)},
            unlocked() {return hasMilestone(this.layer, 14)},
        },
        82: {
            name: "Infinity Win",
            challengeDescription: "Prev Challenge Effect but Not lock IFT and AutoRest For IFE Milestones and x1,000 IF. Gain and +2.5e9 IF. but Don't AutoReset IFT",
            goalDescription: "Get 1e33 Skill",
            rewardDescription: "x4 Skill",
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(1e33)},
            unlocked() {return hasMilestone(this.layer, 15)},
        },
        91: {
            name: "Instant Win",
            challengeDescription() {
                if(challengeCompletions(this.layer, this.id) == 5) return "You Finnished This"
                if(challengeCompletions(this.layer, this.id) == 4) return "Final Challenge. Also ^0.25 Skill but ^0.5 IF. gain and /5,000,000 IF. gain and -1e10 IF. gain and Don't AutoReset IFE and Don't AutoReset IFT and lock all layers unless you can reset Exsept TLG, XST and ITW"
                if(challengeCompletions(this.layer, this.id) == 3) return "Your Not Done Yet But Close. Also ^0.25 → ^0.14 and Unlock More Content In this Challenge"
                if(challengeCompletions(this.layer, this.id) == 2) return "Your Not Done Yet Still. Also ^0.25 → ^0.16 and Unlock More Content In this Challenge"
                if(challengeCompletions(this.layer, this.id) == 1) return "Your Not Done Yet. Also ^0.25 → ^0.2 and Unlock More Content In this Challenge"
                return "Prev Challenge Effect but ^0.25 Skill Instead And Keep Neg Upgrade i5 Unlocked and Add a Lot of Stuff"
            },
            goalDescription() {return "Get "+format(new Decimal(1e25).times(player['SKIPRM'].layerEffectc))+" Skill"},
            rewardDescription() {
                if(challengeCompletions(this.layer, this.id) == 5) return "Keep TES buyable 2"
                return "???"
            },
            onEnter() {
                player[this.layer].ActiveChallenge = true
            },
            onExit() {
                player[this.layer].ActiveChallenge = false
            },
            canComplete: function() {return player.points.gte(new Decimal(1e25).times(player['SKIPRM'].layerEffectc))},
            completionLimit: 5,
            unlocked() {return hasMilestone(this.layer, 16)},
        },
    },
})
