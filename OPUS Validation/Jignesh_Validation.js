var consignee_name = window.localStorage.getItem('consigneename');
var shipper_name = window.localStorage.getItem('shippername');
var contact_party = window.localStorage.getItem('contactname');
var forwarder_name = window.localStorage.getItem('forwardername');
//var Global = window.localStorage.getItem('');

//BKG Creation Tab Variables Start here
var BK_bkg_no = window.localStorage.getItem('bkg_no');
var BK_bl_no = window.localStorage.getItem('bl_no');
var Bk_mot_no = window.localStorage.getItem('mot_no');
var Bk_scac_cd = window.localStorage.getItem('scac_cd');
var Bk_sc_no = window.localStorage.getItem('sc_no');
var Bk_bkg_sts_cd = window.localStorage.getItem('bkg_sts_cd');
var BK_rfa_no = window.localStorage.getItem('rfa_no');
var BK_cmdt_cd = window.localStorage.getItem('cmdt_cd');
var BK_bkg_ctrl_pty_cust_cnt_cd = window.localStorage.getItem('bkg_ctrl_pty_cust_cnt_cd');
var BK_bkg_ctrl_pty_cust_seq = window.localStorage.getItem('bkg_ctrl_pty_cust_seq');
var BK_dcgo_flg = window.localStorage.getItem('dcgo_flg');
var BK_auth_cd = window.localStorage.getItem('auth_cd');
var BK_rc_flg = window.localStorage.getItem('rc_flg');

var BK_s_cust_nm = window.localStorage.getItem('s_cust_nm');  // Shipper Name
var BK_FW = window.localStorage.getItem('');
//var BK_f_cust_nm = window.localStorage.getItem('f_cust_nm'); // Forwarder Name
//var BK_FWDRName = window.localStorage.getItem('');
//var BK_c_cust_nm = window.localStorage.getItem('c_cust_nm'); // Customer Name
//var BK_CustomerName = window.localStorage.getItem('');
//var BK_bkg_ctrl_pty_cust_nm = window.localStorage.getItem('bkg_ctrl_pty_cust_nm'); // CNPT Name
//var BK_CNPTName = window.localStorage.getItem('');

//BKG Creation Tab Variables End here

//Customers Tab Variables Start here
var cust_shipper = window.localStorage.getItem('shipper');
var cust_consignee = window.localStorage.getItem('consignee');
var cust_notify = window.localStorage.getItem('notify');
var cust_anotify = window.localStorage.getItem('anotify');
var cust_fforward = window.localStorage.getItem('fforward');
var cust_fforwardref = window.localStorage.getItem('fforwardref');
var cust_expref = window.localStorage.getItem('expref');

var Cust_sh_cust_cnt_cd = window.localStorage.getItem('sh_cust_cnt_cd');
var Cust_sh_cust_seq = window.localStorage.getItem('sh_cust_seq');
var Cust_cn_cust_cnt_cd = window.localStorage.getItem('cn_cust_cnt_cd');
var Cust_cn_cust_seq = window.localStorage.getItem('cn_cust_seq');
var Cust_nf_cust_cnt_cd = window.localStorage.getItem('nf_cust_cnt_cd');
var Cust_nf_cust_seq = window.localStorage.getItem('nf_cust_seq');
var Cust_ff_cust_cnt_cd = window.localStorage.getItem('ff_cust_cnt_cd');
var Cust_ff_cust_seq = window.localStorage.getItem('ff_cust_seq');
var Cust_an_cust_cnt_cd = window.localStorage.getItem('an_cust_cnt_cd');
var Cust_an_cust_seq = window.localStorage.getItem('an_cust_seq');

var Cust_ex_cust_nm = window.localStorage.getItem('ex_cust_nm');
var Cust_ff_cust_lgl_eng_nm = window.localStorage.getItem('ff_cust_lgl_eng_nm');
var email = window.localStorage.getItem('email');
//Customers Tab Variables End here

//MD Tab Variables Start here
var MD_imp_shpr_tax_no = window.localStorage.getItem('imp_shpr_tax_no');  // textbox
var MD_imp_cnt_cd = window.localStorage.getItem('imp_cnt_cd'); // combo box
var MD_mk_desc_prn_flg = window.localStorage.getItem('mk_desc_prn_flg'); // M&D checkbox 
var MD_mf_desc_prn_flg = window.localStorage.getItem('mf_desc_prn_flg');
var MD_pck_qty = window.localStorage.getItem('pck_qty');
var MD_pck_tp_cd = window.localStorage.getItem('pck_tp_cd');
var MD_act_wgt = window.localStorage.getItem('act_wgt');
var MD_wgt_ut_cd = window.localStorage.getItem('wgt_ut_cd');
var MD_meas_qty = window.localStorage.getItem('meas_qty');
var MD_meas_ut_cd = window.localStorage.getItem('meas_ut_cd');
var MD_frt_term_cd = window.localStorage.getItem('frt_term_cd');
var MD_cstms_desc = window.localStorage.getItem('cstms_desc');
var MD_mk_desc = window.localStorage.getItem('mk_desc');
var MD_pck_cmdt_desc = window.localStorage.getItem('pck_cmdt_desc');
var MD_cntr_cmdt_desc = window.localStorage.getItem('cntr_cmdt_desc');
var MD_dg_cmdt_desc = window.localStorage.getItem('dg_cmdt_desc');
var MD_btn_copy = window.localStorage.getItem('btn_copy');
var MD_imp_cnee_tax_no = window.localStorage.getItem('imp_cnee_tax_no');
var MD_imp_ntfy_tax_no = window.localStorage.getItem('imp_ntfy_tax_no');
//MD Tab Variables End here

// CM Tab Variables Start here
var CM_btn_t9AllConfirm = window.localStorage.getItem('btn_t9AllConfirm');
var CM_btn_t9AllRelease = window.localStorage.getItem('btn_t9AllRelease');
var click = window.localStorage.getItem(0);
// CM Tab Variables End here

// Charge Tab Variables Start here
var CHRG_TOTAL_PPD = window.localStorage.getItem('TOTAL_PPD');
var CHRG_frm_p_t10sheet3_ofc_cd = window.localStorage.getItem('frm_p_t10sheet3_ofc_cd');
var CHRG_frm_p_t10sheet3_cnt_cd = window.localStorage.getItem('frm_p_t10sheet3_cnt_cd');
var CHRG_frm_p_t10sheet3_cust_seq = window.localStorage.getItem('frm_p_t10sheet3_cust_seq')
var CHRG_TOTAL_3rdPPD = window.localStorage.getItem('TOTAL_3rdPPD');
var CHRG_select_3rdPPD = window.localStorage.getItem('select_3rdPPD');
var CHRG_frm_t10sheet1_rt_aply_dt = window.localStorage.getItem('frm_t10sheet1_rt_aply_dt');
var CHRG_frm_t10sheet1_sc_no1 = window.localStorage.getItem('frm_t10sheet1_sc_no1');
var CHRG_frt_term_cd_text = window.localStorage.getItem('frt_term_cd_text');

//var CHRG_frm_p_t10sheet3_cust_seq = window.localStorage.getItem('frm_p_t10sheet3_cust_seq')
// Charge Tab Variables End here


//BL ISSue Tab Variables Start here
var BL_bl_ready_type_text = window.localStorage.getItem('bl_ready_type_text');
var BL_frm_t11sheet1_por_name = window.localStorage.getItem('frm_t11sheet1_por_name');
var BL_frm_t11sheet1_pol_name = window.localStorage.getItem('frm_t11sheet1_pol_name');
var BL_frm_t11sheet1_pod_name = window.localStorage.getItem('frm_t11sheet1_pod_name');
var BL_frm_t11sheet1_del_name = window.localStorage.getItem('frm_t11sheet1_del_name');
var BL_frm_t11sheet1_obl_iss_rmk = window.localStorage.getItem('frm_t11sheet1_obl_iss_rmk');
// BL Issue Tab Variables End here


//var css = 'table td:hover{ background-color: #f386e1 }';
//var style = document.createElement('style');
//if (style.styleSheet) {
//    style.styleSheet.cssText = css;
//} else {
//    style.appendChild(document.createTextNode(css));
//}
//document.getElementsByTagName('head')[0].appendChild(style);



