function Payer_Code_Popup()
{
	try
	{
		alert("Please double check the Payer Code");
	}
	catch(err)
	{
		
	}
}

function BL_Type_Check()
{
	try
	{
		var bdc_Type = document.getElementById("bl_ready_type_text").value;
		var biss_Type = document.getElementById("frm_t11sheet1_bl_iss_tp_cd").value;
		var biss_Text = document.getElementById("bl_issuebl_type_text").value;//Original B/L
		var pod = document.getElementById("frm_t11sheet1_pod_code").value;
		var del = document.getElementById("frm_t11sheet1_del_code").value;
		
		if(pod.startsWith("BR") || del.startsWith("BR"))
		{
			if(bdc_Type != "B" || biss_Type != "B" || biss_Text != "Original B/L" )
			{
				alert("As per Brazil country requirements, it should always be 'B'");
				document.getElementById("btn_t11Save").disabled = true;
			}
			else
			{
				document.getElementById("btn_t11Save").disabled = false;
			}
		}
		else if(pod.startsWith("AR") || del.startsWith("AR"))
		{
			if(bdc_Type != "B" || biss_Type != "B" || biss_Text != "Original B/L" )
			{
				alert("As per Argentina country requirements, it should always be 'B'");
				document.getElementById("btn_t11Save").disabled = true;
			}
			else
			{
				document.getElementById("btn_t11Save").disabled = false;
			}
		}
		else if(pod.startsWith("NG") || del.startsWith("NG"))
		{
			if(bdc_Type != "B" || biss_Type != "B" || biss_Text != "Original B/L" )
			{
				alert("As per Nigeria country requirements, it should always be 'B'");
				document.getElementById("btn_t11Save").disabled = true;
			}
			else
			{
				document.getElementById("btn_t11Save").disabled = false;
			}
		}
		else
		{
			document.getElementById("btn_t11Save").disabled = false;
		}
	}
	catch(err)
	{
		
	}
}

function Enable_BLIssue()
{
	try
	{
		document.getElementById("btn_t11Save").disabled = false;
	}
	catch(err)
	{
		
	}
}

function update_Shipper()
{
	try
	{
		document.getElementById("btn_no").setAttribute("disabled",true);
		document.getElementById("CHK02").checked = true;
		document.getElementById("CHK01").checked = false;
		document.getElementById("CHK01").setAttribute("disabled",true);
	}
	catch(err)
	{
		
	}
}

function Marks_CBM_Blank_Popup()
{
	try
	{
		var marks = document.getElementsByName("mk_desc")[0].value;
		var cbm = document.getElementsByName("meas_qty")[0].value;
		var flag = 0;
		
		if(marks.trim() == "")
		{
			alert("Marks and Number field is Blank, please enter as per SI and if no information on SI, please update \"No Marks\"");
			document.getElementsByName("btn_t8Save")[0].disabled = true;
			flag = 1;
		}
		if(cbm == "0.000" || cbm == "0" || cbm == "")
		{
			alert("CBM field cannot be Blank or \"0\", please enter as per SI or standard CBM");
			document.getElementsByName("btn_t8Save")[0].disabled = true;
			flag = 1;
		}
		if(flag != 1)
		{
			document.getElementsByName("btn_t8Save")[0].disabled = false;
		}
		

	}
	catch(err)
	{
		
	}
}

