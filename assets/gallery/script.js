var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(b){function l(){clearTimeout(n);n=setTimeout(r,50)}function r(){var a=b(".mbr-gallery .modal");if(a.length){var d=b(window).width()-0,c=b(window).height()-0;a.each(function(){var a,f;b(this).hasClass("in");var k=b(this).find(".modal-dialog");a=k.find(".carousel-item.active > img");k.find(".carousel-item.prev > img, .carousel-item.next > img").length&&(a=k.find(".carousel-item.prev > img, .carousel-item.next > img").eq(0));f=a[0].naturalWidth;var m=a[0].naturalHeight;a=d/c>f/m?(c-20)*f/m:d-20;a=a>=f?f:a;f=(c-a*m/f)/2;k.css({width:parseInt(a),top:f+0})})}}var p=b("html").hasClass("is-builder");if(!p){var t=function(a){b(a.target).closest(".mbr-slider").hasClass("in")&&a.target.playVideo()},g=document.createElement("script");g.src="https://www.youtube.com/iframe_api";var q=document.getElementsByTagName("script")[0];q.parentNode.insertBefore(g,q);var h=[];window.onYouTubeIframeAPIReady=function(){var a=a||{};a.YTAPIReady||(a.YTAPIReady=!0,jQuery(document).trigger("YTAPIReady"));b(".video-slide").each(function(a){b(this).index();b(this).closest("section");b(".video-container").eq(a).append('<div id ="mbr-video-'+a+'" class="mbr-background-video" data-video-num="'+a+'"></div>').append('<div class="item-overlay"></div>');b(this).attr("data-video-num",a);if(-1!=b(this).attr("data-video-url").indexOf("vimeo.com")){var c={id:b(this).attr("data-video-url"),width:"100%",height:"100%",loop:!0};a=new Vimeo.Player("mbr-video-"+a,c);a.playVideo=Vimeo.play}else{var c=YT.Player,e;e=b(this).attr("data-video-url");e="false"==e?!1:(e=/(?:\?v=|\/embed\/|\.be\/)([-a-z0-9_]+)/i.exec(e)||/^([-a-z0-9_]+)$/i.exec(e))?e[1]:!1;a=new c("mbr-video-"+a,{height:"100%",width:"100%",videoId:e,events:{onReady:t}})}h.push(a)})}}b(document).on("add.cards change.cards",function(a){var d=b(a.target),c=d.find(".mbr-gallery-filter-all");if(d.hasClass("mbr-slider-carousel")){var e=[];d.find(".mbr-gallery-item").each(function(a){(b(this).attr("data-tags")||"").trim().split(",").map(function(a){a=a.trim();-1==b.inArray(a,e)&&e.push(a)})});if(0<d.find(".mbr-gallery-filter").length&&b(a.target).find(".mbr-gallery-filter").hasClass("gallery-filter-active")){var f="";d.find(".mbr-gallery-filter ul li:not(li:eq(0))").remove();e.map(function(a){f+="<li>"+a+"</li>"});d.find(".mbr-gallery-filter ul").append(c).append(f);d.on("click",".mbr-gallery-filter li",function(a){$li=b(this);$li.parent().find("li").removeClass("active");$li.addClass("active");var c=$li.closest("section").find(".mbr-gallery-row"),e=$li.html().trim();d.find(".mbr-gallery-item").each(function(a,d){var c=b(this);tagsTrimmed=c.attr("data-tags").split(",").map(function(a){return a.trim()});-1!=b.inArray(e,tagsTrimmed)||$li.hasClass("mbr-gallery-filter-all")?c.removeClass("mbr-gallery-item__hided"):(c.addClass("mbr-gallery-item__hided"),setTimeout(function(){c.css("left","300px")},200))});setTimeout(function(){c.closest(".mbr-gallery-row").trigger("filter")},50)})}else d.find(".mbr-gallery-item__hided").removeClass("mbr-gallery-item__hided"),d.find(".mbr-gallery-row").trigger("filter");p||d.find(".video-slide").each(function(a){b(this).closest(".mbr-gallery-item").index()});"undefined"!==typeof b.fn.masonry&&d.outerFind(".mbr-gallery").each(function(){var a=b(this).find(".mbr-gallery-row").masonry({itemSelector:".mbr-gallery-item:not(.mbr-gallery-item__hided)",percentPosition:!0});a.masonry("reloadItems");a.on("filter",function(){a.masonry("reloadItems");a.masonry("layout");b(window).trigger("update.parallax")}.bind(this,a));a.imagesLoaded().progress(function(){a.masonry("layout")})})}});b(".mbr-gallery-item").on("click","a",function(a){a.stopPropagation()});var n,g=b(document).find(".mbr-gallery");g.on("show.bs.modal",function(a){clearTimeout(d);var d=setTimeout(function(){var c=b(a.relatedTarget).parent().index(),c=b(a.target).find(".carousel-item").eq(c).find(".mbr-background-video");b(a.target).find(".carousel-item .mbr-background-video");0<c.length&&(c=h[+c.attr("data-video-num")],c.playVideo?c.playVideo():c.play())},500);l()});g.on("slide.bs.carousel",function(a){a=b(a.target).find(".carousel-item.active .mbr-background-video");0<a.length&&(a=h[+a.attr("data-video-num")],a.pauseVideo?a.pauseVideo():a.pause())});b(window).on("resize load",l);g.on("slid.bs.carousel",function(a){a=b(a.target).find(".carousel-item.active .mbr-background-video");0<a.length&&(a=h[+a.attr("data-video-num")],a.playVideo?a.playVideo():a.play());l()});g.on("hide.bs.modal",function(a){h.map(function(a,b){a.pauseVideo?a.pauseVideo():a.pause()})})})(jQuery);

}
/*
     FILE ARCHIVED ON 14:05:59 Feb 24, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:45:34 Mar 29, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 193.029
  exclusion.robots: 0.119
  exclusion.robots.policy: 0.109
  RedisCDXSource: 17.342
  esindex: 0.009
  LoadShardBlock: 152.005 (3)
  PetaboxLoader3.datanode: 173.561 (4)
  CDXLines.iter: 20.905 (3)
  load_resource: 119.272
  PetaboxLoader3.resolve: 92.133
*/
