 var element = document.getElementsByTagName('*');
 
 window.addEventListener("load", function () { setColors(); });
 
 //document.onkeydown = keydown;
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
		case "form":
    		element[i].addEventListener("mouseover", function() { HighlightAmdEffDate(); } );
            flag = 0;
            break; 
				
		case "btn_eff_dt":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('btn_eff_dt')[0].style.backgroundColor = "orange"; });
			element[i].title = "*Recommended to use the possible Effective date suggested by the system.\r\n*Do not delete any rates if you use the Possible Effective Date.\r\n*If you are going to clean up rates, do not use the possible effective date.";
            flag = 0;
            break;

        default:
			flag = 1;
    
	}
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{
            case "org_dest_tp_cd1":
				element[i].title="Select Origin or Destination Arbitrary.";
				element[i].addEventListener("mouseover", function () { Arb1_DIV_sheet1(); });
                flag = 0;
                break;
				
			case "org_dest_tp_cd2":
				element[i].title="Select Origin or Destination Arbitrary.";
				element[i].addEventListener("mouseover", function () { Arb1_DIV_sheet1(); });
                flag = 0;
                break;

			case "DIV_sheet1":
				element[i].addEventListener("mouseover", function() { Arb1_DIV_sheet1(); } );
				element[i].addEventListener("mouseover", function() { Rate_DIV_sheet1(); } );
				element[i].addEventListener("mouseover", function() { Rate_DIV_sheet3(); } );
				element[i].addEventListener("mouseover", function() { Spl_DIV_sheet1(); } );
				flag = 0;
				break;
				
			case "DIV_sheet2":
				element[i].addEventListener("mouseover", function() { Main_DIV_sheet2(); } );
				flag = 0;
				break;
			
			case "DIV_sheet3":
                element[i].addEventListener("mouseover", function() { Rate_DIV_sheet1(); } );
				element[i].addEventListener("mouseover", function() { Rate_DIV_sheet3(); } );
				element[i].addEventListener("mouseover", function() { ComCheck_DIV_sheet3(); } );
				flag = 0;
				break;
							
			case "btn_autoword":
				element[i].title = "Click auto wording once the update is done.\r\nNon Auto Rating surcharges FGP, CTC, FLX, SBL, CDR\r\nCGP = CGD, COD, DPC, ECP\r\nCTF = DPI";
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_autoword').style.backgroundColor = "orange"; });
				flag = 0;
				break;
			
			case "btn_ok":
				element[i].title = "Double check the Inclusive surcharges, check APP validity, HAZ, PSA charge, Payment term, POL, POD, SOC , and check the auto-wording if updated";
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_ok').style.backgroundColor = "orange"; });
				element[i].addEventListener("click", function () { ComCheck_Popup();});
				flag = 0;
				break;
			
			default:
                flag = 1;
		}
	}
}


function keydown(evt) {
    /*if (!evt) evt = event;
    if (evt.altKey ) 
	{
		 alert('ALT key prohibited in OPUS');
		
	}*/
	
}


