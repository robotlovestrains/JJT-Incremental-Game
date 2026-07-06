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
	num: "A2.1",
	name: "The Bugs Fixes",
}

let changelog = `<h1>Changelog:</h1><br>
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
	if(getBuyableAmount('UIP', 11) > 0) gain = gain.times(new Decimal(3).pow(getBuyableAmount('UIP', 11)))
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
	if(getBuyableAmount('A', 13) > 0) gain = gain.times(new Decimal(2).pow(getBuyableAmount('A', 13)))
	if(hasUpgrade('A', 41)) gain = gain.times(10000)
	if(hasMilestone('XST', 1)) gain = gain.times(1000000)
	if(hasUpgrade('TFD', 35)) gain = gain.times(100)
	if(getBuyableAmount('TES', 11) > 0) gain = gain.times(new Decimal(1.01).pow(getBuyableAmount('TES', 11)))
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
	if(hasMilestone('ITW', 2)) gain = gain.times(new Decimal(1e25).pow(-1))
	if(hasMilestone('ITW', 3)) gain = gain.times(1e35)
	if(hasMilestone('ITW', 4)) gain = gain.times(1e10)
	if(hasMilestone('$', 9)) gain = gain.times(1e75)
	if(hasMilestone('ITW', 5)) gain = gain.times(1e10)
	if(hasUpgrade('FLN', 31)) gain = gain.times(10000)
	if(hasUpgrade('FLN', 32)) gain = gain.times(1000)
	if(hasUpgrade('FLN', 33)) gain = gain.times(100)
	if(hasUpgrade('FLN', 34)) gain = gain.times(10)
	if(hasUpgrade('FLN', 35)) gain = gain.times(1e10)
	if(hasUpgrade('FLN', 41)) gain = gain.times(upgradeEffect('FLN', 41))
	if(hasMilestone('ITW', 6)) gain = gain.times(new Decimal(1e15).pow(-1))
	if(getBuyableAmount('TES', 11) > 0 && hasMilestone('ITW', 6)) gain = gain.times(new Decimal(1.01).pow(getBuyableAmount('TES', 11)).pow(-1))
	if(getBuyableAmount('TES', 11) > 0 && hasMilestone('ITW', 6)) gain = gain.times(new Decimal(1.1).pow(getBuyableAmount('TES', 11)))
	if(hasMilestone('ITW', 7)) gain = gain.times(1e10)
	if(hasUpgrade('IF.', 12)) gain = gain.times(1e150)
	if(hasUpgrade('IF.', 13)) gain = gain.times(1e50)
	if(hasUpgrade('IFS', 12)) gain = gain.times(1e150)
	if(hasUpgrade(this.layer, 12)) gain = gain.times(1e25)
    if(hasUpgrade(this.layer, 13)) gain = gain.times(1e50)
	if(hasUpgrade(this.layer, 14)) gain = gain.times(1e200)
	if(hasMilestone('ITW', 17)) gain = gain.times(new Decimal('e1000'))
	
	if(hasUpgrade('Neg', 11)) gain = gain.add((upgradeEffect('Neg', 11)).times(-1))
	if(hasUpgrade('Neg', 11) && hasUpgrade('FLN', 11)) gain = gain.add(upgradeEffect('Neg', 11).times(2))
	if(hasUpgrade('Neg', 23)) gain = gain.times(upgradeEffect('Neg', 23).pow(-1))
	
	if(player.points.gte(new Decimal(1.79e308))) {
		gain = gain.pow((player.points.add(new Decimal(1.79e308).times(-1)).pow(0.001)).pow(-1))
		modInfo.pointsName = "Skill (Softcap I)"
	}
	else 
	{
		modInfo.pointsName = "Skill"
	}
	if(player.points.gte(new Decimal('e400'))) {
		gain = gain.pow((player.points.add(new Decimal('e400').times(-1)).pow(0.0005)).pow(-1))
		modInfo.pointsName = "Skill (Softcap II)"
	}
	if(player.points.gte(new Decimal('e500'))) {
		gain = gain.pow((player.points.add(new Decimal('e500').times(-1)).pow(0.0025)).pow(-1))
		modInfo.pointsName = "Skill (Softcap II)"
	}
	if(player.points.gte(new Decimal('e600'))) {
		gain = gain.pow((player.points.add(new Decimal('e600').times(-1)).pow(0.0125)).pow(-1))
		modInfo.pointsName = "Skill (Softcap III)"
	}
	if(player.points.gte(new Decimal('e700'))) {
		gain = gain.pow((player.points.add(new Decimal('e700').times(-1)).pow(0.0625)).pow(-1))
		modInfo.pointsName = "Skill (Softcap IV)"
	}
	if(player.points.gte(new Decimal('e800'))) {
		gain = gain.pow((player.points.add(new Decimal('e800').times(-1)).pow(0.3125)).pow(-1))
		modInfo.pointsName = "Skill (Softcap V)"
	}
	if(player.points.gte(new Decimal('e900'))) {
		gain = gain.pow((player.points.add(new Decimal('e900').times(-1)).pow(1.5625)).pow(-1))
		modInfo.pointsName = "Skill (Softcap VI)"
	}
	if(player.points.gte(new Decimal('e1000'))) {
		gain = gain.pow((player.points.add(new Decimal('e1000').times(-1)).pow(3)).pow(-1))
		modInfo.pointsName = "Skill (Supercap I)"
	}
	if(player.points.gte(new Decimal('e1500'))) {
		gain = gain.pow((player.points.add(new Decimal('e1500').times(-1)).pow(9)).pow(-1))
		modInfo.pointsName = "Skill (Supercap II)"
	}
	if(player.points.gte(new Decimal('e2000'))) {
		gain = gain.pow((player.points.add(new Decimal('e2000').times(-1)).pow(27)).pow(-1))
		modInfo.pointsName = "Skill (Supercap III)"
	}
	if(player.points.gte(new Decimal('e2500'))) {
		gain = gain.pow((player.points.add(new Decimal('e2500').times(-1)).pow(81)).pow(-1))
		modInfo.pointsName = "Skill (Supercap IV)"
	}
	if(player.points.gte(new Decimal('e3000'))) {
		gain = gain.pow((player.points.add(new Decimal('e3000').times(-1)).pow(243)).pow(-1))
		modInfo.pointsName = "Skill (Supercap V)"
	}
	if(gain < 0.1) gain = new Decimal(0.1)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
	//Save:
	// eyJ0YWIiOiJvcHRpb25zLXRhYiIsIm5hdlRhYiI6InRyZWUtdGFiIiwidGltZSI6MTc4MzM0MjcxNTkwNywibm90aWZ5Ijp7fSwidmVyc2lvblR5cGUiOiJUaGUtSkpULUluY3JlbWVudGFsLVJvYm90TG92ZXNUcmFpbnMiLCJ2ZXJzaW9uIjoiQTIuMCIsInRpbWVQbGF5ZWQiOjExODU3LjcyNzAwMDAwMDU0NSwia2VlcEdvaW5nIjp0cnVlLCJoYXNOYU4iOnRydWUsInBvaW50cyI6IjQuMjU3NDU0NDIwMTQ4NzA4ZTMyNDciLCJzdWJ0YWJzIjp7ImNoYW5nZWxvZy10YWIiOnt9fSwibGFzdFNhZmVUYWIiOiJUTEciLCJpbmZvYm94ZXMiOnsiVEZEIjp7ImxvcmUiOmZhbHNlfSwiVExHIjp7ImxvcmUiOmZhbHNlfSwiTmVnIjp7ImxvcmUiOmZhbHNlfSwiVUlQIjp7ImxvcmUiOmZhbHNlfSwiJCI6eyJsb3JlIjpmYWxzZX0sIkZMTiI6eyJsb3JlIjpmYWxzZX0sIlRFUyI6eyJsb3JlIjpmYWxzZX0sIkEiOnsibG9yZSI6ZmFsc2V9LCLDg8KQw4LClMODwpDDgsKQIjp7ImxvcmUiOmZhbHNlfSwiWFNUIjp7ImxvcmUiOmZhbHNlfSwiUkFYIjp7ImxvcmUiOmZhbHNlfSwiU0tJUCI6eyJsb3JlIjpmYWxzZX0sIk1VTFRJIjp7ImxvcmUiOmZhbHNlfSwiUlNGIjp7ImxvcmUiOmZhbHNlfSwiSUYuIjp7ImxvcmUiOmZhbHNlfSwiSUZTIjp7ImxvcmUiOmZhbHNlfSwiSUZUIjp7ImxvcmUiOmZhbHNlfSwiSVRXIjp7ImxvcmUiOmZhbHNlfSwiQUEiOnsibG9yZSI6ZmFsc2V9LCJTIjp7ImxvcmUiOmZhbHNlfSwiQcODwpDDgsKQIjp7ImxvcmUiOmZhbHNlfSwiQcOQwpAiOnsibG9yZSI6ZmFsc2V9LCJB0JAiOnsibG9yZSI6ZmFsc2V9fSwiaW5mby10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMTg1Ny43MjcwMDAwMDA1NDUsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwib3B0aW9ucy10YWIiOnsidW5sb2NrZWQiOnRydWUsInRvdGFsIjoiMCIsImJlc3QiOiIwIiwicmVzZXRUaW1lIjoxMTg1Ny43MjcwMDAwMDA1NDUsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiY2hhbmdlbG9nLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjExODU3LjcyNzAwMDAwMDU0NSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJibGFuayI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjExODU3LjcyNzAwMDAwMDU0NSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJ0cmVlLXRhYiI6eyJ1bmxvY2tlZCI6dHJ1ZSwidG90YWwiOiIwIiwiYmVzdCI6IjAiLCJyZXNldFRpbWUiOjExODU3LjcyNzAwMDAwMDU0NSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJURkQiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjMuMzg2MDA0MDA4ODkyODVlMTk0NCIsInRvdGFsIjoiMy4zODYwMDQwMDg4OTI4NWUxOTQ0IiwiYmVzdCI6IjMuMzg2MDA0MDA4ODkyODVlMTk0NCIsInJlc2V0VGltZSI6MTQyMC45Mjg5OTk5OTk5OTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WyIxMSIsIjM1IiwiNDEiLCIxMiIsIjQyIiwiMTMiLCI0MyIsIjE0IiwiNDQiLCIxNSIsIjQ1IiwiMjEiLCIyMiIsIjMxIiwiMjMiLCIzMiIsIjI0IiwiMzMiLCIyNSIsIjM0Il0sIm1pbGVzdG9uZXMiOlsiMyIsIjAiLCIxIiwiMiJdLCJsYXN0TWlsZXN0b25lIjoiMiIsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJUTEciOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjE2IiwidG90YWwiOiIxNiIsImJlc3QiOiIxNiIsInJlc2V0VGltZSI6MTE0NTMuMjU1OTk5OTk5NjYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6W10sIm1pbGVzdG9uZXMiOlsiMCIsIjEiLCIyIiwiMyIsIjQiLCI1IiwiNiIsIjciLCI4IiwiOSIsIjEwIiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSJdLCJsYXN0TWlsZXN0b25lIjoiMTUiLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiTmVnIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIxLjYxMDMzMzg4MDAyODc3ODhlMjI5NiIsInRvdGFsIjoiMS42MTAzMzM4ODAwMjg3Nzg4ZTIyOTYiLCJiZXN0IjoiMS42MTAzMzM4ODAwMjg3Nzg4ZTIyOTYiLCJyZXNldFRpbWUiOjE0MjAuOTI4OTk5OTk5OTkyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsiMTEiLCIxMiIsIjEzIiwiMjEiLCIxNCIsIjIyIiwiMTUiLCIyMyIsIjI0IiwiMjUiXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJVSVAiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjEuMTc4OTA0MjI0ODUxNzgzMWUyMjkyIiwidG90YWwiOiIxLjE3ODkwNDIyNDg1MTc4MzFlMjI5MiIsImJlc3QiOiIxLjE3ODkwNDIyNDg1MTc4MzFlMjI5MiIsInJlc2V0VGltZSI6MTQyMC45Mjg5OTk5OTk5OTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7IjExIjoiMTciLCIxMiI6IjE0IiwiMTMiOiIxMSJ9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbIjExIiwiMTIiLCIxMyJdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIiQiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjExNDE3Nzg1OCIsInRvdGFsIjoiMTE0NDE5MzU4IiwiYmVzdCI6IjExNDE3Nzg1OCIsInJlc2V0VGltZSI6MTM1Ny40Njk5OTk5OTk5OTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WyIxMiIsIjExIl0sIm1pbGVzdG9uZXMiOlsiMCIsIjEiLCIyIiwiMyIsIjQiLCI1IiwiNiIsIjciLCI4IiwiOSJdLCJsYXN0TWlsZXN0b25lIjoiOSIsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJGTE4iOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjcuMTM3NzEwODA1ODc0OTQ3ZTM4NyIsInRvdGFsIjoiNy4xMzc3MTA4MDU4NzQ5NDdlMzg3IiwiYmVzdCI6IjcuMTM3NzEwODA1ODc0OTQ3ZTM4NyIsInJlc2V0VGltZSI6MTQyMC45Mjg5OTk5OTk5OTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WyIxMSIsIjI1IiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjMxIiwiNDEiLCIzMiIsIjQyIiwiMzMiLCI0MyIsIjM0IiwiMzUiXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJURVMiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjEuNDEwNjk0MDQzNjc1NjU4ZTM0NiIsInRvdGFsIjoiMS40MTA2OTQwNDM2NzU2NThlMzQ2IiwiYmVzdCI6IjEuNDEwNjk0MDQzNjc1NjU4ZTM0NiIsInJlc2V0VGltZSI6MTIzNy41MjE5OTk5OTk5ODUsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7IjExIjoiMzUwMCJ9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbIjExIiwiMjEiLCIxMiIsIjIyIiwiMTMiLCIyMyIsIjE0IiwiMTUiXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJBIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiJlZTM1LjAxNTM3NjQwNjYzMDk0IiwidG90YWwiOiJlZTM1LjAxNTM3NjQwNjYzMDk0IiwiYmVzdCI6ImVlMzUuMDE1Mzc2NDA2NjMwOTQiLCJyZXNldFRpbWUiOjE0MjAuOTI4OTk5OTk5OTkyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6eyIxMSI6IjY5NTYiLCIxMiI6IjY5NTYiLCIxMyI6IjY5NTIifSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WyIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIyNSIsIjQyIiwiMzEiLCI0MyIsIjMyIiwiNDQiLCIzMyIsIjQ1IiwiMzQiLCIzNSIsIjQxIl0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiQdCQIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI1NSIsInRvdGFsIjoiNTUiLCJiZXN0IjoiNTUiLCJyZXNldFRpbWUiOjIuNzcyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6eyIxMSI6IjExIn0sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsiMTEiLCIxMiIsIjEzIiwiMTQiLCIxNSIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCIzMSIsIjMyIl0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiWFNUIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIyMiIsInRvdGFsIjoiMjIiLCJiZXN0IjoiMjIiLCJyZXNldFRpbWUiOjE1NjEuMDE0OTk5OTk5OTcyMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbMTEsMTJdLCJtaWxlc3RvbmVzIjpbIjAiLCIxIiwiMiIsIjMiLCI0IiwiNSIsIjYiLCI3Il0sImxhc3RNaWxlc3RvbmUiOiI3IiwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIlJBWCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNi4zODM1OTY0MDYyOTMxNTRlMTU3NSIsInRvdGFsIjoiNi4zODM1OTY0MDYyOTMxNTRlMTU3NSIsImJlc3QiOiI2LjM4MzU5NjQwNjI5MzE1NGUxNTc1IiwicmVzZXRUaW1lIjoxNDIwLjkyODk5OTk5OTk5MiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMiIsIjIzIiwiMjQiLCIyMSIsIjI1Il0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiU0tJUCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMi4wMTg2NzA0MzA3MTUxOTllMTU2OCIsInRvdGFsIjoiMi4wMTg2NzA0MzA3MTUxOTllMTU2OCIsImJlc3QiOiIyLjAxODY3MDQzMDcxNTE5OWUxNTY4IiwicmVzZXRUaW1lIjoxNDIwLjkyODk5OTk5OTk5MiwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbIjIyIiwiMjEiLCIyMyIsIjI0IiwiMTEiLCIxMiIsIjEzIiwiMTQiLCIyNSIsIjE1Il0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiTVVMVEkiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjE0MjA5Mjg5OTk4NjA1IiwidG90YWwiOiIxNDIwOTI5MDAwMDAwMCIsImJlc3QiOiIxNDIwOTI4OTk5ODYwNSIsInJlc2V0VGltZSI6MTQyMC45Mjg5OTk5OTk5OTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7IjExIjoiNTAifSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WyIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1Il0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiUlNGIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiI4LjA3NDY4MTcyMjg2Mzk2OGUxNTUxIiwidG90YWwiOiI4LjA3NDY4MTcyMjg2Mzk2OGUxNTUxIiwiYmVzdCI6IjguMDc0NjgxNzIyODYzOTY4ZTE1NTEiLCJyZXNldFRpbWUiOjE0MjAuOTI4OTk5OTk5OTkyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsiMTEiLCIxMiIsIjEzIiwiMTQiXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJJRi4iOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjEuMTUyNjUzMTMwMzczODE2OGUxNjAiLCJ0b3RhbCI6IjEuMTUyNjUzMTMwMzczODE2OGUxNjAiLCJiZXN0IjoiMS4xNTI2NTMxMzAzNzM4MTY4ZTE2MCIsInJlc2V0VGltZSI6MTQyMC45Mjg5OTk5OTk5OTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WyIxMSIsIjEyIiwiMTMiXSwibWlsZXN0b25lcyI6W10sImxhc3RNaWxlc3RvbmUiOm51bGwsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJJRlMiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6Ijg1MjA1MDA4ODg3LjgyNjExIiwidG90YWwiOiI4NTIwNjAwODg4OC44MjYxMSIsImJlc3QiOiI4NTIwNTAwODg4Ny44MjYxMSIsInJlc2V0VGltZSI6MTQyMC45Mjg5OTk5OTk5OTIsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WyIxMSIsIjEyIl0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiSUZUIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIyLjk4MDg1Nzk4NDI0NjU2M2U0MjAiLCJ0b3RhbCI6IjIuOTgwODU3OTg0MjQ2NTYzZTQyMCIsImJlc3QiOiIyLjk4MDg1Nzk4NDI0NjU2M2U0MjAiLCJyZXNldFRpbWUiOjE0MjAuOTI4OTk5OTk5OTkyLCJmb3JjZVRvb2x0aXAiOmZhbHNlLCJidXlhYmxlcyI6e30sIm5vUmVzcGVjQ29uZmlybSI6ZmFsc2UsImNsaWNrYWJsZXMiOnt9LCJzcGVudE9uQnV5YWJsZXMiOiIwIiwidXBncmFkZXMiOlsxMSwxMiwxMywxNCwxNV0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiSVRXIjp7InVubG9ja2VkIjp0cnVlLCJwb2ludHMiOiIxOCIsInRvdGFsIjoiMTgiLCJiZXN0IjoiMTgiLCJyZXNldFRpbWUiOjE1NjEuMDE0OTk5OTk5OTcyMSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnt9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbXSwibWlsZXN0b25lcyI6WyIwIiwiMSIsIjIiLCIzIiwiNCIsIjUiLCI2IiwiNyIsIjgiLCI5IiwiMTAiLCIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMTYiLCIxNyJdLCJsYXN0TWlsZXN0b25lIjoiMTciLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiQcOQwpAiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6Ijc1NSIsInRvdGFsIjoiNzU1IiwiYmVzdCI6Ijc1NSIsInJlc2V0VGltZSI6Nzc0Ljk0Nzk5OTk5OTk5MzgsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7IjExIjoiMjQifSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WyIxMSIsIjEyIiwiMTMiLCIxNCIsIjE1IiwiMjEiLCIyMiIsIjIzIiwiMjQiLCIyNSIsIjMxIiwiMzIiLCIzMyJdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIkHDg8KQw4LCkCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMzYiLCJ0b3RhbCI6IjM2IiwiYmVzdCI6IjM2IiwicmVzZXRUaW1lIjoxLjg2NDk5OTk5OTk5OTk5OTgsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7IjExIjoiOSJ9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMzEiLCIzMiJdLCJtaWxlc3RvbmVzIjpbXSwibGFzdE1pbGVzdG9uZSI6bnVsbCwiYWNoaWV2ZW1lbnRzIjpbXSwiY2hhbGxlbmdlcyI6e30sImdyaWQiOnt9LCJwcmV2VGFiIjoiIn0sIlMiOnsidW5sb2NrZWQiOnRydWUsInBvaW50cyI6IjExNDE5OTQxNCIsInRvdGFsIjoiMTE0NDQwOTE0IiwiYmVzdCI6IjExNDE5OTQxNCIsInJlc2V0VGltZSI6NjMuNDU4OTk5OTk5OTk5OTYsImZvcmNlVG9vbHRpcCI6ZmFsc2UsImJ1eWFibGVzIjp7fSwibm9SZXNwZWNDb25maXJtIjpmYWxzZSwiY2xpY2thYmxlcyI6e30sInNwZW50T25CdXlhYmxlcyI6IjAiLCJ1cGdyYWRlcyI6WyIxMSIsIjEyIl0sIm1pbGVzdG9uZXMiOlsiMCIsIjEiLCIyIiwiMyIsIjQiLCI1IiwiNiIsIjciLCI4IiwiOSJdLCJsYXN0TWlsZXN0b25lIjoiOSIsImFjaGlldmVtZW50cyI6W10sImNoYWxsZW5nZXMiOnt9LCJncmlkIjp7fSwicHJldlRhYiI6IiJ9LCJBQSI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiMTUyNCIsInRvdGFsIjoiMTUyNCIsImJlc3QiOiIxNTI0IiwicmVzZXRUaW1lIjoyNzQuMjE1MDAwMDAwMDAwNSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnsiMTEiOiIyNyJ9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbIjExIiwiMTIiLCIxMyIsIjE0IiwiMTUiLCIyMSIsIjIyIiwiMjMiLCIyNCIsIjI1IiwiMzEiLCIzMiIsIjMzIl0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifSwiw4PCkMOCwpTDg8KQw4LCkCI6eyJ1bmxvY2tlZCI6dHJ1ZSwicG9pbnRzIjoiNDU3NCIsInRvdGFsIjoiNDU3NCIsImJlc3QiOiI0NTc0IiwicmVzZXRUaW1lIjozNjcuMTI5MDAwMDAwMDA4MSwiZm9yY2VUb29sdGlwIjpmYWxzZSwiYnV5YWJsZXMiOnsiMTEiOiIzMiJ9LCJub1Jlc3BlY0NvbmZpcm0iOmZhbHNlLCJjbGlja2FibGVzIjp7fSwic3BlbnRPbkJ1eWFibGVzIjoiMCIsInVwZ3JhZGVzIjpbIjExIiwiMzMiLCIxMiIsIjEzIiwiMTQiLCIxNSIsIjIxIiwiMjIiLCIyMyIsIjI0IiwiMjUiLCIzMSIsIjMyIl0sIm1pbGVzdG9uZXMiOltdLCJsYXN0TWlsZXN0b25lIjpudWxsLCJhY2hpZXZlbWVudHMiOltdLCJjaGFsbGVuZ2VzIjp7fSwiZ3JpZCI6e30sInByZXZUYWIiOiIifX0=
}}

// Display extra things at the top of the page
var displayThings = [
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal('e3244'))
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