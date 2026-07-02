addLayer("TFD", {
    name: "The First Difficult",
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
        if(hasUpgrade('TFD', 21)) mult = mult.times(2.5)
        if(hasUpgrade('TFD', 22)) mult = mult.times(1.5)
        if(hasUpgrade('TFD', 23)) mult = mult.times(upgradeEffect(this.layer, 23))
        if(hasUpgrade('TFD', 24)) mult = mult.times(3)
        if(hasMilestone('TFD', 1)) mult = mult.times(2)
        if(hasMilestone('TFD', 3)) mult = mult.times(2.5)
        if(hasUpgrade('UIP', 11)) mult = mult.times(9)
        mult = mult.times(new Decimal(3).pow(getBuyableAmount('UIP', 12)))
        if(hasMilestone('TLG', 2)) mult = mult.times(2)
        if(hasMilestone('$', 1)) mult = mult.times(3)
        if(hasMilestone('$', 4)) mult = mult.times(1.3)
        if(hasMilestone('$', 6)) mult = mult.times(5)
        if(hasUpgrade('Neg', 21)) mult = mult.times(1.3)
        if(hasUpgrade('Neg', 24)) mult = mult.times(50)
        if(hasUpgrade('TES', 11)) mult = mult.times(upgradeEffect('TES', 11))
        if(hasMilestone('XST', 0)) mult = mult.times(25)
        if(hasUpgrade('TFD', 35)) mult = mult.times(1e10)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "T", description: "T: Reset for TFD", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return true},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "You Gain this currency automatically Nice, also dark and odd? [Row 1] (Brighter for visibility)" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        return Gen
    },
    milestones: {
        0: {
            requirementDescription: "10,000 TFD",
            effectDescription: "x2 Skill for fun.",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(10000) && hasUpgrade('TFD', 25)) Done = true
                return Done
            },
            unlocked() {return hasUpgrade('TFD', 25)},
        },
        1: {
            requirementDescription: "25,000 TFD",
            effectDescription: "x2 TFD",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(25000) && hasMilestone('TFD', 0)) Done = true
                return Done
            },
            unlocked() {return hasMilestone("TFD", 0)},
        },
        2: {
            requirementDescription: "1,000,000 TFD",
            effectDescription: "Unlock TLG",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(1000000) && hasMilestone('TFD', 1)) Done = true
                return Done
            },
            unlocked() {return hasMilestone("TFD", 1)},
        },
        3: {
            requirementDescription: "5,000,000 TFD",
            effectDescription: "x5 Skill and x2.5 TFD",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(5000000) && hasUpgrade("Neg", 15)) Done = true
                return Done
            },
            unlocked() {return hasUpgrade("Neg", 15)},
        },
    },
    autoUpgrade() {return hasMilestone('TLG', 5)},
    upgrades: {
        11: {
            title: "First is Average",
            description: "x2 Skill",
            cost: new Decimal(5),
        },
        12: {
            title: "Basic Booster I",
            description: "x2 Skill again",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "x2 and More",
            description: "x2.5 Skill",
            cost: new Decimal(25),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Non-Stadic Booster I",
            description: "TFD Boost Skill",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(player[this.layer].points.add(1).pow(0.3))
                if(hasUpgrade('TFD', 31)) boost = boost.pow(1.05)

                boost = new Decimal.min(boost, new Decimal(1e100))
                return boost
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x Skill" },
            tooltip: "Boost Effect: (TFD + 1)^0.3 (all non-Stadic boost cap at 1e100)",
            cost: new Decimal(45),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Self Boost I",
            description: "Skill Boost Itself",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times((player.points.add(1).pow(0.2)).times(3))
                if(hasUpgrade(this.layer, 31)) boost = boost.pow(1.05)

                boost = new Decimal.min(boost, new Decimal(1e100))
                return boost
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x Skill" },
            tooltip: "Boost Effect: (Skill + 1)^0.2 x 3",
            cost: new Decimal(75),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Booster I",
            description: "x2.5 TFD",
            cost: new Decimal(130),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Booster II",
            description: "x1.5 Skill and TFD",
            cost: new Decimal(200),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Non-Stadic Booster II",
            description: "Skill Boost TFD",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(player.points.add(1).pow(0.05))
                if(hasUpgrade(this.layer, 31)) boost = boost.pow(1.05)

                boost = new Decimal.min(boost, new Decimal(1e100))
                return boost
            },
            effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x TFD" },
            tooltip: "Boost Effect: (Skill + 1)^0.05",
            cost: new Decimal(320),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Basic Booster II",
            description: "x3 TFD",
            cost: new Decimal(500),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Unlocker I",
            description: "Unlock Milestones",
            cost: new Decimal(700),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
        31: {
            title: "Welcome Back",
            description: "Every Formula Upgrade is boosted by ^1.05 (Non-Static)",
            cost: new Decimal(1.25e28),
            unlocked() {return hasMilestone('$', 8)},
        },
        32: {
            title: "Insane Boost II",
            description: "x10,000 Skill",
            cost: new Decimal(1e29),
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
        33: {
            title: "Unlocker III",
            description: "Unlock Ca$h a Upgrade",
            cost: new Decimal(2e32),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        34: {
            title: "Unlocker IV",
            description: "Unlock More FLN Upgrades",
            cost: new Decimal(2.5e36),
            unlocked() {return hasUpgrade(this.layer, 33)},
        },
    },
})

