
var element = document.getElementsByTagName('*');
//window.addEventListener("load", function () { CheckBoxChecked(); });
//document.onkeydown = keydown;

for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	switch (element[i].name) 
	{
		case "bkg_no":
			element[i].addEventListener("keypress", function () { setTimeout(function(){ CheckFiler();  },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ SOC_CMDTPopup(); },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ cust_remark_DG(); },1000); });
			element[i].addEventListener("keypress", function() { setTimeout(function(){ BlinkCustomer_popup(); },1000); });
			element[i].addEventListener("keypress", function() { bkgDueDiligencePopup(); } );
			/*element[i].addEventListener("keypress", function() { setTimeout(function(){ CorrectApplicationDate(); },500); });*/
//DB		element[i].addEventListener("keypress", function() { setTimeout(function(){ insertData(); },1000); });
			flag = 0;
			break;
			
		case "btn_t1retrieve":
			element[i].addEventListener("click", function() { setTimeout(function(){ SOC_CMDTPopup();  },1000); });
			element[i].addEventListener("click", function () { setTimeout(function(){ cust_remark_DG();  },1000); });
			element[i].addEventListener("click", function () { setTimeout(function(){ BlinkCustomer_popup();  },1000); });
			element[i].addEventListener("mouseover", function () { setTimeout(function(){ CheckFiler();  },1000); });
			element[i].addEventListener("click", function() { bkgDueDiligencePopup(); } );
			/*element[i].addEventListener("click", function () { setTimeout(function(){ CorrectApplicationDate();  },500); });*/
//DB		element[i].addEventListener("click", function() { setTimeout(function(){ insertData();  },3000); });				
			flag = 0;
			break;
			
		case "btn_t1Save":
			element[i].addEventListener("mouseover", function () { CheckFiler(); });
			element[i].addEventListener("mouseover", function() { BillStop(); } );
			element[i].addEventListener("mouseover", function() { NonOneLineMail(); } );
			element[i].addEventListener("click", function() { bkgDueDiligencePopup(); } );
			element[i].addEventListener("click", function() { intDueDeligence(); } );
			element[i].addEventListener("click", function() { custDueDeligence(); } );
			element[i].addEventListener("click", function() { intProhibited(); } );
			element[i].addEventListener("click", function() { custProhibited(); } );	
			/*element[i].addEventListener("mouseup", function() { IndShipment(); } );*/
			/*element[i].addEventListener("mouseup", function() { ETD_Correction(); } );*/			
			flag = 0;
			break;
			
		case "si_cntc_pson_eml":
				element[i].addEventListener("keyup", function() { NonOneLineMail(); } );
				flag = 0;
				break;
				
			case  "pck_cmdt_desc":
				element[i].addEventListener("mouseover", function(){ enableMnD();  });
				flag = 0;
				break;
				
			case "btn_save2":
				element[i].addEventListener("mouseover", function() { CNPTFormate(); });
				flag = 0;
                break;
			
			case "form":
				element[i].addEventListener("mouseover", function() { HighlightShipment(); } );
				element[i].addEventListener("mouseover" , function() { setChargeBgColor(); } );
				element[i].addEventListener("mouseover", function() { tickBDC(); });
				element[i].addEventListener("mouseover", function() { Non_FMC_Booking(); });
				element[i].addEventListener("mouseover", function() { highlight_EU_Filer(); });
				element[i].addEventListener("mouseover", function() { CAIssueOfficeCheck(); });
				element[i].addEventListener("mouseover", function() { highlightFeederPORPOL(); });
				element[i].addEventListener("mouseover", function() { disablebkgcreationtabfields(); });
				element[i].addEventListener("mouseover", function() { updateEmailDraftData(); });
				element[i].addEventListener("mouseover", function() { QueueListTooltip(); });
//DB			element[i].addEventListener("mouseover" , function() { colr(); } );
                flag = 0;
                break; 
			
			case "popiframe":
				element[i].addEventListener("mouseover", function() { Non_FMC_Booking(); });
                flag = 0;
                break;	
				
            case "cn_eori_no":
				element[i].addEventListener("click", function() { enablecustSave(); });
                flag = 0;
                break;
			
			case "cstms_desc":
				element[i].addEventListener("mouseover", function(){ enableMnD();  });
                flag = 0;
                break;
			
			case "btn_t7Save":
				element[i].addEventListener("click", function() { flag = true; });
				element[i].addEventListener("click", function() { UpdateCustomerTabDetails(); });
				element[i].addEventListener("mouseup", function() { CheckMOT(); } );
				element[i].addEventListener("mouseover", function() { CustPopup(); } );
				element[i].addEventListener("mouseover", function() { mandatory_CustTab(); } );
				element[i].addEventListener("click", function() { DueCheck(); });
				element[i].addEventListener("click", function() { holdCustPop(); });
				element[i].addEventListener("click", function() { CustTransitClause(); });
				element[i].addEventListener("mouseover", function() {BlackList(); });
				element[i].addEventListener("click", function() { ToOrderSanction(); });
				element[i].addEventListener("mouseover", function() { customer_check(); });
				element[i].addEventListener("mouseover", function() { dummy_keyword(); });
				element[i].addEventListener("click", function() { dummy_repcode_check(); });
				element[i].addEventListener("mouseover", function() { sameasconsignee(); });
				element[i].addEventListener("mouseover", function() { checkCanadaZipFormat(); });
				element[i].addEventListener("mouseover", function() { NZCneeNf_zipcode(); });
				element[i].addEventListener("click", function() { jpShipment_Req(); });
				element[i].addEventListener("mouseover", function(){ check_Cust_FMC(); });
				element[i].addEventListener("mouseover", function(){ prohibited_Japanese_Entities(); });
				/*element[i].addEventListener("click", function () { setTimeout(function(){ MexicoShipment();  },1000); });*/
				/*element[i].addEventListener("click", function () { cn_code_check(); });*/
				element[i].addEventListener("click", function() { outside_CNEE_NP(); });
				/*element[i].addEventListener("click", function() { CPFIT101217(); });*/
				element[i].addEventListener("mouseover", function(){ validateShipperName(); });
				element[i].addEventListener("mouseover", function(){ BlackListedCode(); });
				flag = 0;
				break;
			
			case "btn_t8Save":
				element[i].addEventListener("click", function() { UpdatePackage(); } );
				element[i].addEventListener("mouseover", function() { getMDTab(); } );
				element[i].addEventListener("click", function() { dueMnDPop(); } );
				element[i].addEventListener("click", function() { holdMnDPop(); } );
				element[i].addEventListener("click", function() { MnDTransitClause(); });
				element[i].addEventListener("mouseover", function(){ packageType_Desc();   });
				element[i].addEventListener("mouseover", function() { MnD_hold_Insurance(); });
				element[i].addEventListener("click", function() { unacceptable_commodity(); });
				element[i].addEventListener("click", function() { setTimeout(function(){ ACID_popup();  },1000); });
				element[i].addEventListener("mouseover", function() { QDC_Argentina(); });
				element[i].addEventListener("click", function() { MnD_CurrencyPopup(); });
				element[i].addEventListener("mouseover", function() { MnD_CleanOnBoard(); });
				element[i].addEventListener("click", function() { decimal_Indonesia(); });
				element[i].addEventListener("click", function() { Egypt_PortSaid(); });
				/*element[i].addEventListener("click", function() { Prohibited_CigaretteMnD(); });*/
				/*element[i].addEventListener("mouseover", function() { hold_keyword_MnD(); });*/
				/*element[i].addEventListener("click", function() { checkMarks(); });*/
