function ExperienceShowcase()
{
	this.element = document.createElement("div");
	this.element.setAttribute("class", "experienceShowcase");
	// request the data and place in _element_
	ajax.makeRequest("experienceShowcase.html", this);
}

ExperienceShowcase.prototype.displayContentItems = function(innerHTML)
{	
	this.element.innerHTML = innerHTML;

	setTimeout(temp, 100);
	
}

function temp()
{
	var slider = new Slider(document.getElementById('slider'), {
		callback: function(e) {
		    if (!this.index && this.deltaX >= -1){
		    	navigationDrawer.open();
		    } else {
		    	navigationDrawer.close();
		    }
		}
	});
}

/*
ExperienceShowcase.prototype.clicked = function()
{
	var companion = new Companion();
	appCanvas.pushContent(companion);
}
*/