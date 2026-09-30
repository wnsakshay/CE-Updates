function CNTR_Tab_Runner_BGClr()
{		
	try
	{
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C7").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C9").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C12").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C10").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C13").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C16").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C19").style.backgroundColor = "#EC7215";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C21").style.backgroundColor = "#EC7215";
		
		var cntr_status = document.getElementsByClassName("GMClassReadOnly GMWrap0 GMAlignCenter GMText GMCell IBSheetFont1 HideCol1C30");

		for(var i = 0; i < cntr_status.length; i++)
		{
			if(cntr_status[i].innerHTML == "VL")
			{
				cntr_status[i].style.backgroundColor="Red";
                document.getElementsByClassName("GMWrap0 GMAlignCenter GMHeaderText IBSheetFont1 GMCellHeader IBSheetFont1 HideCol1C30")[0].style.backgroundColor="red"  ;       
                document.getElementsByClassName("GMWrap0 GMAlignCenter GMHeaderText IBSheetFont1 GMCellHeader IBSheetFont1 HideCol1C30")[0].title="1. Container status is already VL \n2. Please check LPS charge is added or not";
		        cntr_status[i].style.color="White"		; 
			}
		}
	}
	catch(err)
	{
		
	}
}

function CNTR_Tab_Runner() 
{
	try
	{
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(1) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C7").title = "1) Check downloaded container # with SI.\r\n(If mismatch with SI – keep as per system & send mail).\r\n2) In case of Manual BL – if container # is not downloaded in system – Add manually if accepted in system.";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C9").title = "Update Seal# as per SI.\r\n(Always Tick on Seal Print).";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C12").title = "Update Seal# as per SI.\r\n(Always Tick on Seal Print).";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C10").title = "Update : Kind – M & Code: SH.";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C13").title = "Update : Kind – M & Code: SH.";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C16").title = "Update No. of Package & Package Type as per SI (Container wise).";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C19").title = "Update Container Gross Weight as per SI (Container wise).";
		document.querySelector("#t6sheet2 > tbody > tr:nth-child(1) > td:nth-child(2) > div > table > tbody > tr.GMHeaderRow > td.GMWrap0.GMAlignCenter.GMHeaderText.IBSheetFont1.GMCellHeader.IBSheetFont1.HideCol1C21").title = "Update CBM as per SI (Container wise).";
	}
	catch(err)
	{
		
	}
}

function MDCLAUSE()
{
	try
	{
		var keyword = document.getElementsByName('dg_cmdt_desc')[0].value;
		
		if(keyword.includes('WOOD PACKING') || keyword.includes('WOOD PACKAGE') || keyword.includes('WOOD PACKAGING') || keyword.includes('NWPM') || keyword.includes('WPM') || keyword.includes('WOODEN PACKAGE') || keyword.includes('WOODEN PACKAGING') || keyword.includes('WOODEN PACKING') )
		{
			if(window.confirm("Add 'IT IS STATED BY THE SHIPPER THAT' before the Clause"))
			{
				
			}
		}
		else if(keyword.includes('FUMIGATED SHIPMENT') || keyword.includes('FUMIGATED') )
		{
			if(window.confirm("Add 'SHIPPER DESIRES TO STATE THAT' before the Clause"))
			{
				
			}
		}
		else if(keyword.includes('CARGO QUALITY') || keyword.includes('FEED GRADE') || keyword.includes('GRADE') )
		{
			if(window.confirm("Check SOP & update 'SHIPPER DESIRES TO STATE THAT' before the Clause accordingly"))
			{
				
			}
		}
		else if(keyword.includes('SHIP TO'))
		{
			if(window.confirm("Add 'SHIPPER DESIRES TO STATE THAT' before the Clause"))
			{
				
			}
		}
		else if(keyword.includes('COUNTRY OF ORIGIN') || keyword.includes('ORIGIN') || keyword.includes('MADE IN'))
		{
			if(window.confirm("Add 'SHIPPER DESIRES TO STATE THAT' before the Clause"))
			{
				
			}
		}
		else if(keyword.includes('IN TRANSIT'))
		{
			if(window.confirm("Add 'SHIPPER DESIRES TO STATE THAT' before the Clause"))
			{
				
			}
		}
	}
	catch(err)
	{
		
	}
}

function bkg_intProhibited()
{
	try
	{
		var intRemark = document.getElementsByName('inter_rmk')[0].value;
		var intparr = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QAHTANIYAH",	"AL QUNAITRA",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEKSANDROVSK",	"ALEKSANDROVSKAYA KREPOST",	"ALEP",	"ALEPPO",	"ALEPPO",	"ALEPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALOPEX",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"ALUSTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHÍA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MÅH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BAZARGAN",	"BAZIRGAN",	"BELARUS",	"BELOGORSK",	"BEZIRGAN",	"BILOGHIRSK",	"BILOGIRSK",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABAÑAS",	"CAIBARIÉN",	"CAMAGÜEY",	"CANKOY",	"CÁRDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHERSON",	"CHERSONESOS",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUANT",	"CUBA",	"CUBAN",	"CUBCA",	"CUBHO",	"CUBOG",	"CUBOQ",	"CUBUF",	"CUBWW",	"CUBYM",	"CUCAB",	"CUCAI",	"CUCAR",	"CUCAS",	"CUCCC",	"CUCEI",	"CUCFG",	"CUCMW",	"CUCYO",	"CUGER",	"CUGIB",	"CUGUB",	"CUGYB",	"CUHAV",	"CUHOG",	"CUICR",	"CUIDS",	"CUJUC",	"CULCL",	"CUMAR",	"CUMEL",	"CUMIR",	"CUMJG",	"CUMLG",	"CUMNT",	"CUMOA",	"CUMOR",	"CUMZO",	"CUNIQ",	"CUNVT",	"CUPAL",	"CUPAS",	"CUPIL",	"CUPPA",	"CUPST",	"CUPTA",	"CUQCO",	"CUQMA",	"CUQPD",	"CUQSN",	"CURSL",	"CUSCS",	"CUSCU",	"CUSDT",	"CUSNJ",	"CUSNU",	"CUSZJ",	"CUTAN",	"CUTDZ",	"CUTND",	"CUUMA",	"CUUPA",	"CUUSS",	"CUVDO",	"CUVIT",	"CUVRA",	"CUVTU",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAA AL-BALAD",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESKI QIRIM",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FOROS",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"GURZUF",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"HUNGNAM-GUYOK",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"IMAM KHOMEINI INTERNATIONAL APT",	"TEHRAN",	"IMAM KHOMEINI PT",	"MAHSHAHR CITY",	"INKERMAN",	"IRABD",	"IRABR",	"IRACP",	"IRACZ",	"IRADU",	"IRAEU",	"IRAFZ",	"IRAHR",	"IRAKW",	"IRAMD",	"IRAMR",	"IRAN",	"IRAN SHAHR",	"IRARA",	"IRASA",	"IRASR",	"IRAWZ",	"IRAZD",	"IRBAH",	"IRBAJ",	"IRBAM",	"IRBAZ",	"IRBBL",	"IRBDH",	"IRBIK",	"IRBJB",	"IRBKK",	"IRBKM",	"IRBMR",	"IRBND",	"IRBNH",	"IRBOR",	"IRBPA",	"IRBRG",	"IRBRJ",	"IRBSM",	"IRBSR",	"IRBUZ",	"IRBXR",	"IRCI3",	"IRCKT",	"IRCYT",	"IRDAM",	"IRDAY",	"IRDEF",	"IRDEH",	"IRDGN",	"IRDJU",	"IRDOG",	"IRESF",	"IRESL",	"IRFAZ",	"IRFKR",	"IRFR7",	"IRGBT",	"IRGCH",	"IRGHA",	"IRGNH",	"IRGSM",	"IRHDM",	"IRHDR",	"IRHEJ",	"IRHOR",	"IRIAQ",	"IRIFH",	"IRIFN",	"IRIHR",	"IRIIL",	"IRIKA",	"IRIMH",	"IRIQH",	"IRJAK",	"IRJBD",	"IRJRT",	"IRKAL",	"IRKAS",	"IRKER",	"IRKHA",	"IRKHD",	"IRKHK",	"IRKHO",	"IRKHS",	"IRKHY",	"IRKIH",	"IRKMS",	"IRKNR",	"IRKOR",	"IRKSH",	"IRLEH",	"IRLFM",	"IRLIN",	"IRLRR",	"IRLVP",	"IRMEB",	"IRMHD",	"IRMLK",	"IRMMH",	"IRMRX",	"IRNEK",	"IRNKA",	"IRNKW",	"IRNSB",	"IRNSH",	"IRNUJ",	"IROMH",	"IROMI",	"IROSM",	"IRPFQ",	"IRPGU",	"IRPSR",	"IRPYK",	"IRQAZ",	"IRQHK",	"IRQKC",	"IRQMJ",	"IRQSH",	"IRQSM",	"IRQUM",	"IRQYS",	"IRRAS",	"IRRBA",	"IRRJN",	"IRRTM",	"IRRZR",	"IRSAB",	"IRSAN",	"IRSAZ",	"IRSBR",	"IRSDG",	"IRSEK",	"IRSEM",	"IRSFN",	"IRSHA",	"IRSHS",	"IRSIX",	"IRSMW",	"IRSRA",	"IRSRJ",	"IRSRP",	"IRSRY",	"IRSVH",	"IRSXI",	"IRSYZ",	"IRTAJ",	"IRTBZ",	"IRTCX",	"IRTEW",	"IRTHR",	"IRTMB",	"IRUIM",	"IRUZA",	"IRWPS",	"IRXBJ",	"IRYAS",	"IRZAH",	"IRZAN",	"IRZBR",	"IRZVI",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JÚCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KALAMITA",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARASUBAZAR",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOKTEBEL",	"KOZLOV",	"KPCCD",	"KPCHO",	"KPFNJ",	"KPGEN",	"KPHAE",	"KPHGM",	"KPKSN",	"KPNAM",	"KPODA",	"KPPNG",	"KPREM",	"KPRIW",	"KPRJN",	"KPSAM",	"KPSGN",	"KPSGO",	"KPSII",	"KPSIN",	"KPSON",	"KPTCH",	"KPWON",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATTAKIA",	"LATTAKIA",	"LATAKIA",	"LAVAN",	"LEREDI",	"LEUKOPOLIS",	"LEVKOPOL",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHHAD",	"MASHAD",	"MESHED",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORÓN",	"MOSUL",	"NAJIN",	"NAKHJAVÅN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOVOFEDORIVKA",	"NOVOFEDOROVKA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OLEKSANDRIVSK",	"OLEKSANDRIVSKA FORTETSIA",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PARTENIT",	"PAYAM",	"PAYAM APT",	"PEREKOP",	"PERICO",	"PERSEPOLIS",	"PILÓN",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATÍ",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QARASUVBAZAR",	"QASABEHE KARAJ",	"QASABEHEKARAJ",	"QASABIHI KARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TÁNAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKI",	"SAKY",	"SAKY RAION",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SAQ RAYONI",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SCOLKINO",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHID RAJAEE PT/BANDAR ABBAS",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHCHOLKINO",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SOLKHAT",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STAROI KRIM",	"STARYI KRYM",	"SUDAC",	"SUDAGH",	"SUDAK",	"SUDAQ",	"SWEIDA",	"SYALD",	"SYALP",	"SYARW",	"SYBAN",	"SYBEN",	"SYDAM",	"SYDEZ",	"SYHMS",	"SYKAC",	"SYLTK",	"SYMFEROPIL",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"SYPMS",	"SYQDR",	"SYQHM",	"SYQSW",	"SYRIA",	"SYSOR",	"SYTAO",	"SYTTS",	"SYWST",	"SYYBD",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TÁNAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"UAARM",	"UABAP",	"UACRI",	"UAFEO",	"UAKEH",	"UAKHE",	"UAKRA",	"UASIP",	"UASVP",	"UAYAL",	"UAZKA",	"UAZPR",	"UAZUI",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIA",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPORIZHZHYA",	"ZAPORIZZJA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+850",	"+963",	"+98" ];
		for(var i=0; i< intparr.length; i++)
		{
			if (intRemark.includes(intparr[i]))
			{
				alert("Prohibited Country found in Int Remark. '" + intparr[i] + "'.");
			}
		}
	}
	catch(err)
	{
		
	}
}

