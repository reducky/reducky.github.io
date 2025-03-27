
    var cookie = 0;
    var Multiplyer = 1;
    var SuperkickerMulti = 1
    var upgradeCost = 50;
    var upgrades = 1;
    var displayCost = upgradeCost;
var upgradecost2 = 1000* upgrades2 * 11;
var upgrades2 = 1;
var teststr = upgradecost2.toString();
document.getElementById("upgrade cost2").textContent = teststr;

    function upgrade1() {
		var UpgradesPerClick = 1;
        upgradeCost = 50 * upgrades + upgrades * 21;
        if(cookie >= upgradeCost) {
            cookie -= upgradeCost;
            upgrades += 1;
		    Multiplyer += UpgradesPerClick;
            displayCost = upgradeCost + 100;
	    teststr = Multiplyer - 1;
	    teststr = teststr.toString();
            document.getElementById("upgrader").textContent = teststr;
	    teststr = cookie.toString();
            document.getElementById("cookies").textContent = teststr;
	    teststr = displayCost.toString();
            document.getElementById("upgrade cost").textContent = teststr;
        }
	function upgrade2() {
		if (cookie >= upgradecost2) {
			cookie -= upgradecost2;
			teststr = upgrades2.toString();
			document.getElementById("upgrade2level").textContent = teststr;
            upgrades2 += 1;
            upgradecost2 = 1000* upgrades2 * 11;
	    teststr = upgradecost2.toString();
            document.getElementById("upgrade cost2").textContent = teststr;
		}
	}
           
    };
    function bake() {
		var BakePerClick = 1 * Multiplyer;
		cookie += BakePerClick;
	    teststr = cookie.toString();
        document.getElementById("cookie").textContent = teststr;
    }
