function highlightBKGCreation()
{//28thAug'24
	try
	{
		var shName = document.getElementsByName("s_cust_nm")[0].value;
		var fwName = document.getElementsByName("f_cust_nm")[0].value;
		var cnName = document.getElementsByName("c_cust_nm")[0].value;
		var cnptName = document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].value;
	
		//SHPR
		if(shName.startsWith("HONDA CARS INDIA") || shName.startsWith("IKEA") || shName.startsWith("DACHSER INDIA") || shName.startsWith("TOYOTA KIRLOSKAR") || shName.startsWith("MICHELIN INDIA PRIVATE LIMITED") || shName.startsWith("SKODA AUTO VOLKSWAGEN INDIA"))
		{
			document.getElementsByName("s_cust_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else
		{
			document.getElementsByName("s_cust_nm")[0].style="";
		}
		
		//FWDR
		if(fwName.startsWith("HONDA CARS INDIA") || fwName.startsWith("MARUTI SUZUKI INDIA") || fwName.startsWith("IKEA") || fwName.startsWith("DACHSER INDIA") || fwName.startsWith("DHL ") || fwName.startsWith("WELSPUN") || fwName.startsWith("GADRE MARINE EXPORT PRIVATE LIMITED") || fwName.startsWith("APM TERMINALS INDIA PRIVATE LIMITED") || fwName.startsWith("NTC LOGISTICS INDIA PRIVATE LIMITED") || fwName.startsWith("DAMCO INDIA PRIVATE LIMITED"))
		{
			document.getElementsByName("f_cust_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else
		{
			document.getElementsByName("f_cust_nm")[0].style="";
		}
		
		//CNEE
		if(cnName.startsWith("HONDA CARS INDIA") || cnName.startsWith("IKEA") || cnName.startsWith("DACHSER INDIA"))
		{
			document.getElementsByName("c_cust_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else
		{
			document.getElementsByName("c_cust_nm")[0].style="";
		}
		
		//CNPT
		if(cnptName.startsWith("HONDA CARS INDIA") || cnptName.startsWith("IKEA") || cnptName.startsWith("DACHSER INDIA") || cnptName.startsWith("GOODPACK") || cnptName.startsWith("ALLANASONS") || cnptName.startsWith("THE GAP") || cnptName.startsWith("BRITISH AMERICAN TOBACCO") || cnptName.startsWith("UNILEVER SUPPLY CHAIN COMPANY") || cnptName.startsWith("COSTCO WHOLESALE CORPORATION") || cnptName.startsWith("WALMART INC"))
		{
			document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else
		{
			document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].style="";
		}
	}catch(err){	}
}

function highlightCNTR()
{//28thAug'24
	try
	{
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C9").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C9").title = "For F2/F4 Container Type Seal is not required. Update NOSEAL.\r\nFor T2/T4 Tank Container with commodity  as empty. Seal no is not required. Update NOSEAL.\r\nFor all other Container Types Update Seal as per SI.";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C12").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C12").title = "For F2/F4 Container Type Seal is not required. Update NOSEAL.\r\nFor T2/T4 Tank Container with commodity  as empty. Seal no is not required. Update NOSEAL.\r\nFor all other Container Types Update Seal as per SI.";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C16").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C16").title = "Update No. of Package & Package Type as per SI (Container wise).";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C19").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C19").title = "Update Container Gross Weight as per SI (Container wise).";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C21").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C21").title = "Update CBM as per SI (Container wise).";
		
		if(!(document.getElementsByName("btn_t6cntrconfirm")[0].disabled))
		{
			document.getElementsByName("btn_t6cntrconfirm")[0].style= "background-color: #FFA54F !important; outline: 1px solid red !important";
			document.getElementsByName("btn_t6cntrconfirm")[0].title= "Container Confirmation is not done";
		}
		else
		{
			document.getElementsByName("btn_t6cntrconfirm")[0].style= "";
			document.getElementsByName("btn_t6cntrconfirm")[0].title= "";
		}
	}catch(err){	}
}

