function CNTR_Tab_Runner_BGClr()
{
	document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C30").style.backgroundColor = "#EC7215";
}

function CNTR_Tab_Runner() 
{
    document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C30").title = "If Container status is 'OC' then SWB cannot be released.";
}


var c = 0;
function check_OC_Status()
{
	
	if(document.getElementById("t6sheet2"))
	{
		var sheetObject=document.getElementById("t6sheet2");
		var rowCount = sheetObject.querySelectorAll("tr").length
	
		if (rowCount > 21)
		{
			rowCount = 21;
		}

		//if(document.querySelector("#t6sheet2 > tbody > tr:nth-child(2) > td:nth-child(2) > div > div.GMPageFirst > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont1.HideCol1C30"))
		//{
			for(var i=2;i<=rowCount;i++)
			{
				var rt = document.evaluate('//*[@id="t6sheet2"]/tbody/tr[2]/td[2]/div/div[1]/table/tbody/tr['+ i +']/td[25]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

				if(rt.replace("<em>","").startsWith("OC"))
				{
					c=1;
					alert("Container status is OC and cannot release the SWB!");
					break;
				}
			}
		//}
	}
}





function insertData() 
{
	var BLNumber = document.getElementsByName("bkg_no")[0].value;
	//Shipper Code and Name
    var SHPR_s_cust_seq= document.getElementsByName("s_cust_seq")[0].value;
    var SHPR_s_cust_nm= document.getElementsByName("s_cust_nm")[0].value;
	// Forwarder Code and Name
	var FWDR_Prf = document.getElementsByName("f_cust_cnt_cd")[0].value;
	var FWDR_f_cust_seq = document.getElementsByName("f_cust_seq")[0].value;
	var FWDR_f_f_cust_nm = document.getElementsByName("f_cust_nm")[0].value;
	// Consignee Code and Name
	var CNEE_c_cust_seq = document.getElementsByName("c_cust_seq")[0].value;
	var CNEE_c_cust_nm = document.getElementsByName("c_cust_nm")[0].value;
	// CNPT Code and Name
	var CNPT_bkg_ctrl_pty_cust_seq = document.getElementsByName("bkg_ctrl_pty_cust_seq")[0].value;
	var CNPT_bkg_ctrl_pty_cust_nm = document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].value;
	var SCNo = document.getElementsByName("sc_no")[0].value;
	var RFANo = document.getElementsByName("rfa_no")[0].value; 
	var DEL = document.getElementsByName("bkg_del_cd")[0].value;
	var POD = document.getElementsByName("bkg_pod_cd")[0].value;
	var POR = document.getElementsByName("bkg_por_cd")[0].value;
	var POL = document.getElementsByName("bkg_pol_cd")[0].value;
	
	var clr = document.getElementsByName("btn_t1RollOverInformation")[0].style['color'];
	
		
	db.transaction(function(t) {
        t.executeSql("delete from Customer");
		t.executeSql("delete from Email");
	});
	
    db.transaction(function(t) {
        t.executeSql("INSERT INTO Customer (BLNumber, SHPRCode, SHPRName, FWDRPrf, FWDRCode, FWDRName, CNEECode, CNEEName, CNPTCode, CNPTName, SCNo , RFANo, DEL, POD, POR, POL,clr) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)", [BLNumber, SHPR_s_cust_seq, SHPR_s_cust_nm, FWDR_Prf, FWDR_f_cust_seq, FWDR_f_f_cust_nm, CNEE_c_cust_seq, CNEE_c_cust_nm, CNPT_bkg_ctrl_pty_cust_seq, CNPT_bkg_ctrl_pty_cust_nm, SCNo, RFANo, DEL, POD, POR, POL,clr] , nullDataHandler, killTransaction);
		//t.executeSql('INSERT INTO Customer (BLNumber, SHPRCode, SHPRName, FWDRCode, FWDRName, CNEECode, CNEEName, CNPTCode, CNPTName, SCNo , RFANo, DEL, POD) VALUES (' + BLNumber + ', ' + SHPR_s_cust_seq + ',"' + SHPR_s_cust_nm + '", ' + FWDR_f_cust_seq + ',"' + FWDR_f_f_cust_nm + '" , ' + CNEE_c_cust_seq + ',"' + CNEE_c_cust_nm + '" , ' + CNPT_bkg_ctrl_pty_cust_seq + ',"' + CNPT_bkg_ctrl_pty_cust_nm + '", "' + SCNo + '", "' + RFANo + '", "' + DEL + '" , "' + POD + '") ');
		//t.executeSql("delete from Customer ;",  [], nullDataHandler, killTransaction);
		t.executeSql("Insert into Email (BLNumber, SHPRCode, SHPRName) values (?, ?, ?)", [BLNumber, SHPR_s_cust_seq, SHPR_s_cust_nm] , nullDataHandler, killTransaction);
    });
	
	function nullDataHandler(transaction, results){
		
	}
    
	function killTransaction(transaction, error){
	
	}
   
	var si_cntc_pson_eml = document.getElementsByName("si_cntc_pson_eml")[0].value;
	
	if(SHPR_s_cust_nm == "COHESION FREIGHT (HK) LIMITED")
	{		
		si_cntc_pson_eml.value = "sea-hkg@cohesionfreight.com.hk";
	}
	else
	{
		document.getElementsByName("si_cntc_pson_eml")[0].title = "";
	}
}

function highlight()
{
	try
	{
		document.querySelector('body > form:nth-child(8) > div.wrap_result.coupled_btn_normal2 > div.layout_wrap > div.layout_flex_fixed > div:nth-child(3) > table.grid_2 > tbody > tr:nth-child(1)').setAttribute("style","outline : 1px solid red !important");
		document.querySelector('body > form:nth-child(8) > div.wrap_result.coupled_btn_normal2 > div.layout_wrap > div.layout_flex_fixed > div:nth-child(3) > table.grid_2 > tbody > tr:nth-child(2)').setAttribute("style","outline : 1px solid red !important");
		
		var c = document.getElementById('on_board_type_text').value;
		if(c == "R")
		{
			document.querySelector('#on_board_type_text').setAttribute("style","outline: red solid 1px !important;width: 15px;color: red;background-color: yellow !important;font-weight: 900;");
		}
		else
		{
			document.querySelector('#on_board_type_text').setAttribute("style","width: 15px; color: rgb(0, 0, 0);");
		}
	}
	catch(err)
	{
		
	}
}

