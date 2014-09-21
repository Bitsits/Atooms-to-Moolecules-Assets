
//fb
var prFBLike = '<iframe src="http://www.facebook.com/plugins/like.php?href='
                 +location.href+'&amp;layout=standard&amp;show_faces=true&amp;width=450&amp;action=like&amp;colorscheme=light&amp;height=80" '
                 +'scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:450px; height:80px;" '
                 +'allowTransparency="true"></iframe>';
    if($j("#fpMasterContainer").length){
      $j('<div id="fbCount" style="margin-top:10px;clear:both;border-top: 1px dotted #e8e8e8;padding-top:5px">'+prFBLike+'</div>').insertAfter("#fpMasterContainer");
   }else{
      $j('<div id="fbCount" style="margin-top:10px;clear:both;border-top: 1px dotted #e8e8e8;padding-top:5px">'+prFBLike+'</div>').insertAfter("#prMasterContainer");
   }

//+1
if($j("#gplusone").length){
    setTimeout("renderPlusone()",1000)
}


(function($j){
    $j.wtMeta = function(){
        var $Meta;
        if($j('meta[name='+arguments[0]+']').size()>0){
            $Meta=$j('meta[name='+arguments[0]+']');
        }else{
            $Meta=$j('meta[http-equiv='+arguments[0]+']');
        }

        if(arguments.length==1) return $Meta.attr('content');
        else $Meta.attr('content',arguments[1]);
    };
})(jQuery);




//twitter page on kits hash|title|w|h   - used on local sites only
if($j("#prTwitter4Kits").length){

    var iSrc = $j("#prTwitter4Kits").attr("title").split("|");
    var widgetVersion = "l";var isAvatar = "y";

    //if(iSrc[4]=="undefined"){widgetVersion="s"}
    if(iSrc[4]!="undefined"){isAvatar="n"}

        $j("#prTwitter4Kits").html("<iframe src='http://www.intel.com/newsroom/kits/twitter.htm?hand="
        + encodeURIComponent(iSrc[0])+"&title="+iSrc[1]+"&w="+iSrc[2]+"&h="+iSrc[3]+"&a="+isAvatar+"' width='"
        + iSrc[2]+"' height='"
        + iSrc[3]+"' marginheight='0' marginwidth='0' frameborder='0' scrolling='no' />");

    $j(this).css("margin-left","-10px")
}

//twitter page on super kits hash|title|w|h  - US specific
if($j("#prTwitterFeed").length){

    var iSrc = $j("#prTwitterFeed").attr("title").split("|");
    var widgetVersion = "l";var isAvatar = "y";

        $j("#prTwitterFeed").html("<iframe src='http://www.intel.com/newsroom/kits/kits-feed.htm?param="
        + encodeURIComponent(iSrc[0])+"&title="+iSrc[1]+"&w="+iSrc[2]+"&h="+iSrc[3]+"&a="+isAvatar+"' width='"
        + iSrc[2]+"' height='"
        + iSrc[3]+"' marginheight='0' marginwidth='0' frameborder='0' scrolling='auto' />");

}

//sharethis
document.write("<script type='text/javascript'>stLight.options({publisher:'83e517cd-46cd-483d-8e93-bd883e38ddd8',services:'facebook,twitter,linkedin,tumblr'});</scr" + "ipt>");

var getFBDesc = "";//($j('meta[property=og:description]').length)?$j('meta[property=og:description]').attr("content"):$j("#socialDescription").html();

       // if($j("#socialDescription").length){
          //$j.meta('og:description',$j("#socialDescription").attr("src"))
          if( $j("meta[property=og:description]").length){
                getFBDesc = $j("meta[property=og:description]").attr("content");//, $j("#socialDescription").attr("src"));
            }
      //  }

stWidget.addEntry({
    "service":"sharethis",
    "element":document.getElementById('shareThisButton'),
    "url":document.location.href,
    "title":$j(document).attr("title"),
    "type":"button","text":"ShareThis",
    "image":"http://www.intel.com/newsroom/assets/images/prThumb.jpg",
    "summary":getFBDesc
    });
     //$j('meta[property=og:description]').attr("content")

