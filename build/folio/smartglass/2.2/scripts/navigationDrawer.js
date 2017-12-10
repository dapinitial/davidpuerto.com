function NavigationDrawer()
{
	this.element = document.createElement("div");
	this.element.setAttribute("class", "navigationDrawerClosed");

	this.drawerOpen = false;
	this.getContentItems();
}

NavigationDrawer.prototype.getContentItems = function()
{
	// the request for the content to display the contents of the navigation drawer
	ajax.makeRequest("navigationDrawer.html", this);
}

NavigationDrawer.prototype.displayContentItems = function(innerHTML)
{
	// navigation drawer content response from the above ajax.makeRequest();
	this.element.innerHTML = innerHTML;
}

NavigationDrawer.prototype.homeButtonClicked = function()
{
	navigationDrawer.close();
	appCanvas.pushContent(hubPage);
}

NavigationDrawer.prototype.profileButtonClicked = function()
{
	navigationDrawer.close();
	var myDash = new MyDash();
	appCanvas.pushContent(myDash);
}

NavigationDrawer.prototype.open = function()
{
	navigationDrawer.element.style.left = "";
	mainContentContainer.style.left = "";
	navigationDrawer.element.setAttribute("class", "navigationDrawerOpen");
	mainContentContainer.setAttribute("id", "mainContentContainerWithDrawerOpen");
	this.drawerOpen = true;
}

NavigationDrawer.prototype.close = function()
{
	navigationDrawer.element.style.left = "";
	mainContentContainer.style.left = "";
	navigationDrawer.element.setAttribute("class", "navigationDrawerClosed");
	mainContentContainer.setAttribute("id", "mainContentContainer");
	this.drawerOpen = false;
}

NavigationDrawer.prototype.sliderCallbackMouseMove = function(delta)
{
	navigationDrawer.element.setAttribute("class", "navigationDrawerSwiping");
	mainContentContainer.setAttribute("id", "mainContentContainerSwiping");
	if (delta <= 163)
	{
		navigationDrawer.element.style.left = delta - 163 + "px";
		mainContentContainer.style.left = delta + "px";
	}
}

NavigationDrawer.prototype.sliderMouseUp = function(delta)
{
	console.log(delta);
	if (delta > 128)
	{
		console.log("open");
		navigationDrawer.open();
	}
	else
	{
		console.log("close");
		navigationDrawer.close();
	}
}
