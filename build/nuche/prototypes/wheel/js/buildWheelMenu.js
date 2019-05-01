// build the wheel Handle

	// deal with auto collapse when open but inactive for three seconds
	$("#handle").bind("click", function(){
        if($("#wheelMenu").hasClass("open")){
            $(".secondaryWheel").removeClass("active");
            $("#leftRight, #singleSlab").removeClass("open");
        }
        $(".items li input").removeAttr('checked');

        $("#wheelMenu, #handle, #backButton").toggleClass("open");
	});



	var buildHomeCircle = function() {		
		var radius = 140; // radius of the circle
		var fields = $('.items li'),
		    container = $('#wheel'),
		    width = container.width(),
		    height = container.height(),
		    angle = 0,
		    step = (2*Math.PI) / fields.length;
		fields.each(function() {
		    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2),
		        y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
		    $(this).css({
		        left: x + 'px',
		        top: y + 'px'
		    });
		    angle += step;
		});
	};

	buildHomeCircle();

	var buildSceneCircle = function() {		
		var radius = 140; // radius of the circle
		var fields = $('.items4 li'),
		    container = $('#wheel'),
		    width = container.width(),
		    height = container.height(),
		    angle = 0,
		    step = (2*Math.PI) / fields.length;
		fields.each(function() {
		    var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2),
		        y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
		    $(this).css({
		        left: x + 'px',
		        top: y + 'px'
		    });
		    angle += step;
		});
	};

	buildSceneCircle();


	/* Build wheel menu without Intertia

    var degs = 0;
    var handleTouchyRotate = function (e, phase, $target, data) {
        if (phase === 'move') {
            degs += data.degreeDelta;
            $target.css('webkitTransform','rotate3d(0,0,1,'+ degs +'deg)'); // 3d transforms are not working on the galaxy tab 7" ?
            //$target.css('webkitTransform','rotate('+ degs +'deg) transformZ(0)'); // check this out.  much worse on motorola xoom.
        }

    }
    $('#wheel').bind('touchy-rotate', handleTouchyRotate);

*/

	// build touch wheel controller (INERTIA):

    var degs = 0,
        velocity = 0,
        $target = $('#wheel'),
        frameRateMS = 1000/60,
        inertiaMotion = false;

    var handleTouchyRotate = function (e, phase, $target, data) {
        switch (phase) {
            case 'start':
                console.log(phase);
                this._touch = function (e) {
                    e.stopPropagation();
                }
                inertiaMotion = false;
                break;
            case 'move':
                console.log(phase);
                this._touch = function (e) {
                    e.stopPropagation();
                }
                degs += data.degreeDelta;
                rotate(degs);
                break;
            case 'end':
                console.log(phase);
                inertiaMotion = true;
                velocity = data.velocity;
                releaseRadius =
                spin(velocity);
                $(".items").show();
                $("#wheel").removeClass("fauxBackground");
                this._touch = function (e) {
                    e.stopPropagation();
                }
        }
    };

    var spin = function (velocity) {
        // note that touchy returns velocity as degrees per millisecond only for touchy-rotate
        degs += velocity * frameRateMS;
        degs = degs > 359.99 ? 0 : degs;
        rotate(degs);
        this._touch = function (e) {
                    e.stopPropagation();
                }
        if (inertiaMotion && Math.abs(velocity) > 0.001) {
            setTimeout(function () {
                spin(velocity * .99); // .99 is default
            }, frameRateMS);
            // start code to intercept touch on the children
            if(spin){
                console.log("spinning!");
                $("#wheel").addClass("fauxBackground");
                $(".items").hide();
                this._touch = function (e) {
                    e.stopPropagation();
                }
            }
        }
        else {
            velocity = 0;
            this._touch = function (e) {
                    e.stopPropagation();
                }
        }
    };

    var rotate = function (degrees) {
        //console.log(degrees);
        // rotate wheel
        this._touch = function (e) {
                    e.stopPropagation();
                }
        $target.css('webkitTransform','rotate('+ degrees +'deg) translateZ(0)');
        // rotate items inside the wheel
        //$("#wheel ul li").css('webkitTransform','rotate3d(0,0,1,'+ (degrees *  -4) +'deg)');
    };

    $('#wheel').bind('touchy-rotate', handleTouchyRotate);


