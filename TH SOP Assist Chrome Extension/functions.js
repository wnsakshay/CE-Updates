function BKGCreation_tooltip()
{
	try
	{
		let por = document.getElementsByName("bkg_por_cd")[0].value;
		let poryd = document.getElementsByName("bkg_por_yd_cd")[0].value;
		let shpr = document.getElementsByName("s_cust_nm")[0].value;
		let intRemark = document.getElementsByName("inter_rmk")[0].value;
		let shprcd = "", cneecd = "", cnptcd = "", fwdrcd = "", delcd = "";
		let dueArr = [ "AE", "AF", "BA", "BY", "CD", "CF", "EE", "EG", "FI", "GE", "HT", "IQ", "JO", "LB", "LT", "LV", "LY", "ML", "MM", "NI", "RS", "RU", "SD", "SO", "SS", "TN", "TR", "UA", "VE", "YE", "ZW" ];
		
		//tooltip on POR/SHPR
		if(por == "THBKK" && poryd == "02" && (shpr.startsWith("SIAM KRAFT INDUSTRY") || shpr.startsWith("THAI PAPER") || shpr.startsWith("PHOENIX PULP & PAPER PUBLIC") || shpr.startsWith("CHEMEMAN PUBLIC")))
		{
			document.getElementsByName("bkg_por_cd")[0].title = "Please check POR at BKK area";
			document.getElementsByName("bkg_por_yd_cd")[0].title = "Please check POR at BKK area";
			document.getElementsByName("s_cust_cnt_cd")[0].title = "Please check POR at BKK area";
			document.getElementsByName("s_cust_seq")[0].title = "Please check POR at BKK area";
			document.getElementsByName("s_cust_nm")[0].title = "Please check POR at BKK area";
		}
		else
		{
			document.getElementsByName("bkg_por_cd")[0].title = "Arrange POR as per Service Lane for BKK area for other Customers not in list. Apply THBKK02 (BBT) for 4 Exceptional Customers";
			document.getElementsByName("bkg_por_yd_cd")[0].title = "Arrange POR as per Service Lane for BKK area for other Customers not in list. Apply THBKK02 (BBT) for 4 Exceptional Customers";
			document.getElementsByName("s_cust_cnt_cd")[0].title = "Arrange POR as per Service Lane for BKK area for other Customers not in list. Apply THBKK02 (BBT) for 4 Exceptional Customers";
			document.getElementsByName("s_cust_seq")[0].title = "Arrange POR as per Service Lane for BKK area for other Customers not in list. Apply THBKK02 (BBT) for 4 Exceptional Customers";
			document.getElementsByName("s_cust_nm")[0].title = "Arrange POR as per Service Lane for BKK area for other Customers not in list. Apply THBKK02 (BBT) for 4 Exceptional Customers";
		}
		
		//tooltip on VVD & Cutoff
		document.getElementsByName("bkg_trunk_vvd")[0].title = "Please check the VVD for Delayed Vessels and manually update the Cut off Time";
		document.getElementsByName("btn_t1CargoClosingTime")[0].title = "Please check the VVD for Delayed Vessels and manually update the Cut off Time";
		
		//Stand By Detail
		document.getElementsByName("btn_t1SbRsnDtl")[0].title = "Needs to check the Standby Guideline spreadsheet. \r\nAppropriate action will depend on the Topic and requires determining whether to:\r\n1. Release a BRN to the Customer.\r\n2. Escalate the booking to Onshore (TIER1).\r\n3. Escalate the booking to the Marketing Team (TIER2).";
		
		//NAC		
		document.getElementsByName("inter_rmk")[0].title = "If the NAC is already linked or updated, please input the given NAC in the Internal remarks section";
		document.getElementsByName("rfa_no")[0].title = "If the NAC is already linked or updated, please input the given NAC in the Internal remarks section";
		document.getElementsByName("sc_no")[0].title = "If the NAC is already linked or updated, please input the given NAC in the Internal remarks section";
		document.getElementsByName("agmt_act_cnt_cd")[0].title = "If the NAC is already linked or updated, please input the given NAC in the Internal remarks section";
		document.getElementsByName("agmt_act_cust_seq")[0].title = "If the NAC is already linked or updated, please input the given NAC in the Internal remarks section";
		
		
		//Due Diligence tooltip
		if(document.getElementsByName("s_cust_cnt_cd")[0].value != null)
		{
			shprcd = document.getElementsByName("s_cust_cnt_cd")[0].value;
		}
		if(document.getElementsByName("c_cust_cnt_cd")[0].value != null)
		{
			cneecd = document.getElementsByName("c_cust_cnt_cd")[0].value;
		}
		if(document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0].value != null)
		{
			cnptcd = document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0].value;
		}
		if(document.getElementsByName("f_cust_cnt_cd")[0].value != null)
		{
			fwdrcd = document.getElementsByName("f_cust_cnt_cd")[0].value;
		}
		if(document.getElementsByName("bkg_del_cd")[0].value != null)
		{
			delcd = document.getElementsByName("bkg_del_cd")[0].value.substring(0,2);
		}
		
		for(var i = 0; i < dueArr.length; i++)
		{
			if(shprcd == dueArr[i])
			{
				document.getElementsByName("s_cust_cnt_cd")[0].style = "width:25px;ime-mode:disabled;text-transform:uppercase;outline:solid red 3px !important;";
				document.getElementsByName("s_cust_cnt_cd")[0].title = "Check Shipper, Consignee and Notify Party whose address locate in the due diligence countries and check on Sanction List (OFAC, EU and UK) and update screenshot on the Appsheet";
			}
			else
			{
				document.getElementsByName("s_cust_cnt_cd")[0].style = "width:25px;ime-mode:disabled;text-transform:uppercase;";
				document.getElementsByName("s_cust_cnt_cd")[0].title = "";
			}
			if(cneecd == dueArr[i])
			{
				document.getElementsByName("c_cust_cnt_cd")[0].style = "width:25px;ime-mode:disabled;text-transform:uppercase;outline:solid red 3px !important;";
				document.getElementsByName("c_cust_cnt_cd")[0].title = "Check Shipper, Consignee and Notify Party whose address locate in the due diligence countries and check on Sanction List (OFAC, EU and UK) and update screenshot on the Appsheet";
			}
			else
			{
				document.getElementsByName("c_cust_cnt_cd")[0].style = "width:25px;ime-mode:disabled;text-transform:uppercase;";
				document.getElementsByName("c_cust_cnt_cd")[0].title = "";
			}
			if(cnptcd == dueArr[i])
			{
				document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0].style = "width:25px;ime-mode:disabled;text-transform:uppercase;outline:solid red 3px !important;";
				document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0].title = "Check Shipper, Consignee and Notify Party whose address locate in the due diligence countries and check on Sanction List (OFAC, EU and UK) and update screenshot on the Appsheet";
			}
			else
			{
				document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0].style = "width:25px;ime-mode:disabled;text-transform:uppercase;";
				document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0].title = "";
			}
			if(fwdrcd == dueArr[i])
			{
				document.getElementsByName("f_cust_cnt_cd")[0].style = "width:25px;ime-mode:disabled;text-transform:uppercase;outline:solid red 3px !important;";
				document.getElementsByName("f_cust_cnt_cd")[0].title = "Check Shipper, Consignee and Notify Party whose address locate in the due diligence countries and check on Sanction List (OFAC, EU and UK) and update screenshot on the Appsheet";
			}
			else
			{
				document.getElementsByName("f_cust_cnt_cd")[0].style = "width:25px;ime-mode:disabled;text-transform:uppercase;";
				document.getElementsByName("f_cust_cnt_cd")[0].title = "";
			}
			if(delcd == dueArr[i])
			{
				document.getElementsByName("bkg_del_cd")[0].style = "width:52px;ime-mode:disabled;text-transform:uppercase;outline:solid red 3px !important;";
				document.getElementsByName("bkg_del_cd")[0].title = "Check Shipper, Consignee and Notify Party whose address locate in the due diligence countries and check on Sanction List (OFAC, EU and UK) and update screenshot on the Appsheet";
			}
			else
			{
				document.getElementsByName("bkg_del_cd")[0].style = "width:52px;ime-mode:disabled;text-transform:uppercase;";
				document.getElementsByName("bkg_del_cd")[0].title = "";
			}
		}
		
	}catch{}
}

