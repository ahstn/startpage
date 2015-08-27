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
    modal.setAttribute('style', 'display: block;');
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

// Material Design Button Ripple
var addRippleEffect = function (e) {
    var target = e.target;
    if (target.tagName.toLowerCase() !== 'button') return false;
    var rect = target.getBoundingClientRect();
    var ripple = target.querySelector('.ripple');
    if (!ripple) {
        ripple = document.createElement('span');
        ripple.className = 'ripple';
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px';
        target.appendChild(ripple);
    }
    ripple.classList.remove('show');
    var top = e.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop;
    var left = e.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft;
    ripple.style.top = top + 'px';
    ripple.style.left = left + 'px';
    ripple.classList.add('show');
    return false;
};
document.addEventListener('click', addRippleEffect, false);
