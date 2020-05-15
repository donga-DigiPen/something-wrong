/*
Dong-A Choi
Draw a Deck of Cards assignment 
CS099
Spring2020
*/

function setup() {
  createCanvas(840, 400);
}

function draw() {
  background('beige');
  let shape = 0;
  let word = 0;
  let xgap = 50;
  let ygap = 70;
  let number = 0;
  let heartx = 110;
  let hearty = 85;
  let spadex = 155;
  let spadey = 80;
  let diax = 217;
  let diay = 70;
  let cx = 264;
  let cy = 78;

  for(let ynumber=1; ynumber<5; ynumber+=1)
  {
    
    for(let xnumber=1; xnumber<14; xnumber+=1)
    {
      number++
      if(number>13) {
        number = 1
      }
      
      rect(xnumber*xgap+50, ynumber*ygap-20,30,45);
      textSize(20);
      
      if(number != 1 && number!= 11 && number != 12 && number !=13) {
        text(number,xnumber*xgap+50,ynumber*ygap)
      } else if(number == 1) {
        text('A',xnumber*xgap+50,ynumber*ygap)
      } else if(number == 11) {
        text('J',xnumber*xgap+50,ynumber*ygap)
      } else if(number == 12) {
        text('Q',xnumber*xgap+50,ynumber*ygap)
      } else if(number == 13) {
        text('K',xnumber*xgap+50,ynumber*ygap)
      }
      
      shapes(xnumber*xgap,ynumber*ygap,shape)
      shapes2(xnumber*xgap,ynumber*ygap,shape)
      shapes3(xnumber*xgap,ynumber*ygap,shape)
      shapes4(xnumber*xgap,ynumber*ygap,shape)
      shape++
         if(shape>3)
           {
             shape=0
           }
       }
      
     }
function shapes(heartx,hearty,shape) {
  switch(shape){
        case 0:
          push()//heart
          fill('red');
          noStroke();
          arc(heartx+60,hearty,10,10,PI,0);
          arc(heartx+70,hearty,10,10,PI,0);
          triangle(heartx+55,hearty,heartx+65,hearty+15,heartx+75,hearty);
          shape++
          pop()
          break;
  }
}
function shapes2(spadex,spadey,shape) {
       switch(shape) {
          case 1 :
          push();
          fill('black');
          triangle(spadex+55,spadey+5,spadex+65,spadey-5,spadex+75,spadey+5);
          arc(spadex+60,spadey+5,10,10,0,PI);
          arc(spadex+70,spadey+5,10,10,0,PI);
          rect(spadex+63,spadey+8,4,9);
          shape ++
          pop();
          break;
  }
}
function shapes3(diax,diay,shape) {
  switch(shape) {
        case 2:
          push();
          noStroke();
          fill('red');
          quad(diax+65,diay,diax+70,diay+10,diax+65,diay+20,diax+60,diay+10);
          shape ++
          pop();
          break;
  }
}
function shapes4(cx,cy,shape) {
  switch(shape){
        case 3:
          push();
          fill('black');
          arc(cx+62,cy+5,13,13,HALF_PI,HALF_PI+PI);
          arc(cx+64.5,cy,13,13,PI,0);
          arc(cx+67,cy+5,13,13,HALF_PI+PI,HALF_PI);
          rect(cx+62,cy,5,20)
          pop();
          break;
  }
}
      }
   
  
  
  
