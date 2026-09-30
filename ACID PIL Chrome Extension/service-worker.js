chrome.runtime.onInstalled.addListener(d => ["install","update"].includes(d.reason) && chrome.tabs.create({url:"https://wnsakshay.github.io/CE-Updates/ACID-PIL-CE/"}));

let tempACID = null;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => 
{
    if (message.type === "setACID") 
	{
        tempACID = message.value; 
        sendResponse({ status: "ok" });
    } 
	else if (message.type === "getACID") 
	{
        sendResponse({ value: tempACID });
    }
});