addLayer("TLG", {
    name: "The Lower Gap",
    symbol: "TLG",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#005000",
    requires: new Decimal(10000000),
    base: new Decimal(2),
    resource: "The Lower Gap",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "static",
    base: 100.05,
    exponent: 2,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 2,
    hotkeys: [
        {key: "L", description: "L: Reset for TLG", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let vis = false
        if(hasMilestone('TFD', 2)) vis = true
        if(hasMilestone(this.layer, 0)) vis = true
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "This is a Long Layer [Reset 1] (Brighter for visibility)" },
        },
    },
    milestones: {
        0: {
            requirementDescription: "Negitivity. (-)",
            effectDescription: "Unlock Negitivity",
            done() { return player[this.layer].points.gte(1) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        1: {
            requirementDescription: "Unimpossible",
            effectDescription: "Unlock Unimpossible and x5 Skill",
            done() { return player[this.layer].points.gte(2) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        2: {
            requirementDescription: "Cash",
            effectDescription: "Unlock Cash and x2 Skill and TFD but Remove the Log in Negitivity Upgrade 11",
            done() { return player[this.layer].points.gte(3) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        3: {
            requirementDescription: "Friendliness",
            effectDescription: "Unlock Friendliness and Keep Cash Milestone 1 effect (QoL)",
            done() { return player[this.layer].points.gte(4) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        4: {
            requirementDescription: "True Ease",
            effectDescription: "Unlock True Ease and Keep Cash Milestone 8 effect (More QoL)",
            done() { return player[this.layer].points.gte(5) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        5: {
            requirementDescription: "A",
            effectDescription: "Unlock 'A' and Automate the first 3 row 1 Upgrades (QoLs)",
            done() { return player[this.layer].points.gte(6) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        6: {
            requirementDescription: "Felix the ДА",
            effectDescription: "Unlock Felix the ДА and x25 'A' (QoL Mult)",
            done() { return player[this.layer].points.gte(7) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        7: {
            requirementDescription: "Exist",
            effectDescription: "Unlock Exist and autobuy the UIP buyables (Small QoL)",
            done() { return player[this.layer].points.gte(8) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        8: {
            requirementDescription: "Relax",
            effectDescription: "Unlock Relax and x10 Skill (No QoL)",
            done() { return player[this.layer].points.gte(1e100) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
    },
    unlocked() {
        let notlocked = false
        if(hasMilestone('TFD', 2)) notlocked = true
        if(hasMilestone("TLG", 0)) notlocked = true
        return notlocked
    },
})

addLayer("Neg", {
    name: "Negativity",
    symbol: "Neg",
    position: 1,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#320064",
    requires: new Decimal(100),
    resource: "Negativity",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.7,
    gainMult() {
        mult = new Decimal(0)
        if(hasUpgrade(this.layer, 11)) mult = mult.add(1)
        if(hasUpgrade('UIP', 12)) mult = mult.times(3)
        mult = mult.times(new Decimal(3).pow(getBuyableAmount('UIP', 13)))
        if(hasUpgrade(this.layer, 21)) mult = mult.times(1.3)
        if(hasUpgrade('TES', 11)) mult = mult.times(upgradeEffect('TES', 11))
        if(hasMilestone('XST', 0)) mult = mult.times(25)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "N", description: "N: Reset for Negativity", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('TLG', 0)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "First New Layer Note: you may need to reset to fix the unclickable Upgrades (every layer also brighter for visability)" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        return Gen
    },
    autoUpgrade() {return hasMilestone('TLG', 5)},
    upgrades: {
        11: {
            title: "A Nerf to start because i'm to lazy too learn [Row 1]",
            description: "Neg Boost Skill (-)",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(((player[this.layer].points.add(1/25)).times(25).pow(0.7)).log(2))
                if (hasMilestone('$', 4)) boost = new Decimal(1).times((player[this.layer].points.times(25).pow(1)).log(2))
                if (hasUpgrade(this.layer, 13)) boost = new Decimal(1).times((player[this.layer].points.times(20).pow(0.7)).log(2))
                if (hasMilestone('$', 4) || hasUpgrade(this.layer, 13)) boost = new Decimal(1).times((player[this.layer].points.times(20).pow(1)).log(2))
                if (hasMilestone('TLG', 2)) boost = new Decimal(2).pow(boost)
                if (hasUpgrade(this.layer, 22)) boost = new Decimal(1).times(player[this.layer].points.times(10).pow(1.1))

                if(hasUpgrade('TFD', 31)) boost = boost.pow(1.05)

                boost = new Decimal.min(boost, new Decimal(1e250))
                return boost
            },
            effectDisplay() {return "-" + format(upgradeEffect(this.layer, this.id))+" Skill Gain (After Multipliers)"},
            tooltip: "log2((Neg + 1/25) x 25)^0.7 (Cap: 1e250)",
            cost: new Decimal(0),
        },
        12: {
            title: "Booster III",
            description: "+2 Skill Gain",
            cost: new Decimal(50),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Nerfer I",
            description: "-5 the Mult in Neg Upgrade 11. (Doesn't Update)",
            cost: new Decimal(150),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Self Boost II",
            description: "Skill Boost Itself (+)",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(((player.points.add(1)).pow(2)).log10())
                if(hasUpgrade('TFD', 31)) boost = boost.pow(1.05)

                boost = new Decimal.min(boost, new Decimal(300))
                return boost
            },
            effectDisplay() {return "+"+format(upgradeEffect(this.layer, this.id))+" Skill Gain"},
            tooltip: "log10((Skill + 1)^2) (Cap: 300)",
            cost: new Decimal(1000),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Finishing the Row",
            description: "x2.5 TFD and unlock a TFD Milestone",
            cost: new Decimal(50000),
            unlocked() {return hasUpgrade('Neg', 14)},
        },
        21: {
            title: "Row 2",
            description: "x1.3 Skill, TFD, Neg, UIP",
            cost: new Decimal(5e15),
            unlocked() {return hasMilestone('$', 6)},
        },
        22: {
            title: "Trade Off",
            description: "-10 the Mult but +0.1 to the exponent in Negitivity Upgrade 11",
            cost: new Decimal(2.2e16),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Nerf II",
            description: "Neg Boost Skill (/)",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(player[this.layer].points.pow(0.05).add(1))
                if(hasUpgrade('TFD', 31)) boost = boost.pow(1.05)
                return boost
            },
            effectDisplay() {return "/"+format(upgradeEffect(this.layer, this.id))+" Skill Gain (After Neg Upgrade 11)"},
            tooltip: "Negitivity^0.05 + 1 (No Cap)",
            cost: new Decimal(5e16),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Booster VI",
            description: "x1,000 Skill and x50 TFD, UIP",
            cost: new Decimal(8e16),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Booster V",
            description: "x10 Skill",
            cost: new Decimal(1.3e17),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
    },
    deactivated() {
        let inactive = true
        if(hasMilestone('TLG', 0)) inactive = false
        return inactive
    },
})

addLayer("UIP", {
    name: "Unimpossible",
    symbol: "UIP",
    position: 2,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#400040",
    requires: new Decimal(1000),
    resource: "Unimpossible",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.7,
    gainMult() {
        mult = new Decimal(1)
        if(hasMilestone('$', 1)) mult = mult.times(3)
        if(hasMilestone('$', 4)) mult = mult.times(1.3)
        if(hasUpgrade('Neg', 21)) mult = mult.times(1.3)
        if(hasUpgrade('Neg', 24)) mult = mult.times(50)
        if(hasUpgrade('TES', 11)) mult = mult.times(upgradeEffect('TES', 11))
        if(hasMilestone('XST', 0)) mult = mult.times(25)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "I", description: "I: Reset for TFD", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('TLG', 1)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Triplets everywere [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        return Gen
    },
    autoUpgrade() {return hasMilestone('TLG', 5)},
    upgrades: {
        11: {
            title: "Wave 1",
            description: "x9 Skill and TFD",
            cost: new Decimal(9),
        },
        12: {
            title: "Wave 2",
            description: "x3 Neg",
            cost: new Decimal(27),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Wave 3",
            description: "Unlock 3 Buyables",
            cost: new Decimal(243),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
    },

    buyables: {
        11: {
            title: "Triplets I",
            cost(x) { return new Decimal(3).pow((x.pow(3)).add(4)) },
            display() { return "x3 Skill Per Level Currently: x"+format(new Decimal(3).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(3).pow((getBuyableAmount(this.layer, this.id).pow(3)).add(4))) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        12: {
            title: "Triplets II",
            cost(x) { return new Decimal(3).pow((x.pow(3.3)).add(4)) },
            display() { return "x3 TFD Per Level Currently: x"+format(new Decimal(3).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(3).pow((getBuyableAmount(this.layer, this.id).pow(3.3)).add(4))) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        13: {
            title: "Triplets III",
            cost(x) { return new Decimal(3).pow((x.pow(3.6)).add(4)) },
            display() { return "x3 Negitivity Per Level Currently: x"+format(new Decimal(3).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(3).pow((getBuyableAmount(this.layer, this.id).pow(3.6)).add(4))) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
    },
    automate() {
        if(hasMilestone('TLG', 7)) {
            if(layers[this.layer].buyables[11].canAfford()) {
                layers[this.layer].buyables[11].buy();
            };
            if(layers[this.layer].buyables[12].canAfford()) {
                layers[this.layer].buyables[12].buy();
            };
            if(layers[this.layer].buyables[13].canAfford()) {
                layers[this.layer].buyables[13].buy();
            };
        }
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 1)) inactive = false
        return inactive
    },
})

addLayer("$", {
    name: "Ca$h",
    symbol: "$",
    position: 3,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#009600",
    requires: new Decimal(10000),
    resource: "Ca$h",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "static",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)
        if(hasUpgrade('TES', 11)) mult = mult.times(upgradeEffect('TES', 11))
        if(hasMilestone('XST', 0)) mult = mult.times(25)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "C", description: "C: Reset for Ca$h", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('TLG', 2)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Money Time [Row 1]" },
        },
    },
    autoPrestige() {
        let auto = false
        if(hasMilestone(this.layer, 0)) auto = true
        if(hasMilestone('TLG', 3)) auto = true
        return auto
    },
    resetsNothing() {return hasMilestone(this.layer, 4)},
    canBuyMax() {
        let maxing = false
        if(hasMilestone(this.layer, 8)) maxing = true
        if(hasMilestone('TLG', 4)) maxing = true
        return maxing
    },
    milestones: {
        0: {
            requirementDescription: "1 Ca$h",
            effectDescription: "Unlock Automation and x2 Skill",
            done() { return player[this.layer].points.gte(1) },
        },
        1: {
            requirementDescription: "2 Ca$h",
            effectDescription: "x5 Skill and x3 FTD and UIP",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(2) && hasMilestone('$', 0)) Done = true
                return Done
            },
            unlocked() {return hasMilestone(this.layer, 0)},
        },
        2: {
            requirementDescription: "10 Ca$h",
            effectDescription: "x1.5 Skill",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(10) && hasMilestone('$', 1)) Done = true
                return Done
            },
            unlocked() {return hasMilestone(this.layer, 1)},
        },
        3: {
            requirementDescription: "50 Ca$h",
            effectDescription: "+2 Skill Gain",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(50) && hasMilestone('$', 2)) Done = true
                return Done
            },
            unlocked() {return hasMilestone(this.layer, 2)},
        },
        4: {
            requirementDescription: "125 Ca$h",
            effectDescription: "x1.3 SKill and TFD and UIP and Cash Resets Nothing but x5 Neg and + 0.3 Exponent to Neg Upgrade 11",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(125) && hasMilestone('$', 3)) Done = true
                return Done
            },
            unlocked() {return hasMilestone(this.layer, 3)},
        },
        5: {
            requirementDescription: "250 Ca$h",
            effectDescription: "x10 Skill",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(250) && hasMilestone('$', 4)) Done = true
                return Done
            },
            unlocked() {return hasMilestone(this.layer, 4)},
        },
        6: {
            requirementDescription: "350 Ca$h",
            effectDescription: "x5 TFD and Unlock more Neg Upgrades",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(350) && hasMilestone('$', 5)) Done = true
                return Done
            },
            unlocked() {return hasMilestone(this.layer, 5)},
        },
        7: {
            requirementDescription: "Getting FLN Upgrade 12",
            effectDescription: "Skill Boost Skill log10(Skill + 1) (x) (Cap: 100)",
            done() {return hasUpgrade('FLN', 12)},
            unlocked() {return hasUpgrade('FLN', 12)},
        },
        8: {
            requirementDescription: "five Grand",
            effectDescription: "Unlock maxing Ca$h and Unlock more TFD Upgrades",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(5000) && hasUpgrade('FLN', 21)) Done = true
                return Done
            },
            unlocked() {return hasUpgrade('FLN', 21)},
        },
    },
    upgrades: {
        11: {
            title: "Ca$h Boost I",
            description: "Ca$h Boost Skill",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times((player[this.layer].points.add(1)).pow(0.75))

                boost = new Decimal.min(boost, new Decimal(1e100))
                return boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id)) + "x Skill"},
            tooltip: "(Ca$h + 1)^0.75",
            cost: new Decimal(16500),
            unlocked() {return hasUpgrade('TFD', 33)},
        },
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 2)) inactive = false
        return inactive
    },
})

