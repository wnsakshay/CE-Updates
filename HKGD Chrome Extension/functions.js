function CheckFiler()//
{
	try
	{
		var pod = document.getElementsByName("bkg_pod_cd")[0].value.substring(0, 2);
		var del = document.getElementsByName("bkg_del_cd")[0].value.substring(0, 2);
		var CNPT = document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0].value;
		var SCAC = document.getElementById("scac_cd").value;
		var US = document.getElementById("usa_cstms_file_cd_text").value;
		var CA = document.getElementById("cnd_cstms_file_cd_text").value;
		
		var SI = document.getElementsByName("si_flg")[0].checked;
		
		if(pod == "US" || pod == "CA" || del == "US" || del == "CA")
		{		
			if(SI == true)
			{
				if(US == "" || CA == "" )
				{
					let filercomment = prompt("US/CA filer blank in the BL. Please update filer as it is mandatory and confirm.");
					if (filercomment!= null)
					{
						if(filercomment.trim() != "")
						{
							
						}
						else
						{
							alert("Invalid Comment");
						}
					}
					else
					{
						alert("Invalid Comment");
					}
				}
			}
			
			if(US == "2" || CA == "2")
			{
				if(SCAC == "")
				{
					alert("Kindly check and update the correct SCAC code");
				}
			}
		}
		
		if(CNPT == "JP")
		{
			alert("JP CNPT booking");
		}
	}
	catch(err){}
}

function SOC_CMDTPopup()//
{
	try
	{
		var cnpt = document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].value;
		setTimeout(function()
		{
			var s = document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMWrap0.GMAlignRight.GMFloat.GMCell.IBSheetFont0.HideCol0C8").innerHTML;
			var vol = document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMWrap0.GMAlignRight.GMFloat.GMCell.IBSheetFont0.HideCol0C3").innerHTML;
		
			if(s  !== "0.00")
			{
				document.querySelector("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C8").style.backgroundColor = "red";
				alert("SOC Container found please check CMDT");
			}
			else
			{
				document.querySelector("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C8").style.backgroundColor = "";
			}
		
			if(cnpt.includes("IKEA"))
			{
				if(vol.endsWith(".00"))
				{
					document.querySelector("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C3").style.backgroundColor = "";
				}
				else
				{
					document.querySelector("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C3").style.backgroundColor = "red";
					alert("Partial rating is not allowed for IKEA Customer, Check the DSOP & update correct RATED AS details in Charge Tab");
				}
			}
		},1000);
	}
	catch(err){	}
}

function CNPTFormate()//
{
	try
	{
		var CNPTNO = document.getElementsByName("imp_cnee_tax_no")[0].value;
		var NotifyNo = document.getElementsByName("imp_ntfy_tax_no")[0].value;
		
		if(CNPTNO.includes("/") || CNPTNO.includes("-") || CNPTNO.includes("."))
		{
			document.getElementsByName("imp_cnee_tax_no")[0].style.backgroundColor = "#f1a9f3";
			alert("Consignee CNPJ Should be in Correct Formate");
		}
		if(NotifyNo.includes("/") || NotifyNo.includes("-") || NotifyNo.includes("."))
		{
			document.getElementsByName("imp_ntfy_tax_no")[0].style.backgroundColor = "#f1a9f3";
			alert("Notify CNPJ Should be in Correct Formate");
		}
	}
	catch(err){ }
}

function HighlightShipment()//
{
	try
	{
		const delField = document.getElementsByName("del_cd")[0];
        if (!delField) return;

		var DEL = delField.value.trim();
		var DEL_Start = DEL.substring(0, 2);
		
        const highlightColor = "#f1a9f3";
		
		 const regionColumnMap = 
		 {
            US: "HideCol1C18",
            CA: "HideCol1C18",
            PR: "HideCol1C18",
            AS: "HideCol1C18",
            GU: "HideCol1C18",
            MP: "HideCol1C18",
            BR: "HideCol1C22"
        };
		
		//Default Column for other region
		const targetColumn = regionColumnMap[DEL_Start] || "HideCol1C20";
		
		// Clear previous highlights first
        document.querySelectorAll("#t9sheet2 td, #t9sheet2 th").forEach(cell => 
		{
            cell.style.backgroundColor = "";
        });
		
		// Highlight the data cell
        const dataCell = document.querySelector(`#t9sheet2 td.${targetColumn} > div`);
        if (dataCell) 
		{
			dataCell.style.backgroundColor = highlightColor;
		}

        // Highlight the header cell
        const headerCell = document.querySelector(`#t9sheet2 td.${targetColumn}`);
        if (headerCell) 
		{
			headerCell.style.backgroundColor = highlightColor;
		}
	}
	catch(err){ }
}

function setChargeBgColor()//
{
	try
	{
		const get = (name) => document.getElementsByName(name)[0] || null;
		 
		const por = get("frm_t10sheet1_por_cd");
        const pol = get("frm_t10sheet1_pol_cd");
        const pod = get("frm_t10sheet1_pod_cd");
        const del = get("frm_t10sheet1_del_cd");
        const rateDate = get("frm_t10sheet1_rt_aply_dt");
        const btnDate = get("btn_t10search_date");
		
		// Colors
        const colorHighlight = "#f77749";  // orange highlight
        const colorCRD = "#FF00FF";        // magenta (CRD)
        const colorButton = "#f1a9f3";     // pink
        const colorWarning = "yellow";     // POR/POL mismatch
		
		 // Get POD/DEL prefixes
        const podPrefix = pod?.value?.substring(0, 2) || "";
        const delPrefix = del?.value?.substring(0, 2) || "";
		
		// Define regions that require CRD linkage
        const crdRegions = ["US", "CA", "PR", "AS", "GU", "MP"];
        const isCRD = crdRegions.includes(podPrefix) || crdRegions.includes(delPrefix);
		
		// Reset colors before applying new ones
        [por, pol, pod, del, rateDate, btnDate].forEach(el => {
            if (el) 
			{
				el.style.backgroundColor = "";
			}
            if (el) 
			{
				el.title = "";
			}
        });
		
		//Case 1: CRD-based linkage (US/CA/PR/AS/GU/MP)
        if (isCRD) 
		{
            if (rateDate) 
			{
                rateDate.style.backgroundColor = colorCRD;
                rateDate.title = "Link with only CRD";
            }
            if (pod) 
			{
                pod.style.backgroundColor = colorHighlight;
                pod.title = "Link with only CRD";
            }
            if (del) 
			{
                del.style.backgroundColor = colorHighlight;
                del.title = "Link with only CRD";
            }
            if (btnDate) 
			{
                btnDate.style.backgroundColor = colorButton;
                btnDate.title = "Please click here and link with only CRD";
            }
            return; // Exit early once CRD logic applied
        }
		
		//Case 2: Non-CRD — check POR/POL mismatch
        if (por && pol && rateDate) 
		{
            if (por.value && pol.value && por.value !== pol.value) 
			{
                por.style.backgroundColor = colorWarning;
                pol.style.backgroundColor = colorWarning;
                rateDate.style.backgroundColor = colorWarning;
                rateDate.title = "POR and POL code mismatch";
            }
        }
	}
	catch(err){ }
}

function highlight_EU_Filer()//
{
	try
	{
		let pod = document.getElementById("bkg_pod_cd").value.substring(0,2);
		let del = document.getElementById("bkg_del_cd").value.substring(0,2);
		const filerField = document.getElementById("eu_cstms_file_cd_text");
        const bkgNoField = document.getElementsByName("bkg_no")[0];
		let flag = 0;
		let eufiler = document.getElementById("eu_cstms_file_cd_text").value;
		
		const euList = [
            'AD','AL','AM','AT','AX','AZ','BA','BE','BG','BY','CH','CY','CZ','DE','DK','EE','ES',
            'EU','FI','FO','FR','GB','GE','GI','GL','GR','HR','HU','IE','IL','IM','IS','IT','KG',
            'KZ','LB','LI','LT','LU','LV','MC','MD','ME','MK','MT','NL','NO','PL','PT','RO','RS',
            'RU','SE','SI','SJ','SK','SM','TR','UA','VA'
        ];
		
		const isEU = euList.includes(pod) || euList.includes(del);
		
		//Reset Styles
		bkgNoField.style.backgroundColor = "";
		bkgNoField.style.color = "";
		filerField.style.backgroundColor = "";
		filerField.style.color = "";
			
		if (isEU && eufiler == "1") 
		{
            bkgNoField.style.setProperty("background-color", "red", "important");
            bkgNoField.style.setProperty("color", "white", "important");
            filerField.style.setProperty("background-color", "red", "important");
            filerField.style.setProperty("color", "white", "important");
        }
	}
	catch(err){	}
}

function CAIssueOfficeCheck()//
{
	try
	{
		const officeSpan = document.querySelector("body .user_info_div span:nth-child(4)");
        const bkgField = document.getElementsByName("bkg_no")[0];
        const btnConfirm = document.getElementById("btn_CAConfirm");
		
		if (!officeSpan || !bkgField || !btnConfirm) return;
		
		const loginOffice = officeSpan.innerText.replaceAll("OFFICE", "").substring(0, 2);
        const BLPrefix = bkgField.value.substring(0, 2);
		
		if (loginOffice !== BLPrefix) 
		{
            btnConfirm.disabled = true;
            btnConfirm.title = "Incorrect Login Office";
            btnConfirm.style.setProperty("outline", "2px solid red", "important");
            btnConfirm.style.setProperty("display", "inline");
        } 
		else 
		{
			btnConfirm.disabled = false;
            btnConfirm.title = "";
            btnConfirm.style.removeProperty("outline");
            btnConfirm.style.setProperty("display", "inline");
        }
	}
	catch(err){  }
}

function disablebkgcreationtabfields()//
{
	try
	{
		const fieldIds = ["bkg_ty_flg", "btn_t1Waiting"];

        fieldIds.forEach(id => {
            const el = document.getElementById(id);
            if (el) 
			{
                el.disabled = true;
            }
		});
	}
	catch(err){}
}

function CheckMOT()//
{
	try
	{
		let shipper_code = document.getElementsByName("sh_cust_cnt_cd")[0].value;
		let shipper_name = document.getElementsByName("sh_cust_nm")[0].value;
		let Consignee_name = document.getElementsByName("cn_cust_nm")[0].value;
		let mot_no = document.getElementsByName("mot_no")[0].value;
		let pod = document.getElementsByName("pod_cd")[0].value.substring(0,2);
		let del = document.getElementsByName("del_cd")[0].value.substring(0,2);
		
		if(shipper_code == "CN")
		{
			const keywords = ["LINE", "LINER", "AGENT", "AGENCIES", "TRANSPORTATION", "LOGISTICS", "FORWARDING"];
			
			const shipperHasKeyword = keywords.some(word => shipper_name.includes(word));
            const consigneeHasKeyword = keywords.some(word => consignee_name.includes(word));

            if (shipperHasKeyword && consigneeHasKeyword) 
			{
                alert("Search MOT Number");
            }
		}
		
		if(pod == "VN" || del == "VN")
		{
			alert("Any email of Consignee/Notify/Also notify that is mentioned on B/L image should be added in email box of Customer tab.");
		}	
	}
	catch(err){ }
}

function highlightFeederPORPOL()// 
{
    try 
	{
        var por = document.getElementById("frm_t11sheet1_por_code");
        var pol = document.getElementById("frm_t11sheet1_pol_code");

        if (por && pol) 
		{
            if (por.value !== pol.value) 
			{
                // Apply highlight styles
                [por, pol].forEach(el => {
                    el.style.width = "58px";
                    el.style.backgroundColor = "#f9130a";
                    el.style.color = "white";
                    el.style.setProperty("outline", "2px solid red", "important");
                });
            } 
			else 
			{
                // Reset styles
                [por, pol].forEach(el => {
                    el.style.width = "58px";
                    el.style.backgroundColor = "";
                    el.style.color = "";
                    el.style.outline = "";
                });
            }
        }
    } 
	catch(err){ }
}

function UpdateCustomerTabDetails()//
{
	try
	{
		const cneeCode = document.getElementsByName("cn_cust_cnt_cd")[0]?.value || "";
        const notifyCode = document.getElementsByName("nf_cust_cnt_cd")[0]?.value || "";
		
		if (["US", "CA"].includes(cneeCode) || ["US", "CA"].includes(notifyCode)) 
		{
			// --- Consignee fields ---
            const cneeFields = [
                { name: "cn_cust_cty_nm", label: "Consignee City" },
                { name: "cn_cust_ste_cd", label: "Consignee State" },
                { name: "cn_cstms_decl_cnt_cd", label: "Consignee Country" },
                { name: "cn_cust_zip_id", label: "Consignee Zip Code" },
                { name: "cn_eur_cstms_st_nm", label: "Consignee Street/PO" }
            ];
			
			for (let field of cneeFields) 
			{
                const el = document.getElementsByName(field.name)[0];
                if (el && el.value.trim() === "") 
				{
                    el.style.backgroundColor = "red";
                    alert(`Please enter ${field.label}`);
                    el.focus();
                    return;
                } 
				else if (el) 
				{
                    el.style.backgroundColor = "";
                }
            }
			
			// --- Notify fields ---
            const notifyFields = [
                { name: "nf_cust_cty_nm", label: "Notify City" },
                { name: "nf_cust_ste_cd", label: "Notify State" },
                { name: "nf_cstms_decl_cnt_cd", label: "Notify Country" },
                { name: "nf_cust_zip_id", label: "Notify Zip Code" },
                { name: "nf_eur_cstms_st_nm", label: "Notify Street/PO" }
            ];

            for (let field of notifyFields) 
			{
                const el = document.getElementsByName(field.name)[0];
                if (el && el.value.trim() === "") 
				{
                    el.style.backgroundColor = "red";
                    alert(`Please enter ${field.label}`);
                    el.focus();
                    return;
                } 
				else if (el) 
				{
                    el.style.backgroundColor = "";
                }
			}
		}
	}
	catch(err){ }
}

function ChargeTabCheck()// 
{
	try
	{
		const headerCell = document.querySelector("td.HideCol1C17 span.GMHeaderText.IBSheetFont1");
		if (headerCell) 
		{
            headerCell.title = 	"Charge OFT value should be same as FRT Term value.\r\n" +
								"Ex:\r\n" +
								"- If FRT Term value = 'C', then OFT Term value should be 'C'.\r\n" +
								"- If FRT Term value = 'P', then OFT Term value should be 'P'.";
        }
	}
	catch(err){ }
}

function EleLoader_Runner()//
{
	try
	{
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C7").title = "1) Check downloaded container # with SI \r\n" + "(If mismatch with SI – keep as per system & send mail)\r\n" + "2) In case of Manual BL – if container # is not downloaded in system\r\n" + "– Add manually if accepted in system";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C9").title = "Update Seal as per SI";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C12").title = "Update Seal as per SI";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C10").title = "Update : Kind – M & Code: SH";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C13").title = "Update : Kind – M & Code: SH";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C16").title = "Update No of Package & Package type as per SI (Container wise)";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C19").title = "Update Container gross weight as per SI (Container wise)";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C21").title = "Update CBM as per SI (Container wise)";
	}
	catch(err){ }
}

function C_M_tab_Runner()//
{
	try
	{
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C6").title = "Update No of Package & Package type as per SI (Container wise)";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C9").title = "Update Container gross weight as per SI (Container wise)";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C11").title = "Update CBM as per SI (Container wise)";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C13").title = "Update as per SI\r\nIf SI mentioned N/M – update No Marks for All Trades";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C15").title = "Manual BL:\r\n" +
		"Update actual commodity description\r\n" +
		"(Brand name, non-desc, Continuation & notify party should not be updated)\r\n" +
		"EDI BL:\r\n" +
		"Keep the description as per SI downloaded – but description should be on first line\r\n" +
		"( Remove customer continuation for C/M )\r\n" +
		"Note:\r\n" +
		"US/CANADA Shipment Non-commodity description is allowed for EDI Bls only.";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C18").title = "Update as per SI\r\n(If not mentioned on SI – search as per commodity)";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C20").title = "Europe / Japan /Indonesia Shipment: HS Code Must be on SI\r\n" +
		"a) If mentioned on SI Update as per SI (6 Digit)\r\n" +
		"b) (If not mentioned on SI - search as per commodity) Need to SEND EMAIL\r\n" +
		"Other Shipment:\r\n" +
		"a) If mentioned on SI Update as per SI (6 Digit)\r\n" +
		"b) (If not mentioned on SI - search as per commodity)";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C22").title = "NCM Code Must be on SI\r\n" +
		"a) If mentioned on SI Update as per SI (4 Digit)\r\n" +
		"b) (If not mentioned on SI - search as per commodity) Need to SEND EMAIL";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C24").title = "When we create manual HBL  - we need to input Manifest file no";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C26").title = "If we have DG special cargo – we need to assign DG cargo in CM";
		document.querySelector("#t9sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C26").title = "If we have DG special cargo – we need to assign DG cargo in CM";
	}
	catch(err){ }
}

function BlackList()//Sunil
{
	try
	{
		// Get all customer country codes and sequences
        const customers = [
            { country: document.getElementsByName("sh_cust_cnt_cd")[0]?.value, seq: document.getElementsByName("sh_cust_seq")[0]?.value },
            { country: document.getElementsByName("cn_cust_cnt_cd")[0]?.value, seq: document.getElementsByName("cn_cust_seq")[0]?.value },
            { country: document.getElementsByName("nf_cust_cnt_cd")[0]?.value, seq: document.getElementsByName("nf_cust_seq")[0]?.value },
            { country: document.getElementsByName("ff_cust_cnt_cd")[0]?.value, seq: document.getElementsByName("ff_cust_seq")[0]?.value },
            { country: document.getElementsByName("an_cust_cnt_cd")[0]?.value, seq: document.getElementsByName("an_cust_seq")[0]?.value }
        ];
		
		// Define blacklisted sequences per country
        const blacklist = {
            "CN": ["168626", "545325"],
            "PA": ["501179"],
            "KE": ["101117","500622","500753","501944","503195","503460","503459","100005","100335","500647","200515","501510","503458","503457"]
        };
		
		for (const cust of customers) 
		{
            if (cust.country && cust.seq && blacklist[cust.country]?.includes(cust.seq)) 
			{
                window.prompt(`Blacklisted customer found: ${cust.country}${cust.seq}`);
                break;
            }
        }
	}
	catch(err)
	{
		
	}
	
	try
	{
		const shipper = document.getElementById("sh_cust_nm").value;
		const consignee = document.getElementById("cn_cust_nm").value;
		const notify = document.getElementById("nf_cust_nm").value;
		const forwarder = document.getElementById("ff_cust_nm").value;
		const also_notify= document.getElementById("an_cust_nm").value;

		const qnt = /^Q\s*N\s*T/;
		let SMS = [];

		if(qnt.test(shipper))
		{
			SMS.push("Shipper");
		} 
		if(qnt.test(consignee))
		{
			SMS.push("Consignee");
		}
		if(qnt.test(notify))
		{
			SMS.push("Notify Party");
		}
		if(qnt.test(forwarder))
		{
			SMS.push("F.Forwarder");
		}
		if(qnt.test(also_notify))
		{
			SMS.push("Also Notify Party");
		}
		if(SMS != "")
		{
			SMS = SMS.join(", ");                                                                                                              
			alert("QNT Keyword found in " + SMS  + ".\nPlease Escalate to Onshore Team by keeping Manager in CC");
		}
	}
	catch(err)
	{

	}
}

function ToOrderSanction()//
{
	try
	{
		var cName =  (document.getElementsByName("cn_cust_nm")[0].value || "").replace(/\r\n/g, " ");
		var cAdd = (document.getElementsByName("cn_cust_addr")[0].value || "").replace(/\r\n/g, " ");
		var pod = (document.getElementsByName("pod_cd")[0].value || "").substring(0, 2);
		var del = (document.getElementsByName("del_cd")[0].value || "").substring(0, 2);
		
		if(cName.includes("TO ORDER OF") || cName.includes("BANK") || cName.includes("BANCO") || cAdd.includes("TO ORDER OF") || cAdd.includes("BANK") || cAdd.includes("BANCO"))
		{
			window.alert("Create Sanction check form for TO ORDER OF BANK");
		}
		
		if(pod == "ZA" || del == "ZA")
		{
			if(cName.includes("TO ORDER OF") || cAdd.includes("TO ORDER OF"))
			{
				window.alert("TO ORDER is not allowed for South Africa (ZA) shipments. Check BL regulation for details.");
			}
		}
	}
	catch(err){ }
}

