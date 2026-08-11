addLayer("MiniGame", {
    name: "MiniGame",
    symbol: "MNGM",
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
        "Minigame Achievments": {
            embedLayer: "MiniA",
            buttonStyle: {
                "color": "#ffff00",
                "border": "2px solid #ffff00",
            },
        },
        "Island 1": {
            embedLayer: "Island1",
            buttonStyle: {
                "color": "#555555",
                "border": "2px solid #555555",
            },
        },
        "Island 2": {
            embedLayer: "Island2",
            buttonStyle: {
                "color": "#11ca00",
                "border": "2px solid #11ca00",
            },
            unlocked() {return hasUpgrade('Island1', 22)}
        },
        "Island 3": {
            embedLayer: "Island3",
            buttonStyle: {
                "color": "#8fff85",
                "border": "2px solid #8fff85",
            },
            unlocked() {return hasUpgrade('Island2a', 25)}
        },
        "Research": {
            embedLayer: "Research",
            buttonStyle: {
                "color": "#00ffff",
                "border": "2px solid #00ffff",
            },
            unlocked() {return hasUpgrade('Island3f', 25) || hasMilestone('Research', 0)}
        },
        "Event (teaser Not Required)": {
            embedLayer: "Event",
            buttonStyle: {
                "color": "#797979",
                "border": "2px solid #797979",
            },
        },
    },
})

addLayer("MiniA", {
    name: "MiniA",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffff00",
    requires: new Decimal(1e1000),
    resource: "Sub-Skill",
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
    row: "Side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "The Achievments" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        "blank",
        "blank",
        ["display-text",
        function() { return 'You Can only Seen the Next 3 Achivements (Broken Sad :O)' },
        { "color": "yellow", "font-size": "24px"}],
        "achievements",
    ],
    achievements: {
        11: {
            name: "First Is the Start",
            done() {return hasUpgrade('Island1', 11)},
            tooltip: "Get Upgrade #1",
        },
        12: {
            name: "First Boost",
            done() {return hasUpgrade('Island1', 12)},
            tooltip: "Get Upgrade #2",
        },
        13: {
            name: "First Non-Static Boost",
            done() {return hasUpgrade('Island1', 21)},
            tooltip: "Get Upgrade #6",
        },
        14: {
            name: "First Upgrade Boost",
            done() {return hasUpgrade('Island1', 22)},
            tooltip: "Get Upgrade #7",
        },
        15: {
            name: "First Base Boost",
            done() {return hasUpgrade('Island2a', 11)},
            tooltip: "Get Upgrade #8",
        },
        21: {
            name: "CoolNess",
            done() {return hasUpgrade('Island2a', 13)},
            tooltip: "Get Upgrade #10",
        },
        22: {
            name: "Money",
            done() {return hasUpgrade('Island1', 23)},
            tooltip: "Get Upgrade #17",
        },
        23: {
            name: "More",
            done() {return getBuyableAmount('Island2b', 13).gte(1)},
            tooltip: "Max Buyable Island 2 area 2 Unlocker III",
        },
        24: {
            name: "Wait Hold Up",
            done() {return hasUpgrade('Island2b', 21)},
            tooltip: "Get Upgrade #23",
        },
        25: {
            name: "More II",
            done() {return getBuyableAmount('Island2b', 13).gte(2)},
            tooltip: "Max Buyable Island 2 area 2 Unlocker III again",
        },
        31: {
            name: "Infinite",
            done() {return hasUpgrade('Island3a', 11)},
            tooltip: "Get Upgrade #25",
        },
        32: {
            name: "Exchanger",
            done() {return hasUpgrade('Island3a', 14)},
            tooltip: "Get Upgrade #28",
        },
        33: {
            name: "Automation I",
            done() {return hasUpgrade('Island3a', 15)},
            tooltip: "Get Upgrade #29",
        },
        34: {
            name: "Tenth One",
            done() {return hasUpgrade('Island3c', 11)},
            tooltip: "Get Upgrade #31",
        },
        35: {
            name: "Another One!",
            done() {return hasUpgrade('Island3c', 13)},
            tooltip: "Get Upgrade #33",
        },
        41: {
            name: "Automation II",
            done() {return hasUpgrade('Island3e', 13)},
            tooltip: "Get Upgrade #39",
        },
        42: {
            name: "Finals",
            done() {return hasUpgrade('Island3f', 11)},
            tooltip: "Get Upgrade #41",
        },
        43: {
            name: "Last 1",
            done() {return hasUpgrade('Island3f', 25)},
            tooltip: "Get Upgrade #50",
        },
        44: {
            name: "Hey!",
            done() {return hasUpgrade('Research', 11)},
            tooltip: "Get Upgrade #51",
        },
        45: {
            name: "Reset again",
            done() {return hasUpgrade('Research', 12)},
            tooltip: "Get Upgrade #52",
        },
        51: {
            name: "Faster Faster",
            done() {return hasUpgrade('Research', 13)},
            tooltip: "Get Upgrade #53",
        },
        52: {
            name: "Early Automation",
            done() {return hasUpgrade('Research', 14)},
            tooltip: "Get Upgrade #54",
        },
        53: {
            name: "Autobuy now",
            done() {return hasUpgrade('Research', 15)},
            tooltip: "Get Upgrade #55",
        },
        54: {
            name: "More Upgrades!",
            done() {return hasUpgrade('Research', 32)},
            tooltip: "Get Upgrade #62",
        },
    }
})