//DB			element[i].addEventListener("click", function() { setTimeout(function(){ CNTR_Discrepancy();  },1000); });
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
				element[i].addEventListener("mouseover", function () { enableCharge_Save(); });
				flag = 0;
				break;
			
			case "frm_t11sheet1_rcv_de_term_prn_flg":
                element[i].title = "Europe shipment : Need to Untick R/D Term -  if Free Out Clause is updated \r\n ( As per SOP instructions need to follow instruction as per POD)";
                flag = 0;
				break;

			case "select_pre_carriage_by_text":
				element[i].title = "Pre-carriage By - Should be always blank";
                flag = 0;
				break;
				
			case "date_set_checkbox":
				element[i].title = "Need to tick on On Board Date";
				flag = 0;
				break;
				
			case "btn_return":
				/*element[i].addEventListener("click", function() { ReactEscalationMail(); } );*/
				flag = 0;
				break;		
				
			case "eml_subj_ctnt":
				/*element[i].addEventListener("focusout", function() { PreventEscalationMail(); } );*/
				flag = 0;
				break;
				
			case "frm_t11sheet1_bl_ready_by":
				element[i].addEventListener("mouseover", function() { enableBLIssue_Save(); } );
				flag = 0;
				break;
				
			case "btn_Email":
				element[i].addEventListener("mouseover", function() { draft_Addemail(); });
				element[i].addEventListener("click", function() { draft_popup(); });
				flag = 0;
				break;
				
			case "sam_cnee_copy_flg":
				element[i].addEventListener("mouseover", function() { JAS_Customer(); });
				flag = 0;
				break;
				
            default:
                flag = 1;
				
			/*Removed
			case "xter_rmk":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('xter_rmk')[0].style.backgroundColor = ""; });
				element[i].title = "Need to check Cust Remarks for additional details. \r\n (Example - S/C No., Name A/C & ETC)";
                flag = 0;
                break;
			
			case "inter_rmk":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('inter_rmk')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('inter_rmk')[0].style.backgroundColor = ""; });
				element[i].title = "Need to check Int Remarks for additional details. \r\n (Example - S/C No., Name A/C & ETC)";
                flag = 0;
                break;
				
			case "bkg_ctrl_pty_cust_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "1) If the S/C or RFA # is local, then CNPT should match with Shipper or Consignee. \r\n2) ( If not matched in BKG Creation tab - check in Charge tab -> S/C or RFA No -> Affiliates ) \r\n If still not match link freight - send mail to onshore  \r\n\r\n 2) If the S/C or RFA # is not local, No need to match CNPT with Shipper and Consignee.";
                flag = 0;
                break;
				
			case "bkg_ctrl_pty_cust_seq":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].style.backgroundColor = ""; });
				element[i].title = "1) If the S/C or RFA # is local, then CNPT should match with Shipper or Consignee. \r\n2) ( If not matched in BKG Creation tab - check in Charge tab -> S/C or RFA No -> Affiliates ) \r\n If still not match link freight - send mail to onshore  \r\n\r\n 2) If the S/C or RFA # is not local, No need to match CNPT with Shipper and Consignee.";
                flag = 0;
				
                break;
				
			case "bkg_ctrl_pty_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_ctrl_pty_cust_nm')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_ctrl_pty_cust_nm')[0].style.backgroundColor = ""; });
				element[i].title = "1) If the S/C or RFA # is local, then CNPT should match with Shipper or Consignee. \r\n2) ( If not matched in BKG Creation tab - check in Charge tab -> S/C or RFA No -> Affiliates ) \r\n If still not match link freight - send mail to onshore  \r\n\r\n 2) If the S/C or RFA # is not local, No need to match CNPT with Shipper and Consignee.";
                flag = 0;
                break;
			
			case "cmdt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cmdt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "For US/CA Shipments - Correct CMDT should be selected as per ( Name Account ) mentioned on SI \r\n \r\n  For Other Shipments - CMDT should be selected only if the rates are not availabe(Missing Auto Rate case) in Charge Tab";
                flag = 0;
                break;
				
			case "cmdt_desc":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cmdt_desc')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cmdt_desc')[0].style.backgroundColor = ""; });
                element[i].title = "For US/CA Shipments - Correct CMDT should be selected as per ( Name Account ) mentioned on SI \r\n \r\n  For Other Shipments - CMDT should be selected only if the rates are not availabe(Missing Auto Rate case) in Charge Tab";
                flag = 0;
                break;
				
			
			case "bkg_sts_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = "#FFA54F"; });
				element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = ""; });
                element[i].title = "1) F-Confirmed (Process BL normally) \r\n2) X-Cancelled (Do not process BL send mail for  Booking status cancelled) \r\n3) W-Wait listed (Process BL & send mail for Special Cargo Non Approval \r\n";
                flag = 0;
                break;
			
			case "sh_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_nm')[0].style.backgroundColor = "#FFA54F";} )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_nm')[0].style.backgroundColor = ""; });
                element[i].title ='Update company name (2 Lines)';
                flag = 0;
                break;
				
			case "sh_cust_addr":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_addr')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_addr')[0].style.backgroundColor = ""; });
				element[i].title = "Address should be 3 Lines.";
                flag = 0;
                break;
				
			case "sh_cust_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_cty_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update City.";
                flag = 0;
                break;
				
			case "sh_cust_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_ste_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update State";
                flag = 0;
                break;
				
			case "sh_cstms_decl_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cstms_decl_cnt_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cstms_decl_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Country Code.";
                flag = 0;
                break;
				
			case "sh_cust_zip_id":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_cust_zip_id')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_cust_zip_id')[0].style.backgroundColor = ""; });
				element[i].title = "Update ZIP Code.";
                flag = 0;
                break;
				
			case "sh_eur_cstms_st_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_eur_cstms_st_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_eur_cstms_st_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Street / P.O Box as per SI";
                flag = 0;
                break;
				
			case "act_wgt":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('act_wgt')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('act_wgt')[0].style.backgroundColor = ""; });
                element[i].title = "Update total no Gross Weight as per SI";
                flag = 0;
                break;
				
			case "cn_cust_addr":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_addr')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_addr')[0].style.backgroundColor = ""; });
				element[i].title = "Address should be 3 Lines.";
                flag = 0;
                break;
				
			case "cn_cust_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_cty_nm')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update City.";
                flag = 0;
                break;
				
			case "cn_cust_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_ste_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update State";
                flag = 0;
                break;
				
			case "cn_cstms_decl_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cstms_decl_cnt_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cstms_decl_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Country Code.";
                flag = 0;
                break;
				
			case "cn_eur_cstms_st_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_eur_cstms_st_nm')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_eur_cstms_st_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update Street / P.O Box as per SI";
                flag = 0;
                break;
				
			case "nf_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_nm')[0].style.backgroundColor = ""; });
                element[i].title = "Update company name (2 Lines)";
                flag = 0;
                break;
				
			case "nf_cust_addr":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_addr')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_addr')[0].style.backgroundColor = ""; });
                element[i].title = "Address should be 3 Lines.";
                flag = 0;
                break;
				
			case "nf_cust_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_cty_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update City.";
                flag = 0;
                break;
				
			case "nf_cust_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_ste_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update State";
                flag = 0;
                break;
				
			case "nf_cstms_decl_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cstms_decl_cnt_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cstms_decl_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Country Code.";
                flag = 0;
                break;
				
			case "nf_cust_zip_id":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_cust_zip_id')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_cust_zip_id')[0].style.backgroundColor = ""; });
				element[i].title = "Update ZIP Code.";
                flag = 0;
                break;
				
			case "nf_eur_cstms_st_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_eur_cstms_st_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_eur_cstms_st_nm')[0].style.backgroundColor = ""; });
                element[i].title = "Update Street / P.O Box as per SI";
                flag = 0;
                break;
				
			case "ff_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('ff_cust_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('ff_cust_nm')[0].style.backgroundColor = ""; });
                element[i].title = "Update company name & address as per SI (5 Lines) \r\n(Always un-tick print)";
                flag = 0;
                break;
			
			 case "an_cust_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('an_cust_cnt_cd')[0].style.backgroundColor = "#FFA54F";} )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('an_cust_cnt_cd')[0].style.backgroundColor = ""; });
                element[i].title = "Select proper code of Also notify as per SI with correct country code ";
                flag = 0;
                break;
			
			case "an_cust_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('an_cust_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('an_cust_nm')[0].style.backgroundColor = ""; });
                element[i].title = "Update company name & address as per SI (5 Lines) \r\n(Always tick print)";
                flag = 0;
                break;
				
            case "sh_eori_no":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('sh_eori_no')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('sh_eori_no')[0].style.backgroundColor = ""; });
                flag = 0;
                break;
			
			case "nf_eori_no":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('nf_eori_no')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('nf_eori_no')[0].style.backgroundColor = ""; });
                flag = 0;
                break;
				
			case "btn_t6cntrconfirm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('btn_t6cntrconfirm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('btn_t6cntrconfirm')[0].style.backgroundColor = ""; });
                element[i].title = "Always tick on container confirmation – if all the container details updated as per SI";
                flag = 0;
                break;
				
			case "rtn_to_usr_eml":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('rtn_to_usr_eml')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('rtn_to_usr_eml')[0].style.backgroundColor = ""; });
				flag = 0;
				break;
				
			case "dg_cmdt_desc":
				element[i].addEventListener("mouseout", function() { document.getElementsByName('dg_cmdt_desc')[0].style.backgroundColor = ""; });
                flag = 0;
                break;
				
			case "cntr_cmdt_desc":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cntr_cmdt_desc')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cntr_cmdt_desc')[0].style.backgroundColor = ""; });
                element[i].title = "Manual update 'PART OF 1Xxxx CONTAINER(S) SAID TO CONTAIN: \r\n";
                flag = 0;
                break;
				
			case "cn_cust_zip_id":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cn_cust_zip_id')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cn_cust_zip_id')[0].style.backgroundColor = ""; });
				element[i].title = "Update ZIP Code.";
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
				
			case "frm_t11sheet1_final_dest":
                element[i].title = "Update only if mentioned on SI";
                flag = 0;
				break;
				
			case "frm_t11sheet1_por_name":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_por_name')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_por_name')[0].style.backgroundColor = ""; });
				flag = 0;
				break;
				
			case "frm_t11sheet1_pol_name":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_pol_name')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_pol_name')[0].style.backgroundColor = ""; });
				flag = 0;
				break;
				
			case "frm_t11sheet1_pod_name":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_pod_name')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_pod_name')[0].style.backgroundColor = ""; });
				flag = 0;
				break;
				
			case "frm_t11sheet1_del_name":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_del_name')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_del_name')[0].style.backgroundColor = ""; });
				flag = 0;
				break;
				
			case "frm_t11sheet1_final_dest":
				element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_final_dest').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_final_dest').style.backgroundColor = ""; });
                flag = 0;
                break;
				
			case "frm_t11sheet1_bl_iss_tp_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('frm_t11sheet1_bl_iss_tp_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('frm_t11sheet1_bl_iss_tp_cd')[0].style.backgroundColor = ""; });
				flag = 0;
				break;
				
			case "mk_desc_prn_flg":
				element[i].title = "Always Tick Print on M/D";
				flag = 0;
				break;
				
			case "mf_desc_prn_flg":
				element[i].title = "Tick Print on C/M for Panalpina Customer.";
				flag = 0;
				break;*/
    }
		
	if (flag == 1) 
	{
		switch (element[i].id) 
		{			
			case "btn_t9Save":
				element[i].addEventListener("click", function() { UpdatePackage(); } );
                element[i].addEventListener("mouseover", function () { CheckShipment(); });
				element[i].addEventListener("mouseover", function () { getCMTab(); });
				element[i].addEventListener("mouseover",  function() { hold_keyword_CM(); });
				element[i].addEventListener("click", function() { unacceptable_commodity(); });
				/*element[i].addEventListener("mouseup", function () { CheckEurope(); });*/
				/*element[i].addEventListener("click", function() { breakdown_popup(); });*/
				/*element[i].addEventListener("click", function() { Prohibited_CigarettesCM(); });*/
                flag = 0;
                break;
				
			case "btn_t10save":
				element[i].addEventListener("click", function() { checkOFT_FreightTerm();});
				element[i].addEventListener("mouseover", function() { checkOFT_FreightTerm();});
				element[i].addEventListener("click", function() { CRD_Check(); });
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ Sanction_RU_BY();  },1000); });
				element[i].addEventListener("mousedown", function() { setTimeout(function(){ Sanction_RU_BY();  },1000); });
				element[i].addEventListener("mouseover",function() { setTimeout(function () { customer_check(); }, 500); });
				element[i].addEventListener("mouseover", function() { setTimeout(function(){ check_zero_Rate();  },1000); });
				element[i].addEventListener("mousedown", function() { setTimeout(function(){ check_zero_Rate();  },1000); });
				element[i].addEventListener("click", function () { setTimeout(function(){ ChargePopup_USCA();  },1000); });
				element[i].addEventListener("click", function() { check_duediligence();});
				element[i].addEventListener("mouseover", function() { CheckMulti_DOCFee();});
				element[i].addEventListener("mouseover", function() { Cambodia_VKF_Charge();});
				element[i].addEventListener("mouseover", function() { validateCustomerRatesAs();});
				/*element[i].addEventListener("mouseup", function() { generate_table(); } );*/
				flag = 0;
				break;
			
			case "btn_t10clear":
				element[i].addEventListener("click", function() { ManualChargeValidation(); });
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
				flag = 0;
				break;
			
			case "btn_t1Reefer":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1Reefer').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1Reefer').style.backgroundColor = ""; });
				flag = 0;
				break;
			
			case "usa_cstms_file_cd_text":
				element[i].addEventListener("mouseover", function() { document.getElementById('usa_cstms_file_cd_text').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('usa_cstms_file_cd_text').style.backgroundColor = ""; });
				element[i].title = "POD US: \r\nFiler (1) Create Manual HBL (House Bill of Lading) \r\nFiler (2) - Update SCAC code as per SI \r\nFiler (3) Not Applicable";
				flag = 0;
				break;
				
			case "cnd_cstms_file_cd_text":
				element[i].addEventListener("mouseover", function() { document.getElementById('cnd_cstms_file_cd_text').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('cnd_cstms_file_cd_text').style.backgroundColor = ""; });
				element[i].title = "POD Canada: \r\nFiler (1)Create Manual HBL (House Bill of Lading) \r\nFiler (2) - Update ACI code as per SI \ \r\n Filer (3) Not Applicable";
				flag = 0;
				break;
			
			case "btn_t1ReferenceNo":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t1ReferenceNo').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t1ReferenceNo').style.backgroundColor = ""; });
				flag = 0;
				break;
				
			case "nf_cust_seq":
				element[i].addEventListener("mouseover", function() { enablecustSave(); });
				flag = 0;
				break;
				
			case "btn_t9AllConfirm":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t9AllConfirm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t9AllConfirm').style.backgroundColor = ""; });
				flag = 0;
				break;
				
			case "bl_ready_type_text":
				element[i].addEventListener("mouseover", function() { document.getElementById('bl_ready_type_text').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('bl_ready_type_text').style.backgroundColor = ""; });
				flag = 0;
				break;
				
			case "bl_ready_type_IBCBMainBtn":
				element[i].addEventListener("mouseover", function() { document.getElementById('bl_ready_type_IBCBMainBtn').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('bl_ready_type_IBCBMainBtn').style.backgroundColor = ""; });
				flag = 0;
				break;
			
			case "btn_send":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_send').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_send').style.backgroundColor = ""; });
				element[i].addEventListener("mouseover", function() { draft_Addemail(); });
				flag = 0;
				break;
				
			case "on_board_type_text":
				element[i].addEventListener("mouseover", function() { document.getElementById('on_board_type_text').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('on_board_type_text').style.backgroundColor = ""; });
                element[i].title = "Update as per instructions mentioned on SI";
                flag = 0;
                break;
				
			case "btn_Email":
				element[i].addEventListener("mouseover", function() { draft_Addemail(); });
				element[i].addEventListener("click", function() { draft_popup(); });
				flag = 0;
				break;
				
            case "btn_t10doc":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t10doc').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t10doc').style.backgroundColor = ""; });
                element[i].title = "Need to add DOC Adjustment - If there is 3rd country BL Issuance";
                flag = 0;
                break;
				
			case "btn_t11Save":
				element[i].addEventListener("click", function() { dueBLIssuePop(); });
				element[i].addEventListener("click", function() { holdBLIssuePop(); });
				element[i].addEventListener("click", function() { BLIssueTransitClause(); });
				element[i].addEventListener("click", function() { CountryBLIssue(); });
				element[i].addEventListener("mouseover", function() { BLData_Type_U(); });
				element[i].addEventListener("mouseover", function() { BLType_Number(); });
				element[i].addEventListener("click", function() { draft_popup(); });
				element[i].addEventListener("mouseover", function() { DocCheck(); } );
				element[i].addEventListener("mouseover", function() { check_preCarriage(); } );
				element[i].addEventListener("mouseover", function() { validate_onboard(); } );
				element[i].addEventListener("mouseover", function() { waveDestination(); } );
				element[i].addEventListener("mouseover", function() { BDCType(); });
				/*element[i].addEventListener("click", function(){ readSI(); } );*/
				flag = 0;
				break;
				
            default:
                flag = 1;
				
			/*Removed
			case "ff_cust_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementById('ff_cust_cnt_cd').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('ff_cust_cnt_cd').style.backgroundColor = ""; });
				element[i].title = "Refresh & Untick print \r\n";
				flag = 0;
				break;
				
			case "nf_cust_cnt_cd": 
				element[i].addEventListener("mouseover", function() { document.getElementById('nf_cust_cnt_cd').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('nf_cust_cnt_cd').style.backgroundColor = ""; });
				element[i].title = "Select proper code of Notify as per SI with correct country code";
				flag = 0;
				break;
				
			case "btn_t8ExportImportInfo":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t8ExportImportInfo').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t8ExportImportInfo').style.backgroundColor = ""; });
				element[i].title = "Select Country Brazil: \r\n" +
				"Update consignee & notify CNPJ No# (14-digits)";
				flag = 0;
				break;
				
			case "mk_desc":
				element[i].addEventListener("mouseover", function() { document.getElementById('mk_desc').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('mk_desc').style.backgroundColor = ""; });
				element[i].title = "Update as per SI \r\n" +
				"(Do not update Container/Seal No, Space between the lines) \r\n" +
				"(Aligned the words properly)";
				flag = 0;
				break;
				
			case "shpr_nm":
				element[i].addEventListener("mouseover", function() { document.getElementById('shpr_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('shpr_nm').style.backgroundColor = ""; });
				element[i].title = "No validation of codes: \r\n" +
				"1) Update Shippers company name  as per HBL attachment";
				flag = 0;
				break;
			
			case "shpr_addr":
				element[i].addEventListener("mouseover", function() { document.getElementById('shpr_addr').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('shpr_addr').style.backgroundColor = ""; });
				element[i].title = "No validation of codes: \r\n" +
				"1) Update Shippers address as per HBL attachment.";
				flag = 0;
				break;
				
			case "shpr_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_cty_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update City.";
                flag = 0;
                break;
				
			case "shpr_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_ste_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update State";
                flag = 0;
                break;
				
			case "shpr_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_cnt_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Country Code.";
                flag = 0;
                break;
				
			case "shpr_zip_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('shpr_zip_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('shpr_zip_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update ZIP Code.";
                flag = 0;
                break;
				
			case "cnee_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_nm')[0].style.backgroundColor = ""; });
                element[i].title = "No validation of codes: \r\n" +
                       "1) Update consignee company name as per HBL attachment.";
                flag = 0;
                break
				
            case "cnee_addr":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_addr')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_addr')[0].style.backgroundColor = ""; });
                element[i].title = "No validation of codes: \r\n" +
                "1) Update consignee address as per HBL attachment.";
                flag = 0;
                break
				
			case "cnee_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_cty_nm')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_cty_nm')[0].style.backgroundColor = ""; });
				element[i].title = "Update City.";
                flag = 0;
                break;
				
			case "cnee_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_ste_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_ste_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update State";
                flag = 0;
                break;
				
			case "cnee_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_cnt_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_cnt_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update Country Code.";
                flag = 0;
                break;
				
			case "cnee_zip_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('cnee_zip_cd')[0].style.backgroundColor = "#FFA54F"; } )
				element[i].addEventListener("mouseout", function() { document.getElementsByName('cnee_zip_cd')[0].style.backgroundColor = ""; });
				element[i].title = "Update ZIP Code.";
                flag = 0;
                break;
			
			case "noti_nm":
				element[i].addEventListener("mouseover", function() { document.getElementById('noti_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('noti_nm').style.backgroundColor = ""; });
				element[i].title = "No validation of codes: \r\n" +
                "1) Update notify name as per HBL attachment";
				flag = 0;
				break;

			case "noti_addr":
				element[i].addEventListener("mouseover", function() { document.getElementById('noti_addr').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('noti_addr').style.backgroundColor = ""; });
				element[i].title = "No validation of codes: \r\n" +
				"1) Update notify address as per HBL attachment";
				flag = 0;
				break;
				
			case "noti_cty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_cty_nm')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_cty_nm')[0].style.backgroundColor = ""; });
                element[i].title = "Update City.";
                flag = 0;
                break;
				
			case "noti_ste_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_ste_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_ste_cd')[0].style.backgroundColor = ""; });
                element[i].title = "Update State";
                flag = 0;
                break;
				
			case "noti_cnt_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_cnt_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_cnt_cd')[0].style.backgroundColor = ""; });
                element[i].title = "Update Country Code.";
                flag = 0;
                break;
				
			case "noti_zip_cd":
				element[i].addEventListener("mouseover", function() { document.getElementsByName('noti_zip_cd')[0].style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementsByName('noti_zip_cd')[0].style.backgroundColor = ""; });
                element[i].title = "Update ZIP Code.";
                flag = 0;
                break;
			
			case "bl_mk_desc":
				element[i].addEventListener("mouseover", function() { document.getElementById('bl_mk_desc').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('bl_mk_desc').style.backgroundColor = ""; });
				element[i].title = "Update marks & Numbers as per HBL attachment \r\n" +
				"If not mentioned on SI – update as per MBL";
				flag = 0;
				break;
        
			case "bl_gds_desc":
				element[i].addEventListener("mouseover", function() { document.getElementById('bl_gds_desc').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('bl_gds_desc').style.backgroundColor = ""; });
				element[i].title = "Update description as per HBL attachment \r\n" +
				"If not mentioned on SI – update as per MBL";
				flag = 0;
				break;
			
			case "pck_qty":
				element[i].addEventListener("mouseover", function() { document.getElementById('pck_qty').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('pck_qty').style.backgroundColor = ""; });
				element[i].title = "Update marks & Numbers as per HBL attachment \r\n" +
				"If not mentioned on SI – update as per MBL";
				flag = 0;
				break;
				
			case "pck_tp_cd":
				element[i].addEventListener("mouseover", function() { document.getElementById('pck_tp_cd').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('pck_tp_cd').style.backgroundColor = ""; });
				element[i].title = "Update Package type as per HBL attachement";
				flag = 0;
				break;
				
			case "hbl_wgt":
				element[i].addEventListener("mouseover", function() { document.getElementById('hbl_wgt').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('hbl_wgt').style.backgroundColor = ""; });
				element[i].title = "Update total weight as per HBL attachement \r\n" +
				"If not mentioned on SI – update as per MBL";
				flag = 0;
				break;
			
			case "cmdt_meas_qty":
				element[i].addEventListener("mouseover", function() { document.getElementById('cmdt_meas_qty').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('cmdt_meas_qty').style.backgroundColor = ""; });
				element[i].title = "Update Measurement as per HBL attachement \r\n" +
				"If not mentioned on SI – update as per MBL";
				flag = 0;
				break;
				
			case "hbl_no":
				element[i].addEventListener("mouseover", function() { document.getElementById('hbl_no').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('hbl_no').style.backgroundColor = ""; });
				element[i].title = "Update if mentioned on SI or HBL attachment \r\n" +
				"If not mentioned – update BL NO as HBL No.";
				flag = 0;
				break;
				
			case "cntr_mf_no":
				element[i].addEventListener("mouseover", function() { document.getElementById('cntr_mf_no').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('cntr_mf_no').style.backgroundColor = ""; });
				element[i].title = "When all the HBL details are updated – need to Tick on Manifest File No.";
				flag = 0;
				break;
				
			case "btn_t9AllRelease":
				element[i].addEventListener("mouseover", function() { document.getElementById('btn_t9AllRelease').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('btn_t9AllRelease').style.backgroundColor = ""; });
				element[i].title = "If we need to amend the details we need to Tick on All Release";
				flag = 0;
				break;
			
			case "cn_cust_nm"://new
				element[i].addEventListener("mouseover", function() { document.getElementById('cn_cust_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('cn_cust_nm').style.backgroundColor = ""; });
				element[i].title = "Update Company Name (2 Lines)";
				flag = 0;
				break;
			
			case "ff_cust_lgl_eng_nm":
				element[i].addEventListener("mouseover", function() { document.getElementById('ff_cust_lgl_eng_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('ff_cust_lgl_eng_nm').style.backgroundColor = ""; });
				element[i].title = "Forwarder Name is here";
				flag = 0;
				break;
				
			case "frm_t11sheet1_inet_ctrl_pty_nm":
				element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_nm').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_nm').style.backgroundColor = ""; });
                element[i].addEventListener.title = "Udpate as per E-BL List";
                flag = 0;
                break;
					
			case "frm_t11sheet1_inet_ctrl_pty_no":
				element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_no').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_inet_ctrl_pty_no').style.backgroundColor = ""; });
                flag = 0;
                break;
			
			case "frm_t11sheet1_obl_iss_rmk":
				element[i].addEventListener("mouseover", function() { document.getElementById('frm_t11sheet1_obl_iss_rmk').style.backgroundColor = "#FFA54F"; })
				element[i].addEventListener("mouseout", function() { document.getElementById('frm_t11sheet1_obl_iss_rmk').style.backgroundColor = ""; });
                flag = 0;
                break;*/
				
		}
	}
}


