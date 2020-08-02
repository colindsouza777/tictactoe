function start() {
    document.getElementById("vertical-center").style.display = "none";
    document.getElementById("vertical-center2").style.display = "block"
    
}
flag =true;
    var x = new Array(9);
    var y = new Array(9);
    var win
    var z=0
// function game() {
//     flag = true

    // document.getElementsByClassName("buttongroup").clicked = false
   

    function button1(){    
        console.log(flag)
        if (flag == true) {
            document.getElementById("01").innerHTML = "X"
            document.getElementById("01").disable = true
            flag=false;
            x[0]=1;
            y[0]=0;
            z++
            win()

        }
        else {
            document.getElementById("01").innerHTML = "O"
            document.getElementById("01").disable = true
            flag = true
            x[0]=0;
            y[0]=1;
            z++
            win()

        }
    }
    function button2(){
        console.log(flag)
        if (flag == true) {
            document.getElementById("02").innerHTML = "X"
            document.getElementById("02").disable = true
            flag=false
            x[2]=1;
            y[2]=0;
            z++
            win()
        }
        else {
            document.getElementById("02").innerHTML = "O"
            document.getElementById("02").disable = true
            flag =true
            x[2]=0;
            y[2]=1;
            z++
            win()
        }
    }
    function button3(){
        console.log(flag)

        if (flag == true) {
            document.getElementById("03").innerHTML = "X"
            document.getElementById("03").disable = true
            flag=false
            x[2]=1;
            y[2]=0;
            z++
            win()
        }
        else {
            document.getElementById("03").innerHTML = "O"
            document.getElementById("03").disable = true
            flag=true
            x[2]=0;
            y[2]=1;
            z++
            win()
        }
    }
    function button4(){
        console.log(flag)

        if (flag == true) {
            document.getElementById("11").innerHTML = "X"
            document.getElementById("11").disable = true
            flag=false
            x[3]=1;
            y[3]=0;
            z++
            win()
        }
        else {
            document.getElementById("11").innerHTML = "O"
            document.getElementById("11").disable = true
            flag=true
            x[3]=0;
            y[3]=1;
            z++
            win()
        }
    }
     function button5(){
        console.log(flag)

        if (flag == true) {
            document.getElementById("12").innerHTML = "X"
            document.getElementById("12").disable = true
            flag=false
            x[4]=1;
            y[4]=0;
            z++
            win()
        }
        else {
            document.getElementById("12").innerHTML = "O"
            document.getElementById("12").disable = true
            flag=true
            x[4]=0;
            y[4]=1;
            z++
            win()
        }
    }
     function button6(){
        console.log(flag)

        if (flag == true) {
            document.getElementById("13").innerHTML = "X"
            document.getElementById("13").disable = true
            flag=false
            x[5]=1;
            y[5]=0;
            z++
            win()
        }
        else {
            document.getElementById("13").innerHTML = "O"
            document.getElementById("13").disable = true
            flag=true
            x[5]=0;
            y[5]=1;
            z++
            win()
        }
    }
    function button7(){
        console.log(flag)

        if (flag == true) {
            document.getElementById("21").innerHTML = "X"
            document.getElementById("21").disable = true
            flag=false
            x[6]=1;
            y[6]=0;
            z++
            win()
        }
        else {
            document.getElementById("21").innerHTML = "O"
            document.getElementById("21").disable = true
            flag=true
            x[6]=0;
            y[6]=1;
            z++
            win()
        }
    }
    function button8(){
   
        if (flag == true) {
            document.getElementById("22").innerHTML = "X"
            document.getElementById("22").disable = true
            flag=false
            x[7]=1;
            y[7]=0;
            z++
            win()
        }
        else {
            document.getElementById("22").innerHTML = "O"
            document.getElementById("22").disable = true
            flag=true
            x[7]=0;
            y[7]=1;
            z++
            win()
        }
    }
    function button9(){
   
        if (flag == true) {
            document.getElementById("23").innerHTML = "X"
            document.getElementById("23").disable = true
            flag=false
            x[8]=1;
            y[8]=0;
            z++
            win()
        }
        else {
            document.getElementById("23").innerHTML = "O"
            document.getElementById("23").disable = true
            flag=true
            x[8]=0;
            y[8]=1;
            z++
            win()
        }
    }
//     // if(document.getElementsByClassName("buttongroup").disabled==true){
//     //     break
//     // }

// console.log("Done")
function win(){
    if ((x[0]==1 && x[1]==1 && x[2]==1) || (x[0]==1 && x[3]==1 && x[6]==1) || (x[0]==1 && x[4]==1 && x[8]==1) || (x[6]==1 && x[7]==1 && x[8]==1) || (x[6]==1 && x[4]==1 && x[2]==1) || (x[2]==1 && x[5]==1 && x[8]==1)){
        console.log("X")
        document.getElementById("vertical-center2").style.display = "none";
        document.getElementById("vertical-center3").style.display = "block";
        document.getElementById("winner").innerHTML="'X' wins the game"

    }
    else if((y[0]==1 && y[1]==1 && y[2]==1) || (y[0]==1 && y[3]==1 && y[6]==1) || (y[0]==1 && y[4]==1 && y[8]==1) || (y[6]==1 && y[7]==1 && y[8]==1) || (y[6]==1 && y[4]==1 && y[2]==1) || (y[2]==1 && y[5]==1 && y[8]==1)){
        console.log("Y")
        document.getElementById("vertical-center2").style.display = "none";
        document.getElementById("vertical-center3").style.display = "block";
        document.getElementById("winner").innerHTML="'O' wins the game"
    }
    else if (z==9){
        document.getElementById("vertical-center2").style.display = "none";
            document.getElementById("vertical-center3").style.display = "block";
            document.getElementById("winner").innerHTML="It's a draw"
    }
    // else{
    //     continue
    // }
    // return win
}

   
