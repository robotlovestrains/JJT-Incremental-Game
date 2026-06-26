addLayer("TFD", {
    name: "The First Difficult",
    symbol: "TFD",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#202020",
    requires: new Decimal(10),
    resource: "The First Difficulty",
    baseResource: "skill",
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
        {key: "T", description: "T: Reset for TFD", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},
})
