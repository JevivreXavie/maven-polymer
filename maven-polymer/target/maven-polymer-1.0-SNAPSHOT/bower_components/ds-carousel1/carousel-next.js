(function() {
	'use strict';

	Polymer({

		// Customizable element attributes
		/////////////////////////////////////////////////////////////////////



		// Component public methods
		/////////////////////////////////////////////////////////////////////



		// Lifecycle callbacks
		/////////////////////////////////////////////////////////////////////
		
		ready: function() {
			this.addEventListener('mousedown', this.next);
		},

		dettached: function() {
		},


		// Private methods
		/////////////////////////////////////////////////////////////////////
		
		next: function() {
			this.parentNode.nextSlide();
		},

	});

})();
