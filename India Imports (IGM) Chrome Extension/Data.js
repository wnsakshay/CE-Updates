var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{			
		case "igmLineNoForm":
			element[i].addEventListener("mouseover", function() { highlightODeXDraftMaster(); });
			flag = 0;
			break;
		
		default:
			flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{			
			case "updateIgmDrftBtn":
				element[i].addEventListener("click", function () { ODeXDraftMaster_warnPopup(); });
				flag = 0;
				break;
			
			case "cnfrmIgmDrftBtn":
				element[i].addEventListener("click", function () { ODeXDraftMaster_warnPopup(); });
				flag = 0;
				break;
		
			default:
                flag = 1;
		}
	}
}
