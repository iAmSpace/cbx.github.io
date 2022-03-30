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

(function(c){c.fn.viewportChecker=function(q){var e={classToAdd:"visible",classToRemove:"invisible",classToAddForFullView:"full-visible",removeClassAfterAnimation:!1,offset:100,repeat:!1,invertBottomOffset:!0,callbackFunction:function(c,e){},scrollHorizontal:!1,scrollBox:window};c.extend(e,q);var h=this,k=c(e.scrollBox).height(),n=c(e.scrollBox).width(),p=-1!=navigator.userAgent.toLowerCase().indexOf("webkit")||-1!=navigator.userAgent.toLowerCase().indexOf("windows phone")?"body":"html";this.checkElements=function(){var f,g;e.scrollHorizontal?(f=c(p).scrollLeft(),g=f+n):(f=c(p).scrollTop(),g=f+k);h.each(function(){var a=c(this),b={},d={};a.data("vp-add-class")&&(d.classToAdd=a.data("vp-add-class"));a.data("vp-remove-class")&&(d.classToRemove=a.data("vp-remove-class"));a.data("vp-add-class-full-view")&&(d.classToAddForFullView=a.data("vp-add-class-full-view"));a.data("vp-keep-add-class")&&(d.removeClassAfterAnimation=a.data("vp-remove-after-animation"));a.data("vp-offset")&&(d.offset=a.data("vp-offset"));a.data("vp-repeat")&&(d.repeat=a.data("vp-repeat"));a.data("vp-scrollHorizontal")&&(d.scrollHorizontal=a.data("vp-scrollHorizontal"));a.data("vp-invertBottomOffset")&&(d.scrollHorizontal=a.data("vp-invertBottomOffset"));c.extend(b,e);c.extend(b,d);if(!a.data("vp-animated")||b.repeat){0<String(b.offset).indexOf("%")&&(b.offset=parseInt(b.offset)/100*k);var d=b.scrollHorizontal?a.offset().left:a.offset().top,h=b.scrollHorizontal?d+a.width():d+a.height(),l=Math.round(d)+b.offset,m=b.scrollHorizontal?l+a.width():l+a.height();b.invertBottomOffset&&(m-=2*b.offset);if(l<g&&m>f){if(a.removeClass(b.classToRemove),a.addClass(b.classToAdd),b.callbackFunction(a,"add"),h<=g&&d>=f?a.addClass(b.classToAddForFullView):a.removeClass(b.classToAddForFullView),a.data("vp-animated",!0),b.removeClassAfterAnimation)a.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",function(){a.removeClass(b.classToAdd)})}else a.hasClass(b.classToAdd)&&b.repeat&&(a.removeClass(b.classToAdd+" "+
b.classToAddForFullView),b.callbackFunction(a,"remove"),a.data("vp-animated",!1))}})};("ontouchstart"in window||"onmsgesturechange"in window)&&c(document).bind("touchmove MSPointerMove pointermove",this.checkElements);c(e.scrollBox).bind("load scroll",this.checkElements);c(window).resize(function(f){k=c(e.scrollBox).height();n=c(e.scrollBox).width();h.checkElements()});this.checkElements();return this}})(jQuery);

}
/*
     FILE ARCHIVED ON 14:10:04 Feb 24, 2018 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:45:33 Mar 29, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 80.667
  exclusion.robots: 0.091
  exclusion.robots.policy: 0.084
  RedisCDXSource: 0.524
  esindex: 0.008
  LoadShardBlock: 58.143 (3)
  PetaboxLoader3.datanode: 74.774 (4)
  CDXLines.iter: 19.681 (3)
  load_resource: 64.069
  PetaboxLoader3.resolve: 31.457
*/