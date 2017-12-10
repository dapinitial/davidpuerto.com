myFirst.prototype = new ContentPage();

function myFirst()
{
	ContentPage.call(this);
	this.element.setAttribute("class", "myFirst");
	// request the data and place in _element_
	ajax.makeRequest("myFirst.html", this);
}

myFirst.prototype.displayContentItems = function(innerHTML)
{
	this.element.innerHTML = innerHTML;
}