//var z = document.body;
//document.body.classList.add('showonhover');

//var z = document.body;
//document.body.classList.add('hovertext');


function Update_Variables() {

    //var txtboxFooValue = $("#txtboxFooExampleLocalStorage").val();
    //localStorage.setItem('LocalStorageKey', txtboxFooValue);
    //consignee_name = $("[name='c_cust_nm']").val();
	
	/*
	consignee_name = $("#ff_cust_lgl_eng_nm").val();
    shipper_name = $("[name='s_cust_nm']").val();
    contact_party = $("[name='bkg_ctrl_pty_cust_nm']").val();
    forwarder_name = $("[name='f_cust_nm']").val();
	
	Cust_ff_cust_lgl_eng_nm = $("#ff_cust_lgl_eng_nm").val();
	email = $("[name='email']").val();
    //Global = $("[name='c_cust_nm']").val();

    BK_bkg_no = $("[name='bkg_no']").val();
    BK_bl_no = $("[name='bl_no']").val();
    Bk_mot_no = $("[name='mot_no']").val();
    Bk_scac_cd = $("[name='scac_cd']").val();	
    Bk_sc_no = $("[name='sc_no']").val();
    Bk_bkg_sts_cd = $("[name='bkg_sts_cd']").val();
    BK_rfa_no = $("[name='rfa_no']").val();
    Bk_cmdt_cd = $("[name='cmdt_cd']").val();
    BK_bkg_ctrl_pty_cust_cnt_cd = $("[name='bkg_ctrl_pty_cust_cnt_cd']").val();
    BK_bkg_ctrl_pty_cust_seq = $("[name='bkg_ctrl_pty_cust_seq']").val();
    BK_dcgo_flg = $("[name='dcgo_flg']").val();
    BK_auth_cd = $("[name='auth_cd']").val();
    BK_rc_flg = $("[name='rc_flg']").val();

    //BK_s_cust_nm = $("[name='s_cust_nm']").val();
    //BK_c_cust_nm = $("[name='c_cust_nm']").val();
    //BK_f_cust_nm = $("[name='f_cust_nm']").val();
    //BK_bkg_ctrl_pty_cust_nm = $("[name='bkg_ctrl_pty_cust_nm']").val();

    //BK Creation End here

    // Customers Tab Variables Start here
    Cust_sh_cust_cnt_cd = $("[name='sh_cust_cnt_cd']").val();
    Cust_sh_cust_seq = $("[name='sh_cust_seq']").val();
    Cust_cn_cust_cnt_cd = $("[name='cn_cust_cnt_cd']").val();
    Cust_cn_cust_seq = $("[name='cn_cust_seq']").val();
    Cust_nf_cust_cnt_cd = $("[name='nf_cust_cnt_cd']").val();
    Cust_nf_cust_seq = $("[name='nf_cust_seq']").val();
    Cust_ff_cust_cnt_cd = $("[name='ff_cust_cnt_cd']").val();
    Cust_ff_cust_seq = $("[name='ff_cust_seq']").val();
    Cust_an_cust_cnt_cd = $("[name='an_cust_cnt_cd']").val();
    Cust_an_cust_seq = $("[name='an_cust_seq']").val();

    Cust_ex_cust_nm = $("[name='ex_cust_nm']").val();
    // Customers Tab Variables End here


    //MD TAB Variables
    MD_imp_cnt_cd = $("[name='imp_cnt_cd']").val();
    MD_imp_shpr_tax_no = $("[name='imp_shpr_tax_no']").val();
    MD_mk_desc_prn_flg = $("[name='mk_desc_prn_flg']").val();
    MD_mf_desc_prn_flg = $("[name='mf_desc_prn_flg']").val();

    MD_pck_qty = $("[name='pck_qty']").val();
    MD_pck_tp_cd = $("[name='pck_tp_cd']").val();
    MD_act_wgt = $("[name='act_wgt']").val();
    MD_wgt_ut_cd = $("[name='wgt_ut_cd']").val();
    MD_meas_qty = $("[name='meas_qty']").val();
    MD_meas_ut_cd = $("[name='meas_ut_cd']").val();
    MD_frt_term_cd = $("[name='frt_term_cd']").val();
    MD_cstms_desc = $("[name='cstms_desc']").val();
    MD_mk_desc = $("[name='mk_desc']").val();

    MD_dg_cmdt_desc = $("[name='dg_cmdt_desc']").val();
    MD_pck_cmdt_desc = $("[name='pck_cmdt_desc']").val();
    MD_cntr_cmdt_desc = $("[name='cntr_cmdt_desc']").val();
    MD_btn_copy = $("[name='btn_copy']").val();
    MD_imp_cnee_tax_no = $("[name='imp_cnee_tax_no']").val();
    MD_imp_ntfy_tax_no = $("[name='imp_ntfy_tax_no']").val();

    //End MD TAB Variables


    // CM Tab Variables Start here
    CM_btn_t9AllConfirm = $("[name='btn_t9AllConfirm']").val();
    btn_t9AllRelease = $("[name='btn_t9AllRelease']").val();
    // CM Tab Variables End here

    // Start Charge Variables
    CHRG_TOTAL_PPD = $("[name='TOTAL_PPD']").val();
    CHRG_frm_p_t10sheet3_ofc_cd = $("[name='frm_p_t10sheet3_ofc_cd']").val();
    CHRG_frm_p_t10sheet3_cnt_cd = $("[name='frm_p_t10sheet3_cnt_cd']").val();
    CHRG_frm_p_t10sheet3_cust_seq = $("[name='frm_p_t10sheet3_cust_seq']").val();

    CHRG_TOTAL_3rdPPD = $("[name='TOTAL_3rdPPD']").val();
    CHRG_select_3rdPPD = $("[name='select_3rdPPD']").val();


    CHRG_frm_t10sheet1_rt_aply_dt = $("[name='frm_t10sheet1_rt_aply_dt']").val();
    CHRG_frm_t10sheet1_sc_no1 = $("[name='frm_t10sheet1_sc_no1']").val();
    CHRG_frt_term_cd_text = $("[name='frt_term_cd_text']").val();
    // End Charge var

    // BL Issue Tab Start
    BL_bl_ready_type_text = $("[name='bl_ready_type_text']").val();

    BL_frm_t11sheet1_por_name = $("[name='frm_t11sheet1_por_name']").val();
    BL_frm_t11sheet1_pol_name = $("[name='frm_t11sheet1_pol_name']").val();
    BL_frm_t11sheet1_pod_name = $("[name='frm_t11sheet1_pod_name']").val();
    BL_frm_t11sheet1_del_name = $("[name='frm_t11sheet1_del_name']").val();
    BL_frm_t11sheet1_obl_iss_rmk = $("[name='frm_t11sheet1_obl_iss_rmk']").val();
    // BL Issue Tab End

    if (consignee_name != "" || consignee_name != null) {
        window.localStorage.setItem('consigneename', consignee_name);
    }
    if (shipper_name != "" || shipper_name != null) {
        window.localStorage.setItem('shippername', shipper_name);
    }
    if (contact_party != "" || contact_party != null) {
        window.localStorage.setItem('contactname', contact_party);
    }
    if (forwarder_name != "" || forwarder_name != null) {
        window.localStorage.setItem('forwardername', forwarder_name);
    }

	if(Cust_ff_cust_lgl_eng_nm != "" || Cust_ff_cust_lgl_eng_nm != null)
	{
		window.localStorage.setItem('ff_cust_lgl_eng_nm', Cust_ff_cust_lgl_eng_nm);
	}
    // Start of BK Tab Variables
    if (BK_bkg_no != "" || BK_bkg_no != null) {
        window.localStorage.setItem('bkg_no', BK_bkg_no);
    }

    if (BK_bl_no != "" || BK_bl_no != null) {
        window.localStorage.setItem('bl_no', BK_bl_no);
    }
    if (Bk_scac_cd != "" || Bk_scac_cd != null) {
        window.localStorage.setItem('scac_cd', Bk_scac_cd);
    }

    if (Bk_sc_no != "" || Bk_sc_no != null) {
        window.localStorage.setItem('sc_no', Bk_sc_no);
    }

    if (Bk_bkg_sts_cd != "" || Bk_bkg_sts_cd != null) {
        window.localStorage.setItem('bkg_sts_cd', Bk_bkg_sts_cd);
    }

    if (BK_rfa_no != "" || BK_rfa_no != null) {
        window.localStorage.setItem('rfa_no', BK_rfa_no);
    }

    if (BK_cmdt_cd != "" || BK_cmdt_cd != null) {
        window.localStorage.setItem('cmdt_cd', BK_cmdt_cd);
    }

    if (BK_bkg_ctrl_pty_cust_cnt_cd != "" || BK_bkg_ctrl_pty_cust_cnt_cd != null) {
        window.localStorage.setItem('bkg_ctrl_pty_cust_cnt_cd', BK_bkg_ctrl_pty_cust_cnt_cd);
    }

    if (BK_bkg_ctrl_pty_cust_seq != "" || BK_bkg_ctrl_pty_cust_seq != null) {
        window.localStorage.setItem('bkg_ctrl_pty_cust_seq', BK_bkg_ctrl_pty_cust_seq);
    }

    if (BK_dcgo_flg != "" || BK_dcgo_flg != null) {
        window.localStorage.setItem('dcgo_flg', BK_dcgo_flg);
    }

    if (BK_auth_cd != "" || BK_auth_cd != null) {
        window.localStorage.setItem('auth_cd', BK_auth_cd);
    }

    if (BK_rc_flg != "" || BK_rc_flg != null) {
        window.localStorage.setItem('rc_flg', BK_rc_flg);
    }

    //if (BK_s_cust_nm != "" || BK_s_cust_nm != null) {
    //    window.localStorage.setItem('s_cust_nm', BK_s_cust_nm);
    //}
    //if (BK_f_cust_nm != "" || BK_f_cust_nm != null) {
    //    window.localStorage.setItem('f_cust_nm', BK_f_cust_nm);
    //}
    //if (BK_c_cust_nm != "" || BK_c_cust_nm != null) {
    //    window.localStorage.setItem('c_cust_nm', BK_c_cust_nm);
    //}
    //if (BK_bkg_ctrl_pty_cust_nm != "" || BK_bkg_ctrl_pty_cust_nm != null) {
    //    window.localStorage.setItem('bkg_ctrl_pty_cust_nm', BK_bkg_ctrl_pty_cust_nm);
    //}

    // End of BK Tab Variables


    // Customers Tab Set Variables Start here

    if (Cust_sh_cust_cnt_cd != "" || Cust_sh_cust_cnt_cd != null) {
        window.localStorage.setItem('sh_cust_cnt_cd', Cust_sh_cust_cnt_cd);
    }
    if (Cust_sh_cust_seq != "" || Cust_sh_cust_seq != null) {
        window.localStorage.setItem('sh_cust_seq', Cust_sh_cust_seq);
    }
    if (Cust_cn_cust_cnt_cd != "" || Cust_cn_cust_cnt_cd != null) {
        window.localStorage.setItem('cn_cust_cnt_cd', Cust_cn_cust_cnt_cd);
    }
    if (Cust_cn_cust_seq != "" || Cust_cn_cust_seq != null) {
        window.localStorage.setItem('cn_cust_seq', Cust_cn_cust_seq);
    }
    if (Cust_nf_cust_cnt_cd != "" || Cust_nf_cust_cnt_cd != null) {
        window.localStorage.setItem('nf_cust_cnt_cd', Cust_nf_cust_cnt_cd);
    }
    if (Cust_nf_cust_seq != "" || Cust_nf_cust_seq != null) {
        window.localStorage.setItem('nf_cust_seq', Cust_nf_cust_seq);
    }
    if (Cust_ff_cust_cnt_cd != "" || Cust_ff_cust_cnt_cd != null) {
        window.localStorage.setItem('ff_cust_cnt_cd', Cust_ff_cust_cnt_cd);
    }
    if (Cust_ff_cust_seq != "" || Cust_ff_cust_seq != null) {
        window.localStorage.setItem('ff_cust_seq', Cust_ff_cust_seq);
    }
    if (Cust_an_cust_cnt_cd != "" || Cust_an_cust_cnt_cd != null) {
        window.localStorage.setItem('an_cust_cnt_cd', Cust_an_cust_cnt_cd);
    }
    if (Cust_an_cust_seq != "" || Cust_an_cust_seq != null) {
        window.localStorage.setItem('an_cust_seq', Cust_an_cust_seq);
    }

    if (Cust_ex_cust_nm != "" || Cust_ex_cust_nm != null) {
        window.localStorage.setItem('ex_cust_nm', Cust_ex_cust_nm);
    }
	
    if(email != "" || email != null)
    {
		window.localStorage.setItem('email', email );
    }
	
    // Customers Tab Set Variables End here


    //MD TAB Variables
    if (MD_imp_shpr_tax_no != "" || MD_imp_shpr_tax_no != null) {
        window.localStorage.setItem('imp_shpr_tax_no', MD_imp_shpr_tax_no);
    }

    if (MD_imp_cnt_cd != "" || MD_imp_cnt_cd != null) {
        window.localStorage.setItem('imp_cnt_cd', MD_imp_cnt_cd);
    }

    if (MD_dg_cmdt_desc != "" || MD_dg_cmdt_desc != null) {
        window.localStorage.setItem('dg_cmdt_desc', MD_dg_cmdt_desc);
    }

    if (MD_pck_cmdt_desc != "" || MD_pck_cmdt_desc != null) {
        window.localStorage.setItem('pck_cmdt_desc', MD_pck_cmdt_desc);
    }

    if (MD_cntr_cmdt_desc != "" || MD_cntr_cmdt_desc != null) {
        window.localStorage.setItem('cntr_cmdt_desc', MD_cntr_cmdt_desc);
    }

    if (MD_pck_qty != "" || MD_pck_qty != null) {
        window.localStorage.setItem('pck_qty', MD_pck_qty);
    }
    if (MD_pck_tp_cd != "" || MD_pck_tp_cd != null) {
        window.localStorage.setItem('pck_tp_cd', MD_pck_tp_cd);
    }
    if (MD_act_wgt != "" || MD_act_wgt != null) {
        window.localStorage.setItem('act_wgt', MD_act_wgt);
    }
    if (MD_wgt_ut_cd != "" || MD_wgt_ut_cd != null) {
        window.localStorage.setItem('wgt_ut_cd', MD_wgt_ut_cd);
    }
    if (MD_meas_qty != "" || MD_meas_qty != null) {
        window.localStorage.setItem('meas_qty', MD_meas_qty);
    }
    if (MD_meas_ut_cd != "" || MD_meas_ut_cd != null) {
        window.localStorage.setItem('meas_ut_cd', MD_meas_ut_cd);
    }
    if (MD_frt_term_cd != "" || MD_frt_term_cd != null) {
        window.localStorage.setItem('frt_term_cd', MD_frt_term_cd);
    }
    if (MD_cstms_desc != "" || MD_cstms_desc != null) {
        window.localStorage.setItem('cstms_desc', MD_cstms_desc);
    }
    if (MD_mk_desc != "" || MD_mk_desc != null) {
        window.localStorage.setItem('mk_desc', MD_mk_desc);
    }
    if (MD_btn_copy != "" || MD_btn_copy != null) {
        window.localStorage.setItem('btn_copy', MD_btn_copy);
    }
    if (MD_imp_cnee_tax_no != "" || MD_imp_cnee_tax_no != null) {
        window.localStorage.setItem('imp_cnee_tax_no', MD_imp_cnee_tax_no);
    }
    if (MD_imp_ntfy_tax_no != "" || MD_imp_ntfy_tax_no != null) {
        window.localStorage.setItem('imp_ntfy_tax_no', MD_imp_ntfy_tax_no);
    }
    //

    // CM Tab Variables Start here
    if (CM_btn_t9AllConfirm != "" || CM_btn_t9AllConfirm != null) {
        window.localStorage.setItem('btn_t9AllConfirm', CM_btn_t9AllConfirm);
    }
    if (CM_btn_t9AllRelease != "" || CM_btn_t9AllRelease != null) {
        window.localStorage.setItem('btn_t9AllRelease', CM_btn_t9AllRelease);
    }
    // CM Tab Variables End here


    // Start Charge Variables
    if (CHRG_TOTAL_PPD != "" || CHRG_TOTAL_PPD != null) {
        window.localStorage.setItem('TOTAL_PPD', CHRG_TOTAL_PPD);
    }

    if (CHRG_frm_p_t10sheet3_ofc_cd != "" || CHRG_frm_p_t10sheet3_ofc_cd != null) {
        window.localStorage.setItem('frm_p_t10sheet3_ofc_cd', CHRG_frm_p_t10sheet3_ofc_cd);
    }
    if (CHRG_frm_p_t10sheet3_cnt_cd != "" || CHRG_frm_p_t10sheet3_cnt_cd != null) {
        window.localStorage.setItem('frm_p_t10sheet3_cnt_cd', CHRG_frm_p_t10sheet3_cnt_cd);
    }
    if (CHRG_frm_p_t10sheet3_cust_seq != "" || CHRG_frm_p_t10sheet3_cust_seq != null) {
        window.localStorage.setItem('frm_p_t10sheet3_cust_seq', CHRG_frm_p_t10sheet3_cust_seq);
    }
    if (CHRG_TOTAL_3rdPPD != "" || CHRG_TOTAL_3rdPPD != null) {
        window.localStorage.setItem('TOTAL_3rdPPD', CHRG_TOTAL_3rdPPD);
    }
    if (CHRG_select_3rdPPD != "" || CHRG_select_3rdPPD != null) {
        window.localStorage.setItem('select_3rdPPD', CHRG_select_3rdPPD);
    }

    if (CHRG_frm_t10sheet1_rt_aply_dt != "" || CHRG_frm_t10sheet1_rt_aply_dt != null) {
        window.localStorage.setItem('frm_t10sheet1_rt_aply_dt', CHRG_frm_t10sheet1_rt_aply_dt);
    }
    if (CHRG_frm_t10sheet1_sc_no1 != "" || CHRG_frm_t10sheet1_sc_no1 != null) {
        window.localStorage.setItem('frm_t10sheet1_sc_no1', CHRG_frm_t10sheet1_sc_no1);
    }
    if (CHRG_frt_term_cd_text != "" || CHRG_frt_term_cd_text != null) {
        window.localStorage.setItem('frt_term_cd_text', CHRG_frt_term_cd_text);
    }

    // End Charge var

    // BL Issue Variables Start here
    if (BL_bl_ready_type_text != "" || BL_bl_ready_type_text != null) {
        window.localStorage.setItem('bl_ready_type_text', BL_bl_ready_type_text);
    }
    if (BL_frm_t11sheet1_por_name != "" || BL_frm_t11sheet1_por_name != null) {
        window.localStorage.setItem('frm_t11sheet1_por_name', BL_frm_t11sheet1_por_name);
    }
    if (BL_frm_t11sheet1_pol_name != "" || BL_frm_t11sheet1_pol_name != null) {
        window.localStorage.setItem('frm_t11sheet1_pol_name', BL_frm_t11sheet1_pol_name);
    }
    if (BL_frm_t11sheet1_pod_name != "" || BL_frm_t11sheet1_pod_name != null) {
        window.localStorage.setItem('frm_t11sheet1_pod_name', BL_frm_t11sheet1_pod_name);
    }
    if (BL_frm_t11sheet1_del_name != "" || BL_frm_t11sheet1_del_name != null) {
        window.localStorage.setItem('frm_t11sheet1_del_name', BL_frm_t11sheet1_del_name);
    }
    if (frm_t11sheet1_obl_iss_rmk != "" || frm_t11sheet1_obl_iss_rmk != null) {
        window.localStorage.setItem('t11sheet1_obl_iss_rmk', frm_t11sheet1_obl_iss_rmk);
    }

	*/
	
	
	
    // BL Issue Variables End here

    //document.getElementsByName('c_cust_nm')[0].value = null;
    //window.localStorage.setItem('c_cust_nm', document.getElementsByName('c_cust_nm')[0].value);
    //document.getElementById('box1').value = 0;

    //// Customer Name / CNPT Name / Forwarder Name / 

    //consignee_name = document.getElementsByName('c_cust_nm')[0].value;
    //window.localStorage.setItem('c_cust_nm', consignee_name);

}