addLayer("FLN", {
    name: "Friendliness",
    symbol: "FLN",
    position: 4,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#498549",
    requires: new Decimal(100000),
    resource: "Friendliness",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.1,
    gainMult() {
        mult = new Decimal(1)
        if(hasUpgrade('FLN', 11)) mult = mult.times(2)
        if(hasUpgrade('FLN', 12)) mult = mult.times(2)
        if(hasUpgrade('FLN', 13)) mult = mult.times(2)
        if(hasUpgrade('FLN', 14)) mult = mult.times(100)
        if(hasUpgrade('FLN', 15)) mult = mult.times(upgradeEffect('FLN', 15))
        if(hasUpgrade('FLN', 21)) mult = mult.times(100)
        if(hasUpgrade('FLN', 22)) mult = mult.times(100)
        if(hasUpgrade('FLN', 23)) mult = mult.times(100000)
        if(hasUpgrade('TES', 11)) mult = mult.times(upgradeEffect('TES', 11))
        if(hasMilestone('XST', 0)) mult = mult.times(25)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "F", description: "F: Reset for FLN", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('TLG', 3)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "A layer With Positive Boosts [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        return Gen
    },
    upgrades: {
        11: {
            title: "Remover I",
            description: "Negitivity Upgrade 11 Now (+) instead and x2 FLN",
            cost: new Decimal(5),
        },
        12: {
            title: "Unlocker II",
            description: "Unlock a Ca$h Milestone and x2 FLN",
            cost: new Decimal(500),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Insane Boost I",
            description: "FLN Boost Skill and x2 FLN",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times((new Decimal(1.01).pow(player[this.layer].points.pow(1/2))).pow(player[this.layer].points.pow(-0.3)))
                if(hasUpgrade('FLN', 22)) boost = new Decimal(1).times((new Decimal(1.01).pow(player[this.layer].points.pow(1/2))).pow(player[this.layer].points.pow(-0.4)))
                if(hasUpgrade('TFD', 31)) boost = boost.pow(1.05)

                boost = new Decimal.min(boost, new Decimal(1000))
                return boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x Skill"},
            tooltip: "(1.01^sqrt(FLN))^(FLN^-0.3)) (Cap: 1,000)",
            cost: new Decimal(10000),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "BFFs",
            description: "x100 FLN and Skill",
            cost: new Decimal(200000),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Tree of Friends",
            description: "FLN Boost itself",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(((player[this.layer].points.times(1/10000)).add(1)).log(2))
                if(hasUpgrade('TFD', 31)) boost = boost.pow(1.05)

                boost = new Decimal.min(boost, new Decimal(1e100))
                return boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x FLN"},
            tooltip: "log2(FLN / 10,000 + 1)",
            cost: new Decimal(10000000),
            unlocked() {return hasUpgrade('FLN', 14)},
        },
        21: {
            title: "Final Friends",
            description: "x100 FLN and Unlock another Ca$h Milestone",
            cost: new Decimal(500000000),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Friends Forever",
            description: "x100 FLN but +(-0.1) in the 2nd exponental in FLN upgrade 13.",
            cost: new Decimal(5e11),
            unlocked() {return hasUpgrade('TFD', 34)},
        },
        23: {
            title: "Never Ending",
            description: "x100,000 FLN",
            cost: new Decimal(1e16),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Ok No More FLN Boosts",
            description: "x100 Skill",
            cost: new Decimal(1.5e20),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 3)) inactive = false
        return inactive
    },
})

