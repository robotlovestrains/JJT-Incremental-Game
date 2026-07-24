addLayer("CNT", {
    name: "Class Negative",
    symbol: "CNT",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#686868",
    requires: new Decimal(10),
    resource: "Class Negitive Power",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.3,
    gainMult() {
        mult = new Decimal(1)
        if(hasUpgrade(this.layer, 21)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 22)) mult = mult.times(1.5)
        if(hasUpgrade(this.layer, 23)) mult = mult.times(3)
        if(hasUpgrade(this.layer, 24)) mult = mult.times(4)
        if(hasUpgrade(this.layer, 25)) mult = mult.times(11)
        if(hasUpgrade(this.layer, 32)) mult = mult.times(upgradeEffect(this.layer, 32))
        if(hasMilestone('S', 3)) mult = mult.times(2)
        if(hasUpgrade(this.layer, 34)) mult = mult.times(20)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    layerShown() {return hasMilestone('TLG', 16)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Class Negative layer You sacrifced your layers for this are you happy? [Row 1]" },
        },
    },
    resetDescription: "Reset Skill For ",
    passiveGeneration() {
        let Gen = 0
        if(hasMilestone(this.layer, 0)) Gen = 0.1
        if(hasMilestone(this.layer, 2)) Gen += 0.4
        if(hasMilestone('S', 3)) Gen += 0.5
        return Gen
    },
    update(diff) {
        if (hasMilestone('TLG', 16)) player[this.layer].unlocked = true
    },
    milestones: {
        0: {
            requirementDescription: "25 Class Negative Power",
            effectDescription: "Gain 10% of CNP/s",
            done() { return player[this.layer].points.gte(25) },
        },
        1: {
            requirementDescription: "45 Class Negative Power",
            effectDescription: "Unlock More CNT Upgrades",
            done() { return player[this.layer].points.gte(45) },
        },
        2: {
            requirementDescription: "50,000 Class Negative Power",
            effectDescription: "Gan 40% more of CMP/s",
            done() { return player[this.layer].points.gte(50000) },
        },
        3: {
            requirementDescription: "250,000 Class Negative Power",
            effectDescription: "Unlock More Upgrades",
            done() { return player[this.layer].points.gte(250000) },
        },
    },
    upgrades: {
        11: {
            title: "Rebirth Booster I",
            description: "x2 Skill Simple",
            cost: new Decimal(1),
        },
        12: {
            title: "Rebirth Booster II",
            description: "x3 Skill Basic.",
            cost: new Decimal(1),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Rebirth Booster III",
            description: "x2.5 Skill",
            cost: new Decimal(2),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Rebirth Booster IV",
            description: "x3.14 Skill",
            cost: new Decimal(5),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Rebirth Booster V",
            description: "xPi Skill",
            cost: new Decimal(15),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Rebirth Booster VI",
            description: "x2 CNP",
            cost: new Decimal(50),
            unlocked() {return hasMilestone(this.layer, 1)},
        },
        22: {
            title: "Rebirth Booster VII",
            description: "x1.5 CNP and Skill",
            cost: new Decimal(75),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Rebirth Booster VIII",
            description: "x5 Skill and x3 CNP",
            cost: new Decimal(100),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Rebirth Booster IX",
            description: "x10 Skill and x4 CNP",
            cost: new Decimal(500),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
        25: {
            title: "Rebirth Booster X",
            description: "x11 Skill and CNP",
            cost: new Decimal(3333),
            unlocked() {return hasUpgrade(this.layer, 24)},
        },
        31: {
            title: "Rebirth Non-Static Booster I",
            description: "CNP Boost Skill",
            effect() {
                let effect = new Decimal(1)
                effect = effect.times((player[this.layer].points.pow(0.1).add(1)).log10().add(1))
                return effect
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x Skill"},
            tooltip: "log10(CNP^0.1 + 1) + 1 (No Cap)",
            cost: new Decimal(300000),
            unlocked() {return hasMilestone(this.layer, 3)},
        },
        32: {
            title: "Rebirth Non-Static Booster II",
            description: "CNP Boost itself",
            effect() {
                let effect = new Decimal(1)
                effect = effect.times((player[this.layer].points.pow(5).add(1)).log(1e10).add(1))
                return effect
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x CNP"},
            tooltip: "log1e10(CNP^5 + 1) + 1 (No Cap)",
            cost: new Decimal(600000),
            unlocked() {return hasUpgrade(this.layer, 31)},
        },
        33: {
            title: "Rebirth Unlocker I",
            description: "Unlock Ca$h again",
            cost: new Decimal(1000000),
            unlocked() {return hasUpgrade(this.layer, 32)},
        },
        34: {
            title: "Rebirth Booster XI",
            description: "x20 Skill and CNP",
            cost: new Decimal(1e9),
            unlocked() {return hasMilestone('S', 6)},
        },
        35: {
            title: "Rebirth Unlocker II",
            description: "Unlock Mult again",
            cost: new Decimal(2e10),
            unlocked() {return hasUpgrade(this.layer, 34)},
        },
        41: {
            title: "Rebirthed Ultra Booster I",
            description: "x1e25 Skill",
            cost: new Decimal(1e15),
            unlocked() {return hasUpgrade('MULT', 15)},
        },
        42: {
            title: "Rebirthed Ultra Booster II",
            description: "x1e40 Skill",
            cost: new Decimal(1e23),
            unlocked() {return hasUpgrade(this.layer, 41)},
        },
        43: {
            title: "Rebirthed Ultra Booster III",
            description: "x1e75 Skill",
            cost: new Decimal(1e35),
            unlocked() {return hasUpgrade(this.layer, 42)},
        },
        44: {
            title: "Rebirthed Ultra Booster IV",
            description: "x1e150 Skill",
            cost: new Decimal(1e58),
            unlocked() {return hasUpgrade(this.layer, 43)},
        },
        45: {
            title: "Rebirthed Ultra Booster Final",
            description: "x1e250 Skill and Unlock More Multi Upgrades.",
            cost: new Decimal(5e102),
            unlocked() {return hasUpgrade(this.layer, 44)},
        },
    },

    deactivated() {
        let inactive = true
        if(hasMilestone('TLG', 16)) inactive = false
        return inactive
    },
})

addLayer("S", {
    name: "Ca$h",
    symbol: "$",
    position: 1,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#009600",
    requires: new Decimal(1000000),
    resource: "Ca$h",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "static",
    exponent: 0.5,
    gainMult() {
        mult = new Decimal(1)
        if(hasMilestone(this.layer, 8)) mult = mult.times(new Decimal(1e308).pow(-1))
        if(hasMilestone(this.layer, 9)) mult = mult.times(new Decimal(1e308).pow(-1))
        if(hasUpgrade('MULT', 23)) mult = mult.times(upgradeEffect('MULT', 14).pow(-1))
        
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "C", description: "C: Reset for Ca$h", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    canBuyMax() {
        let maxing = false
        if(hasMilestone(this.layer, 5)) maxing = true
        return maxing
    },
    resetsNothing() {
        let reset = false
        if(hasMilestone(this.layer, 6)) reset = true
        return reset
    },
    autoPrestige() {
        let Auto = false
        if(hasMilestone('MULT', 1)) Auto = true
        return Auto
    },
    layerShown() {
        let vis = false
        if(hasUpgrade('CNT', 33)) vis = true
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Money again [Row 1]" },
        },
    },
    resetDescription: "Reset Skill For ",
    milestones: {
        0: {
            requirementDescription: "1 Ca$h",
            effectDescription: "x2 Skill",
            done() { return player[this.layer].points.gte(1) },
        },
        1: {
            requirementDescription: "2 Ca$h",
            effectDescription: "x3 Skill",
            done() { return player[this.layer].points.gte(2) },
            unlocked() {return hasMilestone(this.layer, 0)},
        },
        2: {
            requirementDescription: "5 Ca$h",
            effectDescription: "x1.5 Skill",
            done() { return player[this.layer].points.gte(5) },
            unlocked() {return hasMilestone(this.layer, 1)},
        },
        3: {
            requirementDescription: "12 Ca$h",
            effectDescription: "x2 CNP and Gain 50% more CNP/s",
            done() { return player[this.layer].points.gte(12) },
            unlocked() {return hasMilestone(this.layer, 2)},
        },
        4: {
            requirementDescription: "P2W",
            effectDescription: "Cash Boost Skill [[$^2 + 1] (x)] (Cap: 1,000,000)",
            tooltip() {
                let Increaser = new Decimal(0)
                if(hasMilestone(this.layer, 7)) Increaser = Increaser.add(new Decimal(10).pow((player[this.layer].points).log(2)))
                return format(new Decimal.min(player[this.layer].points.pow(2).add(1), new Decimal(1000000).add(Increaser)))+"x Skill"
            },
            done() { return player[this.layer].points.gte(20) },
            unlocked() {return hasMilestone(this.layer, 3)},
        },
        5: {
            requirementDescription: "50 Ca$h",
            effectDescription: "Buy Max Ca$h",
            done() { return player[this.layer].points.gte(50) },
            unlocked() {return hasMilestone(this.layer, 4)},
        },
        6: {
            requirementDescription: "500 Ca$h",
            effectDescription: "Ca$h Resets Nothing and Unlock More CNT Upgrades",
            done() { return player[this.layer].points.gte(500) },
            unlocked() {return hasMilestone(this.layer, 5)},
        },
        7: {
            requirementDescription: "P2W More",
            effectDescription: "Ca$h Boost Ca$h Milestone 4 Cap [[10^log2($)] (+)] (No Cap)",
            tooltip() {return "+"+format(new Decimal(10).pow((player[this.layer].points).log(2)))+" Ca$h Milestone 4 Cap"},
            done() { return hasUpgrade('MSL', 11) },
            unlocked() {return hasUpgrade('MSL', 11)},
        },
        8: {
            requirementDescription: "4.5 Mil",
            effectDescription: "/1e308 Ca$h Requirement",
            done() { return player[this.layer].points.gte(4500000) && hasUpgrade('MSL', 11) },
            unlocked() {return hasMilestone(this.layer, 7)},
        },
        9: {
            requirementDescription: "9 Mil",
            effectDescription: "/1e308 Ca$h Requirement again",
            done() { return player[this.layer].points.gte(9000000) },
            unlocked() {return hasMilestone(this.layer, 8)},
        },
        10: {
            requirementDescription: "15 Mil",
            effectDescription: "Unlock More MULTI Upgrades",
            done() { return player[this.layer].points.gte(15000000) },
            unlocked() {return hasMilestone(this.layer, 9)},
        },
    },
    update(diff) {
        if(player.points.gte(1000000) && hasUpgrade('CNT', 33)) player[this.layer].unlocked = true
    },

    deactivated() {
        let inactive = true
        if(hasUpgrade('CNT', 33)) inactive = false
        return inactive
    },
})

addLayer("MULT", {
    name: "Multiplier",
    symbol: "MULT",
    position: 2,
    startData() { return {
        unlocked: false,
		points: new Decimal(0),
    }},
    color: "#ff0000",
    requires: new Decimal(1000),
    resource: "Multiplier",
    baseResource: "Ca$h",
    baseAmount() {return player.S.points},
    type: "static",
    exponent: 0.5,
    base: 1.1,
    gainMult() {
        mult = new Decimal(1)
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
        if(hasUpgrade(this.layer, 13)) {

        }
        else {
            player.S.points = new Decimal(0)
        }
    },
    canBuyMax() {
        let maxing = false
        if(hasUpgrade(this.layer, 21)) maxing = true
        return maxing
    },
    autoPrestige() {
        let Auto = false
        if(hasMilestone('MULT', 2)) Auto = true
        return Auto
    },
    resetDescription: "Reset Ca$h For ",
    layerShown() {
        let vis = false
        if(hasUpgrade('CNT', 35)) vis = true
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Multiplier again [Row 1.5]" },
        },
    },
    milestones: {
        0: {
            requirementDescription: "1 Multi",
            effectDescription: "Multi Boost Skill (10^^(Multi^0.2)) (x) (Cap: 1e10)",
            tooltip() {return format(new Decimal.min(new Decimal(10).tetrate(player[this.layer].points.pow(0.2)), new Decimal(1e10)))},
            done() { return player[this.layer].points.gte(1) },
        },
        1: {
            requirementDescription: "5 Multi",
            effectDescription: "Auto Reset for Ca$h",
            done() { return player[this.layer].points.gte(5) },
            unlocked() {return hasMilestone(this.layer, 0)},
        },
        2: {
            requirementDescription: "50 Multi",
            effectDescription: "Auto Reset for Multi and Unlock Multi Upgrades",
            done() { return player[this.layer].points.gte(50) },
            unlocked() {return hasMilestone(this.layer, 1)},
        },
    },
    upgrades: {
        11: {
            title: "Multi Booster I",
            description: "x10 Skill",
            cost: new Decimal(50),
            unlocked() {return hasMilestone(this.layer, 2)},
        },
        12: {
            title: "Multi Booster II",
            description: "x25 Skill",
            cost: new Decimal(75),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Multi QoL I",
            description: "MULTI Reset Nothing",
            cost: new Decimal(125),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Multi Boost I",
            description: "Multi Boost Skill (No Cap)",
            effect() {
                let effect = new Decimal(1)
                effect = effect.times(player[this.layer].points.add(1))
                return effect
            },
            effectDisplay() {return format(upgradeEffect(this.layer, this.id))+"x Skill"},
            tooltip: "(Multi + 1)",
            cost: new Decimal(300),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Multi Unlocker I",
            description: "Unlock More CNT Upgrades",
            cost: new Decimal(400),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Multi Booster III",
            description: "x1e25 Skill and Unlock Buy max MULTI",
            cost: new Decimal(1250),
            unlocked() {return hasUpgrade('CNT', 45)},
        },
        22: {
            title: "Multi Booster IV",
            description: "x1e50 Skill",
            cost: new Decimal(7333),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Multi Boost II",
            description: "MULTI Upgrade 14 also Devides Ca$h Requirement",
            effectDisplay() {return "/"+format(upgradeEffect(this.layer, 14))+" Ca$h Requiremnt"},
            cost: new Decimal(10000),
            unlocked() {return hasMilestone('S', 10)},
        },
        24: {
            title: "Multi Booster V",
            description: "x1e150 Skill",
            cost: new Decimal(10500),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
    },
    update(diff) {
        if(player.S.points.gte(1000) && hasUpgrade('CNT', 35)) player[this.layer].unlocked = true
    },
    

    deactivated() {
        let inactive = true
        if(hasUpgrade('CNT', 35)) inactive = false
        return inactive
    },
})
