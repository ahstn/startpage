// Handling the page Clock
function GetClock() {

	// Get the time and edit the html
	d = new Date();
	hour  = d.getHours();
	min   = d.getMinutes();
	sec   = d.getSeconds();
	if (min <= 9)
		min = "0" +min;
	if (sec <= 9)
		sec = "0" +sec;
	document.getElementById('clock').innerHTML=""+hour+":"+min+":"+sec+"";

	// If it's after 5PM and before 6AM use the dark theme
	if (hour >= 17 || hour <= 6)
		ChangeStylesheet('css/material-dark.css');
	else
		ChangeStylesheet('css/material.css');

	// Refresh every 1000ms (1 second)
	setTimeout("GetClock()", 1000);
}
window.onload=GetClock;

// Change the active Material Stylesheet
function ChangeStylesheet(link) {
	document.getElementById('materialcss').setAttribute('href', link);
}

// Hover Listener for the Floating Action Button
var fab = document.getElementById('fab');
function fabEnable() {
    fab.classList.add('fab-active');
}
function fabDisable() {
    fab.classList.remove('fab-active');
}
fab.addEventListener("mouseover", fabEnable);
fab.addEventListener("mouseout", fabDisable);
