addLayer("MSL", {
    name: "Millisecondless",
    symbol: "MSL",
    position: 3,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ff6bff",
    requires: new Decimal('e600'),
    resource: "Millisecondless",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0.2,
    gainMult() {
        mult = new Decimal(1)
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
            body() { return "<1ms (0.001s) [Row 1]" },
        },
    },
    resetDescription: "Reset Skill For ",
    passiveGeneration() {
        let Gen = 1
        return Gen
    },
    upgrades: {
        11: {
            title: "Class 0 automatic",
            description: "Just Unlock More Ca$h Milestones",
            cost: new Decimal(1e10),
        },
        12: {
            title: "Automation Be like",
            description: "x1e250 Skill",
            cost: new Decimal(1.5e38),
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Take the Time",
            description: "x1e1000 Skill",
            cost: new Decimal(1e50),
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Exponents",
            description: "^2 Skill",
            cost: new Decimal(5e190),
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Exponent II",
            description: "^3 Skill",
            cost: new Decimal('e399'),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Exponent III",
            description: "^5 Skill",
            cost: new Decimal('e464'),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Exponent IV",
            description: "^7.5 Skill",
            cost: new Decimal('e542'),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
    },
    update(diff) {
        if (player.points.gte('e600') && hasMilestone('TLG', 16)) player[this.layer].unlocked = true
    },
    

    deactivated() {
        let inactive = true
        if(hasMilestone('TLG', 16)) inactive = false
        return inactive
    },
})
