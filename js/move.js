$.fn.move = function( options ) {
	
	var settings = {
			breakpoint: null,
			oldLocation: null,
			newLocation: null,
			movedClass: 'moved',
			methods: {
				o: 'appendTo',
				n: 'appendTo'
			}
		};
	
	if ( options ) {
		$.extend(settings, options);
		var erroneousSettings = {
				breakpoint: settings.breakpoint,
				oldLocation: settings.oldLocation,
				newLocation: settings.newLocation
			},
			errors = [];
		
		$.each( erroneousSettings, function( key, val ) {
			if ( val == null ) {
				errors.push( key );
			}
		});	
		
		if ( errors.length > 0 ) {
			$.each( errors, function( key, val ) {
				console.error('[MOVE.JS]: Please pass in a value for the ' + val + ' setting. Please visit the github repository for more info. https://github.com/michaelsmyth94/Move');
			});
			console.error('[MOVE.JS]: This plugin will not work without your options.');
			return;
		}
	} else {
		console.error('[MOVE.JS]: Please pass in some options. This plugin will not work without your options.');
		return;
	}
	
	if ( !validMethod( settings.methods.o ) ) {
		console.error('[MOVE.JS]: Please enter a valid method for scaling up. Valid properties are: appendTo, prependTo, insertBefore, and insertAfter.');
		return;
	}

	if ( !validMethod( settings.methods.n ) ) {
		console.error('[MOVE.JS]: Please enter a valid method for scaling down. Valid properties are: appendTo, prependTo, insertBefore, and insertAfter.');
		return;
	}
	
	function validMethod( method ) {
		
		if ( method == 'appendTo' || method == 'prependTo' || method == 'insertBefore' || method == 'insertAfter' ) {
			return true;
		} else {
			return false;
		}
		
	}
	
	return this.each(function() {
		
		var el = $(this);
		
		moveElements();
		setTimeout( moveElements, 300 );
		$(window).resize( moveElements );
		
		function moveElements() {

			var width = ( window.innerWidth ) ? window.innerWidth : document.documentElement.clientWidth,
				elementToMove = el;

			if ( elementToMove.length ) {

				if ( width <= settings.breakpoint && !elementToMove.hasClass( settings.movedClass ) ) {
					
					var method = settings.methods.n;
					elementToMove.addClass( settings.movedClass );
					
					elementToMove[method]( settings.newLocation );
					
				} 
				if ( width > settings.breakpoint && elementToMove.hasClass( settings.movedClass ) ) {

					var method = settings.methods.o;
					elementToMove.removeClass( settings.movedClass );
					
					elementToMove[method]( settings.oldLocation );
				
				}

			}

		}
		
	});
}