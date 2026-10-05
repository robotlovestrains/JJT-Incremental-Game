addLayer("Halloween", {
    name: "Halloween",
    symbol: "",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#c07000",
    requires: new Decimal(1e1000),
    resource: "Useless Layers",
    baseResource: "Pumkins",
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
        "Pumkin Layer": {
            embedLayer: "Pumkin",
            buttonStyle: {
                "color": "#c07000",
                "border": "2px solid #c07000",
            },
        },
        "Jack o' Lanterns Layer": {
            embedLayer: "JoL",
            buttonStyle: {
                "color": "#ffbd60",
                "border": "2px solid #ffbd60",
            },
            unlocked() {return hasUpgrade('Pumkin', 24) || hasMilestone('JoL', 0)},
        },
        "Trick or Treaters Layer": {
            embedLayer: "ToT",
            buttonStyle: {
                "color": "#c0c0c0",
                "border": "2px solid #c0c0c0",
            },
            unlocked() {return hasUpgrade('Pumkin', 43) || hasMilestone('ToT', 0)},
        },
        "Halloween Level": {
            embedLayer: "HalloweenLevel",
            buttonStyle: {
                "color": "#96b609",
                "border": "2px solid #96b609",
            },
            unlocked() {return hasMilestone('ToT', 2) || hasMilestone('HalloweenLevel', 0)},
        },
        "Witches": {
            embedLayer: "Witch",
            buttonStyle: {
                "color": "#962eeb",
                "border": "2px solid #962eeb",
            },
            unlocked() {return hasMilestone('HalloweenLevel', 1)},
        },
        "Candy": {
            embedLayer: "Candy",
            buttonStyle: {
                "color": "#ff0000",
                "border": "2px solid #ff0000",
            },
            unlocked() {return hasMilestone('HalloweenLevel', 3)},
        },
    },
})

addLayer("Pumkin", {
    name: "Pumkin",
    symbol: "",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        started: false,
    }},
    color: "#c07000",
    requires: new Decimal(0),
    resource: "Pumkins",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(0)
        if(player[this.layer].started) mult = new Decimal(1)

        if(hasUpgrade(this.layer, 11)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 12)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 13)) mult = mult.times(1.5)
        if(hasUpgrade(this.layer, 14)) mult = mult.times(2.5)
        if(hasUpgrade(this.layer, 21)) mult = mult.times(upgradeEffect(this.layer, 21))
        if(hasUpgrade(this.layer, 22)) mult = mult.times(1.5)
        if(hasMilestone(this.layer, 0)) mult = mult.times(new Decimal(1.1).pow(player[this.layer].upgrades.length))
        if(hasUpgrade(this.layer, 24)) mult = mult.times(5)
        if(hasUpgrade(this.layer, 25)) mult = mult.times(10)
        if(hasUpgrade(this.layer, 31)) mult = mult.times(upgradeEffect(this.layer, 31))
        if(hasUpgrade(this.layer, 32)) mult = mult.times(1.2)
        if(hasUpgrade(this.layer, 33)) mult = mult.times(2)
        if(hasMilestone(this.layer, 1)) mult = mult.times(new Decimal(1.1).pow(player[this.layer].upgrades.length).pow(-1))
        if(hasMilestone(this.layer, 1)) mult = mult.times(new Decimal(1.15).pow(new Decimal(player[this.layer].upgrades.length).add(player[this.layer].milestones.length)))
        if(hasUpgrade(this.layer, 34)) mult = mult.times(10)
        if(hasUpgrade(this.layer, 35)) mult = mult.times(15)
        if(hasUpgrade(this.layer, 41)) mult = mult.times(upgradeEffect(this.layer, 41))
        if(hasMilestone('Pumkin', 3)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 43)) mult = mult.times(20)
        if(hasUpgrade(this.layer, 44)) mult = mult.times(15)

        if(hasUpgrade('JoL', 11)) mult = mult.times(10)
        if(hasUpgrade('JoL', 12)) mult = mult.times(2)
        if(hasUpgrade('JoL', 13)) mult = mult.times(4)
        if(hasUpgrade('JoL', 14)) mult = mult.times(10)
        if(hasUpgrade('JoL', 15)) mult = mult.times(5)
        if(hasUpgrade('JoL', 21)) mult = mult.times(3)
        if(hasUpgrade('JoL', 22)) mult = mult.times(2)
        if(hasUpgrade('JoL', 23)) mult = mult.times(10)
        if(hasUpgrade('JoL', 25)) mult = mult.times(3)
        if(hasUpgrade('JoL', 31)) mult = mult.times(5)
        if(hasUpgrade('JoL', 32)) mult = mult.times(10)
        if(hasUpgrade('JoL', 33)) mult = mult.times(3.14)
        if(hasUpgrade('JoL', 34)) mult = mult.times(7)
        if(hasUpgrade('JoL', 35)) mult = mult.times(25)
        if(hasUpgrade('JoL', 42)) mult = mult.times(10)
        if(hasUpgrade('JoL', 43)) mult = mult.times(10)
        if(hasUpgrade('JoL', 44)) mult = mult.times(100)

        if(hasUpgrade('ToT', 11)) mult = mult.times(1/0.1)
        if(hasUpgrade('ToT', 12)) mult = mult.times(1/0.11)
        if(hasUpgrade('ToT', 13)) mult = mult.times(1/0.125)
        if(hasUpgrade('ToT', 14)) mult = mult.times(1/0.14)
        if(hasUpgrade('ToT', 15)) mult = mult.times(1/0.17)
        if(hasUpgrade('ToT', 31)) mult = mult.times(10)
        if(hasUpgrade('ToT', 32)) mult = mult.times(9)
        if(hasUpgrade('ToT', 33)) mult = mult.times(8)
        if(hasUpgrade('ToT', 34)) mult = mult.times(7)
        if(hasUpgrade('ToT', 35)) mult = mult.times(6)
        if(hasMilestone('ToT', 2)) mult = mult.times(100)
        if(hasUpgrade('ToT', 41)) mult = mult.times(5)
        if(hasUpgrade('ToT', 43)) mult = mult.times(upgradeEffect('ToT', 43))
        if(hasUpgrade('ToT', 45)) mult = mult.times(4)
        if(hasMilestone('ToT', 3)) mult = mult.times(100)

        if(hasMilestone('HalloweenLevel', 0)) mult = mult.times(5)
        if(hasMilestone('HalloweenLevel', 1)) mult = mult.times(3)
        if(hasMilestone('HalloweenLevel', 2)) mult = mult.times(100)

        if(hasMilestone('Witch', 0)) mult = mult.times(new Decimal(2.5).pow(player['Witch'].points))
        if(hasMilestone('Witch', 2)) mult = mult.times(5)
        if(hasMilestone('Witch', 3)) mult = mult.times(100)
        if(hasMilestone('Witch', 4)) mult = mult.times(4)

        if(player['Witch'].click11) mult = mult.times(5)
        if(player['Witch'].click12) mult = mult.times(1/9)
        if(player['Witch'].click21) mult = mult.times(1/8)
        if(player['Witch'].click31) mult = mult.times(1/4)
        if(player['Witch'].click51) mult = mult.times(200e-6)
        if(player['Witch'].click61) mult = mult.times(0.1)
            
        if(hasUpgrade('Candy', 15)) mult = mult.times(2)
        if(hasUpgrade('Candy', 4011)) mult = mult.times(1e6)

        return mult.times(100)
    },
    gainExp() {
        Exp = new Decimal(1)

        if(player['Witch'].click11) Exp = Exp.times(1.01)
        if(player['Witch'].click12) Exp = Exp.times(0.9)
        if(player['Witch'].click21) Exp = Exp.times(1.08)
        if(player['Witch'].click31) Exp = Exp.times(0.9)
        if(player['Witch'].click41) Exp = Exp.times(0.9)

        return Exp
    },
    row: "side",
    layerShown() {return false},
    passiveGeneration() {
        let Gen = new Decimal(0.01)

        if(hasUpgrade(this.layer, 15)) Gen = Gen.times(1.1)
        if(hasUpgrade(this.layer, 22)) Gen = Gen.times(1.2)
        if(hasUpgrade(this.layer, 32)) Gen = Gen.times(1.5)
        if(hasUpgrade(this.layer, 34)) Gen = Gen.times(1.5)
        if(hasUpgrade(this.layer, 35)) Gen = Gen.times(2)

        return Gen
    },
    tabFormat: {
        "Upgrades": {
            content: [
                ["display-text",
                function() { return 'You have ' + format(player[this.layer].points) + ' Pumkins' },
                { "color": "orange", "font-size": "24px" }],
                "blank",
                "resource-display",
                "blank",
                "blank",
                "clickables",
                "upgrades",
            ],
        },
        "Milestones": {
            content: [
                ["display-text",
                function() { return 'You have ' + format(player[this.layer].points) + ' Pumkins' },
                { "color": "orange", "font-size": "24px" }],
                "blank",
                "resource-display",
                "blank",
                "blank",
                "milestones",
            ],
        },
    },
    clickables: {
        11: {
            title: "Start the Game",
            display() {return "Make Pumkins Generate"},
            onClick() {
                player[this.layer].started = true
            },
            canClick() {return true},
            unlocked() {return !player[this.layer].started},
        },
    },
    upgrades: {
        11: {
            title: "Pumkins I",
            description: "x2 Pumkins",
            cost: new Decimal(10),
            unlocked() {return player[this.layer].started},
        },
        12: {
            title: "Pumkins II",
            description: "x2 Pumkins again",
            cost: new Decimal(25),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Pumkins III",
            description: "x1.5 Pumkins",
            cost: new Decimal(40),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Pumkins IV",
            description: "x2.5 Pumkins (Yes 67)",
            cost: new Decimal(67),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Pumkins V",
            description: "x1.1 TickSpeed (not effect TickSpeed)",
            cost: new Decimal(100),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Pumkins VI",
            description() {return "Pumkins Boost Itself [x] [No Cap]"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].points.add(1).log10().add(1))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Pumkin"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(150),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Pumkins VII",
            description: "x1.2 TickSpeed and x1.5 Pumkins",
            cost: new Decimal(250),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Pumkins VIII",
            description: "Unlock Pumkin Milestones",
            cost: new Decimal(1000),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Pumkins IX",
            description: "x5 Pumkins and Unlock Jack o'lanterns",
            cost: new Decimal(10000),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Pumkins X",
            description: "x10 Pumkins",
            cost: new Decimal(15000),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
        31: {
            title: "Pumkins XI",
            description() {return "Pumkins Boost Itself [x] [Cap: 100] [Min: 1]"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].points.times(player[this.layer].points.add(1).log10().add(1).pow(-6)))
                
                effect = new Decimal.min(new Decimal.max(effect, new Decimal(1)), new Decimal(100))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Pumkin"},
            tooltip: "Pumkins x (log10(Pumkins + 1) + 1)^-6",
            cost: new Decimal(25000),
            unlocked() {return hasUpgrade('JoL', 12)},
        },
        32: {
            title: "Pumkins XII",
            description: "x1.5 TickSpeed and x1.2 Pumkins",
            cost: new Decimal(500000),
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
        33: {
            title: "Pumkins XIII",
            description: "x2 Pumkins and Unlock 2 More Milestones",
            cost: new Decimal(1e9),
            unlocked() {return hasUpgrade('JoL', 15)},
        },
        34: {
            title: "Pumkins XIV",
            description: "x10 Pumkins and x1.5 TickSpeed",
            cost: new Decimal(3e10),
            unlocked() {return hasUpgrade(this.layer, 33)},
        },
        35: {
            title: "Pumkins XV",
            description: "x15 Pumkins and x2 TickSpeed",
            cost: new Decimal(1e13),
            unlocked() {return hasUpgrade(this.layer, 34)},
        },
        41: {
            title: "Pumkins XVI",
            description() {return "JoL Boost Pumkins [x] [Cap: 1,000]"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player['JoL'].points.add(1).log10().add(1))
                
                effect = new Decimal.min(effect, new Decimal(1000))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Pumkins"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(1e16),
            unlocked() {return hasMilestone('JoL', 1)},
        },
        42: {
            title: "Pumkins XVII",
            description: "x2 JoLs and Unlock More Pumkin Milestones",
            cost: new Decimal(5e16),
            unlocked() {return hasUpgrade(this.layer, 41)},
        },
        43: {
            title: "Pumkins XVIII",
            description: "Unlock Trick or Treaters and x20 Pumkins and x10 JoLs",
            cost: new Decimal(2.5e17),
            unlocked() {return hasUpgrade(this.layer, 42)},
        },
        44: {
            title: "Pumkins XIX",
            description: "x15 Pumkins and x5 JoLs",
            cost: new Decimal(3.33e19),
            unlocked() {return hasUpgrade(this.layer, 43)},
        },
        45: {
            title: "Pumkins XX",
            description: "Unlock More JoL Upgrades",
            cost: new Decimal(2.5e20),
            unlocked() {return hasUpgrade(this.layer, 44)},
        },
    },
    milestones: {
        0: {
            requirementDescription: "5000 Pumkins",
            effectDescription() {
                let Text = "x1.1 Pumkins per Pumkin Upgrade 1.1^(x) [x] [No Cap]"
                if(hasMilestone(this.layer, 1)) Text = "x1.15 Pumkins Per Pumkin Upgrade (x) and Milestone (y) 1.15^(x + y) [x] [No Cap]"
                return Text
            },
            done() {return player[this.layer].points.gte(5000) && (hasUpgrade(this.layer, 23))},
            unlocked() {return hasUpgrade(this.layer, 23)},
            tooltip() {
                let Text = "x"+format(new Decimal(1.1).pow(player[this.layer].upgrades.length))+" Pumkins"
                if(hasMilestone(this.layer, 1)) Text = "x"+format(new Decimal(1.15).pow(new Decimal(player[this.layer].upgrades.length).add(player[this.layer].milestones.length)))+" Pumkins"
                return Text
            },
        },
        1: {
            requirementDescription: "1e10 Pumkins",
            effectDescription: "Make Milestone id 0 (1st) Effect Now 1.15 Per Upgrade and Milestone",
            done() {return player[this.layer].points.gte(1e10) && (hasUpgrade(this.layer, 33))},
            unlocked() {return hasUpgrade(this.layer, 33)},
        },
        2: {
            requirementDescription: "1e15 Pumkins",
            effectDescription: "x5 JoL",
            done() {return player[this.layer].points.gte(1e15) && (hasUpgrade(this.layer, 33))},
            unlocked() {return hasUpgrade(this.layer, 33)},
        },
        3: {
            requirementDescription: "1e17 Pumkins",
            effectDescription: "x2 Pumkins and JoLs",
            done() {return player[this.layer].points.gte(1e17) && (hasUpgrade(this.layer, 42))},
            unlocked() {return hasUpgrade(this.layer, 42)},
        },
        4: {
            requirementDescription: "1e20 Pumkins",
            effectDescription: "+5% JoL/s",
            done() {return player[this.layer].points.gte(1e20) && (hasUpgrade(this.layer, 42))},
            unlocked() {return hasUpgrade(this.layer, 42)},
        },
    },
    automate() {
        if(hasUpgrade('JoL', 13)) {
            buyUpgrade(this.layer, 11)
            buyUpgrade(this.layer, 12)
            buyUpgrade(this.layer, 13)
            buyUpgrade(this.layer, 14)
            buyUpgrade(this.layer, 15)
            buyUpgrade(this.layer, 21)
            buyUpgrade(this.layer, 22)
            buyUpgrade(this.layer, 23)
            buyUpgrade(this.layer, 24)
            buyUpgrade(this.layer, 25)
        };
        if(hasUpgrade('ToT', 15)) {
            buyUpgrade(this.layer, 11)
            buyUpgrade(this.layer, 12)
            buyUpgrade(this.layer, 13)
            buyUpgrade(this.layer, 14)
            buyUpgrade(this.layer, 15)
            buyUpgrade(this.layer, 21)
            buyUpgrade(this.layer, 22)
            buyUpgrade(this.layer, 23)
            buyUpgrade(this.layer, 24)
            buyUpgrade(this.layer, 25)
            buyUpgrade(this.layer, 31)
            buyUpgrade(this.layer, 32)
            buyUpgrade(this.layer, 33)
            buyUpgrade(this.layer, 34)
            buyUpgrade(this.layer, 35)
            buyUpgrade(this.layer, 41)
            buyUpgrade(this.layer, 42)
            buyUpgrade(this.layer, 43)
            buyUpgrade(this.layer, 44)
            buyUpgrade(this.layer, 45)
        };
    },
})

