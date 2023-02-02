function move(line, column){
    const voidCard = document.getElementById("voidCard");

    const actualCard = document.getElementById("tableauBody").children[line].children[column];
    console.log(line);
    console.log(actualCard);
    voidCard.innerHTML = actualCard.innerHTML;
    voidCard.id = null;

    actualCard.id = "voidCard";

    actualCard.innerHTML= "";
}

function cardHandler(button){
    const column = button.parentNode;
    const line = button.parentNode.parentNode;

    move(parseInt(line.className), parseInt(column.className))
}

