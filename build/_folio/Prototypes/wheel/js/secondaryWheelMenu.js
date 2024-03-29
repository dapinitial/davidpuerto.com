$(document).ready(function(){

  setTimeout(buildCircle, 100);

});


function buildCircle()
{
  $(function()
      {

         var r = 130, cx = 210, cy = 210,
             $circle = $('#wheel canvas'),
             canvas2 = $circle[0];

         // add some padding
         canvas2.width = cx * 2;
         canvas2.height = cy * 2;

         var drawGuides = true,
             doAgn = true,
             aOff = 0,
             doOnce = true;

         function position2()
         {

            // Center of the circle relative to the page
            var cpos = $circle.offset();
                px = cpos.left,
                py = cpos.top;

            var $items = $('#wheel .items').children(),
                icnt = $items.length,
                dstep = 360 / icnt,
                cpath = PATH([
                          {fn: 'start', x: cx+r, y: cy},
                          {fn: 'circle', radius: r}
                        ]);

            var ctx = canvas2.getContext( "2d" );

            ctx.fillStyle = "white";

            if (!drawGuides)
               ctx.clearRect(0, 0, canvas2.width, canvas2.height);

            $items.each(function (idx, el)
              {
                 var $el = $(el),
                     a = dstep * idx,
                     w = $el.outerWidth(true),
                     h = $el.outerHeight(true),
                     align = PATH([
                                {fn: 'start',     x: cx-r-w,  y: cy-h},
                                {fn: 'rectangle', w: 2*r+w,   h: 2*r+h, cornerRadius: r}
                              ]),
                     pt;

                 if (idx == 0 && doOnce && drawGuides)
                    PATH.adapter.drawCanvas(canvas2, align, {fillStyle: 'none'});

                 if (doAgn)
                    pt = align.step((a + aOff) / 360);
                 else
                    pt = cpath.step((a + aOff) / 360);

                 $el.css({
                      left: (px + pt.x) + 'px',
                      top: (py + pt.y) + 'px'
                   });

              });

            if (drawGuides && doOnce)
            {
               ctx.strokeStyle = "black";
               ctx.lineWidth = 1;

               ctx.beginPath();
               ctx.arc(cx, cy, r, 0, 2*Math.PI);
               ctx.stroke();
            }

            doOnce = false;
         }

         position2();

      });
}