function Check_Validation() {

    //var xhr = new XMLHttpRequest();
    //xhr.open("POST", "Default2.aspx", true);
    //xhr.send("id= Hello...");

    //consignee_name = window.localStorage.getItem('consigneename');
    //console.log('consigne ' + consignee_name);

    //BK_bl_no = document.getElementById('bl_no').value;
    //if (BK_bl_no == "") {
    //    document.getElementById('bl_no').style.backgroundColor = "#f1a9f3";
    //}
    //else {
    //    document.getElementById('bl_no').style.backgroundColor = "";
    //}
    // Start of Booking Validation here
    // var usa_cstms_file_cd_text = document.getElementById('usa_cstms_file_cd_text').value;
	// if (usa_cstms_file_cd_text == "") {
        // document.getElementById('usa_cstms_file_cd_text').style.backgroundColor = "#f1a9f3";
    // }
    // else {
        // document.getElementById('usa_cstms_file_cd_text').style.backgroundColor = "";
    // }
	
    Bk_mot_no = document.getElementById('mot_no').value;
    if (Bk_mot_no == "") {
        document.getElementById('mot_no').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('mot_no').style.backgroundColor = "";
    }

    Bk_scac_cd = document.getElementById('scac_cd').value;
    if (Bk_scac_cd == "") {
        document.getElementById('scac_cd').style.backgroundColor = "#f1a9f3";
    }

    Bk_sc_no = document.getElementById('sc_no').value;
    if (Bk_sc_no == "") {
        document.getElementById('sc_no').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('sc_no').style.backgroundColor = "";
    }

    var edi_hld_flg = document.getElementById('edi_hld_flg').value;
    if (form.edi_hld_flg.checked) {
        document.getElementById("edi_hld_flg").style.outline = '';
    }
    else {
        document.getElementById("edi_hld_flg").style.outline = '2px solid #F00';
    }

    Bk_bkg_sts_cd = document.getElementsByName('bkg_sts_cd')[0].value;
    if (Bk_bkg_sts_cd == "") {
        document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = "";
    }

    BK_rfa_no = document.getElementsByName('rfa_no')[0].value;
    if (BK_rfa_no == "") {
        document.getElementsByName('rfa_no')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('rfa_no')[0].style.backgroundColor = "";
    }

    BK_cmdt_cd = document.getElementsByName('cmdt_cd')[0].value;
    if (BK_cmdt_cd == "") {
        document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('cmdt_cd')[0].style.backgroundColor = "";
    }

    BK_bkg_ctrl_pty_cust_cnt_cd = document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].value;
    if (BK_bkg_ctrl_pty_cust_cnt_cd == "") {
        document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].style.backgroundColor = "";
    }

    BK_bkg_ctrl_pty_cust_seq = document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].value;
    if (BK_bkg_ctrl_pty_cust_seq == "") {
        document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('bkg_ctrl_pty_cust_seq')[0].style.backgroundColor = "";
    }
    //document.getElementsByName('mailId[]');
    BK_dcgo_flg = document.getElementsByName('dcgo_flg')[0]; //document.querySelectorAll('input[name=dcgo_flg]:checked'); //document.getElementsByName('dcgo_flg');
    if (BK_dcgo_flg.checked) {
        document.getElementsByName('dcgo_flg')[0].style.outline = '';
    }
    else {
        document.getElementsByName('dcgo_flg')[0].style.outline = '2px solid #F00';
        //alert('Please Filled Cargo details for Danger or Reefer...');
    }

    //Bk_auth_cd = document.getElementById('auth_cd').value;
    //if (BK_auth_cd == "Y") {

    //}

    BK_rc_flg = document.getElementsByName('rc_flg')[0];
    if (BK_rc_flg.checked) {
        document.getElementsByName('rc_flg')[0].style.outline = '';
        //alert('Please check Reefer details filled or not...');
    }
    else {
        document.getElementsByName('rc_flg')[0].style.outline = '2px solid #F00';
        //alert('Please check Reefer details filled or not...');
    }

    BK_s_cust_nm = document.getElementsByName('s_cust_nm')[0].value;
    var totalWords = BK_s_cust_nm;
    var firstWord = totalWords.replace(/ .*/, '');

    //console.log(firstWord);
    if (firstWord == "PANALPINA") {
        BK_FW = firstWord;
        //console.log(BK_FW);
    }

    //// Customer Name / CNPT Name / Forwarder Name / 
    //consignee_name = document.getElementsByName('c_cust_nm')[0].value;
    //window.localStorage.setItem('c_cust_nm', consignee_name);
    //console.log('cust... ' + consignee_name);

    //BK_f_cust_nm = document.getElementsByName('f_cust_nm')[0].value;
    ////BK_FWDRName = BK_f_cust_nm;
    //window.localStorage.setItem('f_cust_nm', BK_f_cust_nm);
    //console.log('forwarder name' + BK_f_cust_nm);

    //BK_bkg_ctrl_pty_cust_nm = document.getElementsByName('bkg_ctrl_pty_cust_nm')[0].value;
    //window.localStorage.setItem('bkg_ctrl_pty_cust_nm', BK_bkg_ctrl_pty_cust_nm);
    //console.log('CNPT name' + BK_bkg_ctrl_pty_cust_nm);

}