/*var Database_Name = 'OpusDB';
    var Version = 1.0;
    var Text_Description = 'Opus Temporary Database';
    var Database_Size = 2 * 1024 * 1024;
    var db = openDatabase(Database_Name, Version, Text_Description, Database_Size);
        db.transaction(function (tx) 
		{
		//tx.executeSql('delete from Customer');	
		//tx.executeSql("drop table Customer ");
		//tx.executeSql("drop table Email");
		//tx.executeSql("drop table Escalation ");
			
			//tx.executeSql('Create Table if not exists Customer (BLNumber VARCHAR(100), SHPRPrf, SHPRCode integer, SHPRName varchar(100), FWDRPrf, FWDRCode integer, FWDRName varchar(100),  CNEEPrf, CNEECode integer, CNEEName varchar(100), CNPTPrf, CNPTCode integer, CNPTName varchar(100), SCNo , RFANo, DEL , POD , POR, POL, Trans_Mode, App_Date,BKG_Status, clr);',  []);
			//tx.executeSql('Create Table if not exists Email (BLNumber VARCHAR(100), SHPRCode integer, SHPRName varchar(100), SH, CN, NF );', [] );
			//tx.executeSql('CREATE TABLE IF NOT EXISTS Escalation(BLNumber VARCHAR(50), BOFC VARCHAR(10) );', [] );
						
        });	*/
		
