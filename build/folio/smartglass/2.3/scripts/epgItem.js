EPGItem.prototype = new Button();

function EPGItem()
{
	Button.call(this);
	this.element.setAttribute("class", "epgItem");
	this.normalStyle = "epgItem";
	this.mouseDownStyle = "epgItem";
	this.displayContentItems();
}


EPGItem.prototype.displayContentItems = function()
{
	this.height = 56;
	
	this.backgroundImage = document.createElement("img");
	this.backgroundImage.setAttribute("class", "epgItem");
	this.backgroundImage.setAttribute("src", "images/epg_item_a.png");
	this.element.appendChild(this.backgroundImage);
}