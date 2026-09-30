var consignee_name = window.localStorage.getItem('consigneename');
var BK_bkg_no = window.localStorage.getItem('bkg_no');
var c_cust_nm = window.localStorage.getItem('c_cust_nm');
var email = window.localStorage.getItem('email');
var Cust_ex_cust_nm = window.localStorage.getItem('ex_cust_nm');
var Cust_ff_cust_lgl_eng_nm = window.localStorage.getItem('ff_cust_lgl_eng_nm');
var BK_f_cust_nm = window.localStorage.getItem("f_cust_nm");
//
var BK_bkg_sts_cd = window.localStorage.getItem('bkg_sts_cd');
var BK_edi_hld_flg = window.localStorage.getItem('edi_hld_flg');
var BK_rcv_term_cd_text = window.localStorage.getItem('rcv_term_cd_text');
var term = window.localStorage.getItem('term');


function BKGSave()
{
	document.getElementById('btn_t1FaxEDI').style.backgroundColor = "#f1a9f3";
	var sc_no = document.getElementsByName('sc_no')[0].value;
	var s_cust_seq = document.getElementsByName('s_cust_seq')[0].value;
	var bkg_del_cd = document.getElementsByName('bkg_del_cd')[0].value;
	BK_edi_hld_flg = document.getElementsByName('edi_hld_flg')[0].value;
	var danger = document.getElementsByName('dcgo_flg')[0];
	var refer = document.getElementsByName('rc_flg')[0];
	var awkward = document.getElementsByName('awk_cgo_flg')[0];

	if(document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont0.HideCol0C2") != null){
		var TP = document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont0.HideCol0C2").innerHTML;
		document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont0.HideCol0C2").style.backgroundColor = "#f1a9f3";
	}

	if(bkg_del_cd == 'SGSIN' || bkg_del_cd == 'CNDLC' || bkg_del_cd == 'THLCH')
   {
		if(sc_no == 'STRB00001' && s_cust_seq == '201409')
		{
			var txtPor = document.getElementsByName('bkg_por_cd')[0];
			txtPor.value = 'USGXX';
			var txtPol = document.getElementsByName('bkg_pol_cd')[0];
			txtPol.value = 'USCHS'; 
			var x = document.getElementsByName('bkg_pol_yd_cd')[0];
			x.value = '01';
		}
   }
	
	BK_rcv_term_cd_text = document.getElementById('rcv_term_cd_text').value;
	if(BK_rcv_term_cd_text == 'D')
	{
		alert('Receiving Term is D, you need to go on TRO Tab and save the details');
	}
	
	var bkg_del_cd = document.getElementsByName('bkg_del_cd')[0].value;
	var sc_no = document.getElementsByName('sc_no')[0].value;
	
	if(sc_no == 'STRB00001' && s_cust_seq == '201409')
	{
		if(bkg_del_cd == "")
		{
			document.getElementsByName('bkg_del_cd')[0].style.background = "#f1a9f3";
		}
		else if(bkg_del_cd == "THLCH" || bkg_del_cd == "SGSIN" || bkg_del_cd == "CNTDLC")
		{
		}
		else
		{
			alert('Delivary Center Should be THLCH or SGSIN or CNTDLC');
			document.getElementsByName('bkg_del_cd')[0].style.background = "#f1a9f3";
		}
	}
}

/*function setFilerOnSave()
{
	if(document.getElementsByName('bkg_no')[0] != null) 
	{
		var BlNo = document.getElementsByName('bkg_no')[0].value;
	}
	var Lane = "";
	
	db.transaction (
		function(tx){
				tx.executeSql('SELECT * FROM Details where BLNumber = "'+ BlNo +'" ;', [],
				function(transaction, results){
					if (results != null && results.rows != null) {
						for (var j=0; j<results.rows.length; j++) {
							var row = results.rows.item(j) ;
						
							Lane = row.Lane;

					var inpObj = document.getElementsByTagName('input');	 
					for(var i in inpObj){
						if(inpObj[i].type == "text"){

					if(inpObj[57] != null && inpObj[60] != null) {
						if(inpObj[57].value == 'US' && inpObj[60].value == 'CA')
						{

						var USA = document.getElementById('usa_cstms_file_cd_text').value;
						var CA = document.getElementById('cnd_cstms_file_cd_text').value;
			
						if(Lane != null) 
						{
							if(Lane == "AL1" || Lane == "AL5" || Lane == "AL6" || Lane == "AL7" || Lane == "AL8" || Lane == "EC5" || Lane == "PN1" || Lane == "PN2" || Lane == "PN3")
							{
								
								if(document.getElementById("usa_cstms_file_cd_text").value != 3 || document.getElementById("cnd_cstms_file_cd_text").value != 3)
								{
									alert("Please set Filer Code value US = 3  |  CA = 3 ");
								}
								
								var months = document.getElementsByClassName("MAINCTL_TBL_TR")
									for (var i = 0; i < months.length; i++) 
									{
											document.getElementsByClassName('MAINCTL_TBL_TR')[0].style.backgroundColor = "blue"; 
									}
							}
							else
							{
								if(document.getElementById("usa_cstms_file_cd_text").value != '' || document.getElementById("cnd_cstms_file_cd_text").value != '')
								{
									alert("Please set Filer Code value US = ''  |  CA = '' ");
								}
							}
						}
					}
					}
					break;
					}
				}	
				

						}
					}
				});
		}
	);
}*/

function Clear()
{
    document.getElementById('btn_t1FaxEDI').style.backgroundColor = "";
}

/*function SaveTRODetails()
{
	var Status = '';
	var Rterm = '';
	db.transaction(function (tx) 
	{
		tx.executeSql('SELECT * FROM Details ORDER BY ROWID DESC LIMIT 1 ;', [],
				function(transaction, results){
					if (results != null && results.rows != null) {
						for (var j=0; j<results.rows.length; j++) {
							var row = results.rows.item(j) ;							
							Rterm = row.RTerm;
							Status = row.Status;
							if(document.getElementById('rcv_term_cd') != null)
							{
								var rcv_term_cd = document.getElementById('rcv_term_cd').value;
							}
							if(document.getElementById('term') != null)
							{
								var term = document.getElementById('term').value;
							}
							if(Rterm == 'W' || Rterm == 'w')
							{
								document.getElementsByName('cfm_flg')[0].checked = false;
							}
						}
					}
			});
	});
}*/

function Table_Tip()
{
	document.querySelector("#t2asheet5 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C2").title = "Total Qualntity should be equal to TRO Quantity.";
	document.querySelector("#t2asheet5 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C3").title = "Total Qualntity should be equal to TRO Quantity.";	
}
