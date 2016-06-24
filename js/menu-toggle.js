// MENU TOGGLE

function openNav() {
	document.getElementById("myNav").style.width = "100%";
	document.getElementByClassName("hidden-menu").style.visibility = "none";
	}
	
	function closeNav() {
	document.getElementById("myNav").style.width = "0%";
	document.getElementByClassName("hidden-menu").style.visibility = "1";
	}