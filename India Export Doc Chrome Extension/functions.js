function BKGCreation_popup()
{
	try
	{
		var shCode = document.getElementsByName("s_cust_cnt_cd")[0].value + document.getElementsByName("s_cust_seq")[0].value;
		var shName = document.getElementsByName("s_cust_nm")[0].value;
		var fwName = document.getElementsByName("f_cust_nm")[0].value;
		var cnName = document.getElementsByName("c_cust_nm")[0].value;
		var cnptName = document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].value;
		var pol = document.getElementsByName("bkg_pol_cd")[0].value;
		var blprefix = document.getElementsByName("bkg_no")[0].value;
		var por = document.getElementsByName("bkg_por_cd")[0].value;
		var pod = document.getElementsByName("bkg_pod_cd")[0].value;
		var del = document.getElementsByName("bkg_del_cd")[0].value;
		var reefer = document.getElementsByName("rc_flg")[0].checked;
		var podTerminal = document.getElementById("bkg_pod_yd_cd").value;
		var delTerminal = document.getElementById("bkg_del_yd_cd").value;
		var sc = document.getElementById("sc_no").value;
		var rfa = document.getElementsByName("rfa_no")[0].value;
		
		
		//HONDA CARS INDIA
		try
		{//11Jan24
			if(shName.startsWith("HONDA CARS INDIA") || fwName.startsWith("HONDA CARS INDIA") || cnName.startsWith("HONDA CARS INDIA") || cnptName.startsWith("HONDA CARS INDIA"))
			{
				alert("Honda Customer : \r\nPlease check email from Onshore for Seal No. \r\nIf not, then please raise the query to Onshore on Service now\r\nThe list of Seal no to be check in sheet were TL will add the BL no and Seal received from Onshore.\r\nInvoice not to be sent to Customer, only rating to be done");
			}
		}catch(err){	}
		
		//MARUTI SUZUKI INDIA
		try
		{//28Aug24
			if(fwName.startsWith("MARUTI SUZUKI INDIA"))
			{
				alert("Maruti Suzuki India Ltd Customer : \r\nOAR charge to be on Prepaid basis \r\nand invoice to be sent to bipin.kumar@one-line.com as per DSOP \r\nRate to be selected as per POL matching if multiple rates flowing for same weight slab");
			}
		}catch(err){	}
		
		//IKEA
		try
		{//6Jan24
			if(shName.startsWith("IKEA") || fwName.startsWith("IKEA") || cnName.startsWith("IKEA") || cnptName.startsWith("IKEA"))
			{
				alert("IKEA Customer : \r\nThird country payer to be updated as per DSOP,  \r\nFRT PAYABLE AT SIN - Payer code to be used as CH100404 \r\nand all charges will be 'Collect'");
			}
		}catch(err){	}
		
		//DACHSER INDIA
		try
		{//11Jan24
			if(shName.startsWith("DACHSER INDIA") || fwName.startsWith("DACHSER INDIA") || cnName.startsWith("DACHSER INDIA") || cnptName.startsWith("DACHSER INDIA"))
			{
				alert("DACHSER INDIA Customer : \r\nIf Invoice party is DACHSER INDIA, all freight invoices of import & export to be issued in 'USD' only");
			}
		}catch(err){	}
		
		//GOODPACK IBC
		try
		{//28Aug24
			if(cnptName.startsWith("GOODPACK"))
			{
				alert("GOODPACK IBC Customer: \r\n1. ITR/PO No. must be correctly updated under Booking creation >> Reference no>> OB Invoice Reference (ITR/PO) (Do not Add 'No') \r\n2. Format to be used, e.g.: ITR:5004726021 PO:4501667751 \r\n3. Details should match between the description and the booking reference number.");
			}
		}catch(err){	}

		//TOYOTA KIRLOSKAR
		try
		{//28Aug24
			if(shName.startsWith("TOYOTA KIRLOSKAR"))
			{
				alert("TOYOTA KIRLOSKAR Customer: /r/nTOYOTO Draft to be Hold if rating is not available. \r\nAuditor will send the draft. \r\nInform TL if you get Toyoto BL");
			}
		}catch(err){	}
		
		//THE GAP
		try
		{//28Aug24
			if(cnptName.startsWith("THE GAP"))
			{
				alert("THE GAP Customer: \r\nCheck on ESI booking Tab for Split SI's also further check with Supervisor before proceed");
			}
		}catch(err){	}
		
		//DHL
		try
		{//28Aug24
			if(fwName.startsWith("DHL "))
			{
				alert("DHL Customer: \r\nOnly if Payer DHL invoice to be hold.");
			}
		}catch(err){	}
		
		//ALLANASONS
		try
		{//28Aug24
			if(cnptName.startsWith("ALLANASONS"))
			{
				alert("ALLANASONS Customer: \r\nInvoice hold.");
			}
		}catch(err){	}
		
		//WELSPUN
		try
		{//28Aug24
			if(fwName.startsWith("WELSPUN"))
			{
				alert("WELSPUN Customer: \r\nRefer CSOP and Proceed for split with two different payer code and issue currency mentioned in CSOP.\r\nIf still issue check with supervisor.");
			}
		}catch(err){	}
		
		//BRITISH AMERICAN TOBACCO
		try
		{//28Aug24
			if(cnptName.startsWith("BRITISH AMERICAN TOBACCO"))
			{
				alert("BRITISH AMERICAN TOBACCO Customer: \r\nThird country code : IPSBB GB 103662");
			}
		}catch(err){	}
		
		//GADRE MARINE EXPORT PRIVATE LIMITED
		try
		{//14Dec24
			if(fwName.startsWith("GADRE MARINE EXPORT PRIVATE LIMITED"))
			{
				alert("As per SI remark : \r\nInvoice to be issued in both Currency.\r\nIf its revised SI check first SI for the remark.");
			}
		}catch(err){	}
		
		//CNPT UNILEVER SUPPLY CHAIN COMPANY AG & FWDR APM TERMINALS INDIA PRIVATE LIMITED
		try
		{//17Dec24
			if(cnptName.startsWith("UNILEVER SUPPLY CHAIN COMPANY") && (fwName.startsWith("APM TERMINALS INDIA PRIVATE LIMITED") || fwName.startsWith("DAMCO INDIA PRIVATE LIMITED")))
			{
				alert("If Contract party : UNILEVER SUPPLY CHAIN COMPANY AG\r\nForwarder :  APM TERMINALS INDIA PRIVATE LIMITED or\r\nForwarder : DAMCO INDIA PRIVATE LIMITED\r\nRefer SI remark for Payer details : \r\nOFT/Freight  : Prepaid :  Shipper - Payer as shippper\r\nTHL : Prepaid : Shipper - Payer as Shipper\r\nPayer name address, address and gst no. \r\nIf both payer mentioned for origin then raise query.");
			}
		}catch(err){	}
		
		//shName MICHELIN INDIA PRIVATE LIMITED & FWDR NTC LOGISTICS INDIA PRIVATE LIMITED
		try
		{//14Dec24
			if(shName.startsWith("MICHELIN INDIA PRIVATE LIMITED") && fwName.startsWith("NTC LOGISTICS INDIA PRIVATE LIMITED"))
			{
				alert("Shipper : MICHELIN INDIA PRIVATE LIMITED\r\nFwder NTC LOGISTICS INDIA PRIVATE LIMITED\r\n\r\nRefer SI remark !st Remark and update : Payer as shippper.");
			}
		}catch(err){	}
		
		//shName SKODA AUTO VOLKSWAGEN INDIA PRIVATE LIMITED
		try
		{//10Mar25
			if(shName.startsWith("SKODA AUTO VOLKSWAGEN INDIA"))
			{
				alert("Shipper : SKODA AUTO VOLKSWAGEN INDIA PRIVATE LIMITED\r\nPayer code will be IN-208500 and Invoice to be sent to Skoda email id only. \r\nChange the SI contact Email ID as per DSOP as below\r\nsagar.mahajan@skodavw.co.in\r\njoy.aich@skoda-vw.co.in");
			}
		}catch(err){	}
		
		//Kavita 23/06/25
		//KUEHNE NAGEL
		try
		{
			var por = document.getElementsByName("bkg_por_cd")[0].value.substring(0,2);
			if(fwName.startsWith("KUEHNE NAGEL") && por == "IN")
			{
				alert("Invoice to be issued on this email id : kn_india@eu-link.tradeshift.com");
			}
		}catch(err) { }
		
		//Kavita 23/06/25
		//TVS SCS GLOBAL FREIGHT SOLUTIONS LIMITED 
		try
		{
			var BLPre = document.getElementsByName("bkg_no")[0].value.substring(0,3);
			if(fwName.startsWith("TVS SCS GLOBAL FREIGHT SOLUTIONS") && BLPre == "BLR")
			{
				alert("Kindly read the SI remark for Freight USD currency. (Both)");
			}
		}catch(err) { }
		
		//Kavita 27/06/25
		//FORD INDIA PVT.LTD
		try
		{
			var BLPre = document.getElementsByName("bkg_no")[0].value.substring(0,3);
			if(shName.startsWith("FORD INDIA") && BLPre == "GIN")
			{
				alert("Payer will be FORD\r\nTHL to be paid at Origin Prepaid.");
			}
		}catch(err) { }
		
		//Kavita 13/08/25
		//Shipper : CEVA LOGISTICS INDIA PRIVATE LIMITED //Contract party : CATERPILLAR INC.
		try
		{
			if(pol == "INMAA" || pol == "INKTP")
			{
				if(shName.startsWith("CEVA LOGISTICS INDIA") && cnptName.startsWith("CATERPILLAR"))
				{
					alert("Refer DSOP for Payer code only");
				}
			}
		}catch(err){}
		
		//Kavita 13/08/25
		//BL Prefix DEL / JAI / PIT / BLR / LUH
		try
		{
			if(blprefix.startsWith("DEL") || blprefix.startsWith("JAI") || blprefix.startsWith("PIT") || blprefix.startsWith("BLR") || blprefix.startsWith("LUH"))
			{
				alert("Make sure to check Booking Remark - Liner PDA (OR) Shipper PDA");
			}
		}catch(err){}
		
		//Constraints Tab pop
		try
		{
			if(por.startsWith("IN") && pol.startsWith("IN") && pod == "IDPWG" && del == "IDPWG")
			{
				window.prompt("Please click the constraint tab and read the constraint remarks before proceeding with the booking. (Yes/No)");
			}
		}catch(err){}
		
		//Kavita 3/3/26
		try
		{
			if(pol.startsWith("IN") && (reefer))
			{
				alert("AS DECLARED BY THE SHIPPER\n\n" + "\"CARGO IS STOWED IN A REFRIGERATED\n" + "CONTAINER SET BY THE SHIPPER AT\n" + "THE CARRYING TEMPERATURE OF\n" + "- OR + XX DEGREES CELSIUS.\"");
			}
		}
		catch(err){}
		
		try
		{
			if(shCode == "IN113777" && pol.startsWith("IN"))
			{
				alert("Check if any DTHC Prepaid in SI Remarks");
			}
		}catch(err){}
		
		try
		{				
			//Kavita 3/3/26
			
			if(pol.startsWith("IN") && (del.startsWith("US")|| del.startsWith("CA")))
			{
				alert("Have you checked the filer type against the contract type?");
			}
			
		}catch(err){	}
		
		try
		{
			var pTerminal = pod + podTerminal;
			var dTerminal = del + delTerminal;
			
			var CodeList = new Set([ "MMRGN05", "MMRGN05", "MMRGN03", "MMRGN03", "MMTLA01", "MMTLA01", "MMRGN01", "MMRGN01", "THBKK01", "THBKK01", 
				"THBBK03", "THBBK03", "THBKK02", "THBKK02", "THBKK05", "THBKK05", "VNSGN02", "VNSGN02", "VNSGN08", "VNSGN08", "VNSGN05", "VNSGN05", 
				"VNSGN18", "VNSGN18", "MYPKG02", "MYPKG02", "MYPKG01", "MYPKG01", "EGALY20", "EGALY20", "EGALY21", "EGALY21", "BDDAC01", "BDDAC01", 
				"BDDAC02", "BDDAC02", "BDDAC30", "BDDAC30" ]);
			if(CodeList.has(pTerminal)	||	CodeList.has(dTerminal))
			{
				alert("Please validate the terminal details from the customer & Select the correct Terminal code in the POD/DEL");
			}
		}
		catch(err){ }
		
		//CNPT NIKE, INC & SC/RFA GCM0769B25 / GCM0769B26 //AbdurRahman Mansoor // 22/6/26
		try
		{
			if(cnptName.startsWith("NIKE, INC") && (sc == "GCM0769B25" || rfa == "GCM0769B25" || sc == "GCM0769B26" || rfa == "GCM0769B26"))
			{
				alert("NIKE Shipment:  Required to follow CSOPs and add under customer remarks in the first line as 'A GRADE BOX'.");
			}
		}
		catch(err){ }
		
		return true;
	}catch(err){ }
}

