UtilityBar.prototype.drawerOpen = false;

function UtilityBar()
{
	this.element = document.createElement("div");
	this.element.setAttribute("id", "utilityBar");
	this.element.setAttribute("class", "utilityBar");
	this.displayContentItems();
		
	var swipeInit = function(){
		var swipeh = new surfaceSwipe('utilityBar');
		swipeh.direction = swipeh.HORIZONTAL;
		
		swipeh.onswiperight = function(e) 
		{ 
			navigationDrawer.open();
		};
		swipeh.onswipeleft = function() { 
			navigationDrawer.close();
		};
	}
	setTimeout(swipeInit, 100);    
}

UtilityBar.prototype.displayContentItems = function()
{
	
	//tiny drawer button aka: "HomeButtonSlim"
	this.homeButtonSlim = new ImageButton("images/utility_bar_drawer_button.png");
	this.homeButtonSlim.element.setAttribute("class", "utilityBarDrawerButtonSlim");
	this.homeButtonSlim.element.setAttribute("style", "display:none");
	this.element.appendChild(this.homeButtonSlim.element);
	this.homeButtonSlim.normalStyle = "utilityBarDrawerButtonSlim";
	this.homeButtonSlim.mouseDownStyle = "utilityBarDrawerButtonSlim";
	this.homeButtonSlim.onClicked = this.openCloseDrawer;
	addElementToDict(this.homeButtonSlim.element, this.homeButtonSlim);
	
	//drawer button
	this.drawerButton = new ImageButton("images/utility_bar_drawer_button.png");
	this.drawerButton.element.setAttribute("class", "utilityBarDrawerButton");
	this.element.appendChild(this.drawerButton.element);
	this.drawerButton.normalStyle = "utilityBarDrawerButton";
	this.drawerButton.mouseDownStyle = "utilityBarDrawerButton";
	this.drawerButton.onClicked = this.drawerButtonClicked;
	addElementToDict(this.drawerButton.element, this.drawerButton);
	
}

UtilityBar.prototype.drawerButtonClicked = function(sender)
{
	if (appCanvas.topContent instanceof HubPage)
	{
		if (!navigationDrawer.drawerOpen)
		{
			navigationDrawer.open();
		}
		else
		{
			navigationDrawer.close();
		}
	}
	else
	{
		appCanvas.popContent();
	}	
}

UtilityBar.prototype.openCloseDrawer = function(sender)
{	
	if (!navigationDrawer.drawerOpen)
	{
		navigationDrawer.open();
	}
	else
	{
		navigationDrawer.close();
	}
}

UtilityBar.prototype.setTitle = function(title)
{
	this.titleElement.innerHTML = title;
}

UtilityBar.prototype.showBackButton = function()
{
	this.drawerButton.imageElement.setAttribute("src", "images/back_button.png");
	this.homeButtonSlim.imageElement.parentNode.setAttribute("style", "display:block");
}

UtilityBar.prototype.showDrawerButton = function()
{
	this.drawerButton.imageElement.setAttribute("src", "images/utility_bar_drawer_button.png");	
	this.homeButtonSlim.imageElement.parentNode.setAttribute("style", "display:none");
}
/*
UtilityBar.prototype.showSlimButton = function()
{
	this.homeButtonSlim.imageElement.parentNode.setAttribute("style", "display:block");
}

UtilityBar.prototype.hideSlimButton = function()
{
	this.homeButtonSlim.imageElement.parentNode.setAttribute("style", "display:block");
}*/