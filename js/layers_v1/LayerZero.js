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
    exponent: 0.25,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 0,
    hotkeys: [
        {key: "ctrl+M", description: "ctrl+M: Reset for MSL", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('TLG', 16) && !hasUpgrade('BSG', 11)},
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
            cost: new Decimal(1.5e35),
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
            cost: new Decimal('e400'),
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Exponent III",
            description: "^5 Skill",
            cost: new Decimal('e465'),
            unlocked() {return hasUpgrade(this.layer, 15)},
        },
        22: {
            title: "Exponent IV",
            description: "^7.5 Skill",
            cost: new Decimal('e540'),
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Exponent V",
            description: "^10 Skill",
            cost: new Decimal('e575'),
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
        24: {
            title: "Exponent VI",
            description: "^15 Skill",
            cost: new Decimal('e3500'),
            unlocked() {return hasUpgrade(this.layer, 23)},
        },
    },
    autoUpgrade() {return hasUpgrade('Win', 15)},
    update(diff) {
        if (player.points.gte(new Decimal('e600')) && hasMilestone('TLG', 16)) player[this.layer].unlocked = true
    },
    

    deactivated() {
        let inactive = true
        if(hasMilestone('TLG', 16)) inactive = false
        return inactive
    },
})

addLayer("AOC", {
    name: "Astronomical",
    symbol: "AOC",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#3a03ff",
    requires: new Decimal('e50000'),
    resource: "Astronomicality Points",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(1)
        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 2,
    hotkeys: [
        {key: "ctrl+A", description: "ctrl+shift+A: Reset for AOC", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('TLG', 17) && !hasUpgrade('BSG', 11)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Hope you like Reseting [Row 3]" },
        },
    },
    passiveGeneration() {
        let Gen = 0
        if(hasUpgrade('Win', 21)) Gen += 0.001
        if(hasUpgrade('Win', 22)) Gen += 0.009
        if(hasUpgrade('Win', 23)) Gen += 0.09
        if(hasUpgrade('DNT', 11)) Gen += 0.15
        if(hasUpgrade('WSM', 12)) Gen += 0.75
        return Gen
    },
    resetDescription: "Reset Skill and Above For ",
    update(diff) {
        if (player.points.gte(new Decimal('e50000')) && hasMilestone('TLG', 17)) player[this.layer].unlocked = true
    },
    milestones: {
        0: {
            requirementDescription: "Win",
            effectDescription: "Unlock Win",
            done() { return player[this.layer].points.gte(1) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        1: {
            requirementDescription: "Winsome",
            effectDescription: "Unlock Winsome",
            done() { return player[this.layer].points.gte(10) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        2: {
            requirementDescription: "Do Nothing",
            effectDescription: "Unlock Do Nothing and Autoreset for Win",
            done() { return player[this.layer].points.gte(25) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
        3: {
            requirementDescription: "The End of this one",
            effectDescription: "Sorry if you want this to go on Longer but i Remade this so Win Win?",
            done() { return player[this.layer].points.gte(50) },
            unlocked() {return hasMilestone(this.layer, this.id)},
        },
    },
    

    deactivated() {
        let inactive = true
        if(hasMilestone('TLG', 17)) inactive = false
        return inactive
    },
})

addLayer("Win", {
    name: "Win",
    symbol: "Win",
    position: 4,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#2877e7",
    requires: new Decimal(1),
    resource: "Win",
    baseResource: "Astronomicality Points",
    baseAmount() {return player['AOC'].points},
    type: "static",
    roundUpCost: true,
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
        {key: "w", description: "W: Reset for Win", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('AOC', 0) && !hasUpgrade('BSG', 11)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "No Winning sorry [Row 1] (free Upgrades)" },
        },
    },
    resetDescription: "Reset Skill For ",
    update(diff) {
        if (hasMilestone('AOC', 0)) player[this.layer].unlocked = true
    },
    upgrades: {
        11: {
            title: "Faster I",
            description: "x1e10 Skill",
            cost: new Decimal(1),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(1)
            },
        },
        12: {
            title: "Faster II",
            description: "x100 Skill and AutoReset and Maxbuy for Ca$h and Multi",
            cost: new Decimal(2),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(2)
            },
            unlocked() {return hasUpgrade(this.layer, 11)},
        },
        13: {
            title: "Faster III",
            description: "x1e10 Skill and Autobuy CNT Upgrades",
            cost: new Decimal(3),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(3)
            },
            unlocked() {return hasUpgrade(this.layer, 12)},
        },
        14: {
            title: "Faster IV",
            description: "x1e1000 Skill and Autobuy Multi Upgrades",
            cost: new Decimal(5),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(5)
            },
            unlocked() {return hasUpgrade(this.layer, 13)},
        },
        15: {
            title: "Instant I",
            description: "Autobuy MSL Upgrades and add 900% more to the CNT autogain",
            cost: new Decimal(6),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(6)
            },
            unlocked() {return hasUpgrade(this.layer, 14)},
        },
        21: {
            title: "Automation I",
            description: "Gain 0.1% of AOC/s",
            cost: new Decimal(12),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(12)
            },
            unlocked() {return hasUpgrade('WSM', 11)},
        },
        22: {
            title: "Automation II",
            description: "Gain 0.9% More of AOC/s",
            cost: new Decimal(13),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(13)
            },
            unlocked() {return hasUpgrade(this.layer, 21)},
        },
        23: {
            title: "Automation III",
            description: "Gain 9% More of AOC/s",
            cost: new Decimal(14),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(14)
            },
            unlocked() {return hasUpgrade(this.layer, 22)},
        },
    },
    autoPrestige() {return hasMilestone('AOC', 2)},

    deactivated() {
        let inactive = true
        if(hasMilestone('AOC', 0)) inactive = false
        return inactive
    },
})

