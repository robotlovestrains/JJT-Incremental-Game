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
        "Upgrades [reset]": {
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
            unlocked() {return !hasMilestone('TLGRM', 1)},
        },
        "Upgrades [no reset]": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' The First Difficulty (TFD)' },
                    { "color": "#464646", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' TFD/s' },
                    { "color": "#464646", "font-size": "16px" }],
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
            unlocked() {return hasMilestone('TLGRM', 1)},
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
        111: {
            title() {return "<h2>TFD #14</h2>"},
            cost(x) { return new Decimal(250e3) },
            display() { return "<h2>Skill Boost TFD</h2><br><h3>log25(Skill + 1) + 1</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
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
            canAfford() { return player[this.layer].points.gte(this.cost()) },
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
            display() { return "<h2>x2 Skill Per Level and Lock #16b</h2><br><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit) },
            canAfford() { return player[this.layer].points.gte(this.cost()) && (getBuyableAmount(this.layer, 132).lt(1) || hasMilestone('CSHRM', 2)) },
            effect() { return new Decimal(2).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(10),
            branches: [141],
            unlocked() {return getBuyableAmount(this.layer, 121).gte(1)},
        },
        132: {
            title() {return "<h2>TFD #16b</h2>"},
            cost(x) { return new Decimal(1e6).times(x.add(1).pow(2)) },
            display() { return "<h2>x1.2 Skill and TFD Per level and Lock #16a</h2><br><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit) },
            canAfford() { return player[this.layer].points.gte(this.cost()) && (getBuyableAmount(this.layer, 131).lt(1) || hasMilestone('CSHRM', 2)) },
            effect() { return new Decimal(1.2).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(10),
            branches: [141],
            unlocked() {return getBuyableAmount(this.layer, 121).gte(1)},
        },
        141: {
            title() {return "<h2>TFD #17</h2>"},
            cost(x) { return new Decimal(2.5e6) },
            display() { return "<h2>Make the Nerf From Neg into a Buff and It now Boosts the Base but Nerf the Effect a Lot</h2><br><h3>now log25(x + 1) + 1</h3><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
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
            canAfford() { return player[this.layer].points.gte(this.cost()) },
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
        player[this.layer].RT = new Decimal(player[this.layer].RT).add(1/20)
    }
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
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1,
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
            effectDescription: "Unlock Ca$h also Autogain 25% of TFD/s and Remove it's Reset Button",
            done() { return player[this.layer].points.gte(2) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        2: {
            requirementDescription: "3 TLG",
            effectDescription: "The end.. for now",
            done() { return player[this.layer].points.gte(3) },
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
    color: "#3a0046",
    requires: new Decimal(1e3),
    resource: "Negativity",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

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
                    { "color": "#3a0046", "font-size": "24px" }],
                ["display-text",
                    function() {
                        let text = '-' + format(player[this.layer].layerEffect) + ' Skill gain [1.5^cbrt(x) - 1] [after All effects unless specifed]'
                        if(getBuyableAmount(this.layer, 42).gte(1)) text = '-' + format(player[this.layer].layerEffect) + ' Skill gain [1.5^sqrt(x) - 1] [after All effects unless specifed]'
                        if(getBuyableAmount('TFDRM', 141).gte(1)) text = '+' + format(player[this.layer].layerEffect) + ' Skill gain [log25(x + 1) + 1] [after All effects unless specifed]'
                        return text
                    },
                    { "color": "#3a0046", "font-size": "24px" }],
                "blank",
                "prestige-button",
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
    },
    automate() {
        let effect = new Decimal(-1);
        effect = new Decimal(-1).add(new Decimal(1.5).pow(player[this.layer].points.cbrt()));
        if(getBuyableAmount(this.layer, 42).gte(1)) effect = new Decimal(-1).add(new Decimal(1.5).pow(player[this.layer].points.sqrt()));
        if(getBuyableAmount('TFDRM', 141).gte(1)) effect = player[this.layer].points.add(1).log(25).add(1);
        player[this.layer].layerEffect = effect;
    },
})

addLayer("CSHRM", {
    name: "Ca$h",
    symbol: "$",
    position: 2,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        layerEffect: new Decimal(0),
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
            unlocked() {return false},
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
            effectDescription() {return "+0.333 Base Skill Gain per Milestone and Stops and 30 Effect: +"+format(new Decimal(player[this.layer].milestones.length).times(1/3))},
            done() { return player[this.layer].points.gte(3) },
        },
        2: {
            requirementDescription: "5 Ca$h",
            effectDescription() {return "Ca$h Boosts Skill ($+1) and Unlock the Other TFD 16 Upgrade Effect: x"+format(player[this.layer].points.add(1))},
            done() { return player[this.layer].points.gte(5) },
        },
    },
})
