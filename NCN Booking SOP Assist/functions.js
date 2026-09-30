
/*function bkgCustRemarkToolTip()
{
	var POD = document.getElementsByName('bkg_pod_cd')[0].value;
	var DEL = document.getElementsByName('bkg_del_cd')[0].value;
	var BOffice = document.getElementsByName('bkg_ofc_cd')[0].value;
	
	if((BOffice == "SZPBB") && (POD == "TTPOS" || DEL == "TTPOS"))
	{
		document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div.opus_design_inquiry.sm > table > tbody > tr > td:nth-child(2) > textarea').style.background = "#FFCC99";
		document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div.opus_design_inquiry.sm > table > tbody > tr > td:nth-child(2) > textarea').title = "Restrict Booking accept on freight prepaid only \r\n"
		+ "Remark: Freight Prepaid only ";
	}
}*/

/*function bkgInternalRemarkToolTip()
{
	var POD = document.getElementsByName('bkg_pod_cd')[0].value;
	var DEL = document.getElementsByName('bkg_del_cd')[0].value;
	var BOffice = document.getElementsByName('bkg_ofc_cd')[0].value;
	
	if(BOffice == "SZPBB")
	{
		if(POD == "TTPOS" || DEL == "TTPOS")
		{
			document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div.opus_design_inquiry.sm > table > tbody > tr > td:nth-child(6) > textarea').style.background = "#FFCC99";
			document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div.opus_design_inquiry.sm > table > tbody > tr > td:nth-child(6) > textarea').title = "Restrict Booking accept on freight prepaid only \r\n"
			+ "Remark: Freight Prepaid only ";
		}
		else 
		{ 	//Only SZPBB
			document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div.opus_design_inquiry.sm > table > tbody > tr > td:nth-child(6) > textarea').style.background = "#FFCC99";
			document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div.opus_design_inquiry.sm > table > tbody > tr > td:nth-child(6) > textarea').title = "Check auto-rating and other possible remarks. ";
		}
	}
}*/

/*function bkgTPSZToolTip()
{
	var BOffice = document.getElementsByName('bkg_ofc_cd')[0].value;
	
	if(BOffice == "SZPBB")
	{
		document.querySelector('#btn_t1TPSZ').style.background = "#FFCC99";
		document.querySelector('#btn_t1TPSZ').title = "Update EQ Sub and remark Reefer As Dry in Cust & Vndr Remarks ";
	}
}*/

/*function bkgSCACToolTip()
{
	var POD = document.getElementsByName('bkg_pod_cd')[0].value.substr(0,2);
	var DEL = document.getElementsByName('bkg_del_cd')[0].value.substr(0,2);
	var BOffice = document.getElementsByName('bkg_ofc_cd')[0].value;
	
	if(BOffice == "SZPBB")
	{
		if(POD == "US" || POD == "CA" || DEL == "US" || DEL == "CA")
		{
			document.querySelector('#scac_cd').style.background = "#FFCC99";
			document.querySelector('#scac_cd').title = "Always check if auto-populated SCAC code is correct. ";
		}
		else
		{
			document.querySelector('#scac_cd').title = "";
		}
	}
}*/

/*function bkgRefNoToolTip()
{
	var BOffice = document.getElementsByName('bkg_ofc_cd')[0].value;
	
	if(BOffice == "SZPBB")
	{
		document.querySelector('#btn_t1ReferenceNo').style.background = "#FFCC99";
		document.querySelector('#btn_t1ReferenceNo').title = "- Not about input \r\n"
		+ "- Pls use 'Copy to Memo' function in 'Reference No.' tab to shown all the given Reference no. to Cust Remark column ";
	}
}*/

/*function bkgReeferToolTip()
{
	var BOffice = document.getElementsByName('bkg_ofc_cd')[0].value;
	
	if(BOffice == "SZPBB")
	{
		document.querySelector('#btn_t1Reefer').style.background = "#FFCC99";
		document.querySelector('#btn_t1Reefer').title = "Check all the reefer details and remarks before saving. Always Tick 'Request' button. \r\n"
		+ "(e.g. Temp +4C / PTI / Vent: Open 70% / Humidity: 65% / Pick up on 04 Jun 2200) \r\n"
		+ "(e.g. Temp +4C / PTI / Vent: Open 68 CMH / Pick up on 04 Jun 2200) \r\n"
		+ "(e.g. Temp -10C / PTI / Vent: Closed / Pick up on 01 Jun 1130) \r\n"
		+ "(e.g. Temp +4C / PTI / Vent: Open 68 CMH / Humidity: 65% / Pick up on 04 Jun 2200) ";
	}
}*/

/*function chrgServiceScopeToolTip()
{
	var BLPrf = document.getElementsByName('frm_t10sheet1_bkg_no')[0].value.substr(0,3);
	var BOffice = "";
	
	if(BLPrf != null)
	{
		if(BLPrf == "SZP")
		{
			BOffice = "SZPBB";
		}
	}
	if(BOffice == "SZPBB")
	{
		document.getElementsByName('svc_scp_cd')[0].style.backgroundColor = "#FFCC99";
		document.querySelector('body > form:nth-child(6) > div.wrap_result.coupled_btn_normal2 > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(10)').title = "AFLA Trade : \r\n"
		+ "CSE    - AFLA \r\n"
		+ "EFW   - AFLA \r\n"
		+ "LEW   - AFLA \r\n"
		+ "LWE   - AFLA \r\n"
		+ "WFW - AFLA \r\n"
		+ "\r\n"
		+ "AO Trade : \r\n"
		+ "AUS   - AO \r\n"
		+ "IAA    - AO \r\n"
		+ "IWW  - AO \r\n"
		+ "NZS   - AO \r\n"
		+ "POS   - AO \r\n"
		+ "RSW  - AO \r\n"
		+ "\r\n"
		+ "EU Trade : \r\n"
		+ "AEE    - EU \r\n"
		+ "AEW  - EU \r\n"
		+ "AMW - EU \r\n"
		+ "\r\n"
		+ "TP Trade : \r\n"
		+ "AHE   - TP \r\n"
		+ "TPE    - TP";
	}
	else
	{
		document.querySelector('body > form:nth-child(6) > div.wrap_result.coupled_btn_normal2 > div:nth-child(1) > table > tbody > tr:nth-child(3) > td:nth-child(10)').title = "";
	}
	
}*/

function bkgDueDiligencePopup()
{
	try
	{
		var POD = document.getElementsByName('bkg_pod_cd')[0].value.substr(0,2);
		var DEL = document.getElementsByName('bkg_del_cd')[0].value.substr(0,2);
		
		var flag = 0;
		var SHCode = document.getElementsByName('s_cust_cnt_cd')[0].value;
		var CNCode = document.getElementsByName('c_cust_cnt_cd')[0].value;
		var CNPTCode = document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].value;
		var ct = ['MM','IQ','LB','YE','RU','UA','BA','RS','BY','CD','LY','SO','SD','SS','ZW','CF','EG','TN','BI','ML','VE','NI','TR', 'AE', 'JO'];
		
		
		if(POD != null && DEL != null)
		{
			for(i=0; i<ct.length; i++)
			{
				if(POD == ct[i] || DEL == ct[i] || SHCode == ct[i] || CNCode == ct[i] || CNPTCode == ct[i])
				{
					flag = 1;
					break;
				}
			}
		}
		
		if(flag == 1)
		{
			alert("Due Diligence Country. Update the screenshot in AppSheet");
		}
	}
	catch(err)
	{
		
	}
}

function bkgProhibitedPopup()
{
	try
	{
		var POD = document.getElementsByName('bkg_pod_cd')[0].value.substr(0,2);
		var DEL = document.getElementsByName('bkg_del_cd')[0].value.substr(0,2);
		
		var flag = 0;
		var SHCode = document.getElementsByName('s_cust_cnt_cd')[0].value;
		var CNCode = document.getElementsByName('c_cust_cnt_cd')[0].value;
		var CNPTCode = document.getElementsByName('bkg_ctrl_pty_cust_cnt_cd')[0].value;
		var ct = ['IR', 'CU', 'KR', 'KP'];
		
		
		if(POD != null && DEL != null)
		{
			for(i=0; i<ct.length; i++)
			{
				if(POD == ct[i] || DEL == ct[i] || SHCode == ct[i] || CNCode == ct[i] || CNPTCode == ct[i])
				{
					flag = 1;
					break;
				}
			}
		}
		
		if(flag == 1)
		{
			alert("Prohibited Country found in POD / DEL.");
		}
	}
	catch(err)
	{
		
	}
}

function intDueDeligence()
{
	try
	{
		var intRemark = document.getElementsByName('inter_rmk')[0].value;
		var flag = 0;
		if (intRemark.includes("MYANMAR") || intRemark.includes("IRAQ") || intRemark.includes("LEBANON") || intRemark.includes("YEMEN") || intRemark.includes("RUSSIA") || intRemark.includes("UKRAINE") || intRemark.includes("BOSNIA AND HERZEGOVINA") || intRemark.includes("SERBIA") || intRemark.includes("BELARUS") || intRemark.includes("DEMOCRATIC REPUBLIC OF CONGO") || intRemark.includes("LIBYA") || intRemark.includes("SOMALIA") || intRemark.includes("SUDAN") || intRemark.includes("SOUTH SUDAN") || intRemark.includes("ZIMBABWE") || intRemark.includes("CENTRAL AFRICA") || intRemark.includes("EGYPT") || intRemark.includes("TUNISIA") || intRemark.includes("BURUNDI") || intRemark.includes("MALI") || intRemark.includes("VENEZUELA") || intRemark.includes("NICARAGUA") || intRemark.includes("TURKEY") || intRemark.includes("UNITED ARAB EMIRATES") || intRemark.includes("JORDAN") || intRemark.includes("ARAB") || intRemark.includes("KOSOVO") )
		{
			alert("Due Diligence Country found in Int Remark.");
		}
	}	
	catch(err)
	{
		
	}
}