function bkg_custProhibited()
{
	try
	{
		var custRemark = document.getElementsByName('xter_rmk')[0].value;
		var custarr = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QAHTANIYAH",	"AL QUNAITRA",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEKSANDROVSK",	"ALEKSANDROVSKAYA KREPOST",	"ALEP",	"ALEPPO",	"ALEPPO",	"ALEPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALOPEX",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"ALUSTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHÍA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MÅH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BAZARGAN",	"BAZIRGAN",	"BELARUS",	"BELOGORSK",	"BEZIRGAN",	"BILOGHIRSK",	"BILOGIRSK",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABAÑAS",	"CAIBARIÉN",	"CAMAGÜEY",	"CANKOY",	"CÁRDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHERSON",	"CHERSONESOS",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUANT",	"CUBA",	"CUBAN",	"CUBCA",	"CUBHO",	"CUBOG",	"CUBOQ",	"CUBUF",	"CUBWW",	"CUBYM",	"CUCAB",	"CUCAI",	"CUCAR",	"CUCAS",	"CUCCC",	"CUCEI",	"CUCFG",	"CUCMW",	"CUCYO",	"CUGER",	"CUGIB",	"CUGUB",	"CUGYB",	"CUHAV",	"CUHOG",	"CUICR",	"CUIDS",	"CUJUC",	"CULCL",	"CUMAR",	"CUMEL",	"CUMIR",	"CUMJG",	"CUMLG",	"CUMNT",	"CUMOA",	"CUMOR",	"CUMZO",	"CUNIQ",	"CUNVT",	"CUPAL",	"CUPAS",	"CUPIL",	"CUPPA",	"CUPST",	"CUPTA",	"CUQCO",	"CUQMA",	"CUQPD",	"CUQSN",	"CURSL",	"CUSCS",	"CUSCU",	"CUSDT",	"CUSNJ",	"CUSNU",	"CUSZJ",	"CUTAN",	"CUTDZ",	"CUTND",	"CUUMA",	"CUUPA",	"CUUSS",	"CUVDO",	"CUVIT",	"CUVRA",	"CUVTU",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAA AL-BALAD",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESKI QIRIM",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FOROS",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"GURZUF",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"HUNGNAM-GUYOK",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"IMAM KHOMEINI INTERNATIONAL APT",	"TEHRAN",	"IMAM KHOMEINI PT",	"MAHSHAHR CITY",	"INKERMAN",	"IRABD",	"IRABR",	"IRACP",	"IRACZ",	"IRADU",	"IRAEU",	"IRAFZ",	"IRAHR",	"IRAKW",	"IRAMD",	"IRAMR",	"IRAN",	"IRAN SHAHR",	"IRARA",	"IRASA",	"IRASR",	"IRAWZ",	"IRAZD",	"IRBAH",	"IRBAJ",	"IRBAM",	"IRBAZ",	"IRBBL",	"IRBDH",	"IRBIK",	"IRBJB",	"IRBKK",	"IRBKM",	"IRBMR",	"IRBND",	"IRBNH",	"IRBOR",	"IRBPA",	"IRBRG",	"IRBRJ",	"IRBSM",	"IRBSR",	"IRBUZ",	"IRBXR",	"IRCI3",	"IRCKT",	"IRCYT",	"IRDAM",	"IRDAY",	"IRDEF",	"IRDEH",	"IRDGN",	"IRDJU",	"IRDOG",	"IRESF",	"IRESL",	"IRFAZ",	"IRFKR",	"IRFR7",	"IRGBT",	"IRGCH",	"IRGHA",	"IRGNH",	"IRGSM",	"IRHDM",	"IRHDR",	"IRHEJ",	"IRHOR",	"IRIAQ",	"IRIFH",	"IRIFN",	"IRIHR",	"IRIIL",	"IRIKA",	"IRIMH",	"IRIQH",	"IRJAK",	"IRJBD",	"IRJRT",	"IRKAL",	"IRKAS",	"IRKER",	"IRKHA",	"IRKHD",	"IRKHK",	"IRKHO",	"IRKHS",	"IRKHY",	"IRKIH",	"IRKMS",	"IRKNR",	"IRKOR",	"IRKSH",	"IRLEH",	"IRLFM",	"IRLIN",	"IRLRR",	"IRLVP",	"IRMEB",	"IRMHD",	"IRMLK",	"IRMMH",	"IRMRX",	"IRNEK",	"IRNKA",	"IRNKW",	"IRNSB",	"IRNSH",	"IRNUJ",	"IROMH",	"IROMI",	"IROSM",	"IRPFQ",	"IRPGU",	"IRPSR",	"IRPYK",	"IRQAZ",	"IRQHK",	"IRQKC",	"IRQMJ",	"IRQSH",	"IRQSM",	"IRQUM",	"IRQYS",	"IRRAS",	"IRRBA",	"IRRJN",	"IRRTM",	"IRRZR",	"IRSAB",	"IRSAN",	"IRSAZ",	"IRSBR",	"IRSDG",	"IRSEK",	"IRSEM",	"IRSFN",	"IRSHA",	"IRSHS",	"IRSIX",	"IRSMW",	"IRSRA",	"IRSRJ",	"IRSRP",	"IRSRY",	"IRSVH",	"IRSXI",	"IRSYZ",	"IRTAJ",	"IRTBZ",	"IRTCX",	"IRTEW",	"IRTHR",	"IRTMB",	"IRUIM",	"IRUZA",	"IRWPS",	"IRXBJ",	"IRYAS",	"IRZAH",	"IRZAN",	"IRZBR",	"IRZVI",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JÚCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KALAMITA",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARASUBAZAR",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOKTEBEL",	"KOZLOV",	"KPCCD",	"KPCHO",	"KPFNJ",	"KPGEN",	"KPHAE",	"KPHGM",	"KPKSN",	"KPNAM",	"KPODA",	"KPPNG",	"KPREM",	"KPRIW",	"KPRJN",	"KPSAM",	"KPSGN",	"KPSGO",	"KPSII",	"KPSIN",	"KPSON",	"KPTCH",	"KPWON",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATTAKIA",	"LATTAKIA",	"LATAKIA",	"LAVAN",	"LEREDI",	"LEUKOPOLIS",	"LEVKOPOL",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHHAD",	"MASHAD",	"MESHED",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORÓN",	"MOSUL",	"NAJIN",	"NAKHJAVÅN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOVOFEDORIVKA",	"NOVOFEDOROVKA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OLEKSANDRIVSK",	"OLEKSANDRIVSKA FORTETSIA",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PARTENIT",	"PAYAM",	"PAYAM APT",	"PEREKOP",	"PERICO",	"PERSEPOLIS",	"PILÓN",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATÍ",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QARASUVBAZAR",	"QASABEHE KARAJ",	"QASABEHEKARAJ",	"QASABIHI KARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TÁNAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKI",	"SAKY",	"SAKY RAION",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SAQ RAYONI",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SCOLKINO",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHID RAJAEE PT/BANDAR ABBAS",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHCHOLKINO",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SOLKHAT",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STAROI KRIM",	"STARYI KRYM",	"SUDAC",	"SUDAGH",	"SUDAK",	"SUDAQ",	"SWEIDA",	"SYALD",	"SYALP",	"SYARW",	"SYBAN",	"SYBEN",	"SYDAM",	"SYDEZ",	"SYHMS",	"SYKAC",	"SYLTK",	"SYMFEROPIL",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"SYPMS",	"SYQDR",	"SYQHM",	"SYQSW",	"SYRIA",	"SYSOR",	"SYTAO",	"SYTTS",	"SYWST",	"SYYBD",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TÁNAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"UAARM",	"UABAP",	"UACRI",	"UAFEO",	"UAKEH",	"UAKHE",	"UAKRA",	"UASIP",	"UASVP",	"UAYAL",	"UAZKA",	"UAZPR",	"UAZUI",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIA",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPORIZHZHYA",	"ZAPORIZZJA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+850",	"+963",	"+98" ];
		for(var i=0; i< custarr.length; i++)
		{
			if (custRemark.includes(custarr[i]))
			{
				alert("Prohibited Country found in Cust Remark. '" + custarr[i] +"'.");
			}
		}
	}
	catch(err)
	{
		
	}
}