addLayer("TES", {
    name: "True Ease",
    symbol: "TES",
    position: 5,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#cecece",
    requires: new Decimal(1e9),
    resource: "True Ease",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.1,
    gainMult() {
        mult = new Decimal(1)
        if(hasUpgrade('TES', 14)) mult = mult.times(100)
        if(hasMilestone('XST', 0)) mult = mult.times(25)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "E", description: "E: Reset for TES", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('TLG', 4)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Mega Simple [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        return Gen
    },
    upgrades: {
        11: {
            title: "Mega Booster I",
            description: "TES Boost TFD, Neg, UIP and FLN and TES Decreases Ca$h Requirement",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times((player[this.layer].points.add(10)).log10())

                boost = new Decimal.min(boost, new Decimal(1e100))
                return boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x TFD, Neg, UIP and FLN and / Ca$h Requirement"},
            tooltip: "log10(TES + 1) + 1",
            cost: new Decimal(25),
        },
        12: {
            title: "Mega Booster II",
            description: "TES Boost Skill",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times((player[this.layer].points.add(2)).log(2))

                boost = new Decimal.min(boost, new Decimal(1e100))
                return boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x Skill"},
            tooltip: "log2(TES + 1) + 1",
            cost: new Decimal(250),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Mega Booster III",
            description: "x1,000 Skill",
            cost: new Decimal(2500),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Mega Booster IV",
            description: "x100 TES",
            cost: new Decimal(25000),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Mega Booster V",
            description: "x1,000 TES and x1e10 Skill and Unlock 2 TFD Upgrades",
            cost: new Decimal(1000000),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 4)) inactive = false
        return inactive
    },
})

