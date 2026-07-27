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
        if(hasUpgrade('SKIP', 13)) mult = mult.times(25)
        if(hasUpgrade('TFD', 41)) mult = mult.times(1e25)
        if(hasUpgrade('TFD', 42)) mult = mult.times(1e30)
        if(hasUpgrade('TFD', 43)) mult = mult.times(1e35)
        if(hasUpgrade('TFD', 44)) mult = mult.times(1e40)
        if(hasUpgrade('TFD', 45)) mult = mult.times(1e50)
        
        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "T", description: "T: Reset for TFD", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "You Gain this currency automatically Nice, also dark and odd? [Row 1] (Brighter for visibility)" },
        },
    },
    resetDescription: "Reset Skill For ",
    passiveGeneration() {
        let Gen = 1
        if(hasMilestone('ITW', 13)) Gen = 1e10
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
            cost: new Decimal(7.5e27),
            unlocked() {return hasMilestone('$', 8)},
        },
        32: {
            title: "Insane Boost II",
            description: "x10,000 Skill",
            cost: new Decimal(3e28),
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
        33: {
            title: "Unlocker III",
            description: "Unlock Ca$h a Upgrade",
            cost: new Decimal(2e32),
            unlocked() {return hasUpgrade(this.layer, 32)},
        },
        34: {
            title: "Unlocker IV",
            description: "Unlock More FLN Upgrades",
            cost: new Decimal(2.5e36),
            unlocked() {return hasUpgrade(this.layer, 33)},
        },
        35: {
            title: "Unloc.. No Final Booster I",
            description: "x1e10 TFD and x100 Skill",
            cost: new Decimal(2.5e92),
            unlocked() {return hasUpgrade('RAX', 25) || hasMilestone('XST', 4)},
        },
        41: {
            title: "Final Booster II",
            description: "x1e25 TFD and x1e50 Skill",
            cost: new Decimal('e380'),
            unlocked() {return hasMilestone('ITW', 0)},
        },
        42: {
            title: "Final Booster III",
            description: "x1e30 TFD and x1e45 Skill",
            cost: new Decimal('e405'),
            unlocked() {return hasUpgrade(this.layer, 41)},
        },
        43: {
            title: "Final Booster IV",
            description: "x1e35 TFD and x1e40 Skill",
            cost: new Decimal('e434'),
            unlocked() {return hasUpgrade(this.layer, 42)},
        },
        44: {
            title: "Final Booster IV",
            description: "x1e40 TFD and x1e35 Skill",
            cost: new Decimal('e468'),
            unlocked() {return hasUpgrade(this.layer, 43)},
        },
        45: {
            title: "Final Booster Final",
            description: "x1e50 TFD and x1e25 Skill",
            cost: new Decimal('e500'),
            unlocked() {return hasUpgrade(this.layer, 44)},
        },
    },
    update(diff) {
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },

    deactivated() {
        let inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
        return inactive
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
    exponent() {
        let exponental = new Decimal(2)
        if(hasMilestone(this.layer, 15)) exponental = new Decimal(2).pow(player[this.layer].points.add(-14).pow(0.5))
        return exponental
    },
    effectDescription() {
        let effect = "No Softcap.. For Now"
        if(hasMilestone(this.layer, 15)) effect = "Softcap I"
        if(hasMilestone(this.layer, 100)) effect = "Cap (GL on the next Update)"
        return effect
    },
    gainMult() {
        mult = new Decimal(1)
        if(hasMilestone(this.layer, 100)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 3,
    hotkeys: [
        {key: "L", description: "L: Reset for TLG", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetDescription: "Reset Skill and Above For ",
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
            done() { return player[this.layer].points.gte(9) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        9: {
            requirementDescription: "Skip (Odd name)",
            effectDescription: "Unlock Skip and autobuy the True Ease Buyable (Ok QoL)",
            done() { return player[this.layer].points.gte(10) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        10: {
            requirementDescription: "Multiplier",
            effectDescription: "Unlock Multiplier and Keep the effect of XST Milestones id 2 (3rd) and id 4 (5th) (Good QoL)",
            done() { return player[this.layer].points.gte(11) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        11: {
            requirementDescription: "Restful",
            effectDescription: "Unlock RestFul and AutoReset for Exist and it Dosn't Reset Upgrades and Milestones (Insane QoL)",
            done() { return player[this.layer].points.gte(12) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        12: {
            requirementDescription: "Infinite Dot",
            effectDescription: "Unlock Infinite Dot and x50 Skill (I'm Done Will QoL.. For Now)",
            done() { return player[this.layer].points.gte(13) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        13: {
            requirementDescription: "Infinite Easy",
            effectDescription: "Unlock Infinite Easy",
            done() { return player[this.layer].points.gte(14) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        14: {
            requirementDescription: "Infinite (Real)",
            effectDescription: "Unlock Infinite and Autogain all prev layers",
            done() { return player[this.layer].points.gte(15) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        15: {
            requirementDescription: "Instant Win",
            effectDescription: "Unlock Instant Win and AutoBuy Infinite Dot and Easy Upgrades",
            done() { return player[this.layer].points.gte(16) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        16: {
            requirementDescription: "Millisecondless",
            effectDescription: "Unlock Millisecondless but combine all Class Negative Layers exsept TLG into Class Negative layer and Change the Way the Ca$h and Mult Layers Unlock and /30 Skill Gain",
            done() { return player[this.layer].points.gte(17) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        17: {
            requirementDescription: "Astronomical",
            effectDescription: "Unlock Astronomical but Make this layer useless and the end (vA3.0)",
            done() { return player[this.layer].points.gte(18) },
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
    color: "#4e019b",
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
        if(hasUpgrade('SKIP', 13)) mult = mult.times(25)

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "N", description: "N: Reset for Negativity", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 0)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "First New Layer (brighter for visability) [Row 1]" },
        },
    },
    resetDescription: "Reset Skill For ",
    passiveGeneration() {
        let Gen = 1
        if(hasMilestone('ITW', 13)) Gen = 1e10
        return Gen
    },
    autoUpgrade() {return hasMilestone('TLG', 5)},
    upgrades: {
        11: {
            title: "A Nerf to start because i'm to lazy too learn",
            description: "Neg Boost Skill (-)",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(((player[this.layer].points.times(25).add(1)).pow(0.7)).log(2))
                if (hasMilestone('$', 4)) boost = new Decimal(1).times(((player[this.layer].points.times(25).add(1)).pow(1)).log(2))
                if (hasUpgrade(this.layer, 13)) boost = new Decimal(1).times(((player[this.layer].points.times(20).add(1)).pow(0.7)).log(2))
                if (hasMilestone('$', 4) && hasUpgrade(this.layer, 13)) boost = new Decimal(1).times((player[this.layer].points.times(20).pow(1)).log(2))
                if (hasMilestone('TLG', 2)) boost = new Decimal(2).pow(boost)
                if (hasUpgrade(this.layer, 22)) boost = new Decimal(1).times((player[this.layer].points.times(10).add(1)).pow(1.1))

                if(hasUpgrade('TFD', 31)) boost = boost.pow(1.05)

                boost = new Decimal.min(boost, new Decimal(1e250))
                return boost
            },
            effectDisplay() {return "-" + format(upgradeEffect(this.layer, this.id))+" Skill Gain (After Multipliers)"},
            tooltip() {
                let Tip = "log2((Neg x 25 + 1)^0.7) (Cap: 1e250)"
                if(hasMilestone('$', 4)) Tip = "log2(Neg x 25 + 1) (Cap: 1e250)"
                if(hasUpgrade(this.layer, 13)) Tip = "log2((Neg x 20 + 1)^0.7) (Cap: 1e250)"
                if(hasMilestone('$', 4) && hasUpgrade(this.layer, 13)) Tip = "log2(Neg x 20 + 1) (Cap: 1e250)"
                if(hasMilestone('$', 4) && hasMilestone('TLG', 2)) Tip = "Neg x 25 + 1 (Cap: 1e250)"
                if(hasUpgrade(this.layer, 13) && hasMilestone('TLG', 2)) Tip = "(Neg x 20 + 1)^0.7 (Cap: 1e250)"
                if(hasMilestone('$', 4) && hasUpgrade(this.layer, 13)  && hasMilestone('TLG', 2)) Tip = "Neg x 20 + 1 (Cap: 1e250)"
                if(hasUpgrade(this.layer, 22)) Tip = "(Neg x 10 + 1)^1.1 (Cap: 1e250)"

                if(hasUpgrade('TFD', 31)) Tip = "("+format(Tip)+")^1.05"
                return Tip
            },
            cost: new Decimal(0),
        },
        12: {
            title: "Booster III",
            description: "+2 Skill Gain (all +/- Gains are before the x or / gains)",
            cost: new Decimal(50),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Nerfer I",
            description: "-5 the Mult in Neg Upgrade 11",
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
            tooltip() {
                let Tip = "log10((Skill + 1)^2) (Cap: 300)"
                if(hasUpgrade('TFD', 31)) Tip = "log10((Skill + 1)^2)^1.05 (Cap: 300)"
                return Tip
            },
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
            tooltip() {
                let Tip = "Negitivity^0.05 + 1 (No Cap)"
                if(hasUpgrade('TFD', 31)) Tip = "(Negitivity^0.05 + 1)^1.05 (No Cap)"
            },
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
    update(diff) {
        if (player.points.gte(100) && hasMilestone('TLG', 0)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },

    deactivated() {
        let inactive = true
        if(hasMilestone('TLG', 0)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
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
    color: "#720072",
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
        if(hasUpgrade('SKIP', 13)) mult = mult.times(25)

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "I", description: "I: Reset for TFD", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetDescription: "Reset Skill For ",
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 1)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Triplets everywere (brighter for visability) [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        if(hasMilestone('ITW', 13)) Gen = 1e10
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
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(3).pow((x.pow(3)).add(4))
                if(hasMilestone('ITW', 3)) Cost.times(1/100)
                return Cost
            },
            display() {
                let output = ""
                output = "x3 Skill Per Level Currently: x"+format(new Decimal(3).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(3).pow((getBuyableAmount(this.layer, this.id).pow(3)).add(4)))
                if(hasMilestone('ITW', 3)) output = "x3 Skill Per Level Currently: x"+format(new Decimal(3).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format((new Decimal(3).pow((getBuyableAmount(this.layer, this.id).pow(3)).add(4))).times(1/100))
                return output
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        12: {
            title: "Triplets II",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(3).pow((x.pow(3.3)).add(4))
                if(hasMilestone('ITW', 3)) Cost.times(1/100)
                return Cost
            },
            display() {
                let output = ""
                output = "x3 TFD Per Level Currently: x"+format(new Decimal(3).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(3).pow((getBuyableAmount(this.layer, this.id).pow(3.3)).add(4)))
                if(hasMilestone('ITW', 3)) output = "x3 TFD Per Level Currently: x"+format(new Decimal(3).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format((new Decimal(3).pow((getBuyableAmount(this.layer, this.id).pow(3.3)).add(4))).times(1/100))
                return output
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        13: {
            title: "Triplets III",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(3).pow((x.pow(3.6)).add(4))
                if(hasMilestone('ITW', 3)) Cost.times(1/100)
                return Cost
            },
            display() {
                let output = ""
                output = "x3 Neg Per Level Currently: x"+format(new Decimal(3).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(3).pow((getBuyableAmount(this.layer, this.id).pow(3.6)).add(4)))
                if(hasMilestone('ITW', 3)) output = "x3 Neg Per Level Currently: x"+format(new Decimal(3).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format((new Decimal(3).pow((getBuyableAmount(this.layer, this.id).pow(3.6)).add(4))).times(1/100))
                return output
            },
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
            if(layers[this.layer].buyables[11].canAfford() && layers[this.layer].buyables[11].unlocked() == true) {
                layers[this.layer].buyables[11].buy();
            };
            if(layers[this.layer].buyables[12].canAfford() && layers[this.layer].buyables[12].unlocked() == true) {
                layers[this.layer].buyables[12].buy();
            };
            if(layers[this.layer].buyables[13].canAfford() && layers[this.layer].buyables[13].unlocked() == true) {
                layers[this.layer].buyables[13].buy();
            };
        }
    },
    update(diff) {
        if (player.points.gte(1000) && hasMilestone('TLG', 1)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 1)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
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
        if(hasUpgrade(this.layer, 12)) mult = mult.times(upgradeEffect(this.layer, 12))
        if(hasUpgrade('MULTI', 11)) mult = mult.times(upgradeEffect('MULTI', 11))
        if(hasMilestone('ITW', 4)) mult = mult.times(1e10)

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "C", description: "C: Reset for Ca$h", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 2)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Money Time [Row 1]" },
        },
    },
    resetDescription: "Reset Skill For ",
    autoPrestige() {
        let auto = false
        if(hasMilestone(this.layer, 0)) auto = true
        if(hasMilestone('TLG', 3)) auto = true
        if(hasMilestone('TLG', 16)) auto = false
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
            effectDescription: "Skill Boost Skill log10(Skill + 10) (x) (Cap: 100)",
            tooltip() {return format(new Decimal.min((player.points.add(10)).log10(), new Decimal(100)))+"x Skill"},
            done() {return hasUpgrade('FLN', 12)},
            unlocked() {return hasUpgrade('FLN', 12)},
        },
        8: {
            requirementDescription: "Three Grand",
            effectDescription: "Unlock maxing Ca$h and Unlock more TFD Upgrades",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(3000) && hasUpgrade('FLN', 21)) Done = true
                return Done
            },
            unlocked() {return hasUpgrade('FLN', 21)},
        },
        9: {
            requirementDescription: "Ten Mil",
            effectDescription: "x1e150 Skill",
            done() { 
                let Done = false
                if(player[this.layer].points.gte(1e7) && hasMilestone('ITW', 4)) Done = true
                return Done
            },
            unlocked() {return hasMilestone('ITW', 4)},
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
        12: {
            title: "Ca$h Boost II",
            description: "Ca$h Decrease It's Requirement",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times((player[this.layer].points.add(1)).pow(0.1))
                return boost
            },
            effectDisplay() {return "/"+format(upgradeEffect(this.layer, this.id)) + " Ca$h"},
            tooltip: "(Ca$h + 1)^0.1 (No Cap)",
            cost: new Decimal(225000),
            unlocked() {return hasUpgrade('RAX', 25) || hasMilestone('XST', 4)},
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasMilestone('ITW', 10)) auto = true
        return auto
    },
    update(diff) {
        if (player.points.gte(10000) && hasMilestone('TLG', 2)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 2)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
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
        if(hasUpgrade(this.layer, 11)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 12)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 13)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 14)) mult = mult.times(100)
        if(hasUpgrade(this.layer, 15)) mult = mult.times(upgradeEffect(this.layer, 15))
        if(hasUpgrade(this.layer, 21)) mult = mult.times(100)
        if(hasUpgrade(this.layer, 22)) mult = mult.times(100)
        if(hasUpgrade(this.layer, 23)) mult = mult.times(100000)
        if(hasUpgrade('TES', 11)) mult = mult.times(upgradeEffect('TES', 11))
        if(hasMilestone('XST', 0)) mult = mult.times(25)
        if(hasUpgrade(this.layer, 25)) mult = mult.times(1e10)
        if(hasUpgrade('SKIP', 13)) mult = mult.times(25)
        if(hasUpgrade(this.layer, 31)) mult = mult.times(10000)
        if(hasUpgrade(this.layer, 32)) mult = mult.times(1000)
        if(hasUpgrade(this.layer, 33)) mult = mult.times(100)
        if(hasUpgrade(this.layer, 34)) mult = mult.times(10)
        if(hasUpgrade(this.layer, 35)) mult = mult.times(1e10)
        if(hasUpgrade('FLN', 45)) mult = mult.times(upgradeEffect('FLN', 41))
        
        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "F", description: "F: Reset for FLN", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetDescription: "Reset Skill For ",
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 3)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "A layer With Positive Boosts [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        if(hasMilestone('ITW', 13)) Gen = 1e10
        return Gen
    },
    upgrades: {
        11: {
            title: "Remover I",
            description: "Negitivity Upgrade 11 Now (+) instead and x2 FLN (Requires Neg Nerf)",
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
                if(hasUpgrade(this.layer, 22)) boost = new Decimal(1).times((new Decimal(1.01).pow(player[this.layer].points.pow(1/2))).pow(player[this.layer].points.pow(-0.4)))
                
                if(hasUpgrade('TFD', 31)) boost = boost.pow(1.05)

                boost = new Decimal.min(boost, new Decimal(1000))
                return boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x Skill"},
            tooltip() {
                let Tip = "(1.01^sqrt(FLN))^(FLN^-0.3) (Cap: 1,000)"
                if(hasUpgrade(this.layer, 22)) Tip = "(1.01^sqrt(FLN))^(FLN^-0.4) (Cap: 1,000)"

                if(hasUpgrade('TFD', 31)) Tip = "((1.01^sqrt(FLN))^(FLN^-0.4))^1.05 (Cap: 1,000)"

                return Tip
            },
            cost: new Decimal(10000),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "BFFs",
            description: "x100 FLN and Skill",
            cost: new Decimal(50000),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Tree of Friends",
            description: "FLN Boost itself",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(((player[this.layer].points.times(1/10000)).add(2)).log(2))
                if(hasUpgrade('TFD', 31)) boost = boost.pow(1.05)

                boost = new Decimal.min(boost, new Decimal(1e100))
                return boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x FLN"},
            tooltip() {
                let Tip = "log2(FLN / 10,000 + 1) + 1"

                if(hasUpgrade('TFD', 31)) Tip = "(log2(FLN / 10,000 + 1) + 1)^1.05"
                return Tip
            },
            cost: new Decimal(10000000),
            unlocked() {return hasUpgrade('FLN', 14)},
        },
        21: {
            title: "Final Friends",
            description: "x100 FLN and Unlock another Ca$h Milestone",
            cost: new Decimal(100000000),
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
        25: {
            title: "Friends Again.",
            description: "x1e10 FLN",
            cost: new Decimal(5e32),
            unlocked() {return hasUpgrade('RAX', 25) || hasMilestone('XST', 4)},
        },
        31: {
            title: "Friendly Boost I",
            description: "x10,000 FLN and Skill",
            cost: new Decimal(2.5e139),
            unlocked() {return hasMilestone('ITW', 5)},
        },
        32: {
            title: "Friendly Boost II",
            description: "x1,000 FLN and Skill",
            cost: new Decimal(1e143),
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
        33: {
            title: "Friendly Boost III",
            description: "x100 FLN and Skill",
            cost: new Decimal(1e147),
            unlocked() {return hasUpgrade(this.layer, 32)},
        },
        34: {
            title: "Friendly Boost IV",
            description: "x10 FLN and Skill",
            cost: new Decimal(1e149),
            unlocked() {return hasUpgrade(this.layer, 33)},
        },
        35: {
            title: "Friendly Boost Final",
            description: "x1e10 FLN and Skill",
            cost: new Decimal(1.51e150),
            unlocked() {return hasUpgrade(this.layer, 34)},
        },
        41: {
            title: "Friend Non-Static Booster I",
            description: "FLN Boost Skill (No Cap)",
            effect() {
                let Boost = new Decimal(1)
                Boost = Boost.times(((player[this.layer].points.add(1e10)).log10()).log10())
                if(hasUpgrade(this.layer, 42)) Boost = Boost.times(upgradeEffect(this.layer, 42))
                return Boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x Skill"},
            tooltip: "log10(log10(FLN + 1e10))",
            cost: new Decimal(3e161),
            unlocked() {return hasUpgrade(this.layer, 35)},
        },
        42: {
            title: "Friend Non-Static Booster II",
            description: "FLN Upgrade 41 Effect Boost itself",
            effect() {
                let Boost = new Decimal(1)
                Boost = Boost.times(upgradeEffect(this.layer, 41).add(100).log(100))
                if(hasUpgrade(this.layer, 43)) Boost = Boost.times(upgradeEffect(this.layer, 43))
                return Boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x FLN Upgrade 41 Effect"},
            tooltip: "Log100(FLN Upgrade 41 Effect + 100)",
            cost: new Decimal(5e161),
            unlocked() {return hasUpgrade(this.layer, 41)},
        },
        43: {
            title: "Friend Non-Static Booster III",
            description: "FLN Upgrade 42 Effect Boost itself (No Cap)",
            effect() {
                let Boost = new Decimal(1)
                Boost = Boost.times(upgradeEffect(this.layer, 42).add(20).log(20))
                if(hasUpgrade(this.layer, 44)) Boost = Boost.times(upgradeEffect(this.layer, 44))
                return Boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x FLN Upgrade 42 Effect"},
            tooltip: "Log20(FLN Upgrade 42 Effect + 20)",
            cost: new Decimal(2e161),
            unlocked() {return hasUpgrade(this.layer, 42)},
        },
        44: {
            title: "Friend Non-Static Booster IV",
            description: "FLN Upgrade 43 Effect Boost itself (No Cap)",
            effect() {
                let Boost = new Decimal(1)
                Boost = Boost.times(upgradeEffect(this.layer, 43).add(4).log(4))
                if(hasUpgrade(this.layer, 45)) Boost = Boost.times(upgradeEffect(this.layer, 45))
                return Boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x FLN Upgrade 43 Effect"},
            tooltip: "Log4(FLN Upgrade 43 Effect + 4)",
            cost: new Decimal(1e162),
            unlocked() {return hasUpgrade(this.layer, 43)},
        },
        45: {
            title: "Friend Non-Static Booster V",
            description: "FLN Upgrade 41 Effect Boost FLN Upgrade 44 Effect and FLN Upgrade 41 Also Boosts FLN",
            effect() {
                let Boost = new Decimal(1)
                Boost = Boost.times((upgradeEffect(this.layer, 41).add(1)).pow(0.9))

                Boost = new Decimal.min(Boost, new Decimal(1e100))
                return Boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x FLN Upgrade 44 Effect"},
            tooltip: "(FLN Upgrade 41 Effect + 1)^0.9",
            cost: new Decimal(1e162),
            unlocked() {return hasUpgrade(this.layer, 43)},
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasUpgrade('RAX', 23) || hasMilestone('XST', 4) || hasMilestone('TLG', 10)) auto = true
        return auto
    },
    update(diff) {
        if (player.points.gte(100000) && hasMilestone('TLG', 3)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 3)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
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
        if(hasUpgrade('TES', 22)) mult = mult.times(100)
        if(hasUpgrade('TES', 23)) mult = mult.times(10)
        if(hasUpgrade('SKIP', 11)) mult = mult.times(25)
        if(hasUpgrade('SKIP', 13)) mult = mult.times(25)

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "E", description: "E: Reset for TES", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetDescription: "Reset Skill For ",
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 4)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Mega Simple [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        if(hasMilestone('ITW', 13)) Gen = 1e10
        return Gen
    },
    buyables: {
        11: {
            title: "Infinite Ease",
            cost(x) {
                let Cost = new Decimal(1)
                Cost = new Decimal(5e18).times((x.pow(0.15)).add(1))
                if(hasMilestone('ITW', 6)) Cost = Cost.times(1000)
                return Cost
            },
            display() {
                let effect = ""
                effect = "x1.01 Skill Per Level Currently: x"+format(new Decimal(1.01).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(5e18).times((getBuyableAmount(this.layer, this.id).pow(0.15)).add(1)))+" Amount: "+format(getBuyableAmount(this.layer, this.id))+"/3,500"
                if(hasMilestone('ITW', 6)) effect = "x1.1 Skill Per Level Currently: x"+format(new Decimal(1.1).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(5e18).times((getBuyableAmount(this.layer, this.id).pow(0.15)).add(1)).times(1000))+" Amount: "+format(getBuyableAmount(this.layer, this.id))+"/3,500"
                return effect
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(3500),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
    },
    automate() {
        if(hasMilestone('TLG', 9)) {
            if(layers[this.layer].buyables[11].canAfford() && (new Decimal(getBuyableAmount(this.layer, 11)).lt(3500)) && layers[this.layer].buyables[11].unlocked() == true) {
                layers[this.layer].buyables[11].buy();
            };
        }
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
            tooltip() {
                let Tip = "log10(TES + 10)"

                if(hasUpgrade('TFD', 31)) Tip = "log10(TES + 10)^1.05"
                return Tip
            },
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
            tooltip: "log2(TES + 2)",
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
        21: {
            title: "Unlocker VI",
            description: "Just like in JUT (JJT Upgrade Tree [Roblox] Unlock a Buyable)",
            cost: new Decimal(7.5e18),
            unlocked() {return hasUpgrade('RAX', 25) || hasMilestone('XST', 4)},
        },
        22: {
            title: "Mega Booster V",
            description: "x100 TES and Skill",
            cost: new Decimal(2e19),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Mega Booster VI",
            description: "x10 TES and Skill",
            cost: new Decimal(1e22),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasUpgrade('RAX', 24) || hasMilestone('XST', 4) || hasMilestone('TLG', 10)) auto = true
        return auto
    },
    update(diff) {
        if (player.points.gte(1e9) && hasMilestone('TLG', 4)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 4)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
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
        if(getBuyableAmount(this.layer, 11).gte(1)) mult = mult.times(new Decimal(1.5).pow(getBuyableAmount(this.layer, 11)))
        if(hasUpgrade('A', 21)) mult = mult.times(3)
        if(hasUpgrade('A', 22)) mult = mult.times(5)
        if(hasUpgrade('A', 23)) mult = mult.times(upgradeEffect(this.layer, 23))
        if(hasUpgrade('A', 31)) mult = mult.times(200)
        if(hasUpgrade('A', 32)) mult = mult.times(500)
        if(hasUpgrade('A', 33)) mult = mult.times(750)
        if(hasUpgrade('A', 34)) mult = mult.times(1000)
        if(getBuyableAmount(this.layer, 13).gte(1)) mult = mult.times(getBuyableAmount(this.layer, 13).add(1))
        if(hasMilestone('TLG', 6)) mult = mult.times(25)
        if(hasUpgrade('ДА', 12)) mult = mult.times(5)
        if(hasUpgrade('ДА', 13)) mult = mult.times(2)
        if(hasUpgrade('ДА', 14)) mult = mult.times(4)
        if(hasUpgrade('ДА', 15)) mult = mult.times(10)
        if(hasUpgrade('ДА', 21)) mult = mult.times(11)
        if(hasUpgrade('ДА', 22)) mult = mult.times(5)
        if(getBuyableAmount('ДА', 11)) mult = mult.times(new Decimal(1.1).pow(getBuyableAmount('ДА', 11)))
        if(hasMilestone('XST', 0)) mult = mult.times(25)
        if(hasUpgrade('SKIP', 13)) mult = mult.times(25)
        if(getBuyableAmount(this.layer, 13).gte(1) && hasMilestone('ITW', 7)) mult = mult.times((new Decimal(2).pow(getBuyableAmount(this.layer, 13))).log(2).pow(-1))
        if(getBuyableAmount(this.layer, 13).gte(1) && hasMilestone('ITW', 7)) mult = mult.times(new Decimal(2).pow(getBuyableAmount(this.layer, 13)))
        if(hasMilestone('ITW', 8)) mult = mult.times(1e10)
        
        if(hasUpgrade('A', 24)) mult = mult.pow(upgradeEffect(this.layer, 24))
        if(getBuyableAmount(this.layer, 12).gte(1)) mult = mult.pow(new Decimal(1.01).pow(getBuyableAmount(this.layer, 12)))
        if(hasUpgrade('ДА', 24)) mult = mult.pow(1.01)
        if(hasUpgrade('ДА', 25)) mult = mult.pow(1.05)
        if(hasUpgrade('ДА', 31)) mult = mult.pow(1.1)
        if(hasUpgrade('ДА', 32)) mult = mult.pow(1.1)
        if(hasUpgrade('ДА', 33)) mult = mult.pow(1.15)
        if(hasMilestone('ITW', 8)) mult = mult.pow(1.2)
        
        if(hasUpgrade('ДА', 11)) mult = mult.times(upgradeEffect('ДА', 11).pow(-1))

        mult = new Decimal.max(mult, new Decimal(1))

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "A", description: "A: Reset for A", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    prestigeButtonReset() {return "Reset Skill For +"+format(layers[this.layer].gain)+" A"},
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 5)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Red (also a odd layer) [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        if(hasMilestone('ITW', 13)) Gen = 1e10
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
            display() {
                let effect = ""
                effect = "x2 Skill Per Level and 'A' by the log2 Currently: x"+format(new Decimal(2).pow(getBuyableAmount(this.layer, this.id)))+" And x"+format(getBuyableAmount(this.layer, this.id).add(1))+" Cost: "+format(new Decimal(1e33).times(new Decimal(1.1).pow((getBuyableAmount(this.layer, this.id).pow(1.5)).add(1))).times(upgradeEffect('ДА', 11).pow(-1))) + " Amount: " + format(getBuyableAmount(this.layer, this.id))
                if(hasMilestone('ITW', 7)) effect = "x2 Skill and 'A' Per Level Per Level Currently: x"+format(new Decimal(2).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(1e33).times(new Decimal(1.1).pow((getBuyableAmount(this.layer, this.id).pow(1.5)).add(1))).times(upgradeEffect('ДА', 11).pow(-1))) + " Amount: " + format(getBuyableAmount(this.layer, this.id))
                return effect
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() {return hasUpgrade(this.layer, 35)},
        },
    },
    automate() {
        if(hasUpgrade('RAX', 11) || hasMilestone('XST', 2) || hasMilestone('TLG', 10)) {
            if(layers[this.layer].buyables[11].canAfford() && layers[this.layer].buyables[11].unlocked() == true) {
                layers[this.layer].buyables[11].buy();
            };
        }
        if(hasUpgrade('RAX', 12) || hasMilestone('XST', 2) || hasMilestone('TLG', 10)) {
            if(layers[this.layer].buyables[12].canAfford() && layers[this.layer].buyables[12].unlocked() == true) {
                layers[this.layer].buyables[12].buy();
            };
        }
        if(hasUpgrade('RAX', 13) || hasMilestone('XST', 2) || hasMilestone('TLG', 10)) {
            if(layers[this.layer].buyables[13].canAfford() && layers[this.layer].buyables[13].unlocked() == true) {
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
            tooltip: "log2(A + 2) (Cap: 1e308)",
            cost: new Decimal(120000),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Red Booster VIII",
            description: "'A' Boost itself again (^)",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times((player[this.layer].points.add(10)).log10().add(10).log10())
                
                boost = new Decimal.min(boost, new Decimal(100))
                return boost
            },
            effectDisplay() {return "^" + format(upgradeEffect(this.layer, this.id)) + " 'A'"},
            tooltip: "log10(log10(A + 10) + 10)) (Cap: 100)",
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
            title: "Red Unlocker III",
            description: "Unlock the final Buyable",
            cost: new Decimal(1e33),
            unlocked() {return hasUpgrade(this.layer, 34)},
        },
        41: {
            title: "White Booster I",
            description: "x10,000 Skill",
            cost: new Decimal(1e40),
            unlocked() {return hasUpgrade(this.layer, 35)},
        },
        42: {
            title: "White Booster II",
            description: "x100 Skill",
            cost: new Decimal(5e53),
            unlocked() {return hasUpgrade('RAX', 25) || hasMilestone('XST', 4) || hasMilestone('TLG', 10)},
        },
        43: {
            title: "White Booster III",
            description: "x25 Skill",
            cost: new Decimal(7.5e53),
            unlocked() {return hasUpgrade(this.layer, 42)},
        },
        44: {
            title: "White Booster IV",
            description: "x10 Skill",
            cost: new Decimal(2.5e52),
            unlocked() {return hasUpgrade(this.layer, 43)},
        },
        45: {
            title: "White Booster V",
            description: "x2 Skill",
            cost: new Decimal(5e51),
            unlocked() {return hasUpgrade(this.layer, 44)},
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasUpgrade('RAX', 14) || hasMilestone('XST', 2) || hasMilestone('TLG', 10)) auto = true
        return auto
    },
    update(diff) {
        if (player.points.gte(1e12) && hasMilestone('TLG', 5)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 5)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
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
        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "ctrl+a", description: "ctrl+a : Reset for ДА", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetDescription: "Reset 'A' For ",
    onPrestige(gain) {
        if(hasUpgrade('MULTI', 14)) {

        }
        else {
          player.A.points = new Decimal(0)
        }
        if(hasUpgrade('ДА', 23)) {

        }
        else {
            player.A.upgrades = []
        }
    },
    resetsNothing() {return true},
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 6)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer [Row 1]",
            body() { return "Green exstention to Red (All upgrades are !Free!) [Row 1.5]" },
        },
    },
    autoPrestige() {return hasUpgrade('RAX', 22) || hasMilestone('XST', 4) || hasMilestone('TLG', 10)},
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
        if(hasUpgrade('RAX', 15) || hasMilestone('XST', 2) || hasMilestone('TLG', 10)) {
            if(layers[this.layer].buyables[11].canAfford() && layers[this.layer].buyables[11].unlocked() == true) {
                layers[this.layer].buyables[11].buy();
            };
        }
    },
    upgrades: {
        11: {
            title: "Green Red Nerfer I",
            description: "ДА Boosts 'A' and decreases buyable Costs (/) [After Powers] (also gain can only be atleast 1)",
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
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(3)
            },
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Green Red Booster II",
            description: "x2 'A' and ДА",
            cost: new Decimal(5),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(5)
            },
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Green Red Booster III",
            description: "x4 'A'",
            cost: new Decimal(6),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(6)
            },
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Green Red Booster IV",
            description: "x10 'A'",
            cost: new Decimal(8),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(8)
            },
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Green Red Booster V",
            description: "x11 'A'",
            cost: new Decimal(11),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(11)
            },
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Green Red Booster VI",
            description: "x5 'A'",
            cost: new Decimal(14),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(14)
            },
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Green Unlocker I",
            description: "Unlock a buyable and ДА doesn't Reset 'A' Upgrades",
            cost: new Decimal(17),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(17)
            },
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Green Red Super Booster I",
            description: "^1.01 'A'",
            cost: new Decimal(18),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(18)
            },
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Green Red Super Booster II",
            description: "^1.05 'A'",
            cost: new Decimal(19),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(19)
            },
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
        31: {
            title: "Green Red Super Booster III",
            description: "^1.1 'A'",
            cost: new Decimal(24),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(24)
            },
            unlocked() {return hasUpgrade(this.layer, 25)},
        },
        32: {
            title: "Green Red Super Booster IV",
            description: "^1.1 'A' again",
            cost: new Decimal(34),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(34)
            },
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
        33: {
            title: "Green Red Super Booster V",
            description: "^1.15 'A'",
            cost: new Decimal(68),
            onPurchase() {
                player[this.layer].points = player[this.layer].points.add(68)
            },
            unlocked() {return hasMilestone('XST', 5)},
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasUpgrade('RAX', 22) || hasMilestone('XST', 4) || hasMilestone('TLG', 10)) auto = true
        return auto
    },
    update(diff) {
        if (player.A.points.gte(1e42) && hasMilestone('TLG', 6)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 6)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
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
        if(hasMilestone(this.layer, 7)) mult = mult.times(new Decimal(10).tetrate(player[this.layer].points.pow(0.1)))

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1,
    hotkeys: [
        {key: "X", description: "X: Reset for Exist", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    onPrestige(gain) {
        if(hasMilestone('TLG', 11) &! hasMilestone('ITW', 9)) {
            player.points = new Decimal(0)
            player.TFD.points = new Decimal(0)
            player.Neg.points = new Decimal(0)
            player.UIP.points = new Decimal(0)
            player.$.points = new Decimal(0)
            player.FLN.points = new Decimal(0)
            player.TES.points = new Decimal(0)
            player.A.points = new Decimal(0)
            player.ДА.points = new Decimal(0)
            if(hasUpgrade('RSF', 14)) {

            }
            else {
                player.RAX.points = new Decimal(0)
                player.SKIP.points = new Decimal(0)
                player.MULTI.points = new Decimal(0)
                player.RSF.points = new Decimal(0)
            }
            if(hasMilestone('ITW', 9)) {

            }
            else {
                addBuyables('UIP', 11, -getBuyableAmount('UIP', 11))
                addBuyables('UIP', 12, -getBuyableAmount('UIP', 12))
                addBuyables('UIP', 13, -getBuyableAmount('UIP', 13))
                addBuyables('TES', 11, -getBuyableAmount('TES', 11))
                addBuyables('A', 11, -getBuyableAmount('A', 11))
                addBuyables('A', 12, -getBuyableAmount('A', 12))
                addBuyables('A', 13, -getBuyableAmount('A', 13))
            }
            if(hasUpgrade('RSF', 14)) {

            }
            else {
                addBuyables('MULTI', 11, -getBuyableAmount('MULTI', 11))
            }
        };
    },
    resetsNothing() {return hasMilestone('TLG', 11)},
    autoPrestige() {return hasMilestone('TLG', 11)},
    resetDescription: "Reset Skill and Row 1 For ",
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 7)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
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
            effectDescription: "x1,000,000 Skill",
            done() { return player[this.layer].points.gte(2) },
            unlocked() {return hasMilestone(this.layer, 0)}
        },
        2: {
            requirementDescription: "3 Exist Power",
            effectDescription: "Keep the effect of the First Row Relax Upgrades",
            done() {
                let Done = false
                if(player[this.layer].points.gte(3) && hasUpgrade('RAX', 21)) Done = true
                return Done
            },
            unlocked() {
                let notlocked = false
                if(hasUpgrade('RAX', 21) || hasMilestone(this.layer, this.id)) notlocked = true
                return notlocked
            }
        },
        3: {
            requirementDescription: "5 Exist Power",
            effectDescription: "Unlock More Relax Upgrades",
            done() {
                let Done = false
                if(player[this.layer].points.gte(5) && hasMilestone(this.layer, 2)) Done = true
                return Done
            },
            unlocked() {return hasMilestone(this.layer, 2)}
        },
        4: {
            requirementDescription: "6 Exist Power",
            effectDescription: "Keep the effect of the 2nd Row Relax Upgrades",
            done() {
                let Done = false
                if(player[this.layer].points.gte(6) && hasUpgrade('SKIP', 15)) Done = true
                return Done
            },
            unlocked() {
                let notlocked = false
                if(hasUpgrade('SKIP', 25) || hasMilestone(this.layer, this.id)) notlocked = true
                return notlocked
            }
        },
        5: {
            requirementDescription: "7 Exist Power",
            effectDescription: "10^Exist Power x Skill and unlock a ДА Upgrade",
            tooltip() {return format(new Decimal(10).pow(player[this.layer].points))+"x Skill"},
            done() { return player[this.layer].points.gte(7) && hasMilestone(this.layer, 4) },
            unlocked() {return hasMilestone(this.layer, 4)}
        },
        6: {
            requirementDescription: "17 Exist Power",
            effectDescription: "AutoBuy the MULTI Buyable.",
            done() { return player[this.layer].points.gte(17) && hasMilestone('ITW', 9) },
            unlocked() {return hasMilestone('ITW', 9)}
        },
        7: {
            requirementDescription: "18 Exist Power",
            effectDescription: "10^^(Exist^0.1) Decreases Requirement of Exist",
            tooltip() {return "/"+format(new Decimal(10).tetrate(player[this.layer].points.pow(0.1)))+" Exist Requirement"},
            done() { return player[this.layer].points.gte(18) },
            unlocked() {return hasMilestone(this.layer, 6)}
        },
    },
    upgrades: {
        11: {
            title: "Keeper I",
            description: "Keep Resful Upgrade 11 Effect",
            cost: new Decimal(8),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade('RSF', 11)},
        },
        12: {
            title: "Keeper II",
            description: "Keep Resful Upgrade 12 Effect",
            cost: new Decimal(8),
            pay: new Decimal(0),
            unlocked() {return hasUpgrade('RSF', 12)},
        },
    },
    update(diff) {
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 7)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
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
        if(hasUpgrade('SKIP', 13)) mult = mult.times(25)

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "L", description: "L: Reset for Relax", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetDescription: "Reset Skill For ",
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 8)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "QoL layer Nice [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 0
        if(hasUpgrade('RSF', 11) || hasUpgrade('XST', 11) || hasMilestone('TLG', 14)) Gen = 1
        if(hasMilestone('ITW', 13)) Gen = 1e10
        return Gen
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
        21: {
            title: "Unlock V",
            description: "Unlock More XST Milestones",
            unlocked() {
                let notlocked = false
                if(hasUpgrade(this.layer, 11) && hasUpgrade(this.layer, 12) && hasUpgrade(this.layer, 13) && hasUpgrade(this.layer, 14) && hasUpgrade(this.layer, 15)) notlocked = true
                return notlocked
            },
            cost: new Decimal(50000),
        },
        22: {
            title: "Qol VI",
            description: "AutoBuy ДА Upgrades and Auto Reset",
            cost: new Decimal(500000000),
            unlocked() {return hasMilestone('XST', 3)}
        },
        23: {
            title: "Qol VII",
            description: "AutoBuy FLN Upgrades",
            cost: new Decimal(500000000),
            unlocked() {return hasMilestone('XST', 3)}
        },
        24: {
            title: "Qol VIII",
            description: "AutoBuy TES Upgrades",
            cost: new Decimal(500000000),
            unlocked() {return hasMilestone('XST', 3)}
        },
        25: {
            title: "Unlock VI",
            description: "Unlock More Upgrades",
            unlocked() {
                let notlocked = false
                if(hasUpgrade(this.layer, 22) && hasUpgrade(this.layer, 23) && hasUpgrade(this.layer, 24)) notlocked = true
                return notlocked
            },
            cost: new Decimal(1e9),
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasMilestone('ITW', 10)) auto = true
        return auto
    },
    update(diff) {
        if (player.points.gte(1e125) && hasMilestone('TLG', 8)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 8)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
        return inactive
    },
})

addLayer("SKIP", {
    name: "Skip",
    symbol: "SKIP",
    position: 9,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#e1ac65",
    requires: new Decimal(1e140),
    resource: "Skip",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)
        if(hasUpgrade('SKIP', 13)) mult = mult.times(25)
        
        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "S", description: "S: Reset for Skip", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetDescription: "Reset Skill For ",
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 9)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Skipped [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 0
        if(hasUpgrade('RSF', 12) || hasUpgrade('XST', 12) || hasMilestone('TLG', 14)) Gen = 1
        if(hasMilestone('ITW', 13)) Gen = 1e10
        return Gen
    },
    update(diff) {
        if (player.points.gte(1e140) && hasMilestone('TLG', 9)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },
    upgrades: {
        11: {
            title: "Row 1",
            description: "x25 TES",
            cost: new Decimal(0.05),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
        12: {
            title: "Inflaition",
            description: "x1e10 Skill",
            cost: new Decimal(1000000),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Inflaition II",
            description: "x25 TFD, Neg, UIP, FLN->'A', Relax and Skip",
            cost: new Decimal(5e18),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Inflai.. No Just End this Row",
            description: "NO BOOSTS 4 U",
            cost: new Decimal(2e22),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "FINE",
            description: 'UNLOCK A "USELESS" XST MILESTONE THERE!',
            cost: new Decimal(5e24),
            unlocked() {return hasUpgrade(this.layer, 25)},
        },
        21: {
            title: "Skipped",
            description: "x10 Skill",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        22: {
            title: "We Skipped A Upgrade",
            description: "x5 Skill",
            cost: new Decimal(5),
        },
        23: {
            title: "Back on Track",
            description: "x10 Skill",
            cost: new Decimal(250),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        24: {
            title: "Wait we skipped a row",
            description: "x2 Skill",
            cost: new Decimal(5000),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "We are Back",
            description: "x25 Skill",
            cost: new Decimal(5e22),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasMilestone('ITW', 10)) auto = true
        return auto
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 9)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
        return inactive
    },
})

addLayer("MULTI", {
    name: "Multiplier",
    symbol: "MULTI",
    position: 10,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(333000),
    resource: "Multiplier",
    baseResource: "Ca$h",
    baseAmount() {return player.$.points},
    type: "static",
    exponent: 0.5,
    base: 1.1,
    gainMult() {
        mult = new Decimal(0)
        if(hasUpgrade(this.layer, 11)) mult = new Decimal(1)
        
        if(hasUpgrade(this.layer, 12)) mult = mult.times(new Decimal(1.5).pow(-1))
        if(hasUpgrade(this.layer, 13)) mult = mult.times(new Decimal(2.5).pow(-1))
        if(hasUpgrade(this.layer, 14)) mult = mult.times(new Decimal(5).pow(-1))
        if(hasUpgrade(this.layer, 15)) mult = mult.times(new Decimal(3.33).pow(-1))
        if(getBuyableAmount(this.layer, 11).gte(1)) mult = mult.times(((player[this.layer].points.pow(0.05)).pow(getBuyableAmount(this.layer, 11))).pow(-1))
        if(hasMilestone('ITW', 12)) mult = mult.times(new Decimal(1e10).pow(-1))

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "M", description: "M: Reset for Multiplier", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetsNothing: true,
    onPrestige(gain) {
        if(hasUpgrade('RSF', 14)) {

        }
        else {
           player.$.points = new Decimal(0) 
        }
    },
    canBuyMax() {return hasUpgrade(this.layer, 13)},
    prestigeButtonReset() {return "Reset Ca$h For +"+format(layers[this.layer].gain)+" Multi"},
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 10)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Multiplier [Row 1.5]" },
        },
    },
    passiveGeneration() {
        let Gen = 0
        if(hasMilestone('ITW', 13)) Gen = 1e10
        return Gen
    },
    autoPrestige() {
        let auto = false
        if(hasUpgrade(this.layer, 15) || hasMilestone('TLG', 14)) auto = true
        if(hasMilestone('TLG', 16)) auto = false
        return auto
    },
    update(diff) {
        if (player.$.points.gte(333000) && hasMilestone('TLG', 10)) player[this.layer].unlocked = true
    },
    buyables: {
        11: {
            title() {return "Self Booster I (Free) "+format(getBuyableAmount(this.layer, this.id))+"/50"},
            cost(x) { return new Decimal(1000).times(new Decimal(1.2).pow((x.pow(1.2)).add(1))) },
            display() { return "/"+format(player[this.layer].points.pow(0.05))+" (MULTI^0.05) Multiplier Requirement Per Level Currently: /"+format((player[this.layer].points.pow(0.05)).pow(getBuyableAmount(this.layer, this.id)))+" Cost: "+format(new Decimal(1000).times(new Decimal(1.2).pow((getBuyableAmount(this.layer, this.id).pow(1.2)).add(1)))) },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            purchaseLimit: new Decimal(50),
            unlocked() {return hasUpgrade('RSF', 13)},
        },
    },
    automate() {
        if(hasMilestone('XST', 6)) {
            if(layers[this.layer].buyables[11].canAfford() && new Decimal(getBuyableAmount(this.layer, 11)).lt(50) && layers[this.layer].buyables[11].unlocked() == true) {
                layers[this.layer].buyables[11].buy()
            }
        }
    },
    upgrades: {
        11: {
            title: "Booster again",
            description: "Multi Boost Skill and Devide Ca$h Requirement (X, /)",
            effect() {
                let boost = new Decimal(1)
                boost = boost.times(player[this.layer].points.add(1))
                return boost
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x Skill and / Ca$h Requirement"},
            tooltip: "(Multiplier + 1) [Basic i know]",
            cost: new Decimal(0),
        },
        12: {
            title: "Go Have Fun",
            description: "/1.5 Multiplier Requirement",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Average Boost I",
            description: "/2.5 Multiplier Requirement and unlock Maxing",
            cost: new Decimal(80),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Average Boost II",
            description: "/5 Multiplier Requirement and ДА Doesn't Reset 'A'",
            cost: new Decimal(300),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Average Boost III",
            description: "/3.33 Multiplier Requirement and AutoGain Multiplier",
            cost: new Decimal(1000),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasMilestone('ITW', 10)) auto = true
        return auto
    },
    

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 10)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
        return inactive
    },
})

addLayer("RSF", {
    name: "Restful",
    symbol: "RSF",
    position: 11,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#006e00",
    requires: new Decimal(1e170),
    resource: "Restful",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "M", description: "M: Reset for Multiplier", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetsNothing: true,
    onPrestige(gain) {
        player.$.points = new Decimal(0)
    },
    canBuyMax() {return hasUpgrade(this.layer, 13)},
    prestigeButtonReset() {return "Reset Skill For +"+format(layers[this.layer].gain)+" Multi"},
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 11)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "ZZZ.. Oh [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 1
        if(hasMilestone('ITW', 13)) Gen = 1e10
        return Gen
    },
    update(diff) {
        if (player.points.gte(1e170) && hasMilestone('TLG', 11)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },
    upgrades: {
        11: {
            title: "What PRICE!",
            description: "Start Gaining 100% of Restful and Unlock a Exist Upgrade (All Free BTW)",
            cost: new Decimal(1e33),
        },
        12: {
            title: "Automation II",
            description: "Start Gaining 100% of Skip and Unlock a Exist Upgrade",
            cost: new Decimal(1e35),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Big Unlock",
            description: "Unlock a MULTI Buyable.",
            cost: new Decimal(1e35),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Big QoL I",
            description: "MULTI dosn't Reset Ca$h and Keep all The Buyables and Amounts of Currencies past Exist on Exist and x10,000,000 Skill",
            cost: new Decimal(3e38),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasMilestone('ITW', 10)) auto = true
        if(hasMilestone('TLG', 16)) inactive = true
        return auto
    },
    

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 11)) inactive = false
        return inactive
    },
})

addLayer("IF.", {
    name: "Infinite Dot",
    symbol: "IF.",
    position: 12,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ee9999",
    requires: new Decimal(1.79e308),
    resource: "Ifinite Dot",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.05,
    gainMult() {
        mult = new Decimal(1)

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "F", description: "F: Reset for Infinite Dot", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 12)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Infinity [Row 1]" },
        },
    },
    passiveGeneration() {
        let Gen = 0
        if(hasMilestone('TLG', 14)) Gen = 1
        if(hasMilestone('ITW', 13)) Gen = 1e10
        return Gen
    },
    update(diff) {
        if (player.points.gte(1.79e308) && hasMilestone('TLG', 12)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },
    upgrades: {
        11: {
            title: "Infinity And Beyond",
            description: "x1e150 Skill",
            cost: new Decimal(1),
        },
        12: {
            title: "Infinity And Beyond IV",
            description: "x1e150 Skill again",
            cost: new Decimal(1e90),
            unlocked() {return hasMilestone('ITW', 14)}
        },
        13: {
            title: "Infinity And Beyond V",
            description: "x1e50 Skill again",
            cost: new Decimal(1e105),
            unlocked() {return hasUpgrade(this.layer, 12)}
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasMilestone('TLG', 15)) auto = true
        return auto
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 12)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
        return inactive
    },
})

