var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        /*case "bkg_no":
			element[i].addEventListener("keypress", function () { bkgCreationWarnPopups(); });
            flag = 0;
            break;
			
		case "btn_t1retrieve":
			element[i].addEventListener("click", function() { setTimeout(function(){ bkgCreationWarnPopups();  },500); });
			flag = 0;
			break;*/
			
		case "btn_t8Save":
			element[i].addEventListener("click", function() { MnDWarnPopups();  });
			flag = 0;
			break;
		
		case "form":
			//element[i].addEventListener("mouseover", function() { bkgCreationHighlight(); });
			break;
		
		case "btn_t8ExportImportInfo":
			element[i].addEventListener("click", function() { sendACID();  });
			flag = 0;
			break;
		
		case "btn_save2":
			element[i].addEventListener("mouseover", function() { EG_EXP_IMP_Ref_HardPopups();  });
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
