// counter code
var button = document.getElementById('counter');

button.onclick = function() {

    //create a request object
    var request = new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.state === XMLHttpRequest.DONE ){
            //Take action
            if (request.status === 200){
                var counter = request.ResponseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        // Not done yet
    };
    
    //make request
    request.open('GET, http://kannan22.imad.hasura-app.io/counter', true);
    request.send(null);
};