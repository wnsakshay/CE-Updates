 var element = document.getElementsByTagName('*');
 var clr = null;
 
 //window.addEventListener("load", function () { DeleteRecord(); });
 //window.addEventListener("load", function () { demo(); });



/*document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    alert("interactive");
  }
  if (document.readyState == "complete") {
    alert("complete");
  }
}*/
 

 
 for (var i = 0, l = element.length; i < l; i++) {
    var flag = 1;
	
 switch (element[i].name) {
            case "bkg_no":
				//element[i].addEventListener("change", function() { CreateDB(); });
				element[i].addEventListener("keypress", function() { insertData(); });
				//clr = document.getElementsByName("btn_t1RollOverInformation")[0].style.backgroundColor;
                flag = 0;
                break;
				
			case "btn_save2":
				element[i].addEventListener("mouseover", function() { CNPTFormate(); });
				flag = 0;
                break;
			
			case "ex_cust_nm":
				//element[i].addEventListener("mouseover", function() { getValue(); });
				//element[i].addEventListener("mouseout", function() { ClearData(); });
				//element[i].addEventListener("change", function() { CreateDB(); });
				element[i].addEventListener("mouseover", function() { getCustomerSOP(); });
                flag = 0;
                break;
			
			case "form":
                //element[i].addEventListener("mouseover", function () { HighlightFields(); });
				element[i].addEventListener("mouseover", function() { setBKGColor(); } );
				element[i].addEventListener("mouseover", function() { HighlightShipment(); } );
				element[i].addEventListener("mouseover" , function() { setBLIssueBgColor(); } );
				element[i].addEventListener("mouseover" , function() { setChargeBgColor(); } );
				element[i].addEventListener("mouseover" , function() { colr(); } );
                flag = 0;
                break; 
			
			case "xter_rmk":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = ""; });
				element[i].title = "Need to check Cust Remarks for additional details.\r\n(Example - S/C No., Name A/C, Freighting Instruction & ETC)";
                flag = 0;
                break;
			
			case "inter_rmk":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('inter_rmk')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('inter_rmk')[0].style.backgroundColor = ""; });
				element[i].title = "Need to check Int Remarks for additional details.\r\n(Example - S/C No.,  Freighting Instruction & ETC)";
                flag = 0;
                break;
				
			case "bkg_ctrl_pty_cust_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "1) CNPT should match with Shipper / Consignee / Notify / Forwarder.\r\n2) If not match then don’t link freight & send mail to Onshore";
                flag = 0;
                break;
				
			case "bkg_ctrl_pty_cust_seq":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].style.backgroundColor = ""; });
				element[i].title = "1) CNPT should match with Shipper / Consignee / Notify / Forwarder.\r\n2) If not match then don’t link freight & send mail to Onshore";
                flag = 0;
				
                break;
				
			case "bkg_ctrl_pty_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_nm')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_nm')[0].style.backgroundColor = ""; });
				element[i].title = "1) CNPT should match with Shipper / Consignee / Notify / Forwarder.\r\n2) If not match then don’t link freight & send mail to Onshore";
                flag = 0;
                break;
			
			case "cmdt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cmdt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "1) For US/CA Shipments - Correct CMDT should be selected as per Name Account & hint mentioned on SI / Remark. If no hint given update as per Commodity description. \r\n2) For Other Shipments - CMDT should be selected as per Name Account & hint mentioned on SI/ Remark";
                flag = 0;
                break;
				
			case "cmdt_desc":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cmdt_desc')[0].style.backgroundColor = ""; });
                element[i].title = "1) For US/CA Shipments - Correct CMDT should be selected as per Name Account & hint mentioned on SI / Remark. If no hint given update as per Commodity description. \r\n2) For Other Shipments - CMDT should be selected as per Name Account & hint mentioned on SI/ Remark";
                flag = 0;
                break;
				
			case "bkg_sts_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = ""; });
                element[i].title = "1) F – Confirmed (Process BL normally)\r\n2) X – Cancelled (Do not process BL send mail for – Booking status cancelled)\r\n3) W - Wait listed (Process BL & send mail to Onshore)";
                flag = 0;
                break;
			
			case "sh_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_nm')[0].style.backgroundColor = "#FFA54F";} )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_nm')[0].style.backgroundColor = ""; });
                element[i].title ='Update Shippers Company Name (2 Lines)';
                flag = 0;
                break;
				
			case "ex_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('ex_cust_nm')[0].style.backgroundColor = "#FFA54F";} )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('ex_cust_nm')[0].style.backgroundColor = ""; });
                element[i].title ="Update if mentioned on SI\r\n(Update as per any special customers requirement or Instructions)";
                flag = 0;
                break;	
				
			case "sh_cust_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_cnt_cd')[0].style.backgroundColor = "#FFA54F";} )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_cnt_cd')[0].style.backgroundColor = ""; });
                element[i].title ="Select proper code of Shipper as per SI with correct country code";
                flag = 0;
                break;	
			
			 case "an_cust_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('an_cust_cnt_cd')[0].style.backgroundColor = "#FFA54F";} )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('an_cust_cnt_cd')[0].style.backgroundColor = ""; });
                element[i].title = "Select proper code of Also Notify as per SI with correct Country Code ";
                flag = 0;
                break;
			
			case "an_cust_seq":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('an_cust_seq')[0].style.backgroundColor = "#FFA54F";} )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('an_cust_seq')[0].style.backgroundColor = ""; });
                element[i].title = "Select proper code of Also Notify as per SI with correct Country Code ";
                flag = 0;
                break;

            case "ff_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('ff_cust_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('ff_cust_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update F/Forwarder Company Name & Address as per SI (5 Lines) \r\n(Always un-tick print)";
                flag = 0;
                break;
			
			case "an_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('an_cust_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('an_cust_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update A/Notify Company Name & Address as per SI (5 Lines) \r\n(Always tick print)";
                flag = 0;
                break;
				
			case "pck_qty":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('pck_qty')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('pck_qty')[0].style.backgroundColor = ""; });
                element[i].title = "Update total no of Package & Package Type as per SI";
                flag = 0;
                break;	

            case "act_wgt":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('act_wgt')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('act_wgt')[0].style.backgroundColor = ""; });
                element[i].title = "Update total no Gross Weight as per SI";
                flag = 0;
                break;
				
			case "cntr_wgt":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cntr_wgt')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cntr_wgt')[0].style.backgroundColor = ""; });
                element[i].title = "Update Container gross weight as per SI (Container wise)";
                flag = 0;
                break;	
				
			case "meas_qty":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('meas_qty')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('meas_qty')[0].style.backgroundColor = ""; });
                element[i].title = "Update total no CBM as per SI";
                flag = 0;
                break;	
				
			case "frt_term_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frt_term_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frt_term_cd')[0].style.backgroundColor = ""; });
                element[i].title = "Update as per SI\r\n( If missing send a email ) - keep as per system downloaded";
                flag = 0;
                break;	

			case "nf_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_nm')[0].style.backgroundColor = ""; });
                element[i].title = "Update Notify Company Name (2 Lines)";
                flag = 0;
                break;
				
            case "sh_cust_addr":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_addr')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_addr')[0].style.backgroundColor = ""; });
				element[i].title = "Update Shipper Address (3 Lines) as per SI.";
                flag = 0;
                break;
				
            case "cn_cust_addr":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_addr')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_addr')[0].style.backgroundColor = ""; });
				element[i].title = "Update Consignee Address (3 Lines) as per SI.";
                flag = 0;
                break;
				
            case "nf_cust_addr":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_addr')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_addr')[0].style.backgroundColor = ""; });
				element[i].addEventListener("mouseover",function() {disable();})
				element[i].title = "Update Notify Address (3 Lines) as per SI.";
                flag = 0;
                break;
				
            case "sh_cust_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_cty_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Shipper City as per SI.";
                flag = 0;
                break;
				
            case "cn_cust_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_cty_nm')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Consignee City as per SI.";
                flag = 0;
                break;
				
            case "nf_cust_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_cty_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Notify City as per SI.";
                flag = 0;
                break;
				
            case "shpr_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_cty_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Shipper City as per HBL attachment.";
                flag = 0;
                break;
				
            case "cnee_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_cty_nm')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Consignee City as per HBL attachment.";
                flag = 0;
                break;
				
            case "noti_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_cty_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Notify City as per HBL attachment.";
                flag = 0;
                break;
				
            case "sh_cust_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_ste_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Shipper State Code as per SI.";
                flag = 0;
                break;
				
            case "cn_cust_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_ste_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Consignee State Code as per SI.";
                flag = 0;
                break;
				
            case "nf_cust_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_ste_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Notify State Code as per SI.";
                flag = 0;
                break;
				
            case "shpr_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_ste_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Shipper State Code as per HBL attachment.";
                flag = 0;
                break;
				
            case "cnee_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_ste_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Consignee State Code as per HBL attachment.";
                flag = 0;
                break;
				
            case "noti_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_ste_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Notify State Code as per HBL attachment.";
                flag = 0;
                break;
				
            case "sh_cstms_decl_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cstms_decl_cnt_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cstms_decl_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Shipper Country Code as per SI.";
                flag = 0;
                break;
				
            case "cn_cstms_decl_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cstms_decl_cnt_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cstms_decl_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Consignee Country Code as per SI.";
                flag = 0;
                break;
				
            case "nf_cstms_decl_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cstms_decl_cnt_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cstms_decl_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Notify Country Code as per SI.";
                flag = 0;
                break;
				
            case "shpr_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_cnt_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Shipper Country Code as per HBL attachment.";
                flag = 0;
                break;
				
            case "cnee_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_cnt_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Consignee Country Code as per HBL attachment.";
                flag = 0;
                break;
				
            case "noti_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_cnt_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Notify Country Code as per HBL attachment.";
                flag = 0;
                break;
				
            case "sh_cust_zip_id":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_zip_id')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_zip_id')[0].style.backgroundColor = ""; });
				element[i].title = "Update Shipper ZIP Code as per SI.";
                flag = 0;
                break;
				
            case "cn_cust_zip_id":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_zip_id')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_zip_id')[0].style.backgroundColor = ""; });
				element[i].title = "Update Consignee ZIP Code as per SI.";
                flag = 0;
                break;
				
            case "nf_cust_zip_id":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_zip_id')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_zip_id')[0].style.backgroundColor = ""; });
				element[i].title = "Update Notify ZIP Code as per SI.";
                flag = 0;
                break;
				
            case "shpr_zip_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_zip_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_zip_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Shipper ZIP Code as per HBL attachment.";
                flag = 0;
                break;
				
            case "cnee_zip_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_zip_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_zip_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Consignee ZIP Code as per HBL attachment.";
                flag = 0;
                break;
				
            case "noti_zip_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_zip_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_zip_cd')[0].style.backgroundColor = ""; });
                element[i].title = "Update Notify ZIP Code as per HBL attachment.";
                flag = 0;
                break;
				
            case "sh_eur_cstms_st_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_eur_cstms_st_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_eur_cstms_st_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Shipper Street / P.O Box as per SI";
                flag = 0;
                break;
				
            case "cn_eur_cstms_st_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_eur_cstms_st_nm')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_eur_cstms_st_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Consignee Street / P.O Box as per SI";
                flag = 0;
                break;
				
            case "nf_eur_cstms_st_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_eur_cstms_st_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_eur_cstms_st_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Notify Street / P.O Box as per SI";
                flag = 0;
                break;
				
            case "sh_eori_no":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_eori_no')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_eori_no')[0].style.backgroundColor = ""; });
				element[i].title = "Do not update anything in Shipper EORI field.";
                flag = 0;
                break;
				
            case "cn_eori_no":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_eori_no')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_eori_no')[0].style.backgroundColor = ""; });
				element[i].title = "Do not update anything in Consignee EORI field.";
                flag = 0;
                break;
				
            case "nf_eori_no":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_eori_no')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_eori_no')[0].style.backgroundColor = ""; });
				element[i].title = "Do not update anything in Notify EORI field.";
                flag = 0;
                break;

            case "btn_t6cntrconfirm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('btn_t6cntrconfirm')[0].style.backgroundColor = "#FFA54F"; })//#FFA54F
				element[i].addEventListener("mouseout", function() { document.getElementsByName('btn_t6cntrconfirm')[0].style.backgroundColor = ""; });
                element[i].title = "Tick on container confirmation – if all the container details updated as per SI";
                flag = 0;
                break;
			
			case "cnee_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_nm')[0].style.backgroundColor = ""; });
                element[i].title = "No validation of codes:\r\n1) Update Actual Consignee company name as per HBL attachment";
                flag = 0;
                break
				
            case "cnee_addr":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_addr')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_addr')[0].style.backgroundColor = ""; });
                element[i].title = "No validation of codes:\r\n1) Update address as per HBL attachment";
                flag = 0;
                break
			
			case "cstms_desc":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cstms_desc')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cstms_desc')[0].style.backgroundColor = ""; });
                element[i].title = "Update Actual Commodity Description\r\n(Do not update Brand Name & Numbers)";
				//element[i].addEventListener("change", function () { CopyButtonClick(); });
                flag = 0;
                break;
			
			case "cntr_cmdt_desc":
				//element[i].addEventListener("mouseover", function() { document.getElementsByName('cntr_cmdt_desc')[0].style.backgroundColor = "#FFA54F"; })
				//element[i].addEventListener("mouseout", function() { document.getElementsByName('cntr_cmdt_desc')[0].style.backgroundColor = ""; });
                //element[i].title = "Manual update 'PART OF 1Xxxx CONTAINER(S) SAID TO CONTAIN: \r\n";
                //flag = 0;
                //break;
				
			case "btn_t1retrieve":
				//element[i].addEventListener("mouseover", function() { document.getElementsByName('btn_t1retrieve')[0].style.backgroundColor = "#FFA54F"; })
				//element[i].addEventListener("mouseout", function() { document.getElementsByName('btn_t1retrieve')[0].style.backgroundColor = ""; });
				element[i].addEventListener("click", function() { insertData(); });
				//element[i].addEventListener("click", function() { colr(); });
				flag = 0;
				break;
			
			case "btn_t7Save":
				element[i].addEventListener("click", function() { flag = true; });
				element[i].addEventListener("click", function() { UpdateCustomerTabDetails(); });
				element[i].addEventListener("mouseover", function() { UpdateAddressLines(); } ); // Address Lines  HKGU66538300
				element[i].addEventListener("click", function() { CheckShipperName(); } ); // do not copy
				element[i].addEventListener("mouseup", function() { CheckMOT(); } );
				element[i].addEventListener("mouseover", function() { CustPopup(); } );
				element[i].addEventListener("click", function() { DueDiligence(); });
				flag = 0;
				break;
				
			case "sh_cust_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_cnt_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function() { getCustomerSOP(); });
                //flag = 0;
                break;
			
			case "taa_no":
				element[i].addEventListener("mouseover", function() { getToyotaSOP(); });
                flag = 0;
                break;
				
			
				
			case "sc_no":
				element[i].addEventListener("mouseover", function() { getWalmartSOP(); });
                flag = 0;
                break;
				
			case "btn_copy":
				element[i].addEventListener("mouseover", function() { getMDTabSOP(); });
				element[i].addEventListener("mouseout", function() { ClearMDTabCpyBtn(); });
                flag = 0;
                break;
			
			//case "dg_cmdt_desc":
			//var rows =document.getElementsByTagName("tbody")[0].rows;
				//for(var i=0;i<rows.length;i++){
					//var td = rows[i].getElementsByTagName("td")[i];
					//element[i].addEventListener("mouseover", function() { getMDTabSOP(); });
				//}
				//flag = 0;
				//break;
				
			case "btn_t8POOtherNo":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t8POOtherNo').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t8POOtherNo').style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function() { getMDTabSOP(); });
                flag = 0;
                break;
				
			case "dg_cmdt_desc":
				element[i].addEventListener("mouseover", function() { document.getElementById('dg_cmdt_desc').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('dg_cmdt_desc')[0].style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function() { setMDColor(); });
				element[i].addEventListener("mouseover", function() { getMDTabSOP(); });
				element[i].addEventListener("mouseout", function() { ClearMDTabDecription(); });
                flag = 0;
                break;
			
			case "frm_t11sheet1_bl_issue_at":
				element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_bl_issue_at').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseover", function() { getBLIssueTabSOP(); } );
				flag = 0;
				break;
			
			case "frm_p_t10sheet3_ofc_cd":
			case "frm_p_t10sheet3_cnt_cd":
			case "frm_p_t10sheet3_cust_seq":
			case "frm_t10sheet1_sc_no1":
			case "frm_t10sheet1_rfa_no":
			case "frm_t11sheet1_bl_issue_at":
				//element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_bl_issue_at').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseover", function() { getChargeTabSOP(); } );
				flag = 0;
				break;
			
			case "select_3rdPPD":
				element[i].addEventListener("mouseover", function() { getChargeTabSOP(); } );
				flag = 0;
				break;
				
			case "rt_bl_tp_cd_text":
				element[i].addEventListener("mouseover", function() { getChargeTabSOP(); } );
				flag = 0;
				break;
			
			case "frt_term_cd_text":
			case "btn_t10surcharge_Inquiry":
				element[i].addEventListener("mouseover", function () { getChargeTabSOP(); });
				//element[i].title = "Please Select Propar FRT Value which will Equivalent to Charge OFT value.";
				flag = 0;
				break; 	 	 	 
			
			case "btn_t10add":
				element[i].addEventListener("mouseover", function () { ChargeTabCheck(); });
				element[i].addEventListener("mouseover", function () { getChargeTabSOP(); });
				flag = 0;
				break;
			
			case "frm_t11sheet1_rcv_de_term_prn_flg":
                //element[i].title = "Europe shipment : Need to Untick R/D Term -  if Free Out Clause is updated \r\n( As per SOP instructions need to follow instruction as per POD)";
                //flag = 0;
				//break;
				
            case "frm_t11sheet1_final_dest":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_final_dest')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_final_dest')[0].style.backgroundColor = ""; });
                element[i].title = "Update only if mentioned on SI";
                flag = 0;
				break;

            case "bl_ready_checkbox":
                element[i].title = "Need to tick on BL Data Complete - If the whole BL is completed";
                flag = 0;
				break;

            case "bl_proofbyshipper_checkbox":
                element[i].title = "Do Not tick BL Confirm By Shipper for any shipment";
                flag = 0;
				break;
				
			case "frm_t11sheet1_por_name":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_por_name')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_por_name')[0].style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function () { getBLIssueTabSOP(); });
				flag = 0;
				break;
				
			case "frm_t11sheet1_pol_name":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_pol_name')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_pol_name')[0].style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function () { getBLIssueTabSOP(); });
				flag = 0;
				break;
			case "frm_t11sheet1_pod_name":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_pod_name')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_pod_name')[0].style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function () { getBLIssueTabSOP(); });
				flag = 0;
				break;
			case "frm_t11sheet1_del_name":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_del_name')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_del_name')[0].style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function () { getBLIssueTabSOP(); });
				flag = 0;
				break;
			case "frm_t11sheet1_bl_iss_tp_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_bl_iss_tp_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_bl_iss_tp_cd')[0].style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function () { getBLIssueTabSOP(); });
				flag = 0;
				break;
			
			case "date_set_checkbox":
				element[i].title = "Need to tick on On Board Date";
				flag = 0;
				break;
				
			case "select_pre_carriage_by_text":
			case "pop_on_board_date":
				//element[i].addEventListener("mouseover", function() { document.getElementsByName('select_pre_carriage_by_text')[0].style.backgroundColor = "#FFA54F"; })
				//element[i].addEventListener("mouseout", function() { document.getElementsByName('select_pre_carriage_by_text')[0].style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function () { getBLIssueTabSOP(); });
				flag = 0;
				break;
				
			case "select_vessel_direction_text":
				//element[i].addEventListener("mouseover", function() { document.getElementsByName('select_vessel_direction_text')[0].style.backgroundColor = "#FFA54F"; })
				//element[i].addEventListener("mouseout", function() { document.getElementsByName('select_vessel_direction_text')[0].style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function () { getBLIssueTabSOP(); });
				flag = 0;
				break;
				
			case "btn_t11Doc_Requirement":
				element[i].addEventListener("mouseover", function() { getBLIssueTabSOP(); } );
				flag = 0;
				break;
			
			case "btn_BLPreview":
				//element[i].addEventListener("mouseover", function() { getBLIssueTabSOP(); } );
				flag = 0;
				break;
			
			case "mk_desc_prn_flg":
			    element[i].title = "Always Tick Print on M/D";
				flag = 0;
				break;
			
			case "mf_desc_prn_flg":
			    element[i].title = "";////Tick on C/M Print for Panalpina Customer.
				flag = 0;
				break;
			
			//case "si_cntc_pson_nm":
			case "si_cntc_pson_eml":
				element[i].addEventListener("keyup", function() { NonOneLineMail(); } );
				flag = 0;
				break;

			case "si_cntc_pson_nm":
				//element[i].addEventListener("mouseover", function() { alert("Heellooo"); } );
				element[i].addEventListener("mousedown", function() { getSIContact(); } );
				flag = 0;
				break;
			
			//Escalation
			
			case "rtn_to_usr_eml":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('rtn_to_usr_eml')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('rtn_to_usr_eml')[0].style.backgroundColor = ""; });
				element[i].title = "Please check Email ID as per Customer or Onshore for Specific Booking Office.";
				//element[i].addEventListener("mouseover", function() { ValidateMail(); } );
				flag = 0;
				break;
				
			case "ui_grp_cd":
				element[i].addEventListener("click", function() { CheckEscalationMail(); } );
				flag = 0;
				break;
			
			case "imp_cnee_tax_no":
				//element[i].addEventListener("change", function() { CNPTFormate(); } );
				flag = 0;
				break;
			
			//case "btn_Retrieve":
			//case "btn_Select":
				//element[i].addEventListener("mouseup", function() { CheckExpenditors(); } );
				//flag = 0;
				//break;
				
            default:
                flag = 1;
        }
		
		if (flag == 1) 
		{
        switch (element[i].id) 
		{
            case "__TableEntryScreenSanction_SchemaAll_RecordsIs_this_a_customer_or_vendor":
			//alert("func");
				element[i].addEventListener("focusout", function() { alert("Focus Out"); });
				element[i].addEventListener("blur", function() { alert("Blur"); });
				element[i].addEventListener("mouseout", function() { alert("mouseout"); });
                flag = 0;
                break;
				
				
				
			case "FormPage":
			//alert("func");
				element[i].addEventListener("mouseover", function() { inputval(); });
				//element[i].addEventListener("mouseleave", function() { disable(); });
                flag = 0;
                break;

			case "btn_t6save":
				element[i].addEventListener("mouseover", function() { getMDTab(); } );
				flag = 0;
				break;
				
			case "btn_t1Save":
                element[i].addEventListener("mouseover", function () { CheckFiler(); });
				element[i].addEventListener("mouseover", function() { BillStop(); } );
				element[i].addEventListener("mouseover", function() { NonOneLineMail(); } );
				element[i].addEventListener("mouseup", function() { IndShipment(); } );
				element[i].addEventListener("mouseup", function() { ETD_Correction(); } );
				//element[i].addEventListener("mouseover", function() { createChk(bl_no);} );
                flag = 0;
                break;
			
			case "btn_t9Save":
                element[i].addEventListener("mouseover", function () { CheckShipment(); });
				element[i].addEventListener("mouseover", function () { getCMTab(); });
				element[i].addEventListener("mouseup", function () { CheckEurope(); });
                flag = 0;
                break;
				
			case "btn_t10save":
				element[i].addEventListener("mouseover", function() { CheckFRTTerm(); });
				//element[i].addEventListener("mouseup", function() { Feeder_Application(); } );
				element[i].addEventListener("mouseup", function() { CNPTSTARBUCKS(); } );
				element[i].addEventListener("mouseup", function() { generate_table(); } );
				//element[i].addEventListener("mouseup", function() { ETD_Correction(); } );
				element[i].addEventListener("mouseover", function() { checkRate(); });
				element[i].addEventListener("mousedown", function() { checkRate(); });
				//element[i].addEventListener("keydown", function() { keydown(); });
				flag = 0;
				break;
			
			case "btn_t10auto_rating":
				//element[i].addEventListener("mouseover", function() { Feeder_Application(); } );
				element[i].title = "To link Freight\r\nClick on Auto-Rating -> Check Cntr QTY -> Select correct rate -> Select";
				element[i].addEventListener("click", function() { Rating(); } );
				flag = 0;
				break;
			
			case "btn_Close":
				element[i].addEventListener("click", function() {  } );//Rating();
				flag = 0;
				break;
			
			case "DIV_t1sheet1":
				element[i].addEventListener("mouseover", function () { TPSZ();});
				flag = 0;
				break;
			
			case "DIV_t9sheet2":
				element[i].addEventListener("mouseover", function () { C_M_tab_Runner(); });
				flag = 0;
				break;
			
			
			case "DIV_t6sheet2":
				element[i].addEventListener("mouseover", function () { EleLoader_Runner();});
				flag = 0;
				break;
				
			case "btn_t1Danger":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1Danger').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1Danger').style.backgroundColor = ""; });
				element[i].title = "Dangerous Cargo:\r\nCheck IMO # GW & Approval Status (Y) also check container assign or not";
				flag = 0;
				break;
			
			case "btn_t1Reefer":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1Reefer').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1Reefer').style.backgroundColor = ""; });
				element[i].title = "Reefer Cargo:\r\nCheck TEMP / VEN & Approval Status (Y) also check container assign or not";
				flag = 0;
				break;
			
			case "usa_cstms_file_cd_text":
				element[i].addEventListener("mouseover", function() { document.getElementById('usa_cstms_file_cd_text').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('usa_cstms_file_cd_text').style.backgroundColor = ""; });
				element[i].title = "POD US:\r\nFiler (1) – Create Manual HBL (House Bill of Lading)\r\nFiler (2) - Update SCAC code as per SI\r\nFiler (3) – Not Applicable";
				//document.getElementById('usa_cstms_file_cd_text').style.outline =  '2px solid #F00';
				flag = 0;
				break;
				
			case "cnd_cstms_file_cd_text":
				element[i].addEventListener("mouseover", function() { document.getElementById('cnd_cstms_file_cd_text').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('cnd_cstms_file_cd_text').style.backgroundColor = ""; });
				element[i].title = "POD Canada:\r\nFiler (1) – Create Manual HBL (House Bill of Lading)\r\nFiler (2) - Update ACI code as per SI\r\nFiler (3) – Not Applicable";
				flag = 0;
				break;
			
			case "btn_t1ReferenceNo":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1ReferenceNo').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1ReferenceNo').style.backgroundColor = ""; });
				element[i].title = "Applicable – Only if mention on SI/SOP to show any Reference #";
				flag = 0;
				break;
			
			case "nf_cust_cnt_cd": 
				element[i].addEventListener("mouseover", function() { document.getElementById('nf_cust_cnt_cd').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('nf_cust_cnt_cd').style.backgroundColor = ""; });
				element[i].title = "Select proper code of Notify as per SI with correct country code";
				flag = 0;
				break;
				
			case "nf_cust_seq":
				element[i].addEventListener("mouseover", function() { document.getElementById('nf_cust_seq').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('nf_cust_seq').style.backgroundColor = ""; });
				element[i].title = "Select proper code of Notify as per SI with correct Country Code";
				flag = 0;
				break;
				
			case "cn_cust_cnt_cd": 
				element[i].addEventListener("mouseover", function() { document.getElementById('cn_cust_cnt_cd').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('cn_cust_cnt_cd').style.backgroundColor = ""; });
				element[i].title = "Select proper code of Consignee as per SI with correct country code";
				flag = 0;
				break;
				
			case "cn_cust_seq":
				element[i].addEventListener("mouseover", function() { document.getElementById('cn_cust_seq').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('cn_cust_seq').style.backgroundColor = ""; });
				element[i].title = "Select proper code of Consignee as per SI with correct Country Code";
				flag = 0;
				break;
				
	
				
			case "sh_cust_seq":
				element[i].addEventListener("mouseover", function() { document.getElementById('sh_cust_seq').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('sh_cust_seq').style.backgroundColor = ""; });
				element[i].title = "Select proper code of Shipper as per SI with correct country code";
				flag = 0;
				break;	
				
			case "ff_cust_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementById('ff_cust_cnt_cd').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('ff_cust_cnt_cd').style.backgroundColor = ""; });
				element[i].title = "Match with CNPT & Affiliates & tick- Untick print box accordingly";
				flag = 0;
				break;
				
			case "ff_cust_seq":
				element[i].addEventListener("mouseover", function() { document.getElementById('ff_cust_seq').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('ff_cust_seq').style.backgroundColor = ""; });
				element[i].title = "Match with CNPT & Affiliates & tick- Untick print box accordingly";
				flag = 0;
				break;
			
			
			//case "exID01":
			/*case "mk_desc_prn_flg":
				element[i].addEventListener("mouseover", function() { document.getElementById('exID01').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('exID01').style.backgroundColor = ""; });
				element[i].title = "Always Tick Print on M/D";
				flag = 0;
				break;*/
			
			case "mk_desc":
				element[i].addEventListener("mouseover", function() { document.getElementById('mk_desc').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('mk_desc').style.backgroundColor = ""; });
				element[i].title = "Update as per SI\r\n(Aligned the words properly)";
				flag = 0;
				break;
			
			case "btn_t8ExportImportInfo":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t8ExportImportInfo').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t8ExportImportInfo').style.backgroundColor = ""; });
				element[i].title = "Select Country Brazil: \r\n" +
				"Update Consignee & Notify CNPJ No# (14-digits)";
				flag = 0;
				break;
			
			case "shpr_nm":
				element[i].addEventListener("mouseover", function() { document.getElementById('shpr_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('shpr_nm').style.backgroundColor = ""; });
				element[i].title = "No validation of codes:\r\n1) Update Actual Shipper company name as per HBL attachment";
				flag = 0;
				break;
			
			case "shpr_addr":
				element[i].addEventListener("mouseover", function() { document.getElementById('shpr_addr').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('shpr_addr').style.backgroundColor = ""; });
				element[i].title = "No validation of codes:\r\n1) Update address as per HBL attachment";
				flag = 0;
				break;
			
			case "noti_nm":
				element[i].addEventListener("mouseover", function() { document.getElementById('noti_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('noti_nm').style.backgroundColor = ""; });
				element[i].title = "No validation of codes:\r\n1) Update Actual Notify company name as per HBL attachment";
				flag = 0;
				break;

			case "noti_addr":
				element[i].addEventListener("mouseover", function() { document.getElementById('noti_addr').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('noti_addr').style.backgroundColor = ""; });
				element[i].title = "No validation of codes:\r\n1) Update address as per HBL attachment";
				flag = 0;
				break;
			
			case "bl_mk_desc":
				element[i].addEventListener("mouseover", function() { document.getElementById('bl_mk_desc').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('bl_mk_desc').style.backgroundColor = ""; });
				element[i].title = "Update marks & Numbers as per HBL attachement\r\nIf not mentioned on SI – update as per MBL";
				flag = 0;
				break;
        
			case "bl_gds_desc":
				element[i].addEventListener("mouseover", function() { document.getElementById('bl_gds_desc').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('bl_gds_desc').style.backgroundColor = ""; });
				element[i].title = "Update description as per HBL attachement\r\nIf not mentioned on SI – update as per MBL";
				flag = 0;
				break;
			
			case "pck_qty":
				element[i].addEventListener("mouseover", function() { document.getElementById('pck_qty').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('pck_qty').style.backgroundColor = ""; });
				element[i].title = "Update Total Package as per HBL attachement \r\n" +
				"If not mentioned on SI – update as per MBL";
				//element[i].addEventListener("change", function() { UpdatePackage(); } );
				flag = 0;
				break;
			
			case "btn_t8Save":
				element[i].addEventListener("mouseover", function() { UpdatePackage(); } );
				element[i].addEventListener("mouseup", function() { CNPJCHECK(); } );
				element[i].addEventListener("click", function() { MDCLAUSE(); } );
				element[i].title = "Manual update 'PART OF 1Xxxx CONTAINER(S) SAID TO CONTAIN: \r\n";
				flag = 0;
				break;
			
			case "hbl_wgt":
				element[i].addEventListener("mouseover", function() { document.getElementById('hbl_wgt').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('hbl_wgt').style.backgroundColor = ""; });
				element[i].title = "Update Total Weight as per HBL attachement\r\nIf not mentioned on SI – update as per MBL";
				flag = 0;
				break;
			
			case "cmdt_meas_qty":
				element[i].addEventListener("mouseover", function() { document.getElementById('cmdt_meas_qty').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('cmdt_meas_qty').style.backgroundColor = ""; });
				element[i].title = "Update Measurement as per HBL attachement\r\nIf not mentioned on SI – update as per MBL";
				flag = 0;
				break;
        
			case "hbl_no":
				element[i].addEventListener("mouseover", function() { document.getElementById('hbl_no').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('hbl_no').style.backgroundColor = ""; });
				element[i].title = "Update if mentioned on SI or HBL attachement\r\nIf not mentioned – update BL NO as HBL No.";
				flag = 0;
				break;
        
			case "cntr_mf_no":
				element[i].addEventListener("mouseover", function() { document.getElementById('cntr_mf_no').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('cntr_mf_no').style.backgroundColor = ""; });
				element[i].title = "When all the HBL details are updated – need to Tick on Manifest File No.";
				flag = 0;
				break;
			
			case "btn_t9AllConfirm":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t9AllConfirm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t9AllConfirm').style.backgroundColor = ""; });
				element[i].title = "We need to Tick on All Confirm when the container details are correctly updated";
				flag = 0;
				break;
			
			case "btn_t9AllRelease":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t9AllRelease').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t9AllRelease').style.backgroundColor = ""; });
				element[i].title = "If we need to amend the details we need to Tick on All Release";
				flag = 0;
				break;
			
			case "pck_tp_cd":
				element[i].addEventListener("mouseover", function() { document.getElementById('pck_tp_cd').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('pck_tp_cd').style.backgroundColor = ""; });
				element[i].title = "Update Total Package & Package Type as per HBL attachement\r\nIf not mentioned on SI – update as per MBL";
				flag = 0;
				break;
			
			case "cn_cust_nm"://new
				element[i].addEventListener("mouseover", function() { document.getElementById('cn_cust_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('cn_cust_nm').style.backgroundColor = ""; });
				element[i].title = "Update Consignee Company Name (2 Lines)";
				flag = 0;
				break;
			
			case "ff_cust_lgl_eng_nm":
				element[i].addEventListener("mouseover", function() { document.getElementById('ff_cust_lgl_eng_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('ff_cust_lgl_eng_nm').style.backgroundColor = ""; });
				element[i].title = "Match with CNPT & Affiliates & tick- Untick print box accordingly";
				flag = 0;
				break;
			
			case "bl_ready_type_text":
				element[i].addEventListener("mouseover", function() { document.getElementById('bl_ready_type_text').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('bl_ready_type_text').style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function() { getBLIssueTabSOP(); } );
				flag = 0;
				break;
				
			case "bl_ready_type_IBCBMainBtn":
				element[i].addEventListener("mouseover", function() { document.getElementById('bl_ready_type_IBCBMainBtn').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('bl_ready_type_IBCBMainBtn').style.backgroundColor = ""; });
				//element[i].title = "Please Select propar Type Value base on SI(refer SI).";
				element[i].addEventListener("mouseover", function() { getBLIssueTabSOP(); } );
				flag = 0;
				break;
			
			case "btn_send":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_send').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_send').style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function() { SendMail(); } );
				flag = 0;
				break;
				
			case "on_board_type_text":
				element[i].addEventListener("mouseover", function() { document.getElementById('on_board_type_text').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('on_board_type_text').style.backgroundColor = ""; });
                element[i].title = "Update as per instructions mentioned on SI";
                flag = 0;
                break;

            case "btn_t10doc":
				//element[i].addEventListener("mouseover", function() { document.getElementById('btn_t10doc').style.backgroundColor = "#FFA54F"; })
				//element[i].addEventListener("mouseout", function() { document.getElementById('btn_t10doc').style.backgroundColor = ""; });
                //element[i].title = "Need to add DOC Adjustment - If there is 3rd country BL Issuance";
                //flag = 0;
                break;
				
			case "frm_t11sheet1_inet_ctrl_pty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_nm').style.backgroundColor = ""; });
                element[i].title = "Update as per ICP List";
                flag = 0;
                break;
					
			case "frm_t11sheet1_inet_ctrl_pty_no":
				element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_no').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_no').style.backgroundColor = ""; });
				element[i].title = "Update as per ICP List";
                flag = 0;
                break;
				
			case "frm_t11sheet1_inet_ctrl_pty_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_cust_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_cust_nm').style.backgroundColor = ""; });
				element[i].title = "Update as per ICP List";
                flag = 0;
                break;	
				
			case "frm_t11sheet1_obl_iss_rmk":
				element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_obl_iss_rmk').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_obl_iss_rmk').style.backgroundColor = ""; });
				element[i].title = "Update as per country from BL Clause List";
                flag = 0;
                break;
			
			case "frm_t11sheet1_final_dest":
				element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_final_dest').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_final_dest').style.backgroundColor = ""; });
                flag = 0;
                break;
				
			case "move_type_text":
				element[i].addEventListener("mouseover", function() { document.getElementById('move_type_text').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('move_type_text').style.backgroundColor = ""; });
				element[i].title = "Europe shipment\r\nNeed to update Move Type as  FCL/ Free Out\r\n( As per SOP instructions need to follow instruction as per POD)";
                flag = 0;
                break;	
			
			//case "tab1_tabTitle_10":
			//case "btn_t11Save":
				//element[i].addEventListener("mouseover", function() { UpdateBLType(); });
				//flag = 0;
			
			case "btn_t11Save":
				element[i].addEventListener("mouseover", function() { UpdateBLType(); } );
				element[i].addEventListener("mouseup", function() { Popup(); });
				element[i].addEventListener("mouseover", function() { ICPCheck(); });
				element[i].addEventListener("click", function() { ICPCheck(); });
				flag = 0;
				break;
				
			case "btn_save":
				element[i].addEventListener("mouseover", function() { DocCheck(); } );
				flag = 0;
				break;
				
			//Escalation
			//case "btn_return":
			case "btn_Retrieve":
				element[i].addEventListener("mouseup", function() { InsertEscalationMail(); } );
				flag = 0;
				break;
				
			case "btn_return":
				element[i].addEventListener("mouseover", function() { ValidateMail();  } );  //ValidateMail(); 
				flag = 0;
				break;
				
			case "btn_Close":
			case "btn_Save":
				element[i].addEventListener("mouseover", function() { UpdateTransMode();  } );
				element[i].addEventListener("mouseover", function() { getPONumber();  } );
				flag = 0;
				break;
				
			case "btn1_Close":
				//element[i].addEventListener("mouseover", function() { Feeder_Application();  } );
				flag = 0;
				break;
			
			case "frm_t10sheet1_rt_aply_dt":
				//element[i].addEventListener("change", function() { Feeder_Application(); } );
				flag = 0;
				break;
				
			case "btn1_Apply":
				element[i].addEventListener("mouseover", function() { UpdateApplicationDate(); } );
				flag = 0;
				break;
			
			default:
                flag = 1;
		}
	}
}
