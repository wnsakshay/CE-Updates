var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "btn_goto":
			element[i].addEventListener("click", function () { setTimeout(function(){ Vandecasteele_Popup();  },100); });
			element[i].title = "Please check if Invoice issue currency is selected as per CSOP instructions.";
            flag = 0;
            break;
			
		case "form":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ Invoice_Issue_Highlight();  },500); });
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ EU_CargoReleasePopup(); }, 500); });
			flag = 0;
			break;
			
		case "inv_curr_cd_text":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ enable_ar_invoice();  },100); });
			flag = 0;
			break;
				
		case "btn_save":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ Inv_Item_Correction();  },100); });
			flag = 0;
			break;
			
		case "btn_release":
			element[i].addEventListener("click", function() { EUCargoRelease_SpaceAvailability(); });
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
