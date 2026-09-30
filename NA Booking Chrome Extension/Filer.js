function tooltip()
{
	document.querySelector("#sheet1 > tbody > tr:nth-child(2) > td:nth-child(1) > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont0.HideCol0C3").bgColor = "red";
}

function Faxbgcolor() {
	
	
	try{
	//highlight Approval in REEFER Section
	if(document.getElementsByName('auth_cd')[0].value == "Y") {
		document.getElementsByName("auth_cd")[0].style.backgroundColor= "#f1a9f3 !important"
	}
	}catch(err){}
	
	try{
		if(document.querySelector("#sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(3) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont0.HideCol0C2").innerText == "Full Cargo Cut-off (Return CY)")
	{
		document.querySelector("#sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(3) > td.GMClassReadOnly.GMWrap0.GMAlignCenter.GMDate.GMCell.IBSheetFont0.HideCol0C5").style.backgroundColor = "#f1a9f3";
	}
	}
	catch(err){}
	
	
	if(document.querySelector("#sheet1 > tbody > tr:nth-child(2) > td:nth-child(1) > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont0.HideCol0C3") != null){
    var htmm0 = document.querySelector("#sheet1 > tbody > tr:nth-child(2) > td:nth-child(1) > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont0.HideCol0C3").innerHTML;
	}
	if(document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(3) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3") != null) {
    var htmm1 = document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(3) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").innerHTML;
	}
	if(document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(4) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3") != null) {
    var htmm2 = document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(4) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").innerHTML;
	}
    if(document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(5) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3") != null) {
	var htmm3 = document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(5) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").innerHTML;
	}
	if(document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(6) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3") != null) {
    var htmm4 = document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(6) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").innerHTML;
	}
	if(document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(7) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3") != null) {
    var htmm5 = document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(7) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").innerHTML;
	}
	if(document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(8) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3") != null) {
    var htmm6 = document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(8) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").innerHTML;
	}
	if(document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(9) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3") != null) {
    var htmm7 = document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(9) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").innerHTML;
	}

    

    if (htmm0 == "Booking Receipt") {
        document.querySelector("#sheet1 > tbody > tr:nth-child(2) > td:nth-child(1) > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont0.HideCol0C3").style.backgroundColor = "#F1921A";
        document.querySelector("#sheet1 > tbody > tr:nth-child(2) > td:nth-child(1) > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMClassFocusedCell.GMWrap0.GMAlignCenter.GMBool0.GMCell.IBSheetFont0.GMEmpty.HideCol0C2").style.backgroundColor = "#F1921A";


    }
    if (htmm1 == "Booking (Customer)") {
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(3) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").style.backgroundColor = "#F1921A";
		if(document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(3) > td.GMWrap0.GMAlignCenter.GMBool0.GMCell.IBSheetFont1.GMEmpty.HideCol1C2") != null)
		{
			document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(3) > td.GMWrap0.GMAlignCenter.GMBool0.GMCell.IBSheetFont1.GMEmpty.HideCol1C2").style.backgroundColor = "#F1921A";
		}

    }
    if (htmm2 == "Booking (Customer)") {
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(4) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").style.backgroundColor = "#F1921A";
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(4) > td.GMWrap0.GMAlignCenter.GMBool0.GMCell.IBSheetFont1.GMEmpty.HideCol1C2").style.backgroundColor = "#F1921A";

    }
    if (htmm3 == "Booking (Customer)") {
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(5) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").style.backgroundColor = "#F1921A";
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(5) > td.GMWrap0.GMAlignCenter.GMBool0.GMCell.IBSheetFont1.GMEmpty.HideCol1C2").style.backgroundColor = "#F1921A";

    }
    if (htmm4 == "Booking (Customer)") {
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(6) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").style.backgroundColor = "#F1921A";
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(6) > td.GMWrap0.GMAlignCenter.GMBool0.GMCell.IBSheetFont1.GMEmpty.HideCol1C2").style.backgroundColor = "#F1921A";

    }
    if (htmm5 == "Booking (Customer)") {
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(7) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").style.backgroundColor = "#F1921A";
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(7) > td.GMWrap0.GMAlignCenter.GMBool0.GMCell.IBSheetFont1.GMEmpty.HideCol1C2").style.backgroundColor = "#F1921A";

    }
    if (htmm6 == "Booking (Customer)") {
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(8) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").style.backgroundColor = "#F1921A";
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(8) > td.GMWrap0.GMAlignCenter.GMBool0.GMCell.IBSheetFont1.GMEmpty.HideCol1C2").style.backgroundColor = "#F1921A";

    }
    if (htmm7 == "Booking (Customer)") {
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(9) > td.GMClassReadOnly.GMWrap0.GMAlignLeft.GMText.GMCell.IBSheetFont1.HideCol1C3").style.backgroundColor = "#F1921A";
        document.querySelector("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(9) > td.GMWrap0.GMAlignCenter.GMBool0.GMCell.IBSheetFont1.GMEmpty.HideCol1C2").style.backgroundColor = "#F1921A";

    }

}


