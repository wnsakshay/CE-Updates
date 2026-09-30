var element = document.getElementsByTagName('*');

//window.addEventListener("load", function () { CheckBoxChecked(); });

for (var i = 0, l = element.length; i < l; i++) {
    var flag = 1;
    var times = 0;

    if (times == 0) {

        times = 1;
    }
    switch (element[i].id) {

        case "sh_cust_seq":
            //element[i].addEventListener("change", function () { changeInput(this.value) });
            flag = 0;
            break;
	
	case "btn_send":
            //element[i].addEventListener("change", function () { CheckEmailforDamco(); });
            flag = 0;
            break;

        /*case "btn_t1Danger":
            element[i].title = "Dangerous Cargo:  \r\n Check IMO # GW & Approval Status (Y) also check container assign or not";
            flag = 0;
            break;

		case "ff_cust_lgl_eng_nm":
            element[i].title = "Forwarder Name is here";
            flag = 0;
            break;
			
        case "usa_cstms_file_cd_text":
            element[i].title = "POD US: \r\nFiler (1) Create Manual HBL (House Bill of Lading) \r\nFiler (2) - Update SCAC code as per SI \r\nFiler (3) Not Applicable";
            flag = 0;
            break;
        case "cnd_cstms_file_cd_text":
            element[i].title = "POD Canada: \r\nFiler (1)Create Manual HBL (House Bill of Lading) \r\nFiler (2) - Update ACI code as per SI \ \r\n Filer (3) Not Applicable";
            flag = 0;
            break;
        case "btn_t1ReferenceNo":
            element[i].addEventListener("mouseover", function () { btn_t1ReferenceNo_Check(); });
            flag = 0;
            break;
		*/
        case "mot_no":
            element[i].addEventListener("mouseup", function () { Check_Validation(); });
            flag = 0;
            break;

        /*case "cn_cust_cnt_cd":
            element[i].title = "Select proper code of consignee as per SI with correct country code";
            flag = 0;
            break;

        case "nf_cust_cnt_cd": case "nf_cust_seq":
            element[i].title = "Select proper code of Notify as per SI with correct country code";
            flag = 0;
            break;
        case "ff_cust_cnt_cd":
            element[i].title = "Refresh & Untick print \r\n";
            flag = 0;
            break;
			*/
            /*        case "ff_cust_seq":
                        element[i].title = "Update if mentioned on SI \r\n"+
                        "(Update as per any special customers requirement or Instructions)";
                        flag = 0;
                        break ; */
        
		/*
        case "exID01":
            element[i].title = "Always Tick Print on M/D";
            flag = 0;
            break
        case "btn_t1Reefer":
            element[i].title = "Reefer Cargo: \r\nCheck TEMP / VEN & Approval Status (Y) also check container assigne or not";
            flag = 0;
            break;
        case "mk_desc":
            element[i].title = "Update as per SI \r\n" +
            "(Do not update Container/Seal No, Space between the lines) \r\n" +
            "(Aligned the words properly)";
            flag = 0;
            break;
        case "dg_cmdt_desc":
            element[i].title = "1) Tick on Copy – check No. of PKG/CNTR match with SI \r\n" +
            "2) Update Long description as per SI \r\n" +
            " \r\n" +
            "Example: \r\na)Commodity Description" +
            "b)Shippers comment \r\n" +
            "c)Non-commodity description \r\n" +
            "d)Agent Address (if mentioned on SI) \r\n" +
            "e)Also notify (if mentioned on SI) \r\n" +
            "f)Customer continuation \r\n" +
            "(Do not change the sequence of description – update as per SI)";
            flag = 0;
            break
        case "btn_t8ExportImportInfo":
            element[i].title = "Select Country Brazil: \r\n" +
            "Update consignee & notify CNPJ No# (14-digits)";
            flag = 0;
            break

        case "shpr_nm":
            element[i].title = "No validation of codes: \r\n" +
            "1) Update Shippers company name  as per HBL attachment";
            flag = 0;
            break
        case "shpr_addr":
            element[i].title = "No validation of codes: \r\n" +
            "1) Update Shippers address as per HBL attachment.";
            flag = 0;
            break
        case "noti_nm":
            element[i].title = "No validation of codes: \r\n" +
                   "1) Update notify name as per HBL attachment";
            flag = 0;
            break

        case "noti_addr":
            element[i].title = "No validation of codes: \r\n" +
            "1) Update notify address as per HBL attachment";
            flag = 0;
            break


        case "bl_mk_desc":
            element[i].title = "Update marks & Numbers as per HBL attachment \r\n" +
            "If not mentioned on SI – update as per MBL";
            flag = 0;
            break
        case "bl_gds_desc":
            element[i].title = "Update description as per HBL attachment \r\n" +
            "If not mentioned on SI – update as per MBL";
            flag = 0;
            break
        case "pck_qty":
            element[i].title = "Update marks & Numbers as per HBL attachment \r\n" +
            "If not mentioned on SI – update as per MBL";
            flag = 0;
            break
        case "hbl_wgt":
            element[i].title = "Update total weight as per HBL attachement \r\n" +
            "If not mentioned on SI – update as per MBL";
            flag = 0;
            break
        case "cmdt_meas_qty":
            element[i].title = "Update Measurement as per HBL attachement \r\n" +
            "If not mentioned on SI – update as per MBL";
            flag = 0;
            break
        case "hbl_no":
            element[i].title = "Update if mentioned on SI or HBL attachment \r\n" +
            "If not mentioned – update BL NO as HBL No.";
            flag = 0;
            break
        case "cntr_mf_no":
            element[i].title = "When all the HBL details are updated – need to Tick on Manifest File No.";
            flag = 0;
            break
			*/
        
		/*case "frm_t11sheet1_por_name"://new
            element[i].addEventListener("mouseover", function () { frm_t11sheet1_por_name_Check(); });
            flag = 0;
            break;
        case "btn_t11Doc_Requirement"://new
            element[i].addEventListener("mouseover", function () { btn_t11Doc_Requirement_Check(); });
            flag = 0;
            break;
        case "cn_cust_nm"://new
            element[i].addEventListener("mouseover", function () { cn_cust_nm_Check(); });
            flag = 0;
            break;
        case "dg_cmdt_desc"://new
            element[i].addEventListener("mouseover", function () { dg_cmdt_desc_Check(); });
            flag = 0;
            break;
		*/
        //case "ex_cust_nm"://new
            //element[i].addEventListener("mouseover", function () { CheckCustomerName(); });
			//element[i].title = "PO number: show in 'Export Ref'. for all Costco Shipment in customer Tab.";
            //flag = 0;
            //break;
		
	/*		
        case "frt_term_cd_text"://new
            //element[i].addEventListener("mouseover", function () { frt_term_cd_text_Check(); });
            element[i].title = "Please Select Propar FRT Value which will Equivalent to Charge OFT value.";
            flag = 0;
            break;
	*/
		/*
        case "btn_t8POOtherNo":
            element[i].addEventListener("mouseover", function () { btn_t8POOtherNo_Check(); });
            flag = 0;
            break;
        case "bl_issuebl_type_text"://new
            element[i].addEventListener("mouseover", function () { bl_issuebl_type_text_Check(consignee_name, rfa_no); });
            flag = 0;
            break;
        case "frm_t11sheet1_bl_issue_at": //new
            element[i].addEventListener("mouseover", function () { frm_t11sheet1_bl_issue_at_Check(); });
            flag = 0;
            break;

        case "t10sheet2": //new
            element[i].addEventListener("mouseover", function () { t10sheet2_Click(consignee_name, shipper_name, forwarder_name, rfa_no); });
            flag = 0;
            break;
        case "select_vessel_direction_text":
            element[i].addEventListener("mouseover", function () { select_vessel_direction_text_Click(consignee_name); });
            flag = 0;
            break;
        case "frm_t11sheet1_pol_name":
            element[i].addEventListener("mouseover", function () { frm_t11sheet1_pol_name_Click(consignee_name); });
            flag = 0;
            break;
        case "frm_t11sheet1_final_dest":
            element[i].addEventListener("mouseover", function () { frm_t11sheet1_final_dest_Click(consignee_name); });
            flag = 0;
            break;
        case "frm_t11sheet1_bl_issue_date":
            element[i].addEventListener("mouseover", function () { frm_t11sheet1_bl_issue_date_Click(consignee_name); });
            flag = 0;
            break;
        case "btn_BLPreview":
            element[i].addEventListener("mouseover", function () { email_Click(); });
            flag = 0;
            break;
        case "frm_t10sheet1_pre_rly_port_cd":
            element[i].addEventListener("mouseover", function () { frm_t10sheet1_pre_rly_port_cd_Click(consignee_name); });
            flag = 0;
            break;
        case "btn_t9Add":
            element[i].addEventListener("mouseover", function () { C_M_tab_Runner(); });
            flag = 0;
            break;
        case "btn_t6gridadd":
            element[i].addEventListener("mouseover", function () { EleLoader_Runner();});
            flag = 0;
            break;
		*/
        // Charge Tab 
        case "btn_t10add":
            //element[i].addEventListener("mouseover", function () { ChargeTabCheck(); });
            flag = 0;
            break;

        /*case "pck_qty":
            element[i].title = "Update total package as per HBL attachement \r\n" +
    "If not mentioned on SI – update as per MBL";
            flag = 0;
            break;

        case "pck_tp_cd":
            element[i].title = "Update Package type as per HBL attachement";
            flag = 0;
            break;

        case "pck_qty":
            element[i].title = "Update total no of Package as per SI";
            flag = 0;
            break;
		*/
		
		
			
        // Booking Creation Save Button Click
        case "btn_t1Save":
            element[i].addEventListener("mouseup", function () { Check_Validation(); });
            flag = 0;
            break;
        //

        // Booking Creation Tab Retrive Button
        case "btn_t1retrieve":
            element[i].addEventListener("mouseup", function () { Check_Validation(); });
            flag = 0;
            break;
        //
        // Customers Tab Save Button Click Start
        case "btn_t7Save":
        case "btn_t5retrieve":
            element[i].addEventListener("mouseup", function () { CheckCustomer_Validation(); });
            flag = 0;
            break;

        // Customers Tab Save Button Click End

        // Container Tab Save Button 
        case "btn_t6save":
            element[i].addEventListener("mouseup", function () { CheckCNTRValidation(); });
            flag = 0;
            break;
        //

        // M&D TAB START HERE
        // M&D Tab Import Export popup Window Event
        case "btn_save2":
            element[i].addEventListener("mouseup", function () { CheckMD_Validation(); });
            flag = 0;
            break;

        //M&D SAVE BUTTON CLICK
        case "btn_t8Save":
            element[i].addEventListener("mouseup", function () { CheckMDSaveData(); });
            flag = 0;
            break;
        case "btn_copy":
            element[i].addEventListener("mouseup", function () { btnCopyClick(); });
            flag = 0;
            break;
        // M&D TAB END HERE

        // CM Tab Save Button Start
        case "btn_t9Save":
            element[i].addEventListener("mouseup", function () { CheckCM_Validation(); });
            flag = 0;
            break;
        case "btn_retrieve":
            element[i].addEventListener("mouseup", function () { CopyButtonClick(); });
            element[i].addEventListener("mouseup", function () { CheckCM_Validation(); });
            flag = 0;
            break;
        case "btn_t9multishp": 
        case "btn_t9Add":
            element[i].addEventListener("mouseup", function () { Check_Confirm_Release_Button(); });
            flag = 0;
            break;
        case "btn_t9AllRelease":
            element[i].addEventListener("mouseup", function () { CheckCM_AllRelease(); });
            flag = 0;
            break;
        case "btn_t9AllConfirm":
            element[i].addEventListener("mouseup", function () { CheckCM_AllConfirm(); });
            flag = 0;
            break;
        // CM Tab Save Button End

        // Charge Tab Save Button Start here
        case "btn_t10save":
            element[i].addEventListener("mouseup", function () { CheckCharge_Validation(); });
            flag = 0;
            break;
        // Charge Tab End here

        //BL ISsue tab
        /*case "bl_ready_type_text":
        case "bl_ready_type_IBCBMainBtn":
            element[i].title = "Please Select propar Type Value base on SI(refer SI).";
			//element[i].addEventListener("mouseup", function() { CheckBLDataComplete(); } );
            flag = 0;
            break;*/

        case "btn_t11Save":
            element[i].addEventListener("mouseup", function () { CheckBLIssue_Validation(); });
            flag = 0;
            break;
        //

        case "btn_BLPreview":
            element[i].addEventListener("mouseover", function () { CheckDamcoCustomer(); });
            flag = 0;
            break;

        case "tabTabDIV_tab1_6":
            element[i].addEventListener("mouseup", function () { Update_Variables(); });
            flag = 0;
            break;
		
		 case "btn_send":
			element[i].title = "Before Click on Send Email Please check Email Id for Damco Customer only.";
			element[i].addEventListener("mouseup", function () { CheckEmailforDamco(); });
            flag = 0;
            break;
	
		case "email":
            //element[i].addEventListener("mouseover", function () { console.log('Hello...Email Box'); });
			element[i].title = "Please Enter Email Id for Damco Customer only.";
            flag = 0;
            break;
        default:
            //window.addEventListener("load", function () { CheckBoxChecked(); });
            flag = 1;
    }
    if (flag == 1) {
        switch (element[i].name) {
            case "bkg_no":
                element[i].addEventListener("change", function () { Update_Variables(); });
                //element[i].addEventListener("change", function () { SaveToLocalStorage(); });
                flag = 0;
                break;
			
			case "form":
				//element[i].addEventListener("mouseover", function () { CheckBoxChecked(); });
				flag=0;
				break;
			
            //case "c_cust_seq":
                //element[i].addEventListener("change", function () { consignee_name = ("[name='c_cust_nm']").val(); alert('Name is ' +consignee_name); });
                //flag = 0;
                //break;
				
            //case "bkg_sts_cd":
                //element[i].addEventListener("mouseover", function () {
                //    console.log('hey');
                //    //alert('ho ho ho');
                //    element[i].title = "1) F-Confirmed (Process BL normally) \r\n2) X-Cancelled (Do not process BL send mail for  Booking status cancelled) \r\n3) W-Wait listed (Process BL & send mail for Special Cargo Non Approval \r\n";
                //});

                //element[i].title = "1) F-Confirmed (Process BL normally) \r\n2) X-Cancelled (Do not process BL send mail for  Booking status cancelled) \r\n3) W-Wait listed (Process BL & send mail for Special Cargo Non Approval \r\n";
                //element[i].addEventListener("mouseup", function () { Check_Validation(); });
                //flag = 0;
                //break;

            //case "sh_cust_nm":
                //element[i].addEventListener("mouseover", function () { /*CheckCustomerName();*/ });
				//element[i].title = "Update company name (2 Lines)";
                //flag = 0;
                //break;
			/*
            case "nf_cust_nm":
                element[i].title = "Update company name (2 Lines)";
                flag = 0;
                break;
            case "sh_cust_addr":
            case "cn_cust_addr":
            case "nf_cust_addr":
                element[i].title = "Address should be 3 Lines.";
                flag = 0;
                break;
            case "sh_cust_cty_nm":
            case "cn_cust_cty_nm":
            case "nf_cust_cty_nm":
            case "shpr_cty_nm":
            case "cnee_cty_nm":
            case "noti_cty_nm":
                element[i].title = "Update City.";
                flag = 0;
                break;
            case "sh_cust_ste_cd":
            case "cn_cust_ste_cd":
            case "nf_cust_ste_cd":
            case "shpr_ste_cd":
            case "cnee_ste_cd":
            case "noti_ste_cd":
                element[i].title = "Update State";
                flag = 0;
                break;
            case "sh_cstms_decl_cnt_cd":
            case "cn_cstms_decl_cnt_cd":
            case "nf_cstms_decl_cnt_cd":
            case "shpr_cnt_cd":
            case "cnee_cnt_cd":
            case "noti_cnt_cd":
                element[i].title = "Update Country Code.";
                flag = 0;
                break;
            case "sh_cust_zip_id":
            case "cn_cust_zip_id":
            case "nf_cust_zip_id":
            case "shpr_zip_cd":
            case "cnee_zip_cd":
            case "noti_zip_cd":
                element[i].title = "Update ZIP Code.";
                flag = 0;
                break;
            case "sh_eur_cstms_st_nm":
            case "cn_eur_cstms_st_nm":
            case "nf_eur_cstms_st_nm":
                element[i].title = "Update Street / P.O Box as per SI";
                flag = 0;
                break;
            case "sh_eori_no":
            case "cn_eori_no":
            case "nf_eori_no":
                element[i].title = "do not update anything in EORI field.";
                flag = 0;
                break;

            case "btn_t6cntrconfirm":
                element[i].title = "Tick on container confirmation – if all the container details updated as per SI.";
                flag = 0;
                break;


            case "cnee_nm":
                element[i].title = "No validation of codes: \r\n" +
                       "1) Update consignee company name as per HBL attachment.";
                flag = 0;
                break
            case "cnee_addr":
                element[i].title = "No validation of codes: \r\n" +
                "1) Update consignee address as per HBL attachment.";
                flag = 0;
                break

            case "cnee_addr":
                element[i].title = "No validation of codes: \r\n" +
                "1) Update consignee company name as per HBL attachment.";
                flag = 0;
                break

            case "pck_tp_cd":
                element[i].title = "Update Package type as per SI";
                flag = 0;
                break;

            case "pck_qty":
                element[i].title = "Update total no of Package as per SI";
                flag = 0;
                break;
			
            case "ff_cust_nm":
                element[i].title = "Do not match or change the code – even if mentioned on SI";
                flag = 0;
                break;
            case "an_cust_cnt_cd":
                element[i].title = "Select proper code of Also notify as per SI with correct country code ";
                flag = 0;
                break;

            case "an_cust_nm":
                element[i].title = "Update company name & address as per SI (5 Lines) \r\n(Always tick print)";
                flag = 0;
                break;

            case "act_wgt":
                element[i].title = "Update total no Gross Weight as per SI";
                flag = 0;
                break;
            case "meas_qty":
                element[i].title = "Update total no CBM as per SI";
                flag = 0;
                break;
				*/
            case "cstms_desc":
                //element[i].title = "Update actual commodity description \r\n" +
                    //"(Do not update brand name & special characters)";
                element[i].addEventListener("change", function () { CopyButtonClick(); });
                flag = 0;
                break;
            /*case "frt_term_cd":
                element[i].title = "Update as per SI \r\n" +
                "( If missing send a email ) - keep as per system downloaded";
                flag = 0;
                break;
				
            case "cntr_cmdt_desc"://new
                element[i].addEventListener("mouseover", function () { cntr_cmdt_desc_Check(contact_party); });
                flag = 0;
                break;
            case "frm_p_t10sheet3_cnt_cd"://new
                element[i].addEventListener("mouseover", function () { frm_p_t10sheet3_cnt_cd_Check(consignee_name); });
                flag = 0;
                break;
            case "frm_p_t10sheet3_cust_seq"://new
                element[i].addEventListener("mouseover", function () { frm_p_t10sheet3_cust_seq_Check(consignee_name); });
                flag = 0;
                break;
            case "frm_c_t10sheet3_ofc_cd"://new
                element[i].addEventListener("mouseover", function () { frm_c_t10sheet3_ofc_cd_Check(consignee_name); });
                flag = 0;
                break;
            case "frm_c_t10sheet3_cnt_cd"://new
                element[i].addEventListener("mouseover", function () { frm_c_t10sheet3_cnt_cd_Check(consignee_name); });
                flag = 0;
                break;
            case "frm_c_t10sheet3_cust_seq"://new
                element[i].addEventListener("mouseover", function () { frm_c_t10sheet3_cust_seq_Check(consignee_name); });
                flag = 0;
                break;
            case "frm_t10sheet1_rt_aply_dt":
                element[i].addEventListener("mouseover", function () { frm_t10sheet1_rt_aply_dt_Move(); });
                flag = 0;
                break;
            case "frm_t11sheet1_inet_ctrl_pty_no":
                element[i].addEventListener("mouseover", function () { frm_t11sheet1_inet_ctrl_pty_no_Click(consignee_name, shipper_name); });
                flag = 0;
                break;
			*/
            //case "frm_p_t10sheet3_ofc_cd":
            //case "frm_p_t10sheet3_cnt_cd":
                //element[i].addEventListener("mouseup", function () { CheckChargePayment(); });
				//element[i].addEventListener("mouseover", function () { CheckChargePayment(); });
                flag = 0;
                //break;
			
			//case "ex_cust_nm":
				//element[i].addEventListener("mouseover", function() { getCostCoSOP(); });
				//flag = 0;
				//break;
			
			//case "sc_no":
				//element[i].addEventListener("mouseover", function() { getWalmartSOP(); });
				//flag = 0;
				//break;
			
			
            default:
                flag = 1;
        }
    }
}