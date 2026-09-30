function highlightBkgCreation() 
{
    try 
	{
        const soField = document.getElementsByName("twn_so_no")[0];

        if (!soField) return; // exit if element not found

        const soValue = soField.value.trim();
        
        soField.style.width = "70px";
        if (soValue === "") 
		{
            soField.style.outline = "2px solid red";
        } else {
            soField.style.outline = "none";
        }
    } 
	catch (err) 
	{
        console.error("Error in highlightBkgCreation:", err);
    }
}