// checkbox checked / unchecked event here
var checkbox = document.querySelector("input[name=dcgo_flg]");

if (checkbox != null)
{
checkbox.addEventListener('change', function () {
    BK_dcgo_flg = document.getElementsByName('dcgo_flg')[0];
    console.log('jignesh...' + BK_dcgo_flg);
    if (this.checked) {
        document.getElementsByName('dcgo_flg')[0].style.outline = '';
        document.getElementsByName('rc_flg')[0].style.outline = '';
    } else {
        document.getElementsByName('dcgo_flg')[0].style.outline = '2px solid #F00';
    }
});
}

if(check_BK_rc_flg != null)
{
var check_BK_rc_flg = document.querySelector("input[name=rc_flg]");
}

if(check_BK_rc_flg != null)
{
check_BK_rc_flg.addEventListener('change', function () {
    BK_rc_flg = document.getElementsByName('rc_flg')[0];
    if (this.checked) {
        document.getElementsByName('rc_flg')[0].style.outline = '';
        document.getElementsByName('dcgo_flg')[0].style.outline = '';
    } else {
        document.getElementsByName('rc_flg')[0].style.outline = '2px solid #F00';
    }
});
}


function CheckBoxChecked() 
{
    // M&D Tab Checkbox
	if(document.getElementsByName('mk_desc_prn_flg')[0] != null)
	{
    MD_mk_desc_prn_flg = document.getElementsByName('mk_desc_prn_flg')[0];
	}
	if(document.getElementsByName('mf_desc_prn_flg')[0] != null)
	{
    MD_mf_desc_prn_flg = document.getElementsByName('mf_desc_prn_flg')[0];
	}
    //console.log('Hello...jignesh' + MD_mk_desc_prn_flg);
	
	if(document.getElementsByName('mk_desc_prn_flg')[0] != null)
	{
		if (MD_mk_desc_prn_flg && BK_FW != "PANALPINA") 
		{
        document.getElementsByName('mk_desc_prn_flg')[0].checked = true;
		}
		else 
		{
		//if(document.getElementsByName('mk_desc_prn_flg')[0] == 'undefined' ){
        document.getElementsByName('mk_desc_prn_flg')[0].checked = false;
        document.getElementsByName('mf_desc_prn_flg')[0].checked = false;
		//}
		}

		if (!MD_mf_desc_prn_flg && BK_FW == "PANALPINA") 
		{
        document.getElementsByName('mf_desc_prn_flg')[0].checked = true;
		}
		else 
		{
		//if(document.getElementsByName('mk_desc_prn_flg')[0] == 'undefined' ){
        //document.getElementsByName('mk_desc_prn_flg')[0].checked = false;
        document.getElementsByName('mf_desc_prn_flg')[0].checked = false;
		//}
		}
	}
	
	if(document.getElementsByName('mf_desc_prn_flg')[0] != null )
	{
		if (MD_mk_desc_prn_flg && BK_FW != "PANALPINA") 
		{
        document.getElementsByName('mk_desc_prn_flg')[0].checked = true;
		}
		else 
		{
		//if(document.getElementsByName('mk_desc_prn_flg')[0] == 'undefined' ){
        document.getElementsByName('mk_desc_prn_flg')[0].checked = false;
        document.getElementsByName('mf_desc_prn_flg')[0].checked = false;
		//}
		}

		if (!MD_mf_desc_prn_flg && BK_FW == "PANALPINA") 
		{
        document.getElementsByName('mf_desc_prn_flg')[0].checked = true;
		}
		else 
		{
		//if(document.getElementsByName('mk_desc_prn_flg')[0] == 'undefined' ){
        //document.getElementsByName('mk_desc_prn_flg')[0].checked = false;
        document.getElementsByName('mf_desc_prn_flg')[0].checked = false;
		//}
		}
	}
    // End M&D Tab
    // get Value of Charge Tab 
    //CHRG_TOTAL_PPD = document.getElementsByName('TOTAL_PPD')[0];
    //CHRG_frm_p_t10sheet3_cnt_cd = document.getElementsByName('frm_p_t10sheet3_cnt_cd')[0];
    //CHRG_frm_p_t10sheet3_cust_seq = document.getElementsByName('frm_p_t10sheet3_cust_seq')[0];
    //console.log('heyyyy...' + CHRG_frm_p_t10sheet3_cnt_cd);
    //console.log('heyyyy...' + CHRG_frm_p_t10sheet3_cust_seq);
    //var MergeValue = document.getElementsByName('frm_p_t10sheet3_cnt_cd' + "" + 'frm_p_t10sheet3_cust_seq')[0].value;
    //console.log('heyyyy...'+MergeValue);

    //CHRG_TOTAL_3rdPPD = document.getElementsByName('TOTAL_3rdPPD')[0];
    //CHRG_select_3rdPPD = document.getElementsByName('select_3rdPPD')[0];

    //if (CHRG_TOTAL_PPD != 0) {
    //    //CHRG_frm_p_t10sheet3_cnt_cd + CHRG_frm_p_t10sheet3_cust_seq;
    //}
    //else if (CHRG_TOTAL_3rdPPD != 0) {
    //    //CHRG_select_3rdPPD;
    //}
    //// End Charge tab Value
    ////BL_bl_ready_type_text = document.getElementsByName('TOTAL_PPD')[0];
    //document.querySelector("#TOTAL_PPD > div > table > tbody > tr:nth-child(1) > td.input2").title = "abcd";
}
// New Function




