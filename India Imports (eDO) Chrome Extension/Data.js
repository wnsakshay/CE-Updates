var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{		
		case "doGenerateForm":
			element[i].addEventListener("mouseover", function() { highlight_DeStuff_Empty_Yard(); });
			element[i].addEventListener("mouseover", function() { highlight_Empty_Yard_Tumb(); });
			element[i].addEventListener("mouseover", function() { highlight_DeStuff_INNSA1(); });
			element[i].addEventListener("mouseover", function() { highlight_DeStuff_Cochin(); });
			element[i].addEventListener("mouseover", function() { highlight_Chennai_Toyota_GenDO(); });
			element[i].addEventListener("mouseover", function() { highlight_DeStuff_Vishakapatnam(); });
			break;
			
		default:
			flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{			
			case "genDOBtn":
				element[i].addEventListener("click", function () { DeStuff_Empty_Yard(); });
				element[i].addEventListener("click", function () { Empty_Yard_Tumb(); });
				element[i].addEventListener("click", function () { DeStuff_INNSA1(); });
				element[i].addEventListener("click", function () { DeStuff_Cochin(); });
				element[i].addEventListener("click", function () { Chennai_Toyota_GenDO(); });
				element[i].addEventListener("click", function () { DeStuff_Vishakapatnam(); });
			flag = 0;
			break;
			
			case "releaseDOBtn":
				element[i].addEventListener("click", function () { DPDSEZCFS_Chennai_Cochin_Kattupalli_Release(); });
			flag = 0;
			break;
			
			case "btn_release":
				element[i].addEventListener("click", function () { India_Cargo_Release_OfficeMismatch(); });
				element[i].addEventListener("click", function () { India_Cargo_Release_Toyota(); });
			flag = 0;
			break;
		
			default:
                flag = 1;
		}
	}
}