addLayer("Island1", {
    name: "Island 1",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#555555",
    requires: new Decimal(0),
    resource: "Sub-Skill",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(0)
        if(hasUpgrade(this.layer, 11)) mult = new Decimal(1)

        if(hasUpgrade('Island2a', 11)) mult = mult.add(1)
        if(hasUpgrade('Island2a', 23)) mult = mult.add(upgradeEffect('Island2a', 23))
        
        if(hasUpgrade(this.layer, 12)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 13)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 14)) mult = mult.times(1.5)
        if(hasUpgrade(this.layer, 15)) mult = mult.times(3.14)
        if(hasUpgrade(this.layer, 21)) mult = mult.times(upgradeEffect(this.layer, 21))
        if(hasUpgrade('Island2a', 12)) mult = mult.times(2.001)
        if(hasUpgrade('Island2a', 13)) mult = mult.times(upgradeEffect('Island2a', 13))
        if(hasUpgrade('Island2a', 14)) mult = mult.times(new Decimal(2).sqrt())
        if(hasUpgrade('Island2a', 21)) mult = mult.times(upgradeEffect('Island2a', 21))
        if(hasUpgrade('Island2a', 22)) mult = mult.times(5)
        if(hasUpgrade('Island2b', 11)) mult = mult.times(5.1)
        mult = mult.times(buyableEffect('Island2b', 11))
        if(hasUpgrade('Island2b', 13)) mult = mult.times(2)
        if(hasUpgrade('Island2b', 15)) mult = mult.times(10)
        if(hasUpgrade('Island2a', 25)) mult = mult.times(2)
        mult = mult.times(buyableEffect('Island3a', 11))
        if(hasUpgrade('Island3a', 12)) mult = mult.times(5)
        if(hasUpgrade('Island3a', 13)) mult = mult.times(upgradeEffect('Island3a', 13))
        if(hasUpgrade('Island3c', 11)) mult = mult.times(15)
        if(hasUpgrade('Island3c', 12)) mult = mult.times(5)
        mult = mult.times(buyableEffect('Island3d', 11))
        if(hasUpgrade('Island3c', 15)) mult = mult.times(10)
        if(hasUpgrade('Island3c', 22)) mult = mult.times(2)
        if(hasUpgrade('Island3e', 11)) mult = mult.times(upgradeEffect('Island3e', 11))
        if(hasUpgrade('Island3f', 11)) mult = mult.times(upgradeEffect('Island3f', 11))
        if(hasUpgrade('Island3f', 12)) mult = mult.add(upgradeEffect('Island2a', 23))
        if(hasUpgrade('Island3f', 14)) mult = mult.times(upgradeEffect('Island3f', 14))
        if(hasUpgrade('Island3f', 21)) mult = mult.times(new Decimal(2).cbrt())
        if(hasUpgrade('Island3f', 23)) mult = mult.times(10)
        if(hasUpgrade('Island3f', 24)) mult = mult.times(10)
        if(hasUpgrade(this.layer, 24)) mult = mult.times(2.5)
        if(hasUpgrade(this.layer, 25)) mult = mult.times(8)
        if(hasUpgrade('Island2b', 25)) mult = mult.times(1.1)
        if(hasUpgrade('Island3a', 25)) mult = mult.times(1.1)
        if(hasUpgrade('Island3c', 23)) mult = mult.times(1.2)

        if(hasUpgrade('Research', 11)) mult = mult.times(5)
        if(hasUpgrade('Research', 12)) mult = mult.times(2)
        if(hasUpgrade('Research', 13)) mult = mult.times(1.5)
        if(hasUpgrade('Research', 14)) mult = mult.times(5)
        if(hasUpgrade('Research', 24)) mult = mult.times(5)

        if(player["Island3b"].click11) mult = mult.times(2)
        if(player["Island3b"].click12) mult = mult.times(3)
        if(player["Island3b"].click13) mult = mult.times(3)
        if(player["Island3b"].click12) mult = mult.times(4)
        if(player["Island3b"].click21) mult = mult.times(1/4)
        if(player["Island3b"].click22) mult = mult.times(1/8)
        if(player["Island3b"].click23) mult = mult.times(1/12)
        if(player["Island3b"].click24) mult = mult.times(1/16)
        
        return mult.times(0) // Make sure to slash out the .times()
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Island 1 the Start (Minigames to pass time) [Upgrade Tree Cuz why not !This has no main progression!]" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player["Island1"].points) + ' Sub-Skill' },
        { "color": "green", "font-size": "24px"}],
        "resource-display",
        "blank",
        "blank",
        "upgrades",
    ],
    passiveGeneration() {
        let Gen = 1
        return Gen
    },
    upgrades: {
        11: {
            title: "The First Upgrade #1",
            description: "start generating Sub-Skill at 1/s",
            cost: new Decimal(0),
        },
        12: {
            title: "Basic Boost I #2",
            description: "double Sub-Skill gain",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Basic Boost II #3",
            description: "double Sub-Skill gain again",
            cost: new Decimal(10),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Basic Boost III #4",
            description: "x1.5 Sub-Skill gain",
            cost: new Decimal(25),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Basic Boost IV #5",
            description: "x3.14 Sub-Skill gain",
            cost: new Decimal(50),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Non-static Boost I #6",
            description() {
                let Text = ""
                Text = "Sub-Skill boost Itself log100(x + 1) + 1 [x] [Cap: Cap 1e100]"
                if(hasUpgrade(this.layer, 22)) Text = "Sub-Skill boost Itself log90(x + 1) + 1 [x] [Cap: Cap 1e100]"
                if(hasUpgrade('Island2a', 15)) Text = "Sub-Skill boost Itself log75(x + 1) + 1 [x] [Cap: Cap 1e100]"
                if(hasUpgrade('Island2b', 13)) Text = "Sub-Skill boost Itself log50(x + 1) + 1 [x] [Cap: Cap 1e100]"
                if(hasUpgrade('Island3a', 11)) Text = "Sub-Skill boost Itself log35(x + 1) + 1 [x] [Cap: Cap 1e100]"
                if(hasUpgrade('Island3a', 21)) Text = "Sub-Skill boost Itself log25(x + 1) + 1 [x] [Cap: Cap 1e100]"
                if(getBuyableAmount('Island3d', 22).gte(1)) Text = "Sub-Skill boost Itself log15(x + 1) + 1 [x] [Cap: Cap 1e100]"
                if(hasUpgrade('Island2b', 23)) Text = "Sub-Skill boost Itself log15(x + 1) + 1 x 2.5 [x] [Cap: Cap 1e100]"
                return Text
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = new Decimal(1).times(player[this.layer].points.add(1).log(100).add(1))
                if(hasUpgrade(this.layer, 22)) Effect = new Decimal(1).times(player[this.layer].points.add(1).log(90).add(1))
                if(hasUpgrade('Island2a', 15)) Effect = new Decimal(1).times(player[this.layer].points.add(1).log(75).add(1))
                if(hasUpgrade('Island2b', 13)) Effect = new Decimal(1).times(player[this.layer].points.add(1).log(50).add(1))
                if(hasUpgrade('Island3a', 11)) Effect = new Decimal(1).times(player[this.layer].points.add(1).log(35).add(1))
                if(hasUpgrade('Island3a', 21)) Effect = new Decimal(1).times(player[this.layer].points.add(1).log(25).add(1))
                if(getBuyableAmount('Island3d', 22).gte(1)) Effect = new Decimal(1).times(player[this.layer].points.add(1).log(15).add(1))
                
                if(hasUpgrade('Island2b', 23)) Effect = Effect.times(2.5)

                Effect = new Decimal.min(Effect, new Decimal(1e100))
                return Effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Sub-Skill gain"},
            cost: new Decimal(225),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Upgrader I #7",
            description: "-10 in the log of upgrade #6 and unlock Island 2",
            cost: new Decimal(1000),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Money? #17",
            description: "Start Gaining Money at 1/s",
            cost: new Decimal(1e6),
            unlocked() {return hasUpgrade('Island2a', 24)},
        },
        24: {
            title: "New I #63",
            description: "x2.5 Sub-Skill",
            cost: new Decimal(1e33),
            unlocked() {return hasUpgrade('Research', 32)},
        },
        25: {
            title: "New II #64",
            description: "the number devided by 8 multiplies Sub-Skill and half that for Money and Moners",
            cost: new Decimal(5e33),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
    },
    automate() {
        if(hasUpgrade('Research', 15)) {
            buyUpgrade(this.layer, 11);
            buyUpgrade(this.layer, 12);
            buyUpgrade(this.layer, 13);
            buyUpgrade(this.layer, 14);
            buyUpgrade(this.layer, 15);
            buyUpgrade(this.layer, 21);
            buyUpgrade(this.layer, 22);
            buyUpgrade(this.layer, 23);
        };
    },
})

addLayer("Island2", {
    name: "Island 2",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#11ca00",
    requires: new Decimal(1e1000),
    resource: "Sub-Skill",
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
        "Area 1": {
            embedLayer: "Island2a",
            buttonStyle: {
                "color": "#11ca00",
                "border": "2px solid #11ca00",
            },
        },
        "Area 2": {
            embedLayer: "Island2b",
            buttonStyle: {
                "color": "#93e200",
                "border": "2px solid #93e200",
            },
            unlocked() {return hasUpgrade('Island2a', 24)},
        },
    },
})

