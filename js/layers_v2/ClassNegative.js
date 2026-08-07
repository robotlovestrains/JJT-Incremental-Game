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
            display() { return "<h2>x2 Skill Per Level and Lock #16b</h2><br><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit()) },
            canAfford() { return player[this.layer].points.gte(this.cost()) && (getBuyableAmount(this.layer, 132).lt(1) || hasMilestone('CSHRM', 2)) },
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
            canAfford() { return player[this.layer].points.gte(this.cost()) && (getBuyableAmount(this.layer, 131).lt(1) || hasMilestone('CSHRM', 2)) },
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
            if(layers[this.layer].buyables[32].canAfford() && getBuyableAmount(this.layer, 62).lt(layers[this.layer].buyables[62].purchaseLimit)) {
                layers[this.layer].buyables[62].buy()
            };
            if(layers[this.layer].buyables[71].canAfford() && getBuyableAmount(this.layer, 71).lt(layers[this.layer].buyables[71].purchaseLimit)) {
                layers[this.layer].buyables[71].buy()
            };
            if(layers[this.layer].buyables[72].canAfford() && getBuyableAmount(this.layer, 72).lt(layers[this.layer].buyables[72].purchaseLimit)) {
                layers[this.layer].buyables[72].buy()
            };
        }
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
            effectDescription: "In Next Update",
            done() { return player[this.layer].points.gte(5) },
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

        mult = mult.times(buyableEffect('UIPRM', 12))
        mult = mult.times(buyableEffect('FLNRM', 41)[2])

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
                        if(getBuyableAmount('TFDRM', 141).gte(1) || hasMilestone('TLGRM', 2)) text = '+' + format(player[this.layer].layerEffect) + ' Skill gain [log25(x + 1) + 1] [after All effects unless specifed]'
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
        if(getBuyableAmount('TFDRM', 141).gte(1) || hasMilestone('TLGRM', 2)) effect = player[this.layer].points.add(1).log(25).add(1);
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
            effectDescription() {return "+0.333 Base Skill Gain per Milestone and Stops and 30 Effect: +"+format(new Decimal(player[this.layer].milestones.length).times(1/3))},
            done() { return player[this.layer].points.gte(3) },
        },
        2: {
            requirementDescription: "5 Ca$h",
            effectDescription() {return "Ca$h Boosts Skill ($+1) and Unlock the Other TFD 16 Upgrade Effect: x"+format(player[this.layer].points.add(1))},
            done() { return player[this.layer].points.gte(5) },
        },
        3: {
            requirementDescription: "8 Ca$h",
            effectDescription() {return "Unlock Ca$h Buyables"},
            done() { return player[this.layer].points.gte(8) && hasMilestone('FLNRM', 1) },
        },
    },
    buyables: {
        11: {
            title() {return "<h2>p2w</h2>"},
            cost(x) { return new Decimal(4).times(new Decimal(2).pow(x.add(1).pow(0.1))) },
            display() { return "<h2>+x0.5 Skill per level every 10 levels x1.1 Effect</h2><br><br><br><h2>Requires: "+format(this.cost())+" UIP</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(0.5).times(getBuyableAmount(this.layer, this.id)).add(1).times(new Decimal(1.1).pow(new Decimal.floor(getBuyableAmount(this.layer, this.id).times(1/10)))) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
        },
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
    color: "#630077",
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
                    { "color": "#630077", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].pointsB) + ' Almost Unimpossible (AUI)' },
                    { "color": "#630077", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].pointsC) + ' Ununpossable (UUP)' },
                    { "color": "#630077", "font-size": "24px" }],
                "blank",
                "prestige-button",
                "blank",
                "buyables",
            ],
        },
    },
    buyables: {
        11: {
            title() {return "<h2>AAA #1</h2>"},
            cost(x) { return new Decimal(1).times(new Decimal(5).pow(x.pow(1.5))) },
            display() { return "<h2>x1.1 Skill per level</h2><br><br><br><h2>Cost: "+format(this.cost())+" UIP</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(100),
        },
        12: {
            title() {return "<h2>AA #1</h2>"},
            cost(x) { return new Decimal(1).times(new Decimal(5).pow(x.pow(1.5))) },
            display() { return "<h2>x1.1 TFD per level</h2><br><br><br><h2>Cost: "+format(this.cost())+" AUI</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit) },
            canAfford() { return player[this.layer].pointsB.gte(this.cost()) },
            effect() { return new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                player[this.layer].pointsB = player[this.layer].pointsB.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(100),
        },
        13: {
            title() {return "<h2>A #1</h2>"},
            cost(x) { return new Decimal(1).times(new Decimal(5).pow(x.pow(1.5))) },
            display() { return "<h2>x1.1 Neg per level</h2><br><br><br><h2>Cost: "+format(this.cost())+" UUI</h2><br><h3>Effect: x"+format(this.effect())+"</h3><br>"+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit) },
            canAfford() { return player[this.layer].pointsC.gte(this.cost()) },
            effect() { return new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id)) },
            buy() {
                player[this.layer].pointsC = player[this.layer].pointsC.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(100),
        },
    },
})