function SaveToLocalStorage(){
        var txtboxFooValue = $("#ff_cust_lgl_eng_nm").val();
        localStorage.setItem('LocalStorageKey', txtboxFooValue);
        console.log(" after setItem in LocalStorage" + txtboxFooValue);
        //RetrieveFromLocalStorage();
    }

    function RetrieveFromLocalStorage() {
        var retrivedValue = 'None';
        retrivedValue = localStorage.getItem('LocalStorageKey');
        console.log("retrieved value = ", retrivedValue);
    }
// End

function CheckCustomerName() {
    var consignee_name = localStorage.getItem('consigneename');
    //var ShiperName = window.localStorage.getItem('s_cust_nm');
    //var FWRName = window.localStorage.getItem('f_cust_nm');
    //var CNPTName = window.localStorage.getItem('bkg_ctrl_pty_cust_nm');

    console.log('CustName ' + consignee_name);
    //console.log('ShiperName ' + ShiperName);
    //console.log('FWRName ' + FWRName);
    //console.log('CNPTName ' + CNPTName);

    if (consignee_name.includes("COSTCO WHOLESALE CORPORATION")) {
        document.getElementById('ex_cust_nm').title = 'PO number: show in "Export Ref ". for all Costco Shipment in customer Tab';
    }
    else {
        document.getElementById('ex_cust_nm').title = 'No SOP';
    }
    //if (FWRName.includes("UPS SCS (CHINA) LIMITED SHENZHEN BRANCH")) {
        //document.getElementById('sh_cust_nm').title = 'If Shipper is UPS SCS (China) Limited Shenzhen Branch then \r\n a) Prepaid Payer: CN133040 \r\n b) Place of Payment: SZPBB \r\n c) Place of Issue: SZPBB';
        ////document.getElementsByName('frm_p_t10sheet3_cnt_cd')[0].title = "a) Prepaid Payer: CN133040";
        ////document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].title =   "b) Place of Payment: SZPBB";
    //}
    //else
        //if (FWRName.includes("UPS SCS (CHINA) LIMITED GUANGDONG BRANCH")) {
           // document.getElementById('sh_cust_nm').title = 'If Shipper is UPS SCS (CHINA) LIMITED GUANGDONG BRANCH then \r\n a) Prepaid Payer: CN103973 \r\n b) Place of Payment: CANBB \r\n c) Place of Issue: CANBB';
            ////document.getElementsByName('frm_p_t10sheet3_cnt_cd')[0].title = "a) Prepaid Payer: CN103973";
            ////document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].title =   "b) Place of Payment: CANBB";
        //}
       // else if (FWRName.includes("UPS SCS (Asia) Ltd")) {
            //document.getElementsByName('sh_cust_nm')[0].title = 'If Shipper is UPS SCS (Asia) Ltd then \r\n a) Place of Issue: HKGBB \r\n b) Prepaid Payer: HK108469 \r\n c) c) Place of Payment: HKGBB';
            ////document.getElementsByName('frm_p_t10sheet3_cnt_cd')[0].title = "b) Prepaid Payer: HK108469";
            ////document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].title =   "c) Place of Payment: HKGBB";
        //}
        //else {
           // document.getElementById('sh_cust_nm').title = 'Update company name (2 Lines)';
            ////document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].title = 'No SOP';
            ////document.getElementsByName('frm_p_t10sheet3_cnt_cd')[0].title = 'No SOP';
        //}

}

