function AppBar()
{
	this.element = document.createElement("div");
	this.element.setAttribute("class", "appBar");
	
	this.displayContentItems();
}

AppBar.prototype.displayContentItems = function()
{
	this.backgroundImage = document.createElement("img");
	this.backgroundImage.setAttribute("class", "appBarBackground");
	this.backgroundImage.setAttribute("img", "images/app_bar_background.png");
	this.element.appendChild(this.backgroundImage);
	
	//now playing button;
	this.nowPlayingButton = new ImageButton("images/highres/batman_thumbnail.png");
	this.nowPlayingButton.element.setAttribute("class", "nowPlayingButton");
	this.nowPlayingButton.normalStyle = "nowPlayingButton";
	this.nowPlayingButton.mouseDownStyle = "nowPlayingButton";
	this.nowPlayingButton.onClicked = this.nowPlayingButtonClicked;
	addElementToDict(this.nowPlayingButton.element, this.nowPlayingButton);

	this.buttonContainer = document.createElement("div");
	this.buttonContainer.setAttribute("class", "appBarButtonContainer");
	this.element.appendChild(this.buttonContainer);
	
	this.element.appendChild(this.nowPlayingButton.element);
}	

AppBar.prototype.setButtons = function(buttons)
{
	while (this.buttonContainer.hasChildNodes()) {
	    this.buttonContainer.removeChild(this.buttonContainer.lastChild);
	}
	for (var i = 0; i < buttons.length; i++)
	{
		var button = buttons[i];
		this.buttonContainer.appendChild(button.element);
	}
}

AppBar.prototype.nowPlayingButtonClicked = function()
{
	if (!nowPlayingTray.isOpen)
	{
		nowPlayingTray.open();
	}
	else
	{
		nowPlayingTray.close();
	}
}