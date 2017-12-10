var epg;
EPG.prototype = new ContentPage();

function EPG()
{
	ContentPage.call(this);
	this.element.setAttribute("class", "epg");
	// the request for the content to display the contents of the navigation drawer
	ajax.makeRequest("epg.html", this);
}

EPG.prototype.displayContentItems = function(innerHTML)
{
	// EPG content response from the above ajax.makeRequest();
	this.element.innerHTML = innerHTML;
	setTimeout(this.setupScrollView, 100);
	setTimeout(initEPGSlider, 300);
}

EPG.prototype.epgClicked = function()
{
	epgCompanion = new Companion("epgCompanion.html");
	appCanvas.pushContent(epgCompanion);
}

EPG.prototype.mytvClicked = function()
{
	mytvCompanion = new Companion("mytvCompanion.html");
	appCanvas.pushContent(mytvCompanion);
}

EPG.prototype.trendingClicked = function()
{
	trendingCompanion = new Companion("trendingCompanion.html");
	appCanvas.pushContent(trendingCompanion);
}
EPG.prototype.epgDeeperClicked = function()
{
	epgCompanionDeeper = new Companion("epgCompanionDeeper.html");
	appCanvas.pushContent(epgCompanionDeeper);
}

function initEPGSlider()
{
	var epgSlider = new Slider(document.getElementById("EPGSlider"), {
		callback: function(e, pos) {
		    var i = epgSliderbullets.length;
			while (i--) {
				epgSliderbullets[i].className = ' ';
			}
				epgSliderbullets[pos].className = 'on';
			}
	});
	epgSliderbullets = document.getElementById('EPGBullets').getElementsByTagName('em');
	epgSlider.bounceScroll = false;
	epgSlider.delegate = navigationDrawer;
}

// EPG scrolling  --- add the following to displayContents:  setTimeout(this.setupScrollView, 300);
EPG.prototype.setupScrollView = function()
{

	epg.scrollView = new ScrollView();
	epg.panel = new Panel();

	epg.findScrollView = document.getElementById("EPGScrollView");
	epg.findPanel = document.getElementById("EPGPanel");

	epg.scrollView.element = epg.findScrollView;
	epg.panel.element = epg.findPanel;

	epg.scrollView.contentView = epg.panel;

	epg.scrollView.initScrollView();

	epg.scrollView.scrollingDirection = "vertical";
	epg.scrollView.scrolling = true;

	epg.panel.size = 
	{
		"width" : 320,
		"height" : 820
	};

	epg.scrollView.size = 
	{
		"width" : 320,
		"height" : 480
	};
	
	epg.scrollView.normalStyle = "hubPagePanel";
	epg.scrollView.animatingStyle = "hubPagePanelAnimated";

}