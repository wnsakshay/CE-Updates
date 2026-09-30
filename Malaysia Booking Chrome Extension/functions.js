function bkgCreationWarnPopups()
{
	//DG Suspicious commodity 
	/*try
	{
		var custRemark = document.getElementsByName("xter_rmk")[0].value.toUpperCase();
		var intRemark = document.getElementsByName("inter_rmk")[0].value.toUpperCase();
		var vendRemark = document.getElementsByName("vndr_rmk")[0].value.toUpperCase();
		var doRemark = document.getElementsByName("do_rmk")[0].value.toUpperCase();
		var flag = 0;
		var DGKeywords = ["1655 TITANIUM DIOXIDE ANATASE TYPE",	"24DPE (HCI)",	"24DPE HCI",	"ACETOXY SILICONE SEALANT",	"ALKALINE BATTERIES NON-RECHARGEABLE",	"ALKALINE BATTERIES NON RECHARGEABLE",	"ALKALINE BATTERIES",	"ALKALINE BATTERY",	"ALKALINE MANGANESE BUTTON CELL",	"ALKALINE MANGANESE DRY BATTERY",	"ALKALINE MANGANESE",	"ALKALINE ZINC-MANGANESE DRY BATTERY",	"ANSMANN LI-ION BATTERY",	"ANSMANN NIMH BATTERY",	"AUTOMATIC FLOOR CLEANER",	"BAK LITHIUM-ION POLYMER CELL",	"BAK LITHIUM-ION POLYMER BATTERY",	"BATTERIES",	"BUTTON BATTERY",	"CAMERA",	"CAMERA PEN",	"CAR",	"CARBON",	"CARBON BATTERY",	"CARBON BLACK",	"CAT DEO-SD 15W40",	"CF-8879E ADHESIVE FOR TRANSFERING METALLIZED FILM",	"CHARCOAL",	"COMPATIBLE PRINTER CARTRIDGE",	"COMPUTER",	"CONDITIONER",	"CORDLESS PHONE",	"CORRECTION BRUSH",	"CORRECTION FLUID",	"CORRECTION PEN",	"CRM LOTION",	"CUPRAPULSE S 4 LEVELLER COMPOUND",	"CYLINDRICAL RECHARGEABLE BATTERY",	"CYSTEAMINE HCI",	"DEHUMIDIFER",	"DEHUMIDIFIER",	"DESMODUR 0928",	"DRY BATTERIES",	"DRY BATTERY",	"DUASYN ACID",	"ELECTRONIC CALCULATOR",	"ES 2044P",	"HJ28736 CREED SILVER MOUNTAIN",	"INK JET INK",	"INSECT KILLER",	"IPAD",	"IPHONE",	"L1154",	"AG13",	"AG10",	"LR1131",	"LEAD-ACID",	"LEAD ACID",	"LI-ION BATTER",	"LI-ION BATTERY",	"LI-ION RECHARGEABLE BATTERY CELL",	"LI-ION RECHARGEABLE BATTERY PACK",	"LITHIUM BATTERY",	"LITHIUM BUTTON CELL",	"LITHIUM CELL",	"LITHIUM ION BATTERY",	"LITHIUM ION BATTERY FOR SAMSUNG GALAXY NOTE 7",	"LITHIUM ION RECHARGEABLE BATTERY",	"LITHIUM MANGANESE DIOXIDE BUTTON BATTERIERS",	"LITHIUM METAL CELL",	"LITHIUM METAL BATTERY",	"LITHIUM POLYMER RECHARGEABLE BATTERY",	"LITHIUM-ION POLYMER RECHARGEABLE CELL",	"LITHIUM-ION RECHARGEABLE BATTERY",	"MAGNET COMPOUND PLASTIFORM 2202",	"MAGNETIZED COMMODITY",	"MANGANESE DIOXIDE LITHIUM BATTERY",	"MOBILE PHONE",	"MOTOR",	"MOTORCYCLE",	"MOTORBIKE",	"MP3",	"NAIL POLISH",	"NAIL POLISH REMOVER",	"NICKEL CADMIUM BATTERY",	"NICKEL CADMIUM RECHARGEABLE BATTERY",	"NICKEL CADMIUM SEALED CELL BATTERY",	"NICKEL METAL HYDRIDE BATTERY",	"NICKEL METAL HYDRIDE CELLS AND BATTERIES",	"NICKLE CADMIUM CELLS AND BATTERIES",	"NI-MH BATTERY",	"NI-ZN BATTERY",	"PAOC",	"PC + ABS CY6110",	"PERFECTO T 46",	"PERSONAL COMPUTER",	"PHILIPS ALKALINE BATTERY",	"PHOTO REX",	"PIKAKE JASMINE 92FRAGPIJA FRAGRANCE #276-797",	"POLYMER LI-ION BATTERY",	"POLYMER LI-ION CELL",	"POLYMER LITHIUM ION RECHARGEABLE BATTERIES",	"POPPET NAIL ART",	"PORTABLE DVD PLAYER",	"PORTABLE LI-ION RECHARGEABLE BATTERY PACK",	"PORTABLE MUSIC SYSTEM",	"RADIO",	"RECHARGEABLE",	"RECHARGEABLE LITHIUM-ION BATTERY",	"SAGITAR PROFESSIONAL ALKALINE BATTERIES",	"SAMSUNG GALAXY NOTE 7",	"SEALED LEAD ACID BATTERY",	"SHAVING FOAM",	"SHOE POLISH",	"SMART PHONE",	"SODIUM ALKYL ETHER SULPHATE",	"SOLVAPERM VIOLET RSB",	"TABLET COMPUTER",	"TABLET PC",	"TABLE TENNIS",	"TELEPHONE",	"TELEPHONE EQUIPMENT",	"TELEPHONE SET",	"USED CAR",	"USED VEHICLE",	"VALVE REGULATED LEAD-ACID RECHARGEABLE BATTERY",	"VEHICLE",	"VIBRATOR",	"WATCH",	"WIRELESS ACCESS DEVICE",	"WIRELESS PHONE",	"ZINC CHLORIDE BATTERY",	"ZINC CHLORIDE DRY BATTERY - SUM4",	"ZN MANGANESE DIOXIDE PRIMARY ALKALINE CELL",	"COMPRESSOR",	"AIR CONDITIONER",	"REFRIGERATOR",	"SPEAKER",	"HEADPHONE",	"BLUETOOTH",	"POWERBANK",	"POWER BANK",	"TRUCK",	"USED TRUCK",	"GUN",	"TOY GUN",	"RECHARGEABLE + (OBJECT)",	"REFRIGERATING MACHINE",	"REFRIGERATING EQUIPMENT",	"REFRIGERANT",	"FORKLIFT",	"CANDLE",	"ELECTRIC COOLER",	"INKJET MEDIA",	"POWER TOOLS",	"VACUUM CLEANER",	"TOYS",	"ELEMENT",	"PIGMENT",	"FREQUENCY INVERTER",	"HAND TOOLS",	"PERFUME",	"ELECTRIC SCOOTER",	"AIR RIFLE",	"CHLOROTHALONIL",	"ANTIOXIDANT RD",	"GLYPHOSATE POTASSIUM SALT",	"GLYPHOSATE IPA SALT 62%",	"GLYPHOSATE TECH 95%",	"SODIUM LAURYL ETHER SULPHATE 70%",	"SILICIC ACID COARSE",	"LIQUID WAX CARTRIDGE",	"N-(PHOSPHONOMETHYL) GLYCINE 95%",	"METHYL HYDROGEN SILICONE FLUID",	"ASCORBIC ACID",	"SOLUBIZIZED SULFUR BLACK",	"GRAPHITE ELECTRODE",	"DIFLUBENZURON",	"SULFUR DIOXIDE",	"NITRIC OXIDE",	"HYDROXYL RADICAL",	"HYDROGEN PEROXIDE",	"SIRANTOX",	"GAMMA DODECALACTONE",	"FURANONE",	"ETHYL DECADIENOATE",	"SULFURYL ACETATE",	"GLUFOSINATE-AMMONIUM",	"DIMETHYL PHENYLETHYL",	"METHYL ATRATATE",	"BIOQUIM METALAXIL",	"BALL PEN",	"CONJUGATED CREATINE",	"FERRITE MAGNET",	"FERTILIZER",	"HERBICIDE",	"VITAMINS",	"BETAINE HCL",	"TONER CARTRIDGE",	"WASHCOAT",	"SILICON WAFER",	"OXYGEN GENERATOR",	"LEAD ACID BATTERY",	"HYDRAULIC IRONWORKER",	"SPRAY LENS CLEANER KITS"]
		
		for(var i = 0; i < DGKeywords.length; i++)
		{
			if(custRemark.replace("\r\n"," ").includes(DGKeywords[i]) || intRemark.replace("\r\n"," ").includes(DGKeywords[i]) || vendRemark.replace("\r\n"," ").includes(DGKeywords[i]) || doRemark.replace("\r\n"," ").includes(DGKeywords[i]))
			{
				flag = 1;
			}
		}
		
		if(document.getElementsByName("dcgo_flg")[0].checked == true)
		{
			flag = 1;
		}
		
		if(flag == 1)
		{
			alert("Please double check the commodity for possible DG");
		}
	}
	catch(err){ }*/
	
	//Booking contact
	/*try
	{
		var BKGContactEmail = document.getElementsByName("bkg_cntc_pson_eml")[0].value;
		
		if(BKGContactEmail.trim() == "")
		{
			alert("Please update correct booking contact details");
		}
	}
	catch(err){ }*/
	
	//Gross Weight
	/*try
	{
		var grossWeight = document.getElementsByName("act_wgt")[0].value;
		
		if(grossWeight == "0.000" || grossWeight == ".000" || grossWeight == "")
		{
			alert("Please update correct booking g.weight per container");
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
				alert("Please update the reefer details");
				break;
			}
		}
	}
	catch(err){ }
	
	//Empty Pick Up
	/*try
	{
		var mPtyPickUp = document.getElementsByName("mty_pkup_yd_cd")[0].value;
		
		if(mPtyPickUp.trim() == "")
		{
			alert("Please update correct empty pick-up location");
		}
	}
	catch(err){ }*/
	
	alert("1. Please double check commodity and if possible DG please check with customer\r\n" +
		  "2. Please update the correct Booking contact details\r\n" +
		  "3. Please update correct gross weight as per container count\r\n" + 
		  "4. Please update correct empty pick-up provided by the FO\r\n" + 
		  "5. Please check if stowage is applicable\r\n" + 
		  "6. SOC count should be updated for all SOC container only\r\n" + 
		  "7. Please update correct RFA#");
}

