function highlight_DeStuff_Empty_Yard()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		var DeStuff = document.getElementById("deStuffingTp").value;
		var Empty_Yard = document.getElementById("emptyYard").value;
		
		if(loc.includes("Nhava Sheva") && DeStuff == "DO_DOCK" && Empty_Yard != "")
		{
			document.getElementById("emptyYardDiv").style = "display: block; outline: 2px red solid !important;";
			document.querySelectorAll("#doGenerateForm > div.container.clear > div.row.content.panel-box > div.col-md-12.padding0 > div:nth-child(4)")[0].style = "outline: 2px red solid !important;";
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "outline: 2px red solid !important;";
		}
		else
		{
			document.getElementById("emptyYardDiv").style = "display: block;";
			document.querySelectorAll("#doGenerateForm > div.container.clear > div.row.content.panel-box > div.col-md-12.padding0 > div:nth-child(4)")[0].style = "";
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "";
		}
	}catch(err){ }
}

function highlight_Empty_Yard_Tumb()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		
		if(loc.includes("Tumb"))
		{
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "outline: 2px red solid !important;";
		}
		else
		{
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "";
		}
	}catch(err){ }
}


function highlight_DeStuff_INNSA1()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		var DeStuff = document.getElementById("deStuffingTp").value;
		var CFS = document.getElementById("cfsCode").value;
		
		if(loc.includes("Nhava Sheva") && DeStuff == "DO_DOCK" && CFS.startsWith("INNSA1"))
		{
			document.querySelectorAll("#cfsCode_chosen")[0].style = "width: 262px; outline: 2px red solid !important;";
			document.querySelectorAll("#doGenerateForm > div.container.clear > div.row.content.panel-box > div.col-md-12.padding0 > div:nth-child(4)")[0].style = "outline: 2px red solid !important;";
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "outline: 2px red solid !important;";
		}
		else
		{
			document.querySelectorAll("#cfsCode_chosen")[0].style = "width: 262px;";
			document.querySelectorAll("#doGenerateForm > div.container.clear > div.row.content.panel-box > div.col-md-12.padding0 > div:nth-child(4)")[0].style = "";
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "";
		}
	}catch(err){ }
}

function highlight_DeStuff_Cochin()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		var DeStuff = document.getElementById("deStuffingTp").value;
		
		if(loc.includes("Cochin") && DeStuff == "DO_DOCK")
		{
			document.querySelectorAll("#doGenerateForm > div.container.clear > div.row.content.panel-box > div.col-md-12.padding0 > div:nth-child(4)")[0].style = "outline: 2px red solid !important;";
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "outline: 2px red solid !important;";
		}
		else
		{
			document.querySelectorAll("#doGenerateForm > div.container.clear > div.row.content.panel-box > div.col-md-12.padding0 > div:nth-child(4)")[0].style = "";
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "";
		}
	}catch(err){ }
}

function highlight_Chennai_Toyota_GenDO()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		var consignee = document.getElementById("consNm").value;
		
		if((loc.includes("Chennai") || loc.includes("Kattupalli")) && consignee.toLowerCase().startsWith("toyota kirloskar motor"))
		{
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "outline: 2px red solid !important;";
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(14)")[0].style = "outline: 2px red solid !important;";
		}
		else
		{
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "";
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(14)")[0].style = "";
		}
	}catch(err){ }
}

function highlight_DeStuff_Vishakapatnam()
{
	try
	{
		var loc = document.getElementById("portDestinationNm").value;
		var DeStuff = document.getElementById("deStuffingTp").value;
		
		if(loc.includes("Vishakapatnam") && DeStuff == "DO_DOCK")
		{
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "outline: 2px red solid !important;";
			document.querySelectorAll("#doGenerateForm > div.container.clear > div.row.content.panel-box > div.col-md-12.padding0 > div:nth-child(4)")[0].style = "outline: 2px red solid !important;";
		}
		else
		{
			document.querySelectorAll("#collapseOne > div > div > div > div > div:nth-child(10)")[0].style = "";
			document.querySelectorAll("#doGenerateForm > div.container.clear > div.row.content.panel-box > div.col-md-12.padding0 > div:nth-child(4)")[0].style = "";
		}
	}catch(err){ }
}