function updateEmailDraftData()//
{
	try
	{
		let emailSubject = document.getElementsByName("edt_subject")[0].value;
		
		if(emailSubject.includes("Tax Invoice"))
		{
			document.getElementsByName("edt_subject")[0].value = document.getElementsByName("edt_subject")[0].value.replaceAll("Tax Invoice","BL Draft");
		}
	}
	catch{}
	
	try
	{
		(function waitForIframe() 
		{
			const iframeXPath = "/html/body/form/div[2]/div[1]/div/table/tbody/tr[6]/td/span/span/span/table/tbody/tr[2]/td/iframe";
			const iframe = document.evaluate(iframeXPath,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
			
			if (!iframe) 
			{
				setTimeout(waitForIframe, 500); // retry every 0.5s
				return;
			}
			
			const tryReadIframe = () => 
			{
				try 
				{
					const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
					if (iframeDoc && iframeDoc.body && iframeDoc.body.innerHTML.trim() !== "") 
					{
						if(iframeDoc.body.innerHTML.includes("Tax Invoice"))
						{
							iframeDoc.body.innerHTML = iframeDoc.body.innerHTML.replaceAll("Tax Invoice","BL Draft");
						}
					} 
					else 
					{
						setTimeout(tryReadIframe, 500);
					}
				} 
				catch (e) 
				{
					setTimeout(tryReadIframe, 500);
				}
			};
			
			iframe.addEventListener("load", tryReadIframe);
			tryReadIframe();
		})();
	}
	catch(err){ }
}

function Cambodia_VKF_Charge()//
{
	try
	{
		var sheetObject = document.getElementById("t10sheet2");
        if (!sheetObject) return;
		
		var rows = sheetObject.querySelectorAll("tr.GMDataRow"); // All data rows
        if (rows.length === 0) return;
		
		var pod = document.getElementById("frm_t10sheet1_pod_cd").value.substring(0, 2);
        var del = document.getElementById("frm_t10sheet1_del_cd").value.substring(0, 2);
		
		if (pod !== "KH" && del !== "KH") return;
		
		var vkfError = false;

        rows.forEach(function(row) {
            var chargeCell = row.querySelector("td:nth-child(5)");
            var termCell = row.querySelector("td:nth-child(21)");

            if (!chargeCell || !termCell) return;

            var charge = chargeCell.innerText;
            var term = termCell.innerText;

            if (charge == "VKF" && term != "C") 
			{
                vkfError = true;
            }
        });
		
		var saveButton = document.getElementById("btn_t10save");
        if (vkfError) 
		{
            alert("VKF prepaid is not allowed for Cambodia shipment");
            saveButton.setAttribute("disabled", true);
        } 
		else 
		{
            saveButton.removeAttribute("disabled");
        }
	}
	catch(err){}
}

function waveDestination()//
{
	try
	{
		var blOffice = document.getElementById("frm_t11sheet1_bl_issue_at").value;
		var eBLFlag = document.getElementById("ebl_flg_checkbox").checked;
		var eBLProvider = document.getElementById("ebl_prov_cd_text").value;
		var allowedOffices = ["CANBB", "HKGBB", "SZPBB", "ZHOBB"];
		if (!allowedOffices.includes(blOffice))
		{
			if(eBLFlag == true && eBLProvider == "WAVE")
			{
				alert("Wave/EBL is not acceptable for issue at destination/3rd country");
			}
		}
	}
	catch(err){ }
}

function Egypt_PortSaid()//
{
	try
	{
		var del = document.getElementById("del_cd").value;
		
		if(del == "EGPSD")
		{
			alert("Need to update PORT SAID FREE ZONE under commodity description");
		}
	}
	catch(err){ }
}

function decimal_Indonesia()//
{
	try
	{
		var pod = document.getElementById("pod_cd").value.substring(0,2);
		var del = document.getElementById("del_cd").value.substring(0,2);
		
		var cntr_cmdt = document.getElementsByName("cntr_cmdt_desc")[0].value;
		cntr_cmdt=cntr_cmdt.substring(0, cntr_cmdt.indexOf("X"));
		if(pod == "ID" || del == "ID")
		{
			if(cntr_cmdt.includes("."))
			{
				alert("Decimal number is not allowed in Total CNTR field of M&D tab for Indonesia Shipments");
			}
		}
	}
	catch(err){ }
}

function CheckMulti_DOCFee()//
{
	try
	{
		var docCount = 0;
		var sheetObject = document.getElementById("t10sheet2");
		var tabCount = sheetObject.querySelectorAll("div").length;
		var rowCount = sheetObject.querySelectorAll("tr").length;
		
		for(var i = 1; i <= (tabCount-20); i++)
		{
			for(var j = 2; j <= (rowCount-11); j++)
			{
				try
				{
					var charge = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div['+i+']/table/tbody/tr['+j+']/td[5]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerText;
					if(charge == "DOC")
					{
						docCount++;
						
						if (docCount > 1) break;
					}
				}
				catch(err){ }
			}
			if (docCount > 1) break;
		}
		
		var saveBtn = document.getElementById("btn_t10save");
        if (!saveBtn) return;
		
		if (docCount > 1) 
		{
            alert("Multiple DOC Fees found, kindly help to relink and over-ride the SSE freight!");
            saveBtn.setAttribute("disabled", true);
        } 
		else 
		{
            saveBtn.removeAttribute("disabled");
        }
	}
	catch(err){ }
}

function check_Cust_FMC()//
{
	try
	{
		var fmc = document.getElementById("fmc_cd").value;
		var saveBtn = document.getElementById("btn_t7Save");
		
		if(fmc != "")
		{
			alert("Refresh the FMC No.");
			 saveBtn.disabled = true;
		}
		else
		{
			saveBtn.disabled = false;
		}
	}
	catch(err){ }
}

function MnD_CleanOnBoard()//
{
	try
	{
		var desc = document.getElementById("dg_cmdt_desc").value;
		var saveBtn = document.getElementById("btn_t8Save");
		
		if(desc.replaceAll("\n"," ").includes("CLEAN ON BOARD"))
		{
			alert("Clean On Board clause found. Please remove the clause and Save");
			saveBtn.disabled = true;
		}
		else
		{
			saveBtn.disabled = false;
		}
	}
	catch(err){	}
}

function BlinkCustomer_popup()//
{
	try
	{
		/*var sh = document.getElementsByName("s_cust_cnt_cd")[0].value + document.getElementsByName("s_cust_seq")[0].value;
		var fw = document.getElementsByName("f_cust_cnt_cd")[0].value + document.getElementsByName("f_cust_seq")[0].value;
		
		var sharr = ['CN163251', 'CN154517', 'CN151128', 'CN100380', 'CN149701', 'CN161558', 'CN149799', 'CN130354', 'CN207877', 'HK104791', 'CN130421', 'CN120475', 'CN568797', 'CN128066', 'HK101281'];
		var fwarr = ['CN163251',	'CN154517',	'CN151128',	'CN174106',	'CN100150',	'CN132128',	'CN215964',	'CN132655',	'CN544552',	'CN132808',	'CN247616',	'CN103415',	'CN603238',	'CN534726',	'CN148218',	'CN230353',	'CN150568',	'CN225713',	'HK520489',	'HK509301',	'CN604355',	'HK100193',	'HK106033',	'CN100380',	'CN149701',	'CN161558',	'CN149799',	'CN130354',	'CN207877',	'HK104791',	'CN130421',	'CN129926',	'CN641048',	'CN130134',	'CN258769',	'HK101135',	'CN128066',	'HK101281',	'CN127644',	'CN329872'];
		
		var flag = 0;
		
		for(var i = 0; i <sharr.length; i++)
		{
			if(sh == sharr[i])
			{
				flag = 1;
				break;
			}
		}
		
		for(var i = 0; i <fwarr.length; i++)
		{
			if(fw == fwarr[i])
			{
				flag = 1;
				break;
			}
		}
		
		if(flag == 1)
		{
			alert("BLINK Customer \r\n- If BL is completed - Send Draft via BLINK\r\n- If BL is pending / or any Amendment - Send Inquiry via BLINK");
		}*/
		
		var cnpt = document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].value;
		var intRemark = document.getElementsByName("inter_rmk")[0].value.replaceAll("\r","").replaceAll("\n","");
		var cnptarr = ["CHINATRANS ", "ORIENT STAR TRANSPORT", "DE WELL CONTAINER ", "FOUREVER ", "PUDONG PRIME ", "MAXWIDE ", "NEW CHAIN ", "KERRY APEX ", "CIMC WETRANS ", "ASIA SHIPPING "];
		
		if(cnpt.length > 3)
		{
			for(var i=0; i < cnptarr.length; i++)
			{
				if(cnpt.includes(cnptarr[i]))
				{
					if(intRemark.includes("EBILL") || intRemark.includes("EBL") || intRemark.includes("WAVE BILL"))
					{
						alert("Check SI remark for customer request - Wave BL");
						break;
					}
				}
			}
		}
	}
	catch(err){ }
}

function validate_onboard()//
{
	try
	{
		var por = document.getElementById("frm_t11sheet1_por_code").value;
		var pol = document.getElementById("frm_t11sheet1_pol_code").value;
		
		var obd, etd, issudt;
		
		if(por == pol)
		{
			obd = document.getElementById("frm_t11sheet1_on_board_date").value;
			etd = document.getElementById("frm_t11sheet1_pol_etd_dt").value;
			issudt = document.getElementById("frm_t11sheet1_bl_issue_date").value;
			
			if(!(obd == etd && etd == issudt))
			{
				alert("Please check On Board and BL issue date");
			}
		}
	}
	catch(err){	}
}

function check_preCarriage()//
{
	try
	{
		var pre = document.getElementById("select_pre_carriage_by_text").value;
		
		if(pre != "")
		{
			alert("Please check Pre-Carriage by field");
		}
	}
	catch(err){	}
}

function Non_FMC_Booking()//
{
	try
	{
		var pod = document.getElementById("bkg_pod_cd").value.substring(0, 2);
		var del = document.getElementById("bkg_del_cd").value.substring(0, 2);
		var por = document.getElementById("bkg_por_cd").value;
		var pol = document.getElementById("bkg_pol_cd").value;
		
		if(!(pod == "US" || pod == "CA" || del == "US" || del == "CA"))
		{
			if(por != pol)
			{
				document.getElementById("btn_t1RouteDetail").style.backgroundColor = "#ffee00db";
			}
			else
			{
				document.getElementById("btn_t1RouteDetail").style.backgroundColor = "";
			}
		}
		else
		{
			document.getElementById("btn_t1RouteDetail").style.backgroundColor = "";
		}
	}
	catch(err){	}
	
	try
	{
		var rtpod = document.getElementById("pod_loc_cd").value.substring(0, 2);
		var rtdel = document.getElementById("del_loc_cd").value.substring(0, 2);
		var rtpor = document.getElementById("por_loc_cd").value;
		var rtpol = document.getElementById("pol_loc_cd").value;
		var transmode = document.getElementById("combo1_text").value;
		
		if(!(rtpod == "US" || rtpod == "CA" || rtdel == "US" || rtdel == "CA"))
		{
			if(rtpor != rtpol)
			{
				if(transmode == "Rail")
				{
					alert("Kindly check and update correct Event Date as application date for Rail Trans-shipment");
				}
			}
		}
	}
	catch(err){	}
}

function jpShipment_Req()//
{
	try
	{
		var pod = document.getElementsByName("pod_cd")[0].value.substring(0, 2);
		var del = document.getElementsByName("del_cd")[0].value.substring(0, 2);
		var cneeFax = document.getElementById("cn_cust_fax_no").value;
		var nfFax = document.getElementById("nf_cust_fax_no").value;
		
		if(pod == "JP" || del == "JP")
		{
			alert("Kindly check if shipper type is Consol or Simple");
			
			if(cneeFax == "" || nfFax == "")
			{
				alert("Please update FAX no. of Consignee and Notify");
			}
		}	
	}
	catch(err){	}
}

function check_duediligence()//
{
	try
	{
		var preCN = document.getElementsByName("frm_p_t10sheet3_cnt_cd")[0].value;
		var colCN = document.getElementsByName("frm_c_t10sheet3_cnt_cd")[0].value;
		var dueArr = ["AE",	"AF",	"BA",	"BI",	"CD",	"CF",	"EE",	"EG",	"FI",	"GE",	"HT",	"IQ",	"JO",	"LB",	"LT",	"LV",	"LY",	"ML",	"MM",	"NI",	"RS",	"SD",	"SO",	"SS",	"TN",	"TR",	"UA",	"VE",	"YE",	"ZW"];
		var flaggedCountries = new Set();
		
		if (dueArr.includes(preCN)) flaggedCountries.add(preCN);
        if (dueArr.includes(colCN)) flaggedCountries.add(colCN);
		
		try
		{
			var sheetObject=document.getElementById("t10sheet2");
			var rowCount = sheetObject.querySelectorAll("tr").length
			
			if(document.querySelector("#t10sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(2) > td.GMWrap0.GMAlignCenter.GMPopupEdit.GMCell.IBSheetFont1.GMNoRight.HideCol1C4"))
			{
				for(var i=2;i<=(rowCount-11);i++)
				{
					var rt = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[25]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
					rt = rt.replace("<em>","");
					
					dueArr.forEach(function(country) 
					{
                        if (rt.startsWith(country)) flaggedCountries.add(country);
                    });
				}
			}
		}
		catch(err){	}
		
		if (flaggedCountries.size > 0) 
		{
            alert("Create SANCTION CHECK FORM for Due Diligence Countries -> " + Array.from(flaggedCountries).join(", "));
        }
	}
	catch(err){	}
}

function NZCneeNf_zipcode()//
{
	try
	{
		var cnctry = document.getElementById("cn_cust_cnt_cd")?.value;
        var nfctry = document.getElementById("nf_cust_cnt_cd")?.value;
        var cnzip = document.getElementById("cn_cust_zip_id")?.value;
        var nfzip = document.getElementById("nf_cust_zip_id")?.value;
        var format = /[A-Za-z]/;
        var flag = false;

		function isInvalidNZZip(zip) 
		{
            return !zip || zip.length !== 4 || zip === "9999" || format.test(zip);
        }
		
		if (cnctry === "NZ" && isInvalidNZZip(cnzip)) flag = true;
        if (nfctry === "NZ" && isInvalidNZZip(nfzip)) flag = true;

        if (flag) 
		{
            alert("Please enter a valid 4-digit zip code for NZ");
        }
	}
	catch(err){	}
}

function MnD_CurrencyPopup()//
{
	try
	{
		var str = "";
		var arr = ["USD", "CNY", "HKD", "RMB", "PRICE", "VALUE", "$"];
		var custom = document.getElementsByName("cstms_desc")[0].value.replaceAll("\r"," ").replaceAll("\n"," ");
		var marks = document.getElementsByName("mk_desc")[0].value.replaceAll("\r"," ").replaceAll("\n"," ");
		var longdesc = document.getElementsByName("dg_cmdt_desc")[0].value.replaceAll("\r"," ").replaceAll("\n"," ");
		
		for(var i = 0; i < arr.length; i++)
		{
			if(custom.includes(arr[i]) || marks.includes(arr[i]) || longdesc.includes(arr[i]))
			{
				str = str + "," + arr[i];
			}
		}
		
		if(str != "")
		{
			str = str.substring(1);
			alert(str + " is not allowed in the M&D Tab");
		}
		
	}
	catch(err){	}
}

function checkCanadaZipFormat()//
{
	try
	{
		var cnCntry = document.getElementsByName("cn_cstms_decl_cnt_cd")[0].value;
		var nfCntry = document.getElementsByName("nf_cstms_decl_cnt_cd")[0].value;
		
		var cnZip = document.getElementsByName("cn_cust_zip_id")[0].value;
		var nfZip = document.getElementsByName("nf_cust_zip_id")[0].value;
		
		var canadaZipRegex = /^[A-Z]\d[A-Z] \d[A-Z]\d$/;
		
		if (cnCntry === "CA" && !canadaZipRegex.test(cnZip)) 
		{
            alert("Incorrect format for Canada zip code. Kindly update the Zip Code of Consignee in correct format");
        }

        if (nfCntry === "CA" && !canadaZipRegex.test(nfZip)) 
		{
            alert("Incorrect format for Canada zip code. Kindly update the Zip Code of Notify in correct format");
        }
	}
	catch(err)
	{
		
	}
}

function checkOFT_FreightTerm()//
{
	try
	{
		var frt = document.getElementById("frt_term_cd_text").value;
		var oft = "";
		var flag = 0;
		
		var sheetObject=document.getElementById("t10sheet2");
		var rowCount = sheetObject.querySelectorAll("tr").length
		
		if(document.querySelector("#t10sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(2) > td.GMWrap0.GMAlignCenter.GMPopupEdit.GMCell.IBSheetFont1.GMNoRight.HideCol1C4"))
		{
			for(var i=2;i<=(rowCount-11);i++)
			{
				var rt = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[5]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

				if(rt.replace("<em>","").startsWith("OFT"))
				{
					flag = 1;
					oft = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[21]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
					break;
				}
			}
		}
		
		if(flag == 1)
		{
			if(frt != oft)
			{
				alert("Kindly check and update correct Freight Term");
				document.getElementById("btn_t10save").setAttribute("disabled",true);
			}
		}
	}
	catch(err){	}
}

function enableCharge_Save()//
{
	try
	{
		document.getElementById("btn_t10save").removeAttribute("disabled");
	}
	catch(err){	}
}

function sameasconsignee()//
{
	try
	{
		var ntname = document.getElementById('nf_cust_nm').value;
		var ntcntry = document.getElementById('nf_cust_cnt_cd').value;
		var ntcode = document.getElementById('nf_cust_seq').value;
		var cncntry = document.getElementById('cn_cust_cnt_cd').value; 
		var cncode = document.getElementById('cn_cust_seq').value;
		
		if(ntname == "SAME AS CONSIGNEE" || ntname == "SAME AS CNEE")
		{
			if(cncntry + cncode != ntcntry + ntcode)
			{
				alert("Update the correct Notify Code");
				document.getElementById('btn_t7Save').disabled = true;
			}
			else
			{
				document.getElementById('btn_t7Save').disabled = false;
			}
		}
	}
	catch(err){	}
}

function QDC_Argentina()//
{
	try
	{
		var pod = document.getElementsByName("pod_cd")[0].value.substring(0,2);
		var del = document.getElementsByName("del_cd")[0].value.substring(0,2);
		var Customs = document.getElementsByName("cstms_desc")[0].value;
		
		if(pod == "AR" || del == "AR")
		{
			if(!(Customs.startsWith("QDC ")))
			{
				alert("Check and update 'QDC' in Customs Description field.");
				document.getElementsByName("btn_t8Save")[0].disabled = true;
			}
			else
			{
				document.getElementsByName("btn_t8Save")[0].disabled = false;
			}
		}
	}
	catch(err){	}
}

function enableBLIssue_Save()//
{
	try
	{
		document.getElementById("btn_t11Save").disabled = false;
	}
	catch(err){	}
}

function BLType_Number()//
{
	try
	{
		var BLType = document.getElementsByName("bl_issuebl_type_text")[0].value;
		var BLTypeNumber = document.getElementsByName("frm_t11sheet1_bl_issue_no")[0].value;
		var eBLTick = document.getElementsByName("ebl_flg_checkbox")[0].checked;
		var eBLProvider = document.getElementsByName("ebl_prov_cd_text")[0].value;
		var BDC = document.getElementById('bl_ready_type_text').value;
		
		if(BDC == "B")
		{
			if(BLType == "Sea Waybill")
			{
				document.getElementsByName("btn_t11Save")[0].disabled = true;
			}
			else if(BLType == "Original B/L")
			{
				if(BLTypeNumber == "3" && eBLTick == false)
				{
					document.getElementsByName("btn_t11Save")[0].disabled = false;
				}
				else if(eBLTick == true && eBLProvider == "WAVE")
				{
					document.getElementsByName("btn_t11Save")[0].disabled = false;
				}
				else
				{
					document.getElementsByName("btn_t11Save")[0].disabled = true;
				}
			}
		}
		
		if(BLType == "Sea Waybill" && BLTypeNumber != "1")
		{
			document.getElementsByName("btn_t11Save")[0].disabled = true;
		}
	}
	catch(err){	}
	
	try
	{
		var BDC = document.getElementById('bl_ready_type_text').value;
		var eBLTick = document.getElementById("ebl_flg_checkbox").checked;
		var eBLProvider = document.getElementById("ebl_prov_cd_text").value;
		
		if(BDC == "W" && eBLTick == true && eBLProvider == "WAVE")
		{
			prompt("E-bill / Wave BL type allowed only for OBL (original)\nPlease confirm BL type is OBL (original)\nYes/No")
			document.getElementsByName("btn_t11Save")[0].disabled = true;
		}
		else
		{
			
		}
	}
	catch(err){	}
}

