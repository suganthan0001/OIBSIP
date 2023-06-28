const inputField = document.getElementById("input");
function enlarge(){
    inputField.style.padding = "1% 0%";
}

function resetEnlarge(){
    inputField.style.padding = "0%";
}

function addItem(){
    let item = inputField.value;
    inputField.value = "";

    const inputtext = document.getElementById("inputtext");

    const li = document.createElement("div");
    li.innerHTML = "<p>"+item+"</p><button id=\"arrow\" onclick=\"arrowClick(this)\"><i class=\"fa-solid fa-arrow-right fa-sm\"></i></button>";
    li.classList.add("li");

    inputtext.parentNode.insertBefore(li,inputtext);
}


function arrowClick(ele){
    const targetdiv = ele.parentNode;
    // first the select the element which u want to remove


    setTimeout(() => {
        const text = targetdiv.children[0];
        text.setAttribute("class","line-through-effect");
      }, 200);




    const arrow = targetdiv.querySelector("#arrow");
    // now select the parent div and then use the removechild function to remove the desired button
    arrow.parentNode.removeChild(arrow);
    // dont just select the div and add it. create a new div always to add it.
    const dustbinButton = document.createElement("button");
    dustbinButton.setAttribute("id","#dustbin");
    dustbinButton.setAttribute("onclick","takeout(this)");
    const icon = document.createElement('i');
    icon.classList.add("fa-solid", "fa-trash-can", "fa-sm");
    dustbinButton.appendChild(icon);
    targetdiv.appendChild(dustbinButton);

    const destini = document.getElementById("doneH3");
    destini.parentNode.insertBefore(targetdiv,destini.nextSibling);
} 

  


function takeout(ele){
    const parent = ele.parentNode;
    parent.parentNode.removeChild(parent);
}