addLayer("Island2a", {
    name: "Island 2a",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#11ca00",
    requires: new Decimal(1e1000),
    resource: "Sub-Skill",
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
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Island 2 more things" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player["Island1"].points) + ' Sub-Skill' },
        { "color": "green", "font-size": "24px"}],
        "blank",
        "blank",
        "upgrades",
    ],
    upgrades: {
        11: {
            title: "Second Island #8",
            description: "+1 Base Sub-Skill gain",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1500),
        },
        12: {
            title: "Basic Boost V #9",
            description: "x2.001 Sub-Skill gain",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(4000),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Cool Boost I #10",
            description() {
                let Text = ""
                Text = "x3 Sub-Skill gain if < 5,000 else x1.75 Sub-Skill gain"
                if(hasUpgrade(this.layer, 15)) Text = "x3 Sub-Skill gain if < 100,000 else x1.75 Sub-Skill gain"
                if(hasUpgrade('Island3a', 11)) Text = "x4 Sub-Skill gain if < 1e15 else x2.5 Sub-Skill gain"
                if(getBuyableAmount('Island3d', 22).gte(1)) Text = "x4 Sub-Skill gain if < 1e20 else x3 Sub-Skill gain"
                if(hasUpgrade('Island3f', 12)) Text = "x4 Sub-Skill gain if < 1e25 else x3 Sub-Skill gain"
                if(hasUpgrade('Island2b', 23)) Text = "x10 Sub-Skill gain if < 1e25 else x7.5 Sub-Skill gain"
                return Text
            },
            effect() {
                let Effect = new Decimal(1)
                if(player["Island1"].points.lt(5000)) Effect = new Decimal(3)
                else if(player["Island1"].points.lt(100000) && hasUpgrade(this.layer, 15)) Effect = new Decimal(3)
                else if(player["Island1"].points.lt(1e15) && hasUpgrade('Island3a', 11)) Effect = new Decimal(4)
                else if(player["Island1"].points.gte(1e15) && hasUpgrade('Island3a', 11)) Effect = new Decimal(2.5)
                else Effect = new Decimal(1.75)
                if(player["Island1"].points.lt(1e20) && getBuyableAmount('Island3d', 22).gte(1)) Effect = new Decimal(4)
                else if(player["Island1"].points.gte(1e20) && getBuyableAmount('Island3d', 22).gte(1)) Effect = new Decimal(3)
                if(player["Island1"].points.lt(1e25) && hasUpgrade('Island3f', 12)) Effect = new Decimal(4)

                if(hasUpgrade('Island2b', 23)) Effect = Effect.times(2.5)
                return Effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Sub-Skill Gain"},
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(10000),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Basic Boost VI #11",
            description: "x sqrt(2) Sub-Skill gain",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(15000),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Upgrader II #12",
            description: "-15 in the log of Upgrade #6 and Increase the Limit in Upgrade #10 to 100,000",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(20000),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Non-static Boost II #13",
            description() {
                let Text = ""
                Text = "Sub-Skill boost Itself (x^0.05 + 1)^2 [x] [Cap: Cap 100]"
                if(hasUpgrade('Island2b', 13)) Text = "Sub-Skill boost Itself (x^0.1 + 1)^2 [x] [Cap: Cap 100]"
                if(hasUpgrade('Island2a', 23)) Text = "Sub-Skill boost Itself (x^0.1 + 1)^2 x 2.5 [x] [Cap: Cap 100]"
                return Text
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = new Decimal(1).times((player["Island1"].points.pow(0.05).add(1)).pow(2))
                if(hasUpgrade('Island2b', 13)) Effect = new Decimal(1).times((player["Island1"].points.pow(0.1).add(1)).pow(2))

                if(hasUpgrade('Island2b', 23)) Effect = Effect.times(2.5)

                Effect = new Decimal.min(Effect, new Decimal(100))
                return Effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Sub-Skill gain"},
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(27500),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Basic Boost VII #14",
            description: "x5 Sub-Skill gain",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(100000),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Non-static Boost III #15",
            description() {
                let Text = ""
                Text = "Sub-Skill boost Itself 1.01^(x^0.01) [+] [Cap: 1000]"
                if(hasUpgrade('Island2b', 13)) Text = "Sub-Skill boost Itself 1.01^(x^0.02) [+] [Cap: 1000]"
                if(hasUpgrade('Island3a', 11)) Text = "Sub-Skill boost Itself 1.01^(x^0.05) [+] [Cap: 1000]"
                if(getBuyableAmount('Island3d', 22).gte(1)) Text = "Sub-Skill boost Itself 1.01^(x^0.1) [+] [Cap: 1000]"
                if(hasUpgrade('Island2b', 23)) Text = "Sub-Skill boost Itself 1.01^(x^0.1) x 2.5 [+] [Cap: 1000]"
                return Text
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = new Decimal(1).times(new Decimal(1.01).pow(player["Island1"].points.pow(0.01)))
                if(hasUpgrade('Island2b', 13)) Effect = new Decimal(1).times(new Decimal(1.01).pow(player["Island1"].points.pow(0.02)))
                if(hasUpgrade('Island3a', 11)) Effect =  new Decimal(1).times(new Decimal(1.01).pow(player["Island1"].points.pow(0.05)))
                if(getBuyableAmount('Island3d', 22).gte(1)) Effect = new Decimal(1).times(new Decimal(1.01).pow(player["Island1"].points.pow(0.1)))

                if(hasUpgrade('Island2b', 23)) Effect = Effect.times(2.5)
                
                Effect = new Decimal.min(Effect, new Decimal(1000))
                return Effect
            },
            effectDisplay() {return "+"+format(upgradeEffect(this.layer, this.id))+" Sub-Skill gain"},
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(500000),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Unlocker I #16",
            description: "Unlock Area 2 and a New Island 1 Upgrade",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e6),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Prepear #24",
            description: "x1.5 Money and x2 Sub-Skill and unlock Island 3",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e11),
            unlocked() {return getBuyableAmount('Island2b', 13).gte(2)}
        },
    },
    automate() {
        if(hasUpgrade('Research', 15)) {
            buyUpgrade(this.layer, 11);
            buyUpgrade(this.layer, 12);
            buyUpgrade(this.layer, 13);
            buyUpgrade(this.layer, 14);
            buyUpgrade(this.layer, 15);
            buyUpgrade(this.layer, 21);
            buyUpgrade(this.layer, 22);
            buyUpgrade(this.layer, 23);
            buyUpgrade(this.layer, 24);
        };
        if(hasUpgrade('Research', 22)) {
            buyUpgrade(this.layer, 25);
        };
    }
})

