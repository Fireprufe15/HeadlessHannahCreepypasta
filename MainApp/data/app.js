var canPressEnter = false;

var storyIndex = 0;
var nextline = function(type, username, message){

    var container = document.getElementById('lineContainer');
    var prompt = document.getElementById('prompt');

    var node = document.createElement("P");
    node.id = "messageElement";
    node.textContent = username+" is writing";
    container.appendChild(node);
    window.scrollTo(0,document.body.scrollHeight);

    if (type == "expo"){
        node.textContent = message;
        return;
    }

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
        var curr = storyItems[storyIndex];
        nextline(curr.type, curr.sender, curr.message);
        storyIndex++;
    }
});