/*Database
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
	
	var D2 = "";
	var D3 = "";
	var D4 = "";
	var D5 = "";
	var D7 = "";
	var F2 = "";
	var F4 = "";
	var F5 = "";
	var O2 = "";
	var O4 = "";
	var O5 = "";
	var R2 = "";
	var R5 = "";
	var R7 = "";
	var T2 = "";
	var T4 = "";
	
	var sheetObject=document.getElementById("t1sheet1");
	var rowCount = sheetObject.querySelectorAll("tr").length
	if(document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont0.HideCol0C2"))
	{
		for(var i=2;i<=(rowCount-11);i++)
		{
			var rt = document.evaluate('//*[@id="t1sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var c = document.evaluate('//*[@id="t1sheet1"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[4]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			c = c.replace(".00","");
			if(rt == "D2")
			{
				D2 = "D2*"+c;
			}
			else if(rt == "D3")
			{
				D3 = "D3*"+c;
			}
			else if(rt == "D4")
			{
				D4 = "D4*"+c;
			}
			else if(rt == "D5")
			{
				D5 = "D5*"+c;
			}
			else if(rt == "D7")
			{
				D7 = "D7*"+c;
			}
			else if(rt == "F2")
			{
				F2 = "F2*"+c;
			}
			else if(rt == "F4")
			{
				F4 = "F4*"+c;
			}
			else if(rt == "F5")
			{
				F5 = "F5*"+c;
			}
			else if(rt == "O2")
			{
				O2 = "O2*"+c;
			}
			else if(rt == "O4")
			{
				O4 = "O4*"+c;
			}
			else if(rt == "O5")
			{
				O5 = "O5*"+c;
			}
			else if(rt == "R2")
			{
				R2 = "R2*"+c;
			}
			else if(rt == "R5")
			{
				R5 = "R5*"+c;
			}
			else if(rt == "R7")
			{
				R7 = "R7*"+c;
			}
			else if(rt == "T2")
			{
				T2 = "T2*"+c;
			}
			else if(rt == "T4")
			{
				T4 = "T4*"+c;
			}
		}
	}
	
	db.transaction(function(t) {
        //t.executeSql("delete from Customer");
		t.executeSql("delete from Email");
		t.executeSql("drop table Customer");
		//t.executeSql("drop table Email");
	});
	
	
	
    db.transaction(function(t) {
        t.executeSql("CREATE TABLE if not exists Customer (BLNumber TEXT, SHPRCode TEXT, SHPRName TEXT, FWDRPrf TEXT, FWDRCode TEXT, FWDRName TEXT, CNEECode TEXT, CNEEName TEXT, CNPTCode TEXT, CNPTName TEXT, SCNo TEXT, RFANo TEXT, DEL TEXT, POD TEXT, POR TEXT, POL TEXT, clr TEXT, D2 TEXT, D3 TEXT, D4 TEXT, D5 TEXT, D7 TEXT, F2 TEXT, F4 TEXT, F5 TEXT, O2 TEXT, O4 TEXT, O5 TEXT, R2 TEXT, R5 TEXT, R7 TEXT, T2 TEXT, T4 TEXT)", null, 
    function (transaction, sqlResultSet) {     
        t.executeSql("INSERT INTO 'Customer' (BLNumber, SHPRCode, SHPRName, FWDRPrf, FWDRCode, FWDRName, CNEECode, CNEEName, CNPTCode, CNPTName, SCNo, RFANo, DEL, POD, POR, POL, clr, D2, D3, D4, D5, D7, F2, F4, F5, O2, O4, O5, R2, R5, R7, T2, T4) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)", [BLNumber, SHPR_s_cust_seq, SHPR_s_cust_nm, FWDR_Prf, FWDR_f_cust_seq, FWDR_f_f_cust_nm, CNEE_c_cust_seq, CNEE_c_cust_nm, CNPT_bkg_ctrl_pty_cust_seq, CNPT_bkg_ctrl_pty_cust_nm, SCNo, RFANo, DEL, POD, POR, POL, clr, D2, D3, D4, D5, D7, F2, F4, F5, O2, O4, O5, R2, R5, R7, T2, T4], null, null,
		function(transaction, error) {
                console.log('error on insert: ' + error.message);
            });
    }, function (transaction, error) {
        console.log('error on table create: ' + error.message);
    });
		//t.executeSql('INSERT INTO Customer (BLNumber, SHPRCode, SHPRName, FWDRCode, FWDRName, CNEECode, CNEEName, CNPTCode, CNPTName, SCNo , RFANo, DEL, POD) VALUES (' + BLNumber + ', ' + SHPR_s_cust_seq + ',"' + SHPR_s_cust_nm + '", ' + FWDR_f_cust_seq + ',"' + FWDR_f_f_cust_nm + '" , ' + CNEE_c_cust_seq + ',"' + CNEE_c_cust_nm + '" , ' + CNPT_bkg_ctrl_pty_cust_seq + ',"' + CNPT_bkg_ctrl_pty_cust_nm + '", "' + SCNo + '", "' + RFANo + '", "' + DEL + '" , "' + POD + '") ');
		//t.executeSql("delete from Customer ;",  [], nullDataHandler, killTransaction);
		t.executeSql("Insert into Email (BLNumber, SHPRCode, SHPRName) values (?, ?, ?)", [BLNumber, SHPR_s_cust_seq, SHPR_s_cust_nm] , nullDataHandler, killTransaction);
    });
	
	function nullDataHandler(transaction, results){
		console.log("Successfully inserted")
	}
	
	function killTransaction(transaction, error){
	console.log("error in insertion")
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

}*/