addLayer("Island2b", {
    name: "Island 2b",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#11ca00",
    requires: new Decimal(0),
    resource: "Money",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(0)
        if(hasUpgrade('Island1', 23)) mult = new Decimal(1)

        mult = mult.times(buyableEffect(this.layer, 12))
        if(hasUpgrade(this.layer, 13)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 14)) mult = mult.times(upgradeEffect(this.layer, 14))
        if(hasUpgrade(this.layer, 15)) mult = mult.times(10)
        if(hasUpgrade('Island2a', 25)) mult = mult.times(1.5)
        if(hasUpgrade('Island3a', 12)) mult = mult.times(2.5)
        if(hasUpgrade('Island3a', 21)) mult = mult.times(upgradeEffect('Island2a', 13))
        if(hasUpgrade('Island3c', 11)) mult = mult.times(15)
        if(hasUpgrade('Island3c', 12)) mult = mult.times(5)
        if(hasUpgrade('Island3c', 14)) mult = mult.times(upgradeEffect('Island3c', 14))
        mult = mult.times(buyableEffect('Island3d', 12))
        if(hasUpgrade('Island3c', 15)) mult = mult.times(5)
        if(hasUpgrade('Island3c', 22)) mult = mult.times(2)
        if(hasUpgrade('Island3f', 11)) mult = mult.times(upgradeEffect('Island3f', 11))
        if(hasUpgrade('Island3f', 14)) mult = mult.times(upgradeEffect('Island3f', 14))
        if(hasUpgrade('Island3f', 21)) mult = mult.times(new Decimal(2).cbrt())
        if(hasUpgrade('Island1', 25)) mult = mult.times(4)
        if(hasUpgrade(this.layer, 25)) mult = mult.times(1.1)
        if(hasUpgrade('Island3c', 23)) mult = mult.times(1.2)

        if(hasUpgrade('Research', 12)) mult = mult.times(2)
        if(hasUpgrade('Research', 13)) mult = mult.times(1.5)
        if(hasUpgrade('Research', 14)) mult = mult.times(2)
        
        if(player["Island3b"].click11) mult = mult.times(1/4)
        if(player["Island3b"].click12) mult = mult.times(1/8)
        if(player["Island3b"].click13) mult = mult.times(1/12)
        if(player["Island3b"].click14) mult = mult.times(1/16)
        if(player["Island3b"].click21) mult = mult.times(2)
        if(player["Island3b"].click22) mult = mult.times(3)
        if(player["Island3b"].click23) mult = mult.times(4)
        if(player["Island3b"].click24) mult = mult.times(5)

        return mult.times(0) // Make sure to slash out the .times()
    },
    gainExp() {
        return new Decimal(1)
    },
    passiveGeneration() {
        let Gen = 1
        return Gen
    },
    row: "side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Island 2 but more" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player["Island1"].points) + ' Sub-Skill' },
        { "color": "green", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player[this.layer].points) + ' Money' },
        { "color": "lime", "font-size": "24px"}],
        "resource-display",
        "blank",
        "blank",
        "buyables",
        "blank",
        "upgrades",
    ],
    buyables: {
        11: {
            title: "Sub-Skill Boost I",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(1.5).pow(x.pow(0.75).add(1)).times(2)
                return Cost
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = Effect.times(new Decimal(0.25).times(getBuyableAmount(this.layer, this.id)).times(new Decimal(1.1).pow(new Decimal.floor(getBuyableAmount(this.layer, this.id).times(1/10)))).add(1))
                return Effect
            },
            display() {
                let Text = "+x0.25 Sub-Skill per Level and Every 10 x1.1 Effect Currently: x"+format(buyableEffect(this.layer, this.id))+" Cost: "+format(this.cost())+" Money "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit())
                if(hasUpgrade('Island3c', 14)) Text = "+x0.25 Sub-Skill per Level and Every 10 x1.1 Effect and When Maxed x1.5 Moners Currently: x"+format(buyableEffect(this.layer, this.id))+" and x"+format(new Decimal.max(getBuyableAmount(this.layer, this.id).add(new Decimal(-1).times(this.purchaseLimit())).add(1).times(1.5), new Decimal(1)))+" Cost: "+format(this.cost())+" Money "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit())
                return Text
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!hasUpgrade('Island3a', 15) && !hasUpgrade('Research', 23)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let Max = new Decimal(250).add(buyableEffect('Island3d', 21))
                if(hasUpgrade('Island3a', 23)) Max = Max.add(200)
                return Max
            },
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        12: {
            title: "Money Boost I",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(1.75).pow(x.pow(0.75).add(1)).times(1.715)
                return Cost
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = Effect.times(new Decimal(0.3333).times(getBuyableAmount(this.layer, this.id)).times(new Decimal(1.1).pow(new Decimal.floor(getBuyableAmount(this.layer, this.id).times(1/10)))).add(1))
                return Effect
            },
            display() {
                let Text = "+x0.333 Money per Level and Every 10 x1.05 Effect Currently: x"+format(buyableEffect(this.layer, this.id))+" Cost: "+format(this.cost())+" Money "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit())
                 if(hasUpgrade('Island3c', 14)) Text = "+x0.333 Money per Level and Every 10 x1.05 Effect and When Maxed x1.5 Moners Currently: x"+format(buyableEffect(this.layer, this.id))+" and x"+format(new Decimal.max(getBuyableAmount(this.layer, this.id).add(new Decimal(-1).times(this.purchaseLimit())).add(1).times(1.5), new Decimal(1)))+" Cost: "+format(this.cost())+" Cost: "+format(this.cost())+" Money "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit())
                return Text
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!hasUpgrade('Island3a', 15) && !hasUpgrade('Research', 23)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let Max = new Decimal(200).add(buyableEffect('Island3d', 21))
                if(hasUpgrade('Island3a', 23)) Max = Max.add(200)
                return Max
            },
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        13: {
            title: "Unlocker III",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(150).pow(x.times(1.25).add(1))
                return Cost
            },
            display() {
                let Text = ""
                Text = "Unlock more Upgrades Cost: "+format(this.cost())+" Money "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit())
                if(hasUpgrade(this.layer, 21)) Text = "Unlock more Upgrades Per Level Cost: "+format(this.cost())+" Money "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit())
                return Text
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(!hasUpgrade('Research', 23)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let Max = new Decimal(1)
                if(hasUpgrade(this.layer, 21)) Max = new Decimal(2)
                return Max
            },
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
    },
    upgrades: {
        11: {
            title: "Welcome #18",
            description: "x5.1 Sub-Skill",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1.5e6),
        },
        12: {
            title: "Unlocker II #19",
            description: "Unlock 3 Buyables",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(3.5e6),
            unlocked() {return hasUpgrade(this.layer, 11)}
        },
        13: {
            title: "Big Upgrade #20",
            description: "-25 in the Log of Upgrade #6, +0.05 in the Exponent of Upgrade #13 and +0.01 in the Exponent of Upgrade #15 and x2 Money and Sub-Skill",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(6.28e8),
            unlocked() {return getBuyableAmount(this.layer, 13).gte(1)}
        },
        14: {
            title: "Non-static Boost IV #21",
            description() {
                let Text = ""
                Text = "Sub-Skill boost Money log10(x + 1) + 1 [x] [Cap: 308]"
                if(hasUpgrade('Island2b', 23)) Text = "Sub-Skill boost Money (log10(x + 1) + 1) x 2.5 [x] [Cap: 308]"
                return Text
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = new Decimal(1).times(player["Island1"].points.add(1).log(10).add(1))

                if(hasUpgrade('Island2b', 23)) Effect = Effect.times(2.5)

                Effect = new Decimal.min(Effect, new Decimal(308))
                return Effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Money gain"},
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1.1e9),
            unlocked() {return hasUpgrade(this.layer, 13)}
        },
        15: {
            title: "Boost VIII #22",
            description: "x10 Money and Sub-Skill",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2e9),
            unlocked() {return hasUpgrade(this.layer, 14)}
        },
        21: {
            title: "Increaser I #23",
            description: "Add 1 More level to Buyable Unlocker III",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e10),
            unlocked() {return hasUpgrade(this.layer, 15)}
        },
        22: {
            title: "New III #65",
            description: "x2 Sub-Skill, Money and Moners",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(3e34),
            unlocked() {return hasUpgrade('Research', 32)},
        },
        23: {
            title: "New IV #66",
            description: "Boost all Non-static Upgrades by x2.5",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5e34),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "#67",
            description: "No Not in a infinite years",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5.55e36),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Meh #68",
            description: "x1.1 Sub-Skill, Money and Moners",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(4.2e37),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
    },
    automate() {
        if(hasUpgrade('Island3a', 15) || hasUpgrade('Research', 14)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit())) {
                layers[this.layer].buyables[11].buy();
            };
            if(layers[this.layer].buyables[12].canAfford() && getBuyableAmount(this.layer, 12).lt(layers[this.layer].buyables[12].purchaseLimit())) {
                layers[this.layer].buyables[12].buy();
            };
        }
        if(hasUpgrade('Research', 23)) {
            if(layers[this.layer].buyables[13].canAfford() && getBuyableAmount(this.layer, 13).lt(layers[this.layer].buyables[13].purchaseLimit())) {
                layers[this.layer].buyables[13].buy();
            };
        }
        if(hasUpgrade('Research', 15)) {
            buyUpgrade(this.layer, 11);
            buyUpgrade(this.layer, 12);
            buyUpgrade(this.layer, 13);
        };
        if(hasUpgrade('Research', 22)) {
            buyUpgrade(this.layer, 14);
            buyUpgrade(this.layer, 15);
            buyUpgrade(this.layer, 21);
        };
    },
})

addLayer("Island3", {
    name: "Island 3",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#8fff85",
    requires: new Decimal(1e1000),
    resource: "Sub-Skill",
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
        "Area 1": {
            embedLayer: "Island3a",
            buttonStyle: {
                "color": "#ffff00",
                "border": "2px solid #ffff00",
            },
        },
        "Exchager": {
            embedLayer: "Island3b",
            buttonStyle: {
                "color": "#cacaca",
                "border": "2px solid #cacaca",
            },
            unlocked() {return hasUpgrade('Island3a', 14)}
        },
        "Area 2": {
            embedLayer: "Island3c",
            buttonStyle: {
                "color": "#539c00",
                "border": "2px solid #539c00",
            },
            unlocked() {return hasUpgrade('Island3a', 21)}
        },
        "Moners": {
            embedLayer: "Island3d",
            buttonStyle: {
                "color": "#007000",
                "border": "2px solid #007000",
            },
            unlocked() {return hasUpgrade('Island3c', 13)}
        },
        "Area 3": {
            embedLayer: "Island3e",
            buttonStyle: {
                "color": "#b3b3b3",
                "border": "2px solid #b3b3b3",
            },
            unlocked() {return hasUpgrade('Island3c', 22)}
        },
        "Area 4": {
            embedLayer: "Island3f",
            buttonStyle: {
                "color": "#3f6f8f",
                "border": "2px solid #3f6f8f",
            },
            unlocked() {return hasUpgrade('Island3e', 14)}
        },
    },
})

