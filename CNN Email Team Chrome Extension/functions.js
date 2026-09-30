function chargeTab_popups()
{
	var ikea_charge = ['BAO', 'AMA', 'LPS','CTF'];
	var ikea_rfa = ['SHAB01254A', 'SHAB01592A'];
	var country = ['US', 'CA', 'MX'];
	var samsung_charge=['COD','BAO','AMA','CDC'];
    var samsung_rfa=['SELB02369A','SELB03592A'];
	
	var rfa = document.getElementsByName("frm_t10sheet1_rfa_no")[0].value;
	var sc = document.getElementsByName("frm_t10sheet1_sc_no1")[0].value;
	var chargeCode = document.getElementsByClassName(' GMWrap0 GMAlignCenter GMPopupEdit GMCell IBSheetFont1 GMNoRight HideCol1C4');
	var mode = document.getElementsByClassName('GMClassReadOnly GMWrap0 GMAlignCenter GMText GMCell IBSheetFont1 HideCol1C33');
	var pod = document.getElementsByName("frm_t10sheet1_pod_cd")[0].value.substr(0,2);
	var bl_prefix = document.getElementsByName("frm_t10sheet1_bkg_no")[0].value.substring(0,2);
	var currency = document.getElementsByClassName('GMWrap0 GMAlignCenter GMPopupEdit GMCell IBSheetFont1 GMNoRight HideCol1C7');
	
	var flag = 0;
	//IKEA
	try
	{
		for(var i = 0; i < ikea_rfa.length; i++)
		{
			if(rfa == ikea_rfa[i] || sc == ikea_rfa[i])
			{
				for(var j = 0; j < ikea_charge.length; j++)
				{
					for(var k = 0; k < chargeCode.length; k++)
					{
						if(chargeCode[k].innerText == ikea_charge[j] && mode[k].innerText == "M")
						{
							alert("No Late SI Fee for IKEA, under the RFA # SHAB01254A & SHAB01592A");
							flag = 1;
							break;
						}
					}
				}
			}
		}
	}catch(err)	{	}
	
	//samsung
    try
    {
        for(var i = 0; i < samsung_rfa.length; i++)
        {
                if(rfa == samsung_rfa[i] || sc == samsung_rfa[i])
            {
                  for(var j = 0; j < samsung_charge.length; j++)
                {
                       for(var k = 0; k < samsung_charge.length; k++)
                    {
                          if(chargeCode[k].innerText == samsung_charge[j] && mode[k].innerText == "M")
                        {
                          alert("No COD,BAO,AMA,CDC Charge for Samsung, under the RFA # SELB02369A & SELB03592A");
                          flag = 1;
                          break;
                        }
                   }
                }
            }
        }
    }catch(err){    }
	
	//AMA US/CA/MX
	try
	{
		for(var i = 0; i < country.length; i++)
		{
			if(pod == country[i])
			{
				for(var j = 0; j < chargeCode.length; j++)
				{
					if(chargeCode[j].innerText == "AMA" && mode[j].innerText == "M")
					{
						alert(" AMA Fee is not allowed for US/CA/MX Shipment");
						flag = 1;
						break;
					}
				}
			}
		}
	}catch(err){	}
	
	//BAO RFA HAMB03155A
	try
	{
		if(bl_prefix == "SH" && (rfa == "HAMB03155A" || sc == "HAMB03155A"))
		{
			for(var i = 0; i < chargeCode.length; i++)
			{
				if(chargeCode[i].innerText == "BAO" && currency[i].innerText != "USD")
				{
					alert("BAO fee fixed as USD25/BL for SC/RFA HAMB03155A");
					flag = 1;
					break;
				}
			}
		}
	}catch(err){	}
	
	if(flag == 1)
	{
		document.getElementById("btn_t10save").setAttribute("disabled",true);
	}
	else
	{
		document.getElementById("btn_t10save").disabled = false;
	}
}

function chargeTabWarnPopup()
{
	//Covestro HAM0004B25(TP), HAMB03501A(Non TP)
	try
    {
		var covestro_rfa = ['HAM0004B25', 'HAMB03501A'];
		var rfa = document.getElementsByName("frm_t10sheet1_rfa_no")[0].value;
		var sc = document.getElementsByName("frm_t10sheet1_sc_no1")[0].value;
		
        for(var i = 0; i < covestro_rfa.length; i++)
        {
            if(rfa == covestro_rfa[i] || sc == covestro_rfa[i])
            {         
				alert("Check fee instruction for Covestro customer");
				break;
            }
        }
    }
	catch(err){    }
	
	//CNPT code = DE102107 No BAO charges 
	try
	{
		let polList = ["CNSHA", "CNNGB", "CNNKG", "CNWUH", "CNCKG", "CNTAO", "CNTXG", "CNDLC", "CNLYG"];
		let pol = document.getElementById("frm_t10sheet1_pol_cd").value;
		let rfa = document.getElementById("frm_t10sheet1_rfa_no").value;
		let sc = document.getElementById("frm_t10sheet1_sc_no1").value;
		
		let x = false;
		x = polList.includes(pol);
		
		if(x)
		{
			if(rfa == "HAMB03794A" || sc == "HAMB03794A")
			{
				alert("If the CNPT code is DE102107 then No BAO charges for any B/L amendments.");
			}
		}
	}
	catch(err){ }
}

