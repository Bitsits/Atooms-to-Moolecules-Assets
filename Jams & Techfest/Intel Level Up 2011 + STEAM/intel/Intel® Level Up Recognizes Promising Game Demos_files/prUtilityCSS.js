document.write('<link rel="stylesheet" href="http://www.intel.com/newsroom/assets/css/newsroom2.css" type="text/css"/>');

if(typeof documentID != "undefined"){
                var prMarqueeImgBase = "http://www.intel.com/";


	  switch(documentID)
			{
				case 2321:
				document.write('<link rel="stylesheet" href="'+prMarqueeImgBase+'newsroom/kits/idf/2011_fall/css/idf2011.css" type="text/css"/>');
						document.write('<link rel="stylesheet" href="'+prMarqueeImgBase+'newsroom/kits/idf/2011_fall/css/prTab.css" type="text/css"/>');
				  break;
				default:
				  document.write('<link rel="stylesheet" href="http://www.intel.com/newsroom/assets/tab/prTab.css" type="text/css"/>');
			}
    }
