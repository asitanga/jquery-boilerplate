// Remember to change every instance of "pluginName"
(function ($) {


	// We need attach the plugin to jQuery's namespace or otherwise it would not be
	// available outside this function's scope
    // "element" should be a jQuery object or a collection of jQuery objects as returned by
    // jQuery's selector engine
    $.pluginName = function (element, options) {

        // To avoid scope issues, use 'self' instead of 'this'
        // to reference this class from internal events and functions.
        var self = this;
        
        // Access to jQuery and DOM versions of element
        self.$element = $(element);
        self.element = element;
        
        // Add a reverse reference to the DOM object
        self.$element.data('pluginName', self);
        
        self.init = function () {
            self.options = $.extend({}, $.pluginName.defaultOptions, options);
            
            // Put your initialization code here
        };
        
        // Sample Function, Uncomment to use
        // self.functionName = function (paramaters) {
        // 
        // };
        
        // Run initializer
        self.init();

    };
    
	// plugin's default options
	// this is private property and is accessible only from inside the plugin
    $.pluginName.defaultOptions = {
        propertyName: 'value'
    };
    
    $.fn.pluginName = function (options) {
        return this.each(function () {
            (new $.pluginName(this, options));
        });
    };
    
    // This function breaks the chain, but returns
    // the pluginName if it has been attached to the object.
    $.fn.getPluginName = function () {
        this.data('pluginName');
    };
    
})(jQuery);
