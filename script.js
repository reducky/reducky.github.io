
    var cookie = 0;
    var Multiplyer = 1;
    var SuperkickerMulti = 1
    var upgradeCost = 50;
    var upgrades = 1;
    var displayCost = upgradeCost;
var upgradecost2 = 1000* upgrades2 * 11;
var upgrades2 = 1;
document.getElementById("upgrade2level").textContent = upgrades2;
document.getElementById("upgrade cost2").textContent = upgradecost2;

    function upgrade1() {
		var UpgradesPerClick = 1
        upgradeCost = 50 * upgrades + upgrades * 21
        if(cookie >= upgradeCost) {
            cookie -= upgradeCost;
            upgrades += 1;
		    Multiplyer += UpgradesPerClick;
            displayCost = upgradeCost + 100;
            document.getElementById("upgrader").textContent = Multiplyer - 1; 
            document.getElementById("cookies").textContent = cookie;
            document.getElementById("upgrade cost").textContent = displayCost;
        }
	function upgrade2() {
		upgradecost2 = 1000* upgrades2 * 11
		if (cookie >= upgradecost2) {
			cookie -= upgradecost2
			
		}
	}
           
    };
    function bake() {
		var BakePerClick = 1 * Multiplyer;
		cookie += BakePerClick;
        document.getElementById("cookie").textContent = cookie;
    }