function CheckChargePayment() {
        //document.getElementsByName('frm_p_t10sheet3_cnt_cd')[0].title = "a) Prepaid Payer: CN133040";
        //document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].title = "b) Place of Payment: SZPBB";
		var frm_p_t10sheet3_ofc_cd = document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].value;
		
        if (frm_p_t10sheet3_ofc_cd == "") {
            document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].style.background = "#f1a9f3";
			alert("please fill value of Payment Office field.");
        }
        else {
            document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].style.background = "";
        }
}



function CheckMDSaveData() {
    MD_dg_cmdt_desc = document.getElementById('dg_cmdt_desc').value;
    if (MD_dg_cmdt_desc == "") {
        document.getElementById('dg_cmdt_desc').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('dg_cmdt_desc').style.backgroundColor = "";
        document.getElementById('dg_cmdt_desc').style.hyphens = "unset";
        document.getElementById('dg_cmdt_desc').style.wordWrap = "unset";
        document.getElementById('dg_cmdt_desc').style.overflow = "unset";
        document.getElementById('dg_cmdt_desc').style.wordBreak = "unset";
        document.getElementById('dg_cmdt_desc').style.webki = "unset";
        document.getElementById('dg_cmdt_desc').style.moz = "unset";
        document.getElementById('dg_cmdt_desc').style.hyphens = "unset";
        document.getElementById('dg_cmdt_desc').style.msHyphens = "unset";
    }

    MD_pck_cmdt_desc = document.getElementsByName('pck_cmdt_desc')[0].value;
    if (MD_pck_cmdt_desc == "") {
        document.getElementsByName('pck_cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('pck_cmdt_desc')[0].style.backgroundColor = "";
    }

    MD_cntr_cmdt_desc = document.getElementsByName('cntr_cmdt_desc')[0].value;
    if (MD_cntr_cmdt_desc == "") {
        document.getElementsByName('cntr_cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('cntr_cmdt_desc')[0].style.backgroundColor = "";
    }

    MD_pck_qty = document.getElementsByName('pck_qty')[0].value;
    if (MD_pck_qty == "") {
        document.getElementsByName('pck_qty')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('pck_qty')[0].style.backgroundColor = "";
    }

    MD_pck_tp_cd = document.getElementsByName('pck_tp_cd')[0].value;
    if (MD_pck_tp_cd == "") {
        document.getElementsByName('pck_tp_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('pck_tp_cd')[0].style.backgroundColor = "";
    }

    MD_act_wgt = document.getElementsByName('act_wgt')[0].value;
    if (MD_act_wgt == "") {
        document.getElementsByName('act_wgt')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('act_wgt')[0].style.backgroundColor = "";
    }

    MD_wgt_ut_cd = document.getElementsByName('wgt_ut_cd')[0].value;
    if (MD_wgt_ut_cd == "") {
        document.getElementsByName('wgt_ut_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('wgt_ut_cd')[0].style.backgroundColor = "";
    }

    MD_meas_qty = document.getElementsByName('meas_qty')[0].value;
    if (MD_meas_qty == "") {
        document.getElementsByName('meas_qty')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('meas_qty')[0].style.backgroundColor = "";
    }

    MD_meas_ut_cd = document.getElementsByName('meas_ut_cd')[0].value;
    if (MD_meas_ut_cd == "") {
        document.getElementsByName('meas_ut_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('meas_ut_cd')[0].style.backgroundColor = "";
    }

    MD_frt_term_cd = document.getElementsByName('frt_term_cd')[0].value;
    if (MD_frt_term_cd == "") {
        document.getElementsByName('frt_term_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('frt_term_cd')[0].style.backgroundColor = "";
    }

    MD_cstms_desc = document.getElementsByName('cstms_desc')[0].value;
    if (MD_cstms_desc == "") {
        document.getElementsByName('cstms_desc')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('cstms_desc')[0].style.backgroundColor = "";
    }

    MD_mk_desc = document.getElementsByName('mk_desc')[0].value;
    if (MD_mk_desc == "") {
        document.getElementsByName('mk_desc')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('mk_desc')[0].style.backgroundColor = "";
    }
}

function btnCopyClick() {
    var cnt = 1;
    console.log('clicked...');

    MD_pck_cmdt_desc = document.getElementsByName('pck_cmdt_desc')[0].value;
    if (MD_pck_cmdt_desc == "") {
        document.getElementsByName('pck_cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('pck_cmdt_desc')[0].style.backgroundColor = "";
    }

    MD_cntr_cmdt_desc = document.getElementsByName('cntr_cmdt_desc')[0].value;
    if (MD_cntr_cmdt_desc == "") {
        document.getElementsByName('cntr_cmdt_desc')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('cntr_cmdt_desc')[0].style.backgroundColor = "";
    }
    MD_dg_cmdt_desc = document.getElementById('dg_cmdt_desc').value;
    if (MD_dg_cmdt_desc == "") {
        document.getElementById('dg_cmdt_desc').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('dg_cmdt_desc').style.backgroundColor = "";
        document.getElementById('dg_cmdt_desc').style.hyphens = "unset";
        document.getElementById('dg_cmdt_desc').style.wordWrap = "unset";
        document.getElementById('dg_cmdt_desc').style.overflow = "unset";
        document.getElementById('dg_cmdt_desc').style.wordBreak = "unset";
        document.getElementById('dg_cmdt_desc').style.webki = "unset";
        document.getElementById('dg_cmdt_desc').style.moz = "unset";
        document.getElementById('dg_cmdt_desc').style.hyphens = "unset";
        document.getElementById('dg_cmdt_desc').style.msHyphens = "unset";

        //word -break: unset;
        //word - wrap: unset;
        //overflow - wrap: unset;
        //-webkit - hyphens: unset;
        //-moz - hyphens: unset;
        //-ms - hyphens: unset;
        //hyphens: unset;
    }

    MD_btn_copy = document.getElementById('btn_copy').value;
    if (cnt == 0) {
        document.getElementById('btn_copy').style.backgroundColor = "#f1a9f3";
        cnt = 1;
    }
    else {
        document.getElementById('btn_copy').style.backgroundColor = "";
        cnt = 0;
    }
}

function CheckCNTRValidation() {
    var bkg_cgo_tp_cd = document.getElementById('bkg_cgo_tp_cd').value;
    console.log("wrong");
    if (bkg_cgo_tp_cd == "") {
        document.getElementById('bkg_cgo_tp_cd').style.backgroundColor = "#f1a9f3";
        //document.getElementById('bkg_cgo_tp_cd').style.imeMode = "enabled";
        //console.log("wrong");
    }
    else {
        //console.log("ok");
    }
}

//Customer Save Button
//btn_t7Save.addEventListener("mouseup", function () { CheckCustomerValidation(); });

function CheckCustomerValidation() {
    var cn_cust_fax_no = document.getElementById('cn_cust_fax_no').value;
    if (cn_cust_fax_no == "") {
        document.getElementById('cn_cust_fax_no').style.backgroundColor = "#f1a9f3";
    }
}

//M&D Save Button
//btn_t8Save.addEventListener("mouseup", function () { CheckMDValidation(); });

//function CheckMDValidation() {
//    var act_wgt_prn_flg = document.getElementById('act_wgt_prn_flg');
//    if (form.act_wgt_prn_flg.checked) {
//        //return;
//    }
//    else {
//        document.getElementById("act_wgt_prn_flg").style.outline = '2px solid #F00';
//        //return;
//    }
//}

function CheckMD_Validation() {
    MD_imp_shpr_tax_no = document.getElementsByName('imp_shpr_tax_no')[0].value;
    MD_imp_cnt_cd = document.getElementById('imp_cnt_cd').value;

    if (MD_imp_cnt_cd == "CN") {
        //document.getElementById('imp_cnt_cd').style.backgroundColor = "#f1a9f3";
        if (MD_imp_shpr_tax_no == "") {
            document.getElementsByName('imp_shpr_tax_no')[0].style.backgroundColor = "#f1a9f3";
        }
        else {
            document.getElementsByName('imp_shpr_tax_no')[0].style.backgroundColor = "";
        }
    }
    //else {
    //    document.getElementById('imp_cnt_cd').style.backgroundColor = "";
    //}

    MD_imp_cnee_tax_no = document.getElementsByName('imp_cnee_tax_no')[0].value;
    MD_imp_ntfy_tax_no = document.getElementsByName('imp_ntfy_tax_no')[0].value;

    if (MD_imp_cnt_cd == "BR") {
        if (MD_imp_cnee_tax_no == "") {
            document.getElementsByName('imp_cnee_tax_no')[0].style.backgroundColor = "#f1a9f3";
        }
        else {
            document.getElementsByName('imp_cnee_tax_no')[0].style.backgroundColor = "";
        }
        if (MD_imp_ntfy_tax_no == "") {
            document.getElementsByName('imp_ntfy_tax_no')[0].style.backgroundColor = "#f1a9f3";
        }
        else {
            document.getElementsByName('imp_ntfy_tax_no')[0].style.backgroundColor = "";
        }

    }
}

function CopyButtonClick() {
    //alert('retrive..');
    document.getElementById('btn_copy').style.backgroundColor = "#f1a9f3";
    MD_cstms_desc = document.getElementsByName('cstms_desc')[0].value;

    if (MD_cstms_desc != "") {
        document.getElementById('btn_copy').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('btn_copy').style.backgroundColor = "";
    }
}

// Customers Tab Function Start here
function CheckCustomer_Validation() {

    Cust_sh_cust_cnt_cd = document.getElementsByName('sh_cust_cnt_cd')[0].value;
    if (Cust_sh_cust_cnt_cd == "") {
        document.getElementsByName('sh_cust_cnt_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('sh_cust_cnt_cd')[0].style.backgroundColor = "";
    }

    Cust_sh_cust_seq = document.getElementsByName('sh_cust_seq')[0].value;
    if (Cust_sh_cust_seq == "") {
        document.getElementsByName('sh_cust_seq')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('sh_cust_seq')[0].style.backgroundColor = "";
    }

    Cust_cn_cust_cnt_cd = document.getElementsByName('cn_cust_cnt_cd')[0].value;
    if (Cust_cn_cust_cnt_cd == "") {
        document.getElementsByName('cn_cust_cnt_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('cn_cust_cnt_cd')[0].style.backgroundColor = "";
    }

    Cust_cn_cust_seq = document.getElementsByName('cn_cust_seq')[0].value;
    if (Cust_cn_cust_seq == "") {
        document.getElementsByName('cn_cust_seq')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('cn_cust_seq')[0].style.backgroundColor = "";
    }

    Cust_nf_cust_cnt_cd = document.getElementsByName('nf_cust_cnt_cd')[0].value;
    if (Cust_nf_cust_cnt_cd == "") {
        document.getElementsByName('nf_cust_cnt_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('nf_cust_cnt_cd')[0].style.backgroundColor = "";
    }

    Cust_nf_cust_seq = document.getElementsByName('nf_cust_seq')[0].value;
    if (Cust_nf_cust_seq == "") {
        document.getElementsByName('nf_cust_seq')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('nf_cust_seq')[0].style.backgroundColor = "";
    }

    Cust_ff_cust_cnt_cd = document.getElementsByName('ff_cust_cnt_cd')[0].value;
    if (Cust_ff_cust_cnt_cd == "") {
        document.getElementsByName('ff_cust_cnt_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('ff_cust_cnt_cd')[0].style.backgroundColor = "";
    }

    Cust_ff_cust_seq = document.getElementsByName('ff_cust_seq')[0].value;
    if (Cust_ff_cust_seq == "") {
        document.getElementsByName('ff_cust_seq')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('ff_cust_seq')[0].style.backgroundColor = "";
    }

    Cust_an_cust_cnt_cd = document.getElementsByName('an_cust_cnt_cd')[0].value;
    if (Cust_an_cust_cnt_cd == "") {
        document.getElementsByName('an_cust_cnt_cd')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('an_cust_cnt_cd')[0].style.backgroundColor = "";
    }

    Cust_an_cust_seq = document.getElementsByName('an_cust_seq')[0].value;
    if (Cust_an_cust_seq == "") {
        document.getElementsByName('an_cust_seq')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('an_cust_seq')[0].style.backgroundColor = "";
    }
}
// Customers Tab Function End here


// CM Tab Save Button Click Function Call Start here

function CheckCM_Validation() {

}

function Check_Confirm_Release_Button() {
    // Check Booking Number for CM Tab
    BK_bl_no = document.getElementsByName('bl_no')[0].value;
    console.log('hey...' + BK_bl_no);
    if (BK_bl_no != "") {
        document.getElementById('btn_t9AllRelease').style.backgroundColor = "#f1a9f3";
        document.getElementById('btn_t9AllConfirm').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('btn_t9AllRelease').style.backgroundColor = "";
        document.getElementById('btn_t9AllConfirm').style.backgroundColor = "#f1a9f3";
    }
}


function CheckCM_AllRelease() {
    click = 1;
    CM_btn_t9AllConfirm = document.getElementById('btn_t9AllRelease').value;
    if (click == 0) {
        document.getElementById('btn_t9AllRelease').style.backgroundColor = "#f1a9f3";
        click = 1;
        console.log('click me');
    }
    else {
        document.getElementById('btn_t9AllRelease').style.backgroundColor = "";
        click = 0;
        console.log('u click');
    }
}

function CheckCM_AllConfirm() {
    chk = 1;
    CM_btn_t9AllConfirm = document.getElementById('btn_t9AllConfirm').value;
    if (chk == 0) {
        document.getElementById('btn_t9AllConfirm').style.backgroundColor = "#f1a9f3";
        chk = 1;
        console.log('click me');
    }
    else {
        document.getElementById('btn_t9AllConfirm').style.backgroundColor = "";
        chk = 0;
        console.log('u click');
    }
}
// CM Tab Save Button Click Function Call End here


function CheckCharge_Validation() {
    CHRG_frm_t10sheet1_rt_aply_dt = document.getElementsByName('frm_t10sheet1_rt_aply_dt')[0].value;
    if (CHRG_frm_t10sheet1_rt_aply_dt == "") {
        document.getElementsByName('frm_t10sheet1_rt_aply_dt')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('frm_t10sheet1_rt_aply_dt')[0].style.backgroundColor = "";
    }
    CHRG_frm_t10sheet1_sc_no1 = document.getElementsByName('frm_t10sheet1_sc_no1')[0].value;
    if (CHRG_frm_t10sheet1_sc_no1 == "") {
        document.getElementsByName('frm_t10sheet1_sc_no1')[0].style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementsByName('frm_t10sheet1_sc_no1')[0].style.backgroundColor = "";
    }
	
	var frm_p_t10sheet3_ofc_cd = document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].value;
		
        if (frm_p_t10sheet3_ofc_cd == "") 
		{
            document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].style.background = "#f1a9f3";
			//alert("please fill value of Payment Office field.");
			//$('frm_p_t10sheet3_ofc_cd option:selected').css('background-color', 'red');
			//return false;
        }
        else 
		{
            document.getElementsByName('frm_p_t10sheet3_ofc_cd')[0].style.background = "";
        }
		
		return true;
    //CHRG_frt_term_cd_text = document.getElementsByName('frt_term_cd_text')[0].value;
    //if (CHRG_frt_term_cd_text == "") {
    //    document.getElementsByName('frt_term_cd_text')[0].style.backgroundColor = "#f1a9f3";
    //}
    //else {
    //    document.getElementsByName('frt_term_cd_text')[0].style.backgroundColor = "";
    //}
}


function CheckBLIssue_Validation() {
    BL_frm_t11sheet1_por_name = document.getElementById('frm_t11sheet1_por_name').value;
    if (BL_frm_t11sheet1_por_name == "") {
        document.getElementById('frm_t11sheet1_por_name').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('frm_t11sheet1_por_name').style.backgroundColor = "";
    }
    BL_frm_t11sheet1_pol_name = document.getElementById('frm_t11sheet1_pol_name').value;
    if (BL_frm_t11sheet1_pol_name == "") {
        document.getElementById('frm_t11sheet1_pol_name').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('frm_t11sheet1_pol_name').style.backgroundColor = "";
    }
    BL_frm_t11sheet1_pod_name = document.getElementById('frm_t11sheet1_pod_name').value;
    if (BL_frm_t11sheet1_pod_name == "") {
        document.getElementById('frm_t11sheet1_pod_name').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('frm_t11sheet1_pod_name').style.backgroundColor = "";
    }
    BL_frm_t11sheet1_del_name = document.getElementById('frm_t11sheet1_del_name').value;
    if (BL_frm_t11sheet1_del_name == "") {
        document.getElementById('frm_t11sheet1_del_name').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('frm_t11sheet1_del_name').style.backgroundColor = "";
    }
    BL_frm_t11sheet1_obl_iss_rmk = document.getElementById('frm_t11sheet1_obl_iss_rmk').value;
    if (BL_frm_t11sheet1_obl_iss_rmk == "") {
        document.getElementById('frm_t11sheet1_obl_iss_rmk').style.backgroundColor = "#f1a9f3";
    }
    else {
        document.getElementById('frm_t11sheet1_obl_iss_rmk').style.backgroundColor = "";
    }
	
	var bl_ready_type_text = document.getElementsByName('bl_ready_type_text')[0].value;
	console.log('value got' + bl_ready_type_text);
	if (bl_ready_type_text == "") {
		console.log('In');
            document.getElementsByName('bl_ready_type_text')[0].style.backgroundColor = "#f1a9f3";
			document.getElementsByName('bl_ready_type_text')[0].style.outline="5px solid #0000ff"
			alert("please follow the SI and update the value.");
			return false;
        }
        else {
            document.getElementById('bl_ready_type_text').style.outline = "";
			console.log('Out');
        }
	
	return true;
}

/*
function frt_term_cd_text_Check() 
{
   
    Console.log('hello..frt');
    if ($("[name='cn_cust_nm']:contains(BEAVER")) {
        document.getElementById('frt_term_cd_text').title = "Arrange ocean freight collect for reefer cargo";
    }
}
*/

// onkeyup change event for autofill




function matchPeople(input) {
    var people = ['101', '2010', '3001', '400', '500'];
    //alert(input);
    var reg = new RegExp(input.split('').join('\\w*').replace(/\W/, ""), 'i');
    //alert(reg);
    return people.filter(function (person) {
        if (person.match(reg)) {
            alert(person);
            return person;
        }
    });
    alert('hello..match');
}

function changeInput(val) {
    //alert('hello..chnge input');
    var autoCompleteResult = matchPeople(val);
    //alert(autoCompleteResult);
    document.getElementById("sh_cust_nm").innerHTML = autoCompleteResult;
    
}

function CheckEmailforDamco()
{
	email = document.getElementById('email').value;
	console.log('clicked on send button...');
	ID = "Jignesh.Sonar@wns.com";
	console.log('clicked on send button...' + email +' Test ID ' + ID);
  if(email == "")
  {
    document.getElementById('dg_cmdt_desc').style.backgroundColor = "#f1a9f3";
  }
  else if(email == "Jignesh.Sonar@wns.com")
  {
    
  }
  else
  {
	  alert('You can not select different email id for Damco Customer');
	  return false;
  }
}

function CheckEmailforDamco()
{

}



// Customer SOP start here 

function getCostCoSOP()
{
	var consignee_name = $("[name='cn_cust_nm']").val();
	var shipper_Code = $("[name='ff_cust_seq']").val();
	var Philips_Code = $("[name='sh_cust_seq']").val();
	var Philipse_Code_1 = $("[name='cn_cust_seq']").val();
	
	if(consignee_name.includes("COSTCO"))
	{
		document.getElementById('ex_cust_nm').title='PO number: show in "Export Ref ". for all Costco Shipment in customer Tab';
	
	if(shipper_Code == "133040")
	{
		document.getElementsByName('sh_cust_cnt_cd')[0].title='If Shipper is  UPS SCS (China) Limited Shenzhen Branch \r\n a) Prepaid Payer: CN133040 \r\n b) Place of Payment: SZPBB \r\n c) Place of Issue: SZPBB';
		document.getElementById('sh_cust_nm').title='If Shipper is  UPS SCS (China) Limited Shenzhen Branch \r\n a) Prepaid Payer: CN133040 \r\n b) Place of Payment: SZPBB \r\n c) Place of Issue: SZPBB';
	}
	else
	{
		document.getElementsByName('sh_cust_cnt_cd')[0].title='Select proper code of shipper as per SI with correct country code';
		document.getElementById('sh_cust_nm').title='Update company name (2 Lines)';
	}
	
	}
	if(consignee_name.includes("PHILIPS CONSUMER LIFESTYLE"))
	{		
		if(Philips_Code == "102242")
		{
			document.getElementsByName('sh_cust_cnt_cd')[0].title = 'If shipper indicated with NL26 or 805215, \r\n A)  ALL charges payable by Philips, just need to update in Prepaid field of Charge Tab. \r\n B)  Prepaid Office Code: RTMBB \r\n Payer Code: NL102242';
		}
		if(Philipse_Code_1 == "204606")
		{
			document.getElementById('cn_cust_cnt_cd').title = 'If Consignee indicated with NL26 or 805215, \r\n A) ALL charges payable by Philips, just need to update in Prepaid field of Charge Tab. \r\n B) Prepaid Office Code: RTMBB \r\n C) Prepaid Payer Code: NL102242';
		}
		if(Philipse_Code_1 == "201487")
		{
			document.getElementById('cn_cust_cnt_cd').title = 'If Received SI indicated: \r\n A) O/F and DTHC and Destination Haulage payable party Philips Lighting Hong Kong Limited. \r\n B) OTHC paid by SZX DHL Funloc No 454087';
		}
	}
	consignee_name = "";
	shipper_Code = "";
	Philips_Code = "";
	Philipse_Code_1 = "";
}

function getWalmartSOP()
{
	var CNPT_Name = $("[name='bkg_ctrl_pty_cust_nm']").val();
	console.log(CNPT_Name);
	if(CNPT_Name.includes("WALMART INC."))
	{
		document.getElementById('sc_no').title='BL Amendment Fee (AMA or BAD) is not applicable on SC No. CHIB00086';
	}
	else
	{
		document.getElementById('sc_no').title='No SOP for this Customer';
	}
}

// Customer SOP End here
