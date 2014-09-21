var str = "";
if($j("#at_intelnews").length||$j("#at_intel").length){
	$j.getJSON("http://search.twitter.com/search.json?callback=?&rpp=5&q=from:intelnews",
	    function(json) {
			$j.each(json, function(i, tweets){
					if (tweets.length != undefined){
						if (tweets[0] != undefined){
							if (tweets[0].created_at != undefined){
				 				for(var i = 0; i < tweets.length; i++){
									$j("#at_intelnews").append(returnFormat(tweets[i].text,tweets[i].created_at,'intelnews'));
								}
							}
						}
					}
			});
	    }
	);
	$j.getJSON("http://search.twitter.com/search.json?callback=?&rpp=5&q=from:intel",
	    function(json) {
			$j.each(json, function(i, tweets){
				if (tweets.length != undefined){
					if (tweets[0] != undefined){
						if (tweets[0].created_at != undefined){
			 				for(var i = 0; i < tweets.length; i++){
								$j("#at_intel").append(returnFormat(tweets[i].text,tweets[i].created_at,'intel'));
							}
						}
					}
				}
			});
	    }
	);
}

var tabInfo = "";
var curTab  = "content1"; //default
var wURL = location.href; //get current url;
if($j("#prTabDynamic").length){
  tabInfo = $j("#prTabDynamic").attr("title").split("|");
  var tabNum = Number(tabInfo[0]); //num of tabs
  var tabTitle = tabInfo[1].split(","); //tab title
  var tabName  ="";
  var mainStr = "";
  for(i=1;i<tabNum;i++){
      tabName += "<div id='nav_content"+i
              + "' class='subnav' onclick='hideShow(\"tab_content"+i
              + "\",\"nav_content"+i+"\");'><a href='javascript:void(0);' style='text-decoration:none; cursor:pointer;'><div id='desc_content"+i
              + "' class='desc_on'>"+tabTitle[i-1]
              + "</div></a></div>";
  }
  //pass in tab default
  curTab = "content"+tabInfo[2];//"content"+i;
  mainStr = "<table cellspacing='0' cellpadding='0' border='0' width='100%'>"
            + "<tbody><tr><td><div id='nav' class='one-line' style='margin-left:0px;margin-top:0px;'>"+tabName
            + "</div></td></tr></tbody></table><br/>";

  $j("#prTabDynamic").html(mainStr); $j("#prTabDynamic").attr("title","");
}

function hideShow(id,navid) {
        var e = document.getElementById(id);
        var i;
        for (i=1;i<tabNum;i++)
            {
                $j("#tab_content"+i).hide();
                $j("#desc_content"+i).removeClass("desc_on").addClass("desc_off");
                $j("#nav_content"+i).removeClass('subnav').addClass("subnav_off");
            }

       if(e.style.display == 'none'){
               e.style.display = 'block';
  	            $j("#"+navid).removeClass("subnav_off").addClass("subnav");
                $j("#desc_"+navid.split("nav_")[1]).removeClass("desc_off").addClass("desc_on");
         }
      }
    //control tabs
    if($j("#prTabDynamic").length){hideShow("tab_"+curTab,"nav_"+curTab);}