function draft_Addemail()//
{
	try
	{
		var draftBL_mail = document.evaluate('//*[@id="sheet1"]/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr[4]/td[11]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
		var wayBL_mail = document.evaluate('//*[@id="sheet1"]/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr[6]/td[11]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
		
		if(!(draftBL_mail.toLowerCase().includes('oneobdoc.nsk@wns.com')))
		{
			if(!(wayBL_mail.toLowerCase().includes('oneobdoc.nsk@wns.com')))
			{
				prompt("Please add internal email id - oneobdoc.nsk@wns.com",";oneobdoc.nsk@wns.com");
			}
		}
	}
	catch(err){	}
	
	try
	{
		var email = document.getElementById('email').value;
		
		if(!(email.toLowerCase().includes('oneobdoc.nsk@wns.com')))
		{
			prompt("Please add internal email id - oneobdoc.nsk@wns.com",";oneobdoc.nsk@wns.com");
		}
	}
	catch(err){	}
}

function BLData_Type_U()//
{
	try
	{
		var type = document.getElementById('bl_ready_type_text').value;
		
		if(type == "U")
		{
			document.getElementById('bl_ready_checkbox').disabled = true;
			document.getElementById('btn_t11Save').disabled = true;
			alert("Kindly check and update the correct BDC BL Type.");
		}
		else
		{
			document.getElementById('bl_ready_checkbox').disabled = false;
			document.getElementById('btn_t11Save').disabled = false;
		}
	}
	catch(err){	}
}

function enablecustSave()//
{
	try
	{
		document.getElementById('btn_t7Save').disabled = false;
	}
	catch(err){}
}

function hold_keyword_CM()//
{
	try
	{
		var pol = document.getElementById("pol_cd").value;
		var desc = "";
		var flag = 0;
		var cnt = document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr").length;	
		
		for(var i = 2; i<= cnt+1; i++)
		{
			try 
			{
				desc = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[18]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
				
				if(desc.includes("HYUNDAI SANTA CRUZ") || desc.includes("HYUNDAI SANTA FE") || desc.includes("SANTA FE HYBRID") || desc.includes("SANTA FE PLUG-IN HYBRID") || desc.includes("KIA CARNIVAL"))
				{
					flag = 1;
					document.getElementById("btn_t9Save").disabled = true;
				}
				else
				{
					document.getElementById("btn_t9Save").disabled = false;
				}
			}
			catch(err){ }
		}
		if(flag == 1)
		{
			window.alert("Please hold the bill for processing and escalate to the onshore team. (Hyundai Santa Fe / Kia Carnival)");
		}
	}
	catch(err){	}
}

function cust_remark_DG()//
{
	try
	{
		var arr = ["LOI", "NRF", "LBS", "NNLB","NO BATTERY", "NO AMMONIA", "NO REFRIGERANT"];
		var cust_remark = document.getElementsByName("xter_rmk")[0].value.toUpperCase();
		
		if (!cust_remark || cust_remark.trim() === "") return;
		
		var matchedKeywords = arr.filter(keyword => cust_remark.includes(keyword));
		
		if (matchedKeywords.length > 0) 
		{
			alert("Please do not send email for Alert(Possible DG) keywords to Onshore team as LOI/NRF/LBS/NNLB in customer Remark. - " + matchedKeywords.join(", "));
		}
	}
	catch(err){	}
}

function unacceptable_commodity()//
{
	try
	{
		var pre = ['AD', 'AL', 'AM', 'AT', 'AX', 'AZ', 'BA', 'BE', 'BG', 'BY', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'EU', 'FI', 'FO', 'FR', 'GB', 'GE', 'GI', 'GL', 'GR', 'HR', 'HU', 'IE', 'IL', 'IM', 'IS', 'IT', 'KG', 'KZ', 'LB', 'LI', 'LT', 'LU', 'LV', 'MC', 'MD', 'ME', 'MK', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'RS', 'RU', 'SE', 'SI', 'SJ', 'SK', 'SM', 'TR', 'UA', 'VA'];
		var unaccept = ['AC ADAPTER',	'AC SPARE PARTS',	'ACCESSORIES',	'ACCESSORIES OF PVC ITEMS',	'ADAPTER',	'ADAPTERS',	'ALCOHOLTESTER',	'APPAREL',	'APPAREL EQUIPMENT',	'ARTICLES',	'AUTO',	'AUTO ACCESSORIES',	'AUTO GLASS',	'AUTO PARTS',	'AUTO PARTS(RODS)',	'AUTO SPARE PARTS',	'AUTOGLASS',	'AUTOPARTS',	'BAGS',	'BATTERY',	'BATTERY TESTER',	'BITS',	'BOXES',	'CABLES',	'CAPS',	'CARTONS',	'CASE',	'CHARMS',	'CHEMICALS',	'CLEANING PRODUCTS',	'CLOTHES',	'CLOTHES LINE',	'CLOTHING',	'CLOTHING SHOES BAGS',	'CLOTHING,',	'COMPONENT',	'COMPONENT PARTS',	'COMPONENTS',	'DECORATIVE ITEMS',	'ELECTRONICS',	'EQUIPMENT',	'EXHIBITION GOODS',	'FISH',	'FOOD EQUIPMENT PARTS',	'FOOD STUFF',	'FOOD STUFFS',	'FOODS',	'FOODSTUFF',	'FOODSTUFFS',	'FOOTWEAR',	'FOOTWEAR SHOES',	'FRESH VEGETABLES',	'FUEL ACCESSORIES',	'GARMENTS',	'GENERAL MERCHANDISE STEEL PARTS',	'GIFT BOX',	'GIFTSET',	'GLASS',	'GLASS GIFTS',	'GLASS HANDICRAFT',	'GLASS PIECES',	'GLASS PRODUCTS',	'GLASSES',	'GLASSES CASE',	'GLASSESCASE',	'HANDICRAFT',	'HANDICRAFT PRODUCTS',	'HANDICRAFTS',	'HERBS',	'HOUSEHOLD GOODS',	'INDUSTRIAL PRODUCTS',	'IRON FISH',	'IRON HANDICRAFT ARTICLES',	'IRON POWDER',	'IRON PRODUCTS',	'JEWELLERY ACCESSORIES',	'JEWELRY BOXES',	'JEWELRY PADS',	'LABEL',	'LABELS',	'MACHINE PARTS',	'MACHINERY',	'MACHINERY PARTS',	'MEDICINES',	'METAL',	'METAL ACCESSORIES',	'METAL COMPONENTS',	'METAL DECORATIONS',	'METAL GIFTS',	'METAL MODEL',	'METAL PARTS',	'METAL PRODUCTS',	'METAL SCRAP',	'METAL TOYS',	'METAL WIRES',	'METALSPAREPARTS',	'MIXED COMMODITY',	'MODEL',	'MODEL ACCESSORIES',	'MODEL CARS',	'NB SHOES',	'NW CAPS',	'PARTS',	'PC CASE',	'PE BAGS',	'PERSONAL EFFECTS',	'PERSONAL EFFECTS,',	'PHARMACEUTICAL',	'PHARMACEUTICAL GOODS',	'PHARMACEUTICAL MEDICINES',	'PHARMACEUTICAL PRODUCTS',	'PHARMACEUTICAL RAW MATERIAL',	'PHARMACEUTICAL TABLETS',	'PHARMACEUTICALS',	'PIPES',	'POWDER',	'POWDER LINE',	'POWDER METAL PARTS',	'PP BAGS',	'PP CAPS',	'PRODUCTS',	'PROPELLANT',	'PU BAGS',	'PU LABEL',	'PU SHOES',	'QUILTS',	'RAW MATERIAL',	'RODS',	'SAMPLE',	'SAMPLER',	'SAMPLES',	'SCRAPER',	'SHOES',	'SPARE',	'SPARE GIFT BOX',	'SPARE GLASS',	'SPARE PARTS',	'SPARE PARTS GIFT BOX',	'SPARE PARTS:LIBATTERY',	'SPAREPARTS GIFT BOX',	'SPORTING GOODS',	'STEEL',	'STEEL ARTICLES',	'STEEL BITS',	'STEEL COILS',	'STEEL COMPONENTS',	'STEEL CORES',	'STEEL PALLETS',	'STEEL PARTS',	'STEEL PIPES',	'STEEL PLATES',	'STEEL PRODUCTS',	'STUFFED TOYS',	'TABLETS',	'TB ACCESSORIES',	'TB ACCESSORIES ACCESSORIES',	'TESTER',	'TEXTILE GOODS',	'TEXTILES',	'TIRES',	'TOOLS',	'TOYS',	'TOYS (METAL)',	'TUBING',	'TV',	'VEHICLES',	'WASTE'];
		var unaccept_us = ['ACCESSORIES',	'AUTO PART',	'AUTOPART',	'BATHROOM PRODUCT',	'BRAND',	'CDRE',	'CHEMICAL',	'D6T PART',	'FAK',	'FREIGHT OF ALL KIND',	'GENERAL',	'GENERAL CARGO',	'GIFT',	'HAZARDOUS',	'HOUSEHOLD GOOD',	'METAL',	'MISC',	'MISCELLANEOUS',	'NES',	'NO DESCRIPTION',	'NOI',	'NON-HAZARDOUS',	'NOT OTHERWISE INDICATED',	'NOTE ELSEWHERE SPECIFIED',	'ONLINE RETAILER GOODS',	'ONLINE RETAILER SHIPMENT',	'PALLETIZED SHIPMENT',	'PAPER',	'PLASTIC GOOD',	'PROMOTIONAL ITEM',	'PUMP',	'RIPE',	'RUBBER',	'RUBBER ARTICLE',	'SAMPLE',	'SUPPLIES',	'TOILETRIES',	'TRADE MARK',	'TRADEMARK',	'UNKNOWN',	'VARIOUS',	'XX'];
		var pod = document.getElementById('pod_cd').value.substring(0,2);
		var del = document.getElementById('del_cd').value.substring(0,2);
		try
		{
			var Marks = document.getElementById('mk_desc').value;
			var Desc = document.getElementById('dg_cmdt_desc').value;
			var custom = document.getElementsByName('cstms_desc')[0].value;
			var msg1 = [];
			var msg3 = [];
			for(var j = 0; j < pre.length; j++)
			{
				if(pod == pre[j] || del == pre[j])
				{
					for(var k = 0; k < unaccept.length; k++)
					{
						if(Marks.includes(unaccept[k]) || Desc.includes(unaccept[k]) || custom.includes(unaccept[k]))
						{
							msg1.push(unaccept[k]);
						}
					}
				}
			}
			if(msg1.length > 0)
			{
				alert('Unacceptable commodity found for ICS 2 Europe shipment, kindly clarify with customer :-> \r\n1 . xx Mention the Commodity name which is listed in Unacceptable column xx\r\n2. Not accepted to be only numbers.\r\n3. File extensions not accepted.\r\n4. Not accepted to be only 3 or more equal symbols or letters.\r\n5. Not accepted to be only empty characters.\r\n6. Not accepted to be only special characters.\r\n7. Not accepted to be only special characters and numbers.\r\n' + msg1);
			}
			
			if(pod == "US" || del == "CA")
			{
				for(var k = 0; k < unaccept_us.length; k++)
				{
					if(Marks.includes(unaccept_us[k]) || Desc.includes(unaccept_us[k]) || custom.includes(unaccept_us[k]))
					{
						msg3.push(unaccept_us[k]);
					}
				}
			}
			if(msg3.length > 0)
			{
				alert('Unacceptable commodity found for TP shipment: ' + msg3);
			}
			
			if(pod == "GH" || del == "GH")
			{
				if(Marks.includes("EXCAVATOR") || Desc.includes("EXCAVATOR") || custom.includes("EXCAVATOR"))
				{
					alert("Unacceptable commodity EXCAVATORS found GHANA shipment, kindly clarify with customer");
				}
			}
		}
		catch(err){	}
		
		try
		{
			var cm_desc = "";
			var msg2 = [];
			var msg4 = [];
			for(var j = 0; j < pre.length; j++)
			{
				if(pod == pre[j] || del == pre[j])
				{
					var sheetObject=document.getElementById("t9sheet2");
					var rowCount = sheetObject.querySelectorAll("tr").length
			
					if(document.querySelector("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMLines.GMCell.IBSheetFont1.HideCol1C15"))
					{
						for(var k=2;k<=(rowCount-11);k++)
						{
							var cm_desc = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + k +']/td[18]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
							for(var n = 0; n < unaccept.length; n++)
							{
								if(cm_desc.includes(unaccept[n]))
								{
									msg2.push(unaccept[n]);
								}
							}
						}
					}
				}
			}
			if(msg2.length > 0)
			{
				alert('Unacceptable commodity found for ICS 2 Europe shipment, kindly clarify with customer :-> \r\n1 . xx Mention the Commodity name which is listed in Unacceptable column xx\r\n2. Not accepted to be only numbers.\r\n3. File extensions not accepted.\r\n4. Not accepted to be only 3 or more equal symbols or letters.\r\n5. Not accepted to be only empty characters.\r\n6. Not accepted to be only special characters.\r\n7. Not accepted to be only special characters and numbers.\r\n' + msg2);
			}
			
			if(pod == "US" || del == "CA")
			{
				var sheetObject=document.getElementById("t9sheet2");
				var rowCount = sheetObject.querySelectorAll("tr").length
		
				if(document.querySelector("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMLines.GMCell.IBSheetFont1.HideCol1C15"))
				{
					for(var k=2;k<=(rowCount-11);k++)
					{
						var cm_desc = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + k +']/td[18]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
						for(var n = 0; n < unaccept_us.length; n++)
						{
							if(cm_desc.includes(unaccept_us[n]))
							{
								msg4.push(unaccept_us[n]);
							}
						}
					}
				}
			}
			if(msg4.length > 0)
			{
				alert('Unacceptable commodity found for TP shipment: ' + msg4);
			}
			
			//EXCAVATOR
			sheetObject = document.getElementById("t9sheet2");
			rowCount = sheetObject.querySelectorAll("tr").length
	
			if(document.querySelector("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMLines.GMCell.IBSheetFont1.HideCol1C15"))
			{
				for(var k=2;k<=(rowCount-11);k++)
				{
					var cm_desc = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + k +']/td[18]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
					if(pod == "GH" || del == "GH")
					{
						if(cm_desc.includes("EXCAVATOR"))
						{
							alert("Unacceptable commodity EXCAVATORS found GHANA shipment, kindly clarify with customer");
						}
					}
				}
			}
		}
		catch(err){	}
	}
	catch(err){	}
}

function MnD_hold_Insurance()//
{
	try
	{
		var marks = document.getElementsByName('mk_desc')[0].value;
		var desc = document.getElementsByName('dg_cmdt_desc')[0].value;
		var pod = document.getElementsByName('pod_cd')[0].value.substring(0, 2);
		var del = document.getElementsByName('del_cd')[0].value.substring(0, 2);
		
		if(pod == 'CL' || del == 'CL')
		{
			if(marks.includes('NO LOCAL INSURANCE') || desc.includes('NO LOCAL INSURANCE'))
			{
				alert('Prohibited Clause “NO LOCAL INSURANCE” in M&D tab for Chile shipment found');
			}
		}	
	}
	catch(err){ }
}

function check_zero_Rate()//
{
	try
	{
		var sheetObject=document.getElementById("t10sheet2");
		var rowCount = sheetObject.querySelectorAll("tr").length
		
		if(document.querySelector("#t10sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMPopupEdit.GMCell.IBSheetFont1.GMNoRight.HideCol1C4"))
		{
			for(var i=2;i<=(rowCount-11);i++)
			{
				var rt = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[12]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

				if(rt.replace("<em>","").startsWith("0.00"))
				{
					alert("Found 0 Rate charge. Please Check!");
				}
			}
		}
	}
	catch(err){ }
}

function dummy_repcode_check()//
{
	var dummy_repcode = ["AE102195",	"AE500060",	"AE500061",	"AE500062",	"AE500363",	"AR500034",	"AR500034",	"AR500034",	"AS500001",	"AT500013",	"AU500042",	"AU500043",	"AU500044",	"AU500045",	"AU500046",	"BD500009",	"BD500010",	"BD500011",	"BE500037",	"BG100229",	"BH100257",	"BJ500007",	"BJ500636",	"BN100230",	"BO500016",	"BR500028",	"BR500028",	"BR500035",	"BR500040",	"BR500041",	"BR500042",	"BR500043",	"CA500198",	"CA500198",	"CA500198",	"CA500199",	"CH500039",	"CI200569",	"CI200569",	"CL500087",	"CL500087",	"CL500087",	"CL500087",	"CN508998",	"CN508999",	"CN509000",	"CN509002",	"CN509003",	"CN509005",	"CN509006",	"CN509007",	"CN509008",	"CN509009",	"CN509010",	"CN509011",	"CN509012",	"CN509013",	"CN509014",	"CN509015",	"CN509016",	"CN509017",	"CN509018",	"CN509019",	"CN509020",	"CN509020",	"CN509020",	"CN509020",	"CN511716",	"CO200001",	"CO500015",	"CO500016",	"CR100084",	"CY500032",	"DE500075",	"DE500077",	"DJ500001",	"DK500011",	"DO100592",	"DZ500003",	"EC100855",	"EC500067",	"EC500067",	"EC502702",	"EE100080",	"EG500014",	"EG500015",	"EG500016",	"EG500017",	"EG500018",	"EG500223",	"EG500224",	"EG502386",	"ES217609",	"ES500050",	"ES500051",	"ES500053",	"ES500054",	"ES500055",	"ET2",	"FI500019",	"FJ500001",	"FJ500002",	"FR500083",	"FR500084",	"GB500100",	"GB500101",	"GB500102",	"GB500103",	"GB500104",	"GB511891",	"GE100070",	"GH500004",	"GH500004",	"GR500049",	"GT500002",	"GT500002",	"HK501034",	"HK501035",	"HN100237",	"HN100237",	"HN100237",	"HR500006",	"HU500007",	"ID500117",	"ID500118",	"ID500119",	"ID500120",	"ID500121",	"ID500122",	"ID500123",	"ID500124",	"ID500125",	"ID500126",	"ID500350",	"ID500351",	"ID500352",	"ID500354",	"ID500355",	"ID500356",	"IE500015",	"IE500015",	"IE501389",	"IL500024",	"IL500024",	"IN112006",	"IN500125",	"IN500126",	"IN500127",	"IN500128",	"IN500128",	"IN500129",	"IN500130",	"IN500131",	"IN500132",	"IN500133",	"IN500134",	"IN500135",	"IN500768",	"IN500951",	"IN500952",	"IN500953",	"IN506531",	"IN585259",	"IN585259",	"IN585259",	"IQ500001",	"IT500042",	"JM100131",	"JO500002",	"JP100018",	"JP100534",	"JP104086",	"JP301682",	"JP500129",	"JP500129",	"JP500129",	"JP500129",	"JP500129",	"JP500131",	"JP500131",	"JP500132",	"JP500132",	"JP500134",	"JP500135",	"JP500135",	"JP500135",	"JP500135",	"JP500135",	"JP500506",	"JP500508",	"JP500516",	"JP500516",	"KE500015",	"KE500015",	"KH500030",	"KI500001",	"KR500132",	"KR500133",	"KW500001",	"KW500020",	"LB500079",	"LK500010",	"LS500003",	"LT100137",	"LV100154",	"MA200051",	"MA200051",	"MG500001",	"MH500005",	"MM500004",	"MM500004",	"MT500005",	"MW200041",	"MX102900",	"MY201753",	"MY500062",	"MY500063",	"MY500064",	"MY500342",	"MY500343",	"MY500344",	"MY500346",	"MY500347",	"MY500348",	"MZ500001",	"NA200003",	"NC500001",	"NG500002",	"NG500002",	"NI500002",	"NL500076",	"NO500030",	"NP500008",	"NZ500010",	"NZ500013",	"NZ500022",	"OM500002",	"OM500020",	"OM500021",	"PA500014",	"PA500014",	"PA500014",	"PA500016",	"PE500044",	"PE500088",	"PE500088",	"PF100074",	"PH500026",	"PH500027",	"PH500028",	"PH500029",	"PH500030",	"PH500031",	"PK500021",	"PK500022",	"PL500010",	"PL500011",	"PR500004",	"PT500017",	"PT500018",	"PY500012",	"QA500001",	"RE500002",	"RO500025",	"RU500029",	"RU500030",	"RU500103",	"SA104145",	"SA104146",	"SA500271",	"SB100343",	"SE500012",	"SG500116",	"SG500117",	"SG500118",	"SG500119",	"SI300060",	"SN500009",	"SN502754",	"SV500002",	"TG500001",	"TH500116",	"TH500117",	"TH500118",	"TH500119",	"TN500017",	"TO500001",	"TR500020",	"TR500020",	"TR500021",	"TR500021",	"TR500022",	"TR500022",	"TT500001",	"TW500456",	"TW500457",	"TW500458",	"TZ100528",	"UA500023",	"UG500004",	"US111530",	"US502059",	"US502060",	"US502063",	"US502063",	"US502595",	"US502657",	"US502658",	"US502659",	"US502661",	"US502662",	"US502663",	"US502665",	"UY500002",	"VN500057",	"VN500058",	"VN500059",	"VN500403",	"VN500404",	"VU500001",	"VU500002",	"WS500008",	"ZA500011",	"ZA500012",	"ZA500013",	"ZA500015",	"ZW500007", "CN509723", "CN509722"];
	var sh = document.getElementsByName('sh_cust_cnt_cd')[0].value + document.getElementsByName('sh_cust_seq')[0].value;
	var cn = document.getElementsByName('cn_cust_cnt_cd')[0].value + document.getElementsByName('cn_cust_seq')[0].value;
	var nt = document.getElementsByName('nf_cust_cnt_cd')[0].value + document.getElementsByName('nf_cust_seq')[0].value;
	var an = document.getElementsByName('an_cust_cnt_cd')[0].value + document.getElementsByName('an_cust_seq')[0].value;
	
	try
	{
		for(var i = 0; i < dummy_repcode.length; i++)
		{
			if(sh == dummy_repcode[i] || cn == dummy_repcode[i] || nt == dummy_repcode[i] || an == dummy_repcode[i])
			{
				let comment = prompt("Dummy Rep code found. Please mention action you have taken.\r\n1. Email Sent\r\n2. NCPF Created");
				if (comment == null)
				{
					i = -1;
				}
				else
				{
					if(comment.trim() != "")
					{
						if(comment.toLowerCase().includes("email sent") || comment.toLowerCase().includes("ncpf created"))
						{
							break;
						}
						else
						{
							alert("Invalid comment");
							i = -1;
						}
					}
					else
					{
						alert("Invalid comment");
						i = -1;
					}
				}
			}
		}
	}
	catch(err){	}
}

function dummy_keyword()//
{
	try
	{
		var sh_city = document.getElementById("sh_cust_cty_nm").value;
		var sh_street = document.getElementById("sh_eur_cstms_st_nm").value;
		var cn_city = document.getElementById("cn_cust_cty_nm").value;
		var cn_street = document.getElementById("cn_eur_cstms_st_nm").value;
		var np_city = document.getElementById("nf_cust_cty_nm").value;
		var np_street = document.getElementById("nf_eur_cstms_st_nm").value;
		
		if(sh_city.includes("DUMMY") || sh_street.includes("DUMMY") || cn_city.includes("DUMMY") || cn_street.includes("DUMMY") || np_city.includes("DUMMY") || np_street.includes("DUMMY"))
		{
			alert("Please update valid City/State Street/P.O.Box");
		}
	}
	catch(err){	}
}

function ACID_popup()//
{
	try
	{
		var del = document.getElementById("del_cd").value.substr(0,2);
		
		if(del == "EG")
		{
			alert("Please cross check \"ACID\" details with Import tab & update it before continuation.");
		}
	}
	catch(err){ }
}

function CountryBLIssue()//
{
	try
	{
		document.getElementById("btn_t11Save").disabled = false;
		var BLIssue = document.getElementById("frm_t11sheet1_bl_issue_at").value;
		
		if(BLIssue != "CANBB" && BLIssue != "HKGBB" && BLIssue != "SZPBB" && BLIssue != "ZHOBB")
		{
			for(var i = 0; i < 2; i ++)
			{
				let comment = prompt("Does Consignee Name contains 'TO ORDER ___? (Yes/No)");
				if (comment == null)
				{
					i = -1;
				}
				else
				{
					if(comment.trim().toLowerCase() == "yes")
					{
						alert("3rd Country Issuance is not allowed in case of 'TO ORDER __'");
						document.getElementById("btn_t11Save").disabled = true;
						break;
					}
					else if(comment.trim().toLowerCase() == "no")
					{
						document.getElementById("btn_t11Save").disabled = false;
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
	}
	catch(err){	}
}

function customer_check()//
{
	var cust_code = ['CN253431', 'HK502654', 'CN105223', 'CN304462', 'CN229407'];
	try
	{
		var shpr = document.getElementsByName('sh_cust_cnt_cd')[0].value;
		var shprCode = document.getElementsByName('sh_cust_seq')[0].value;
		var cnee = document.getElementsByName('cn_cust_cnt_cd')[0].value;
		var cneeCode = document.getElementsByName('cn_cust_seq')[0].value;
		var ntfy = document.getElementsByName('nf_cust_cnt_cd')[0].value;
		var ntfyCode = document.getElementsByName('nf_cust_seq')[0].value;
		var fwdr = document.getElementsByName('ff_cust_cnt_cd')[0].value;
		var fwdrCode = document.getElementsByName('ff_cust_seq')[0].value;
		var antfy = document.getElementsByName('an_cust_cnt_cd')[0].value;
		var antfyCode = document.getElementsByName('an_cust_seq')[0].value;
		
		for(var i = 0; i < cust_code.length; i++)
		{
			if(shpr+shprCode == cust_code[i] || cnee+cneeCode == cust_code[i] || ntfy+ntfyCode == cust_code[i] || fwdr+fwdrCode == cust_code[i] || antfy+antfyCode == cust_code[i])
			{
				alert("Sanction customer code "+ cust_code[i]+", DO NOT PROCESS THE BL\r\nCreate Sanction Form for all parties.");
				break;
			}
		}
	}
	catch(err){	}
	
	try
	{
		var pp = document.getElementsByName('frm_p_t10sheet3_cnt_cd')[0].value;
		var ppCode = document.getElementsByName('frm_p_t10sheet3_cust_seq')[0].value;
		var cc = document.getElementsByName('frm_c_t10sheet3_cnt_cd')[0].value;
		var ccCode = document.getElementsByName('frm_c_t10sheet3_cust_seq')[0].value;
		for(var i = 0; i < cust_code.length; i++)
		{
			if(pp+ppCode == cust_code[i] || cc+ccCode == cust_code[i])
			{
				alert("Sanction customer code "+ cust_code[i]+", DO NOT PROCESS THE BL\r\nCreate Sanction Form for all parties.");
				break;
			}
		}
	}
	catch(err){	}
}

function enableMnD()//
{
	try
	{
		document.getElementsByName("btn_t8Save")[0].removeAttribute("disabled");
	}
	catch(err){ }
}

function packageType_Desc()//
{
	try
	{
		var packageType1 = document.getElementsByName("pck_qty")[0].value.replace(",","") ; //Total Package No
		var packageDesc1 = document.getElementsByName("pck_tp_cd")[0].value; // Total Package Desc 
		var packageType2 = document.getElementsByName("pck_cmdt_desc")[0].value.match(/\d/g).join("");  //No of Package
		var packageDesc2 = document.getElementsByName("pck_cmdt_desc")[0].value.replace(packageType2,"").replace(" IN TOTAL",""); //
		var flag = 0;
		
		var pod = document.getElementById("pod_cd").value.substring(0, 2);
		var del = document.getElementById("del_cd").value.substr(0, 2);
		
		if(pod == "NI" || del == "NI")
		{
			if(["PS", "LT", "SX"].includes(packageDesc1) || packageDesc2.includes("PIECE") || packageDesc2.includes("LOT") || packageDesc2.includes("SET"))
			{
				window.prompt("Unacceptable Package type, kindly check and update correct package type");
				document.getElementsByName("btn_t8Save")[0].setAttribute("disabled", true);
				flag = 1;
				return;
			}
		}
		
		if(packageType1 != packageType2)
		{
			window.prompt("Total Package Type mismatch!");
			document.getElementsByName("btn_t8Save")[0].setAttribute("disabled", true);
			flag = 1;
			return;
		}

		const requiredPatterns = {
            "1A": "STEEL DRUM",
			"1B": "ALUMINIUM DRUM",
			"1D": "PLYWOOD DRUM",
			"1G": "FIBRE DRUM",
			"1W": "WOODEN DRUM",
			"2C": "WOODEN BARREL",
			"3A": "STEEL JERRICAN",
			"3H": "PLASTIC JERRICAN",
			"43": "SUPER BULK BAG",
			"4A": "STEEL BOX",
			"4B": "ALUMINIUM BOX",
			"4C": "NATURAL WOOD BOX",
			"4D": "PLYWOOD BOX",
			"4F": "RECONSTITUTED WOOD BOX",
			"4G": "FIBREBOARD BOX",
			"4H": "PLASTIC BOX",
			"5H": "WOVEN PLASTIC BAG",
			"5L": "TEXTILE BAG",
			"5M": "PAPER BAG",
			"6H": "PLASTIC RECEPTACLE COMPOSITE PACKAGING",
			"6P": "GLASS RECEPTACLE COMPOSITE PACKAGING",
			"AB": "FIBRE RECEPTACLE",
			"AC": "PAPER RECEPTACLE",
			"AD": "WOODEN RECEPTACLE",
			"AE": "AEROSOL",
			"AF": "PAPER PALLET",
			"AG": "SHRINKWRAPPED PALLET",
			"AM": "AMPOULE",
			"AT": "ATOMIZER",
			"BA": "BARREL",
			"BB": "BOBBIN",
			"BC": "BOTTLERACK",
			"BD": "BOARD",
			"BE": "BUNDLE",
			"BF": "BALLOON",
			"BG": "BAG",
			"BH": "BUNCH",
			"BI": "BIN",
			"BJ": "BUCKET",
			"BK": "BASKET",
			"BL": "BALE",
			"BM": "BASIN",
			"BO": "BOTTLE",
			"BQ": "PROTECTED CYLINDRICAL BOTTLE",
			"BR": "BAR",
			"BT": "BOLT",
			"BU": "BUTT",
			"BX": "BOX",
			"CA": "RECTANGULAR CAN",
			"CB": "BEER CRATE",
			"CC": "CHURN",
			"CD": "CAN",
			"CE": "CREEL",
			"CF": "COFFER",
			"CG": "CAGE",
			"CH": "CHEST",
			"CI": "CANISTER",
			"CJ": "COFFIN",
			"CK": "CASK",
			"CL": "COIL",
			"CM": "CARD",
			"CN": "CONTAINER",
			"CO": "NON-PROTECTED CARBOY",
			"CR": "CRATE",
			"CS": "CASE",
			"CT": "CARTON",
			"CU": "CUP",
			"CV": "COVER",
			"CY": "CYLINDER",
			"CZ": "CANVAS",
			"DB": "WOODEN CRATE",
			"DH": "EUROBOX",
			"DI": "IRON DRUM",
			"DR": "DRUM",
			"EC": "PLASTIC BAG",
			"EE": "WOODEN CASE",
			"EF": "CARDBOARD PALLET",
			"EN": "ENVELOPE",
			"FC": "FRUIT CRATE",
			"FD": "FRAMED CRATE",
			"FE": "FLEXITANK",
			"FI": "FIRKIN",
			"FL": "FLASK",
			"FO": "FOOTLOCKER",
			"FP": "FILMPACK",
			"FR": "FRAME",
			"GB": "GAS BOTTLE",
			"GI": "GIRDER",
			"HG": "HOGSHEAD",
			"HR": "HAMPER",
			"IE": "BLOCK",
			"IH": "PLASTIC DRUM",
			"IN": "INGOT",
			"JC": "JERRICAN",
			"JG": "JUG",
			"JR": "JAR",
			"JT": "JUTEBAG",
			"KG": "KEG",
			"LG": "LOG",
			"LT": "LOT",
			"LV": "LIFT VAN",
			"MB": "MULTIPLE BAG",
			"MC": "MILK CRATE",
			"MS": "MULTIWALL SACK",
			"MT": "MAT",
			"MX": "MATCH BOX",
			"NS": "NEST",
			"NT": "NET",
			"PA": "PACKET",
			"PB": "BOX PALLET",
			"PC": "PARCEL",
			"PD": "WOODEN PALLET",
			"PH": "PITCHER",
			"PI": "PIPE",
			"PJ": "PUNNET",
			"PK": "PACKAGE",
			"PL": "PAIL",
			"PN": "PLANK",
			"PO": "POUCH",
			"PS": "PIECE",
			"PT": "POT",
			"PU": "TRAY",
			"PX": "PALLET",
			"RD": "ROD",
			"RG": "RING",
			"RK": "RACK",
			"RL": "REEL",
			"RO": "ROLL",
			"RT": "REDNET",
			"SA": "SACK",
			"SB": "SLAB",
			"SC": "SHALLOW CRATE",
			"SD": "SPINDLE",
			"SE": "SEA-CHEST",
			"SH": "SACHET",
			"SI": "SKID",
			"SK": "SKELETON CASE",
			"SL": "SLIPSHEET",
			"SM": "SHEETMETAL",
			"SO": "SPOOL",
			"SS": "STEEL CASE",
			"ST": "SHEET",
			"SU": "SUITCASE",
			"SW": "SHRINKWRAPPED",
			"SX": "SET",
			"TB": "TUB",
			"TC": "TEA-CHEST",
			"TD": "COLLAPSIBLE TUBE",
			"TK": "TANK",
			"TN": "TIN",
			"TO": "TUN",
			"TR": "TRUNK",
			"TS": "TRUSS",
			"TT": "TOTE",
			"TU": "TUBE",
			"UN": "UNIT",
			"VA": "VAT",
			"VI": "VIAL",
			"VK": "VANPACK",
			"VO": "BULK",
			"VP": "VACUUMPACKED",
			"WB": "WICKERBOTTLE",
			"WR": "WOODEN REEL",
			"XD": "PLASTICS FILM BAG",
			"YB": "STEEL CRATE",
			"ZB": "JUMBO BAG"
        };
		
		if (requiredPatterns[packageDesc1] && !packageDesc2.includes(requiredPatterns[packageDesc1])) 
		{
            window.prompt("Package description mismatch!");
            document.getElementsByName("btn_t8Save")[0].setAttribute("disabled", true);
			flag = 1;
            return;
        }

		if (packageDesc1 === "NE") 
		{
            if (!packageDesc2.trim().includes("UNPACKED") && !packageDesc2.trim().includes("UNPACKAGED")) 
			{
                window.prompt('Package description mismatch');
                document.getElementsByName("btn_t8Save")[0].setAttribute("disabled", true);
				flag = 1;
                return;
            }
        }
		
		if(flag == 0)
		{
			document.getElementsByName("btn_t8Save")[0].removeAttribute("disabled");
		}
	}
	catch(err){	}
}

function Sanction_RU_BY()//
{
	try
	{
		var sheetObject=document.getElementById("t10sheet2");
		var rowCount = sheetObject.querySelectorAll("tr").length
		
		if(document.querySelector("#t10sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMPopupEdit.GMCell.IBSheetFont1.GMNoRight.HideCol1C4"))
		{
			for(var i=2;i<=(rowCount-11);i++)
			{
				var rt = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[25]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

				if(rt.replace("<em>","").startsWith("RU") || rt.replace("<em>","").startsWith("BY"))
				{
					alert("Need to do sanction screening and create sanction form (SH,CNEE,NTFY,ANTFY,FWD and 3RD payer party). Place of Payment (POP) Third Country in (RU) & Belarus (BY) Countries !");
				}
			}
		}
	}
	catch(err){ }
}

function BLIssueTransitClause()//
{
	try
	{
		var flag = 0;
		var tr = ["TRANSIT", "IN-TRANSIT", "IN TRANSIT", "TRANSITO"];
		//var mali_tr = ["TRANSIT TO MALI", "IN-TRANSIT TO MALI", "INTRANSIT TO MALI"];
		var fdest = document.getElementsByName("frm_t11sheet1_final_dest")[0].value;
		for(i=0; i<tr.length; i++)
		{
			if(fdest == tr[i])
			{
				alert("Found Transit keyword (BL Issue Tab), Kindly follow transit clause procedure: " + tr[i]);
				break;
			}
		}
		/*for(i=0; i<mali_tr.length; i++)
		{
			if(fdest == mali_tr[i])
			{
				alert("Mali Transit Clause is not allowed: " + mali_tr[i]);
				break;
			}
		}*/
	}
	catch(err){ }
}

function MnDTransitClause()//
{
	try
	{
		var tr = ["TRANSIT", "IN-TRANSIT", "IN TRANSIT", "TRANSITO"];
		var mali_tr = ["TRANSIT TO MALI", "IN-TRANSIT TO MALI", "INTRANSIT TO MALI"];
		var marks = document.getElementsByName("mk_desc")[0].value;
		var longDesc = document.getElementsByName("dg_cmdt_desc")[0].value;
		for(i=0; i<tr.length; i++)
		{
			if(marks == tr[i] || longDesc == tr[i])
			{
				alert("Found Transit keyword (M&D Tab), Kindly follow transit clause procedure: " + tr[i]);
				break;
			}
		}
		for(i=0; i<mali_tr.length; i++)
		{
			if(marks == mali_tr[i] || longDesc == mali_tr[i])
			{
				alert("Mali Transit Clause is not allowed: " + mali_tr[i]);
				break;
			}
		}
	}
	catch(err){ }
}

function CustTransitClause()//
{
	try
	{
		var tr = ["TRANSIT", "IN-TRANSIT", "IN TRANSIT", "TRANSITO"];
		//var mali_tr = ["TRANSIT TO MALI", "IN-TRANSIT TO MALI", "INTRANSIT TO MALI"];
		var shName = document.getElementsByName("sh_cust_nm")[0].value;
		var shAdd = document.getElementsByName("sh_cust_addr")[0].value;
		var cnName = document.getElementsByName("cn_cust_nm")[0].value;
		var cnAdd = document.getElementsByName("cn_cust_addr")[0].value;
		var nfName = document.getElementsByName("nf_cust_nm")[0].value;
		var nfAdd = document.getElementsByName("nf_cust_addr")[0].value;
		var ffName = document.getElementsByName("ff_cust_nm")[0].value;
		var anfName = document.getElementsByName("an_cust_nm")[0].value;
		var expRef = document.getElementsByName("ex_cust_nm")[0].value;
		for(i=0; i<tr.length; i++)
		{
			if(shName == tr[i] || shAdd == tr[i] || cnName == tr[i] || cnAdd == tr[i] || nfName == tr[i] || nfAdd == tr[i] || ffName == tr[i] || anfName == tr[i] || expRef == tr[i])
			{
				alert("Found Transit keyword (Customer Tab), Kindly follow transit clause procedure: " + tr[i]);
				break;
			}
		}
		/*for(i=0; i<mali_tr.length; i++)
		{
			if(shName == mali_tr[i] || shAdd == mali_tr[i] || cnName == mali_tr[i] || cnAdd == mali_tr[i] || nfName == mali_tr[i] || nfAdd == mali_tr[i] || ffName == mali_tr[i] || anfName == mali_tr[i] || expRef == mali_tr[i])
			{
				alert("Mali Transit Clause is not allowed: " + mali_tr[i]);
				break;
			}
		}*/
	}
	catch(err){ }
}

function custProhibited()//
{
	try
	{
		var custRemark = document.getElementsByName('xter_rmk')[0].value;
		var ProWords = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QAHTANIYAH",	"AL QUNAITRA",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEKSANDROVSK",	"ALEKSANDROVSKAYA KREPOST",	"ALEP",	"ALEPO",	"ALEPPO",	"ALEPPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALOPEX",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"ALUSTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHÍA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MÅH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BAZARGAN",	"BAZIRGAN",	"BELARUS",	"BELOGORSK",	"BEZIRGAN",	"BILOGHIRSK",	"BILOGIRSK",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABAÑAS",	"CAIBARIÉN",	"CAMAGÜEY",	"CANKOY",	"CÁRDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHERSON",	"CHERSONESOS",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUANT",	"CUBA",	"CUBAN",	"CUBCA",	"CUBHO",	"CUBOG",	"CUBOQ",	"CUBUF",	"CUBWW",	"CUBYM",	"CUCAB",	"CUCAI",	"CUCAR",	"CUCAS",	"CUCCC",	"CUCEI",	"CUCFG",	"CUCMW",	"CUCYO",	"CUGER",	"CUGIB",	"CUGUB",	"CUGYB",	"CUHAV",	"CUHOG",	"CUICR",	"CUIDS",	"CUJUC",	"CULCL",	"CUMAR",	"CUMEL",	"CUMIR",	"CUMJG",	"CUMLG",	"CUMNT",	"CUMOA",	"CUMOR",	"CUMZO",	"CUNIQ",	"CUNVT",	"CUPAL",	"CUPAS",	"CUPIL",	"CUPPA",	"CUPST",	"CUPTA",	"CUQCO",	"CUQMA",	"CUQPD",	"CUQSN",	"CURSL",	"CUSCS",	"CUSCU",	"CUSDT",	"CUSNJ",	"CUSNU",	"CUSZJ",	"CUTAN",	"CUTDZ",	"CUTND",	"CUUMA",	"CUUPA",	"CUUSS",	"CUVDO",	"CUVIT",	"CUVRA",	"CUVTU",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAA AL-BALAD",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESKI QIRIM",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FOROS",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"GURZUF",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"HUNGNAM-GUYOK",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"IMAM KHOMEINI INTERNATIONAL APT",	"IMAM KHOMEINI PT",	"INKERMAN",	"IRABD",	"IRABR",	"IRACP",	"IRACZ",	"IRADU",	"IRAEU",	"IRAFZ",	"IRAHR",	"IRAKW",	"IRAMD",	"IRAMR",	"IRAN",	"IRAN SHAHR",	"IRARA",	"IRASA",	"IRASR",	"IRAWZ",	"IRAZD",	"IRBAH",	"IRBAJ",	"IRBAM",	"IRBAZ",	"IRBBL",	"IRBDH",	"IRBIK",	"IRBJB",	"IRBKK",	"IRBKM",	"IRBMR",	"IRBND",	"IRBNH",	"IRBOR",	"IRBPA",	"IRBRG",	"IRBRJ",	"IRBSM",	"IRBSR",	"IRBUZ",	"IRBXR",	"IRCI3",	"IRCKT",	"IRCYT",	"IRDAM",	"IRDAY",	"IRDEF",	"IRDEH",	"IRDGN",	"IRDJU",	"IRDOG",	"IRESF",	"IRESL",	"IRFAZ",	"IRFKR",	"IRFR7",	"IRGBT",	"IRGCH",	"IRGHA",	"IRGNH",	"IRGSM",	"IRHDM",	"IRHDR",	"IRHEJ",	"IRHOR",	"IRIAQ",	"IRIFH",	"IRIFN",	"IRIHR",	"IRIIL",	"IRIKA",	"IRIMH",	"IRIQH",	"IRJAK",	"IRJBD",	"IRJRT",	"IRKAL",	"IRKAS",	"IRKER",	"IRKHA",	"IRKHD",	"IRKHK",	"IRKHO",	"IRKHS",	"IRKHY",	"IRKIH",	"IRKMS",	"IRKNR",	"IRKOR",	"IRKSH",	"IRLEH",	"IRLFM",	"IRLIN",	"IRLRR",	"IRLVP",	"IRMEB",	"IRMHD",	"IRMLK",	"IRMMH",	"IRMRX",	"IRNEK",	"IRNKA",	"IRNKW",	"IRNSB",	"IRNSH",	"IRNUJ",	"IROMH",	"IROMI",	"IROSM",	"IRPFQ",	"IRPGU",	"IRPSR",	"IRPYK",	"IRQAZ",	"IRQHK",	"IRQKC",	"IRQMJ",	"IRQSH",	"IRQSM",	"IRQUM",	"IRQYS",	"IRRAS",	"IRRBA",	"IRRJN",	"IRRTM",	"IRRZR",	"IRSAB",	"IRSAN",	"IRSAZ",	"IRSBR",	"IRSDG",	"IRSEK",	"IRSEM",	"IRSFN",	"IRSHA",	"IRSHS",	"IRSIX",	"IRSMW",	"IRSRA",	"IRSRJ",	"IRSRP",	"IRSRY",	"IRSVH",	"IRSXI",	"IRSYZ",	"IRTAJ",	"IRTBZ",	"IRTCX",	"IRTEW",	"IRTHR",	"IRTMB",	"IRUIM",	"IRUZA",	"IRWPS",	"IRXBJ",	"IRYAS",	"IRZAH",	"IRZAN",	"IRZBR",	"IRZVI",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JÚCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KALAMITA",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARASUBAZAR",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOKTEBEL",	"KOZLOV",	"KPCCD",	"KPCHO",	"KPFNJ",	"KPGEN",	"KPHAE",	"KPHGM",	"KPKSN",	"KPNAM",	"KPODA",	"KPPNG",	"KPREM",	"KPRIW",	"KPRJN",	"KPSAM",	"KPSGN",	"KPSGO",	"KPSII",	"KPSIN",	"KPSON",	"KPTCH",	"KPWON",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATAKIA",	"LATTAKIA",	"LATTAKIA",	"LAVAN",	"LEREDI",	"LEUKOPOLIS",	"LEVKOPOL",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAHSHAHR CITY",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHAD",	"MASHHAD",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MESHED",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORÓN",	"MOSUL",	"NAJIN",	"NAKHJAVÅN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOVOFEDORIVKA",	"NOVOFEDOROVKA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OLEKSANDRIVSK",	"OLEKSANDRIVSKA FORTETSIA",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PARTENIT",	"PAYAM",	"PAYAM APT",	"PEREKOP",	"PERICO",	"PERSEPOLIS",	"PILÓN",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATÍ",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QARASUVBAZAR",	"QASABEHE KARAJ",	"QASABEHEKARAJ",	"QASABIHI KARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TÁNAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKI",	"SAKY",	"SAKY RAION",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SAQ RAYONI",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SCOLKINO",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHID RAJAEE PT",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHCHOLKINO",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SOLKHAT",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STAROI KRIM",	"STARYI KRYM",	"SUDAC",	"SUDAGH",	"SUDAK",	"SUDAQ",	"SWEIDA",	"SYALD",	"SYALP",	"SYARW",	"SYBAN",	"SYBEN",	"SYDAM",	"SYDEZ",	"SYHMS",	"SYKAC",	"SYLTK",	"SYMFEROPIL",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"SYPMS",	"SYQDR",	"SYQHM",	"SYQSW",	"SYRIA",	"SYSOR",	"SYTAO",	"SYTTS",	"SYWST",	"SYYBD",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TÁNAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"UAARM",	"UABAP",	"UACRI",	"UAFEO",	"UAKEH",	"UAKHE",	"UAKRA",	"UASIP",	"UASVP",	"UAYAL",	"UAZKA",	"UAZPR",	"UAZUI",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIA",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPORIZHZHYA",	"ZAPORIZZJA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+850",	"+963",	"+98"];  
		
		for(var i = 0; i <ProWords.length; i++)
		{
			if (custRemark.replace("\r\n"," ").includes(ProWords[i]))
			{
				alert("Prohibited Country found in Cust Remark. " + ProWords[i]);
				break;
			}
		}
	}
	catch(err){ }
}

function intProhibited()//
{
	try
	{
		var intRemark = document.getElementsByName('inter_rmk')[0].value;
		var ProWords = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QAHTANIYAH",	"AL QUNAITRA",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEKSANDROVSK",	"ALEKSANDROVSKAYA KREPOST",	"ALEP",	"ALEPO",	"ALEPPO",	"ALEPPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALOPEX",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"ALUSTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHÍA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MÅH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BAZARGAN",	"BAZIRGAN",	"BELARUS",	"BELOGORSK",	"BEZIRGAN",	"BILOGHIRSK",	"BILOGIRSK",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABAÑAS",	"CAIBARIÉN",	"CAMAGÜEY",	"CANKOY",	"CÁRDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHERSON",	"CHERSONESOS",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUANT",	"CUBA",	"CUBAN",	"CUBCA",	"CUBHO",	"CUBOG",	"CUBOQ",	"CUBUF",	"CUBWW",	"CUBYM",	"CUCAB",	"CUCAI",	"CUCAR",	"CUCAS",	"CUCCC",	"CUCEI",	"CUCFG",	"CUCMW",	"CUCYO",	"CUGER",	"CUGIB",	"CUGUB",	"CUGYB",	"CUHAV",	"CUHOG",	"CUICR",	"CUIDS",	"CUJUC",	"CULCL",	"CUMAR",	"CUMEL",	"CUMIR",	"CUMJG",	"CUMLG",	"CUMNT",	"CUMOA",	"CUMOR",	"CUMZO",	"CUNIQ",	"CUNVT",	"CUPAL",	"CUPAS",	"CUPIL",	"CUPPA",	"CUPST",	"CUPTA",	"CUQCO",	"CUQMA",	"CUQPD",	"CUQSN",	"CURSL",	"CUSCS",	"CUSCU",	"CUSDT",	"CUSNJ",	"CUSNU",	"CUSZJ",	"CUTAN",	"CUTDZ",	"CUTND",	"CUUMA",	"CUUPA",	"CUUSS",	"CUVDO",	"CUVIT",	"CUVRA",	"CUVTU",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAA AL-BALAD",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESKI QIRIM",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FOROS",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"GURZUF",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"HUNGNAM-GUYOK",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"IMAM KHOMEINI INTERNATIONAL APT",	"IMAM KHOMEINI PT",	"INKERMAN",	"IRABD",	"IRABR",	"IRACP",	"IRACZ",	"IRADU",	"IRAEU",	"IRAFZ",	"IRAHR",	"IRAKW",	"IRAMD",	"IRAMR",	"IRAN",	"IRAN SHAHR",	"IRARA",	"IRASA",	"IRASR",	"IRAWZ",	"IRAZD",	"IRBAH",	"IRBAJ",	"IRBAM",	"IRBAZ",	"IRBBL",	"IRBDH",	"IRBIK",	"IRBJB",	"IRBKK",	"IRBKM",	"IRBMR",	"IRBND",	"IRBNH",	"IRBOR",	"IRBPA",	"IRBRG",	"IRBRJ",	"IRBSM",	"IRBSR",	"IRBUZ",	"IRBXR",	"IRCI3",	"IRCKT",	"IRCYT",	"IRDAM",	"IRDAY",	"IRDEF",	"IRDEH",	"IRDGN",	"IRDJU",	"IRDOG",	"IRESF",	"IRESL",	"IRFAZ",	"IRFKR",	"IRFR7",	"IRGBT",	"IRGCH",	"IRGHA",	"IRGNH",	"IRGSM",	"IRHDM",	"IRHDR",	"IRHEJ",	"IRHOR",	"IRIAQ",	"IRIFH",	"IRIFN",	"IRIHR",	"IRIIL",	"IRIKA",	"IRIMH",	"IRIQH",	"IRJAK",	"IRJBD",	"IRJRT",	"IRKAL",	"IRKAS",	"IRKER",	"IRKHA",	"IRKHD",	"IRKHK",	"IRKHO",	"IRKHS",	"IRKHY",	"IRKIH",	"IRKMS",	"IRKNR",	"IRKOR",	"IRKSH",	"IRLEH",	"IRLFM",	"IRLIN",	"IRLRR",	"IRLVP",	"IRMEB",	"IRMHD",	"IRMLK",	"IRMMH",	"IRMRX",	"IRNEK",	"IRNKA",	"IRNKW",	"IRNSB",	"IRNSH",	"IRNUJ",	"IROMH",	"IROMI",	"IROSM",	"IRPFQ",	"IRPGU",	"IRPSR",	"IRPYK",	"IRQAZ",	"IRQHK",	"IRQKC",	"IRQMJ",	"IRQSH",	"IRQSM",	"IRQUM",	"IRQYS",	"IRRAS",	"IRRBA",	"IRRJN",	"IRRTM",	"IRRZR",	"IRSAB",	"IRSAN",	"IRSAZ",	"IRSBR",	"IRSDG",	"IRSEK",	"IRSEM",	"IRSFN",	"IRSHA",	"IRSHS",	"IRSIX",	"IRSMW",	"IRSRA",	"IRSRJ",	"IRSRP",	"IRSRY",	"IRSVH",	"IRSXI",	"IRSYZ",	"IRTAJ",	"IRTBZ",	"IRTCX",	"IRTEW",	"IRTHR",	"IRTMB",	"IRUIM",	"IRUZA",	"IRWPS",	"IRXBJ",	"IRYAS",	"IRZAH",	"IRZAN",	"IRZBR",	"IRZVI",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JÚCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KALAMITA",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARASUBAZAR",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOKTEBEL",	"KOZLOV",	"KPCCD",	"KPCHO",	"KPFNJ",	"KPGEN",	"KPHAE",	"KPHGM",	"KPKSN",	"KPNAM",	"KPODA",	"KPPNG",	"KPREM",	"KPRIW",	"KPRJN",	"KPSAM",	"KPSGN",	"KPSGO",	"KPSII",	"KPSIN",	"KPSON",	"KPTCH",	"KPWON",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATAKIA",	"LATTAKIA",	"LATTAKIA",	"LAVAN",	"LEREDI",	"LEUKOPOLIS",	"LEVKOPOL",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAHSHAHR CITY",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHAD",	"MASHHAD",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MESHED",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORÓN",	"MOSUL",	"NAJIN",	"NAKHJAVÅN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOVOFEDORIVKA",	"NOVOFEDOROVKA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OLEKSANDRIVSK",	"OLEKSANDRIVSKA FORTETSIA",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PARTENIT",	"PAYAM",	"PAYAM APT",	"PEREKOP",	"PERICO",	"PERSEPOLIS",	"PILÓN",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATÍ",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QARASUVBAZAR",	"QASABEHE KARAJ",	"QASABEHEKARAJ",	"QASABIHI KARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TÁNAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKI",	"SAKY",	"SAKY RAION",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SAQ RAYONI",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SCOLKINO",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHID RAJAEE PT",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHCHOLKINO",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SOLKHAT",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STAROI KRIM",	"STARYI KRYM",	"SUDAC",	"SUDAGH",	"SUDAK",	"SUDAQ",	"SWEIDA",	"SYALD",	"SYALP",	"SYARW",	"SYBAN",	"SYBEN",	"SYDAM",	"SYDEZ",	"SYHMS",	"SYKAC",	"SYLTK",	"SYMFEROPIL",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"SYPMS",	"SYQDR",	"SYQHM",	"SYQSW",	"SYRIA",	"SYSOR",	"SYTAO",	"SYTTS",	"SYWST",	"SYYBD",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TÁNAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"UAARM",	"UABAP",	"UACRI",	"UAFEO",	"UAKEH",	"UAKHE",	"UAKRA",	"UASIP",	"UASVP",	"UAYAL",	"UAZKA",	"UAZPR",	"UAZUI",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIA",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPORIZHZHYA",	"ZAPORIZZJA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+850",	"+963",	"+98"];  
		
		for(var i = 0; i < ProWords.length; i++)
		{
			if (intRemark.replace("\r\n", " ").includes(ProWords[i]))
			{
				alert("Prohibited Country found in Int Remark. " + ProWords[i]);
				break;
			}
		}
	}
	catch(err){ }
}

function custDueDeligence()//
{
	try
	{
		var custRemark = document.getElementsByName('xter_rmk')[0].value;
		var duecustrem = ["AFGHANISTAN",	"BAIKAL",	"BALTIC",	"BOSNIA",	"BURMA",	"BURUNDI",	"CENTRAL AFRICAN REPUBLIC",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FEDERATSIYA",	"FINLAND",	"GEORGIA",	"HAITI",	"HERZEGOVINA",	"HIKVISION",	"IRAQ",	"IRKUTSK",	"JORDAN",	"KALININGRAD",	"KIEW",	"KREMLIN",	"LADOGA",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MOSCOW",	"MURMANSK",	"MYANMAR",	"NICARAGUA",	"NOVOROSSIYSK",	"PETERS",	"POTI",	"ROSSIJA",	"ROSSIYA",	"ROSSIYSKAYA",	"S.F.S.R.",	"SERBIA",	"SIBERIA",	"SOCIALIST",	"SOMALIA",	"SOUTH SUDAN",	"SOVIET",	"ST PETERSBURG",	"SUDAN",	"TUNISIA",	"TURKEY",	"U.S.S.R",	"UKRAINE",	"UNITED ARAB EMIRATES",	"USSR",	"VENEZUELA",	"VLADIVOSTOCK",	"VOLGA",	"YEMEN",	"ZIMBABWE",	"+358",	"+370",	"+371",	"+372",	"+380",	"+995"];
		
		for(var i = 0; i < duecustrem.length; i++)
		{
			if (custRemark.replace("\r\n", " ").includes(duecustrem[i]))
			{
				alert("Due Diligence Country found in Cust Remark. " + duecustrem[i]);
				break;
			}
		}
	}
	catch(err){ }
}

function intDueDeligence()//
{
	try
	{
		var intRemark = document.getElementsByName('inter_rmk')[0].value;
		var dueintrem = ["AFGHANISTAN",	"BAIKAL",	"BALTIC",	"BOSNIA",	"BURMA",	"BURUNDI",	"CENTRAL AFRICAN REPUBLIC",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FEDERATSIYA",	"FINLAND",	"GEORGIA",	"HAITI",	"HERZEGOVINA",	"HIKVISION",	"IRAQ",	"IRKUTSK",	"JORDAN",	"KALININGRAD",	"KIEW",	"KREMLIN",	"LADOGA",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MOSCOW",	"MURMANSK",	"MYANMAR",	"NICARAGUA",	"NOVOROSSIYSK",	"PETERS",	"POTI",	"ROSSIJA",	"ROSSIYA",	"ROSSIYSKAYA",	"S.F.S.R.",	"SERBIA",	"SIBERIA",	"SOCIALIST",	"SOMALIA",	"SOUTH SUDAN",	"SOVIET",	"ST PETERSBURG",	"SUDAN",	"TUNISIA",	"TURKEY",	"U.S.S.R",	"UKRAINE",	"UNITED ARAB EMIRATES",	"USSR",	"VENEZUELA",	"VLADIVOSTOCK",	"VOLGA",	"YEMEN",	"ZIMBABWE",	"+358",	"+370",	"+371",	"+372",	"+380",	"+995"];
		
		for(var i = 0; i < dueintrem.length; i++)
		{
			if (intRemark.replace("\r\n"," ").includes(dueintrem[i]))
			{
				alert("Due Diligence Country found in Int Remark. " + dueintrem[i]);
				break;
			}
		}
	}
	catch(err){ }
}

function bkgDueDiligencePopup()//
{
	try
	{
		var pod = document.getElementsByName('bkg_pod_cd')[0].value.substr(0,2);
		var del = document.getElementsByName('bkg_del_cd')[0].value.substr(0,2);
		var SHCode = document.getElementsByName('s_cust_cnt_cd')[0].value;
		var CNCode = document.getElementsByName('c_cust_cnt_cd')[0].value;
		var CNPTCode = document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].value;
		var ct = ["AE",	"AF",	"BA",	"BI",	"CD",	"CF",	"EE",	"EG",	"FI",	"GE",	"HT",	"IQ",	"JO",	"LB",	"LT",	"LV",	"LY",	"ML",	"MM",	"NI",	"RS",	"SD",	"SO",	"SS",	"TN",	"TR",	"UA",	"VE",	"YE",	"ZW"];
		
		
		if(pod != null && del != null)
		{
			for(i=0; i<ct.length; i++)
			{
				if(pod == ct[i] || del == ct[i] || SHCode == ct[i] || CNCode == ct[i] || CNPTCode == ct[i])
				{
					alert("Due Diligence Country. Update the screenshot in AppSheet : " + ct[i]);
					break;
				}
			}
		}
	}
	catch(err){ }
}

function holdBLIssuePop()//
{
	try
	{
		var FDest = document.getElementsByName('frm_t11sheet1_final_dest')[0].value;
		var ProWords = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QAHTANIYAH",	"AL QUNAITRA",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEKSANDROVSK",	"ALEKSANDROVSKAYA KREPOST",	"ALEP",	"ALEPO",	"ALEPPO",	"ALEPPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALOPEX",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"ALUSTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHÍA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MÅH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BAZARGAN",	"BAZIRGAN",	"BELARUS",	"BELOGORSK",	"BEZIRGAN",	"BILOGHIRSK",	"BILOGIRSK",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABAÑAS",	"CAIBARIÉN",	"CAMAGÜEY",	"CANKOY",	"CÁRDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHERSON",	"CHERSONESOS",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUANT",	"CUBA",	"CUBAN",	"CUBCA",	"CUBHO",	"CUBOG",	"CUBOQ",	"CUBUF",	"CUBWW",	"CUBYM",	"CUCAB",	"CUCAI",	"CUCAR",	"CUCAS",	"CUCCC",	"CUCEI",	"CUCFG",	"CUCMW",	"CUCYO",	"CUGER",	"CUGIB",	"CUGUB",	"CUGYB",	"CUHAV",	"CUHOG",	"CUICR",	"CUIDS",	"CUJUC",	"CULCL",	"CUMAR",	"CUMEL",	"CUMIR",	"CUMJG",	"CUMLG",	"CUMNT",	"CUMOA",	"CUMOR",	"CUMZO",	"CUNIQ",	"CUNVT",	"CUPAL",	"CUPAS",	"CUPIL",	"CUPPA",	"CUPST",	"CUPTA",	"CUQCO",	"CUQMA",	"CUQPD",	"CUQSN",	"CURSL",	"CUSCS",	"CUSCU",	"CUSDT",	"CUSNJ",	"CUSNU",	"CUSZJ",	"CUTAN",	"CUTDZ",	"CUTND",	"CUUMA",	"CUUPA",	"CUUSS",	"CUVDO",	"CUVIT",	"CUVRA",	"CUVTU",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAA AL-BALAD",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESKI QIRIM",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FOROS",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"GURZUF",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"HUNGNAM-GUYOK",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"IMAM KHOMEINI INTERNATIONAL APT",	"IMAM KHOMEINI PT",	"INKERMAN",	"IRABD",	"IRABR",	"IRACP",	"IRACZ",	"IRADU",	"IRAEU",	"IRAFZ",	"IRAHR",	"IRAKW",	"IRAMD",	"IRAMR",	"IRAN",	"IRAN SHAHR",	"IRARA",	"IRASA",	"IRASR",	"IRAWZ",	"IRAZD",	"IRBAH",	"IRBAJ",	"IRBAM",	"IRBAZ",	"IRBBL",	"IRBDH",	"IRBIK",	"IRBJB",	"IRBKK",	"IRBKM",	"IRBMR",	"IRBND",	"IRBNH",	"IRBOR",	"IRBPA",	"IRBRG",	"IRBRJ",	"IRBSM",	"IRBSR",	"IRBUZ",	"IRBXR",	"IRCI3",	"IRCKT",	"IRCYT",	"IRDAM",	"IRDAY",	"IRDEF",	"IRDEH",	"IRDGN",	"IRDJU",	"IRDOG",	"IRESF",	"IRESL",	"IRFAZ",	"IRFKR",	"IRFR7",	"IRGBT",	"IRGCH",	"IRGHA",	"IRGNH",	"IRGSM",	"IRHDM",	"IRHDR",	"IRHEJ",	"IRHOR",	"IRIAQ",	"IRIFH",	"IRIFN",	"IRIHR",	"IRIIL",	"IRIKA",	"IRIMH",	"IRIQH",	"IRJAK",	"IRJBD",	"IRJRT",	"IRKAL",	"IRKAS",	"IRKER",	"IRKHA",	"IRKHD",	"IRKHK",	"IRKHO",	"IRKHS",	"IRKHY",	"IRKIH",	"IRKMS",	"IRKNR",	"IRKOR",	"IRKSH",	"IRLEH",	"IRLFM",	"IRLIN",	"IRLRR",	"IRLVP",	"IRMEB",	"IRMHD",	"IRMLK",	"IRMMH",	"IRMRX",	"IRNEK",	"IRNKA",	"IRNKW",	"IRNSB",	"IRNSH",	"IRNUJ",	"IROMH",	"IROMI",	"IROSM",	"IRPFQ",	"IRPGU",	"IRPSR",	"IRPYK",	"IRQAZ",	"IRQHK",	"IRQKC",	"IRQMJ",	"IRQSH",	"IRQSM",	"IRQUM",	"IRQYS",	"IRRAS",	"IRRBA",	"IRRJN",	"IRRTM",	"IRRZR",	"IRSAB",	"IRSAN",	"IRSAZ",	"IRSBR",	"IRSDG",	"IRSEK",	"IRSEM",	"IRSFN",	"IRSHA",	"IRSHS",	"IRSIX",	"IRSMW",	"IRSRA",	"IRSRJ",	"IRSRP",	"IRSRY",	"IRSVH",	"IRSXI",	"IRSYZ",	"IRTAJ",	"IRTBZ",	"IRTCX",	"IRTEW",	"IRTHR",	"IRTMB",	"IRUIM",	"IRUZA",	"IRWPS",	"IRXBJ",	"IRYAS",	"IRZAH",	"IRZAN",	"IRZBR",	"IRZVI",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JÚCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KALAMITA",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARASUBAZAR",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOKTEBEL",	"KOZLOV",	"KPCCD",	"KPCHO",	"KPFNJ",	"KPGEN",	"KPHAE",	"KPHGM",	"KPKSN",	"KPNAM",	"KPODA",	"KPPNG",	"KPREM",	"KPRIW",	"KPRJN",	"KPSAM",	"KPSGN",	"KPSGO",	"KPSII",	"KPSIN",	"KPSON",	"KPTCH",	"KPWON",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATAKIA",	"LATTAKIA",	"LATTAKIA",	"LAVAN",	"LEREDI",	"LEUKOPOLIS",	"LEVKOPOL",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAHSHAHR CITY",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHAD",	"MASHHAD",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MESHED",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORÓN",	"MOSUL",	"NAJIN",	"NAKHJAVÅN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOVOFEDORIVKA",	"NOVOFEDOROVKA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OLEKSANDRIVSK",	"OLEKSANDRIVSKA FORTETSIA",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PARTENIT",	"PAYAM",	"PAYAM APT",	"PEREKOP",	"PERICO",	"PERSEPOLIS",	"PILÓN",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATÍ",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QARASUVBAZAR",	"QASABEHE KARAJ",	"QASABEHEKARAJ",	"QASABIHI KARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TÁNAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKI",	"SAKY",	"SAKY RAION",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SAQ RAYONI",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SCOLKINO",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHID RAJAEE PT",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHCHOLKINO",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SOLKHAT",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STAROI KRIM",	"STARYI KRYM",	"SUDAC",	"SUDAGH",	"SUDAK",	"SUDAQ",	"SWEIDA",	"SYALD",	"SYALP",	"SYARW",	"SYBAN",	"SYBEN",	"SYDAM",	"SYDEZ",	"SYHMS",	"SYKAC",	"SYLTK",	"SYMFEROPIL",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"SYPMS",	"SYQDR",	"SYQHM",	"SYQSW",	"SYRIA",	"SYSOR",	"SYTAO",	"SYTTS",	"SYWST",	"SYYBD",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TÁNAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"UAARM",	"UABAP",	"UACRI",	"UAFEO",	"UAKEH",	"UAKHE",	"UAKRA",	"UASIP",	"UASVP",	"UAYAL",	"UAZKA",	"UAZPR",	"UAZUI",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIA",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPORIZHZHYA",	"ZAPORIZZJA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+850",	"+963",	"+98"];  
		
		for(i=0; i<ProWords.length; i++)
		{
			if(FDest.replace("\r\n"," ").includes(ProWords[i]))
			{
				window.alert("Keep the BL hold for Prohibited Country , Location, Keyword and escalate to the Onshore (BL Issue Tab): " + ProWords[i]);
				break;
			}
		}
	}
	catch(err){ }
}

function holdMnDPop()//
{
	try
	{
		var MNDesc = document.getElementsByName('mk_desc')[0].value;
		var LNDesc = document.getElementsByName('dg_cmdt_desc')[0].value;
		var ProWords = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QAHTANIYAH",	"AL QUNAITRA",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEKSANDROVSK",	"ALEKSANDROVSKAYA KREPOST",	"ALEP",	"ALEPO",	"ALEPPO",	"ALEPPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALOPEX",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"ALUSTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHÍA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MÅH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BAZARGAN",	"BAZIRGAN",	"BELARUS",	"BELOGORSK",	"BEZIRGAN",	"BILOGHIRSK",	"BILOGIRSK",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABAÑAS",	"CAIBARIÉN",	"CAMAGÜEY",	"CANKOY",	"CÁRDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHERSON",	"CHERSONESOS",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUANT",	"CUBA",	"CUBAN",	"CUBCA",	"CUBHO",	"CUBOG",	"CUBOQ",	"CUBUF",	"CUBWW",	"CUBYM",	"CUCAB",	"CUCAI",	"CUCAR",	"CUCAS",	"CUCCC",	"CUCEI",	"CUCFG",	"CUCMW",	"CUCYO",	"CUGER",	"CUGIB",	"CUGUB",	"CUGYB",	"CUHAV",	"CUHOG",	"CUICR",	"CUIDS",	"CUJUC",	"CULCL",	"CUMAR",	"CUMEL",	"CUMIR",	"CUMJG",	"CUMLG",	"CUMNT",	"CUMOA",	"CUMOR",	"CUMZO",	"CUNIQ",	"CUNVT",	"CUPAL",	"CUPAS",	"CUPIL",	"CUPPA",	"CUPST",	"CUPTA",	"CUQCO",	"CUQMA",	"CUQPD",	"CUQSN",	"CURSL",	"CUSCS",	"CUSCU",	"CUSDT",	"CUSNJ",	"CUSNU",	"CUSZJ",	"CUTAN",	"CUTDZ",	"CUTND",	"CUUMA",	"CUUPA",	"CUUSS",	"CUVDO",	"CUVIT",	"CUVRA",	"CUVTU",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAA AL-BALAD",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESKI QIRIM",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FOROS",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"GURZUF",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"HUNGNAM-GUYOK",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"IMAM KHOMEINI INTERNATIONAL APT",	"IMAM KHOMEINI PT",	"INKERMAN",	"IRABD",	"IRABR",	"IRACP",	"IRACZ",	"IRADU",	"IRAEU",	"IRAFZ",	"IRAHR",	"IRAKW",	"IRAMD",	"IRAMR",	"IRAN",	"IRAN SHAHR",	"IRARA",	"IRASA",	"IRASR",	"IRAWZ",	"IRAZD",	"IRBAH",	"IRBAJ",	"IRBAM",	"IRBAZ",	"IRBBL",	"IRBDH",	"IRBIK",	"IRBJB",	"IRBKK",	"IRBKM",	"IRBMR",	"IRBND",	"IRBNH",	"IRBOR",	"IRBPA",	"IRBRG",	"IRBRJ",	"IRBSM",	"IRBSR",	"IRBUZ",	"IRBXR",	"IRCI3",	"IRCKT",	"IRCYT",	"IRDAM",	"IRDAY",	"IRDEF",	"IRDEH",	"IRDGN",	"IRDJU",	"IRDOG",	"IRESF",	"IRESL",	"IRFAZ",	"IRFKR",	"IRFR7",	"IRGBT",	"IRGCH",	"IRGHA",	"IRGNH",	"IRGSM",	"IRHDM",	"IRHDR",	"IRHEJ",	"IRHOR",	"IRIAQ",	"IRIFH",	"IRIFN",	"IRIHR",	"IRIIL",	"IRIKA",	"IRIMH",	"IRIQH",	"IRJAK",	"IRJBD",	"IRJRT",	"IRKAL",	"IRKAS",	"IRKER",	"IRKHA",	"IRKHD",	"IRKHK",	"IRKHO",	"IRKHS",	"IRKHY",	"IRKIH",	"IRKMS",	"IRKNR",	"IRKOR",	"IRKSH",	"IRLEH",	"IRLFM",	"IRLIN",	"IRLRR",	"IRLVP",	"IRMEB",	"IRMHD",	"IRMLK",	"IRMMH",	"IRMRX",	"IRNEK",	"IRNKA",	"IRNKW",	"IRNSB",	"IRNSH",	"IRNUJ",	"IROMH",	"IROMI",	"IROSM",	"IRPFQ",	"IRPGU",	"IRPSR",	"IRPYK",	"IRQAZ",	"IRQHK",	"IRQKC",	"IRQMJ",	"IRQSH",	"IRQSM",	"IRQUM",	"IRQYS",	"IRRAS",	"IRRBA",	"IRRJN",	"IRRTM",	"IRRZR",	"IRSAB",	"IRSAN",	"IRSAZ",	"IRSBR",	"IRSDG",	"IRSEK",	"IRSEM",	"IRSFN",	"IRSHA",	"IRSHS",	"IRSIX",	"IRSMW",	"IRSRA",	"IRSRJ",	"IRSRP",	"IRSRY",	"IRSVH",	"IRSXI",	"IRSYZ",	"IRTAJ",	"IRTBZ",	"IRTCX",	"IRTEW",	"IRTHR",	"IRTMB",	"IRUIM",	"IRUZA",	"IRWPS",	"IRXBJ",	"IRYAS",	"IRZAH",	"IRZAN",	"IRZBR",	"IRZVI",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JÚCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KALAMITA",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARASUBAZAR",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOKTEBEL",	"KOZLOV",	"KPCCD",	"KPCHO",	"KPFNJ",	"KPGEN",	"KPHAE",	"KPHGM",	"KPKSN",	"KPNAM",	"KPODA",	"KPPNG",	"KPREM",	"KPRIW",	"KPRJN",	"KPSAM",	"KPSGN",	"KPSGO",	"KPSII",	"KPSIN",	"KPSON",	"KPTCH",	"KPWON",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATAKIA",	"LATTAKIA",	"LATTAKIA",	"LAVAN",	"LEREDI",	"LEUKOPOLIS",	"LEVKOPOL",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAHSHAHR CITY",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHAD",	"MASHHAD",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MESHED",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORÓN",	"MOSUL",	"NAJIN",	"NAKHJAVÅN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOVOFEDORIVKA",	"NOVOFEDOROVKA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OLEKSANDRIVSK",	"OLEKSANDRIVSKA FORTETSIA",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PARTENIT",	"PAYAM",	"PAYAM APT",	"PEREKOP",	"PERICO",	"PERSEPOLIS",	"PILÓN",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATÍ",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QARASUVBAZAR",	"QASABEHE KARAJ",	"QASABEHEKARAJ",	"QASABIHI KARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TÁNAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKI",	"SAKY",	"SAKY RAION",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SAQ RAYONI",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SCOLKINO",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHID RAJAEE PT",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHCHOLKINO",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SOLKHAT",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STAROI KRIM",	"STARYI KRYM",	"SUDAC",	"SUDAGH",	"SUDAK",	"SUDAQ",	"SWEIDA",	"SYALD",	"SYALP",	"SYARW",	"SYBAN",	"SYBEN",	"SYDAM",	"SYDEZ",	"SYHMS",	"SYKAC",	"SYLTK",	"SYMFEROPIL",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"SYPMS",	"SYQDR",	"SYQHM",	"SYQSW",	"SYRIA",	"SYSOR",	"SYTAO",	"SYTTS",	"SYWST",	"SYYBD",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TÁNAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"UAARM",	"UABAP",	"UACRI",	"UAFEO",	"UAKEH",	"UAKHE",	"UAKRA",	"UASIP",	"UASVP",	"UAYAL",	"UAZKA",	"UAZPR",	"UAZUI",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIA",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPORIZHZHYA",	"ZAPORIZZJA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+850",	"+963",	"+98"];  
			
		for(i=0; i<ProWords.length; i++)
		{
			if(MNDesc.replace("\r\n"," ").includes(ProWords[i]) || LNDesc.replace("\r\n"," ").includes(ProWords[i]))
			{
				window.alert("Keep the BL hold for Prohibited Country , Location, Keyword and escalate to the Onshore (M&D Tab): " + ProWords[i]);
				break;
			}
		}
	}
	catch(err){ }
}

function holdCustPop()//
{
	try
	{
		var SHName = document.getElementsByName('sh_cust_nm')[0].value;
		var SHAdd = document.getElementsByName('sh_cust_addr')[0].value;
		var CNName = document.getElementsByName('cn_cust_nm')[0].value;
		var CNAdd = document.getElementsByName('cn_cust_addr')[0].value;
		var NTName = document.getElementsByName('nf_cust_nm')[0].value;
		var NTAdd = document.getElementsByName('nf_cust_addr')[0].value;
		var ANTName = document.getElementsByName('an_cust_nm')[0].value;
		var EXP = document.getElementsByName('ex_cust_nm')[0].value;
		var SCity = document.getElementsByName("sh_cust_cty_nm")[0].value;
		var SStreet = document.getElementsByName("sh_eur_cstms_st_nm")[0].value;
		var CCity = document.getElementsByName("cn_cust_cty_nm")[0].value;
		var CStreet = document.getElementsByName("cn_eur_cstms_st_nm")[0].value;
		var NCity = document.getElementsByName("nf_cust_cty_nm")[0].value;
		var NStreet = document.getElementsByName("nf_eur_cstms_st_nm")[0].value;
		
		var ProWords = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QAHTANIYAH",	"AL QUNAITRA",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEKSANDROVSK",	"ALEKSANDROVSKAYA KREPOST",	"ALEP",	"ALEPO",	"ALEPPO",	"ALEPPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALOPEX",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"ALUSTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHÍA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MÅH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BAZARGAN",	"BAZIRGAN",	"BELARUS",	"BELOGORSK",	"BEZIRGAN",	"BILOGHIRSK",	"BILOGIRSK",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABAÑAS",	"CAIBARIÉN",	"CAMAGÜEY",	"CANKOY",	"CÁRDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHERSON",	"CHERSONESOS",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUANT",	"CUBA",	"CUBAN",	"CUBCA",	"CUBHO",	"CUBOG",	"CUBOQ",	"CUBUF",	"CUBWW",	"CUBYM",	"CUCAB",	"CUCAI",	"CUCAR",	"CUCAS",	"CUCCC",	"CUCEI",	"CUCFG",	"CUCMW",	"CUCYO",	"CUGER",	"CUGIB",	"CUGUB",	"CUGYB",	"CUHAV",	"CUHOG",	"CUICR",	"CUIDS",	"CUJUC",	"CULCL",	"CUMAR",	"CUMEL",	"CUMIR",	"CUMJG",	"CUMLG",	"CUMNT",	"CUMOA",	"CUMOR",	"CUMZO",	"CUNIQ",	"CUNVT",	"CUPAL",	"CUPAS",	"CUPIL",	"CUPPA",	"CUPST",	"CUPTA",	"CUQCO",	"CUQMA",	"CUQPD",	"CUQSN",	"CURSL",	"CUSCS",	"CUSCU",	"CUSDT",	"CUSNJ",	"CUSNU",	"CUSZJ",	"CUTAN",	"CUTDZ",	"CUTND",	"CUUMA",	"CUUPA",	"CUUSS",	"CUVDO",	"CUVIT",	"CUVRA",	"CUVTU",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAA AL-BALAD",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESKI QIRIM",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FOROS",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"GURZUF",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"HUNGNAM-GUYOK",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"IMAM KHOMEINI INTERNATIONAL APT",	"IMAM KHOMEINI PT",	"INKERMAN",	"IRABD",	"IRABR",	"IRACP",	"IRACZ",	"IRADU",	"IRAEU",	"IRAFZ",	"IRAHR",	"IRAKW",	"IRAMD",	"IRAMR",	"IRAN",	"IRAN SHAHR",	"IRARA",	"IRASA",	"IRASR",	"IRAWZ",	"IRAZD",	"IRBAH",	"IRBAJ",	"IRBAM",	"IRBAZ",	"IRBBL",	"IRBDH",	"IRBIK",	"IRBJB",	"IRBKK",	"IRBKM",	"IRBMR",	"IRBND",	"IRBNH",	"IRBOR",	"IRBPA",	"IRBRG",	"IRBRJ",	"IRBSM",	"IRBSR",	"IRBUZ",	"IRBXR",	"IRCI3",	"IRCKT",	"IRCYT",	"IRDAM",	"IRDAY",	"IRDEF",	"IRDEH",	"IRDGN",	"IRDJU",	"IRDOG",	"IRESF",	"IRESL",	"IRFAZ",	"IRFKR",	"IRFR7",	"IRGBT",	"IRGCH",	"IRGHA",	"IRGNH",	"IRGSM",	"IRHDM",	"IRHDR",	"IRHEJ",	"IRHOR",	"IRIAQ",	"IRIFH",	"IRIFN",	"IRIHR",	"IRIIL",	"IRIKA",	"IRIMH",	"IRIQH",	"IRJAK",	"IRJBD",	"IRJRT",	"IRKAL",	"IRKAS",	"IRKER",	"IRKHA",	"IRKHD",	"IRKHK",	"IRKHO",	"IRKHS",	"IRKHY",	"IRKIH",	"IRKMS",	"IRKNR",	"IRKOR",	"IRKSH",	"IRLEH",	"IRLFM",	"IRLIN",	"IRLRR",	"IRLVP",	"IRMEB",	"IRMHD",	"IRMLK",	"IRMMH",	"IRMRX",	"IRNEK",	"IRNKA",	"IRNKW",	"IRNSB",	"IRNSH",	"IRNUJ",	"IROMH",	"IROMI",	"IROSM",	"IRPFQ",	"IRPGU",	"IRPSR",	"IRPYK",	"IRQAZ",	"IRQHK",	"IRQKC",	"IRQMJ",	"IRQSH",	"IRQSM",	"IRQUM",	"IRQYS",	"IRRAS",	"IRRBA",	"IRRJN",	"IRRTM",	"IRRZR",	"IRSAB",	"IRSAN",	"IRSAZ",	"IRSBR",	"IRSDG",	"IRSEK",	"IRSEM",	"IRSFN",	"IRSHA",	"IRSHS",	"IRSIX",	"IRSMW",	"IRSRA",	"IRSRJ",	"IRSRP",	"IRSRY",	"IRSVH",	"IRSXI",	"IRSYZ",	"IRTAJ",	"IRTBZ",	"IRTCX",	"IRTEW",	"IRTHR",	"IRTMB",	"IRUIM",	"IRUZA",	"IRWPS",	"IRXBJ",	"IRYAS",	"IRZAH",	"IRZAN",	"IRZBR",	"IRZVI",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JÚCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KALAMITA",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARASUBAZAR",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOKTEBEL",	"KOZLOV",	"KPCCD",	"KPCHO",	"KPFNJ",	"KPGEN",	"KPHAE",	"KPHGM",	"KPKSN",	"KPNAM",	"KPODA",	"KPPNG",	"KPREM",	"KPRIW",	"KPRJN",	"KPSAM",	"KPSGN",	"KPSGO",	"KPSII",	"KPSIN",	"KPSON",	"KPTCH",	"KPWON",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATAKIA",	"LATTAKIA",	"LATTAKIA",	"LAVAN",	"LEREDI",	"LEUKOPOLIS",	"LEVKOPOL",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAHSHAHR CITY",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHAD",	"MASHHAD",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MESHED",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORÓN",	"MOSUL",	"NAJIN",	"NAKHJAVÅN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOVOFEDORIVKA",	"NOVOFEDOROVKA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OLEKSANDRIVSK",	"OLEKSANDRIVSKA FORTETSIA",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PARTENIT",	"PAYAM",	"PAYAM APT",	"PEREKOP",	"PERICO",	"PERSEPOLIS",	"PILÓN",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATÍ",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QARASUVBAZAR",	"QASABEHE KARAJ",	"QASABEHEKARAJ",	"QASABIHI KARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TÁNAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKI",	"SAKY",	"SAKY RAION",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SAQ RAYONI",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SCOLKINO",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHID RAJAEE PT",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHCHOLKINO",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SOLKHAT",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STAROI KRIM",	"STARYI KRYM",	"SUDAC",	"SUDAGH",	"SUDAK",	"SUDAQ",	"SWEIDA",	"SYALD",	"SYALP",	"SYARW",	"SYBAN",	"SYBEN",	"SYDAM",	"SYDEZ",	"SYHMS",	"SYKAC",	"SYLTK",	"SYMFEROPIL",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"SYPMS",	"SYQDR",	"SYQHM",	"SYQSW",	"SYRIA",	"SYSOR",	"SYTAO",	"SYTTS",	"SYWST",	"SYYBD",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TÁNAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"UAARM",	"UABAP",	"UACRI",	"UAFEO",	"UAKEH",	"UAKHE",	"UAKRA",	"UASIP",	"UASVP",	"UAYAL",	"UAZKA",	"UAZPR",	"UAZUI",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIA",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPORIZHZHYA",	"ZAPORIZZJA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+850",	"+963",	"+98"];  
		
		for(i=0; i<ProWords.length; i++)
		{
			if(SHName.replace("\r\n"," ").includes(ProWords[i]) || SHAdd.replace("\r\n"," ").includes(ProWords[i]) || CNName.replace("\r\n"," ").includes(ProWords[i]) || CNAdd.replace("\r\n"," ").includes(ProWords[i]) || NTName.replace("\r\n"," ").includes(ProWords[i]) || NTAdd.replace("\r\n"," ").includes(ProWords[i]) || ANTName.replace("\r\n"," ").includes(ProWords[i]) || EXP.replace("\r\n"," ").includes(ProWords[i]) || SCity.replace("\r\n"," ").includes(ProWords[i]) || SStreet.replace("\r\n"," ").includes(ProWords[i]) || CCity.replace("\r\n"," ").includes(ProWords[i]) || CStreet.replace("\r\n"," ").includes(ProWords[i]) || NCity.replace("\r\n"," ").includes(ProWords[i]) || NStreet.replace("\r\n"," ").includes(ProWords[i]))
			{
				window.alert("Keep the BL hold for Prohibited Country , Location, Keyword and escalate to the Onshore (Customer Tab): " + ProWords[i]);
				break;
			}
		}
	}
	catch(err){ }
}