addLayer("Island3a", {
    name: "Island 3a",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffff00",
    requires: new Decimal(1e1000),
    resource: "Sub-Skill",
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
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Island 3 More!" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player["Island1"].points) + ' Sub-Skill' },
        { "color": "green", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player["Island2b"].points) + ' Money' },
        { "color": "lime", "font-size": "24px"}],
        "blank",
        "blank",
        "buyables",
        "blank",
        "upgrades",
    ],
    buyables: {
        11: {
            title: "Infinite Buyable I",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(2.5e9).pow(x.times(0.005).add(1)).times(100)
                return Cost
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = Effect.times(new Decimal(1.01).pow(getBuyableAmount(this.layer, this.id)))
                return Effect
            },
            display() {return "x1.01 Sub-Skill per Level Currently: x"+format(buyableEffect(this.layer, this.id))+" Cost: "+format(this.cost())+" Sub-Skill "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit)},
            canAfford() { return player["Island1"].points.gte(this.cost()) },
            buy() {
                if(!hasUpgrade('Island3e', 13)) player["Island1"].points = player["Island1"].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
    },
    upgrades: {
        11: {
            title: "Third Island #25",
            description: "-15 in the Log of Upgrade #6, and make the Limit in Upgrade #10 1e15, +1 Mult in the If Mult and +0.75 Mult in the Else Mult, +0.03 in the Exponent of Upgrade #15 and Unlock a Buyable",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2.5e11),
        },
        12: {
            title: "Boost IX #26",
            description: "x5 Sub-Skill and x2.5 Money",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5e11),
            unlocked() {return hasUpgrade(this.layer, 11)}
        },
        13: {
            title: "Non-static boost V #27",
            description() {
                let Text = ""
                Text = "Money boost Sub-Skill log10(x + 1) + 1 [x] [Cap: 308]"
                if(hasUpgrade('Island2b', 23)) Text = "Money boost Sub-Skill (log10(x + 1) + 1) x 2.5 [x] [Cap: 308]"
                return Text
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = new Decimal(1).times(player["Island2b"].points.add(1).log(10).add(1))

                if(hasUpgrade('Island2b', 23)) Effect = Effect.times(2.5)

                Effect = new Decimal.min(Effect, new Decimal(308))
                return Effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Sub-Skill gain"},
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2e12),
            unlocked() {return hasUpgrade(this.layer, 12)}
        },
        14: {
            title: "Ublocker III #28",
            description: "Unlock a Exchanger",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(3.33e12),
            unlocked() {return hasUpgrade(this.layer, 13)}
        },
        15: {
            title: "Qol I #29",
            description: "Automate the First Two Buyables of Island 2 area 2 and they cost nothing",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e13),
            unlocked() {return hasUpgrade(this.layer, 14)}
        },
        21: {
            title: "Big Upgrade #30",
            description: "-10 in the Log of Upgrade #6 and Upgrade #10's Boost also Effects Money and Unlock Area 2",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2.5e13),
            unlocked() {return hasUpgrade(this.layer, 15)}
        },
        22: {
            title: "New V #69",
            description: "x6.9 Sub-Skill, Money and Moners Nice",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2e38),
            unlocked() {return hasUpgrade('Research', 32)},
        },
        23: {
            title: "New VI #70",
            description: "-5 in the Log of Upgrade #6, Upgrade #10's Boost also Effects Moners, +200 Buyables' Max for Island 2 area 2 Sub-Skill Boost I & Money Boost and +5 Buyable's Max For Island 3 moner Increaser II",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5e38),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "New VII #71",
            description: "x1.5 moners",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e40),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "New VIII #72",
            description: "x1.1 Sub-Skill",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e40),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
    },
    automate() {
        if(hasUpgrade('Island3e', 13)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit)) {
                layers[this.layer].buyables[11].buy();
            };
        }
        if(hasUpgrade('Research', 22)) {
            buyUpgrade(this.layer, 11);
            buyUpgrade(this.layer, 12);
            buyUpgrade(this.layer, 13);
            buyUpgrade(this.layer, 14);
            buyUpgrade(this.layer, 15);
            buyUpgrade(this.layer, 21);
        };
    },
})

addLayer("Island3b", {
    name: "Island 3b",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        click11: false,
        click12: false,
        click21: false,
        click22: false,
    }},
    color: "#cacaca",
    requires: new Decimal(1e1000),
    resource: "Sub-Skill",
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
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Just Ment as a Non-Progetion Helper (Not Required for All Upgrades)" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player["Island1"].points) + ' Sub-Skill' },
        { "color": "green", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player["Island2b"].points) + ' Money' },
        { "color": "lime", "font-size": "24px"}],
        "blank",
        "blank",
        "clickables",
    ],
    clickables: {
        11: {
            title: "Skilled",
            display() {
                let Text = "Double Sub-Skill but /4 Money Currently: Error"
                if(player[this.layer].click11) Text = "Double Sub-Skill but /4 Money Currently: On"
                else Text = "Double Sub-Skill but /4 Money Currently: Off"
                return Text
            },
            canClick() {return true},
            onClick() {
                player[this.layer].click11 = !player[this.layer].click11
            },
        },
        12: {
            title: "Skilled More",
            display() {
                let Text = "Triple Sub-Skill but /8 Money Currently: Error"
                if(player[this.layer].click12) Text = "Triple Sub-Skill but /8 Money Currently: On"
                else Text = "Triple Sub-Skill but /8 Money Currently: Off"
                return Text
            },
            canClick() {return true},
            onClick() {
                player[this.layer].click12 = !player[this.layer].click12
            },
            unlocked() {return hasUpgrade('Island3c', 12)},
        },
        13: {
            title: "Pro Obbyed",
            display() {
                let Text = "Quadruple Sub-Skill but /12 Money Currently: Error"
                if(player[this.layer].click13) Text = "Quadruple Sub-Skill but /12 Money Currently: On"
                else Text = "Quadruple Sub-Skill but /12 Money Currently: Off"
                return Text
            },
            canClick() {return true},
            onClick() {
                player[this.layer].click13 = !player[this.layer].click13
            },
            unlocked() {return hasUpgrade('Island3e', 12)},
        },
        14: {
            title: "Mastered",
            display() {
                let Text = "Quintuple Sub-Skill but /16 Money Currently: Error"
                if(player[this.layer].click14) Text = "Quintuple Sub-Skill but /16 Money Currently: On"
                else Text = "Quintruple Sub-Skill but /16 Money Currently: Off"
                return Text
            },
            canClick() {return true},
            onClick() {
                player[this.layer].click14 = !player[this.layer].click14
            },
            unlocked() {return hasUpgrade('Island3f', 12)},
        },
        21: {
            title: "Money Printer",
            display() {
                let Text = "Double Money but /4 Sub-Skill Currently: Error"
                if(player[this.layer].click21) Text = "Double Money but /4 Sub-Skill Currently: On"
                else Text = "Double Money but /4 Sub-Skill Currently: Off"
                return Text
            },
            canClick() {return true},
            onClick() {
                player[this.layer].click21 = !player[this.layer].click21
            },
        },
        22: {
            title: "More Printers",
            display() {
                let Text = "Triple Money but /8 Sub-Skill Currently: Error"
                if(player[this.layer].click22) Text = "Triple Money but /8 Sub-Skill Currently: On"
                else Text = "Triple Money but /8 Sub-Skill Currently: Off"
                return Text
            },
            canClick() {return true},
            onClick() {
                player[this.layer].click22 = !player[this.layer].click22
            },
            unlocked() {return hasUpgrade('Island3c', 12)},
        },
        23: {
            title: "Overdrive Mode",
            display() {
                let Text = "Quadruple Money but /12 Sub-Skill Currently: Error"
                if(player[this.layer].click23) Text = "Quadruple Moneybut /12 Sub-Skill Currently: On"
                else Text = "Quadruple Money but /12 Sub-Skill Currently: Off"
                return Text
            },
            canClick() {return true},
            onClick() {
                player[this.layer].click23 = !player[this.layer].click23
            },
            unlocked() {return hasUpgrade('Island3e', 12)},
        },
        24: {
            title: "More Printers = More Money",
            display() {
                let Text = "Quintuple Money but /16 Sub-Skill Currently: Error"
                if(player[this.layer].click24) Text = "Quintuple Moneybut /16 Sub-Skill Currently: On"
                else Text = "Quintuple Money but /16 Sub-Skill Currently: Off"
                return Text
            },
            canClick() {return true},
            onClick() {
                player[this.layer].click24 = !player[this.layer].click24
            },
            unlocked() {return hasUpgrade('Island3f', 12)},
        },
    },
})