/*Database
function colr()
{
	var clr = "";	
	
		db.transaction (
		function(tx){
			//SHPRCode, SHPRName, FWDRCode, FWDRName, CNEECode, CNEEName, CNPTCode, CNPTName
				tx.executeSql('SELECT * FROM CUSTOMER ORDER BY ROWID DESC LIMIT 1 ;', [],
				function(transaction, results){
					if (results != null && results.rows != null) {
						for (var j=0; j<results.rows.length; j++) {
							var row = results.rows.item(j) ;
							//console.log(results.rows.length);
							//console.log(row);

							clr = row.clr;
							
							if(clr == "blue")
							{
								if(document.getElementsByName("frm_t10sheet1_rt_aply_dt")[0] != null)
								{
									document.getElementsByName("frm_t10sheet1_rt_aply_dt")[0].style.backgroundColor = "Yellow";
									document.getElementsByName("frm_t10sheet1_por_cd")[0].style.backgroundColor="";
									document.getElementsByName("frm_t10sheet1_pol_cd")[0].style.backgroundColor="";
									document.getElementsByName("frm_t10sheet1_rt_aply_dt")[0].title = "Vessel Roll Over";
								}
							}
						}
					}
				});
		}
	);
}*/

/*Database
function CNTR_Discrepancy()
{
	var D2 = "";
	var D3 = "";	
	var D4 = "";
	var D5 = "";
	var D7 = "";
	var F2 = "";
	var F4 = "";
	var F5 = "";
	var O2 = "";
	var O4 = "";
	var O5 = "";
	var R2 = "";
	var R5 = "";
	var R7 = "";
	var T2 = "";
	var T4 = "";
	var no = "";
	
	db.transaction 
	(
		function(tx)
		{
			tx.executeSql('SELECT D2,D3,D4,D5,D7,F2,F4,F5,O2,O4,O5,R2,R5,R7,T2,T4 FROM CUSTOMER ORDER BY ROWID DESC LIMIT 1 ;', [],
			function(transaction, results)
			{
				if (results != null && results.rows != null) 
				{
					for (var j=0; j<results.rows.length; j++) 
					{
						var row = results.rows.item(j) ;
						D2 = row.D2;
						D3 = row.D3;
						D4 = row.D4;
						D5 = row.D5;
						D7 = row.D7;
						F2 = row.F2;
						F4 = row.F4;
						F5 = row.F5;
						O2 = row.O2;
						O4 = row.O4;
						O5 = row.O5;
						R2 = row.R2;
						R5 = row.R5;
						R7 = row.R7;
						T2 = row.T2;
						T4 = row.T4;

						if(D2 !="")
						{
							no = D2.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X20ST"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(D3 !="")
						{
							no = D3.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X20HC"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(D4 !="")
						{
							no = D4.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X40ST"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(D5 !="")
						{
							no = D5.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X40HC"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(D7 !="")
						{
							no = D7.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X45HC"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(F2 !="")
						{
							no = F2.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X20FR"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(F4 !="")
						{
							no = F4.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X40FR"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(F5 !="")
						{
							no = F5.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X40FT"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(O2 !="")
						{
							no = O2.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X20OT"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(O4 !="")
						{
							no = O4.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X40OT"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(O5 !="")
						{
							no = O5.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X40HO"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(R2 !="")
						{
							no = R2.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X20RF"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(R5 !="")
						{
							no = R5.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X40HR"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(R7 !="")
						{
							no = R7.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X45HR"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(T2 !="")
						{
							no = T2.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X20TK"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
						if(T4 !="")
						{
							no = T4.split('*');
							if(document.getElementsByName('cntr_cmdt_desc')[0].value.includes(no[1]+"X40TK"))
							{
								
							}
							else
							{
								while(true)
								{
									let comment = prompt("Have you updated correct No. of PKG/CNTR under M&D and relink with correct container QTY with Container confirmation? (Yes/No)");
									if(comment !=null)
									{
										if(comment.trim().toLowerCase() != "yes" && comment.trim().toLowerCase() != "no")
										{
											alert("Invalid Comment");
										}
										else
										{
											break;
										}
									}
								}
							}
						}
					}
				}
			});
		}
	);
}*/

