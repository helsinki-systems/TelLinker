chrome.storage.local.get({
        helsinkiCallRegEx: "(([\+][0-9]{1,3})|([0-9])+)?[\s]?(([0-9])+[\s]?){6,20}",
        helsinkiCallProtocol: "tel:",
}, function (items) {
    settings = items;
	$('p').each(function( index ) {
		text = $(this).html();
		$(this).html(text.replace(new RegExp(items.helsinkiCallRegEx, 'g'), function(x){
			return "<a href='"+items.helsinkiCallProtocol+x.replace(/ /g, '')+"'>"+ x +"</a>";
		}))
	});

});



