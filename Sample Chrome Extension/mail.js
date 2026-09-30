function SendMail()
{
	var shprName = "";	
	var cnptName = "";
	var fwdrName = "";
	var POR = "";
	var POD = "";
	
		db.transaction (
		function(tx)
		{
				tx.executeSql('SELECT * FROM Customer ORDER BY ROWID DESC LIMIT 1 ;', [],
				function(transaction, results){
					if (results != null && results.rows != null) {
						for (var j=0; j<results.rows.length; j++) {
							var row = results.rows.item(j) ;						
							shprName = row.SHPRName;
							console.log('Shipper Name... '+ shprName);
							fwdrName = row.FWDRName;
							console.log('fwdrName... ' + fwdrName);
							var fdwr = fwdrName.replace(/ .*/,'');
							
							cnptName = row.CNPTName;
							console.log('CNPT Name... ' + cnptName);
							var firstcnpt = cnptName.replace(/ .*/,'');
							console.log('first cnpt ' + firstcnpt);
							
							POR = row.POR;
							var SCNo = row.SCNo;
							
							var P = POR.substr(2,4);
							
							var firstWord = shprName.replace(/ .*/,'');
							
							
							
							POD = row.POD;
							
							var subPod = POD.substr(0,2);
							console.log("Sub POD " + subPod);
							
								if ( fdwr == "DAMCO" && firstcnpt !== "WALMART")
								{
									var emails;
									if(document.getElementsByName('email') != null)
									{
										emails = document.getElementsByName('email')[0].value.toLowerCase();
									}
									console.log('lower email  ' + emails);
									
									var emailArray = emails.split(",");
									var hasErrors = false;
									var errorMessage = "";
										for (i = 0; i <= (emailArray.length - 1) ; i++)
										{
											if (emailArray[i].toLowerCase() == "pcgdscmnikdoc@maersk.com" || emailArray[i].toLowerCase() == "thdswb.china.shenzhen@damco.com" || emailArray[i].toLowerCase() == "oneobdoc.nsk@wns.com") 
											{
												
											}
											else
											{
												alert("email id should be below any one or all \r\n pcgdscmnikdoc@maersk.com, \r\n  thdswb.china.shenzhen@damco.com, \r\n oneobdoc.nsk@wns.com");
												document.getElementsByName('email')[0].style.backgroundColor = "#f1a9f3";
												hasErrors = true;
												errorMessage += "This is not DAMCO Customer email id: " + emailArray[i] + "\n\r";
											}
										}
										if (hasErrors) 
										{
											alert(errorMessage);
										}
								}
								
								if ( fdwr == "DAMCO" && firstcnpt == "WALMART" && (subPod == "US" || subPod == "CA"))
								{
									var emails;
									if(document.getElementsByName('email') != null)
									{
										emails = document.getElementsByName('email')[0].value.toLowerCase();
									}
									console.log('lower email  ' + emails);
									
									var emailArray = emails.split(",");
									var hasErrors = false;
									var errorMessage = "";
										for (i = 0; i <= (emailArray.length - 1) ; i++)
										{
											if (emailArray[i].toLowerCase() == "GSCDAMSWB@lns.maersk.com"  || emailArray[i].toLowerCase() == "oneobdoc.nsk@wns.com") 
											{
												
											}
											else
											{
												alert("email id should be below any one or all \r\n GSCDAMSWB@lns.maersk.com, \r\n oneobdoc.nsk@wns.com");
												document.getElementsByName('email')[0].style.backgroundColor = "#f1a9f3";
												hasErrors = true;
												errorMessage += "This is not FWDR DAMCO & CNPT Walmart Customer email id: " + emailArray[i] + "\n\r";
											}
										}
										if (hasErrors) 
										{
											alert(errorMessage);
										}
								}
								
								
								if ( firstCnpt == "COSTCO" )
								{
									var emails;
									console.log('costco is IN');
									if(document.getElementsByName('email') != null)
									{
										emails = document.getElementsByName('email')[0].value.toLowerCase();
									}
									console.log('ye lower ' + emails);

									var emailArray = emails.split(",");
									var hasErrors = false;
									var errorMessage = "";
										for (i = 0; i <= (emailArray.length - 1) ; i++)
										{
											if (emailArray[i].toLowerCase() == "upsszoceancostco.doc@ups.com"  || emailArray[i].toLowerCase() == "oneobdoc.nsk@wns.com") 
											{
												console.log(emailArray[i].toLowerCase());
											}
											else
											{
												alert("email id should be below any one or all \r\n upsszoceancostco.doc@ups.com, \r\n  oneobdoc.nsk@wns.com");
												document.getElementsByName('email')[0].style.backgroundColor = "#f1a9f3";
												hasErrors = true;
												errorMessage += "This is not COSTCO Customer email id: " + emailArray[i] + "\n\r";
											}
										}
										if (hasErrors) 
										{
											alert(errorMessage);
										}
								}
								if(fwdrName.includes("BEIJING KANG JIE KONG") && P == "YTN")
								{
									var emails;
									if(document.getElementsByName('email') != null)
									{
										emails = document.getElementsByName('email')[0].value.toLowerCase();
									}
									
									if(fwdrName.includes("BEIJING KANG JIE KONG") && (P == "YTN") && (SCNo == "ATLB00235") )
									{
										var emailArray = emails.split(",");
										var hasErrors = false;
										var errorMessage = "";
										for (i = 0; i <= (emailArray.length - 1) ; i++)
										{
											if (emailArray[i].toLowerCase() == "carrieredi-szx@expeditors.com" )  
											{
												//alert("emails match");
												console.log(emailArray[i].toLowerCase());
											}
											else
											{
												alert("email id should be below any one or all \r\n carrieredi-szx@expeditors.com");
												document.getElementsByName('email')[0].style.backgroundColor = "#f1a9f3";
												hasErrors = true;
												errorMessage += "This is not BEIJING KANG Customer email id: " + emailArray[i] + "\n\r";
											}
										}
										if (hasErrors) 
										{
											alert(errorMessage);
										}
									}
								}
								
								
						}
					}
				});
		}
	);
	
}