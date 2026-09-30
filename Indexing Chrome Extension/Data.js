var element = document.getElementsByTagName('*');
var clr = null;
 
//window.addEventListener("load", function () { DeleteRecord(); });
 
 
//document.onkeydown = keydown;
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "bkg_no"://BKG Creation
			element[i].addEventListener("keypress", function () { setTimeout(function(){ CheckFiler_FROBShipment();  },1000); });
//DB			element[i].addEventListener("keypress", function() { setTimeout(function(){ insertData(); },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ SOC_CMDTPopup(); },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ check_WEQBooking(); },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ checkHBL();  },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ check_VIPCust();  },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ check_StowageCargo();  },1000); });
			//element[i].addEventListener("keypress", function() { setTimeout(function(){ FROB_Shipment(); }, 500);});
			element[i].addEventListener("keypress", function() { setTimeout(function(){ BlinkCustomer_Popup(); }, 500);});
            flag = 0;
            break;
		
		case "btn_t1retrieve"://BKG Creation
			element[i].title = "Please enter BL Number and click on Retrieve.";
			element[i].addEventListener("mouseover", function () { setTimeout(function(){ CheckFiler_FROBShipment();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ SOC_CMDTPopup();  },1000); });
//DB			element[i].addEventListener("click", function() { setTimeout(function(){ insertData();  },3000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ check_WEQBooking(); },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ checkHBL();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ check_VIPCust();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ check_StowageCargo();  },1000); });
			//element[i].addEventListener("click", function() { setTimeout(function(){ FROB_Shipment(); }, 500); });
			element[i].addEventListener("click", function() { setTimeout(function(){ BlinkCustomer_Popup(); }, 500); });
			flag = 0;
			break;
			
		case "bkg_sts_cd"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = ""; });
            element[i].title = "1) F - Confirmed (Process BL normally).\r\n" +
							"2) X - Cancelled (Do not process BL send mail for - Booking status cancelled).\r\n" +
							"3) W - Wait listed (Process BL & send mail to Onshore).";
            flag = 0;
            break;
				
		case "btn_t1Danger"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1Danger').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1Danger').style.backgroundColor = ""; });
			element[i].addEventListener("click", function() { alert("Please update container as per Gross Weight"); });
			element[i].title = "Dangerous Cargo:\r\n" +
							"Check IMO # GW & Approval Status (Y) also check container assign or not.";
			flag = 0;
			break;
				
		case "btn_t1Reefer"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1Reefer').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1Reefer').style.backgroundColor = ""; });
			element[i].title = "Reefer Cargo:\r\n" +
							"Check TEMP / VEN & Approval Status (Y) also check container assign or not.";
			flag = 0;
			break;
			
		case "btn_t1Awkward"://BKG Creation
			element[i].addEventListener("click", function() { alert("Please assign correct container as per container TP/SZ"); });
			flag = 0;
			break;
				
		case "usa_cstms_file_cd_text"://BKG Creation
			element[i].title = "POD US:\r\n" +
							"Filer (1) – Create Manual HBL (House Bill of Lading).\r\n" +
							"Filer (2) - Update SCAC code as per SI.\r\n" +
							"Filer (3) – Not Applicable.";
			flag = 0;
			break;
				
		case "cnd_cstms_file_cd_text"://BKG Creation
			element[i].title = "POD Canada:\r\n" +
							"Filer (1) – Create Manual HBL (House Bill of Lading).\r\n" +
							"Filer (2) - Update ACI code as per SI.\r\n" +
							"Filer (3) – Not Applicable.";
			flag = 0;
			break;
				
		case "btn_t1ReferenceNo"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1ReferenceNo').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1ReferenceNo').style.backgroundColor = ""; });
			element[i].title = "Applicable – Only if mention on SI/SOP to show any Reference #.";
			flag = 0;
			break;
				
		case "bkg_ctrl_pty_cust_cnt_cd"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].style.backgroundColor = ""; });
			element[i].title = "1) CNPT should match with Shipper / Consignee / Notify / Forwarder.\r\n" +
							"2) If not match then don’t link freight & send mail to Onshore.";
            flag = 0;
            break;
				
		case "bkg_ctrl_pty_cust_seq"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].style.backgroundColor = ""; });
			element[i].title = "1) CNPT should match with Shipper / Consignee / Notify / Forwarder.\r\n" +
							"2) If not match then don’t link freight & send mail to Onshore.";
            flag = 0;
            break;
				
		case "bkg_ctrl_pty_cust_nm"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_nm')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_nm')[0].style.backgroundColor = ""; });
			element[i].title = "1) CNPT should match with Shipper / Consignee / Notify / Forwarder.\r\n" +
							"2) If not match then don’t link freight & send mail to Onshore.";
            flag = 0;
            break;
				
		case "cmdt_cd"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cmdt_cd')[0].style.backgroundColor = ""; });
			element[i].title = "1) For US/CA Shipments - Correct CMDT should be selected as per Name Account & hint mentioned on SI/Remark. If no hint given update as per Commodity description. \r\n" +
							"2) For Other Shipments - CMDT should be selected as per Name Account & hint mentioned on SI/Remark.";
            flag = 0;
            break;
				
		case "cmdt_desc"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cmdt_desc')[0].style.backgroundColor = ""; });
            element[i].title = "1) For US/CA Shipments - Correct CMDT should be selected as per Name Account & hint mentioned on SI/Remark. If no hint given update as per Commodity description. \r\n" +
							"2) For Other Shipments - CMDT should be selected as per Name Account & hint mentioned on SI/Remark.";
            flag = 0;
            break;
				
		case "xter_rmk"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = ""; });
			element[i].title = "Need to check Cust Remarks for additional details.\r\n" +
							"(Example - S/C No., Name A/C, Freighting Instruction & ETC).";
            flag = 0;
            break;
			
		case "inter_rmk"://BKG Creation
			element[i].addEventListener("mouseover", function() { document.getElementsByName('inter_rmk')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('inter_rmk')[0].style.backgroundColor = ""; });
			element[i].title = "Need to check Int Remarks for additional details.\r\n" +
							"(Example - S/C No.,  Freighting Instruction & ETC).";
            flag = 0;
            break;
				
			
		case "btn_t1Save"://BKG Creation
            element[i].addEventListener("mouseover", function(){ CheckFiler_FROBShipment();   });
			element[i].addEventListener("click", function() { bkg_intProhibited(); } );
			element[i].addEventListener("click", function() { bkg_custProhibited(); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ check_VIPCust();  },1000); });
			//element[i].addEventListener("mouseover", function() { setTimeout(function(){ FROB_Shipment(); }, 500); });
			flag = 0;
			break;
			
		
			
		case "btn_t6cntrconfirm"://CNTR 
			element[i].addEventListener("mouseover", function() { document.getElementsByName('btn_t6cntrconfirm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('btn_t6cntrconfirm')[0].style.backgroundColor = ""; });
            element[i].title = "Tick on Container Confirmation – if all the container details updated as per SI.";
            flag = 0;
            break;
				
			
		case "pck_qty"://MnD
			element[i].addEventListener("mouseover", function() { document.getElementsByName('pck_qty')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('pck_qty')[0].style.backgroundColor = ""; });
            element[i].title = "Update Total No. of Package & Package Type as per SI.";
            flag = 0;
            break;
				
		case "act_wgt"://MnD
			element[i].addEventListener("mouseover", function() { document.getElementsByName('act_wgt')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('act_wgt')[0].style.backgroundColor = ""; });
            element[i].title = "Update Total No. of Gross Weight as per SI.";
            flag = 0;
            break;
				
		case "meas_qty"://MnD
			element[i].addEventListener("mouseover", function() { document.getElementsByName('meas_qty')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('meas_qty')[0].style.backgroundColor = ""; });
            element[i].title = "Update Total No. of CBM as per SI.";
            flag = 0;
            break;
			
		case "cstms_desc"://MnD
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cstms_desc')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cstms_desc')[0].style.backgroundColor = ""; });
            element[i].title = "Update Actual Commodity Description.";
            flag = 0;
            break;
				
		case "mk_desc"://MnD
			element[i].addEventListener("mouseover", function() { document.getElementById('mk_desc').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('mk_desc').style.backgroundColor = ""; });
			element[i].title = "Update as per SI.\r\n" +
							"(Aligned the words properly).\r\n\r\n" +
							"If not mention on SI then update N/M.";
			flag = 0;
			break;
				
		case "dg_cmdt_desc"://MnD
			element[i].addEventListener("mouseover", function() { document.getElementById('dg_cmdt_desc').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('dg_cmdt_desc')[0].style.backgroundColor = ""; });
			element[i].title =  "1) Tick on Copy – check No. of PKG/CNTR match with SI.\r\n" +
								"2) Update Long description as per SI.\r\n\r\n"+
								"Prohibited Keywords : \r\n" + 
								"'Clean on board',\r\n" + 
								"'Cargo Value'\r\n"+
								"'Clear at XXX (location)',\r\n'" +
								"'cargo' temperature or temperature 'maintain at xx'\r\n"+
								"'Cargo in-transit to XXXX',\r\n" +
								"'Carrier own or long lease container'\r\n\r\n"+
								"Example:\r\n" +
								"a) Commodity Description\r\n"+
								"b) Shippers comment as per SOP\r\n"+
								"c) Non-commodity description\r\n"+
								"d) Agent Address (if mentioned on SI)\r\n"+
								"e) Also notify (if mentioned on SI)\r\n"+
								"f) Customer continuation\r\n\r\n"+
								"Update Shippers Comment according to Keywords like 'Wooden Packaging / Fumigated / Cargo Quality / Feed Grade / Ship To / In Transit / Country of Origin'.\r\n"+
								"(Do not change the sequence of description – update as per SI).";
            flag = 0;
            break;
				
		case "frt_term_cd"://MnD
			element[i].addEventListener("mouseover", function() { document.getElementsByName('frt_term_cd')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('frt_term_cd')[0].style.backgroundColor = ""; });
            element[i].title = "Update as per SI.\r\n" +
								"( If missing send a email ) - keep as per system downloaded.";
            flag = 0;
            break;

		case "btn_t8ExportImportInfo"://MnD
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t8ExportImportInfo').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t8ExportImportInfo').style.backgroundColor = ""; });
			element[i].title = "Select Country Brazil: \r\n" +
								"Update Consignee & Notify CNPJ No# (14-digits).";
			flag = 0;
			break;
				
		case "btn_t8POOtherNo"://MnD
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t8POOtherNo').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t8POOtherNo').style.backgroundColor = ""; });
			element[i].title = "Update PO No. As per customer special requirement or Instruction.";
            flag = 0;
            break;	
			
		case "btn_t8Save"://MnD
			element[i].addEventListener("click", function() { setTimeout(function(){ CNPJCHECK();  },1000); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ MnDReefer();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ MDCLAUSE();  },1000); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ DGCheck();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ MnD_DueCheck();  },1000); });
			element[i].addEventListener("mouseover", function(){ packageType_Desc();   });
			element[i].addEventListener("click", function() { setTimeout(function(){ ACID_popup();  },1000); });
			element[i].title = "Manual update 'PART OF 1Xxxx CONTAINER(S) SAID TO CONTAIN: \r\n";
			flag = 0;
			break;
			
		case "btn_save2"://ImportExport Save
			element[i].addEventListener("mouseover", function(){ checkACIDNO();   });
			flag = 0;
			break;
				
		case "form"://form webpage
			//mouseover
            flag = 0;
            break;		 	 	 
				
        default:
			flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{			
			case "DIV_t6sheet2"://CNTR
				element[i].addEventListener("mouseover", function () { setTimeout(function(){ CNTR_Tab_Runner_BGClr();  },1000); });
				element[i].addEventListener("mouseover", function () { setTimeout(function(){ CNTR_Tab_Runner();  },1000); });
				flag = 0;
				break;	
				
			case "btn_t1Split":
				element[i].addEventListener("mouseover", function () { bkgIKEASplitDisable();  });
				element[i].addEventListener("click", function () { SplitPartialProhibitedBLRegulation();  });
				flag = 0;
				break;				
				
			default:
                flag = 1;
		}
	}
}

/*
var Database_Name = 'OpusDB';
    var Version = 1.0;
    var Text_Description = 'Opus Temporary Database';
    var Database_Size = 2 * 1024 * 1024;
    var db = openDatabase(Database_Name, Version, Text_Description, Database_Size);
        db.transaction(function (tx) 
		{
//			tx.executeSql('delete from Customer');	
//			tx.executeSql("drop table Customer ");
						
			
			tx.executeSql('Create Table if not exists Customer (BLNumber VARCHAR(100), SHPRCode integer, SHPRName varchar(100), FWDRPrf varchar(5), FWDRCode integer, FWDRName varchar(100),  CNEECode integer, CNEEName varchar(100), CNPTCode integer, CNPTName varchar(100), SCNo , RFANo, DEL , POD , POR, POL, Trans_Mode, App_Date,clr);',  []);
			tx.executeSql('Create Table if not exists Email (BLNumber VARCHAR(100), SHPRCode integer, SHPRName varchar(100), SH, CN, NF );', [] );
			tx.executeSql('CREATE TABLE IF NOT EXISTS Escalation(BLNumber VARCHAR(50), BOFC VARCHAR(10) );', [] );
						
        });	
		
*/
