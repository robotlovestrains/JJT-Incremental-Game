addLayer("MiniGame2", {
    name: "MiniGame",
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
        "Points": {
            embedLayer: "MiniPoints",
            buttonStyle: {
                "color": "#00acac",
                "border": "2px solid #00acac",
            },
        },
        "Milestones": {
            embedLayer: "MiniStones",
            buttonStyle: {
                "color": "#6800ad",
                "border": "2px solid #6800ad",
            },
        },
        "Super Milestones": {
            embedLayer: "SuperStones",
            buttonStyle: {
                "color": "#a900ca",
                "border": "2px solid #a900ca",
            },
            unlocked() {return hasMilestone('MiniStones', 9)}
        },
        "Mega Milestones": {
            embedLayer: "MegaStones",
            buttonStyle: {
                "color": "#f50173",
                "border": "2px solid #f50173",
            },
            unlocked() {return hasMilestone('SuperStones', 9)}
        },
    },
})

addLayer("MiniPoints", {
    name: "Points",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(10),
    }},
    color: "#00acac",
    requires: new Decimal(0),
    resource: "Points",
    baseResource: "Skill",
    baseAmount() {return player.points},
    type: "normal",
    exponent: 0,
    gainMult() {
        mult = new Decimal(1)
        
        //Base
        if(hasMilestone('MiniStones', 10)) mult = mult.add(0.01)
        if(hasMilestone('MiniStones', 11)) mult = mult.add(0.01)
        if(hasMilestone('MiniStones', 12)) mult = mult.add(0.01)
        if(hasMilestone('MiniStones', 13)) mult = mult.add(0.01)
        if(hasMilestone('MiniStones', 14)) mult = mult.add(0.01)
        if(hasMilestone('MiniStones', 16)) mult = mult.add(0.01)
        if(hasMilestone('MiniStones', 17)) mult = mult.add(0.01)
        if(hasMilestone('MiniStones', 18)) mult = mult.add(0.01)
        if(hasMilestone('MiniStones', 19)) mult = mult.add(0.01)
        if(hasMilestone('MiniStones', 20)) mult = mult.add(0.01)
        if(hasMilestone('MiniStones', 23)) mult = mult.add(0.05)
        if(hasMilestone('MiniStones', 25)) mult = mult.add(0.05)
        if(hasMilestone('MiniStones', 26)) mult = mult.add(0.05)
        if(hasMilestone('MiniStones', 27)) mult = mult.add(0.05)
        if(hasMilestone('MiniStones', 28)) mult = mult.add(0.05)
        if(hasMilestone('MiniStones', 29)) mult = mult.add(0.05)
        if(hasMilestone('MiniStones', 30)) mult = mult.add(0.05)
        if(hasMilestone('MiniStones', 31)) mult = mult.add(0.05)
        if(hasMilestone('MiniStones', 32)) mult = mult.add(0.05)
        if(hasMilestone('MiniStones', 33)) mult = mult.add(0.05)
        if(hasMilestone('MiniStones', 36)) mult = mult.add(1)
        if(hasMilestone('MiniStones', 42)) mult = mult.add(1)
        if(hasMilestone('MiniStones', 41)) mult = mult.add(-2)
        if(hasMilestone('MiniStones', 48)) mult = mult.add(1)
        if(hasMilestone('MiniStones', 52)) mult = mult.add(5)
        if(hasMilestone('MiniStones', 54)) mult = mult.add(2)
        if(hasMilestone('MiniStones', 55)) mult = mult.add(7)
        if(hasMilestone('MiniStones', 63)) mult = mult.add(-11)
        if(hasMilestone('MiniStones', 65)) mult = mult.add(6.66)
        if(hasMilestone('MiniStones', 70)) mult = mult.add(-10)
        if(hasMilestone('MiniStones', 71)) mult = mult.add(0^0)
        if(hasMilestone('MiniStones', 77)) mult = mult.add(1)
        if(hasMilestone('MiniStones', 78)) mult = mult.add(1)
        if(hasMilestone('MiniStones', 83)) mult = mult.add(1.0000001)
        if(hasMilestone('MiniStones', 89)) mult = mult.add(15)
        if(hasMilestone('MiniStones', 90)) mult = mult.add(50)
        if(hasMilestone('MiniStones', 95)) mult = mult.add(95)
        if(hasMilestone('MiniStones', 96)) mult = mult.add(-25)
        if(hasMilestone('MiniStones', 97)) mult = mult.add(0.9999999)
        if(hasMilestone('MiniStones', 98)) mult = mult.add(9.99)
        if(hasMilestone('MiniStones', 100)) mult = mult.add(100)
        if(hasMilestone('MiniStones', 104)) mult = mult.add(111)
        if(hasMilestone('MiniStones', 115)) mult = mult.add(100)
        if(hasMilestone('MiniStones', 123)) mult = mult.add(124)
        if(hasMilestone('MiniStones', 130)) mult = mult.add(133)

        if(hasMilestone('SuperStones', 2)) mult = mult.add(0.25)
        if(hasMilestone('SuperStones', 4)) mult = mult.add(1)
        if(hasMilestone('SuperStones', 8)) mult = mult.add(25)

        //Multi
        if(hasMilestone('MiniStones', 1)) mult = mult.times(2)
        if(hasMilestone('MiniStones', 2)) mult = mult.times(3)
        if(hasMilestone('MiniStones', 3)) mult = mult.times(layers['MiniStones'].milestone4Effect())
        if(hasMilestone('MiniStones', 4)) mult = mult.times(5)
        if(hasMilestone('MiniStones', 5)) mult = mult.times(layers['MiniStones'].milestone6Effect())
        if(hasMilestone('MiniStones', 6)) mult = mult.times(1.05)
        if(hasMilestone('MiniStones', 7)) mult = mult.times(1.05)
        if(hasMilestone('MiniStones', 8)) mult = mult.times(1.05)
        if(hasMilestone('MiniStones', 15)) mult = mult.times(layers['MiniStones'].milestone16Effect())
        if(hasMilestone('MiniStones', 22)) mult = mult.times(2.22)
        if(hasMilestone('MiniStones', 36)) mult = mult.times(1.5)
        if(hasMilestone('MiniStones', 40)) mult = mult.times(3.14)
        if(hasMilestone('MiniStones', 41)) mult = mult.times(2)
        if(hasMilestone('MiniStones', 42)) mult = mult.times(1/2)
        if(hasMilestone('MiniStones', 43)) mult = mult.times(1.2)
        if(hasMilestone('MiniStones', 44)) mult = mult.times(1.1)
        if(hasMilestone('MiniStones', 45)) mult = mult.times(1.05)
        if(hasMilestone('MiniStones', 46)) mult = mult.times(1.02)
        if(hasMilestone('MiniStones', 47)) mult = mult.times(1.01)
        if(hasMilestone('MiniStones', 51)) mult = mult.times(5)
        if(hasMilestone('MiniStones', 53)) mult = mult.times(2.22)
        if(hasMilestone('MiniStones', 54)) mult = mult.times(1/25)
        if(hasMilestone('MiniStones', 55)) mult = mult.times(4)
        if(hasMilestone('MiniStones', 58)) mult = mult.times(10/9)
        if(hasMilestone('MiniStones', 59)) mult = mult.times(2)
        if(hasMilestone('MiniStones', 61)) mult = mult.times(9.9999999999999)
        if(hasMilestone('MiniStones', 64)) mult = mult.times(3.14159)
        if(hasMilestone('MiniStones', 65)) mult = mult.times(6.66)
        if(hasMilestone('MiniStones', 66)) mult = mult.times(layers['MiniStones'].milestone67Effect())
        if(hasMilestone('MiniStones', 68)) mult = mult.times(layers['MiniStones'].milestone67Effect().pow(-1))
        if(hasMilestone('MiniStones', 68)) mult = mult.times(6.9)
        if(hasMilestone('MiniStones', 70)) mult = mult.times(1/1e6)
        if(hasMilestone('MiniStones', 72)) mult = mult.times(layers['MiniStones'].milestone73Effect())
        if(hasMilestone('MiniStones', 73)) mult = mult.times(layers['MiniStones'].milestone74Effect())
        if(hasMilestone('MiniStones', 74)) mult = mult.times(5)
        if(hasMilestone('MiniStones', 76)) mult = mult.times(100)
        if(hasMilestone('MiniStones', 79)) mult = mult.times(25)
        if(hasMilestone('MiniStones', 80)) mult = mult.times(layers['MiniStones'].milestone81Effect())
        if(hasMilestone('MiniStones', 82)) mult = mult.times(50)
        if(hasMilestone('MiniStones', 83)) mult = mult.times(1.0000001)
        if(hasMilestone('MiniStones', 84)) mult = mult.times(5)
        if(hasMilestone('MiniStones', 85)) mult = mult.times(5)
        if(hasMilestone('MiniStones', 86)) mult = mult.times(5)
        if(hasMilestone('MiniStones', 87)) mult = mult.times(5)
        if(hasMilestone('MiniStones', 90)) mult = mult.times(1/1e3)
        if(hasMilestone('MiniStones', 91)) mult = mult.times(2)
        if(hasMilestone('MiniStones', 92)) mult = mult.times(6)
        if(hasMilestone('MiniStones', 93)) mult = mult.times(24)
        if(hasMilestone('MiniStones', 95)) mult = mult.times(9.5)
        if(hasMilestone('MiniStones', 96)) mult = mult.times(25)
        if(hasMilestone('MiniStones', 98)) mult = mult.times(9.99)
        if(hasMilestone('MiniStones', 99)) mult = mult.times(100)
        if(hasMilestone('MiniStones', 101)) mult = mult.times(2)
        if(hasMilestone('MiniStones', 102)) mult = mult.times(3)
        if(hasMilestone('MiniStones', 103)) mult = mult.times(25)
        if(hasMilestone('MiniStones', 104)) mult = mult.times(11.1)
        if(hasMilestone('MiniStones', 105)) mult = mult.times(5)
        if(hasMilestone('MiniStones', 106)) mult = mult.times(2)
        if(hasMilestone('MiniStones', 107)) mult = mult.times(10.8)
        if(hasMilestone('MiniStones', 109)) mult = mult.times(1.000001)
        if(hasMilestone('MiniStones', 110)) mult = mult.times(1.000001)
        if(hasMilestone('MiniStones', 111)) mult = mult.times(1.000001)
        if(hasMilestone('MiniStones', 114)) mult = mult.times(100)
        if(hasMilestone('MiniStones', 118)) mult = mult.times(2)
        if(hasMilestone('MiniStones', 119)) mult = mult.times(20)
        if(hasMilestone('MiniStones', 120)) mult = mult.times(15)
        if(hasMilestone('MiniStones', 121)) mult = mult.times(1.22)
        if(hasMilestone('MiniStones', 122)) mult = mult.times(1.23)
        if(hasMilestone('MiniStones', 123)) mult = mult.times(12.4)
        if(hasMilestone('MiniStones', 124)) mult = mult.times(1.25)
        if(hasMilestone('MiniStones', 125)) mult = mult.times(1.26)
        if(hasMilestone('MiniStones', 126)) mult = mult.times(1.27)
        if(hasMilestone('MiniStones', 127)) mult = mult.times(12.8)
        if(hasMilestone('MiniStones', 128)) mult = mult.times(12.9)
        if(hasMilestone('MiniStones', 131)) mult = mult.times(layers['MiniStones'].milestone132Effect())
        if(hasMilestone('MiniStones', 133)) mult = mult.times(1.33)
        if(hasMilestone('MiniStones', 134)) mult = mult.times(1.33333)
        if(hasMilestone('MiniStones', 135)) mult = mult.times(4/3)
        if(hasMilestone('MiniStones', 136)) mult = mult.times(new Decimal(1).add(1/3))
        if(hasMilestone('MiniStones', 137)) mult = mult.times(2.209)
        if(hasMilestone('MiniStones', 138)) mult = mult.times(5e6)
        if(hasMilestone('MiniStones', 138)) mult = mult.times(20e-6)
        if(hasMilestone('MiniStones', 139)) mult = mult.times(1/0.95)
        if(hasMilestone('MiniStones', 140)) mult = mult.times(1/0.75)

        if(hasMilestone('SuperStones', 0)) mult = mult.times(3)
        if(hasMilestone('SuperStones', 1)) mult = mult.times(2)
        if(hasMilestone('SuperStones', 2)) mult = mult.times(1/5)
        if(hasMilestone('SuperStones', 4)) mult = mult.times(1/10)
        if(hasMilestone('SuperStones', 8)) mult = mult.times(100)
        if(hasMilestone('SuperStones', 10)) mult = mult.times(25)
        if(hasMilestone('SuperStones', 11)) mult = mult.times(123)

        if(hasMilestone('MegaStones', 0)) mult = mult.times(4)

        //Extra
        if(hasMilestone('MiniStones', 24)) mult = mult.add(7.5e3)
        if(hasMilestone('MiniStones', 34)) mult = mult.add(75e3)
        if(hasMilestone('MiniStones', 35)) mult = mult.add(500e3)
        if(hasMilestone('MiniStones', 57)) mult = mult.add(10e12)
        if(hasMilestone('MiniStones', 112)) mult = mult.add(1e60)
        if(hasMilestone('MiniStones', 129)) mult = mult.add(1e75)
        
        if(hasMilestone('SuperStones', 7)) mult = mult.add(1e9)
        if(hasMilestone('SuperStones', 8)) mult = mult.add(1e15)
        if(hasMilestone('SuperStones', 11)) mult = mult.add(1e50)
        
        if(player['MiniSettings'].Mini2) return new Decimal(0)
        return mult
    },
    gainExp() {
        Exp = new Decimal(1)

        return Exp
    },
    row: "side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Another Minigame Cuz why Not [Same as Minigame 1]" },
        },
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player[this.layer].points) + ' Points' },
        { "color": "#00acac", "font-size": "24px"}],
        ["display-text",
        function() { return 'You gain +' + format(getResetGain(this.layer)) + ' Points/s' },
        { "color": "#00acac", "font-size": "16px"}],
    ],
    passiveGeneration() {
        let Gen = new Decimal(0)
        if(hasMilestone('MiniStones', 0)) Gen = Gen.add(1)
        return Gen
    },
})

