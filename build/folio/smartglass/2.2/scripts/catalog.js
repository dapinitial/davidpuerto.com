Catalog.prototype = new ContentPage();

function Catalog()
{
	ContentPage.call(this);
	this.element.setAttribute("class", "catalog");
	ajax.makeRequest("catalog.html", this);
}

Catalog.prototype.displayContentItems = function(innerHTML)
{
		this.backgroundImage = document.createElement("img");
	this.backgroundImage.setAttribute("class", "catalogBackground");
	this.backgroundImage.setAttribute("src", "images/catalog_background.png");
	this.element.appendChild(this.backgroundImage);

	var button = new Button();
	button.element.setAttribute("class", "hitArea");
	button.normalStyle = "hitArea";
	button.mouseDownStyle = "hitArea";
	addElementToDict(button.element, button);
	button.onClicked = this.hitAreaClicked;
	this.element.appendChild(button.element);
	//the data response from the above request
	this.element.innerHTML = innerHTML;
}

Catalog.prototype.hitAreaClicked = function()
{
	var companion = new Companion();
	appCanvas.pushContent(companion);
}