addLayer("WSM", {
    name: "Winsome",
    symbol: "WSM",
    position: 5,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#64a2f8",
    requires: new Decimal(10),
    resource: "Winsome",
    baseResource: "Astronomicality Points",
    baseAmount() {return player['AOC'].points},
    type: "static",
    roundUpCost: true,
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
        {key: "s", description: "S: Reset for WSM", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('AOC', 1) && !hasUpgrade('BSG', 11)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Win Exsention [Row 1] (free Upgrades)" },
        },
    },
    resetDescription: "Reset Skill For ",
    update(diff) {
        if (hasMilestone('AOC', 1)) player[this.layer].unlocked = true
    },
    upgrades: {
        11: {
            title: "Winned I",
            description: "Unlock More Win Upgrades",
            cost: new Decimal(1),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(1)
            },
        },
        12: {
            title: "Winned II",
            description: "+75% AOC/s",
            cost: new Decimal(3),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(3)
            },
            unlocked() {return hasUpgrade('DNT', 11)},
        },
    },

    deactivated() {
        let inactive = true
        if(hasMilestone('AOC', 1)) inactive = false
        return inactive
    },
})

addLayer("DNT", {
    name: "Do Nothing",
    symbol: "DNT",
    position: 6,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#99D1E5",
    requires: new Decimal(25),
    resource: "Do Nothing",
    baseResource: "Astronomicality Points",
    baseAmount() {return player['AOC'].points},
    type: "static",
    roundUpCost: true,
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
        {key: "n", description: "n: Reset for DNT", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown() {return hasMilestone('AOC', 2) && !hasUpgrade('BSG', 11)},
    infoboxes: {
        lore: {
            title: "Info About this layer",
            body() { return "Free Autobuy [Row 1] (free Upgrades)" },
        },
    },
    resetDescription: "Reset Skill For ",
    update(diff) {
        if (hasMilestone('AOC', 2)) player[this.layer].unlocked = true
    },
    upgrades: {
        11: {
            title: "QoL I",
            description: "+15% AOC/s and Unlock More WSM Upgrades",
            cost: new Decimal(1),
            onPurchase() {
                player[this.layer].points = new Decimal(player[this.layer].points).add(1)
            },
        },
    },
    autoUpgrade: true,

    deactivated() {
        let inactive = true
        if(hasMilestone('AOC', 2)) inactive = false
        return inactive
    },
})

addLayer("BSG", {
    name: "Blessing",
    symbol: "BSG",
    position: 6,
    startData() { return {
        unlocked: true,
		points: new Decimal(1),
    }},
    color: "#c7c7c7",
    requires: new Decimal(1e100),
    resource: "???",
    baseResource: "Points",
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
    row: 5,
    layerShown() {return !hasUpgrade(this.layer, 11)},
    infoboxes: {
        1: {
            title: "1nf0 @b0ut th15 !@y3r",
            body() { return "Errored" },
        },
    },
    resetDescription: "Reset Skill For ",
    upgrades: {
        11: {
            title: "83nn@63 1",
            description: "Description Not Found (Importent! This will not Be undone Reset Progress.)",
            cost: new Decimal(1),
            onPurchase() {
                player.points = new Decimal(0)
            },
        },
    },
    tabFormat: [
        ["infobox", "1"],
        "blank",
        "upgrades",
    ],
})
