function freeze_BLIssueBTN()
{
	try
	{
		var tofc = document.getElementsByName("frm_t11sheet1_trd_ppd_rcv_user_office")[0].value;
		var trcv = document.getElementsByName("frm_t11sheet1_trd_ppd_confirm")[0].value;
	
		if(tofc != "")
		{
			if(trcv == "" || trcv == "N")
			{
				document.getElementById("btn_t11InternetAUTH").disabled = true;
				document.getElementById("btn_t11BLRelease").disabled = true;
			}
		}
	}catch(err){ }
	
	try
	{
		var BLno = document.getElementsByName("frm_t11sheet1_bkg_no")[0].value;
		var PPDOrgRcv = document.getElementsByName("frm_t11sheet1_ppd_confirm")[0].value;
	
		if(BLno.startsWith("TA", "TS", "DL", "LY") && PPDOrgRcv == "Y")
		{
			document.getElementById("btn_t11InternetAUTH").disabled = true;
			document.getElementById("btn_t11BLRelease").disabled = true;
			document.getElementById("btn_t11BLPrint").disabled = true;
		}
	}catch(err){ }
}

function BLType_Check()
{
	try
	{
		var t1 = document.getElementById('bl_ready_type_text').value;
		var t2 = document.getElementById('bl_issuebl_type_text').value;
		var t3 = document.getElementById('frm_t11sheet1_bl_issue_no').value;
		
		if(t1 == "W")
		{
			if(t2.toLowerCase() == "sea waybill" && t3 == "1")
			{
				document.getElementById('btn_t11InternetAUTH').disabled = true;
				document.getElementById('btn_t11BLRelease').disabled = false;
			}
			else
			{
				alert("B/L Type is different in Type | Doc Req. | B/L Type");
				document.getElementById('btn_t11InternetAUTH').disabled = true;
				document.getElementById('btn_t11BLRelease').disabled = true;
			}
		}
		if(t1 == "B")
		{
			if(t2.toLowerCase() == "original b/l" && t3 == "3")
			{
				document.getElementById('btn_t11InternetAUTH').disabled = false;
				document.getElementById('btn_t11BLRelease').disabled = true;
			}
			else
			{
				alert("B/L Type is different in Type | Doc Req. | B/L Type");
				document.getElementById('btn_t11InternetAUTH').disabled = true;
				document.getElementById('btn_t11BLRelease').disabled = true;
			}
		}
	}catch(err){	}
}

function blrelease_IKEA()
{
	try
	{
		var fwdr = document.getElementsByName("f_fwd_name")[0].value;
		var shpr = document.getElementsByName("frm_t11sheet1_shpr_name")[0].value;
		
		if(fwdr.includes("IKEA") || shpr.includes("IKEA"))
		{
			window.prompt("1.BL TYPE - WAYBILL\r\n2.Send all WAYBILL (including TA3PX and TA3RG) to IKEA destination cnee within 24hours after VSL sailing. There is SWB contact list sharing with you.\r\n3. All charges will be prepaid at SINGAPORE,payer CH100404(this payer is credit customer, we could release WAYBILL directly after notice sent out)\r\n4.  Regardless consignee name, notify name or also notify name,  in case their address match with existing IKEA code’s address, select IKEA code, no need to create CPF or clarify with shipper and overseas.");
		}
	}catch(err){	}
}

function LPS_Waive_IKEA_NIKE()
{
	try
	{
		var sc = document.getElementsByName("frm_t10sheet1_sc_no1")[0].value;
		var rfa = document.getElementsByName("frm_t10sheet1_rfa_no")[0].value;
		
		var scArr = ["LAXB00282A", "GCM0769B24", "SHAB01254A", "SHAB01732A", "SHAB01750A"];
		
		for(var i = 0; i < scArr.length; i++)
		{
			if(sc == scArr[i] || rfa == scArr[i])
			{
				try
				{
					var sheetObject=document.getElementById("t10sheet2");
					var rowCount = sheetObject.querySelectorAll("tr").length
			
					if(document.querySelector("#t10sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(2) > td.GMWrap0.GMAlignCenter.GMPopupEdit.GMCell.IBSheetFont1.GMNoRight.HideCol1C4"))
					{
						for(var i=2;i<=(rowCount-11);i++)
						{
							var rt = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[5]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

							if(rt.replace("<em>","").startsWith("LPS") || rt.replace("<em>","").startsWith("CSV"))
							{
								document.getElementById('btn_t10save').disabled = true;
								window.prompt("Do not add LPS/CSV charge, check DSOP.  SC/RFA# " + scArr[i]);
								document.getElementById('btn_t10save').disabled = false;
								break;
							}
						}
					}
				}catch(err){	}
			}
		}
	}catch(err){	}
	
}