function highlightCustomer()
{
	try
	{
		var sh = document.getElementsByName("sh_cust_lgl_eng_nm")[0].value;
		var shName = document.getElementsByName("sh_cust_nm")[0].value;
		var cn = document.getElementsByName("cn_cust_lgl_eng_nm")[0].value;
		var cnName = document.getElementsByName("cn_cust_nm")[0].value;
		var nf = document.getElementsByName("nf_cust_lgl_eng_nm")[0].value;
		var nfName = document.getElementsByName("nf_cust_nm")[0].value;
		var fw = document.getElementsByName("ff_cust_lgl_eng_nm")[0].value;
		var fwName = document.getElementsByName("ff_cust_nm")[0].value;
		var an = document.getElementsByName("an_cust_lgl_eng_nm")[0].value;
		var anName = document.getElementsByName("an_cust_nm")[0].value;
		
		//Shipper
		if(sh.startsWith("HONDA CARS INDIA") || shName.startsWith("HONDA CARS INDIA") || sh.startsWith("IKEA") || shName.startsWith("IKEA") || sh.startsWith("DACHSER INDIA") || shName.startsWith("DACHSER INDIA"))
		{
			document.getElementsByName("sh_cust_lgl_eng_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
			document.getElementsByName("sh_cust_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else
		{
			document.getElementsByName("sh_cust_lgl_eng_nm")[0].style="";
			document.getElementsByName("sh_cust_nm")[0].style="";
		}
		
		//Consignee
		if(cn.startsWith("HONDA CARS INDIA") || cnName.startsWith("HONDA CARS INDIA") || cn.startsWith("IKEA") || cnName.startsWith("IKEA") || cn.startsWith("DACHSER INDIA") || cnName.startsWith("DACHSER INDIA"))
		{
			document.getElementsByName("cn_cust_lgl_eng_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
			document.getElementsByName("cn_cust_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else
		{
			document.getElementsByName("cn_cust_lgl_eng_nm")[0].style="";
			document.getElementsByName("cn_cust_nm")[0].style="";
		}
		
		//Notify
		if(nf.startsWith("HONDA CARS INDIA") || nfName.startsWith("HONDA CARS INDIA") || nf.startsWith("IKEA") || nfName.startsWith("IKEA") || nf.startsWith("DACHSER INDIA") || nfName.startsWith("DACHSER INDIA"))
		{
			document.getElementsByName("nf_cust_lgl_eng_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
			document.getElementsByName("nf_cust_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else
		{
			document.getElementsByName("nf_cust_lgl_eng_nm")[0].style="";
			document.getElementsByName("nf_cust_nm")[0].style="";
		}
		
		//F/Forwarder
		if(fw.startsWith("HONDA CARS INDIA") || fwName.startsWith("HONDA CARS INDIA") || fw.startsWith("MARUTI SUZUKI INDIA") || fwName.startsWith("MARUTI SUZUKI INDIA") || fw.startsWith("IKEA") || fwName.startsWith("IKEA") || fw.startsWith("DACHSER INDIA") || fwName.startsWith("DACHSER INDIA"))
		{
			document.getElementsByName("ff_cust_lgl_eng_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
			document.getElementsByName("ff_cust_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else
		{
			document.getElementsByName("ff_cust_lgl_eng_nm")[0].style="";
			document.getElementsByName("ff_cust_nm")[0].style="";
		}
		
		//A/Notify
		if(an.startsWith("HONDA CARS INDIA") || anName.startsWith("HONDA CARS INDIA") || an.startsWith("IKEA") || anName.startsWith("IKEA") || an.startsWith("DACHSER INDIA") || anName.startsWith("DACHSER INDIA"))
		{
			document.getElementsByName("an_cust_lgl_eng_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
			document.getElementsByName("an_cust_nm")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else
		{
			document.getElementsByName("an_cust_lgl_eng_nm")[0].style="";
			document.getElementsByName("an_cust_nm")[0].style="";
		}
	}catch(err){	}
}

function highlightMnD()
{
	try
	{
		document.getElementsByName("btn_t8ExportImportInfo")[0].style= "background-color: #FFA54F !important; outline: 1px solid red !important";
		document.getElementsByName("btn_t8ExportImportInfo")[0].title= "Please update Tax ID in Export & Import Information";
	}
	catch(err)
	{
		
	}
}

function highlightCM()
{
	try
	{
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C6").style.backgroundColor = "#EC7215";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C6").title = "Update No. of Package & Package Type as per SI (Container wise).";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C9").style.backgroundColor = "#EC7215";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C9").title = "Update Container Gross Weight as per SI (Container wise).";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C11").style.backgroundColor = "#EC7215";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C11").title = "Update CBM as per SI (Container wise).";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C13").style.backgroundColor = "#EC7215";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C13").title = "Update Marks & Numbers";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C15").style.backgroundColor = "#EC7215";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C15").title = "Update actual commodity description.";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C18").style.backgroundColor = "#EC7215";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C18").title = "US/CANADA Shipment:\r\nUpdate as per SI.";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C20").style.backgroundColor = "#EC7215";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C20").title = "Other Shipment:\r\nUpdate as per SI.";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C22").style.backgroundColor = "#EC7215";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C22").title = "NCM Code Update as per SI";
	}catch(err){	}
}

function highlightCharge()
{
	try
	{
		var del = document.getElementsByName("frm_t10sheet1_del_cd")[0].value;
		var rfa = document.getElementsByName("frm_t10sheet1_rfa_no")[0].value;
		var sc = document.getElementsByName("frm_t10sheet1_sc_no1")[0].value;
		
		//Multiple Rate US Shipment USLAX/USLGB
		if(del == "USLAX" || del == "USLGB")
		{
			document.getElementsByName("btn_t10auto_rating")[0].style= "background-color: #FFA54F !important; outline: 1px solid red !important";
			document.getElementsByName("btn_t10auto_rating")[0].title= "If Multiple rates for USLAX and USLGB to be selected as per DEL matching";
		}
		
		//MARUTI SUZUKI INDIA SMZB00044A & IKEA SHAB01254A
		if(rfa == "SMZB00044A")
		{
			document.getElementsByName("frm_t10sheet1_rfa_no")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else if(sc == "SMZB00044A")
		{
			document.getElementsByName("frm_t10sheet1_sc_no1")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else if(rfa == "SHAB01254A")
		{
			document.getElementsByName("frm_t10sheet1_rfa_no")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else if(sc == "SHAB01254A")
		{
			document.getElementsByName("frm_t10sheet1_sc_no1")[0].style="background-color:#F9FF9D !important; outline: 1px solid red !important";
		}
		else
		{
			document.getElementsByName("frm_t10sheet1_rfa_no")[0].style="";
			document.getElementsByName("frm_t10sheet1_sc_no1")[0].style="";
		}
	}catch(err){	}
}

function highlightARInvoiceIssue()
{
	try
	{
		var issue_cur = document.getElementsByName("inv_curr_cd_text")[0].value;
		if(issue_cur == "USD")
		{
			document.querySelectorAll("body > div.wrap > form > div.wrap_result > div:nth-child(1) > table:nth-child(1) > tbody > tr > td:nth-child(4) > div > table")[0].style = "border-color:red";
		}
		else
		{
			document.querySelectorAll("body > div.wrap > form > div.wrap_result > div:nth-child(1) > table:nth-child(1) > tbody > tr > td:nth-child(4) > div > table")[0].style = "";
		}
	}catch(err){	}
}