function Customer_popup()
{
	try
	{
		var sh = document.getElementsByName("sh_cust_lgl_eng_nm")[0].value;
		var SHPRPrf = document.getElementsByName('sh_cust_cnt_cd')[0].value.substr(0,2);
		var shName = document.getElementsByName("sh_cust_nm")[0].value;
		var SHPRAdd = document.getElementsByName('sh_cust_addr')[0].value;
		var cn = document.getElementsByName("cn_cust_lgl_eng_nm")[0].value;
		var CNEEPrf = document.getElementsByName('cn_cust_cnt_cd')[0].value.substr(0,2);
		var cnName = document.getElementsByName("cn_cust_nm")[0].value;
		var CNEEAdd = document.getElementsByName('cn_cust_addr')[0].value;
		var nf = document.getElementsByName("nf_cust_lgl_eng_nm")[0].value;
		var NTFYPrf = document.getElementsByName('nf_cust_cnt_cd')[0].value.substr(0,2);
		var nfName = document.getElementsByName("nf_cust_nm")[0].value;
		var NTFYAdd = document.getElementsByName('nf_cust_addr')[0].value;
		var fw = document.getElementsByName("ff_cust_lgl_eng_nm")[0].value;
		var fwName = document.getElementsByName("ff_cust_nm")[0].value;
		var an = document.getElementsByName("an_cust_lgl_eng_nm")[0].value;
		var ANTFYPrf = document.getElementsByName('an_cust_cnt_cd')[0].value.substr(0,2);
		var anName = document.getElementsByName("an_cust_nm")[0].value;
		var POD = document.getElementsByName('pod_cd')[0].value.substr(0,2);
		var DEl = document.getElementsByName('del_cd')[0].value.substr(0,2);
		var EXPREF = document.getElementsByName('ex_cust_nm')[0].value;
		var countryOrigin = document.getElementsByName('org_cnt_nm')[0].value;
		var POL = document.getElementsByName('pol_cd')[0].value.substr(0,2);
		var flag = 0;
			
		var dueCCode = ["AE",	"AF",	"BA",	"BY",	"CD",	"CF",	"EE",	"EG",	"FI", "HT",	"IQ",	"JO",	"LB",	"LT",	"LV",	"ML",	"MM",	"NI",	"RS",	"RU",	"SD",	"SO",	"SS",	"SY", "TN",	"TR",	"UA",	"VE",	"YD",	"ZW"];
		var dueCName = ["AFGHANISTAN",	"ARAB",	"BELARUS",	"BOSNIA",	"BOSNIA AND HERZEGOVINA",	"BURMA",	"CENTRAL AFRICA",	"CONGO",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FINLAND", "HAITI",	"HERZEGOVINA",	"IRAQ",	"JORDAN",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MYANMAR",	"NICARAGUA",	"RUSSIA",	"SERBIA",	"SOMALIA",	"SOUTH SUDAN",	"SUDAN", "SYRIA",	"TUNISIA",	"TURKEY",	"TURKIYE",	"U.A.E",	"UAE",	"UNITED ARAB EMIRATES",	"VENEZUELA",	"YEMEN",	"ZIMBABWE"];
			
		var pro_Keyword = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEP",	"ALEPO",	"ALEPPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHIA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MAH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABANAS",	"CAIBARIEN",	"CAMAGUEY",	"CANKOY",	"CARDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUBA",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"INKERMAN",	"IRAN",	"IRAN SHAHR",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JUCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOZLOV",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATTAKIA",	"LAVAN",	"LEREDI",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHHAD",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MESHED",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORON",	"MOSUL",	"NAJIN",	"NAKHJAVAN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PAYAM",	"PEREKOP",	"PERSEPOLIS",	"PILON",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATI",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QASABEHEKARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TANAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKY",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STARYI KRYM",	"SUDAK",	"SWEIDA",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TANAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+ 53",	"+850",	"+ 850",	"+963",	"+ 963",	"+98",	"+ 98",	"+7",	"+ 7",	"+380 61",	"+380-61",	"+380 55",	"+380-55",	"+375",	"+ 375"];

		var LACode = ["AR", "BO", "BQ", "BR", "CL" , "CO", "CW", "EC", "FK", "GF", "KY", "PE", "PN", "PY", "SR", "UY", "VE"];

		
		//HONDA CARS INDIA
		try
		{
			if(sh.startsWith("HONDA CARS INDIA") || cn.startsWith("HONDA CARS INDIA") || nf.startsWith("HONDA CARS INDIA") || fw.startsWith("HONDA CARS INDIA") || an.startsWith("HONDA CARS INDIA"))
			{
				alert("Honda Customer : \r\nPlease check email from Onshore for Seal No. \r\nIf not, then please raise the query to Onshore on Service now\r\nThe list of Seal no to be check in sheet were TL will add the BL no and Seal received from Onshore.\r\nInvoice not to be sent to Customer, only rating to be done");
			}
			else if(shName.startsWith("HONDA CARS INDIA") || cnName.startsWith("HONDA CARS INDIA") || nfName.startsWith("HONDA CARS INDIA") || fwName.startsWith("HONDA CARS INDIA") || anName.startsWith("HONDA CARS INDIA"))
			{
				alert("Honda Customer : \r\nPlease check email from Onshore for Seal No. \r\nIf not, then please raise the query to Onshore on Service now\r\nThe list of Seal no to be check in sheet were TL will add the BL no and Seal received from Onshore.\r\nInvoice not to be sent to Customer, only rating to be done");
			}
		}catch(err){	}
		
		//MARUTI SUZUKI INDIA
		try
		{
			if(fw.startsWith("MARUTI SUZUKI INDIA"))
			{
				alert("Maruti Suzuki India Ltd Customer : \r\nOAR charge to be on Prepaid basis \r\nand invoice to be sent to bipin.kumar@one-line.com as per DSOP \r\nRate to be selected as per POL matching if multiple rates flowing for same weight slab");
			}
			else if(fwName.startsWith("MARUTI SUZUKI INDIA"))
			{
				alert("Maruti Suzuki India Ltd Customer : \r\nOAR charge to be on Prepaid basis \r\nand invoice to be sent to bipin.kumar@one-line.com as per DSOP \r\nRate to be selected as per POL matching if multiple rates flowing for same weight slab");
			}
		}catch(err){	}
		
		//IKEA
		try
		{
			if(sh.startsWith("IKEA") || cn.startsWith("IKEA") || nf.startsWith("IKEA") || fw.startsWith("IKEA") || an.startsWith("IKEA"))
			{
				alert("IKEA Customer : \r\nThird country payer to be updated as per DSOP,  \r\nFRT PAYABLE AT SIN - Payer code to be used as CH100404 \r\nand all charges will be 'Collect'");
			}
			else if(shName.startsWith("IKEA") || cnName.startsWith("IKEA") || nfName.startsWith("IKEA") || fwName.startsWith("IKEA") || anName.startsWith("IKEA"))
			{
				alert("IKEA Customer : \r\nThird country payer to be updated as per DSOP,  \r\nFRT PAYABLE AT SIN - Payer code to be used as CH100404 \r\nand all charges will be 'Collect'");
			}
		}catch(err){	}
		
		//DACHSER INDIA
		try
		{
			if(sh.startsWith("DACHSER INDIA") || cn.startsWith("DACHSER INDIA") || nf.startsWith("DACHSER INDIA") || fw.startsWith("DACHSER INDIA") || an.startsWith("DACHSER INDIA"))
			{
				alert("DACHSER INDIA Customer : \r\nIf Invoice party is DACHSER INDIA, all freight invoices of import & export to be issued in 'USD' only");
			}
			else if(shName.startsWith("DACHSER INDIA") || cnName.startsWith("DACHSER INDIA") || nfName.startsWith("DACHSER INDIA") || fwName.startsWith("DACHSER INDIA") || anName.startsWith("DACHSER INDIA"))
			{
				alert("DACHSER INDIA Customer : \r\nIf Invoice party is DACHSER INDIA, all freight invoices of import & export to be issued in 'USD' only");
			}
		}catch(err){	}
		
		//Consignee & Notify Country should match with the del code
		try
		{
			if(DEl != CNEEPrf && DEl != NTFYPrf )
			{
				alert("Consignee and Notify party not matching with DEL country. Kindly raise query to customer for one party from destination");
			}
		}catch(err){	}
		
		if (flag == 0)
		{
			for(var i=0; i<dueCCode.length; i++)
			{
				if (SHPRPrf == dueCCode[i] || CNEEPrf == dueCCode[i] || NTFYPrf == dueCCode[i] || ANTFYPrf == dueCCode[i] || POD == dueCCode[i] || DEl == dueCCode[i])
				{
					flag = 1;
					window.prompt("Create SANCTION CHECK FORM for Due Diligence Countries. '" + dueCCode[i] + "'.");
				}
			}
		}
		if (flag == 0)
		{
			for(var j=0; j<dueCName.length; j++)
			{
				if (shName.replace("\r\n"," ").includes(dueCName[j]) || cnName.replace("\r\n"," ").includes(dueCName[j]) || nfName.replace("\r\n"," ").includes(dueCName[j]) || anName.replace("\r\n"," ").includes(dueCName[j]) || EXPREF.replace("\r\n"," ").includes(dueCName[j]) || SHPRAdd.replace("\r\n"," ").includes(dueCName[j]) || CNEEAdd.replace("\r\n"," ").includes(dueCName[j]) || NTFYAdd.replace("\r\n"," ").includes(dueCName[j]) || countryOrigin.replace("\r\n"," ").includes(dueCName[j]))
				{
					flag = 1;
					window.prompt("Create SANCTION CHECK FORM for Due Diligence Countries. '" + dueCName[j] + "'.");
				}
			}
		}
		
		for(var j=0; j<pro_Keyword.length; j++)
		{
			if (shName.replace("\r\n"," ").includes(pro_Keyword[j]) || cnName.replace("\r\n"," ").includes(pro_Keyword[j]) || nfName.replace("\r\n"," ").includes(pro_Keyword[j]) || anName.replace("\r\n"," ").includes(pro_Keyword[j]) || EXPREF.replace("\r\n"," ").includes(pro_Keyword[j]) || SHPRAdd.replace("\r\n"," ").includes(pro_Keyword[j]) || CNEEAdd.replace("\r\n"," ").includes(pro_Keyword[j]) || NTFYAdd.replace("\r\n"," ").includes(pro_Keyword[j]) || countryOrigin.replace("\r\n"," ").includes(pro_Keyword[j]))
			{
				window.prompt("Prohibited Country , Location, Keyword found. '" + pro_Keyword[j] + "'.");
			}
		}
		
		try
		{
			//Kavita 3/3/26
			if(POL == "IN" && DEl == "TH")
			{
				if(cnName.includes("MASTEX CO.,LTD") || nfName.includes("MASTEX CO.,LTD"))
				{
					alert("Code to be selected : TH- 103737\n\n69/6 Moo 2, Pinklao-Nakorn Chaisri Rd., \nTambon Khunkaew, \nAmphur Nakorn Chaisri, \nNakornprathom 73120\n\n\nCode to be selected : TH - 503059\n\n69/5 Moo 2, Pinklao-Nakorn Chaisri Rd., \nTambon Khunkaew, Amphur Nakorn Chaisri, \nNakornprathom 73120");
				}
			}
			if(POL == "IN" && (DEl == "US" || DEl == "CA"))
			{
				alert("Have you checked if the contract party matches the shipper/consignee?");
			}
		}catch(err){}
		
		
		try
		{
			if(EXPREF.includes("IN-TRANSIT") || EXPREF.includes("IN TRANSIT") || EXPREF.includes("INTRANSIT"))
			{
				for(var i = 0; i < 2; i ++)
				{
					let comment = prompt("IN-TRANSIT :  Have you sent the query email to the Onshore? (Yes/No)");
					if (comment == null)
					{
						i = -1;
					}
					else
					{
						if(comment.trim().toLowerCase() == "no")
						{
							alert("Please send the query email!");
							document.getElementById("btn_t7Save").disabled = true;
							break;
						}
						else if(comment.trim().toLowerCase() == "yes")
						{
							document.getElementById("btn_t7Save").disabled = false;
							break;
						}
						else
						{
							alert("Please enter valid comment (Yes/No)");
							i = -1;
						}
					}
				}
			}
		}
		catch(err){ }
		
		try
		{
			for(var i = 0; i < LACode.length; i++)
			{
				if(DEl == LACode[i])
				{
					alert("Update the tax ID under the customer address first line, Consignee/Notify  party");
					return;
				}
			}
		}
		catch(err){ }
		
	}
	catch(err){ }
}

