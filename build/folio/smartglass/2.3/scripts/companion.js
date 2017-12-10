var companion;
Companion.prototype = new ContentPage();

function Companion(url)
{
	ContentPage.call(this);
	this.element.setAttribute("class", "companionPage");
	// the request for the content to display the contents of the navigation drawer
	ajax.makeRequest(url, this);
}

Companion.prototype.displayContentItems = function(innerHTML)
{
	// EPG content response from the above ajax.makeRequest();
	this.element.innerHTML = innerHTML;
	setTimeout(this.setupCompanionScrollView, 100);
	setTimeout(initCompanionSlider, 300);
}

Companion.prototype.hitAreaClicked = function()
{
	var activity = new ActivityPage();
	appCanvas.presentModal(activity);
}

function initCompanionSlider()
{
	var epgSlider = new Slider(document.getElementById("EPGCompanionSlider"), {
		callback: function(e, pos) {
		   
			}
	});
	epgSlider.bounceScroll = false;
	epgSlider.delegate = navigationDrawer;
}

// EPG scrolling  --- add the following to displayContents:  setTimeout(this.setupScrollView, 300);
Companion.prototype.setupCompanionScrollView = function()
{

	epgCompanion.scrollView = new ScrollView();
	epgCompanion.panel = new Panel();

	epgCompanion.findScrollView = document.getElementById("EPGCompanionScrollView");
	epgCompanion.findPanel = document.getElementById("EPGCompanionPanel");

	epgCompanion.scrollView.element = epgCompanion.findScrollView;
	epgCompanion.panel.element = epgCompanion.findPanel;

	epgCompanion.scrollView.contentView = epgCompanion.panel;

	epgCompanion.scrollView.initScrollView();

	epgCompanion.scrollView.scrollingDirection = "vertical";
	epgCompanion.scrollView.scrolling = true;

	epgCompanion.panel.size = 
	{
		"width" : 320,
		"height" : 820
	};

	epgCompanion.scrollView.size = 
	{
		"width" : 320,
		"height" : 480
	};
	
	epgCompanion.scrollView.normalStyle = "hubPagePanel";
	epgCompanion.scrollView.animatingStyle = "hubPagePanelAnimated";

}

