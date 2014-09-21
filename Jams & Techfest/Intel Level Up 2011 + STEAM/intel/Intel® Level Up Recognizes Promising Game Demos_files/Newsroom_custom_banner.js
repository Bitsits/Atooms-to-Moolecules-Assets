  $j(document).ready(function() {
    if(typeof documentID != "undefined"){
      var prMarqueeImgBase = "http://www.intel.com/newsroom/kits";
	  // 22nm
	  if(documentID == 2035){
        $j("#jive-global-header > span > a").html('<img src="'+prMarqueeImgBase+'/22nm/images/newsroom_marquee_22nm.jpg" border="0"/>');
      }
    }
  });