function Charge_popup()
{
	try
	{
		var rfa = document.getElementsByName("frm_t10sheet1_rfa_no")[0].value;
		var sc = document.getElementsByName("frm_t10sheet1_sc_no1")[0].value;
		var del = document.getElementsByName("frm_t10sheet1_del_cd")[0].value;
		
		//MARUTI SUZUKI INDIA SMZB00044A
		try
		{
			if(rfa == "SMZB00044A" || sc == "SMZB00044A")
			{
				alert("Maruti Suzuki India Ltd Customer : \r\nOAR charge to be on Prepaid basis \r\nand invoice to be sent to bipin.kumar@one-line.com as per DSOP \r\nRate to be selected as per POL matching if multiple rates flowing for same weight slab");
			}
		}catch(err){	}
		
		//IKEA SHAB01254A
		try
		{
			if(rfa == "SHAB01254A" || sc == "SHAB01254A")
			{
				alert("IKEA Customer : \r\nThird country payer to be updated as per DSOP,  \r\nFRT PAYABLE AT SIN - Payer code to be used as CH100404 \r\nand all charges will be 'Collect'");
			}
		}catch(err){	}
		
		//Multiple Rate US Shipment USLAX/USLGB
		if(del == "USLAX" || del == "USLGB")
		{
			alert("If Multiple rates for USLAX and USLGB to be selected as per DEL matching");
		}
		
		//Kavita 23/06/25 update the del on 26/08/26
		try
		{
			var por = document.getElementsByName("frm_t10sheet1_por_cd")[0].value.substring(0,2);
			var del = document.getElementsByName("frm_t10sheet1_del_cd")[0].value.substring(0,2);
			
			if(por == "IN" && (del == "BR"))//del == "AR" || del == "CL"
			{
				alert("Send a Freighted draft after rating.");
			}
		}catch(err){ }
	}catch(err){ }
}

function Prepaid_Code_popup()
{
	try
	{
		for(var i = 0; i < 2; i ++)
		{
			let comment = prompt("Payment Term :  If prepaid - Check FOB contract SOP and Collect term cannot be given to Sri Lanka, Nigeria, Tanzania, Argentina and Myanmar destination\r\nFor Ghana CIF Local contract, Freight collect is not allowed\r\nPayer code : Should be as per SI Remark, DSOP, Third Country\r\nGST no and address of payer should be as per SI remarks details\r\nHave you validated above checks ? (Yes/No)");
			if (comment == null)
			{
				i = -1;
			}
			else
			{
				if(comment.trim().toLowerCase() == "no")
				{
					alert("Please update prepaid office accordingly");
					document.getElementById("btn_t10save").disabled = true;
					break;
				}
				else if(comment.trim().toLowerCase() == "yes")
				{
					document.getElementById("btn_t10save").disabled = false;
					break;
				}
				else
				{
					alert("Please enter valid comment (Yes/No)");
					i = -1;
				}
			}
		}
	}catch(err){	}
}

function enableChrgSave()
{
	try
	{
		document.getElementById("btn_t10save").disabled = false;
	}catch(err){	}
}

function ar_invoice()
{
	try
	{
		for(var i = 0; i < 2; i ++)
		{
			let comment = prompt("Did you check the negative charge code in the Charge tab?\r\nIf Negative charge amount in prepaid kindly split the invoice manual.\r\n(Yes/No)");
			if (comment == null)
			{
				i = -1;
			}
			else
			{
				if(comment.trim().toLowerCase() == "yes" || comment.trim().toLowerCase() == "no")
				{
					break;
				}
				else
				{
					alert("Please enter valid comment (Yes/No)");
					i = -1;
				}
			}
		}
	}catch(err){	}
}

function enable_ar_invoice()
{
	try
	{
		document.getElementById("btn_goto").disabled = false;
		document.getElementById("btn_eml").disabled = false;
	}catch(err){	}
}

function cntrTab_Popups()
{
	//Container Volume Difference
	try
	{
		var result = document.getElementsByName("btn_VarianceDtl")[0].style.color;
		
		if(result != "rgb(115, 115, 115)" || result == "red")
		{
			alert("Volume difference highlighted in red - Query to be raised to Onshore");
		}
	}catch(err){	}
	
	//Kavita 27/06/25
	try
	{
		var por = document.getElementsByName("por_cd")[0].value.substring(0,2);
		
		if(por == "IN")
		{
			alert("CNTR  >>  Seal no.\r\nSeal no. to be ticked if it's manually updated or through BLINK correction.");
		}
	}catch(err){ }
}

