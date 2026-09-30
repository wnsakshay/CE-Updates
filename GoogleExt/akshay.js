var element = document.getElementsByTagName('*');

for (var i = 0, l = element.length; i < l; i++) {
    var flag = 1;
	
 switch (element[i].name) 
{
    case "btnK":
		element[i].addEventListener("click", function() { alert("You have clicked Google Search Button!!!"); });
		flag = 0;
        break;
		
	case "btnI":
		element[i].value = "I am Lucky";
		element[i].addEventListener("click", function() { window.confirm("You're really a Lucky Person!!!"); });
		flag = 0;
        break;
		
	case "jOfkMb":
		//element[i].value = "I am Lucky";
		element[i].addEventListener("mouseover", function() { checker(); });
		flag = 0;
        break;

		
	default:
        flag = 1;
}

if (flag == 1) 
{
    switch (element[i].id) 
	{
		case "hplogo":
			element[i].addEventListener("mouseover", function() { ImgZI(); });
			element[i].addEventListener("mouseout", function() { ImgZO(); });
			flag = 0;
			break;
		default:
			flag = 1;
	}
}
if (flag == 1) 
{
    switch (element[i].className) 
	{
		case "gb_Vf":
			element[i].addEventListener("mouseover", function() { checker(); });
		flag = 0;
        break;
		case "g4jUVc":
			element[i].addEventListener("mouseover", function() { alert("Hello"); });
		flag = 0;
        break;
		default:
			flag = 1;
	}
}
}

function ImgZI()
{
	document.getElementById("hplogo").style.width = "372px";
	document.getElementById("hplogo").style.height = "192px";
}

function ImgZO()
{
	document.getElementById("hplogo").style.width = "272px";
	document.getElementById("hplogo").style.height = "92px";
}

function checker()
{
	document.querySelectorAll("#yDmH0d > c-wiz > div > div > div > div.o0tPDc > div.DLc2vb > div:nth-child(2) > div > c-wiz > div.byY7Yb.cFc9ae > div.IEIJqd.qs41qe > div > c-wiz > div.I0LFzc.mS1Rod > div.XT3Vq.N5XGq > div")[0].removeAttribute("aria-disabled");
	document.querySelectorAll("#yDmH0d > c-wiz > div > div > div > div.o0tPDc > div.DLc2vb > div:nth-child(2) > div > c-wiz > div.byY7Yb.cFc9ae > div.IEIJqd.qs41qe > div > c-wiz > div.I0LFzc.mS1Rod > div.XT3Vq.N5XGq > div")[0].removeAttribute("ariaReadOnly","false");
}