function dueBLIssuePop()//
{
	try
	{
		var FDest = document.getElementsByName('frm_t11sheet1_final_dest')[0].value;
		var duecname = ["AFGHANISTAN",	"BAIKAL",	"BALTIC",	"BOSNIA",	"BURMA",	"BURUNDI",	"CENTRAL AFRICAN REPUBLIC",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FEDERATSIYA",	"FINLAND",	"GEORGIA",	"HAITI",	"HERZEGOVINA",	"HIKVISION",	"IRAQ",	"IRKUTSK",	"JORDAN",	"KALININGRAD",	"KIEW",	"KREMLIN",	"LADOGA",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MOSCOW",	"MURMANSK",	"MYANMAR",	"NICARAGUA",	"NOVOROSSIYSK",	"PETERS",	"POTI",	"ROSSIJA",	"ROSSIYA",	"ROSSIYSKAYA",	"S.F.S.R.",	"SERBIA",	"SIBERIA",	"SOCIALIST",	"SOMALIA",	"SOUTH SUDAN",	"SOVIET",	"ST PETERSBURG",	"SUDAN",	"TUNISIA",	"TURKEY",	"U.S.S.R",	"UKRAINE",	"UNITED ARAB EMIRATES",	"USSR",	"VENEZUELA",	"VLADIVOSTOCK",	"VOLGA",	"YEMEN",	"ZIMBABWE",	"+358",	"+370",	"+371",	"+372",	"+380",	"+995"];
		var dcname = [];
		for(var i = 0; i < duecname.length; i++)
		{
			if(FDest.replace("\r\n"," ").includes(duecname[i]))
			{
				dcname.push(duecname[i]);
			}
		}
		if (dcname.length > 0)
		{
			window.prompt("Create SANCTION CHECK FORM for Due Diligence Countries: " + dcname.join(", "));
		}
	}
	catch(err){ }
}

