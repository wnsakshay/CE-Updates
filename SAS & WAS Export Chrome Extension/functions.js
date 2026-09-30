function bkgCreationWarnPopups()
{
	//SI Contact Email ID
	try
	{
		var email = document.getElementsByName("si_cntc_pson_eml")[0].value;
		
		if(email == "")
		{
			alert("Please update the SI Contact Email ID");
		}
	}catch(err){ }
}

function bkgCreationHardPopups()
{
	//US/CA/EU Filer
	try
	{	
		var del = document.getElementsByName("bkg_del_cd")[0].value.substring(0,2);
		
		if(del == "US" || del == "CA")
		{
			if(document.getElementById("usa_cstms_file_cd_text").value == "" || document.getElementById("cnd_cstms_file_cd_text").value == "")
			{
				alert("Please update the US/CA Filer");
			}
		}
		
		if(del == "AD" ||	del == "AL" ||	del == "AM" ||	del == "AT" ||	del == "AX" ||	del == "AZ" ||	del == "BA" ||	del == "BE" ||	del == "BG" ||	del == "BY" ||	del == "CH" ||	del == "CY" ||	del == "CZ" ||	del == "DE" ||	del == "DK" ||	del == "EE" ||	del == "ES" ||	del == "EU" ||	del == "FI" ||	del == "FO" ||	del == "FR" ||	del == "GE" ||	del == "GI" ||	del == "GL" ||	del == "GR" ||	del == "HR" ||	del == "HU" ||	del == "IE" ||	del == "IL" ||	del == "IM" ||	del == "IS" ||	del == "IT" ||	del == "KG" ||	del == "KZ" ||	del == "LB" ||	del == "LI" ||	del == "LT" ||	del == "LU" ||	del == "LV" ||	del == "MC" ||	del == "MD" ||	del == "ME" ||	del == "MK" ||	del == "MT" ||	del == "NL" ||	del == "NO" ||	del == "PL" ||	del == "PT" ||	del == "RO" ||	del == "RS" ||	del == "RU" ||	del == "SE" ||	del == "SI" ||	del == "SJ" ||	del == "SK" ||	del == "SM" ||	del == "TR" ||	del == "UA" ||	del == "VA")
		{
			if(document.getElementById("eu_cstms_file_cd_text").value == "")
			{
				alert("Please update the EU Filer");
			}
		}
	}catch(err){ }
}

function cntrTabWarnPopups()
{
	try
	{
		//Container Confirmation
		var attr = document.getElementById("btn_t6cntrconfirm").disabled;
		
		if(attr == false)
		{
			alert("Container Confirmation is pending");
		}
	}catch(err){ }
}

