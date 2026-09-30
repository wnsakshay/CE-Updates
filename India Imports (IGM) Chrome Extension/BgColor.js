function highlightODeXDraftMaster()
{
	try
	{
		
		var unLoadPort = document.getElementById("portOfUnloadingDesc").value;
		var Consignee = document.getElementById("consignorNm").value;
		var PAN = document.getElementById("consignorCode").value;
		var cnAdd = document.getElementById("consignorAddr1").value + document.getElementById("consignorAddr2").value + document.getElementById("consignorAddr3").value;
		var npAdd = document.getElementById("notifyPartyAddr1").value + document.getElementById("notifyPartyAddr2").value + document.getElementById("notifyPartyAddr3").value + document.getElementById("notifyPartyAddr4").value;
		var Importer = document.getElementById("importerNm").value;
		var desctPort = document.getElementById("portOfDestinationDesc").value;
		var UNO = document.getElementById("unoCode").value;
		var IMO = document.getElementById("imoCode").value;
		var goodsDesc = document.getElementById("goodsDesc").value;
		var cargoMovement = document.getElementById("cargoMovement").value;
		
		cnAdd = cnAdd.toLowerCase();
		npAdd = npAdd.toLowerCase();
		goodsDesc = goodsDesc.toLowerCase();
		
		document.getElementById("portOfUnloadingDesc").style = "";
		document.getElementById("consignorNm").style = "";
		document.getElementById("consignorCode").style = "";
		document.getElementById("consignorAddr1").style = "";
		document.getElementById("consignorAddr2").style = ""; 
		document.getElementById("consignorAddr3").style = "";
		document.getElementById("notifyPartyAddr1").style = ""; 
		document.getElementById("notifyPartyAddr2").style = ""; 
		document.getElementById("notifyPartyAddr3").style = ""; 
		document.getElementById("notifyPartyAddr4").style = "";
		document.getElementById("importerNm").style = "";
		document.getElementById("portOfDestinationDesc").style = "";
		document.getElementById("unoCode").style = "";
		document.getElementById("imoCode").style = "";
		document.getElementById("goodsDesc").style = "";
		document.getElementById("cargoMovement").style = "";
			
		if(unLoadPort.toLowerCase().includes("kolkata"))
		{
			//Conditions based on PAN and Consignee and Port of Unloading
			if(Consignee.toLowerCase().includes("servo plastics") && PAN == "AANCS3318K")
			{
				document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
				document.getElementById("consignorNm").style = "outline: 2px red solid !important;";
				document.getElementById("consignorCode").style = "outline: 2px red solid !important;";
			}
			else if(Consignee.toLowerCase().includes("canon india") && PAN == "AAACC4175D")
			{
				document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
				document.getElementById("consignorNm").style = "outline: 2px red solid !important;";
				document.getElementById("consignorCode").style = "outline: 2px red solid !important;";
			}
			else if(Consignee.toLowerCase().includes("the superintendent, foreign post") && PAN == "AAAGO0068H")
			{
				document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
				document.getElementById("consignorNm").style = "outline: 2px red solid !important;";
				document.getElementById("consignorCode").style = "outline: 2px red solid !important;";
			}
			else if(Consignee.toLowerCase().includes("the supreme industries") && PAN == "AAACT1344F")
			{
				document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
				document.getElementById("consignorNm").style = "outline: 2px red solid !important;";
				document.getElementById("consignorCode").style = "outline: 2px red solid !important;";
			}
			
			//Conditions based on Consignee and Notify Party Address
			if(cnAdd.includes("nepal") || npAdd.includes("nepal") || cnAdd.includes("kathmandu") || npAdd.includes("kathmandu") || cnAdd.includes("lalitpur") || npAdd.includes("lalitpur") || cnAdd.includes("bhaktpur") || npAdd.includes("bhaktpur") || cnAdd.includes("bhaktapur") || npAdd.includes("bhaktapur"))
			{
				document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
				document.getElementById("consignorAddr1").style = "outline: 2px red solid !important;";
				document.getElementById("consignorAddr2").style = "outline: 2px red solid !important;"; 
				document.getElementById("consignorAddr3").style = "outline: 2px red solid !important;";
				document.getElementById("notifyPartyAddr1").style = "outline: 2px red solid !important;"; 
				document.getElementById("notifyPartyAddr2").style = "outline: 2px red solid !important;"; 
				document.getElementById("notifyPartyAddr3").style = "outline: 2px red solid !important;"; 
				document.getElementById("notifyPartyAddr4").style = "outline: 2px red solid !important;";
				
			}
			else if(cnAdd.includes("bhutan") || npAdd.includes("bhutan") || cnAdd.includes("thim") || npAdd.includes("thim"))
			{
				document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
				document.getElementById("consignorAddr1").style = "outline: 2px red solid !important;";
				document.getElementById("consignorAddr2").style = "outline: 2px red solid !important;"; 
				document.getElementById("consignorAddr3").style = "outline: 2px red solid !important;";
				document.getElementById("notifyPartyAddr1").style = "outline: 2px red solid !important;"; 
				document.getElementById("notifyPartyAddr2").style = "outline: 2px red solid !important;"; 
				document.getElementById("notifyPartyAddr3").style = "outline: 2px red solid !important;"; 
				document.getElementById("notifyPartyAddr4").style = "outline: 2px red solid !important;";
			}
			else if(cnAdd.includes("falta") || npAdd.includes("falta"))
			{
				document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
				document.getElementById("consignorAddr1").style = "outline: 2px red solid !important;";
				document.getElementById("consignorAddr2").style = "outline: 2px red solid !important;"; 
				document.getElementById("consignorAddr3").style = "outline: 2px red solid !important;";
				document.getElementById("notifyPartyAddr1").style = "outline: 2px red solid !important;"; 
				document.getElementById("notifyPartyAddr2").style = "outline: 2px red solid !important;"; 
				document.getElementById("notifyPartyAddr3").style = "outline: 2px red solid !important;"; 
				document.getElementById("notifyPartyAddr4").style = "outline: 2px red solid !important;";
			}
		}
		
		//Conditions based on Importer / Port of Destination / Consignee / Cargo and Port of Unloading
		if((unLoadPort.toLowerCase().includes("nhava sheva") || unLoadPort.toLowerCase().includes("mundra") || unLoadPort.toLowerCase().includes("pipava")) && desctPort.includes("INDER6"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("portOfDestinationDesc").style = "outline: 2px red solid !important;";
		}
			
		if((unLoadPort.toLowerCase().includes("mundra") || unLoadPort.toLowerCase().includes("pipava")) && Consignee.toLowerCase().includes("ford india"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("consignorNm").style = "outline: 2px red solid !important;";
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") && Importer.toLowerCase().includes("epson"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("importerNm").style = "outline: 2px red solid !important;";
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") && Importer.toLowerCase().includes("kubota"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("importerNm").style = "outline: 2px red solid !important;";
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") && Importer.toLowerCase().includes("escorts kubota"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("importerNm").style = "outline: 2px red solid !important;";
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") && Importer.toLowerCase().includes("canon"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("importerNm").style = "outline: 2px red solid !important;";
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") && Importer.toLowerCase().includes("fujifilm india"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("importerNm").style = "outline: 2px red solid !important;";
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") && Importer.toLowerCase().includes("maruti suzuki"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("importerNm").style = "outline: 2px red solid !important;";
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") && (Importer.toLowerCase().includes("ve commercial") || Importer.toLowerCase().includes("volvo india")))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("importerNm").style = "outline: 2px red solid !important;";
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") && Importer.toLowerCase().includes("brother international"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("importerNm").style = "outline: 2px red solid !important;";
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") && Importer.toLowerCase().includes("maruti motor india"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("importerNm").style = "outline: 2px red solid !important;";
		}
		
		if(unLoadPort.toLowerCase().includes("nhava sheva") && Importer.toLowerCase().includes("honda motor india"))
		{
			document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
			document.getElementById("importerNm").style = "outline: 2px red solid !important;";
		}
		
		//Conditions based on Port of Unloading and UNO/IMO Code
		if(unLoadPort.toLowerCase().includes("nhava sheva"))
		{
			if(!(UNO == "ZZZZZ" && IMO == "ZZZ"))
			{
				document.getElementById("portOfUnloadingDesc").style = "outline: 2px red solid !important;";
				document.getElementById("unoCode").style = "outline: 2px red solid !important;";
				document.getElementById("imoCode").style = "outline: 2px red solid !important;";
			}
		}
		
		//Conditions based on Commodity and Cargo Movement
		if(goodsDesc.includes("household") || goodsDesc.includes("personal effects"))
		{
			document.getElementById("goodsDesc").style = "outline: 2px red solid !important;";
		}
		if(cargoMovement == "TI")
		{
			document.getElementById("cargoMovement").style = "outline: 2px red solid !important;";
		}

	}catch(err){ }

}

