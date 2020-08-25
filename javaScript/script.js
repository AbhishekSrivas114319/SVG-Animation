//Js time :- lets do this.....................(to check how to do comment)


document.getElementById("welcome").innerHTML = "Welcome, press the button to start your jorney";//starting banner text

function start(){   //to start jouney 
    document.getElementById("container").style.backgroundImage = "url('../Images/Background.jpg')";
    document.getElementById("start").style.display = "none";
    document.getElementById("welcome").style.display = "none";
    document.getElementById("fairy").style.display = "block";
}

function drop(){ // fuction to make the drop fall

    var drop_image = document.getElementById("drop");

    // to get the x co-ordinate of mouse position
    let x = event.clientX;
    // to get the y-co-ordinate of mouse position
    let y = event.clientY;

    drop_image.style.top = y + "px";
    drop_image.style.left= x + "px";

    console.log("value of x:- " + x); //to check the value of x in console
    console.log("value of y:- " + y); //to check the value of y in console

    document.getElementById("drop").style.display = "block";
    var pos = y; 
    var id = setInterval(frame,5) // for call frame funcion again and again
    function frame(){

        if(pos == 754 ){
            clearInterval(id);
        }else{
            pos++;
            drop_image.style.top =  pos +"px";
        }    
    } 
      
}

function fairy(){ //Fairy movement and alert
    let fairy = document.getElementById("fairy");
    if(fairy.style.top != 5+"vh" ){                //Trying new things with if else
        fairy.style.top = 5 +"vh";
        alert("Fairy says click on the clouds to see a rain drop");
    }
    else{
        fairy.style.top = 20 +"vh";
        alert("don,t disturb fairy, she can send you in other realm")
        document.getElementById("isekai").style.display = "block";
    }

}

function realmChange(){ //for realm change with the help of portal button
    document.getElementById("container").style.backgroundImage = "url('../Images/Background2/Background2.jpg')";
    document.getElementById("fairy").style.display = "none";
    document.getElementById("isekai").style.display = "none";
    document.getElementById("nemo").style.display = "block";
    document.getElementById("gfish").style.display = "block";
    document.getElementById("whale").style.display = "block";
}

function whale(){ // function for the movement of whale
  
    let whale = document.getElementById("whale");
    let gfish = document.getElementById("gfish");
    let id = setInterval(movement,150);
    let pos = 89;
    function movement(){
        if(pos == 0){
            clearInterval(id);
        }
        else{
            pos--;
            whale.style.left = pos + "vw";
            console.log("whale:- " + whale.style.left);  // for checking the value of whale in console
            console.log("Fish:- " + gfish.style.left);  // for checking the value of fish in console 
            if(whale.style.left == 80+"vw"){
                gfish.style.display="none";
            }
        }
    }
}







/*                              Experience Panel :- 
Problem faced and learned:-
1.How to use JS                                                 ref:- w3schools
2.how to make a element appear using js                         ref:- w3..
3.accessing elements and tags                                   ref:- ~
4.making a certain element move by clicking on button           ref:- ~
5.getting the position of cursor                                ref:- ~
6.calling a function again and again                            ref:- ~
7.making drop appear at the place of mouse click                ref:- (own logic)putting every thing in section and adding onclick in section >
8.avoiding drop overflow                                        setting position to relative
9.adding new button to toggle the fairy world
10.adding new world portal for making it fun
11.Human World <3  

Moving logic :-
:-syntax from w3schools
:-logic self made

*/