 var element = document.getElementsByTagName('*');
 
 window.addEventListener("load", function () { DeleteData(); });
 
 
 for (var i = 0, l = element.length; i < l; i++) {
    var flag = 1;
	
 switch (element[i].name) {
            case "bkg_no":
//db				element[i].addEventListener("change", function() { insertData(); });
				element[i].addEventListener("change", function () { DeleteData(); });
				element[i].addEventListener("keypress", function () { del_in_custRemark(); });
				element[i].addEventListener("keypress", function () { Cmdt_zero(); });
				element[i].addEventListener("keypress", function () { WEQ_Check(); });
				element[i].addEventListener("keypress", function () { check_filer(); });
				element[i].addEventListener("keypress", function () { RD_Term(); });
                flag = 0;
                break;
				
			case "btn_t1retrieve":
//db				element[i].addEventListener("mouseup", function () { insertData(); });
//db				element[i].addEventListener("mouseover", function() { EDIFilerCheck(); } );
				element[i].addEventListener("click", function () { del_in_custRemark(); });
				element[i].addEventListener("click", function () { Cmdt_zero(); });
				element[i].addEventListener("click", function () { WEQ_Check(); });
				element[i].addEventListener("click", function () { check_filer(); });
				element[i].addEventListener("click", function () { RD_Term(); });
				flag = 0;
                break;
			
			case "edi_hld_flg":
				element[i].title = "Check AutoEDI Checkbox.";
				flag = 0;
				break;
				
			case "bkg_sts_cd":
				element[i].addEventListener("change", function () { CheckAutoEDITick(); });
				flag = 0;
				break;
				
            case "form":
                element[i].addEventListener("mouseover", function () { Faxbgcolor(); });
				element[i].addEventListener("mouseover", function () { TROTabHighlight(); });				
                flag = 0;
                break; 
			
			case "btn_gotobkg":
//db				element[i].addEventListener("mouseover", function() { EDIFilerCheck(); } );
				flag = 0;
				break;
				
			// Booking Save 
			case "btn_t1Save":
			case "btn_t1RmkSave":
				element[i].title = "Check AutoEDI Checkbox.";
				element[i].addEventListener("mouseup", function() { BKGSave(); });
//db				element[i].addEventListener("mouseover", function() { setFilerOnSave();} );
                flag = 0;
                break;
			
			//case "btn_Close":
			case "btn_t1FaxEDI":
				element[i].addEventListener("mouseup", function() { Clear(); });
                flag = 0;
                break;
				
			// TRO Tab Save / Retrive
			case "btn_t2aSaveSeq":
			case "btn_t2aSave":
			case "btn_retrieve":
//db				element[i].addEventListener("mouseup", function() { SaveTRODetails(); });
				element[i].addEventListener("mouseover", function() { Tro_Tick(); }); // Added by sanket
				element[i].addEventListener("mouseover", function() { CNTR_Qty(); }); // Added by sanket
				element[i].addEventListener("click", function() { One_Quote_BKG(); }); // Added by sanket
                flag = 0;
				break;
			
			case "term":
				element[i].addEventListener("mouseover", function() { Table_Tip(); });
                flag = 0;
                break;
			
			case "btn_close":
//db				element[i].addEventListener("mouseover", function () { getLaneDetailsNew(); });
				flag = 0;
				break;
			
			case "bkg_trunk_vvd":
//db				element[i].addEventListener("change", function () { UpdateVVD(); });
				flag = 0;
				break;
				
			case "sc_no":
				element[i].addEventListener("change", function () { UpdateSCNo(); });
				flag = 0;
				break;
			
			case "s_cust_seq":
				element[i].addEventListener("change", function () { UpdateSCNo(); });
				flag = 0;
				break;
			
			// CSOP			
			case "xter_rmk":
				element[i].addEventListener("mouseover", function () { document.getElementsByName('xter_rmk')[0].style.backgroundColor = "#f1a9f3"; });
				element[i].addEventListener("mouseout", function () { document.getElementsByName('xter_rmk')[0].style.backgroundColor = ""; });
//db				element[i].addEventListener("mouseover", function () { SplitByCust(); });
				flag = 0;
				break;

			case "vndr_rmk":
				element[i].addEventListener("mouseover", function () { document.getElementsByName('vndr_rmk')[0].style.backgroundColor = "#f1a9f3"; });
				element[i].addEventListener("mouseout", function () { document.getElementsByName('vndr_rmk')[0].style.backgroundColor = ""; });
//db				element[i].addEventListener("mouseover", function () { SplitByCust(); });
				flag = 0;
				break;

			case "inter_rmk":
				element[i].addEventListener("mouseover", function () { document.getElementsByName('inter_rmk')[0].style.backgroundColor = "#f1a9f3"; });
				element[i].addEventListener("mouseout", function () { document.getElementsByName('inter_rmk')[0].style.backgroundColor = ""; });
//db				element[i].addEventListener("mouseover", function () { SplitByCust(); });
				flag = 0;
				break;
				
			case "btn_Save":
				element[i].addEventListener("click", function () { check_Reefer_status(); });
				element[i].addEventListener("click", function () { check_Reefer_status(); });
				element[i].addEventListener("click", function () { check_humidity(); });
				
				
				flag = 0;
				break;

            default:
                flag = 1;
        }
		
		switch (element[i].id) {

		case "btn_Remark":
            element[i].addEventListener("mouseover", function () { tooltip(); });
            flag = 0;
            break;

		case "btn_opusupload":  // mousedown
//db			element[i].addEventListener("mouseover", function () { InsertEDIData(); });
			flag = 0;
			break;

			default:
            flag = 1;
		}
		
}

function Tro_Tick ()
{
var checkBox = document.getElementById("exID01")
if (checkBox.checked == false)
{
 alert('TRO has not been confirmed. Do you wish to proceed?')   
}
}

/*
function CreateDB()
{
	var DbName = 'OpusDB';
	var Version = 1.0;
	var Description = 'for Validation';
	var MaxSize = 1024 * 2;
	var db = openDatabase(DbName, Version, Description, MaxSize);
    db.transaction(function (tx) 
	{
    tx.executeSql('Create Table if not exists CSOPDetails (BLNumber VARCHAR(100), RTerm, Status, VVD, POL, Lane, SCNo, ShipperCode, ShipperName, FwdrCode, FwdrName, CNEECode, CNEEName, CNPTCode, CNPTName, DEL, CMDTCode, CMDTName );', []);
	});
}*/


