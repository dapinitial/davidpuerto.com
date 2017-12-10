var epg;
EPG.prototype = new ContentPage();

function EPG() {
	ContentPage.call(this);
	this.element.setAttribute("class", "epg");
	// the request for the content to display the contents of the navigation drawer
	ajax.makeRequest("epg.html", this);
}
EPG.prototype.displayContentItems = function(innerHTML) {
	// EPG content response from the above ajax.makeRequest();
	this.element.innerHTML = innerHTML;
}

EPG.prototype.epgClicked = function() {
	epgCompanion = new Companion("epgCompanion.html");
	appCanvas.pushContent(epgCompanion);
}
EPG.prototype.epgDeeperClicked = function() {
	epgCompanionDeeper = new Companion("epgCompanionDeeper.html");
	appCanvas.pushContent(epgCompanionDeeper);
}
