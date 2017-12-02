var canPressEnter = false;

var nextline = function(username, message){

    var container = document.getElementById('lineContainer');
    var prompt = document.getElementById('prompt');

    var node = document.createElement("P");
    node.id = "messageElement";
    node.textContent = username+" is writing";
    container.appendChild(node);
    window.scrollTo(0,document.body.scrollHeight);

    prompt.style.visibility = "hidden";
    canPressEnter = true;
    var writingAnimation = setInterval(function () {
        if (node.textContent.slice(-3) == "..."){
            node.textContent =  username+" is writing";
        }else{
            node.textContent += '.';
        }
    }, 300);

    setTimeout(function(){
        window.clearInterval(writingAnimation);
        node.textContent = message;
        prompt.style.visibility = "visible";
        canPressEnter = false;
    }, (message.length/10)*1000);
};

document.addEventListener("keydown", function (e) {
    if (e.keyCode === 13 && !canPressEnter){
        nextline("test", "test");
    }
});