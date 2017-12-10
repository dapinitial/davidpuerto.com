function SearchBox()
{
	this.element = document.createElement("div");
	this.element.setAttribute("class", "searchBox");
	
	this.displayContentItems();
}

SearchBox.prototype.displayContentItems = function()
{
	//textfield
	this.textField = document.createElement("textarea");
	this.textField.setAttribute("class", "textArea");
	this.element.appendChild(this.textField);
}

