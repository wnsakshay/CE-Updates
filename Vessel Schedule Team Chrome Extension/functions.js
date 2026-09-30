function enableEDITransmit() 
{
	try
	{
		document.getElementById("btn2_EDITransmit").removeAttribute("disabled");
	}
	catch(err){}
}

function disableEDITransmit() 
{
	try
	{
		let pol = (document.getElementById("pol_cd")?.value || "");
		
		if(pol == "HKHKG")
		{
			document.getElementById("btn2_EDITransmit").setAttribute("disabled", true);
		}
	}
	catch(err){}
}
