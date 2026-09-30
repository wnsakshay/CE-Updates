function hlt_BKGCreation_Tab()
{
	try
	{
		let bOffice = document.getElementsByName("bkg_ofc_cd")[0].value;
		let	RDTerm = document.getElementById("rcv_term_cd_text").value + document.getElementById("de_term_cd_text").value;
		let	prePOD = document.getElementById("bkg_pod_cd").value.substring(0,2);
		let	preDEL = document.getElementById("bkg_del_cd").value.substring(0,2);
		let	Filer = document.getElementById("usa_cstms_file_cd_text").value;
		let	SCAC = document.getElementById("scac_cd").value;
		let	SCNo = document.getElementById("sc_no").value;
		let	RFANo = document.getElementsByName("rfa_no")[0].value;
		let	constraintColor = document.getElementById("btn_t1Constraints").style.color;
		let	AutoEDIHold = document.getElementsByName("edi_hld_flg")[0].checked;
		let	dangerTick = document.getElementsByName("dcgo_flg")[0].checked;
		let	reeferTick = document.getElementsByName("rc_flg")[0].checked;
		let	awkwardTick = document.getElementsByName("awk_cgo_flg")[0].checked;
		
		//For All B.Office
		document.getElementById("bkg_por_cd").style = (RDTerm=="DY"||RDTerm=="DD")?"width:56px; ime-mode:disabled; text-transform:uppercase; outline: 4px solid red !important; border-radius: 5px;":"width:56px; ime-mode:disabled; text-transform:uppercase;";
		
		if(prePOD=="US"||prePOD=="CA")
		{
			document.getElementById("usa_cstms_file_cd_text").style="width: 15px; color: rgb(0, 0, 0); outline: 4px solid red !important; border-radius: 5px;";
			document.getElementById("cnd_cstms_file_cd_text").style="width: 15px; color: rgb(0, 0, 0); outline: 4px solid red !important; border-radius: 5px;";
		}
		else
		{
			document.getElementById("usa_cstms_file_cd_text").style="width: 15px; color: rgb(0, 0, 0);";
			document.getElementById("cnd_cstms_file_cd_text").style="width: 15px; color: rgb(0, 0, 0);";
		}
		
		/*document.getElementById("scac_cd").style=(preDEL=="US"&&Filer=="2"&&SCAC.trim()=="")?"width:107px; ime-mode:disabled; text-transform:uppercase; text-align:left; outline: 4px solid red !important; border-radius: 5px;":"width:107px; ime-mode:disabled; text-transform:uppercase; text-align:left;";*/
		document.getElementById("sc_no").style=SCNo!=""?"width: 85px; text-align: left; color: rgb(115, 115, 115) !important; outline: 4px solid red !important;":"width: 85px; text-align: left; color: rgb(115, 115, 115) !important;";
		document.getElementsByName("rfa_no")[0].style=RFANo!=""?"width: 85px; text-align: left; color: rgb(115, 115, 115) !important; outline: 4px solid red !important;":"width: 85px; text-align: left; color: rgb(115, 115, 115) !important;";
		document.getElementById("btn_t1Constraints").style=constraintColor.includes("red")?"width: 95px; color: red !important; outline: 4px solid red !important; border-radius: 5px;":"width: 95px; color: red !important;";
		
		var count = document.getElementsByClassName("GMWrap0 GMAlignRight GMFloat GMCell IBSheetFont0 HideCol0C8").length;
		for(var i = 0; i < count; i++)
		{
			if(document.getElementsByClassName("GMWrap0 GMAlignRight GMFloat GMCell IBSheetFont0 HideCol0C8")[i].innerText != "0.00")
			{
				document.querySelector("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C8").style = "background-color:red !important;";
				break;
			}
			else
			{
				document.querySelector("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C8").style = "";
			}
		}
		
		if(bOffice == "HAMBB")
		{
			if(!AutoEDIHold)
			{
				document.getElementsByName("btn_t1Danger")[0].style=dangerTick?"width:110px; outline: 4px solid red !important; border-radius: 5px;":"width:110px;";
				document.getElementsByName("btn_t1Reefer")[0].style=reeferTick?"width:110px; outline: 4px solid red !important; border-radius: 5px;":"width:110px;";
				document.getElementsByName("btn_t1Awkward")[0].style=awkwardTick?"width:110px; outline: 4px solid red !important; border-radius: 5px;":"width:110px;";
				document.getElementsByName("edi_hld_flg")[0].style=(dangerTick||reeferTick||awkwardTick)?"outline: 4px solid red !important; border-radius: 5px;":"";
			}
			document.getElementById("bkg_trunk_vvd").style="width:85px;ime-mode:disabled;text-transform:uppercase;";
		}
		else
		{
			document.getElementById("bkg_trunk_vvd").style="width:85px;ime-mode:disabled;text-transform:uppercase; outline: 4px solid red !important; border-radius: 5px;";
		}
	}catch(err){}}
