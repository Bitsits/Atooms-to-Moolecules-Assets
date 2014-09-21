$j(document).ready(function(){  
    
    $j("ul.topnav li a").live('click', function() { 
   
        $j(this).parent().find(".subnavmenujive").show(); 
        $j(this).parent().hover(
        function() {  
        },
        function(){  
            $j(this).parent().find(".subnavmenujive").hide();
        });
    });
    
});  