GreenButton.prototype = new Button();
GreenButton.prototype.constructor = GreenButton;
GreenButton.prototype.textSpan;

function GreenButton(text)
{
	Button.call(this);
	this.element.setAttribute("class", "greenButton");
	this.normalStyle = "greenButton";
	this.mouseDownStyle = "greenButton";
	this.textSpan = document.createElement("span");
	this.textSpan.setAttribute("class", "title");
	this.textSpan.innerHTML = text;
	this.textSpan.style.cursor = "default";
	this.element.appendChild(this.textSpan);
}