function dueMnDPop()//
{
	try
	{
		var MNDesc = document.getElementsByName('mk_desc')[0].value;
		var LNDesc = document.getElementsByName('dg_cmdt_desc')[0].value;
		var CDesc = document.getElementsByName('cstms_desc')[0].value;
		var pod = document.getElementById("pod_cd").value.substring(0,2);
		var del = document.getElementById("del_cd").value.substring(0,2);
		const ruEmailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.ru\b/gi;
		
		var duecname = ["AFGHANISTAN",	"BAIKAL",	"BALTIC",	"BOSNIA",	"BURMA",	"BURUNDI",	"CENTRAL AFRICAN REPUBLIC",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FEDERATSIYA",	"FINLAND",	"GEORGIA",	"HAITI",	"HERZEGOVINA",	"HIKVISION",	"IRAQ",	"IRKUTSK",	"JORDAN",	"KALININGRAD",	"KIEW",	"KREMLIN",	"LADOGA",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MOSCOW",	"MURMANSK",	"MYANMAR",	"NICARAGUA",	"NOVOROSSIYSK",	"PETERS",	"POTI",	"ROSSIJA",	"ROSSIYA",	"ROSSIYSKAYA",	"S.F.S.R.",	"SERBIA",	"SIBERIA",	"SOCIALIST",	"SOMALIA",	"SOUTH SUDAN",	"SOVIET",	"ST PETERSBURG",	"SUDAN",	"TUNISIA",	"TURKEY",	"U.S.S.R",	"UKRAINE",	"UNITED ARAB EMIRATES",	"USSR",	"VENEZUELA",	"VLADIVOSTOCK",	"VOLGA",	"YEMEN",	"ZIMBABWE",	"+358",	"+370",	"+371",	"+372",	"+380",	"+995"];
		var dcname = [];
		for(var i = 0; i < duecname.length; i++)
		{
			if(MNDesc.replace("\r\n"," ").includes(duecname[i]) ||  LNDesc.replace("\r\n"," ").includes(duecname[i]))
			{
				dcname.push(duecname[i]);
			}
		}
		if (dcname.length > 0)
		{
			window.prompt("Create SANCTION CHECK FORM for Due Diligence Countries: " + dcname.join(", "));
		}
		
		if(pod == "BR" || del == "BR")
		{
			if(!(MNDesc.includes("CNPJ") || MNDesc.includes("C.N.P.J") || LNDesc.includes("CNPJ") || LNDesc.includes("C.N.P.J")))
			{
				alert("Missing CNPJ number on BL Image");
			}
		}
		else if(pod == "IL" || del == "IL")
		{
			if(!(MNDesc.includes("TAX") || MNDesc.includes("VAT") || MNDesc.includes("COMPANY NUMBER") || LNDesc.includes("TAX") || LNDesc.includes("VAT") || LNDesc.includes("COMPANY NUMBER")))
			{
				alert("Missing VAT ID on BL Image");
			}
		}
		else if(pod == "IQ" || del == "IQ")
		{
			alert("HS Code is mandatory on Bill for Iraq");
		}
		else if(pod == "IN" || del == "IN")
		{
			alert("Importer - IEC#(IEC Code); GSTIN#(GSTINCODE); Email#(Email_id); is mandatory on BL image.");
		}
		
		if (ruEmailPattern.test(LNDesc) || ruEmailPattern.test(CDesc) || ruEmailPattern.test(MNDesc)) 
		{
			alert("Russia Email Found");
		}
	}
	catch(err){ }
}

