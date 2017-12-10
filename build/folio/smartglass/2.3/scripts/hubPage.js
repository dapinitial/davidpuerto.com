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
	setTimeout(this.setupScrollView, 100);
	setTimeout(initHubPageSlider, 300);
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

function initHubPageSlider()
{
	var hubSlider = new Slider(document.getElementById('hubSlider'), {
		
		callback: function(e, pos) {
			var i = hubSliderbullets.length;
			while (i--) {
				hubSliderbullets[i].className = ' ';
		}
		hubSliderbullets[pos].className = 'on';
		}
	}),
	hubSliderbullets = document.getElementById('bullets').getElementsByTagName('em');
	//hubSlider.bounceScroll = false;
	//hubSlider.delegate = navigationDrawer;
}

// navigationDrawer scrolling  --- add the following to displayContents:  setTimeout(this.setupScrollView, 300);
HubPage.prototype.setupScrollView = function()
{

	hubPage.scrollView = new ScrollView();
	hubPage.panel = new Panel();

	hubPage.findScrollView = document.getElementById("scrollView");
	hubPage.findPanel = document.getElementById("hubPagePanel");

	hubPage.scrollView.element = hubPage.findScrollView;
	hubPage.panel.element = hubPage.findPanel;

	hubPage.scrollView.contentView = hubPage.panel;

	hubPage.scrollView.initScrollView();

	hubPage.scrollView.scrollingDirection = "vertical";
	hubPage.scrollView.scrolling = true;

	hubPage.panel.size = 
	{
		"width" : 320,
		"height" : 820
	};

	hubPage.scrollView.size = 
	{
		"width" : 320,
		"height" : 480
	};
	
	hubPage.scrollView.normalStyle = "hubPagePanel";
	hubPage.scrollView.animatingStyle = "hubPagePanelAnimated";

}