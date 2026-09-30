var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
		case "bkg_no":
			element[i].addEventListener("keypress", function () { setTimeout(function(){ reeferPopup();  },100); });
            flag = 0;
            break;
			
		case "btn_t1retrieve":
			element[i].addEventListener("click", function () { setTimeout(function(){ reeferPopup();  },100); });
            flag = 0;
            break;
			
        case "btn_t10save":
			element[i].addEventListener("click", function () { setTimeout(function(){ Payer_Code_Popup();  },100); });
            flag = 0;
            break;
			
		case "btn_t11Save":
			element[i].addEventListener("mouseover", function () { BL_Type_Check(); });
			element[i].addEventListener("mouseover", function() { BLIssue_MetroShipping(); });
            flag = 0;
            break;
			
		case "bl_ready_type_text":
			element[i].addEventListener("mouseover", function () { setTimeout(function(){ Enable_BLIssue();  },100); });
            flag = 0;
            break;
			
		case "form":
			element[i].addEventListener("mouseover", function () { update_Shipper(); });
			element[i].addEventListener("mouseover", function () { BKG_Fax_BR(); });
			flag = 0;
			break;
		
		case "btn_t6save":
			element[i].addEventListener("mouseover", function () { checkDuplicateSeal(); });
			flag = 0;
			break;
			
		case "btn_t7Save":
			element[i].addEventListener("mouseover", function () { Mandatory_field_cust(); });
			element[i].addEventListener("click", function () { updateCNPJNCM(); });
			flag = 0;
			break;
						
		case "btn_t8Save":
			element[i].addEventListener("mouseover", function () { Marks_CBM_Blank_Popup(); });
			element[i].addEventListener("mouseover", function () { Argentina_PTerm_MD(); });
			element[i].addEventListener("click", function () { currency_popup(); });
			element[i].addEventListener("click", function () { checkTotalWeight(); });
			element[i].addEventListener("click", function () { updateCNPJNCM(); });
			element[i].addEventListener("click", function () { updateACID(); });
			flag = 0;
			break;
									
		case "btn_t9Save":
			element[i].addEventListener("click", function () { currency_popup(); });
			element[i].addEventListener("click", function () { checkTotalWeight(); });
			element[i].addEventListener("click", function () { updateCNPJNCM(); });
			flag = 0;
			break;
			
		case "btn_qa_completed":
			element[i].addEventListener("click", function () { QueueList_Draft_BR(); });
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