function BKGCreation_warnpopup()
{
	try
	{
		let shprcd = "", cneecd = "", cnptcd = "", fwdrcd = "", delcd = "";
		let dueArr = [ "AE", "AF", "BA", "BY", "CD", "CF", "EE", "EG", "FI", "GE", "HT", "IQ", "JO", "LB", "LT", "LV", "LY", "ML", "MM", "NI", "RS", "RU", "SD", "SO", "SS", "TN", "TR", "UA", "VE", "YE", "ZW" ];
		
		//Due Diligence tooltip
		if(document.getElementsByName("s_cust_cnt_cd")[0].value != null)
		{
			shprcd = document.getElementsByName("s_cust_cnt_cd")[0].value;
		}
		if(document.getElementsByName("c_cust_cnt_cd")[0].value != null)
		{
			cneecd = document.getElementsByName("c_cust_cnt_cd")[0].value;
		}
		if(document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0].value != null)
		{
			cnptcd = document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0].value;
		}
		if(document.getElementsByName("f_cust_cnt_cd")[0].value != null)
		{
			fwdrcd = document.getElementsByName("f_cust_cnt_cd")[0].value;
		}
		if(document.getElementsByName("bkg_del_cd")[0].value != null)
		{
			delcd = document.getElementsByName("bkg_del_cd")[0].value.substring(0,2);
		}
		
		for(var i = 0; i < dueArr.length; i++)
		{
			if(shprcd == dueArr[i] || cneecd == dueArr[i] || cnptcd == dueArr[i] || fwdrcd == dueArr[i] || delcd == dueArr[i])
			{
				window.prompt("Due Diligence Country. Please update screenshot on the Appsheet (Yes/No)");
			}
		}
		
	}catch(err){ }
}

