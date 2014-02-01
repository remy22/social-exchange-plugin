function SXshowError(msg){
	jQuery("#sx-error-label").html(msg).show();
}
function SXshowNotice(msg){
	jQuery("#sx-error-label").hide();
	jQuery("#sx-notice-label").html(msg+" &nbsp;&nbsp;<a class='button' id='sx-ok-notice'>OK</a>").show();
	
}
jQuery(document).ready(function(){
	jQuery(".sx_need").live({ 
		"mouseenter":function(){  
			 if(jQuery(this).find(".sx-share-need-list").is(":visible")) { 
				jQuery(this).find(".sx-save-need-list").show();
				jQuery(this).find(".sx-share-need-list").width(jQuery(this).find(".sx-share-need-list").width() - jQuery(this).find(".sx-save-need-list").width()); 
				
			} 
		},
		"mouseleave":function(){
			 if(jQuery(this).find(".sx-share-need-list").is(":visible")) { 
				jQuery(this).find(".sx-save-need-list").hide();
				jQuery(this).find(".sx-share-need-list").width(jQuery(this).find(".sx-share-need-list").width() +jQuery(this).find(".sx-save-need-list").width());
			}
		}
	
	}); 
	jQuery("#sx-ok-notice").live("click",function(){
	
	
			jQuery(this).closest("form").submit();
	});
	jQuery(".post-page").bindFirst("click",function(){
		var okn = true;
		if(jQuery("#hidden_post_status").val() != 'publish') {
			SXshowError("You can share only published posts");
			return false;
		}
		if(document.URL.indexOf("http://localhost") > -1) {
			SXshowError("You can not share localhost posts");
			return false;
		} 
		if(jQuery("#sample-permalink").text().indexOf("?") > -1) {
			SXshowNotice("Ugly permalinks like \""+jQuery("#sample-permalink").text()+"\" are not search engine friendly. Are you sure this is the final URL you will use for this post?");
			okn = false;
		}
		if(jQuery(this).hasClass("sx-play-active") || jQuery(this).hasClass("sx-pause-active") ) return false;
		var value = jQuery(this).attr("data-value");
		jQuery("#sx-post-active").val(value);
		if(okn){
			jQuery(this).closest("form").submit();
		} 
		return false;
	});
	
})