/*var DbName = 'OpusDB';
var Version = 1.0;
var Description = 'for Validation';
var MaxSize = 1024;
*/

/*
var db = openDatabase(DbName, Version, Description, MaxSize);
	db.transaction(function (tx) {
				tx.executeSql('Create Table if not exists Details (BLNumber VARCHAR(100), RTerm VARCHAR(2), Status VARCHAR(2), VVD VARCHAR(12), POL VARCHAR(6), Lane VARCHAR(4) );',  []);
				tx.executeSql('Create Table if not exists EDIDetails (BLNumber VARCHAR(100),  VVD, Lane, POL );',  []);
				
				tx.executeSql('Create Table if not exists CSOPDetails (BLNumber VARCHAR(100), RTerm, Status, VVD, POL, Lane, SCNo, ShipperCode, ShipperName, FwdrCode, FwdrName, CNEECode, CNEEName, CNPTCode, CNPTName, DEL, CMDTCode, CMDTName );', []);

        });	*/
	
function CheckAutoEDITick()
{
	BK_bkg_sts_cd = document.getElementsByName("bkg_sts_cd")[0].value;
	BK_edi_hld_flg = document.getElementsByName("edi_hld_flg")[0].value;

	//get TP / TZ 
	if ( BK_bkg_sts_cd == "W") 
	{
		if(document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont0.HideCol0C2") != null){
		var TP = document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont0.HideCol0C2").innerHTML;
		document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont0.HideCol0C2").style.backgroundColor = "#F1921A";
		}
	}
	//
}

/*function insertData() 
{
	CheckAutoEDITick();
	
    var bkg_no= document.getElementsByName("bkg_no")[0].value;
	if(document.getElementsByName("bkg_sts_cd")[0] != null) {
	var bkg_sts_cd = document.getElementsByName("bkg_sts_cd")[0].value;
	}
	var rcv_term_cd_text = document.getElementsByName("rcv_term_cd_text")[0].value;
	var bkg_trunk_vvd = document.getElementsByName("bkg_trunk_vvd")[0].value;
	var bkg_pol_cd = document.getElementsByName('bkg_pol_cd')[0].value;
	
	var sc_no = document.getElementsByName('sc_no')[0].value;
	var s_cust_nm = document.getElementsByName('s_cust_nm')[0].value;
	var s_cust_seq = document.getElementsByName('s_cust_seq')[0].value;
	var bkg_del_cd = document.getElementsByName('bkg_del_cd')[0].value;

    var SHPR_s_cust_seq = document.getElementsByName("s_cust_seq")[0].value;
    var SHPR_s_cust_nm = document.getElementsByName("s_cust_nm")[0].value;
    // Forwarder Code and Name
    var FWDR_f_cust_seq = document.getElementsByName("f_cust_seq")[0].value;
    var FWDR_f_f_cust_nm = document.getElementsByName("f_cust_nm")[0].value;
    // Consignee Code and Name
    var CNEE_c_cust_seq = document.getElementsByName("c_cust_seq")[0].value;
    var CNEE_c_cust_nm = document.getElementsByName("c_cust_nm")[0].value;
    // CNPT Code and Name
    var CNPT_bkg_ctrl_pty_cust_seq = document.getElementsByName("bkg_ctrl_pty_cust_seq")[0].value;
    var CNPT_bkg_ctrl_pty_cust_nm = document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].value;
    var DEL = document.getElementsByName("bkg_del_cd")[0].value;
    var CMDTCode = document.getElementsByName("cmdt_cd")[0].value;
    var CMDTName = document.getElementsByName("cmdt_desc")[0].value;
	
		db.transaction(function(t) 
		{
            t.executeSql("delete from Details");
			t.executeSql("delete from CSOPDetails");
		});
			
        db.transaction(function(t) 
		{
            t.executeSql('INSERT INTO     Details (BLNumber, RTerm, Status, VVD, POL) VALUES ("' + bkg_no + '", "' + rcv_term_cd_text + '", "' + bkg_sts_cd + '", "' + bkg_trunk_vvd + '", "' + bkg_pol_cd + '" ) ');
			
			t.executeSql('INSERT INTO CSOPDetails (BLNumber, RTerm, Status, VVD, POL, SCNo, ShipperCode, ShipperName, FwdrCode, FwdrName, CNEECode, CNEEName, CNPTCode, CNPTName, DEL, CMDTCode, CMDTName)  VALUES ("' + bkg_no + '", "' + rcv_term_cd_text + '", "' + bkg_sts_cd + '", "' + bkg_trunk_vvd + '", "' + bkg_pol_cd + '", "'+ sc_no +'", "'+SHPR_s_cust_seq+'", "'+SHPR_s_cust_nm+'", "'+FWDR_f_cust_seq+'", "'+FWDR_f_f_cust_nm+'", "'+CNEE_c_cust_seq+'", "'+CNEE_c_cust_nm+'", "'+CNPT_bkg_ctrl_pty_cust_seq+'", "'+CNPT_bkg_ctrl_pty_cust_nm+'", "'+DEL+'", "'+CMDTCode+'", "'+CMDTName+'")' );
        });
		
		function nullDataHandler(transaction, results) {
		}
		function killTransaction(transaction, error) {
		}
   
   
   UpdateSCNo();
   
	if(document.getElementsByName('act_wgt')[0] != null) {
		document.getElementsByName('act_wgt')[0].style.backgroundColor = "#f1a9f3";
	}
	if(document.getElementsByClassName('MAINCTL_DIV')[0] != null) {
		document.getElementsByClassName('MAINCTL_DIV')[0].style.outline = '2px solid #f1a9f3';
	}
	if(document.getElementsByClassName('MAINCTL_TBL_TR')[0] != null) { //MAINCTL_TBL
		document.getElementsByClassName('MAINCTL_TBL_TR')[0].style.outline = '2px solid #F00';
	}
}*/