addLayer("JoL", {
    name: "JoL",
    symbol: "",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffbd60",
    requires: new Decimal(1e6),
    resource: "Jack o' Lanterns",
    baseResource: "Pumkins",
    baseAmount() {return player['Pumkin'].points},
    type: "normal",
    exponent: 0.2,
    gainMult() {
        mult = new Decimal(1)

        if(hasMilestone('Pumkin', 2)) mult = mult.times(5)
        if(hasUpgrade(this.layer, 22)) mult = mult.times(2)
        if(hasMilestone('Pumkin', 3)) mult = mult.times(2)
        if(hasUpgrade('Pumkin', 43)) mult = mult.times(10)
        if(hasUpgrade('Pumkin', 42)) mult = mult.times(2)
        if(hasUpgrade('Pumkin', 44)) mult = mult.times(5)
        if(hasUpgrade(this.layer, 23)) mult = mult.times(10)
        if(hasUpgrade(this.layer, 25)) mult = mult.times(3)
        if(hasUpgrade(this.layer, 31)) mult = mult.times(5)
        if(hasUpgrade(this.layer, 35)) mult = mult.times(25)
        if(hasUpgrade(this.layer, 43)) mult = mult.times(4)

        if(hasUpgrade('ToT', 21)) mult = mult.times(3)
        if(hasUpgrade('ToT', 22)) mult = mult.times(4)
        if(hasUpgrade('ToT', 23)) mult = mult.times(5)
        if(hasUpgrade('ToT', 24)) mult = mult.times(6)
        if(hasUpgrade('ToT', 25)) mult = mult.times(7)
        if(hasUpgrade('ToT', 31)) mult = mult.times(3)
        if(hasUpgrade('ToT', 32)) mult = mult.times(4)
        if(hasUpgrade('ToT', 33)) mult = mult.times(5)
        if(hasUpgrade('ToT', 34)) mult = mult.times(6)
        if(hasUpgrade('ToT', 35)) mult = mult.times(7)
        if(hasUpgrade('ToT', 41)) mult = mult.times(8)
        if(hasUpgrade('ToT', 42)) mult = mult.times(upgradeEffect('ToT', 42))
        if(hasUpgrade('ToT', 44)) mult = mult.times(upgradeEffect('ToT', 44))
        if(hasUpgrade('ToT', 45)) mult = mult.times(9)
        if(hasMilestone('ToT', 3)) mult = mult.times(100)

        if(hasMilestone('HalloweenLevel', 0)) mult = mult.times(4)
        if(hasMilestone('HalloweenLevel', 1)) mult = mult.times(2.5)
        if(hasMilestone('HalloweenLevel', 2)) mult = mult.times(100)

        if(hasMilestone('Witch', 1)) mult = mult.times(new Decimal(4).pow(player['Witch'].points))
        if(hasMilestone('Witch', 2)) mult = mult.times(5)
        if(hasMilestone('Witch', 4)) mult = mult.times(4)

        if(player['Witch'].click11) mult = mult.times(1/9)
        if(player['Witch'].click12) mult = mult.times(5)
        if(player['Witch'].click21) mult = mult.times(1/8)
        if(player['Witch'].click31) mult = mult.times(1/9)
        if(player['Witch'].click41) mult = mult.times(1/4)
        if(player['Witch'].click51) mult = mult.times(200e-6)
        if(player['Witch'].click61) mult = mult.times(0.1)
            
        if(hasUpgrade('Candy', 15)) mult = mult.times(2)
        if(hasUpgrade('Candy', 4011)) mult = mult.times(1e6)

        return mult
    },
    gainExp() {
        Exp = new Decimal(1)

        if(player['Witch'].click11) Exp = Exp.times(0.9)
        if(player['Witch'].click12) Exp = Exp.times(1.01)
        if(player['Witch'].click21) Exp = Exp.times(1.08)
        if(player['Witch'].click31) Exp = Exp.times(0.9)
        if(player['Witch'].click41) Exp = Exp.times(0.9)

        return Exp
    },
    row: "side",
    layerShown() {return false},
    passiveGeneration() {
        let Gen = new Decimal(0)

        if(hasUpgrade(this.layer, 21)) Gen = Gen.add(0.01)
        if(hasMilestone(this.layer, 2)) Gen = Gen.add(0.04)
        if(hasMilestone('Pumkin', 4)) Gen = Gen.add(0.05)
        if(hasUpgrade(this.layer, 24)) Gen = Gen.add(0.05)
        if(hasUpgrade('ToT', 25)) Gen = Gen.add(0.05)
        if(hasMilestone('ToT', 1)) Gen = Gen.add(0.13)
        if(hasMilestone(this.layer, 3)) Gen = Gen.add(0.17)
        if(hasUpgrade(this.layer, 41)) Gen = Gen.add(0.25)

        return Gen
    },
    resetsNothing: true,
    resetDescription: "Reset Pumkin For ",
    onPrestige(gain) {
        player['Pumkin'].upgrades = []
        if(!hasUpgrade(this.layer, 14)) {
            player['Pumkin'].milestones = []
        }
        player['Pumkin'].points = new Decimal(0)
    },
    tabFormat: {
        "Upgrades": {
            content: [
                ["display-text",
                function() { return 'You have ' + format(player['Pumkin'].points) + ' Pumkins' },
                { "color": "orange", "font-size": "24px" }],
                ["display-text",
                function() { return 'You have ' + format(player[this.layer].points) + " Jack o' Lanterns" },
                { "color": "#ffbd60", "font-size": "24px" }],
                "blank",
                ["prestige-button", "normal"],
                "resource-display",
                "blank",
                "blank",
                "upgrades",
            ],
        },
        "Milestones": {
            content: [
                ["display-text",
                function() { return 'You have ' + format(player['Pumkin'].points) + ' Pumkins' },
                { "color": "orange", "font-size": "24px" }],
                ["display-text",
                function() { return 'You have ' + format(player[this.layer].points) + " Jack o' Lanterns" },
                { "color": "#ffbd60", "font-size": "24px" }],
                "blank",
                "resource-display",
                "blank",
                "blank",
                "milestones",
            ],
        },
    },
    upgrades: {
        11: {
            title: "Pumkined I",
            description: "x10 Pumkins",
            cost: new Decimal(1),
        },
        12: {
            title: "Pumkined II",
            description: "x2 Pumkins and Unlock More Pumkin Upgrades",
            cost: new Decimal(3),
            unlocked() {return hasUpgrade(this.layer, 11)}
        },
        13: {
            title: "Pumkined III",
            description: "x4 Pumkins and Autobuy the First 10 Pumkin Upgrades",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade(this.layer, 12)}
        },
        14: {
            title: "Pumkined IV",
            description: "x10 Pumkins and JoL dosn't Reset Milestones",
            cost: new Decimal(25),
            unlocked() {return hasUpgrade(this.layer, 13)}
        },
        15: {
            title: "Pumkined V",
            description: "x5 Pumkins and Unlock More Pumkin Upgrades again",
            cost: new Decimal(40),
            unlocked() {return hasUpgrade(this.layer, 14)}
        },
        21: {
            title: "Pumkined VI",
            description: "x3 Pumkins and Generate +1% of JoL/s",
            cost: new Decimal(60),
            unlocked() {return hasUpgrade(this.layer, 15)}
        },
        22: {
            title: "Pumkined VII",
            description: "x2 Pumkins and JoL and Unlock More JoL Milestones",
            cost: new Decimal(125),
            unlocked() {return hasUpgrade(this.layer, 21)}
        },
        23: {
            title: "Pumkined VIII",
            description: "x10 Pumkins and JoLs",
            cost: new Decimal(2e6),
            unlocked() {return hasUpgrade('Pumkin', 45)}
        },
        24: {
            title: "Pumkined IX",
            description: "+5% JoL/s",
            cost: new Decimal(5e7),
            unlocked() {return hasUpgrade(this.layer, 23)}
        },
        25: {
            title: "Pumkined X",
            description: "x3 Pumkins and JoLs",
            cost: new Decimal(2e8),
            unlocked() {return hasUpgrade(this.layer, 24)}
        },
        31: {
            title: "Pumkined XI",
            description: "x5 Pumkins → ToT",
            cost: new Decimal(5e23),
            unlocked() {return hasMilestone(this.layer, 4)}
        },
        32: {
            title: "Pumkined XII",
            description: "x10 Pumkins",
            cost: new Decimal(2e24),
            unlocked() {return hasUpgrade(this.layer, 31)}
        },
        33: {
            title: "Pumkined XIII",
            description: "x3.14 Pumkins",
            cost: new Decimal(5e24),
            unlocked() {return hasUpgrade(this.layer, 32)}
        },
        34: {
            title: "Pumkined XIV",
            description: "x7 Pumkins",
            cost: new Decimal(1e25),
            unlocked() {return hasUpgrade(this.layer, 33)}
        },
        35: {
            title: "Pumkined XV",
            description: "x25 Pumkins → ToT",
            cost: new Decimal(5e33),
            unlocked() {return hasMilestone('Witch', 4)}
        },
        41: {
            title: "Pumkined XVI",
            description: "+25% JoL/s",
            cost: new Decimal(5e35),
            unlocked() {return hasUpgrade(this.layer, 35)}
        },
        42: {
            title: "Pumkined XVII",
            description: "x10 Pumkins and Generate +1% of ToT/s",
            cost: new Decimal(5e35),
            unlocked() {return hasUpgrade(this.layer, 41)}
        },
        43: {
            title: "Pumkined XVIII",
            description: "Unlock More ToT Milestones and x10 Pumkins and x4 JoLs and x2 ToTs",
            cost: new Decimal(1e36),
            unlocked() {return hasUpgrade(this.layer, 42)}
        },
        44: {
            title: "Pumkined XIX",
            description: "x100 Pumkins",
            cost: new Decimal(1e39),
            unlocked() {return hasMilestone('ToT', 4)}
        },
        45: {
            title: "Pumkined XX",
            description: "Unlock More Witch Content",
            cost: new Decimal(1e40),
            unlocked() {return hasUpgrade(this.layer, 44)}
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 JoL",
            effectDescription: "Keep JoL Unlocked",
            done() {return player[this.layer].points.gte(1)},
        },
        1: {
            requirementDescription: "250 JoL",
            effectDescription: "Unlock More Pumkin Upgrades",
            done() {return player[this.layer].points.gte(250) && hasUpgrade(this.layer, 22)},
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        2: {
            requirementDescription: "1000 JoL",
            effectDescription: "+4% Jol/s",
            done() {return player[this.layer].points.gte(1000) && hasUpgrade(this.layer, 22)},
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        3: {
            requirementDescription: "1e23 JoL",
            effectDescription: "+17% Jol/s",
            done() {return player[this.layer].points.gte(1e23) && hasUpgrade('ToT', 45)},
            unlocked() {return hasUpgrade('ToT', 45)},
        },
        4: {
            requirementDescription: "3.33e23 JoL",
            effectDescription: "Unlock More JoL Upgrades",
            done() {return player[this.layer].points.gte(3.33e23) && hasUpgrade('ToT', 45)},
            unlocked() {return hasUpgrade('ToT', 45)},
        },
    },
    automate() {
        if(hasUpgrade('ToT', 35)) {
            buyUpgrade(this.layer, 11);
            buyUpgrade(this.layer, 12);
            buyUpgrade(this.layer, 13);
            buyUpgrade(this.layer, 14);
            buyUpgrade(this.layer, 15);
        };
    },
})

addLayer("ToT", {
    name: "ToT",
    symbol: "",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#c0c0c0",
    requires: new Decimal(1e22),
    resource: "Trick or Treaters",
    baseResource: "Pumkins",
    baseAmount() {return player['Pumkin'].points},
    type: "normal",
    exponent: 0.2,
    gainMult() {
        mult = new Decimal(1)

        if(hasUpgrade('JoL', 31)) mult = mult.times(5)
        if(hasUpgrade('JoL', 35)) mult = mult.times(25)
        if(hasUpgrade('JoL', 43)) mult = mult.times(2)

        if(hasMilestone(this.layer, 3)) mult = mult.times(100)

        if(hasMilestone('HalloweenLevel', 0)) mult = mult.times(3)
        if(hasMilestone('HalloweenLevel', 1)) mult = mult.times(2)
        if(hasMilestone('HalloweenLevel', 2)) mult = mult.times(100)

        if(hasMilestone('Witch', 2)) mult = mult.times(new Decimal(3).pow(player['Witch'].points))
        if(hasMilestone('Witch', 4)) mult = mult.times(4)

        if(player['Witch'].click21) mult = mult.times(1.2)
        if(player['Witch'].click41) mult = mult.times(0.9)
        if(player['Witch'].click51) mult = mult.times(200e-6)
        if(player['Witch'].click61) mult = mult.times(0.1)
            
        if(hasUpgrade('Candy', 14)) mult = mult.times(upgradeEffect('Candy', 14))
        if(hasUpgrade('Candy', 15)) mult = mult.times(2)
        if(hasUpgrade('Candy', 4011)) mult = mult.times(1e6)

        return mult
    },
    gainExp() {
        Exp = new Decimal(1)

        return Exp
    },
    row: "side",
    layerShown() {return false},
    passiveGeneration() {
        let Gen = new Decimal(0)

        if(hasUpgrade('JoL', 42)) Gen = Gen.add(0.01)
        if(hasMilestone(this.layer, 4)) Gen = Gen.add(0.09)


        return Gen
    },
    resetsNothing: true,
    resetDescription: "Reset Pumkin and JoL For ",
    onPrestige(gain) {
        player['Pumkin'].upgrades = []
        if(!hasUpgrade(this.layer, 41)) {
            player['Pumkin'].milestones = []
        }
        player['Pumkin'].points = new Decimal(0)
        player['JoL'].upgrades = []
        if(!hasUpgrade(this.layer, 41)) {
            player['JoL'].milestones = []
        }
        player['JoL'].points = new Decimal(0)
    },
    tabFormat: {
        "Upgrades": {
            content: [
                ["display-text",
                function() { return 'You have ' + format(player['Pumkin'].points) + ' Pumkins' },
                { "color": "orange", "font-size": "24px" }],
                ["display-text",
                function() { return 'You have ' + format(player['JoL'].points) + " Jack o' Lanterns" },
                { "color": "#ffbd60", "font-size": "24px" }],
                ["display-text",
                function() { return 'You have ' + format(player[this.layer].points) + " Trick or Treaters" },
                { "color": "white", "font-size": "24px" }],
                "blank",
                ["prestige-button", "normal"],
                "resource-display",
                "blank",
                "blank",
                "upgrades",
            ],
        },
        "Milestones": {
            content: [
                ["display-text",
                function() { return 'You have ' + format(player['Pumkin'].points) + ' Pumkins' },
                { "color": "orange", "font-size": "24px" }],
                ["display-text",
                function() { return 'You have ' + format(player['JoL'].points) + " Jack o' Lanterns" },
                { "color": "#ffbd60", "font-size": "24px" }],
                ["display-text",
                function() { return 'You have ' + format(player[this.layer].points) + " Trick or Treaters" },
                { "color": "white", "font-size": "24px" }],
                "blank",
                "resource-display",
                "blank",
                "blank",
                "milestones",
            ],
        },
    },
    upgrades: {
        11: {
            title: "Tricked I",
            description: "/0.1 Pumkin Gain",
            cost: new Decimal(1),
        },
        12: {
            title: "Tricked II",
            description: "/0.11 Pumkin Gain",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Tricked III",
            description: "/0.125 Pumkin Gain",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Tricked IV",
            description: "/0.14 Pumkin Gain",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Tricked V",
            description: "/0.17 Pumkin Gain and Autobuy the first 20 Pumkin Upgrades",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Treat I",
            description: "x3 JoL Gain",
            cost: new Decimal(1),
        },
        22: {
            title: "Treat II",
            description: "x4 JoL Gain",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Treat III",
            description: "x5 JoL Gain",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Treat IV",
            description: "x6 JoL Gain",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Treat V",
            description: "x7 JoL Gain and +5% JoL/s",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
        31: {
            title: "Trick or Treat I",
            description: "x10 Pumkins and x3 JoLs",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade(this.layer, 15) && hasUpgrade(this.layer, 25)},
        },
        32: {
            title: "Trick or Treat II",
            description: "x9 Pumkins and x4 JoLs",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
        33: {
            title: "Trick or Treat III",
            description: "x8 Pumkins and x5 JoLs",
            cost: new Decimal(20),
            unlocked() {return hasUpgrade(this.layer, 32)},
        },
        34: {
            title: "Trick or Treat IV",
            description: "x7 Pumkins and x6 JoLs",
            cost: new Decimal(25),
            unlocked() {return hasUpgrade(this.layer, 33)},
        },
        35: {
            title: "Trick or Treat V",
            description: "x6 Pumkins and x7 JoLs and Autobuy the first 5 JoL Upgrades and Unlock ToT Milestones",
            cost: new Decimal(30),
            unlocked() {return hasUpgrade(this.layer, 34)},
        },
        41: {
            title: "Trick or Treat VI",
            description: "x5 Pumkins and x8 JoLs and Make the ToT doesn't Reset Milestones",
            cost: new Decimal(1000),
            unlocked() {return hasMilestone('HalloweenLevel', 0)},
        },
        42: {
            title: "Throwback I",
            description() {return "Pumkins Boost JoLs [x] [Cap: 1,000]"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player['Pumkin'].points.add(1).log10().add(1))
                
                effect = new Decimal.min(effect, new Decimal(1000))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" JoLs"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(1500),
            unlocked() {return hasUpgrade(this.layer, 41)},
        },
        43: {
            title: "Throwback II",
            description() {return "ToTs Boost Pumkins [x] [Cap: 1,000]"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].points.add(1).log10().add(1))
                
                effect = new Decimal.min(effect, new Decimal(1000))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Pumkins"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(2000),
            unlocked() {return hasUpgrade(this.layer, 42)},
        },
        44: {
            title: "Throwback III",
            description() {return "ToTs Boost JoLs [x] [Cap: 1,000]"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].points.add(1).log10().add(1))
                
                effect = new Decimal.min(effect, new Decimal(1000))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" JoLs"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(4000),
            unlocked() {return hasUpgrade(this.layer, 43)},
        },
        45: {
            title: "Throwback IV",
            description: "x4 Pumkins and x9 JoLs and Unlock More JoL Milestones",
            cost: new Decimal(8000),
            unlocked() {return hasUpgrade(this.layer, 44)},
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 ToT",
            effectDescription: "Keep ToT Unlocked",
            done() {return player[this.layer].points.gte(1)},
        },
        1: {
            requirementDescription: "100 ToT",
            effectDescription: "+13% JoL/s",
            done() {return player[this.layer].points.gte(100) && hasUpgrade(this.layer, 35)},
            unlocked() {return hasUpgrade(this.layer, 35)},
        },
        2: {
            requirementDescription: "250 ToT",
            effectDescription: "Unlock Halloween Levels and x100 Pumkins",
            done() {return player[this.layer].points.gte(250) && hasUpgrade(this.layer, 35)},
            unlocked() {return hasUpgrade(this.layer, 35)},
        },
        3: {
            requirementDescription: "1e14 ToT",
            effectDescription: "x100 Pumkins → ToTs",
            done() {return player[this.layer].points.gte(1e14) && hasUpgrade('JoL', 43)},
            unlocked() {return hasUpgrade('JoL', 43)},
        },
        4: {
            requirementDescription: "1e17 ToT",
            effectDescription: "Unlock more JoL Upgrades and +9% of ToT/s",
            done() {return player[this.layer].points.gte(1e17) && hasUpgrade('JoL', 43)},
            unlocked() {return hasUpgrade('JoL', 43)},
        },
    },
})

