List.prototype.children;
List.prototype.scrollView;

function List()
{
	this.element = document.createElement("div");
	this.scrollView = new ScrollView();
	var panel = new StackPanel();
	this.scrollView.contentView = panel;
	this.scrollView.scrollingDirection = "vertical";
	this.element.appendChild(this.scrollView.element);
	this.scrollView.element.appendChild(panel.element);
	this.children = new Array();
}

List.prototype.addItem = function(item)
{
	this.children[this.children.length] = item;
	this.scrollView.contentView.addChild(item);
}