var regexPatternPhone = /(([\+][0-9]{1,3})|([0-9])+)?[\s]?(([0-9])+[\s]?){6,20}/g;

$('p').each(function( index ) {
	text = $(this).html();
	$(this).html(text.replace(regexPatternPhone, function(x){
		return "<a href='tel:"+x+"'>"+ x +"</a>";
	}))
});


