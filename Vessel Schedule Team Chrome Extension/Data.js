var element = document.getElementsByTagName('*');
var clr = null;
 
//document.onkeydown = keydown;
 
for (var i = 0, l = element.length; i < l; i++) 
{
	var flag = 1;
	
	switch (element[i].name) 
	{
        case "btn2_EDITransmit":
			//element[i].addEventListener("mouseover", function () { CheckFiler(); });
            flag = 0;
            break;
				
		case "form":
			element[i].addEventListener("mouseover", function () { enableEDITransmit(); });
			element[i].addEventListener("mouseover", function () { disableEDITransmit(); });
            flag = 0;
            break;	
				
        default:
			flag = 1;
    }
		
	if (flag == 1) 
	{
        switch (element[i].id) 
		{				
			default:
                flag = 1;
		}
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
	
	tx.executeSql('CREATE TABLE if not exists Customer (BLNumber TEXT, SHPRCode TEXT, SHPRName TEXT, FWDRPrf TEXT, FWDRCode TEXT, FWDRName TEXT, CNEECode TEXT, CNEEName TEXT, CNPTCode TEXT, CNPTName TEXT, SCNo TEXT, RFANo TEXT, DEL TEXT, POD TEXT, POR TEXT, POL TEXT, clr TEXT, B4 TEXT, D2 TEXT, D3 TEXT, D4 TEXT, D5 TEXT, D7 TEXT, F2 TEXT, F4 TEXT, F5 TEXT, O2 TEXT, O4 TEXT, O5 TEXT, R2 TEXT, R5 TEXT, R7 TEXT, T2 TEXT, T4 TEXT, App_Date TEXT, Trans_Mode TEXT)',  []);
	tx.executeSql('Create Table if not exists Email (BLNumber VARCHAR(100), SHPRCode integer, SHPRName varchar(100), SH, CN, NF );', [] );
	tx.executeSql('CREATE TABLE IF NOT EXISTS Escalation(BLNumber VARCHAR(50), BOFC VARCHAR(10) );', [] );
});	
		
		*/