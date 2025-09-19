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
    } else if (req.readyState == 0) {
      console.log("Request not initialized");
    } else if (req.readyState == 1) {
      console.log("Request initialized");
    } else if (req.readyState == 2) {
      console.log("Request sent");
    } else if (req.readyState == 3) {
      console.log("Request in progress");
    }
  };
}

async function fetchData() {
  // fetch("https://62d8035e90883139358919d0.mockapi.io/api/v1/users/")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     console.log("Data fetched successfully:", data);
  //     // You can call buildHtmlTable here with the fetched data
  //   })
  //   .catch((error) => {
  //     console.error("Error fetching data:", error);
  //   });

    // with await 
    var res = await fetch("https://62d8035e90883139358919d0.mockapi.io/api/v1/users/");
    var data = await res.json();
    console.log("Data fetched successfully:", data);
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
