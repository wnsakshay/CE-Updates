const COMPANY_DOMAIN = "@one-line.com";

let bypassNextSend = false;

/* ---------------------------
   TOAST
---------------------------- */

function showToast(message) {
    const toast = document.createElement("div");
    toast.className = "gmail-toast";
    toast.innerText = message;

    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}

/* ---------------------------
   EMAIL EXTRACTION
---------------------------- */

function getAllEmails(win) {
    const emails = new Set();

    // Gmail recipient chips
    win.querySelectorAll('span[email]').forEach(el => {
        const email = el.getAttribute('email');
        if (email) emails.add(email.toLowerCase());
    });

    // Gmail hovercards
    win.querySelectorAll('div[data-hovercard-id]').forEach(el => {
        const id = el.getAttribute('data-hovercard-id');
        if (id && id.includes("@")) {
            emails.add(id.toLowerCase());
        }
    });

    return [...emails];
}

/* ---------------------------
   EXTERNAL CHECK
---------------------------- */

function getExternalEmails(win) {
    const emails = getAllEmails(win);

    return emails.filter(email =>
        !email.endsWith(COMPANY_DOMAIN)
    );
}

/* ---------------------------
   CONFIRMATION POPUP
---------------------------- */

function showConfirmDialog(externalEmails, onConfirm, onCancel) {

    // prevent duplicate popup
    if (document.getElementById("ext-warning-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "ext-warning-overlay";

    overlay.style.position = "fixed";
    overlay.style.top = 0;
    overlay.style.left = 0;
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.6)";
    overlay.style.zIndex = 9999999;
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";

    const box = document.createElement("div");

    box.style.background = "white";
    box.style.padding = "20px";
    box.style.borderRadius = "10px";
    box.style.width = "420px";
    box.style.fontFamily = "Arial";
    box.style.boxShadow = "0 4px 20px rgba(0,0,0,0.3)";

    box.innerHTML = `
        <h3 style="margin-top:0;color:#e74c3c;">
            External Email Warning
        </h3>

        <p>
            You are sending mail to external recipients:
        </p>

        <ul style="max-height:150px;overflow:auto;">
            ${externalEmails.map(e => `<li>${e}</li>`).join("")}
        </ul>

        <p>
            Please verify before continuing.
        </p>
    `;

    const btnRow = document.createElement("div");

    btnRow.style.display = "flex";
    btnRow.style.justifyContent = "flex-end";
    btnRow.style.gap = "10px";
    btnRow.style.marginTop = "20px";

    const cancelBtn = document.createElement("button");
    cancelBtn.innerText = "Cancel";

    const sendBtn = document.createElement("button");
    sendBtn.innerText = "Send Anyway";

    sendBtn.style.background = "#e74c3c";
    sendBtn.style.color = "white";
    sendBtn.style.border = "none";
    sendBtn.style.padding = "8px 14px";
    sendBtn.style.borderRadius = "5px";

    cancelBtn.onclick = () => {
        overlay.remove();
        onCancel();
    };

    sendBtn.onclick = () => {
        overlay.remove();
        onConfirm();
    };

    btnRow.appendChild(cancelBtn);
    btnRow.appendChild(sendBtn);

    box.appendChild(btnRow);
    overlay.appendChild(box);

    document.body.appendChild(overlay);
}

/* ---------------------------
   SEND INTERCEPT
---------------------------- */

function interceptSend() {

    document.addEventListener("click", function (e) {

        const target = e.target;

        const ariaLabel =
            target?.getAttribute("aria-label")?.toLowerCase() || "";

        const isSendButton =
            target?.innerText === "Send" ||
            ariaLabel.includes("send");

        if (!isSendButton) return;

        const compose = target.closest('div[role="dialog"]');

        if (!compose) return;

        // allow second click
        if (bypassNextSend) {
            bypassNextSend = false;
            return;
        }

        const externalEmails = getExternalEmails(compose);

        // internal only
        if (externalEmails.length === 0) {
            showToast("Internal email");
            return;
        }

        // stop gmail send
        e.preventDefault();
        e.stopImmediatePropagation();

        showConfirmDialog(
            externalEmails,

            // confirm
            () => {
                bypassNextSend = true;

                showToast("Sending email...");

                setTimeout(() => {
                    target.click();
                }, 100);
            },

            // cancel
            () => {
                showToast("Send cancelled");
            }
        );

    }, true);
}

/* ---------------------------
   INIT
---------------------------- */

function init() {
    interceptSend();
}

init();