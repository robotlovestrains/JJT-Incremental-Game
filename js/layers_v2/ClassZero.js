addLayer("MSLRM", {
    name: "Millisecondless",
    symbol: "MSL",
    position: 15,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        time: new Decimal(0),
        timeEffect: new Decimal(0),
        timeEffectb: new Decimal(0),
        timeEffectc: new Decimal(0),
    }},
    color: "#f470fe",
    requires: new Decimal(1e85),
    resource: "Millisecondless",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.05,
    gainMult() {
        mult = new Decimal(1)

        if(getBuyableAmount(this.layer, 11).gte(1)) mult = mult.times(player[this.layer].timeEffect)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 16)) vis = true
        return vis
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        return Gen
    },
    Timegain() {
        let gain = new Decimal(0);

        if(getBuyableAmount(this.layer, 11).gte(1)) gain = new Decimal(0.001);

        if(getBuyableAmount(this.layer, 21).gte(1)) gain = gain.times(buyableEffect(this.layer, 21));
        if(getBuyableAmount(this.layer, 31).gte(1)) gain = gain.times(buyableEffect(this.layer, 31));
        if(getBuyableAmount(this.layer, 41).gte(1)) gain = gain.times(buyableEffect(this.layer, 41));
        if(getBuyableAmount(this.layer, 42).gte(1)) gain = gain.times(buyableEffect(this.layer, 42));
        if(getBuyableAmount(this.layer, 51).gte(1)) gain = gain.times(buyableEffect(this.layer, 51));
        if(getBuyableAmount(this.layer, 52).gte(1)) gain = gain.times(player[this.layer].timeEffectb);
        if(getBuyableAmount(this.layer, 61).gte(1)) gain = gain.times(buyableEffect(this.layer, 61));
        if(getBuyableAmount(this.layer, 71).gte(1)) gain = gain.times(buyableEffect(this.layer, 71));
        if(getBuyableAmount(this.layer, 91).gte(1)) gain = gain.times(buyableEffect(this.layer, 91));
        if(getBuyableAmount(this.layer, 101).gte(1)) gain = gain.times(buyableEffect(this.layer, 101));
        if(getBuyableAmount(this.layer, 102).gte(1)) gain = gain.times(buyableEffect(this.layer, 102));
        if(getBuyableAmount(this.layer, 111).gte(1)) gain = gain.times(buyableEffect(this.layer, 111));
        if(getBuyableAmount(this.layer, 121).gte(1)) gain = gain.times(buyableEffect(this.layer, 121));

        let exp = new Decimal(1);

        gain = gain.pow(exp);

        return gain
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Welcome to the Class 0 Note: ITW Apply to All Classes" },
        },
        2: {
            title: "Info About this layer 2",
            body() { return "Time is Good" },
        },
    },
    resetDescription: "Reset Skill For ",
    tooltip() {
        if(getBuyableAmount(this.layer, 11).lte(0)) return format(player[this.layer].points)+" "+this.name
        if(player[this.layer].time.lt(1)) return format(player[this.layer].points)+" "+this.name+"<br>"+format(player[this.layer].time.times(1e3))+" ms of Time"
        if(player[this.layer].time.lt(60)) return format(player[this.layer].points)+" "+this.name+"<br>"+format(player[this.layer].time)+" s of Time"
        if(player[this.layer].time.lt(3.6e3)) return format(player[this.layer].points)+" "+this.name+"<br>"+format(player[this.layer].time.times(1/60))+" m of Time"
        if(player[this.layer].time.lt(86.4e3)) return  format(player[this.layer].points)+" "+this.name+"<br>"+format(player[this.layer].time.times(1/3.6e3))+" h of Time"
        if(player[this.layer].time.lt(31.5576e6)) return format(player[this.layer].points)+" "+this.name+"<br>"+format(player[this.layer].time.times(1/86.3e3))+" Ds of Time"
        if(player[this.layer].time.gte(31.5576e6)) return format(player[this.layer].points)+" "+this.name+"<br>"+format(player[this.layer].time.times(1/31.5576e6))+" Ys of Time"
    },
    tabFormat: {
        "Upgrades": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Millisecondless (MSL)' },
                    { "color": "#fac2ff", "font-size": "24px" }],
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
                ["row", [["buyable", 51], "blank", "blank", "blank", "blank", ["buyable", 52]]],
                "blank",
                "blank",
                ["row", [["buyable", 61]]],
                "blank",
                "blank",
                ["row", [["buyable", 71]]],
                "blank",
                "blank",
                ["row", [["buyable", 81]]],
                "blank",
                "blank",
                ["row", [["buyable", 91]]],
                "blank",
                "blank",
                ["row", [["buyable", 101], "blank", "blank", "blank", "blank", ["buyable", 102]]],
                "blank",
                "blank",
                ["row", [["buyable", 111]]],
                "blank",
                "blank",
                ["row", [["buyable", 121]]],
                "blank",
                "blank",
                ["row", [["buyable", 131]]],
            ],
        },
        "Time": {
            content: [
                ["infobox", 2],
                "blank",
                ["display-text",
                    function() {
                        if(player[this.layer].time.lt(1)) return 'You have ' + format(player[this.layer].time.times(1e3)) + ' milliseconds of Time'
                        if(player[this.layer].time.lt(60)) return 'You have ' + format(player[this.layer].time) + ' seconds of Time'
                        if(player[this.layer].time.lt(3.6e3)) return 'You have ' + format(player[this.layer].time.times(1/60)) + ' minutes of Time'
                        if(player[this.layer].time.lt(86.4e3)) return 'You have ' + format(player[this.layer].time.times(1/3.6e3)) + ' hours of Time'
                        if(player[this.layer].time.lt(31.5576e6)) return 'You have ' + format(player[this.layer].time.times(1/86.4e3)) + ' Days of Time'
                        if(player[this.layer].time.gte(31.5576e6)) return 'You have ' + format(player[this.layer].time.times(1/31.5576e6)) + ' Years of Time'
                    },
                    { "color": "#fac2ff", "font-size": "24px" }],
                ["display-text",
                    function() {
                        if(player[this.layer].time.lt(1)) return '+' + format(layers[this.layer].Timegain().times(1e3)) + ' milliseconds of Time/s'
                        if(player[this.layer].time.lt(60)) return '+' + format(layers[this.layer].Timegain()) + ' seconds of Time/s'
                        if(player[this.layer].time.lt(3.6e3)) return '+' + format(layers[this.layer].Timegain().times(1/60)) + ' minutes of Time/s'
                        if(player[this.layer].time.lt(86.4e3)) return '+' + format(layers[this.layer].Timegain().times(1/3.6e3)) + ' hours of Time/s'
                        if(player[this.layer].time.lt(31.5576e6)) return '+' + format(layers[this.layer].Timegain().times(1/86.4e3)) + ' Days of Time/s'
                        if(player[this.layer].time.gte(31.5576e6)) return '+' + format(layers[this.layer].Timegain().times(1/31.5576e6)) + ' Years of Time/s'
                    },
                    { "color": "#fac2ff", "font-size": "16px" }],
                ["display-text",
                    function() { return 'x' + format(player[this.layer].timeEffect) + ' Millisecondless' },
                    { "color": "#fac2ff", "font-size": "24px" }],
                ["display-text",
                    function() { if(getBuyableAmount(this.layer, 52).gte(1)) return 'x' + format(player[this.layer].timeEffectb) + ' Time' },
                    { "color": "#fac2ff", "font-size": "24px" }],
                ["display-text",
                    function() { if(getBuyableAmount(this.layer, 81).gte(1)) return 'x' + format(player[this.layer].timeEffectc) + ' Skill' },
                    { "color": "#fac2ff", "font-size": "24px" }],
            ],
            unlocked() {return getBuyableAmount('MSLRM', 11).gte(1)},
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Millisecondless (MSL)' },
                    { "color": "#fac2ff", "font-size": "24px" }],
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['MSLRM'].passiveGeneration().lt(0.25)},
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Millisecondless (MSL)' },
                    { "color": "#fac2ff", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' MSL/s and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#fac2ff", "font-size": "16px" }],
            ],
            unlocked() {return layers['MSLRM'].passiveGeneration().gt(0)},
        },
    },
    buyables: {
        11: {
            title() {return "<h2>MSL #1</h2>"},
            cost(x) { return new Decimal(1) },
            display() { return "<h2>Unlock Time and gain +1/ms</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [21],
        },
        21: {
            title() {return "<h2>MSL #2</h2>"},
            cost(x) { return new Decimal(1) },
            display() { return "<h2>x2 Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [31],
            unlocked() {return getBuyableAmount(this.layer, 11).gte(1)},
        },
        31: {
            title() {return "<h2>MSL #3</h2>"},
            cost(x) { return new Decimal(3) },
            display() { return "<h2>x1.5 Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(0.5).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [41, 42],
            unlocked() {return getBuyableAmount(this.layer, 21).gte(1)},
        },
        41: {
            title() {return "<h2>MSL #4</h2>"},
            cost(x) { return new Decimal(10) },
            display() { return "<h2>x5 Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(4).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [51],
            unlocked() {return getBuyableAmount(this.layer, 31).gte(1)},
        },
        42: {
            title() {return "<h2>MSL #5</h2>"},
            cost(x) { return new Decimal(10) },
            display() { return "<h2>xpi Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(2.14159).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [52],
            unlocked() {return getBuyableAmount(this.layer, 31).gte(1)},
        },
        51: {
            title() {return "<h2>MSL #6</h2>"},
            cost(x) { return new Decimal(25) },
            display() { return "<h2>x2 Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [61],
            unlocked() {return getBuyableAmount(this.layer, 41).gte(1)},
        },
        52: {
            title() {return "<h2>MSL #7</h2>"},
            cost(x) { return new Decimal(25) },
            display() { return "<h2>Unlock another Time boost</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [61],
            unlocked() {return getBuyableAmount(this.layer, 42).gte(1)},
        },
        61: {
            title() {return "<h2>MSL #8</h2>"},
            cost(x) { return new Decimal(35) },
            display() { return "<h2>x2.5 Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1.5).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [71],
            unlocked() {return getBuyableAmount(this.layer, 51).gte(1) && getBuyableAmount(this.layer, 52).gte(1)},
        },
        71: {
            title() {return "<h2>MSL #9</h2>"},
            cost(x) { return new Decimal(35) },
            display() { return "<h2>x3.75 Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(2.75).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [81],
            unlocked() {return getBuyableAmount(this.layer, 61).gte(1)},
        },
        81: {
            title() {return "<h2>MSL #10</h2>"},
            cost(x) { return new Decimal(50) },
            display() { return "<h2>Unlock another Time boost</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [91],
            unlocked() {return getBuyableAmount(this.layer, 71).gte(1)},
        },
        91: {
            title() {return "<h2>MSL #11</h2>"},
            cost(x) { return new Decimal(125) },
            display() { return "<h2>x10 Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(9).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [101, 102],
            unlocked() {return getBuyableAmount(this.layer, 81).gte(1)},
        },
        101: {
            title() {return "<h2>MSL #12</h2>"},
            cost(x) { return new Decimal(250) },
            display() { return "<h2>x10 Time again</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(9).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [111],
            unlocked() {return getBuyableAmount(this.layer, 91).gte(1)},
        },
        102: {
            title() {return "<h2>MSL #13</h2>"},
            cost(x) { return new Decimal(2026) },
            display() { return "<h2>x5 Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(4).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [111],
            unlocked() {return getBuyableAmount(this.layer, 91).gte(1)},
        },
        111: {
            title() {return "<h2>MSL #14</h2>"},
            cost(x) { return new Decimal(250e3) },
            display() { return "<h2>x20 Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(19).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [121],
            unlocked() {return (getBuyableAmount(this.layer, 101).gte(1) || getBuyableAmount(this.layer, 101).gte(1)) && getBuyableAmount('WINRM', 11).gte(1)},
        },
        121: {
            title() {return "<h2>MSL #15</h2>"},
            cost(x) { return new Decimal(25e6) },
            display() { return "<h2>x2 Time</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(1).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [131],
            unlocked() {return getBuyableAmount(this.layer, 111).gte(1)},
        },
        131: {
            title() {return "<h2>MSL #16</h2>"},
            cost(x) { return new Decimal(1e9) },
            display() { return "<h2>x100 Win</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: x"+format(this.effect())+"</h3>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            effect() { return getBuyableAmount(this.layer, this.id).times(99).add(1) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [],
            unlocked() {return getBuyableAmount(this.layer, 121).gte(1)},
        },
    },
    deactivated() {
        let inactive = false
        if(player['ITWRM'].ActiveChallenge) inactive = true
        return inactive
    },
    automate() {
        player[this.layer].time = player[this.layer].time.add(layers[this.layer].Timegain().times(0.05));

        let effect = new Decimal(1);

        effect = new Decimal(1.5).pow(player[this.layer].time.add(1).pow(0.25).add(-1));

        player[this.layer].timeEffect = effect;

        effect = new Decimal(2).pow(new Decimal.max(player[this.layer].time.add(-99e-3), new Decimal(1)).pow(0.25).log10());

        player[this.layer].timeEffectb = effect;

        effect = new Decimal(5e3).pow(new Decimal.max(player[this.layer].time.add(-5), new Decimal(1)).pow(1.2).log10());

        player[this.layer].timeEffectc = effect;
    },
})

addLayer("WINRM", {
    name: "Win",
    symbol: "WIN",
    position: 16,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#2877e7",
    requires: new Decimal(1e140),
    resource: "Win",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.05,
    gainMult() {
        mult = new Decimal(1)

        if(getBuyableAmount('MSLRM', 131).gte(1)) mult = mult.times(buyableEffect('MSLRM', 131))

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {
        let vis = false
        if(hasMilestone('TLGRM', 18)) vis = true
        return vis
    },
    passiveGeneration() {
        let Gen = new Decimal(0)
        return Gen
    },
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Not Winning the Game BTW" },
        },
    },
    resetDescription: "Reset Skill For ",
    tabFormat: {
        "Upgrades": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Win (WIN)' },
                    { "color": "#0badff", "font-size": "24px" }],
                "blank",
                ["row", [["buyable", 11]]],
                "blank",
                "blank",
                ["row", [["buyable", 21]]],
            ],
        },
        "Reset": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Win (WIN)' },
                    { "color": "#0badff", "font-size": "24px" }],
                "blank",
                "prestige-button",
            ],
            unlocked() {return layers['WINRM'].passiveGeneration().lt(0.25)},
        },
        "Autogain": {
            content: [
                ["infobox", 1],
                "blank",
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Win (WIN)' },
                    { "color": "#0badff", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are gaining +' + format(layers[this.layer].passiveGeneration().times(getResetGain(this.layer))) + ' WIN/s and the percent is '+format(layers[this.layer].passiveGeneration().times(100))+'%' },
                    { "color": "#0badff", "font-size": "16px" }],
            ],
            unlocked() {return layers['WINRM'].passiveGeneration().gt(0)},
        },
    },
    buyables: {
        11: {
            title() {return "<h2>Win #1</h2>"},
            cost(x) { return new Decimal(1) },
            display() { return "<h2>Unlock More MSL Upgrades</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2>" },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [21],
        },
        21: {
            title() {return "<h2>Win #2</h2>"},
            cost(x) { return new Decimal(1e3) },
            display() { return "<h2>/1e35 Ca$h Requirement</h2><br><br><br><h2>Cost: "+format(this.cost())+"</h2><br><h3>Effect: /"+format(this.effect())+"</h3>" },
            effect() { return getBuyableAmount(this.layer, this.id).times(1e35).add(1) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
            branches: [],
            unlocked() {return getBuyableAmount(this.layer, 11).gte(1)},
        },
    },
    deactivated() {
        let inactive = false
        if(player['ITWRM'].ActiveChallenge) inactive = true
        return inactive
    },
})
