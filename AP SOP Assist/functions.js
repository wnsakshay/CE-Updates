
function OffDockInvoice_FD_btnConfirm()
{
	try
	{
		document.querySelector("#t4sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont3.GMCellHeader.IBSheetFont3.HideCol3C8").style.backgroundColor = "orange";
		
		var office = document.getElementsByClassName('user_info')[3].innerHTML.substr(19,5);
		var vndr = document.getElementsByName('vndr_seq')[0].value;
		var rcnt = parseInt(document.getElementsByClassName('GMCountFont IBSheetFont3')[1].innerHTML.substr(5,1));
		var frmdate = document.getElementsByName('fm_prd_dt')[0].value;
		var todate = document.getElementsByName('to_prd_dt')[0].value;
		var frmyr = parseInt(frmdate.substr(0,4));
		var frmmn = parseInt(frmdate.substr(5,2));
		var toyr = parseInt(todate.substr(0,4));
		var tomn = parseInt(todate.substr(5,2));
		var flag = 0;
		//var rt='';
		
		for(var i=2;i<=(rcnt+1);i++)
		{
			var rt = document.evaluate('//*[@id="t4sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[9]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var rtyr = parseInt(rt.substr(0,4));
			var rtmn = parseInt(rt.substr(5,2));
			var costcode = document.evaluate('//*[@id="t4sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[4]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var calType = document.evaluate('//*[@id="t4sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			
			if((rtyr >= frmyr) && (rtyr <= toyr) && (rtmn >= frmmn) && (rtmn <= tomn))
			{
				continue;
			}
			else
			{
				if(calType == "SemiAutoInputCost")
				{
					flag = 1;
					break;
				}
			}
		}
		
		if(flag == 1)
		{
			alert("Year Month does not match with the Period.");
		}
	}
	catch(err)
	{
		
	}
}

function OffDockInvoice_TMNL_btnConfirm()
{
	try
	{
		document.querySelector("#t3sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C9").style.backgroundColor = "orange";
		
		var office = document.getElementsByClassName('user_info')[3].innerHTML.substr(19,5);
		var vndr = document.getElementsByName('vndr_seq')[0].value;
		var rcnt = parseInt(document.getElementsByClassName('GMCountFont IBSheetFont2')[1].innerHTML.substr(5,1));
		var frmdate = document.getElementsByName('fm_prd_dt')[0].value;
		var todate = document.getElementsByName('to_prd_dt')[0].value;
		var frmyr = parseInt(frmdate.substr(0,4));
		var frmmn = parseInt(frmdate.substr(5,2));
		var toyr = parseInt(todate.substr(0,4));
		var tomn = parseInt(todate.substr(5,2));
		var flag = 0;
		
		for(var i=2;i<=(rcnt+1);i++)
		{
			var rt = document.evaluate('//*[@id="t3sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[10]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var rtyr = parseInt(rt.substr(0,4));
			var rtmn = parseInt(rt.substr(5,2));
			var costcode = document.evaluate('//*[@id="t3sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[4]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var calType = document.evaluate('//*[@id="t3sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			
			if((rtyr >= frmyr) && (rtyr <= toyr) && (rtmn >= frmmn) && (rtmn <= tomn))
			{
				continue;
			}
			else
			{
				if(calType == "SemiAutoInputCost")
				{
					flag = 1;
					break;
				}
			}
		}
		
		if(flag == 1)
		{
			alert("Year Month does not match with the Period.");
		}
	}
	catch(err)
	{
		
	}
}

function MarineStorageInvoice_btnConfirm()
{
	try
	{
		document.querySelector("#t3sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C8").style.backgroundColor = "orange";
		
		var office = document.getElementsByClassName('user_info')[3].innerHTML.substr(19,5);
		var vndr = document.getElementsByName('vndr_seq')[0].value;
		var rcnt = parseInt(document.getElementsByClassName('GMCountFont IBSheetFont2')[1].innerHTML.substr(5,1));
		var frmdate = document.getElementsByName('fm_prd_dt')[0].value;
		var todate = document.getElementsByName('to_prd_dt')[0].value;
		var frmyr = parseInt(frmdate.substr(0,4));
		var frmmn = parseInt(frmdate.substr(5,2));
		var toyr = parseInt(todate.substr(0,4));
		var tomn = parseInt(todate.substr(5,2));
		var flag = 0;
		//var rt='';
		
		for(var i=2;i<=(rcnt+1);i++)
		{
			var rt = document.evaluate('//*[@id="t3sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[9]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var rtyr = parseInt(rt.substr(0,4));
			var rtmn = parseInt(rt.substr(5,2));
			var costcode = document.evaluate('//*[@id="t3sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[4]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var calType = document.evaluate('//*[@id="t3sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			
			if((rtyr >= frmyr) && (rtyr <= toyr) && (rtmn >= frmmn) && (rtmn <= tomn))
			{
				continue;
			}
			else
			{
				if(calType == "SemiAutoInputCost")
				{
					flag = 1;
					break;
				}
			}
		}
		
		if(flag == 1)
		{
			alert("Year Month does not match with the Period.");
		}
	}
	catch(err)
	{
		
	}
}

function MarineInvoice_btnConfirm()
{
	try
	{
		document.querySelector("#t3sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C11").style.backgroundColor = "orange";
		document.querySelector("#t3sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C11").title = "Please select Type/Size";
		
		document.querySelector("#t3sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C36").style.backgroundColor = "orange";
		document.querySelector("#t3sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C36").title = "If Carrier is selected then 3rd Party selection is mandatory";
		
		document.querySelector("#t3sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C37").style.backgroundColor = "orange";
		document.querySelector("#t3sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C37").title = "If Carrier is selected then 3rd Party selection is mandatory";
		
		var office = document.getElementsByClassName('user_info')[3].innerHTML.substr(19,5);
		var vndr = document.getElementsByName('vndr_seq')[0].value;
		var rcnt = parseInt(document.getElementsByClassName('GMCountFont IBSheetFont2')[1].innerHTML.substr(5,1));

		var flag = 0;
		
		for(var i=2;i<=(rcnt+1);i++)
		{
			
			var cost1 = document.evaluate('//*[@id="t3sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[10]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var cost2 = document.evaluate('//*[@id="t3sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[9]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var carr1 = document.evaluate('//*[@id="t3sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[37]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var carr2 = document.evaluate('//*[@id="t3sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[36]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

			var a = cost1.length;
			var b = cost2.length;
			var c = carr1.length;
			var d = carr2.length;
			
			if(office == "SINBB")
			{
				if((a == 6 || b == 6) && (c == 3 || d == 3))
				{
					if((vndr == "101346") && (cost1 == "SVRHCD" || cost2 == "SVRHCD" || cost1 == "TMRFMO" || cost2 == "TMRFMO"))
					{
						flag = 1;
						break;
					}
					if((vndr == "210372") && (cost1 == "SVRHCD" || cost2 == "SVRHCD" || cost1 == "TMRFMO" || cost2 == "TMRFMO"))
					{
						flag = 1;
						break;
					}
				}
				else
				{
					continue;
				}
			}
		}
		if(flag == 1)
		{
			alert("Type & Size / Calculated vol. / 3rd Party were mandatory items when Carrier was selected.");
		}
	}
	catch(err)
	{
		
	}
}

function t3btng_confirm_callingFunct()
{
	try
	{
		module = document.getElementById('title').innerHTML;
		
		if(module.includes("Marine Terminal Storage Invoice Creation &amp; Correction ( ESD_TES_0009 )"))
		{
			MarineStorageInvoice_btnConfirm();
		}
		else if(module.includes("Marine Terminal Invoice Creation &amp; Correction ( ESD_TES_0001 )"))
		{
			MarineInvoice_btnConfirm();
		}
		else if(module.includes("Off Dock CY Invoice Creation &amp; Correction ( ESD_TES_0004 )"))
		{
			OffDockInvoice_TMNL_btnConfirm();
		}
	}
	catch(err)
	{
		
	}
}

function portChargeInvoice_btnSave()
{
	try
	{
		module = document.getElementById('title').innerHTML;
		if(module.includes("Port charge Invoice Creation ( VOP_PSO_0014 )"))
		{
			document.querySelector('#sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C11').style.backgroundColor = "orange";
			document.querySelector('#sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C12').style.backgroundColor = "orange";
			
			var office = document.getElementsByClassName('user_info')[3].innerHTML.substr(19,5);
			var vndr = document.getElementsByName('vndr_seq')[0].value;
			
			var sheetObject=document.getElementsByClassName("GMSection")[1];
			var rcnt = parseInt(sheetObject.querySelectorAll("tr").length);
			
			for(var i=2;i<=rcnt;i++)
			{
				var costcode = document.evaluate('//*[@id="sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[10]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
					
				if(office == "SINBB")
				{
					if((vndr == "101444") && (costcode == "PTSVSP"))
					{
						alert("PTSVSP input Value in Used.Hr.");
					}
					if((vndr == "101444") && (costcode == "PTSVTW"))
					{
						alert("PTSVTW input Value in Used.Hr.\r\n"
								+ "Note: If with discrepancy, use Adjustment Cost.");
					}
					if((vndr == "101444") && (costcode == "PTXXOH"))
					{
						alert("PTXXOH input Value in Others.");
					}
				}
			}
		}
	}
	catch(err)
	{
		
	}
}