/*Removed
function ReactEscalationMail()
{
	var d = "";
	
	if(document.querySelector("#form > div.page_title_area.clear > h2 > span")!= null)
	{
		d = document.querySelector("#form > div.page_title_area.clear > h2 > span").innerHTML;
		if(d == "OCPS : Return Message")
		{
			var BOFC = "";
			var rtn_email = document.getElementsByName("rtn_to_usr_eml")[0].value;
			//var radios = document.getElementsByName('ui_grp_cd')[3];
			var cust_rd = document.getElementsByName('ui_grp_cd')[3].checked;
			var email_subject = document.getElementsByName('eml_subj_ctnt')[0].value;
			var email = email_subject.split("-");
			var BLNo = email[3].replace(" ","");
			
			var onshore_rd = document.getElementsByName('ui_grp_cd')[1].checked;
			
			if(rtn_email != "")
			{
				if(BLNo.substr(0,2) == "SZ")
				{
					BOFC = "SZPBB";
				}
				else if(BLNo.substr(0,2) == "HK")
				{
					BOFC = "HKGBB";
				}
				else if(BLNo.substr(0,2) == "CA")
				{
					BOFC = "CANBB"
				}
				else if(BLNo.substr(0,2) == "ZH")
				{
					BOFC = "ZHOBB";
				}
			
				if(cust_rd == true)
				{
					if(BOFC == "HKGBB")
					{
						if(rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com"))//rtn_email.includes("cn.sx.ons.exp@one-line.com") || 
						{
							window.prompt("Email has been sent to wrong Email ID. " + rtn_email);
						}
					}
					else if(BOFC == "SZPBB")
					{
						if(rtn_email.includes("hk.ons.exp@one-line.com") || rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com"))
						{
							window.prompt("Email has been sent to wrong Email ID. " + rtn_email);
						}
					}
					else if(BOFC == "CANBB")
					{
						if(rtn_email.includes("hk.ons.exp@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com"))//rtn_email.includes("cn.sx.ons.exp@one-line.com") || 
						{
							window.prompt("Email has been sent to wrong Email ID. " + rtn_email);
						}
					}
					else if(BOFC == "ZHOBB")
					{
						if(rtn_email.includes("hk.ons.exp@one-line.com") || rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com"))//rtn_email.includes("cn.sx.ons.exp@one-line.com") || 
						{
							window.prompt("Email has been sent to wrong Email ID. " + rtn_email);
						}
					}
				}
				else if(onshore_rd == true)
				{
					if(BOFC == "HKGBB")
					{
						if(rtn_email.includes("cn.sx.tp.exp.cs@one-line.com") || rtn_email.includes("cn.sx.eu.exp.cs@one-line.com") || rtn_email.includes("cn.sx.ao.exp.cs@one-line.com") || rtn_email.includes("cn.sx.afla.exp.cs@one-line.com") || rtn_email.includes("cn.sx.exp.cs.processing@one-line.com") || rtn_email.includes("CN.SX.ESCALATE.EXP@one-line.com") || rtn_email.includes("gz.tp.cs@one-line.com") || rtn_email.includes("gz.eu.cs@one-line.com") || rtn_email.includes("gz.ao.cs@one-line.com") || rtn_email.includes("gz.afla.cs@one-line.com") || rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com") || rtn_email.includes("zs.tp.cs@one-line.com") || rtn_email.includes("zs.eu.cs@one-line.com") || rtn_email.includes("zs.ao.cs@one-line.com") || rtn_email.includes("zs.afla.cs@one-line.com") || rtn_email.includes("zs.rs.cs@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com"))
						{
							window.prompt("Email has been sent to wrong Email ID. " + rtn_email);
						}
					}
					else if(BOFC == "SZPBB")
					{
						if(rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.cs@one-line.com") || rtn_email.includes("hk.ao.cs@one-line.com") || rtn_email.includes("hk.afla.cs@one-line.com") || rtn_email.includes("hk.expcs.processing@one-line.com") || rtn_email.includes("HK.ESCALATE.EXP@one-line.com") || rtn_email.includes("gz.tp.cs@one-line.com") || rtn_email.includes("gz.eu.cs@one-line.com") || rtn_email.includes("gz.ao.cs@one-line.com") || rtn_email.includes("gz.afla.cs@one-line.com") || rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com") || rtn_email.includes("zs.tp.cs@one-line.com") || rtn_email.includes("zs.eu.cs@one-line.com") || rtn_email.includes("zs.ao.cs@one-line.com") || rtn_email.includes("zs.afla.cs@one-line.com") || rtn_email.includes("zs.rs.cs@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com") || rtn_email.includes("hk.ka.sales@one-line.com") || rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.csvc@one-line.com") || rtn_email.includes("hk.ao.csvc@one-line.com") || rtn_email.includes("hk.afla.csvc@one-line.com"))
						{
							window.prompt("Email has been sent to wrong Email ID. " + rtn_email);
						}
					}
					else if(BOFC == "CANBB")
					{
						if(rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.cs@one-line.com") || rtn_email.includes("hk.ao.cs@one-line.com") || rtn_email.includes("hk.afla.cs@one-line.com") || rtn_email.includes("hk.expcs.processing@one-line.com") || rtn_email.includes("HK.ESCALATE.EXP@one-line.com") || rtn_email.includes("cn.sx.tp.exp.cs@one-line.com") || rtn_email.includes("cn.sx.eu.exp.cs@one-line.com") || rtn_email.includes("cn.sx.ao.exp.cs@one-line.com") || rtn_email.includes("cn.sx.afla.exp.cs@one-line.com") || rtn_email.includes("cn.sx.exp.cs.processing@one-line.com") || rtn_email.includes("CN.SX.ESCALATE.EXP@one-line.com") || rtn_email.includes("zs.tp.cs@one-line.com") || rtn_email.includes("zs.eu.cs@one-line.com") || rtn_email.includes("zs.ao.cs@one-line.com") || rtn_email.includes("zs.afla.cs@one-line.com") || rtn_email.includes("zs.rs.cs@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com") || rtn_email.includes("hk.ka.sales@one-line.com") || rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.csvc@one-line.com") || rtn_email.includes("hk.ao.csvc@one-line.com") || rtn_email.includes("hk.afla.csvc@one-line.com"))
						{
							window.prompt("Email has been sent to wrong Email ID. " + rtn_email);
						}
					}
					else if(BOFC == "ZHOBB")
					{
						if(rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.cs@one-line.com") || rtn_email.includes("hk.ao.cs@one-line.com") || rtn_email.includes("hk.afla.cs@one-line.com") || rtn_email.includes("hk.expcs.processing@one-line.com") || rtn_email.includes("HK.ESCALATE.EXP@one-line.com") || rtn_email.includes("cn.sx.tp.exp.cs@one-line.com") || rtn_email.includes("cn.sx.eu.exp.cs@one-line.com") || rtn_email.includes("cn.sx.ao.exp.cs@one-line.com") || rtn_email.includes("cn.sx.afla.exp.cs@one-line.com") || rtn_email.includes("cn.sx.exp.cs.processing@one-line.com") || rtn_email.includes("CN.SX.ESCALATE.EXP@one-line.com") || rtn_email.includes("gz.tp.cs@one-line.com") || rtn_email.includes("gz.eu.cs@one-line.com") || rtn_email.includes("gz.ao.cs@one-line.com") || rtn_email.includes("gz.afla.cs@one-line.com") || rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com") || rtn_email.includes("hk.ka.sales@one-line.com") || rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.csvc@one-line.com") || rtn_email.includes("hk.ao.csvc@one-line.com") || rtn_email.includes("hk.afla.csvc@one-line.com"))
						{
							window.prompt("Email has been sent to wrong Email ID. " + rtn_email);
						}
					}
				}
			
			}
		}
	}
}*/

/*Removed
function PreventEscalationMail()
{
	var d = "";
	var BOFC = "";
	var rtn_email = "";
	var cust_rd = false;
	var email_subject = "";
	var email = "";
	var onshoreG_rd = false;
	var onshoreS_rd = false;
	var inputter_rd = false;
	var ratter_rd = false;
	var BLNo = "";
	
	if(document.querySelector("#form > div.page_title_area.clear > h2 > span")!= null)
	{
		d = document.querySelector("#form > div.page_title_area.clear > h2 > span").innerHTML;
		if(d == "OCPS : Return Message")
		{
			if(document.getElementsByName("rtn_to_usr_eml")[0].value != null)
			{
				rtn_email = document.getElementsByName("rtn_to_usr_eml")[0].value;
			}
			cust_rd = document.getElementsByName('ui_grp_cd')[3].checked;
			onshoreG_rd = document.getElementsByName('ui_grp_cd')[1].checked;
			onshoreS_rd = document.getElementsByName('ui_grp_cd')[0].checked;
			inputter_rd = document.getElementsByName('ui_grp_cd')[2].checked;
			ratter_rd = document.getElementsByName('ui_grp_cd')[4].checked;
			
			
			if(document.getElementsByName('eml_subj_ctnt')[0].value != null)
			{
				email_subject = document.getElementsByName('eml_subj_ctnt')[0].value;
				email = email_subject.split("-");
				BLNo = email[3].replace(" ","");
			}
			
			if(onshoreS_rd != false || onshoreG_rd != false || inputter_rd != false || cust_rd != false || ratter_rd != false)
			{
				if(rtn_email != "")
				{
					if(email_subject != "")
					{
						if(BLNo.substr(0,2) == "SZ")
						{
							BOFC = "SZPBB";
						}
						else if(BLNo.substr(0,2) == "HK")
						{
							BOFC = "HKGBB";
						}
						else if(BLNo.substr(0,2) == "CA")
						{
							BOFC = "CANBB"
						}
						else if(BLNo.substr(0,2) == "ZH")
						{
							BOFC = "ZHOBB";
						}
						
						if(cust_rd == true)
						{
							if(BOFC == "HKGBB")
							{
								if(rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com"))//rtn_email.includes("cn.sx.ons.exp@one-line.com") || 
								{
									window.prompt("Please re-check Email ID. " + rtn_email);
								}
							}
							else if(BOFC == "SZPBB")
							{
								if(rtn_email.includes("hk.ons.exp@one-line.com") || rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com"))
								{
									window.prompt("Please re-check Email ID. " + rtn_email);
								}
							}
							else if(BOFC == "CANBB")
							{
								if(rtn_email.includes("hk.ons.exp@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com"))//rtn_email.includes("cn.sx.ons.exp@one-line.com") || 
								{
									window.prompt("Please re-check Email ID. " + rtn_email);
								}
							}
							else if(BOFC == "ZHOBB")
							{
								if(rtn_email.includes("hk.ons.exp@one-line.com") || rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com"))//rtn_email.includes("cn.sx.ons.exp@one-line.com") || 
								{
									window.prompt("Please re-check Email ID. " + rtn_email);
								}
							}
						}
						else if(onshoreG_rd == true)
						{
							if(BOFC == "HKGBB")
							{
								if(rtn_email.includes("cn.sx.tp.exp.cs@one-line.com") || rtn_email.includes("cn.sx.eu.exp.cs@one-line.com") || rtn_email.includes("cn.sx.ao.exp.cs@one-line.com") || rtn_email.includes("cn.sx.afla.exp.cs@one-line.com") || rtn_email.includes("cn.sx.exp.cs.processing@one-line.com") || rtn_email.includes("CN.SX.ESCALATE.EXP@one-line.com") || rtn_email.includes("gz.tp.cs@one-line.com") || rtn_email.includes("gz.eu.cs@one-line.com") || rtn_email.includes("gz.ao.cs@one-line.com") || rtn_email.includes("gz.afla.cs@one-line.com") || rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com") || rtn_email.includes("zs.tp.cs@one-line.com") || rtn_email.includes("zs.eu.cs@one-line.com") || rtn_email.includes("zs.ao.cs@one-line.com") || rtn_email.includes("zs.afla.cs@one-line.com") || rtn_email.includes("zs.rs.cs@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com"))
								{
									window.prompt("Please re-check Email ID. " + rtn_email);
								}
							}
							else if(BOFC == "SZPBB")
							{
								if(rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.cs@one-line.com") || rtn_email.includes("hk.ao.cs@one-line.com") || rtn_email.includes("hk.afla.cs@one-line.com") || rtn_email.includes("hk.expcs.processing@one-line.com") || rtn_email.includes("HK.ESCALATE.EXP@one-line.com") || rtn_email.includes("gz.tp.cs@one-line.com") || rtn_email.includes("gz.eu.cs@one-line.com") || rtn_email.includes("gz.ao.cs@one-line.com") || rtn_email.includes("gz.afla.cs@one-line.com") || rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com") || rtn_email.includes("zs.tp.cs@one-line.com") || rtn_email.includes("zs.eu.cs@one-line.com") || rtn_email.includes("zs.ao.cs@one-line.com") || rtn_email.includes("zs.afla.cs@one-line.com") || rtn_email.includes("zs.rs.cs@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com") || rtn_email.includes("hk.ka.sales@one-line.com") || rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.csvc@one-line.com") || rtn_email.includes("hk.ao.csvc@one-line.com") || rtn_email.includes("hk.afla.csvc@one-line.com"))
								{
									window.prompt("Please re-check Email ID. " + rtn_email);
								}
							}
							else if(BOFC == "CANBB")
							{
								if(rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.cs@one-line.com") || rtn_email.includes("hk.ao.cs@one-line.com") || rtn_email.includes("hk.afla.cs@one-line.com") || rtn_email.includes("hk.expcs.processing@one-line.com") || rtn_email.includes("HK.ESCALATE.EXP@one-line.com") || rtn_email.includes("cn.sx.tp.exp.cs@one-line.com") || rtn_email.includes("cn.sx.eu.exp.cs@one-line.com") || rtn_email.includes("cn.sx.ao.exp.cs@one-line.com") || rtn_email.includes("cn.sx.afla.exp.cs@one-line.com") || rtn_email.includes("cn.sx.exp.cs.processing@one-line.com") || rtn_email.includes("CN.SX.ESCALATE.EXP@one-line.com") || rtn_email.includes("zs.tp.cs@one-line.com") || rtn_email.includes("zs.eu.cs@one-line.com") || rtn_email.includes("zs.ao.cs@one-line.com") || rtn_email.includes("zs.afla.cs@one-line.com") || rtn_email.includes("zs.rs.cs@one-line.com") || rtn_email.includes("cn.zs.escalate.exp@one-line.com") || rtn_email.includes("hk.ka.sales@one-line.com") || rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.csvc@one-line.com") || rtn_email.includes("hk.ao.csvc@one-line.com") || rtn_email.includes("hk.afla.csvc@one-line.com"))
								{
									window.prompt("Please re-check Email ID. " + rtn_email);
								}
							}
							else if(BOFC == "ZHOBB")
							{
								if(rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.cs@one-line.com") || rtn_email.includes("hk.ao.cs@one-line.com") || rtn_email.includes("hk.afla.cs@one-line.com") || rtn_email.includes("hk.expcs.processing@one-line.com") || rtn_email.includes("HK.ESCALATE.EXP@one-line.com") || rtn_email.includes("cn.sx.tp.exp.cs@one-line.com") || rtn_email.includes("cn.sx.eu.exp.cs@one-line.com") || rtn_email.includes("cn.sx.ao.exp.cs@one-line.com") || rtn_email.includes("cn.sx.afla.exp.cs@one-line.com") || rtn_email.includes("cn.sx.exp.cs.processing@one-line.com") || rtn_email.includes("CN.SX.ESCALATE.EXP@one-line.com") || rtn_email.includes("gz.tp.cs@one-line.com") || rtn_email.includes("gz.eu.cs@one-line.com") || rtn_email.includes("gz.ao.cs@one-line.com") || rtn_email.includes("gz.afla.cs@one-line.com") || rtn_email.includes("CN.GZ.ESCALATE.EXP@one-line.com") || rtn_email.includes("hk.ka.sales@one-line.com") || rtn_email.includes("hk.tp.csvc@one-line.com") || rtn_email.includes("hk.eu.csvc@one-line.com") || rtn_email.includes("hk.ao.csvc@one-line.com") || rtn_email.includes("hk.afla.csvc@one-line.com"))
								{
									window.prompt("Please re-check Email ID. " + rtn_email);
								}
							}
						}
					}
					else
					{
						window.alert("Please enter Subject-Line.");
					}
				}				
				else
				{
					window.alert("Please enter Email ID.");
				}
			}
			else
			{
				window.alert("Please select Return to.");
			}
		}
	}
}*/

