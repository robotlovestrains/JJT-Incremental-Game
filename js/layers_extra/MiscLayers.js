addLayer("MISC", {
    name: "MISC",
    symbol: "MISC",
    position: 1,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b4b4b4",
    requires: new Decimal(1e1000),
    resource: "Useless Layers",
    tooltip() {return "Misc. Layers"},
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
        "Minigames": {
            embedLayer: "MiniGames",
            buttonStyle: {
                "color": "#b4b4b4",
                "border": "2px solid #b4b4b4",
            },
        },
        "Events": {
            embedLayer: "Event",
            buttonStyle: {
                "color": "#444444",
                "border": "2px solid #444444",
            },
        },
    },
})

addLayer("MiniGames", {
    name: "Minigames",
    symbol: "",
    position: 0,
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
    layerShown() {return false},
    tabFormat: {
        "SAVEBANK": {
            embedLayer: "SaveBank",
            buttonStyle: {
                "color": "#b4b4b4",
                "border": "2px solid #b4b4b4",
            },
        },
        "Minigame Settings": {
            embedLayer: "MiniSettings",
            buttonStyle: {
                "color": "#b4b4b4",
                "border": "2px solid #b4b4b4",
            },
        },
        "Minigame 1": {
            embedLayer: "MiniGame1",
            buttonStyle: {
                "color": "#b4b4b4",
                "border": "2px solid #b4b4b4",
            },
        },
        "Minigame 2": {
            embedLayer: "MiniGame2",
            buttonStyle: {
                "color": "#b4b4b4",
                "border": "2px solid #b4b4b4",
            },
        },
        "Community Tree": {
            embedLayer: "ComTree",
            buttonStyle: {
                "color": "#b4b4b4",
                "border": "2px solid #b4b4b4",
            },
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
    color: "#444444",
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
        "Halloween 2026": {
            embedLayer: "Halloween",
            buttonStyle: {
                "color": "#c07000",
                "border": "2px solid #c07000",
            },
        },
    },
})

addLayer("MiniSettings", {
    name: "Minigame Settings",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
        Mini1: false,
        Mini2: false,
        Mini2M: false,
        Comm: false,
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
    layerShown() {return false},
    tabFormat: [
        ["display-text",
            function() { return 'Each Row is the next Minigame' },
            { "color": "#b4b4b4", "font-size": "24px" }],
        ["display-text",
            function() { return '(row 1: minigame 1. row 2: minigame 2. ect...)' },
            { "color": "#b4b4b4", "font-size": "16px" }],
        "blank",
        "clickables",
    ],
    clickables: {
        11: {
            title: "Disable Minigame 1",
            display() {return player[this.layer].Mini1},
            onClick() {
                player[this.layer].Mini1 = !player[this.layer].Mini1
            },
            canClick: true,
        },
        21: {
            title: "Disable Minigame 2",
            display() {return player[this.layer].Mini2},
            onClick() {
                player[this.layer].Mini2 = !player[this.layer].Mini2
            },
            canClick: true,
        },
        22: {
            title: "Disable Minigame 2's Milestones",
            display() {return player[this.layer].Mini2M},
            onClick() {
                player[this.layer].Mini2M = !player[this.layer].Mini2M
            },
            canClick: true,
        },
        31: {
            title: "Disable Community Tree",
            display() {return player[this.layer].Comm},
            onClick() {
                player[this.layer].Comm = !player[this.layer].Comm
            },
            canClick: true,
        },
    },
})

addLayer("SaveBank", {
    name: "Save Bank",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
		SavestateMain: {1: new Decimal(-1)},
		SavestateMini1: {1: new Decimal(-1)},
		SavestateMini2: {1: new Decimal(-1)},
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
    layerShown() {return false},
    tabFormat: [
        ["display-text",
            function() { return 'NOTICE This is a Save Bank Each Row is [SAVE, LOAD, RESET] (Currently Minigame 1 Upgrade Loading is semi Broken Does Still Works)' },
            { "color": "#b4b4b4", "font-size": "24px" }],
        "blank",
        "clickables",
    ],
    clickables: {
        11: {
            title: "Save Main Progress",
            display() {return "Will Give Popup"},
            onClick() {
                player[this.layer].SavestateMain = {1: player['TLGRM'].points}
                alert("Saved Data")
            },
            canClick: true,
        },
        12: {
            title: "Load Saved Main Progress",
            display() {return "Will Give Popup"},
            onClick() {
                if(player[this.layer].SavestateMain[1].lt(0)) return alert("No Saved Data Found")
                if (confirm("This Will Overwrite Your TLG Data")) {
                    if (confirm("TLG Progress Will be Overwriten")) {
                        if (confirm("This Will Overwrite TLG Data and TLG Progress Will be Overwriten (LAST WARNING)")) {
                            doReset("ResetMainProgress")
                            player['TLGRM'].points = player[this.layer].SavestateMain[1]
                        }
                    }
                }
            },
            canClick: true,
        },
        13: {
            title: "Reset Main Progress",
            display() {return "Will Give Popup"},
            onClick() {
                if (confirm("This Will Overwrite All Your Main Data")) {
                    if (confirm("All Main Progress Will be Lossed")) {
                        if (confirm("This Will Overwrite All Your Main Data and All Main Progress Will be Lossed (LAST WARNING)")) {
                            doReset("ResetMainProgress")
                        }
                    }
                }
            },
            canClick: true,
        },
        21: {
            title: "Save Minigame 1 Progress",
            display() {return "Will Give Popup"},
            onClick() {
                if(confirm("This Only Saves Upgrades at and Before Your latest M Upgrade")) {
                    player[this.layer].SavestateMini1 = {1: player['Island1'].points, 2: player['Island2b'].points, 3: player['Island3d'].points, 4: player['Research'].points, 5: player['Prestige'].points, 6: player['Prestige'].boosters, 101: hasUpgrade('Island3a', 11), 102: hasUpgrade('Island3f', 25), 103: hasUpgrade('Research', 25), 104: hasUpgrade('Research', 33), 105: hasUpgrade('Research', 42), 106: hasUpgrade('Research', 51), 107: hasUpgrade('Research', 71), 108: hasUpgrade('Prestige', 15), 109: hasUpgrade('Prestige', 25), 110: hasUpgrade('Prestige', 35), 111: hasUpgrade('Prestige', 45), 112: hasUpgrade('Prestige', 55)}
                    alert("Saved Data")
                    
                }
            },
            canClick: true,
        },
        22: {
            title: "Load Saved Minigame 1 Progress",
            display() {return "Will Give Popup"},
            onClick() {
                if(player[this.layer].SavestateMini1[1].lt(0)) return alert("No Saved Data Found")
                if (confirm("This Will Overwrite Your Minigame 1 Data")) {
                    if (confirm("All Minigame 1 Progress Will be Overwriten")) {
                        if (confirm("This Will Overwrite Minigame 1 Data and Minigame 1 Progress Will be Overwriten (LAST WARNING)")) {
                            let Temp = player['MiniSettings'].Mini1
                            player['MiniSettings'].Mini1 = false
                            doReset("ResetMini1Progress")
                            player['Island1'].points = new Decimal("ee100")
                            player['Island2b'].points = new Decimal("ee100")
                            player['Island3d'].points = new Decimal("ee100")
                            player['Research'].points = new Decimal("ee100")
                            player['Prestige'].points = new Decimal("ee100")
                            if(player[this.layer].SavestateMini1[101]) {
                                buyUpgrade('Island1', 11)
                                buyUpgrade('Island1', 12)
                                buyUpgrade('Island1', 13)
                                buyUpgrade('Island1', 14)
                                buyUpgrade('Island1', 15)
                                buyUpgrade('Island1', 21)
                                buyUpgrade('Island1', 22)
                                buyUpgrade('Island1', 23)
                                buyUpgrade('Island2a', 11)
                                buyUpgrade('Island2a', 12)
                                buyUpgrade('Island2a', 13)
                                buyUpgrade('Island2a', 14)
                                buyUpgrade('Island2a', 15)
                                buyUpgrade('Island2a', 21)
                                buyUpgrade('Island2a', 22)
                                buyUpgrade('Island2a', 23)
                                buyUpgrade('Island2a', 24)
                                buyUpgrade('Island2a', 25)
                                buyUpgrade('Island2b', 11)
                                buyUpgrade('Island2b', 12)
                                buyUpgrade('Island2b', 13)
                                buyUpgrade('Island2b', 14)
                                buyUpgrade('Island2b', 15)
                                buyUpgrade('Island2b', 21)
                                buyUpgrade('Island3a', 11)
                            }
                            if(player[this.layer].SavestateMini1[102]) {
                                buyUpgrade('Island3a', 12)
                                buyUpgrade('Island3a', 13)
                                buyUpgrade('Island3a', 14)
                                buyUpgrade('Island3a', 15)
                                buyUpgrade('Island3a', 21)
                                buyUpgrade('Island3c', 11)
                                buyUpgrade('Island3c', 12)
                                buyUpgrade('Island3c', 13)
                                buyUpgrade('Island3c', 14)
                                buyUpgrade('Island3c', 15)
                                buyUpgrade('Island3c', 21)
                                buyUpgrade('Island3c', 22)
                                buyUpgrade('Island3e', 11)
                                buyUpgrade('Island3e', 12)
                                buyUpgrade('Island3e', 13)
                                buyUpgrade('Island3e', 14)
                                buyUpgrade('Island3f', 11)
                                buyUpgrade('Island3f', 12)
                                buyUpgrade('Island3f', 13)
                                buyUpgrade('Island3f', 14)
                                buyUpgrade('Island3f', 15)
                                buyUpgrade('Island3f', 21)
                                buyUpgrade('Island3f', 22)
                                buyUpgrade('Island3f', 23)
                                buyUpgrade('Island3f', 24)
                                buyUpgrade('Island3f', 25)
                            }
                            if(player[this.layer].SavestateMini1[103]) {
                                buyUpgrade('Research', 11)
                                buyUpgrade('Research', 12)
                                buyUpgrade('Research', 13)
                                buyUpgrade('Research', 14)
                                buyUpgrade('Research', 15)
                                buyUpgrade('Research', 21)
                                buyUpgrade('Research', 22)
                                buyUpgrade('Research', 23)
                                buyUpgrade('Research', 24)
                                buyUpgrade('Research', 25)
                            }
                            if(player[this.layer].SavestateMini1[104]) {
                                buyUpgrade('Research', 31)
                                buyUpgrade('Research', 32)
                                buyUpgrade('Island1', 24)
                                buyUpgrade('Island1', 25)
                                buyUpgrade('Island2b', 22)
                                buyUpgrade('Island2b', 23)
                                buyUpgrade('Island2b', 24)
                                buyUpgrade('Island2b', 25)
                                buyUpgrade('Island3a', 22)
                                buyUpgrade('Island3a', 23)
                                buyUpgrade('Island3a', 24)
                                buyUpgrade('Island3a', 25)
                                buyUpgrade('Island3c', 23)
                                buyUpgrade('Island3c', 24)
                                buyUpgrade('Island3c', 25)
                                buyUpgrade('Research', 33)
                            }
                            if(player[this.layer].SavestateMini1[105]) {
                                buyUpgrade('Research', 34)
                                buyUpgrade('Research', 35)
                                buyUpgrade('Research', 41)
                                buyUpgrade('Research', 42)
                            }
                            if(player[this.layer].SavestateMini1[106]) {
                                buyUpgrade('Island3e', 15)
                                buyUpgrade('Island3e', 21)
                                buyUpgrade('Island3e', 22)
                                buyUpgrade('Island3e', 23)
                                buyUpgrade('Island3e', 24)
                                buyUpgrade('Island3e', 25)
                                buyUpgrade('Research', 43)
                                buyUpgrade('Research', 44)
                                buyUpgrade('Research', 45)
                                buyUpgrade('Research', 51)
                            }
                            if(player[this.layer].SavestateMini1[107]) {
                                buyUpgrade('Research', 52)
                                buyUpgrade('Research', 53)
                                buyUpgrade('Research', 54)
                                buyUpgrade('Research', 55)
                                buyUpgrade('Research', 61)
                                buyUpgrade('Research', 62)
                                buyUpgrade('Research', 63)
                                buyUpgrade('Research', 64)
                                buyUpgrade('Research', 65)
                                buyUpgrade('Research', 71)
                            }
                            if(player[this.layer].SavestateMini1[108]) {
                                buyUpgrade('Prestige', 11)
                                buyUpgrade('Prestige', 12)
                                buyUpgrade('Prestige', 13)
                                buyUpgrade('Prestige', 14)
                                buyUpgrade('Prestige', 15)
                            }
                            if(player[this.layer].SavestateMini1[109]) {
                                buyUpgrade('Prestige', 21)
                                buyUpgrade('Prestige', 22)
                                buyUpgrade('Prestige', 23)
                                buyUpgrade('Prestige', 24)
                                buyUpgrade('Prestige', 25)
                            }
                            if(player[this.layer].SavestateMini1[110]) {
                                buyUpgrade('Prestige', 31)
                                buyUpgrade('Prestige', 32)
                                buyUpgrade('Prestige', 33)
                                buyUpgrade('Prestige', 34)
                                buyUpgrade('Prestige', 35)
                            }
                            if(player[this.layer].SavestateMini1[111]) {
                                buyUpgrade('Prestige', 41)
                                buyUpgrade('Prestige', 42)
                                buyUpgrade('Prestige', 43)
                                buyUpgrade('Prestige', 44)
                                buyUpgrade('Prestige', 45)
                            }
                            if(player[this.layer].SavestateMini1[112]) {
                                buyUpgrade('Prestige', 51)
                                buyUpgrade('Prestige', 52)
                                buyUpgrade('Prestige', 53)
                                buyUpgrade('Prestige', 54)
                                buyUpgrade('Prestige', 55)
                            }
                            if(player[this.layer].SavestateMini1[1]) player['Island1'].points = player[this.layer].SavestateMini1[1]
                            if(player[this.layer].SavestateMini1[2]) player['Island2b'].points = player[this.layer].SavestateMini1[2]
                            if(player[this.layer].SavestateMini1[3]) player['Island3d'].points = player[this.layer].SavestateMini1[3]
                            if(player[this.layer].SavestateMini1[4]) player['Research'].points = player[this.layer].SavestateMini1[4]
                            if(player[this.layer].SavestateMini1[5]) player['Prestige'].points = player[this.layer].SavestateMini1[5]
                            if(player[this.layer].SavestateMini1[6]) player['Prestige'].boosters = player[this.layer].SavestateMini1[6]
                            player['MiniSettings'].Mini1 = Temp
                        }
                    }
                }
            },
            canClick: true,
        },
        23: {
            title: "Reset Minigame 1 Progress",
            display() {return "Will Give Popup"},
            onClick() {
                if (confirm("This Will Overwrite All Your Minigame 1 Data")) {
                    if (confirm("All Minigame 1 Progress Will be Lossed")) {
                        if (confirm("This Will Overwrite All Your Minigame 1 Data and All Minigame 1 Progress Will be Lossed (LAST WARNING)")) {
                            doReset("ResetMini1Progress")
                        }
                    }
                }
            },
            canClick: true,
        },
        31: {
            title: "Save Minigame 2 Progress",
            display() {return "Will Give Popup"},
            onClick() {
                player[this.layer].SavestateMini2 = {1: player['MiniStones'].points, 2: player['SuperStones'].points, 3: player['MegaStones'].points}
                alert("Saved Data")
            },
            canClick: true,
        },
        32: {
            title: "Load Saved Minigame 2 Progress",
            display() {return "Will Give Popup"},
            onClick() {
                if(player[this.layer].SavestateMini2[1].lt(0)) return alert("No Saved Data Found")
                if (confirm("This Will Overwrite Your Minigame 2 Data")) {
                    if (confirm("All Minigame 2 Progress Will be Overwriten")) {
                        if (confirm("This Will Overwrite Minigame 1 Data and Minigame 2 Progress Will be Overwriten (LAST WARNING)")) {
                            let Temp = player['MiniSettings'].Mini2
                            player['MiniSettings'].Mini2 = false
                            doReset("ResetMini2Progress")
                            player['MiniStones'].points = player[this.layer].SavestateMini2[1]
                            player['SuperStones'].points = player[this.layer].SavestateMini2[2]
                            player['MegaStones'].points = player[this.layer].SavestateMini2[3]
                            player['MiniSettings'].Mini2 = Temp
                        }
                    }
                }
            },
            canClick: true,
        },
        33: {
            title: "Reset Minigame 2 Progress",
            display() {return "Will Give Popup"},
            onClick() {
                if (confirm("This Will Overwrite All Your Minigame 2 Data")) {
                    if (confirm("All Minigame 2 Progress Will be Lossed")) {
                        if (confirm("This Will Overwrite All Your Minigame 2 Data and All Minigame 2 Progress Will be Lossed (LAST WARNING)")) {
                            doReset("ResetMini2Progress")
                        }
                    }
                }
            },
            canClick: true,
        },
    },
})

addLayer("ResetMainProgress", {
    name: "",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b4b4b4",
    requires: new Decimal(1),
    resource: "",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 1,
    gainMult() {
        mult = new Decimal(1)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    row: 10,
    layerShown() {return false},
})

addLayer("ResetMini1Progress", {
    name: "",
    symbol: "",
    position: "side",
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b4b4b4",
    requires: new Decimal(1),
    resource: "",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 1,
    gainMult() {
        mult = new Decimal(1)

        return mult
    },
    gainExp() {
        return new Decimal(1)
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
        player["Research"].points = new Decimal(0)
        player["Research"].upgrades = []
        player["Research"].milestones = []
        player["Prestige"].points = new Decimal(0)
        player["Prestige"].upgrades = []
        player["Prestige"].milestones = []
        player["Prestige"].boosters = new Decimal(0)
        addBuyables('Prestige', 11, -getBuyableAmount('Prestige', 11))
        addBuyables('Prestige', 12, -getBuyableAmount('Prestige', 12))
        addBuyables('Prestige', 13, -getBuyableAmount('Prestige', 13))
    },
    row: 0,
    layerShown() {return false},
})
addLayer("ResetMini2Progress", {
    name: "",
    symbol: "",
    position: "side",
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#b4b4b4",
    requires: new Decimal(1),
    resource: "",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 1,
    gainMult() {
        mult = new Decimal(1)

        return mult
    },
    gainExp() {
        return new Decimal(1)
    },
    resetsNothing: true,
    onPrestige(gain) {
        player["MiniPoints"].points = new Decimal(0)
        player["MiniStones"].points = new Decimal(0)
        player["MiniStones"].milestones = []
        player["SuperStones"].points = new Decimal(0)
        player["SuperStones"].milestones = []
        player["MegaStones"].points = new Decimal(0)
        player["MegaStones"].milestones = []
    },
    row: 0,
    layerShown() {return false},
})