function CheckFiler_FROBShipment()
{
	try
	{
		var BLNo = document.getElementsByName("bkg_no")[0].value;
		var POD = document.getElementsByName("bkg_pod_cd")[0].value;
		var DEL = document.getElementsByName("bkg_del_cd")[0].value;
		var SCAC = document.getElementsByName("scac_cd")[0].value.toUpperCase();
		
		var POD_Start = POD.substr(0, 2);
		var DEL_Start = DEL.substr(0, 2);
		var flag = 0;
		
		var frob = document.getElementsByName("frob_cd")[0].value;
		var usfiler = document.getElementsByName("usa_cstms_file_cd_text")[0].value;
		var cafiler = document.getElementsByName("cnd_cstms_file_cd_text")[0].value;
		
		if(frob != "" && (usfiler == "" || cafiler == ""))
		{
			alert("Please update filer for FROB Shipment");
			document.getElementById("btn_t1Save").setAttribute("disabled",true);
		}
		else if(POD_Start == "US" || POD_Start == "CA" || DEL_Start == "US" || DEL_Start == "CA")
		{				
			if(usfiler == "" || cafiler == "" )
			{
				if(BLNo.substr(10,2) == "00")
				{
					//var RegExpression = /^[a-zA-Z\s]*$/; 
					let filercomment = prompt("US/CA filer blank in the BL. Please update filer as it is mandatory and confirm.")
					if (filercomment!= null)
					{
						if(filercomment.trim() != "")
						{
							
						}
						else
						{
							alert("Invalid Comment");
						}
					}
					else
					{
						alert("Invalid Comment");
					}
				}
			}
			else if(SCAC == "ONEY")
			{
				if(usfiler != "3" || cafiler != "3" )
				{
					flag = 1;
				}
				else
				{
					flag = 0;
				}
			}
		}
		else
		{
			flag = 0;
		}
		
		if(flag == 0)
		{
			document.getElementsByName("btn_t1Save")[0].removeAttribute("disabled");
		}
		else
		{
			document.getElementsByName("btn_t1Save")[0].setAttribute("disabled", true);
		}
	}
	catch(err)
	{
		
	}
}

