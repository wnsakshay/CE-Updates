function MnDWarnPopups()
{	
	try
	{
		let pod = document.getElementsByName("pod_cd")[0].value;
		let del = document.getElementsByName("del_cd")[0].value;
		
		if(pod.startsWith("EG") || del.startsWith("EG"))
		{
			document.getElementsByName("btn_t8ExportImportInfo")[0].title = "EGYPT Shipment: Please update the ACID no";
			alert("EGYPT Shipment: Please update the ACID No");
		}
		else
		{
			document.getElementsByName("btn_t8ExportImportInfo")[0].title = "";
		}
	}
	catch(err)
	{
		
	}
}

function sendACID()
{	
	try
	{
		let pod = document.getElementsByName("pod_cd")[0].value;
		let del = document.getElementsByName("del_cd")[0].value;
		
		if(pod.startsWith("EG") || del.startsWith("EG"))
		{
			const ACID_REGEX = /\bACID\s*(?:NO)?\s*#?\s*[:=]?\s*(\d{19})\b/i;
			let longDesc = document.getElementsByName("dg_cmdt_desc")[0].value;
			let match = longDesc.match(ACID_REGEX);

			if (match) 
			{
				let acidNumber = match[1];
				chrome.runtime.sendMessage({ type: "setACID", value: acidNumber }, response => 
				{
					console.log("ACID stored in background:", response.status);
				});
			}
		}
	}
	catch(err)
	{
		
	}
}


function EG_EXP_IMP_Ref_HardPopups()
{
	try
	{
		let country = document.getElementById("imp_cnt_cd").value;
		let ACID = document.getElementsByName("imp_aus_mf_ref_no")[0].value.trim();
		let ConsigneeTax = document.getElementsByName("imp_cust_rgst_no")[0].value;
		const isDigit = /^\d{19}$/.test(ACID);
		
		if(country == "EG")
		{
			if(isDigit)
			{
				if(!(ACID.startsWith(ConsigneeTax)))
				{
					alert("EGYPT Shipment: Please update the valid ACID No & Consignee Tax ID");
					document.getElementById("btn_save2").setAttribute("disabled", true);
				}
				else
				{
					document.getElementById("btn_save2").removeAttribute("disabled");
				}
			}
			else
			{
				alert("EGYPT Shipment: Please note that a valid ACID number must contain 19 digits");
				document.getElementById("btn_save2").setAttribute("disabled", true);
			}
			
			try
			{
				chrome.runtime.sendMessage({ type: "getACID" }, response => {
					let acidNumber = response.value;
					if (acidNumber === null) 
					{
						console.log("No ACID stored yet from M&D");
						document.getElementsByName("imp_aus_mf_ref_no")[0].style = "width:170px;";
						return;
					}

					if (acidNumber === ACID) 
					{
						console.log("ACID matches the field!");
						document.getElementById("btn_save2").removeAttribute("disabled");
						//alert("ACID matches the field! ✅");
						document.getElementsByName("imp_aus_mf_ref_no")[0].style = "width:170px;outline:solid 2px green;";
					} 
					else 
					{
						console.log("ACID does NOT match.");
						alert("ACID does NOT match with Description of Goods in  M&D Tab! ❌");
						document.getElementById("btn_save2").setAttribute("disabled", true);
						document.getElementsByName("imp_aus_mf_ref_no")[0].style = "width:170px;outline:solid 2px red;";
					}
				});
			}
			catch(err){}
		}
	}
	catch(err)
	{
		
	}
}
