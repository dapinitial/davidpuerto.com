MultiselectButton.prototype = new Button();
MultiselectButton.prototype.constructor = MultiselectButton;
MultiselectButton.prototype.selectDirection = "horizontal";
MultiselectButton.prototype.multiselectedStyle = "buttonMultiselected";

function MultiselectButton()
{
	
}

MultiselectButton.prototype.onMouseDown = function()
{
	this.isMouseDown = true;
	listeningForScrolling = true;
	scrolling = false;
	this.element.setAttribute("class", this.mouseDownStyle);
}

MultiselectButton.prototype.onMouseUp = function()
{
	this.element.setAttribute("class", this.normalStyle);
	if (this.isMouseDown)
	{
		if (this.onClicked)
		{
			this.onClicked(this);
		}
	}
	this.isMouseDown = false;
}

MultiselectButton.prototype.onMouseOut = function()
{
	this.element.setAttribute("class", this.normalStyle);
}

MultiselectButton.prototype.onMouseOver = function()
{
	if (this.isMouseDown)
	{
		this.element.setAttribute("class", this.mouseDownStyle);
	}
}