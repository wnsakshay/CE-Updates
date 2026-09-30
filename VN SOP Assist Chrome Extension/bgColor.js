function bkgCreation_Highlight()
{
	try
	{
		const remarkField = document.querySelector('[name="xter_rmk"]');
		if (!remarkField) return false;

		const text = remarkField.value || "";
		const cmdtDescField = document.querySelector('[name="cmdt_desc"]')?.value || "";  // CMDTDesc
		const cmdtCodeField = document.querySelector('[name="cmdt_cd"]')?.value || "";    // CMDTCode

		const keywords = [
			"BAMBOO","COCONUT","IRON POWDER","METAL POWDER","SEED CAKE","CALCIUM HYPOCHLORITE",
			"COTTON","WOOD","FERTILIZERS","FISH MEAL","COOKING OIL","HUSK","CEMENT",
			"RICE BRAN","STARCH","WOOD POWDER","SAW DUST POWDER","JOSS POWDER","SAW DUST"
		];

		const codeList = ["440139","330741"];

		const keywordFound = keywords.some(kw => 
			text.includes(kw) || cmdtDescField.includes(kw)
		);

		const codeFound = codeList.includes(cmdtCodeField);
		const nacPattern = /(nac[:\s]|contract party details|a\/c[:\s]|actual customer)/i;
		const depotPattern = /(drop off|stuffing|stuff at|laden|gate in|full return|empty|mty\s|mt\s|por)/i;
		const batteryPattern = /(bat\s|battery)/i;
		
		if (nacPattern.test(text) || depotPattern.test(text) || batteryPattern.test(text)) 
		{
			remarkField.style.width = "320px";
			remarkField.style.height = "50px";
			remarkField.style.resize = "none";
			remarkField.style.border = "2px solid red";
			remarkField.style.borderRadius = "6px";
		}
		if (keywordFound || codeFound) 
		{
			document.getElementsByName("xter_rmk")[0].style = "width:320;height:50px;resize:none;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("cmdt_desc")[0].style = "width:250px;text-align:left;font-weight:normal;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("xter_rmk")[0].title = "Send email to customer for commodity validation";
			document.getElementsByName("cmdt_desc")[0].title = "Send email to customer for commodity validation";
		}

		if (nacPattern.test(text)) 
		{
			remarkField.title = "Please check and link NAC";
		}
		else if (depotPattern.test(text))
		{
			remarkField.title = "Please check DSOP, if none refer to Empty and POR Monitoring Dashboard.";
		}
		else if (batteryPattern.test(text)) 
		{
			document.getElementsByName("btn_t1ChemScrnRefNo")[0].style = "width:223px;border: 2px solid red !important;border-radius: 6px;";
			remarkField.title = "Update Chemical Screening Ref No and Stowage if applicable";
		}
		else
		{
			remarkField.title = "";
			document.getElementsByName("btn_t1ChemScrnRefNo")[0].style = "width:223px;";
		}
	}catch(err){}
	
	try
	{
		const pre = (document.querySelector('[name="pre_rly_port_cd"]')?.value || "");
		
		if(pre != "")
		{
			document.getElementsByName("pre_rly_port_cd")[0].style= "width:56px;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("pst_rly_port_cd")[0].style= "width:56px;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("pre_rly_port_yd_cd")[0].style= "width:25px;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("pst_rly_port_yd_cd")[0].style= "width:25px;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("pre_vvd_cd")[0].style= "width:100px;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("pst_vvd_cd")[0].style= "width:94px;border: 2px solid red !important;border-radius: 6px;";
		}
		else
		{
			document.getElementsByName("pre_rly_port_cd")[0].style= "width:56px;";
			document.getElementsByName("pst_rly_port_cd")[0].style= "width:56px;";
			document.getElementsByName("pre_rly_port_yd_cd")[0].style= "width:25px;";
			document.getElementsByName("pst_rly_port_yd_cd")[0].style= "width:25px;";
			document.getElementsByName("pre_vvd_cd")[0].style= "width:100px;";
			document.getElementsByName("pst_vvd_cd")[0].style= "width:94px;";
		}
	}
	catch(err){ }
	
	try
	{
		const cneeField = (document.querySelector('[name="c_cust_nm"]')?.value || "");           // CNEE
		const cnptField = (document.querySelector('[name="bkg_ctrl_pty_cust_nm"]')?.value || ""); // CNPT
		
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
	  
	  const isMatch = cnptList.some(item => cnptField === item.toUpperCase());
		
		if (cneeField === "TREK BICYCLE CORPORATION" || cnptField === "TREK BICYCLE CORPORATION") 
		{
			document.getElementsByName("c_cust_nm")[0].style= "width:180px;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].style= "width:180px;border: 2px solid red !important;border-radius: 6px;";
		} 
		else if (isMatch)
		{
			document.getElementsByName("c_cust_nm")[0].style= "width:180px;";
			document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].style= "width:180px;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].title = "Please check DSOP/CSOP";
		}
		else
		{
			document.getElementsByName("c_cust_nm")[0].style= "width:180px;";
			document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].style= "width:180px;";
			document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].title = "";
		}
	}catch(err){ }
	
	try
	{
		const shipperField = (document.querySelector('[name="s_cust_nm"]')?.value || "");   // Shipper
		const fwdrField = (document.querySelector('[name="f_cust_nm"]')?.value || "");           // FWDR
		const foodCheckbox = (document.querySelector('[name="fd_grd_flg"]')?.checked || false);  // Food checkbox

		if (shipperField.startsWith("NESTLE") || fwdrField.startsWith("NESTLE")) 
		{
			document.getElementsByName("s_cust_nm")[0].style = "width:180px;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("f_cust_nm")[0].style = "width:180px;border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("fd_grd_flg")[0].style = "outline: 2px solid red !important;";
			document.getElementsByName("s_cust_nm")[0].title = "Please update food grade details in List Bookings Food Grade + IOT CNTR Request File";
			document.getElementsByName("f_cust_nm")[0].title = "Please update food grade details in List Bookings Food Grade + IOT CNTR Request File";
		} 
		else
		{
			document.getElementsByName("s_cust_nm")[0].style = "width:180px;";
			document.getElementsByName("f_cust_nm")[0].style = "width:180px;";
			document.getElementsByName("fd_grd_flg")[0].style = "";
			document.getElementsByName("s_cust_nm")[0].title = "";
			document.getElementsByName("f_cust_nm")[0].title = "";
		}
	}
	catch(err){ }
	
	try
	{
		const bOfc = (document.getElementsByName("bkg_ofc_cd")[0]?.value || "")
		const por = (document.getElementById("bkg_por_cd")?.value || "") + (document.getElementById("bkg_por_yd_cd")?.value || "");
		const pol = (document.getElementById("bkg_pol_cd")?.value || "") + (document.getElementById("bkg_pol_yd_cd")?.value || "");
		const dangerChecked = document.querySelector('[name="dcgo_flg"]')?.checked || false;
		const reeferChecked = document.querySelector('[name="rc_flg"]')?.checked || false;
		const awkwardChecked = document.querySelector('[name="awk_cgo_flg"]')?.checked || false;
		const saveButton = document.querySelector('[name="btn_t1Save"]');
		const prePort = (document.getElementsByName("pre_rly_port_cd")[0]?.value || "") + (document.getElementsByName("pre_rly_port_yd_cd")[0]?.value || "");
		
		if(bOfc == "HANBB")
		{
			const porList = ["VNHPH01", "VNHPH08", "VNHPH17", "VNHPH18", "VNHPH21", "VNHPH26", "VNHPH32", "VNHPH34", "VNHPH46", "VNHPH49" ];

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
				document.getElementById("bkg_por_cd").style = "width:56px;ime-mode:disabled;text-transform:uppercase;border: 2px solid red !important;border-radius: 6px;";
				document.getElementById("bkg_pol_cd").style = "width:52px;ime-mode:disabled;text-transform:uppercase;border: 2px solid red !important;border-radius: 6px;";
				document.getElementById("bkg_por_cd").title = "POR is different with POL for Special Cargo";
				document.getElementById("bkg_pol_cd").title = "POR is different with POL for Special Cargo";
				if(dangerChecked)
				{
					document.getElementById("btn_t1Danger").style = "width: 110px; color: rgb(115, 115, 115);border: 2px solid red !important;border-radius: 6px;";
				}
				if(reeferChecked)
				{
					document.getElementById("btn_t1Reefer").style = "width: 110px; color: rgb(115, 115, 115);border: 2px solid red !important;border-radius: 6px;";
				}
				if(awkwardChecked)
				{
					document.getElementById("btn_t1Awkward").style = "width: 110px; color: rgb(115, 115, 115);border: 2px solid red !important;border-radius: 6px;";
				}
				if(rd > 0)
				{
					const cell = document.evaluate("//*[@id='t1sheet1']/tbody/tr[1]/td[1]/div/table/tbody/tr[2]/td[5]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

					if (cell) 
					{
						cell.style.backgroundColor = "red";
						cell.style.borderRadius = "6px";
					}
				}
				else
				{
					const cell = document.evaluate("//*[@id='t1sheet1']/tbody/tr[1]/td[1]/div/table/tbody/tr[2]/td[5]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

					if (cell) 
					{
						cell.style.backgroundColor = "";
						cell.style.borderRadius = "";
					}
					document.getElementById("btn_t1Danger").style = "width: 110px; color: rgb(115, 115, 115);";
					document.getElementById("btn_t1Reefer").style = "width: 110px; color: rgb(115, 115, 115);";
					document.getElementById("btn_t1Awkward").style = "width: 110px; color: rgb(115, 115, 115);";
				}
			}
			else
			{
				if(prePort == "VNCMP08" || prePort == "VNCMP04")
				{
					document.getElementsByName("pre_rly_port_cd")[0].title = "Update correct Transit Port VNCMP08 - EU Trade & VNCMP04 - TP Trade";
					document.getElementsByName("pre_rly_port_yd_cd")[0].title = "Update correct Transit Port VNCMP08 - EU Trade & VNCMP04 - TP Trade";
				}
			}
		}
		else
		{
			const cell = document.evaluate("//*[@id='t1sheet1']/tbody/tr[1]/td[1]/div/table/tbody/tr[2]/td[5]", document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
			if (cell) 
			{
				cell.style.backgroundColor = "";
				cell.style.borderRadius = "";
			}
			document.getElementById("btn_t1Danger").style = "width: 110px; color: rgb(115, 115, 115);";
			document.getElementById("btn_t1Reefer").style = "width: 110px; color: rgb(115, 115, 115);";
			document.getElementById("btn_t1Awkward").style = "width: 110px; color: rgb(115, 115, 115);";
			
			document.getElementsByName("pre_rly_port_cd")[0].title = "";
			document.getElementsByName("pre_rly_port_yd_cd")[0].title = "";
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
				document.querySelector("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C8").style.backgroundColor = "red";
				document.querySelector("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C8").title = "SOC Container: Please select correct Group CMDT Code";
			}
			else
			{
				document.querySelector("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C8").style.backgroundColor = "";
				document.querySelector("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C8").title = "";
			}
			
			if(pod + podport != del + delport)
			{
				document.getElementById("bkg_pod_cd").style = "width:56px;ime-mode:disabled;text-transform:uppercase;border: 2px solid red !important;border-radius: 6px;";
				document.getElementById("bkg_pod_yd_cd").style = "width:25px;ime-mode:disabled;text-transform:uppercase;border: 2px solid red !important;border-radius: 6px;";
				document.getElementById("bkg_del_cd").style = "width:52px;ime-mode:disabled;text-transform:uppercase;border: 2px solid red !important;border-radius: 6px;";
				document.getElementById("bkg_del_yd_cd").style = "width:25px;ime-mode:disabled;text-transform:uppercase;border: 2px solid red !important;border-radius: 6px;";
				document.getElementById("bkg_pod_cd").title = "Inland Booking: Please check the rate in charge tab - Send an email to onshore if No Rate";
				document.getElementById("bkg_del_cd").title = "Inland Booking: Please check the rate in charge tab - Send an email to onshore if No Rate";
				document.getElementById("btn_t1Save").title = "Inland Booking: Please check the rate in charge tab - Send an email to onshore if No Rate";
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
				document.getElementById("sc_no").title = "FOB Contract: Please check the rate in charge tab - Send an email to onshore if No Rate";
				document.getElementsByName("rfa_no")[0].title = "FOB Contract: Please check the rate in charge tab - Send an email to onshore if No Rate";
				document.getElementById("sc_no").style = "width: 85px; text-align: left; color: rgb(115, 115, 115) !important;border: 2px solid red !important;border-radius: 6px;";
				document.getElementsByName("rfa_no")[0].style = "width: 85px; text-align: left; color: rgb(115, 115, 115) !important;border: 2px solid red !important;border-radius: 6px;";
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
			document.getElementsByName("xter_bkg_rqst_cd")[0].style = "width: 70px;border: 2px solid red !important;border-radius: 6px;";
			document.querySelector('[name="hot_de_flg"]').style = "border: 2px solid red !important;border-radius: 6px;";
			document.getElementsByName("xter_bkg_rqst_cd")[0].title = "Proceed without validating the Rate and Transit Time";
			document.querySelector('[name="hot_de_flg"]').title = "Proceed without validating the Rate and Transit Time";
		}
	}
	catch(err){ }
}