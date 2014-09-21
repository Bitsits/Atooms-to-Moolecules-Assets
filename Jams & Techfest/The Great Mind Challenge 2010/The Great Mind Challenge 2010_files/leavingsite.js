function LeavingSite(externalURL,cc,blank){
if(blank==undefined){var blank='';}else{var blank='?blank';}
if(cc==undefined){if(/\/nz\//.test(document.URL)){cc='nz'}else if(/\/id\//.test(document.URL)){cc='id'}else if(/\/in\//.test(document.URL)){cc='in'}else if(/\/my\//.test(document.URL)){cc='my'}else if(/\/ph\//.test(document.URL)){cc='ph'}else if(/\/sg\//.test(document.URL)){cc='sg'}else if(/\/th\//.test(document.URL)){cc='th'}else if(/\/hk\//.test(document.URL)){cc='hk'}else if(/\/lk\//.test(document.URL)){cc='lk'}else if(/\/bd\//.test(document.URL)){cc='bd'}else if(/\/vn\//.test(document.URL)){cc='vn'}else if(/\/cn\//.test(document.URL)){cc='cn'}else if(/\/tw\//.test(document.URL)){cc='tw'}else if(/\/kr\//.test(document.URL)){cc='kr'}else if(/\/au\//.test(document.URL)){cc='au'}}
if(cc=='cn'){popupHeight=277;}else if(cc=='tw'){popupHeight=277;}else if(cc=='kr'){popupHeight=260;}else{popupHeight=313;}
if((document.all)&&(navigator.appVersion.indexOf("MSIE 7.")!=-1)){popupHeight=popupHeight-7;}else if(navigator.appName=="Microsoft Internet Explorer"){popupHeight=popupHeight+174;}else if(navigator.appVersion.indexOf("Safari")!=-1){popupHeight=popupHeight-16;}
Leaving=window.open('/asiapacific/leavingsite/v16/leavingsite_'+cc+'.html'+blank, '', 'width=460,height='+popupHeight+',status=yes, location=yes,toolbar=yes,directories=yes,menubar=yes, resizable=yes,scrollbars=yes');
Leaving.externalURL=externalURL;
return false;
}