/*Removed
function IndShipment(){

	var POD = document.getElementsByName("bkg_pod_cd")[0].value;//pod_cd
	var DEL = document.getElementsByName("bkg_del_cd")[0].value;//del_cd
	
	var POD_Start = POD.substr(0, 2);
	var DEL_Start = DEL.substr(0, 2);
	
	if(POD_Start == "IN" || DEL_Start == "IN")
	{
		alert("Importer - IEC#(IEC Code); GSTIN#(GSTINCODE); Email#(Email_id); is mandatory on BL image.");
	}
	
}*/

/*Removed
function ETD_Correction(){
	var VVD = document.getElementsByName("bkg_trunk_vvd")[0].value;
	var POR = document.getElementsByName("bkg_por_cd")[0].value;
	var POL = document.getElementsByName("bkg_pol_cd")[0].value;
	
	if(POR == "CNSHK" && POL == "CNSHK" && VVD =="RUST0917E")
	{
		alert("Link rate with 28-April-19 (except feeder BL)");
	}
	if(POR == "HKHKG" && POL == "HKHKG" && VVD =="RUST0917E")
	{
		alert("Link rate with 30-April-19 (except feeder BL)");
	}
	if(POR == "CNSHK" && POL == "CNSHK" && VVD =="REET0918E")
	{
		alert("Link rate with 5-May-19 (except feeder BL)");
	}
	if(POR == "HKHKG" && POL == "HKHKG" && VVD =="REET0918E")
	{
		alert("Link rate with 7-May-19 (except feeder BL)");
	}
}*/

/*Removed
function generate_table() 
{
  var POD = document.getElementsByName('frm_t10sheet1_pod_cd')[0].value;
  var SubPOD = POD.substring(0,2);
  console.log("Country is : " + SubPOD);
  var DEL = document.getElementsByName("frm_t10sheet1_del_cd")[0].value; 
  var SubDEL = DEL.substring(0,2);
  console.log("Country is : " + SubDEL);
  
  var cnty = POD.substring(0,2);
  console.log("Country is : " + cnty);
  
  if(window.confirm("Kindly update correct Freight Term / Payment office and Payer based on SI and D-SOP instruction.  \r\nSelect correct rate based on CMDT, NAC (booking) details."))
  {
	   
  } 
}*/

/*Removed
function CheckEurope()
{
	var DEL = document.getElementsByName("del_cd")[0].value; 
	var DEL_Start = DEL.substr(0, 2);
	var POD = document.getElementsByName('pod_cd')[0].value;
	var HSCod = POD.substr(0,2); 
	
	if(HSCod == "SN" || HSCod == "AL" || HSCod == "AD" || HSCod == "AT" || HSCod ==  "BY"  || HSCod == "BE" || HSCod == "BA" || HSCod == "BG"  || HSCod ==  "HR" || HSCod ==  "CY" || HSCod ==  "CZ" || HSCod == "DK" || HSCod == "EE" || HSCod == "FO" || HSCod == "FI" || HSCod == "FR" || HSCod == "DE" || HSCod == "GI"|| HSCod == "GR" || HSCod == "HU" || HSCod == "IS" || HSCod == "IE" || HSCod == "IM" || HSCod == "IT" || HSCod == "XK" || HSCod == "LV" || HSCod == "LI" || HSCod == "LT" || HSCod == "LU" || HSCod == "MK" || HSCod == "MT" || HSCod == "MD" || HSCod == "MC" || HSCod == "ME" || HSCod == "NL" || HSCod == "NO" || HSCod == "PL" || HSCod == "PT" || HSCod == "RO" || HSCod == "RU" || HSCod == "SM" || HSCod == "RS" || HSCod == "SK" || HSCod == "SI" || HSCod == "ES" || HSCod == "SE" || HSCod == "CH" || HSCod == "UA" || HSCod == "GB" || HSCod == "VA" )
	{
		if(window.confirm("HS Code Starting with 6908 is Invalid For Europe Customs."))
		{
			alert("If it is Staring with 6908 then Please Update Correct HS Code.");
		}
	}
}*/

/*Removed
function Rating()
{
	if(window.confirm("## Kindly follow below Instructions for Auto Rating \r\n 1. Check Booking Creation for NAC, If NAC is available select CMDT & A/Customer as per Booking NAC. \r\n 2. Select Rate as per NAC. \r\n 3. If no NAC, then select Rate as per cargo description. \r\n 4. If not found as per cargo description, then FAK Straight/ Consolidation. \r\n 5. If no rates as per above condition, then check Route details. \r\n 6. Then check Route / CMDT/Special Note (Lane/VVD/Validity/NAC/ICD/GOH). \r\n 7. Check Gross weight."))
	{
	  //alert("?");
	}
  
}*/

/*Removed
function Prohibited_CigaretteMnD()
{
	var pol = document.getElementsByName("pol_cd")[0].value;
	var custDesc = document.getElementsByName("cstms_desc")[0].value;
	var longDesc = document.getElementsByName("dg_cmdt_desc")[0].value;
	var marks = document.getElementsByName("mk_desc")[0].value;
	var pod = document.getElementsByName("pod_cd")[0].value;
	var del = document.getElementsByName("del_cd")[0].value;
	var flag = 0;
	
	if (pol == "HKHKG" )
	{
		if(custDesc.includes("HERBAL CIGARETTES") || custDesc.includes("ELECTRIC CIGARETTES") || custDesc.includes("ELECTRONIC CIGARETTES") || custDesc.includes("E-CIGARETTES") || custDesc.includes("E CIGARETTES") || custDesc.includes("HEATED TOBACCO"))
		{
			flag = 1;
		}
		else if(longDesc.includes("HERBAL CIGARETTES") || longDesc.includes("ELECTRIC CIGARETTES") || longDesc.includes("ELECTRONIC CIGARETTES") || longDesc.includes("E-CIGARETTES") || longDesc.includes("E CIGARETTES") || longDesc.includes("HEATED TOBACCO"))
		{
			flag = 1;
		}
		else if(marks.includes("HERBAL CIGARETTES") || marks.includes("ELECTRIC CIGARETTES") || marks.includes("ELECTRONIC CIGARETTES") || marks.includes("E-CIGARETTES") || marks.includes("E CIGARETTES") || marks.includes("HEATED TOBACCO"))
		{
			flag = 1;
		}
		
		if(flag == 1)
		{
			window.alert("Prohibited Commodity or HS Code found Kindly HOLD the BL for processing and escalate to the Onshore.(Except Cigarettes, Cigars and Tobacco)");
		}
	}
	if(pod.startsWith("EC") || del.startsWith("EC"))
	{
		if(marks.includes("PERSONAL EFFECT") || longDesc.includes("PERSONAL EFFECT") || custDesc.includes("PERSONAL EFFECT"))
		{
			window.alert("Hold the BL for processing and check with the destination team.");
			document.getElementById("btn_t8Save").disabled = true;
		}
		else
		{
			document.getElementById("btn_t8Save").disabled = false;
		}
	}
	if(marks.includes("PERSONAL EFFECT") || longDesc.includes("PERSONAL EFFECT") || custDesc.includes("PERSONAL EFFECT"))
	{
		alert("Except 991900 and 990500, other HS codes for Personal Effect shipments are not allowed");
	}
}*/

