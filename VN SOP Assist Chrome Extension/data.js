var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
		case "act_wgt":
			element[i].title = "Please check standard weight";
			flag = 0;
			break;
			
		case "f_cust_nm":
			element[i].addEventListener("mouseover", function() { enableBKGSave();  });
			flag = 0;
			break;	
			
		case "btn_t1Save":
			element[i].addEventListener("click", function() { bkgCreation_SoftWarn();  }); 
			element[i].addEventListener("mouseover", function() { bkgCreation_HardWarn();  }); 
			flag = 0;
			break;	
        
		
		case "form":
			element[i].addEventListener("mouseover", function() { bkgCreation_Highlight(); });
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