addLayer("A", {
    name: "A",
    symbol: "A",
    position: 6,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ff2600",
    requires: new Decimal(1e12),
    resource: "A",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(1)
        if(hasUpgrade('A', 11)) mult = mult.times(2)
        if(hasUpgrade('A', 12)) mult = mult.times(2)
        if(hasUpgrade('A', 13)) mult = mult.times(1.5)
        if(hasUpgrade('A', 14)) mult = mult.times(10)
        if(getBuyableAmount(this.layer, 11) > 0) mult = mult.times(new Decimal(1.5).pow(getBuyableAmount(this.layer, 11)))
        if(hasUpgrade('A', 21)) mult = mult.times(3)
        if(hasUpgrade('A', 22)) mult = mult.times(5)
        if(hasUpgrade('A', 23)) mult = mult.times(upgradeEffect(this.layer, 23))
        if(hasUpgrade('A', 31)) mult = mult.times(200)
        if(hasUpgrade('A', 32)) mult = mult.times(500)
        if(hasUpgrade('A', 33)) mult = mult.times(750)
        if(hasUpgrade('A', 34)) mult = mult.times(1000)
        if(getBuyableAmount(this.layer, 13) > 0) mult = mult.times(Math.log2(new Decimal(2).pow(getBuyableAmount(this.layer, 13))))
        if(hasMilestone('TLG', 6)) mult = mult.times(25)
        if(hasUpgrade('ДА', 12)) mult = mult.times(5)
        if(hasUpgrade('ДА', 13)) mult = mult.times(2)
        if(hasUpgrade('ДА', 14)) mult = mult.times(4)
        if(hasUpgrade('ДА', 15)) mult = mult.times(10)
        if(hasUpgrade('ДА', 21)) mult = mult.times(11)
        if(hasUpgrade('ДА', 22)) mult = mult.times(5)
        if(getBuyableAmount('ДА')) mult = mult.times(new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id)))
        if(hasMilestone('XST', 0)) mult = mult.times(25)
        
        if(hasUpgrade('A', 24)) mult = mult.pow(upgradeEffect(this.layer, 24))
        if(getBuyableAmount(this.layer, 12) > 0) mult = mult.pow(new Decimal(1.01).pow(getBuyableAmount(this.layer, 12)))
        if(hasUpgrade('ДА', 24)) mult = mult.pow(1.01)
        if(hasUpgrade('ДА', 25)) mult = mult.pow(1.05)
        if(hasUpgrade('ДА', 31)) mult = mult.pow(1.1)
        if(hasUpgrade('ДА', 32)) mult = mult.pow(1.1)
        
        if(hasUpgrade('ДА', 11)) mult = mult.times(upgradeEffect('ДА', 11).pow(-1))
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "A", description: "A: Reset for A", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('TLG', 5)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Red (also a odd layer) [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        return Gen
    },
    buyables: {
        11: {
            title: "Red Booster Endless",
            cost(x) { return new Decimal(500).times(new Decimal(2).pow((x.pow(1.5)).add(1))).times(upgradeEffect('ДА', 11).pow(-1)) },
            display() { return "x1.5 'A' Per Level Currently: x"+format(new Decimal(1.5).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(500).times(new Decimal(2).pow((getBuyableAmount(this.layer, this.id).pow(1.5)).add(1))).times(upgradeEffect('ДА', 11).pow(-1))) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        12: {
            title: "Red Booster Endless II",
            cost(x) { return new Decimal(100000).times(new Decimal(10).pow((x.pow(1.5)).add(1))).times(upgradeEffect('ДА', 11).pow(-1)) },
            display() { return "^1.01 'A' Per Level Currently: ^"+format(new Decimal(1.01).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(100000).times(new Decimal(10).pow((getBuyableAmount(this.layer, this.id).pow(1.5)).add(1))).times(upgradeEffect('ДА', 11).pow(-1))) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 25)},
        },
        13: {
            title: "Pink Booster",
            cost(x) { return new Decimal(1e33).times(new Decimal(1.1).pow((x.pow(1.5)).add(1))).times(upgradeEffect('ДА', 11).pow(-1)) },
            display() { return "x2 Skill Per Level and 'A' by the log2 Currently: x"+format(new Decimal(2).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(1e33).times(new Decimal(1.1).pow((getBuyableAmount(this.layer, this.id).pow(1.5)).add(1))).times(upgradeEffect('ДА', 11).pow(-1))) + " Amount: " + format(getBuyableAmount(this.layer, this.id)) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 35)},
        },
    },
    automate() {
        if(hasUpgrade('RAX', 11)) {
            if(layers[this.layer].buyables[11].canAfford()) {
                layers[this.layer].buyables[11].buy();
            };
        }
        if(hasUpgrade('RAX', 12)) {
            if(layers[this.layer].buyables[12].canAfford()) {
                layers[this.layer].buyables[12].buy();
            };
        }
        if(hasUpgrade('RAX', 13)) {
            if(layers[this.layer].buyables[13].canAfford()) {
                layers[this.layer].buyables[13].buy();
            };
        }
    },
    upgrades: {
        11: {
            title: "Red Booster I",
            description: "x2 'A'",
            cost: new Decimal(5),
        },
        12: {
            title: "Red Booster II",
            description: "x2 'A' again",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Red Booster III",
            description: "x1.5 'A'",
            cost: new Decimal(25),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Red Booster IV",
            description: "x10 'A'",
            cost: new Decimal(45),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Red Unlocker I",
            description: "Unlock a buyable",
            cost: new Decimal(500),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Red Booster V",
            description: "x3 'A'",
            cost: new Decimal(3000),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Red Booster VI",
            description: "x5 'A'",
            cost: new Decimal(12000),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Red Booster VII",
            description: "'A' Boost itself",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times((player[this.layer].points.add(2)).log(2))

                boost = new Decimal.min(boost, new Decimal(1e308))
                return boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id)) + "x 'A'"},
            tooltip: "log2(A + 1) + 1 (Cap: 1e308)",
            cost: new Decimal(120000),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Red Booster VIII",
            description: "'A' Boost itself again (^)",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(((player[this.layer].points.add(1e10)).log10()).log10())
                
                boost = new Decimal.min(boost, new Decimal(100))
                return boost
            },
            effectDisplay() {return "^" + format(upgradeEffect(this.layer, this.id)) + " 'A'"},
            tooltip: "log10(log10(A + 1) + 1) + 1) (Cap: 100)",
            cost: new Decimal(2000000),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Red Unlocker II",
            description: "Unlock a 2nd buyable",
            cost: new Decimal(10000000),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
        31: {
            title: "Red Super Booster I",
            description: "x200 'A'",
            cost: new Decimal(15000000),
            unlocked() {return hasUpgrade(this.layer, 25)},
        },
        32: {
            title: "Red Super Booster II",
            description: "x500 'A'",
            cost: new Decimal(1e10),
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
        33: {
            title: "Red Super Booster III",
            description: "x750 'A'",
            cost: new Decimal(1e16),
            unlocked() {return hasUpgrade(this.layer, 32)},
        },
        34: {
            title: "Red Super Booster IV",
            description: "x1,000 'A'",
            cost: new Decimal(1e25),
            unlocked() {return hasUpgrade(this.layer, 33)},
        },
        35: {
            title: "Red Unlocker",
            description: "Unlock the final Buyable",
            cost: new Decimal(1e33),
            unlocked() {return hasUpgrade(this.layer, 34)},
        },
        41: {
            title: "White Booster I",
            description: "x10,000",
            cost: new Decimal(1e40),
            unlocked() {return hasUpgrade(this.layer, 35)},
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasUpgrade('RAX', 14)) auto = true
        return auto
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 5)) inactive = false
        return inactive
    },
})

