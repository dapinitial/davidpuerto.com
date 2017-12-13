ListItem.prototype = new Button();
ListItem.prototype.constructor = ListItem;

function ListItem(isButton)
{
	Button.call(this);
}
