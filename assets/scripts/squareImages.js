jQuery(function($) {
    $( ".work").height($( ".work").width());
    $( window ).resize(function() {
        $( ".work").height($( ".work").width());
    });
});