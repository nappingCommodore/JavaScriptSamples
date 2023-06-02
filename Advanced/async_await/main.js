function getUsers() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  return fetch(
    "https://64679c4160c8cb9a2c987d70.mockapi.io/api/hetp/accounts",
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));
}
async function getUsersApiCall() {
  var res = await getUsers();
  console.log(res);
//   getUsers().then((responseJson) => console.log(responseJson));
}

getUsersApiCall();