addLayer("MiniStones", {
    name: "Milestones",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    milestone4Effect() {
        let base = new Decimal(1.1)
        if(hasMilestone('MiniStones', 36)) base = base.add(-0.05)
        if(hasMilestone('MiniStones', 49)) base = base.add(0.1)
        if(hasMilestone('MiniStones', 60)) base = base.add(0.05)
        if(hasMilestone('MiniStones', 89)) base = base.add(0.05)
        if(hasMilestone('MiniStones', 132)) base = base.add(0.08)
        if(hasMilestone('MiniStones', 69)) return base.pow(player[this.layer].points).times(layers['SuperStones'].Superstone4Effect()).times(layers[this.layer].milestone36Effect()).times(layers[this.layer].milestone57Effect()).times(6.9)
        if(hasMilestone('MiniStones', 56)) return base.pow(player[this.layer].points).times(layers['SuperStones'].Superstone4Effect()).times(layers[this.layer].milestone36Effect()).times(layers[this.layer].milestone57Effect())
        if(hasMilestone('MiniStones', 35)) return base.pow(player[this.layer].points).times(layers['SuperStones'].Superstone4Effect()).times(layers[this.layer].milestone36Effect())
        if(hasMilestone('SuperStones', 3)) return base.pow(player[this.layer].points).times(layers['SuperStones'].Superstone4Effect())
        return base.pow(player[this.layer].points)
    },
    milestone6Effect() {
        let exp = new Decimal(0.5)
        if(hasMilestone('MiniStones', 21)) exp = exp.add(0.1)
        if(hasMilestone('MiniStones', 36)) exp = exp.add(-0.05)
        if(hasMilestone('MiniStones', 60)) exp = exp.add(0.2)
        if(hasMilestone('MiniStones', 80)) exp = exp.add(0.25)
        if(hasMilestone('MiniStones', 89)) exp = exp.add(0.1)
        if(hasMilestone('MiniStones', 132)) exp = exp.add(0.01)
        if(hasMilestone('MiniStones', 69)) return player[this.layer].points.pow(exp).times(layers[this.layer].milestone36Effect()).times(layers[this.layer].milestone57Effect()).times(6.9)
        if(hasMilestone('MiniStones', 56)) return player[this.layer].points.pow(exp).times(layers[this.layer].milestone36Effect()).times(layers[this.layer].milestone57Effect())
        if(hasMilestone('MiniStones', 35)) return player[this.layer].points.pow(exp).times(layers[this.layer].milestone36Effect())
        return player[this.layer].points.pow(exp)
    },
    milestone16Effect() {
        let log = new Decimal(10)
        if(hasMilestone('MiniStones', 36)) log = log.add(0.5)
        if(hasMilestone('MiniStones', 39)) log = log.add(-2)
        if(hasMilestone('MiniStones', 60)) log = log.add(-1)
        if(hasMilestone('MiniStones', 89)) log = log.add(-1.5)
        if(hasMilestone('MiniStones', 132)) log = log.add(-1)
        if(hasMilestone('MiniStones', 69)) return player['MiniPoints'].points.add(1).log(log).add(1).times(layers[this.layer].milestone36Effect()).times(layers[this.layer].milestone57Effect()).times(6.9)
        if(hasMilestone('MiniStones', 56)) return player['MiniPoints'].points.add(1).log(log).add(1).times(layers[this.layer].milestone36Effect()).times(layers[this.layer].milestone57Effect())
        if(hasMilestone('MiniStones', 35)) return player['MiniPoints'].points.add(1).log(log).add(1).times(layers[this.layer].milestone36Effect())
        return player['MiniPoints'].points.add(1).log(log).add(1)
    },
    milestone36Effect() {
        let log = new Decimal(10)
        if(hasMilestone('MiniStones', 39)) log = log.add(-1)
        if(hasMilestone('MiniStones', 49)) log = log.add(-0.5)
        if(hasMilestone('MiniStones', 60)) log = log.add(-1)
        if(hasMilestone('MiniStones', 89)) log = log.add(-1.5)
        if(hasMilestone('MiniStones', 132)) log = log.add(-1)
        if(hasMilestone('MiniStones', 69)) return player[this.layer].points.add(1).log(log).add(1).times(6.9)
        return player[this.layer].points.add(1).log(log).add(1)
    },
    milestone57Effect() {
        let log = new Decimal(10)
        if(hasMilestone('MiniStones', 89)) log = log.add(-1.5)
        if(hasMilestone('MiniStones', 116)) log = log.add(-1)
        if(hasMilestone('MiniStones', 132)) log = log.add(-1.5)
        if(hasMilestone('MiniStones', 69)) return player['MiniPoints'].points.add(1).log(log).add(1).sqrt().times(6.9)
        return player['MiniPoints'].points.add(1).log(log).add(1).sqrt()
    },
    milestone67Effect() {
        let sixsevens = new Decimal(0)
        if(hasMilestone('MiniStones', 67)) sixsevens = sixsevens.add(1) // have 1 tho
        return new Decimal(0.99).pow(sixsevens) // IDC IF THIS MAKES IT x0.01 IT'S YOUR FAULT
    },
    milestone73Effect() {
        let base = new Decimal(1.05)
        if(hasMilestone('MiniStones', 89)) base = base.add(0.05)
        if(hasMilestone('MiniStones', 132)) base = base.add(0.01)
        return base.pow(layers[this.layer].milestones[72].effectDescription().length)
    },
    milestone74Effect() {
        return new Decimal(value)
    },
    milestone81Effect() {
        let log = new Decimal(5)
        if(hasMilestone('MiniStones', 89)) log = log.add(-1.5)
        if(hasMilestone('MiniStones', 132)) log = log.add(-0.5)
        return new Decimal(2.718).pow(player[this.layer].points.log(log))
    },
    milestone109Effect() {
        let log = new Decimal(10)
        let base = new Decimal(0.9)
        if(hasMilestone('MiniStones', 117)) log = log.add(-1)
        if(hasMilestone('MiniStones', 132)) log = log.add(-1.5)
        if(hasMilestone('MiniStones', 117)) base = base.add(-0.05)
        return new Decimal(base).pow(player['MiniPoints'].points.log(log))
    },
    milestone132Effect() {
        let Devide = new Decimal(5)
        return player['MiniStones'].points.times(Devide.pow(-1)).add(1)
    },
    color: "#6800ad",
    requires: new Decimal(10),
    resource: "Milestone Points",
    baseResource: "Points",
    baseAmount() {return player['MiniPoints'].points},
    type: "static",
    exponent: 0.8,
    gainMult() {
        mult = new Decimal(1)

        if(hasMilestone(this.layer, 108)) mult = mult.times(layers[this.layer].milestone109Effect())

        //SoftCaps
        if(hasMilestone(this.layer, 50)) mult = mult.times(new Decimal(1.3).pow(player[this.layer].points.add(-50).times(5)))
        if(hasMilestone(this.layer, 74)) mult = mult.times(new Decimal(1.5).pow(player[this.layer].points.add(-74).times(2)))
        
        if(player['MiniSettings'].Mini2) return new Decimal(0)
        return mult
    },
    gainExp() {
        Exp = new Decimal(1)

        return Exp
    },
    row: "side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Milestone time" },
        },
    },
    resetsNothing: true,
    autoPrestige() {
        let Auto = false
        if(hasMilestone(this.layer, 75)) Auto = true
        return Auto
    },
    onPrestige(gain) {
        if(!hasMilestone('SuperStones', 5)) player['MiniPoints'].points = new Decimal(0)
        if(hasMilestone('SuperStones', 5) && !hasMilestone('MiniStones', 79)) player['MiniPoints'].points = player['MiniPoints'].points.sqrt()
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player['MiniPoints'].points) + ' Points' },
        { "color": "#00acac", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player[this.layer].points) + ' Milestones Points' },
        { "color": "#6800ad", "font-size": "24px"}],
        "blank",
        ["prestige-button", "normal"],
        "blank",
        "blank",
        "milestones",
    ],
    milestones: {
        0: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+"+format(getResetGain('MiniPoints'))+" Point/s"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 0) },
        },
        1: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x2 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 4) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        2: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x3 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 4) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        3: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Milestones Boost Milestone 1 Effect Currently: x"+format(layers[this.layer].milestone4Effect())
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 4) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        4: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x5 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 4) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        5: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Milestones Boost Milestone 1 Effect again Currently: x"+format(layers[this.layer].milestone6Effect())
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 4) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        6: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.05 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 4) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        7: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.05 Milestone 1 Effect again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 4) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        8: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.05 Milestone 1 Effect again again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 4) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        9: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Unlock Super MileStones (Superstones)"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 0) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        10: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.01 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        11: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.01 Base Milestone 1 Effect again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        12: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.01 Base Milestone 1 Effect again again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        13: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.01 Base Milestone 1 Effect again^3"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        14: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.01 Base Milestone 1 Effect again^4"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        15: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Points Boost Milestone 1 Effect Currently: x"+format(layers[this.layer].milestone16Effect())
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        16: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.01 Base Milestone 1 Effect again^5"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        17: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.01 Base Milestone 1 Effect again^6"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        18: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.01 Base Milestone 1 Effect again^7"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        19: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.01 Base Milestone 1 Effect again^8"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        20: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.01 Base Milestone 1 Effect again^9"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        21: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Buff Milestone 6 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        22: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x2.22 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        23: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.05 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        24: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+7,500 Milestone 1 Effect (after All Main Effects) [extra effect]"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 6) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        25: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.05 Base Milestone 1 Effect again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        26: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.05 Base Milestone 1 Effect again again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        27: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.05 Base Milestone 1 Effect again^3"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        28: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.05 Base Milestone 1 Effect again^4"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        29: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.05 Base Milestone 1 Effect again^5"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        30: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.05 Base Milestone 1 Effect again^6"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        31: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.05 Base Milestone 1 Effect again^7"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        32: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.05 Base Milestone 1 Effect again^8"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        33: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.05 Base Milestone 1 Effect again^9"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        34: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+75,000 Milestone 1 Effect (after All Main Effects) [extra effect]"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        35: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Milestones Boost Milestone 4, 6 and 16 Effects Currently x"+format(layers[this.layer].milestone36Effect())
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        36: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Nerf Milestone 4, 6 and 16 Effects but x1.5 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        37: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+500,000 Milestone 1 Effect (after All Main Effects) [extra effect]"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        38: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+1 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        39: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Buff Milestone 16 and 36 Effects"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        40: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x3.14 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        41: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "-2 Base Milestone 1 Effect but x2 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        42: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+sin(0) Base Milestone 1 Effect but xsin(pi/6) Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        43: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.2 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        44: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.1 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        45: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.05 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        46: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.02 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        47: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.01 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        48: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+1 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        49: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Buff SuperStone 4 Effect and Milestone 4 and 36 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        50: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Soft Cap Milestones"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        51: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x5 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        52: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+5 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        53: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x2.22 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        54: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "/25 Milestone 1 Effect But +2 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        55: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x4 Milestone 1 Effect and +7 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        56: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Points Boost Milestone Effect 4, 6 and 16 Effects Currently: x"+format(layers[this.layer].milestone57Effect())
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        57: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+1e13 Milestone 1 Effect (after All Main Effects) [extra effect]"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        58: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x10/9 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        59: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "(xMilestone Id/30) [x2] Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        60: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Buff Milestone 4, 6, 16 and 36 Effects"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        61: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x9.999... Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        62: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Buff Superstone 4 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        63: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "-11 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        64: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "xpi Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        65: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+6.66 Base Milestone 1 Effect and x6.66 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        66: {
            requirementDescription() {return "Milestone ..."},
            effectDescription() {
                return "FOR EVERY 6-7 JOKE x0.99 MILESTONE 1 EFFECT (Updates every Update) Currently x"+format(layers[this.layer].milestone67Effect())
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        67: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "'6-7'"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        68: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Make Milestone 67 Effect useless and x6.9 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        69: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x6.9 Milestone 4, 6, 16, 36, and 57 Effects and SuperStone 4 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        70: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "/1e6 Milestone 1 Effect -10 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        71: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0^0 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        72: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "For Each Symbol In This Milestone Boost Milestone 1 Effect"
            },
            tooltip() {return "Currently: x"+format(layers[this.layer].milestone73Effect())},
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        73: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Update Number Boost Milestone 1 Effect Currently: x"+format(layers[this.layer].milestone74Effect())
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        74: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Soft Cap Milestones again and x5 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        75: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "AutoReset for Milestones"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('SuperStones', 10) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        76: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x100 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        77: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+1 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        78: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+1 Base Milestone 1 Effect again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        79: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x25 Milestone 1 Effect and Milestones Reset Nothing"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        80: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Milestones Boost Milestone 1 Effect Currently: x"+format(layers[this.layer].milestone81Effect())
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        81: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Buff Milestone 6 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        82: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x50 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        83: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+1.0000001 Base Milestone 1 Effect and x1.0000001 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        84: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x5 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        85: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x5 Milestone 1 Effect again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        86: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x5 Milestone 1 Effect again again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        87: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x5 Milestone 1 Effect again^3"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        88: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x5 Milestone 1 Effect again^4"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        89: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+15 Base Milestone 1 Effect Buff Milestone 4, 6, 16, 36, 57, 73 and 81 Effects"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        90: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "/1,000 Milestone 1 Effect but +50 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        91: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x2 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        92: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x6 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        93: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x24 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        94: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+95 Base Milestone 1 Effect and x9.5 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        95: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "-25 Base Milestone 1 Effect but x25 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        96: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Buff SuperStone 4 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        97: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+0.9999999... Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        98: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+99 Base Milestone 1 Effect and x9.9 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        99: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x100 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        100: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+100 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        101: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x2 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        102: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x3 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        103: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x25 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        104: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+111 Base Milestone 1 Effect and x11.1 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        105: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x5 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        106: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x2 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        107: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x10.8 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        108: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Points Decrease Milestone Requirement Currently: /"+format(layers[this.layer].milestone109Effect().pow(-1))
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        109: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.000001 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        110: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.000001 Milestone 1 Effect again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        111: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.000001 Milestone 1 Effect again again"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        112: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+1e60 Milestone 1 Effect (after All Main Effects) [extra effect]"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        113: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Milestone 109 Effects SuperStones but nerfed"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        114: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x100 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        115: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+100 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        116: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Buff Milestone 57 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        117: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Buff Milestone 109 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        118: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x2 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        119: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x25 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        120: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x15 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        121: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.22 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        122: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.23 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        123: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+124 Base Milestone 1 Effect and x12.4 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        124: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.25 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        125: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.26 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        126: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.27 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        127: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x12.8 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        128: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x12.9 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        129: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+1e75 Milestone 1 Effect (after All Main Effects) [extra effect]"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        130: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+133 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        131: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Milestones Boost Milestone 1 Effect Currently: x"+format(layers[this.layer].milestone132Effect())
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        132: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Buff Milestones 4, 6, 16, 36, 57, 73, 81 and 109 Effects"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        133: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.33 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        134: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x1.33333 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        135: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x4/3 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        136: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x(1+1/3) Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        137: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x2.209 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        138: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x5,000,000 Milestone 1 Effect but /200,000 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        139: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "/0.95 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        140: {
            requirementDescription() {return "Milestone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "/0.75 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
    },
})

