function Invoice_Issue_Highlight()
{
	try
	{
		document.querySelectorAll("body > div.wrap > form > div.wrap_result > div:nth-child(1) > table:nth-child(1) > tbody > tr > td:nth-child(4) > div > table")[0].style.borderColor = "Red";
		document.querySelectorAll("body > div.wrap > form > div.wrap_result > div:nth-child(1) > table:nth-child(1) > tbody > tr > td:nth-child(4) > div > table")[0].title = "Please check if Invoice issue currency is selected as per CSOP instructions.";
		document.querySelectorAll("#sheet1")[0].style.borderColor = "Red";
	}
	catch(err)
	{
		
	}
}

