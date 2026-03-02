const allowedCodes = ["VN","EG","GH","SN","KE"];
const allowedCountries = ["Vietnam","Egypt","Ghana","Senegal","Kenya"];

dscc.subscribeToData(function(data) {
  const container = document.body;
  container.innerHTML = "";

  const row = data.tables.DEFAULT[0];
  if (!row) return;

  const code = row.country_code_b;
  const country = row.country_c;

  if (
    allowedCodes.includes(code) ||
    allowedCountries.includes(country)
  ) {
    const button = document.createElement("a");
    button.href = "https://docs.google.com/spreadsheets/d/1QlpRa0nkrb5rq7xjX8Iq06t5MLLkukcjUvC6g0UIN44/edit?gid=0#gid=0";
    button.target = "_blank";
    button.innerText = "Open BL Regulation";
    button.style = "background:#007bff;color:white;padding:10px 16px;border-radius:6px;text-decoration:none;display:inline-block;font-weight:bold;";
    container.appendChild(button);
  }
});
