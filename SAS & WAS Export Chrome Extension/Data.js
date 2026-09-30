var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "bkg_no":
			element[i].addEventListener("keypress", function () { setTimeout(function(){ bkgCreationWarnPopups();  },500); });
            flag = 0;
            break;
			
		case "btn_t1retrieve":
			element[i].addEventListener("click", function() { setTimeout(function(){ bkgCreationWarnPopups();  },500); });
			flag = 0;
			break;
			
		case "btn_t1Save":
			element[i].addEventListener("click", function() { setTimeout(function(){ bkgCreationWarnPopups();  },500); }); //testing click
			element[i].addEventListener("mouseover", function() { bkgCreationHardPopups(); });
			flag = 0;
			break;
		
		case "btn_t6save":
			element[i].addEventListener("click", function() { cntrTabWarnPopups(); }); //testing click
			element[i].addEventListener("mouseover", function() { cntrTabHardPopups(); }); 
			flag = 0;
			break;
			
		case "btn_t7Save":
			element[i].addEventListener("mouseover", function() { customerTabHardPopups(); });
			flag = 0;
			break;
			
		case "btn_t8Save":
			element[i].addEventListener("click", function() { mndTabWarnPopups(); }); //testing click
			element[i].addEventListener("mouseover", function() { mndTabHardPopups(); }); 
			flag = 0;
			break;
			
		case "btn_t9Save":
			element[i].addEventListener("click", function() { cmTabWarnPopups(); }); //testing click
			element[i].addEventListener("mouseover", function() { cmTabHardPopups(); });
			flag = 0;
			break;
		
		case "btn_t10save":
			element[i].addEventListener("click", function() { chargeTabWarnPopups(); }); //testing click
			element[i].addEventListener("mouseover", function() { chargeTabHardPopups(); });
			flag = 0;
			break;
		
		case "btn_t11Save":
			element[i].addEventListener("click", function() { blIssueTabWarnPopups(); }); //testing click
			element[i].addEventListener("mouseover", function() { blIssueTabHardPopups(); });
			flag = 0;
			break;
		
		case "form":
			element[i].addEventListener("mouseover", function() { bkgCreationHighlight(); });
			element[i].addEventListener("mouseover", function() { cntrTabHighlight(); });
			element[i].addEventListener("mouseover", function() { customerTabHighlight(); });
			element[i].addEventListener("mouseover", function() { mndTabHighlight(); });
			element[i].addEventListener("mouseover", function() { cmTabHighlight(); });
			element[i].addEventListener("mouseover", function() { chargeTabHighlight(); });
			element[i].addEventListener("mouseover", function() { blIssueTabHighlight(); });
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
