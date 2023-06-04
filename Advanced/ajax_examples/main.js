// const XMLHttpRequest = require("xhr2");

function loadDoc() {
  var req = new XMLHttpRequest();
  req.open(
    "GET",
    "https://62d8035e90883139358919d0.mockapi.io/api/v1/users/",
    true
  );
  req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  req.send();
  req.onreadystatechange = function () {
    if (req.readyState == 4 && req.status == 200) {
      document.getElementById("div2").innerHTML = req.responseText; // or JSON.parse(req.responseText)
        // buildHtmlTable(req.responseText, "#div2");
        console.log(req.responseText);
    }
  };
}

// function buildHtmlTable(arrList, selector) {
//   var columns = addAllColumnHeaders(arrList, selector);

//   for (var i = 0; i < arrList.length; i++) {
//     var row$ = $("<tr/>");
//     for (var colIndex = 0; colIndex < columns.length; colIndex++) {
//       var cellValue = arrList[i][columns[colIndex]];
//       if (cellValue == null) cellValue = "";
//       row$.append($("<td/>").html(cellValue));
//     }
//     $(selector).append(row$);
//   }
// }

// function addAllColumnHeaders(arrList, selector) {
//   var columnSet = [];
//   var headerTr$ = $("<tr/>");

//   for (var i = 0; i < arrList.length; i++) {
//     var rowHash = arrList[i];
//     for (var key in rowHash) {
//       if ($.inArray(key, columnSet) == -1) {
//         columnSet.push(key);
//         headerTr$.append($("<th/>").html(key));
//       }
//     }
//   }
//   $(selector).append(headerTr$);

//   return columnSet;
// }

// // loadDoc();
