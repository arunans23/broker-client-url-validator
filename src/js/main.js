var regex = /^amqp:\/\/[\w.]+:[\w.]+@clientid\/carbon\?brokerlist='tcp:\/\/[\w.]+:[0-9]+'/;

//The above regex is not perfect. There is a lot to edit

function validateURL(){
    console.log("Check");
    var url = document.getElementById("url").value;

    if (!regex.test(url)) { 
        alert("url error");
        return false;
    }

    alert("URL is valid!!!");
}