function currency_popup()
{
	var curr_arr = ["USD", "EURO", "EUR", "$", "VALUE", "GBP", "INR"];
	var s = "";
	try
	{
		var md_marks = document.getElementsByName("mk_desc")[0].value;
		var md_desc = document.getElementsByName("dg_cmdt_desc")[0].value;
		
		for(var i = 0; i < curr_arr.length; i++)
		{
			if(md_marks.includes(curr_arr[i]) || md_desc.includes(curr_arr[i]))
			{
				s = s + curr_arr[i] + ",";
			}
		}
		
		if(s.length > 0)
		{
			s = s.substring(0, s.length-1);
			alert("Monetary Keywords found - " + s);
		}
	}
	catch(err)
	{
		
	}
	try
	{
		var cm_marks = "";
		var cm_desc = "";
		var cntrcount_string = "";
		var cntr_count = "";
		var cc_count = "";
		
		cntrcount_string = document.querySelectorAll("#t9sheet1 > tbody > tr:nth-child(5) > td > div > table > tbody > tr > td.GMWrap0.GMAlignRight.GMCellSpace > div")[0].textContent;
		cntr_count = cntrcount_string.indexOf("/");
		cntrcount_string = cntrcount_string.substring(cntr_count + 2).replace("]", "");
		cntr_count = parseInt(cntrcount_string);

		cntr_count = cntr_count + 1;
		
		for (var a = 2; a <= cntr_count; a++)
        {
            cc_count = document.querySelector("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody").childElementCount;;
            for (var b = 2; b <= cc_count; b++)
            {
                try
                {
                    cm_desc = document.querySelector("#t9sheet2 > tbody > tr:nth-child(" + b + ") > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMLines.GMCell.IBSheetFont1.HideCol1C15").textContent;
                    cm_marks = document.querySelector("#t9sheet2 > tbody > tr:nth-child(" + b + ") > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMLines.GMCell.IBSheetFont1.HideCol1C13").textContent;

					for (var i = 0; i < curr_arr.length; i++)
					{
						if (cm_desc.includes(curr_arr[i]) || cm_marks.includes(curr_arr[i]))
						{
							s = s + curr_arr[i] + ",";
						}
					}
								
					if(s.length > 0)
					{	
						s = s.substring(0, s.length-1);
						alert("Monetary Keywords found - " + s);
					}
				}
                catch (err)
				{
					
                }
            }
        }
	}
	catch(err)
	{
		
	}
}

function Argentina_PTerm_MD()
{
	try
	{
		var del = document.getElementById("del_cd").value;
		var pterm = document.getElementsByName("frt_term_cd")[0].value;
		
		if(del.startsWith("AR") && pterm == "C")
		{
			alert('Manifestation of pay term "Collect" is not allowed for "Argentina Shipment"');
			document.getElementById("del_cd").style.background = "#e5b174";
			document.getElementsByName("frt_term_cd")[0].style.background = "#e5b174";
			document.getElementById("btn_t8Save").disabled = true;
		}
		else
		{
			document.getElementById("del_cd").style.background = "";
			document.getElementsByName("frt_term_cd")[0].style.background = "";
			document.getElementById("btn_t8Save").disabled = false;
		}
	}
	catch(err)
	{
		
	}
}

function Mandatory_field_cust()
{
	try
	{
		var del = document.getElementById("del_cd").value;
		
		if(del.startsWith("US") || del.startsWith("CA") || del.startsWith("MX"))
		{
			var cn_city = document.getElementById("cn_cust_cty_nm").value;
			var cn_state = document.getElementById("cn_cust_ste_cd").value;
			var cn_country = document.getElementById("cn_cstms_decl_cnt_cd").value;
			var cn_zip = document.getElementById("cn_cust_zip_id").value;
			var cn_street = document.getElementById("cn_eur_cstms_st_nm").value;
			var nf_city = document.getElementById("nf_cust_cty_nm").value;
			var nf_state = document.getElementById("nf_cstms_decl_cnt_cd").value;
			var nf_country = document.getElementById("nf_cstms_decl_cnt_cd").value;
			var nf_zip = document.getElementById("nf_cust_zip_id").value;
			var nf_street = document.getElementById("nf_eur_cstms_st_nm").value;
			
			if(cn_city.trim() == "" || cn_state.trim() == "" || cn_country.trim() == "" || cn_zip.trim() == "" || cn_street.trim() == "" || nf_city.trim() == "" || nf_state.trim() == "" || nf_country.trim() == "" || nf_zip.trim() == "" || nf_street.trim() == "")
			{
				alert("City / State / Country / Zip / Street is mandatory for Consignee & Notify Party");
				document.getElementById("btn_t7Save").disabled = true;
			}
			else
			{
				document.getElementById("btn_t7Save").disabled = false;
			}
		}
	}
	catch(err)
	{
		
	}
}

function QueueList_Draft_BR()
{
	try
	{
		var pod = document.getElementById("pod_cd").value;
		
		if(pod.startsWith("BR"))
		{
			alert('For Brazil shipment, send "All charges Freighted" draft.');
		}
	}
	catch(err)
	{
		
	}
}

