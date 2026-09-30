function setColors()
{
	try
	{
		document.querySelector("#form > div.wrap_search_tab > div:nth-child(1) > table > tbody:nth-child(3) > tr > th:nth-child(11)").style.backgroundColor = "yellow";
		document.querySelector("#form > div.wrap_search_tab > div:nth-child(1) > table > tbody:nth-child(3) > tr > th:nth-child(11)").title = "Ensure that the RFA is in Approved before sending confirmation to Sales.";
		
		document.querySelector("#form > div.wrap_search_tab > div:nth-child(1) > table > tbody:nth-child(3) > tr > td:nth-child(12)").style.backgroundColor = "yellow";
		document.querySelector("#form > div.wrap_search_tab > div:nth-child(1) > table > tbody:nth-child(3) > tr > td:nth-child(12)").title = "Ensure that the RFA is in Approved before sending confirmation to Sales.";
		
		document.querySelector("#btn_eff_dt").style.backgroundColor = "orange";
		
		document.querySelector('#subterms > table:nth-child(4) > tbody:nth-child(3) > tr > th:nth-child(6)').style.backgroundColor = "yellow";
		document.querySelector('#subterms > table:nth-child(4) > tbody:nth-child(3) > tr > th:nth-child(6)').title="Contract Length:\r\n\r\nShort - 1 to 2 months.\r\nMedium - 3 to 5 months.\r\nLong - more than 6 months.";
		
		document.querySelector('#subterms > table:nth-child(4) > tbody:nth-child(3) > tr > td:nth-child(7)').style.backgroundColor="yellow";
		document.querySelector('#subterms > table:nth-child(4) > tbody:nth-child(3) > tr > td:nth-child(7)').title="Contract Length:\r\n\r\nShort - 1 to 2 months.\r\nMedium - 3 to 5 months.\r\nLong - more than 6 months.";
		
		document.querySelector("#btn_dem_pop").style.backgroundColor = "orange";
		document.querySelector("#btn_dem_pop").title = "*Check Sales request if there is a DEM/DET update.\r\n*Auditor – click here to check if there is any DAR left in requested status.";
		
		document.querySelector("#sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C6").style.backgroundColor = "orange";
	}
	catch(err)
	{
		
	}
}






//