addLayer("HalloweenLevel", {
    name: "Halloween Level",
    symbol: "",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
        MainEffectA: false,
        MainEffectB: false,
        MainEffectC: false,
    }},
    color: "#96b609",
    requires: new Decimal(1e32),
    resource: "Halloween Level",
    baseResource: "Pumkins",
    baseAmount() {return player['Pumkin'].points},
    type: "static",
    roundUpCost: true,
    exponent: 3,
    base: 10,
    gainMult() {
        mult = new Decimal(1)

        if(hasMilestone('Witch', 3)) mult = mult.times(new Decimal(1000).pow(player['Witch'].points).pow(-1))
        if(hasMilestone('Witch', 4)) mult = mult.times(10e-21)
        if(hasUpgrade('Candy', 4011)) mult = mult.times(10e-55)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    resetsNothing: true,
    resetDescription: "Reset All Halloween For ",
    onPrestige(gain) {
        player['Pumkin'].upgrades = []
        player['Pumkin'].milestones = []
        player['Pumkin'].points = new Decimal(0)
        player['JoL'].upgrades = []
        player['JoL'].milestones = []
        player['JoL'].points = new Decimal(0)
        player['ToT'].upgrades = []
        player['ToT'].milestones = []
        player['ToT'].points = new Decimal(0)
        player['Witch'].points = new Decimal(1)
        player['Witch'].milestones = []
    },
    tabFormat: [
        ["display-text",
        function() { return 'You have ' + format(player['Pumkin'].points) + ' Pumkins' },
        { "color": "orange", "font-size": "24px" }],
        ["display-text",
        function() { return 'You have ' + format(player['JoL'].points) + " Jack o' Lanterns" },
        { "color": "#ffbd60", "font-size": "24px" }],
        ["display-text",
        function() { return 'You have ' + format(player['ToT'].points) + ' Trick or Treaters' },
        { "color": "white", "font-size": "24px" }],
        ["display-text",
        function() { return 'You are at Halloween Level ' + format(player[this.layer].points) },
        { "color": "green", "font-size": "24px" }],
        "blank",
        ["prestige-button", "static"],
        "resource-display",
        "blank",
        "blank",
        "milestones",
    ],
    milestones: {
        0: {
            requirementDescription: "Level 2",
            effectDescription: "Keep HalloweenLevel Unlocked and Unlock More JoL Upgrades and x5 Pumkins and x4 JoLs and x3 ToT",
            done() {return player[this.layer].points.gte(2)},
        },
        1: {
            requirementDescription: "Level 3",
            effectDescription: "x3 Pumkins and x2.5 Jols and x2 ToT and Unlock Witchs",
            done() {return player[this.layer].points.gte(3)},
            unlocked() {return hasMilestone(this.layer, 0)},
        },
        2: {
            requirementDescription: "Level 4",
            effectDescription: "Unlock More Witch Content (starting at 5) and x100 Pumkins → ToT",
            done() {return player[this.layer].points.gte(4)},
            unlocked() {return hasMilestone(this.layer, 1)},
        },
        3: {
            requirementDescription: "Level 5",
            effectDescription: "Unlock Candy",
            done() {return player[this.layer].points.gte(5)},
            unlocked() {return hasMilestone(this.layer, 2)},
        },
        4: {
            requirementDescription: "Level 6",
            effectDescription: "x10 Skill",
            onComplete() {
                player[this.layer].MainEffectC = true
            },
            done() {return player[this.layer].points.gte(6)},
            unlocked() {return hasMilestone(this.layer, 4)},
        },
    },
})