addLayer("IFS", {
    name: "Infinite Esay",
    symbol: "IFS",
    position: 13,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#73ff22",
    requires: new Decimal(1000),
    resource: "Ifinite Easy",
    baseResource: "Infinite Dot",
    baseAmount() {return player['IF.'].points},
    type: "normal",
    exponent: 0.05,
    gainMult() {
        mult = new Decimal(1)

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "Y", description: "Y: Reset for Infinite Easy", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    resetsNothing: true,
    onPrestige(gain) {
        player['IF.'].points = new Decimal(0)
    },
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 13)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Infinity II [Row 1.5]" },
        },
    },
    passiveGeneration() {
        let Gen = 0
        if(hasMilestone('TLG', 14)) Gen = 1
        return Gen
    },
    update(diff) {
        if (player['IF.'].points.gte(1000) && hasMilestone('TLG', 13)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },
    upgrades: {
        11: {
            title: "Infinity And Beyond II",
            description: "x1e100 Skill",
            cost: new Decimal(1),
        },
        12: {
            title: "Infinity And Beyond VI",
            description: "x1e150 Skill again",
            cost: new Decimal(1000000),
            unlocked() {return hasMilestone('ITW', 15)}
        },
    },
    autoUpgrade() {
        let auto = false
        if(hasMilestone('TLG', 15)) auto = true
        return auto
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 13)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
        return inactive
    },
})

