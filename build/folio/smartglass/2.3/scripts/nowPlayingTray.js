NowPlayingTray.prototype.isOpen = false;

function NowPlayingTray()
{
	// now playing tray defaulted to closed (below visible area)
	this.element = document.createElement("div");
	this.element.setAttribute("class", "nowPlayingTrayClosed");
	this.displayContentItems();
	//ajax.makeRequest("nowPlayingTray.html", this);
}

function NowPlayingTrayConsole()
{
	// now playing tray CONSOLE defaulted to closed (below visible area)
	this.element = document.createElement("div");
	this.element.setAttribute("class", "nowPlayingTrayConsoleDown");
}

NowPlayingTray.prototype.displayContentItems = function(innerHTML)
{
	this.backgroundImage = document.createElement("img");
	this.backgroundImage.setAttribute("class", "nowPlayingTrayBackground");
	this.backgroundImage.setAttribute("src", "images/now_playing_tray.png");
	this.element.appendChild(this.backgroundImage);
	
	//the data response from the above request
	/*this.element.innerHTML = innerHTML;*/

	this.dismissButton = new Button();
	this.dismissButton.element.setAttribute("class", "nowPlayingDismissAreaDown");
	this.dismissButton.mouseDownStyle = "nowPlayingDismissAreaDown";
	this.dismissButton.normalStyle = "nowPlayingDismissAreaDown";
	addElementToDict(this.dismissButton.element, this.dismissButton);
	this.dismissButton.onClicked = this.dismissButtonClicked;
	
	this.element.appendChild(this.dismissButton.element);

}

NowPlayingTray.prototype.dismissButtonClicked = function()
{
	appBar.nowPlayingButtonClicked();
}

NowPlayingTray.prototype.open = function()
{
	nowPlayingTray.element.setAttribute("class", "nowPlayingTrayOpen");
	nowPlayingTrayConsole.element.setAttribute("class", "nowPlayingTrayConsoleUp");
	nowPlayingTray.dismissButton.element.setAttribute("class", "nowPlayingDismissAreaUp");
	
	nowPlayingTray.isOpen = true;
}

NowPlayingTray.prototype.close = function()
{
	nowPlayingTray.element.setAttribute("class", "nowPlayingTrayClosed");
	nowPlayingTrayConsole.element.setAttribute("class", "nowPlayingTrayConsoleDown");
	nowPlayingTray.dismissButton.element.setAttribute("class", "nowPlayingDismissAreaDown");

	nowPlayingTray.isOpen = false;	
}