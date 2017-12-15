/**
 * Created by Fireprufe15 on 2017/12/15.
 */
var login = function(){
    var enteredCode = document.getElementById("code").value;
    var SHA256 =  new Hashes.SHA256;
    var hashedCode = SHA256.hex(enteredCode);
    if (hashedCode == "94444b41ab899743e8a0680db34b8d3c2b0c1b508571e79f8128377186249771"){
        window.location = "main.html";
    }else{
        alert("Wrong Code!");
    }
};
