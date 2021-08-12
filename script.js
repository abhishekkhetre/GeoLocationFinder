alert("Mini Project by ABHISHEK KHETRE");

function funcy() {
  
    // const app = document.getElementById('root')
    // Create a request variable and assign a new XMLHttpRequest object to it.
    var request = new XMLHttpRequest()
    
    // Open a new connection, using the GET request on the URL endpoint

    request.open('GET', 'https://api.ipify.org/?format=json', true)
    
    var y = document.getElementById("e");
    
    request.onload = function () {
            var data = JSON.parse(this.response)
            console.log(data.ip)
            y.innerHTML = "IP Address is : " + data.ip; 
    }
    
    // Send request 
    request.send()
    
}

var x = document.getElementById("d");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  x.innerHTML = "LATITUDE : " + position.coords.latitude + 
  "<br>LONGITUDE : " + position.coords.longitude;
}