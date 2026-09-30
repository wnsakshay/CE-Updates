var element = document.getElementsByTagName('*');
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "bkg_no":
			element[i].addEventListener("keypress", function () { setTimeout(function(){ BKGCreation_popup();  },500); });
			element[i].addEventListener("keypress", function () { setTimeout(function(){ FOB_contract();  },500); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ bkg_DueDiligencePopup();  },500); } );
			element[i].addEventListener("keypress", function() { setTimeout(function(){ bkgCreationWarnPopup();  },500); } );
			element[i].addEventListener("keypress", function() { setTimeout(function(){ oneQuoteNonFMC();  },500); } );
            flag = 0;
            break;
			
		case "btn_t1retrieve":
			element[i].addEventListener("click", function() { setTimeout(function(){ BKGCreation_popup();  },500); });
			element[i].addEventListener("click", function() { setTimeout(function(){ FOB_contract();  },500); });
			element[i].addEventListener("click", function() { setTimeout(function(){ bkg_DueDiligencePopup();  },500); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ bkgCreationWarnPopup();  },500); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ oneQuoteNonFMC();  },500); } );
			flag = 0;
			break;
			
		case "btn_t1Save":
			element[i].addEventListener("click", function() { setTimeout(function(){ bkg_DueDiligencePopup();  },1000); } );
			element[i].addEventListener("click", function() { resubmission_popup();  } );
			element[i].addEventListener("mouseover", function() { bkgCreationHardPopup();  } );
			break;
			
		case "btn_t6save":
			element[i].addEventListener("click", function() { setTimeout(function(){ cntrTab_Popups();  },500); });
			element[i].addEventListener("click", function() { resubmission_popup();  } );
			flag = 0;
			break;	
			
		case "btn_t7Save":
			element[i].addEventListener("click", function() { setTimeout(function(){ Customer_popup();  },500); });
			element[i].addEventListener("mouseover", function() { customerTabHardPopup(); });
			element[i].addEventListener("click", function() { dummy_repcode_check(); });
			element[i].addEventListener("mouseover", function() { checkCanadaZipFormat(); });
			element[i].addEventListener("click", function() { resubmission_popup();  } );
			flag = 0;
			break;
			
		case "btn_t8Save":
			element[i].addEventListener("click", function() { setTimeout(function(){ MndTab_Popups();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ mndTabWarnPopup();  },500); });
			element[i].addEventListener("click", function() { resubmission_popup();  } );
			element[i].addEventListener("mouseover", function() { MnDTabHardPopup();  } );
			flag = 0;
			break;
			
		case "btn_t9Save":
			element[i].addEventListener("click", function() { resubmission_popup();  } );
			element[i].addEventListener("click", function() { setTimeout(function(){ CMTab_Popups();  },1000); });
			flag = 0;
			break;
			
		case "btn_t10save":
			element[i].addEventListener("click", function() { Prepaid_Code_popup(); });
			element[i].addEventListener("click", function() { Charge_popup(); });
			element[i].addEventListener("click", function() { FOB_contract(); });
			element[i].addEventListener("click", function() { checkNegativeCharge(); });
			element[i].addEventListener("click", function() { chargeTabWarnPopup(); });
			element[i].addEventListener("click", function() { resubmission_popup();  } );
			flag = 0;
			break;
			
		case "btn_t10auto_rating":
			element[i].addEventListener("click", function() { Charge_popup(); });
			
			flag = 0;
			break;
			
		case "btn_t11Save":
			element[i].addEventListener("click", function() { setTimeout(function(){ BLIssueTab_Popups();  },1000); });
			element[i].addEventListener("click", function() { resubmission_popup();  } );
			element[i].addEventListener("mouseover", function() { BLIssueTabHardPopup();  } );
			flag = 0;
			break;
			
		case "form":
			element[i].addEventListener("mouseover", function() { highlightBKGCreation(); });
			element[i].addEventListener("mouseover", function() { highlightCNTR(); });
			element[i].addEventListener("mouseover", function() { highlightCustomer(); });
			element[i].addEventListener("mouseover", function() { highlightMnD(); });
			element[i].addEventListener("mouseover", function() { highlightCM(); });
			element[i].addEventListener("mouseover", function() { highlightCharge(); });
			element[i].addEventListener("mouseover", function() { highlightARInvoiceIssue(); });
			flag = 0;
			break;
			
		case "frm_p_t10sheet3_cust_seq":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ enableChrgSave();  },100); });
			flag = 0;
			break;
			
		case "btn_eml":
			element[i].addEventListener("click", function() { setTimeout(function(){ ar_invoice();  },100); });
			flag = 0;
			break;
			
		case "inv_curr_cd_text":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ enable_ar_invoice();  },100); });
			flag = 0;
			break;
			
		case "btn1_Send":
			element[i].addEventListener("click", function() { custCodeRequest(); });
			element[i].addEventListener("mouseover", function() { custCodeRequestHardPopup(); });
			flag = 0;
			break;
			
		case "btn_Save":
			element[i].addEventListener("click", function() { invIssueCustomerEmail(); });
			flag = 0;
			break;
			
		case "btn_close":
			element[i].addEventListener("click", function() { invIssueCustomerEmail(); });
			flag = 0;
			break;
			
		case "btn_Retrieve":
			element[i].addEventListener("click", function() { setTimeout(function(){ ChrgeCalBkg(); },1000); });
			flag = 0;
			break;
			
		case "btn_save2":
			element[i].addEventListener("mouseover", function() {  EG_EXP_IMP_Ref_HardPopups(); });
			flag = 0;
			break;
			
		default:
			flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{	
			case "btn_save": //Danger Cargo Application Save
				element[i].addEventListener("click", function() {  dangerCargoApplication(); });
				flag = 0;
				break;
				
			default:
                flag = 1;
		}
	}
}
