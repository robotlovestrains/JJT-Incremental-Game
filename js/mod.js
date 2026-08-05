let modInfo = {
	name: "The JJT Incremental",
	author: "RobotLovesTrains",
	pointsName: "Skill",
	modFiles: [
		"layers_v1/LayerNegative.js",
		"layers_v1/ClassNegative.js",
		"layers_v1/LayerZero.js",
		"layers_extra/MiniGame.js",
		"layers_extra/EventOne.js",
		"layers_v2/ClassNegative.js",
		"tree.js",
	],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "Alpha2.1",
	name: "Opps I Broke it",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>vAlpha2.1 Opps I Broke it</h3><br>
		- Fixed the Halloween effect breaking the game<br>
		Sorry :O<br>
		<br>
	<h3>vAlpha2 small but BIG</h3><br>
		- Added more Main Content<br>
		- Added more Minigame Content<br>
		- Changed how the Halloween Effect works<br>
		- Did a Small Changelog Change<br>
		GL<br>
		<br>
	<h3>vAlpha1.1 / A4.1 Reseting (for Good reason)</h3><br>
		- Did a Small Changelog Change<br>
		- Fixed first TLG first milestone for v1<br>
		- Fixed the reset upgrade layer to reset points<br>
		<h3>!NOTICE!</h3> You will lose your TFD v2 on this update this is to make the game fair.<br>
		<br>
	<h3>vAlpha1.0 / A4.0 Reseting (for Good reason)</h3><br>
		- Just Rework and Fixes<br>
		Too lazy to write for this update hope you like the rework<br>
		<br>
	<h3>vA3.4 Instant Fixed</h3><br>
		- Changed Some Milestones again x 2 and Upgrades again slightly<br>
		bruh<br>
		it's not so hard to fix these<br>
		but i feel like you guy are making it a mission<br>
		to Descover these Problems Thx for the Help. ;)<br>
		also I'll add content next update. Have Fun<br>
		<br>
	<h3>vA3.3 More Fixes and Sneak Peek</h3><br>
		- Added a sneak peek<br>
		- Changed ДА Reset slightly again<br>
		- Changed Some Upgrades slightly<br>
		<br>
	<h3>vA3.2 Timewall Remover</h3><br>
		- Removed some Timewalls<br>
		- Added a minigame<br>
		- Added a event (Used later for events)<br>
		- Fixed a error bug<br>
		- Fixed some Milestones<br>
		- Changed ДА Reset slightly<br>
		- Changed Some Upgrades slightly<br>
		- Changed How Autobuying Buyables Work slightly<br>
		- Broke the endgame and minigame achievments<br>
		Sad :(<br>
		<br>
	<h3>vA3.1 Bugs Gone part 1</h3><br>
		- Made the Game Possible but Hard<br>
		- Changed how the Softcaps for Skill Work<br>
		Sad :(<br>
		<br>
	<h3>vA3.0 Class 0 Automatic</h3><br>
		- Made some Upgrades show the correct Tooltip<br>
		- Made 2 (or 1.5?) More TLG<br>
		- Added 35 More Upgrades<br>
		- Added 19 More Milestones<br>
		EndGame: 18 TLG<br>
		<br>
	<h3>vA2.2 Fixes Agaib</h3><br>
		- Made some Upgrades show the correct effect<br>
		- fixed the game not loading<br>
		Opps ;(<br>
		<br>
	<h3>vA2.1 The Bugs Fixes</h3><br>
		- Fixed a Bug with Upgrade Neg 11 Not Working Properly<br>
		- Fixed a Bug with UIP Buyables' Prices Incrorectly<br>
		Hope that is all. :)<br>
		<br>
	<h3>vA2.0 The Class Negative</h3><br>
		- Made Relax->Instant Win<br>
		- Changed How the ДА Upgrades unlock<br>
		- Fixed the Export Save Feature<br>
		- Added 7 More TLG Milestones<br>
		- Added 60 More Upgrades<br>
		- Added 33 More Milestones<br>
		EndGame: 1e3244 Points<br>
		<br>
	<h3>vA1.1 The Fixes Update</h3><br>
		- Made some Difficulties brighter<br>
		- Fixed some Text errors<br>
		- Fixes some bugs<br>
		- Added caps to upgrades (XA2.0 thing)<br>
		- Update A2.0 <s>Will Release on July 8th.</s> (Released)<br>
		<br>
	<h3>vA1.0 The Start</h3><br>
		- Added TFD->Exist<br>
		- Made 8 TLG Milestones<br>
		- Made 70 Upgrades<br>
		- Made 23 Milestones<br>
		EndGame: 1e135 Points`

let winText = `Congratulations! You have reached the end and beaten this Update, but for now...`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints())
		return new Decimal(0)

	let gain = new Decimal(1)
	//Layers -1
	if(hasUpgrade('Neg', 12)) gain = gain.add(2)
	if(hasUpgrade('Neg', 14)) gain = gain.add(upgradeEffect('Neg', 14))
	if(hasMilestone('$', 3)) gain = gain.add(2)

	if(hasUpgrade('TFD', 11)) gain = gain.times(2)
	if(hasUpgrade('TFD', 12)) gain = gain.times(2)
	if(hasUpgrade('TFD', 13)) gain = gain.times(2.5)
	if(hasUpgrade('TFD', 14)) gain = gain.times(upgradeEffect('TFD', 14))
	if(hasUpgrade('TFD', 15)) gain = gain.times(upgradeEffect('TFD', 15))
	if(hasUpgrade('TFD', 22)) gain = gain.times(1.5)
	if(hasMilestone('TFD', 0)) gain = gain.times(2)
	if(hasMilestone('TFD', 3)) gain = gain.times(5)
	if(hasMilestone('TFD', 4)) gain = gain.times(15)
	if(hasMilestone('TLG', 1)) gain = gain.times(5)
	if(hasUpgrade('UIP', 11)) gain = gain.times(9)
	if(getBuyableAmount('UIP', 11).gte(1)) gain = gain.times(new Decimal(3).pow(getBuyableAmount('UIP', 11)))
	if(hasMilestone('TLG', 2)) gain = gain.times(2)
	if(hasMilestone('$', 0)) gain = gain.times(2)
	if(hasMilestone('$', 1)) gain = gain.times(5)
	if(hasMilestone('$', 2)) gain = gain.times(1.5)
	if(hasMilestone('$', 4)) gain = gain.times(1.3)
	if(hasMilestone('$', 5)) gain = gain.times(10)
	if(hasUpgrade('Neg', 21)) gain = gain.times(1.3)
	if(hasUpgrade('Neg', 24)) gain = gain.times(1000)
	if(hasUpgrade('Neg', 25)) gain = gain.times(10)
	if(hasMilestone('$', 7)) gain = gain.times(new Decimal.min((player.points.add(10)).log10(), new Decimal(100)))
	if(hasUpgrade('FLN', 13)) gain = gain.times(upgradeEffect('FLN', 13))
	if(hasUpgrade('FLN', 14)) gain = gain.times(100)
	if(hasUpgrade('TES', 12)) gain = gain.times(upgradeEffect('TES', 12))
	if(hasUpgrade('TES', 13)) gain = gain.times(1000)
	if(hasUpgrade('TFD', 32)) gain = gain.times(10000)
	if(hasUpgrade('$', 11)) gain = gain.times(upgradeEffect('$', 11))
	if(hasUpgrade('FLN', 23)) gain = gain.times(100)
	if(getBuyableAmount('A', 13).gte(1)) gain = gain.times(new Decimal(2).pow(getBuyableAmount('A', 13)))
	if(hasUpgrade('A', 41)) gain = gain.times(10000)
	if(hasMilestone('XST', 1)) gain = gain.times(1000000)
	if(hasUpgrade('TFD', 35)) gain = gain.times(100)
	if(getBuyableAmount('TES', 11).gte(1)) gain = gain.times(new Decimal(1.01).pow(getBuyableAmount('TES', 11)))
	if(hasUpgrade('TES', 22)) gain = gain.times(100)
	if(hasUpgrade('TES', 23)) gain = gain.times(10)
	if(hasUpgrade('A', 42)) gain = gain.times(100)
	if(hasUpgrade('A', 43)) gain = gain.times(25)
	if(hasUpgrade('A', 44)) gain = gain.times(10)
	if(hasUpgrade('A', 45)) gain = gain.times(2)
	if(hasUpgrade('SKIP', 12)) gain = gain.times(1e10)
	if(hasUpgrade('SKIP', 21)) gain = gain.times(10)
	if(hasUpgrade('SKIP', 22)) gain = gain.times(5)
	if(hasUpgrade('SKIP', 23)) gain = gain.times(10)
	if(hasUpgrade('SKIP', 24)) gain = gain.times(2)
	if(hasUpgrade('SKIP', 25)) gain = gain.times(25)
	if(hasMilestone('XST', 5)) gain = gain.times(new Decimal(10).pow(player.XST.points))
	if(hasUpgrade('MULTI', 11)) gain = gain.times(upgradeEffect('MULTI', 11))
	if(hasUpgrade('RSF', 14)) gain = gain.times(10000000)
	if(hasUpgrade('IF.', 11)) gain = gain.times(1e150)
	if(hasUpgrade('IFS', 11)) gain = gain.times(1e100)
	if(hasUpgrade('IFT', 11)) gain = gain.times(1e200)
	if(hasMilestone('ITW', 0)) gain = gain.times(1e10)
	if(hasUpgrade('TFD', 41)) gain = gain.times(1e50)
	if(hasUpgrade('TFD', 42)) gain = gain.times(1e45)
	if(hasUpgrade('TFD', 43)) gain = gain.times(1e40)
	if(hasUpgrade('TFD', 44)) gain = gain.times(1e35)
	if(hasUpgrade('TFD', 45)) gain = gain.times(1e25)
	if(hasMilestone('ITW', 1)) gain = gain.times(1e10)
	if(hasMilestone('ITW', 2)) gain = gain.times(1e75)
	if(hasMilestone('ITW', 3)) gain = gain.times(1e100)
	if(hasMilestone('ITW', 4)) gain = gain.times(1e10)
	if(hasMilestone('$', 9)) gain = gain.times(1e150)
	if(hasMilestone('ITW', 5)) gain = gain.times(1e10)
	if(hasUpgrade('FLN', 31)) gain = gain.times(10000)
	if(hasUpgrade('FLN', 32)) gain = gain.times(1000)
	if(hasUpgrade('FLN', 33)) gain = gain.times(100)
	if(hasUpgrade('FLN', 34)) gain = gain.times(10)
	if(hasUpgrade('FLN', 35)) gain = gain.times(1e10)
	if(hasUpgrade('FLN', 41)) gain = gain.times(upgradeEffect('FLN', 41))
	if(hasMilestone('ITW', 6)) gain = gain.times(new Decimal(1e15).pow(-1))
	if(getBuyableAmount('TES', 11).gte(1) && hasMilestone('ITW', 6)) gain = gain.times(new Decimal(1.01).pow(getBuyableAmount('TES', 11)).pow(-1))
	if(getBuyableAmount('TES', 11).gte(1) && hasMilestone('ITW', 6)) gain = gain.times(new Decimal(1.1).pow(getBuyableAmount('TES', 11)))
	if(hasMilestone('ITW', 7)) gain = gain.times(1e10)
	if(hasUpgrade('IF.', 12)) gain = gain.times(1e150)
	if(hasUpgrade('IF.', 13)) gain = gain.times(1e50)
	if(hasUpgrade('IFS', 12)) gain = gain.times(1e150)
	if(hasUpgrade(this.layer, 12)) gain = gain.times(1e25)
    if(hasUpgrade(this.layer, 13)) gain = gain.times(1e50)
	if(hasUpgrade(this.layer, 14)) gain = gain.times(1e200)
	if(hasMilestone('ITW', 17)) gain = gain.times(new Decimal('e2000'))
	
	if(hasUpgrade('Neg', 11)) gain = gain.add((upgradeEffect('Neg', 11)).times(-1))
	if(hasUpgrade('Neg', 11) && hasUpgrade('FLN', 11)) gain = gain.add(upgradeEffect('Neg', 11).times(2))
	if(hasUpgrade('Neg', 23)) gain = gain.times(upgradeEffect('Neg', 23).pow(-1))
	
	//Class -1
	if(hasMilestone('TLG', 16)) gain = gain.times(new Decimal(10).pow(-1))
	if(hasUpgrade('CNT', 11)) gain = gain.times(2)
	if(hasUpgrade('CNT', 12)) gain = gain.times(3)
	if(hasUpgrade('CNT', 13)) gain = gain.times(2.5)
	if(hasUpgrade('CNT', 14)) gain = gain.times(3.14)
	if(hasUpgrade('CNT', 15)) gain = gain.times(Math.PI)
	if(hasUpgrade('CNT', 22)) gain = gain.times(1.5)
	if(hasUpgrade('CNT', 23)) gain = gain.times(5)
	if(hasUpgrade('CNT', 24)) gain = gain.times(10)
	if(hasUpgrade('CNT', 25)) gain = gain.times(11)
	if(hasUpgrade('CNT', 31)) gain = gain.times(upgradeEffect('CNT', 31))
	if(hasMilestone('S', 0)) gain = gain.times(2)
	if(hasMilestone('S', 1)) gain = gain.times(3)
	if(hasMilestone('S', 2)) gain = gain.times(5)
	if(hasMilestone('S', 4)) gain = gain.times(new Decimal.min(player.S.points.pow(2).add(1), new Decimal(1000000)))
	if(hasUpgrade('CNT', 34)) gain = gain.times(20)
	if(hasMilestone('MULT', 0)) gain = gain.times(new Decimal.min(new Decimal(10).tetrate(player.MULT.points.pow(0.2)), new Decimal(1e10)))
	if(hasUpgrade('MULT', 11)) gain = gain.times(10)
	if(hasUpgrade('MULT', 12)) gain = gain.times(25)
	if(hasUpgrade('MULT', 14)) gain = gain.times(upgradeEffect('MULT', 14))
	if(hasUpgrade('CNT', 41)) gain = gain.times(1e25)
	if(hasUpgrade('CNT', 42)) gain = gain.times(1e40)
	if(hasUpgrade('CNT', 43)) gain = gain.times(1e75)
	if(hasUpgrade('CNT', 44)) gain = gain.times(1e150)
	if(hasUpgrade('CNT', 45)) gain = gain.times(1e250)
	if(hasUpgrade('MULT', 21)) gain = gain.times(1e25)
	if(hasUpgrade('MULT', 22)) gain = gain.times(1e50)
	if(hasUpgrade('MULT', 24)) gain = gain.times(1e150)
	if(hasUpgrade('MSL', 12)) gain = gain.times(1e250)
	if(hasUpgrade('MSL', 13)) gain = gain.times('e1000')
	if(hasUpgrade('Win', 11)) gain = gain.times(1e10)
	if(hasUpgrade('Win', 12)) gain = gain.times(100)
	if(hasUpgrade('Win', 13)) gain = gain.times(1e10)
	if(hasUpgrade('Win', 14)) gain = gain.times('e1000')

	if(hasUpgrade('MSL', 14)) gain = gain.pow(2)
	if(hasUpgrade('MSL', 15)) gain = gain.pow(3)
	if(hasUpgrade('MSL', 21)) gain = gain.pow(5)
	if(hasUpgrade('MSL', 22)) gain = gain.pow(7.5)
	if(hasUpgrade('MSL', 23)) gain = gain.pow(10)
	if(hasUpgrade('MSL', 24)) gain = gain.pow(15)

	//Layers 0

	//Softcaps
	if(gain.gte(new Decimal(1.79e308))) {
		gain = gain.times((gain.add(new Decimal(1.79e308).times(-1)).pow(0.001)).pow(-1))
		modInfo.pointsName = "Skill (Softcap I)"
	}
	else 
	{
		modInfo.pointsName = "Skill"
	}
	if(gain.gte(new Decimal('e400'))) {
		gain = gain.times((gain.add(new Decimal('e400').times(-1)).pow(0.0005)).pow(-1))
		modInfo.pointsName = "Skill (Softcap I)"
	}
	if(gain.gte(new Decimal('e500'))) {
		gain = gain.times((gain.add(new Decimal('e500').times(-1)).pow(0.0025)).pow(-1))
		modInfo.pointsName = "Skill (Softcap II)"
	}
	if(gain.gte(new Decimal('e600'))) {
		gain = gain.times((gain.add(new Decimal('e600').times(-1)).pow(0.0125)).pow(-1))
		modInfo.pointsName = "Skill (Softcap III)"
	}
	if(gain.gte(new Decimal('e700'))) {
		gain = gain.times((gain.add(new Decimal('e700').times(-1)).pow(0.0625)).pow(-1))
		modInfo.pointsName = "Skill (Softcap IV)"
	}
	if(gain.gte(new Decimal('e800'))) {
		gain = gain.times((gain.add(new Decimal('e800').times(-1)).pow(0.0625)).pow(-1))
		modInfo.pointsName = "Skill (Softcap V)"
	}
	if(gain.gte(new Decimal('e900'))) {
		gain = gain.times((gain.add(new Decimal('e900').times(-1)).pow(0.0625)).pow(-1))
		modInfo.pointsName = "Skill (Softcap VI)"
	}
	if(gain.gte(new Decimal('e1005'))) {
		gain = gain.times((gain.add(new Decimal('e1005').times(-1)).pow(0.018625)).pow(-1))
		modInfo.pointsName = "Skill (Supercap I)"
	}
	if(gain.gte(new Decimal('e1500'))) {
		gain = gain.times((gain.add(new Decimal('e1500').times(-1)).pow(0.03125)).pow(-1))
		modInfo.pointsName = "Skill (Supercap II)"
	}
	if(gain.gte(new Decimal('e2000'))) {
		gain = gain.times((gain.add(new Decimal('e2000').times(-1)).pow(0.0625)).pow(-1))
		modInfo.pointsName = "Skill (Supercap III)"
	}
	if(gain.gte(new Decimal('e2500'))) {
		gain = gain.times((gain.add(new Decimal('e2500').times(-1)).pow(0.125)).pow(-1))
		modInfo.pointsName = "Skill (Supercap IV)"
	}
	if(gain.gte(new Decimal('e3000'))) {
		gain = gain.times((gain.add(new Decimal('e3000').times(-1)).pow(0.25)).pow(-1))
		modInfo.pointsName = "Skill (Supercap V)"
	}
	if(gain.gte(new Decimal('e3500'))) {
		gain = gain.times((gain.add(new Decimal('e3500').times(-1)).pow(0.5)).pow(-1))
		modInfo.pointsName = "Skill (Supercap VI)"
	}
	if(gain.gte(new Decimal('e4000'))) {
		gain = gain.times((gain.add(new Decimal('e4000').times(-1)).pow(0.5)).pow(-1))
		modInfo.pointsName = "Skill (Supercap VII)"
	}
	if(gain.gte(new Decimal('e4500'))) {
		gain = gain.times((gain.add(new Decimal('e4500').times(-1)).pow(0.5)).pow(-1))
		modInfo.pointsName = "Skill (Supercap VIII)"
	}
	if(gain.gte(new Decimal('e5000'))) {
		gain = gain.times((gain.add(new Decimal('e5000').times(-1)).pow(0.5)).pow(-1))
		modInfo.pointsName = "Skill (Ultracap I)"
	}
	if(gain.gte(new Decimal('e7500'))) {
		gain = gain.times((gain.add(new Decimal('e7500').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Ultracap II)"
	}
	if(gain.gte(new Decimal('e10000'))) {
		gain = gain.times((gain.add(new Decimal('e10000').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Ultracap III)"
	}
	if(gain.gte(new Decimal('e12500'))) {
		gain = gain.times((gain.add(new Decimal('e12500').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Ultracap IV)"
	}
	if(gain.gte(new Decimal('e15000'))) {
		gain = gain.times((gain.add(new Decimal('e15000').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Ultracap V)"
	}
	if(gain.gte(new Decimal('e17500'))) {
		gain = gain.times((gain.add(new Decimal('e17500').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Ultracap VI)"
	}
	if(gain.gte(new Decimal('e20000'))) {
		gain = gain.times((gain.add(new Decimal('e20000').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Ultracap VII)"
	}
	if(gain.gte(new Decimal('e22500'))) {
		gain = gain.times((gain.add(new Decimal('e22500').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Ultracap VIII)"
	}
	if(gain.gte(new Decimal('e25000'))) {
		gain = gain.times((gain.add(new Decimal('e25000').times(-1)).pow(0.5)).pow(-1))
		modInfo.pointsName = "Skill (Pre-Maxcap I)"
	}
	if(gain.gte(new Decimal('e30000'))) {
		gain = gain.times((gain.add(new Decimal('e30000').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Pre-Maxcap II)"
	}
	if(gain.gte(new Decimal('e35000'))) {
		gain = gain.times((gain.add(new Decimal('e35000').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Pre-Maxcap III)"
	}
	if(gain.gte(new Decimal('e40000'))) {
		gain = gain.times((gain.add(new Decimal('e40000').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Pre-Maxcap IV)"
	}
	if(gain.gte(new Decimal('e45000'))) {
		gain = gain.times((gain.add(new Decimal('e45000').times(-1)).pow(0.1)).pow(-1))
		modInfo.pointsName = "Skill (Pre-Maxcap V)"
	}

	if(gain < 1) gain = new Decimal(1)

	if(player.points.gte(new Decimal('e50000'))) {
		gain = new Decimal(0)
		modInfo.pointsName = "Skill (Hardcap)"
	}

	//Rework

	if(hasUpgrade('BSG', 11)) {
		gain = new Decimal(1)
		modInfo.pointsName = "Skill"
	}

	if(getBuyableAmount('TFDRM', 141).gte(1)) gain = gain.add(player["NEGRM"].layerEffect)
	if(hasMilestone('CSHRM', 1)) gain = gain.add(new Decimal(player[this.layer].milestones.length).times(1/3))

	gain = gain.times(buyableEffect('TFDRM', 11))
	gain = gain.times(buyableEffect('TFDRM', 21))
	gain = gain.times(buyableEffect('TFDRM', 31))
	gain = gain.times(buyableEffect('TFDRM', 32))
	gain = gain.times(buyableEffect('TFDRM', 41))
	gain = gain.times(buyableEffect('TFDRM', 71))
	gain = gain.times(buyableEffect('TFDRM', 72))
	gain = gain.times(buyableEffect('TFDRM', 81))
	gain = gain.times(buyableEffect('TFDRM', 91))
	gain = gain.times(buyableEffect('NEGRM', 11))
	gain = gain.times(buyableEffect('NEGRM', 21))
	gain = gain.times(buyableEffect('NEGRM', 31))
	gain = gain.times(buyableEffect('NEGRM', 41))
	gain = gain.times(buyableEffect('NEGRM', 51))
	gain = gain.times(buyableEffect('TFDRM', 121))
	gain = gain.times(buyableEffect('TFDRM', 131))
	gain = gain.times(buyableEffect('TFDRM', 132))
	gain = gain.times(buyableEffect('TFDRM', 151))
	if(hasMilestone('CSHRM', 0)) gain = gain.times(new Decimal(2).pow(player["CSHRM"].milestones.length))
	if(hasMilestone('CSHRM', 2)) gain = gain.times(player["CSHRM"].points.add(1))

	gain = gain.add(player["NEGRM"].layerEffect.times(-1))
	if(getBuyableAmount('TFDRM', 141).gte(1)) gain = gain.add(player["NEGRM"].layerEffect)

	if(gain < 1) gain = new Decimal(1)

	//Misc
	player['HalloweenLevel'].MainEffectA = hasMilestone('HalloweenLevel', 1) //remove after halloween event
	if(player['HalloweenLevel'].MainEffectA) gain = gain.times(10)

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	//return getBuyableAmount('TFDRM', 101).gte(1)
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {
	
}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){

}