function FOB_contract()
{
	var sc = "";
	var rfa = "";
	var taa = "";
	var fobflag = 0;
	var frt = "";
		
	try
	{
		try{ sc = document.getElementsByName("sc_no")[0].value; } catch(err){ }
		try{ rfa = document.getElementsByName("rfa_no")[0].value; } catch(err){ }
		try{ taa = document.getElementsByName("taa_no")[0].value; } catch(err){ }
		
		if(sc != "")
		{
			if(!(sc.startsWith("MUM") || sc.startsWith("DEL") || sc.startsWith("NAG") || sc.startsWith("PIT") || sc.startsWith("BRD") || sc.startsWith("TUT") || sc.startsWith("LUH") || sc.startsWith("COK") || sc.startsWith("AMD") || sc.startsWith("MAA") || sc.startsWith("BLR") || sc.startsWith("CCU") || sc.startsWith("HYD") || sc.startsWith("GOI") || sc.startsWith("MAN") || sc.startsWith("VTZ") || sc.startsWith("VVA") || sc.startsWith("PNQ") || sc.startsWith("GIN") || sc.startsWith("CJB") || sc.startsWith("TMUM") || sc.startsWith("TDEL") || sc.startsWith("TNAG") || sc.startsWith("TPIT") || sc.startsWith("TBRD") || sc.startsWith("TTUT") || sc.startsWith("TLUH") || sc.startsWith("TCOK") || sc.startsWith("TAMD") || sc.startsWith("TMAA") || sc.startsWith("TBLR") || sc.startsWith("TCCU") || sc.startsWith("THYD") || sc.startsWith("TGOI") || sc.startsWith("TMAN") || sc.startsWith("TVTZ") || sc.startsWith("TVVA") || sc.startsWith("TPNQ") || sc.startsWith("TGIN") || sc.startsWith("TCJB") || sc.startsWith("DUM00") || sc.startsWith("R0000") || sc.startsWith("S0000") || sc.startsWith("TRF")))
			{
				fobflag = 1;
			}
			if(sc.startsWith("DUM0000001"))
			{
				alert("Dummy Contract - raise query to Onshore");
			}
			if(sc.startsWith("R000"))
			{
				alert("One Quote Contract -  Split and combine not allowed for ONE Quote - raise query to Onshore incase customer is asking for split/ combine");
			}
			if(sc.startsWith("S000"))
			{
				alert("One Quote Contract -  Split and combine not allowed for ONE Quote - raise query to Onshore incase customer is asking for split/ combine");
			}
		}
		else if(rfa != "")
		{
			if(!(rfa.startsWith("MUM") || rfa.startsWith("DEL") || rfa.startsWith("NAG") || rfa.startsWith("PIT") || rfa.startsWith("BRD") || rfa.startsWith("TUT") || rfa.startsWith("LUH") || rfa.startsWith("COK") || rfa.startsWith("AMD") || rfa.startsWith("MAA") || rfa.startsWith("BLR") || rfa.startsWith("CCU") || rfa.startsWith("HYD") || rfa.startsWith("GOI") || rfa.startsWith("MAN") || rfa.startsWith("VTZ") || rfa.startsWith("VVA") || rfa.startsWith("PNQ") || rfa.startsWith("GIN") || rfa.startsWith("CJB") || rfa.startsWith("TMUM") || rfa.startsWith("TDEL") || rfa.startsWith("TNAG") || rfa.startsWith("TPIT") || rfa.startsWith("TBRD") || rfa.startsWith("TTUT") || rfa.startsWith("TLUH") || rfa.startsWith("TCOK") || rfa.startsWith("TAMD") || rfa.startsWith("TMAA") || rfa.startsWith("TBLR") || rfa.startsWith("TCCU") || rfa.startsWith("THYD") || rfa.startsWith("TGOI") || rfa.startsWith("TMAN") || rfa.startsWith("TVTZ") || rfa.startsWith("TVVA") || rfa.startsWith("TPNQ") || rfa.startsWith("TGIN") || rfa.startsWith("TCJB") || rfa.startsWith("DUM00") || rfa.startsWith("R0000") || rfa.startsWith("S0000") || rfa.startsWith("TRF")))
			{
				fobflag = 1;
			}
			if(rfa.startsWith("DUM0000001"))
			{
				alert("Dummy Contract - raise query to Onshore");
			}
			if(rfa.startsWith("R000"))
			{
				alert("One Quote Contract -  Split and combine not allowed for ONE Quote - raise query to Onshore incase customer is asking for split/ combine");
			}
			if(rfa.startsWith("S000"))
			{
				alert("One Quote Contract -  Split and combine not allowed for ONE Quote - raise query to Onshore incase customer is asking for split/ combine");
			}
		}
		else if(taa != "")
		{
			if(!(taa.startsWith("MUM") || taa.startsWith("DEL") || taa.startsWith("NAG") || taa.startsWith("PIT") || taa.startsWith("BRD") || taa.startsWith("TUT") || taa.startsWith("LUH") || taa.startsWith("COK") || taa.startsWith("AMD") || taa.startsWith("MAA") || taa.startsWith("BLR") || taa.startsWith("CCU") || taa.startsWith("HYD") || taa.startsWith("GOI") || taa.startsWith("MAN") || taa.startsWith("VTZ") || taa.startsWith("VVA") || taa.startsWith("PNQ") || taa.startsWith("GIN") || taa.startsWith("CJB") || taa.startsWith("TMUM") || taa.startsWith("TDEL") || taa.startsWith("TNAG") || taa.startsWith("TPIT") || taa.startsWith("TBRD") || taa.startsWith("TTUT") || taa.startsWith("TLUH") || taa.startsWith("TCOK") || taa.startsWith("TAMD") || taa.startsWith("TMAA") || taa.startsWith("TBLR") || taa.startsWith("TCCU") || taa.startsWith("THYD") || taa.startsWith("TGOI") || taa.startsWith("TMAN") || taa.startsWith("TVTZ") || taa.startsWith("TVVA") || taa.startsWith("TPNQ") || taa.startsWith("TGIN") || taa.startsWith("TCJB") || taa.startsWith("DUM00") || taa.startsWith("R0000") || taa.startsWith("S0000") || taa.startsWith("TRF")))
			{
				fobflag = 1;
			}
			if(taa.startsWith("DUM0000001"))
			{
				alert("Dummy Contract - raise query to Onshore");
			}
			if(taa.startsWith("R000"))
			{
				alert("One Quote Contract -  Split and combine not allowed for ONE Quote - raise query to Onshore incase customer is asking for split/ combine");
			}
			if(taa.startsWith("S000"))
			{
				alert("One Quote Contract -  Split and combine not allowed for ONE Quote - raise query to Onshore incase customer is asking for split/ combine");
			}
		}
		
		if(fobflag == 1)
		{
			alert("FOB contract - Prepaid is not allowed, check if affiliates mentioned in contract is listed as Shipper or Forwarder to Proceed with Prepaid term\r\nMention the affiliate that match with Shipper/ Forwarder :  User to input Affiliate name to proceed\r\nIf approval received from Onshore  - Mentioned Onshore approved Prepaid");
		}
	}catch(err){	}
	
	try
	{
		if(fobflag == 0)
		{
			try{ frt = document.getElementById("frt_term_cd_text").value; } catch(err){ }
			try{ sc = document.getElementsByName("frm_t10sheet1_sc_no1")[0].value; } catch(err){ }
			try{ rfa = document.getElementsByName("frm_t10sheet1_rfa_no")[0].value; } catch(err){ }
			try{ taa = document.getElementsByName("frm_t10sheet1_taa_no")[0].value; } catch(err){ }
			
			if(frt == "P")
			{
				if(sc != "")
				{
					if(!(sc.startsWith("MUM") || sc.startsWith("DEL") || sc.startsWith("NAG") || sc.startsWith("PIT") || sc.startsWith("BRD") || sc.startsWith("TUT") || sc.startsWith("LUH") || sc.startsWith("COK") || sc.startsWith("AMD") || sc.startsWith("MAA") || sc.startsWith("BLR") || sc.startsWith("CCU") || sc.startsWith("HYD") || sc.startsWith("GOI") || sc.startsWith("MAN") || sc.startsWith("VTZ") || sc.startsWith("VVA") || sc.startsWith("PNQ") || sc.startsWith("GIN") || sc.startsWith("CJB") || sc.startsWith("TMUM") || sc.startsWith("TDEL") || sc.startsWith("TNAG") || sc.startsWith("TPIT") || sc.startsWith("TBRD") || sc.startsWith("TTUT") || sc.startsWith("TLUH") || sc.startsWith("TCOK") || sc.startsWith("TAMD") || sc.startsWith("TMAA") || sc.startsWith("TBLR") || sc.startsWith("TCCU") || sc.startsWith("THYD") || sc.startsWith("TGOI") || sc.startsWith("TMAN") || sc.startsWith("TVTZ") || sc.startsWith("TVVA") || sc.startsWith("TPNQ") || sc.startsWith("TGIN") || sc.startsWith("TCJB") || sc.startsWith("DUM0000001") || sc.startsWith("R000") || sc.startsWith("S000") || sc.startsWith("TRF")))
					{
						fobflag = 1;
					}
				}
				else if(rfa != "")
				{
					if(!(rfa.startsWith("MUM") || rfa.startsWith("DEL") || rfa.startsWith("NAG") || rfa.startsWith("PIT") || rfa.startsWith("BRD") || rfa.startsWith("TUT") || rfa.startsWith("LUH") || rfa.startsWith("COK") || rfa.startsWith("AMD") || rfa.startsWith("MAA") || rfa.startsWith("BLR") || rfa.startsWith("CCU") || rfa.startsWith("HYD") || rfa.startsWith("GOI") || rfa.startsWith("MAN") || rfa.startsWith("VTZ") || rfa.startsWith("VVA") || rfa.startsWith("PNQ") || rfa.startsWith("GIN") || rfa.startsWith("CJB") || rfa.startsWith("TMUM") || rfa.startsWith("TDEL") || rfa.startsWith("TNAG") || rfa.startsWith("TPIT") || rfa.startsWith("TBRD") || rfa.startsWith("TTUT") || rfa.startsWith("TLUH") || rfa.startsWith("TCOK") || rfa.startsWith("TAMD") || rfa.startsWith("TMAA") || rfa.startsWith("TBLR") || rfa.startsWith("TCCU") || rfa.startsWith("THYD") || rfa.startsWith("TGOI") || rfa.startsWith("TMAN") || rfa.startsWith("TVTZ") || rfa.startsWith("TVVA") || rfa.startsWith("TPNQ") || rfa.startsWith("TGIN") || rfa.startsWith("TCJB") || rfa.startsWith("DUM0000001") || rfa.startsWith("R000") || rfa.startsWith("S000") || rfa.startsWith("TRF")))
					{
						fobflag = 1;
					}
				}
				else if(taa != "")
				{
					if(!(taa.startsWith("MUM") || taa.startsWith("DEL") || taa.startsWith("NAG") || taa.startsWith("PIT") || taa.startsWith("BRD") || taa.startsWith("TUT") || taa.startsWith("LUH") || taa.startsWith("COK") || taa.startsWith("AMD") || taa.startsWith("MAA") || taa.startsWith("BLR") || taa.startsWith("CCU") || taa.startsWith("HYD") || taa.startsWith("GOI") || taa.startsWith("MAN") || taa.startsWith("VTZ") || taa.startsWith("VVA") || taa.startsWith("PNQ") || taa.startsWith("GIN") || taa.startsWith("CJB") || taa.startsWith("TMUM") || taa.startsWith("TDEL") || taa.startsWith("TNAG") || taa.startsWith("TPIT") || taa.startsWith("TBRD") || taa.startsWith("TTUT") || taa.startsWith("TLUH") || taa.startsWith("TCOK") || taa.startsWith("TAMD") || taa.startsWith("TMAA") || taa.startsWith("TBLR") || taa.startsWith("TCCU") || taa.startsWith("THYD") || taa.startsWith("TGOI") || taa.startsWith("TMAN") || taa.startsWith("TVTZ") || taa.startsWith("TVVA") || taa.startsWith("TPNQ") || taa.startsWith("TGIN") || taa.startsWith("TCJB") || taa.startsWith("DUM0000001") || taa.startsWith("R000") || taa.startsWith("S000") || taa.startsWith("TRF")))
					{
						fobflag = 1;
					}
				}
			}
		
			if(fobflag == 1)
			{
				alert("FOB contract - Prepaid is not allowed, check if affiliates mentioned in contract is listed as Shipper or Forwarder to Proceed with Prepaid term\r\nMention the affiliate that match with Shipper/ Forwarder :  User to input Affiliate name to proceed\r\nIf approval received from Onshore  - Mentioned Onshore approved Prepaid");
			}
		}
	}catch(err){	}
}

function bkg_DueDiligencePopup()
{
	try
	{
		var POD, DEL, SHCode, CNCode, CNPTCode;
		var dflag = 0;
		//List updated by AbdurRahman Mansoor
		var dueCCode = ["AE",	"AF",	"BA",	"BY",	"CD",	"CF",	"EE",	"EG",	"FI", "HT",	"IQ",	"JO",	"LB",	"LT",	"LV",	"ML",	"MM",	"NI",	"RS",	"RU",	"SD",	"SO",	"SS", "SY",	"TN",	"TR",	"UA",	"VE",	"YD",	"ZW"];

		var dueCName = ["AFGHANISTAN",	"ARAB",	"BELARUS",	"BOSNIA",	"BOSNIA AND HERZEGOVINA",	"BURMA",	"CENTRAL AFRICA",	"CONGO",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FINLAND",	"HAITI", "HERZEGOVINA",	"IRAQ",	"JORDAN",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MYANMAR",	"NICARAGUA",	"RUSSIA",	"SERBIA",	"SOMALIA",	"SOUTH SUDAN",	"SUDAN", "SYRIA",	"TUNISIA",	"TURKEY",	"TURKIYE",	"U.A.E",	"UAE",	"UNITED ARAB EMIRATES",	"VENEZUELA",	"YEMEN",	"ZIMBABWE"];
		//AFGHANISTAN	BELARUS	Bosnia	BOSNIA AND HERZEGOVINA	Burma	Central Africa	Central African Republic	CONGO	Democratic Republic of Congo	Egypt	Estonia	Finland	Herzegovina	Iraq	Jordan	Latvia	Lebanon	Libya	Lithuania	Mali	Myanmar	Nicaragua	RUSSIA	Serbia	Somalia	South Sudan	Sudan	Tunisia	Turkey	U.A.E	UAE	Ukraine	United Arab Emirates	Venezuela	Yemen	Zimbabwe

		var proCName = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEP",	"ALEPO",	"ALEPPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHIA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MAH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABANAS",	"CAIBARIEN",	"CAMAGUEY",	"CANKOY",	"CARDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUBA",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"INKERMAN",	"IRAN",	"IRAN SHAHR",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JUCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOZLOV",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATTAKIA",	"LAVAN",	"LEREDI",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHHAD",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MESHED",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORON",	"MOSUL",	"NAJIN",	"NAKHJAVAN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PAYAM",	"PEREKOP",	"PERSEPOLIS",	"PILON",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATI",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QASABEHEKARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TANAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKY",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STARYI KRYM",	"SUDAK",	"SWEIDA",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TANAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+ 53",	"+850",	"+ 850",	"+963",	"+ 963",	"+98",	"+ 98",	"+7",	"+ 7",	"+380 61",	"+380-61",	"+380 55",	"+380-55",	"+375",	"+ 375"];
		
		if(document.getElementsByName('bkg_pod_cd')[0].value != null)
		{
			POD = document.getElementsByName('bkg_pod_cd')[0].value.substr(0,2);
		}
		if(document.getElementsByName('bkg_del_cd')[0].value != null)
		{
			DEL = document.getElementsByName('bkg_del_cd')[0].value.substr(0,2);
		}
		if(document.getElementsByName('s_cust_cnt_cd')[0].value != null)
		{
			SHCode = document.getElementsByName('s_cust_cnt_cd')[0].value;
		}
		if(document.getElementsByName('c_cust_cnt_cd')[0].value != null)
		{
			CNCode = document.getElementsByName('c_cust_cnt_cd')[0].value;
		}
		if(document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].value != null)
		{
			CNPTCode = document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].value;
		}
		
		var intRemark = document.getElementsByName('inter_rmk')[0].value;
		var custRemark = document.getElementsByName('xter_rmk')[0].value;
		
		if(POD != null && DEL != null)
		{
			for(i=0; i<dueCCode.length; i++)
			{
				if(POD == dueCCode[i] || DEL == dueCCode[i] || SHCode == dueCCode[i] || CNCode == dueCCode[i] || CNPTCode == dueCCode[i])
				{
					alert("Due Diligence Country. Update the screenshot in AppSheet " + dueCCode[i]);
					break;
				}
			}
		}
		
		if(document.getElementsByName('inter_rmk')[0].value != null)
		{
			for(var i=0; i<dueCName.length; i++)
			{
				if (intRemark.includes(dueCName[i]))
				{
					alert("Due Diligence Country found in Int Remark. '" + dueCName[i] + "'.");
				}
			}
			for(var i=0; i<proCName.length; i++)
			{
				if (intRemark.includes(proCName[i]))
				{
					alert("Prohibited Country found in Int Remark. '" + proCName[i] + "'.");
				}
			}
		}
		
		if(document.getElementsByName('xter_rmk')[0].value != null)
		{
			for(var i=0; i<dueCName.length; i++)
			{
				if (custRemark.includes(dueCName[i]))
				{
					alert("Due Diligence Country found in Cust Remark. '" + dueCName[i] + "'.");
				}
			}
			for(var i=0; i<proCName.length; i++)
			{
				if (custRemark.includes(proCName[i]))
				{
					alert("Prohibited Country found in Cust Remark. '" + proCName[i] +"'.");
				}
			}
		}
	}
	catch(err){	}
	
	//COSTCO & WALMART POPUP
	try
	{
		let cnpt = document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].value;
		
		if(cnpt.startsWith("COSTCO WHOLESALE CORPORATION") || cnpt.startsWith("WALMART INC"))
		{
			alert("Please update PO No in M&D Tab --> P/O & Other No");
		}
	}
	catch(err){	}
}

