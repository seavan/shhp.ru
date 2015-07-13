$( function() {

	(function(){
		var $leftCol = $('.js-left-col');

		function resizeBg(){
			var w = $leftCol.width();
			var h = $leftCol.height();

			var wImg = 520;
			var Himg = 752;

			if(w > wImg || h > Himg) {

				if (w > h) {
					$leftCol.css({ backgroundSize: "100% auto" });
				} else {
					$leftCol.css({ backgroundSize: "cover" });
				}

			} else {
				$leftCol.css({ backgroundSize: "auto auto" });
			}

		}

		$(window).resize(function() {
			resizeBg();
		});

		resizeBg();
	})();

//works-nav
	(function(){
		var $body = $("body");
		var $works = $('.js-works');
		var $items = $body.find(".js-works-nav-item");

		$body.on ("click", ".js-works-nav-item", (function(event){
			var $cutItem = $(this);

			var index = $cutItem.attr("href").substring(1);
			var $curText  = $works.find(".js-works-item[data-index="+ index +"]");
			var offsetTop = (index == "1") ? 0 : $curText.offset().top - 163;

			$items.removeClass("_active");
			$cutItem.addClass("_active");

			$("body, html").scrollTop(offsetTop);

			event.preventDefault();
		}));

	})();

});