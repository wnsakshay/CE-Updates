function inputval()
{
	if(document.querySelector("#__TableEntryScreenSanction_SchemaAll_RecordsCopy_To > div > input"))
	{
		var CopyTo = document.evaluate('//*[@id="__TableEntryScreenSanction_SchemaAll_RecordsCopy_To"]/div/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;//.innerHTML
		var Sensitive = document.evaluate('//*[@id="__TableEntryScreenSanction_SchemaAll_RecordsSensitive"]/div/div/div[1]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;//.innerHTML
		var OffShore = document.evaluate('//*[@id="__TableEntryScreenSanction_SchemaAll_RecordsWhich_ONE_entity_do_you_belong_to"]/div/article/span/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;//.innerHTML
		var CNTRY = document.evaluate('//*[@id="__TableEntryScreenSanction_SchemaAll_RecordsCountry_where_the_target_company___individual_resides_in"]/div/article/span/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;//.innerHTML 
		var Country = document.evaluate('//*[@id="__TableEntryScreenSanction_SchemaAll_RecordsCountry_where_the_target_company___individual_resides_in"]/div/article/span/div/div/span', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;//.innerHTML 
		var BLNo = document.evaluate('//*[@id="__TableEntryScreenSanction_SchemaAll_RecordsPlease_provide_booking_number"]/div/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.value;
		var US = document.evaluate('//*[@id="__TableEntryScreenSanction_SchemaAll_RecordsWhat_was_the_result_of_US_OFAC_Sanction_check"]/div/input', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
		
		
		CopyTo.value = "akshay.surve@wns.com";
		Sensitive.style.visibility = "hidden";
		OffShore.innerHTML = "WNS Global Services (UK) Limited (WNS)";
				
		if(CNTRY.innerHTML != '')
		{
			var reg = /^\D*$/;
			Country.innerHTML.length;
			if(reg.test(Country.innerHTML) == false)
			{
				alert("Country Name should not contain Numbers or Special Characters...!");
			}
		}
				
		if(BLNo.length < 13 || BLNo.length > 13)
		{
			if(BLNo != "Nil" && BLNo != "")
			{
				alert("BL Number must be 13 Characters Long...!");
			}
		}
	}
}