addLayer("SuperStones", {
    name: "Super MileStones",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    Superstone4Effect() {
        let base = new Decimal(1.1)
        if(hasMilestone('MiniStones', 49)) base = base.add(0.01)
        if(hasMilestone('MiniStones', 62)) base = base.add(0.09)
        if(hasMilestone('MiniStones', 96)) base = base.add(0.05)
        if(hasMilestone('MiniStones', 69)) return base.pow(player[this.layer].points.times(3)).times(6.9)
        return base.pow(player[this.layer].points.times(3))
    },
    color: "#a900ca",
    requires: new Decimal(10),
    resource: "Milestone Points",
    baseResource: "SuperStones Points",
    baseAmount() {return player['MiniStones'].points},
    type: "static",
    exponent: 0.8,
    base: 1.5,
    roundUpCost: true,
    gainMult() {
        mult = new Decimal(1)

        if(hasMilestone('MiniStones', 113)) mult = mult.times(layers['MiniStones'].milestone109Effect().pow(0.02))

        //SoftCaps

        if(player['MiniSettings'].Mini2) return new Decimal(0)
        return mult
    },
    gainExp() {
        Exp = new Decimal(1)

        return Exp
    },
    row: "side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Super MileStones" },
        },
    },
    resetsNothing: true,
    onPrestige(gain) {
        player['MiniPoints'].points = new Decimal(0)
        player['MiniStones'].points = new Decimal(1)
        player['MiniStones'].milestones = []
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player['MiniPoints'].points) + ' Points' },
        { "color": "#00acac", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player['MiniStones'].points) + ' Milestones Points' },
        { "color": "#6800ad", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player[this.layer].points) + ' Superstones Points' },
        { "color": "#a900ca", "font-size": "24px"}],
        "blank",
        ["prestige-button", "normal"],
        "blank",
        "blank",
        "milestones",
    ],
    milestones: {
        0: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x3 Milestone 1 Effect and Keep Milestone 1 & 10 and Have 1 Milestone Point"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('MegaStones', 0) },
        },
        1: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x2 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        2: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "/5 Milestone 1 Effect but +0.25 Base Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        3: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Superstones Boost Milestone 4 Effect Currently: x"+format(layers[this.layer].Superstone4Effect())
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        4: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "/10 Milestone 1 Effect but +1 Base Milestone 1 Effect and Keep Milestones 2-9"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        5: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Milestone Resets sqrt Points instead of Reseting them"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        6: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Keep the First 25 Milestones and x2 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        7: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+1e9 Milestone 1 Effect (after All Main Effects) [extra effect]"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        8: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "+25 Base Milestone 1 Effect and x100 Milestone 1 Effect and +1e15 Milestone 1 Effect (after All Main Effects) [extra effect]"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        9: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "Unlock Mega Milestones (Megastones)"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('MegaStones', 0) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        10: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x25 Milestone 1 Effect and Keep Milestone 76"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('MegaStones', 1) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        11: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x123 Milestone 1 Effect and +1e50 Milestone 1 Effect (after All Main Effects) [extra effect]"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        12: {
            requirementDescription() {return "Superstone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x100 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
    },
})

