HubPage.prototype = new ContentPage();

function HubPage()
{
	ContentPage.call(this);
	this.element.setAttribute("class", "hubPage");
	// request the data and place in _element_
	ajax.makeRequest("hubpage.html", this);
}

HubPage.prototype.displayContentItems = function(innerHTML)
{
	//the data response from the above request
	this.element.innerHTML = innerHTML;
}

HubPage.prototype.updateUtilityBar = function()
{
	utilityBar.showDrawerButton();
}

HubPage.prototype.bottomButtonClicked = function()
{
	catalog = new Catalog();
	appCanvas.pushContent(catalog);
}

HubPage.prototype.epgButtonClicked = function()
{
	navigationDrawer.close();
	epg = new EPG();
	appCanvas.pushContent(epg);
}
