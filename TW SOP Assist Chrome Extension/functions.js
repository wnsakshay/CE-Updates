function bkgCreationHardPopup() 
{
	let flag = 0;
    try 
	{
        // Check if S/O No is blank
        const soField = document.getElementsByName("twn_so_no")[0];
        if (soField && soField.value.trim() === "") 
		{
            alert("S/O No cannot be blank!");
			flag = 1;
        }
    } 
	catch (err) 
	{
        console.error("Error checking S/O No:", err);
    }

    try 
	{
        // Region arrays
        const euArr = ["AD","AL","AM","AT","AX","AZ","BA","BE","BG","BY","CH","CY","CZ","DE","DK","EE","EGALY","EGDAM","ES","EU","FI","FO","FR","GB","GE","GI","GL","GR","HR","HU","IE","IL","IM","IS","IT","KG","KZ","LB","LI","LT","LU","LV","MACAS","MC","MD","ME","MK","MT","NL","NO","PL","PT","RO","RS","RU","SE","SI","SJ","SK","SM","TR","UA","VA"];
        const aflaArr = ["AG","AI","AN","AO","AR","AW","BB","BF","BI","BJ","BL","BM","BO","BQ","BR","BS","BW","BZ","CD","CF","CG","CI","CL","CM","CO","CR","CU","CV","CW","CX","DJ","DM","DO","DZ","EC","EG","EH","ER","ET","FK","FW","GA","GD","GF","GH","GM","GN","GP","GQ","GT","GW","GY","HN","HT","JM","KE","KM","KN","KY","LC","LR","LS","LY","MA","MG","ML","MQ","MR","MS","MU","MW","MX","MZ","NA","NE","NG","NI","PA","PE","PM","PN","PR","PY","RE","RW","SC","SD","SH","SL","SN","SO","SR","SS","ST","SV","SX","SZ","TC","TD","TG","TN","TT","TZ","UG","UY","VC","VE","VG","VI","YT","ZA","ZM","ZW","ZY"];
        const aoArr = ["AE","AF","AS","AU","BD","BH","BN","BT","CC","CK","CN","EGSOK","FJ","FM","GU","HK","ID","IN","IO","IQ","IR","JO","JP","KH","KI","KP","KR","KW","LA","LK","MH","MM","MN","MO","MP","MV","MY","NC","NF","NP","NR","NU","NZ","OM","PF","PG","PH","PK","PS","PW","QA","SA","SB","SG","TB","TH","TJ","TK","TL","TM","TO","TV","TW","UM","UZ","VN","VU","WF","WS","YE"];
        const tpArr = ["CA","US"];

        // Input values
        const del = (document.getElementById("bkg_del_cd")?.value || "").toUpperCase();
        const por = (document.getElementById("bkg_por_cd")?.value || "").toUpperCase();
        const pol = (document.getElementById("bkg_pol_cd")?.value || "").toUpperCase();

        // POR–POL rules for each region
        const rules = {
            tpArr: {
                "TWKEL": ["TWKEL", "TWKHH", "TWTPE", "TWTXG"],
                "TWKHH": ["TWKHH", "TWTPE"],
                "TWTPE": ["TWTPE"],
                "TWTXG": ["TWKEL", "TWKHH", "TWTPE", "TWTXG"],
                "TWTYN": ["TWKEL", "TWKHH", "TWTPE", "TWTXG"]
            },
            aflaArr: {
                "TWKEL": ["TWKEL", "TWKHH", "TWTXG"],
                "TWKHH": ["TWKEL", "TWKHH"],
                "TWTXG": ["TWKEL", "TWKHH", "TWTXG"],
                "TWTYN": ["TWKEL", "TWKHH", "TWTXG"]
            },
            euArr: {
                "TWKEL": ["TWKHH", "TWTXG"],
                "TWTYN": ["TWKHH", "TWTXG"],
                "TWTXG": ["TWKHH", "TWTXG"],
                "TWKHH": ["TWKHH"]
            },
            aoArr: {
                "TWKEL": ["TWKHH", "TWKEL", "TWTXG"],
                "TWKHH": ["TWKHH", "TWKEL"],
                "TWTPE": ["TWKHH", "TWKEL"],
                "TWTXG": ["TWKHH", "TWKEL", "TWTXG"],
                "TWTYN": ["TWKHH", "TWKEL", "TWTXG"]
            }
        };

        // Check which region DEL belongs to
        let matchedRegion = null;
        if (tpArr.some(code => del.startsWith(code))) matchedRegion = "tpArr";
        else if (aflaArr.some(code => del.startsWith(code))) matchedRegion = "aflaArr";
        else if (euArr.some(code => del.startsWith(code))) matchedRegion = "euArr";
        else if (aoArr.some(code => del.startsWith(code))) matchedRegion = "aoArr";

        // If DEL is in a region, validate POR–POL
        if (matchedRegion) 
		{
            const regionRules = rules[matchedRegion];
            if (!regionRules[por] || !regionRules[por].includes(pol)) {
                alert("Please check valid POR and POL pairs before proceeding the booking.");
				flag = 1;
            }
        }

        // If DEL is not in any region list → allow any POR–POL
    } catch (err) {
        console.error("Error in bkgCreationHardPopup:", err);
    }
	
	if(flag == 1)
	{
		document.getElementById("btn_t1Save").setAttribute("disabled",true);
	}
	else
	{
		document.getElementById("btn_t1Save").removeAttribute("disabled");
	}
		
}