function MnD_DueCheck()
{
	try
	{
		var Desc = document.getElementsByName('dg_cmdt_desc')[0].value;
		var customDesc = document.getElementsByName('cstms_desc')[0].value;
		var marks = document.getElementsByName('mk_desc')[0].value;
		var cname = ["AFGHANISTAN",	"BAIKAL",	"BALTIC",	"BOSNIA",	"BURMA",	"BURUNDI",	"CENTRAL AFRICAN REPUBLIC",	"DEMOCRATIC REPUBLIC OF CONGO",	"EGYPT",	"ESTONIA",	"FEDERATSIYA",	"FINLAND",	"GEORGIA",	"HERZEGOVINA",	"HIKVISION",	"IRAQ",	"IRKUTSK",	"JORDAN",	"KALININGRAD",	"KIEW",	"KREMLIN",	"LADOGA",	"LATVIA",	"LEBANON",	"LIBYA",	"LITHUANIA",	"MALI",	"MOSCOW",	"MURMANSK",	"MYANMAR",	"NICARAGUA",	"NOVOROSSIYSK",	"PETERS",	"POTI",	"ROSSIJA",	"ROSSIYA",	"ROSSIYSKAYA",	"S.F.S.R.",	"SERBIA",	"SIBERIA",	"SOCIALIST",	"SOMALIA",	"SOUTH SUDAN",	"SOVIET",	"ST PETERSBURG",	"SUDAN",	"TUNISIA",	"TURKEY",	"U.S.S.R",	"UKRAINE",	"UNITED ARAB EMIRATES",	"UAE",	"U.A.E.",	"USSR",	"VENEZUELA",	"VLADIVOSTOCK",	"VOLGA",	"YEMEN",	"ZIMBABWE",	"+358",	"+370",	"+371",	"+372",	"+380",	"+995" ];
		var cpname = ["ABADAN",	"ABADEH",	"ABHAR",	"ABU MUSA",	"AGHAJARI",	"AHAR",	"AHVAZ",	"AHWAZ",	"AKHIAR",	"AKHTYAR",	"AK-MECHET",	"AKMESCIT",	"AKYAR",	"AL LADHIQIYAH",	"AL LADIQIYAH",	"AL LADQIYAH",	"AL QAHTANIYAH",	"AL QUNAITRA",	"AL QUNAYTIRAH",	"AL TABQAH",	"AL THAURAH",	"AL THAWRAH",	"AL UZSAYR",	"ALEKSANDROVSK",	"ALEKSANDROVSKAYA KREPOST",	"ALEP",	"ALEPPO",	"ALEPPO",	"ALEPO",	"ALHASKA",	"ALI SHAH AVAZ",	"ALOPEX",	"ALQAHTANIYAH",	"ALQUNAITRA",	"ALQUNAYTRAH",	"ALUPKA",	"ALUSHTA",	"ALUSTA",	"AMARA",	"AMIR ABAD",	"AMIRABAD",	"ANTILLA",	"ANZALI",	"AQMESCIT",	"AQYAR",	"AR RAQQAH",	"ARAK",	"ARAS",	"ARDABIL",	"ARMIANSK",	"ARMIANSK-BAZAR",	"ARMJANSK",	"ARMYANSK",	"ARMYANSKIY BAZAR",	"ARMYIANSK",	"ARRAQAH",	"AR-RAQQAH",	"ARVAND",	"ARWAD",	"AS SUWAYDA",	"ASALOYEH",	"ASALUYEH",	"ASTARA",	"ASUWAYDA",	"BABOLSAR",	"BACHISCHISSARAI",	"BACHTCHISARAI",	"BAGCASARAY",	"BAHCESARAY",	"BAHÍA HONDA",	"BAHREGAN",	"BAJGIRAN",	"BAKHCHISARAY",	"BAKHCHYSARAI",	"BAKHCHYSARAY",	"BAKHEHISARAY",	"BAKHTARAN",	"BAM",	"BANDAR ABBAS",	"BANDAR ABBASI",	"BANDAR AMIRABAD",	"BANDAR ASSALUYEH",	"BANDAR IMAM KHOMEINI",	"BANDAR KHOMEINI",	"BANDAR MASHUR",	"BANDAR NEKA",	"BANDAR SHAHID RAJAEE",	"BANDAR SHAHPUR",	"BANDARE ABAS",	"BANDARE ABBAS",	"BANDAR-E ANZALI",	"BANDARE EMAM KHOMEYNI",	"BANDAR-E EMAM KHOMEYNI",	"BANDAR-E GAZ",	"BANDAR-E LENGEH",	"BANDAR-E MÅH SHAHR",	"BANDARE PARSIAN",	"BANEH",	"BANES",	"BANGHAZI",	"BANIYAS",	"BARACOA",	"BASARGAN",	"BAYAMO",	"BAZARGAN",	"BAZIRGAN",	"BELARUS",	"BELOGORSK",	"BEZIRGAN",	"BILOGHIRSK",	"BILOGIRSK",	"BILOHIRSK",	"BIRJAND",	"BISHEH KOLA",	"BOCA GRANDE",	"BOJNURD",	"BOQUERON",	"BORAZJAN",	"BORUJERD",	"BOSPOR",	"BOSPORA",	"BUFADERO",	"BUMPYO",	"BUSHEHR",	"CABAÑAS",	"CAIBARIÉN",	"CAMAGÜEY",	"CANKOY",	"CÁRDENAS",	"CASILDA",	"CAYO COCO",	"CAYO LARGO DEL SUR",	"CEIBA HUECA",	"CHABAHAR",	"CHAH BAHAR",	"CHERSON",	"CHERSONESOS",	"CHONGJIN",	"CIENFUEGOS",	"COLON",	"CREMEA",	"CREMIA",	"CRIMEA",	"CUANT",	"CUBA",	"CUBAN",	"CUBCA",	"CUBHO",	"CUBOG",	"CUBOQ",	"CUBUF",	"CUBWW",	"CUBYM",	"CUCAB",	"CUCAI",	"CUCAR",	"CUCAS",	"CUCCC",	"CUCEI",	"CUCFG",	"CUCMW",	"CUCYO",	"CUGER",	"CUGIB",	"CUGUB",	"CUGYB",	"CUHAV",	"CUHOG",	"CUICR",	"CUIDS",	"CUJUC",	"CULCL",	"CUMAR",	"CUMEL",	"CUMIR",	"CUMJG",	"CUMLG",	"CUMNT",	"CUMOA",	"CUMOR",	"CUMZO",	"CUNIQ",	"CUNVT",	"CUPAL",	"CUPAS",	"CUPIL",	"CUPPA",	"CUPST",	"CUPTA",	"CUQCO",	"CUQMA",	"CUQPD",	"CUQSN",	"CURSL",	"CUSCS",	"CUSCU",	"CUSDT",	"CUSNJ",	"CUSNU",	"CUSZJ",	"CUTAN",	"CUTDZ",	"CUTND",	"CUUMA",	"CUUPA",	"CUUSS",	"CUVDO",	"CUVIT",	"CUVRA",	"CUVTU",	"CYRUS TERMINAL",	"DAMAS",	"DAMASCUS",	"DAMAVAND",	"DANCHEON",	"DARA",	"DARAA",	"DAYR AZZAWR",	"DAYYER",	"DEHBID",	"DEIREZZOR",	"DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",	"DERA",	"DERAA",	"DERAA AL-BALAD",	"DERAAAL-BALAD",	"DEZFUL",	"DIMASHQ",	"DO GHARUN",	"DONETSK",	"DPRK",	"DSHANKOI",	"DZANKOJ",	"DZHANKOI",	"DZHANKOY",	"EDREI",	"EL-KUNEITRA",	"ERMENI BAZAR",	"ESFAHAN",	"ESKI QIRIM",	"ESLAMSHAHR",	"ESPAHAN",	"EUPATORIA",	"EUPATORYA",	"EVPATORIA",	"FARDIS",	"FASA",	"FEODOSIA",	"FEODOSIIA",	"FEODOSIJA",	"FEODOSIYA",	"FEODOSSIA",	"FEODOSYIA",	"FOROS",	"FREIDOON KENAR",	"GACHSARAN",	"GAESONG",	"GANAVEH",	"GAZLEVI",	"GENSAN",	"GEZLEV",	"GHAZVIN",	"GHESHM",	"GHOM",	"GIBARA",	"GOEZLEVE",	"GORGAN",	"GOZLEVE",	"GUANTANAMO",	"GUANTANAMO BAY",	"GUANTANAMO NAS",	"GUAYABAL",	"GURZUF",	"HAEJU",	"HALAB",	"HAMA",	"HAMADAN",	"HAMAH",	"HAVADARYA",	"HAVANA",	"HENJAM",	"HEREDI",	"HESA",	"HIMS",	"HOLGUIN",	"HOMS",	"HORMUZ",	"HUNGNAM",	"HUNGNAM-GUYOK",	"ILAM",	"IMAM HASAN",	"IMAM KHOMEINI",	"IMAM KHOMEINI INTERNATIONAL",	"IMAM KHOMEINI INTERNATIONAL APT",	"TEHRAN",	"IMAM KHOMEINI PT",	"MAHSHAHR CITY",	"INKERMAN",	"IRABD",	"IRABR",	"IRACP",	"IRACZ",	"IRADU",	"IRAEU",	"IRAFZ",	"IRAHR",	"IRAKW",	"IRAMD",	"IRAMR",	"IRAN",	"IRAN SHAHR",	"IRARA",	"IRASA",	"IRASR",	"IRAWZ",	"IRAZD",	"IRBAH",	"IRBAJ",	"IRBAM",	"IRBAZ",	"IRBBL",	"IRBDH",	"IRBIK",	"IRBJB",	"IRBKK",	"IRBKM",	"IRBMR",	"IRBND",	"IRBNH",	"IRBOR",	"IRBPA",	"IRBRG",	"IRBRJ",	"IRBSM",	"IRBSR",	"IRBUZ",	"IRBXR",	"IRCI3",	"IRCKT",	"IRCYT",	"IRDAM",	"IRDAY",	"IRDEF",	"IRDEH",	"IRDGN",	"IRDJU",	"IRDOG",	"IRESF",	"IRESL",	"IRFAZ",	"IRFKR",	"IRFR7",	"IRGBT",	"IRGCH",	"IRGHA",	"IRGNH",	"IRGSM",	"IRHDM",	"IRHDR",	"IRHEJ",	"IRHOR",	"IRIAQ",	"IRIFH",	"IRIFN",	"IRIHR",	"IRIIL",	"IRIKA",	"IRIMH",	"IRIQH",	"IRJAK",	"IRJBD",	"IRJRT",	"IRKAL",	"IRKAS",	"IRKER",	"IRKHA",	"IRKHD",	"IRKHK",	"IRKHO",	"IRKHS",	"IRKHY",	"IRKIH",	"IRKMS",	"IRKNR",	"IRKOR",	"IRKSH",	"IRLEH",	"IRLFM",	"IRLIN",	"IRLRR",	"IRLVP",	"IRMEB",	"IRMHD",	"IRMLK",	"IRMMH",	"IRMRX",	"IRNEK",	"IRNKA",	"IRNKW",	"IRNSB",	"IRNSH",	"IRNUJ",	"IROMH",	"IROMI",	"IROSM",	"IRPFQ",	"IRPGU",	"IRPSR",	"IRPYK",	"IRQAZ",	"IRQHK",	"IRQKC",	"IRQMJ",	"IRQSH",	"IRQSM",	"IRQUM",	"IRQYS",	"IRRAS",	"IRRBA",	"IRRJN",	"IRRTM",	"IRRZR",	"IRSAB",	"IRSAN",	"IRSAZ",	"IRSBR",	"IRSDG",	"IRSEK",	"IRSEM",	"IRSFN",	"IRSHA",	"IRSHS",	"IRSIX",	"IRSMW",	"IRSRA",	"IRSRJ",	"IRSRP",	"IRSRY",	"IRSVH",	"IRSXI",	"IRSYZ",	"IRTAJ",	"IRTBZ",	"IRTCX",	"IRTEW",	"IRTHR",	"IRTMB",	"IRUIM",	"IRUZA",	"IRWPS",	"IRXBJ",	"IRYAS",	"IRZAH",	"IRZAN",	"IRZBR",	"IRZVI",	"ISABELA DE SAGUA",	"ISFAHAN",	"ISLAM QAL'EH",	"ISPHAHAN",	"IWON",	"JALTA",	"JASK",	"JEVPATORIJA",	"JEWPATORIJA",	"JIROFT",	"JOLFA",	"JÚCARO",	"KAESONG",	"KAFFA",	"KALALEH",	"KALAMITA",	"KAMESHLI",	"KANGAN",	"KARADJ",	"KARADJE",	"KARADSCH",	"KARADZ",	"KARADZS",	"KARAG",	"KARAJ",	"KARASUBAZAR",	"KARATZ",	"KAREJ",	"KASHAN",	"KEFE",	"KERC",	"KERCH",	"KEREC",	"KEREDI",	"KEREDZAS",	"KEREDZH",	"KEREZH",	"KERMAN",	"KERMANSHAH",	"KERTCH",	"KERTSCH",	"KEZLEV",	"KHANEH",	"KHARAC",	"KHARK ISLAND",	"KHERSON",	"KHOMEYNI SHAHR",	"KHORRAMABAD",	"KHORRAMSHAHR",	"KHOSRAVI",	"KHOSROWSHAHR",	"KHVOY",	"KISH",	"KISH ISLAND",	"KISHM",	"KOKTEBEL",	"KOZLOV",	"KPCCD",	"KPCHO",	"KPFNJ",	"KPGEN",	"KPHAE",	"KPHGM",	"KPKSN",	"KPNAM",	"KPODA",	"KPPNG",	"KPREM",	"KPRIW",	"KPRJN",	"KPSAM",	"KPSGN",	"KPSGO",	"KPSII",	"KPSIN",	"KPSON",	"KPTCH",	"KPWON",	"KRASNOPEREKOPSK",	"KRIM",	"KRYM",	"KUNEITRA",	"KYARAJI",	"LA COLOMA",	"LA HABANA",	"LAMERD",	"LAR",	"LAS BRUJAS",	"LAS TUNAS",	"LATAKIA",	"LATTAKIA",	"LATTAKIA",	"LATAKIA",	"LAVAN",	"LEREDI",	"LEUKOPOLIS",	"LEVKOPOL",	"LINGAH",	"LOS CANOS",	"LUHANSK",	"MAHSHAD",	"MAHSHAHR",	"MAKU",	"MALEKAN",	"MANZANILLO",	"MARIEL",	"MASHAD",	"MASHHAD",	"MASHAD",	"MESHED",	"MASJED SOLEYMAN",	"MATANZAS",	"MAXIMO GOMEZ",	"MAYAJIGUA",	"MAZANDARAN MAHALLEH",	"MEDIA LUNA",	"MELGAREJO",	"MESHAD",	"MEYBOD",	"MIRAMAR",	"MOA",	"MORÓN",	"MOSUL",	"NAJIN",	"NAKHJAVÅN TAPPEH",	"NAMPO",	"NEKA",	"NEYSHABUR",	"NICARO",	"NIQUERO",	"NOJEH",	"NORTH KOREA",	"NOVOFEDORIVKA",	"NOVOFEDOROVKA",	"NOW SHAHR",	"NUEVA GERONA",	"NUEVITAS",	"ODAEJIN",	"OLEKSANDRIVSK",	"OLEKSANDRIVSKA FORTETSIA",	"OMIDIYEH",	"PALMYRA",	"PALO ALTO",	"PANJANG",	"PANTICAPAEUM",	"PARSABAD",	"PARTENIT",	"PAYAM",	"PAYAM APT",	"PEREKOP",	"PERICO",	"PERSEPOLIS",	"PILÓN",	"PINAR DEL RIO",	"PIRAN SHAHR",	"PRESTON",	"PUERTO DA VITA",	"PUERTO DE PASTELILLO",	"PUERTO MANATÍ",	"PUERTO PADRE",	"PUERTO TARAFA",	"PUNTA ALEGRE",	"PUNTA DE MAISI",	"PUNTA GORDA",	"PYONGYANG",	"QAPI",	"QARASUVBAZAR",	"QASABEHE KARAJ",	"QASABEHEKARAJ",	"QASABIHI KARAJ",	"QASABIHIKARAJ",	"QAZVIN",	"QAZWIN",	"QESHM",	"QESHM ISLAND",	"QISHM",	"QOM",	"QUM",	"QUNAITIRA",	"QUNEITRA",	"RAFSANJAN",	"RAJIN",	"RAKKA",	"RAMSAR",	"RAQQA",	"RAQQAWI",	"RAS BAHRGAN",	"RASHT",	"RATAWI",	"REMPO",	"REQA",	"RIWON",	"RUSSIA",	"SABZEVAR",	"SABZEVAR NATIONAL",	"SAGUA DE TÁNAMO",	"SAGUA LA GRANDE",	"SAHAND",	"SAHLAN",	"SAKI",	"SAKY",	"SAKY RAION",	"SALAFCHEGAN",	"SAMAWA",	"SAMCHA DO",	"SAN JULIAN",	"SAN NICOLAS BARI",	"SANANDAJ",	"SANTA CLARA",	"SANTA CRUZ DEL SUR",	"SANTA LUCIA",	"SANTI SPIRITUS",	"SANTIAGO DE CUBA",	"SAQ RAYONI",	"SARAKHS",	"SARI",	"SAROOJ ANCHORAGE",	"SARY",	"SAVEH",	"SCOLKINO",	"SEBASTOPOL",	"SEMNAN",	"SEVASTOPOL",	"SEWASTOPOL",	"SHAHID BAHONAR",	"SHAHID RAJAEE",	"SHAHID RAJAEE PT/BANDAR ABBAS",	"SHAHRE KORD",	"SHAHR-E KORD",	"SHAHRIAR",	"SHAHRUD",	"SHCHOLKINE",	"SHCHOLKINO",	"SHIRAZ",	"SIGUANEA",	"SIMFEROPOL",	"SINPO",	"SINUIJU",	"SIRJAN",	"SIRRI ISLAND",	"SIVASTOPOL",	"SOLKHAT",	"SONGDO",	"SONGJIN",	"SONGNIM",	"SONGRIM",	"SOROOSH TERMINAL",	"STAROI KRIM",	"STARYI KRYM",	"SUDAC",	"SUDAGH",	"SUDAK",	"SUDAQ",	"SWEIDA",	"SYALD",	"SYALP",	"SYARW",	"SYBAN",	"SYBEN",	"SYDAM",	"SYDEZ",	"SYHMS",	"SYKAC",	"SYLTK",	"SYMFEROPIL",	"SYMFEROPOL",	"SYMPHEROPOLIS",	"SYPMS",	"SYQDR",	"SYQHM",	"SYQSW",	"SYRIA",	"SYSOR",	"SYTAO",	"SYTTS",	"SYWST",	"SYYBD",	"TABAS",	"TABRIZ",	"TAJABAD",	"TAL WASAT",	"TAL WASSIT",	"TALL WASET",	"TÁNAMO",	"TANCHON",	"TANYANG",	"TARTUS",	"TARTUS OIL TERMINAL",	"TEHERAN",	"TEHRAN",	"TELL WASIT",	"TEODOSIIA",	"THE REPUBLIC OF CRIMEA",	"THEODOSIA",	"TILKUH",	"TOHID",	"TOMBAK",	"TRINIDAD",	"TUNAS DE ZAZA",	"UAARM",	"UABAP",	"UACRI",	"UAFEO",	"UAKEH",	"UAKHE",	"UAKRA",	"UASIP",	"UASVP",	"UAYAL",	"UAZKA",	"UAZPR",	"UAZUI",	"URMIA",	"URMIEH",	"VARADERO",	"VEDADO",	"WASIT",	"WONSAN",	"YABRUD",	"YALTA",	"YASOUJ",	"YASUJ",	"YAZD",	"YEVPATORIA",	"YEVPATORIIA",	"YEVPATORIYA",	"ZABOL",	"ZAHEDAN",	"ZANJAN",	"ZAPORIZHIA",	"ZAPORIZHIAN",	"ZAPORIZHZHIA",	"ZAPORIZHZHYA",	"ZAPORIZZJA",	"ZAPOROZHYE",	"ZARAND",	"+53",	"+850",	"+963",	"+98" ];
		var tran = ["TRANSIT", "IN-TRANSIT", "IN TRANSIT", "TRANSITO"];
		var mali_tran = ["TRANSIT TO MALI", "IN-TRANSIT TO MALI", "INTRANSIT TO MALI"];
		
		for(var j=0; j<cname.length; j++)
		{
			if (Desc.replace("\r\n"," ").includes(cname[j]) || customDesc.replace("\r\n"," ").includes(cname[j]) || marks.replace("\r\n"," ").includes(cname[j]))
			{
				window.prompt("Create SANCTION CHECK FORM for Due Diligence Countries. '" + cname[j] + "'.");
			}
		}
		for(var j=0; j<cpname.length; j++)
		{
			if (Desc.replace("\r\n"," ").includes(cpname[j]) || customDesc.replace("\r\n"," ").includes(cpname[j]) || marks.replace("\r\n"," ").includes(cpname[j]))
			{
				window.prompt("Prohibited Country , Location, Keyword found. '" + cpname[j] + "'.");
			}
		}
		for(var k=0; k<tran.length; k++)
		{
			if (Desc.replace("\r\n"," ").includes(tran[k]) || customDesc.replace("\r\n"," ").includes(tran[k]) || marks.replace("\r\n"," ").includes(tran[k]))
			{
				window.prompt("Found Transit keyword (M&D Tab), Kindly follow transit clause procedure: " + tran[k]);
			}
		}
		
		for(var k=0; k<mali_tran.length; k++)
		{
			if (Desc.replace("\r\n"," ").includes(mali_tran[k]) || customDesc.replace("\r\n"," ").includes(mali_tran[k]) || marks.replace("\r\n"," ").includes(mali_tran[k]))
			{
				window.prompt("Mali Transit Clause is not allowed: " + mali_tran[k]);
			}
		}
	}
	catch(err)
	{
		
	}
}