function custDueDeligence()
{
	try
	{
		var custRemark = document.getElementsByName('xter_rmk')[0].value;
		var flag = 0;
		if (custRemark.includes("MYANMAR") || custRemark.includes("IRAQ") || custRemark.includes("LEBANON") || custRemark.includes("YEMEN") || custRemark.includes("RUSSIA") || custRemark.includes("UKRAINE") || custRemark.includes("BOSNIA AND HERZEGOVINA") || custRemark.includes("SERBIA") || custRemark.includes("BELARUS") || custRemark.includes("DEMOCRATIC REPUBLIC OF CONGO") || custRemark.includes("LIBYA") || custRemark.includes("SOMALIA") || custRemark.includes("SUDAN") || custRemark.includes("SOUTH SUDAN") || custRemark.includes("ZIMBABWE") || custRemark.includes("CENTRAL AFRICA") || custRemark.includes("EGYPT") || custRemark.includes("TUNISIA") || custRemark.includes("BURUNDI") || custRemark.includes("MALI") || custRemark.includes("VENEZUELA") || custRemark.includes("NICARAGUA") || custRemark.includes("TURKEY") || custRemark.includes("UNITED ARAB EMIRATES") || custRemark.includes("JORDAN") || custRemark.includes("ARAB") || custRemark.includes("KOSOVO") )
		{
			alert("Due Diligence Country found in Cust Remark.");
		}
	}
	catch(err)
	{
		
	}
}

function intProhibited()
{
	try
	{
		var intRemark = document.getElementsByName('inter_rmk')[0].value;
		var flag = 0;
		if (intRemark.includes("KOREA") || intRemark.includes("SYRIA") || intRemark.includes("IRAN") || intRemark.includes("CRIMEA") || intRemark.includes("CUBA") || intRemark.includes("BANDAR ABBAS") || intRemark.includes("PYONGYANG") || intRemark.includes("BUSHEHR") || intRemark.includes("KHARG ISLAND") || intRemark.includes("KHARK ISLAND") || intRemark.includes("KHORRAMSHAHR") || intRemark.includes("KISH ISLAND") || intRemark.includes("KERMAN") || intRemark.includes("TEHRAN") || intRemark.includes("DAMASCUS") || intRemark.includes("LATTAKIA") || intRemark.includes("ALEPPO") || intRemark.includes("SIMFEROPOL") || intRemark.includes("HAVANA"))
		{
			alert("Prohibited Country found in Int Remark.");
		}
	}
	catch(err)
	{
		
	}
}

function custProhibited()
{
	try
	{
		var custRemark = document.getElementsByName('xter_rmk')[0].value;
		var flag = 0;
		if (custRemark.includes("KOREA") || custRemark.includes("SYRIA") || custRemark.includes("IRAN") || custRemark.includes("CRIMEA") || custRemark.includes("CUBA") || custRemark.includes("BANDAR ABBAS") || custRemark.includes("PYONGYANG") || custRemark.includes("BUSHEHR") || custRemark.includes("KHARG ISLAND") || custRemark.includes("KHARK ISLAND") || custRemark.includes("KHORRAMSHAHR") || custRemark.includes("KISH ISLAND") || custRemark.includes("KERMAN") || custRemark.includes("TEHRAN") || custRemark.includes("DAMASCUS") || custRemark.includes("LATTAKIA") || custRemark.includes("ALEPPO") || custRemark.includes("SIMFEROPOL") || custRemark.includes("HAVANA"))
		{
			alert("Prohibited Country found in Cust Remark.");
		}
	}
	catch(err)
	{
		
	}
}

