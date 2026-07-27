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
        "Halloween Acheivments": {
            embedLayer: "HalloweenA",
            buttonStyle: {
                "color": "#f5d628",
                "border": "2px solid #f5d628",
            },
        },
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
    },
})

addLayer("HalloweenA", {
    name: "HalloweenA",
    symbol: "",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#f5d628",
    requires: new Decimal(1e1000),
    resource: "Pumkins",
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
    tabFormat: [
        ["display-text",
        function() { return "I don't care About Spoilers. Happy Halloween." },
        { "color": "orange", "font-size": "24px"}],
        "achievements",
    ],
    achievments: {
        11: {
            name: "???",
            done() {return false},
            tooltip: "No"
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

        if(hasMilestone('HalloweenLevel', 0)) mult = mult.times(5)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    passiveGeneration() {
        let Gen = new Decimal(1)

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
            unlocked() {return hasUpgrade(this.layer, 32) && hasUpgrade('JoL', 12)},
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

        if(hasMilestone('HalloweenLevel', 0)) mult = mult.times(4)

        return mult
    },
    gainExp() {
        return new Decimal(1)
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
            description: "x5 Pumkins -> ToT",
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

        if(hasMilestone('HalloweenLevel', 0)) mult = mult.times(3)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    passiveGeneration() {
        let Gen = new Decimal(0)

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
    },
})

addLayer("HalloweenLevel", {
    name: "Halloween Level",
    symbol: "",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
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

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    passiveGeneration() {
        let Gen = new Decimal(0)

        return Gen
    },
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
            effectDescription: "The End for Now x10 Skill (Yes the end for teaser also after softcaps)",
            done() {return player[this.layer].points.gte(3)},
        },
    },
})
