MyDash.prototype = new ContentPage();

function MyDash()
{
	ContentPage.call(this);
	this.element.setAttribute("class", "myDash");
	// request the data and place in _element_
	ajax.makeRequest("myDash.html", this);
}

MyDash.prototype.displayContentItems = function(innerHTML)
{
	// My Dash content response from the above ajax.makeRequest();
	this.element.innerHTML = innerHTML;
}