function dueCustPop()
{
	try
	{
		var ct = ['MM','IQ','LB','YE','RU','UA','BA','RS','BY','CD','LY','SO','SD','SS','ZW','CF','EG','TN','BI','ML','VE','NI','TR', 'AE', 'JO'];
		var flag = 0;
		
		if(true)
		{
			var SHCode = document.getElementsByName('sh_cust_cnt_cd')[0].value;
			var CNCode = document.getElementsByName('cn_cust_cnt_cd')[0].value;
			var NTCode = document.getElementsByName('nf_cust_cnt_cd')[0].value;
			var ANTCode = document.getElementsByName('an_cust_cnt_cd')[0].value;
			
			var SHPRName = document.getElementsByName('sh_cust_nm')[0].value;
			var SHPRAdd = document.getElementsByName('sh_cust_addr')[0].value;
			var CNEEName = document.getElementsByName('cn_cust_nm')[0].value;
			var CNEEAdd = document.getElementsByName('cn_cust_addr')[0].value;
			var NTFYName = document.getElementsByName('nf_cust_nm')[0].value;
			var NTFYAdd = document.getElementsByName('nf_cust_addr')[0].value;
			var ANTFYName = document.getElementsByName('an_cust_nm')[0].value;
			
			if (document.getElementsByName("sh_cust_nm")[0] != null) 
			{
				var SHName = SHPRName.match(/\b(\w+)\b/g);
			}
			if(document.getElementsByName('sh_cust_addr')[0] != null)
			{
				var SHAdd = SHPRAdd.match(/\b(\w+)\b/g);
			}
			if(document.getElementsByName('cn_cust_nm')[0] != null)
			{
				var CNName = CNEEName.match(/\b(\w+)\b/g);
			}
			if(document.getElementsByName('cn_cust_addr')[0] != null)
			{
				var CNAdd = CNEEAdd.match(/\b(\w+)\b/g);
			}
			if(document.getElementsByName('nf_cust_nm')[0] != null)
			{
				var NTName = NTFYName.match(/\b(\w+)\b/g);
			}
			if(document.getElementsByName('nf_cust_addr')[0] != null)
			{
				var NTAdd = NTFYAdd.match(/\b(\w+)\b/g);
			}
			if(document.getElementsByName('an_cust_nm')[0] != null)
			{
				var ANTName = ANTFYName.match(/\b(\w+)\b/g);
			}
			
			if(SHCode != null && CNCode != null && NTCode != null && ANTCode != null)
			{
				for(i=0; i<ct.length; i++)
				{
					if(SHCode == ct[i] || CNCode == ct[i] || NTCode == ct[i] || ANTCode == ct[i])
					{
						flag = 1;
						break;
					}
				}
			}
			
			if(SHName != null)
			{
				if(flag == 0)
				{
					for (var i = 0; i < SHName.length; i++) 
					{
						if (SHName[i] == "MYANMAR" || SHName[i] == "IRAQ" || SHName[i] == "LEBANON" || SHName[i] == "YEMEN" || SHName[i] == "RUSSIA" || SHName[i] == "UKRAINE" || SHName[i] == "BOSNIA AND HERZEGOVINA" || SHName[i] == "SERBIA" || SHName[i] == "BELARUS" || SHName[i] == "DEMOCRATIC REPUBLIC OF CONGO" || SHName[i] == "LIBYA" || SHName[i] == "SOMALIA" || SHName[i] == "SUDAN" || SHName[i] == "SOUTH SUDAN" || SHName[i] == "ZIMBABWE" || SHName[i] == "CENTRAL AFRICA" || SHName[i] == "EGYPT" || SHName[i] == "TUNISIA" || SHName[i] == "BURUNDI" || SHName[i] == "MALI" || SHName[i] == "VENEZUELA" || SHName[i] == "NICARAGUA" || SHName[i] == "TURKEY" || SHName[i] == "UNITED ARAB EMIRATES" || SHName[i] == "JORDAN" || SHName[i] == "ARAB" || SHName[i] == "KOSOVO" ) 
						{ //PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
							flag = 1;//alert("Please follow DG Keyword Procedure...");
							break;
						}
					}
				}
			}
			if(SHAdd != null)
			{
				if(flag == 0)
				{
					for (var i = 0; i < SHAdd.length; i++) 
					{
						if (SHAdd[i] == "MYANMAR" || SHAdd[i] == "IRAQ" || SHAdd[i] == "LEBANON" || SHAdd[i] == "YEMEN" || SHAdd[i] == "RUSSIA" || SHAdd[i] == "UKRAINE" || SHAdd[i] == "BOSNIA AND HERZEGOVINA" || SHAdd[i] == "SERBIA" || SHAdd[i] == "BELARUS" || SHAdd[i] == "DEMOCRATIC REPUBLIC OF CONGO" || SHAdd[i] == "LIBYA" || SHAdd[i] == "SOMALIA" || SHAdd[i] == "SUDAN" || SHAdd[i] == "SOUTH SUDAN" || SHAdd[i] == "ZIMBABWE" || SHAdd[i] == "CENTRAL AFRICA" || SHAdd[i] == "EGYPT" || SHAdd[i] == "TUNISIA" || SHAdd[i] == "BURUNDI" || SHAdd[i] == "MALI" || SHAdd[i] == "VENEZUELA" || SHAdd[i] == "NICARAGUA" || SHAdd[i] == "TURKEY" || SHAdd[i] == "UNITED ARAB EMIRATES" || SHAdd[i] == "JORDAN" || SHAdd[i] == "ARAB" || SHAdd[i] == "KOSOVO" ) 
						{//PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
							flag = 1;//alert("Please follow DG Keyword Procedure...");
							break;
						}
					}
				}
			}
			if(CNName != null)
			{
				if(flag == 0)
				{
					for (var i = 0; i < CNName.length; i++) 
					{
						if (CNName[i] == "MYANMAR" || CNName[i] == "IRAQ" || CNName[i] == "LEBANON" || CNName[i] == "YEMEN" || CNName[i] == "RUSSIA" || CNName[i] == "UKRAINE" || CNName[i] == "BOSNIA AND HERZEGOVINA" || CNName[i] == "SERBIA" || CNName[i] == "BELARUS" || CNName[i] == "DEMOCRATIC REPUBLIC OF CONGO" || CNName[i] == "LIBYA" || CNName[i] == "SOMALIA" || CNName[i] == "SUDAN" || CNName[i] == "SOUTH SUDAN" || CNName[i] == "ZIMBABWE" || CNName[i] == "CENTRAL AFRICA" || CNName[i] == "EGYPT" || CNName[i] == "TUNISIA" || CNName[i] == "BURUNDI" || CNName[i] == "MALI" || CNName[i] == "VENEZUELA" || CNName[i] == "NICARAGUA" || CNName[i] == "TURKEY" || CNName[i] == "UNITED ARAB EMIRATES" || CNName[i] == "JORDAN" || CNName[i] == "ARAB" || CNName[i] == "KOSOVO" ) 
						{//PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
							flag = 1;//alert("Please follow DG Keyword Procedure...");
							break;
						}
					}
				}
			}
			if(CNAdd != null)
			{
				if(flag == 0)
				{
					for (var i = 0; i < CNAdd.length; i++) 
					{
						if (CNAdd[i] == "MYANMAR" || CNAdd[i] == "IRAQ" || CNAdd[i] == "LEBANON" || CNAdd[i] == "YEMEN" || CNAdd[i] == "RUSSIA" || CNAdd[i] == "UKRAINE" || CNAdd[i] == "BOSNIA AND HERZEGOVINA" || CNAdd[i] == "SERBIA" || CNAdd[i] == "BELARUS" || CNAdd[i] == "DEMOCRATIC REPUBLIC OF CONGO" || CNAdd[i] == "LIBYA" || CNAdd[i] == "SOMALIA" || CNAdd[i] == "SUDAN" || CNAdd[i] == "SOUTH SUDAN" || CNAdd[i] == "ZIMBABWE" || CNAdd[i] == "CENTRAL AFRICA" || CNAdd[i] == "EGYPT" || CNAdd[i] == "TUNISIA" || CNAdd[i] == "BURUNDI" || CNAdd[i] == "MALI" || CNAdd[i] == "VENEZUELA" || CNAdd[i] == "NICARAGUA" || CNAdd[i] == "TURKEY" || CNAdd[i] == "UNITED ARAB EMIRATES" || CNAdd[i] == "JORDAN" || CNAdd[i] == "ARAB" || CNAdd[i] == "KOSOVO" ) 
						{//PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
							flag = 1;//alert("Please follow DG Keyword Procedure...");
							break;
						}
					}
				}
			}
			if(NTName != null)
			{
				if(flag == 0)
				{
					for (var i = 0; i < NTName.length; i++) 
					{
						if (NTName[i] == "MYANMAR" || NTName[i] == "IRAQ" || NTName[i] == "LEBANON" || NTName[i] == "YEMEN" || NTName[i] == "RUSSIA" || NTName[i] == "UKRAINE" || NTName[i] == "BOSNIA AND HERZEGOVINA" || NTName[i] == "SERBIA" || NTName[i] == "BELARUS" || NTName[i] == "DEMOCRATIC REPUBLIC OF CONGO" || NTName[i] == "LIBYA" || NTName[i] == "SOMALIA" || NTName[i] == "SUDAN" || NTName[i] == "SOUTH SUDAN" || NTName[i] == "ZIMBABWE" || NTName[i] == "CENTRAL AFRICA" || NTName[i] == "EGYPT" || NTName[i] == "TUNISIA" || NTName[i] == "BURUNDI" || NTName[i] == "MALI" || NTName[i] == "VENEZUELA" || NTName[i] == "NICARAGUA" || NTName[i] == "TURKEY" || NTName[i] == "UNITED ARAB EMIRATES" || NTName[i] == "JORDAN" || NTName[i] == "ARAB" || NTName[i] == "KOSOVO" ) 
						{//PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
							flag = 1;//alert("Please follow DG Keyword Procedure...");
							break;
						}
					}
				}
			}
			if(NTAdd != null)
			{
				if(flag == 0)
				{
					for (var i = 0; i < NTAdd.length; i++) 
					{
						if (NTAdd[i] == "MYANMAR" || NTAdd[i] == "IRAQ" || NTAdd[i] == "LEBANON" || NTAdd[i] == "YEMEN"  || NTAdd[i] == "RUSSIA" || NTAdd[i] == "UKRAINE" || NTAdd[i] == "BOSNIA AND HERZEGOVINA" || NTAdd[i] == "SERBIA" || NTAdd[i] == "BELARUS" || NTAdd[i] == "DEMOCRATIC REPUBLIC OF CONGO" || NTAdd[i] == "LIBYA" || NTAdd[i] == "SOMALIA" || NTAdd[i] == "SUDAN" || NTAdd[i] == "SOUTH SUDAN" || NTAdd[i] == "ZIMBABWE" || NTAdd[i] == "CENTRAL AFRICA" || NTAdd[i] == "EGYPT" || NTAdd[i] == "TUNISIA" || NTAdd[i] == "BURUNDI" || NTAdd[i] == "MALI" || NTAdd[i] == "VENEZUELA" || NTAdd[i] == "NICARAGUA" || NTAdd[i] == "TURKEY" || NTAdd[i] == "UNITED ARAB EMIRATES" || NTAdd[i] == "JORDAN" || NTAdd[i] == "ARAB" || NTAdd[i] == "KOSOVO" ) 
						{//PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
							flag = 1;//alert("Please follow DG Keyword Procedure...");
							break;
						}
					}
				}
			}
			if(ANTName != null)
			{
				if(flag == 0)
				{
					for (var i = 0; i < ANTName.length; i++) 
					{
						if (ANTName[i] == "MYANMAR" || ANTName[i] == "IRAQ" || ANTName[i] == "LEBANON" || ANTName[i] == "YEMEN"  || ANTName[i] == "RUSSIA" || ANTName[i] == "UKRAINE" || ANTName[i] == "BOSNIA AND HERZEGOVINA" || ANTName[i] == "SERBIA" || ANTName[i] == "BELARUS" || ANTName[i] == "DEMOCRATIC REPUBLIC OF CONGO" || ANTName[i] == "LIBYA" || ANTName[i] == "SOMALIA" || ANTName[i] == "SUDAN" || ANTName[i] == "SOUTH SUDAN" || ANTName[i] == "ZIMBABWE" || ANTName[i] == "CENTRAL AFRICA" || ANTName[i] == "EGYPT" || ANTName[i] == "TUNISIA" || ANTName[i] == "BURUNDI" || ANTName[i] == "MALI" || ANTName[i] == "VENEZUELA" || ANTName[i] == "NICARAGUA" || ANTName[i] == "TURKEY" || ANTName[i] == "UNITED ARAB EMIRATES" || ANTName[i] == "JORDAN" || ANTName[i] == "ARAB" || ANTName[i] == "KOSOVO" ) 
						{//PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
							flag = 1;//alert("Please follow DG Keyword Procedure...");
							break;
						}
					}
				}
			}
			if(flag == 1)
			{
				alert("Due Diligence Country. Update the screenshot in AppSheet");
			}
		}
	}
	catch(err)
	{
		
	}
}