function MndTab_Popups()
{
	try
	{
		var Desc = document.getElementsByName('dg_cmdt_desc')[0].value;
		var customDesc = document.getElementsByName('cstms_desc')[0].value;
		var marks = document.getElementsByName('mk_desc')[0].value;
		var pod = document.getElementsByName("pod_cd")[0].value;
		var pol = document.getElementsByName("pol_cd")[0].value;
		var del = document.getElementsByName("del_cd")[0].value;
		
		var dueCName = ["AFGHANISTAN",	"ARAB",	"BELARUS",	"BOSNIA",	"BOSNIA AND HERZEGOVINA",	"BURMA",	"CENTRAL AFRICA",	"CONGO",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FINLAND", "HAITI",	"HERZEGOVINA",	"IRAQ",	"JORDAN",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MYANMAR",	"NICARAGUA",	"RUSSIA",	"SERBIA",	"SOMALIA",	"SOUTH SUDAN",	"SUDAN", "SYRIA",	"TUNISIA",	"TURKEY",	"TURKIYE",	"U.A.E",	"UAE",	"UNITED ARAB EMIRATES",	"VENEZUELA",	"YEMEN",	"ZIMBABWE"];
		var pro_Keyword = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEP",	"ALEPO",	"ALEPPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHIA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MAH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABANAS",	"CAIBARIEN",	"CAMAGUEY",	"CANKOY",	"CARDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUBA",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"INKERMAN",	"IRAN",	"IRAN SHAHR",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JUCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOZLOV",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATTAKIA",	"LAVAN",	"LEREDI",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHHAD",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MESHED",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORON",	"MOSUL",	"NAJIN",	"NAKHJAVAN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PAYAM",	"PEREKOP",	"PERSEPOLIS",	"PILON",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATI",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QASABEHEKARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TANAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKY",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STARYI KRYM",	"SUDAK",	"SWEIDA",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TANAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+ 53",	"+850",	"+ 850",	"+963",	"+ 963",	"+98",	"+ 98",	"+7",	"+ 7",	"+380 61",	"+380-61",	"+380 55",	"+380-55",	"+375",	"+ 375"];
		
		if(pod.startsWith("EG"))
		{
			window.prompt("Egypt Shipment: \r\n1. Please update ACID no\r\n2. If both the HBL and MBL ACID numbers are mentioned, the MBL ACID should be updated in the Export/Import tab\r\n3. The ACID number and other details should match between the description and the Export/Import tab");
		}
		
		for(var j=0; j<dueCName.length; j++)
		{
			if (Desc.replace("\r\n"," ").includes(dueCName[j]) || customDesc.replace("\r\n"," ").includes(dueCName[j]) || marks.replace("\r\n"," ").includes(dueCName[j]))
			{
				window.prompt("Create SANCTION CHECK FORM for Due Diligence Countries. '" + dueCName[j] + "'.");
			}
		}
		for(var j=0; j<pro_Keyword.length; j++)
		{
			if (Desc.replace("\r\n"," ").includes(pro_Keyword[j]) || customDesc.replace("\r\n"," ").includes(pro_Keyword[j]) || marks.replace("\r\n"," ").includes(pro_Keyword[j]))
			{
				window.prompt("Prohibited Country , Location, Keyword found. '" + pro_Keyword[j] + "'.");
			}
		}
		//Kavita 3/3/26
		if(pol.startsWith("IN") && (del.startsWith("US") || del.startsWith("CA")))
		{
			alert("Have you checked if the mentioned commodities are precise and acceptable in US/CA customs?\nThe example list link is above.\n\nhttps://www.cbp.gov/trade/basic-import-export/e-commerce/examples-unacceptable-vs-acceptable-cargo-descriptions\n\nHave you checked if the custom description matches the description?");
			
			if(Desc.includes("COIL") || customDesc.includes("COIL") || marks.includes("COIL"))
			{
				alert("Commodity Coil is banned. Kindly hold the shipment for US and inform the supervisor as well raise the query in BLINK");
			}
		}
		
		try
		{
			if(Desc.includes("IN-TRANSIT") || Desc.includes("IN TRANSIT") || Desc.includes("INTRANSIT") || marks.includes("IN-TRANSIT") || marks.includes("IN TRANSIT") || marks.includes("INTRANSIT"))
			{
				for(var i = 0; i < 2; i ++)
				{
					let comment = prompt("IN-TRANSIT :  Have you sent the query email to the Onshore? (Yes/No)");
					if (comment == null)
					{
						i = -1;
					}
					else
					{
						if(comment.trim().toLowerCase() == "no")
						{
							alert("Please send the query email!");
							document.getElementById("btn_t8Save").disabled = true;
							break;
						}
						else if(comment.trim().toLowerCase() == "yes")
						{
							document.getElementById("btn_t8Save").disabled = false;
							break;
						}
						else
						{
							alert("Please enter valid comment (Yes/No)");
							i = -1;
						}
					}
				}
			}
		}
		catch(err){ }
		
		
	}catch(err){	}
	
	//Kavita 27/06/25
	try
	{
		var por = document.getElementsByName("por_cd")[0].value.substring(0,2);
		
		if(por == "IN")
		{
			alert("M&D  >>  Total measure\r\nCBM to be ticked if it's manually updated or through BLINK correction.");
		}
	}catch(err){ }
}

function CMTab_Popups()
{
	try
	{
		var Desc = "";
		var pol = document.getElementsByName("pol_cd")[0].value;
		var del = document.getElementsByName("del_cd")[0].value;
		
		try 
		{
			let xpath = "//*[@id='t9sheet2']/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td[18]/div";
			let element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
			Desc = element ? element.innerText.trim() : "";

		} catch (e) { result = ""; }
			
		//Kavita 3/3/26
		if(pol.startsWith("IN") && (del.startsWith("US") || del.startsWith("CA")))
		{
			alert("Have you checked that the commodity description matches the HS code?");
			if(Desc.includes("COIL") || customDesc.includes("COIL") || marks.includes("COIL"))
			{
				alert("Commodity Coil is banned. Kindly hold the shipment for US and inform the supervisor as well raise the query in BLINK");
			}
		}
		
	}catch(err){	}
}


function BLIssueTab_Popups()
{
	try
	{
		var POR = document.getElementsByName('frm_t11sheet1_por_name')[0].value;
		var POL = document.getElementsByName('frm_t11sheet1_pol_name')[0].value;
		var POD = document.getElementsByName('frm_t11sheet1_pod_name')[0].value;
		var DEL = document.getElementsByName('frm_t11sheet1_del_name')[0].value;
		var FinalDest = document.getElementsByName('frm_t11sheet1_final_dest')[0].value;
		var Remarks = document.getElementsByName('frm_t11sheet1_obl_iss_rmk')[0].value;
		
		var dueCName = ["AFGHANISTAN",	"ARAB",	"BELARUS",	"BOSNIA",	"BOSNIA AND HERZEGOVINA",	"BURMA",	"CENTRAL AFRICA",	"CONGO",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FINLAND",	"HAITI", "HERZEGOVINA",	"IRAQ",	"JORDAN",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MYANMAR",	"NICARAGUA",	"RUSSIA",	"SERBIA",	"SOMALIA",	"SOUTH SUDAN",	"SUDAN", "SYRIA",	"TUNISIA",	"TURKEY",	"TURKIYE",	"U.A.E",	"UAE",	"UNITED ARAB EMIRATES",	"VENEZUELA",	"YEMEN",	"ZIMBABWE"];
		var pro_Keyword = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEP",	"ALEPO",	"ALEPPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHIA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MAH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABANAS",	"CAIBARIEN",	"CAMAGUEY",	"CANKOY",	"CARDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUBA",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"INKERMAN",	"IRAN",	"IRAN SHAHR",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JUCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOZLOV",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATTAKIA",	"LAVAN",	"LEREDI",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHHAD",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MESHED",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORON",	"MOSUL",	"NAJIN",	"NAKHJAVAN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PAYAM",	"PEREKOP",	"PERSEPOLIS",	"PILON",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATI",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QASABEHEKARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TANAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKY",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STARYI KRYM",	"SUDAK",	"SWEIDA",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TANAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+ 53",	"+850",	"+ 850",	"+963",	"+ 963",	"+98",	"+ 98",	"+7",	"+ 7",	"+380 61",	"+380-61",	"+380 55",	"+380-55",	"+375",	"+ 375"];
		
		for(var j=0; j<dueCName.length; j++)
		{
			if (POR.replace("\r\n"," ").includes(dueCName[j]) || POL.replace("\r\n"," ").includes(dueCName[j]) || POD.replace("\r\n"," ").includes(dueCName[j]) || DEL.replace("\r\n"," ").includes(dueCName[j]) || FinalDest.replace("\r\n"," ").includes(dueCName[j]) || Remarks.replace("\r\n"," ").includes(dueCName[j]))
			{
				window.prompt("Create SANCTION CHECK FORM for Due Diligence Countries. '" + dueCName[j] + "'.");
			}
		}
		
		for(var j=0; j<pro_Keyword.length; j++)
		{
			if (POR.replace("\r\n"," ").includes(pro_Keyword[j]) || POL.replace("\r\n"," ").includes(pro_Keyword[j]) || POD.replace("\r\n"," ").includes(pro_Keyword[j]) || DEL.replace("\r\n"," ").includes(pro_Keyword[j]) || FinalDest.replace("\r\n"," ").includes(pro_Keyword[j]) || Remarks.replace("\r\n"," ").includes(pro_Keyword[j]))
			{
				window.prompt("Prohibited Country , Location, Keyword found. '" + pro_Keyword[j] + "'.");
			}
		}
	}catch(err){	}
}

