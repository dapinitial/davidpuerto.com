ActivityPage.prototype = new ContentPage();

function ActivityPage()
{
	ContentPage.call(this);
	this.element.setAttribute("class", "activityPage");
}

ActivityPage.prototype.displayContentItems = function()
{
	this.backgroundImage = document.createElement("img");
	this.backgroundImage.setAttribute("class", "activityPageBackground");
	this.backgroundImage.setAttribute("src", "images/activity_background.png");
	this.element.appendChild(this.backgroundImage);
}


ActivityPage.prototype.updateAppBar = function()
{	
	//controller button
	this.closeButton = new ImageButton("images/app_bar_close.png");
	this.closeButton.element.setAttribute("class", "appBarButton");
	this.closeButton.onClicked = this.closeButtonClicked;
	this.closeButton.normalStyle = "appBarButton";
	this.closeButton.mouseDownStyle = "appBarButton";
	addElementToDict(this.closeButton.element, this.closeButton);
	this.closeButton.element.style.left = "137px";
	
	appBar.setButtons(new Array(this.closeButton));
}

ActivityPage.prototype.switcherButtonClicked = function()
{
	
}

ActivityPage.prototype.closeButtonClicked = function()
{
	appCanvas.dismissModal();
}