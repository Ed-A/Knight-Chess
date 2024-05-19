let piece = "";
let index = "";

class Knight{
  constructor(i,j){
    this.i = i;
    this.j = j;
  }
  lightSquares(i,j) {
    if(i+1>=0 && i+1<=4 && j+2 <=4 && j+2 >=0){document.getElementById((i+1) + "_" + (j +2)).innerHTML = "O";}
    if(i+2>=0 && i+2<=4 && j+1 <=4 && j+1 >=0){document.getElementById((i+2) + "_" + (j+1)).innerHTML = "O";}
    if(i-1>=0 && i-1<=4 && j-2 <=4 && j-2 >=0){document.getElementById((i-1) + "_" + (j-2)).innerHTML = "O";}
    if(i-2>=0 && i-2<=4 && j-1 <=4 && j-1 >=0){document.getElementById((i-2) + "_" + (j-1)).innerHTML = "O";}
    if(i-1>=0 && i-1<=4 && j+2 <=4 && j+2 >=0){document.getElementById((i-1) + "_" + (j +2)).innerHTML = "O";}
    if(i+2>=0 && i+2<=4 && j-1 <=4 && j-1 >=0){document.getElementById((i+2) + "_" + (j-1)).innerHTML = "O";}
    if(i+1>=0 && i+1<=4 && j-2 <=4 && j-2 >=0){document.getElementById((i+1) + "_" + (j-2)).innerHTML = "O";}
    if(i-2>=0 && i-2<=4 && j+1 <=4 && j+1 >=0){document.getElementById((i-2) + "_" + (j+1)).innerHTML = "O";}
    piece = "Kn";
    index = i + "_" + j;
  }
}

function check(a, i, j){
  switch (a){
    case 'K':
      K1 = new Knight;
      K1.lightSquares(i, j);
      break;
    case 'O':
      let elements = document.getElementsByTagName('td');
      for(let count = 0; count < elements.length; count++)
      {
          if(elements[count].innerHTML == "O" || elements[count].innerHTML == piece)
          {
              elements[count].innerHTML = "";
          }
      }
      document.getElementById(i + "_" + j).innerHTML = piece;
      break;
    case '':
      let all = document.getElementsByTagName('td');
      for(let count = 0; count < all.length; count++)
      {
          if(all[count].innerHTML == "O")
          {
              all[count].innerHTML = "";
          }
      }
      piece = "";
      index = "";
  }
}