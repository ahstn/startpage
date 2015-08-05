function GetClock() {
	d = new Date();
	nhour  = d.getHours();
	nmin   = d.getMinutes();
	nsec   = d.getSeconds();
	if(nmin <= 9) {nmin = "0" +nmin;}
	if(nsec <= 9) {nsec = "0" +nsec;}
	document.getElementById('clock').innerHTML=""+nhour+":"+nmin+":"+nsec+"";
	setTimeout("GetClock()", 1000);
}
window.onload=GetClock;

var fab = document.getElementById('fab');
function fabEnable() {
    fab.classList.add('fab-active');
}
function fabDisable() {
    fab.classList.remove('fab-active');
}
fab.addEventListener("mouseover", fabEnable);
fab.addEventListener("mouseout", fabDisable);
