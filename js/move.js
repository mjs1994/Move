$.fn.move = function(options) {
	var settings = {
			breakpoint: null,
			oldLocation: null,
			newLocation: null,
			onMove: null,
			movedClass: 'moved',
			methods: {
				o: 'appendTo',
				n: 'appendTo'
			}
		};
	
	if (options) {
		$.extend(settings, options);
	} else {
		console.error('[MOVE.JS]: Please pass in some options. This plugin will not work without your options.');
		return;
	}
	
	if (!validMethod(settings.methods.o)) {
		console.error('[MOVE.JS]: Please enter a valid method for scaling up. Valid properties are: appendTo, prependTo, insertBefore, and insertAfter.');
		return;
	}

	if (!validMethod( settings.methods.n)) {
		console.error('[MOVE.JS]: Please enter a valid method for scaling down. Valid properties are: appendTo, prependTo, insertBefore, and insertAfter.');
		return;
	}
	
	function validMethod(method) {
		if (method == 'appendTo' || method == 'prependTo' || method == 'insertBefore' || method == 'insertAfter') {
			return true;
		} else {
			return false;
		}
	}
	
	return this.each(function() {
		var el = $(this);
		
		moveElements();
		setTimeout(moveElements, 300);
		$(window).resize(moveElements);
		
		function moveElements() {
			var width = (window.innerWidth) ? window.innerWidth : document.documentElement.clientWidth,
				elementToMove = el;

			if (elementToMove.length) {
				if (width <= settings.breakpoint && !elementToMove.hasClass(settings.movedClass)) {
					var method = settings.methods.n;
					elementToMove.addClass(settings.movedClass);
					elementToMove[method](settings.newLocation);	
					
					if (settings.onMove != null) {
						settings.onMove('newLocation', elementToMove);
					}
				} 
				if (width > settings.breakpoint && elementToMove.hasClass(settings.movedClass)) {
					var method = settings.methods.o;
					elementToMove.removeClass(settings.movedClass);
					elementToMove[method](settings.oldLocation);	
					if (settings.onMove != null) {
						settings.onMove('oldLocation', elementToMove);	
					}
				}
			}
		}
	});
}