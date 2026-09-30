function ODeXDraftMaster_warnPopup()
{
	try
	{
		var unLoadPort = document.getElementById("portOfUnloadingDesc").value;
		var Consignee = document.getElementById("consignorNm").value;
		var PAN = document.getElementById("consignorCode").value;
		var cnAdd = document.getElementById("consignorAddr1").value + document.getElementById("consignorAddr2").value + document.getElementById("consignorAddr3").value;
		var npAdd = document.getElementById("notifyPartyAddr1").value + document.getElementById("notifyPartyAddr2").value + document.getElementById("notifyPartyAddr3").value + document.getElementById("notifyPartyAddr4").value;
		var goodsDesc = document.getElementById("goodsDesc").value;
		var cargoMovement = document.getElementById("cargoMovement").value;
		var Importer = document.getElementById("importerNm").value;
		var desctPort = document.getElementById("portOfDestinationDesc").value;
		var UNO = document.getElementById("unoCode").value;
		var IMO = document.getElementById("imoCode").value;
		
		cnAdd = cnAdd.toLowerCase();
		npAdd = npAdd.toLowerCase();
		goodsDesc = goodsDesc.toLowerCase();
		
		if(unLoadPort.toLowerCase().includes("kolkata"))
		{
			//Conditions based on PAN and Consignee and Port of Unloading
			if(Consignee.toLowerCase().includes("servo plastics") && PAN == "AANCS3318K")
			{
				alert("Consignee:- SERVO PLASTICS PRIVATE LIMITED \r\nPAN:- AANCS3318K \r\nMovement Type should be DPD");
			}
			else if(Consignee.toLowerCase().includes("canon india") && PAN == "AAACC4175D")
			{
				alert("Consignee:- CANON INDIA PRIVATE LIMITED \r\nPAN:- AAACC4175D \r\nMovement Type should be DPD");
			}
			else if(Consignee.toLowerCase().includes("the superintendent, foreign post") && PAN == "AAAGO0068H")
			{
				alert("Consignee:- THE SUPERINTENDENT, FOREIGN POST \r\nPAN:- AAAGO0068H \r\nMovement Type should be DPD");
			}
			else if(Consignee.toLowerCase().includes("the supreme industries") && PAN == "AAACT1344F")
			{
				alert("Consignee:- THE SUPREME INDUSTRIES LIMITED \r\nPAN:- AAACT1344F \r\nMovement Type should be DPD");
			}
			
			//Conditions based on Consignee and Notify Party Address
			if(cnAdd.includes("nepal") || npAdd.includes("nepal") || cnAdd.includes("kathmandu") || npAdd.includes("kathmandu") || cnAdd.includes("lalitpur") || npAdd.includes("lalitpur") || cnAdd.includes("bhaktpur") || npAdd.includes("bhaktpur") || cnAdd.includes("bhaktapur") || npAdd.includes("bhaktapur"))
			{
				alert("Nepal/Kathmandu/Lalitpur/Bhaktpur/Bhaktapur keywords found in Consignee/Notify Party Address\r\nMovement type should be checked and changed to respective Nepal Location NPKTM");
			}
			if(cnAdd.includes("bhutan") || npAdd.includes("bhutan") || cnAdd.includes("thim") || npAdd.includes("thim"))
			{
				alert("Bhutan/Thim keywords found in Consignee/Notify Party Address\r\nMovement type should be checked and changed to respective Bhutan Location BTTHI");
			}
			if(cnAdd.includes("falta") || npAdd.includes("falta"))
			{
				alert("Falta keyword found in Consignee/Notify Party Address\r\nCheck if the request received on ODeX, and if not, then assign Movement as DPD");
			}
		}
		
		//Condition based on Goods Description
		if(goodsDesc.toLowerCase().includes("household") || goodsDesc.toLowerCase().includes("personal effects"))
		{
			alert("Houshold/Personal Effets keyword found in the Goods Description\r\nCheck Consignee Name, and ascertain whether this shipment to be filed for Item Type UB and its relative CFS");
		}
		//Condition based on Cargo Movement
		if(cargoMovement == "TI")
		{
			alert("Cargo Movement Type is TI - Transhipment to ICD - SMPT\r\nCheck Bond/PAN/MOT updated correctly under IGM Bond details / SCMT TG Bond details");
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva"))
		{
			if(Importer.toLowerCase().includes("epson"))
			{
				alert("Importer Name: EPSON\r\nPort of Unloading: NHAVA SHEVA\r\nPlease check SOP as this has an exception for delivery type\r\nto be DPD + DPD + CFS\r\nhence preferred CFS needs to be accordingly aligned and \r\nIAL also needs to be checked if it has flown correctly");
			}
			
			if(Importer.toLowerCase().includes("escorts kubota"))
			{
				alert("Importer Name: ESCORTS KUBOTA\r\nPlease check if the request is received on ODeX as DPD / DPD then\r\nplease arrange to file the manifest as DPD / DPD and\r\npreferred CFS as EFC LOGISTICS");
			}
			else if(Importer.toLowerCase().includes("kubota"))
			{
				alert("Importer Name: KUBOTA\r\nPort of Unloading: NHAVA SHEVA\r\nPlease check SOP as per Onshore Confirmation \r\nmove DPD + DPD + EFC CFS.\r\nIf request received on ODeX for DPD + DPD, please give movement to EFC CFS as preferred CFS as per Customer request\r\nIf request received on ODeX, follow ODeX");
			}
			
			if(Importer.toLowerCase().includes("canon"))
			{
				alert("Importer Name: CANON\r\nPort of Unloading: NHAVA SHEVA \r\nPlease check SOP as per Onshore Confirmation \r\nmove DPD + ICTPL CFS");
			}
			
			if(Importer.toLowerCase().includes("fujifilm india"))
			{
				alert("Importer Name: FUJIFILM INDIA\r\nPort of Unloading: NHAVA SHEVA \r\nPlease check SOP as per Onshore Confirmation \r\nmove DPD + DPD + GDL CFS");
			}
			
			if(Importer.toLowerCase().includes("maruti suzuki"))
			{
				alert("Importer Name: MARUTI SUZUKI\r\nPort of Unloading: NHAVA SHEVA \r\nPlease refer SOP as per Onshore Confirmation \r\nmove DPD + Continental CFS");
			}
			
			if(Importer.toLowerCase().includes("ve commercial") || Importer.toLowerCase().includes("volvo india"))
			{
				alert("Importer Name: VE COMMERCIAL (VOLVO INDIA)\r\nMode of Transport should be ROAD");
			}
			
			if(Importer.toLowerCase().includes("brother international"))
			{
				alert("Importer Name: BROTHER INTERNATIONAL\r\nthen Movement should be DPD + PUNJAB CFS");
			}
			
			if(Importer.toLowerCase().includes("maruti motor india"))
			{
				alert("Importer Name: MARUTI MOTOR INDIA PVT LTD\r\nthen Movement should be NAVAKR 3 CFS");
			}
			
			if(Importer.toLowerCase().includes("honda motor india"))
			{
				alert("Importer Name: HONDA MOTOR INDIA PVT LTD\r\nthen Movement should be NAVAKR 3 CFS");
			}
			
			if(!(UNO == "ZZZZZ" && IMO == "ZZZ"))
			{
				alert("UNO/IMO: " + UNO + " / " + IMO + " (HAZARDOUS) \r\nDo not allot INNSA1VTC1 CFS, Need to update ONE PANEL CFS");
			}
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") || unLoadPort.toLowerCase().includes("mundra") || unLoadPort.toLowerCase().includes("pipava"))
		{
			if(desctPort.includes("INDER6"))
			{
				alert("Port of Destination: INDER6 - Noida-Dadri (ICD), \r\nPlease update POD Description from drop down based on confirmation");
			}
		}
		
		if(unLoadPort.toLowerCase().includes("mundra") || unLoadPort.toLowerCase().includes("pipava"))
		{
			if(Consignee.toLowerCase().includes("ford india"))
			{
				alert("Consignee: FORD INDIA PVT LTD.,\r\nMovement type should be filed as DPD-DPD");
			}
		}
	}catch(err){ }
}