function holdCustPop()
{
	try
	{
		var SHPRName = document.getElementsByName('sh_cust_nm')[0].value;
		var SHPRAdd = document.getElementsByName('sh_cust_addr')[0].value;
		var CNEEName = document.getElementsByName('cn_cust_nm')[0].value;
		var CNEEAdd = document.getElementsByName('cn_cust_addr')[0].value;
		var NTFYName = document.getElementsByName('nf_cust_nm')[0].value;
		var NTFYAdd = document.getElementsByName('nf_cust_addr')[0].value;
		var ANTFYName = document.getElementsByName('an_cust_nm')[0].value;
		
		var flag = 0;
			
		if (document.getElementsByName("sh_cust_nm")[0] != null) 
		{
			var SHName = SHPRName.match(/\b(\w+)\b/g);
		}
		if(document.getElementsByName('sh_cust_addr')[0] != null)
		{
			var SHAdd = SHPRAdd.match(/\b(\w+)\b/g);
		}
		if(document.getElementsByName('cn_cust_nm')[0] != null)
		{
			var CNName = CNEEName.match(/\b(\w+)\b/g);
		}
		if(document.getElementsByName('cn_cust_addr')[0] != null)
		{
			var CNAdd = CNEEAdd.match(/\b(\w+)\b/g);
		}
		if(document.getElementsByName('nf_cust_nm')[0] != null)
		{
			var NTName = NTFYName.match(/\b(\w+)\b/g);
		}
		if(document.getElementsByName('nf_cust_addr')[0] != null)
		{
			var NTAdd = NTFYAdd.match(/\b(\w+)\b/g);
		}
		if(document.getElementsByName('an_cust_nm')[0] != null)
		{
			var ANTName = ANTFYName.match(/\b(\w+)\b/g);
		}
		
		
		if(SHName != null)
		{
			if(flag == 0)
			{
				for (var i = 0; i < SHName.length; i++) 
				{
					if (SHName[i] == "KOREA" || SHName[i] == "SYRIA" || SHName[i] == "IRAN" || SHName[i] == "CRIMEA" || SHName[i] == "CUBA" || SHName[i] == "BANDAR ABBAS" || SHName[i] == "PYONGYANG" || SHName[i] == "BUSHEHR" || SHName[i] == "KHARG ISLAND" || SHName[i] == "KHARK ISLAND" || SHName[i] == "KHORRAMSHAHR" || SHName[i] == "KISH ISLAND" || SHName[i] == "KERMAN" || SHName[i] == "TEHRAN" || SHName[i] == "DAMASCUS" || SHName[i] == "LATTAKIA" || SHName[i] == "ALEPPO" || SHName[i] == "SIMFEROPOL" || SHName[i] == "HAVANA") 
					{ //PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
						flag = 1;//alert("Please follow DG Keyword Procedure...");
						break;
					}
				}
			}
		}
		if(SHAdd != null)
		{
			if(flag == 0)
			{
				for (var i = 0; i < SHAdd.length; i++) 
				{
					if (SHAdd[i] == "KOREA" || SHAdd[i] == "SYRIA" || SHAdd[i] == "IRAN" || SHAdd[i] == "CRIMEA" || SHAdd[i] == "CUBA" || SHAdd[i] == "BANDAR ABBAS" || SHAdd[i] == "PYONGYANG" || SHAdd[i] == "BUSHEHR" || SHAdd[i] == "KHARG ISLAND" || SHAdd[i] == "KHARK ISLAND" || SHAdd[i] == "KHORRAMSHAHR" || SHAdd[i] == "KISH ISLAND" || SHAdd[i] == "KERMAN" || SHAdd[i] == "TEHRAN" || SHAdd[i] == "DAMASCUS" || SHAdd[i] == "LATTAKIA" || SHAdd[i] == "ALEPPO" || SHAdd[i] == "SIMFEROPOL" || SHAdd[i] == "HAVANA") 
					{ //PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
						flag = 1;//alert("Please follow DG Keyword Procedure...");
						break;
					}
				}
			}
		}
		if(CNName != null)
		{
			if(flag == 0)
			{
				for (var i = 0; i < CNName.length; i++) 
				{
					if (CNName[i] == "KOREA" || CNName[i] == "SYRIA" || CNName[i] == "IRAN" || CNName[i] == "CRIMEA" || CNName[i] == "CUBA" || CNName[i] == "BANDAR ABBAS" || CNName[i] == "PYONGYANG" || CNName[i] == "BUSHEHR" || CNName[i] == "KHARG ISLAND" || CNName[i] == "KHARK ISLAND" || CNName[i] == "KHORRAMSHAHR" || CNName[i] == "KISH ISLAND" || CNName[i] == "KERMAN" || CNName[i] == "TEHRAN" || CNName[i] == "DAMASCUS" || CNName[i] == "LATTAKIA" || CNName[i] == "ALEPPO" || CNName[i] == "SIMFEROPOL" || CNName[i] == "HAVANA") 
					{ //PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
						flag = 1;//alert("Please follow DG Keyword Procedure...");
						break;
					}
				}
			}
		}
		if(CNAdd != null)
		{
			if(flag == 0)
			{
				for (var i = 0; i < CNAdd.length; i++) 
				{
					if (CNAdd[i] == "KOREA" || CNAdd[i] == "SYRIA" || CNAdd[i] == "IRAN" || CNAdd[i] == "CRIMEA" || CNAdd[i] == "CUBA" || CNAdd[i] == "BANDAR ABBAS" || CNAdd[i] == "PYONGYANG" || CNAdd[i] == "BUSHEHR" || CNAdd[i] == "KHARG ISLAND" || CNAdd[i] == "KHARK ISLAND" || CNAdd[i] == "KHORRAMSHAHR" || CNAdd[i] == "KISH ISLAND" || CNAdd[i] == "KERMAN" || CNAdd[i] == "TEHRAN" || CNAdd[i] == "DAMASCUS" || CNAdd[i] == "LATTAKIA" || CNAdd[i] == "ALEPPO" || CNAdd[i] == "SIMFEROPOL" || CNAdd[i] == "HAVANA") 
					{ //PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
						flag = 1;//alert("Please follow DG Keyword Procedure...");
						break;
					}
				}
			}
		}
		if(NTName != null)
		{
			if(flag == 0)
			{
				for (var i = 0; i < NTName.length; i++) 
				{
					if (NTName[i] == "KOREA" || NTName[i] == "SYRIA" || NTName[i] == "IRAN" || NTName[i] == "CRIMEA" || NTName[i] == "CUBA" || NTName[i] == "BANDAR ABBAS" || NTName[i] == "PYONGYANG" || NTName[i] == "BUSHEHR" || NTName[i] == "KHARG ISLAND" || NTName[i] == "KHARK ISLAND" || NTName[i] == "KHORRAMSHAHR" || NTName[i] == "KISH ISLAND" || NTName[i] == "KERMAN" || NTName[i] == "TEHRAN" || NTName[i] == "DAMASCUS" || NTName[i] == "LATTAKIA" || NTName[i] == "ALEPPO" || NTName[i] == "SIMFEROPOL" || NTName[i] == "HAVANA") 
					{ //PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
						flag = 1;//alert("Please follow DG Keyword Procedure...");
						break;
					}
				}
			}
		}
		if(NTAdd != null)
		{
			if(flag == 0)
			{
				for (var i = 0; i < NTAdd.length; i++) 
				{
					if (NTAdd[i] == "KOREA" || NTAdd[i] == "SYRIA" || NTAdd[i] == "IRAN" || NTAdd[i] == "CRIMEA" || NTAdd[i] == "CUBA" || NTAdd[i] == "BANDAR ABBAS" || NTAdd[i] == "PYONGYANG" || NTAdd[i] == "BUSHEHR" || NTAdd[i] == "KHARG ISLAND" || NTAdd[i] == "KHARK ISLAND" || NTAdd[i] == "KHORRAMSHAHR" || NTAdd[i] == "KISH ISLAND" || NTAdd[i] == "KERMAN" || NTAdd[i] == "TEHRAN" || NTAdd[i] == "DAMASCUS" || NTAdd[i] == "LATTAKIA" || NTAdd[i] == "ALEPPO" || NTAdd[i] == "SIMFEROPOL" || NTAdd[i] == "HAVANA") 
					{ //PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
						flag = 1;//alert("Please follow DG Keyword Procedure...");
						break;
					}
				}
			}
		}
		if(ANTName != null)
		{
			if(flag == 0)
			{
				for (var i = 0; i < ANTName.length; i++) 
				{
					if (ANTName[i] == "KOREA" || ANTName[i] == "SYRIA" || ANTName[i] == "IRAN" || ANTName[i] == "CRIMEA" || ANTName[i] == "CUBA" || ANTName[i] == "BANDAR ABBAS" || ANTName[i] == "PYONGYANG" || ANTName[i] == "BUSHEHR" || ANTName[i] == "KHARG ISLAND" || ANTName[i] == "KHARK ISLAND" || ANTName[i] == "KHORRAMSHAHR" || ANTName[i] == "KISH ISLAND" || ANTName[i] == "KERMAN" || ANTName[i] == "TEHRAN" || ANTName[i] == "DAMASCUS" || ANTName[i] == "LATTAKIA" || ANTName[i] == "ALEPPO" || ANTName[i] == "SIMFEROPOL" || ANTName[i] == "HAVANA") 
					{ //PROHIBITED NORTH KOREA,SYRIA,IRAN,CRIMEA,CUBA
						flag = 1;//alert("Please follow DG Keyword Procedure...");
						break;
					}
				}
			}
		}
		
		if(flag == 1)
		{
			window.alert("Keep the BL hold for NORTH KOREA/SYRIA/IRAN/CRIMEA/CUBA");
		}
	}
	catch(err)
	{
		
	}
}



