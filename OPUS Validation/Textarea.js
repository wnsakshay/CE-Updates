if (dg_cmdt_desc.style.removeProperty) {
    dg_cmdt_desc.style.removeProperty('word-break');
} 
if(ff_cust_nm.style.removeProperty) {
    ff_cust_nm.style.removeProperty('word-break');
}
if(ff_cust_nm.style.removeProperty) {
    ff_cust_nm.style.removeProperty('width');
}

//if (mk_desc.style.removeProperty) {
//    mk_desc.style.removeProperty('word-break');
//} 
//if (mk_desc.style.removeProperty) {
//    mk_desc.style.removeProperty('width');
//}
 
if (sh_cust_addr.style.removeProperty) {
    sh_cust_addr.style.removeProperty('word-break');
} 
if (sh_cust_nm.style.removeProperty) {
    sh_cust_nm.style.removeProperty('background');
} 
if (exID01.style.removeProperty) {
    exID01.style.removeProperty('background-color');
} 
if (usa_cstms_file_cd_text.style.removeProperty) {
    usa_cstms_file_cd_text.style.removeProperty('color');
} 
if (sheet1.style.removeProperty) {
    sheet1.style.removeProperty('background-color');
} 
if (sheet1.style.removeProperty) {
    sheet1.style.removeProperty('background');
}


$('option:selected').attr('selected', '');

jQuery(window).load(function () {
         $("#nf_cust_cnt_cd,#nf_cust_seq").addClass("bgcolor");
        });


$(document).ready(function() { 
    $('#btn_t7Save').click(function() {
        if (!$.trim($('#nf_cust_cnt_cd').val()) ) {
            document.getElementById("nf_cust_cnt_cd").style.backgroundColor="red";
        }
        else
        {
            document.getElementById("nf_cust_cnt_cd").style.backgroundColor="";
        }
        if (!$.trim($('#nf_cust_seq').val())) {
            document.getElementById("nf_cust_seq").style.backgroundColor="red";
        }
        else
        {
            document.getElementById("nf_cust_seq").style.backgroundColor="";
        }
    });
});

var element = document.getElementById('nf_cust_cnt_cd');
        element.addEventListener("click", function () {
	   
        $(document).ready(function() { 
    $('#btn_t7Save').click(function() {
        if (!$.trim($('#nf_cust_cnt_cd').val()) ) {
            document.getElementById("nf_cust_cnt_cd").style.backgroundColor="red";
        }
        else
        {
            document.getElementById("nf_cust_cnt_cd").style.backgroundColor="";
        }
        if (!$.trim($('#nf_cust_seq').val())) {
            document.getElementById("nf_cust_seq").style.backgroundColor="red";
        }
        else
        {
            document.getElementById("nf_cust_seq").style.backgroundColor="";
        }
    });
});
 

        })