addLayer("ДА", {
    name: "Felix the ДА",
    symbol: "ДА",
    position: 7,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#00a500",
    requires: new Decimal(1e42),
    resource: "Felix the ДА",
    baseResource: "A",
    baseAmount() {return player.A.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(0)
        if(hasUpgrade(this.layer, 11)) mult = new Decimal(1)
        
        
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "ctrl+A", description: "ctrl+A: Reset for ДА", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    onPrestige(gain) {
        player.A.points = new Decimal(0)
    },
    resetsNothing() {return true},
    layerShown() {return hasMilestone('TLG', 6)},
    infoboxes: {
        lore: {
            title: "Info About this layer [Row 1]",
            body() { return "Green exstention to Red (All upgrades are !Free!) [Row 1.5]" },
        },
    },
    passiveGeneration() {
        let Gen = 0
        return Gen
    },
    buyables: {
        11: {
            title: "Green Red Booster Endless I (Free)",
            cost(x) { return new Decimal(10).times(new Decimal(1.1).pow((x.pow(1.2)).add(1))) },
            display() { return "x1.1 'A' Per Level Currently: x"+format(new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(10).times(new Decimal(1.1).pow((getBuyableAmount(this.layer, this.id).pow(1.2)).add(1)))) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
    },
    automate() {
        if(hasUpgrade('RAX', 15)) {
            if(layers[this.layer].buyables[11].canAfford()) {
                layers[this.layer].buyables[11].buy();
            };
        }
    },
    upgrades: {
        11: {
            title: "Green Red Nerfer I",
            description: "ДА Boosts A and decrease buyable Costs (/) [After Powers]",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(new Decimal(10).pow(player[this.layer].points.times(0.75)))
                return boost
            },
            effectDisplay() {return "/" + format(upgradeEffect(this.layer, this.id)) + " A"},
            tooltip: "10^((ДА x 0.75)) (No Cap)",
            cost: new Decimal(0),
        },
        12: {
            title: "Green Red Booster I",
            description: "x5 'A'",
            cost: new Decimal(3),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Green Red Booster II",
            description: "x2 'A'",
            cost: new Decimal(5),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Green Red Booster III",
            description: "x4 'A'",
            cost: new Decimal(6),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Green Red Booster IV",
            description: "x10 'A'",
            cost: new Decimal(8),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Green Red Booster V",
            description: "x11 'A'",
            cost: new Decimal(11),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Green Red Booster VI",
            description: "x5 'A'",
            cost: new Decimal(14),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Green Unlocker I",
            description: "Unlock a buyable",
            cost: new Decimal(17),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Green Red Super Booster I",
            description: "^1.01 'A'",
            cost: new Decimal(18),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Green Red Super Booster II",
            description: "^1.05 'A'",
            cost: new Decimal(19),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
        31: {
            title: "Green Red Super Booster III",
            description: "^1.1 'A'",
            cost: new Decimal(24),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 25)},
        },
        32: {
            title: "Green Red Super Booster IV",
            description: "^1.1 'A' again",
            cost: new Decimal(34),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 6)) inactive = false
        return inactive
    },
})

