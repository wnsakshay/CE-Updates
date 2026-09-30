var elements = document.getElementsByTagName('*');

for (var i = 0, l = elements.length; i < l; i++) {
  var flag = 1;

  switch (elements[i].name) {
    case "form":
      elements[i].addEventListener("mouseover", function () {
        hlt_BKGCreation_Tab();
      });
      break;

    case "btn_t1Save":
    case "btn_t1FaxEDI":
      elements[i].addEventListener("click", function () {
        warnPop_BKGCreationTab();
      });
      break;

    case "btn_t2cSaveSeq":
    case "btn_t2cSave":
      elements[i].addEventListener("click", function () {
        warnPop_TROTab();
      });
      break;

    default:
      flag = 1;
  }

  if (flag == 1) {
    switch (elements[i].id) {
      // Add ID-based cases here if needed in future
      default:
        flag = 1;
    }
  }
}
