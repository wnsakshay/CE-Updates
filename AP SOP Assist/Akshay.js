var element = document.getElementsByTagName('*');

 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
			
		case "t4btng_confirm":
			element[i].addEventListener("click", function() { OffDockInvoice_FD_btnConfirm(); });
			//element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_del_cd')[0].style.backgroundColor = ""; });
            flag = 0;
            break;
			
			
		case "t3btng_confirm":
			element[i].addEventListener("click", function() { t3btng_confirm_callingFunct(); });
			//element[i].addEventListener("mouseover", function() { MarineStorageInvoice_btnConfirm(); });
			//element[i].addEventListener("mouseover", function() { MarineInvoice_btnConfirm(); });
			//element[i].addEventListener("mouseout", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = ""; });
            flag = 0;
            break;
			
		case "btn_Save":
			element[i].addEventListener("click", function() { portChargeInvoice_btnSave(); });
			//element[i].addEventListener("mouseover", function() { MarineStorageInvoice_btnConfirm(); });
			//element[i].addEventListener("mouseover", function() { MarineInvoice_btnConfirm(); });
			//element[i].addEventListener("mouseout", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = ""; });
            flag = 0;
            break;

					
        default:
            flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{
            
			
			case "btn_t1ReferenceNo":
				/* element[i].addEventListener("mouseover", function() { bkgRefNoToolTip(); })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1ReferenceNo').style.backgroundColor = ""; });
				flag = 0;
				break; */			
		
			default:
                flag = 1;
		}
	}
}
