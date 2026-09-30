var element = document.getElementsByTagName('*');
var clr = null;
 
//window.addEventListener("load", function () { DeleteRecord(); });
 
 
//document.onkeydown = keydown;
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "bkg_no":
			element[i].addEventListener("keypress", function() { insertData(); });
            flag = 0;
            break;
			
		case "bkg_sts_cd":
			element[i].addEventListener("mouseover", function() { document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = "#EC7215"; });
			element[i].addEventListener("mouseout", function() { document.getElementsByName('bkg_sts_cd')[0].style.backgroundColor = ""; });
            element[i].title = "1) F - Confirmed (Process BL normally).\r\n" +
							"2) X - Cancelled (Do not process BL send mail for - Booking status cancelled).\r\n" +
							"3) W - Wait listed (Process BL & send mail to Onshore).";
            flag = 0;
            break;
					
		case "form":
			element[i].addEventListener("mouseover", function() { highlight(); } );
			element[i].addEventListener("mouseover" , function() {  } );
			element[i].addEventListener("mouseover" , function() {  } );
            flag = 0;
            break;	

				
        default:
			flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{
			case "DIV_t6sheet2":
				element[i].addEventListener("mouseover", function () { CNTR_Tab_Runner_BGClr(); });
				element[i].addEventListener("mouseover", function () { CNTR_Tab_Runner(); });
				element[i].addEventListener("mouseover", function () { check_OC_Status(); });
				flag = 0;
				break;
				
			default:
                flag = 1;
		}
	}
}

function CreateDB()
{
	var Database_Name = 'OpusDB';
    var Version = 1.0;
    var Text_Description = 'Opus Temporary Database';
    var Database_Size = 1024;
    var db = openDatabase(Database_Name, Version, Text_Description, Database_Size);
        db.transaction(function (tx) 
		{
			//tx.executeSql("drop table Customer ");
			//tx.executeSql("drop table Email ");
			//tx.executeSql("drop table Escalation ");
			tx.executeSql('Create Table if not exists Customer (BLNumber VARCHAR(100), SHPRCode integer, SHPRName varchar(100), FWDRPrf varchar(5), FWDRCode integer, FWDRName varchar(100),  CNEECode integer, CNEEName varchar(100), CNPTCode integer, CNPTName varchar(100) , SCNo , RFANo, DEL, POD , POR, POL, Trans_Mode, App_Date,clr);',  [], nullDataHandler, killTransaction);
        });	
}


var Database_Name = 'OpusDB';
    var Version = 1.0;
    var Text_Description = 'Opus Temporary Database';
    var Database_Size = 2 * 1024 * 1024;
    var db = openDatabase(Database_Name, Version, Text_Description, Database_Size);
        db.transaction(function (tx) 
		{
//			tx.executeSql('delete from Customer');	
//			tx.executeSql("drop table Customer ");
						
			
			tx.executeSql('Create Table if not exists Customer (BLNumber VARCHAR(100), SHPRCode integer, SHPRName varchar(100), FWDRPrf varchar(5), FWDRCode integer, FWDRName varchar(100),  CNEECode integer, CNEEName varchar(100), CNPTCode integer, CNPTName varchar(100), SCNo , RFANo, DEL , POD , POR, POL, Trans_Mode, App_Date,clr);',  []);
			tx.executeSql('Create Table if not exists Email (BLNumber VARCHAR(100), SHPRCode integer, SHPRName varchar(100), SH, CN, NF );', [] );
			tx.executeSql('CREATE TABLE IF NOT EXISTS Escalation(BLNumber VARCHAR(50), BOFC VARCHAR(10) );', [] );
						
        });	
		

