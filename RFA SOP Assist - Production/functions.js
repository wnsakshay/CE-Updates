function ComCheck_Popup()
{
	try
	{
		alert("Double check the Inclusive surcharges, check APP validity, HAZ, PSA charge, Payment term, POL, POD, SOC , and check the auto-wording if updated");
	}
	catch(err)
	{
		
	}
}

function Arb1_DIV_sheet1()
{
	try
	{
		if(document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C11 > span.GMHeaderText.IBSheetFont0").innerHTML == "Over")
		{
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C11").style.backgroundColor = "orange";
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C11").title = "Over port should be the base ports filed in the Ocean Rates.";
		}
		if(document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C17 > span.GMHeaderText.IBSheetFont0").innerHTML == "Cur.")
		{
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C17").style.backgroundColor = "orange";
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C17").title = "Check the Currency on the Sales Rate quotation.";
		}
		if(document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C18 > span.GMHeaderText.IBSheetFont0").innerHTML == "Proposal")
		{
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C18").style.backgroundColor = "orange";
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C18").title = "Check the rates if there are 0 rates, when manually updated through UI";
		}
		if(document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C21").innerHTML == "EFF Date")
		{
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C21").style.backgroundColor = "orange";
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C21").title = "Specify specific Validity based on the latest rates provided by Sales";
		}
		if(document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C22").innerHTML == "EXP Date")
		{
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C22").style.backgroundColor = "orange";
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C22").title = "Specify specific Validity based on the latest rates provided by Sales";
		}	
	}
	catch(err)
	{
		
	}
}

function Rate_DIV_sheet1()
{
	try
	{
		if(document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C10").innerHTML == "Actual Customer")
		{
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C10").style.backgroundColor = "orange";
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C10").title = "Input the Actual Customer Code";
		}
		if(document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C11").innerHTML == "Commodity Note")
		{
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C11").style.backgroundColor = "orange";
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C11").title = "Click spyglass to Input the surcharge structure, APP validity and other conditions";
		}
	}
	catch(err)
	{
		
	}
}

function Rate_DIV_sheet3()
{
	try
	{
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C10 > span.GMHeaderText.IBSheetFont2").innerHTML == "Per")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C10").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C10").title = "D2 :- DRY 20 FT CONTAINER UNIT\r\nD4 :- DRY 40 FT CONTAINER UNIT\r\nD5 :- DRY 40 FT HIGH CUBIC CONTAINER UNIT\r\nD7 :- DRY 45 FT HIGH CUBIC CONTAINER UNIT\r\nF2 :- FLAT RACK 20 FT CONTAINER UNIT\r\nF4 :- FLAT RACK 40 FT CONTAINER UNIT\r\nF5 :- FLAT RACK 40 HIGH CUBIC CONTAINER UNIT\r\nO2 :- OPEN TOP 20 FT CONTAINER UNIT\r\nO4 :- OPEN TOP 40 FT CONTAINER UNIT";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C11 > span.GMHeaderText.IBSheetFont2").innerHTML == "CGO Type")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C11").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMEllipsis.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C11").title = "DR – Dry Rates\r\nReefer as Dry: RF – DR\r\nTK – Should be SOC\r\nFL/OT – DR – in gauge (20’ and 40’ only no 40 HQ)\r\nAK – Out of Gauge\r\nReefer – R2, R5 only no R4";
		}
	}
	catch(err)
	{
		
	}
}

function Spl_DIV_sheet1()
{
	try
	{	
		if(document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C5 > span.GMHeaderText.IBSheetFont0").innerHTML == "Title")
		{
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C5").style.backgroundColor = "orange";
			document.querySelector("#sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C5").title = "Check for any Special notes such as fixed surcharges, i.e OBS that is auto migrated by CLT. Expire these as necessary.";
		}
	}
	catch(err)
	{
		
	}
}

function ComCheck_DIV_sheet3()
{
	try
	{
		//var c = document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C29").innerHTML;
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C3 > span.GMHeaderText.IBSheetFont2").innerHTML == "Code")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C3").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C3").title = "The use of APP is applied to cases where different port codes or commodity group sequence has different validity dates. Other use of APP are for: SOC, T/S port, Svc Lane, Node and DG Class.";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C4").innerHTML == "Application")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C4").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C4").title = "Double check the Inclusive surcharges, check APP validity, HAZ, PSA charge, Payment term, POL, POD, SOC , and check the auto-wording if updated";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C7").innerHTML == "Cur.")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C7").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C7").title = "Check the currency for fixed amount.\r\nCheck the fixed amount\r\nCheck the per as basis of the charge (BL,Container, DG)";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C9").innerHTML == "Amount")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C9").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C9").title = "Check the currency for fixed amount.\r\nCheck the fixed amount\r\nCheck the per as basis of the charge (BL,Container, DG)";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C11").innerHTML == "Per")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C11").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C11").title = "Check the currency for fixed amount.\r\nCheck the fixed amount\r\nCheck the per as basis of the charge (BL,Container, DG)";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C14").innerHTML == "Lane")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C14").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C14").title = "Add the Lane, TS port, SOC, node and specific POR, POL , POD and DEL for specific charge.";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C15").innerHTML == "T/S<br>Port")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C15").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C15").title = "Add the Lane, TS port, SOC, node and specific POR, POL , POD and DEL for specific charge.";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C18").innerHTML == "SOC")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C18").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C18").title = "Add the Lane, TS port, SOC, node and specific POR, POL , POD and DEL for specific charge.";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C19").innerHTML == "POR")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C19").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C19").title = "Add the Lane, TS port, SOC, node and specific POR, POL , POD and DEL for specific charge.";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C21").innerHTML == "POL")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C21").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C21").title = "Add the Lane, TS port, SOC, node and specific POR, POL , POD and DEL for specific charge.";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C23").innerHTML == "POD")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C23").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C23").title = "Add the Lane, TS port, SOC, node and specific POR, POL , POD and DEL for specific charge.";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C25").innerHTML == "DEL")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C25").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C25").title = "Add the Lane, TS port, SOC, node and specific POR, POL , POD and DEL for specific charge.";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C27").innerHTML == "Node")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C27").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C27").title = "Add the Lane, TS port, SOC, node and specific POR, POL , POD and DEL for specific charge.";
			//console.log(c);
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C29").innerHTML == "Weight<br>(Metric Ton &lt;=)")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C29").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C29").title = "Add the HEA minimum Tier weight";
		}
		if(document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C30").innerHTML == "Weight<br>( &lt; Metric Ton)")
		{
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C30").style.backgroundColor = "orange";
			document.querySelector("#sheet3 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont2.GMCellHeader.IBSheetFont2.HideCol2C30").title = "Add the HEA maximum Tier weight";
		}
		if(document.querySelector("#btn_autoword"))
		{
			document.querySelector("#btn_autoword").style.backgroundColor = "orange";
			document.querySelector("#btn_autoword").title = "Click auto wording once the update is done.\r\nNon Auto Rating surcharges FGP, CTC, FLX, SBL, CDR\r\nCGP = CGD, COD, DPC, ECP\r\nCTF = DPI";
		}
	}
	catch(err)
	{
		
	}
}