function bkgCreationTooltip() 
{
    try 
	{
        // Set tooltip titles for fixed elements
        const tooltipMap = {
            "mty_pkup_yd_cd": "Please check M'ty Pick Up Cy and Full Return CY",
            "full_rtn_yd_cd": "Please check M'ty Pick Up Cy and Full Return CY",
            "btn_t1RouteDetail": "Check the Vessel Schedule and CCT"
        };

        for (const [id, title] of Object.entries(tooltipMap)) 
		{
            const el = document.getElementById(id);
            if (el) el.title = title;
        }
    } 
	catch (err) 
	{
        console.error("Error setting fixed tooltips:", err);
    }

    try 
	{
        // Check customer remark field
        const remarkField = document.getElementsByName("xter_rmk")[0];
        if (!remarkField) return;

        const specialKeywords = [
            "A CLASS CONTAINER",
            "CFS",
            "TOPPING",
            "NON-DG REFERENCE NO"
        ];

        const hasSpecialRemark = specialKeywords.some(keyword =>
            remarkField.value.includes(keyword)
        );

        remarkField.title = hasSpecialRemark ? "Please check special remark" : "";
        remarkField.style.width = "320px";
        remarkField.style.height = "50px";
        remarkField.style.resize = "none";
        remarkField.style.outline = hasSpecialRemark ? "2px solid red" : "none";
        
    } 
	catch (err) 
	{
        console.error("Error setting remark tooltip:", err);
    }
}


