let fonttikoko = 16;

// let button = document.querySelector("button"); 
let button = document.getElementById("fontStyleButton");
// console.log(button);

let kokoLista = document.getElementById("fontSize");
// console.log("Font size on: " + growFontSize.style.fontSize)

// console.log(growFontSize.textContent)
kokoLista.style.fontSize = fonttikoko + "px";

// let lista = document.querySelectorAll(".rivi");

let myIndex = 0;

button.onclick = () => {

    fonttikoko +=4; 
    if (fonttikoko > 32){
        fonttikoko = 16
    }
    
    kokoLista.style.fontSize = fonttikoko + "px";
    // lista[myIndex].style.fontSize = fonttikoko + "px";
    // myIndex +=1;
    // if (myIndex > 4){
    //     myIndex = 0;
    // }

    document.getElementById("fonttikokoNyt").textContent = 'Fonttikoko nyt ' + fonttikoko + 'px';
}


// TOINEN TEHTÄVÄ



let fontinTyyli = "Courier New";
let buttonToinen = document.getElementById("fontStyleButtonToinen");
console.log(buttonToinen);

let changeFontStyle = document.getElementById("fontStyle");
console.log(changeFontStyle.textContent)

changeFontStyle.style.fontFamily = fontinTyyli;
console.log(fontinTyyli);
console.log(changeFontStyle);

// let listaToinen = document.querySelectorAll(".riviToinen");

// let myIndexToinen = 0;

let click = 1;

buttonToinen.onclick = () => {
    
    switch (click) {
        case 1:
            fontinTyyli = "Roboto";
            break;
        case 2:
            fontinTyyli = "Mansalva";
            break;
        case 3:
            fontinTyyli = "Grenze";
            break;
        case 4:
            fontinTyyli = "Turrent Road";
            break;
        case 5:
            fontinTyyli = "Courier New";
            break;
    }

    click++;
    if (click > 5){
        click = 1;
    }

    changeFontStyle.style.fontFamily = fontinTyyli;
    // listaToinen[myIndexToinen].style.fontFamily = fontinTyyli;
    // myIndexToinen +=1;
    
    document.getElementById("fontinTyyliNyt").textContent = 'Fontti on nyt ' + fontinTyyli;
}

