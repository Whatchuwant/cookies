$(document).ready(function(){
  
  // checks to see if there are search params works
  if(location.search){
    // splits location search bar by '?' and gets
    //  everything after the ?
    params = location.search.split("?")[1]

    // splits params by '=' and gets everything after the '='
    username = params.split("=")[1]

    // setting cookie to "get_username"
    Cookies.set("get_username", username)
  }

  // (getting) - checks to see if the cookie is set
  if(Cookies.get("get_username")) {

    // gets the cookie value and sets the html of h1
    $("h1").html(Cookies.get("get_username"))
  }
})