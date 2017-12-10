PivotControl.prototype.pivotPages;
PivotControl.prototype.contentPanel;
PivotControl.prototype.scrollView;

function PivotControl()
{
	this.element = document.createElement("div");
	this.element.setAttribute("class", "pivotControl");
	this.pivotPages = new Array();
	this.contentPanel = new PivotPanel();
	
	this.scrollView = new ScrollView();
	this.scrollView.normalStyle = "pivotPanel";
	this.scrollView.animatingStyle = "pivotPanelSnapTo";
	this.element.appendChild(this.scrollView.element);
	
	this.scrollView.element.appendChild(this.contentPanel.element);
	this.scrollView.contentView = this.contentPanel;
	this.scrollView.paging = true;
	this.scrollView.pageWidth = 1366;
}

PivotControl.prototype.addPivot = function(page)
{
	this.pivotPages[this.pivotPages.length] = page;
	this.contentPanel.addChild(page);
	this.contentPanel.layoutChildren();
}

