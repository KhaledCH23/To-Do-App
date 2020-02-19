function addItem() {
    let input = document.getElementById("holder");
    let text = input.value;
    let newLi = document.createElement("li");
    newLi.textContent = text + " ";
    let BtnDelete = document.createElement("button");
    let btnComplete = document.createElement("button")
    
    
    BtnDelete.textContent = "Delete";
    btnComplete.textContent = "Complete";
    btnComplete.style.marginLeft = "20px"
    BtnDelete.addEventListener("click", deleteItem);
    newLi.appendChild(btnComplete);
    newLi.appendChild(BtnDelete);

    document.getElementById("items").appendChild(newLi);
    input.value = "";

    function deleteItem() {
        document.getElementById("items").removeChild(newLi);
    }
    btnComplete.addEventListener("click", markItem);
    function markItem() {
       newLi.setAttribute("class", "demoClass");
        btnComplete.textContent = "Undo"
    btnComplete.addEventListener("click", inverse);
    function inverse(){
        newLi.setAttribute("class", "demoClass2");
        btnComplete.textContent = "Complete"
    }
    }
}