function bkgCreationWarnPopup() 
{
    try 
	{
        const pod = document.getElementById("bkg_pod_cd")?.value || "";
        const del = document.getElementById("bkg_del_cd")?.value || "";
        const shprcd = document.getElementsByName("s_cust_cnt_cd")[0]?.value || "";
        const fwdrcd = document.getElementsByName("f_cust_cnt_cd")[0]?.value || "";
        const cneecd = document.getElementsByName("c_cust_cnt_cd")[0]?.value || "";
        const cnptcd = document.getElementsByName("bkg_ctrl_pty_cust_cnt_cd")[0]?.value || "";

        const dueArr = [
            "AE","AF","BA","BY","CD","CF","EE","EG","FI","GE","IQ","JO","LB","LT","LV","LY",
            "ML","MM","NI","RS","RU","SD","SO","SS","TN","TR","UA","VE","YE","ZW"
        ];

        // Find matching codes
        const matchedCodes = dueArr.filter(code =>
            pod.startsWith(code) ||
            del.startsWith(code) ||
            shprcd === code ||
            fwdrcd === code ||
            cneecd === code ||
            cnptcd === code
        );

        if (matchedCodes.length > 0) 
		{
            prompt(
                "Due Diligence Country. Please update the screenshot on the Appsheet: " +
                matchedCodes.join(",")
            );
        }
    } 
	catch (err) 
	{
        console.error("Error in bkgCreationWarnPopup:", err);
    }
	
	try
	{
		let cnt = document.querySelectorAll("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr").length;
		
		for(var i = 2; i <= cnt; i++)
		{
			var tpsz = document.querySelector("#t1sheet1 > tbody > tr:nth-child(2) > td > div > div.GMPageOne > table > tbody > tr:nth-child(" + i + ") > td:nth-child(3)").innerText;
			
			if(tpsz.includes("O2", "O4", "O5", "F2", "F4", "F5", "B4"))
			{
				window.prompt("Kindly fill up Special Equipment Request","https://docs.google.com/forms/d/e/1FAIpQLSfuHe-JoRCRNt6q0uxJRTc1uP18wXlLStj9DVtF6MBOa4POlw/viewform");
			}
		}
	}
	catch(err){ }

    alert("Please check the Port Cut-Off and Update the Doc Cut-Off");
}