addLayer("Witch", {
    name: "Witch",
    symbol: "",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
        click11: false,
        click12: false,
        click21: false,
        click31: false,
        click41: false,
        click51: false,
        click61: false,
    }},
    color: "#962eeb",
    requires: new Decimal(25000/2),
    resource: "Witch",
    baseResource: "Trick or Treaters",
    baseAmount() {return player['ToT'].points},
    type: "static",
    exponent: 0,
    gainMult() {
        let mult = new Decimal(0)

        if(player[this.layer].click11) mult = new Decimal(1)
        if(player[this.layer].click12) mult = new Decimal(1)
        if(player[this.layer].click21) mult = new Decimal(1)
        if(player[this.layer].click31) mult = new Decimal(1)
        if(player[this.layer].click41) mult = new Decimal(1)
        if(player[this.layer].click51) mult = new Decimal(1)
        if(player[this.layer].click61) mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    onPrestige(gain) {
        player['Pumkin'].upgrades = []
        player['Pumkin'].milestones = []
        player['Pumkin'].points = new Decimal(0)
        player['JoL'].upgrades = []
        player['JoL'].milestones = []
        player['JoL'].points = new Decimal(0)
        player['ToT'].upgrades = []
        player['ToT'].milestones = []
        player['ToT'].points = new Decimal(0)

        let mult = new Decimal(0)

        if(player[this.layer].click11) mult = mult.add(1)
        if(player[this.layer].click12) mult = mult.add(1)
        if(player[this.layer].click21) mult = mult.add(1)
        if(player[this.layer].click31) mult = mult.add(1)
        if(player[this.layer].click41) mult = mult.add(1)
        if(player[this.layer].click51) mult = mult.add(1)
        if(player[this.layer].click61) mult = mult.add(1)

        if(player['Witch'].points.lt(mult.add(1))) {
            player['Witch'].points = mult
        }
        else {
            player['Witch'].points = player['Witch'].points.add(-1)
        }
    },
    autoPrestige: true,
    resetsNothing: true,
    tabFormat: {
        "Effects": {
            content: [
                ["display-text",
                    function() { return 'You have ' + format(player['Pumkin'].points) + ' Pumkins' },
                    { "color": "orange", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player['JoL'].points) + " Jack o' Lanterns" },
                    { "color": "#ffbd60", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player['ToT'].points) + ' Trick or Treaters' },
                    { "color": "white", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are at Halloween Level ' + format(player['HalloweenLevel'].points) },
                    { "color": "green", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Witches' },
                    { "color": "purple", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You Gain Witches In a Diffrent way' },
                    { "color": "purple", "font-size": "16px" }],
                "blank",
                "blank",
                ["display-text",
                    function() { return "All Items Force Reset Pumkins, JoLs and ToTs" },
                    { "color": "purple", "font-size": "16px" }],
                "clickables",
            ],
        },
        "Milestones": {
            content: [
                ["display-text",
                    function() { return 'You have ' + format(player['Pumkin'].points) + ' Pumkins' },
                    { "color": "orange", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player['JoL'].points) + " Jack o' Lanterns" },
                    { "color": "#ffbd60", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player['ToT'].points) + ' Trick or Treaters' },
                    { "color": "white", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You are at Halloween Level ' + format(player['HalloweenLevel'].points) },
                    { "color": "green", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You have ' + format(player[this.layer].points) + ' Witches' },
                    { "color": "purple", "font-size": "24px" }],
                ["display-text",
                    function() { return 'You Gain Witches In a Diffrent way' },
                    { "color": "purple", "font-size": "16px" }],
                "blank",
                "blank",
                "milestones",
            ],
        },
        "Help": {
            content: [
                ["display-text",
                    function() { return 'You gain witches by getting 25,000 ToT and The More You Activate The more You Earn' },
                    { "color": "purple", "font-size": "24px" }],
                ["display-text",
                    function() { return 'Formula: (Active Witch Challenges) + 1' },
                    { "color": "purple", "font-size": "16px" }],
            ],
        },
    },
    milestones: {
        0: {
            requirementDescription: "2 Witches",
            effectDescription: "x2.5 Pumkins per Witch [x]",
            tooltip() {return "x"+format(new Decimal(2.5).pow(player[this.layer].points))},
            done() {return player[this.layer].points.gte(2)},
        },
        1: {
            requirementDescription: "3 Witches",
            effectDescription: "x4 JoLs per Witch [x]",
            tooltip() {return "x"+format(new Decimal(4).pow(player[this.layer].points))},
            done() {return player[this.layer].points.gte(3)},
            unlocked() {return hasMilestone(this.layer, 0)},
        },
        2: {
            requirementDescription: "4 Witches",
            effectDescription: "x3 ToT per Witch and x5 Pumkins and JoLs [x]",
            tooltip() {return "x"+format(new Decimal(3).pow(player[this.layer].points))},
            done() {return player[this.layer].points.gte(4)},
            unlocked() {return hasMilestone(this.layer, 1)},
        },
        3: {
            requirementDescription: "5 Witches",
            effectDescription: "/1000 Halloween level requirment per Witch and x100 Pumkins [/]",
            tooltip() {return "x"+format(new Decimal(1000).pow(player[this.layer].points))},
            done() {return player[this.layer].points.gte(5)},
            unlocked() {return hasMilestone(this.layer, 2)},
        },
        4: {
            requirementDescription: "6 Witches",
            effectDescription: "Unlock More JoL Upgrades and x4 Pumkins, JoLs and ToTs and /1e20 Halloween level requirment",
            done() {return player[this.layer].points.gte(6) && hasMilestone('HalloweenLevel', 2)},
            unlocked() {return hasMilestone(this.layer, 3) && hasMilestone('HalloweenLevel', 2)},
        },
    },
    clickables: {
        11: {
            title() {return "Seedy "+player[this.layer].click11},
            display() {return "x5 and ^1.01 Pumkins but /9 ^0.9 JoLs"},
            canClick() {return !player[this.layer].click12},
            onClick() {
                player[this.layer].click11 = !player[this.layer].click11
                player['Pumkin'].upgrades = []
                player['Pumkin'].milestones = []
                player['Pumkin'].points = new Decimal(0)
                player['JoL'].upgrades = []
                player['JoL'].milestones = []
                player['JoL'].points = new Decimal(0)
                player['ToT'].upgrades = []
                player['ToT'].milestones = []
                player['ToT'].points = new Decimal(0)
            },
        },
        12: {
            title() {return "Seedless: "+player[this.layer].click12},
            display() {return "x5 and ^1.01 JoLs but /9 ^0.9 Pumkins"},
            canClick() {return !player[this.layer].click11},
            onClick() {
                player[this.layer].click12 = !player[this.layer].click12
                player['Pumkin'].upgrades = []
                player['Pumkin'].milestones = []
                player['Pumkin'].points = new Decimal(0)
                player['JoL'].upgrades = []
                player['JoL'].milestones = []
                player['JoL'].points = new Decimal(0)
                player['ToT'].upgrades = []
                player['ToT'].milestones = []
                player['ToT'].points = new Decimal(0)
            },
            unlocked() {return player[this.layer].points.gte(2)},
        },
        21: {
            title() {return "Last Minute: "+player[this.layer].click21},
            display() {return "x1.2 ToT and ^1.08 Pumkins and JoLs but /8 Pumkins and JoLs"},
            canClick() {return true},
            onClick() {
                player[this.layer].click21 = !player[this.layer].click21
                player['Pumkin'].upgrades = []
                player['Pumkin'].milestones = []
                player['Pumkin'].points = new Decimal(0)
                player['JoL'].upgrades = []
                player['JoL'].milestones = []
                player['JoL'].points = new Decimal(0)
                player['ToT'].upgrades = []
                player['ToT'].milestones = []
                player['ToT'].points = new Decimal(0)
            },
            unlocked() {return player[this.layer].points.gte(2)},
        },
        31: {
            title() {return "Rotten "+player[this.layer].click31},
            display() {return "/9 and ^0.9 Pumkins and JoLs"},
            canClick() {return true},
            onClick() {
                player[this.layer].click31 = !player[this.layer].click31
                player['Pumkin'].upgrades = []
                player['Pumkin'].milestones = []
                player['Pumkin'].points = new Decimal(0)
                player['JoL'].upgrades = []
                player['JoL'].milestones = []
                player['JoL'].points = new Decimal(0)
                player['ToT'].upgrades = []
                player['ToT'].milestones = []
                player['ToT'].points = new Decimal(0)
            },
            unlocked() {return player[this.layer].points.gte(3)},
        },
        41: {
            title() {return "Very Rainy Day "+player[this.layer].click41},
            display() {return "/4 and ^0.9 Pumkins and JoLs and /9 ToT"},
            canClick() {return true},
            onClick() {
                player[this.layer].click41 = !player[this.layer].click41
                player['Pumkin'].upgrades = []
                player['Pumkin'].milestones = []
                player['Pumkin'].points = new Decimal(0)
                player['JoL'].upgrades = []
                player['JoL'].milestones = []
                player['JoL'].points = new Decimal(0)
                player['ToT'].upgrades = []
                player['ToT'].milestones = []
                player['ToT'].points = new Decimal(0)
            },
            unlocked() {return player[this.layer].points.gte(4)},
        },
        51: {
            title() {return "Drout "+player[this.layer].click51},
            display() {return "/5,000 Pumkins → ToT"},
            canClick() {return true},
            onClick() {
                player[this.layer].click51 = !player[this.layer].click51
                player['Pumkin'].upgrades = []
                player['Pumkin'].milestones = []
                player['Pumkin'].points = new Decimal(0)
                player['JoL'].upgrades = []
                player['JoL'].milestones = []
                player['JoL'].points = new Decimal(0)
                player['ToT'].upgrades = []
                player['ToT'].milestones = []
                player['ToT'].points = new Decimal(0)
            },
            unlocked() {return player[this.layer].points.gte(5) && hasMilestone('HalloweenLevel', 2)},
        },
        61: {
            title() {return "Poison "+player[this.layer].click61},
            display() {return "/10 Pumkins → ToT"},
            canClick() {return true},
            onClick() {
                player[this.layer].click61 = !player[this.layer].click61
                player['Pumkin'].upgrades = []
                player['Pumkin'].milestones = []
                player['Pumkin'].points = new Decimal(0)
                player['JoL'].upgrades = []
                player['JoL'].milestones = []
                player['JoL'].points = new Decimal(0)
                player['ToT'].upgrades = []
                player['ToT'].milestones = []
                player['ToT'].points = new Decimal(0)
            },
            unlocked() {return player[this.layer].points.gte(6) && (hasUpgrade('JoL', 45) || player[this.layer].click61)},
        },
    },
})

