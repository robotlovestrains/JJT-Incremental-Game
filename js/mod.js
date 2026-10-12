let modInfo = {
	name: "The JJT Incremental",
	author: "RobotLovesTrains",
	pointsName: "Skill",
	modFiles: [
		"layers_extra/MiniGameI.js",
		"layers_extra/EventOne.js",
		"layers_v2/ClassNegative.js",
		"layers_extra/MiscLayers.js",
		"layers_v2/ClassZero.js",
		"layers_extra/MiniGameII.js",
		"tree.js",
	],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (0), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version num
let value = "11.0"

// Set your version and name
let VERSION = {
	num: "Alpha "+value,
	name: "Halloween Update",
}

let changelog = `<h1>Changelog:</h1><br>
	<h3>vAlpha 11.0 Halloween Update</h3><br>
		- Added Loops In Halloween Update<br>
		- Removed The x1.5 Boost in Halloween Currentcies<br>
		- Removed v1 To make Space<br>
		- Added More Minigame Content<br>
		- Other Misc Changes<br>
		<br>
	<h3>vAlpha 10.1 Halloween Fix</h3><br>
		- Forgot to add 5 Upgrades in Halloween event<br>
		So x1.5 All Halloween Candy Currentcies (After SoftCaps)<br>
		<br>
	<h3>vAlpha 10.0 Halloween Time</h3><br>
		- Made Halloween Event Not a Teaser<br>
		- Added all the Halloween Event Content<br>
		<br>
	<h3>vAlpha 9.2 Sorry I Broke it</h3><br>
		- MADE THE GAME PLAYABLE<br>
		<br>
	<h3>vAlpha 9.1 Small Fix</h3><br>
		- Fixed a Bug about witches<bn>
		<br>
	<h3>vAlpha 9.0 Halloween Event (Mostly)</h3><br>
		- Added Winsome<br>
		- Misc/QoL Changes<br>
		- Added More Halloween Content<br>
		- Galaxy.click Chat (cuz why not it's been a while)<br>
		- Removed Achivements To save Space<br>
		<b>Notice I will <u>REMOVE</u> <u>ALL</u> of v1 To Make Space For this Game</b><br>
		EndGame: 21 TLG<br>
		<br>
	<h3>vAlpha 8.0 Class 0 (again)</h3><br>
		- Added Some Of Class 0<br>
		- Added Some QoL Changes<br>
		- Added More Minigame Content<br>
		- Fixed Some Bugs<br>
		EndGame: 20 TLG<br>
		<br>
	<h3>vAlpha 7.1 Slight Changes</h3><br>
		- Changed Some Things<br>
		<br>
	<h3>vAlpha 7.0 Win Part 3</h3><br>
		- Added more Content<br>
		- Made ITW Challenges Easier<br>
		- Fixed Some Bugs<br>
		Minigame Content Soon?<br>
		EndGame: 17 ITW<br>
		<br>
	<h3>vAlpha 6.1 Birthday End</h3><br>
		- Removed the Birthday boosts<br>
		- Did some Small Changes<br>
		<br>
	<h3>vAlpha 6.0 Win Part 2</h3><br>
		- Added more Content<br>
		- Added more MiniGame Content<br>
		- Added a Second MiniGame!<br>
		- Make Some Changes<br>
		- Added a Funny Bounus Effects<br>
		- Removed the Halloween Effect being obtainable<br>
		EndGame: 11 ITW<br>
		I had My Birthday on sep 9🎉🎉🎁🎁🎁 (the day this was released on)<br>
		<br>
	<h3>vAlpha 5.0 Win Part 1</h3><br>
		- Added more Content<br>
		- Make Some Changes<br>
		- Removed the halloween event fixer<br>
		EndGame: 3 ITW<br>
		<br>
	<h3>vAlpha 4.0 Existence</h3><br>
		- Added more Content<br>
		- Changed Some layers Colors<br>
		- Canged where the Reset button is (for some layers)<br>
		EndGame: 10 TLG<br>
		<br>
	<h3>vAlpha 3.1 Brr Fixes</h3><br>
		- Fixed the Endgame<br>
		- Fixed a Milestone<br>
		- Added a Ending Milestone<br>
		<br>
	<h3>vAlpha 3.0 More Content</h3><br>
		- Added more Layer<br>
		- Added more Content in Minigame Layer<br>
		- Change Changelog again x 2<br>
		EndGame: 5 TLG<br>
		Updates are taking longer due to upgrade tree<br>
		<br>
	<h3>vAlpha 2.1 Opps I Broke it</h3><br>
		- Fixed the Halloween effect breaking the game<br>
		Sorry :O<br>
		<br>
	<h3>vAlpha 2 small but BIG</h3><br>
		- Added more Main Content<br>
		- Added more Minigame Content<br>
		- Changed how the Halloween Effect works<br>
		- Did a Small Changelog Change<br>
		EndGame: 3 TLG<br>
		GL<br>
		<br>
	<h3>vAlpha 1.1 (Forgot Update Name F)</h3><br>
		- Did a Small Changelog Change<br>
		- Fixed the reset upgrade layer to reset points<br>
		<h3>!NOTICE!</h3> You will lose your TFD v2 on this update this is to make the game fair.<br>
		<br>
	<h3>vAlpha 1.0 Reseting (for Good reason)</h3><br>
		- Just Rework and Fixes<br>
		Too lazy to write for this update hope you like the rework<br>
		EndGame: TFD Upgrade #13<br>
		<br>
	<br><br><br>
	I added a few extra lines for readability.`

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

	if(getBuyableAmount('TFirDRM', 141).gte(1) || hasMilestone('TLGRM', 2)) gain = gain.add(player["NEGRM"].layerEffect)
	if(hasMilestone('CSHRM', 1)) gain = gain.add(new Decimal(player[this.layer].milestones.length).times(1/3))
	gain = gain.add(buyableEffect('ARM', 11))
	if(hasMilestone('CSHRM', 7)) gain = gain.add(100)

	gain = gain.times(buyableEffect('TFirDRM', 11))
	gain = gain.times(buyableEffect('TFirDRM', 21))
	gain = gain.times(buyableEffect('TFirDRM', 31))
	gain = gain.times(buyableEffect('TFirDRM', 32))
	gain = gain.times(buyableEffect('TFirDRM', 41))
	gain = gain.times(buyableEffect('TFirDRM', 71))
	gain = gain.times(buyableEffect('TFirDRM', 72))
	gain = gain.times(buyableEffect('TFirDRM', 81))
	gain = gain.times(buyableEffect('TFirDRM', 91))
	gain = gain.times(buyableEffect('NEGRM', 11))
	gain = gain.times(buyableEffect('NEGRM', 21))
	gain = gain.times(buyableEffect('NEGRM', 31))
	gain = gain.times(buyableEffect('NEGRM', 41))
	gain = gain.times(buyableEffect('NEGRM', 51))
	gain = gain.times(buyableEffect('TFirDRM', 121))
	gain = gain.times(buyableEffect('TFirDRM', 131))
	gain = gain.times(buyableEffect('TFirDRM', 132))
	gain = gain.times(buyableEffect('TFirDRM', 151))
	if(hasMilestone('CSHRM', 0)) gain = gain.times(new Decimal(2).pow(player["CSHRM"].milestones.length))
	if(hasMilestone('CSHRM', 2)) gain = gain.times(player["CSHRM"].points.add(1))
	gain = gain.times(buyableEffect('UIPRM', 11))
	gain = gain.times(buyableEffect('FLNRM', 11))
	gain = gain.times(buyableEffect('FLNRM', 31))
	gain = gain.times(buyableEffect('FLNRM', 71))
	gain = gain.times(buyableEffect('CSHRM', 11))
	gain = gain.times(new Decimal(10).pow(player['FLNRM'].level))
	gain = gain.times(buyableEffect('ARM', 12))
	if(getBuyableAmount('ARM', 13).gte(1))  gain = gain.times(buyableEffect('ARM', 13))
	if(hasMilestone('TLGRM', 8)) gain = gain.times(new Decimal(1.5).pow(player['TLGRM'].points))
	gain = gain.times(buyableEffect('ARM', 21))
	gain = gain.times(buyableEffect('IFDRM', 41))
	if(hasMilestone('IFTRM', 1)) gain = gain.times(10e3)
	gain = gain.times(buyableEffect('TFirDRM', 1011))
	gain = gain.times(buyableEffect('TFirDRM', 1021))
	gain = gain.times(buyableEffect('TFirDRM', 1031))
	gain = gain.times(buyableEffect('TFirDRM', 1032))
	gain = gain.times(buyableEffect('TFirDRM', 1041))
	gain = gain.times(buyableEffect('TFirDRM', 1071))
	gain = gain.times(buyableEffect('TFirDRM', 1072))
	gain = gain.times(buyableEffect('TFirDRM', 1081))
	gain = gain.times(buyableEffect('TFirDRM', 1091))
	gain = gain.times(buyableEffect('TFirDRM', 1101))
	gain = gain.times(buyableEffect('NEGRM', 1011))
	gain = gain.times(buyableEffect('NEGRM', 1021))
	gain = gain.times(buyableEffect('NEGRM', 1031))
	gain = gain.times(buyableEffect('NEGRM', 1041))
	gain = gain.times(buyableEffect('NEGRM', 1051))
	if(hasChallenge('ITWRM', 21)) gain = gain.times(1.5)
	if(hasChallenge('ITWRM', 32)) gain = gain.times(challengeEffect('ITWRM', 32))
	if(hasMilestone('ITWRM', 7) && !player['ITWRM'].ActiveChallenge) gain = gain.times(1e-15)
	if(hasChallenge('ITWRM', 42)) gain = gain.times(1e6)
	if(hasMilestone('ITWRM', 10)) gain = gain.times(1e-10)
	if(hasChallenge('ITWRM', 61)) gain = gain.times(1e6)
	if(hasChallenge('ITWRM', 72)) gain = gain.times(5)
	if(hasChallenge('ITWRM', 81)) gain = gain.times(5)
	if(hasChallenge('ITWRM', 82)) gain = gain.times(4)
	gain = gain.times(buyableEffect('TESRM', 12))
	if(hasMilestone('XSTRM', 5)) gain = gain.times(1e10)
	if(inChallenge('ITWRM', 91)) gain = gain.times(player['SKIPRM'].layerEffectb)
	if(hasMilestone('XSTRM', 6)) gain = gain.times(1e10)
	if(hasMilestone('CSHRM', 4)) gain = gain.times(1e10)
	if(hasMilestone('CSHRM', 5)) gain = gain.times(1e10)
	if(hasMilestone('CSHRM', 6)) gain = gain.times(1e25)
	if(hasMilestone('XSTRM', 7)) gain = gain.times(1e25)
	if(hasMilestone('CSHRM', 7)) gain = gain.times(1e20)
	if(hasMilestone('TLGRM', 17)) gain = gain.times(10)
    gain = gain.times(player['MULTRM'].layerEffect)

	if(getBuyableAmount('MSLRM', 81).gte(1)) gain = gain.times(player['MSLRM'].timeEffectc)

	let pow = new Decimal(1)
	if(inChallenge('ITWRM', 11)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 12)) pow = pow.times(0.33)
	if(inChallenge('ITWRM', 21)) pow = pow.times(0.33)
	if(inChallenge('ITWRM', 22)) pow = pow.times(0.33)
	if(inChallenge('ITWRM', 31)) pow = pow.times(0.33)
	if(inChallenge('ITWRM', 32)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 41)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 42)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 51)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 52)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 61)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 62)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 71)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 72)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 81)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 82)) pow = pow.times(0.5)
	if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 0)) pow = pow.times(0.25)
	if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 1)) pow = pow.times(0.2)
	if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 2)) pow = pow.times(0.16)
	if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 3)) pow = pow.times(0.14)
	if(inChallenge('ITWRM', 91) && (challengeCompletions('ITWRM', 91) == 4)) pow = pow.times(0.12)
	gain = gain.pow(pow)

	gain = gain.add(player["NEGRM"].layerEffect.times(-1))
	if(getBuyableAmount('TFirDRM', 141).gte(1) || hasMilestone('TLGRM', 2)) gain = gain.add(player["NEGRM"].layerEffect)

	if(gain.lt(1)) gain = new Decimal(1)

	//Misc
	if(player['HalloweenLevel'].MainEffectA) gain = gain.times(10)
	if(player['HalloweenLevel'].MainEffectC || player['HalloweenLoop'].MainEffectA) gain = gain.times(10)

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
	return hasMilestone('TLGRM', 20)
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