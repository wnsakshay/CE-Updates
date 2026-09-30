var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "btn_retrieve":
			//element[i].addEventListener("mouseover", function() { showPersistentTooltip(this, "This is a persistent tooltip. Click × to close.", ); });
			element[i].addEventListener("mouseover", function() {	bkgCreationWarnPopups(); });

			flag = 0;
			break;	
			
		case "form":
			element[i].addEventListener("mouseover", function() { bkgCreationHighlight(); });
			//element[i].addEventListener("mouseover", function() { showPersistentTooltip("btn_retrieve", "This is a persistent tooltip. Click × to close."); });
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
