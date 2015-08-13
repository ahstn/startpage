/**
  * @desc Handles the clock, changing stylesheets depending on time and
  * 	implements an action listener for the floating action button
  * @author Adam Houston
  * @required --
*/

// Handling the page Clock
function GetClock() {
	// Get the time and edit the html
	d = new Date();
	hour  = d.getHours();
	min   = d.getMinutes();
	sec   = d.getSeconds();
	if (min <= 9)
		min = "0" + min;
	if (sec <= 9)
		sec = "0" + sec;
	document.getElementById('clock').innerHTML=""+hour+":"+min+":"+sec+"";

	// If it's after 5PM and before 6AM use the dark theme
	if (hour >= 17 || hour <= 6)
		ChangeStylesheet('css/material-dark.css');
	else
		ChangeStylesheet('css/material.css');

	// Refresh every 1000ms (1 second)
	setTimeout(GetClock, 1000);
}
window.onload = GetClock();

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
fab.addEventListener('mouseover', fabEnable);
fab.addEventListener('mouseout', fabDisable);

// Handle the Modal
var modal = document.getElementById('modal-settings');
function HandleModal() {
	modal.classList.toggle('in');
}
[].forEach.call(document.getElementsByClassName('zmdi-more-vert'), function(entry) {
	// foreach overflow menu icon add a click listener which calls HandleModal()
	entry.addEventListener('click', HandleModal);
});
document.getElementById('btn-modal-cancel').addEventListener('click', HandleModal);

// Function and EventListener for tabs
function HandleTabs() {
	// 'this' being the element that triggered the event
	var tabID = this.getAttribute('href').replace('#', '');
	// moving the active class from the old tab-pane to the new one
	document.getElementsByClassName('tab-pane active')[0].classList.remove('active');
	document.getElementById(tabID).classList.add('active');
	// same as above but for the tab links
	document.getElementsByClassName('two active')[0].classList.remove('active');
	this.parentNode.classList.add('active');
}

[].forEach.call(document.getElementsByClassName('tab'), function(entry) {
	var tab = entry.getAttribute('href');
	entry.addEventListener('click', HandleTabs);
});