addLayer("Island3c", {
    name: "Island 3c",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#539c00",
    requires: new Decimal(1e1000),
    resource: "Sub-Skill",
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
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "This is alot" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player["Island1"].points) + ' Sub-Skill' },
        { "color": "green", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player["Island2b"].points) + ' Money' },
        { "color": "lime", "font-size": "24px"}],
        "blank",
        "blank",
        "upgrades",
    ],
    upgrades: {
        11: {
            title: "Boost X #31",
            description: "x15 Money and Sub-Skill",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5e13),
        },
        12: {
            title: "Boost XI #32",
            description: "x5 Money and Sub-Skill and Unlock Level 2 on the Exchager",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(7.5e14),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Unlock IV #33",
            description: "Unlock Moners",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2e15),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Big Upgrade #34",
            description() {
                let Text = ""
                Text = "moners Boost Money log10((x + 1)^2) + 1 [x] [Cap: 308] and make the first 2 buyables of Island 2 area 2 have a thing when Maxed"
                if(hasUpgrade('Island2b', 23)) Text = "moners Boost Money (log10((x + 1)^2) + 1) x 2.5 [x] [Cap: 308] and make the first 2 buyables of Island 2 area 2 have a thing when Maxed"
                return Text
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = new Decimal(1).times(player["Island3d"].points.add(1).pow(2).log(10).add(1))

                if(hasUpgrade('Island2b', 23)) Effect = Effect.times(2.5)

                Effect = new Decimal.min(Effect, new Decimal(308))
                return Effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Money gain"},
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e17),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Boost XII #35",
            description: "x10 Sub-Skill and x5 Money",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5e17),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Boost XIII #36",
            description: "x1.05 Moners",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2e18),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Unlocker V #36",
            description: "Unlock Area 3 and x2 Sub-Skill and Money",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e19),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "New IX #73",
            description: "x1.2 Sub-Skill, Money and moners",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2.5e40),
            unlocked() {return hasUpgrade('Research', 32)},
        },
        24: {
            title: "New X #74",
            description: "Nothing For a Cool suprise",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5e40),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "More Content II #75",
            description: "Unlock More Research Upgrades",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5e40),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
    },
    automate() {
        if(hasUpgrade('Research', 25)) {
            buyUpgrade(this.layer, 11);
            buyUpgrade(this.layer, 12);
            buyUpgrade(this.layer, 13);
            buyUpgrade(this.layer, 14);
            buyUpgrade(this.layer, 15);
            buyUpgrade(this.layer, 21);
            buyUpgrade(this.layer, 22);
        };
    },
})

addLayer("Island3d", {
    name: "Island 3d",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#007000",
    requires: new Decimal(1e1000),
    resource: "Sub-Skill",
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
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Moners alternet Money" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player["Island1"].points) + ' Sub-Skill' },
        { "color": "green", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player["Island2b"].points) + ' Money' },
        { "color": "lime", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player[this.layer].points) + ' Moners' },
        { "color": "green", "font-size": "24px"}],
        "blank",
        "buyables",
        "blank",
        "blank",
        ["display-text",
        function() { return 'Converters Past 5 are softcap and stronger at 15' },
        { "color": "white", "font-size": "16px"}],
        "clickables",
    ],
    getMonersGain() {
        gain = new Decimal(1)
        gain = gain.times(buyableEffect(this.layer, 13))
        if(getBuyableAmount(this.layer, 22).gte(1)) gain = gain.times(2)
        if(getBuyableAmount('Island2b', 11).gte(layers["Island2b"].buyables[11].purchaseLimit())) gain = gain.times(1.5)
        if(getBuyableAmount('Island2b', 12).gte(layers["Island2b"].buyables[12].purchaseLimit())) gain = gain.times(1.5)
        if(hasUpgrade('Island3c', 21)) gain = gain.times(1.05)
        if(hasUpgrade('Island3f', 11)) gain = gain.times(upgradeEffect('Island3f', 11))
        if(hasUpgrade('Island3f', 14)) gain = gain.times(upgradeEffect('Island3f', 14))
        if(hasUpgrade('Island3f', 21)) gain = gain.times(new Decimal(2).cbrt())
        if(hasUpgrade('Island1', 25)) gain = gain.times(2)
        if(hasUpgrade('Island2b', 25)) mult = mult.times(1.1)
        if(hasUpgrade('Island3a', 24)) mult = mult.times(1.5)
        if(hasUpgrade('Island3c', 23)) mult = mult.times(1.2)

        if(hasUpgrade('Research', 13)) gain = gain.times(1.5)
        if(hasUpgrade('Research', 14)) gain = gain.times(2)
        if(hasUpgrade('Research', 15)) gain = gain.times(5)
        if(hasUpgrade('Research', 24)) gain = gain.times(10)

        return gain
    },
    buyables: {
        11: {
            title: "Sub-Skill Boost II",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(1e8).pow(x.times(0.005).add(1)).times(10)
                return Cost
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = Effect.times(new Decimal(1.05).pow(getBuyableAmount(this.layer, this.id)))
                return Effect
            },
            display() {return "x1.05 Sub-Skill per Level Currently: x"+format(buyableEffect(this.layer, this.id))+" Cost: "+format(this.cost())+" Money "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit())},
            canAfford() { return player["Island2b"].points.gte(this.cost()) },
            buy() {
                if(!hasUpgrade('Island3e', 13) && !hasUpgrade('Research', 23)) player["Island2b"].points = player["Island2b"].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {return new Decimal(100).add(buyableEffect(this.layer, 23))},
        },
        12: {
            title: "Money Boost II",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(1e8).pow(x.times(0.01).add(1)).times(10)
                return Cost
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = Effect.times(new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id)))
                return Effect
            },
            display() {return "x1.1 Money per Level Currently: x"+format(buyableEffect(this.layer, this.id))+" Cost: "+format(this.cost())+" Money "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit())},
            canAfford() { return player["Island2b"].points.gte(this.cost()) },
            buy() {
                if(!hasUpgrade('Island3e', 13) && !hasUpgrade('Research', 23)) player["Island2b"].points = player["Island2b"].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {return new Decimal(125).add(buyableEffect(this.layer, 23))},
        },
        13: {
            title: "Cool Boost",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(1e9).pow(x.times(0.01).add(1)).times(10)
                return Cost
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = Effect.times(new Decimal(1.01).pow(getBuyableAmount(this.layer, this.id)))
                return Effect
            },
            display() {return "x1.01 Moners per Level Currently: x"+format(buyableEffect(this.layer, this.id))+" Cost: "+format(this.cost())+" Money "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit)},
            canAfford() { return player["Island2b"].points.gte(this.cost()) },
            buy() {
                if(!hasUpgrade('Island3f', 22) && !hasUpgrade('Research', 23)) player["Island2b"].points = player["Island2b"].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(250),
        },
        21: {
            title: "Increaser I",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(10).times(x.pow(1).add(1))
                return Cost
            },
            effect() {
                let Effect = new Decimal(0)
                Effect = Effect.add(new Decimal(5).times(getBuyableAmount(this.layer, this.id)))
                return Effect
            },
            display() {return "+5 Buyables' Max for Sub-Skill Boost I and Money Boost I per Level Currently: +"+format(buyableEffect(this.layer, this.id))+" Cost: "+format(this.cost())+" Moners "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit())},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(hasUpgrade('Research', 31)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let Max = new Decimal(10)
                if(hasUpgrade('Island3f', 12)) Max = new Decimal(20)
                return Max
            },
        },
        22: {
            title: "Buyable Boost I",
            cost(x) {
                let Cost = new Decimal(1000)
                return Cost
            },
            display() {return "-10 in the Log of Upgrade #6, Upgrade #10's Limit is now 1e20, Upgrade #10's Else Mult is now 3, +0.05 in the Exponent of Upgrade #15 and x2 moners Cost: 1000 Moners "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit)},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(hasUpgrade('Research', 31)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(1),
        },
        23: {
            title: "Increaser II",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(20000).times(x.pow(1).add(1))
                return Cost
            },
            effect() {
                let Effect = new Decimal(0)
                Effect = Effect.add(new Decimal(10).times(getBuyableAmount(this.layer, this.id)))
                return Effect
            },
            display() {return "+10 Buyables' Max for Sub-Skill Boost II and Money Boost II per Level Currently: +"+format(buyableEffect(this.layer, this.id))+" Cost: "+format(this.cost())+" Moners "+format(getBuyableAmount(this.layer, this.id))+"/"+format(this.purchaseLimit())},
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                if(hasUpgrade('Research', 31)) player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit() {
                let Max = new Decimal(5)
                if(hasUpgrade('Island3a', 23)) Max = Max.add(5)
                return Max
            },
            unlocked() {return hasUpgrade('Island3f', 15)},
        },
    },
    clickables: {
        11: {
            title: "Convert I",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(1))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(1).pow(2)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(1).pow(2)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(1).pow(2)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(1).pow(2)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(1));
                };
            },
        },
        12: {
            title: "Convert II",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(2))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(2).pow(2)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(2).pow(2)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(2).pow(2)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(2).pow(2)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(2));
                };
            },
        },
        13: {
            title: "Convert III",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(3))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(3).pow(2)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(3).pow(2)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(3).pow(2)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(3).pow(2)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(3));
                };
            },
        },
        14: {
            title: "Convert IV",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(4))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(4).pow(2)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(4).pow(2)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(4).pow(2)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(4).pow(2)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(4));
                };
            },
        },
        15: {
            title: "Convert V",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(5))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(5).pow(2)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(5).pow(2)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(5).pow(2)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(5).pow(2)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(5));
                };
            },
        },
        21: {
            title: "Convert VI",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(6))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(6).pow(3)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(6).pow(3)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(6).pow(3)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(6).pow(3)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(6));
                };
            },
        },
        22: {
            title: "Convert VII",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(7))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(7).pow(3)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(7).pow(3)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(7).pow(3)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(7).pow(3)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(7));
                };
            },
        },
        23: {
            title: "Convert VIII",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(8))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(8).pow(3)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(8).pow(3)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(8).pow(3)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(8).pow(3)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(8));
                };
            },
        },
        24: {
            title: "Convert IX",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(9))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(9).pow(3)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(9).pow(3)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(9).pow(3)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(9).pow(3)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(9));
                };
            },
        },
        25: {
            title: "Convert X",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(10))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(10).pow(3)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(10).pow(3)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(10).pow(3)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(10).pow(3)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(10));
                };
            },
        },
        31: {
            title: "Convert XI",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(11))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(11).pow(3)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(11).pow(3)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(11).pow(3)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(11).pow(3)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(11));
                };
            },
        },
        32: {
            title: "Convert XII",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(12))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(12).pow(3)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(12).pow(3)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(12).pow(3)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(12).pow(3)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(12));
                };
            },
        },
        33: {
            title: "Convert XIII",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(13))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(13).pow(3)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(13).pow(3)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(13).pow(3)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(13).pow(3)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(13));
                };
            },
        },
        34: {
            title: "Convert XIV",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(14))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(14).pow(3)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(14).pow(3)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(11).pow(3)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(11).pow(3)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(11));
                };
            },
        },
        35: {
            title: "Convert XV",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(15))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(15).pow(4)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(15).pow(4)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(15).pow(4)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(15).pow(4)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(15));
                };
            },
        },
        41: {
            title: "Convert XVI",
            display() {
                let Text = "+"+format(layers[this.layer].getMonersGain().times(16))+" Moners Cost: "+format(new Decimal(-1e9).times(new Decimal(16).pow(4)))+" Money"
                return Text
            },
            canClick() {return player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(16).pow(4)))},
            onClick() {
                if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(16).pow(4)))) {
                    player["Island2b"].points = player["Island2b"].points.add(new Decimal(-1e9).times(new Decimal(16).pow(4)));
                    player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(16));
                };
            },
        },
    },
    automate() {
        if(hasUpgrade('Island3e', 13) || hasUpgrade('Research', 21)) {
            if(layers[this.layer].buyables[11].canAfford() && getBuyableAmount(this.layer, 11).lt(layers[this.layer].buyables[11].purchaseLimit())) {
                layers[this.layer].buyables[11].buy();
            };
            if(layers[this.layer].buyables[12].canAfford() && getBuyableAmount(this.layer, 12).lt(layers[this.layer].buyables[12].purchaseLimit())) {
                layers[this.layer].buyables[12].buy();
            };
        }
        if(hasUpgrade('Island3f', 15) || hasUpgrade('Research', 21)) {
            if(layers[this.layer].buyables[13].canAfford() && getBuyableAmount(this.layer, 13).lt(layers[this.layer].buyables[13].purchaseLimit)) {
                layers[this.layer].buyables[13].buy();
            };
        }
        if(hasUpgrade('Research', 31)) {
            if(layers[this.layer].buyables[21].canAfford() && getBuyableAmount(this.layer, 21).lt(layers[this.layer].buyables[21].purchaseLimit())) {
                layers[this.layer].buyables[21].buy();
            };
            if(layers[this.layer].buyables[22].canAfford() && getBuyableAmount(this.layer, 22).lt(layers[this.layer].buyables[22].purchaseLimit)) {
                layers[this.layer].buyables[22].buy();
            };
            if(layers[this.layer].buyables[23].canAfford() && getBuyableAmount(this.layer, 23).lt(layers[this.layer].buyables[23].purchaseLimit())) {
                layers[this.layer].buyables[23].buy();
            };
        }
        if(hasUpgrade('Research', 33)) {
            if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(1).pow(2)))) {
                player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(1));
            };
            if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(2).pow(2)))) {
                player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(2));
            };
            if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(3).pow(2)))) {
                player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(3));
            };
            if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(4).pow(2)))) {
                player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(4));
            };
            if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(5).pow(2)))) {
                player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(5));
            };
            if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(6).pow(2)))) {
                player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(6));
            };
            if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(7).pow(2)))) {
                player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(7));
            };
            if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(8).pow(2)))) {
                player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(8));
            };
            if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(9).pow(2)))) {
                player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(9));
            };
            if(player["Island2b"].points.gte(new Decimal(1e9).times(new Decimal(10).pow(2)))) {
                player[this.layer].points = player[this.layer].points.add(layers[this.layer].getMonersGain().times(10));
            };
        }
    },
})

