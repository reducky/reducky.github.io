
    var cookie = 0;
    var Multiplyer = 1;
    var SuperkickerMulti = 1
    var upgradeCost = 50;
    var upgrades = 1;
    var displayCost = upgradeCost;
var upgradecost2 = 1000* upgrades2 * 11;
var upgrades2 = 1;
document.getElementById("upgrade cost2").textContent = string(upgradecost2);

    function upgrade1() {
		var UpgradesPerClick = 1
        upgradeCost = 50 * upgrades + upgrades * 21
        if(cookie >= upgradeCost) {
            cookie -= upgradeCost;
            upgrades += 1;
		    Multiplyer += UpgradesPerClick;
            displayCost = upgradeCost + 100;
            document.getElementById("upgrader").textContent = string(Multiplyer - 1); 
            document.getElementById("cookies").textContent = string(cookie);
            document.getElementById("upgrade cost").textContent = string(displayCost);
        }
	function upgrade2() {
		if (cookie >= upgradecost2) {
			cookie -= upgradecost2
			document.getElementById("upgrade2level").textContent = string(upgrades2);
            upgrades2 += 1
            upgradecost2 = 1000* upgrades2 * 11
            document.getElementById("upgrade cost2").textContent = string(upgradecost2);
		}
	}
           
    };
    function bake() {
		var BakePerClick = 1 * Multiplyer;
		cookie += BakePerClick;
        document.getElementById("cookie").textContent = string(cookie);
    }