function HighlightAmdEffDate()
{
	try
	{
		if(document.querySelector("body > form > div.layer_popup_contents > div > div.opus_design_inquiry.wFit > table:nth-child(3) > tbody:nth-child(3) > tr > th:nth-child(3)").innerHTML == "AMD EFF")
		{
			document.querySelector("#eff_dt").style.backgroundColor = "yellow";
			document.querySelector("#eff_dt").title = "*Recommended to use the possible Effective date suggested by the system.\r\n*Do not delete any rates if you use the Possible Effective Date.\r\n*If you are going to clean up rates, do not use the possible effective date.";
		}
	}
	catch(err)
	{
		
	}
}

function Main_DIV_sheet2()
{
	try
	{
		if(document.querySelector("#sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C6 > span.GMHeaderText.IBSheetFont1").innerHTML == "SVC Scope")
		{
			document.querySelector("#sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C6").style.backgroundColor = "orange";
			document.querySelector("#sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C6").title = "See below commonly used Locations that can be filed in wrong SVC Scopes:\r\nLocation     -   SVC Scope\r\nCOBUN      -   LWE\r\nCOCNR      -   CSE\r\nCOCTG      -   CSE\r\nCOSPC      -   CSE\r\nESBCN      -   AMW\r\nESBIO       -   AEW\r\nESVGO     -   AEW\r\nESVLC      -   AMW\r\nFRFOS     -   AMW\r\nFRLEH     -   AEW\r\nRULED    -   AEW\r\nRUNVS   -   AMW\r\nRUVVO   -   IAA";
		}
	}
	catch(err)
	{
		
	}
}