function cntrTabHardPopups()
{
	try
	{
		//Container List Measure not 0
		var cntrCnt = document.querySelectorAll("#t6sheet2 > tbody > tr:nth-child(5) > td > div > table > tbody > tr > td.GMWrap0.GMAlignRight.GMCellSpace > div")[0].innerText;
		cntrCnt = parseInt(cntrCnt.substring(cntrCnt.indexOf("/") + 2).replaceAll("]",""));
		
		var measure = "";
		var seal1 = "";
		
		if(cntrCnt > 0)
		{
			for(var i = 2; i <= (cntrCnt + 1); i++)
			{
				measure = document.evaluate('//*[@id="t6sheet2"]/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr[' + i + ']/td[16]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
				
				if(measure == "0.000" || measure == ".000" || measure == "" || measure == "&nbsp;" || measure == "0")
				{
					alert("Measure field should not be 0(Zero). Please update standard 20 for 20' and 40 for 40'");
					break;
				}
			}
			
			for(var i = 2; i <= (cntrCnt + 1); i++)
			{
				seal1 = document.evaluate('//*[@id="t6sheet2"]/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr[' + i + ']/td[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
				
				if(seal1 == "" || seal1 == " " || seal1 == "&nbsp;" || seal1 == null)
				{
					alert("Seal No field should not be blank.");
					break;
				}
			}
		}
	}catch(err){ }
}

function customerTabHardPopups()
{
	try
	{
		//Shipper City
		if(document.getElementById("sh_cust_cty_nm").value.trim() == "")
		{
			alert("Shipper City is mandatory");
		}
		
		//Shipper Country
		if(document.getElementById("sh_cstms_decl_cnt_cd").value.trim() == "")
		{
			alert("Shipper Country is mandatory");
		}
		
		//Shipper ZipCode
		if(document.getElementById("sh_cust_zip_id").value.trim() == "")
		{
			alert("Shipper Zip Code is mandatory");
		}
		
		//Shipper Street
		if(document.getElementById("sh_eur_cstms_st_nm").value.trim() == "")
		{
			alert("Shipper Street/PO Box is mandatory");
		}
		
		//Consignee City
		if(document.getElementById("cn_cust_cty_nm").value.trim() == "")
		{
			alert("Consignee City is mandatory");
		}
		
		//Consignee Country
		if(document.getElementById("cn_cstms_decl_cnt_cd").value.trim() == "")
		{
			alert("Consignee Country is mandatory");
		}
		
		//Consignee ZipCode
		if(document.getElementById("cn_cust_zip_id").value.trim() == "")
		{
			alert("Consignee Zip Code is mandatory");
		}
		
		//Consignee Street
		if(document.getElementById("cn_eur_cstms_st_nm").value.trim() == "")
		{
			alert("Consignee Street/PO Box is mandatory");
		}
		
		//Notify City
		if(document.getElementById("nf_cust_cty_nm").value.trim() == "")
		{
			alert("Notify City is mandatory");
		}
		
		//Notify Country
		if(document.getElementById("nf_cstms_decl_cnt_cd").value.trim() == "")
		{
			alert("Notify Country is mandatory");
		}
		
		//Notify ZipCode
		if(document.getElementById("nf_cust_zip_id").value.trim() == "")
		{
			alert("Notify Zip Code is mandatory");
		}
		
		//Notify Street
		if(document.getElementById("nf_eur_cstms_st_nm").value.trim() == "")
		{
			alert("Notify Street/PO Box is mandatory");
		}
	}catch(err){ }
}

function mndTabWarnPopups()
{
	try
	{
		var del = document.getElementById("del_cd").value.substring(0, 2);
		var pkgType = document.getElementsByName("pck_tp_cd")[0].value;
		
		//Measure Field generic popup
		alert("Please cross check Total Measure field");
		
		//Marks & Number
		if(document.getElementById("mk_desc").value.trim() == "")
		{
			alert("Marks & Numbers should not be blank");
		}
		
		if(del == "BR")
		{
			//Brazil //Export/Import Information
			alert("For Brazil destination : Please update Consignee and Notify Party CNPJ in Export & Import Info");
		}
		else if(del == "IN")
		{
			//India //Export/Import Information
			alert("For Destination India : Please update IEC, GST and Email in Export & Import Info");
		}
		else if(del == "MX")
		{
			//Mexico //Export/Import Information
			alert("For Destination Mexico : Please update Shipper, consignee and Notify Party Tax ID in Export & Import Info");
		}
		else if(del == "EG")
		{
			//Egypt //Export/Import Information
			alert("For Destination Egypt : Please update ACID no. Manual Validation in Export & Import Info");
		}
		else if(del == "PH")
		{
			//Philippines
			alert("For Destination Philippines : Please update HS code within 5 lines");
		}
		else if(del == "US" || del == "CA")
		{
			if(pkgType == "BE" || pkgType == "PX" || pkgType == "SI")
			{
				//For US/CA shipments Package Type should not Bundle/Pallet/Skid
				alert("For Destination US/CA : Please update correct Package Type");
			}
		}
	}catch(err){ }
}

function mndTabHardPopups()
{
	try
	{
		var flag = 0;
		var pol = document.getElementById("pol_cd").value;
		var totPkgNo = document.getElementById("pck_qty").value;
		totPkgNo = totPkgNo.replaceAll(",","");
		var noOfPkg = document.getElementsByName("pck_cmdt_desc")[0].value;
		var pkgNo = noOfPkg.substring(0,noOfPkg.indexOf(" "));
		var totPkgCode = document.getElementById("pck_tp_cd").value;
		
		if(pol == "PKKHI" || pol == "PKBQM" || pol == "DXBBB" || pol == "YGNBB" || pol == "CNTXG")
		{
			//Total Package Number mismatch with No of Package Number
			if(totPkgNo != pkgNo)
			{
				alert("Total Package is mismatch with the No of Pkg");
				flag = 1;
			}
			
			//Total Package Code mismatch with the No of Pkg Code
			if(totPkgCode == "AE")
			{
				if(!(noOfPkg.includes("AEROSOL")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "AF")
			{
				if(!(noOfPkg.includes("PAPER PALLET")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "BA")
			{
				if(!(noOfPkg.includes("BARREL")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "BE")
			{
				if(!(noOfPkg.includes("BUNDLE")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "BG")
			{
				if(!(noOfPkg.includes("BAG")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "BI")
			{
				if(!(noOfPkg.includes("BIN")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "BL")
			{
				if(!(noOfPkg.includes("BALE")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "BX")
			{
				if(!(noOfPkg.includes("BOX")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "CD")
			{
				if(!(noOfPkg.includes("CAN")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "CN")
			{
				if(!(noOfPkg.includes("CONTAINER")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "CR")
			{
				if(!(noOfPkg.includes("CRATE")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "CS")
			{
				if(!(noOfPkg.includes("CASE")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "CT")
			{
				if(!(noOfPkg.includes("CARTON")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "CY")
			{
				if(!(noOfPkg.includes("CYLINDER")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "DB")
			{
				if(!(noOfPkg.includes("WOODEN CRATE")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "DR")
			{
				if(!(noOfPkg.includes("DRUM")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "EC")
			{
				if(!(noOfPkg.includes("PLASTIC BAG")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "EE")
			{
				if(!(noOfPkg.includes("WOODEN CASE")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "PA")
			{
				if(!(noOfPkg.includes("PACKET")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "PB")
			{
				if(!(noOfPkg.includes("BOX PALLET")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "PC")
			{
				if(!(noOfPkg.includes("PARCEL")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "PD")
			{
				if(!(noOfPkg.includes("WOODEN PALLET")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "PE")
			{
				if(!(noOfPkg.includes("PALLET") || noOfPkg.includes("MODULAR") || noOfPkg.includes("COLLAR")) || noOfPkg.includes("PALLET, MODULAR, COLLAR"))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "PK")
			{
				if(!(noOfPkg.includes("PACKAGE")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "PS")
			{
				if(!(noOfPkg.includes("PIECE")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "PX")
			{
				if(!(noOfPkg.includes("PALLET")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "SA")
			{
				if(!(noOfPkg.includes("SACK")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "SI")
			{
				if(!(noOfPkg.includes("SKID")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "SS")
			{
				if(!(noOfPkg.includes("STEEL CASE")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "ST")
			{
				if(!(noOfPkg.includes("SHEET")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "TK")
			{
				if(!(noOfPkg.includes("TANK")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "UN")
			{
				if(!(noOfPkg.includes("UNIT")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
			else if(totPkgCode == "WA")
			{
				if(!(noOfPkg.includes("IBC")))
				{
					alert("Package Type Discrepancy!");
					flag = 1;
				}
			}
		}
		if(flag == 1)
		{
			document.getElementById("btn_t8Save").setAttribute("disabled","true");
		}
		else
		{
			document.getElementById("btn_t8Save").removeAttribute("disabled");
		}
		
		//Total Measure not to be 0
		var measure = document.getElementsByName("meas_qty")[0].value;
		
		if(measure == "0.000" || measure == ".000" || measure == "" || measure == "&nbsp;" || measure == "0")
		{
			alert("Measure field should not be 0(Zero). Please update standard 20 for 20' and 40 for 40'");
		}
	}catch(err){ }
}

function cmTabWarnPopups()
{
	try
	{
		var del = document.getElementById("del_cd").value.substring(0, 2);
		//US/CA
		if(del == "US" || del == "CA")
		{
			alert("Please update HTS code for US/CA Shipment!");
		}

		//Brazil
		if(del == "BR")
		{
			alert("Please update NCM code for Brazil Shipment!");
		}
		
		//Other Shipments
		if(del != "US" && del != "CA" && del != "BR")
		{
			alert("Please update HS code for Other Shipments!");
		}
		
		//DG Shipment / Marks
		alert("1. If DG shipment, DG has to link\r\n2. Marks field should not be blank");
		
		//All Confirm
		var attr = document.getElementById("btn_t9AllConfirm").disabled;
		
		if(attr == false)
		{
			alert("All confirm is pending");
		}
	}catch(err){ }
}

function cmTabHardPopups()
{
	try
	{
		var del = document.getElementById("del_cd").value.substring(0, 2);
		//Container List Measure not 0
		var cntrCnt = document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignRight.GMFloat.GMCell.IBSheetFont1.HideCol1C11").length;
		
		var measure = "";
		var htscode = "", hscode = "", ncmcode = "";
		
		if(cntrCnt > 0)
		{
			for(var i = 2; i <= (cntrCnt + 1); i++)
			{
				measure = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[13]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
				htscode = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[21]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
				hscode = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[24]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
				ncmcode = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[27]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
				
				if(measure == "0.000" || measure == ".000" || measure == "" || measure == "&nbsp;" || measure == "0")
				{
					alert("Measure field should not be 0(Zero). Please update standard 20 for 20' and 40 for 40'");
					break;
				}
				
				if(del == "AD" ||	del == "AL" ||	del == "AM" ||	del == "AT" ||	del == "AX" ||	del == "AZ" ||	del == "BA" ||	del == "BE" ||	del == "BG" ||	del == "BY" ||	del == "CH" ||	del == "CY" ||	del == "CZ" ||	del == "DE" ||	del == "DK" ||	del == "EE" ||	del == "ES" ||	del == "EU" ||	del == "FI" ||	del == "FO" ||	del == "FR" ||	del == "GE" ||	del == "GI" ||	del == "GL" ||	del == "GR" ||	del == "HR" ||	del == "HU" ||	del == "IE" ||	del == "IL" ||	del == "IM" ||	del == "IS" ||	del == "IT" ||	del == "KG" ||	del == "KZ" ||	del == "LB" ||	del == "LI" ||	del == "LT" ||	del == "LU" ||	del == "LV" ||	del == "MC" ||	del == "MD" ||	del == "ME" ||	del == "MK" ||	del == "MT" ||	del == "NL" ||	del == "NO" ||	del == "PL" ||	del == "PT" ||	del == "RO" ||	del == "RS" ||	del == "RU" ||	del == "SE" ||	del == "SI" ||	del == "SJ" ||	del == "SK" ||	del == "SM" ||	del == "TR" ||	del == "UA" ||	del == "VA")
				{
					if(hscode.startsWith("99") || hscode.startsWith("98"))
					{
						alert("Europe Shipment: HS Code 98/99 not allowed");
						break;
					}
				}
				
				if(del == "US" || del == "CA")
				{
					if(htscode == "" || htscode == " " || htscode == null)
					{
						alert("Please update HTS code for US/CA Shipment!");
						break;
					}
				}
				else if(del == "BR")
				{
					if(ncmcode == "" || ncmcode == " " || ncmcode == null)
					{
						alert("Please update NCM code for Brazil Shipment!");
						break;
					}
				}
				else
				{
					if(hscode == "" || hscode == " " || hscode == null)
					{
						alert("Please update HS code for Other Shipments!");
						break;
					}
				}
			}
		}
	}catch(err){ }
}

function chargeTabWarnPopups()
{
	try
	{
		var frtTerm = document.getElementById("frt_term_cd_text").value;
		var pod = document.getElementById("frm_t10sheet1_pod_cd").value.substring(0, 2);
		var del = document.getElementById("frm_t10sheet1_del_cd").value.substring(0, 2);
		var pol = document.getElementById("frm_t10sheet1_pol_cd").value;
		
		//self Audit
		alert("Please perform Self Audit");
		
		//POL PKKHI/PKBQM
		if(pol == "PKKHI" || pol == "PKBQM")
		{
			alert("Please check XDO Charge");
		}
		
		//Freight Term Collect not allowed for AR/BO/CY/LK/ML/NG/NP/TZ/VE/ZW
		if(frtTerm == "C" && (pod == "AR" || pod == "BO" || pod == "CY" || pod == "LK" || pod == "ML" || pod == "NG" || pod == "NP" || pod == "TZ" || pod == "VE" || pod == "ZW" || del == "AR" || del == "BO" || del == "CY" || del == "LK" || del == "ML" || del == "NG" || del == "NP" || del == "TZ" || del == "VE" || del == "ZW"))
		{
			alert("Freight Term Collect is not allowed, Please double check!");
		}

	}catch(err){ }
}

function chargeTabHardPopups()
{
	try
	{
		var frtTerm = document.getElementById("frt_term_cd_text").value;
		var pod = document.getElementById("frm_t10sheet1_pod_cd").value.substring(0, 2);
		var del = document.getElementById("frm_t10sheet1_del_cd").value.substring(0, 2);
		var pol = document.getElementById("frm_t10sheet1_pol_cd").value;
		var prepaidCode = document.getElementsByName("frm_p_t10sheet3_cnt_cd")[0].value + document.getElementsByName("frm_p_t10sheet3_cust_seq")[0].value;
		var fullpod = document.getElementById("frm_t10sheet1_pod_cd").value;
		var collectOfc = document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].value;
		
		//Freight Term & OFT Term should be same
		var sheetObject = document.getElementById("t10sheet2");
		var rowCount = sheetObject.querySelectorAll("tr").length
		if(document.querySelector("#t10sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(2) > td.GMWrap0.GMAlignCenter.GMPopupEdit.GMCell.IBSheetFont1.GMNoRight.HideCol1C4"))
		{
			for(var i=2;i<=(rowCount-11);i++)
			{
				var chargeCode = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[5]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
				var chargeTerm = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[21]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;

				if(chargeCode == "OFT" && frtTerm != chargeTerm)
				{
					alert("Freight term and OFT Term should be same!");
				}
			}
		}
		
		//POL PK Check Payer Code
		if(pol.startsWith("PK"))
		{
			if(prepaidCode == "PK107313")
			{
				alert("Update the prepaid payer code as PK105482");
			}
		}
		
		//Method of Payment for Europe Shipment
		if(del == "AD" ||	del == "AL" ||	del == "AM" ||	del == "AT" ||	del == "AX" ||	del == "AZ" ||	del == "BA" ||	del == "BE" ||	del == "BG" ||	del == "BY" ||	del == "CH" ||	del == "CY" ||	del == "CZ" ||	del == "DE" ||	del == "DK" ||	del == "EE" ||	del == "ES" ||	del == "EU" ||	del == "FI" ||	del == "FO" ||	del == "FR" ||	del == "GE" ||	del == "GI" ||	del == "GL" ||	del == "GR" ||	del == "HR" ||	del == "HU" ||	del == "IE" ||	del == "IL" ||	del == "IM" ||	del == "IS" ||	del == "IT" ||	del == "KG" ||	del == "KZ" ||	del == "LB" ||	del == "LI" ||	del == "LT" ||	del == "LU" ||	del == "LV" ||	del == "MC" ||	del == "MD" ||	del == "ME" ||	del == "MK" ||	del == "MT" ||	del == "NL" ||	del == "NO" ||	del == "PL" ||	del == "PT" ||	del == "RO" ||	del == "RS" ||	del == "RU" ||	del == "SE" ||	del == "SI" ||	del == "SJ" ||	del == "SK" ||	del == "SM" ||	del == "TR" ||	del == "UA" ||	del == "VA")
		{
			if(document.getElementById("cust_pay_mzd_cd_text").value == "")
			{
				alert("Europe Shipment: Please update correct Method of Payment");
			}
		}
	}catch(err){ }
	
	//If POD is IDJKT/IDSUB/IDSRG/IDBLW/IDPNJ/IDPLM/IDBTM/IDPNK/IDMAK/IDBPN then check the Collect Office
	try
	{
		if(fullpod == "IDJKT" && collectOfc != "JKTBB")
		{
			alert("Please update the correct collect payment office");
		}
		else if(fullpod == "IDSUB" && collectOfc != "SUBBB")
		{
			alert("Please update the correct collect payment office");
		}
		else if(fullpod == "IDSRG" && collectOfc != "SRGBB")
		{
			alert("Please update the correct collect payment office");
		}
		else if(fullpod == "IDBLW" && collectOfc != "MESBB")
		{
			alert("Please update the correct collect payment office");
		}
		else if(fullpod == "IDPNJ" && collectOfc != "BNDBB")
		{
			alert("Please update the correct collect payment office");
		}
		else if(fullpod == "IDPLM" && collectOfc != "PLMBB")
		{
			alert("Please update the correct collect payment office");
		}
		else if(fullpod == "IDBTM" && collectOfc != "BTMBB")
		{
			alert("Please update the correct collect payment office");
		}
		else if(fullpod == "IDPNK" && collectOfc != "PNKBA")
		{
			alert("Please update the correct collect payment office");
		}
		else if(fullpod == "IDMAK" && collectOfc != "MKSBA")
		{
			alert("Please update the correct collect payment office");
		}
		else if(fullpod == "IDBPN" && collectOfc != "BPNBA")
		{
			alert("Please update the correct collect payment office");
		}
	}catch(err){ }
}

function blIssueTabWarnPopups()
{
	var obd = document.getElementsByName("frm_t11sheet1_on_board_date")[0].value;
	var issuetext = document.getElementsByName("bl_issuebl_type_text")[0].value;
	var blia = document.getElementsByName("frm_t11sheet1_bl_issue_at")[0].value;
	var blid = document.getElementsByName("frm_t11sheet1_bl_issue_date")[0].value;
	var bdct = document.getElementsByName("bl_ready_type_text")[0].value;
	var blit = document.getElementsByName("frm_t11sheet1_bl_iss_tp_cd")[0].value;
	var blin = document.getElementsByName("frm_t11sheet1_bl_issue_no")[0].value;

	try
	{
		//POR,POL,POD,DEL / Remarks Field / ICP Code / BDC
		alert("1. Please check POR, POL, POD and DEL text!!\r\n2. Remarks field has to be updated\r\n3. Please cross check ICP Codes\r\n4. Check B/L Data Complete");
		
		//On Board & B/L Issue Place should not be blank
		if(obd == "")
		{
			alert("On-Board date should not be blank");
		}
		if(issuetext == "")
		{
			alert("B/L Issue Type code should not be blank");
		}
		if(blia == "")
		{
			alert("B/L Issue At should not be blank");
		}
		if(blid == "")
		{
			alert("B/L Issue Date should not be blank");
		}
		
		//B/L Issue should be same
		if(((bdct == "B" || blit == "B") && blin != "3") || ((bdct == "W" || blit == "W") && blin != "1"))
		{
			alert("Please check Print count for OBL/SWB");
		}
		
	}catch(err){ }
}

function blIssueTabHardPopups()
{
	try
	{
		var pod = document.getElementsByName("frm_t11sheet1_pod_code")[0].value.substring(0, 2);
		var del = document.getElementsByName("frm_t11sheet1_del_code")[0].value.substring(0, 2);
		var bdct = document.getElementsByName("bl_ready_type_text")[0].value;
		var blit = document.getElementsByName("frm_t11sheet1_bl_iss_tp_cd")[0].value;
		
		if(pod == "BO" || del == "BO" || pod == "MZ" || del == "MZ" || pod == "ZW" || del == "ZW" || pod == "AR" || del == "AR" || pod == "BR" || del == "BR" || pod == "CO" || del == "CO" || pod == "CR" || del == "CR" || pod == "DO" || del == "DO" || pod == "EC" || del == "EC" || pod == "SV" || del == "SV" || pod == "GT" || del == "GT" || pod == "HN" || del == "HN" || pod == "NI" || del == "NI" || pod == "NG" || del == "NG" || pod == "VE" || del == "VE" )
		{
			if(bdct == "W" || blit == "W")
			{
				alert("B/L type Way BL is not allowed for " + pod + " / " + del);
			}
		}
	}catch(err){ }
}