addLayer("MegaStones", {
    name: "Mega MileStones",
    symbol: "",
    position: 0,
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#f50173",
    requires: new Decimal(10),
    resource: "Superstone Points",
    baseResource: "MegaStones Points",
    baseAmount() {return player['SuperStones'].points},
    type: "static",
    exponent: 0.8,
    base: 1.25,
    roundUpCost: true,
    gainMult() {
        mult = new Decimal(1)

        //SoftCaps

        if(player['MiniSettings'].Mini2) return new Decimal(0)
        return mult
    },
    gainExp() {
        Exp = new Decimal(1)

        return Exp
    },
    row: "side",
    layerShown() {return false},
    infoboxes: {
        1: {
            title: "Info About this layer",
            body() { return "Mega MileStones!" },
        },
    },
    resetsNothing: true,
    onPrestige(gain) {
        player['MiniPoints'].points = new Decimal(0)
        player['MiniStones'].points = new Decimal(1)
        player['MiniStones'].milestones = []
        player['SuperStones'].points = new Decimal(1)
        player['SuperStones'].milestones = []
    },
    tabFormat: [
        ["infobox", 1],
        ["display-text",
        function() { return 'You have ' + format(player['MiniPoints'].points) + ' Points' },
        { "color": "#00acac", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player['MiniStones'].points) + ' Milestones Points' },
        { "color": "#6800ad", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player['SuperStones'].points) + ' Superstones Points' },
        { "color": "#a900ca", "font-size": "24px"}],
        ["display-text",
        function() { return 'You have ' + format(player[this.layer].points) + ' Megastones Points' },
        { "color": "#f50173", "font-size": "24px"}],
        "blank",
        ["prestige-button", "normal"],
        "blank",
        "blank",
        "milestones",
    ],
    milestones: {
        0: {
            requirementDescription() {return "Megastone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "x4 Milestone 1 Effect And Keep Superstone 1 & 10 And Have 1 Superstone Point"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) || hasMilestone('MegaStones', 0) },
        },
        1: {
            requirementDescription() {return "Megastone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "keep Superstone 11 and x5 Milestone 1 Effect"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
        2: {
            requirementDescription() {return "Megastone "+format(new Decimal(this.id).add(1))},
            effectDescription() {
                return "ENDGAME IS MEGASTONE 2"
            },
            done() { return player[this.layer].points.gte(new Decimal(this.id).add(1)) },
            unlocked() {return hasMilestone(this.layer, this.id - 1) || hasMilestone(this.layer, this.id)}
        },
    },
})