/*
var Database_Name = 'OpusDB';
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
		
	//tx.executeSql('Create Table if not exists Customer (BLNumber varchar(15), SHPRPrf varchar(3), SHPRCode integer, SHPRName varchar(100), FWDRPrf varchar(3), FWDRCode integer, FWDRName varchar(100),  CNEEPrf varchar(3), CNEECode integer, CNEEName varchar(100), CNPTPrf varchar(3), CNPTCode integer, CNPTName varchar(100), SCNo varchar(20), RFANo varchar(20), DEL varchar(6), POD varchar(6), POR varchar(6), POL, Trans_Mode, App_Date,BKG_Status, clr);',  []);
	//tx.executeSql('Create Table if not exists Email (BLNumber VARCHAR(100), SHPRCode integer, SHPRName varchar(100), SH, CN, NF );', [] );
	//tx.executeSql('CREATE TABLE IF NOT EXISTS Escalation(BLNumber VARCHAR(50), BOFC VARCHAR(10) );', [] );
						
});	
*/
		
function insertData() 
{
	try
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
	}
	catch(err)
	{
		
	}
}

function CNPJCHECK()
{
	try
	{
		var pod_cd = $("[name='pod_cd']").val();
		var del_cd = $("[name='del_cd']").val();
		var dg_cmdt_desc = $("[name='dg_cmdt_desc']").val();
	
		if(pod_cd.substr(0,2) == "BR" || del_cd.substr(0,2) == "BR")
		{
			if(!dg_cmdt_desc.includes("CNPJ"))
			{
				alert("Please Insert CNPJ No. in M&D description");
			}
		}
	}
	catch(err)
	{
		
	}
	
	try
	{
		var POD = document.getElementsByName("pod_cd")[0].value;
		var DEL = document.getElementsByName("del_cd")[0].value;
		
		var POD_Start = POD.substr(0, 2);
		var DEL_Start = DEL.substr(0, 2);
		
		if(POD_Start == "IN" || DEL_Start == "IN")
		{
			alert("Importer - IEC#(IEC Code); GSTIN#(GSTINCODE); Email#(Email_id); is mandatory on BL image.");
		}
	}
	catch(err)
	{
		
	}
}