addLayer("Island3e", {
    name: "Island 3e",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b3b3b3",
    requires: new Decimal(1e1000),
    resource: "Sub-Skill",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    row: "side",
    gainMult() {
        mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "We almost Done?" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player["Island1"].points) + ' Sub-Skill' },
        { "color": "green", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player["Island2b"].points) + ' Money' },
        { "color": "lime", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player["Island3d"].points) + ' Moners' },
        { "color": "green", "font-size": "24px"}],
        "blank",
        "blank",
        "upgrades",
    ],
    upgrades: {
        11: {
            title: "Cool Boost II #37",
            description() {
                let Text = ""
                Text = "Total Upgrades in Island 3 Area 3 Boost Sub-Skill sqrt(x) + 1 [x] [No Cap]"
                if(hasUpgrade('Island2b', 23)) Text = "Total Upgrades in Island 3 Area 3 Boost Sub-Skill (sqrt(x) + 1) x 2.5 [x] [No Cap]"
                return Text
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = Effect.times(new Decimal(player[this.layer].upgrades.length).pow(0.5).add(1))

                if(hasUpgrade('Island2b', 23)) Effect = Effect.times(2.5)
                return Effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Sub-Skill gain"},
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5e19),
        },
        12: {
            title: "Unlocker VI #38",
            description: "Unlock level 3 on the exchager",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2.5e20),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Unlocker VII #39",
            description: "AutoBuy the First Buyable of Island 3 area 1 and the First 2 of Island 3 Moners and they cost nothing",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2e21),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Unlocker VIII #40",
            description: "Unlock area 4",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2e22),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
    },
    automate() {
        if(hasUpgrade('Research', 25)) {
            buyUpgrade(this.layer, 11);
            buyUpgrade(this.layer, 12);
            buyUpgrade(this.layer, 13);
            buyUpgrade(this.layer, 14);
        };
    },
})