function BKGCreation_hardpopup()
{
	try
	{
		let reefer_check = document.getElementsByName("rc_flg")[0].checked;
		let por = document.getElementsByName("bkg_por_cd")[0].value;
		let mtyCY = document.getElementsByName("mty_pkup_yd_cd")[0].value;
		let shpr = document.getElementsByName("s_cust_cnt_cd")[0].value + document.getElementsByName("s_cust_seq")[0].value;
		
		if(reefer_check)
		{
			if(por == "THBKK" || por == "THLKR")
			{
				document.getElementsByName("mty_pkup_yd_cd")[0].style = "width:74px;ime-mode:disabled;text-transform:uppercase;outline:solid red 3px !important;";
				
				if(shpr == "TH506814")
				{
					if(mtyCY == "THBKK38" || mtyCY == "THBKK39" || mtyCY == "THBKK02" || mtyCY == "THBKK05" || mtyCY == "THBKK10")
					{
						alert("Please check the P/Up CY at BKK Area for Depot that has No Reefer Stock");
						document.getElementsByName("btn_t1Save").setAttribute("disabled", true);
					}
					else
					{
						document.getElementsByName("btn_t1Save").removeAttribute("disabled");
					}
				}
				else
				{
					if(mtyCY == "THBKK38" || mtyCY == "THBKK39" || mtyCY == "THBKK40" || mtyCY == "THBKK02" || mtyCY == "THBKK05" || mtyCY == "THBKK10")
					{
						alert("Arrange POR as per Service Lane for BKK area for other Customers not in list. Apply THBKK02 (BBT) for 4 Exceptional Customers");
						document.getElementsByName("btn_t1Save").setAttribute("disabled", true);
					}
					else
					{
						document.getElementsByName("btn_t1Save").removeAttribute("disabled");
					}
				}
			}
			else if(por != "THBKK" && por != "THLKR")
			{
				if(mtyCY == "THLCH31" || mtyCY == "THLCH35" || mtyCY == "THLCH32" || mtyCY == "THLCH36" || mtyCY == "THLCH43")
				{
					alert("Please check the P/Up CY at LCH Area for Depot that has No Reefer Stock");
					document.getElementsByName("btn_t1Save").setAttribute("disabled", true);
				}
				else
				{
					document.getElementsByName("btn_t1Save").removeAttribute("disabled");
				}
			}
			else
			{
				document.getElementsByName("mty_pkup_yd_cd")[0].style = "width:74px;ime-mode:disabled;text-transform:uppercase;";
			}
		}
		
	}catch{}
	
	try
	{
		let pod = document.getElementsByName("bkg_pod_cd")[0].value;
		let del = document.getElementsByName("bkg_del_cd")[0].value;
		let scac = document.getElementsByName("scac_cd")[0].value;
		let sc = document.getElementsByName("sc_no")[0].value;
		let rfa = document.getElementsByName("rfa_no")[0].value;
		let usfiler = document.getElementsByName("usa_cstms_file_cd_text")[0].value;
		let cafiler = document.getElementsByName("cnd_cstms_file_cd_text")[0].value;
		let thirdChar = "";
		
		if(pod.startsWith("US") || del.startsWith("US") || pod.startsWith("CA") || del.startsWith("CA"))
		{
			if(scac == "")
			{
				alert("SCAC/ACI is missing");
			}
			
			if(sc != null || sc != "")
			{
				thirdChar = sc.charAt(sc.length-3);
			}
			else if(rfa != null || rfa != "")
			{
				thirdChar = rfa.charAt(rfa.length-3);
			}
			
			if(thirdChar == "B")
			{
				if(usfiler != "3" || cafiler != "3")
				{
					alert("Service Contract BCO. Please update filer US:3, CA:3");
				}
			}
			else if(thirdChar == "N")
			{
				if(usfiler == "" || usfiler == null || cafiler == "" || cafiler == null)
				{
					alert("Service Contract NVO. Please updated filer depending on the VVD if passing through US/CA");
				}
			}
			
			document.getElementsByName("scac_cd")[0].style = "width:107px;ime-mode:disabled;text-transform:uppercase;text-align:left;outline:solid red 3px !important;border-radius:5px;";
			document.getElementsByName("sc_no")[0].style = "width:85px;ime-mode:disabled;text-align:left;outline:solid red 3px !important;border-radius:5px;";
			document.getElementsByName("rfa_no")[0].style = "width:85px;ime-mode:disabled;text-align:left;outline:solid red 3px !important;border-radius:5px;";
			document.getElementsByName("usa_cstms_file_cd_text")[0].style = "width: 15px; color: rgb(0, 0, 0);outline:solid red 3px !important;border-radius:5px;";
			document.getElementsByName("cnd_cstms_file_cd_text")[0].style = "width: 15px; color: rgb(0, 0, 0);outline:solid red 3px !important;border-radius:5px;";
		}
		else
		{
			document.getElementsByName("scac_cd")[0].style = "width:107px;ime-mode:disabled;text-transform:uppercase;text-align:left;";
			document.getElementsByName("sc_no")[0].style = "width:85px;ime-mode:disabled;text-align:left;";
			document.getElementsByName("rfa_no")[0].style = "width:85px;ime-mode:disabled;text-align:left;";
			document.getElementsByName("usa_cstms_file_cd_text")[0].style = "width: 15px; color: rgb(0, 0, 0);";
			document.getElementsByName("cnd_cstms_file_cd_text")[0].style = "width: 15px; color: rgb(0, 0, 0);";
		}
	}catch{}
}

function standByWindow()
{
	try
	{
		let tabHeader = document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C1").textContent;

		if(tabHeader.contains("Final Guidance"))
		{
			if(tabHeader.contains("GD1") || tabHeader.contains("GD4") || tabHeader.contains("EEE") || tabHeader.contains("GD6") || tabHeader.contains("XXX"))
			{
				document.getElementById("sheet1").style = "border: 3px solid red !important; border-radius:5px;";
				document.getElementById("sheet1").title = "Needs to check the Standby Guideline spreadsheet. \r\nAppropriate action will depend on the Topic and requires determining whether to:\r\n1. Release a BRN to the Customer.\r\n2. Escalate the booking to Onshore (TIER1).\r\n3. Escalate the booking to the Marketing Team (TIER2).";
			}
			else
			{
				document.getElementById("sheet1").style = "";
				document.getElementById("sheet1").title = "";
			}
		}
	}catch{}
}