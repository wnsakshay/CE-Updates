var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "bkg_no":
			element[i].addEventListener("keypress", function () { setTimeout(function(){ BKGCreation_warnpopup();  },500); });
            flag = 0;
            break;
			
		case "btn_t1retrieve":
			element[i].addEventListener("click", function() { setTimeout(function(){ BKGCreation_warnpopup();  },500); });
			flag = 0;
			break;
			
		case "btn_t1Save":
			element[i].addEventListener("click", function() { setTimeout(function(){ BKGCreation_warnpopup();  },1000); } );
			element[i].addEventListener("mouseover", function() { BKGCreation_hardpopup();  } );
			break;
			
		case "form":
			element[i].addEventListener("mouseover", function() { BKGCreation_tooltip(); });
			element[i].addEventListener("mouseover", function() { standByWindow(); });
			flag = 0;
			break;
			
		default:
			flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{			
			default:
                flag = 1;
		}
	}
}