addLayer("Candy", {
    name: "Candy",
    symbol: "",
    position: 1,
    startData() { return {
        unlocked: true,
        points: new Decimal(0),
		Starburst: new Decimal(0),
		Skittles: new Decimal(0),
		LaffyTaffy: new Decimal(0),
		TootsieRolls: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(1e1000),
    resource: "Candy",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(0)

        return mult
    },
    gainExp() {
        Exp = new Decimal(1)

        return Exp
    },
    StarburstMult() {
        mult = new Decimal(0)
        if(hasMilestone('HalloweenLevel', 3)) mult = new Decimal(1)

        if(player['HalloweenLevel'].MainEffectB) mult = mult.times(2)

        if(hasUpgrade(this.layer, 11)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 12)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 13)) mult = mult.times(upgradeEffect(this.layer, 13))
        if(hasUpgrade(this.layer, 15)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 21)) mult = mult.times(3.14159)
        if(hasUpgrade(this.layer, 22)) mult = mult.times(10)
        if(hasUpgrade(this.layer, 24)) mult = mult.times(upgradeEffect(this.layer, 24))
        if(hasUpgrade(this.layer, 32)) mult = mult.times(upgradeEffect(this.layer, 32))
        if(hasUpgrade(this.layer, 33)) mult = mult.times(upgradeEffect(this.layer, 33))
        if(hasUpgrade(this.layer, 34)) mult = mult.times(upgradeEffect(this.layer, 34))
            
        if(hasUpgrade(this.layer, 1012)) mult = mult.times(5)
        if(hasUpgrade(this.layer, 1014)) mult = mult.times(upgradeEffect(this.layer, 1014))
        if(hasUpgrade(this.layer, 1015)) mult = mult.times(10)
        if(hasUpgrade(this.layer, 1022)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 1024)) mult = mult.times(100)
            
        if(hasUpgrade(this.layer, 2014)) mult = mult.times(upgradeEffect(this.layer, 2014))
        if(hasUpgrade(this.layer, 2024)) mult = mult.times(1e50)

        if(hasUpgrade(this.layer, 3013)) mult = mult.times(upgradeEffect(this.layer, 3013))
        if(hasUpgrade(this.layer, 3015)) mult = mult.times(1e10)
        if(hasUpgrade(this.layer, 3022)) mult = mult.times(1e10)
        if(hasUpgrade(this.layer, 3023)) mult = mult.times(1e15)

        if(mult.gte(1e25)) mult = mult.add(-1e25).pow(0.9).add(1e25)
        if(mult.gte(1e33)) mult = mult.add(-1e33).pow(0.9).add(1e33)
        if(mult.gte(1e69)) mult = mult.add(-1e69).pow(0.9).add(1e69)
        if(mult.gte(1e154)) mult = mult.add(-1e154).pow(0.9).add(1e154)

        if(player[this.layer].Starburst.gte(1.79e308)) mult = new Decimal(0)

        return mult
    },
    SkittlesMult() {
        mult = new Decimal(0)
        if(hasUpgrade(this.layer, 23)) mult = new Decimal(1)

        if(player['HalloweenLevel'].MainEffectB) mult = mult.times(2)

        if(hasUpgrade(this.layer, 1011)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 1012)) mult = mult.times(5)
        if(hasUpgrade(this.layer, 1013)) mult = mult.times(upgradeEffect(this.layer, 1013))
        if(hasUpgrade(this.layer, 1015)) mult = mult.times(10)
        if(hasUpgrade(this.layer, 1022)) mult = mult.times(10)
        if(hasUpgrade(this.layer, 1024)) mult = mult.times(100)
        if(hasUpgrade(this.layer, 32)) mult = mult.times(upgradeEffect(this.layer, 32))
        if(hasUpgrade(this.layer, 33)) mult = mult.times(upgradeEffect(this.layer, 33))
        if(hasUpgrade(this.layer, 34)) mult = mult.times(upgradeEffect(this.layer, 34))

        if(hasUpgrade(this.layer, 2013)) mult = mult.times(upgradeEffect(this.layer, 2013))
        if(hasUpgrade(this.layer, 2015)) mult = mult.times(upgradeEffect(this.layer, 24))
        if(hasUpgrade(this.layer, 2022)) mult = mult.times(100)
        if(hasUpgrade(this.layer, 2024)) mult = mult.times(1e50)

        if(hasUpgrade(this.layer, 3013)) mult = mult.times(upgradeEffect(this.layer, 3013))
        if(hasUpgrade(this.layer, 3015)) mult = mult.times(1e10)
        if(hasUpgrade(this.layer, 3022)) mult = mult.times(1e15)
        if(hasUpgrade(this.layer, 3023)) mult = mult.times(1e10)

        if(mult.gte(1e25)) mult = mult.add(-1e25).pow(0.9).add(1e25)
        if(mult.gte(1e33)) mult = mult.add(-1e33).pow(0.9).add(1e33)
        if(mult.gte(1e69)) mult = mult.add(-1e69).pow(0.9).add(1e69)
        if(mult.gte(1e154)) mult = mult.add(-1e154).pow(0.9).add(1e154)

        if(player[this.layer].Skittles.gte(1.79e308)) mult = new Decimal(0)

        return mult
    },
    LaffyTaffyMult() {
        mult = new Decimal(0)
        if(hasUpgrade(this.layer, 1023)) mult = new Decimal(1)

        if(player['HalloweenLevel'].MainEffectB) mult = mult.times(2)

        if(hasUpgrade(this.layer, 2011)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 2012)) mult = mult.times(upgradeEffect(this.layer, 2012))
        if(hasUpgrade(this.layer, 2015)) mult = mult.times(upgradeEffect(this.layer, 24))
        if(hasUpgrade(this.layer, 1024)) mult = mult.times(100)
        if(hasUpgrade(this.layer, 31)) mult = mult.times(upgradeEffect(this.layer, 31))
        if(hasUpgrade(this.layer, 32)) mult = mult.times(upgradeEffect(this.layer, 32))
        if(hasUpgrade(this.layer, 33)) mult = mult.times(upgradeEffect(this.layer, 33))
        if(hasUpgrade(this.layer, 34)) mult = mult.times(upgradeEffect(this.layer, 34))
        if(hasUpgrade(this.layer, 2024)) mult = mult.times(1e50)

        if(hasUpgrade(this.layer, 3013)) mult = mult.times(upgradeEffect(this.layer, 3013))
        if(hasUpgrade(this.layer, 3015)) mult = mult.times(1e10)
        if(hasUpgrade(this.layer, 3022)) mult = mult.times(1e20)
        if(hasUpgrade(this.layer, 3023)) mult = mult.times(1e10)

        if(mult.gte(1e25)) mult = mult.add(-1e25).pow(0.9).add(1e25)
        if(mult.gte(1e33)) mult = mult.add(-1e33).pow(0.9).add(1e33)
        if(mult.gte(1e69)) mult = mult.add(-1e69).pow(0.9).add(1e69)
        if(mult.gte(1e154)) mult = mult.add(-1e154).pow(0.9).add(1e154)

        if(player[this.layer].LaffyTaffy.gte(1.79e308)) mult = new Decimal(0)

        return mult
    },
    TootsieRollsMult() {
        mult = new Decimal(0)
        if(hasUpgrade(this.layer, 2023)) mult = new Decimal(1)

        if(player['HalloweenLevel'].MainEffectB) mult = mult.times(2)

        if(hasUpgrade(this.layer, 3011)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 3012)) mult = mult.times(upgradeEffect(this.layer, 3012))
        if(hasUpgrade(this.layer, 3014)) mult = mult.times(upgradeEffect(this.layer, 3014))
        if(hasUpgrade(this.layer, 3015)) mult = mult.times(1e10)
        if(hasUpgrade(this.layer, 2024)) mult = mult.times(1e50)
        if(hasUpgrade(this.layer, 3022)) mult = mult.times(1e25)
        if(hasUpgrade(this.layer, 3023)) mult = mult.times(1e50)
        if(hasUpgrade(this.layer, 3024)) mult = mult.times(1e10)
        if(hasUpgrade(this.layer, 3025)) mult = mult.times(1e27)

        if(mult.gte(1e25)) mult = mult.add(-1e25).pow(0.9).add(1e25)
        if(mult.gte(1e33)) mult = mult.add(-1e33).pow(0.9).add(1e33)
        if(mult.gte(1e69)) mult = mult.add(-1e69).pow(0.9).add(1e69)
        if(mult.gte(1e154)) mult = mult.add(-1e154).pow(0.9).add(1e154)

        if(player[this.layer].TootsieRolls.gte(1.79e308)) mult = new Decimal(0)

        return mult
    },
    row: "side",
    layerShown() {return false},
    tabFormat: {
        "Candy": {
            content: [
                ["display-text",
                    function() {
                        if(player[this.layer].points.gte(1.79e308)) return 'You have Infinite Candies'
                        return 'You have ' + format(player[this.layer].points) + ' Candies'
                    },
                    { "color": "Red", "font-size": "24px" }],
                "blank",
                "blank",
                ["upgrade", 4011],
            ],
        },
        "Starbursts": {
            content: [
                ["display-text",
                    function() {
                        let text = 'You have ' + format(player[this.layer].Starburst) + ' Starbursts'

                        if(layers[this.layer].StarburstMult().gte(1e25)) text = 'You have ' + format(player[this.layer].Starburst) + ' Starbursts (SoftCap)'
                        if(layers[this.layer].StarburstMult().gte(1e33)) text = 'You have ' + format(player[this.layer].Starburst) + ' Starbursts (SoftCap^2)'
                        if(layers[this.layer].StarburstMult().gte(1e69)) text = 'You have ' + format(player[this.layer].Starburst) + ' Starbursts (SoftCap^3)'
                        if(layers[this.layer].StarburstMult().gte(1e154)) text = 'You have ' + format(player[this.layer].Starburst) + ' Starbursts (SoftCap^4)'

                        if(player[this.layer].Starburst.gte(1.79e308)) text = 'You have Infinite Starbursts (Capped)'

                        return text
                    },
                    { "color": "Red", "font-size": "24px" }],
                ["display-text",
                    function() { return '+' + format(layers[this.layer].StarburstMult()) + ' Starbursts/s' },
                    { "color": "Red", "font-size": "16px" }],
                "blank",
                "blank",
                ["row", [["upgrade", 11], ["upgrade", 12], ["upgrade", 13], ["upgrade", 14], ["upgrade", 15]]],
                ["row", [["upgrade", 21], ["upgrade", 22], ["upgrade", 23], ["upgrade", 24], ["upgrade", 25]]],
            ],
        },
        "Skittles": {
            content: [
                ["display-text",
                    function() {
                        let text = 'You have ' + format(player[this.layer].Skittles) + ' Skittles'

                        if(layers[this.layer].SkittlesMult().gte(1e25)) text = 'You have ' + format(player[this.layer].Skittles) + ' Skittles (SoftCap)'
                        if(layers[this.layer].SkittlesMult().gte(1e33)) text = 'You have ' + format(player[this.layer].Skittles) + ' Skittles (SoftCap)^2'
                        if(layers[this.layer].SkittlesMult().gte(1e69)) text = 'You have ' + format(player[this.layer].Skittles) + ' Skittles (SoftCap)^3'
                        if(layers[this.layer].SkittlesMult().gte(1e154)) text = 'You have ' + format(player[this.layer].Skittles) + ' Skittles (SoftCap)^4'
                        
                        if(player[this.layer].Skittles.gte(1.79e308)) text = 'You have Infinite Skittles (Capped)'

                        return text
                    },
                    { "color": "Red", "font-size": "24px" }],
                ["display-text",
                    function() { return '+' + format(layers[this.layer].SkittlesMult()) + ' Skittles/s' },
                    { "color": "Red", "font-size": "16px" }],
                "blank",
                "blank",
                ["row", [["upgrade", 1011], ["upgrade", 1012], ["upgrade", 1013], ["upgrade", 1014], ["upgrade", 1015]]],
                ["row", [["upgrade", 1021], ["upgrade", 1022], ["upgrade", 1023], ["upgrade", 1024], ["upgrade", 1025]]],
            ],
            unlocked() {return hasUpgrade('Candy', 23)},
        },
        "LaffyTaffy": {
            content: [
                ["display-text",
                    function() {
                        let text = 'You have ' + format(player[this.layer].LaffyTaffy) + ' LaffyTaffies'

                        if(layers[this.layer].LaffyTaffyMult().gte(1e25)) text = 'You have ' + format(player[this.layer].LaffyTaffy) + ' LaffyTaffies (SoftCap)'
                        if(layers[this.layer].LaffyTaffyMult().gte(1e33)) text = 'You have ' + format(player[this.layer].LaffyTaffy) + ' LaffyTaffies (SoftCap^2)'
                        if(layers[this.layer].LaffyTaffyMult().gte(1e69)) text = 'You have ' + format(player[this.layer].LaffyTaffy) + ' LaffyTaffies (SoftCap^3)'
                        if(layers[this.layer].LaffyTaffyMult().gte(1e154)) text = 'You have ' + format(player[this.layer].LaffyTaffy) + ' LaffyTaffies (SoftCap^4)'

                        if(player[this.layer].LaffyTaffy.gte(1.79e308)) text = 'You have Infinite LaffyTaffies (Capped)'

                        return text
                    },
                    { "color": "Red", "font-size": "24px" }],
                ["display-text",
                    function() { return '+' + format(layers[this.layer].LaffyTaffyMult()) + ' LaffyTaffies/s' },
                    { "color": "Red", "font-size": "16px" }],
                "blank",
                "blank",
                ["row", [["upgrade", 2011], ["upgrade", 2012], ["upgrade", 2013], ["upgrade", 2014], ["upgrade", 2015]]],
                ["row", [["upgrade", 2021], ["upgrade", 2022], ["upgrade", 2023], ["upgrade", 2024], ["upgrade", 2025]]],
            ],
            unlocked() {return hasUpgrade('Candy', 1023)},
        },
        "Tootsie Rolls": {
            content: [
                ["display-text",
                    function() {
                        let text = 'You have ' + format(player[this.layer].TootsieRolls) + ' Tootsie Rolls'

                        if(layers[this.layer].TootsieRollsMult().gte(1e25)) text = 'You have ' + format(player[this.layer].TootsieRolls) + ' Tootsie Rolls (SoftCap)'
                        if(layers[this.layer].TootsieRollsMult().gte(1e33)) text = 'You have ' + format(player[this.layer].TootsieRolls) + ' Tootsie Rolls (SoftCap^2)'
                        if(layers[this.layer].TootsieRollsMult().gte(1e69)) text = 'You have ' + format(player[this.layer].TootsieRolls) + ' Tootsie Rolls (SoftCap^3)'
                        if(layers[this.layer].TootsieRollsMult().gte(1e154)) text = 'You have ' + format(player[this.layer].TootsieRolls) + ' Tootsie Rolls (SoftCap^4)'

                        if(player[this.layer].TootsieRolls.gte(1.79e308)) text = 'You have Infinite Tootsie Rolls (Capped)'

                        return text
                    },
                    { "color": "Red", "font-size": "24px" }],
                ["display-text",
                    function() { return '+' + format(layers[this.layer].TootsieRollsMult()) + ' Tootsie Rolls/s' },
                    { "color": "Red", "font-size": "16px" }],
                "blank",
                "blank",
                ["row", [["upgrade", 3011], ["upgrade", 3012], ["upgrade", 3013], ["upgrade", 3014], ["upgrade", 3015]]],
                ["row", [["upgrade", 3021], ["upgrade", 3022], ["upgrade", 3023], ["upgrade", 3024], ["upgrade", 3025]]],
            ],
            unlocked() {return hasUpgrade('Candy', 2023)},
        },
    },
    upgrades: {
        11: {
            title: "Starburst I",
            description: "x2 Starburst",
            cost: new Decimal(10),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
        },
        12: {
            title: "Starburst II",
            description: "x2 Starburst again",
            cost: new Decimal(25),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Starburst III",
            description() {return "Candy Boosts Starbursts"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].points.add(1).log10().add(1))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Starbursts"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(25),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Starburst IV",
            description() {return "Candy Boosts ToTs"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].points.add(1).log(1e3).add(1))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" ToTs"},
            tooltip: "log1,000(x + 1) + 1",
            cost: new Decimal(100),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Starburst V",
            description: "x2 Pumkins → ToTs and Starbursts",
            cost: new Decimal(100),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Starburst VI",
            description: "xpi Starbursts",
            cost: new Decimal(250),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Starburst VII",
            description: "x10 Starburst",
            cost: new Decimal(1e3),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Starburst VIII",
            description: "Unlock Skittles",
            cost: new Decimal(1.5e4),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Starburst IX",
            description() {
                let text = "Candy Upgrades Boosts Starbursts"
                if(hasUpgrade(this.layer, 2015)) text = "Candy Upgrades Boosts Starbursts, Skittles and Laffy Taffies"
                return text
            },
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(new Decimal(player[this.layer].upgrades.length).add(1).pow(0.66))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Starbursts"},
            tooltip: "(x + 1)^0.66",
            cost: new Decimal(5e6),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 1021)},
        },
        25: {
            title: "Starburst X",
            description: "Unlock More Skittles Upgrades",
            cost: new Decimal(1e7),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
        31: {
            title: "Starburst XI",
            description() {return "Candy Boosts Laffy Taffies"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].points.add(1).log10().add(1))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" LaffyTaffies"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(1e25),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 1025)},
        },
        32: {
            title: "Starburst XII",
            description() {return "Starburst Boosts Itself, Skittles and LaffyTaffies"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].Starburst.add(1).log10().add(1))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Starbursts, Skittles and LaffyTaffies"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(5e25),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
        33: {
            title: "Starburst XIII",
            description() {return "Skittles Boosts Starburst, Itself and LaffyTaffies"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].Skittles.add(1).log10().add(1))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Starbursts, Skittles and LaffyTaffies"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(3.3e26),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 32)},
        },
        34: {
            title: "Starburst XIV",
            description() {return "LaffyTaffies Boosts Starburst, Skittles and Itself"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].LaffyTaffy.add(1).log10().add(1))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Starbursts, Skittles and LaffyTaffies"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(5e27),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 33)},
        },
        35: {
            title: "Starburst XV",
            description: "Unlock More LaffyTaffy Upgrades",
            cost: new Decimal(1e30),
            currencyDisplayName: "Starburst",
            currencyInternalName: "Starburst",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 34)},
        },
        1011: {
            title: "Skittles I",
            description: "x2 Skittles",
            cost: new Decimal(10),
            currencyDisplayName: "Skittles",
            currencyInternalName: "Skittles",
            currencyLayer: 'Candy',
        },
        1012: {
            title: "Skittles II",
            description: "x5 Starbursts and Skittles",
            cost: new Decimal(25),
            currencyDisplayName: "Skittles",
            currencyInternalName: "Skittles",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 1011)},
        },
        1013: {
            title: "Skittles III",
            description() {return "Candy Boosts Skittles"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].points.add(1).log10().add(1))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Skittles"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(100),
            currencyDisplayName: "Skittles",
            currencyInternalName: "Skittles",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 1012)},
        },
        1014: {
            title: "Skittles IV",
            description() {return "Skittles Boosts Starbursts"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].Skittles.add(1).log10().add(1))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Starbursts"},
            tooltip: "log10(x + 1) + 1",
            cost: new Decimal(500),
            currencyDisplayName: "Skittles",
            currencyInternalName: "Skittles",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 1013)},
        },
        1015: {
            title: "Skittles V",
            description: "x10 Starbursts and Skittles",
            cost: new Decimal(1e3),
            currencyDisplayName: "Skittles",
            currencyInternalName: "Skittles",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 1014)},
        },
        1021: {
            title: "Skittles VI",
            description: "Unlock More Starburst Uprgades",
            cost: new Decimal(5e3),
            currencyDisplayName: "Skittles",
            currencyInternalName: "Skittles",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 1015)},
        },
        1022: {
            title: "Skittles VII",
            description: "x10 Skittles and x2 Starbursts",
            cost: new Decimal(1.5e4),
            currencyDisplayName: "Skittles",
            currencyInternalName: "Skittles",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 1021)},
        },
        1023: {
            title: "Skittles VIII",
            description: "Unlock Laffy Taffies",
            cost: new Decimal(5e4),
            currencyDisplayName: "Skittles",
            currencyInternalName: "Skittles",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 1022)},
        },
        1024: {
            title: "Skittles IX",
            description: "x100 Starbursts, Skittles and laffy Taffies",
            cost: new Decimal(1e15),
            currencyDisplayName: "Skittles",
            currencyInternalName: "Skittles",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 2021)},
        },
        1025: {
            title: "Skittles X",
            description: "Unlock More Starburst Upgrades",
            cost: new Decimal(1e21),
            currencyDisplayName: "Skittles",
            currencyInternalName: "Skittles",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 1024)},
        },
        2011: {
            title: "LaffyTaffy I",
            description: "x2 LaffyTaffy",
            cost: new Decimal(10),
            currencyDisplayName: "LaffyTaffy",
            currencyInternalName: "LaffyTaffy",
            currencyLayer: 'Candy',
        },
        2012: {
            title: "LaffyTaffy II",
            description() {return "Starbursts Boosts LaffyTaffies"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].Starburst.add(1).pow(0.66))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" LaffyTaffies"},
            tooltip: "(x + 1)^0.66",
            cost: new Decimal(25),
            currencyDisplayName: "LaffyTaffy",
            currencyInternalName: "LaffyTaffy",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 2011)},
        },
        2013: {
            title: "LaffyTaffy III",
            description() {return "LaffyTaffies Boosts Skittles"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].LaffyTaffy.add(1).pow(0.66))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Skittles"},
            tooltip: "(x + 1)^0.66",
            cost: new Decimal(1e7),
            currencyDisplayName: "LaffyTaffy",
            currencyInternalName: "LaffyTaffy",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 2012)},
        },
        2014: {
            title: "LaffyTaffy IV",
            description() {return "Skittles Boosts Starbursts"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].Skittles.add(1).pow(0.66))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Starbursts"},
            tooltip: "(x + 1)^0.66",
            cost: new Decimal(1e7),
            currencyDisplayName: "LaffyTaffy",
            currencyInternalName: "LaffyTaffy",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 2013)},
        },
        2015: {
            title: "LaffyTaffy V",
            description: "Make Starburst IX Apply to Skittles and LaffyTaffies",
            cost: new Decimal(2.5e11),
            currencyDisplayName: "LaffyTaffy",
            currencyInternalName: "LaffyTaffy",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 2014)},
        },
        2021: {
            title: "LaffyTaffy VI",
            description: "Unlock More Skittles Upgrades",
            cost: new Decimal(2.5e13),
            currencyDisplayName: "LaffyTaffy",
            currencyInternalName: "LaffyTaffy",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 2015)},
        },
        2022: {
            title: "LaffyTaffy VII",
            description: "x100 Skittles",
            cost: new Decimal(2e27),
            currencyDisplayName: "LaffyTaffy",
            currencyInternalName: "LaffyTaffy",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 35)},
        },
        2023: {
            title: "LaffyTaffy VIII",
            description: "Unlock Tootsie Roll",
            cost: new Decimal(5e27),
            currencyDisplayName: "LaffyTaffy",
            currencyInternalName: "LaffyTaffy",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 2022)},
        },
        2024: {
            title: "LaffyTaffy IX",
            description: "x1e50 Starbursts → TootsieRolls",
            cost: new Decimal(1e124),
            currencyDisplayName: "LaffyTaffy",
            currencyInternalName: "LaffyTaffy",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 3021)},
        },
        2025: {
            title: "LaffyTaffy X",
            description: "Unlock More Tootsie Roll Upgrades",
            cost: new Decimal(1e227),
            currencyDisplayName: "LaffyTaffy",
            currencyInternalName: "LaffyTaffy",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 2024)},
        },
        3011: {
            title: "Tootsie Roll I",
            description: "x2 TootsieRolls",
            cost: new Decimal(10),
            currencyDisplayName: "TootsieRolls",
            currencyInternalName: "TootsieRolls",
            currencyLayer: 'Candy',
        },
        3012: {
            title: "Tootsie Roll II",
            description() {return "Candy Boosts TootsieRolls"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].points.add(1).pow(0.66))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" TootsieRolls"},
            tooltip: "(x + 1)^0.66",
            cost: new Decimal(25),
            currencyDisplayName: "TootsieRolls",
            currencyInternalName: "TootsieRolls",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 3011)},
        },
        3013: {
            title: "Tootsie Roll III",
            description() {return "TootsieRolls Boosts Starbursts, Skittles and LaffyTaffies"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].TootsieRolls.add(1).pow(0.66))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Starbursts, Skittles and LaffyTaffies"},
            tooltip: "(x + 1)^0.66",
            cost: new Decimal(1e23),
            currencyDisplayName: "TootsieRolls",
            currencyInternalName: "TootsieRolls",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 3012)},
        },
        3014: {
            title: "Tootsie Roll IV",
            description() {return "Starbursts (x), Skittles (y) and LaffyTaffies (z) Boosts TootsieRolls"},
            effect() {
                let effect = new Decimal(1)
                
                effect = effect.times(player[this.layer].Starburst.add(1).pow(0.1)).times(player[this.layer].Skittles.add(1).pow(0.1)).times(player[this.layer].LaffyTaffy.add(1).pow(0.1))

                return effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Starbursts, Skittles and LaffyTaffies"},
            tooltip: "(x + 1)^0.1 * (y + 1)^0.1 * (z + 1)^0.1",
            cost: new Decimal(1e37),
            currencyDisplayName: "TootsieRolls",
            currencyInternalName: "TootsieRolls",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 3013)},
        },
        3015: {
            title: "Tootsie Roll V",
            description: "x1e10 Starbursts → TootsieRolls",
            cost: new Decimal(1e70),
            currencyDisplayName: "TootsieRolls",
            currencyInternalName: "TootsieRolls",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 3014)},
        },
        3021: {
            title: "Tootsie Roll VI",
            description: "Unlock more LaffyTaffy Upgrades",
            cost: new Decimal(1e95),
            currencyDisplayName: "TootsieRolls",
            currencyInternalName: "TootsieRolls",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 3015)},
        },
        3022: {
            title: "Tootsie Roll VII",
            description: "x1e10 Starbursts, x1e15 Skittles, x1e20 LaffyTaffies and x1e25 TootsieRolls",
            cost: new Decimal(1e187),
            currencyDisplayName: "TootsieRolls",
            currencyInternalName: "TootsieRolls",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 2025)},
        },
        3023: {
            title: "Tootsie Roll VIII",
            description: "x1e15 Starbursts, x1e10 Skittles, x1e10 LaffyTaffies and x1e50 TootsieRolls again",
            cost: new Decimal(1e240),
            currencyDisplayName: "TootsieRolls",
            currencyInternalName: "TootsieRolls",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 3022)},
        },
        3024: {
            title: "Tootsie Roll IX",
            description: "x1e10 TootsieRolls",
            cost: new Decimal(1e283),
            currencyDisplayName: "TootsieRolls",
            currencyInternalName: "TootsieRolls",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 3023)},
        },
        3025: {
            title: "Tootsie Roll IX",
            description: "x1e27 TootsieRolls",
            cost: new Decimal(1e290),
            currencyDisplayName: "TootsieRolls",
            currencyInternalName: "TootsieRolls",
            currencyLayer: 'Candy',
            unlocked() {return hasUpgrade(this.layer, 3024)},
        },
        4011: {
            title: "Candies",
            description: "/1e55 Halloween Level requirement and x1,000,000 Pumkins → ToTs",
            cost: new Decimal(1.79e308),
            canAfford() {return player[this.layer].points.gte(1.78e308) && player[this.layer].Starburst.gte(1.78e308) && player[this.layer].Skittles.gte(1.78e308) && player[this.layer].LaffyTaffy.gte(1.78e308) && player[this.layer].TootsieRolls.gte(1.78e308)},
            unlocked() {return player[this.layer].points.gte(1.79e308)},
        },
    },
    automate() {
        player[this.layer].Starburst = player[this.layer].Starburst.add(layers[this.layer].StarburstMult().times(1/20))
        if(player[this.layer].Starburst.gte(1.79e308)) player[this.layer].Starburst = new Decimal(1.79e308)
        player[this.layer].Skittles = player[this.layer].Skittles.add(layers[this.layer].SkittlesMult().times(1/20))
        if(player[this.layer].Skittles.gte(1.79e308)) player[this.layer].Skittles = new Decimal(1.79e308)
        player[this.layer].LaffyTaffy = player[this.layer].LaffyTaffy.add(layers[this.layer].LaffyTaffyMult().times(1/20))
        if(player[this.layer].LaffyTaffy.gte(1.79e308)) player[this.layer].LaffyTaffy = new Decimal(1.79e308)
        player[this.layer].TootsieRolls = player[this.layer].TootsieRolls.add(layers[this.layer].TootsieRollsMult().times(1/20))
        if(player[this.layer].TootsieRolls.gte(1.79e308)) player[this.layer].TootsieRolls = new Decimal(1.79e308)

        player[this.layer].points = new Decimal.min(player[this.layer].Starburst.add(player[this.layer].Skittles).add(player[this.layer].LaffyTaffy).add(player[this.layer].TootsieRolls), new Decimal(1.79e308))
    },
})