function DGCheck()
{
	try
	{
		if (document.getElementsByName("dg_cmdt_desc")[0] != null) 
		{
			Description = document.getElementsByName("dg_cmdt_desc")[0].value;
		}
		
		var DGWords = ["AIR CONDITIONER","AIRCONDITIONER","AUTOMOBILE","BATTERIES","BATTERY","CHASSIS NO","CHASSIS NUMBER","COTTON","EXPLOSIVE","FIRE CRACKER","FIRE WORK","FIRECRACKERS","FIREWORKS","FISH MEAL"," IMCO ","IMO CLASS","LITHIUM","PING-PONG","POWER BANK","POWERBANK","RECHARGEABLE","REFRIGERATOR","SCOOTER","TABLE TENNIS","UNNO","USED AUTO PARTS","USED CAR","USED VEHICLE","VEHICLE","AUTOMOBILE PARTS ","PARTS OF AUTOMOBILE","AUTOMOBILE SPARE PARTS","SPARE PARTS OF AUTOMOBILE","AUTO PARTS","PARTS OF AUTO","AUTO SPARE PARTS","SPARE PARTS OF AUTO","TRUCK","TRUCK PARTS","PARTS OF TRUCK","USED CAR","USED CAR PARTS","PARTS OF USED CAR","USED VEHICLE PARTS","PARTS OF USED VEHICLE","USED TRUCK","USED TRUCK PARTS","PARTS OF USED TRUCK","VEHICLE","VEHICLE PARTS","PARTS OF VEHICLE","VIVO","VIVO Y20" ];
		
		for (var i = 0; i < DGWords.length - 1; i++) 
		{                                  
			if (Description.includes(DGWords[i]))
			{
				if(window.confirm("DG Word found in Description. \r\nPlease follow DG Keyword Procedure..."))
				{
					break;
				}                     
			}
		}
	}
	catch(err)
	{
		
	}
}

function MnDReefer()
{
	try
	{
		var reefer = document.getElementsByName("cntr_cmdt_desc")[0].value;
		
		if(reefer.includes("HR CONTAINER") || reefer.includes("RF CONTAINER") || reefer.includes("RH CONTAINER"))
		{
			alert("Please update Temperature as per SI");
		}
	}
	catch(err)
	{
		
	}
}

function SOC_CMDTPopup()
{
	try
	{
		setTimeout(function(){
		var s = document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr.GMDataRow.GMClassFocused > td.GMWrap0.GMAlignRight.GMFloat.GMCell.IBSheetFont0.HideCol0C8").innerHTML;
		if(s  !== "0.00")
		{
			alert("SOC Container found please check CMDT");
		}
	},5000);
	}
	catch(err)
	{
		
	}
	
}

