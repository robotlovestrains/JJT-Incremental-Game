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
            effectDescription: "",
            done() { return player[this.layer].points.gte(1) },
        },
    },
    update(diff) {

    },

    deactivated() {
        let inactive = true
        return inactive
    },
})

addLayer("MULT", {
    name: "Multiplier",
    symbol: "MULT",
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
    resetDescription: "Reset Ca$h For ",
    layerShown() {
        let vis = false
        return vis
    },
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Multiplier again [Row 1.5]" },
        },
    },
    update(diff) {

    },
    

    deactivated() {
        let inactive = true
        return inactive
    },
})
