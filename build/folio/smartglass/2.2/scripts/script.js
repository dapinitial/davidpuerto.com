var scrollView;
var panel;
var elements;
var elementCount;
var gallery;

var appBar;
var appCanvas;
var utilityBar;
var navigationDrawer;
var mainContentContainer;

var scrolling = false;
var listeningForScrolling = false;
var scrollViewRegister;
var activeScrollViews;
var myDash;
var activeButton;

var isMouseDown;

var isChromeOrSafari;
var hubPage;

function drawPageElements()
{
	scrollViewRegister = new Array();
	activeScrollViews = new Array();
	appBar = new AppBar();
	appCanvas = new AppCanvas();
	navigationDrawer = new NavigationDrawer();

	page = document.getElementById("body");
	mainContentContainer = document.createElement("div");
	mainContentContainer.setAttribute("id", "mainContentContainer");
	page.appendChild(mainContentContainer);

	utilityBar = new UtilityBar();
	mainContentContainer.appendChild(utilityBar.element);
	mainContentContainer.appendChild(appCanvas.element);
	mainContentContainer.appendChild(appBar.element);
	page.appendChild(navigationDrawer.element);

	//add hub page
	hubPage = new HubPage();
	appCanvas.pushContent(hubPage);

	splashImage = document.createElement("img");
	splashImage.setAttribute("class", "splashOpen");
	splashImage.setAttribute("src", "images/splash.png");
	page.appendChild(this.splashImage);

	setTimeout(splashFadeOut, 500);
}

function splashFadeOut()
{
	splashImage.setAttribute("class", "splashHide");
	setTimeout(splashKill, 700);
}

function splashKill()
{
	page.removeChild(splashImage);
}

function addElementToDict(element, jsObject)
{
	element.setAttribute("guid", elementCount);
	elements[elementCount] = jsObject;
	elementCount++;
}

function loadItems()
{
	elements = new Object();
	elementCount = 0;
	drawPageElements();
}

function clicked(element)
{
	elements[element.getAttribute("guid")].clicked();
}

function onMouseDown(element, event)
{
  if (element != document) {
      if (elements[element.getAttribute("guid")] != null) {
          elements[element.getAttribute("guid")].onMouseDown(event);
      }
  }
  else {

  }
}

function onMouseUp(element, event)
{
	if (element == document)
	{
	    scrollView.onMouseUp(event);
	}
	else
	{
		elements[element.getAttribute("guid")].onMouseUp(event);
	}

	for (var item in elements)
	{
		if (elements[item] instanceof Button && !elements[item].multiSelect)
		{
			elements[item].isMouseDown = false;
		}
	}
	for (var scrollV in scrollViewRegister)
	{
		scrollViewRegister[scrollV].onMouseUp(event);
	}

	scrollViewRegister = new Array();
	activeScrollViews = new Array();
	activeButton = null;
}

function onMouseMove(element, event)
{
	if (element == document)
	{
		for (var scrollV in activeScrollViews)
		{
			activeScrollViews[scrollV].onMouseMove(event);
		}
	}
	else
	{
		elements[element.getAttribute("guid")].onMouseMove(event);
	}
}

function onMouseOut(element)
{
	elements[element.getAttribute("guid")].onMouseOut();
}

function transitionCompleted()
{
	elements[this.getAttribute("guid")].transitionCompleted();
}

function onMouseOver(element)
{
	elements[element.getAttribute("guid")].onMouseOver();
}

// document.addEventListener( 'touchstart' , function stopScrolling( touchEvent ) { touchEvent.preventDefault(); } , false );
// document.addEventListener( 'touchmove' , function stopScrolling( touchEvent ) { touchEvent.preventDefault(); } , false );

var BrowserDetect = {
	init: function () {
		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
		this.version = this.searchVersion(navigator.userAgent)
			|| this.searchVersion(navigator.appVersion)
			|| "an unknown version";
		this.OS = this.searchString(this.dataOS) || "an unknown OS";
	},
	searchString: function (data) {
		for (var i=0;i<data.length;i++)	{
			var dataString = data[i].string;
			var dataProp = data[i].prop;
			this.versionSearchString = data[i].versionSearch || data[i].identity;
			if (dataString) {
				if (dataString.indexOf(data[i].subString) != -1)
					return data[i].identity;
			}
			else if (dataProp)
				return data[i].identity;
		}
	},
	searchVersion: function (dataString) {
		var index = dataString.indexOf(this.versionSearchString);
		if (index == -1) return;
		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
	},
	dataBrowser: [
		{
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		},
		{ 	string: navigator.userAgent,
			subString: "OmniWeb",
			versionSearch: "OmniWeb/",
			identity: "OmniWeb"
		},
		{
			string: navigator.vendor,
			subString: "Apple",
			identity: "Safari",
			versionSearch: "Version"
		},
		{
			prop: window.opera,
			identity: "Opera",
			versionSearch: "Version"
		},
		{
			string: navigator.vendor,
			subString: "iCab",
			identity: "iCab"
		},
		{
			string: navigator.vendor,
			subString: "KDE",
			identity: "Konqueror"
		},
		{
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		},
		{
			string: navigator.vendor,
			subString: "Camino",
			identity: "Camino"
		},
		{		// for newer Netscapes (6+)
			string: navigator.userAgent,
			subString: "Netscape",
			identity: "Netscape"
		},
		{
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer",
			versionSearch: "MSIE"
		},
		{
			string: navigator.userAgent,
			subString: "Gecko",
			identity: "Mozilla",
			versionSearch: "rv"
		},
		{ 		// for older Netscapes (4-)
			string: navigator.userAgent,
			subString: "Mozilla",
			identity: "Netscape",
			versionSearch: "Mozilla"
		}
	],
	dataOS : [
		{
			string: navigator.platform,
			subString: "Win",
			identity: "Windows"
		},
		{
			string: navigator.platform,
			subString: "Mac",
			identity: "Mac"
		},
		{
			   string: navigator.userAgent,
			   subString: "iPhone",
			   identity: "iPhone/iPod"
	    },
		{
			string: navigator.platform,
			subString: "Linux",
			identity: "Linux"
		}
	]
};
BrowserDetect.init();

isChromeOrSafari = BrowserDetect.browser == "Safari" || BrowserDetect.browser == "Chrome";

/*setTimeout(function(){
  document.getElementById('mainContentContainer').addEventListener('touchmove', function(event){ event.stopPropagation(); }, false);

  var elem = document.querySelector('[id^=post-]');
  window.mySwipe = Swipe(elem, {
    startSlide: 1,
    //auto: 3000,
    continuous: false,
    disableScroll: false,
    stopPropagation: true,
    callback: function(index, element) {},
    transitionEnd: function(index, element) {}
  });

  var elem = document.querySelector('[id^=post-]');
  var bullets = document.querySelector('[id^=pagination-]').getElementsByTagName('li');

  window.mySwipe = Swipe(elem, {
    continuous: true,
    callback: function(pos) {
      var i = bullets.length;
      while (i--) {
        bullets[i].className = ' ';
      }
      bullets[pos].className = 'on';
    }
  });)
}, 600);
*/
