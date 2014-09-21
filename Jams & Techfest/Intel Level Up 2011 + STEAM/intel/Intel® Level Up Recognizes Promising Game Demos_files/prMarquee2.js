$j(document).ready(function() {
    if(typeof documentID != "undefined"){
      var prMarqueeImgBase = "http://www.intel.com/newsroom/kits";

      switch(documentID) {

         case 1405:  // Intel Education
            $j("#j-header > a").html('<img src="'+prMarqueeImgBase+'/education/images/nr-mrq-education.png" border="0"/>');
            break;

         case 1551:  // Intel SSD
            $j("#j-header > a").html('<img src="'+prMarqueeImgBase+'/ssd/images/nr-mrq-ssd.png" border="0"/>');
            break;

         case 1964:  // Intel Embedded
            $j('#j-header-wrap').css('background', 'url('+prMarqueeImgBase+'/embedded/images/nrJ5-mrq-embedded-bg-v3.png)');
            $j("#j-header > a").html('<img src="'+prMarqueeImgBase+'/embedded/images/nrJ5-mrq-embedded-txt-v3.png" border="0"/>');
            break;

         case 2032:  // Intel 22nm 3-D Tri-Gate Transistor Technology
              $j("#j-header > a").html('<img src="'+prMarqueeImgBase+'/22nm/images/nr-mrq-22nmTriGate.png" border="0"/>');
              break;

         case 2411:  // Ultrabook™
              $j("#j-header > a").html('<img src="'+prMarqueeImgBase+'/ultrabook/images/nr-mrq-ultrabook.png" border="0"/>');
              break;

         case 2652:  // Mobile World Congress 2012
              $j("#j-header > a").html('<img src="'+prMarqueeImgBase+'/mobileworld/2012/images/nr-mrq-mwc2012.png" border="0"/>');
              break;

         case 2735:  // 3rd Generation Intel® Core™ Processors
              $j("#j-header > a").html('<img src="'+prMarqueeImgBase+'/core/3rdgen/images/nr-mrq-3rdGenCoreProcessor.png" border="0"/>');
              break;

         case 2849:  // Intel Embedded
            $j('#j-header-wrap').css('background', 'url('+prMarqueeImgBase+'/corporate/images/nrJ5-mrq-IntelCorp-bg_v1.gif)');
            $j("#j-header > a").html('<img src="'+prMarqueeImgBase+'/corporate/images/nrJ5-mrq-IntelCorp-txt_v1.png" border="0"/>');
            break;

         default:
              break;

              }
    }
  });
