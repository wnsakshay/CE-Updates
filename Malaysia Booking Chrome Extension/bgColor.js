function bkgCreationHighlight()
{
	//DG Suspicious commodity 
	try
	{
		var custRemark = document.getElementsByName("xter_rmk")[0].value.toUpperCase();
		var intRemark = document.getElementsByName("inter_rmk")[0].value.toUpperCase();
		var vendRemark = document.getElementsByName("vndr_rmk")[0].value.toUpperCase();
		var doRemark = document.getElementsByName("do_rmk")[0].value.toUpperCase();
		
		var DGKeywords = ["1655 TITANIUM DIOXIDE ANATASE TYPE",	"24DPE (HCI)",	"24DPE HCI",	"ACETOXY SILICONE SEALANT",	"ALKALINE BATTERIES NON-RECHARGEABLE",	"ALKALINE BATTERIES NON RECHARGEABLE",	"ALKALINE BATTERIES",	"ALKALINE BATTERY",	"ALKALINE MANGANESE BUTTON CELL",	"ALKALINE MANGANESE DRY BATTERY",	"ALKALINE MANGANESE",	"ALKALINE ZINC-MANGANESE DRY BATTERY",	"ANSMANN LI-ION BATTERY",	"ANSMANN NIMH BATTERY",	"AUTOMATIC FLOOR CLEANER",	"BAK LITHIUM-ION POLYMER CELL",	"BAK LITHIUM-ION POLYMER BATTERY",	"BATTERIES",	"BUTTON BATTERY",	"CAMERA",	"CAMERA PEN",	"CAR",	"CARBON",	"CARBON BATTERY",	"CARBON BLACK",	"CAT DEO-SD 15W40",	"CF-8879E ADHESIVE FOR TRANSFERING METALLIZED FILM",	"CHARCOAL",	"COMPATIBLE PRINTER CARTRIDGE",	"COMPUTER",	"CONDITIONER",	"CORDLESS PHONE",	"CORRECTION BRUSH",	"CORRECTION FLUID",	"CORRECTION PEN",	"CRM LOTION",	"CUPRAPULSE S 4 LEVELLER COMPOUND",	"CYLINDRICAL RECHARGEABLE BATTERY",	"CYSTEAMINE HCI",	"DEHUMIDIFER",	"DEHUMIDIFIER",	"DESMODUR 0928",	"DRY BATTERIES",	"DRY BATTERY",	"DUASYN ACID",	"ELECTRONIC CALCULATOR",	"ES 2044P",	"HJ28736 CREED SILVER MOUNTAIN",	"INK JET INK",	"INSECT KILLER",	"IPAD",	"IPHONE",	"L1154",	"AG13",	"AG10",	"LR1131",	"LEAD-ACID",	"LEAD ACID",	"LI-ION BATTER",	"LI-ION BATTERY",	"LI-ION RECHARGEABLE BATTERY CELL",	"LI-ION RECHARGEABLE BATTERY PACK",	"LITHIUM BATTERY",	"LITHIUM BUTTON CELL",	"LITHIUM CELL",	"LITHIUM ION BATTERY",	"LITHIUM ION BATTERY FOR SAMSUNG GALAXY NOTE 7",	"LITHIUM ION RECHARGEABLE BATTERY",	"LITHIUM MANGANESE DIOXIDE BUTTON BATTERIERS",	"LITHIUM METAL CELL",	"LITHIUM METAL BATTERY",	"LITHIUM POLYMER RECHARGEABLE BATTERY",	"LITHIUM-ION POLYMER RECHARGEABLE CELL",	"LITHIUM-ION RECHARGEABLE BATTERY",	"MAGNET COMPOUND PLASTIFORM 2202",	"MAGNETIZED COMMODITY",	"MANGANESE DIOXIDE LITHIUM BATTERY",	"MOBILE PHONE",	"MOTOR",	"MOTORCYCLE",	"MOTORBIKE",	"MP3",	"NAIL POLISH",	"NAIL POLISH REMOVER",	"NICKEL CADMIUM BATTERY",	"NICKEL CADMIUM RECHARGEABLE BATTERY",	"NICKEL CADMIUM SEALED CELL BATTERY",	"NICKEL METAL HYDRIDE BATTERY",	"NICKEL METAL HYDRIDE CELLS AND BATTERIES",	"NICKLE CADMIUM CELLS AND BATTERIES",	"NI-MH BATTERY",	"NI-ZN BATTERY",	"PAOC",	"PC + ABS CY6110",	"PERFECTO T 46",	"PERSONAL COMPUTER",	"PHILIPS ALKALINE BATTERY",	"PHOTO REX",	"PIKAKE JASMINE 92FRAGPIJA FRAGRANCE #276-797",	"POLYMER LI-ION BATTERY",	"POLYMER LI-ION CELL",	"POLYMER LITHIUM ION RECHARGEABLE BATTERIES",	"POPPET NAIL ART",	"PORTABLE DVD PLAYER",	"PORTABLE LI-ION RECHARGEABLE BATTERY PACK",	"PORTABLE MUSIC SYSTEM",	"RADIO",	"RECHARGEABLE",	"RECHARGEABLE LITHIUM-ION BATTERY",	"SAGITAR PROFESSIONAL ALKALINE BATTERIES",	"SAMSUNG GALAXY NOTE 7",	"SEALED LEAD ACID BATTERY",	"SHAVING FOAM",	"SHOE POLISH",	"SMART PHONE",	"SODIUM ALKYL ETHER SULPHATE",	"SOLVAPERM VIOLET RSB",	"TABLET COMPUTER",	"TABLET PC",	"TABLE TENNIS",	"TELEPHONE",	"TELEPHONE EQUIPMENT",	"TELEPHONE SET",	"USED CAR",	"USED VEHICLE",	"VALVE REGULATED LEAD-ACID RECHARGEABLE BATTERY",	"VEHICLE",	"VIBRATOR",	"WATCH",	"WIRELESS ACCESS DEVICE",	"WIRELESS PHONE",	"ZINC CHLORIDE BATTERY",	"ZINC CHLORIDE DRY BATTERY - SUM4",	"ZN MANGANESE DIOXIDE PRIMARY ALKALINE CELL",	"COMPRESSOR",	"AIR CONDITIONER",	"REFRIGERATOR",	"SPEAKER",	"HEADPHONE",	"BLUETOOTH",	"POWERBANK",	"POWER BANK",	"TRUCK",	"USED TRUCK",	"GUN",	"TOY GUN",	"RECHARGEABLE + (OBJECT)",	"REFRIGERATING MACHINE",	"REFRIGERATING EQUIPMENT",	"REFRIGERANT",	"FORKLIFT",	"CANDLE",	"ELECTRIC COOLER",	"INKJET MEDIA",	"POWER TOOLS",	"VACUUM CLEANER",	"TOYS",	"ELEMENT",	"PIGMENT",	"FREQUENCY INVERTER",	"HAND TOOLS",	"PERFUME",	"ELECTRIC SCOOTER",	"AIR RIFLE",	"CHLOROTHALONIL",	"ANTIOXIDANT RD",	"GLYPHOSATE POTASSIUM SALT",	"GLYPHOSATE IPA SALT 62%",	"GLYPHOSATE TECH 95%",	"SODIUM LAURYL ETHER SULPHATE 70%",	"SILICIC ACID COARSE",	"LIQUID WAX CARTRIDGE",	"N-(PHOSPHONOMETHYL) GLYCINE 95%",	"METHYL HYDROGEN SILICONE FLUID",	"ASCORBIC ACID",	"SOLUBIZIZED SULFUR BLACK",	"GRAPHITE ELECTRODE",	"DIFLUBENZURON",	"SULFUR DIOXIDE",	"NITRIC OXIDE",	"HYDROXYL RADICAL",	"HYDROGEN PEROXIDE",	"SIRANTOX",	"GAMMA DODECALACTONE",	"FURANONE",	"ETHYL DECADIENOATE",	"SULFURYL ACETATE",	"GLUFOSINATE-AMMONIUM",	"DIMETHYL PHENYLETHYL",	"METHYL ATRATATE",	"BIOQUIM METALAXIL",	"BALL PEN",	"CONJUGATED CREATINE",	"FERRITE MAGNET",	"FERTILIZER",	"HERBICIDE",	"VITAMINS",	"BETAINE HCL",	"TONER CARTRIDGE",	"WASHCOAT",	"SILICON WAFER",	"OXYGEN GENERATOR",	"LEAD ACID BATTERY",	"HYDRAULIC IRONWORKER",	"SPRAY LENS CLEANER KITS"]
		
		for(var i = 0; i < DGKeywords.length; i++)
		{
			if(custRemark.replace("\r\n"," ").includes(DGKeywords[i]))
			{
				document.getElementsByName("xter_rmk")[0].style = "width:320; height:50px; resize:none; outline: 2px solid red !important;";
			}
			else
			{
				document.getElementsByName("xter_rmk")[0].style = "width:320; height:50px; resize:none";
			}
			
			if(intRemark.replace("\r\n"," ").includes(DGKeywords[i]))
			{
				document.getElementsByName("inter_rmk")[0].style = "width:320; height:50px; resize:none; outline: 2px solid red !important;";
			}
			else
			{
				document.getElementsByName("inter_rmk")[0].style = "width:320; height:50px; resize:none";
			}
			
			if(vendRemark.replace("\r\n"," ").includes(DGKeywords[i]))
			{
				document.getElementsByName("vndr_rmk")[0].style = "width:320; height:50px; resize:none; outline: 2px solid red !important;";
			}
			else
			{
				document.getElementsByName("vndr_rmk")[0].style = "width:320; height:50px; resize:none";
			}
			
			if(doRemark.replace("\r\n"," ").includes(DGKeywords[i]))
			{
				document.getElementsByName("do_rmk")[0].style = "width:320; height:50px; resize:none; outline: 2px solid red !important;";
			}
			else
			{
				document.getElementsByName("do_rmk")[0].style = "width:320; height:50px; resize:none";
			}
		}
		if(document.getElementsByName("dcgo_flg")[0].checked == true)
		{
			document.getElementsByName("btn_t1Danger")[0].style = "width: 110px; background-color: #FFA54F; outline: 2px solid red !important;";
		}
		else
		{
			document.getElementsByName("btn_t1Danger")[0].style = "width: 110px; color: rgb(115, 115, 115);";
		}
	}
	catch(err){ }
	
	//Booking contact
	/*try
	{
		var BKGContactEmail = document.getElementsByName("bkg_cntc_pson_eml")[0].value;
		
		if(BKGContactEmail.trim() == "")
		{
			document.getElementsByName("bkg_cntc_pson_eml")[0].style = "width:190px; outline: 2px solid red !important;"
		}
		else
		{
			document.getElementsByName("bkg_cntc_pson_eml")[0].style = "width:190px;"
		}
	}
	catch(err){ }*/
	
	//Gross Weight
	/*try
	{
		var grossWeight = document.getElementsByName("act_wgt")[0].value;
		
		if(grossWeight == "0.000" || grossWeight == ".000" || grossWeight == "")
		{
			document.getElementsByName("act_wgt")[0].style = "width:100px; text-align:right; outline: 3px solid red !important;"
		}
		else
		{
			document.getElementsByName("act_wgt")[0].style = "width:100px; text-align:right;"
		}
	}
	catch(err){ }*/
	
	//Reefer Details
	try
	{
		var cntrCnt = document.getElementsByClassName("GMWrap0 GMAlignCenter GMText GMCell IBSheetFont0 HideCol0C2").length;
		var tpsz = "";
		var rd = "";
		
		for(var i = 0; i < cntrCnt; i++)
		{
			tpsz = document.getElementsByClassName("GMWrap0 GMAlignCenter GMText GMCell IBSheetFont0 HideCol0C2")[i].innerHTML;
			rd = document.getElementsByClassName("GMClassReadOnly GMWrap0 GMAlignCenter GMText GMCell IBSheetFont0 HideCol0C6")[i].innerHTML;
			
			if(tpsz.startsWith("R") && (rd != "RD" || rd == ""))
			{
				document.getElementsByClassName("GMWrap0 GMAlignCenter GMText GMCell IBSheetFont0 HideCol0C2")[i].style = "background-color: #f18282;";
				break;
			}
			else
			{
				document.getElementsByClassName("GMWrap0 GMAlignCenter GMText GMCell IBSheetFont0 HideCol0C2")[i].style = "background-color: rgb(212, 231, 255);";
			}
		}
		if(document.getElementsByName("rc_flg")[0].checked == true)
		{
			document.getElementsByName("btn_t1Reefer")[0].style = "width: 110px; background-color: #FFA54F;";
		}
		else
		{
			document.getElementsByName("btn_t1Reefer")[0].style = "width: 110px; color: rgb(115, 115, 115);";
		}
	}
	catch(err){ }
	
	//SOC Container
	try
	{
		document.querySelectorAll("#t1sheet1 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont0.GMCellHeader.IBSheetFont0.HideCol0C7")[0].style="background-color: #f18282";
	}
	catch(err){ }
	
	//Empty Pick Up
	/*try
	{
		var mPtyPickUp = document.getElementsByName("mty_pkup_yd_cd")[0].value;
		
		if(mPtyPickUp.trim() == "")
		{
			document.getElementsByName("mty_pkup_yd_cd")[0].style = "width:74px; ime-mode:disabled; text-transform:uppercase; outline: 2px solid red !important;"
		}
		else
		{
			document.getElementsByName("mty_pkup_yd_cd")[0].style = "width:74px; ime-mode:disabled; text-transform:uppercase;"
		}
	}
	catch(err){ }*/
}