var element = document.getElementsByTagName('*');
var clr = null;
 
//window.addEventListener("load", function () { DeleteRecord(); });
 
 
//document.onkeydown = keydown;
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "bkg_no":
			element[i].addEventListener("keypress", function() { setTimeout(function(){ insertData(); },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ SOC_CMDTPopup(); },1000); });
			element[i].addEventListener("click", function() { checker(); } );
            flag = 0;
            break;
				
		case "btn_save2":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ CNPTFormate(); },1000); });
			flag = 0;
            break;
			
		case "bkg_sts_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = ""; });
            element[i].title = "1) F - Confirmed (Process BL normally).\r\n" +
							"2) X - Cancelled (Do not process BL send mail for - Booking status cancelled).\r\n" +
							"3) W - Wait listed (Process BL & send mail to Onshore).";
            flag = 0;
            break;
				
		case "btn_t1Danger":
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1Danger').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1Danger').style.backgroundColor = ""; });
			element[i].addEventListener("click", function() { alert("Please update container as per Gross Weight"); });
			element[i].title = "Dangerous Cargo:\r\n" +
							"Check IMO # GW & Approval Status (Y) also check container assign or not.";
			flag = 0;
			break;
				
		case "btn_t1Reefer":
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1Reefer').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1Reefer').style.backgroundColor = ""; });
			element[i].title = "Reefer Cargo:\r\n" +
							"Check TEMP / VEN & Approval Status (Y) also check container assign or not.";
			flag = 0;
			break;
			
		case "btn_t1Awkward":
			element[i].addEventListener("click", function() { alert("Please assign correct container as per container TP/SZ"); });
			flag = 0;
			break;
				
		case "usa_cstms_file_cd_text":
			element[i].title = "POD US:\r\n" +
							"Filer (1) – Create Manual HBL (House Bill of Lading).\r\n" +
							"Filer (2) - Update SCAC code as per SI.\r\n" +
							"Filer (3) – Not Applicable.";
			flag = 0;
			break;
				
		case "cnd_cstms_file_cd_text":
			element[i].title = "POD Canada:\r\n" +
							"Filer (1) – Create Manual HBL (House Bill of Lading).\r\n" +
							"Filer (2) - Update ACI code as per SI.\r\n" +
							"Filer (3) – Not Applicable.";
			flag = 0;
			break;
				
		case "btn_t1ReferenceNo":
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1ReferenceNo').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1ReferenceNo').style.backgroundColor = ""; });
			element[i].title = "Applicable – Only if mention on SI/SOP to show any Reference #.";
			flag = 0;
			break;
				
		case "bkg_ctrl_pty_cust_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].style.backgroundColor = ""; });
			element[i].title = "1) CNPT should match with Shipper / Consignee / Notify / Forwarder.\r\n" +
							"2) If not match then don’t link freight & send mail to Onshore.";
            flag = 0;
            break;
				
		case "bkg_ctrl_pty_cust_seq":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].style.backgroundColor = ""; });
			element[i].title = "1) CNPT should match with Shipper / Consignee / Notify / Forwarder.\r\n" +
							"2) If not match then don’t link freight & send mail to Onshore.";
            flag = 0;
            break;
				
		case "bkg_ctrl_pty_cust_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_nm')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_nm')[0].style.backgroundColor = ""; });
			element[i].title = "1) CNPT should match with Shipper / Consignee / Notify / Forwarder.\r\n" +
							"2) If not match then don’t link freight & send mail to Onshore.";
            flag = 0;
            break;
				
		case "cmdt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cmdt_cd')[0].style.backgroundColor = ""; });
			element[i].title = "1) For US/CA Shipments - Correct CMDT should be selected as per Name Account & hint mentioned on SI/Remark. If no hint given update as per Commodity description. \r\n" +
							"2) For Other Shipments - CMDT should be selected as per Name Account & hint mentioned on SI/Remark.";
            flag = 0;
            break;
				
		case "cmdt_desc":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cmdt_desc')[0].style.backgroundColor = ""; });
            element[i].title = "1) For US/CA Shipments - Correct CMDT should be selected as per Name Account & hint mentioned on SI/Remark. If no hint given update as per Commodity description. \r\n" +
							"2) For Other Shipments - CMDT should be selected as per Name Account & hint mentioned on SI/Remark.";
            flag = 0;
            break;
				
		case "xter_rmk":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = ""; });
			element[i].title = "Need to check Cust Remarks for additional details.\r\n" +
							"(Example - S/C No., Name A/C, Freighting Instruction & ETC).";
            flag = 0;
            break;
			
		case "inter_rmk":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('inter_rmk')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('inter_rmk')[0].style.backgroundColor = ""; });
			element[i].title = "Need to check Int Remarks for additional details.\r\n" +
							"(Example - S/C No.,  Freighting Instruction & ETC).";
            flag = 0;
            break;
				
		case "btn_t6cntrconfirm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('btn_t6cntrconfirm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('btn_t6cntrconfirm')[0].style.backgroundColor = ""; });
            element[i].title = "Tick on Container Confirmation – if all the container details updated as per SI.";
            flag = 0;
            break;

		case "sh_cust_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_cnt_cd')[0].style.backgroundColor = "#EC7215";} )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_cnt_cd')[0].style.backgroundColor = ""; });
            element[i].title ="Select proper code of Shipper as per SI with correct Country Code.";
            flag = 0;
            break;

		case "sh_cust_seq":
			element[i].addEventListener("mouseover", function() { document.getElementById('sh_cust_seq').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('sh_cust_seq').style.backgroundColor = ""; });
			element[i].title = "Select proper code of Shipper as per SI with correct Country Code.";
			flag = 0;
			break;

		case "sh_cust_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_nm')[0].style.backgroundColor = "#EC7215";} )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_nm')[0].style.backgroundColor = ""; });
            element[i].title ="Update Shippers Company Name (2 Lines) as per SI.";
            flag = 0;
            break;

		case "sh_cust_addr":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_addr')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_addr')[0].style.backgroundColor = ""; });
			element[i].title = "Update Shipper Address (3 Lines) as per SI.";
            flag = 0;
            break;

		case "sh_cust_cty_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_cty_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_cty_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update Shipper City as per SI.";
            flag = 0;
            break;

		case "sh_cust_ste_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_ste_cd')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_ste_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Shipper State Code as per SI.";
            flag = 0;
            break;

		case "sh_cstms_decl_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cstms_decl_cnt_cd')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cstms_decl_cnt_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Shipper Country Code as per SI.";
            flag = 0;
            break;

		case "sh_cust_zip_id":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_zip_id')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_zip_id')[0].style.backgroundColor = ""; });
			element[i].title = "Update Shipper ZIP Code as per SI.";
            flag = 0;
            break;

		case "sh_eur_cstms_st_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_eur_cstms_st_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_eur_cstms_st_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update Shipper Street / P.O Box as per SI.";
            flag = 0;
            break;

		case "sh_eori_no":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_eori_no')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_eori_no')[0].style.backgroundColor = ""; });
			element[i].title = "Do not update anything in Shipper EORI field.";
            flag = 0;
            break;
				
		case "cn_cust_cnt_cd": 
			element[i].addEventListener("mouseover", function() { document.getElementById('cn_cust_cnt_cd').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('cn_cust_cnt_cd').style.backgroundColor = ""; });
			element[i].title = "Select proper code of Consignee as per SI with correct Country Code.";
			flag = 0;
			break;
				
		case "cn_cust_seq":
			element[i].addEventListener("mouseover", function() { document.getElementById('cn_cust_seq').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('cn_cust_seq').style.backgroundColor = ""; });
			element[i].title = "Select proper code of Consignee as per SI with correct Country Code.";
			flag = 0;
			break;
				
		case "cn_cust_nm":
			element[i].addEventListener("mouseover", function() { document.getElementById('cn_cust_nm').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('cn_cust_nm').style.backgroundColor = ""; });
			element[i].title = "Update Consignee Company Name (2 Lines) as per SI.";
			flag = 0;
			break;
				
		case "cn_cust_addr":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_addr')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_addr')[0].style.backgroundColor = ""; });
			////element[i].addEventListener("mouseover", function() { Customer_ToolTips(); } )
			element[i].title = "Update Consignee Address (3 Lines) as per SI.";
            flag = 0;
            break;
				
		case "cn_cust_cty_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_cty_nm')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_cty_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update Consignee City as per SI.";
            flag = 0;
            break;
			
		case "cn_cust_ste_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_ste_cd')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_ste_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Consignee State Code as per SI.";
            flag = 0;
            break;
            
		case "cn_cstms_decl_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cstms_decl_cnt_cd')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cstms_decl_cnt_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Consignee Country Code as per SI.";
            flag = 0;
            break;
			
		case "cn_cust_zip_id":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_zip_id')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_zip_id')[0].style.backgroundColor = ""; });
			element[i].title = "Update Consignee ZIP Code as per SI.";
            flag = 0;
            break;
			
		case "cn_eur_cstms_st_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_eur_cstms_st_nm')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_eur_cstms_st_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update Consignee Street / P.O Box as per SI.";
            flag = 0;
            break;
		
        case "cn_eori_no":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_eori_no')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_eori_no')[0].style.backgroundColor = ""; });
			element[i].title = "Do not update anything in Consignee EORI field.";
            flag = 0;
            break;
				
		case "nf_cust_cnt_cd": 
			element[i].addEventListener("mouseover", function() { document.getElementById('nf_cust_cnt_cd').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('nf_cust_cnt_cd').style.backgroundColor = ""; });
			element[i].title = "Select proper code of Notify as per SI with correct Country Code.";
			flag = 0;
			break;
				
		case "nf_cust_seq":
			element[i].addEventListener("mouseover", function() { document.getElementById('nf_cust_seq').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('nf_cust_seq').style.backgroundColor = ""; });
			element[i].title = "Select proper code of Notify as per SI with correct Country Code.";
			flag = 0;
			break;

		case "nf_cust_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_nm')[0].style.backgroundColor = ""; });
            element[i].title = "Update Notify Company Name (2 Lines) as per SI.";
            flag = 0;
            break;

		case "nf_cust_addr":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_addr')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_addr')[0].style.backgroundColor = ""; });
			////element[i].addEventListener("mouseover",function() { Customer_ToolTips(); })
			element[i].addEventListener("mouseover",function() { disable_sameCNEE_chkbx();})
			element[i].title = "Update Notify Address (3 Lines) as per SI.";
            flag = 0;
            break;
				
		case "nf_cust_cty_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_cty_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_cty_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update Notify City as per SI.";
            flag = 0;
            break;
				
		case "nf_cust_ste_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_ste_cd')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_ste_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Notify State Code as per SI.";
            flag = 0;
            break;
				
		case "nf_cstms_decl_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cstms_decl_cnt_cd')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cstms_decl_cnt_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Notify Country Code as per SI.";
            flag = 0;
            break;
				
		case "nf_cust_zip_id":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_zip_id')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_zip_id')[0].style.backgroundColor = ""; });
			element[i].title = "Update Notify ZIP Code as per SI.";
            flag = 0;
            break;
				
		case "nf_eur_cstms_st_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_eur_cstms_st_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_eur_cstms_st_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update Notify Street / P.O Box as per SI.";
            flag = 0;
            break;
				
        case "nf_eori_no":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_eori_no')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_eori_no')[0].style.backgroundColor = ""; });
			element[i].title = "Do not update anything in Notify EORI field.";
            flag = 0;
            break;
			
		case "ff_cust_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementById('ff_cust_cnt_cd').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('ff_cust_cnt_cd').style.backgroundColor = ""; });
			element[i].title = "Match with CNPT & Affiliates & Tick - Untick print box accordingly.";
			flag = 0;
			break;
				
		case "ff_cust_seq":
			element[i].addEventListener("mouseover", function() { document.getElementById('ff_cust_seq').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('ff_cust_seq').style.backgroundColor = ""; });
			element[i].title = "Match with CNPT & Affiliates & Tick - Untick print box accordingly.";
			flag = 0;
			break;
			
		case "ff_cust_lgl_eng_nm":
			element[i].addEventListener("mouseover", function() { document.getElementById('ff_cust_lgl_eng_nm').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('ff_cust_lgl_eng_nm').style.backgroundColor = ""; });
			element[i].title = "Match with CNPT & Affiliates & Tick - Untick print box accordingly.";
			flag = 0;
			break;
			
		case "ff_cust_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('ff_cust_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('ff_cust_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update F/Forwarder Company Name & Address as per SI (5 Lines).\r\n" +
							"(Always un-tick print).";
            flag = 0;
            break;
			
		case "an_cust_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('an_cust_cnt_cd')[0].style.backgroundColor = "#EC7215";} )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('an_cust_cnt_cd')[0].style.backgroundColor = ""; });
            element[i].title = "Select proper code of Also Notify as per SI with correct Country Code.";
            flag = 0;
            break;
			
		case "an_cust_seq":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('an_cust_seq')[0].style.backgroundColor = "#EC7215";} )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('an_cust_seq')[0].style.backgroundColor = ""; });
            element[i].title = "Select proper code of A/Notify as per SI with correct Country Code.";
            flag = 0;
            break;
			
		case "an_cust_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('an_cust_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('an_cust_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update A/Notify Company Name & Address as per SI (5 Lines).\r\n" +
							"(Always tick print).";
            flag = 0;
            break;
			
		case "ex_cust_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('ex_cust_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('ex_cust_nm')[0].style.backgroundColor = ""; });
			element[i].addEventListener("mouseover", function() { getCustomerSOP(); });
            flag = 0;
            break;
		
		case "pck_qty":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('pck_qty')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('pck_qty')[0].style.backgroundColor = ""; });
            element[i].title = "Update Total No. of Package & Package Type as per SI.";
            flag = 0;
            break;
				
		case "act_wgt":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('act_wgt')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('act_wgt')[0].style.backgroundColor = ""; });
            element[i].title = "Update Total No. of Gross Weight as per SI.";
            flag = 0;
            break;
				
		case "meas_qty":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('meas_qty')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('meas_qty')[0].style.backgroundColor = ""; });
            element[i].title = "Update Total No. of CBM as per SI.";
            flag = 0;
            break;
				
		case "mk_desc_prn_flg":
			element[i].title = "Always Tick Print on M/D.";
			flag = 0;
			break;
			
		case "cstms_desc":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cstms_desc')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cstms_desc')[0].style.backgroundColor = ""; });
            element[i].title = "Update Actual Commodity Description.";
            flag = 0;
            break;
				
		case "mk_desc":
			element[i].addEventListener("mouseover", function() { document.getElementById('mk_desc').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('mk_desc').style.backgroundColor = ""; });
			element[i].title = "Update as per SI.\r\n" +
							"(Aligned the words properly).\r\n\r\n" +
							"If not mention on SI then update N/M.";
			flag = 0;
			break;
				
		case "dg_cmdt_desc":
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
				
		case "frt_term_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('frt_term_cd')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('frt_term_cd')[0].style.backgroundColor = ""; });
            element[i].title = "Update as per SI.\r\n" +
								"( If missing send a email ) - keep as per system downloaded.";
            flag = 0;
            break;

		case "btn_t8ExportImportInfo":
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t8ExportImportInfo').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t8ExportImportInfo').style.backgroundColor = ""; });
			element[i].title = "Select Country Brazil: \r\n" +
								"Update Consignee & Notify CNPJ No# (14-digits).";
			flag = 0;
			break;
				
		case "btn_t8POOtherNo":
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t8POOtherNo').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t8POOtherNo').style.backgroundColor = ""; });
			////element[i].addEventListener("mouseover", function() { MnD_ToolTips(); });
			element[i].title = "Update PO No. As per customer special requirement or Instruction.";
            flag = 0;
            break;
				
		case "btn_t9AllConfirm":
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t9AllConfirm').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t9AllConfirm').style.backgroundColor = ""; });
			element[i].title = "We need to Tick on All Confirm when the container details are correctly updated.";
			flag = 0;
			break;
				
		case "btn_t9AllRelease":
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t9AllRelease').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t9AllRelease').style.backgroundColor = ""; });
			element[i].title = "If we need to amend the details we need to Tick on All Release.";
			flag = 0;
			break;	
				
		case "shpr_nm":
			element[i].addEventListener("mouseover", function() { document.getElementById('shpr_nm').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('shpr_nm').style.backgroundColor = ""; });
			element[i].title = "No validation of codes:\r\n" +
							"Update Actual Shipper Company Name as per HBL attachment.";
			flag = 0;
			break;
				
		case "shpr_addr":
			element[i].addEventListener("mouseover", function() { document.getElementById('shpr_addr').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('shpr_addr').style.backgroundColor = ""; });
			element[i].title = "No validation of codes:\r\n" +
								"Update Address as per HBL attachment.";
			flag = 0;
			break;
				
		case "shpr_cty_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_cty_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_cty_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update Shipper City as per HBL attachment.";
            flag = 0;
            break;
				
		case "shpr_ste_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_ste_cd')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_ste_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Shipper State Code as per HBL attachment.";
            flag = 0;
            break;
				
		case "shpr_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_cnt_cd')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_cnt_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Shipper Country Code as per HBL attachment.";
            flag = 0;
            break;
				
		case "shpr_zip_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_zip_cd')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_zip_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Shipper ZIP Code as per HBL attachment.";
            flag = 0;
            break;
				
		case "cnee_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_nm')[0].style.backgroundColor = ""; });
            element[i].title = "No validation of codes:\r\n" +
							"Update Actual Consignee Company Name as per HBL attachment.";
            flag = 0;
            break;
				
        case "cnee_addr":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_addr')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_addr')[0].style.backgroundColor = ""; });
            element[i].title = "No validation of codes:\r\n" +
							"Update Address as per HBL attachment.";
            flag = 0;
            break;
				
		case "cnee_cty_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_cty_nm')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_cty_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update Consignee City as per HBL attachment.";
            flag = 0;
            break;
				
		case "cnee_ste_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_ste_cd')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_ste_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Consignee State Code as per HBL attachment.";
            flag = 0;
            break;
				
		case "cnee_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_cnt_cd')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_cnt_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Consignee Country Code as per HBL attachment.";
            flag = 0;
            break;
				
		case "cnee_zip_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_zip_cd')[0].style.backgroundColor = "#EC7215"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_zip_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Consignee ZIP Code as per HBL attachment.";
            flag = 0;
            break;
				
		case "noti_nm":
			element[i].addEventListener("mouseover", function() { document.getElementById('noti_nm').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('noti_nm').style.backgroundColor = ""; });
			element[i].addEventListener("mouseout", function() { setTimeout(function(){ sameCNEE_HBL_notallowed();  },1000); });
			element[i].title = "No validation of codes:\r\n" +
							"Update Actual Notify Company Name as per HBL attachment.";
			flag = 0;
			break;

		case "noti_addr":
			element[i].addEventListener("mouseover", function() { document.getElementById('noti_addr').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('noti_addr').style.backgroundColor = ""; });
			element[i].title = "No validation of codes:\r\n" +
							"Update Address as per HBL attachment.";
			flag = 0;
			break;
				
		case "noti_cty_nm":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_cty_nm')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_cty_nm')[0].style.backgroundColor = ""; });
			element[i].title = "Update Notify City as per HBL attachment.";
            flag = 0;
            break;
				
		case "noti_ste_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_ste_cd')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_ste_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Notify State Code as per HBL attachment.";
            flag = 0;
            break;
				
		case "noti_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_cnt_cd')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_cnt_cd')[0].style.backgroundColor = ""; });
			element[i].title = "Update Notify Country Code as per HBL attachment.";
            flag = 0;
            break;
				
		case "noti_zip_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_zip_cd')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_zip_cd')[0].style.backgroundColor = ""; });
            element[i].title = "Update Notify ZIP Code as per HBL attachment.";
            flag = 0;
            break;
				
		case "bl_mk_desc":
			element[i].addEventListener("mouseover", function() { document.getElementById('bl_mk_desc').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('bl_mk_desc').style.backgroundColor = ""; });
			element[i].title = "Update Marks & Numbers as per HBL attachement.\r\n" +
							"If not mentioned on SI – update as per MBL.";
			flag = 0;
			break;
        
		case "bl_gds_desc":
			element[i].addEventListener("mouseover", function() { document.getElementById('bl_gds_desc').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('bl_gds_desc').style.backgroundColor = ""; });
			element[i].title = "Update Description as per HBL attachement.\r\n" +
							"If not mentioned on SI – update as per MBL.";
			flag = 0;
			break;
				
		case "pck_qty":
			element[i].addEventListener("mouseover", function() { document.getElementById('pck_qty').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('pck_qty').style.backgroundColor = ""; });
			element[i].title = "Update Total Package as per HBL attachement.\r\n" +
							"If not mentioned on SI – update as per MBL.";
			flag = 0;
			break;
				
		case "hbl_wgt":
			element[i].addEventListener("mouseover", function() { document.getElementById('hbl_wgt').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('hbl_wgt').style.backgroundColor = ""; });
			element[i].title = "Update Total Weight as per HBL attachement.\r\n" +
							"If not mentioned on SI – update as per MBL.";
			flag = 0;
			break;
				
		case "cmdt_meas_qty":
			element[i].addEventListener("mouseover", function() { document.getElementById('cmdt_meas_qty').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('cmdt_meas_qty').style.backgroundColor = ""; });
			element[i].title = "Update Measurement as per HBL attachement.\r\n" +
							"If not mentioned on SI – update as per MBL.";
			flag = 0;
			break;
				
		case "hbl_no":
			element[i].addEventListener("mouseover", function() { document.getElementById('hbl_no').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('hbl_no').style.backgroundColor = ""; });
			element[i].title = "Update if mentioned on SI or HBL attachement.\r\n" +
							"If not mentioned – update BL No. as HBL No.";
			flag = 0;
			break;
				
		case "cntr_mf_no":
			element[i].addEventListener("mouseover", function() { document.getElementById('cntr_mf_no').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('cntr_mf_no').style.backgroundColor = ""; });
			element[i].title = "When all the HBL details are updated – need to Tick on Manifest File No.";
			flag = 0;
			break;
				
		case "form":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ HighlightShipment();  },1000); } );
			element[i].addEventListener("mouseover" , function() { setTimeout(function(){ setChargeBgColor();  },1000); } );
			element[i].addEventListener("mouseover" , function() { setTimeout(function(){ VesselRollOver();  },1000); } );
			//
			//element[i].addEventListener("mouseover", function() { getPONumber(); });
            flag = 0;
            break;	
				
		case "frt_term_cd_text":
			//element[i].addEventListener("mouseover", function() { document.getElementById('frt_term_cd_text').style.backgroundColor = "#EC7215"; })
			//element[i].addEventListener("mouseout", function() { document.getElementById('frt_term_cd_text').style.backgroundColor = ""; });
			element[i].title = "Update as per SI.\r\n" +
							"(If not mentioned on SI - Send mail to customer).";
			flag = 0;
			break;
				
		case "frm_t10sheet1_sc_no1":
			//element[i].addEventListener("mouseover", function() { document.getElementById('frm_t10sheet1_sc_no1').style.backgroundColor = "#EC7215"; })
			//element[i].addEventListener("mouseout", function() { document.getElementById('frm_t10sheet1_sc_no1').style.backgroundColor = ""; });
			element[i].title = "US/CA Shipments :\r\n" +
							"1) Check S/C No, if Dummy or invalid check & update as per INT Remarks.\r\n" +
							"2) If not provide send mail to Onshore.";
			flag = 0;
			break;
				
		case "frm_t10sheet1_rfa_no":
			//element[i].addEventListener("mouseover", function() { document.getElementById('frm_t10sheet1_rfa_no').style.backgroundColor = "#EC7215"; })
			//element[i].addEventListener("mouseout", function() { document.getElementById('frm_t10sheet1_rfa_no').style.backgroundColor = ""; });
			element[i].title = "Other Shipments : \r\n" +
							"1) Check RFA No, if Dummy or invalid check & update as per INT Remarks.\r\n" +
							"2) If not provide send mail to Onshore.";
			flag = 0;
			break;
				
		case "btn_t10auto_rating":
			element[i].title = "To link Freight : \r\n" +
							"Click on Auto-Rating -> Check Cntr QTY -> Select correct rate -> Select.";
			element[i].addEventListener("click", function() { setTimeout(function(){ Rating_popup();  },1000); } );
			flag = 0;
			break;
				
		case "frm_p_t10sheet3_ofc_cd":
			//element[i].addEventListener("mouseover", function() { document.getElementById('frm_p_t10sheet3_ofc_cd').style.backgroundColor = "#EC7215"; })
			//element[i].addEventListener("mouseout", function() { document.getElementById('frm_p_t10sheet3_ofc_cd').style.backgroundColor = ""; });
			element[i].title = "Prepaid / Payment office - should be updated as per BL Prefix.";
			flag = 0;
			break;
				
		case "frm_p_t10sheet3_cnt_cd":
			//element[i].addEventListener("mouseover", function() { document.getElementById('frm_p_t10sheet3_cnt_cd').style.backgroundColor = "#EC7215"; })
			//element[i].addEventListener("mouseout", function() { document.getElementById('frm_p_t10sheet3_cnt_cd').style.backgroundColor = ""; });
			element[i].title = "Prepaid code should be  Forwarders Code.";
			flag = 0;
			break;
				
		case "frm_p_t10sheet3_cust_seq":
			//element[i].addEventListener("mouseover", function() { document.getElementById('frm_p_t10sheet3_cust_seq').style.backgroundColor = "#EC7215"; })
			//element[i].addEventListener("mouseout", function() { document.getElementById('frm_p_t10sheet3_cust_seq').style.backgroundColor = ""; });
			element[i].title = "Prepaid code should be  Forwarders Code.";
			flag = 0;
			break;
				
		case "frm_c_t10sheet3_ofc_cd":
			//element[i].addEventListener("mouseover", function() { document.getElementById('frm_c_t10sheet3_ofc_cd').style.backgroundColor = "#EC7215"; })
			//element[i].addEventListener("mouseout", function() { document.getElementById('frm_c_t10sheet3_ofc_cd').style.backgroundColor = ""; });
			element[i].title = "Collect Office - is based on POD Office.\r\n" +
							"(If any additional instructions mentioned on SI/SOP then we need to change).";
			flag = 0;
			break;
				
		case "frm_c_t10sheet3_cnt_cd":
			//element[i].addEventListener("mouseover", function() { document.getElementById('frm_c_t10sheet3_cnt_cd').style.backgroundColor = "#EC7215"; })
			//element[i].addEventListener("mouseout", function() { document.getElementById('frm_c_t10sheet3_cnt_cd').style.backgroundColor = ""; });
			element[i].title = "Collect Code should be updated as per Consignee's Code.\r\n" +
							"(If any additional instructions mentioned on SI/SOP then we need to change).";
			flag = 0;
			break;
				
		case "frm_c_t10sheet3_cust_seq":
			//element[i].addEventListener("mouseover", function() { document.getElementById('frm_c_t10sheet3_cust_seq').style.backgroundColor = "#EC7215"; })
			//element[i].addEventListener("mouseout", function() { document.getElementById('frm_c_t10sheet3_cust_seq').style.backgroundColor = ""; });
			element[i].title = "Collect Code should be updated as per Consignee's Code.\r\n" +
							"(If any additional instructions mentioned on SI/SOP then we need to change).";
			flag = 0;
			break;
				
		case "sam_cnee_copy_flg":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ enable_sameCNEE_chkbx();  },1000); });
			element[i].addEventListener("mouseleave", function() { setTimeout(function(){ disable_sameCNEE_chkbx();  },1000); });
            flag = 0;
            break;
		
		case "btn_t11Save":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ getBLIssueTabSOP();  },1000); } );
			element[i].addEventListener("mouseup", function() { setTimeout(function(){ Popup();  },1000); });
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ ICPCheck();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ ICPCheck();  },1000); });
			element[i].addEventListener("click", function () { setTimeout(function(){ VIPCust_popup();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ SICheckPopUp();  },1000); });
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ ICPValidationPopUp();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ BLIssue_DueCheck();  },1000); });
			element[i].addEventListener("click", function () { setTimeout(function(){ Hyundai_Glovis();  },1000); });
			////element[i].addEventListener("click", function() { BL_Issue_PopUp(); });
			flag = 0;
			break;

		case "btn_t8Save":
			element[i].addEventListener("mouseup", function() { setTimeout(function(){ CNPJCHECK();  },1000); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ MnDReefer();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ MDCLAUSE();  },1000); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ VIPCust_popup();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ DGCheck();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ MnD_DueCheck();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ MnD_PopUp();  },1000); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ usship_px_package_notallowed();  },1000); });
			element[i].title = "Manual update 'PART OF 1Xxxx CONTAINER(S) SAID TO CONTAIN: \r\n";
			flag = 0;
			break;

		case "btn_t1Save":
            element[i].addEventListener("mouseover", function () { setTimeout(function(){ CheckFiler();  },1000); });
			element[i].addEventListener("mouseup", function() { setTimeout(function(){ IndShipment();  },1000); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ bkg_DueDiligencePopup();  },1000); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ bkg_intDueDeligence();  },1000); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ bkg_custDueDeligence();  },1000); } );
			//element[i].addEventListener("click", function() { bkg_intProhibited(); } );
			//element[i].addEventListener("click", function() { bkg_custProhibited(); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ VIPCust_popup();  },1000); });
			flag = 0;
			break;

		case "btn_t7Save":
			//element[i].addEventListener("click", function() { flag = true; });
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ sameCNEE_notallowedPopup();  },1000); } );
			element[i].addEventListener("click", function() { setTimeout(function(){ cust_DueCheck();  },1000); });
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ checkEORI();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ ContinuationPopUp();  },1000); });
			//element[i].addEventListener("click", function() { cust_ProhibitedCheck(); });
			element[i].addEventListener("click", function() { setTimeout(function(){ VIPCust_popup();  },1000); });
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ BlackList();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ ToOrderSanction();  },1000); });
			element[i].addEventListener("click", function () { setTimeout(function(){ Hyundai_Glovis();  },1000); });
			////element[i].addEventListener("click", function() { CustPopup(); });
			flag = 0;
			break;
			
		case "btn_t10save":
			element[i].addEventListener("mouseup", function() { setTimeout(function(){ CNPTSTARBUCKS();  },1000); } );
			element[i].addEventListener("mouseup", function() { setTimeout(function(){ generate_table();  },1000); } );
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ check_zero_Rate();  },1000); });
			element[i].addEventListener("mousedown", function() { setTimeout(function(){ check_zero_Rate();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ PrepaidOffice();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ PrepaidCode();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ VIPCust_popup();  },1000); });
			element[i].addEventListener("click", function () { setTimeout(function(){ Hyundai_Glovis();  },1000); });
			element[i].addEventListener("click", function () { setTimeout(function(){ ChargePopup_USCA();  },1000); });
			flag = 0;
			break;
				
		case "btn_t6save":
			element[i].addEventListener("click", function() { setTimeout(function(){ VIPCust_popup();  },1000); });
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ getMDTab();  },1000); } );
			////element[i].addEventListener("click", function() { CNTR_PopUp(); } );
			flag = 0;
			break;
				
		case "btn_t9Save":
            element[i].addEventListener("mouseover", function () { setTimeout(function(){ CheckShipment();  },1000); });
			element[i].addEventListener("mouseover", function () { setTimeout(function(){ getCMTab();  },1000); });
			element[i].addEventListener("mouseup", function () { setTimeout(function(){ CheckEurope();  },1000); });
			element[i].addEventListener("click", function () { setTimeout(function(){ VIPCust_popup();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ usship_px_package_notallowed();  },1000); });
			////element[i].addEventListener("click", function () { CM_PopUp(); });
            flag = 0;
            break;
				
		case "select_vessel_direction_text":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('select_vessel_direction_text')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('select_vessel_direction_text')[0].style.backgroundColor = ""; });
			element[i].title = "1) Need to update 1st VVD.\r\n(If found multiple need to update 1st VVD as per T/S Route).\r\n\r\n2) For Feeder Vessel should be updated as per SI instructions.\r\n\r\nIf POR code mismatch with POL, then Check Customer Request on SI & update Feeder/Mother details accordingly.";
			flag = 0;
			break;
				
		case "select_pre_carriage_by_text":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('select_pre_carriage_by_text')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('select_pre_carriage_by_text')[0].style.backgroundColor = ""; });
			element[i].title = "Pre-carriage By - Should be always blank.";
			flag = 0;
			break;
				
		case "frm_t11sheet1_por_name":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_por_name')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_por_name')[0].style.backgroundColor = ""; });
			////element[i].addEventListener("mouseover", function () { BL_Issue_ToolTips(); });
			element[i].title = "Update as per SI.\r\nIf Codes mismatch with SI & Booking, then update as per Booking.";
			flag = 0;
			break;
				
		case "frm_t11sheet1_pol_name":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_pol_name')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_pol_name')[0].style.backgroundColor = ""; });
			////element[i].addEventListener("mouseover", function () { BL_Issue_ToolTips(); });
			element[i].title = "Update as per SI.\r\nIf Codes mismatch with SI & Booking, then update as per Booking.";
			flag = 0;
			break;
			
		case "frm_t11sheet1_pod_name":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_pod_name')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_pod_name')[0].style.backgroundColor = ""; });
			////element[i].addEventListener("mouseover", function () { BL_Issue_ToolTips(); });
			element[i].title = "Update as per SI.\r\nIf Codes mismatch with SI & Booking, then update as per Booking.";
			flag = 0;
			break;
			
		case "frm_t11sheet1_del_name":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_del_name')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_del_name')[0].style.backgroundColor = ""; });
			////element[i].addEventListener("mouseover", function () { BL_Issue_ToolTips(); });
			element[i].title = "Update as per SI.\r\nIf Codes mismatch with SI & Booking, then update as per Booking.";
			flag = 0;
			break;
			 
		case "frm_t11sheet1_final_dest":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_final_dest')[0].style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_final_dest')[0].style.backgroundColor = ""; });
            element[i].title = "If mention on SI then check with Onshore first.";
            flag = 0;
			break;
			
		case "bl_ready_type_text":
			element[i].addEventListener("mouseover", function() { document.getElementById('bl_ready_type_text').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('bl_ready_type_text').style.backgroundColor = ""; });
			element[i].title = "Update as per SI/BL Regulation.";
			flag = 0;
			break;
				
		case "btn_t11Doc_Requirement":
			element[i].addEventListener("mouseover", function() { document.getElementById('btn_t11Doc_Requirement').style.backgroundColor = "#FAAFFB"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('btn_t11Doc_Requirement').style.backgroundColor = ""; });
			//element[i].addEventListener("mouseover", function() { BL_Issue_ToolTips(); });
			element[i].title = "Update as per SI/BL Regulation.";
			flag = 0;
			break;
				
		case "date_set_checkbox":
			element[i].title = "For Mother Vessel update ETD as On Board Date. For Barge BLs update Barge ETD as On Board Date.";
			flag = 0;
			break;
				
		case "frm_t11sheet1_on_board_date":
			element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_on_board_date').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_on_board_date').style.backgroundColor = ""; });
			element[i].title = "For Mother Vessel update ETD as On Board Date. For Barge BLs update Barge ETD as On Board Date.";
			flag = 0;
			break;
				
		case "frm_t11sheet1_bl_issue_date":
			element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_bl_issue_date').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_bl_issue_date').style.backgroundColor = ""; });
			element[i].title = "On Board Date & BL Issue Date must be same.";
			flag = 0;
			break;
			
		case "frm_t11sheet1_bl_issue_at":
			element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_bl_issue_at').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_bl_issue_at').style.backgroundColor = ""; });
			//element[i].addEventListener("mouseover", function() { BL_Issue_ToolTips(); } );
			element[i].title = "Update as per BL Prefix.\r\nIf special instruction/CSOP mentioned on SI then Follow SI/CSOP.";
			flag = 0;
			break;
				
		case "frm_t11sheet1_inet_ctrl_pty_nm":
			element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_nm').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_nm').style.backgroundColor = ""; });
            element[i].title = "Update as per 4th & 5th Letter of the BL Number from ICP code list.";
            flag = 0;
            break;
					
		case "frm_t11sheet1_inet_ctrl_pty_no":
			element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_no').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_no').style.backgroundColor = ""; });
			element[i].title = "Update as per 4th & 5th Letter of the BL Number from ICP code list.";
            flag = 0;
            break;
				
		case "frm_t11sheet1_inet_ctrl_pty_cust_nm":
			element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_cust_nm').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_cust_nm').style.backgroundColor = ""; });
			element[i].title = "Update as per 4th & 5th Letter of the BL Number from ICP code list.";
            flag = 0;
            break;
				
		case "frm_t11sheet1_obl_iss_rmk":
			element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_obl_iss_rmk').style.backgroundColor = "#EC7215"; })
			element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_obl_iss_rmk').style.backgroundColor = ""; });
			element[i].title = "Click on Apply & Save.";
            flag = 0;
            break;
				
		case "btn_t1retrieve":
			element[i].title = "Please enter BL Number and click on Retrieve.";
			element[i].addEventListener("click", function() { setTimeout(function(){ insertData();  },1000); });
			element[i].addEventListener("click", function() { setTimeout(function(){ SOC_CMDTPopup();  },1000); });
			flag = 0;
			break;
			
		case "cntr_wgt":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('cntr_wgt')[0].style.backgroundColor = "#FFA54F"; } )
			element[i].addEventListener("mouseout", function() { document.getElementsByName('cntr_wgt')[0].style.backgroundColor = ""; });
            element[i].title = "Update Container gross weight as per SI (Container wise)";
            flag = 0;
            break;	
				
		case "cntr_cmdt_desc":

            flag = 0;
            break;
				
		case "sh_cust_cnt_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_cnt_cd')[0].style.backgroundColor = "#FFA54F"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_cnt_cd')[0].style.backgroundColor = ""; });
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ getCustomerSOP();  },1000); });
            flag = 0;
            break;
			
		case "btn_copy":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ getMDTabSOP();  },1000); });
            flag = 0;
            break;
	
		case "select_3rdPPD":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ getChargeTabSOP();  },1000); } );
			flag = 0;
			break;
				
		case "rt_bl_tp_cd_text":
			element[i].addEventListener("mouseover", function() { setTimeout(function(){ getChargeTabSOP();  },1000); } );
			flag = 0;
			break;
			
		case "btn_t10surcharge_Inquiry":
			element[i].addEventListener("mouseover", function () { setTimeout(function(){ getChargeTabSOP();  },1000); });
			flag = 0;
			break; 	 	 	 
			
		case "btn_t10add":
			element[i].addEventListener("mouseover", function () { setTimeout(function(){ ChargeTabCheck();  },1000); });
			element[i].addEventListener("mouseover", function () { setTimeout(function(){ getChargeTabSOP();  },1000); });
			flag = 0;
			break;
			
		case "frm_t11sheet1_rcv_de_term_prn_flg":
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
			
		case "frm_t11sheet1_bl_iss_tp_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_bl_iss_tp_cd')[0].style.backgroundColor = "#FFA54F"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_bl_iss_tp_cd')[0].style.backgroundColor = ""; });
			element[i].addEventListener("mouseover", function () { setTimeout(function(){ getBLIssueTabSOP();  },1000); });
			flag = 0;
			break;
			
		case "pop_on_board_date":
			element[i].addEventListener("mouseover", function () { setTimeout(function(){ getBLIssueTabSOP();  },1000); });
			flag = 0;
			break;
				
		case "btn_BLPreview":
			
			flag = 0;
			break;
			
		case "mf_desc_prn_flg":
		    element[i].title = "";////Tick on C/M Print for Panalpina Customer.
			flag = 0;
			break;
			
			//Escalation
			
		case "rtn_to_usr_eml":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('rtn_to_usr_eml')[0].style.backgroundColor = "#FFA54F"; })
			element[i].addEventListener("mouseout", function() { document.getElementsByName('rtn_to_usr_eml')[0].style.backgroundColor = ""; });
			element[i].title = "Please check Email ID as per Customer or Onshore for Specific Booking Office.";
			flag = 0;
			break;
				
		case "ui_grp_cd":
			element[i].addEventListener("click", function() { setTimeout(function(){ CheckEscalationMail();  },1000); } );
			flag = 0;
			break;
				
        default:
			flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{			
			case "DIV_t6sheet2":
				element[i].addEventListener("mouseover", function () { setTimeout(function(){ CNTR_Tab_Runner_BGClr();  },1000); });
				element[i].addEventListener("mouseover", function () { setTimeout(function(){ CNTR_Tab_Runner();  },1000); });
				flag = 0;
				break;
				
			case "DIV_sheet2":
				//element[i].addEventListener("mouseover", function () { ChargeCode(); });
				flag = 0;
				break;
	
            case "DIV_t10sheet2":
				//alert("func");
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ Charge_Tab_Runner_BGClr();  },1000); });
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ Charge_Tab_Runner();  },1000); });
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ getChargeTabSOP();  },1000); });
				flag = 0;
				break;
				
			case "DIV_t9sheet2":
				element[i].addEventListener("mouseover", function () { setTimeout(function(){ C_M_Tab_Runner_BGClr();  },1000); });
				element[i].addEventListener("mouseover", function () { setTimeout(function(){ C_M_Tab_Runner();  },1000); });
				flag = 0;
				break;
			
			case "bl_ready_type_IBCBMainBtn":
				element[i].addEventListener("mouseover", function() { document.getElementById('bl_ready_type_IBCBMainBtn').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('bl_ready_type_IBCBMainBtn').style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ getBLIssueTabSOP();  },1000); } );
				flag = 0;
				break;
			
			case "btn_send":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_send').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_send').style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ SendMail();  },1000); } );
				flag = 0;
				break;
				
			case "on_board_type_text":
				element[i].addEventListener("mouseover", function() { document.getElementById('on_board_type_text').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('on_board_type_text').style.backgroundColor = ""; });
                element[i].title = "Update as per instructions mentioned on SI";
                flag = 0;
                break;

            case "btn_t10doc":

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
				
			//case "btn_save":
				//element[i].addEventListener("mouseover", function() { DocCheck(); } );
				//flag = 0;
				//break;
				
			//Escalation
			
			case "btn_Retrieve":
				element[i].addEventListener("mouseup", function() { setTimeout(function(){ InsertEscalationMail();  },1000); } );
				flag = 0;
				break;
				
			case "btn_return":
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ ValidateMail();   },1000); } );  //ValidateMail(); 
				flag = 0;
				break;
				
			case "btn_Save":
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ UpdateTransMode();   },1000); } );
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ getPONumber();   },1000); } );
				//element[i].addEventListener("mouseover", function() { ChargeCode(); });
				flag = 0;
				break;
				
			case "btn1_Apply":
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ UpdateApplicationDate();  },1000); } );
				flag = 0;
				break;
			
			case "email":
				element[i].title = " ";
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ BL_Issue_ToolTips();  },1000); });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('email')[0].style.backgroundColor = ""; });
				flag = 0;
				break;
				
			case "btn_add":
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ ar_invoice();  },1000); });
				flag = 0;
				break;
				
			default:
                flag = 1;
		}
	}
}

function CreateDB()
{
	var Database_Name = 'OpusDB';
    var Version = 1.0;
    var Text_Description = 'Opus Temporary Database';
    var Database_Size = 1024;
    var db = openDatabase(Database_Name, Version, Text_Description, Database_Size);
        db.transaction(function (tx) 
		{
			//tx.executeSql("drop table Customer ");
			//tx.executeSql("drop table Email ");
			//tx.executeSql("drop table Escalation ");
			tx.executeSql('Create Table if not exists Customer (BLNumber VARCHAR(100), SHPRCode integer, SHPRName varchar(100), FWDRPrf varchar(5), FWDRCode integer, FWDRName varchar(100),  CNEECode integer, CNEEName varchar(100), CNPTCode integer, CNPTName varchar(100) , SCNo , RFANo, DEL, POD , POR, POL, Trans_Mode, App_Date,clr);',  [], nullDataHandler, killTransaction);
        });	
}


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
		