function DueCheck()//
{
	try
	{
		var SHPRPrf = document.getElementsByName('sh_cust_cnt_cd')[0].value.substr(0,2);
		var SHPRName = document.getElementsByName('sh_cust_nm')[0].value;
		var SHPRAdd = document.getElementsByName('sh_cust_addr')[0].value;
		var SHCity = document.getElementsByName("sh_cust_cty_nm")[0].value;
		var SHPO = document.getElementsByName("sh_eur_cstms_st_nm")[0].value;
		var SHEmail = document.getElementsByName("sh_cust_eml")[0].value;
		
		var CNEEPrf = document.getElementsByName('cn_cust_cnt_cd')[0].value.substr(0,2);
		var CNEEName = document.getElementsByName('cn_cust_nm')[0].value;
		var CNEEAdd = document.getElementsByName('cn_cust_addr')[0].value;
		var CNCity = document.getElementsByName("cn_cust_cty_nm")[0].value;
		var CNPO = document.getElementsByName("cn_eur_cstms_st_nm")[0].value;
		var CNEmail = document.getElementsByName("cn_cust_eml")[0].value;
		
		var NTFYPrf = document.getElementsByName('nf_cust_cnt_cd')[0].value.substr(0,2);
		var NTFYName = document.getElementsByName('nf_cust_nm')[0].value;
		var NTFYAdd = document.getElementsByName('nf_cust_addr')[0].value;
		var NTCity = document.getElementsByName("nf_cust_cty_nm")[0].value;
		var NTPO = document.getElementsByName("nf_eur_cstms_st_nm")[0].value;
		var NTEmail = document.getElementsByName("nf_cust_eml")[0].value;
		
		var ANTFYPrf = document.getElementsByName('an_cust_cnt_cd')[0].value.substr(0,2);
		var ANTFYName = document.getElementsByName('an_cust_nm')[0].value;
		var ANTFYEmail = document.getElementsByName("an_cust_eml")[0].value;
		var FFName = document.getElementsByName('ff_cust_nm')[0].value;
		var EXPREF = document.getElementsByName('ex_cust_nm')[0].value;
		var countryOrigin = document.getElementsByName('org_cnt_nm')[0].value;
		
		var POD = document.getElementsByName('pod_cd')[0].value.substr(0,2);
		var DEl = document.getElementsByName('del_cd')[0].value.substr(0,2);
		
		const ruEmailPattern = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.ru\b/gi;
		var flag = 0;
		var dueccode = ["AE",	"AF",	"BA",	"BI",	"CD",	"CF",	"EE",	"EG",	"FI",	"GE",	"HT",	"IQ",	"JO",	"LB",	"LT",	"LV",	"LY",	"ML",	"MM",	"NI",	"RS",	"SD",	"SO",	"SS",	"TN",	"TR",	"UA",	"VE",	"YE",	"ZW"];
		var duecname = ["AFGHANISTAN",	"BAIKAL",	"BALTIC",	"BOSNIA",	"BURMA",	"BURUNDI",	"CENTRAL AFRICAN REPUBLIC",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FEDERATSIYA",	"FINLAND",	"GEORGIA",	"HAITI",	"HERZEGOVINA",	"HIKVISION",	"IRAQ",	"IRKUTSK",	"JORDAN",	"KALININGRAD",	"KIEW",	"KREMLIN",	"LADOGA",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MOSCOW",	"MURMANSK",	"MYANMAR",	"NICARAGUA",	"NOVOROSSIYSK",	"PETERS",	"POTI",	"ROSSIJA",	"ROSSIYA",	"ROSSIYSKAYA",	"S.F.S.R.",	"SERBIA",	"SIBERIA",	"SOCIALIST",	"SOMALIA",	"SOUTH SUDAN",	"SOVIET",	"ST PETERSBURG",	"SUDAN",	"TUNISIA",	"TURKEY",	"U.S.S.R",	"UKRAINE",	"UNITED ARAB EMIRATES",	"USSR",	"VENEZUELA",	"VLADIVOSTOCK",	"VOLGA",	"YEMEN",	"ZIMBABWE",	"+358",	"+370",	"+371",	"+372",	"+380",	"+995"];
		var dcname = [];
		if (flag == 0)
		{
			for(var i=0; i < dueccode.length; i++)
			{
				if (SHPRPrf == dueccode[i] || CNEEPrf == dueccode[i] || NTFYPrf == dueccode[i] || ANTFYPrf == dueccode[i] || POD == dueccode[i] || DEl == dueccode[i])
				{
					flag = 1;
					window.prompt("Create SANCTION CHECK FORM for Due Diligence Countries : " + dueccode[i]);
					break;
				}
			}
		}
		
		if (flag == 0)
		{
			for(var i =0; i < duecname.length; i++)
			{
				if (SHPRName.replace("\r\n"," ").includes(duecname[i]) || CNEEName.replace("\r\n"," ").includes(duecname[i]) || NTFYName.replace("\r\n"," ").includes(duecname[i]) || ANTFYName.replace("\r\n"," ").includes(duecname[i]) || EXPREF.replace("\r\n"," ").includes(duecname[i]) || SHPRAdd.replace("\r\n"," ").includes(duecname[i]) || CNEEAdd.replace("\r\n"," ").includes(duecname[i]) || NTFYAdd.replace("\r\n"," ").includes(duecname[i]))
				{
					flag = 1;
					dcname.push(duecname[i]);
				}
			}
			if (dcname.length > 0)
			{
				window.prompt("Create SANCTION CHECK FORM for Due Diligence Countries : " + dcname.join(", "));
			}
		}

		if(POD == "BR" || DEl == "BR")
		{
			if(!(ANTFYName.includes("CNPJ") || ANTFYName.includes("C.N.P.J") || FFName.includes("CNPJ") || FFName.includes("C.N.P.J") || SHPRAdd.includes("CNPJ") || SHPRAdd.includes("C.N.P.J") || CNEEAdd.includes("CNPJ") || CNEEAdd.includes("C.N.P.J") || NTFYAdd.includes("CNPJ") || NTFYAdd.includes("C.N.P.J")))
			{
				alert("Missing CNPJ number on BL Image");
			}
		}
		else if(POD == "IL" || DEl == "IL")
		{
			if(!(ANTFYName.includes("TAX") || ANTFYName.includes("VAT") || ANTFYName.includes("COMPANY NUMBER") || FFName.includes("TAX") || FFName.includes("VAT") || FFName.includes("COMPANY NUMBER") || SHPRAdd.includes("TAX") || SHPRAdd.includes("VAT") || SHPRAdd.includes("COMPANY NUMBER") || CNEEAdd.includes("TAX") || CNEEAdd.includes("VAT") || CNEEAdd.includes("COMPANY NUMBER") || NTFYAdd.includes("TAX") || NTFYAdd.includes("VAT") || NTFYAdd.includes("COMPANY NUMBER")))
			{
				alert("Missing VAT ID on BL Image");
			}
		}
		
		if (ruEmailPattern.test(SHPRName) || ruEmailPattern.test(SHPRAdd) || ruEmailPattern.test(SHCity) || ruEmailPattern.test(SHPO) || ruEmailPattern.test(SHEmail) || ruEmailPattern.test(CNEEName) || ruEmailPattern.test(CNEEAdd) || ruEmailPattern.test(CNCity) || ruEmailPattern.test(CNPO) || ruEmailPattern.test(CNEmail) || ruEmailPattern.test(NTFYName) || ruEmailPattern.test(NTFYAdd) || ruEmailPattern.test(NTCity) || ruEmailPattern.test(NTPO) || ruEmailPattern.test(NTEmail) || ruEmailPattern.test(ANTFYName) || ruEmailPattern.test(ANTFYEmail) || ruEmailPattern.test(FFName) || ruEmailPattern.test(EXPREF) || ruEmailPattern.test(countryOrigin)) 
		{
			alert("Russia Email Found");
		}
	}
	catch(err){ }
}