addLayer("Island3f", {
    name: "Island 3f",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#3f6f8f",
    requires: new Decimal(1e1000),
    resource: "Sub-Skill",
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
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "We almost Done." },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player["Island1"].points) + ' Sub-Skill' },
        { "color": "green", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player["Island2b"].points) + ' Money' },
        { "color": "lime", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player["Island3d"].points) + ' Moners' },
        { "color": "green", "font-size": "24px"}],
        "blank",
        "blank",
        "upgrades",
    ],
    upgrades: {
        11: {
            title: "Final Few I #41",
            description() {
                let Text = ""
                Text = "Total Upgrades in Island 1, 2 and 3 Boost Sub-Skill and Money and Moners x^0.11 + 1 [x] [No Cap]"
                if(hasUpgrade(this.layer, 13)) Text = "Total Upgrades in Island 1, 2, 3 and Total Upgrades in Island 3 area 4 again Boost Sub-Skill and Money and Moners x^0.15 + 1 [x] [No Cap]"
                if(hasUpgrade('Island2b', 23)) Text = "Total Upgrades in Island 1, 2, 3 and Total Upgrades in Island 3 area 4 again Boost Sub-Skill and Money and Moners (x^0.15 + 1) x 2.5 [x] [No Cap]"
                return Text
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = Effect.times(new Decimal(player[this.layer].upgrades.length).add(player["Island3e"].upgrades.length).add(player["Island3d"].upgrades.length).add(player["Island3c"].upgrades.length).add(player["Island3b"].upgrades.length).add(player["Island3a"].upgrades.length).add(player["Island2b"].upgrades.length).add(player["Island2a"].upgrades.length).add(player["Island1"].upgrades.length).pow(0.11).add(1))
                if(hasUpgrade(this.layer, 13)) new Decimal(1).times(new Decimal(player[this.layer].upgrades.length).add(player[this.layer].upgrades.length).add(player["Island3e"].upgrades.length).add(player["Island3d"].upgrades.length).add(player["Island3c"].upgrades.length).add(player["Island3b"].upgrades.length).add(player["Island3a"].upgrades.length).add(player["Island2b"].upgrades.length).add(player["Island2a"].upgrades.length).add(player["Island1"].upgrades.length).pow(0.15).add(1))
                
                if(hasUpgrade('Island2b', 23)) Effect = Effect.times(2.5)
                return Effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Sub-Skill and Money and Moners gain"},
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5e22),
        },
        12: {
            title: "Final Few II #42",
            description: "Unlock level 4 on the exchager and Increase the Limit in Upgrade #10 1e25 and Increase Increaser I's Limit to 20",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e23),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Final Few III #43",
            description: "Upgrade #41's Expontent is 0.15 and everyupgrade in Island 3 area 4 is counted Twice",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e24),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Final Few IV #44",
            description() {
                let Text = ""
                Text = "Sub-Skill (x), Money (y) and Moners (z) boost Each other (x / 1e20 + 1)^0.05 + (y / 1e15 + 1)^0.1 + (z / 10000 + 1)^0.25 [x] [Cap: 1,000]"
                if(hasUpgrade('Island2b', 23)) Text = "Sub-Skill (x), Money (y) and Moners (z) boost Each other ((x / 1e20 + 1)^0.05 + (y / 1e15 + 1)^0.1 + (z / 10000 + 1)^0.25) x 2.5 [x] [Cap: 1,000]"
                return Text
            },
            effect() {
                let Effect = new Decimal(1)
                Effect = Effect.times(new Decimal(player["Island1"].points).times(1e-20).add(1).pow(0.05).add(new Decimal(player["Island2b"].points).times(1e-15).add(1).pow(0.1)).add(new Decimal(player["Island3d"].points).times(1/10000).add(1).pow(0.25)))
                
                if(hasUpgrade('Island2b', 23)) Effect = Effect.times(2.5)
                return Effect
            },
            effectDisplay() {return "x"+format(upgradeEffect(this.layer, this.id))+" Sub-Skill and Money and Moners gain"},
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2e24),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Final Few V #45",
            description: "Automate the Third Buyable in Island 3 Moners and Unlock a Buyable in There",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e25),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Final Few VI #46",
            description: "xcbrt(2) Sub-Skill, Money and Moners",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(2e26),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Final Few VII #47",
            description: "the Third Buyable in Island 3 Moners cost nothing",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(5e26),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Final Few VIII #48",
            description: "x10 Sub-Skill",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e27),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Final Few IX #49",
            description: "x10 Sub-Skill again",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(3e28),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Final I #50",
            description: "Unlock Research.. Wait Research thats odd.",
            currencyDisplayName: "Sub-Skill",
            currencyInternalName: "points",
            currencyLayer: "Island1",
            cost: new Decimal(1e30),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
    },
})

addLayer("Research", {
    name: "Research",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        secretone: false,
    }},
    color: "#00ffff",
    requires: new Decimal(1e30),
    resource: "Research",
    baseResource: "Skill",
    baseAmount() {return player['Island1'].points},
    type: "normal",
    exponent: 0.1,
    gainMult() {
        mult = new Decimal(1)

        if(player[this.layer].secretone) mult = mult.times(1.1)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: "side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Is this Real!?" },
        },
    },
    resetsNothing: true,
    onPrestige(gain) {
        player["Island1"].points = new Decimal(0)
        player["Island2b"].points = new Decimal(0)
        player["Island3d"].points = new Decimal(0)
        player["Island1"].upgrades = []
        player["Island2a"].upgrades = []
        player["Island2b"].upgrades = []
        player["Island3a"].upgrades = []
        player["Island3b"].upgrades = []
        player["Island3c"].upgrades = []
        player["Island3d"].upgrades = []
        player["Island3e"].upgrades = []
        player["Island3f"].upgrades = []
        addBuyables('Island2b', 11, -getBuyableAmount('Island2b', 11))
        addBuyables('Island2b', 12, -getBuyableAmount('Island2b', 12))
        addBuyables('Island2b', 13, -getBuyableAmount('Island2b', 13))
        addBuyables('Island3a', 11, -getBuyableAmount('Island3a', 11))
        addBuyables('Island3d', 11, -getBuyableAmount('Island3d', 11))
        addBuyables('Island3d', 12, -getBuyableAmount('Island3d', 12))
        addBuyables('Island3d', 13, -getBuyableAmount('Island3d', 13))
        addBuyables('Island3d', 21, -getBuyableAmount('Island3d', 21))
        addBuyables('Island3d', 22, -getBuyableAmount('Island3d', 22))
        addBuyables('Island3d', 23, -getBuyableAmount('Island3d', 23))
        player["Island3b"].click11 = false
        player["Island3b"].click12 = false
        player["Island3b"].click13 = false
        player["Island3b"].click14 = false
        player["Island3b"].click21 = false
        player["Island3b"].click22 = false
        player["Island3b"].click23 = false
        player["Island3b"].click24 = false
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player["Island1"].points) + ' Sub-Skill' },
        { "color": "green", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player["Island2b"].points) + ' Money' },
        { "color": "lime", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player["Island3d"].points) + ' Moners' },
        { "color": "green", "font-size": "24px"}],
        "blank",
        "main-display", 
        ["prestige-button", "normal"],
        "resource-display",
        "blank",
        "blank",
        "milestones",
        "blank",
        "upgrades",
    ],
    milestones: {
        0: {
            requirementDescription: "1 Research",
            effectDescription: "Keep Research Tab Unlocked",
            done() { return player[this.layer].points.gte(1) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        }
    },
    upgrades: {
        11: {
            title: "Restart I #51",
            description: "x5 Sub-Skill",
            cost: new Decimal(1),
        },
        12: {
            title: "Restart II #52",
            description: "Double Sub-Skill and Money",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Restart III #53",
            description: "x1.5 Sub-Skill and Money and Moners",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Restart IV #54",
            description: "x5 Sub-Skill and x2 Moners and Keep the First 2 of Island 2 area 2 Buyable Automation",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Restart V #55",
            description: "x5 Moners and Autobuy The First 20 Upgrades",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Restart VI #56",
            description: "Keep the First 3 of Island 3 moner Buyable Automation and They cost nothing",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Restart VII #57",
            description: "Autobuy the Next 10 Upgrades",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Restart VIII #58",
            description: "Autobuy the 3rd Buyable of Island 2 area 2 and All Buyables cost nothing",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Restart IX #59",
            description: "x5 Sub-Skill and x10 Moners",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Restart X #60",
            description: "Autobuy the next 10 Upgrades",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
        31: {
            title: "More Auto I #61",
            description: "Autobuy All the rest buyables in Island 3 moners and They cost nothing",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade(this.layer, 25)},
        },
        32: {
            title: "More Content I #62",
            description: "Unlock More Upgrades in Island 1, 2 and 3",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
        33: {
            title: "QoL I #76",
            description: "AutoGain The First 10 Converters in Island 3 moners",
            cost: new Decimal(0),
            unlocked() {return hasUpgrade('Island3c', 25)},
        },
        34: {
            title: "End #-1",
            description: "The End.. For now",
            cost: new Decimal(100),
            unlocked() {return hasUpgrade(this.layer, 33)},
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