/*function InsertEDIData()
{
	if(document.getElementsByName("bkg_no")[0] != null)
	{
		var bkg_no= document.getElementsByName("bkg_no")[0].value;
	}

	if(document.getElementsByName("bkg_trunk_vvd")[0] != null)
	{
		var bkg_trunk_vvd = document.getElementsByName("bkg_trunk_vvd")[0].value;
	}

	if(document.getElementById('bkg_pol_cd') != null)
	{
		var POL = document.getElementById('bkg_pol_cd').value;
	}
	
	if(document.getElementsByName('s_cust_cnt_cd')[0] != null )
	{
		var bkg_por_cd = document.getElementsByName('s_cust_cnt_cd')[0].value;
	}
	
		db.transaction(function(trans) {
            trans.executeSql("delete from EDIDetails");
		});
			
        db.transaction(function(trans) 
		{
			trans.executeSql('INSERT INTO EDIDetails (BLNumber, VVD, POL) VALUES ("' + bkg_no + '", "' + bkg_trunk_vvd + '", "' + POL + '" ) ');
        });
		function nullDataHandler(transaction, results)   {
		}
		function killTransaction(transaction, error) {
		}
}*/

// change
/*function getLaneDetailsNew()
{

	var Lane = prompt("Enter Lane Code!", "Text");
	if(Lane == null || Lane  == "") 
	{
		alert('Lane Code required.');
		return;
	}

	if(document.getElementsByName("vsl_cd")[0] != null)
	{
		var VVD = document.getElementsByName("vsl_cd")[0].value;  //vsl_cd
	}
		db.transaction(function(trans) {
            trans.executeSql('UPDATE Details SET Lane = "'+ Lane.toUpperCase() +'" where VVD = "'+ VVD +'" ');
        });		
		
		db.transaction(function(trans) {
			trans.executeSql('DELETE FROM EDI ');
		});
		
		db.transaction(function(trans) {
			trans.executeSql('UPDATE EDIDetails SET Lane = "'+ Lane.toUpperCase() +'"  ');
        });
		
}*/

function CNTR_Qty ()
{
var total_Qty = document.getElementsByClassName(" GMClassReadOnly GMWrap0 GMAlignRight GMInt GMCell IBSheetFont0 HideCol0C2");
var TRO_Qty = document.getElementsByClassName(" GMClassReadOnly GMWrap0 GMAlignRight GMInt GMCell IBSheetFont0 HideCol0C3");
for (let i = 0; i < total_Qty.length; i++) 
{
if (total_Qty[i].innerText !=TRO_Qty[i].innerText)
{
	alert("Unable to save as the total Qty does not match to TRO Qty. Please check it again")
break; 
}
}
}


/*function UpdateVVD()
{
	var VVD = document.getElementsByName("bkg_trunk_vvd")[0].value;  
	var bkg_no= document.getElementsByName("bkg_no")[0].value; 
	
		db.transaction(function(trans) 
		{
			trans.executeSql('UPDATE EDIDetails SET VVD = "'+ VVD +'" where BLNumber = "'+ bkg_no +'" ');
        });
}*/


function UpdateSCNo()
{
	var bkg_no= document.getElementsByName("bkg_no")[0].value;
	var sc_no = document.getElementsByName('sc_no')[0].value;
	var s_cust_seq = document.getElementsByName('s_cust_seq')[0].value;
	var bkg_del_cd = document.getElementsByName('bkg_del_cd')[0].value;
	
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
}

function del_in_custRemark()
{
var cust_Remark = document.getElementsByName("xter_rmk")[0].value;
var Terminal_code = ['CNSHA','CNTAO','IDJKT','MYPKG','PHMNL','THBKK','THLCH','THLKR','VNSGN']

for(var i = 0; i < Terminal_code.length; i++)
{
if (cust_Remark.includes(Terminal_code[i]))
{  
document.getElementsByName("bkg_del_cd")[0].style.outline='2px solid red';
   alert("The booking destination has multiple terminal. Please input the specific terminal code in remarks") // additional point addded by Sanket 
   break;
}
else
{
	document.getElementsByName("bkg_del_cd")[0].style.outline='';
}
}
}

function Cmdt_zero()
{
var CMDT_code = document.getElementsByName("cmdt_cd")[0].value;
var CMDT_desc = document.getElementsByName("cmdt_desc")[0].value;

if ( CMDT_code == "000000" && CMDT_desc == "FAK OR CARGO, NOS")
{
	document.getElementsByName("cmdt_cd")[0].style.outline='2px solid red';
	document.getElementsByName("cmdt_desc")[0].style.outline='2px solid red';
alert("The Commodity code used is 000000 -FAK. Please double check")    
}
else if (CMDT_desc.includes("CARBON BLACK") || CMDT_desc.includes("BLACK CARBON") || CMDT_desc.includes("ACTIVATED BLACK") || CMDT_desc.includes("ACTIVATED CARBON"))
{
	document.getElementsByName("cmdt_cd")[0].style.outline='2px solid red';
	document.getElementsByName("cmdt_desc")[0].style.outline='2px solid red';
	alert("Carbon Black/Activated Carbon Commodity should be not placed to HMM VSL. Please double check and see the special instruction in P1-Standby.")
}
else if (CMDT_desc.includes("HIDES"))
{
	document.getElementsByName("cmdt_cd")[0].style.outline='2px solid red';
	document.getElementsByName("cmdt_desc")[0].style.outline='2px solid red';
	alert("Commodity with Hides should be not placed to HLC VSL. Please double check and see the  special instruction in P1-Standby.")
}
else
{
document.getElementsByName("cmdt_cd")[0].style.outline='';
document.getElementsByName("cmdt_desc")[0].style.outline='';	
}
}



