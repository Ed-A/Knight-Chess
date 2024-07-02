let piece = "";
let piecealt = "";
let index = "";

window.addEventListener("click", (event) =>{
  let id=event.target.id;
  check(event.target, parseInt(id[0]), parseInt(id[2]));
});

class Knight{
  // CLASS OF THE PIECE WITH METHOD THAT CALCULATES POSSIBLE MOVES
  lightSquares(i,j) {
    document.getElementById(i+"_"+j).style.backgroundColor = "green";
    if(i+1>=0 && i+1<=4 && j+2 <=4 && j+2 >=0){document.getElementById((i+1) + "_" + (j+2)).style.backgroundColor = "orange";}
    if(i+2>=0 && i+2<=4 && j+1 <=4 && j+1 >=0){document.getElementById((i+2) + "_" + (j+1)).style.backgroundColor = "orange";}
    if(i-1>=0 && i-1<=4 && j-2 <=4 && j-2 >=0){document.getElementById((i-1) + "_" + (j-2)).style.backgroundColor = "orange";}
    if(i-2>=0 && i-2<=4 && j-1 <=4 && j-1 >=0){document.getElementById((i-2) + "_" + (j-1)).style.backgroundColor = "orange";}
    if(i-1>=0 && i-1<=4 && j+2 <=4 && j+2 >=0){document.getElementById((i-1) + "_" + (j+2)).style.backgroundColor = "orange";}
    if(i+2>=0 && i+2<=4 && j-1 <=4 && j-1 >=0){document.getElementById((i+2) + "_" + (j-1)).style.backgroundColor = "orange";}
    if(i+1>=0 && i+1<=4 && j-2 <=4 && j-2 >=0){document.getElementById((i+1) + "_" + (j-2)).style.backgroundColor = "orange";}
    if(i-2>=0 && i-2<=4 && j+1 <=4 && j+1 >=0){document.getElementById((i-2) + "_" + (j+1)).style.backgroundColor = "orange";}
    piece = "whiteknight.png";
    piecealt = "whiteknight";
    index = i + "_" + j;
  }
}

function check(a, i, j){
  // FUNCTION TO CHECK CLICKS AND RESPOND ACCORDINGLY
  if(a.style.backgroundColor != "orange"){
    switch (a.children[0].alt){
      case 'whiteknight':
        K1 = new Knight;
        K1.lightSquares(i, j);
        break;
      case '':
        remove();
        piece = "";
        index = "";
    }
  }else{
    remove();
    // CHANGES PIECE POSITION
    a.innerHTML = "<img src="+piece+" alt="+piecealt+">";
    document.getElementById(index).innerHTML = "";
    document.getElementById(index).style.backgroundColor = "transparent";
  }
}

function remove(){
  // REMOVES POSSIBLE MOVES COLOR
  let elements = document.getElementsByTagName('td');
    for(let count = 0; count < elements.length; count++)
    {
        if(elements[count].style.backgroundColor == "orange")
        {
            elements[count].style.backgroundColor = "transparent";
        }
    }
}
