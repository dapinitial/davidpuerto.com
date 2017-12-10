UtilityBar.prototype.drawerOpen = false;

function UtilityBar()
{
	this.element = document.createElement("div");
	this.element.setAttribute("id", "utilityBar");
	this.element.setAttribute("class", "utilityBar");
	this.displayContentItems();
}

UtilityBar.prototype.displayContentItems = function()
{
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
}

UtilityBar.prototype.showDrawerButton = function()
{
	this.drawerButton.imageElement.setAttribute("src", "images/utility_bar_drawer_button.png");
}
