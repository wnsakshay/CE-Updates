function bkgCreationHighlight()
{
	//SI Contact Email ID
	try
	{
		if(document.getElementsByName("si_cntc_pson_eml")[0].value == "")
		{
			document.getElementsByName("si_cntc_pson_eml")[0].style = "width:190px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementsByName("si_cntc_pson_eml")[0].style = "width:190px;";
		}
	}catch(err){	}
	//US/CA/EU Filer
	try
	{
		var del = document.getElementById("bkg_del_cd").value.substring(0,2);
		
		if(del == "US" || del == "CA")
		{
			if(document.getElementById("usa_cstms_file_cd_text").value == "")
			{
				document.getElementById("usa_cstms_file_cd_text").style = "width: 15px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			}
			else
			{
				document.getElementsByName("usa_cstms_file_cd_text")[0].style = "width: 15px;";
			}
			
			if(document.getElementById("cnd_cstms_file_cd_text").value == "")
			{
				document.getElementById("cnd_cstms_file_cd_text").style = "width: 15px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			}
			else
			{
				document.getElementsByName("cnd_cstms_file_cd_text")[0].style = "width: 15px;";
			}
			
			if(del == "US")
			{
				if(document.getElementById("usa_cstms_file_cd_text").value == "2" && document.getElementById("scac_cd").value == "")
				{
					document.getElementById("scac_cd").style = "width:107px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
				}
				else
				{
					document.getElementsByName("scac_cd")[0].style = "width:107px;";
				}
			}
		}
		else
		{
			document.getElementsByName("usa_cstms_file_cd_text")[0].style = "width: 15px;";
			document.getElementsByName("cnd_cstms_file_cd_text")[0].style = "width: 15px;";
			document.getElementsByName("scac_cd")[0].style = "width:107px;";
		}
		
		if(del == "AD" ||	del == "AL" ||	del == "AM" ||	del == "AT" ||	del == "AX" ||	del == "AZ" ||	del == "BA" ||	del == "BE" ||	del == "BG" ||	del == "BY" ||	del == "CH" ||	del == "CY" ||	del == "CZ" ||	del == "DE" ||	del == "DK" ||	del == "EE" ||	del == "ES" ||	del == "EU" ||	del == "FI" ||	del == "FO" ||	del == "FR" ||	del == "GE" ||	del == "GI" ||	del == "GL" ||	del == "GR" ||	del == "HR" ||	del == "HU" ||	del == "IE" ||	del == "IL" ||	del == "IM" ||	del == "IS" ||	del == "IT" ||	del == "KG" ||	del == "KZ" ||	del == "LB" ||	del == "LI" ||	del == "LT" ||	del == "LU" ||	del == "LV" ||	del == "MC" ||	del == "MD" ||	del == "ME" ||	del == "MK" ||	del == "MT" ||	del == "NL" ||	del == "NO" ||	del == "PL" ||	del == "PT" ||	del == "RO" ||	del == "RS" ||	del == "RU" ||	del == "SE" ||	del == "SI" ||	del == "SJ" ||	del == "SK" ||	del == "SM" ||	del == "TR" ||	del == "UA" ||	del == "VA")
		{
			if(document.getElementById("eu_cstms_file_cd_text").value == "")
			{
				document.getElementById("eu_cstms_file_cd_text").style = "width: 15px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			}
			else
			{
				document.getElementsByName("eu_cstms_file_cd_text")[0].style = "width: 15px;";
			}
		}
		else
		{
			document.getElementsByName("eu_cstms_file_cd_text")[0].style = "width: 15px;";
		}
	}catch(err){ }
}

function cntrTabHighlight()
{
	try
	{
		//Container Confirmation
		var attr = document.getElementById("btn_t6cntrconfirm").disabled;
		
		if(attr == false)
		{
			document.getElementById("btn_t6cntrconfirm").style = "background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("btn_t6cntrconfirm").style = "";
		}
		
		//Seal No 1
		document.querySelectorAll("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C9")[0].style = "background-color: rgb(231 8 88 / 98%) !important;";
		document.querySelectorAll("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C9")[0].title = "Container Seal No should not be Blank";
		//Seal No 2
		document.querySelectorAll("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C12")[0].style = "background-color: rgb(231 8 88 / 98%) !important;";
		document.querySelectorAll("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C12")[0].title = "Container Seal No should not be Blank";
		//Measure
		document.querySelectorAll("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C21")[0].style = "background-color: rgb(231 8 88 / 98%) !important;";
		document.querySelectorAll("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C21")[0].title = "Measure field should not be Blank";
	}catch(err){ }
}

function customerTabHighlight()
{
	try
	{
		//Shipper City
		if(document.getElementById("sh_cust_cty_nm").value.trim() == "")
		{
			document.getElementById("sh_cust_cty_nm").style = "width:125px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("sh_cust_cty_nm").style = "width:125px;";
		}
		//Shipper Country
		if(document.getElementById("sh_cstms_decl_cnt_cd").value.trim() == "")
		{
			document.getElementById("sh_cstms_decl_cnt_cd").style = "width:30px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("sh_cstms_decl_cnt_cd").style = "width:30px;";
		}
		//Shipper ZipCode
		if(document.getElementById("sh_cust_zip_id").value.trim() == "")
		{
			document.getElementById("sh_cust_zip_id").style = "width:74px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("sh_cust_zip_id").style = "width:74px;";
		}
		//Shipper Street
		if(document.getElementById("sh_eur_cstms_st_nm").value.trim() == "")
		{
			document.getElementById("sh_eur_cstms_st_nm").style = "width:159px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("sh_eur_cstms_st_nm").style = "width:159px;";
		}
		//Shipper State
		if(document.getElementById("sh_cust_ste_cd").value.trim() == "")
		{
			document.getElementById("sh_cust_ste_cd").style = "width: 30px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("sh_cust_ste_cd").style = "width: 30px;";
		}
		//Consignee City
		if(document.getElementById("cn_cust_cty_nm").value.trim() == "")
		{
			document.getElementById("cn_cust_cty_nm").style = "width:125px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("cn_cust_cty_nm").style = "width:125px;";
		}
		//Consignee Country
		if(document.getElementById("cn_cstms_decl_cnt_cd").value.trim() == "")
		{
			document.getElementById("cn_cstms_decl_cnt_cd").style = "width:30px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("cn_cstms_decl_cnt_cd").style = "width:30px;";
		}
		//Consignee ZipCode
		if(document.getElementById("cn_cust_zip_id").value.trim() == "")
		{
			document.getElementById("cn_cust_zip_id").style = "width:74px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("cn_cust_zip_id").style = "width:74px;";
		}
		//Consignee Street
		if(document.getElementById("cn_eur_cstms_st_nm").value.trim() == "")
		{
			document.getElementById("cn_eur_cstms_st_nm").style = "width:159px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("cn_eur_cstms_st_nm").style = "width:159px;";
		}
		//Consignee State
		if(document.getElementById("cn_cust_ste_cd").value.trim() == "")
		{
			document.getElementById("cn_cust_ste_cd").style = "width: 30px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("cn_cust_ste_cd").style = "width: 30px;";
		}
		//Notify City
		if(document.getElementById("nf_cust_cty_nm").value.trim() == "")
		{
			document.getElementById("nf_cust_cty_nm").style = "width:125px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("nf_cust_cty_nm").style = "width:125px;";
		}
		//Notify Country
		if(document.getElementById("nf_cstms_decl_cnt_cd").value.trim() == "")
		{
			document.getElementById("nf_cstms_decl_cnt_cd").style = "width:30px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("nf_cstms_decl_cnt_cd").style = "width:30px;";
		}
		//Notify ZipCode
		if(document.getElementById("nf_cust_zip_id").value.trim() == "")
		{
			document.getElementById("nf_cust_zip_id").style = "width:74px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("nf_cust_zip_id").style = "width:74px;";
		}
		//Notify Street
		if(document.getElementById("nf_eur_cstms_st_nm").value.trim() == "")
		{
			document.getElementById("nf_eur_cstms_st_nm").style = "width:159px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("nf_eur_cstms_st_nm").style = "width:159px;";
		}
		//Notify State
		if(document.getElementById("nf_cust_ste_cd").value.trim() == "")
		{
			document.getElementById("nf_cust_ste_cd").style = "width: 30px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("nf_cust_ste_cd").style = "width: 30px;";
		}
	}catch(err){ }
}

function mndTabHighlight()
{
	try
	{
		var del = document.getElementById("del_cd").value.substring(0, 2);
		var flag = 0;
		var pol = document.getElementById("pol_cd").value;
		var totPkgNo = document.getElementById("pck_qty").value;
		totPkgNo = totPkgNo.replaceAll(",","");
		var noOfPkg = document.getElementsByName("pck_cmdt_desc")[0].value;
		var pkgNo = noOfPkg.substring(0,noOfPkg.indexOf(" "));
		var totPkgCode = document.getElementById("pck_tp_cd").value;
		
		//Marks & Number
		if(document.getElementById("mk_desc").value.trim() == "")
		{
			document.getElementById("mk_desc").style = "width:160px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("mk_desc").style = "width:160px;";
		}
		
		//Total Measure
		if(document.getElementsByName("meas_qty")[0].value.trim() == "" || document.getElementsByName("meas_qty")[0].value.trim() == ".000")
		{
			document.getElementsByName("meas_qty")[0].style = "width:88px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementsByName("meas_qty")[0].style = "width:88px;";
		}
		
		if(del == "BR" || del == "IN" || del == "MX" || del == "EG")
		{
			document.getElementById("btn_t8ExportImportInfo").style = "width: 154px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			if(del == "BR")
			{
				document.getElementById("btn_t8ExportImportInfo").title = "For Brazil destination : Please update Consignee and Notify Party CNPJ";
			}
			else if(del == "IN")
			{
				document.getElementById("btn_t8ExportImportInfo").title = "For Destination India : Please update IEC, GST and Email";
			}
			else if(del == "MX")
			{
				document.getElementById("btn_t8ExportImportInfo").title = "For Destination Mexico : Please update Shipper, consignee and Notify Party Tax ID";
			}
			else if(del == "EG")
			{
				document.getElementById("btn_t8ExportImportInfo").title = "For Destination Egypt : Please update ACID no. Manual Validation";
			}
		}
		else
		{
			document.getElementById("btn_t8ExportImportInfo").style = "width: 154px;";
			document.getElementById("btn_t8ExportImportInfo").title = "";
		}
		
		if(pol == "PKKHI" || pol == "PKBQM" || pol == "DXBBB" || pol == "YGNBB" || pol == "CNTXG")
		{
			if(totPkgNo != pkgNo)
			{
				document.getElementsByName("pck_qty")[0].style = "width:68px; text-align:right; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
				document.getElementsByName("pck_cmdt_desc")[0].style = "ime-mode:disabled;width:600px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			}
			else
			{
				document.getElementsByName("pck_qty")[0].style = "width:68px; text-align:right;";
				document.getElementsByName("pck_cmdt_desc")[0].style = "ime-mode:disabled;width:600px;";
			}
			
			if(totPkgCode == "AE" && (!(noOfPkg.includes("AEROSOL")))) { flag = 1; }
			else if(totPkgCode == "AF" && (!(noOfPkg.includes("PAPER PALLET")))) { flag = 1; }
			else if(totPkgCode == "BA" && (!(noOfPkg.includes("BARREL")))) { flag = 1; }
			else if(totPkgCode == "BE" && (!(noOfPkg.includes("BUNDLE")))) { flag = 1; }
			else if(totPkgCode == "BG" && (!(noOfPkg.includes("BAG")))) { flag = 1; }
			else if(totPkgCode == "BI" && (!(noOfPkg.includes("BIN")))) { flag = 1; }
			else if(totPkgCode == "BL" && (!(noOfPkg.includes("BALE")))) { flag = 1; }
			else if(totPkgCode == "BX" && (!(noOfPkg.includes("BOX")))) { flag = 1; }
			else if(totPkgCode == "CD" && (!(noOfPkg.includes("CAN")))) { flag = 1; }
			else if(totPkgCode == "CN" && (!(noOfPkg.includes("CONTAINER")))) { flag = 1; }
			else if(totPkgCode == "CR" && (!(noOfPkg.includes("CRATE")))) { flag = 1; }
			else if(totPkgCode == "CS" && (!(noOfPkg.includes("CASE")))) { flag = 1; }
			else if(totPkgCode == "CT" && (!(noOfPkg.includes("CARTON")))) { flag = 1; }
			else if(totPkgCode == "CY" && (!(noOfPkg.includes("CYLINDER")))) { flag = 1; }
			else if(totPkgCode == "DB" && (!(noOfPkg.includes("WOODEN CRATE")))) { flag = 1; }
			else if(totPkgCode == "DR" && (!(noOfPkg.includes("DRUM")))) { flag = 1; }
			else if(totPkgCode == "EC" && (!(noOfPkg.includes("PLASTIC BAG")))) { flag = 1; }
			else if(totPkgCode == "EE" && (!(noOfPkg.includes("WOODEN CASE")))) { flag = 1; }
			else if(totPkgCode == "PA" && (!(noOfPkg.includes("PACKET")))) { flag = 1; }
			else if(totPkgCode == "PB" && (!(noOfPkg.includes("BOX PALLET")))) { flag = 1; }
			else if(totPkgCode == "PC" && (!(noOfPkg.includes("PARCEL")))) { flag = 1; }
			else if(totPkgCode == "PD" && (!(noOfPkg.includes("WOODEN PALLET")))) { flag = 1; }
			else if(totPkgCode == "PE" && (!(noOfPkg.includes("PALLET") || noOfPkg.includes("MODULAR") || noOfPkg.includes("COLLAR")))) { flag = 1; }
			else if(totPkgCode == "PK" && (!(noOfPkg.includes("PACKAGE")))) { flag = 1; }
			else if(totPkgCode == "PS" && (!(noOfPkg.includes("PIECE")))) { flag = 1; }
			else if(totPkgCode == "PX" && (!(noOfPkg.includes("PALLET")))) { flag = 1; }
			else if(totPkgCode == "SA" && (!(noOfPkg.includes("SACK")))) { flag = 1; }
			else if(totPkgCode == "SI" && (!(noOfPkg.includes("SKID")))) { flag = 1; }
			else if(totPkgCode == "SS" && (!(noOfPkg.includes("STEEL CASE")))) { flag = 1; }
			else if(totPkgCode == "ST" && (!(noOfPkg.includes("SHEET")))) { flag = 1; }
			else if(totPkgCode == "TK" && (!(noOfPkg.includes("TANK")))) { flag = 1; }
			else if(totPkgCode == "UN" && (!(noOfPkg.includes("UNIT")))) { flag = 1; }
			else if(totPkgCode == "WA" && (!(noOfPkg.includes("IBC")))) { flag = 1; }
			
			if(flag == 1)
			{
				document.getElementsByName("pck_tp_cd")[0].style = "ime-mode:disabled;width:50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
				document.getElementsByName("pck_cmdt_desc")[0].style = "ime-mode:disabled;width:600px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			}
			else
			{
				document.getElementsByName("pck_tp_cd")[0].style = "ime-mode:disabled;width:50px;";
				document.getElementsByName("pck_cmdt_desc")[0].style = "ime-mode:disabled;width:600px;";
			}
		}
		
	}catch(err){ }
}

function cmTabHighlight()
{
	try
	{
		var del = document.getElementById("del_cd").value.substring(0, 2);
		//US/CA
		if(del == "US" || del == "CA")
		{
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C18")[0].style = "background-color: rgb(231 8 88 / 98%) !important;";
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C18")[0].title = "Please update HTS Code for US/CA Shipment";
		}
		else
		{
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C18")[0].style = "";
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C18")[0].title = "";
		}
		//Brazil
		if(del == "BR")
		{
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C22")[0].style = "background-color: rgb(231 8 88 / 98%) !important;";
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C22")[0].title = "Please update NCM Code for Brazil Shipment";
		}
		else
		{
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C22")[0].style = "";
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C22")[0].title = "";
		}
		//Other Shipments
		if(del != "US" && del != "CA" && del != "BR")
		{
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C20")[0].style = "background-color: rgb(231 8 88 / 98%) !important;";
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C20")[0].title = "Please update HS Code for Other Shipments";
		}
		else
		{
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C20")[0].style = "";
			document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C20")[0].title = "";
		}
		
		//DG Shipment
		document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C28")[0].style = "background-color: rgb(231 8 88 / 98%) !important;";
		document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C28")[0].title = "If DG shipment, DG has to link";
		
		//Marks
		document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C13")[0].style = "background-color: rgb(231 8 88 / 98%) !important;";
		document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C13")[0].title = "Marks field should not be blank";
		
		//All Confirm
		var attr = document.getElementById("btn_t9AllConfirm").disabled;
		
		if(attr == false)
		{
			document.getElementById("btn_t9AllConfirm").style = "background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("btn_t9AllConfirm").style = "";
		}
	}catch(err){ }
}

function chargeTabHighlight()
{
	try
	{
		var frtTerm = document.getElementById("frt_term_cd_text").value;
		var pod = document.getElementById("frm_t10sheet1_pod_cd").value.substring(0, 2);
		var del = document.getElementById("frm_t10sheet1_del_cd").value.substring(0, 2);
		var pol = document.getElementById("frm_t10sheet1_pol_cd").value;
		var fullpod = document.getElementById("frm_t10sheet1_pod_cd").value;
		var collectOfc = document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].value;
		var prepaidCode = document.getElementsByName("frm_p_t10sheet3_cnt_cd")[0].value + document.getElementsByName("frm_p_t10sheet3_cust_seq")[0].value;
		
		
		//Freight Term Collect not allowed for AR/BO/CY/LK/ML/NG/NP/TZ/VE/ZW
		if(frtTerm == "C" && (pod == "AR" || pod == "BO" || pod == "CY" || pod == "LK" || pod == "ML" || pod == "NG" || pod == "NP" || pod == "TZ" || pod == "VE" || pod == "ZW" || del == "AR" || del == "BO" || del == "CY" || del == "LK" || del == "ML" || del == "NG" || del == "NP" || del == "TZ" || del == "VE" || del == "ZW"))
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementById("frm_t10sheet1_del_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px;";
			document.getElementById("frm_t10sheet1_del_cd").style = "width: 50px;";
		}
		
		//self Audit
		document.getElementById("btn_t10self").style = "background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		
		//POL PK Check Payer Code  && POL PKKHI/PKBQM
		if(pol.startsWith("PK") && prepaidCode == "PK107313")
		{
			document.getElementById("frm_t10sheet1_pol_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_p_t10sheet3_cnt_cd")[0].style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_p_t10sheet3_cust_seq")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else if(pol == "PKKHI" || pol == "PKBQM")
		{
			document.getElementById("frm_t10sheet1_pol_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("frm_t10sheet1_pol_cd").style = "width: 50px;";
			document.getElementsByName("frm_p_t10sheet3_cnt_cd")[0].style = "width: 50px;";
			document.getElementsByName("frm_p_t10sheet3_cust_seq")[0].style = "width: 80px;";
		}
		
		//If POD is IDJKT/IDSUB/IDSRG/IDBLW/IDPNJ/IDPLM/IDBTM/IDPNK/IDMAK/IDBPN then check the Collect Office
		if(fullpod == "IDJKT" && collectOfc != "JKTBB")
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else if(fullpod == "IDSUB" && collectOfc != "SUBBB")
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else if(fullpod == "IDSRG" && collectOfc != "SRGBB")
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else if(fullpod == "IDBLW" && collectOfc != "MESBB")
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else if(fullpod == "IDPNJ" && collectOfc != "BNDBB")
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else if(fullpod == "IDPLM" && collectOfc != "PLMBB")
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else if(fullpod == "IDBTM" && collectOfc != "BTMBB")
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else if(fullpod == "IDPNK" && collectOfc != "PNKBA")
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else if(fullpod == "IDMAK" && collectOfc != "MKSBA")
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else if(fullpod == "IDBPN" && collectOfc != "BPNBA")
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_c_t10sheet3_ofc_cd")[0].style = "width: 80px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementById("frm_t10sheet1_pod_cd").style = "width: 50px;";
			document.getElementById("frm_t10sheet1_del_cd").style = "width: 80px;";
		}
		
	}catch(err){ }
}

function blIssueTabHighlight()
{
	var obd, issuetext, blia, blid, bdct, blit, pod, del;
	try
	{
		obd = document.getElementsByName("frm_t11sheet1_on_board_date")[0].value;
		issuetext = document.getElementsByName("bl_issuebl_type_text")[0].value;
		blia = document.getElementsByName("frm_t11sheet1_bl_issue_at")[0].value;
		blid = document.getElementsByName("frm_t11sheet1_bl_issue_date")[0].value;
		bdct = document.getElementsByName("bl_ready_type_text")[0].value;
		blit = document.getElementsByName("frm_t11sheet1_bl_iss_tp_cd")[0].value;
		pod = document.getElementsByName("frm_t11sheet1_pod_code")[0].value.substring(0, 2);
		del = document.getElementsByName("frm_t11sheet1_del_code")[0].value.substring(0, 2);
	}catch(err){ }
		
	try
	{
		if(obd == "")
		{
			document.getElementsByName("frm_t11sheet1_on_board_date")[0].style = "width: 75px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementsByName("frm_t11sheet1_on_board_date")[0].style = "width: 75px;";
		}
		
		if(issuetext == "")
		{
			document.getElementsByName("bl_issuebl_type_text")[0].style = "width: 85px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementsByName("bl_issuebl_type_text")[0].style = "width: 85px;";
		}
		
		if(blia == "")
		{
			document.getElementsByName("frm_t11sheet1_bl_issue_at")[0].style = "width: 55px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementsByName("frm_t11sheet1_bl_issue_at")[0].style = "width: 55px;";
		}
		
		if(blid == "")
		{
			document.getElementsByName("frm_t11sheet1_bl_issue_date")[0].style = "width:75px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
		else
		{
			document.getElementsByName("frm_t11sheet1_bl_issue_date")[0].style = "width:75px;";
		}
	}catch(err){ }
	
	try
	{
		if((bdct == "B" && blit == "B" && issuetext == "Original B/L") || (bdct == "W" && blit == "W" && issuetext == "Sea Waybill"))
		{
			document.getElementsByName("bl_ready_type_text")[0].style = "width: 15px;";
			document.getElementsByName("frm_t11sheet1_bl_iss_tp_cd")[0].style = "width:30px;";
			document.getElementsByName("bl_issuebl_type_text")[0].style = "width: 85px;";
		}
		else
		{
			document.getElementsByName("bl_ready_type_text")[0].style = "width: 15px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("frm_t11sheet1_bl_iss_tp_cd")[0].style = "width:30px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			document.getElementsByName("bl_issuebl_type_text")[0].style = "width: 85px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
		}
	}catch(err){ }
	
	try
	{
		if(pod == "BO" || del == "BO" || pod == "MZ" || del == "MZ" || pod == "ZW" || del == "ZW" || pod == "AR" || del == "AR" || pod == "BR" || del == "BR" || pod == "CO" || del == "CO" || pod == "CR" || del == "CR" || pod == "DO" || del == "DO" || pod == "EC" || del == "EC" || pod == "SV" || del == "SV" || pod == "GT" || del == "GT" || pod == "HN" || del == "HN" || pod == "NI" || del == "NI" || pod == "NG" || del == "NG" || pod == "VE" || del == "VE" )
		{
			if(bdct == "W" || blit == "W")
			{
				document.getElementsByName("bl_ready_type_text")[0].style = "width: 15px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
				document.getElementsByName("frm_t11sheet1_bl_iss_tp_cd")[0].style = "width:30px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
				document.getElementsByName("bl_issuebl_type_text")[0].style = "width: 85px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
				document.getElementsByName("frm_t11sheet1_pod_code")[0].style = "width: 58px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
				document.getElementsByName("frm_t11sheet1_del_code")[0].style = "width: 58px; background-color:#efb3b3c4 !important; outline:1px solid red !important;";
			}
			else
			{
				document.getElementsByName("bl_ready_type_text")[0].style = "width: 15px;";
				document.getElementsByName("frm_t11sheet1_bl_iss_tp_cd")[0].style = "width:30px;";
				document.getElementsByName("bl_issuebl_type_text")[0].style = "width: 85px;";
				document.getElementsByName("frm_t11sheet1_pod_code")[0].style = "width: 58px;";
				document.getElementsByName("frm_t11sheet1_del_code")[0].style = "width: 58px;";
			}
		}
		else
		{
			document.getElementsByName("bl_ready_type_text")[0].style = "width: 15px;";
			document.getElementsByName("frm_t11sheet1_bl_iss_tp_cd")[0].style = "width:30px;";
			document.getElementsByName("bl_issuebl_type_text")[0].style = "width: 85px;";
			document.getElementsByName("frm_t11sheet1_pod_code")[0].style = "width: 58px;";
			document.getElementsByName("frm_t11sheet1_del_code")[0].style = "width: 58px;";
		}
	}catch(err){ }
}