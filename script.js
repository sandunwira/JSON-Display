// INFINITE SCROLL START -------------------------------------------------------------------------- //
$(document).ready(function() {

	// Check every 300ms the scroll position
	$(document).on('scroll', _.throttle(function() {
		check_if_needs_more_content();
	}, 300));

	function check_if_needs_more_content() {
		pixelsFromWindowBottomToBottom = 0 + $(document).height() - $(window).scrollTop() - $(window).height();

		if (pixelsFromWindowBottomToBottom < 20) {
			// Here it would go an ajax request
			$('body').append($('.products-row').clone());

		}
	}
});
// ---------------------------------------------------------------------------- INFINITE SCROLL END //