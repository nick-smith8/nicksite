jQuery(document).ready(function ($){
	
	var title = jQuery("#freshmen-year").find("h2");
	var content = jQuery("#freshmen-content");
	var title2 = jQuery("#sophomore-year").find("h2");
	var content2 = jQuery("#sophomore-content");
	var title3 = jQuery("#junior-year").find("h2");
	var content3 = jQuery("#junior-content");
	var title4 = jQuery("#senior-year").find("h2");
	var content4 = jQuery("#senior-content");

	$(title).hover(function(){
		$(this).css( 'cursor', 'pointer' );
	});
	jQuery(title).click(function(){
		jQuery( content ).toggle( "slow", function() {
		// Animation complete.
	  });
	});
	$(title2).hover(function(){
		$(this).css( 'cursor', 'pointer' );
	});
	jQuery(title2).click(function(){
		jQuery( content2 ).toggle( "slow", function() {
		// Animation complete.
	  });
	});
	$(title3).hover(function(){
		$(this).css( 'cursor', 'pointer' );
	});
	jQuery(title3).click(function(){
		jQuery( content3 ).toggle( "slow", function() {
		// Animation complete.
	  });
	});
	$(title4).hover(function(){
		$(this).css( 'cursor', 'pointer' );
	});
	jQuery(title4).click(function(){
		jQuery( content4 ).toggle( "slow", function() {
		// Animation complete.
	  });
	});
});
//