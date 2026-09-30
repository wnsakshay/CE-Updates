var element = document.getElementsByTagName('*');
var clr = null;
 

//document.onkeydown = keydown;
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "bkg_no":
            flag = 0;
            break;
			
		case "form":
			element[i].addEventListener("mouseover" , function(){ CashCustomer_EBL();   } );
			element[i].addEventListener("mouseover" , function(){ freeze_BLIssueBTN();   } );
            flag = 0;
            break;	
				
		case "btn_t1retrieve":
			element[i].title = "Please enter BL Number and click on Retrieve.";
			flag = 0;
			break;
			
		case "btn_t11BLRelease":
			element[i].addEventListener("mouseover", function() { BLType_Check(); });
			element[i].addEventListener("click", function() { ShenzhenEnkorHardStop(); });
			flag = 0;
			break;
			
		case "btn_t11InternetAUTH":
			element[i].addEventListener("mouseover", function() { BLType_Check(); });
			element[i].addEventListener("click", function() { ShenzhenEnkorHardStop(); });
			flag = 0;
			break;
			
		case "btn_t11Save":
			element[i].addEventListener("mouseover", function() { blrelease_IKEA(); });
			flag = 0;
			break;
			
		case "btn_t10save":
			element[i].addEventListener("mouseover", function() { LPS_Waive_IKEA_NIKE(); });
			element[i].addEventListener("mouseover", function() { SAMSUNG_Waive_LPS_CDC_AMA(); });
			element[i].addEventListener("click", function() { LPS_HONDA(); }); 
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

	

