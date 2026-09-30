function bkgCreation_SoftWarn()
{
	try
	{
		const cells = document.evaluate('//*[@id="t1sheet1"]//table//tr/td[4]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		let sum = 0;
		if (cells.snapshotLength > 1) 
		{
			for (let i = 1; i < cells.snapshotLength; i++) 
			{
				const rawValue = cells.snapshotItem(i).textContent.trim();
				const numericValue = parseFloat(rawValue.replace(/,/g, '')) || 0;
				sum += numericValue;	  
			}
		}
		
		const actWgtField = document.querySelector('[name="act_wgt"]');

		let actWeight = 0;
		if (actWgtField) 
		{
		  actWeight = parseFloat(actWgtField.value.replace(/,/g, '')) || 0;
		}

		//console.log("Calculated Max Weight:", maxWeight);
		//console.log("Actual Weight:", actWeight);

		if (sum > 1 && actWeight > 26000) 
		{
			alert("❌ Cargo weight exceeded 26,000 Kgs");
		} 
		else 
		{
			console.log("✅ Weight is within allowed limit");
		}
	}
	catch(err){	}
	
	try
	{
		const remarkField = document.querySelector('[name="xter_rmk"]');
		if (!remarkField) return false;

		const text = remarkField.value || "";
		
		const nacPattern = /(nac[:\s]|contract party details|a\/c[:\s]|actual customer)/i;
		if (nacPattern.test(text)) 
		{
			alert("Please check and link the NAC");
		}
		
		const depotPattern = /(drop off|stuffing|stuff at|laden|gate in|full return|empty|mty\s|mt\s|por)/i;

		if (depotPattern.test(text)) 
		{
			alert("Please check customer request depot.");
		}
		
		const batteryPattern = /(bat\s|battery)/i;

		if (batteryPattern.test(text)) 
		{
			alert("BATTERY: Send email to customer for battery details");
		}
		
	}catch(err){}
	
	try
	{
		const cneeField = (document.querySelector('[name="c_cust_nm"]')?.value || "");           // CNEE
		const cnptField = (document.querySelector('[name="bkg_ctrl_pty_cust_nm"]')?.value || ""); // CNPT

		if (cneeField === "TREK BICYCLE CORPORATION" || cnptField === "TREK BICYCLE CORPORATION") 
		{
			alert("VIP Customer. Please check DSOP");
		} 
	}catch(err){ }
	
	try
	{
		const pre = (document.querySelector('[name="pre_rly_port_cd"]')?.value || "");
		const cells = document.evaluate('//*[@id="t1sheet1"]//table//tr/td[3]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		
		for (let i = 1; i < cells.snapshotLength; i++) 
		{ 
			const rawValue = cells.snapshotItem(i).textContent.trim();

			let alertMessage = "";
			const dryCodes = ["D2","D4","D5","D7"];
			const reeferCodes = ["R2","R5"];
			
			if (pre != "") 
			{
				if (dryCodes.includes(rawValue)) 
				{
					switch(pre) 
					{
						case "SGSIN":
							alertMessage = "Please check Transit Time 2-11 days for Dry Container";
							break;
						case "HKHKG":
						case "TWKHH":
						case "VNCMP":
						  alertMessage = "Please check Transit Time 2-14 days for Dry Container";
						  break;
						case "CNNGB":
						case "CNSHA":
						  alertMessage = "Please check Transit Time 2-9 days for Dry Container";
						  break;
						case "CNSHK":
						  alertMessage = "Please check Transit Time 2-10 days for Dry Container";
						  break;
						case "CNYTN":
						  alertMessage = "Please check Transit Time 2-12 days for Dry Container";
						  break;
						default:
						  alertMessage = "Please check Transit Time 2-14 days for Dry Container";
					}
				} 
				else if (reeferCodes.includes(rawValue)) 
				{
					alertMessage = "Please check Transit Time 2-7 days for Reefer Container";
				}

				if (alertMessage) 
				{
					alert(alertMessage);
				}
			}
		}
	}catch(err){ }	
	
	try
	{
		const cnptField = document.querySelector('[name="bkg_ctrl_pty_cust_nm"]'); // CNPT

		const cnptValue = cnptField.value;

		const cnptList = [
		"TARGET STORES",
		"LG SOURCING INC 1000 LOWE'S  BOULEVA",
		"BOB'S DISCOUNT FURNITURE",
		"TREK BICYCLE CORPORATION",
		"TECHTRONIC INDUSTRIES CO. LTD.",
		"BIG LOTS STORES, LLC",
		"WALMART INC.",
		"HOME DEPOT",
		"LIVING SPACES FURNITURE, LLC",
		"KUEHNE + NAGEL INC. DBA BLUE ANCHOR AMERICA LINE",
		"YUSEN LOGISTICS (HONG KONG) LIMITED",
		"SAMSUNG SDS ASIA PACIFIC PTE LTD",
		"MAXWIDE LOGISTICS INC.",
		"PREMIER SHIPPERS ASSOCIATION",
		"PUDONG PRIME INT'L LOGISTICS, INC.",
		"FLEXPORT INTERNATIONAL LLC"
	  ];

		const isMatch = cnptList.some(item => cnptValue === item.toUpperCase());

		if (isMatch) 
		{
			alert("Please check DSOP/CSOP");
		} 
		else 
		{
			cnptField.title = ""; 
		}
	}catch(err){ }
	
	try
	{
		const custRemarkField = document.querySelector('[name="xter_rmk"]'); // CustRemark
		const cmdtDescField = document.querySelector('[name="cmdt_desc"]');  // CMDTDesc
		const cmdtCodeField = document.querySelector('[name="cmdt_cd"]');    // CMDTCode

		const remarkText = custRemarkField.value;
		const descText = cmdtDescField.value;
		const codeText = cmdtCodeField.value;

		const keywords = [
			"BAMBOO","COCONUT","IRON POWDER","METAL POWDER","SEED CAKE","CALCIUM HYPOCHLORITE",
			"COTTON","WOOD","FERTILIZERS","FISH MEAL","COOKING OIL","HUSK","CEMENT",
			"RICE BRAN","STARCH","WOOD POWDER","SAW DUST POWDER","JOSS POWDER","SAW DUST"
		];

		const codeList = ["440139","330741"];

		const keywordFound = keywords.some(kw => 
			remarkText.includes(kw) || descText.includes(kw)
		);

		const codeFound = codeList.includes(codeText);

		if (keywordFound || codeFound) 
		{
			alert("Cargo Checking: Send email to customer");
		}
	}
	catch(err){ }
	
	try
	{
		let pod = document.getElementById("bkg_pod_cd").value.substring(0,2);
		let podport = document.getElementById("bkg_pod_yd_cd").value;
		let del = document.getElementById("bkg_del_cd").value.substring(0,2);
		let delport = document.getElementById("bkg_del_yd_cd").value;
		const soc = document.evaluate("//*[@id='t1sheet1']/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td[9]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
		
		if(pod == "US" || pod == "CA" || del == "US" || del == "CA")
		{
			if(soc != "0.00")
			{
				alert("SOC Container: Please select correct Group CMDT Code");
			}
			
			if(pod + podport != del + delport)
			{
				alert("Inland Booking: Please check the rate in charge tab - Send an email to onshore if No Rate");
			}
		}
	}
	catch(err){ }
	
	try
	{
		let sc = document.getElementById("sc_no").value;
		let rfa = document.getElementsByName("rfa_no")[0].value;
		const dangerChecked = document.querySelector('[name="dcgo_flg"]')?.checked || false;
		const reeferChecked = document.querySelector('[name="rc_flg"]')?.checked || false;
		const awkwardChecked = document.querySelector('[name="awk_cgo_flg"]')?.checked || false;
		
		if(dangerChecked || reeferChecked || awkwardChecked)
		{
			if(!(sc.startsWith("TSGN") || sc.startsWith("SGN") || sc.startsWith("THAN") || sc.startsWith("HAN") || sc.startsWith("TDAD") || sc.startsWith("DAD") || rfa.startsWith("TSGN") || rfa.startsWith("SGN") || rfa.startsWith("THAN") || rfa.startsWith("HAN") || rfa.startsWith("TDAD") || rfa.startsWith("DAD")))
			{
				alert("FOB Contract: Please check the rate in charge tab - Send an email to onshore if No Rate");
			}
		}
	}
	catch(err){ }
	
	try
	{
		let bkgType = document.getElementsByName("xter_bkg_rqst_cd")[0].value;
		const premiumChecked = document.querySelector('[name="hot_de_flg"]')?.checked || false;
		
		if(premiumChecked && bkgType == "WEQ")
		{
			alert("Proceed without validating the Rate and Transit Time");
		}
	}
	catch(err){ }
	
	try
	{
		const bOfc = (document.getElementsByName("bkg_ofc_cd")[0]?.value || "");
		const prePort = (document.getElementsByName("pre_rly_port_cd")[0]?.value || "") + (document.getElementsByName("pre_rly_port_yd_cd")[0]?.value || "");
		if(prePort == "VNCMP08" || prePort == "VNCMP04")
		{
			alert("Update correct Transit Port VNCMP08 - EU Trade & VNCMP04 - TP Trade");
		}
		
	}
	catch(err){ }
}

function bkgCreation_HardWarn()
{
	try
	{
		const cells = document.evaluate('//*[@id="t1sheet1"]//table//tr/td[4]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
		let sum = 0;
		if (cells.snapshotLength > 1) 
		{
			for (let i = 1; i < cells.snapshotLength; i++) 
			{
				const rawValue = cells.snapshotItem(i).textContent.trim();
				const numericValue = parseFloat(rawValue.replace(/,/g, '')) || 0;
				sum += numericValue;	  
			}
		}

		const actWgtField = document.querySelector('[name="act_wgt"]');
		const saveButton = document.querySelector('[name="btn_t1Save"]'); 
		let actWeight = 0;
		if (actWgtField) 
		{
		  actWeight = parseFloat(actWgtField.value.replace(/,/g, '')) || 0;
		}

		if (sum == 1 && actWeight > 26000) 
		{
			saveButton.disabled = true;
			alert("❌ Cargo weight exceeded 26,000 Kgs for single container");
		} 
		else 
		{
			console.log("✅ Weight is within allowed limit");
		}
	}
	catch(err){	}
	
	try
	{
		const bOfc = (document.getElementsByName("bkg_ofc_cd")[0]?.value || "")
		const por = (document.getElementById("bkg_por_cd")?.value || "") + (document.getElementById("bkg_por_yd_cd")?.value || "");
		const pol = (document.getElementById("bkg_pol_cd")?.value || "") + (document.getElementById("bkg_pol_yd_cd")?.value || "");
		const dangerChecked = document.querySelector('[name="dcgo_flg"]')?.checked || false;
		const reeferChecked = document.querySelector('[name="rc_flg"]')?.checked || false;
		const awkwardChecked = document.querySelector('[name="awk_cgo_flg"]')?.checked || false;
		const saveButton = document.querySelector('[name="btn_t1Save"]');
		if (!saveButton) return;
		
		if(bOfc == "HANBB") 
		{
			const porList = ["VNHPH01", "VNHPH08", "VNHPH17", "VNHPH18", "VNHPH21", "VNHPH26", "VNHPH32", "VNHPH34", "VNHPH46", "VNHPH49"];

			const cells = document.evaluate('//*[@id="t1sheet1"]//table//tr/td[6]', document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
			let rd = 0;
			if (cells.snapshotLength > 1) 
			{
				for (let i = 1; i < cells.snapshotLength; i++) 
				{ 
					const rawValue = cells.snapshotItem(i).textContent.trim();
					const numericValue = parseFloat(rawValue.replace(/,/g, '')) || 0;
					rd += numericValue;
				}
			}

			const porNotAllowed = porList.includes(por) && por !== pol;

			if (porNotAllowed && (dangerChecked || reeferChecked || awkwardChecked || rd > 0)) 
			{
				saveButton.disabled = true;
				alert("Cannot save: Check POR/POL or special conditions (Danger/Reefer/Awkward/RAD)");
				return false;
			} 
		}
	}
	catch(err){ }
	
	try
	{
		const shipperField = document.querySelector('[name="s_cust_nm"]');   // Shipper
		const cneeField = document.querySelector('[name="c_cust_nm"]');           // CNEE
		const cnptField = document.querySelector('[name="bkg_ctrl_pty_cust_nm"]'); // CNPT
		const fwdrField = document.querySelector('[name="f_cust_nm"]');           // FWDR
		const foodCheckbox = document.querySelector('[name="fd_grd_flg"]');  // Food checkbox
		const saveButton = document.querySelector('[name="btn_t1Save"]');        // Save

		const cneeValue = cneeField.value;
		const cnptValue = cnptField.value;
		const fwdrValue = fwdrField.value;
		const shipperValue = shipperField.value;
		const isFoodChecked = foodCheckbox.checked;

		if ((cneeValue === "TREK BICYCLE CORPORATION" || cnptValue === "TREK BICYCLE CORPORATION") && fwdrValue !== "" ) 
		{
			saveButton.disabled = true;
			alert("Do not allow to save booking if FWDR has value");
			return false;
		}
		else if ((shipperValue.startsWith("NESTLE") || fwdrValue.startsWith("NESTLE")) && !isFoodChecked) 
		{
			saveButton.disabled = true;
			saveButton.title = "Please update food grade details in List Bookings Food Grade + IOT CNTR Request File";
			alert("Cannot save because Shipper or FWDR is Nestle and Food is not checked!");
			return false; 
		} 
	}
	catch(err){ }
}

function enableBKGSave()
{
	try
	{
		document.getElementsByName("btn_t1Save")[0].removeAttribute("disabled");
	}
	catch(err){ }
}