function CustPopup()//
{
	try
	{
		var pod = document.getElementsByName('pod_cd')[0].value.substr(0,2);
		var del = document.getElementsByName('del_cd')[0].value.substr(0,2);
		var nf = document.getElementsByName('nf_cust_nm')[0].value;
		if((pod == "AU" || del == "AU") && nf == "SAME AS CONSIGNEE") 
		{
			alert("Same as Consignee not allowed for Australia");
		}
		if((pod == "CO" || del == "CO") && nf == "SAME AS CONSIGNEE") 
		{
			alert("Same as Consignee not allowed for Colombia");
		}
		if((pod == "BO" || del == "BO") && nf == "SAME AS CONSIGNEE") 
		{
			alert("Same as Consignee not allowed for Bolivia");
		}
		if((pod == "PY" || del == "PY") && nf == "SAME AS CONSIGNEE") 
		{
			alert("Same as Consignee not allowed for Paraguay");
		}
	}
	catch(err){ }
}

function tickBDC()//
{
	try
	{
		var checkbox = document.querySelector("input[name=bl_ready_checkbox]");

		if (checkbox != null)
		{
		checkbox.addEventListener('change', function () 
		{
			var BLTik = document.getElementsByName('bl_ready_checkbox')[0];
			var BLNumber = document.getElementsByName("frm_t11sheet1_bkg_no")[0].value;
			if (this.checked) 
			{
				if(BLNumber.substr(0,2) == "HK" )
				{
					frm_t11sheet1_bl_ready_office.value =  "HKGBB";
					frm_t11sheet1_bl_drft_ready_office.value = "HKGBB";
					if(frm_t11sheet1_bl_drft_ready_by.value == "")
					{
						frm_t11sheet1_bl_drft_ready_by.value = frm_t11sheet1_bl_ready_by.value;	
					}
					
					if(frm_t11sheet1_bl_drft_ready_date.value == "")
					{
						frm_t11sheet1_bl_drft_ready_date.value = frm_t11sheet1_bl_ready_date.value;
					}
				}
				if(BLNumber.substr(0,2) == "SZ" )
				{
					frm_t11sheet1_bl_ready_office.value =  "SZPBB";
					frm_t11sheet1_bl_drft_ready_office.value = "SZPBB";
					if(frm_t11sheet1_bl_drft_ready_by.value == "")
					{
						frm_t11sheet1_bl_drft_ready_by.value = frm_t11sheet1_bl_ready_by.value;	
					}
					
					if(frm_t11sheet1_bl_drft_ready_date.value == "")
					{
						frm_t11sheet1_bl_drft_ready_date.value = frm_t11sheet1_bl_ready_date.value;
					}
				}
				if(BLNumber.substr(0,2) == "CA" )
				{
					frm_t11sheet1_bl_ready_office.value =  "CANBB";
					frm_t11sheet1_bl_drft_ready_office.value = "CANBB";
					if(frm_t11sheet1_bl_drft_ready_by.value == "")
					{
						frm_t11sheet1_bl_drft_ready_by.value = frm_t11sheet1_bl_ready_by.value;	
					}
					
					if(frm_t11sheet1_bl_drft_ready_date.value == "")
					{
						frm_t11sheet1_bl_drft_ready_date.value = frm_t11sheet1_bl_ready_date.value;
					}
				}
				if(BLNumber.substr(0,2) == "ZH" )
				{
					frm_t11sheet1_bl_ready_office.value = "ZHOBB";
					frm_t11sheet1_bl_drft_ready_office.value = "ZHOBB";
					if(frm_t11sheet1_bl_drft_ready_by.value == "")
					{
						frm_t11sheet1_bl_drft_ready_by.value = frm_t11sheet1_bl_ready_by.value;	
					}
					
					if(frm_t11sheet1_bl_drft_ready_date.value == "")
					{
						frm_t11sheet1_bl_drft_ready_date.value = frm_t11sheet1_bl_ready_date.value;
					}
				}
			} else 
			{
				frm_t11sheet1_bl_ready_office.value = "";
			}
		});
		}
	}
	catch(err){	}
	
	
	
	try
	{
		var checkbox = document.querySelector("input[name=bl_drft_ready_checkbox]");

		if (checkbox != null)
		{
		checkbox.addEventListener('change', function () 
		{
			var BLTik = document.getElementsByName('bl_drft_ready_checkbox')[0];
			var BLNumber = document.getElementsByName("frm_t11sheet1_bkg_no")[0].value;
			if (this.checked) 
			{
				if(BLNumber.substr(0,2) == "HK" )
				{
					frm_t11sheet1_bl_drft_ready_office.value = "HKGBB";
				}
				if(BLNumber.substr(0,2) == "SZ" )
				{
					frm_t11sheet1_bl_drft_ready_office.value = "SZPBB";
				}
				if(BLNumber.substr(0,2) == "CA" )
				{
					frm_t11sheet1_bl_drft_ready_office.value = "CANBB";
				}
				if(BLNumber.substr(0,2) == "ZH" )
				{
					frm_t11sheet1_bl_drft_ready_office.value = "ZHOBB";
				}
			} else 
			{
				frm_t11sheet1_bl_drft_ready_office.value = "";
			}
		});
		}
	}
	catch(err){	}
}

function QueueListTooltip()
{
	//Queue List Blink Customer tooltip
	try
	{
		if(document.getElementById("btn_workspace"))
		{
			document.getElementById("btn_workspace").style.backgroundColor = "#e51cc6";
			document.getElementById("btn_workspace").title = "BLINK Customer \r\n- If BL is completed - Send Draft via BLINK\r\n- If BL is pending / or any Amendment - Send Inquiry via BLINK";
		}
	}
	catch(err){	}
}

function getCMTab()//
{
	try
	{
		var POD = document.getElementById("pod_cd").value.substr(0,2);
		var pkg = document.getElementById('pck_tp_cd').value;
		
		if(document.querySelector("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont1.HideCol1C7 > div") != null)
		{
			var P = document.querySelector("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont1.HideCol1C7 > div").innerHTML;
		}
		if(document.querySelector("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused.GMClassFocused > td.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont1.HideCol1C7 > div") != null)
		{
			var P1 = document.querySelector("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused.GMClassFocused > td.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont1.HideCol1C7 > div").innerHTML;
		}
		
		if( POD == "CA" || POD == "US")
		{
			if(pkg == "PX" || pkg == "BE" || pkg == "SI" || P == "PX" || P == "BE" || P == "SI" || P1 == "PX" || P1 == "BE" || P1 == "SI")
			{
				alert("Do not use PX / BE / SI Package for US and CA Shipment");
			}
		}
	}
	catch(err){	}
}

function getMDTab()//
{
	try
	{
		var POD = document.getElementById("pod_cd").value.substr(0,2);
		var pkg = document.getElementById('pck_tp_cd').value;
		
		if( POD == "CA" || POD == "US")
		{
			if(pkg == "PX" || pkg == "BE" || pkg == "SI")
			{
				alert("Do not use PX / BE / SI Package for US and CA Shipment");
			}
		}
	}
	catch(err){	}
}

function CRD_Check()//
{
	try
	{
		var crd = document.getElementsByName("frm_t10sheet1_rt_aply_dt")[0].value;
		var pod = document.getElementById("frm_t10sheet1_pod_cd").value.substr(0,2);
		var del = document.getElementById("frm_t10sheet1_del_cd").value.substr(0,2);
		if(crd.length > 2)
		{
			if(pod == "US" || pod == "CA" || pod == "PR" || pod == "AS" || pod == "GU" || pod == "MP" || del == "US" || del == "CA" || del == "PR" || del == "AS" || del == "GU" || del == "MP")
			{
				while(true)
				{
					let comment = prompt("Please enter CRD Date in the textbox and click on OK!!");
					if(comment !=null)
					{
						if(comment.trim()!="")
						{
							if(comment.length !=10)
							{
								alert("Invalid CRD Date");
							}
							else
							{
								if(crd == comment)
								{
									break;
								}
								else
								{
									alert("Invalid CRD Date");
								}
							}
						}
						else
						{
							alert("Invalid CRD Date");
						}
					}
					else
					{
						alert("Invalid CRD Date");
					}
				}
			}
		}
	}
	catch(err){ }
}

function BillStop()//
{
	try
	{
		// Prohibitted Countries 
		var DEL = document.getElementById("bkg_del_cd").value.substr(0,2);
		var dl = document.getElementById("bkg_del_cd").value;
		var POD = document.getElementById("bkg_pod_cd").value.substr(0,2);
		var pd = document.getElementById("bkg_pod_cd").value;
		var BLNumber = document.getElementsByName("bkg_no")[0].value;
		var RFA = document.getElementsByName("rfa_no")[0].value;
		var SC = document.getElementsByName("sc_no")[0].value;
		
		var shpr = document.getElementsByName("s_cust_cnt_cd")[0].value;
		var fwdr = document.getElementsByName("f_cust_cnt_cd")[0].value;
		var cnee = document.getElementsByName("c_cust_cnt_cd")[0].value;
		var cnpt = document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0].value;
		
		var shprCode = document.getElementsByName("s_cust_seq")[0].value;
		var fwdrCode = document.getElementsByName("f_cust_seq")[0].value;
		var cneeCode = document.getElementsByName("c_cust_seq")[0].value;
		var cnptCode = document.getElementsByName("bkg_ctrl_pty_cust_seq")[0].value;
					
		if( POD == "KR" || DEL == "KR"  || POD == "IR" || DEL == "IR" || POD == "CU" || DEL == "CU"  || POD == "SY" || DEL == "SY")
		{
			alert("You can not process Bill, because POD / DEL is one of the below sanctioned Countries \n 1. North Korea \n 2. Iran \n 3. Cremia \n 4. Cuba \n 5. Syria");
		}
		
		if(shpr.includes("RISO KAGAKU CORPORATION") || fwdr.includes("RISO KAGAKU CORPORATION") || cnee.includes("RISO KAGAKU CORPORATION") ||  cnpt.includes("RISO KAGAKU CORPORATION")  )
		{
			if(RFA == "TYOB01010A" || SC == "TYOB01010A")
			{
				alert("Please provide this BL Number to your TL before processing");
			}
		}
	}
	catch(err){	}
}

function CheckShipment()//
{
	try
	{
		var del = document.getElementsByName("del_cd")[0].value.substring(0, 2); 
		var pod = document.getElementsByName('pod_cd')[0].value.substring(0, 2);	
		
		if(del == "US" || del ==  "CA" || del ==  "PR" || del ==  "AS" || del ==  "GU" || del ==  "MP" )
		{
			const HTScells = document.querySelectorAll("tr.GMDataRow td.HideCol1C18 > div");
			HTScells.forEach((cell) => {
				const HTS = cell.innerHTML;
				cell.style.backgroundColor = "#F1A9F3";
				if (!HTS || HTS === "&nbsp;") 
				{
					alert("Please enter HTS code");
				}
				else if (HTS.length !== 6) 
				{
					alert("Please enter valid HTS code");
				}
			});
		}
		else if(del == "BR")
		{
			const NCMcells = document.querySelectorAll("tr.GMDataRow td.HideCol1C20 > div");
			NCMcells.forEach((cell) => {
				const NCM = cell.innerHTML;
				cell.style.backgroundColor = "#F1A9F3";
				if (!NCM || NCM === "&nbsp;") 
				{
					alert("Please enter NCM code");
				}
				else if (NCM.length !== 4) 
				{
					alert("Please enter valid NCM code");
				}
			});

		}
		else
		{
			const HScells = document.querySelectorAll("tr.GMDataRow td.HideCol1C20 > div");
			HScells.forEach((cell) => {
				const HS = cell.innerHTML;
				cell.style.backgroundColor = "#F1A9F3";
				if(pod == "IQ" || del == "IQ")
				{
					if (!HS || HS === "&nbsp;") 
					{
						alert("HS code is mandatory for Iraq");
					}
				}
				else
				{
					if (!HS || HS === "&nbsp;") 
					{
						alert("Please enter HS code");
					}
					if (HS && HS.length !== 6) 
					{
						alert("Please enter valid HS code");
					}
				}
			});
		}
	}
	catch(err){	}
}

function UpdatePackage()//
{
	try
	{
		var pck_qty = document.getElementsByName("pck_qty")[0].value;
		var pck_cmdt_desc = document.getElementsByName("pck_cmdt_desc")[0].value;
		var pkg = pck_cmdt_desc.replace(/ .*/,'');
	
		var pod = document.getElementsByName("pod_cd")[0].value.substring(0, 2);
		var del = document.getElementsByName("del_cd")[0].value.substring(0, 2);
		
		var pkt = document.getElementsByName("pck_tp_cd")[0].value;
		
		if(pod == "US" && pkt == "CN" )
		{
			alert("Do not use CN Package Unit for US POD.");
		}
		if((pod == "CA" || pod == "US") && (pkt == "PX" || pkt == "BE" || pkt == "SI") )
		{
			alert("Do not use PX / BE / SI Package for US and CA Shipment");
		}

		pck_qty = pck_qty.replace(',','');		
		
		if(pck_qty !== pkg)
		{
			document.getElementsByName("pck_qty")[0].style.backgroundColor = "#f1a9f3";
			document.getElementsByName("pck_cmdt_desc")[0].style.backgroundColor = "#f1a9f3";
			alert("Total Package and No. of PKG / CNTR should be equal...");
		}
		else
		{
			document.getElementsByName("pck_qty")[0].style.backgroundColor = "";
			document.getElementsByName("pck_cmdt_desc")[0].style.backgroundColor = "";
		}
		
		if(pod == 'IN' || del == 'IN')
		{
			if(window.confirm("Please Update Agent Address as POD/DEL starts with India"))
			{
				
			}
		}
		
		var Description = document.getElementsByName("dg_cmdt_desc")[0].value;
		var DGWords = [ "BATTERY", "BATTERIES", "CHARCOAL", "CARBON", "BIOMASS", "CALCIUM HYPOCHLORITE", "VEHICLE", "AUTO PART", "AUTO SPARE PART", "AUTOPART", "SPARE PART", "FISH MEAL", "CRAB SHELL", "WASTE SHIPMENT", "WASTE", "CLOVE", "COCCA BUTTON", "COCCA", "MAGNETIC", "COIL", "REFRIGERATED LIQUID HELIUM", "RUBBER", "NATURAL RUBBER", "RUBBER CUP LUMP", "PROCESSED RUBBER", "PRE-CLEANED RUBBER", "ALKALINE MANGANESE BUTTON CELL", "AUTOMOBILE", "BLUETOOTH", "CAR PART", "CARPARTS", "COMPUTER", "GOLF CART", "IPAD", "IPHONE", "I-PAD", "I-PHONE", "LAPTOP", "LITHIUM BUTTON CELL", "LITHIUM CELL (CR SERIES)", "LITHIUM CELL", "LITHIUM-ION POLYMER RECHARGEABLE CELL", "LITHIUM", "MOBILE PHONE", "MOTOR CYCLE", "MOTORCYCLE", "MOTORBIKE", "MOTORCYCLE PART", "MOTOR BIKE", "PERSONAL COMPUTER", "PERSONAL EFFECT", "PERSONAL HOUSEHOLD GOODS", "POLYMER LI-ION CELL", "POWERBANK", "POWER BANK", "SCOOTER", "CELL", "SMART PHONE", "TABLET COMPUTER", "TABLET PC", "TRUCK", "USED CAR", "USED CAR PART", "USED MOTORCYCLE PART", "USED TRUCK", "WIRELESS PHONE", "ZN MANGANESE DIOXIDE PRIMARY ALKALINE CELL", "ZINC MANGANESE DIOXIDE", "HEADPHONE", "HEATING DEVICE", "FIRE CRACKER", "FIRE WORK", "FIRECRACKERS", "FIREWORKS", "NICOTINE", "MAGNET", "PRECLEANED RUBBER", "SMARTPHONE", "RAWCOTTON", "RAW COTTON", "COTTON", "SOYABEAN SEED MEAL", "SEED CAKE", "SOYABEAN SEED CAKE", "ALCOHOL", "SULPHUR", "FERROSILICON", "FLEXITANK", "FLEXI TANK", "FLEXIBAG", "FLEXI BAG", "POWER TOOL", "POWERTOOL", "BLEACH", "SCRAP", "RESIN" ];
		var dg = [];
		for (var i = 0; i < DGWords.length; i++) 
		{                                  
			if (Description.includes(DGWords[i]))
			{
				dg.push(DGWords[i]);                
			}
		}
		if(dg.length > 0)
		{
			if(window.confirm("Alert Keyword found in Description " + dcname.join(", ") + ". \r\nPlease follow Alert Keyword Procedure..."))
			{
			}
		}
	}
	catch(err){	}
	
	try
	{
		var pod = document.getElementsByName("pod_cd")[0].value.substring(0, 2);
		var del = document.getElementsByName("del_cd")[0].value.substring(0, 2);
		
		var pkt = document.getElementsByName("pck_tp_cd")[0].value;
		
		if(pod == "US" && pkt == "CN" )
		{
			alert("Do not use CN Package Unit for US POD.");
		}
		if((pod == "CA" || pod == "US") && (pkt == "PX" || pkt == "BE" || pkt == "SI") )
		{
			alert("Do not use PX / BE / SI Package for US and CA Shipment");
		}	
		
		if(pod == 'IN' || del == 'IN')
		{
			if(window.confirm("Please Update Agent Address as POD/DEL starts with India"))
			{
				
			}
		}
	}
	catch(err){ }
}

