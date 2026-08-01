addLayer("TFDRM", {
    name: "The First Difficulty",
    symbol: "TFD",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
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

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasUpgrade('BSG', 11)) vis = true
        return vis
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Welcome to the Remake hope you like this now [Row 1] (Brighter for visibility)" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Upgrades": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'I have ' + format(player[this.layer].points) + ' The First Difficulty (TFD)' },
                    { "color": "#464646", "font-size": "24px" }],
                "blank",
                "prestige-button",
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
            ],
        },
    },
    buyables: {
        11: {
            title() {return "<h2>TFD #1</h2>"},
            cost(x) { return new Decimal(1) },
            display() { return "<h2>x2 Points</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [21],
        },
        21: {
            title() {return "<h2>TFD #2</h2>"},
            cost(x) { return new Decimal(1) },
            display() { return "<h2>x3 Points</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
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
        31: {
            title() {return "<h2>TFD #3</h2>"},
            cost(x) { return new Decimal(2) },
            display() { return "<h2>x1.5 Points</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
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
        32: {
            title() {return "<h2>TFD #4</h2>"},
            cost(x) { return new Decimal(3) },
            display() { return "<h2>x3.14 Points</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
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
        41: {
            title() {return "<h2>TFD #5</h2>"},
            cost(x) { return new Decimal(5) },
            display() { return "<h2>x2 Points again</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
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
            branches: [72],
            unlocked() {return getBuyableAmount(this.layer, 51).gte(1)},
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
        72: {
            title() {return "<h2>TFD #10</h2>"},
            cost(x) { return new Decimal(1250) },
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
        81: {
            title() {return "<h2>TFD #11</h2>"},
            cost(x) { return new Decimal(5000) },
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
        91: {
            title() {return "<h2>TFD #12</h2>"},
            cost(x) { return new Decimal(10000) },
            display() { return "<h2>Skill Boost Itself</h2><br><h3>log10(Skill + 1)</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
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
        101: {
            title() {return "<h2>TFD #13</h2>"},
            cost(x) { return new Decimal(50000) },
            display() { return "<h2>Unlock TLG</h2><br><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [],
            unlocked() {return getBuyableAmount(this.layer, 91).gte(1)},
        },
    },

})
