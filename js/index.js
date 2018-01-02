$(function () {
		
	var filterList = {
	
		init: function () {
			
			$('#portfoliolist').mixItUp({
				selectors: {
  			  target: '.portfolio',
  			  filter: '.filter'	
  		  },
  		  load: {
    		  filter: '.green' // show green tab on first load
    		}     
			});								
		
		}

	};
	
	// Run the show!
	filterList.init();
	
});