function packageType_Desc()
{
	var packageType1 = "";
	var packageDesc1 = "";
	var packageType2 = "";
	var packageDesc2 = "";
	
	try
	{
		packageType1 = document.getElementsByName("pck_qty")[0].value.replace(",","") ; //Total Package No
		packageDesc1 = document.getElementsByName("pck_tp_cd")[0].value; // Total Package Desc 
		packageType2 = document.getElementsByName("pck_cmdt_desc")[0].value.match(/\d/g).join("");  //No of Package
		packageDesc2 = document.getElementsByName("pck_cmdt_desc")[0].value.replace(packageType2,"").replace(" IN TOTAL",""); //
	}
	catch(err)
	{
		
	}
	var flag = 0;
	
	var POD = document.getElementById("pod_cd").value.substring(0,2);
	var DEL = document.getElementById("del_cd").value.substr(0,2);
	
	if(POD == "NI" || DEL == "NI")
	{
		if(packageDesc1 == "PS" || packageDesc1 == "LT" || packageDesc2.includes("PIECE") || packageDesc2.includes("LOT"))
		{
			window.prompt("Package type PIECES and LOTS are prohibited by Nicaragua customs, please use package type 'BULKS' and if commodity is Tires, please use package type 'UNITS' and send email to customer!");
			document.getElementsByName("btn_t8Save")[0].setAttribute("disabled",true);
		}
		else
		{
			document.getElementsByName("btn_t8Save")[0].setAttribute("enabled",true);
		}
	}
	
	if(packageType1 != packageType2)
	{
		window.confirm("Total Package Type mismatch!");
		document.getElementsByName("btn_t8Save")[0].setAttribute("disabled",true);
	}
	else
	{
		document.getElementsByName("btn_t8Save")[0].setAttribute("enabled",true);
	}
	
	if(packageDesc1 == "1A" && (!packageDesc2.trim().includes("STEEL DRUM")))
	{
		flag = 1;
	}
	else if(packageDesc1 == "1B" && (!packageDesc2.trim().includes("ALUMINIUM DRUM")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "1D" && (!packageDesc2.trim().includes("PLYWOOD DRUM")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "1G" && (!packageDesc2.trim().includes("FIBRE DRUM")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "1W" && (!packageDesc2.trim().includes("WOODEN DRUM")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "2C" && (!packageDesc2.trim().includes("WOODEN BARREL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "3A" && (!packageDesc2.trim().includes("STEEL JERRICAN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "3H" && (!packageDesc2.trim().includes("PLASTIC JERRICAN")))
	{
		flag = 1;
	}
	else if(packageDesc1 == "43" && (!packageDesc2.trim().includes("SUPER BULK BAG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "4A" && (!packageDesc2.trim().includes("STEEL BOX")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "4B" && (!packageDesc2.trim().includes("ALUMINIUM BOX")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "4C" && (!packageDesc2.trim().includes("NATURAL WOOD BOX")))
	{
		flag = 1;
	}
	else if(packageDesc1 == "4D" && (!packageDesc2.trim().includes("PLYWOOD BOX")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "4F" && (!packageDesc2.trim().includes("RECONSTITUTED WOOD BOX")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "4G" && (!packageDesc2.trim().includes("FIBREBOARD BOX")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "4H" && (!packageDesc2.trim().includes("PLASTIC BOX")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "5H" && (!packageDesc2.trim().includes("WOVEN PLASTIC BAG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "5L" && (!packageDesc2.trim().includes("TEXTILE BAG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "5M" && (!packageDesc2.trim().includes("PAPER BAG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "6H" && (!packageDesc2.trim().includes("PLASTIC RECEPTACLE COMPOSITE PACKAGING")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "6P" && (!packageDesc2.trim().includes("GLASS RECEPTACLE COMPOSITE PACKAGING")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "AB" && (!packageDesc2.trim().includes("FIBRE RECEPTACLE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "AC" && (!packageDesc2.trim().includes("PAPER RECEPTACLE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "AD" && (!packageDesc2.trim().includes("WOODEN RECEPTACLE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "AE" && (!packageDesc2.trim().includes("AEROSOL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "AF" && (!packageDesc2.trim().includes("PAPER PALLET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "AG" && (!packageDesc2.trim().includes("SHRINKWRAPPED PALLET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "AM" && (!packageDesc2.trim().includes("AMPOULE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "AT" && (!packageDesc2.trim().includes("ATOMIZER")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BA" && (!packageDesc2.trim().includes("BARREL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BB" && (!packageDesc2.trim().includes("BOBBIN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BC" && (!packageDesc2.trim().includes("BOTTLERACK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BD" && (!packageDesc2.trim().includes("BOARD")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BE" && (!packageDesc2.trim().includes("BUNDLE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BF" && (!packageDesc2.trim().includes("BALLOON")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BG" && (!packageDesc2.trim().includes("BAG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BH" && (!packageDesc2.trim().includes("BUNCH")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BI" && (!packageDesc2.trim().includes("BIN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BJ" && (!packageDesc2.trim().includes("BUCKET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BK" && (!packageDesc2.trim().includes("BASKET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BL" && (!packageDesc2.trim().includes("BALE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BM" && (!packageDesc2.trim().includes("BASIN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BO" && (!packageDesc2.trim().includes("BOTTLE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BQ" && (!packageDesc2.trim().includes("PROTECTED CYLINDRICAL BOTTLE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BR" && (!packageDesc2.trim().includes("BAR")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BT" && (!packageDesc2.trim().includes("BOLT")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BU" && (!packageDesc2.trim().includes("BUTT")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "BX" && (!packageDesc2.trim().includes("BOX")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CA" && (!packageDesc2.trim().includes("RECTANGULAR CAN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CB" && (!packageDesc2.trim().includes("BEER CRATE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CC" && (!packageDesc2.trim().includes("CHURN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CD" && (!packageDesc2.trim().includes("CAN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CE" && (!packageDesc2.trim().includes("CREEL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CF" && (!packageDesc2.trim().includes("COFFER")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CG" && (!packageDesc2.trim().includes("CAGE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CH" && (!packageDesc2.trim().includes("CHEST")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CI" && (!packageDesc2.trim().includes("CANISTER")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CJ" && (!packageDesc2.trim().includes("COFFIN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CK" && (!packageDesc2.trim().includes("CASK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CL" && (!packageDesc2.trim().includes("COIL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CM" && (!packageDesc2.trim().includes("CARD")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CN" && (!packageDesc2.trim().includes("CONTAINER")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CO" && (!packageDesc2.trim().includes("NON-PROTECTED CARBOY")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CR" && (!packageDesc2.trim().includes("CRATE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CS" && (!packageDesc2.trim().includes("CASE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CT" && (!packageDesc2.trim().includes("CARTON")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CU" && (!packageDesc2.trim().includes("CUP")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CV" && (!packageDesc2.trim().includes("COVER")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CY" && (!packageDesc2.trim().includes("CYLINDER")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "CZ" && (!packageDesc2.trim().includes("CANVAS")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "DB" && (!packageDesc2.trim().includes("WOODEN CRATE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "DH" && (!packageDesc2.trim().includes("EUROBOX")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "DI" && (!packageDesc2.trim().includes("IRON DRUM")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "DR" && (!packageDesc2.trim().includes("DRUM")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "EC" && (!packageDesc2.trim().includes("PLASTIC BAG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "EE" && (!packageDesc2.trim().includes("WOODEN CASE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "EF" && (!packageDesc2.trim().includes("CARDBOARD PALLET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "EN" && (!packageDesc2.trim().includes("ENVELOPE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "FC" && (!packageDesc2.trim().includes("FRUIT CRATE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "FD" && (!packageDesc2.trim().includes("FRAMED CRATE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "FE" && (!packageDesc2.trim().includes("FLEXITANK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "FI" && (!packageDesc2.trim().includes("FIRKIN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "FL" && (!packageDesc2.trim().includes("FLASK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "FO" && (!packageDesc2.trim().includes("FOOTLOCKER")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "FP" && (!packageDesc2.trim().includes("FILMPACK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "FR" && (!packageDesc2.trim().includes("FRAME")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "GB" && (!packageDesc2.trim().includes("GAS BOTTLE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "GI" && (!packageDesc2.trim().includes("GIRDER")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "HG" && (!packageDesc2.trim().includes("HOGSHEAD")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "HR" && (!packageDesc2.trim().includes("HAMPER")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "IE" && (!packageDesc2.trim().includes("BLOCK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "IH" && (!packageDesc2.trim().includes("PLASTIC DRUM")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "IN" && (!packageDesc2.trim().includes("INGOT")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "JC" && (!packageDesc2.trim().includes("JERRICAN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "JG" && (!packageDesc2.trim().includes("JUG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "JR" && (!packageDesc2.trim().includes("JAR")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "JT" && (!packageDesc2.trim().includes("JUTEBAG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "KG" && (!packageDesc2.trim().includes("KEG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "LG" && (!packageDesc2.trim().includes("LOG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "LT" && (!packageDesc2.trim().includes("LOT")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "LV" && (!packageDesc2.trim().includes("LIFT VAN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "MB" && (!packageDesc2.trim().includes("MULTIPLE BAG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "MC" && (!packageDesc2.trim().includes("MILK CRATE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "MS" && (!packageDesc2.trim().includes("MULTIWALL SACK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "MT" && (!packageDesc2.trim().includes("MAT")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "MX" && (!packageDesc2.trim().includes("MATCH BOX")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "NE" && ((!packageDesc2.trim().includes("UNPACKED"))  || (!packageDesc2.trim().includes("UNPACKAGED"))))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "NS" && (!packageDesc2.trim().includes("NEST")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "NT" && (!packageDesc2.trim().includes("NET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PA" && (!packageDesc2.trim().includes("PACKET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PB" && (!packageDesc2.trim().includes("BOX PALLET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PC" && (!packageDesc2.trim().includes("PARCEL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PD" && (!packageDesc2.trim().includes("WOODEN PALLET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PH" && (!packageDesc2.trim().includes("PITCHER")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PI" && (!packageDesc2.trim().includes("PIPE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PJ" && (!packageDesc2.trim().includes("PUNNET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PK" && (!packageDesc2.trim().includes("PACKAGE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PL" && (!packageDesc2.trim().includes("PAIL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PN" && (!packageDesc2.trim().includes("PLANK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PO" && (!packageDesc2.trim().includes("POUCH")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PS" && (!packageDesc2.trim().includes("PIECE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PT" && (!packageDesc2.trim().includes("POT")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PU" && (!packageDesc2.trim().includes("TRAY")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "PX" && (!packageDesc2.trim().includes("PALLET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "RD" && (!packageDesc2.trim().includes("ROD")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "RG" && (!packageDesc2.trim().includes("RING")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "RK" && (!packageDesc2.trim().includes("RACK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "RL" && (!packageDesc2.trim().includes("REEL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "RO" && (!packageDesc2.trim().includes("ROLL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "RT" && (!packageDesc2.trim().includes("REDNET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SA" && (!packageDesc2.trim().includes("SACK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SB" && (!packageDesc2.trim().includes("SLAB")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SC" && (!packageDesc2.trim().includes("SHALLOW CRATE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SD" && (!packageDesc2.trim().includes("SPINDLE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SE" && (!packageDesc2.trim().includes("SEA-CHEST")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SH" && (!packageDesc2.trim().includes("SACHET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SI" && (!packageDesc2.trim().includes("SKID")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SK" && (!packageDesc2.trim().includes("SKELETON CASE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SL" && (!packageDesc2.trim().includes("SLIPSHEET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SM" && (!packageDesc2.trim().includes("SHEETMETAL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SO" && (!packageDesc2.trim().includes("SPOOL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SS" && (!packageDesc2.trim().includes("STEEL CASE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "ST" && (!packageDesc2.trim().includes("SHEET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SU" && (!packageDesc2.trim().includes("SUITCASE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SW" && (!packageDesc2.trim().includes("SHRINKWRAPPED")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "SX" && (!packageDesc2.trim().includes("SET")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "TB" && (!packageDesc2.trim().includes("TUB")))
	{
		flag = 1;
	}
	else if(packageDesc1 == "TC" && (!packageDesc2.trim().includes("TEA-CHEST")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "TD" && (!packageDesc2.trim().includes("COLLAPSIBLE TUBE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "TK" && (!packageDesc2.trim().includes("TANK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "TN" && (!packageDesc2.trim().includes("TIN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "TO" && (!packageDesc2.trim().includes("TUN")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "TR" && (!packageDesc2.trim().includes("TRUNK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "TS" && (!packageDesc2.trim().includes("TRUSS")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "TT" && (!packageDesc2.trim().includes("TOTE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "TU" && (!packageDesc2.trim().includes("TUBE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "UN" && (!packageDesc2.trim().includes("UNIT")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "VA" && (!packageDesc2.trim().includes("VAT")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "VI" && (!packageDesc2.trim().includes("VIAL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "VK" && (!packageDesc2.trim().includes("VANPACK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "VO" && (!packageDesc2.trim().includes("BULK")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "VP" && (!packageDesc2.trim().includes("VACUUMPACKED")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "WB" && (!packageDesc2.trim().includes("WICKERBOTTLE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "WR" && (!packageDesc2.trim().includes("WOODEN REEL")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "XD" && (!packageDesc2.trim().includes("PLASTICS FILM BAG")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "YB" && (!packageDesc2.trim().includes("STEEL CRATE")))
	{
		flag = 1;
	}
	else	if(packageDesc1 == "ZB" && (!packageDesc2.trim().includes("JUMBO BAG")))
	{
		flag = 1;
	}
	
	if(flag == 1)
	{
		window.prompt("Invalid Package Type Description!");
		document.getElementsByName("btn_t8Save")[0].setAttribute("disabled",true);
	}
	else
	{
		document.getElementsByName("btn_t8Save")[0].setAttribute("enabled",true);
	}
}

function ACID_popup()
{
	try
	{
		var del = document.getElementById("del_cd").value.substr(0,2);
		
		if(del == "EG")
		{
			alert("Please cross check \"ACID\" details with Import tab & update it before continuation.");
		}
	}
	catch(err)
	{
		
	}
}

function checkHBL()
{
	try
	{
		var fwdr = document.getElementsByName("f_cust_nm")[0].value;
		var cnee = document.getElementsByName("c_cust_nm")[0].value;
		var cnpt = document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].value;
		var shpr = document.getElementsByName("s_cust_nm")[0].value;
		
		var HBL_Arr = ["NANKAI TRANSPORT", "WAYFAIR LLC", "MITSUBISHI ELECTRIC", "TRANCY LOGISTICS", "CRSA GLOBAL", "GALLEON TECHNOLOGY", "OREGON", "BANDAI LOGIPAL", "MALLORY", "MITSUBISHI", "JAPAN TRANSCITY"];
		
		for(var i = 0; i < HBL_Arr.length; i++)
		{
			if(shpr.includes(HBL_Arr[i]) || fwdr.includes(HBL_Arr[i]) || cnee.includes(HBL_Arr[i]) || cnpt.includes(HBL_Arr[i]))
			{
				alert("Mostly this customer submits HBL. Please cross check SI and filer details carefully. " + HBL_Arr[i]);
				break;
			}
		}
	}
	catch(err)
	{
		
	}
}

function check_VIPCust()
{
	try
	{
		var VIP_Arr = ["HONDA", "NISSAN", "PANALPINA", "SONY", "TOYOTA", "CARREFOUR", "H&M", "BANDAI", "NIPPON", "PHILIPS", "BROTHER", "UNIQLO", "SAMSUNG", "H & M", "NINTENDO", "EPSON", "KUEHNE & NAGEL"];
		
		var shpr = document.getElementsByName("s_cust_nm")[0].value;
		var fwdr = document.getElementsByName("f_cust_nm")[0].value;
		var cnee = document.getElementsByName("c_cust_nm")[0].value;
		var cnpt = document.getElementsByName("bkg_ctrl_pty_cust_nm")[0].value;
		
		for(var i = 0; i < VIP_Arr.length; i++)
		{
			if(shpr.includes(VIP_Arr[i]) || fwdr.includes(VIP_Arr[i]) || cnee.includes(VIP_Arr[i]) || cnpt.includes(VIP_Arr[i]))
			{
				alert("VIP customer provide special customer comment. " + VIP_Arr[i]);
				break;
			}
		}
		
		//NINTENDO manual si comment
		if(cnpt.includes("NINTENDO"))
		{
			alert("Nintendo customer check manual SI");
		}
		
		//Check Split Request Popup
		if(shpr == "SMP FOUR SEASONS DE MEXICO, S. DE R.L. DE C.V." || fwdr == "SMP FOUR SEASONS DE MEXICO, S. DE R.L. DE C.V." || cnee == "SMP FOUR SEASONS DE MEXICO, S. DE R.L. DE C.V." || cnpt == "SMP FOUR SEASONS DE MEXICO, S. DE R.L. DE C.V.")
		{
			alert("Please check Split request");
		}
	}
	catch(err)
	{
		
	}
}

function check_StowageCargo()
{
	try
	{
		var clr = document.getElementsByName("btn_t1Stowage")[0].style['color'];
		if(clr == "blue")
		{
			alert("Special cargo - Stowage");
		}
	}
	catch(err)
	{
		
	}
}

function check_WEQBooking()
{
	setTimeout(function(){
	var s = document.getElementsByName("xter_bkg_rqst_cd")[0].value;
	if(s  == "WEQ")
	{
		alert("WEQ combine not allowed also check for direct shipment instruction");
	}
},1000);
}

/* Combined in CheckFiler
function FROB_Shipment()
{
	try
	{
		var frob = document.getElementsByName("frob_cd")[0].value;
		var usfiler = document.getElementsByName("usa_cstms_file_cd_text")[0].value;
		var cafiler = document.getElementsByName("cnd_cstms_file_cd_text")[0].value;
		
		if(frob != "" && (usfiler == "" || cafiler == ""))
		{
			alert("Please update filer for FROB Shipment");
			document.getElementById("btn_t1Save").setAttribute("disabled",true);
		}
		else
		{
			document.getElementById("btn_t1Save").disabled = false;
		}
	}
	catch(err)
	{
		
	}
}*/

function BlinkCustomer_Popup()
{
	try
	{
		var shCntry = document.getElementsByName("s_cust_cnt_cd")[0].value;
		var shSeq = document.getElementsByName("s_cust_seq")[0].value;
		var shName = document.getElementsByName("s_cust_nm")[0].value;
		
		var fwCntry = document.getElementsByName("f_cust_cnt_cd")[0].value;
		var fwSeq = document.getElementsByName("f_cust_seq")[0].value;
		var fwName = document.getElementsByName("f_cust_nm")[0].value;
		
		var shCode = shCntry + shSeq;
		var fwCode = fwCntry + fwSeq;
		
		var flag = 0;
		if(shCode == "CN132128" || shCode == "CN100150" || shCode == "CN174106" || shCode == "CN163251" || shCode == "CN154517" || shCode == "CN151128" || shCode == "CN205388" || shCode == "CN119875" || shCode == "CN204491" || shCode == "CN241710" || shCode == "CN589684" || shCode == "CN215262" || shCode == "CN614034" || shCode == "CN301112" || shCode == "CN107264" || shCode == "CN313517" || shCode == "CN532905" || shCode == "CN108835" || shCode == "CN508989" || shCode == "CN166196" || shCode == "CN346677" || shCode == "CN121505" || shCode == "CN509038")
		{
			flag = 1;
		}
		else if(fwCode == "CN132128" || fwCode == "CN100150" || fwCode == "CN174106" || fwCode == "CN163251" || fwCode == "CN154517" || fwCode == "CN151128" || fwCode == "CN205388" || fwCode == "CN119875" || fwCode == "CN204491" || fwCode == "CN241710" || fwCode == "CN589684" || fwCode == "CN215262" || fwCode == "CN614034" || fwCode == "CN301112" || fwCode == "CN107264" || fwCode == "CN313517" || fwCode == "CN532905" || fwCode == "CN108835" || fwCode == "CN508989" || fwCode == "CN166196" || fwCode == "CN346677" || fwCode == "CN121505" || fwCode == "CN509038")
		{
			flag = 1;
		}
		else if(shName.includes("SHINING OCEAN") || shName.includes("AWOT GLOBAL") || shName.includes("HYDE") || shName.includes("MINGKUN"))
		{
			flag = 1;
		}
		else if(fwName.includes("SHINING OCEAN") || fwName.includes("AWOT GLOBAL") || fwName.includes("HYDE") || fwName.includes("MINGKUN"))
		{
			flag = 1;
		}
		
		
		if(flag == 1)
		{
			alert("Blink customer found!!!");	
		}
	}
	catch(err)
	{
		
	}
}

function checkACIDNO()
{
	try
	{
		var country = document.getElementById("imp_cnt_cd").value;
		var acid = document.getElementsByClassName(" GMWrap0 GMAlignCenter GMText GMCell IBSheetFont1 HideCol1C3")[0].innerHTML;
		var importer = document.getElementsByClassName(" GMWrap0 GMAlignCenter GMText GMCell IBSheetFont1 HideCol1C3")[1].innerHTML;
		
		if(country == "EG")
		{
			if(!(acid.startsWith(importer)))
			{
				alert("Importer ID mismatched with ACID number please recheck");
			}
		}
	}
	catch(err)
	{
		
	}
}

function CheckFiler_Honduras()
{
	try
	{
		var POD = document.getElementsByName("bkg_pod_cd")[0].value.substr(0, 2);
		var DEL = document.getElementsByName("bkg_del_cd")[0].value.substr(0, 2);
		var FROB = document.getElementsByName("frob_cd")[0].value;
		
		if(FROB != "" && (POD == "HN" || DEL == "HN"))
		{
			alert("Please check filer for Honduras shipment");
		}
	}
	catch(err)
	{
		
	}
}

function bkgIKEASplitDisable()
{
	 try 
	 {
        const getValue = (name) => document.getElementsByName(name)[0]?.value || "";
        const getCheckboxChecked = (name) => document.getElementsByName(name)[0]?.checked || false;
        const setSplitButtonState = (enabled) => 
		{
            const btn = document.getElementsByName("btn_t1Split")[0];
            if (btn) 
			{
                if (enabled) 
				{
                    btn.removeAttribute("disabled");
                } 
				else 
				{
                    btn.setAttribute("disabled", "true");
                }
            }
        };

        const shipper = getValue("s_cust_nm");
        const forwarder = getValue("f_cust_nm");
        const consignee = getValue("c_cust_nm");
        const controlParty = getValue("bkg_ctrl_pty_cust_nm");
        const autoEDI = getCheckboxChecked("edi_hld_flg");

        const isIKEAInvolved = [shipper, forwarder, consignee, controlParty].some(name =>
            name.toUpperCase().includes("IKEA")
        );

        if (isIKEAInvolved) 
		{
            setSplitButtonState(autoEDI);
        } 
		else 
		{
            setSplitButtonState(true); // Always enabled when IKEA is not involved
        }
    } 
	catch (err) 
	{
        console.error("Error in bkgIKEASplitDisable:", err);
    }
}

function SplitPartialProhibitedBLRegulation()
{
	try
	{
		const pod = document.getElementById("bkg_pod_cd")?.value?.substring(0, 2);
        const del = document.getElementById("bkg_del_cd")?.value?.substring(0, 2);

        const prohibited = [
            "BJ", "CI", "GH", "GR", "GT",
            "JO", "KE", "LB", "MZ", "NG",
            "SN", "SV", "TG", "TW", "TZ"
        ];

        if (prohibited.includes(pod) || prohibited.includes(del)) 
		{
            alert("Split/Partial container split is prohibited.");
            return true;
        }
	}
	catch(err){ }
}