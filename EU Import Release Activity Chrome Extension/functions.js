function Vandecasteele_Popup()
{
	try
	{
		for(var i = 0; i < 2; i ++)
		{
			let comment = prompt("Please check if customer is VANDECASTEELE HOUTIMPORT. \r\nIf yes, please follow CSOP - \r\n1) All collect USD charges =  payer BE101430 (VANDECASTEELE HOUTIMPORT) + create invoice in EUR currency\r\n2) All collect Euro charges =  payer BE101178 (RW Expedition) + create invoice in EUR currency.\r\n(Yes/No)");
			if (comment == null)
			{
				i = -1;
			}
			else
			{
				if(comment.trim().toLowerCase() == "yes" || comment.trim().toLowerCase() == "no")
				{
					alert("Please check if Invoice issue currency is selected as per CSOP instructions.");
					break;
				}
				else
				{
					alert("Please enter valid comment (Yes/No)");
					i = -1;
				}
			}
		}
	}
	catch(err)
	{
		
	}
}

function enable_ar_invoice()
{
	try
	{
		document.getElementById("btn_goto").disabled = false;
		document.getElementById("btn_eml").disabled = false;
	}
	catch(err)
	{
		
	}
}

function EUCargoRelease_SpaceAvailability()
{
	try
	{
		var POD = document.getElementById("blInfo_pod_cd").value;
		
		if(POD == "NLRTM" || POD == "BEANR" || POD == "BEZEE" || POD == "DEHAM")
		{
			alert("If the container type is Reefer, Flat Rack or Open Top (R2, R4, R5, F2, F4, F5, O2, O4, O5), please confirm space availability with the EQC Team before proceeding.");	
		}
	}
	catch(err){ }
}

function EU_CargoReleasePopup()
{
	try
	{
		document.querySelector("#btn_CargoRelease").title = "- Please check if Letter Of Authority is received from Consignee if requestor is other than Consignee\n- Please check if SARS documents is received and checked\n- Please check if Cargo dues is received and checked";
		document.querySelector("#btn_CargoRelease").onclick = function() {
			alert("- Please check if Letter Of Authority is received from Consignee if requestor is other than Consignee\n- Please check if SARS documents is received and checked\n- Please check if Cargo dues is received and checked");
		}
	}
	catch(err)
	{
		
	}
}

function Inv_Item_Correction()
{
	try
	{
		var custName = document.getElementsByName("cust_nm")[0].value;
		var invNo = document.getElementsByName("inv_ref_no")[0].value;
		var flag = 0;
		if(custName.startsWith("KUEHNE "))
		{
			if(invNo.length < 12)
			{
				flag = 1;
			}
			else if(isNaN(invNo))
			{
				flag = 1;
			}
		}
		
		if(flag == 1)
		{
			document.getElementsByName("inv_ref_no")[0].style="outline: 2px solid Red; width: 140px;";
			alert("Please ensure that invoice reference is not entered with special characters and/or spaces and number of digits must be 12, 14, 15, 16 or 17 characters long");
			document.getElementsByName("btn_save")[0].setAttribute("disabled",true);
		}
		else
		{
			document.getElementsByName("btn_save")[0].removeAttribute("disabled");
			document.getElementsByName("inv_ref_no")[0].style="width: 140px;";
		}
	}
	catch(err){ }
}