addLayer("XST", {
    name: "Exist",
    symbol: "XST",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#e4c8c8",
    requires: new Decimal(1e110),
    resource: "Exist Power",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "static",
    exponent: 3,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1,
    hotkeys: [
        {key: "X", description: "X: Reset for Exist", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('TLG', 7)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "POWER of Existing [Row 2]" },
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 Exist Power",
            effectDescription: "x25 TFD, Neg, UIP, FLN->A and /25 Cash Requirment",
            done() { return player[this.layer].points.gte(1) },
        },
        1: {
            requirementDescription: "2 Exist Power",
            effectDescription: "x10 Skill",
            done() { return player[this.layer].points.gte(2) },
            unlocked() {return hasMilestone(this.layer, 0)}
        },
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 7)) inactive = false
        return inactive
    },
})

addLayer("RAX", {
    name: "Relax",
    symbol: "RAX",
    position: 8,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#d6d6d6",
    requires: new Decimal(1e125),
    resource: "Relax",
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
    hotkeys: [
        {key: "L", description: "L: Reset for Relax", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('TLG', 8)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "QoL layer Nice [Row 1]" },
        },
    },
    upgrades: {
        11: {
            title: "Qol I",
            description: "AutoBuy 'A' 11 Buyable",
            cost: new Decimal(1),
        },
        12: {
            title: "Qol II",
            description: "AutoBuy 'A' 12 Buyable",
            cost: new Decimal(1),
        },
        13: {
            title: "Qol III",
            description: "AutoBuy 'A' 13 Buyable",
            cost: new Decimal(1),
        },
        14: {
            title: "Qol IV",
            description: "AutoBuy 'A' Upgades",
            cost: new Decimal(1),
        },
        15: {
            title: "Qol V",
            description: "AutoBuy ДА 11 Buyable",
            cost: new Decimal(1),
        },
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 8)) inactive = false
        return inactive
    },
})