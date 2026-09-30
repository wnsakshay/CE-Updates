var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "bkg_no":
			//element[i].addEventListener("keypress", function () { setTimeout(function(){ BKGCreation_popup();  },500); });
            flag = 0;
            break;
			
		case "btn_t1retrieve":
			//element[i].addEventListener("click", function() { setTimeout(function(){ BKGCreation_popup();  },500); });
			flag = 0;
			break;
			
		case "btn_t1Save":
			element[i].addEventListener("click", function() { bkgCreationWarnPopup(); } );
			element[i].addEventListener("mouseover", function() { bkgCreationHardPopup(); } );
			
		case "form":
			element[i].addEventListener("mouseover", function() { highlightBkgCreation(); });
			element[i].addEventListener("mouseover", function() { bkgCreationTooltip(); });
			flag = 0;
			break;
			
		case "btn_opusupload":
			element[i].addEventListener("mouseover", function() { eSIBookingUploadHardPopup(); });
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
