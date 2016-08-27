var dapServices = angular.module('dap.services', ['ngResource']);

// VENDOR LIBRARY DEPENDENCIES //
dapServices.factory('YouTubeLoader', function($q,$window){
	var tag = document.createElement('script');
	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
		firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	// Promise to be resolved once the script is ready to be used.
	var delay = $q.defer();

	$window.onYouTubeIframeAPIReady = function() {
		// Once script is loaded, resolve the promise.
		delay.resolve();
	};

	return {
		whenLoaded: function () {
			// Return the promise, this way we can inform all you-tube-player directives the script is ready to be used.
			return delay.promise;
		}
	}

});

dapServices.factory('d3Loader', ['$document', '$q', '$rootScope',
    function($document, $q, $rootScope) {

    	var d = $q.defer();
      	function onScriptLoad() {
        	// Load client in the browser
        	$rootScope.$apply(function() { d.resolve(window.d3); });
      	}

		var scriptTag 		= $document[0].createElement('script');
		scriptTag.type 		= 'text/javascript';
		scriptTag.async 	= true;
		scriptTag.src 		= '/static/vendor/d3/d3.min.js';

		scriptTag.onreadystatechange = function () {
			if (this.readyState == 'complete') onScriptLoad();
		};
		scriptTag.onload 	= onScriptLoad;

		var s = $document[0].getElementsByTagName('body')[0];
		s.appendChild(scriptTag);

    	return { d3: function() { return d.promise; } };

}]);
