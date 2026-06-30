let modInfo = {
	name: "The JJT Incremental",
	author: "RobotLovesTrains",
	pointsName: "Skill",
	modFiles: ["layers.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "A1.0",
	name: "The Start (Class Negitive Part 1/2)",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>vA1.0</h3><br>
		- Added TFD->Exist<br>
		- Made 8 TLG Milestones<br>
		- Made 70 Upgrades<br>
		- Made 23 Milestones<br>
		EndGame 1e135 Points`

let winText = `Congratulations! You have reached the end and beaten this game, but for now...`

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
	gain = gain.times(new Decimal(3).pow(getBuyableAmount('UIP', 11)))
	if(hasMilestone('TLG', 2)) gain = gain.times(2)
	if(hasMilestone('$', 0)) gain = gain.times(2)
	if(hasMilestone('$', 1)) gain = gain.times(5)
	if(hasMilestone('$', 2)) gain = gain.times(1.5)
	if(hasMilestone('$', 4)) gain = gain.times(1.3)
	if(hasMilestone('$', 5)) gain = gain.times(10)
	if(hasUpgrade('Neg', 21)) gain = gain.times(1.3)
	if(hasUpgrade('Neg', 24)) gain = gain.times(1000)
	if(hasUpgrade('Neg', 25)) gain = gain.times(10)
	if(hasMilestone('$', 7)) gain = gain.times(Math.log10(player.points.add(1)))
	if(hasUpgrade('FLN', 13)) gain = gain.times(upgradeEffect('FLN', 13))
	if(hasUpgrade('FLN', 14)) gain = gain.times(100)
	if(hasUpgrade('TES', 12)) gain = gain.times(upgradeEffect('TES', 12))
	if(hasUpgrade('TES', 13)) gain = gain.times(1000)
	if(hasUpgrade('TFD', 32)) gain = gain.times(10000)
	if(hasUpgrade('$', 11)) gain = gain.times(upgradeEffect('$', 11))
	if(hasUpgrade('FLN', 23)) gain = gain.times(100)
	gain = gain.times(new Decimal(2).pow(getBuyableAmount('A', 13)))
	if(hasUpgrade('A', 41)) gain = gain.times(10000)
	if(hasMilestone('XST', 1)) gain = gain.times(10)
	
	if(hasUpgrade('Neg', 11)) gain = gain.add(upgradeEffect('Neg', 11).times(-1))
	if(hasUpgrade('Neg', 11) || hasUpgrade('FLN', 11)) gain = gain.add(upgradeEffect('Neg', 11).times(2))
	if(hasUpgrade('Neg', 23)) gain = gain.times(upgradeEffect('Neg', 23).pow(-1))
	
	if(gain < 0) gain = new Decimal(0)
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
	return player.points.gte(new Decimal("1e135"))
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