addLayer("FLNRM", {
    name: "FLN",
    symbol: "FLN",
    position: 4,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        level: new Decimal(0),
        BUpgrades: new Decimal(0),
        LvReq: new Decimal(100e3),
    }},
    color: "#7eb474",
    requires: new Decimal(1e9),
    resource: "FLN",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        mult = mult.times(buyableEffect(this.layer, 41)[4])
        mult = mult.times(buyableEffect(this.layer, 61))

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
                    function() { return 'You have ' + format(player[this.layer].points) + ' FLN (FLN)' },
                    { "color": "#7eb474", "font-size": "24px" }],
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
            ],
        },
        "Levels": {
            content: [
                ["infobox", 2],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].level) + ' FLN level (FLNLV)' },
                    { "color": "#7eb474", "font-size": "24px" }],
                "blank",
                "clickables",
                "blank",
                "milestones",
            ],
            unlocked() {return getBuyableAmount('FLNRM', 51).gte(1)}
        },
    },
    clickables: {
        11: {
            display() {return "Reset FLN and FLN upgrade #1-5 For +1 FLN level<br><br> Req: "+format(player[this.layer].points)+"/"+format(player[this.layer].LvReq)+" FLN"},
            canClick() {return player[this.layer].points.gte(player[this.layer].LvReq)},
            onClick() {
                player[this.layer].points = new Decimal(0)
                player[this.layer].level = player[this.layer].level.add(1)
                player[this.layer].BUpgrades = new Decimal(0)
                addBuyables(this.layer, 11, -1)
                addBuyables(this.layer, 21, -1)
                addBuyables(this.layer, 31, -1)
                addBuyables(this.layer, 41, -1)
                addBuyables(this.layer, 51, -1)
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
            unlocked() {return getBuyableAmount(this.layer, 41).gte(1)},
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
            display() { return "<h2>x10 Skill</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) && (getBuyableAmount(this.layer, 72).lt(1)) },
            effect() { return getBuyableAmount(this.layer, this.id).times(9).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return getBuyableAmount(this.layer, 61).gte(1)},
            branches: [],
        },
        72: {
            title() {return "<h2>FLN #7b</h2>"},
            cost(x) { return new Decimal(250e3) },
            display() { return "<h2>+5 levels to TFD #16a and #16b</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) && (getBuyableAmount(this.layer, 71).lt(1)) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
                player[this.layer].BUpgrades = player[this.layer].BUpgrades.add(1)
            },
            purchaseLimit: new Decimal(1),
            unlocked() {return getBuyableAmount(this.layer, 61).gte(1)},
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
    },
    automate() {
        player[this.layer].LvReq = new Decimal(100e3).times(new Decimal(50).pow(player[this.layer].level).add(1));
    },
})
