chrome.runtime.onInstalled.addListener(d => ["install","update"].includes(d.reason) && chrome.tabs.create({url:"https://wnsakshay.github.io/CE-Updates/Vessel-Schedule-Team-CE/"}));