addLayer("IFT", {
    name: "Infinity",
    symbol: "IFT",
    position: 1,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#a000ff",
    requires: new Decimal('e400'),
    resource: "Ifinity",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.05,
    gainMult() {
        mult = new Decimal(1)
        if(hasUpgrade(this.layer, 12)) mult = mult.times(1e25)
        if(hasUpgrade(this.layer, 13)) mult = mult.times(1e50)
        if(hasUpgrade(this.layer, 14)) mult = mult.times(1e200)

        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 1,
    hotkeys: [
        {key: "ctrl+I", description: "ctrl+I: Reset for Infinite", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 14)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Infinity Real [Row 2]" },
        },
    },
    passiveGeneration() {
        let Gen = 0
        if(hasUpgrade(this.layer, 12)) Gen = 1
        return Gen
    },
    update(diff) {
        if (player.points.gte(new Decimal('e400')) && hasMilestone('TLG', 14)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },
    upgrades: {
        11: {
            title: "Infinity And Beyond III",
            description: "x1e200 Skill",
            cost: new Decimal(1),
        },
        12: {
            title: "Infinity",
            description: "Gain 100% Of IFT",
            cost: new Decimal(1e100),
            unlocked() {return hasMilestone('ITW', 16)},
        },
        13: {
            title: "And",
            description: "x1e25 Skill and IFT",
            cost: new Decimal(1e105),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Beyond",
            description: "x1e50 Skill and IFT",
            cost: new Decimal(1e150),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "To Infinity and Beyond Final",
            description: "x1e200 Skill and IFT",
            cost: new Decimal(1e175),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 14)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
        return inactive
    },
})

addLayer("ITW", {
    name: "Instant Win",
    symbol: "ITW",
    position: 0,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#4747ff",
    requires: new Decimal('e600'),
    resource: "Instant Win",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "static",
    base: 1.02e100,
    exponent() {
        let exponental = new Decimal(1)
        if(hasMilestone(this.layer, 9)) exponental = exponental.times(player[this.layer].points.add(-8).pow(0.01))
        if(hasMilestone(this.layer, 14)) exponental = exponental.times(player[this.layer].points.add(-8).pow(0.02))
        return exponental
    },
    gainMult() {
        mult = new Decimal(1)
        if(hasMilestone(this.layer, 11)) mult = mult.times(new Decimal('e10000').pow(-1))
        if(hasMilestone(this.layer, 12)) mult = mult.times(new Decimal('e10000'))
        
        if(hasMilestone(this.layer, 17)) mult = new Decimal(0)
        if(hasMilestone('TLG', 16)) mult = new Decimal(0)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 2,
    hotkeys: [
        {key: "W", description: "W: Reset for Instant Win", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {
        let vis = false
        if(hasMilestone('TLG', 15)) vis = true
        if(hasMilestone('TLG', 16)) vis = false
        return vis
    },
    effectDescription() {
        let effect = "Winning the.. game?"
        if(hasMilestone(this.layer, 9)) effect = "Softcap I (Lol)"
        if(hasMilestone(this.layer, 14)) effect = "Softcap II (Oof)"
        if(hasMilestone(this.layer, 17)) effect = "Cap (F)"
        return effect
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Class Negativity 'FINAL' [Row 3!]" },
        },
    },
    update(diff) {
        if (player.points.gte(new Decimal('e600')) && hasMilestone('TLG', 15)) player[this.layer].unlocked = true
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = false
    },
    milestones: {
        0: {
            requirementDescription: "First Win",
            effectDescription: "Unlock More TFD Upgrades and x 1e10 Skill. (You don't have the will. Right?)",
            done() { return player[this.layer].points.gte(1) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        }, 
        1: {
            requirementDescription: "Lower Win",
            effectDescription: "XST Doesn't Reset Buyables and x 1e10 Skill. (Still Small QoL.)",
            done() { return player[this.layer].points.gte(2) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        2: {
            requirementDescription: "Negitive Win",
            effectDescription: "x1e75 Skill (Big but not large)",
            done() { return player[this.layer].points.gte(3) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        3: {
            requirementDescription: "Unimpossible Win",
            effectDescription: "/1e100 UIP buyable Costs and x1e100 Skill Gain. (Not Impossible.)",
            done() { return player[this.layer].points.gte(4) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        4: {
            requirementDescription: "Money Win",
            effectDescription: "Unlock a Ca$h Milestone and /1e10 Ca$h Requirement and x1e10 Skill. (Millions so What?)",
            done() { return player[this.layer].points.gte(5) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        5: {
            requirementDescription: "Friendly Win",
            effectDescription: "Unlock More FLN Upgrades and x1e10 Skill (Friends are fine.)",
            done() { return player[this.layer].points.gte(6) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        6: {
            requirementDescription: "Eased Win",
            effectDescription: "Make the TES Buyable Base +0.09 Stronger but x1,000 the Cost and /1e15 Skill (The ease is odd?)",
            done() { return player[this.layer].points.gte(7) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        7: {
            requirementDescription: "'A' Win",
            effectDescription: "Change the Pink Booster effect and x1e10 Skill (Effects are main.)",
            done() { return player[this.layer].points.gte(8) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        8: {
            requirementDescription: "ДА Win",
            effectDescription: "x1e25 'A' and ^1.2 'A' (This is the End.)",
            done() { return player[this.layer].points.gte(9) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        9: {
            requirementDescription: "Exist Win",
            effectDescription: "Unlock More Exist Milestones and Exist Resets Nothing (SoftCap Time.)",
            done() { return player[this.layer].points.gte(10) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        10: {
            requirementDescription: "Relax Win",
            effectDescription: "Autobuy Ca$h, Relax->Restful Upgrades (QoL again Not Bad.)",
            done() { return player[this.layer].points.gte(11) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        11: {
            requirementDescription: "Skip Win",
            effectDescription: "/1e10,000 ITW Requirement (Skipping to the next.. Intresting.)",
            done() { return player[this.layer].points.gte(12) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        12: {
            requirementDescription: "Multiplier Win",
            effectDescription: "x1e10,000 ITW Requirement and /1e10 Multiplier Requirement (Undid the Skipping. Ok?)",
            done() { return player[this.layer].points.gte(13) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        13: {
            requirementDescription: "Restful Win",
            effectDescription: "Make the Autogains TFD->IFS 1e12% (Making the reset Useless Now.)",
            done() { return player[this.layer].points.gte(14) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        14: {
            requirementDescription: "Infinite Dot Win",
            effectDescription: "Unlock More IF. Upgrades (To Infinity and Beyond)",
            done() { return player[this.layer].points.gte(15) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        15: {
            requirementDescription: "Infinite Easy Win",
            effectDescription: "Unlock More IFS Upgrades (To Infinity and Beyond again!?)",
            done() { return player[this.layer].points.gte(16) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        16: {
            requirementDescription: "Infinity Win",
            effectDescription: "Unlock More IFT Upgrades (To Infinity and Beyond part 3)",
            done() { return player[this.layer].points.gte(17) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        17: {
            requirementDescription: "Winned Win",
            effectDescription: "x1e2000 Skill",
            done() { return player[this.layer].points.gte(18) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
    },

    deactivated() {
        let inactive = true
        if(hasMilestone("TLG", 15)) inactive = false
        if(hasMilestone('TLG', 16)) inactive = true
        return inactive
    },
})