function DeleteData()
{
	if(document.getElementById('edi_hld_flg') != null)
	{
		var edi_hld_flg = document.getElementById('edi_hld_flg').value;
	}

	if(document.getElementById("edi_hld_flg") != null)
	{
		document.getElementById("edi_hld_flg").style.outline = '2px solid #F00';
	}
	
	// highlight Cut OFF time
    if(document.getElementsByName('btn_t1CargoClosingTime')[0] != null) {
		document.getElementsByName('btn_t1CargoClosingTime')[0].style.backgroundColor = "#f1a9f3";
	}
	
	if(document.getElementsByName('act_wgt')[0] != null) {
		document.getElementsByName('act_wgt')[0].style.backgroundColor = "#f1a9f3";
	}
	if(document.getElementsByClassName('MAINCTL_DIV')[0] != null) {
		document.getElementsByClassName('MAINCTL_DIV')[0].style.outline = '2px solid #f1a9f3';
	}
	if(document.getElementsByClassName('MAINCTL_TBL_TR')[0] != null) { 
		document.getElementsByClassName('MAINCTL_TBL_TR')[0].style.outline = '2px solid #F00';
	}

	
	if (document.getElementsByName('cmdt_cd')[0] != null) {
            document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "";
        }
        if (document.getElementsByName('cmdt_desc')[0] != null) {
            document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "";
        }
        if (document.getElementsByName('mty_pkup_yd_cd')[0] != null) {
            document.getElementsByName('mty_pkup_yd_cd')[0].style.backgroundColor = "";
        }

        if (document.getElementsByName("sc_no")[0] != null) {
            document.getElementsByName("sc_no")[0].style.backgroundColor = "";
        }
        if (document.getElementsByName("taa_no")[0] != null) {
            document.getElementsByName("taa_no")[0].style.backgroundColor = "";
        }
        if (document.getElementsByName('flex_hgt_flg')[0] != null) {
            document.getElementsByName('flex_hgt_flg')[0].style.outline = "";
        }

        if (document.getElementsByName("s_cust_nm")[0] != null) {
            document.getElementsByName("s_cust_nm")[0].style.backgroundColor = "";
        }
        if (document.getElementsByName("f_cust_nm")[0] != null) {
            document.getElementsByName("f_cust_nm")[0].style.backgroundColor = "";
        }


        if (document.getElementsByName('xter_rmk')[0] != null) {
            document.getElementsByName('xter_rmk')[0].title = "1.Commodity \r\n2.Commodity Code \r\n3.Terminal Code";
        }
        if (document.getElementsByName('vndr_rmk')[0] != null) {
            document.getElementsByName('vndr_rmk')[0].title = "1.OK to Flex/NO Flex \r\n(Flex is D4/D5 Only) \r\n2.Ok to Split / No Split \r\n(Split is for Bookings with Multiple Container)";
        }
        if (document.getElementsByName('inter_rmk')[0] != null) {
            document.getElementsByName('inter_rmk')[0].title = "1.Ok to Book / Pending \r\n2.Rate Verified / NROF";
        }

}