async function eSIBookingUploadHardPopup()
{
	let flag = 0;
	try 
	{
		const iframe = document.getElementById("t1frame");
		if (!iframe) 
		{
			console.error("Iframe not found");
			return;
		}

		const 
		{
			del,
			del2,
			por,
			por2,
			pol,
			pol2
		} = await getIframeValues(iframe);

        // Region arrays
        const euArr = ["AD","AL","AM","AT","AX","AZ","BA","BE","BG","BY","CH","CY","CZ","DE","DK","EE","EGALY","EGDAM","ES","EU","FI","FO","FR","GB","GE","GI","GL","GR","HR","HU","IE","IL","IM","IS","IT","KG","KZ","LB","LI","LT","LU","LV","MACAS","MC","MD","ME","MK","MT","NL","NO","PL","PT","RO","RS","RU","SE","SI","SJ","SK","SM","TR","UA","VA"];
        const aflaArr = ["AG","AI","AN","AO","AR","AW","BB","BF","BI","BJ","BL","BM","BO","BQ","BR","BS","BW","BZ","CD","CF","CG","CI","CL","CM","CO","CR","CU","CV","CW","CX","DJ","DM","DO","DZ","EC","EG","EH","ER","ET","FK","FW","GA","GD","GF","GH","GM","GN","GP","GQ","GT","GW","GY","HN","HT","JM","KE","KM","KN","KY","LC","LR","LS","LY","MA","MG","ML","MQ","MR","MS","MU","MW","MX","MZ","NA","NE","NG","NI","PA","PE","PM","PN","PR","PY","RE","RW","SC","SD","SH","SL","SN","SO","SR","SS","ST","SV","SX","SZ","TC","TD","TG","TN","TT","TZ","UG","UY","VC","VE","VG","VI","YT","ZA","ZM","ZW","ZY"];
        const aoArr = ["AE","AF","AS","AU","BD","BH","BN","BT","CC","CK","CN","EGSOK","FJ","FM","GU","HK","ID","IN","IO","IQ","IR","JO","JP","KH","KI","KP","KR","KW","LA","LK","MH","MM","MN","MO","MP","MV","MY","NC","NF","NP","NR","NU","NZ","OM","PF","PG","PH","PK","PS","PW","QA","SA","SB","SG","TB","TH","TJ","TK","TL","TM","TO","TV","TW","UM","UZ","VN","VU","WF","WS","YE"];
        const tpArr = ["CA","US"];

        // POR–POL rules for each region
        const rules = {
            tpArr: {
                "TWKEL": ["TWKEL", "TWKHH", "TWTPE", "TWTXG"],
                "TWKHH": ["TWKHH", "TWTPE"],
                "TWTPE": ["TWTPE"],
                "TWTXG": ["TWKEL", "TWKHH", "TWTPE", "TWTXG"],
                "TWTYN": ["TWKEL", "TWKHH", "TWTPE", "TWTXG"]
            },
            aflaArr: {
                "TWKEL": ["TWKEL", "TWKHH", "TWTXG"],
                "TWKHH": ["TWKEL", "TWKHH"],
                "TWTXG": ["TWKEL", "TWKHH", "TWTXG"],
                "TWTYN": ["TWKEL", "TWKHH", "TWTXG"]
            },
            euArr: {
                "TWKEL": ["TWKHH", "TWTXG"],
                "TWTYN": ["TWKHH", "TWTXG"],
                "TWTXG": ["TWKHH", "TWTXG"],
                "TWKHH": ["TWKHH"]
            },
            aoArr: {
                "TWKEL": ["TWKHH", "TWKEL", "TWTXG"],
                "TWKHH": ["TWKHH", "TWKEL"],
                "TWTPE": ["TWKHH", "TWKEL"],
                "TWTXG": ["TWKHH", "TWKEL", "TWTXG"],
                "TWTYN": ["TWKHH", "TWKEL", "TWTXG"]
            }
        };

        // Check which region DEL belongs to
        // Determine which region DEL belongs to (checking both del and del2)
		let matchedRegion = null;
		if (tpArr.some(code => del.startsWith(code)) || tpArr.some(code => del2.startsWith(code))) 
		{
			matchedRegion = "tpArr";
		} 
		else if (aflaArr.some(code => del.startsWith(code)) || aflaArr.some(code => del2.startsWith(code))) 
		{
			matchedRegion = "aflaArr";
		} 
		else if (euArr.some(code => del.startsWith(code)) || euArr.some(code => del2.startsWith(code))) 
		{
			matchedRegion = "euArr";
		} 
		else if (aoArr.some(code => del.startsWith(code)) || aoArr.some(code => del2.startsWith(code))) 
		{
			matchedRegion = "aoArr";
		}

        // If DEL is in a region, validate POR–POL
        if (matchedRegion) 
		{
            const regionRules = rules[matchedRegion];
            if (!regionRules[por] || !regionRules[por].includes(pol)) 
			{
                alert("Please check valid POR and POL pairs before proceeding the booking.");
				flag = 1;
            }
        }
		
		if(flag == 1)
		{
			document.getElementById("btn_opusupload").setAttribute("disabled",true);
		}
		else
		{
			document.getElementById("btn_opusupload").removeAttribute("disabled");
		}
		
        // If DEL is not in any region list → allow any POR–POL
    } 
	catch (err) 
	{
        console.error("Error in bkgCreationHardPopup:", err);
    }
}

function getIframeValues(iframe) 
{
  return new Promise((resolve, reject) => {
    function extractValues() 
	{
      try 
	  {
        const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        if (!iframeDoc) 
		{
          reject("Cannot access iframe document");
          return;
        }

        // Use iframeDoc to get elements inside the iframe
        const getValue = (id) => (iframeDoc.getElementById(id)?.value || "").toUpperCase();

        const values = {
          del: getValue("bkg_del_cd"),
          del2: getValue("bkg_del_cd2"),
          por: getValue("bkg_por_cd"),
          por2: getValue("bkg_por_cd2"),
          pol: getValue("bkg_pol_cd"),
          pol2: getValue("bkg_pol_cd2"),
        };

        resolve(values);
      } 
	  catch (err) 
	  {
        reject(err);
      }
    }

    // If iframe is already loaded, extract values immediately
    if (iframe.contentWindow.document.readyState === "complete") 
	{
      extractValues();
    } 
	else 
	{
      // Wait for iframe to load, then extract
      iframe.addEventListener("load", extractValues);
    }
  });
}