function INbound_Popup()
{
	try
	{
		document.getElementsByName('io_bnd_cd')[0].setAttribute("disabled",true);
		if(document.getElementsByName('io_bnd_cd')[0].value == "I")
		{
			alert("Please select Bound as O/B");
			document.getElementsByName('io_bnd_cd')[0].value = "O";
		}
	}catch(err)	{	}
}

function BlinkCustomer_popup()
{
	try
	{
		var sh = document.getElementsByName("s_cust_cnt_cd")[0].value + document.getElementsByName("s_cust_seq")[0].value;
		var fw = document.getElementsByName("f_cust_cnt_cd")[0].value + document.getElementsByName("f_cust_seq")[0].value;
		
		var sharr = ["CN205388", "CN119875", "CN204491", "CN241710", "CN589684", "CN215262", "CN614034", "CN301112", "CN107264", "CN313517", "CN532905", "CN108835", "CN508989", "CN166196", "CN346677", "CN121505", "CN509038"];
		var fwarr = ["CN205388", "CN119875", "CN204491", "CN241710", "CN589684", "CN215262", "CN614034", "CN301112", "CN107264", "CN313517", "CN532905", "CN108835", "CN508989", "CN166196", "CN346677", "CN121505", "CN509038"];
		
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
		}
	}catch(err)	{	}
}

function ShenzhenEnkorHardStop()
{
	//Customer Tab
	try
	{
		let shName = document.getElementById("sh_cust_nm")?.value.replace(/\s+/g, "");
		let comment = null;
		if(shName.startsWith("SHENZHENENKORELECTRONICSLTD"))
		{
			for(var i = 0; i < 35; i++)
			{
				comment = prompt("Please do not amend any BL details if BL shows Shipper: Shenzhen Enkor Electronics LTD. \r\nPlease escalate the case to jun.wu@one-line.com & Onshore CS.\r\n\r\nIF Onshore approval received: (Yes / No)");
				
				if(comment == null)
				{
					i--;
					continue;
				}
				else if(comment.toLowerCase() == "no")
				{
					document.getElementById("btn_t7Save").setAttribute("disabled", true);
					break;
				}
				else if(comment.toLowerCase() == "yes")
				{
					document.getElementById("btn_t7Save").removeAttribute("disabled");
					break;
				}
				else
				{
					i--;
					continue;
				}
			}
		}
	}catch(err){ }
	
	//C/M Tab
	try
	{
		let shName = document.getElementById("shpr_nm")?.value.replace(/\s+/g, "");
		let comment = null;
		if(shName.startsWith("SHENZHENENKORELECTRONICSLTD"))
		{
			for(var i = 0; i < 35; i++)
			{
				comment = prompt("Please do not amend any BL details if BL shows Shipper: Shenzhen Enkor Electronics LTD. \r\nPlease escalate the case to jun.wu@one-line.com & Onshore CS.\r\n\r\nIF Onshore approval received: (Yes / No)");
				
				if(comment == null)
				{
					i--;
					continue;
				}
				else if(comment.toLowerCase() == "no")
				{
					document.getElementById("btn_t9Save").setAttribute("disabled", true);
					break;
				}
				else if(comment.toLowerCase() == "yes")
				{
					document.getElementById("btn_t9Save").removeAttribute("disabled");
					break;
				}
				else
				{
					i--;
					continue;
				}
			}
		}
	}catch(err){ }
	
	//B/L Issue Tab
	try
	{
		let shName = document.getElementById("frm_t11sheet1_shpr_name")?.value.replace(/\s+/g, "");
		let comment = null;
		if(shName.startsWith("SHENZHENENKORELECTRONICSLTD"))
		{
			for(var i = 0; i < 35; i++)
			{
				comment = prompt("Please do not amend any BL details if BL shows Shipper: Shenzhen Enkor Electronics LTD. \r\nPlease escalate the case to jun.wu@one-line.com & Onshore CS.\r\n\r\nIF Onshore approval received: (Yes / No)");
				
				if(comment == null)
				{
					i--;
					continue;
				}
				else if(comment.toLowerCase() == "no")
				{
					document.getElementById("btn_t11BLRelease").setAttribute("disabled", true);
					document.getElementById("btn_t11InternetAUTH").setAttribute("disabled", true);
					break;
				}
				else if(comment.toLowerCase() == "yes")
				{
					document.getElementById("btn_t11BLRelease").removeAttribute("disabled");
					document.getElementById("btn_t11InternetAUTH").removeAttribute("disabled");
					break;
				}
				else
				{
					i--;
					continue;
				}
			}
		}
	}catch(err){ }
}