function dummy_repcode_check()
{
	try
	{
		var dummy_repcode = ["AE102195", "AE500061",	"AE500363",	"AE500062",	"AE500060",	"AR500034",	"AR500034",	"AS500001",	"AT500013",	"AU500045",	"AU500044",	"AU500043",	"AU500042",	"AU500046",	"BD500011",	"BD500010",	"BD500009",	"BE500037",	"BG100229",	"BH500002",	"BJ500007",	"BN100230",	"BO500016",	"BR500029",	"BR500043",	"BR500042",	"BR500035",	"BR500038",	"BR500034",	"BR500041",	"BR500034",	"BR500037",	"BR500037",	"BR500034",	"BR500040",	"BR500039",	"CA500286",	"CA500285",	"CA500198",	"CA500199",	"CH500039",	"CI200569",	"CI200569",	"CL500087",	"CN509014",	"CN509015",	"CN509016",	"CN509018",	"CN509020",	"CN509000",	"CN509010",	"CN509019",	"CN509008",	"CN508999",	"CN509005",	"CN509009",	"CN509002",	"CN509012",	"CN509013",	"CN509021",	"CN509004",	"CN509006",	"CN509003",	"CN509017",	"CN508998",	"CN509001",	"CN509007",	"CN509011",	"CO500015",	"CO500016",	"CO200001",	"CR100084",	"CY500032",	"CZ500095",	"DE500075",	"DE500076",	"DE500077",	"DJ500001",	"DK500011",	"DO100592",	"EC500067",	"EC500067",	"EC500076",	"EE100080",	"EG500223",	"EG500224",	"EG500016",	"EG500014",	"EG500015",	"EG502386",	"EG500018",	"EG500017",	"ES500051",	"ES500055",	"ES500055",	"ES500055",	"ES500050",	"ES217609",	"ES500053",	"FI500019",	"FJ500002",	"FJ500001",	"FM500002",	"FM500003",	"FM500001",	"FR500083",	"FR500084",	"GB500101",	"GB500102",	"GB500104",	"GB500100",	"GB500103",	"GE100070",	"GH500004",	"GH500004",	"GR500049",	"GT500002",	"GT500002",	"GU500002",	"HK501035",	"HK501034",	"HN100237",	"HN100237",	"HN100237",	"HR500006",	"HU500007",	"ID500350",	"ID500124",	"ID500117",	"ID500123",	"ID500351",	"ID500126",	"ID500118",	"ID500121",	"ID500354",	"ID500125",	"ID500120",	"ID500122",	"ID500355",	"ID500356",	"ID500119",	"ID500352",	"ID500361",	"IE500015",	"IE500015",	"IL500024",	"IL500024",	"IN585259",	"IQ500001",	"IR500001",	"IT500042",	"JM100131",	"JO500002",	"JP301682",	"JP306474",	"JP100018",	"JP101871",	"JP107490",	"JP500508",	"JP500131",	"JP500132",	"JP104086",	"JP500051",	"JP100181",	"JP500134",	"JP100225",	"JP500517",	"JP500135",	"JP107703",	"JP500506",	"JP500509",	"JP500129",	"JP500510",	"JP500512",	"JP500515",	"JP500516",	"KE500015",	"KH500030",	"KI500001",	"KR500132",	"KR500133",	"KW500020",	"KW500001",	"KW500019",	"LB100085",	"LB500079",	"LK500010",	"LS500003",	"LT100137",	"LV100154",	"MA200051",	"MG500001",	"MH500005",	"MM500004",	"MM500004",	"MT500005",	"MW200041",	"MX506654",	"MY500346",	"MY500347",	"MY201753",	"MY500348",	"MY500063",	"MY500341",	"MY500342",	"MY500343",	"MY500349",	"MY500064",	"MY500344",	"MY500062",	"MZ500001",	"NA200003",	"NC500001",	"NG500002",	"NI100372",	"NL500076",	"NO500030",	"NP500008",	"NZ500012",	"NZ500022",	"NZ500013",	"OM500002",	"OM500020",	"OM500021",	"PA500014",	"PA500016",	"PA500014",	"PA500014",	"PE500088",	"PE500044",	"PE500088",	"PF500001",	"PH500027",	"PH500026",	"PH500028",	"PH500029",	"PH500030",	"PH500031",	"PK500021",	"PK500022",	"PL500010",	"PL500011",	"PR500004",	"PT500018",	"PT500017",	"PY500012",	"QA500001",	"RE500002",	"RO500025",	"RU100494",	"RU500029",	"RU500030",	"RU500029",	"RU500103",	"SA500271",	"SA104145",	"SA104146",	"SB100343",	"SE500012",	"SG500116",	"SG500117",	"SG500119",	"SG500118",	"SI300060",	"SN500009",	"SV500002",	"TG500001",	"TH500117",	"TH500119",	"TH500116",	"TH500118",	"TN500002",	"TO500001",	"TR500020",	"TR500022",	"TR500020",	"TR500021",	"TR500022",	"TR500021",	"TT500001",	"TW500457",	"TW500456",	"TW500458",	"TZ100528",	"UA500023",	"UG500004",	"US502660",	"US502063",	"US502662",	"US502060",	"US502664",	"US502059",	"US502063",	"US502595",	"US502659",	"US502661",	"US502663",	"US502063",	"US111530",	"US502665",	"US502657",	"US502658",	"US502062",	"UY500002",	"VE500001",	"VE500003",	"VE500004",	"VE500002",	"VN500404",	"VN500058",	"VN500057",	"VN500059",	"VN500403",	"VU500001",	"VU500002",	"WS500008",	"ZA500015",	"ZW500007"];
		var sh = document.getElementsByName('sh_cust_cnt_cd')[0].value + document.getElementsByName('sh_cust_seq')[0].value;
		var cn = document.getElementsByName('cn_cust_cnt_cd')[0].value + document.getElementsByName('cn_cust_seq')[0].value;
		var nt = document.getElementsByName('nf_cust_cnt_cd')[0].value + document.getElementsByName('nf_cust_seq')[0].value;
		var an = document.getElementsByName('an_cust_cnt_cd')[0].value + document.getElementsByName('an_cust_seq')[0].value;
	
		for(var i = 0; i < dummy_repcode.length; i++)
		{
			if(sh == dummy_repcode[i] || cn == dummy_repcode[i] || nt == dummy_repcode[i] || an == dummy_repcode[i])
			{
				let comment = prompt("Dummy Rep code found. Please mention action you have taken.\r\n1. Email Sent\r\n2. NCPF Created");
				if (comment == null)
				{
					i = -1;
				}
				else
				{
					if(comment.trim() != "")
					{
						if(comment.toLowerCase().includes("email sent") || comment.toLowerCase().includes("ncpf created"))
						{
							break;
						}
						else
						{
							alert("Invalid comment");
							i = -1;
						}
					}
					else
					{
						alert("Invalid comment");
						i = -1;
					}
				}
			}
		}
	}catch(err){	}
}

function custCodeRequest()
{
	try
	{
		var dueCName = ["AFGHANISTAN",	"ARAB",	"BELARUS",	"BOSNIA",	"BOSNIA AND HERZEGOVINA",	"BURMA",	"CENTRAL AFRICA",	"CONGO",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FINLAND",	"HAITI", "HERZEGOVINA",	"IRAQ",	"JORDAN",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MYANMAR",	"NICARAGUA",	"RUSSIA",	"SERBIA",	"SOMALIA",	"SOUTH SUDAN",	"SUDAN", "SYRIA",	"TUNISIA",	"TURKEY",	"TURKIYE",	"U.A.E",	"UAE",	"UNITED ARAB EMIRATES",	"VENEZUELA",	"YEMEN",	"ZIMBABWE"];
		var pro_Keyword = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEP",	"ALEPO",	"ALEPPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHIA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MAH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABANAS",	"CAIBARIEN",	"CAMAGUEY",	"CANKOY",	"CARDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUBA",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"INKERMAN",	"IRAN",	"IRAN SHAHR",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JUCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOZLOV",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATTAKIA",	"LAVAN",	"LEREDI",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHHAD",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MESHED",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORON",	"MOSUL",	"NAJIN",	"NAKHJAVAN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PAYAM",	"PEREKOP",	"PERSEPOLIS",	"PILON",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATI",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QASABEHEKARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TANAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKY",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STARYI KRYM",	"SUDAK",	"SWEIDA",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TANAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+ 53",	"+850",	"+ 850",	"+963",	"+ 963",	"+98",	"+ 98",	"+7",	"+ 7",	"+380 61",	"+380-61",	"+380 55",	"+380-55",	"+375",	"+ 375"];
		
		var name = document.getElementById("cust_nm").value;
		var add = document.getElementById("cust_addr").value;
		var country = document.getElementById("cnt_cd_text").value;
		var state = document.getElementById("cust_ste_cd_text").value;
		var city = document.getElementById("cust_cty_nm").value;
		var phone = document.getElementById("are_phn_no").value;
		var tel = document.getElementById("phn_no").value;
		
		for(var i = 0; i < dueCName.length; i++)
		{
			if(name.includes(dueCName[i]) || add.includes(dueCName[i]) || country.includes(dueCName[i]) || state.includes(dueCName[i]) || city.includes(dueCName[i]))
			{
				window.prompt("Create SANCTION CHECK FORM for Due Diligence Countries. '" + dueCName[i] + "'.");
			}
		}
		
		for(var i = 0; i < pro_Keyword.length; i++)
		{
			if(name.includes(pro_Keyword[i]) || add.includes(pro_Keyword[i]) || country.includes(pro_Keyword[i]) || state.includes(pro_Keyword[i]) || city.includes(pro_Keyword[i]) || phone.includes(pro_Keyword[i]) || tel.includes(pro_Keyword[i]))
			{
				window.prompt("Prohibited Country , Location, Keyword found. '" + pro_Keyword[i] + "'.");
			}
		}
		
	}catch(err){ }
}

