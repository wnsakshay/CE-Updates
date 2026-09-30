var element = document.getElementsByTagName('*');

 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
		case "bkg_no":
			element[i].addEventListener("keypress", function() { setTimeout(function(){ LongTerm_DLC(); },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ LongTerm_LYG(); },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ LongTerm_TAO(); },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ possible_DG(); },1000); });
            flag = 0;
            break;
		/*case "bkg_pod_cd":
			element[i].addEventListener("mouseover", function() { bkgPODToolTip(); });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_pod_cd')[0].style.backgroundColor = ""; });
			flag = 0;
            break;
			
		case "bkg_del_cd":
			element[i].addEventListener("mouseover", function() { bkgDELToolTip(); });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_del_cd')[0].style.backgroundColor = ""; });
            flag = 0;
            break;
			
		case "xter_rmk":
			element[i].addEventListener("mouseover", function() { bkgCustRemarkToolTip(); });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = ""; });
            flag = 0;
            break;
			
		case "inter_rmk":
			element[i].addEventListener("mouseover", function() { bkgInternalRemarkToolTip(); });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('inter_rmk')[0].style.backgroundColor = ""; });
            flag = 0;
            break;
				
		case "btn_t1TPSZ":
			element[i].addEventListener("mouseover", function() { bkgTPSZToolTip(); });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('btn_t1TPSZ')[0].style.backgroundColor = ""; });
            flag = 0;
            break;
				
		case "scac_cd":
			element[i].addEventListener("mouseover", function() { bkgSCACToolTip(); } );
			element[i].addEventListener("mouseout", function() { document.getElementsByName('scac_cd')[0].style.backgroundColor = "";  } );
			flag = 0;
			break;
				
		case "svc_scp_cd":
			element[i].addEventListener("mouseover", function() { chrgServiceScopeToolTip(); } );
			element[i].addEventListener("mouseout", function() { document.getElementsByName('svc_scp_cd')[0].style.backgroundColor = "";  } );
			flag = 0;
			break;
			
		case "ob_sls_ofc_cd":
			element[i].addEventListener("mouseover", function() { bkgLOFCToolTip(); } );
			element[i].addEventListener("mouseout", function() { document.getElementsByName('ob_sls_ofc_cd')[0].style.backgroundColor = "";  } );
			flag = 0;
			break;
			
		case "ob_srep_cd":
			element[i].addEventListener("mouseover", function() { bkgRepToolTip(); } );
			element[i].addEventListener("mouseout", function() { document.getElementsByName('ob_srep_cd')[0].style.backgroundColor = "";  } );
			flag = 0;
			break;
			
		case "pre_rly_port_cd":
			element[i].addEventListener("mouseover", function() { bkgPreToolTip(); } );
			element[i].addEventListener("mouseout", function() { document.getElementsByName('pre_rly_port_cd')[0].style.backgroundColor = "";  } );
			flag = 0;
			break;
			
		case "pst_rly_port_cd":
			element[i].addEventListener("mouseover", function() { bkgPostToolTip(); } );
			element[i].addEventListener("mouseout", function() { document.getElementsByName('pst_rly_port_cd')[0].style.backgroundColor = "";  } );
			flag = 0;
			break;*/
					
        default:
            flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{
            
			case "btn_t1Save":
				element[i].addEventListener("click", function() { bkgDueDiligencePopup(); } );
				element[i].addEventListener("click", function() { bkgProhibitedPopup(); } );
				element[i].addEventListener("click", function() { intDueDeligence(); } );
				element[i].addEventListener("click", function() { custDueDeligence(); } );
				element[i].addEventListener("click", function() { intProhibited(); } );
				element[i].addEventListener("click", function() { custProhibited(); } );
				element[i].addEventListener("click", function() { setTimeout(function(){ LongTerm_DLC(); },1000); })
				element[i].addEventListener("click", function() { setTimeout(function(){ LongTerm_LYG(); },1000); })
				element[i].addEventListener("click", function() { setTimeout(function(){ LongTerm_TAO(); },1000); })
				element[i].addEventListener("click", function() { setTimeout(function(){ possible_DG(); },1000); })
				flag = 0;
                break;
			
			case "btn_t7Save":
				element[i].addEventListener("click", function() { dueCustPop(); })
				element[i].addEventListener("click", function() { holdCustPop(); })
				flag = 0;
				break;
				
			case "btn_t1retrieve":
				element[i].addEventListener("click", function() { setTimeout(function(){ LongTerm_DLC(); },1000); })
				element[i].addEventListener("click", function() { setTimeout(function(){ LongTerm_LYG(); },1000); })
				element[i].addEventListener("click", function() { setTimeout(function(){ LongTerm_TAO(); },1000); })
				element[i].addEventListener("click", function() { setTimeout(function(){ possible_DG(); },1000); })
				flag = 0;
				break;
				

			
			
		
			default:
                flag = 1;
		}
	}
}
