function bkgCreationWarnPopups() 
{
    const arrDG = new Set(['283699', '290345', '842410', '845090']);
    const arrNDG = new Set(['283429', '292250', '350691', '390422', '392330', '590390', '732393', '840999', '841510', '841780', '841810', '844790', '846310', '850440', '851829', '870830', '871495', '940320', '950300', '960350', '961700']);
    const arrPDG = new Set(['380110', '230990', '281810', '290544', '300320', '310260', '320611', '390110', '390190', '390410', '390950', '391390', '540752', '590310', '720221', '721070', '722920', '731100', '811100', '841370', '841430', '842121', '842430', '842441', '842710', '842890', '843131', '844110', '844339', '844520', '844859', '845011', '845012', '845229', '845521', '846591', '846593', '846729', '847330', '847420', '847490', '850422', '851310', '852910', '852990', '854143', '854511', '871120', '871160', '871410', '901910', '903210', '870380']);
    const arrGCargo = new Set(['280469', '283650', '292429', '293625', '300490', '330430', '340239', '350610', '382499', '392520', '392690', '540246', '560391', '590320', '600632', '701337', '701911', '730890', '731441', '731449', '731815', '761699', '810411', '830110', '830170', '840290', '841391', '841451', '841590', '841850', '841869', '842230', '843149', '843229', '843290', '847730', '847989', '848180', '851660', '851690', '851821', '851822', '870829', '870880', '870899', '871491', '902213', '902830', '903289', '940120', '940549', '950691']);

	const cmdt = document.getElementsByName("cmdt_cd")[0]?.value.trim();
    //const isMatched = arrHighlight.has(cmdt);
    const cmdtCode = document.getElementsByName("cmdt_cd")[0];


    if (!cmdt) return;

    let message = "";

    if (arrDG.has(cmdt)) 
	{
        message = "Dangerous Goods (DG) Cargo Detected.\nPlease ensure all DG handling process are followed + Attach the DG Documents.";
    } 
	else if (arrNDG.has(cmdt)) 
	{
        message = "Non-DG Cargo Identified.\nPlease update Non-DG approval Code + Attach the NON-DG Documents.";
    } 
	else if (arrPDG.has(cmdt)) 
	{
        message = "Potential DG Cargo Identified.\nFurther verification recommended to confirm DG classification.";
    } 
	else if (arrGCargo.has(cmdt)) 
	{
        message = "General Cargo Identified.\nPlease ensure all General cargo process are followed.";
    }

    if (message) 
	{
        window.alert(message);
    }
}


function showPersistentTooltip(message, cmdt) {
  // Check if tooltip already exists, remove it first
  const existingTooltip = document.getElementById('customTooltip');
  if (existingTooltip) {
    existingTooltip.remove();
  }

  // Create tooltip container
  const tooltip = document.createElement('div');
  tooltip.id = 'customTooltip';
  /*tooltip.style.position = 'absolute';
  tooltip.style.background = '#333';
  tooltip.style.color = 'white';
  tooltip.style.padding = '10px';
  tooltip.style.borderRadius = '5px';
  tooltip.style.width = '600px';
  tooltip.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
  tooltip.style.fontSize = '16px';
  tooltip.style.zIndex = '1000';*/
  tooltip.style.position = 'fixed';
tooltip.style.top = '30%';
tooltip.style.left = '50%';
tooltip.style.transform = 'translateX(-50%)';
tooltip.style.background = '#333';
tooltip.style.color = 'white';
tooltip.style.padding = '10px 20px';
tooltip.style.borderRadius = '0 0 6px 6px';
tooltip.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
tooltip.style.zIndex = '10000';
tooltip.style.fontSize = '14px';
tooltip.style.maxWidth = '90%';         // Optional: avoid overflow
tooltip.style.width = 'auto';           // ✅ Auto-size based on text
tooltip.style.display = 'inline-block'; // ✅ Helps shrink to fit
tooltip.style.textAlign = 'center';
tooltip.style.whiteSpace = 'normal';
wordWrap: 'break-word';

  // Create close button
  const closeBtn = document.createElement('button');
  closeBtn.textContent = '×';
  closeBtn.style.background = 'transparent';
  closeBtn.style.border = 'none';
  closeBtn.style.color = 'white';
  closeBtn.style.fontWeight = 'bold';
  closeBtn.style.fontSize = '18px';
  closeBtn.style.cursor = 'pointer';
  closeBtn.style.float = 'right';

  closeBtn.onclick = () => {
    tooltip.remove();
  };

  // Insert message text
  const msgSpan = document.createElement('span');
  //msgSpan.textContent = message + cmdt;
  msgSpan.innerHTML = message.replace(/\n/g, "<br>"); 

  // Append close button and message to tooltip
  tooltip.appendChild(closeBtn);
  tooltip.appendChild(msgSpan);

  // Append tooltip to body
  document.body.appendChild(tooltip);

  
   setTimeout(() => {
    tooltip.remove();
  }, 2000);
}