function BKG_Fax_BR()
{
	try
	{
		var pod = document.getElementById("bkg_pod_cd").value;
		var del = document.getElementById("bkg_del_cd").value;
		
		if(pod.startsWith("BR") || del.startsWith("BR"))
		{
			document.getElementById("bkg_pod_cd").style.backgroundColor = "#e5b174";
			document.getElementById("bkg_del_cd").style.backgroundColor = "#e5b174";
			
			document.getElementById("btn_t1FaxEDI").style.backgroundColor = "#e5b174";
			document.getElementById("btn_t1FaxEDI").title = 'For Brazil shipment, send "All charges Freighted" draft.';
		}
		else
		{
			document.getElementById("bkg_pod_cd").style.backgroundColor = "";
			document.getElementById("bkg_del_cd").style.backgroundColor = "";
			
			document.getElementById("btn_t1FaxEDI").style.backgroundColor = "";
			document.getElementById("btn_t1FaxEDI").title = "";
		}
	}
	catch(err)
	{
		
	}
}

function BLIssue_MetroShipping()
{
	try
	{
		var blno = document.getElementById("frm_t11sheet1_bkg_no").value.substring(0,3);
		
		if(blno == "LIV")
		{
			var fwdr = document.getElementById("f_fwd_name").value;
			
			if(fwdr.startsWith("METRO SHIPPING"))
			{
				var remark = document.getElementById("frm_t11sheet1_obl_iss_rmk").value;
				if(!(remark.includes("SHIPPED ON BOARD")))
				{
					alert("For Forwarder 'METRO SHIPPING', it is mandatory to update 'SHIPPED ON BOARD' in BL remarks clause as per SOP");
				}
			}
		}
	}
	catch(err)
	{
		
	}
}

function checkTotalWeight()
{
	try
	{
		var cmWgt = parseFloat(document.getElementById("cntr_wgt").value.replaceAll(",",""));
		
		if(cmWgt < 21000)
		{
			alert("Please check and update correct Weight");
		}
	}
	catch(err)
	{
		
	}
	
	try
	{
		var mdWgt = parseFloat(document.getElementsByName("act_wgt")[0].value.replaceAll(",",""));
		
		if(mdWgt < 20.99)
		{
			alert("Please check and update correct Weight");
		}
		
		alert("Make sure to update all the details correctly in the Description");
	}
	catch(err)
	{
		
	}
}

function checkDuplicateSeal()
{
	try
	{
		var row = document.querySelectorAll("#t6sheet2 > tbody > tr:nth-child(5) > td > div > table > tbody > tr > td.GMWrap0.GMAlignRight.GMCellSpace > div")[0].innerText;
		row = parseInt(row.substring(row.indexOf("/")+1).replaceAll("]",""));
		
		var arr = [];
		if(document.querySelector("#t6sheet2 > tbody > tr:nth-child(2) > td:nth-child(1) > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont1.HideCol1C7"))
		{
			for(var i = 2; i < (row+2); i++)
			{
				var sl1 = document.evaluate('//*[@id="t6sheet2"]/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr[' + i + ']/td[2]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
				var sl2 = document.evaluate('//*[@id="t6sheet2"]/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr[' + i + ']/td[5]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
				
				if(sl1 != "&nbsp;")
				{
					arr.push(sl1);
				}
				if(sl2 != "&nbsp;")
				{
					arr.push(sl2);
				}
			}
			
			var duplicates = arr.filter((item, index) => arr.some((elem, idx) => elem === item && idx !== index));
			
			if(duplicates.length > 0)
			{
				alert("Duplicate Seal No found");
			}
		}
	}
	catch(err)
	{
		
	}
}


function updateCNPJNCM()
{
	try
	{
		var pod = document.getElementById("pod_cd").value.substring(0,2);
		var del = document.getElementById("del_cd").value.substring(0,2);
		
		if(pod == "BR" || del == "BR")
		{
			alert("Please check and update the CNPJ/NCN details for Brazil Shipment");
		}
	}
	catch(err)
	{
		
	}
}


function updateACID()
{
	try
	{
		var pod = document.getElementById("pod_cd").value.substring(0,2);
		var del = document.getElementById("del_cd").value.substring(0,2);
		
		if(pod == "EG" || del == "EG")
		{
			alert("Please check and update the ACID details for Egypt Shipment");
		}
	}
	catch(err)
	{
		
	}
}

function reeferPopup()
{
	try
	{
		var reefer = document.getElementsByName("rc_flg")[0].checked;
		
		if(reefer == true)
		{
			alert("Please match the Booking & SI temperature settings");
		}
	}
	catch(err)
	{
		
	}
}