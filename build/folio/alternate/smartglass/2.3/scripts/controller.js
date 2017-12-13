var controller;
Controller.prototype.name = "controller";

function Controller()
{
	this.element = document.createElement("div");
	this.element.setAttribute("class", "controller");
	this.drawerOpen = false;
	this.getContentItems();
	this.displayContentItems();
}
Controller.prototype.getContentItems = function()
{
	// the request for the content to display the contents of the navigation drawer
	ajax.makeRequest("controller.html", this);
}

Controller.prototype.displayContentItems = function(innerHTML)
{
	// navigation drawer content response from the above ajax.makeRequest();
	this.element.innerHTML = innerHTML;
/*
	var initGestures = function(){
		var element = document.getElementById('controllerGestureArea');
    	var doubletap = Hammer(element).on("tap", function(event) {
        	alert('double tap!');
   		});
   		var longtap = Hammer(element).on("hold", function(event) {
        	document.getElementById('controller').style.opacity = ".1";

        });
	}
	setTimeout(initGestures, 100);    
*/
}

Controller.prototype.updateAppBar = function()
{
	//home button
	this.switcherButton = new ImageButton("images/app_bar_switcher.png");
	this.switcherButton.element.setAttribute("class", "appBarButton");
	this.switcherButton.onClicked = this.switcherButtonClicked;
	this.switcherButton.normalStyle = "appBarButton";
	this.switcherButton.mouseDownStyle = "appBarButton";
	addElementToDict(this.switcherButton.element, this.switcherButton);
	this.switcherButton.element.style.left = "106px";
	
	//controller button
	this.closeButton = new ImageButton("images/app_bar_close.png");
	this.closeButton.element.setAttribute("class", "appBarButton");
	this.closeButton.onClicked = this.closeButtonClicked;
	this.closeButton.normalStyle = "appBarButton";
	this.closeButton.mouseDownStyle = "appBarButton";
	addElementToDict(this.closeButton.element, this.closeButton);
	this.closeButton.element.style.left = "170px";
	
	appBar.setButtons(new Array(this.switcherButton, this.closeButton));
}

Controller.prototype.switcherButtonClicked = function()
{
	
}

Controller.prototype.closeButtonClicked = function()
{
	appCanvas.dismissModal();
}