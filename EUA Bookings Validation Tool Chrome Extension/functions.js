function warnPop_BKGCreationTab()
{
	try
	{
		let bOffice = document.getElementsByName("bkg_ofc_cd")[0].value;
		let preDEL = document.getElementById("bkg_del_cd").value.substring(0,2),
		Filer = document.getElementById("usa_cstms_file_cd_text").value,
		SCAC = document.getElementById("scac_cd").value,
		bkgStatus = document.getElementsByName("bkg_sts_cd")[0].value + document.getElementsByName("bkg_aloc_sts_cd")[0].value,
		RDTerm = document.getElementById("rcv_term_cd_text").value + document.getElementById("de_term_cd_text").value,
		DGTick = document.getElementsByName("dcgo_flg")[0].checked,
		POL = document.getElementById("bkg_pol_cd").value;
		
		/*if(preDEL == "US" && Filer == "2" && SCAC.trim() == "")
		{
			alert("Please update the SCAC code");
			document.getElementById("btn_t1Save").setAttribute("disabled","true");
		}
		else
		{
			document.getElementById("btn_t1Save").removeAttribute("disabled")
		}*/
		
		if(bkgStatus == "FF")
		{
			if(RDTerm == "YY" || RDTerm == "YD")
			{
				alert("Check the FAX/EDI for BRN sending")
			}
			else if(RDTerm == "DY" || RDTerm == "DD")
			{
				if(["DEHAM","DEBRV","NLRTM","BEANR"].includes(POL))
				{
					alert("Check the FAX/EDI for BRN sending");
					document.getElementById("btn_t1FaxEDI").removeAttribute("disabled");
				}
			}
		}
		else if(bkgStatus == "WF")
		{
			if(RDTerm == "YY" || RDTerm == "YD")
			{
				if(DGTick == true)
				{
					alert("Check the FAX/EDI for BRN sending / Check if with DGD attachment, if Yes send to DG team for BRN sending");
				}
			}
		}
		
		var count = document.getElementsByClassName("GMWrap0 GMAlignRight GMFloat GMCell IBSheetFont0 HideCol0C8").length;
		for(var i = 0; i < count; i++)
		{
			if(document.getElementsByClassName("GMWrap0 GMAlignRight GMFloat GMCell IBSheetFont0 HideCol0C8")[i].innerText != "0.00")
			{
				alert("Please use SOC Depot as per DSOP!!");
				break;
			}
		}
			
		if(bOffice == "HAMBB")
		{
			if(bkgStatus == "FF")
			{
				if(RDTerm == "DY" || RDTerm == "DD")
				{
					if(!["DEHAM","DEBRV","NLRTM","BEANR","BEZEE"].includes(POL))
					{
						alert("No BRN sending / send ALERTSHEET only");
						document.getElementById("btn_t1FaxEDI").setAttribute("disabled","true");
					}
				}
			}
		}
	}catch(err){}
}
function warnPop_TROTab() {
  try 
  {
    var POR = document.getElementById("por_cd").value;
    var loc = document.getElementById("dor_loc_cd").value;

    if (POR !== loc) 
	{
      alert("POR and Location address should be the same. Kindly select the correct POR.");
    }
  } 
  catch (err) {  }
  
  try
  {
	var troconfirm = document.getElementsByName("cfm_flg")[0].value;
	var stat = document.getElementsByName("bkg_sts_cd")[0].value;
	var company = document.getElementsByName("dor_addr_1")[0].value;
	var mode = document.getElementsByName("bkg_trsp_mzd_cd_text")[0].value;
	var drarrivaldate = document.getElementsByName("arr_dt")[0].value;
	var drarrivaltime = document.getElementsByName("arr_dt_hhmi")[0].value;
	
	if(troconfirm == "No" && stat == "F")
	{
		if(company !="" || mode != "" || drarrivaldate != "" || drarrivaltime != "")
		{
			alert("Please Confirm TRO");
		}
	}
  }
  catch(err){}
}

