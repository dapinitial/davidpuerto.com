function ContentPage(title)
{
	this.element = document.createElement("div");
	this.element.setAttribute("class", "contentPage");
	
	this.displayContentItems();
}

ContentPage.prototype.displayContentItems = function()
{
	this.backgroundImage = document.createElement("img");
	this.backgroundImage.setAttribute("class", "contentPageBackground");
	this.backgroundImage.setAttribute("src", "images/content_details_background.png");
	this.element.appendChild(this.backgroundImage);
}

ContentPage.prototype.updateAppBar = function()
{
	//home button
	this.homeButton = new ImageButton("images/app_bar_home.png");
	this.homeButton.element.setAttribute("class", "appBarButton");
	this.homeButton.onClicked = this.homeButtonClicked;
	this.homeButton.normalStyle = "appBarButton";
	this.homeButton.mouseDownStyle = "appBarButton";
	addElementToDict(this.homeButton.element, this.homeButton);
	this.homeButton.element.style.left = "106px";
	
	//controller button
	this.controllerButton = new ImageButton("images/app_bar_controller.png");
	this.controllerButton.element.setAttribute("class", "appBarButton");
	this.controllerButton.onClicked = this.controllerButtonClicked;
	this.controllerButton.normalStyle = "appBarButton";
	this.controllerButton.mouseDownStyle = "appBarButton";
	addElementToDict(this.controllerButton.element, this.controllerButton);
	this.controllerButton.element.style.left = "170px";
	
	appBar.setButtons(new Array(this.homeButton, this.controllerButton));
}

ContentPage.prototype.updateUtilityBar = function()
{
	utilityBar.showBackButton();
}


ContentPage.prototype.homeButtonClicked = function()
{
	appCanvas.popToHome();
}

ContentPage.prototype.controllerButtonClicked = function()
{
	if (!(appCanvas.topContent instanceof Controller))
	{
		var controllerPage = new Controller();
		appCanvas.presentModal(controllerPage);
	}
}
