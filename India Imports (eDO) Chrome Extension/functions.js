function DeStuff_Empty_Yard()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		var DeStuff = document.getElementById("deStuffingTp").value;
		var Empty_Yard = document.getElementById("emptyYard").value;
		
		if(loc.includes("Nhava Sheva") && DeStuff == "DO_DOCK" && Empty_Yard != "")
		{
			alert("Empty yard not required for Nhava Sheva Dock D.O");
		}
	}catch(err){ }
}

function Empty_Yard_Tumb()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		
		if(loc.includes("ICD Tumb"))
		{
			alert("Empty yard should be ICD Tumb for carrier haulage");
		}
	}catch(err){ }
}

function DeStuff_INNSA1()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		var DeStuff = document.getElementById("deStuffingTp").value;
		var CFS = document.getElementById("cfsCode").value;
		
		if(loc.includes("Nhava Sheva") && DeStuff == "DO_DOCK" && CFS.startsWith("INNSA1"))
		{
			alert("CFS name should be ONE Empanel CFS");
		}
	}catch(err){ }
}

function DeStuff_Cochin()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		var DeStuff = document.getElementById("deStuffingTp").value;
		
		if(loc.includes("Cochin") && DeStuff == "DO_DOCK")
		{
			alert("Dock Destuff not allowed for Cochin Location");
		}
	}catch(err){ }
}

function Chennai_Toyota_GenDO()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		var consignee = document.getElementById("consNm").value;
		
		if((loc.includes("Chennai") || loc.includes("Kattupalli")) && consignee.toLowerCase().startsWith("toyota kirloskar motor"))
		{
			alert("For customer: TOYOTA KIRLOSKAR MOTOR PRIVATE - Advance D.O calculation(-1/-2 days) not applicable for Empty return date.");
		}
	}catch(err){ }
}

function DeStuff_Vishakapatnam()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		var DeStuff = document.getElementById("deStuffingTp").value;
		
		if(loc.includes("Vishakapatnam") && DeStuff == "DO_DOCK")
		{
			alert("For Dock destuffing empty yard should be given as per nominated CFS name only");
		}
	}catch(err){ }
}

function India_Cargo_Release_Toyota()
{
	try
	{
		var del = document.getElementById("blInfo_del_cd").value;
		var consignee = document.getElementById("blInfo_ccust_nm").value;
		
		if((del == "INMAA" || del == "INKTP") && consignee.toLowerCase().includes("toyota kirloskar motor"))
		{
			alert("Customer:TOYOTA KIRLOSKAR MOTOR PRIVATE - Advance D.O calculation(-1/-2 days) not required for Empty return date.");
		}
	}catch(err){ }
}

function India_Cargo_Release_OfficeMismatch()
{
	try
	{
		var loginOfc = document.querySelectorAll("body > div.header_fixed > div > div.util_contents > div.user_info_div > span:nth-child(4)")[0].innerText;
		var cct1Office = document.getElementsByName("otsRcvInfo_cct_rcv_ofc_cd")[0].value;
		
		if(!(loginOfc.includes(cct1Office)))
		{
			alert("Login & Location office not matching.");
		}
	}catch(err){ }
}

function DPDSEZCFS_Chennai_Cochin_Kattupalli_Release()
{
	try
	{
		var TypeofDel = document.getElementById("deliveryTp").value;
		var FinalDest = document.getElementById("portDestinationNm").value;
		
		if((FinalDest.includes("Chennai") || FinalDest.includes("Cochin") || FinalDest.includes("Kattupalli")) && (TypeofDel == "DPD_DPD" || TypeofDel == "DPD_SEZ_CFS" || TypeofDel == "SEZ_CFS"))
		{
			alert("Remember to Post Form-13");
		}
	}catch(err){ }
}