/**
  * @desc Handles the clock, changing stylesheets depending on time and
  * 	implements an action listener for the floating action button
  * @author Adam Houston
  * @required --
  */

// TODO: Migrate everything to storage.js & Angular

// Hover Listener for the Floating Action Button
var fab = document.getElementById('fab');
function fabEnable() {
    fab.classList.toggle('fab-active');
}
fab.addEventListener('mouseover', fabEnable);
fab.addEventListener('mouseout', fabEnable);

// Handle the Modal
var modal = document.getElementById('modal-settings');
function HandleModal() {
    //modal.classList.toggle('modal-active');
    if (modal.classList.contains('modal-active')) {
	    modal.classList.remove('modal-active');
        modal.classList.add('modal-inactive');
    }
    else {
	    modal.classList.add('modal-active');
        modal.classList.remove('modal-inactive');
    }
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
