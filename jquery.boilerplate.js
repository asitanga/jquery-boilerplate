// remember to change every instance of "pluginName" to the name of your plugin!
(function ($) {

	$.fn.pluginName = function (options) {

		// plugin's default options
		// this is private property and is accessible only from inside the plugin
		var defaults = {
			propertyName : 'value'
		};

		// lets merge options with default settings
		options = $.extend({}, defaults, options);

		// private function for debugging
		var debug = function ($obj) {
			if (window.console && window.console.log) {
				window.console.log('Debug: ' + $obj);
			}
		};

		// maintaining chainability
		return this.each(function () {

			var $this = $(this);

			// your code here

		});

	};

}(jQuery));