function checkNegativeCharge()
{
	try
	{
		var sheetObject=document.getElementById("t10sheet2");
		var rowCount = sheetObject.querySelectorAll("tr").length
		
		if(document.querySelector("#t10sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(2) > td.GMWrap0.GMAlignCenter.GMPopupEdit.GMCell.IBSheetFont1.GMNoRight.HideCol1C4"))
		{
			for(var i=2;i<=(rowCount-11);i++)
			{
				var rt = document.evaluate('//*[@id="t10sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr['+i+']/td[12]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;

				if(rt.replace("<em>","").startsWith("-"))
				{
					alert("Negative charges to be Split while sending invoice to customer. \r\nKindly do Invoice Split. \r\nHighlight this case to the Supervisor for further Guidance.");
				}
			}
		}
	}catch(err){ }
}

function invIssueCustomerEmail()
{
	try
	{
		var title = document.querySelectorAll("body > form > div.layer_popup_title > div > h2 > span")[0].innerText;
		if(title == "Customer E-mail Management")
		{
			var custCode = document.getElementsByName("cust_cnt_cd")[0].value;
			var custSeq = document.getElementsByName("cust_seq")[0].value;
			var custName = document.getElementsByName("cust_nm")[0].value;
			
			if(custCode + custSeq == "IN208500" || custName.startsWith("SKODA"))
			{
				alert("Invoice to be sent to Skoda email id only as below, remove any other domain email Id other than Skoda\r\nsagar.mahajan@skodavw.co.in\r\njoy.aich@skoda-vw.co.in");
			}
		}
	}catch(err){ }
}

function ChrgeCalBkg()
{
	//Vrushali 23/06/25
	try
	{
		var tariff = document.getElementById("tariff_type_text").value;
		var shipper = document.getElementsByName("shipper_nm")[0].value;
		var por = document.getElementsByName("por_cd")[0].value.substring(0,2);
		
		if(tariff == "DTOC" && shipper.startsWith("SCHNEIDER ELECTRIC") && por == "IN")
		{
			alert("(MIV invoice and Detention)\r\nPAYER code to be used (IN588301)");
		}
		else if(tariff == "DTOC" && (shipper.startsWith("KUEHNE+NAGEL") || shipper.startsWith("KUEHNE NAGEL") || shipper.startsWith("KUEHNE + NAGEL")) && por == "IN")
		{
			alert("Detention invoice to sent on this email id kn_india@eu-link.tradeshift.com");
		}
	}catch(err){ }
}

function bkgCreationWarnPopup() 
{
	try 
	{
		const DELSet = new Set([
			"AD", "AL", "AM", "AT", "AX", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", 
			"EE", "ES", "EU", "FI", "FO", "FR", "GB", "GE", "GI", "GL", "GR", "HR", "HU", "IE", "IL", 
			"IM", "IS", "IT", "KG", "KZ", "LB", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", 
			"NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "TR", "UA", "VA"
		]);

		const inputElem = document.getElementById("bkg_del_cd");
		if (!inputElem) return;

		const DELPrefix = inputElem.value.substring(0, 2);

		if (DELSet.has(DELPrefix)) 
		{
			alert("Filer Type Mandatory - Check and Raise Query If required");
		}
	} 
	catch (err) 
	{
		console.error("Error in bkgCreationWarnPopup:", err);
	}
}

function chargeTabWarnPopup() 
{
	try 
	{
		const DELSet = new Set([
			"AD", "AL", "AM", "AT", "AX", "AZ", "BA", "BE", "BG", "BY", "CH", "CY", "CZ", "DE", "DK", 
			"EE", "ES", "EU", "FI", "FO", "FR", "GB", "GE", "GI", "GL", "GR", "HR", "HU", "IE", "IL", 
			"IM", "IS", "IT", "KG", "KZ", "LB", "LI", "LT", "LU", "LV", "MC", "MD", "ME", "MK", "MT", 
			"NL", "NO", "PL", "PT", "RO", "RS", "RU", "SE", "SI", "SJ", "SK", "SM", "TR", "UA", "VA"
		]);

		const inputElem = document.getElementById("frm_t10sheet1_del_cd");
		if (!inputElem) return;

		const DELPrefix = inputElem.value.substring(0, 2);

		if (DELSet.has(DELPrefix)) 
		{
			alert("Mandatory - Method Of Payment");
		}
	}
	catch (err) 
	{
		console.error("Error in chargeTabWarnPopup:", err);
	}
}

function mndTabWarnPopup() 
{
	try 
	{
		const porElem = document.getElementById("por_cd");
		const delElem = document.getElementById("del_cd");

		if (!porElem || !delElem) 
		{
		  console.warn("One or both input elements not found.");
		  return;
		}

		const POR = porElem.value.substring(0, 2);
		const DEL = delElem.value.substring(0, 2);

		if (POR === "IN" && DEL === "PH") 
		{
			alert("Philippine Customs Regulations, the HS code and Description of goods on the Bill of Lading (BL) is vital and must be reflected within the first five (5) lines of the description of goods.");
		}
	} 
	catch (err) 
	{
		console.error("Error in mndTabWarnPopup:", err);
	}
}



function checkCanadaZipFormat() 
{
    try 
	{
        var cnCntry = document.getElementsByName("cn_cstms_decl_cnt_cd")[0]?.value;
        var nfCntry = document.getElementsByName("nf_cstms_decl_cnt_cd")[0]?.value;
        
        var cnZip = document.getElementsByName("cn_cust_zip_id")[0]?.value.trim();
        var nfZip = document.getElementsByName("nf_cust_zip_id")[0]?.value.trim();
        
        // Canadian postal code regex
        var canadaPostalRegex = /^[A-Z]\d[A-Z] \d[A-Z]\d$/;
        
        if (cnCntry === "CA" && !canadaPostalRegex.test(cnZip)) 
		{
            alert("Incorrect format for Canadian postal code. Please update the Zip Code of Consignee in the format ANA NAN.");
        }
        
        if (nfCntry === "CA" && !canadaPostalRegex.test(nfZip)) 
		{
            alert("Incorrect format for Canadian postal code. Please update the Zip Code of Notify in the format ANA NAN.");
        }
    } 
	catch (err) 
	{
        console.error("Error in checkCanadaZipFormat:", err);
    }
}


function resubmission_popup()
{
	try
	{
		//BKG Creation
		var pod = document.getElementById("bkg_pod_cd").value.substring(0,2);
		var del = document.getElementById("bkg_del_cd").value.substring(0,2);
		
		if(pod == "EU" || del == "EU" || pod == "CA" || del == "CA" || pod == "US" || del == "US" || pod == "SA" || del == "SA" || pod == "CN" || del == "CN")
		{
			alert("Re-Submission need to be done");
		}
			
	}catch(err){}
	
	try
	{
		//CNTR & Customer & MnD & CM
		var pod = document.getElementById("pod_cd").value.substring(0,2);
		var del = document.getElementById("del_cd").value.substring(0,2);
		
		if(pod == "EU" || del == "EU" || pod == "CA" || del == "CA" || pod == "US" || del == "US" || pod == "SA" || del == "SA" || pod == "CN" || del == "CN")
		{
			alert("Re-Submission need to be done");
		}
			
	}catch(err){}
	
	try
	{
		//charge
		var pod = document.getElementById("frm_t10sheet1_pod_cd").value.substring(0,2);
		var del = document.getElementById("frm_t10sheet1_del_cd").value.substring(0,2);
		
		if(pod == "EU" || del == "EU" || pod == "CA" || del == "CA" || pod == "US" || del == "US" || pod == "SA" || del == "SA" || pod == "CN" || del == "CN")
		{
			alert("Re-Submission need to be done");
		}
			
	}catch(err){}
	
	try
	{
		//bl Issue
		var pod = document.getElementById("frm_t11sheet1_pod_code").value.substring(0,2);
		var del = document.getElementById("frm_t11sheet1_del_code").value.substring(0,2);
		
		if(pod == "EU" || del == "EU" || pod == "CA" || del == "CA" || pod == "US" || del == "US" || pod == "SA" || del == "SA" || pod == "CN" || del == "CN")
		{
			alert("Re-Submission need to be done");
		}
			
	}catch(err){}
}

function EG_EXP_IMP_Ref_HardPopups()
{
	try
	{
		let country = document.getElementById("imp_cnt_cd").value;
		
		if(country == "EG")
		{
			var ACID = document.evaluate('//*[@id="sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[2]/td[4]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			var ImporterID = document.evaluate('//*[@id="sheet2"]/tbody/tr[2]/td/div/div[1]/table/tbody/tr[3]/td[4]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue.innerHTML;
			
			if(!(ACID.startsWith(ImporterID)))
			{
				alert("EGYPT Shipment: Please update the valid ACID No & Importer ID");
				document.getElementById("btn_save2").setAttribute("disabled", true);
			}
			else
			{
				document.getElementById("btn_save2").removeAttribute("disabled");
			}
		}
	}
	catch(err)
	{
		
	}
}

function bkgCreationHardPopup()
{
	try
	{
		let keyword = ["AEROTRUST AVIATION PRIVATE LIMITED (INDIA)", "AEROTRUST AVIATION PVT LTD (INDIA)", "ASCEND AVIATION INDIA PRIVATE LIMITED", "ASCEND AVIATION INDIA PVT LTD", "SHREE ENTERPRISES (INDIA)", "FARMLANE PRIVATE LIMITED (INDIA)", "FARMLANE PVT LTD (INDIA)", "DARYA SHIPPING PRIVATE LIMITED (INDIA)", "GOLDEN GATE SHIP MANAGEMENT (INDIA)", "HIGH SEAS PETROLEUM LLC (UNITED ARAB EMIRATES)", "PHOENIX SHIP MANAGEMENT FZE (UNITED ARAB EMIRATES)", "QATRAT ALNADA ALMASI SHIP MANAGEMENT L.L.C (UNITED ARAB EMIRATES)", "RED SEA SHIP MANAGEMENT LLC (UNITED ARAB EMIRATES)", "RUKBAT MARINE SERVICES CO (INDIA)", "FLEET TANQO PRIVATE LIMITED (INDIA)", "FLEET TANQO PVT LTD (INDIA)", "HOUSE OF SHIPPING PRIVATE LIMITED (INDIA)", "HOUSE OF SHIPPING PVT LTD (INDIA)"];
		let shpr = document.getElementsByName("s_cust_nm")[0].value.toUpperCase();
		let fwdr = document.getElementsByName("f_cust_nm")[0].value.toUpperCase();
		let custRemark = document.getElementsByName("xter_rmk")[0].value.toUpperCase();
		let intRemark = document.getElementsByName("inter_rmk")[0].value.toUpperCase();
		
		document.getElementsByName("btn_t1Save")[0].removeAttribute("disabled");
		
		for(var i = 0 ; i < keyword.length; i++)
		{
			if(shpr.startsWith(keyword[i]) || fwdr.startsWith(keyword[i]) || custRemark.startsWith(keyword[i]) || intRemark.startsWith(keyword[i]))
			{
				alert(keyword[i] + " entity found. Please check  the SHPR, FWDR, INT/CUST REMARK details are under  Sanction compliance");
				document.getElementsByName("btn_t1Save")[0].setAttribute("disabled", true);
				break;
			}
		}
	}
	catch(err){ }
	
	try
	{
		let keyword = ["ACS TRADING LLC (UNITED ARAB EMIRATES)", "CORPLINX CONSULTANCY LLC FZ (UNITED ARAB EMIRATES)", "HELMATIC CONSULTANCY DMCC (UNITED ARAB EMIRATES)", "HOUSE OF SHIPPING INVESTMENT FZCO (UNITED ARAB EMIRATES)", "LOTUS UNIVERSAL LLC (UNITED ARAB EMIRATES)", "MERITRON DMCC (UNITED ARAB EMIRATES)", "ORIEL GROUP (UNITED ARAB EMIRATES)", "SHIPSTAR SHIPCHANDLING LLC (UNITED ARAB EMIRATES)", "TAYLOR SHIPPING FZCO (UNITED ARAB EMIRATES)", "ANIKA LINES INC. (MARSHALL ISLANDS)", "AURA LINES INC. (MARSHALL ISLANDS)", "HAPUKA MARINE LTD. (MARSHALL ISLANDS)", "NARDIE INTERNATIONAL S.A. (MARSHALL ISLANDS)", "SHIPZA SHIPPING LIMITED (MARSHALL ISLANDS)", "FLEET TANQO PRIVATE LIMITED (INDIA)", "HOUSE OF SHIPPING PRIVATE LIMITED (INDIA)", "A.C.S. GLOBAL BV (NETHERLANDS)"];
		let cnee = document.getElementsByName("c_cust_nm")[0].value.toUpperCase();
		let cnpt = document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].value.toUpperCase();
		let custRemark = document.getElementsByName("xter_rmk")[0].value.toUpperCase();
		let intRemark = document.getElementsByName("inter_rmk")[0].value.toUpperCase();
		
		document.getElementsByName("btn_t1Save")[0].removeAttribute("disabled");
		
		for(var i = 0 ; i < keyword.length; i++)
		{
			if(cnee.startsWith(keyword[i]) || cnpt.startsWith(keyword[i]) || custRemark.startsWith(keyword[i]) || intRemark.startsWith(keyword[i]))
			{
				alert(keyword[i] + " entity found. Please check  the CNEE, CNPT, INT/CUST REMARK details are under Sanction compliance");
				document.getElementsByName("btn_t1Save")[0].setAttribute("disabled", true);
				break;
			}
		}
	}
	catch(err){ }
	
	try
	{
		var POD, DEL, SHCode, CNCode, CNPTCode, POR, POL;
		var dflag = 0;
		//List updated by AbdurRahman Mansoor //Skip Pakistan Prohibited in BKG Creation
		var proCCode = ["IR",	"CU",	"AF",	"RU",	"BY"]; //,	"PK"

		var proCName = ["NORTH KOREA", "SYRIA", "IRAN", "CREMIA", "CUBA", "MASHHAD", "MASHAD", "MESHED", "AFGHANISTAN", "DONETSK", "LUHANSK", "RUSSIA", "BELARUS", "PAKISTAN", "+53", "+850", "+963", "+98", "+7", "+380 61", "+380-61", "+380 55", "+380-55", "+375"];
		
		if(document.getElementsByName('bkg_pod_cd')[0].value != null)
		{
			POD = document.getElementsByName('bkg_pod_cd')[0].value.substr(0,2);
		}
		if(document.getElementsByName('bkg_del_cd')[0].value != null)
		{
			DEL = document.getElementsByName('bkg_del_cd')[0].value.substr(0,2);
		}
		if(document.getElementsByName('s_cust_cnt_cd')[0].value != null)
		{
			SHCode = document.getElementsByName('s_cust_cnt_cd')[0].value;
		}
		if(document.getElementsByName('c_cust_cnt_cd')[0].value != null)
		{
			CNCode = document.getElementsByName('c_cust_cnt_cd')[0].value;
		}
		if(document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].value != null)
		{
			CNPTCode = document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].value;
		}
		if(document.getElementsByName('bkg_por_cd')[0].value != null)
		{
			POR = document.getElementsByName('bkg_por_cd')[0].value.substr(0,2);
		}
		if(document.getElementsByName('bkg_pol_cd')[0].value != null)
		{
			POL = document.getElementsByName('bkg_pol_cd')[0].value.substr(0,2);
		}
		
		var intRemark = document.getElementsByName('inter_rmk')[0].value;
		var custRemark = document.getElementsByName('xter_rmk')[0].value;
		
		document.getElementsByName("btn_t1Save")[0].removeAttribute("disabled");
		
		if(POD != null && DEL != null && POL != null && POR != null)
		{
			if((POR.substring(0,2) == "IN" || POL.substring(0,2) == "IN") && (POD.substring(0,2) == "PK" || DEL.substring(0,2) == "PK"))
			{
				alert("Prohibited Shipment India to Pakistan");
				document.getElementsByName("btn_t1Save")[0].setAttribute("disabled", true);
				return;
			}
			
			for(i=0; i<proCCode.length; i++)
			{
				if(POD == proCCode[i] || DEL == proCCode[i] || SHCode == proCCode[i] || CNCode == proCCode[i] || CNPTCode == proCCode[i])
				{
					alert("Prohibited Country found " + proCCode[i]);
					document.getElementsByName("btn_t1Save")[0].setAttribute("disabled", true);
					break;
				}
			}
		}
		
		if(document.getElementsByName('inter_rmk')[0].value != null)
		{
			for(var i=0; i<proCName.length; i++)
			{
				if (intRemark.includes(proCName[i]))
				{
					alert("Prohibited Country found in Int Remark. '" + proCName[i] + "'.");
					document.getElementsByName("btn_t1Save")[0].setAttribute("disabled", true);
				}
			}
		}
		
		if(document.getElementsByName('xter_rmk')[0].value != null)
		{
			for(var i=0; i<proCName.length; i++)
			{
				if (custRemark.includes(proCName[i]))
				{
					alert("Prohibited Country found in Cust Remark. '" + proCName[i] +"'.");
					document.getElementsByName("btn_t1Save")[0].setAttribute("disabled", true);
				}
			}
		}
	}catch(err){	}
}