/*function SplitByCust() {
    var ShipperName = "";
    var cnptName = "";
    var cneeName = "";
    var FwdrName = "";
    var DEL = "";
    var CMDTCode = "";
    var CMDTName = "";
    var SCNo = "";
	var ShipperCode = "";
	
	if (document.getElementsByName("bkg_por_cd")[0] != null) 
	{
        var POR = document.getElementsByName("bkg_por_cd")[0].value;
    }
	if (document.getElementsByName("bkg_pol_cd")[0] != null) 
	{
        var POL = document.getElementsByName("bkg_pol_cd")[0].value;
    }
	if (document.getElementsByName("mty_pkup_yd_cd")[0] != null) 
	{
        var MCY = document.getElementsByName("mty_pkup_yd_cd")[0].value;
    }
	if (document.getElementsByName("full_rtn_yd_cd")[0] != null) 
	{
        var FCY = document.getElementsByName("full_rtn_yd_cd")[0].value;
    }
	
	if (document.getElementsByName("s_cust_cnt_cd")[0] != null) 
	{
        var ShprUS = document.getElementsByName("s_cust_cnt_cd")[0].value;
    }
	
	
    db.transaction(
        function (tx) {
            tx.executeSql('SELECT * FROM CSOPDetails ORDER BY ROWID DESC LIMIT 1 ;', [],
                function (transaction, results) {
                    if (results != null && results.rows != null) {
                        for (var j = 0; j < results.rows.length; j++) 
						{
                            var row = results.rows.item(j);

                            ShipperName = row.ShipperName;							
							ShipperCode = row.ShipperCode;							
                            FwdrName = row.FwdrName;*/
                           // var firstWord = ShipperName.replace(/ .*/, '');
                           /* DEL = row.DEL;
                            CMDTCode = row.CMDTCode;
                            CMDTName = row.CMDTName;
							if (document.getElementsByName("cmdt_desc")[0] != null) 
							{
                                var words = CMDTName.match(/\b(\w+)\b/g);
                            }
							SCNo = row.SCNo;
                            if (document.getElementsByName("xter_rmk")[0] != null) {
                                var OCP = document.getElementsByName("xter_rmk")[0].value;
                            }
                            if (document.getElementsByName("xter_rmk")[0] != null) {
                                var OCPWord = OCP.match(/\b(\w+)\b/g);
                            }
                            if (document.getElementsByName("xter_rmk")[0] != null) {
                                var OKWord = OCP.match(/\b(\w+)\b/g);
                            }
                            
                            if (firstWord == 'ABBOTT' || firstWord == 'Baxter' || firstWord == 'BASF' || firstWord == 'Cargill' || firstWord == 'Eastman' || firstWord == 'Abbott' || firstWord == 'Caterpillar' || firstWord == 'Wilbur Ellis' || FwdrName == 'ABBOTT' || FwdrName == 'Baxter' || FwdrName == 'BASF' || FwdrName == 'Cargill' || FwdrName == 'Eastman' || FwdrName == 'Abbott' || FwdrName == 'Caterpillar' || FwdrName == 'Wilbur Ellis') 
							{
                                if (ShipperName != "") {
                                    if (document.getElementsByName("s_cust_nm")[0] != null) {
                                        document.getElementsByName("s_cust_nm")[0].style.backgroundColor = "#f1a9f3";
                                    }
                                }
                                if (FwdrName != "") {
                                    if (document.getElementsByName("f_cust_nm")[0] != null) {
                                        document.getElementsByName("f_cust_nm")[0].style.backgroundColor = "#f1a9f3";
                                    }
                                }

                                if (document.getElementsByName('xter_rmk')[0] != null) {
                                    document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description.\r\n \r\n2. NO SPLIT.";
                                }
                                if (document.getElementsByName('vndr_rmk')[0] != null) {
                                    document.getElementsByName('vndr_rmk')[0].title = "NO SPLIT.";
                                }
                            }
                            else 
							{
                                if (ShipperName != "") {
                                    if (document.getElementsByName("s_cust_nm")[0] != null) {
                                        document.getElementsByName("s_cust_nm")[0].style.backgroundColor = "#f1a9f3";
                                    }
                                }
                                if (FwdrName != "") {
                                    if (document.getElementsByName("f_cust_nm")[0] != null) {
                                        document.getElementsByName("f_cust_nm")[0].style.backgroundColor = "#f1a9f3";
                                    }
                                }

                                if (document.getElementsByName('xter_rmk')[0] != null) {
                                    document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description.\r\n \r\n2. OK TO SPLIT.";
                                }
                                if (document.getElementsByName('vndr_rmk')[0] != null) {
                                    document.getElementsByName('vndr_rmk')[0].title = "1. OK TO SPLIT.";
                                }
                            }

                            if (DEL == "CNSHA" || DEL == "VNSGN" || DEL == "MYPKG" || DEL == "THBKK" || DEL == "CNHUA" || DEL == "PHMNL" || DEL == "THLCH" || DEL == "IDJKT" || DEL == "THLKR")
                            {
                                if (document.getElementsByName("bkg_del_cd")[0] != null) {
                                    document.getElementsByName("bkg_del_cd")[0].style.backgroundColor = "#f1a9f3";
                                }
                                if (document.getElementsByName('xter_rmk')[0] != null) {
                                    document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description.\r\n \r\n2. OK TO SPLIT. \r\n \r\n3. Enter Terminal Code and Terminal Name";
                                }
                                if (document.getElementsByName('inter_rmk')[0] != null) {
                                    document.getElementsByName('inter_rmk')[0].title = "Enter Terminal Code and Terminal Name";
                                }
                                for (var i = 0; i < OCPWord.length - 1; i++) {									
                                    if ((OCPWord[i] == "OCP" || OCPWord[i] == "ocp") && ( OKWord[i] == "Flex" || OKWord[i] == "FLEX" || OKWord[i] == "SUB" || OKWord[i] == "sub")) {

                                        if (document.getElementsByName('mty_pkup_yd_cd')[0] != null) {
                                            document.getElementsByName('mty_pkup_yd_cd')[0].style.backgroundColor = "#f1a9f3";
                                        }

                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description.  \r\n \r\n2. Enter Terminal Code and Terminal Name. \r\n\r\n3. Enter OCP +(Location) \r\n\r\n4. Enter Ok to sub/Flex ok";
                                        }
                                        if (document.getElementsByName('vndr_rmk')[0] != null) {
                                            document.getElementsByName('vndr_rmk')[0].title = "1. Enter OCP +(Location) \r\n\r\n2. Enter Ok to sub/Flex ok";
                                        }
                                        if (document.getElementsByName('inter_rmk')[0] != null) {
                                            document.getElementsByName('inter_rmk')[0].title = "1. Enter Terminal Code and Terminal Name \r\n\r\n2. Enter OCP +(Location)";
                                        }

                                        if (document.getElementsByName('flex_hgt_flg')[0] != null) {
                                            document.getElementsByName('flex_hgt_flg')[0].style.outline = '2px solid #F00';
                                        }
                                    }
                                }

                                if (DEL.includes("CN"))
                                {
                                    for (var i = 0; i < words.length - 1; i++) {
                                        if (words[i] == "WASTE" || words[i] == "PAPER" || words[i] == "PLASTIC" || words[i] == "METALS" || words[i] == "SCRAP") {
                                            if (document.getElementsByName('cmdt_cd')[0] != null) {
                                                document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#f1a9f3";
                                            }
                                            if (document.getElementsByName('cmdt_desc')[0] != null) {
                                                document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
                                            }
                                            if (document.getElementsByName("bkg_del_cd")[0] != null) {
                                                document.getElementsByName("bkg_del_cd")[0].style.backgroundColor = "#f1a9f3";
                                            }
                                            if (document.getElementsByName('xter_rmk')[0] != null) {
                                                document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description.\r\n \r\n2. OK TO SPLIT. \r\n \r\n3. Enter Terminal Code and Terminal Name \r\n\r\n4. Enter AQSIQ Number.";
                                            }
                                        }

                                        if (words[i] == "WASTE" || words[i] == "PAPER" || words[i] == "PLASTIC" || words[i] == "METALS" || words[i] == "SCRAP") {
                                            if (document.getElementsByName('cmdt_cd')[0] != null) {
                                                document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#f1a9f3";
                                            }
                                            if (document.getElementsByName('cmdt_desc')[0] != null) {
                                                document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
                                            }
                                            if (document.getElementsByName("bkg_del_cd")[0] != null) {
                                                document.getElementsByName("bkg_del_cd")[0].style.backgroundColor = "#f1a9f3";
                                            }
                                            if (document.getElementsByName('xter_rmk')[0] != null) {
                                                document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter AQSIQ Number.";
                                            }
                                        }
                                    }
                                }
                            }

                            if (DEL.includes("CN"))
                            {
                                for (var i = 0; i < words.length - 1; i++)
                                {
                                    if (words[i] == "WASTE" || words[i] == "PAPER" || words[i] == "PLASTIC" || words[i] == "METALS" || words[i] == "SCRAP") 
									{
                                        if (document.getElementsByName('cmdt_cd')[0] != null) {
                                            document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#f1a9f3";
                                        }
                                        if (document.getElementsByName('cmdt_desc')[0] != null) {
                                            document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
                                        }
                                        if (document.getElementsByName("bkg_del_cd")[0] != null) {
                                            document.getElementsByName("bkg_del_cd")[0].style.backgroundColor = "#f1a9f3";
                                        }
                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter AQSIQ Number.";
                                        }
                                    }

                                    if (words[i] == "Autos" || words[i] == "Automobiles" || words[i] == "Motorcycle" || words[i] == "MOTOR" || words[i] == "VEHICLES")
                                    {
                                        if (document.getElementsByName('cmdt_cd')[0] != null) {
                                            document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#f1a9f3";
                                        }
                                        if (document.getElementsByName('cmdt_desc')[0] != null) {
                                            document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
                                        }
                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter Auto Title Required.";
                                        }
                                        if (document.getElementsByName('vndr_rmk')[0] != null) {
                                            document.getElementsByName('vndr_rmk')[0].title = "Enter Auto Title Required.";
                                        }
                                    }
                                }

                                for (var i = 0; i < OCPWord.length - 1; i++)
                                {
                                    if (OCPWord[i] == "OCP" || OCPWord[i] == "ocp")
                                    {
                                        if (document.getElementsByName('mty_pkup_yd_cd')[0] != null) {
                                            document.getElementsByName('mty_pkup_yd_cd')[0].style.backgroundColor = "#f1a9f3";
                                        }

                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter AQSIQ Number. \r\n\r\n3. Enter OCP +(Location)";
                                        }
                                        if (document.getElementsByName('vndr_rmk')[0] != null) {
                                            document.getElementsByName('vndr_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter OCP +(Location)";
                                        }
                                        if (document.getElementsByName('inter_rmk')[0] != null) {
                                            document.getElementsByName('inter_rmk')[0].title = "1. Enter OCP +(Location)";
                                        }
                                    }
                                    if ( OKWord[i] == "Flex" || OKWord[i] == "FLEX" || OKWord[i] == "SUB" || OKWord[i] == "sub")
                                    {
                                        if (document.getElementsByName('flex_hgt_flg')[0] != null) {
                                            document.getElementsByName('flex_hgt_flg')[0].style.outline = '2px solid #F00';
                                        }

                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description.  \r\n\r\n2. OK TO SPLIT.  \r\n\r\n3. Enter AQSIQ Number. \r\n\r\n4. Enter Ok to sub/Flex ok";
                                        }
                                        if (document.getElementsByName('vndr_rmk')[0] != null) {
                                            document.getElementsByName('vndr_rmk')[0].title = "1. Enter Ok to sub/Flex ok";
                                        }
                                    }
                                    if ((OCPWord[i] == "OCP" || OCPWord[i] == "ocp") && (OKWord[i] == "Flex" || OKWord[i] == "FLEX" || OKWord[i] == "SUB" || OKWord[i] == "sub"))
                                    {
                                        if (document.getElementsByName('mty_pkup_yd_cd')[0] != null) {
                                            document.getElementsByName('mty_pkup_yd_cd')[0].style.backgroundColor = "#f1a9f3";
                                        }

                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n \r\n2. Enter Terminal Code and Terminal Name \r\n\r\n3. Enter OCP +(Location) \r\n\r\n4. Enter Ok to sub/Flex ok";
                                        }
                                        if (document.getElementsByName('vndr_rmk')[0] != null) {
                                            document.getElementsByName('vndr_rmk')[0].title = "1. Enter OCP +(Location) \r\n\r\n2. Enter Ok to sub/Flex ok";
                                        }
                                        if (document.getElementsByName('inter_rmk')[0] != null) {
                                            document.getElementsByName('inter_rmk')[0].title = "1. Enter Terminal Code and Terminal Name \r\n \r\n2. Enter OCP +(Location)";
                                        }

                                        if (document.getElementsByName('flex_hgt_flg')[0] != null) {
                                            document.getElementsByName('flex_hgt_flg')[0].style.outline = '2px solid #F00';
                                        }
                                    }

                                }
                            }
							
							if (DEL.substring(0,2) == "CN" && ShipperName.includes("AMERICA METAL EXPORT INC."))
                            {
                                for (var i = 0; i < words.length - 1; i++)
                                {
                                    if (words[i] == "WASTE" || words[i] == "PAPER" || words[i] == "PLASTIC" || words[i] == "METALS" || words[i] == "SCRAP") 
									{
                                        if (document.getElementsByName('cmdt_cd')[0] != null) {
                                            document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#f1a9f3";
                                        }
                                        if (document.getElementsByName('cmdt_desc')[0] != null) {
                                            document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
                                        }
                                        if (document.getElementsByName("bkg_del_cd")[0] != null) {
                                            document.getElementsByName("bkg_del_cd")[0].style.backgroundColor = "#f1a9f3";
                                        }
                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter AQSIQ Number. \r\n\r\n3. Indicate Transhipment via Pusan only.";
                                        }
                                    }

                                    if (words[i] == "Autos" || words[i] == "Automobiles" || words[i] == "Motorcycle" || words[i] == "MOTOR" || words[i] == "VEHICLES")
                                    {
                                        if (document.getElementsByName('cmdt_cd')[0] != null) {
                                            document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#f1a9f3";
                                        }
                                        if (document.getElementsByName('cmdt_desc')[0] != null) {
                                            document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
                                        }
                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter Auto Title Required.  \r\n\r\n3. Indicate Transhipment via Pusan only.";
                                        }
                                        if (document.getElementsByName('vndr_rmk')[0] != null) {
                                            document.getElementsByName('vndr_rmk')[0].title = "1. Enter Auto Title Required.";
                                        }
                                    }
                                }

                                for (var i = 0; i < OCPWord.length - 1; i++)
                                {
                                    if (OCPWord[i] == "OCP" || OCPWord[i] == "ocp")
                                    {
                                        if (document.getElementsByName('mty_pkup_yd_cd')[0] != null) {
                                            document.getElementsByName('mty_pkup_yd_cd')[0].style.backgroundColor = "#f1a9f3";
                                        }

                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter AQSIQ Number. \r\n\r\n3. Enter OCP +(Location).  \r\n\r\n4. Indicate Transhipment via Pusan only.";
                                        }
                                        if (document.getElementsByName('vndr_rmk')[0] != null) {
                                            document.getElementsByName('vndr_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter OCP +(Location)";
                                        }
                                        if (document.getElementsByName('inter_rmk')[0] != null) {
                                            document.getElementsByName('inter_rmk')[0].title = "1. Enter OCP +(Location). \r\n\r\n2. Indicate Transhipment via Pusan only.";
                                        }
                                    }
                                    if ( OKWord[i] == "Flex" || OKWord[i] == "FLEX" || OKWord[i] == "SUB" || OKWord[i] == "sub")
                                    {
                                        if (document.getElementsByName('flex_hgt_flg')[0] != null) {
                                            document.getElementsByName('flex_hgt_flg')[0].style.outline = '2px solid #F00';
                                        }

                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description.  \r\n\r\n2. OK TO SPLIT.  \r\n\r\n3. Enter AQSIQ Number. \r\n\r\n4. Enter Ok to sub/Flex ok.  \r\n\r\n5. Indicate Transhipment via Pusan only.";
                                        }
                                        if (document.getElementsByName('vndr_rmk')[0] != null) {
                                            document.getElementsByName('vndr_rmk')[0].title = "1. Enter Ok to sub/Flex ok";
                                        }
                                    }
                                    if ((OCPWord[i] == "OCP" || OCPWord[i] == "ocp") && (OKWord[i] == "Flex" || OKWord[i] == "FLEX" || OKWord[i] == "SUB" || OKWord[i] == "sub"))
                                    {
                                        if (document.getElementsByName('mty_pkup_yd_cd')[0] != null) {
                                            document.getElementsByName('mty_pkup_yd_cd')[0].style.backgroundColor = "#f1a9f3";
                                        }

                                        if (document.getElementsByName('xter_rmk')[0] != null) {
                                            document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n \r\n2. Enter Terminal Code and Terminal Name \r\n\r\n3. Enter OCP +(Location) \r\n\r\n4. Enter Ok to sub/Flex ok.  \r\n\r\n5. Indicate Transhipment via Pusan only.";
                                        }
                                        if (document.getElementsByName('vndr_rmk')[0] != null) {
                                            document.getElementsByName('vndr_rmk')[0].title = "1. Enter OCP +(Location) \r\n\r\n2. Enter Ok to sub/Flex ok";
                                        }
                                        if (document.getElementsByName('inter_rmk')[0] != null) {
                                            document.getElementsByName('inter_rmk')[0].title = "1. Enter Terminal Code and Terminal Name \r\n \r\n2. Enter OCP +(Location) . \r\n\r\n3. Indicate Transhipment via Pusan only.";
                                        }

                                        if (document.getElementsByName('flex_hgt_flg')[0] != null) {
                                            document.getElementsByName('flex_hgt_flg')[0].style.outline = '2px solid #F00';
                                        }
                                    }

                                }
                            }

                            for (var i = 0; i < words.length - 1; i++)
                            {
                                if (words[i] == "Autos" || words[i] == "AUTOS" || words[i] == "Automobiles" || words[i] == "Motorcycle" || words[i] == "MOTOR" || words[i] == "VEHICLES") {
                                    if (document.getElementsByName('cmdt_cd')[0] != null) {
                                        document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#f1a9f3";
                                    }
                                    if (document.getElementsByName('cmdt_desc')[0] != null) {
                                        document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
                                    }
                                    if (document.getElementsByName('xter_rmk')[0] != null) {
                                        document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter Auto Title Required.";
                                    }
                                    if (document.getElementsByName('vndr_rmk')[0] != null) {
                                        document.getElementsByName('vndr_rmk')[0].title = "Enter Auto Title Required.";
                                    }
                                }
                            }
                            if (document.getElementsByName("xter_rmk")[0] != null) {
                                var OCP = document.getElementsByName("xter_rmk")[0].value;
                            }
                            
							if (document.getElementsByName("xter_rmk")[0] != null) {
                                var OCPWord = OCP.match(/\b(\w+)\b/g);
                            }
                            if (document.getElementsByName("xter_rmk")[0] != null) {
                                var OKWord = OCP.match(/\b(\w+)\b/g);
                            }
						for (var i = 0; i < OCPWord.length; i++)
                        {
                            if (OCPWord[i] == "OCP" || OCPWord[i] == "ocp") 
							{
                                if (document.getElementsByName('mty_pkup_yd_cd')[0] != null) {
                                    document.getElementsByName('mty_pkup_yd_cd')[0].style.backgroundColor = "#f1a9f3";
                                }

                                if (document.getElementsByName('xter_rmk')[0] != null) {
                                    document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter OCP +(Location)";
                                }
                                if (document.getElementsByName('vndr_rmk')[0] != null) {
                                    document.getElementsByName('vndr_rmk')[0].title = "1. Enter OCP +(Location)";
                                }
                                if (document.getElementsByName('inter_rmk')[0] != null) {
                                    document.getElementsByName('inter_rmk')[0].title = "1. Enter OCP +(Location)";
                                }
                            }
						}
						for (var i = 0; i < OKWord.length - 1; i++)
                        {
                            if ( OKWord[i] == "Flex" || OKWord[i] == "FLEX" || OKWord[i] == "SUB" || OKWord[i] == "sub") {
                                if (document.getElementsByName('flex_hgt_flg')[0] != null) {
                                    document.getElementsByName('flex_hgt_flg')[0].style.outline = '2px solid #F00';
                                }

                                if (document.getElementsByName('xter_rmk')[0] != null) {
                                    document.getElementsByName('xter_rmk')[0].title = "5. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter OCP +(Location) \r\n\r\n3. Enter Ok to sub/Flex ok";
                                }
                                if (document.getElementsByName('vndr_rmk')[0] != null) {
                                    document.getElementsByName('vndr_rmk')[0].title = "5. Enter OCP +(Location) \r\n\r\n2. Enter Ok to sub/Flex ok";
                                }
                            }
						}
                            for (var i = 0; i < OCPWord.length - 1; i++)
                            {
                                if ((OCPWord[i] == "OCP" || OCPWord[i] == "ocp") && (OKWord[i] == "Flex" || OKWord[i] == "FLEX" || OKWord[i] == "SUB" || OKWord[i] == "sub")) {
                                    if (document.getElementsByName('mty_pkup_yd_cd')[0] != null) {
                                        document.getElementsByName('mty_pkup_yd_cd')[0].style.backgroundColor = "#f1a9f3";
                                    }

                                    if (document.getElementsByName('xter_rmk')[0] != null) {
                                        document.getElementsByName('xter_rmk')[0].title = "1. Enter Commodity Code and Commodity Description. \r\n\r\n2. Enter OCP +(Location) \r\n\r\n3. Enter Ok to sub/Flex ok";
                                    }
                                    if (document.getElementsByName('vndr_rmk')[0] != null) {
                                        document.getElementsByName('vndr_rmk')[0].title = "1. Enter OCP +(Location) \r\n\r\n2. Enter Ok to sub/Flex ok";
                                    }
                                    if (document.getElementsByName('inter_rmk')[0] != null) {
                                        document.getElementsByName('inter_rmk')[0].title = "1. Enter OCP +(Location)";
                                    }

                                    if (document.getElementsByName('flex_hgt_flg')[0] != null) {
                                        document.getElementsByName('flex_hgt_flg')[0].style.outline = '2px solid #F00';
                                    }
                                }
                            }
                            if (SCNo == "DUM000001") {
                                if (document.getElementsByName("sc_no")[0] != null) {
                                    document.getElementsByName("sc_no")[0].style.backgroundColor = "#f1a9f3";
                                }
                                if (document.getElementsByName("taa_no")[0] != null) {
                                    document.getElementsByName("taa_no")[0].style.backgroundColor = "#f1a9f3";
                                }
                                if (document.getElementsByName('inter_rmk')[0] != null) {
                                    document.getElementsByName('inter_rmk')[0].title = "Indicate 'Dummy' + 'NROF' + Reason.";
                                }
                            }

							if(ShipperName.includes("WHIRLPOOL") && MCY.substring(0,5) == "USCMH")
							{
								if (document.getElementsByName('inter_rmk')[0] != null) 
								{
                                    document.getElementsByName('inter_rmk')[0].title = "Customer has 7 days ERD in Columbus, OH";
                                }
							}

							if(firstWord == "DELONG" && MCY.substring(0,5) == "USCHI")
							{
								if (document.getElementsByName('inter_rmk')[0] != null) 
								{
                                    document.getElementsByName('inter_rmk')[0].title = "Indicate Customer has 7 days ERD in Chicago, IL";
                                }
							}
							
							if( ShprUS == "US" && (ShipperCode == "131733" || ShipperCode == "218596" || ShipperCode == "506346") && SCNo == "ATLB00609")
							{
								if(DEL == "BEAAT")
								{
									if (document.getElementsByName("bkg_del_cd")[0] != null) 
									{
                                        document.getElementsByName("bkg_del_cd")[0].style.backgroundColor = "#f1a9f3";
										$("#bkg_del_cd").val("LULUX");
                                    }
									if (document.getElementsByName("bkg_del_yd_cd")[0] != null) 
									{
                                        document.getElementsByName("bkg_del_yd_cd")[0].style.backgroundColor = "#f1a9f3";
										$("#bkg_del_yd_cd").val("60");
                                    }
								}
								else
								{
									document.getElementsByName("bkg_del_cd")[0].style.backgroundColor = "";
									document.getElementsByName("bkg_del_yd_cd")[0].style.backgroundColor = "";
								}
							}

							if(ShipperName.includes("SHAW INDUSTRIES GROUP, INC.") && POL == "USSAV" && MCY.substring(0,5) == "USSAV" && FCY.substring(0,5) == "USSAV")
							{
								if (document.getElementsByName('inter_rmk')[0] != null) 
								{
                                    document.getElementsByName('inter_rmk')[0].title = "Indicate All motor to Savannah-Route details must reflect all truck";
                                }
							}
							
							if(ShipperName.includes("AMERICA METAL EXPORT INC.") && DEL.substring(0,2) == "CN")
							{
								if (document.getElementsByName('inter_rmk')[0] != null) 
								{
                                    document.getElementsByName('inter_rmk')[0].title = "Indicate Transhipment via Pusan only";
                                }
								if (document.getElementsByName('xter_rmk')[0] != null) 
								{
                                    document.getElementsByName('xter_rmk')[0].title = "Indicate Transhipment via Pusan only";
                                }
							}
                        }
                    }
                });
        }
    );
}

*/
//Check WEQ Booking
function WEQ_Check()
{
var BKG = document.getElementsByName("xter_bkg_rqst_cd")[0].value;

if(BKG == "WEQ")
{    
    document.getElementsByName("xter_bkg_rqst_cd")[0].style.backgroundColor="#f1a9f3"
	alert("This is ONE QUOTE booking. Not allowed to make any changes except reduce and cancellation.")
}
else
{
	document.getElementsByName("xter_bkg_rqst_cd")[0].style.backgroundColor=""
}
}
//Highlight WEQ Booking
function One_Quote_BKG()
{
var BKG_VIA = document.getElementsByClassName("GMClassReadOnly GMWrap0 GMAlignCenter GMText GMCell IBSheetFont0 HideCol0C37")[0].innerText;

if( BKG_VIA == "WEQ")
{
 document.getElementsByClassName("GMClassReadOnly GMWrap0 GMAlignCenter GMText GMCell IBSheetFont0 HideCol0C37")[0].style.backgroundColor='#00ff00';
}
else
{
	document.getElementsByClassName("GMClassReadOnly GMWrap0 GMAlignCenter GMText GMCell IBSheetFont0 HideCol0C37")[0].style.backgroundColor='';
}
}
//Filer Check
function check_filer()
{
var BKG_POR = document.getElementsByName("bkg_por_cd")[0].value;
var BKG_POL = document.getElementsByName("bkg_pol_cd")[0].value;
var BKG_POR_Start = BKG_POR.substr(0, 2);
var BKG_POL_Start = BKG_POL.substr(0, 2);

if(BKG_POR_Start == "US" || BKG_POR_Start == "CA" || BKG_POL_Start == "US" || BKG_POL_Start == "CA")
{				
if(document.getElementById("usa_cstms_file_cd_text").value != "3" || document.getElementById("cnd_cstms_file_cd_text").value != "3" )
{
alert("Please update correct filer for US and CA shipment")
} 
}
}
//Highlight POR and R/D Term
function RD_Term()
{
var door_r = document.getElementsByName("rcv_term_cd_text")[0].value;
var door_d = document.getElementsByName("de_term_cd_text")[0].value;

if(door_r == "D" && door_d =="Y") 
{
document.getElementsByClassName('align_center noinput')[0].style.outline = '2px solid Red';
alert("Please Check R/D Term")
}
else
{
document.getElementsByClassName('align_center noinput')[0].style.outline = '';	
}
}
//Check Humidity Details
function check_humidity()
{   
var Humidity = document.getElementsByName("humid_no")[0].value;
var Humidity_checkBox = document.getElementById("humid_ctrl_flg");
if (Humidity_checkBox.checked == false && Humidity != "0")
{
document.querySelector("#humid_no").style.backgroundColor = "#f1a9f3";
document.querySelector("#humid_ctrl_flg").style.outline = "2px solid red";	
alert("Check Humidity details")
}
else
{
document.querySelector("#humid_no").style.backgroundColor = "";
document.querySelector("#humid_ctrl_flg").style.outline = "";
}
}

