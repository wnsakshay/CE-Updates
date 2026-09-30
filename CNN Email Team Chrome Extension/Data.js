var element = document.getElementsByTagName('*');
var clr = null;
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{			
		case "btn_t10save":
			element[i].addEventListener("mouseover", function() { chargeTab_popups(); });
			element[i].addEventListener("click", function() { chargeTabWarnPopup(); });
			flag = 0;
			break;
	
		case "bl_no":
			element[i].addEventListener("mouseover", function() { INbound_Popup(); });
			flag = 0;
			break;
		
		case "bkg_no":
			element[i].addEventListener("keypress", function() { BlinkCustomer_popup(); });
			flag = 0;
			break;
			
		case "btn_t1retrieve":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('btn_t1retrieve')[0].style.backgroundColor = "#FFA54F"; })
			element[i].addEventListener("click", function () { setTimeout(function(){ BlinkCustomer_popup();  },1000); });
			flag = 0;
			break;
			
		case "btn_t7Save":
			element[i].addEventListener("click", function () { ShenzhenEnkorHardStop();  });
			flag = 0;
			break;
			
		case "btn_t9Save":
			element[i].addEventListener("click", function () { ShenzhenEnkorHardStop();  });
			flag = 0;
			break;
			
		case "btn_t11Save":
			element[i].addEventListener("click", function () { ShenzhenEnkorHardStop();  });
			flag = 0;
			break;
				
        default:
			flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{
			case "btn_save":
				element[i].addEventListener("mouseover", function() { INbound_Popup(); } );
				flag = 0;
				break;
				
			case "btn_workspace":
				element[i].addEventListener("mouseover", function() { document.getElementById("btn_workspace").title = "BLINK Customer \r\n- If BL is completed - Send Draft via BLINK\r\n- If BL is pending / or any Amendment - Send Inquiry via BLINK"; } );
				flag = 0;
				break;
				
			default:
                flag = 1;
		}
	}
}