function LongTerm_DLC()
{
	try
	{
		var shpr = document.getElementsByName("s_cust_nm")[0].value.toUpperCase();
		var fwdr = document.getElementsByName("f_cust_nm")[0].value.toUpperCase();
		var cust_remark = document.getElementsByName("xter_rmk")[0].value.toUpperCase();
		var int_remark = document.getElementsByName("inter_rmk")[0].value.toUpperCase();
		var BL = document.getElementsByName("bkg_no")[0].value.toUpperCase();
		var CMDT = document.getElementsByName("cmdt_desc")[0].value.toUpperCase();
		
		if(BL.substr(0,2) == "DL")
		{
			if(shpr != "" && fwdr != "" && cust_remark != "" && int_remark != "" && CMDT != "")
			{
				if(shpr.includes("KIP ENTERPRISES"))
				{
					if( fwdr.includes("COSCO SHIPPING LOGISTICS & SUPPLY CHAIN MANAGEMENT (DALIAN)"))
					{
						if( cust_remark.replace("\r\n"," ").includes("TALC POWDER") || int_remark.replace("\r\n"," ").includes("TALC POWDER") || CMDT.replace("\r\n"," ").includes("TALC POWDER"))
						{
							//2022-1-1             2022-12-31
							alert("DLC - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("AM WAX"))
				{
					if( fwdr.includes("QINGDAO JET MARINE LOGISTICS CO.,LTD.DALIAN BRANCH") )
					{
						if(cust_remark.replace("\r\n"," ").includes("PARAFFIN WAX") || int_remark.replace("\r\n"," ").includes("PARAFFIN WAX") || CMDT.replace("\r\n"," ").includes("PARAFFIN WAX"))
						{
							//2022-1-1             2022-12-31
							alert("DLC - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("BESTWAX CO") )
				{
					if(fwdr.includes("QINGDAO JET MARINE LOGISTICS CO.,LTD.DALIAN BRANCH") )
					{
						if(cust_remark.replace("\r\n"," ").includes("PARAFFIN WAX") || int_remark.replace("\r\n"," ").includes("PARAFFIN WAX") || CMDT.replace("\r\n"," ").includes("PARAFFIN WAX"))
						{
							//2022-1-1             2022-12-31
							alert("DLC - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("ZHEJIANG NHU IMPORT"))
				{
					if(fwdr.includes("HENCY TRANSPORTATION(SHANGHAI)LTD-DALIAN BRANCH") )
					{
						if(cust_remark.replace("\r\n"," ").includes("L-ASCORBATE-2-PHOSPHATE ;VITAMIN C 35% MONOPHOSPHATE") || int_remark.replace("\r\n"," ").includes("L-ASCORBATE-2-PHOSPHATE ;VITAMIN C 35% MONOPHOSPHATE") || CMDT.replace("\r\n"," ").includes("L-ASCORBATE-2-PHOSPHATE ;VITAMIN C 35% MONOPHOSPHATE"))
						{
							//2022-1-1             2022-12-31
							alert("DLC - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("HULUNBEIER NORTHEAST FUFENG BIOTECHNOLOGIES CO., LTD"))
				{
					if( fwdr.includes("DMU LOGISTICS LIAONING CO.,LTD.") )
					{
						if(cust_remark.replace("\r\n"," ").includes("DEXTROSE MONOHYDRATE") || int_remark.replace("\r\n"," ").includes("DEXTROSE MONOHYDRATE") || CMDT.replace("\r\n"," ").includes("DEXTROSE MONOHYDRATE"))
						{
							//2022-1-1             2022-12-31
							alert("DLC - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if(cust_remark.replace("\r\n"," ").includes("MONOSODIUM GLUTAMATE") || int_remark.replace("\r\n"," ").includes("MONOSODIUM GLUTAMATE") || CMDT.replace("\r\n"," ").includes("MONOSODIUM GLUTAMATE"))
						{
							//2022-1-1             2022-12-31
							alert("DLC - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("QIQIHAR LONGJIANG FUFENG BIOTECHNOLOGIES CO.,LTD") )
				{
					if(fwdr.includes("DMU LOGISTICS LIAONING CO.,LTD.") )
					{
						if(cust_remark.replace("\r\n"," ").includes("L-LYSINE MONOHYDROCHLORIDE") || int_remark.replace("\r\n"," ").includes("L-LYSINE MONOHYDROCHLORIDE") || CMDT.replace("\r\n"," ").includes("L-LYSINE MONOHYDROCHLORIDE"))
						{
							//2022-1-1             2022-12-31
							alert("DLC - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if(cust_remark.replace("\r\n"," ").includes("L-LYSINE SULPHATE") || int_remark.replace("\r\n"," ").includes("L-LYSINE SULPHATE") || CMDT.replace("\r\n"," ").includes("L-LYSINE SULPHATE"))
						{
							//2022-1-1             2022-12-31
							alert("DLC - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if(cust_remark.replace("\r\n"," ").includes("DEXTROSE MONOHYDRATE") || int_remark.replace("\r\n"," ").includes("DEXTROSE MONOHYDRATE") || CMDT.replace("\r\n"," ").includes("DEXTROSE MONOHYDRATE"))
						{
							//2022-1-1             2022-12-31
							alert("DLC - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
			}
		}
	}
	catch(err)
	{
		
	}
}


function LongTerm_TAO()
{
	try
	{
		var shpr = document.getElementsByName("s_cust_nm")[0].value.toUpperCase();
		var fwdr = document.getElementsByName("f_cust_nm")[0].value.toUpperCase();
		var cust_remark = document.getElementsByName("xter_rmk")[0].value.toUpperCase();
		var int_remark = document.getElementsByName("inter_rmk")[0].value.toUpperCase();
		var BL = document.getElementsByName("bkg_no")[0].value.toUpperCase();
		var CMDT = document.getElementsByName("cmdt_desc")[0].value.toUpperCase();
		
		if(BL.substr(0,2) == "TA")
		{
			if(shpr != "" && fwdr != "" && cust_remark != "" && int_remark != "" && CMDT != "")
			{
				if(shpr.includes("WEIFANG ENSIGN INDUSTRY CO.,LTD."))
				{
					if( fwdr.includes("QINGDAO SUN STAR INTERNATIONAL LOGISTICS CO.,LTD"))
					{
						if( cust_remark.replace("\r\n"," ").includes("CITRIC ACID MONOHYDRATE") || int_remark.replace("\r\n"," ").includes("CITRIC ACID MONOHYDRATE") || CMDT.replace("\r\n"," ").includes("CITRIC ACID MONOHYDRATE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if( cust_remark.replace("\r\n"," ").includes("CITRIC ACID ANHYDROUS") || int_remark.replace("\r\n"," ").includes("CITRIC ACID ANHYDROUS") || CMDT.replace("\r\n"," ").includes("CITRIC ACID ANHYDROUS"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("WEIFANG TIANRUI CHEMICAL CO.,LTD"))
				{
					if( fwdr.includes("YUSEN LOGISTICS (CHINA) CO., LTD. QINGDAO BRANCH") )
					{
						if(cust_remark.replace("\r\n"," ").includes("CHLORINATED POLYETHYLENE") || int_remark.replace("\r\n"," ").includes("CHLORINATED POLYETHYLENE") || CMDT.replace("\r\n"," ").includes("CHLORINATED POLYETHYLENE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("SHANDONG KUNDA BIOTECHNOLOGY COMPANY LIMITED") )
				{
					if(fwdr.includes("QINGDAO KAOYOUNG INTERNATIONAL LOGISTICS CO LTD") )
					{
						if(cust_remark.replace("\r\n"," ").includes("SORBIC ACID") || int_remark.replace("\r\n"," ").includes("SORBIC ACID") || CMDT.replace("\r\n"," ").includes("SORBIC ACID"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if(cust_remark.replace("\r\n"," ").includes("NIACIN") || int_remark.replace("\r\n"," ").includes("NIACIN") || CMDT.replace("\r\n"," ").includes("NIACIN"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if(cust_remark.replace("\r\n"," ").includes("POTASSIUM SORBATE") || int_remark.replace("\r\n"," ").includes("POTASSIUM SORBATE") || CMDT.replace("\r\n"," ").includes("POTASSIUM SORBATE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if(cust_remark.replace("\r\n"," ").includes("NIACINAMIDE") || int_remark.replace("\r\n"," ").includes("NIACINAMIDE") || CMDT.replace("\r\n"," ").includes("NIACINAMIDE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("SICHUAN HUAFAMEI ENTERPRISE CO.,LTD."))
				{
					if(fwdr.includes("KWISE LOGISTICS (SHANDONG) CO.,LTD") )
					{
						if(cust_remark.replace("\r\n"," ").includes("PARACETAMOL DC90-9") || int_remark.replace("\r\n"," ").includes("PARACETAMOL DC90-9") || CMDT.replace("\r\n"," ").includes("PARACETAMOL DC90-9"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("WEIFANG SUNDOW CHEMICALS CO.,LTD"))
				{
					if( fwdr.includes("QINGDAO SUN STAR INTERNATIONAL LOGISTICS CO.,LTD") )
					{
						if(cust_remark.replace("\r\n"," ").includes("CHLORINATED POLYETHYLENE") || int_remark.replace("\r\n"," ").includes("CHLORINATED POLYETHYLENE") || CMDT.replace("\r\n"," ").includes("CHLORINATED POLYETHYLENE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("KEMIRA HONG KONG COMPANY LIMITED") )
				{
					if(fwdr.includes("QINGDAO OCEAN & GREAT ASIA LOGISTICS CO.,LTD.") )
					{
						if(cust_remark.replace("\r\n"," ").includes("AKD(ALKYL KETENE DIMER)") || int_remark.replace("\r\n"," ").includes("AKD(ALKYL KETENE DIMER)") || CMDT.replace("\r\n"," ").includes("AKD(ALKYL KETENE DIMER)"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("KEMIRA CHEMICALS(YANZHOU)CO.,LTD"))
				{
					if(fwdr.includes("QINGDAO OCEAN & GREAT ASIA LOGISTICS CO.,LTD."))
					{
						if(cust_remark.replace("\r\n"," ").includes("AKD(ALKYL KETENE DIMER)") || int_remark.replace("\r\n"," ").includes("AKD(ALKYL KETENE DIMER)") || CMDT.replace("\r\n"," ").includes("AKD(ALKYL KETENE DIMER)"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("RZBC(JUXIAN)CO.,LTD"))
				{
					if(fwdr.includes("QINGDAO WORLD GLORY LOGISTICS CO.,LTD"))
					{
						if(cust_remark.replace("\r\n"," ").includes("CITRIC ACID ANHYDROUS") || int_remark.replace("\r\n"," ").includes("CITRIC ACID ANHYDROUS") || CMDT.replace("\r\n"," ").includes("CITRIC ACID ANHYDROUS"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if(cust_remark.replace("\r\n"," ").includes("TRISODIUM CITRATE DIHYDRATE") || int_remark.replace("\r\n"," ").includes("TRISODIUM CITRATE DIHYDRATE") || CMDT.replace("\r\n"," ").includes("TRISODIUM CITRATE DIHYDRATE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if(cust_remark.replace("\r\n"," ").includes("CITRIC ACID MONOHYDRATE") || int_remark.replace("\r\n"," ").includes("CITRIC ACID MONOHYDRATE") || CMDT.replace("\r\n"," ").includes("CITRIC ACID MONOHYDRATE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("RZBC IMP. & EXP. CO.,LTD"))
				{
					if(fwdr.includes("QINGDAO WORLD GLORY LOGISTICS CO.,LTD"))
					{
						if(cust_remark.replace("\r\n"," ").includes("CITRIC ACID ANHYDROUS") || int_remark.replace("\r\n"," ").includes("CITRIC ACID ANHYDROUS") || CMDT.replace("\r\n"," ").includes("CITRIC ACID ANHYDROUS"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if(cust_remark.replace("\r\n"," ").includes("TRISODIUM CITRATE DIHYDRATE") || int_remark.replace("\r\n"," ").includes("TRISODIUM CITRATE DIHYDRATE") || CMDT.replace("\r\n"," ").includes("TRISODIUM CITRATE DIHYDRATE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
						if(cust_remark.replace("\r\n"," ").includes("CITRIC ACID MONOHYDRATE") || int_remark.replace("\r\n"," ").includes("CITRIC ACID MONOHYDRATE") || CMDT.replace("\r\n"," ").includes("CITRIC ACID MONOHYDRATE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
				else if(shpr.includes("SOLVAY FINE CHEMICAL ADDITIVES (QINGDAO) CO.,LTD"))
				{
					if(fwdr.includes("SINOTRANS CENTRAL CHINA CO.,LTD.CONTAINER SHIPPING BRANCH"))
					{
						if(cust_remark.replace("\r\n"," ").includes("SILICON DIOXIDE") || int_remark.replace("\r\n"," ").includes("SILICON DIOXIDE") || CMDT.replace("\r\n"," ").includes("SILICON DIOXIDE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
					if(fwdr.includes("QINGDAO OCEAN & GREAT ASIA LOGISTICS CO.,LTD."))
					{
						if(cust_remark.replace("\r\n"," ").includes("SILICON DIOXIDE") || int_remark.replace("\r\n"," ").includes("SILICON DIOXIDE") || CMDT.replace("\r\n"," ").includes("SILICON DIOXIDE"))
						{
							//2022-1-1             2022-12-31
							alert("TAO - still need to provide attachments and update remarks W: LONG TERM NON-DG CHEMICAL");
						}
					}
				}
			}
		}
	}
	catch(err)
	{
		
	}
}

function LongTerm_LYG()
{
	try
	{
		var shpr = document.getElementsByName("s_cust_nm")[0].value.toUpperCase();
		var fwdr = document.getElementsByName("f_cust_nm")[0].value.toUpperCase();
		var cust_remark = document.getElementsByName("xter_rmk")[0].value.toUpperCase();
		var int_remark = document.getElementsByName("inter_rmk")[0].value.toUpperCase();
		var BL = document.getElementsByName("bkg_no")[0].value.toUpperCase();
		var CMDT = document.getElementsByName("cmdt_desc")[0].value.toUpperCase();
		
		if(BL.substr(0,2) == "LY")
		{
			if(shpr != "" && fwdr != "" && cust_remark != "" && int_remark != "" && CMDT != "")
			{
				if(shpr.includes("LIANYUNGANG TONGYUAN BIOLOGY TECHNOLOGY CO.,LTD."))
				{
					if( cust_remark.replace("\r\n"," ").includes("SODIUM DIACETATE") || int_remark.replace("\r\n"," ").includes("SODIUM DIACETATE") || CMDT.replace("\r\n"," ").includes("SODIUM DIACETATE"))
					{
						//2022-1-1             2022-12-31
						alert("LYG - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
					}
					if( cust_remark.replace("\r\n"," ").includes("SODIUM ACETATE ANHYDROUS") || int_remark.replace("\r\n"," ").includes("SODIUM ACETATE ANHYDROUS") || CMDT.replace("\r\n"," ").includes("SODIUM ACETATE ANHYDROUS"))
					{
						//2022-1-1             2022-12-31
						alert("LYG - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
					}
				}
				else if(shpr.includes("ANHUI JUCHENG FINE CHEMICALS CO.,LTD."))
				{
					if(cust_remark.replace("\r\n"," ").includes("POLYACRYLAMIDE") || int_remark.replace("\r\n"," ").includes("POLYACRYLAMIDE") || CMDT.replace("\r\n"," ").includes("POLYACRYLAMIDE"))
					{
						//2022-1-1             2022-12-31
						alert("LYG - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
					}
				}
				else if(shpr.includes("UNITECHEM (SHANGHAI) CO.,LTD.") )
				{
					if(cust_remark.replace("\r\n"," ").includes("UV STABILIZER 944") || int_remark.replace("\r\n"," ").includes("UV STABILIZER 944") || CMDT.replace("\r\n"," ").includes("UV STABILIZER 944"))
					{
						//2022-1-1             2022-12-31
						alert("LYG - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
					}
				}
				else if(shpr.includes("JIANGSU KOLOD FOOD INGREDIETNS CO,,LTD."))
				{
					if(cust_remark.replace("\r\n"," ").includes("FERROUS SULFATE HEPTAHYDRATE TECHNICAL GRADE") || int_remark.replace("\r\n"," ").includes("FERROUS SULFATE HEPTAHYDRATE TECHNICAL GRADE") || CMDT.replace("\r\n"," ").includes("FERROUS SULFATE HEPTAHYDRATE TECHNICAL GRADE"))
					{
						//2022-1-1             2022-12-31
						alert("LYG - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
					}
				}
				else if(shpr.includes("SHANGHAI QICHENG INDUSTRIAL CO., LTD"))
				{
					if(cust_remark.replace("\r\n"," ").includes("SODIUM LAURYL ETHER SULPHATE 70%") || int_remark.replace("\r\n"," ").includes("SODIUM LAURYL ETHER SULPHATE 70%") || CMDT.replace("\r\n"," ").includes("SODIUM LAURYL ETHER SULPHATE 70%"))
					{
						//2022-1-1             2022-12-31
						alert("LYG - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
					}
				}
				else if(shpr.includes("LIANYUNGANG MUPRO IMP&EXP CO.,TD") )
				{
					if(cust_remark.replace("\r\n"," ").includes("TETRAPOTASSIUM PYROPHOSPHATE") || int_remark.replace("\r\n"," ").includes("TETRAPOTASSIUM PYROPHOSPHATE") || CMDT.replace("\r\n"," ").includes("TETRAPOTASSIUM PYROPHOSPHATE"))
					{
						//2022-1-1             2022-12-31
						alert("LYG - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
					}
				}
				else if(shpr.includes("WILMAR SURFACTANT MATERIAL(LIANYUNGANG) CO., LTD.") )
				{
					if(cust_remark.replace("\r\n"," ").includes("ALKYL KETENE DIMER") || int_remark.replace("\r\n"," ").includes("ALKYL KETENE DIMER") || CMDT.replace("\r\n"," ").includes("ALKYL KETENE DIMER"))
					{
						//2022-1-1             2022-12-31
						alert("LYG - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
					}
					if(cust_remark.replace("\r\n"," ").includes("LIQUID ALKYL KETENE DIMER") || int_remark.replace("\r\n"," ").includes("LIQUID ALKYL KETENE DIMER")|| CMDT.replace("\r\n"," ").includes("LIQUID ALKYL KETENE DIMER"))
					{
						//2022-1-1             2022-12-31
						alert("LYG - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
					}
				}
				else if(shpr.includes("HENAN HENGJU CHEMICAL CO., LTD") )
				{
					if(cust_remark.replace("\r\n"," ").includes("POLYACRYLAMIDE") || int_remark.replace("\r\n"," ").includes("POLYACRYLAMIDE") || CMDT.replace("\r\n"," ").includes("POLYACRYLAMIDE"))
					{
						//2022-1-1             2022-12-31
						alert("LYG - no attachments needed  and update remarks W: LONG TERM NON-DG CHEMICAL");
					}
				}
				
			}
		}
	}
	catch(err)
	{
		
	}
}

function possible_DG()
{
	try
	{
		var DG_Key = ["1655 TITANIUM DIOXIDE ANATASE TYPE",	"24DPE (HCI)",	"24DPE HCI",	"ACETOXY SILICONE SEALANT",	"ALKALINE BATTERIES NON-RECHARGEABLE",	"ALKALINE BATTERIES NON RECHARGEABLE",	"ALKALINE BATTERIES",	"ALKALINE BATTERY",	"ALKALINE MANGANESE BUTTON CELL",	"ALKALINE MANGANESE DRY BATTERY",	"ALKALINE MANGANESE",	"ALKALINE ZINC-MANGANESE DRY BATTERY",	"ANSMANN LI-ION BATTERY",	"ANSMANN NIMH BATTERY",	"AUTOMATIC FLOOR CLEANER",	"BAK LITHIUM-ION POLYMER CELL",	"BAK LITHIUM-ION POLYMER BATTERY",	"BATTERIES",	"BUTTON BATTERY",	"CAMERA",	"CAMERA PEN",	"CAR",	"CARBON",	"CARBON BATTERY",	"CARBON BLACK",	"CAT DEO-SD 15W40",	"CF-8879E ADHESIVE FOR TRANSFERING METALLIZED FILM",	"CHARCOAL",	"COMPATIBLE PRINTER CARTRIDGE",	"COMPUTER",	"CONDITIONER",	"CORDLESS PHONE",	"CORRECTION BRUSH",	"CORRECTION FLUID",	"CORRECTION PEN",	"CRM LOTION",	"CUPRAPULSE S 4 LEVELLER COMPOUND",	"CYLINDRICAL RECHARGEABLE BATTERY",	"CYSTEAMINE HCI",	"DEHUMIDIFER",	"DEHUMIDIFIER",	"DESMODUR 0928",	"DRY BATTERIES",	"DRY BATTERY",	"DUASYN ACID",	"ELECTRONIC CALCULATOR",	"ES 2044P",	"HJ28736 CREED SILVER MOUNTAIN",	"INK JET INK",	"INSECT KILLER",	"IPAD",	"IPHONE",	"L1154",	"AG13",	"AG10",	"LR1131",	"LEAD-ACID",	"LEAD ACID",	"LI-ION BATTER",	"LI-ION BATTERY",	"LI-ION RECHARGEABLE BATTERY CELL",	"LI-ION RECHARGEABLE BATTERY PACK",	"LITHIUM BATTERY",	"LITHIUM BUTTON CELL",	"LITHIUM CELL",	"LITHIUM ION BATTERY",	"LITHIUM ION BATTERY FOR SAMSUNG GALAXY NOTE 7",	"LITHIUM ION RECHARGEABLE BATTERY",	"LITHIUM MANGANESE DIOXIDE BUTTON BATTERIERS",	"LITHIUM METAL CELL",	"LITHIUM METAL BATTERY",	"LITHIUM POLYMER RECHARGEABLE BATTERY",	"LITHIUM-ION POLYMER RECHARGEABLE CELL",	"LITHIUM-ION RECHARGEABLE BATTERY",	"MAGNET COMPOUND PLASTIFORM 2202",	"MAGNETIZED COMMODITY",	"MANGANESE DIOXIDE LITHIUM BATTERY",	"MOBILE PHONE",	"MOTOR",	"MOTORCYCLE",	"MOTORBIKE",	"MP3",	"NAIL POLISH",	"NAIL POLISH REMOVER",	"NICKEL CADMIUM BATTERY",	"NICKEL CADMIUM RECHARGEABLE BATTERY",	"NICKEL CADMIUM SEALED CELL BATTERY",	"NICKEL METAL HYDRIDE BATTERY",	"NICKEL METAL HYDRIDE CELLS AND BATTERIES",	"NICKLE CADMIUM CELLS AND BATTERIES",	"NI-MH BATTERY",	"NI-ZN BATTERY",	"PAOC",	"PC + ABS CY6110",	"PERFECTO T 46",	"PERSONAL COMPUTER",	"PHILIPS ALKALINE BATTERY",	"PHOTO REX",	"PIKAKE JASMINE 92FRAGPIJA FRAGRANCE #276-797",	"POLYMER LI-ION BATTERY",	"POLYMER LI-ION CELL",	"POLYMER LITHIUM ION RECHARGEABLE BATTERIES",	"POPPET NAIL ART",	"PORTABLE DVD PLAYER",	"PORTABLE LI-ION RECHARGEABLE BATTERY PACK",	"PORTABLE MUSIC SYSTEM",	"RADIO",	"RECHARGEABLE",	"RECHARGEABLE LITHIUM-ION BATTERY",	"SAGITAR PROFESSIONAL ALKALINE BATTERIES",	"SAMSUNG GALAXY NOTE 7",	"SEALED LEAD ACID BATTERY",	"SHAVING FOAM",	"SHOE POLISH",	"SMART PHONE",	"SODIUM ALKYL ETHER SULPHATE",	"SOLVAPERM VIOLET RSB",	"TABLET COMPUTER",	"TABLET PC",	"TABLE TENNIS",	"TELEPHONE",	"TELEPHONE EQUIPMENT",	"TELEPHONE SET",	"USED CAR",	"USED VEHICLE",	"VALVE REGULATED LEAD-ACID RECHARGEABLE BATTERY",	"VEHICLE",	"VIBRATOR",	"WATCH",	"WIRELESS ACCESS DEVICE",	"WIRELESS PHONE",	"ZINC CHLORIDE BATTERY",	"ZINC CHLORIDE DRY BATTERY - SUM4",	"ZN MANGANESE DIOXIDE PRIMARY ALKALINE CELL",	"COMPRESSOR",	"AIR CONDITIONER",	"REFRIGERATOR",	"SPEAKER",	"HEADPHONE",	"BLUETOOTH",	"POWERBANK",	"POWER BANK",	"TRUCK",	"USED TRUCK",	"GUN",	"TOY GUN",	"RECHARGEABLE + (OBJECT)",	"REFRIGERATING MACHINE",	"REFRIGERATING EQUIPMENT",	"REFRIGERANT",	"FORKLIFT",	"CANDLE",	"ELECTRIC COOLER",	"INKJET MEDIA",	"POWER TOOLS",	"VACUUM CLEANER",	"TOYS",	"ELEMENT",	"PIGMENT",	"FREQUENCY INVERTER",	"HAND TOOLS",	"PERFUME",	"ELECTRIC SCOOTER",	"AIR RIFLE",	"CHLOROTHALONIL",	"ANTIOXIDANT RD",	"GLYPHOSATE POTASSIUM SALT",	"GLYPHOSATE IPA SALT 62%",	"GLYPHOSATE TECH 95%",	"SODIUM LAURYL ETHER SULPHATE 70%",	"SILICIC ACID COARSE",	"LIQUID WAX CARTRIDGE",	"N-(PHOSPHONOMETHYL) GLYCINE 95%",	"METHYL HYDROGEN SILICONE FLUID",	"ASCORBIC ACID",	"SOLUBIZIZED SULFUR BLACK",	"GRAPHITE ELECTRODE",	"DIFLUBENZURON",	"SULFUR DIOXIDE",	"NITRIC OXIDE",	"HYDROXYL RADICAL",	"HYDROGEN PEROXIDE",	"SIRANTOX",	"GAMMA DODECALACTONE",	"FURANONE",	"ETHYL DECADIENOATE",	"SULFURYL ACETATE",	"GLUFOSINATE-AMMONIUM",	"DIMETHYL PHENYLETHYL",	"METHYL ATRATATE",	"BIOQUIM METALAXIL",	"BALL PEN",	"CONJUGATED CREATINE",	"FERRITE MAGNET",	"FERTILIZER",	"HERBICIDE",	"VITAMINS",	"BETAINE HCL",	"TONER CARTRIDGE",	"WASHCOAT",	"SILICON WAFER",	"OXYGEN GENERATOR",	"LEAD ACID BATTERY",	"HYDRAULIC IRONWORKER",	"SPRAY LENS CLEANER KITS"];
		var cust_remark = document.getElementsByName("xter_rmk")[0].value.toUpperCase();
		var int_remark = document.getElementsByName("inter_rmk")[0].value.toUpperCase();
		var CMDT = document.getElementsByName("cmdt_desc")[0].value.toUpperCase();

		for(var j=0; j<DG_Key.length; j++)
		{
			if (cust_remark.replace("\r\n"," ").includes(DG_Key[j]) || int_remark.replace("\r\n"," ").includes(DG_Key[j]) || CMDT.replace("\r\n"," ").includes(DG_Key[j]))
			{
				window.prompt("Possible DG Keyword found. '" + DG_Key[j] + "'.");
			}
		}
	}
	catch(err)
	{
		
	}
}

/*function bkgDELToolTip()
{
	var POD = document.getElementsByName('bkg_pod_cd')[0].value;
	var DEL = document.getElementsByName('bkg_del_cd')[0].value;
	var BOffice = document.getElementsByName('bkg_ofc_cd')[0].value;
	
	if(BOffice == "SZPBB")
	{
		if(POD != null && DEL != null)
		{
			if(DEL == "THBKK") //POD == "THBKK" || //POD == "THBKK" && DEL == "THBKK"
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "Clarify with the booking party for the POD's Terminal in case missing. \r\n"
				+ "Please input \"Cust\" and \"Int\" Remarks as \"POD: Bangkok (SCT / PAT / UCT)\" \r\n"
				+ "e.g. POD: Bangkok (PAT) - if booking request for PAT (THBKK03) \r\n"
				+ "      POD: Bangkok (SCT) - if booking request for SCT (THBKK40) \r\n"
				+ "      POD: Bangkok (UCT) - if booking request for UCT (THBKK09)";
			}
			else if(POD == "THLKR" || DEL == "THLKR")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "TPV, TVH, AUS, FE5, EC5, TID1, TIP == LKR61 \r\n"
				+ "JTV3, JTV4, TPV2, JTV1                    == LKR31 \r\n"
				+ "TID2, TEI1, JTV2                               == LKR60 \r\n"
				+ "PS3, PN2, KVT";
			}
			else if(DEL == "JPSDJ") //POD == "JPSDJ" || //POD == "JPSDJ" && DEL == "JPSDJ" 
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "1. If booking request for DP \"Sendai\" & POD \"Sendai, Miyagi, Japan, Asia\"  \r\n"
				+ "2. If no related route found in [Product Catalog], as general rules, please remove the DP, and search again  \r\n"
				+ "3. If the DP or First T/S port is generated as Tokyo as per PRD, then no need to verify with customer for the correct DP        ";
			}
			else if(DEL == "PKKHI") //POD == "PKKHI" || //POD == "PKKHI" && DEL == "PKKHI"
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "Clarify with the booking party for the POD's Terminal in case missing.\r\n"
				+ "     1.1 Karachi (KICT) - PKKHI01 or \r\n"
				+ "     1.2 Karachi (PICT) / PKKHI02 / Karachi \r\n"
				+ "     1.3 Karachi (QICT) / PKKHI09 \r\n"
				+ "Pls input Cust and Int Remarks as POD: Karachi (KICT) OR Kacachi (PICT) \r\n"
				+ "For further SOP, please check the Special Request List";
			}
			else if(POD == "MYPKG" || DEL == "MYPKG")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "1. Clarify with the booking party for the POD's Terminal in case missing. \r\n"
				+ "[e.g. Port Klang (West) - MYPKG02 \r\n"
				+ "[e.g. Port Klang (North) - MYPKG01 / MYPKG03 \r\n"
				+ "Pls input \"Cust\", \"Vndr\" and \"int\" Remarks as \"POD: Port Klang (North) OR Port Klang (West)\" ";
			}
			else if(POD == "INICD" || DEL == "INICD")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "1. Clarify with the booking party for the POD's Terminal in case missing. \r\n"
				+ "If customer declared the PODel as Patparganj, Delhi, India, pls update DEL as INPPG  \r\n"
				+ "If customer declared the PODel as Tughlakabad, Delhi, India, pls update DEL as INTKD\r\n"
				+ "If customer did not response, pls override the PODEL as Tughlakabad, Delhi, India (INTKD) in the booking.";
			}
			else if(POD == "USORH" || DEL == "USORH")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "Due to port equalization issue, even you select the correct location code (USORH) for Worcester, MA, PODEL in booking will finally be generated as Boston, MA (USBOS).\r\n"
				+ "Pls input remark as \"Place of Delivery: Worcester, MA\" in both Cust and Int Remark Columns as for customer's and Documentation team's reference respectively.";
			}
			else if(POD == "USMKC" || DEL == "USMKC")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "Due to port equalization issue, even you select the correct location code (USMKC) for KANSAS CITY, MO, PODEL in booking will finally be generated as KANSAS CITY, KS (USKCK).\r\n"
				+ "Pls input remark as \"Place of Delivery: KANSAS CITY, MO\" in both Cust and Int Remark Columns as for customer's and Documentation team's reference respectively.";
			}
			else if(POD == "USCQX" || DEL == "USCQX")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "Pls verify with customer where is the zone to be deliverd in CLACKAMAS, OR \r\n"
				+ "2.1 If customer declare as Zone 1 \r\n"
				+ "    2.1.1 Pls input as USCQXZ1 \r\n"
				+ "    2.1.2 Pls remark as \"POD: (Zone 1) CLACKAMAS, OR\" in CUST and INT remark columns. \r\n"
				+ "\r\n"
				+ "2.2 if customer declare as Zone 2 \r\n"
				+ "   2.2.1 Pls input as USCQXZ2 \r\n"
				+ "   2.2.2 Pls remark as \"POD: (Zone 2) KROGER CLACKAMAS TRANSLOAD\" in CUST and INT remark column. \r\n"
				+ "\r\n"
				+ "1. Once given POD as KROGER CLACKAMAS TRANSLOAD \r\n"
				+ "2. Pls input the code as USCQXZ2";
			}
			else if(POD == "INTKD" || DEL == "INTKD")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "1.1  For General booking - please go ahead to create the booking as current SOP \r\n"
				+ "1.2  For DG booking - please reject the DG booking request and respond based on special request list ";
			}
			else if(POD == "RULED" || DEL == "RULED")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "1. Clarify with the booking party for the POD's Terminal in case missing. \r\n"
				+ "(e.g. 'RULED20' - St. Petersburg (FCT [First Container Terminal])) \r\n"
				+ "(e.g. 'RULED25' - St. Petersburg (PLP [PetroLesPort])) \r\n"
				+ "(e.g. 'RULED21' - St. Petersburg (NW [Nothern Wharf] / RMF [RusMarineForwarding]))   \r\n"
				+ "2. Upon the given vessel voyage, if the given DP is differ from the DP in PRD, please verify with customer. \r\n"
				+ "If there's an Alert sheet, send to EU trade";
			}
			else if(POD == "VNSGN" || DEL == "VNSGN")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "1. Clarify with the booking party for the POD/DEL's Terminal in case missing. \r\n"
				+ "2. Please select the appropriate route in system \r\n"
				+ "3. If the appropriate route cannot be found, plesae complete the booking in \"WAIT\" status and escalate to Onshore. \r\n"
				+ "4. Pls input \"Cust\" and \"int\" Remarks as \"POD/DEL FULL NAME -HO CHI MINH - CAT LAI, HO CHI MINH - VICT, HO CHI MINH - ICD TRANSIMEX, HO CHI MINH - ICD TANAMEXCO, HO CHI MINH - ICD PHUOC LONG 3, HO CHI MINH - ICD PHUOC LONG 1\"";
			}
			else if(POD == "USFWT" || DEL == "USFWT")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "1. Due to port equalization issue, even you select the correct location code (USFWT) for FORT WORTH, TX, PODEL in booking will finally be generated as DALLAS, TX (USDAL). \r\n"
				+ "2. Pls input remark as \"Place of Delivery: FORT WORTH, TX\" in both Cust and Int Remark Columns as for customer's and Documentation team's reference respectively.";
			}
			else if(POD == "MMRGN" || DEL == "MMRGN")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "1. Clarify with the booking party for the POD's Terminal in case missing. \r\n"
				+ "[e.g. Yangon (MIP) - MMRGN05 \r\n"
				+ "[e.g. Yangon (AWPT) - MMRGN01 and Yangon MITT (MMRGN03)        \r\n"
				+ "2. Please select the appropriate route in system - 1. TMM service only serve MIP (MMRGN05) 2. AWPT (MMRGN01) and MITT (MMRGN03), please select YGX service.        \r\n"
				+ "3. If the appropriate route cannot be found, plesae complete the booking in \"WAIT\" status and escalate to Onshore.        \r\n"
				+ "4. Pls input \"Cust\", \"Vndr\" and \"int\" Remarks as \"POD: Yangon (MIP) OR Yangon (AWPT) OR Yangon MITT (MMRGN03)\"         ";
			}
			else if(POD == "USBNV" || DEL == "USBNV")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "1. Due to port equalization issue, even you select the correct location code (USBNV) for BENSENVILLE, IL PODEL in booking will finally be generated as CHICAGO, IL (USCHI). \r\n"
				+ "2. Pls input remark as \"Place of Delivery: BENSENVILLE, IL\" in both Cust and Int Remark Columns as for customer's and Documentation team's reference respectively.";
			}
			else if(POD == "USCBF" || DEL == "USCBF")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "1. Due to port equalization issue, even you select the correct location code (USCBF) for COUNCIL BLUFFS, IA PODEL in booking will finally be generated as OMAHA, NE (USOMA). \r\n"
				+ "2. Pls input remark as \"Place of Delivery: COUNCIL BLUFFS, IA\" in both Cust and Int Remark Columns as for customer's and Documentation team's reference respectively.";
			}
			else if(POD == "RUVVO" || DEL == "RUVVO")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "Alert sheet send to AO trade";
			}
			else if(POD == "RUVYP" || DEL == "RUVYP")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "Alert sheet send to AO trade";
			}
			else if(POD == "MACAS" || DEL == "MACAS")
			{
				document.querySelector('#bkg_del_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_del_cd').title = "Alert sheet send to EU trade";
			}
			else
			{
				document.querySelector('#bkg_del_cd').title = "";
			}
		}
	}
}*/

/*function bkgPODToolTip()
{
	var POD = document.getElementsByName('bkg_pod_cd')[0].value;
	var DEL = document.getElementsByName('bkg_del_cd')[0].value;
	var BOffice = document.getElementsByName('bkg_ofc_cd')[0].value;
	
	if(BOffice == "SZPBB")
	{
		if(POD != null && DEL != null)
		{
			if(POD == "THBKK") // || DEL == "THBKK" // POD == "THBKK" && DEL == "THBKK"
			{
				document.querySelector('#bkg_pod_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_pod_cd').title = "Clarify with the booking party for the POD's Terminal in case missing.\r\n"
				+ "Please input Cust and Int Remarks as \"POD: Bangkok (SCT / PAT / UCT)\"\r\n"
				+ "e.g. POD: Bangkok (PAT) - if booking request for PAT (THBKK03)\r\n"
				+ "      POD: Bangkok (SCT) - if booking request for SCT (THBKK40)\r\n"
				+ "      POD: Bangkok (UCT) - if booking request for UCT (THBKK09)\"";
			}
			else if(POD == "JPSDJ") // || DEL == "JPSDJ" // POD == "JPSDJ" && DEL == "JPSDJ"
			{
				document.querySelector('#bkg_pod_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_pod_cd').title = "1. If booking request for DP \"Sendai\" & POD \"Sendai, Miyagi, Japan, Asia\"   \r\n"
				+ "2. If no related route found in [Product Catalog], as general rules, please remove the DP, and search again     \r\n"
				+ "3. If the DP or First T/S port is generated as Tokyo as per PRD, then no need to verify with customer for the correct DP";
			}
			else if(POD == "PKKHI") // || DEL == "PKKHI" // POD == "PKKHI" && DEL == "PKKHI"
			{
				document.querySelector('#bkg_pod_cd').style.background = "#FFCC99";
				document.querySelector('#bkg_pod_cd').title = "Clarify with the booking party for the POD's Terminal in case missing.\r\n"
				+ "     1.1 Karachi (KICT) - PKKHI01 or \r\n"
				+ "     1.2 Karachi (PICT) / PKKHI02 / Karachi\r\n"
				+ "     1.3 Karachi (QICT) / PKKHI09\r\n"
				+ "Pls input Cust and Int Remarks as POD: Karachi (KICT) OR Kacachi (PICT)\r\n"
				+ "For further SOP, please check the Special Request List";
			}
			else
			{
				document.querySelector('#bkg_pod_cd').title = "";
			}
		}
	}
}*/

/*function bkgLOFCToolTip()
{
	document.querySelector('#ob_sls_ofc_cd').style.background = "#FFCC99";
	document.querySelector('#ob_sls_ofc_cd').title = "Please check correct sales rep code in Account Ownership file";
}*/

/*function bkgRepToolTip()
{
	document.querySelector('#ob_srep_cd').style.background = "#FFCC99";
	document.querySelector('#ob_srep_cd').title = "Please check correct sales rep code in Account Ownership file";
}*/

/*function bkgPreToolTip()
{
	var POD = document.getElementsByName('bkg_pod_cd')[0].value.substr(0,2);
	var DEL = document.getElementsByName('bkg_del_cd')[0].value.substr(0,2);
	var BOffice = document.getElementsByName('bkg_ofc_cd')[0].value;
	var flag = 0;
	var ct = ['MM','IQ','LB','YE','AF','RU','UA','BA','RS','BY','CD','LY','SO','SD','SS','ZW','CF','EG','TN','BI','ML','VE','NI'];
	
	if(BOffice == "SZPBB")
	{
		if(POD != null && DEL != null)
		{
			for(i=0; i<ct.length; i++)
			{
				if(POD == ct[i] || DEL == ct[i])
				{
					flag = 1;
					break;
				}
			}
		}
	}
	
	if(flag == 1)
	{
		document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div:nth-child(1) > div.layout_flex_fixed > div > table:nth-child(2) > tbody > tr > td:nth-child(2) > input:nth-child(1)').style.background = "#FFCC99";
		document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div:nth-child(1) > div.layout_flex_fixed > div > table:nth-child(2) > tbody > tr > td:nth-child(2) > input:nth-child(1)').title = "Due Diligence Country. Update the screenshot in AppSheet";
	}
	else 
	{
		document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div:nth-child(1) > div.layout_flex_fixed > div > table:nth-child(2) > tbody > tr > td:nth-child(2) > input:nth-child(1)').title = "";
	}
}*/

/*function bkgPostToolTip()
{
	var POD = document.getElementsByName('bkg_pod_cd')[0].value.substr(0,2);
	var DEL = document.getElementsByName('bkg_del_cd')[0].value.substr(0,2);
	var BOffice = document.getElementsByName('bkg_ofc_cd')[0].value;
	var flag = 0;
	var ct = ['MM','IQ','LB','YE','AF','RU','UA','BA','RS','BY','CD','LY','SO','SD','SS','ZW','CF','EG','TN','BI','ML','VE','NI'];
	
	if(BOffice == "SZPBB")
	{
		if(POD != null && DEL != null)
		{
			for(i=0; i<ct.length; i++)
			{
				if(POD == ct[i] || DEL == ct[i])
				{
					flag = 1;
					break;
				}
			}
		}
	}
	
	if(flag == 1)
	{
		document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div:nth-child(1) > div.layout_flex_fixed > div > table:nth-child(2) > tbody > tr > td:nth-child(4) > input:nth-child(1)').style.background = "#FFCC99";
		document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div:nth-child(1) > div.layout_flex_fixed > div > table:nth-child(2) > tbody > tr > td:nth-child(4) > input:nth-child(1)').title = "Due Diligence Country. Update the screenshot in AppSheet";
	}
	else
	{
		document.querySelector('body > form > div.wrap_result.coupled_btn_normal2 > div:nth-child(2) > div:nth-child(1) > div.layout_flex_fixed > div > table:nth-child(2) > tbody > tr > td:nth-child(4) > input:nth-child(1)').title = "";
	}
}*/