/*Removed
function Prohibited_CigarettesCM()
{
	var pol = document.getElementById("pol_cd").value;
	var hscode = "";
	var htscode = "";
	var ncm = "";
	var desc = "";
	var flag = 0;
	var pod = document.getElementsByName("pod_cd")[0].value;
	var del = document.getElementsByName("del_cd")[0].value;
	
	var cnt = document.querySelectorAll("#t9sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr	").length;
	
	if(pol == "HKHKG")
	{
	
		for(var i = 2; i<= cnt+1; i++)
		{
			try 
			{
				hscode = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[24]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
				htscode = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[21]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
				desc = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[18]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
				
				if(hscode == "240411" || hscode == "240412" || hscode == "240419" || htscode == "240411" || htscode == "240412" || htscode == "240419" || desc.includes("HERBAL CIGARETTES") || desc.includes("ELECTRIC CIGARETTES") || desc.includes("ELECTRONIC CIGARETTES") || desc.includes("E-CIGARETTES") || desc.includes("E CIGARETTES") || desc.includes("HEATED TOBACCO"))
				{
					flag = 1;
				}
				if(desc.includes("PERSONAL EFFECT") && (pod.startsWith("EC") || del.startsWith("EC")))
				{
					window.alert("Hold the BL for processing and check with the destination team.");
					document.getElementById("btn_t9Save").disabled = true;
				}
				else
				{
					document.getElementById("btn_t9Save").disabled = false;
				}
			}
			catch(err) 
			{
				//document.getElementById("demo").innerHTML = err.message;
			}
		}
	}	
	if(flag == 1)
	{
		window.alert("Prohibited Commodity or HS Code found Kindly HOLD the BL for processing and escalate to the Onshore.(Except Cigarettes, Cigars and Tobacco)");
	}
	
	
	for(var i = 2; i<= cnt+1; i++)
	{
		try 
		{
			ncm = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i +']/td[27]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			hscode = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[24]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			htscode = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[21]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			desc = document.evaluate('//*[@id="t9sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[' + i + ']/td[18]/div', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			
			if(desc.includes("PERSONAL EFFECT") && (hscode.startsWith("99") || htscode.startsWith("99") || ncm.startsWith("99")))
			{
				alert("Except 991900 and 990500, other HS codes for Personal Effect shipments are not allowed");
			}
		}
		catch(err) 
		{
			//document.getElementById("demo").innerHTML = err.message;
		}
	}
}*/

/*Removed
function MexicoShipment()
{
		var del = document.getElementsByName("del_cd")[0].value;
		
		if(del.startsWith("MX"))
		{
			alert("Please update Shipper/Consignee/Notify Party details as per Mexico Destination requirement");
		}
}*/

/*Removed
function readSI()
{
	//var RegExpression = /^[a-zA-Z\s]*$/; 
	let sicomment = prompt("Have you updated the correct BL type and BL issue place based on SI/ D-SOP instruction.")
	
	if (sicomment!= null)
	{
		if(sicomment.trim() != "")
		{
			
		}
		else
		{
			alert("Invalid Comment");
		}
	}
	else
	{
		alert("Invalid comment");
	}
	
	alert("Please check SI remarks or SOP for draft sending ID");
}*/

/*Removed
function cn_code_check()
{
	while(true)
	{
		let comment = prompt("All Customer Tab is checked as per SI and please enter Consignee Code in textbox!!");
		let pattern = /([a-zA-Z]{2}[0-9]{6})/;
		if(comment !=null)
		{
			if(comment.trim()!="")
			{
				if(comment.length !=8)
				{
					//alert(comment.length);
					alert("Invalid Consignee Code");
				}
				else
				{
					if(pattern.test(comment))
					{
						break;
					}
					else
					{
						alert("Invalid Consignee Code");
					}
				}
			}
			else
			{
				alert("Invalid  Consignee Code");
			}
		}
		else
		{
			alert("Invalid  Consignee Code");
		}
	}
}*/

/*Removed
function breakdown_popup()
{
	try
	{
		var pre = ['AT', 'BE', 'BG', 'BJ', 'CH', 'CY', 'CZ', 'DE', 'DK', 'EE', 'ES', 'FI', 'FR', 'GE', 'GR', 'HR', 'HU', 'IE', 'IT', 'LT', 'LV', 'MT', 'NL', 'NO', 'PL', 'PT', 'RO', 'SE', 'SI', 'SK'];
		var pod = document.getElementById('pod_cd').value.substring(0,2);
		var del = document.getElementById('del_cd').value.substring(0,2);
		
		for(var i = 0; i < pre.length; i++)
		{
			if(pod == pre[i] || del == pre[i])
			{
				alert('Breakdown required for multiple commodities');
			}
		}
	}
	catch(err)
	{
		
	}
}*/

/*Removed
function hold_keyword_MnD()
{
	try
	{
		var pol = document.getElementsByName("pol_cd")[0].value;
		var custDesc = document.getElementsByName("cstms_desc")[0].value;
		var longDesc = document.getElementsByName("dg_cmdt_desc")[0].value;
		var marks = document.getElementsByName("mk_desc")[0].value;
		var flag = 0;
		
		var arr = ["HYUNDAI SANTA CRUZ", "HYUNDAI SANTA FE", "SANTA FE HYBRID", "SANTA FE PLUG-IN HYBRID", "KIA CARNIVAL"];
		var s = "";
		
		for(var i = 0; i< arr.length; i++)
		{
			if(custDesc.includes(arr[i]) || longDesc.includes(arr[i]) || marks.includes(arr[i]))
			{
				s = s + arr[i] + ", ";
			}
		}
		
		if(s.length > 0)
		{
			s = s.substring(0,s.length-2);
		}
		
		if(s!= "")
		{
			alert("Please hold the bill for processing and escalate to the onshore team. - " + s);
			document.getElementById("btn_t8Save").disabled = true;
		}
		else
		{
			document.getElementById("btn_t8Save").disabled = false;
		}
	}
	catch(err)
	{
		
	}
}*/

/*Removed
function outside_CNEE_NP()
{
	try
	{
		var POD = document.getElementsByName("pod_cd")[0].value.substring(0,2);
		var DEL = document.getElementsByName("del_cd")[0].value.substring(0,2);
		var Consignee = document.getElementsByName("cn_cust_cnt_cd")[0].value;
		var Notify = document.getElementsByName("nf_cust_cnt_cd")[0].value;
		
		if(POD == "AU" && DEL == "AU")
		{
			if(Consignee != "AU" && Notify != "AU")
			{
				alert("Outside consignee and notify is not allowed for Australia");
			}
		}
		else if(POD == "NZ" && DEL == "NZ")
		{
			if(Consignee != "NZ" && Notify != "NZ")
			{
				alert("Outside consignee and notify is not allowed for New Zealand");
			}
		}
	}
	catch(err)
	{
		
	}
}*/

/*Removed
function CorrectApplicationDate()
{
	try
	{
		var vvd = document.getElementById("bkg_trunk_vvd").value;
		var por = document.getElementById("bkg_por_cd").value;
		var pol = document.getElementById("bkg_pol_cd").value;
		
		if(vvd == "YNDT0093W" && por == "CNSHK" && pol == "CNSHK")
		{
			alert("Kindly check and update correct application date as 2024-10-01. For Feeder BL update Feeder Application Date");
		}
		
		if(vvd == "OTIT0065W" && por == "CNSHK" && pol == "CNSHK")
		{
			alert("Kindly check and update correct application date as 2024-09-29. For Feeder BL update Feeder Application Date");
		}
		
		if(vvd == "ELZT0056W" && por == "CNSHK" && pol == "CNSHK")
		{
			alert("Kindly check and update correct application date as 2024-09-29. For Feeder BL update Feeder Application Date");
		}
	}
	catch(err)
	{
		
	}
}*/

/*Removed 
function CPFIT101217()
{
	try{
		var shipper = document.getElementsByName("sh_cust_cnt_cd")[0].value + document.getElementsByName("sh_cust_seq")[0].value;
		var consignee = document.getElementsByName("cn_cust_cnt_cd")[0].value + document.getElementsByName("cn_cust_seq")[0].value;
		var notify = document.getElementsByName("nf_cust_cnt_cd")[0].value + document.getElementsByName("nf_cust_seq")[0].value;
		var anotify = document.getElementsByName("an_cust_cnt_cd")[0].value + document.getElementsByName("an_cust_seq")[0].value;
		var forwarder = document.getElementsByName("ff_cust_cnt_cd")[0].value + document.getElementsByName("ff_cust_seq")[0].value;
		
		if(shipper == "IT101217" || consignee == "IT101217" || notify == "IT101217" || anotify == "IT101217" || forwarder == "IT101217")
		{
			alert("Update Notify party details as per eSI: IT101217");
		}
	}catch(err){ }
}*/

/*Removed
function checkMarks()
{
	try
	{
		var marks = document.getElementsByName("mk_desc")[0].value;
		
		if(marks.trim() == "")
		{
			alert("Missing marks in M&D tab");
		}
	}catch(err){ }
}*/





