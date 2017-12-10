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
	setTimeout(this.setupScrollView, 300);
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

	// if navigationDrawer is open, a swipe to the left on the mainContainer will close the drawer.
	var swipeInit = function(){
		var swipeh = new surfaceSwipe('mainContentContainerWithDrawerOpen');
		swipeh.direction = swipeh.HORIZONTAL;
		
		swipeh.onswipeleft = function() { 
			navigationDrawer.close();
		}
	}
	setTimeout(swipeInit, 100);    
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

// navigationDrawer scrolling  --- add the following to displayContents:  setTimeout(this.setupScrollView, 300);
NavigationDrawer.prototype.setupScrollView = function()
{

	navigationDrawer.scrollView = new ScrollView();
	navigationDrawer.panel = new Panel();

	navigationDrawer.findScrollView = document.getElementById("navigationDrawerScrollView");
	navigationDrawer.findPanel = document.getElementById("navigationDrawerPanel");

	navigationDrawer.scrollView.element = navigationDrawer.findScrollView;
	navigationDrawer.panel.element = navigationDrawer.findPanel;

	navigationDrawer.scrollView.contentView = navigationDrawer.panel;

	navigationDrawer.scrollView.initScrollView();

	navigationDrawer.scrollView.scrollingDirection = "vertical";
	navigationDrawer.scrollView.scrolling = true;

	navigationDrawer.panel.size = 
	{
		"width" : 163,
		"height" : 700
	};

	navigationDrawer.scrollView.size = 
	{
		"width" : 163,
		"height" : 480
	};
	
	navigationDrawer.scrollView.normalStyle = "navigationDrawerPanel";
	navigationDrawer.scrollView.animatingStyle = "navigationDrawerPanelAnimated";

}