function CashCustomer_EBL()
{
	try
	{
		var eBLFlag = document.getElementsByName("ebl_flg_checkbox")[0].checked;
		var eBLProvider = document.getElementsByName("ebl_prov_cd_text")[0].value;
		var PPD_RCV = document.getElementsByName("frm_t11sheet1_ppd_confirm")[0].value;
		
		if(eBLFlag == true && eBLProvider == "WAVE" && PPD_RCV == "N")
		{
			//alert("Cash Customer - eBL and Payment Status is N");
			document.getElementById('btn_t11BLPrint').disabled = true;
		}
		else
		{
			document.getElementById('btn_t11BLPrint').disabled = false;
		}
	}catch(err){	}
}


function LPS_HONDA()
{
	//Honda LPS Waive
	try
	{
		var sc = document.getElementsByName("frm_t10sheet1_sc_no1")[0].value;
		var rfa = document.getElementsByName("frm_t10sheet1_rfa_no")[0].value;
		
		if(sc == "TYOB03095A" || rfa == "TYOB03095A")
			{
				try
				{
					var sheetObject=document.getElementById("t10sheet2");
					var rowCount = sheetObject.querySelectorAll("tr").length
			
					if(document.querySelector("#t10sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(2) > td.GMWrap0.GMAlignCenter.GMPopupEdit.GMCell.IBSheetFont1.GMNoRight.HideCol1C4"))
					{
						for(var i=2;i<=(rowCount-11);i++)
						{
							var rt = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[5]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

							if(rt.replace("<em>","").startsWith("LPS"))
							{
								window.prompt("Need to Check SI Remark for 3rd Payer LPS Charge.\nSC/RFA#TYOB03095A");
								break;
							}
						}
					}
				}catch(err){	}
			}
	}catch(err) { }
}

function SAMSUNG_Waive_LPS_CDC_AMA()
{
	try
	{
		var sc = document.getElementsByName("frm_t10sheet1_sc_no1")[0].value;
		var rfa = document.getElementsByName("frm_t10sheet1_rfa_no")[0].value;
		
		var scArr = ["SEL0022B25", "SEL0362N25", "SELB04336A"];
		
		for(var i = 0; i < scArr.length; i++)
		{
			if(sc == scArr[i] || rfa == scArr[i])
			{
				try
				{
					var sheetObject=document.getElementById("t10sheet2");
					var rowCount = sheetObject.querySelectorAll("tr").length
			
					if(document.querySelector("#t10sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(2) > td.GMWrap0.GMAlignCenter.GMPopupEdit.GMCell.IBSheetFont1.GMNoRight.HideCol1C4"))
					{
						for(var i=2;i<=(rowCount-11);i++)
						{
							var rt = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[5]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

							if(rt.replace("<em>","").startsWith("LPS") || rt.replace("<em>","").startsWith("CDC") || rt.replace("<em>","").startsWith("AMA"))
							{
								document.getElementById('btn_t10save').disabled = true;
								window.prompt("Samsung Customer - Do not charge LPS/CDC/AMA.  SC/RFA# " + scArr[i]);
								document.getElementById('btn_t10save').disabled = false;
								break;
							}
						}
					}
				}catch(err){	}
			}
		}
	}catch(err){	}
}

function ShenzhenEnkorHardStop()
{
	//B/L Issue Tab
	try
	{
		let shName = document.getElementById("frm_t11sheet1_shpr_name")?.value.replace(/\s+/g, "");
		let comment = null;
		if(shName.startsWith("SHENZHENENKORELECTRONICSLTD"))
		{
			for(var i = 0; i < 35; i++)
			{
				comment = prompt("Please do not amend any BL details if BL shows Shipper: Shenzhen Enkor Electronics LTD. \r\nPlease escalate the case to jun.wu@one-line.com & Onshore CS.\r\n\r\nIF Onshore approval received: (Yes / No)");
				
				if(comment == null)
				{
					i--;
					continue;
				}
				else if(comment.toLowerCase() == "no")
				{
					document.getElementById("btn_t11BLRelease").setAttribute("disabled", true);
					document.getElementById("btn_t11InternetAUTH").setAttribute("disabled", true);
					break;
				}
				else if(comment.toLowerCase() == "yes")
				{
					document.getElementById("btn_t11BLRelease").removeAttribute("disabled");
					document.getElementById("btn_t11InternetAUTH").removeAttribute("disabled");
					break;
				}
				else
				{
					i--;
					continue;
				}
			}
		}
	}catch(err){ }
}