function customerTabHardPopup()
{
	try
	{
		var sh = document.getElementsByName("sh_cust_lgl_eng_nm")[0].value;
		var SHPRPrf = document.getElementsByName('sh_cust_cnt_cd')[0].value.substr(0,2);
		var shName = document.getElementsByName("sh_cust_nm")[0].value;
		var SHPRAdd = document.getElementsByName('sh_cust_addr')[0].value;
		var cn = document.getElementsByName("cn_cust_lgl_eng_nm")[0].value;
		var CNEEPrf = document.getElementsByName('cn_cust_cnt_cd')[0].value.substr(0,2);
		var cnName = document.getElementsByName("cn_cust_nm")[0].value;
		var CNEEAdd = document.getElementsByName('cn_cust_addr')[0].value;
		var nf = document.getElementsByName("nf_cust_lgl_eng_nm")[0].value;
		var NTFYPrf = document.getElementsByName('nf_cust_cnt_cd')[0].value.substr(0,2);
		var nfName = document.getElementsByName("nf_cust_nm")[0].value;
		var NTFYAdd = document.getElementsByName('nf_cust_addr')[0].value;
		var fw = document.getElementsByName("ff_cust_lgl_eng_nm")[0].value;
		var fwName = document.getElementsByName("ff_cust_nm")[0].value;
		var an = document.getElementsByName("an_cust_lgl_eng_nm")[0].value;
		var ANTFYPrf = document.getElementsByName('an_cust_cnt_cd')[0].value.substr(0,2);
		var anName = document.getElementsByName("an_cust_nm")[0].value;
		var POD = document.getElementsByName('pod_cd')[0].value.substr(0,2);
		var DEl = document.getElementsByName('del_cd')[0].value.substr(0,2);
		var EXPREF = document.getElementsByName('ex_cust_nm')[0].value;
		var countryOrigin = document.getElementsByName('org_cnt_nm')[0].value;
		var POL = document.getElementsByName('pol_cd')[0].value.substr(0,2);
			
		var proCCode = ["IR",	"CU",	"AF",	"RU",	"BY",	"PK"];

		var proCName = ["NORTH KOREA", "SYRIA", "IRAN", "CREMIA", "CUBA", "MASHHAD", "MASHAD", "MESHED", "AFGHANISTAN", "DONETSK", "LUHANSK", "RUSSIA", "BELARUS", "PAKISTAN", "+53", "+850", "+963", "+98", "+7", "+380 61", "+380-61", "+380 55", "+380-55", "+375"];

		document.getElementsByName("btn_t7Save")[0].removeAttribute("disabled");
		
		for(var i=0; i<proCCode.length; i++)
		{
			if (SHPRPrf == proCCode[i] || CNEEPrf == proCCode[i] || NTFYPrf == proCCode[i] || ANTFYPrf == proCCode[i] || POD == proCCode[i] || DEl == proCCode[i])
			{
				window.prompt("Prohibited Country , Location, Keyword found '" + proCCode[i] + "'.");
				document.getElementsByName("btn_t7Save")[0].setAttribute("disabled", true);
			}
		}
		
		
		for(var j=0; j<proCName.length; j++)
		{
			if (shName.replace("\r\n"," ").includes(proCName[j]) || cnName.replace("\r\n"," ").includes(proCName[j]) || nfName.replace("\r\n"," ").includes(proCName[j]) || anName.replace("\r\n"," ").includes(proCName[j]) || EXPREF.replace("\r\n"," ").includes(proCName[j]) || SHPRAdd.replace("\r\n"," ").includes(proCName[j]) || CNEEAdd.replace("\r\n"," ").includes(proCName[j]) || NTFYAdd.replace("\r\n"," ").includes(proCName[j]) || countryOrigin.replace("\r\n"," ").includes(proCName[j]))
			{
				window.prompt("Prohibited Country , Location, Keyword found. '" + proCName[j] + "'.");
				document.getElementsByName("btn_t7Save")[0].setAttribute("disabled", true);
			}
		}
		
	}
	catch(err){ }
	
	try 
	{
		const getVal = (id) => (document.getElementById(id)?.value || "").trim();

		const data = {
			shCountry : getVal("sh_cstms_decl_cnt_cd"),
			shZip     : getVal("sh_cust_zip_id"),
			shStreet  : getVal("sh_eur_cstms_st_nm"),
			shCity    : getVal("sh_cust_cty_nm"),
			shState   : getVal("sh_cust_ste_cd"),

			cnCountry : getVal("cn_cstms_decl_cnt_cd"),
			cnZip     : getVal("cn_cust_zip_id"),
			cnStreet  : getVal("cn_eur_cstms_st_nm"),
			cnCity    : getVal("cn_cust_cty_nm"),
			cnState   : getVal("cn_cust_ste_cd")
		};

		// Required validations
		if (!data.shCountry || !data.cnCountry) 
		{
			alert("Country should not be blank");
			return false;
		}

		if (!data.shZip || !data.cnZip) 
		{
			alert("Zip should not be blank");
			return false;
		}

		if (!data.shStreet || !data.cnStreet) 
		{
			alert("Street/PO should not be blank");
			return false;
		}

		if (!data.shCity || !data.cnCity) 
		{
			alert("City should not be blank");
			return false;
		}

		// US State validation

		if (data.shCountry === "US" && !data.shState) 
		{
			alert("Shipper State should not be blank");
			return false;
		}

		if (data.cnCountry === "US" && !data.cnState) 
		{
			alert("Consignee State should not be blank");
			return false;
		}

	}
	catch (err) {

	}
}


function MnDTabHardPopup()
{
	try
	{
		var Desc = document.getElementsByName('dg_cmdt_desc')[0].value;
		var customDesc = document.getElementsByName('cstms_desc')[0].value;
		var marks = document.getElementsByName('mk_desc')[0].value;
		var proCName = ["NORTH KOREA", "SYRIA", "IRAN", "CREMIA", "CUBA", "MASHHAD", "MASHAD", "MESHED", "AFGHANISTAN", "DONETSK", "LUHANSK", "RUSSIA", "BELARUS", "PAKISTAN", "+53", "+850", "+963", "+98", "+7", "+380 61", "+380-61", "+380 55", "+380-55", "+375"];
		
		document.getElementsByName("btn_t8Save")[0].removeAttribute("disabled");
		
		for(var j=0; j<proCName.length; j++)
		{
			if (Desc.replace("\r\n"," ").includes(proCName[j]) || customDesc.replace("\r\n"," ").includes(proCName[j]) || marks.replace("\r\n"," ").includes(proCName[j]))
			{
				window.prompt("Prohibited Country , Location, Keyword found. '" + proCName[j] + "'.");
				document.getElementsByName("btn_t8Save")[0].setAttribute("disabled", true);
			}
		}
	}catch(err){	}	
}

function BLIssueTabHardPopup()
{
	try
	{
		var POR = document.getElementsByName('frm_t11sheet1_por_name')[0].value;
		var POL = document.getElementsByName('frm_t11sheet1_pol_name')[0].value;
		var POD = document.getElementsByName('frm_t11sheet1_pod_name')[0].value;
		var DEL = document.getElementsByName('frm_t11sheet1_del_name')[0].value;
		var FinalDest = document.getElementsByName('frm_t11sheet1_final_dest')[0].value;
		var Remarks = document.getElementsByName('frm_t11sheet1_obl_iss_rmk')[0].value;
		
		var proCName = ["NORTH KOREA", "SYRIA", "IRAN", "CREMIA", "CUBA", "MASHHAD", "MASHAD", "MESHED", "AFGHANISTAN", "DONETSK", "LUHANSK", "RUSSIA", "BELARUS", "PAKISTAN", "+53", "+850", "+963", "+98", "+7", "+380 61", "+380-61", "+380 55", "+380-55", "+375"];
		
		document.getElementsByName("btn_t11Save")[0].removeAttribute("disabled");
		
		for(var j=0; j<proCName.length; j++)
		{
			if (POR.replace("\r\n"," ").includes(proCName[j]) || POL.replace("\r\n"," ").includes(proCName[j]) || POD.replace("\r\n"," ").includes(proCName[j]) || DEL.replace("\r\n"," ").includes(proCName[j]) || FinalDest.replace("\r\n"," ").includes(proCName[j]) || Remarks.replace("\r\n"," ").includes(proCName[j]))
			{
				window.prompt("Prohibited Country , Location, Keyword found. '" + proCName[j] + "'.");
				document.getElementsByName("btn_t11Save")[0].setAttribute("disabled", true);
			}
		}
	}catch(err){	}
}

function custCodeRequestHardPopup()
{
	try
	{
		var proCName = ["NORTH KOREA", "SYRIA", "IRAN", "CREMIA", "CUBA", "MASHHAD", "MASHAD", "MESHED", "AFGHANISTAN", "DONETSK", "LUHANSK", "RUSSIA", "BELARUS", "PAKISTAN", "+53", "+850", "+963", "+98", "+7", "+380 61", "+380-61", "+380 55", "+380-55", "+375"];
		
		var name = document.getElementById("cust_nm").value;
		var add = document.getElementById("cust_addr").value;
		var country = document.getElementById("cnt_cd_text").value;
		var state = document.getElementById("cust_ste_cd_text").value;
		var city = document.getElementById("cust_cty_nm").value;
		var phone = document.getElementById("are_phn_no").value;
		var tel = document.getElementById("phn_no").value;
		
		document.getElementsByName("btn1_Send")[0].removeAttribute("disabled");
		
		for(var i = 0; i < proCName.length; i++)
		{
			if(name.includes(proCName[i]) || add.includes(proCName[i]) || country.includes(proCName[i]) || state.includes(proCName[i]) || city.includes(proCName[i]) || phone.includes(proCName[i]) || tel.includes(proCName[i]))
			{
				window.prompt("Prohibited Country , Location, Keyword found. '" + proCName[i] + "'.");
				document.getElementsByName("btn1_Send")[0].setAttribute("disabled", true);
			}
		}
		
	}catch(err){ }
}

function dangerCargoApplication()
{
	try
	{
		let UN = document.getElementById("imdg_un_no").value;
		let IMDG = document.getElementById("imdg_clss_cd").value;
		let Type = "";
		
		if(UN == "1950" && IMDG == "2.1")
		{
			let count = document.querySelectorAll("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr").length;
			if(count >= 2)
			{
				for(let i = 2; i <= count; i++)
				{
					Type = document.querySelectorAll("#sheet2 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow > td.GMWrap0.GMAlignCenter.GMText.GMCell.IBSheetFont1.HideCol1C5")[i-2].innerText;
					
					if(Type == "R2" || Type == "R5" || Type == "R7")
					{
						alert("As per ONE policy, if a shipper is loading UN 1950, Class 2.1 then:\n- An explosion-proof reefer is required.\n- The unit must be a Shipper Owned Container (SOC) Reefer.\n- The shipment must comply with IMDG code 7.3.7.6.3.");
						break;
					}
				}
			}
		}
	}
	catch(err){	}
}

function oneQuoteNonFMC()
{
	try
	{
		let sc = document.getElementById("sc_no").value;
		let rfa = document.getElementsByName("rfa_no")[0]?.value;
		let pol = document.getElementById("bkg_pol_cd")?.value;
		let del = document.getElementById("bkg_del_cd")?.value;
		
		if(pol.startsWith("IN"))
		{
			if(sc.startsWith("S000") || rfa.startsWith("R000"))
			{
				if(!(del.startsWith("US") || del.startsWith("CA") || del.startsWith("PR")))
				{
					alert("BGK Creation-->CM tab\r\nBKG HS Code first 4 digits and the SI HS Code(s) first 4 digits must validate,\r\n==> If matching completed the BL, \r\n==> If not matching follow the SOP checkpoints.");
				}
			}
		}
	}
	catch(err){}
}