function DocCheck()//
{
	try
	{
		var POD = document.getElementById("frm_t11sheet1_pod_code").value.substring(0,2);
		var DEL = document.getElementById("frm_t11sheet1_del_code").value.substring(0,2);
		
		if(POD == "AR" || DEL == "AR" || POD == "BO" || DEL == "BO" || POD == "BR" || DEL == "BR" || POD == "CO" || DEL == "CO" || POD == "CR" || DEL == "CR" || POD == "DO" || DEL == "DO" || POD == "EC" || DEL == "EC" || POD == "SV" || DEL == "SV" || POD == "GT" || DEL == "GT" || POD == "HN" || DEL == "HN" || POD == "NI" || DEL == "NI" || POD == "VE" || DEL == "VE" || POD == "NG" || DEL == "NG"  || POD == "HT" || DEL == "HT" )
		{
			if(document.getElementById("bl_ready_type_text") != null)
			{
				if(document.getElementById("bl_ready_type_text").value != "B" )
				{
					alert("Please Select O.BL");
				}
			}
		}
	}
	catch(err){	}
}

function NonOneLineMail()//
{
	try
	{
		var si_cntc_pson_eml = document.getElementsByName('si_cntc_pson_eml')[0].value;
		
		if(si_cntc_pson_eml.includes("one-line.com") || si_cntc_pson_eml.includes("ONE-LINE.COM"))
		{
			document.getElementsByName('si_cntc_pson_eml')[0].style.backgroundColor = "#f1a9f3";
			alert('do not use one-line email ID here.');
		}
		else
		{
			document.getElementsByName('si_cntc_pson_eml')[0].style.backgroundColor = "";
		}
	}
	catch(err){ }
}

function mandatory_CustTab()//
{
	try
	{
		var shCity = document.getElementsByName("sh_cust_cty_nm")[0].value;
		var shCntry = document.getElementsByName("sh_cstms_decl_cnt_cd")[0].value;
		var shZip = document.getElementsByName("sh_cust_zip_id")[0].value;
		var shStreet = document.getElementsByName("sh_eur_cstms_st_nm")[0].value;
		
		var cnCity = document.getElementsByName("cn_cust_cty_nm")[0].value;
		var cnCntry = document.getElementsByName("cn_cstms_decl_cnt_cd")[0].value;
		var cnZip = document.getElementsByName("cn_cust_zip_id")[0].value;
		var cnStreet = document.getElementsByName("cn_eur_cstms_st_nm")[0].value;
		
		var nfCity = document.getElementsByName("nf_cust_cty_nm")[0].value;
		var nfCntry = document.getElementsByName("nf_cstms_decl_cnt_cd")[0].value;
		var nfZip = document.getElementsByName("nf_cust_zip_id")[0].value;
		var nfStreet = document.getElementsByName("nf_eur_cstms_st_nm")[0].value;
		
		if(shCity == "" || shCntry == "" || shZip == "" || shStreet == "" || cnCity == "" || cnCntry == "" || cnZip == "" || cnStreet == "" || nfCity == "" || nfCntry == "" || nfZip == "" || nfStreet == "")
		{
			alert("Please check SHPR / CNEE / Notify Address properly.");
		}
	}
	catch(err){ }
}

function getChargeTabSOP()//
{
	try
	{
		var pod = document.getElementsByName('frm_t10sheet1_pod_cd')[0].value.substring(0, 2);
		var del = document.getElementsByName("frm_t10sheet1_del_cd")[0].value.substring(0, 2); 

		if(pod == "BR" || del == "BR")
		{
			document.querySelector("#t10sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C32").title = "For Brazil shipment - need to hide( XDD ) charge ID.";
		}
	}
	catch(err){	}
}

function ChargePopup_USCA()//
{
	try
	{
		var POD = document.getElementById('frm_t10sheet1_pod_cd').value.substring(0,2);
		
		if(POD == "US" || POD == "CA")
		{
			alert("Please Check AMS/CDD/ACI charge");
		}
	}
	catch(err){	}
}

function BDCType()//
{
	try 
	{
		let blreadyOffice = document.getElementById("frm_t11sheet1_bl_ready_office").value;
		let bldraftOffice = document.getElementById("frm_t11sheet1_bl_drft_ready_office").value;
		let blreadyType = document.getElementById("bl_ready_type_text").value;
		let bldraftType = document.getElementById("bl_drft_ready_type_text").value;

		let BLNumber = document.getElementsByName("frm_t11sheet1_bkg_no")[0].value;
		const officeMap = {
			HK: "HKGBB", SZ: "SZPBB", CA: "CANBB", ZH: "ZHOBB", CK: "CKGBB", NK: "NKGBB", WU: "WUHBB", NB: "NBOBB",	SH: "SHABB", DL: "DLCBB", LY: "LYGBB", TA: "TAOBB", TS: "TSNBB"
		};
		const prefix = BLNumber.substr(0, 2);
		const expectedOffice = officeMap[prefix] || "";

		const isReadyChecked = document.getElementById("bl_ready_checkbox").checked;
		const isDraftChecked = document.getElementById("bl_drft_ready_checkbox").checked;
		const saveButton = document.getElementById("btn_t11Save");

		if (isReadyChecked) 
		{
			if (blreadyOffice !== bldraftOffice || blreadyType !== bldraftType || blreadyOffice !== expectedOffice) 
			{
				alert("Update correct Office and BL type of B/L DATA COMPLETE and B/L DRAFT COMPLETE. Office must match BL prefix.");
				saveButton.setAttribute("disabled", true);
			} 
			else 
			{
				saveButton.removeAttribute("disabled");
			}
		} 
		else if (isDraftChecked) 
		{
			if (bldraftOffice !== expectedOffice) 
			{
				alert("Update correct Office and BL type of B/L DRAFT COMPLETE. Office must match BL prefix.");
				saveButton.setAttribute("disabled", true);
			} 
			else 
			{
				saveButton.removeAttribute("disabled");
			}
		}
		else 
		{
			saveButton.removeAttribute("disabled");
		}
	} 
	catch (err) {	}
}

function draft_popup()//
{
	try
	{
		var waybill = document.evaluate('//*[@id="sheet1"]/tbody/tr[2]/td[1]/div/div[1]/table/tbody/tr[6]/td[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.className;
		
		if(waybill.includes(" GMWrap0 GMAlignCenter GMBool1 GMCell IBSheetFont0 GMEmpty HideCol0C2"))
		{
			
		}
		else
		{
			alert("Please check SI remarks or SOP for draft sending ID");
		}
	}
	catch(err){	}
}

function JAS_Customer()
{
	try
	{
		let cnName = document.getElementsByName("cn_cust_nm")[0].value;
		
		if(cnName == "JAS AS AGENT FOR BLUE WORLD LINE")
		{
			document.getElementsByName("sam_cnee_copy_flg")[0].setAttribute("disabled", true);
			alert("Update the notify party company name as per ESI");
		}
		else
		{
			document.getElementsByName("sam_cnee_copy_flg")[0].removeAttribute("disabled");
		}
	}
	catch(err){}
}

function prohibited_Japanese_Entities()
{
	try
	{
		let shCode = (document.getElementsByName("sh_cust_cnt_cd")[0]?.value || "" );
		let cnCode = (document.getElementsByName("cn_cust_cnt_cd")[0]?.value || "" );
		let nfCode = (document.getElementsByName("nf_cust_cnt_cd")[0]?.value || "" );
		let anCode = (document.getElementsByName("an_cust_cnt_cd")[0]?.value || "" );
		let shName = (document.getElementsByName("sh_cust_nm")[0]?.value || "" ).replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
		let cnName = (document.getElementsByName("cn_cust_nm")[0]?.value || "" ).replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
		let nfName = (document.getElementsByName("nf_cust_nm")[0]?.value || "" ).replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
		let anName = (document.getElementsByName("an_cust_nm")[0]?.value || "" ).replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
		let shAdd = (document.getElementsByName("sh_cust_addr")[0]?.value || "" ).replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
		let cnAdd = (document.getElementsByName("cn_cust_addr")[0]?.value || "" ).replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
		let nfAdd = (document.getElementsByName("nf_cust_addr")[0]?.value || "" ).replace(/\r?\n/g, " ").replace(/\s+/g, " ").trim();
		let shLName = (document.getElementsByName("sh_cust_lgl_eng_nm")[0]?.value || "" );
		let cnLName = (document.getElementsByName("cn_cust_lgl_eng_nm")[0]?.value || "" );
		let nfLName = (document.getElementsByName("nf_cust_lgl_eng_nm")[0]?.value || "" );
		let anLName = (document.getElementsByName("an_cust_lgl_eng_nm")[0]?.value || "" );
		
		const prohibitedCustomers = [
			"MITSUBISHI HEAVY INDUSTRIES SHIPBUILDING CO",
			"MITSUBISHI HEAVY INDUSTRIES AERO ENGINES",
			"MITSUBISHI HEAVY INDUSTRIES MARINE MACHINERY & EQUIPMENT CO",
			"MITSUBISHI HEAVY INDUSTRIES ENGINE & TURBOCHARGER",
			"MITSUBISHI HEAVY INDUSTRIES MARITIME SYSTEMS",
			"KAWASAKI HEAVY INDUSTRIES AEROSPACE SYSTEMS CO",
			"KAWAJU GIFU ENGINEERING CO",
			"FUJITSU DEFENSE & NATIONAL SECURITY",
			"IHI POWER SYSTEMS CO",
			"IHI MASTER METAL CO",
			"IHI JET SERVICE CO",
			"IHI AEROSPACE CO",
			"IHI AERO MANUFACTURING CO",
			"IHI AEROSPACE ENGINEERING CO",
			"NEC NETWORK AND SENSOR SYSTEMS",
			"NEC AEROSPACE SYSTEMS",
			"JAPAN MARINE UNITED CO",
			"JMU DEFENSE SYSTEMS CO",
			"NATIONAL DEFENSE ACADEMY OF JAPAN",
			"JAPAN AEROSPACE EXPLORATION AGENCY",
			"SUBARU CORPORATION",
			"FUJI AEROSPACE TECHNOLOGY CO",
			"ENEOS CORPORATION",
			"YUSOKI CO",
			"ITOCHU AVIATION CO",
			"LEDA GROUP HOLDINGS CO",
			"INSTITUTE OF SCIENCE TOKYO",
			"MITSUBISHI MATERIALS CORPORATION",
			"ASPP CO",
			"YASHIMA DENKI CO",
			"SUMITOMO HEAVY INDUSTRIES",
			"TDK CORPORATION",
			"MITSUI BUSSAN AEROSPACE CO",
			"HINO MOTORS",
			"TOKIN CORPORATION",
			"NISSIN ELECTRIC CO",
			"SUN TECTRO CO",
			"NITTO DENKO CORPORATION",
			"NOF CORPORATION",
			"NACALAI TESQUE",
			"FN HERSTAL, FABRIQUE NATIONALE DE HERSTAL",
			"OMNIPOL A.S.",
			"HENSOLDT AG",
			"EXCALIBUR ARMY SPOL.S.R.O",
			"SPACEKNOW INC., ODSTEPNY ZAVOD S.R.O",
			"VZLU AEROSPACE A.S.",
			"FN BROWNING",
			"AVEOX",
			"RED CAT HOLDINGS",
			"TEAL DRONES",
			"IMSAR",
			"JAIA ROBOTICS",
			"BALL AEROSPACE & TECHNOLOGIES",
			"OSHKOSH DEFENSE",
			"L3HARRIS MARITIME SERVICES",
			"MP MATERIALS",
			"USA RARE EARTH",
			"NATIONAL INSTITUTE FOR DEFENSE STUDIES",
			"GROUND SYSTEMS RESEARCH CENTER",
			"NAVAL SYSTEMS RESEARCH CENTER",
			"AIR SYSTEMS RESEARCH CENTER",
			"NIKKO TOKKI",
			"NIKKO-YPK SHOJI",
			"MITSUBISHI ELECTRIC DEFENSE AND SPACE TECHNOLOGIES",
			"MITSUBISHI ELECTRIC SOFTWARE ",
			"MITSUBISHI ELECTRIC ENGINEERING COMPANY",
			"MITSUBISHI PRECISION COMPANY",
			"MHI OCEANINCS",
			"MHI SAGAMI HIGH-TECH",
			"MHI LOGITEC",
			"KOWA KOGYO",
			"MHI SPECIAL VEHICLES PARTS SUPPLY & TECHNICAL SERVICE",
			"MHI MARITECH",
			"KAWAJYU GIFU MANUFACTURING",
			"NIPPI CORPORATION",
			"FORTUNIO",
			"AOKI SEIMITSU KOGYO",
			"MITSUI E&S",
			"MITSUI BUSSAN AEROSPACE CO., MAINTENANCE CENTER",
			"TERRA DRONE CORPORATION",
			"ACSL",
			"MITSUBISHI NUCLEAR FUEL",
			"JAPAN NUCLEAR FUEL ",
			"FUJITSU NETWORK SOLUTIONS",
			"HITACHI ADVANCED SYSTEMS CORPORATION",
			"KOMATSU INDUSTRIES CORPORATION",
			"KOMATSU NTC",
			"OKI ELECTRIC INDUSTRY",
			"OKI COM-ECHOES",
			"OKI CIRCUIT TECHNOLOGY",
			"OKI NEXTECH",
			"OKI ENGINEERING",
			"YDK TECHNOLOGIES",
			"NIHON DENJI SOKKI",
			"HOWA MACHINERY",
			"HOSOYA PYRO-ENGINEERING",
			"THE FUJIKURA PARACHUTE"
		];
		let flag = 0;
		let msg = "";
		if(shCode == "JP")
		{
			prohibitedCustomers.forEach(function(entity) {
            if (shName.startsWith(entity) || shAdd.includes(entity) || shLName.startsWith(entity)) {
                flag = 1;
                msg += entity + " customer is prohibited. Kindly check with Legal Team\n";
            }
        });
		}
		if(cnCode == "JP")
		{
			 prohibitedCustomers.forEach(function(entity) {
            if (cnName.startsWith(entity) || cnAdd.includes(entity) || cnLName.startsWith(entity)) {
                flag = 1;
                msg += entity + " customer is prohibited. Kindly check with Legal Team\n";
            }
        });
		}
		if(nfCode == "JP")
		{
			prohibitedCustomers.forEach(function(entity) {
            if (nfName.startsWith(entity) || nfAdd.includes(entity) || nfLName.startsWith(entity)) {
                flag = 1;
                msg += entity + " customer is prohibited. Kindly check with Legal Team\n";
            }
        });
		}
		if(anCode == "JP")
		{
			prohibitedCustomers.forEach(function(entity) {
            if (anName.startsWith(entity) || anLName.startsWith(entity)) {
                flag = 1;
                msg += entity + " customer is prohibited. Kindly check with Legal Team\n";
            }
        });
		}
		
		if(shName.startsWith("HIKVISION") || shAdd.includes("HIKVISION") || shLName.startsWith("HIKVISION") || cnName.startsWith("HIKVISION") || cnAdd.includes("HIKVISION") || cnLName.startsWith("HIKVISION") || nfName.startsWith("HIKVISION") || nfAdd.includes("HIKVISION") || nfLName.startsWith("HIKVISION") || anName.startsWith("HIKVISION") || anLName.startsWith("HIKVISION"))
		{
			flag = 1;
            msg += "HIKVISION customer is prohibited. Kindly check with Legal Team\n";
		}
		
		if(flag == 1)
		{
			alert(msg.trim());
			document.getElementsByName("btn_t7Save")[0].setAttribute("disabled", true);
		}
		else
		{
			document.getElementsByName("btn_t7Save")[0].removeAttribute("disabled");
		}
	}catch(err){}
}

function outside_CNEE_NP()
{
	try
	{
		var POD = document.getElementsByName("pod_cd")[0].value.substring(0,2);
		var DEL = document.getElementsByName("del_cd")[0].value.substring(0,2);
		var Consignee = document.getElementsByName("cn_cust_cnt_cd")[0].value;
		var Notify = document.getElementsByName("nf_cust_cnt_cd")[0].value;
		let flag = 0;
		if(DEL == "CO")
		{
			if(Consignee != "CO" && Notify != "CO")
			{
				alert("Outside consignee and notify is not allowed for Colombia");
				flag = 1;
			}
		}
		if(flag == 1)
		{
			document.getElementsByName("btn_t7Save")[0].setAttribute("disabled", true);
		}
		else
		{
			document.getElementsByName("btn_t7Save")[0].removeAttribute("disabled");
		}
	}
	catch(err)
	{
		
	}
}

function validateCustomerRatesAs() //Sunil
{
    try
    {
        let scNo = document.getElementById("frm_t10sheet1_sc_no1").value.trim();
        let rfaNo = document.getElementById("frm_t10sheet1_rfa_no").value.trim();
        let taaNo = document.getElementById("frm_t10sheet1_taa_no").value.trim();

        let saveButton = document.getElementById("btn_t10save");

        let validCustomer = false;

        if (scNo == "SHAB01757A" || scNo == "SHA0040B26" || scNo == "LEHB01447A" || rfaNo == "SHAB01757A" || rfaNo == "SHA0040B26" || rfaNo == "LEHB01447A" || taaNo == "SHAB01757A" || taaNo == "SHA0040B26" || taaNo == "LEHB01447A")
        {
            validCustomer = true;
        }

        if (validCustomer == false)
        {
            saveButton.disabled = false;
            return;
        }

        let ratedRows = document.getElementsByClassName("GMWrap0 GMAlignRight GMFloat GMCell IBSheetFont1 HideCol1C10");
        let inRows = document.getElementsByClassName("GMWrap0 GMAlignCenter GMText GMCell IBSheetFont1 HideCol1C16");

        saveButton.disabled = false;

        for (let i = 0; i < ratedRows.length; i++)
        {
            let ratedValue = ratedRows[i].innerText.trim();
            let inValue = inRows[i].innerText.trim();

            if (inValue == "N")
            {
                let number = parseFloat(ratedValue);

                if (number % 1 != 0)
                {
                    alert("For IKEA / Decathlon customers, Rated As must contain only whole values when IN column is N.");
                    saveButton.disabled = true;
                    return;
                }
            }
        }
        saveButton.disabled = false;
    }
    catch(err)
    {
        
    }
}


function validateShipperName()
{
try
{
let shipperName = document.getElementById("sh_cust_nm").value
.replace(/\s+/g, "")
.toUpperCase();

    let saveButton = document.getElementById("btn_t7Save");

    if (shipperName.includes("DONGGUANYUANSENARTS&CRAFTSCO.LTD")
        ||
        shipperName.includes("SHENZHENENKORELECTRONICSLTD"))
    {
        saveButton.disabled = true;

        alert("Invalid Shipper Name \r\nPlease hold the Bill & do not process the Bill");

        let comment = "";

        while (comment.trim().toUpperCase() !== "YES")
        {
            comment = prompt(
                "Are you stopping Bill processing? \r\n1.Yes \r\n2.No"
            );

            if (comment === null)
            {
                alert("Invalid comment");
                comment = "";
                continue;
            }

            comment = comment.trim().toUpperCase();

 
            if (comment === "YES")
            {
                alert("Please hold the Bill & do not process the Bill");

                saveButton.disabled = true;

                return false;
            }

            if (comment === "NO")
            {
                alert("Onshore confirmation has been received, and we are proceeding with the Bill processing.");

                saveButton.disabled = true;

                return false;
            }

            alert("Invalid comment");
        }

        saveButton.disabled = true;

        return false;
    }

    saveButton.disabled = false;

    return true;
}
catch(err)
{
   
}

}


function BlackListedCode()
{
    let countryCode;
    let customerCode;
    let saveButton;

    try
    {
        countryCode = document.getElementsByName("sh_cust_cnt_cd")[0].value.trim().toUpperCase();
        customerCode = document.getElementById("sh_cust_seq").value.trim();
        saveButton = document.getElementById("btn_t7Save");

        if(countryCode == "CN" && customerCode == "509723")
        {
            alert("Shipper Dummy code (CN509723) not Acceptable for HKGD region.");
            saveButton.disabled = true;
            return false;
        }
        else
        {
            saveButton.disabled = false;
            return true;
        }
    }
    catch(err)
    {
        
    }
}

function ManualChargeValidation()
{
	try
	{
		let rowCount = document.getElementsByClassName(" GMClassReadOnly GMWrap0 GMAlignCenter GMText GMCell IBSheetFont1 HideCol1C33").length;

		for(var i = 0; i < rowCount; i++)
		{
			if(document.getElementsByClassName(" GMClassReadOnly GMWrap0 GMAlignCenter GMText GMCell IBSheetFont1 HideCol1C33")[i].innerText == "M")
			{
				let reply = prompt("Manual Charge Available. Please copy for addition (Yes)");
				for(var j = 0; j < 35; j++)
				{
					if(reply == null || reply.trim().toLowerCase() != "yes")
					{
						reply = prompt("Invalid Comment. Manual Charge Available. Please copy for addition (Yes)");
						j--;
					}
					else
					{
						j = j+40;
						i = i+100;
					}
				}
			}
		}
	}
	catch(err){}
}