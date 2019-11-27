function rollDice(){
    
    var die1 = document.getElementById("die1");
    var die2 = document.getElementById("die2");
    var die3 = document.getElementById("die3");
    var die4 = document.getElementById("die4");
    var die5 = document.getElementById("die5");
   
    var userdie = document.getElementById("userdie")
  
   
    var vals = document.getElementById("vals");
    var status = document.getElementById("status");
    var d1 = Math.floor(Math.random() * 6) + 1;
    var d2 = Math.floor(Math.random() * 6) + 1;
    var d3 = Math.floor(Math.random() * 6) + 1;
    var d4 = Math.floor(Math.random() * 6) + 1;
    var d5 = Math.floor(Math.random() * 6) + 1;
    var user = Math.floor(Math.random() * 20) + 1;
   
    
    var diceTotal = d1 + d2;
    die1.innerHTML = d1;
    die2.innerHTML = d2;
    die3.innerHTML = d3;
    die4.innerHTML = d4;
    die5.innerHTML = d5;
  
    userdie.innerHTML = user;
   
    const myBtn= document.getElementById("myBtn");
    myBtn.addEventListener("click",function(){
        
        var ud= (prompt("Enter what d20 roll + modifier ="));
    if ( ud ==10 || ud== 11 || ud== 12 || ud==13 || ud==14   ) {

      var dungeonmaster= (prompt("have your dm enter a number 1-4"));
      if (dungeonmaster==1){  
     var i,n= Number (prompt("Enter the number of dice being used to create the bomb"));  
     var num= new Array(n);
     for(i=0;i<n;i++)
     
     num[i]=Number (prompt("Enter the number"+(i+1)));
     document.write("<font size=6> Before Sorting: "+num);

     num.sort();
    num.pop()
    num.pop()
    num.pop()
    num.pop()
     document.write("<br><br>this is what you know: "+num);
     }
     if (dungeonmaster==2){  
        var i,n= Number (prompt("Enter the number of dice being used to create the bomb"));  
        var num= new Array(n);
        for(i=0;i<n;i++)
        
        num[i]=Number (prompt("Enter the number"+(i+1)));
        document.write("<font size=6> Before Sorting: "+num);
   
       
     num.sort(function(a,b){return(b-a);});
     
     num.pop()
     num.pop()
     num.pop()
     num.pop()
     document.write("<br><br>this is what you know: "+num+"</font>")}
     if (dungeonmaster==3){  
        var sort1 = (prompt)("enter the number of the first d6 roll")
        if (  sort1 % 2==0 ){
            document.write(sort1);


        }
    else{
        document.write("blank");
    }
    
    }
    if (dungeonmaster==4) {
        var sort1 = (prompt)("enter the number of the first d6 roll")
        if (  sort1 % 2==0 ){
            document.write("blank");


        }
    else{
        document.write(sort1);

    }
}}
    
      else if (ud==15||ud==16||ud==17||ud==18||ud==19) {
    
        var dungeonmaster= (prompt("have your dm enter a number 1-4"));
        if (dungeonmaster==1){  
       var i,n= Number (prompt("Enter the number of dice being used to create the bomb"));  
       var num= new Array(n);
       for(i=0;i<n;i++)
       
       num[i]=Number (prompt("Enter the number"+(i+1)));
       document.write("<font size=6> Before Sorting: "+num);
  
       num.sort();
      num.pop()
      num.pop()
      num.pop()
      
       document.write("<br><br>this is what you know: "+num);
       }
       if (dungeonmaster==2){  
          var i,n= Number (prompt("Enter the number of dice being used to create the bomb"));  
          var num= new Array(n);
          for(i=0;i<n;i++)
          
          num[i]=Number (prompt("Enter the number"+(i+1)));
          document.write("<font size=6> Before Sorting: "+num);
     
         
       num.sort(function(a,b){return(b-a);});
       
       num.pop()
       num.pop()
       num.pop()
       
       document.write("<br><br>this is what you know: "+num+"</font>")}
       if (dungeonmaster==3){  
        var sort1 = (prompt)("enter the number of one of the d6 rolls")
        if (  sort1 % 2==0 ){
            document.write(sort1+",");


        }
    else{
        document.write("blank,");
    }
    var sort2 = (prompt)("enter the number of a  diffrent d6 roll")
        if (  sort2 % 2==0 ){
            document.write(" "+sort2);


        }
    else{
        document.write(" blank");
    }
    }
    if (dungeonmaster==4) {
        var sort1 = (prompt)("enter the number of one of the d6 rolls")
        if (  sort1 % 2==0 ){
            document.write("blank,");


        }
    else{
        document.write(sort1+",");

    }
    var sort2 = (prompt)("enter the number of a diffrent d6 roll")
    if (  sort2 % 2==0 ){
        document.write(" blank");


    }
else{
    document.write(" "+sort2);

}
}
}

    else if(ud ==20|| ud ==21||ud ==22|| ud==23||ud ==24) {
        var dungeonmaster= (prompt("have your dm enter a number 1-4"));
        if (dungeonmaster==1){  
       var i,n= Number (prompt("Enter the number of dice being used to create the bomb"));  
       var num= new Array(n);
       for(i=0;i<n;i++)
       
       num[i]=Number (prompt("Enter the number"+(i+1)));
       document.write("<font size=6> Before Sorting: "+num);
  
       num.sort();
      num.pop()
      num.pop()
      
      
       document.write("<br><br>this is what you know: "+num);
       }
       if (dungeonmaster==2){  
          var i,n= Number (prompt("Enter the number of dice being used to create the bomb"));  
          var num= new Array(n);
          for(i=0;i<n;i++)
          
          num[i]=Number (prompt("Enter the number"+(i+1)));
          document.write("<font size=6> Before Sorting: "+num);
     
         
       num.sort(function(a,b){return(b-a);});
       
       num.pop()
       num.pop()
       
       
       document.write("<br><br>this is what you know: "+num+"</font>")}
       if (dungeonmaster==3){  
        var sort1 = (prompt)("enter the number of one of the d6 rolls")
        if (  sort1 % 2==0 ){
            document.write(sort1+",");


        }
    else{
        document.write("blank,");
    }
    var sort2 = (prompt)("enter the number of a  diffrent d6 roll")
        if (  sort2 % 2==0 ){
            document.write(" "+sort2+",");


        }
    else{
        document.write(" blank,");
    }
    var sort3 = (prompt)("enter the number of a  diffrent d6 roll")
        if (  sort3 % 2==0 ){
            document.write(" "+sort3);


        }
    else{
        document.write(" blank");
    }
    }
    if (dungeonmaster==4) {
        var sort1 = (prompt)("enter the number of one of the d6 rolls")
        if (  sort1 % 2==0 ){
            document.write("blank,");


        }
    else{
        document.write(sort1+",");

    }
    var sort2 = (prompt)("enter the number of a diffrent d6 roll")
    if (  sort2 % 2==0 ){
        document.write(" blank,");


    }
else{
    document.write(" "+sort2+",");

}
var sort3 = (prompt)("enter the number of a diffrent d6 roll")
if (  sort3 % 2==0 ){
    document.write(" blank");


}
else{
document.write(" "+sort3);

}
}
}

    else if(ud>=25) {
        var dungeonmaster= (prompt("have your dm enter a number 1-4"));
        if (dungeonmaster==1){  
       var i,n= Number (prompt("Enter the number of dice being used to create the bomb"));  
       var num= new Array(n);
       for(i=0;i<n;i++)
       
       num[i]=Number (prompt("Enter the number"+(i+1)));
       document.write("<font size=6> Before Sorting: "+num);
  
       num.sort();
      num.pop()
    
      
      
       document.write("<br><br>this is what you know: "+num);
       }
       if (dungeonmaster==2){  
          var i,n= Number (prompt("Enter the number of dice being used to create the bomb"));  
          var num= new Array(n);
          for(i=0;i<n;i++)
          
          num[i]=Number (prompt("Enter the number"+(i+1)));
          document.write("<font size=6> Before Sorting: "+num);
     
         
       num.sort(function(a,b){return(b-a);});
       
       num.pop()
      
       
       
       document.write("<br><br>this is what you know: "+num+"</font>")}
       if (dungeonmaster==3){  
        var sort1 = (prompt)("enter the number of one of the d6 rolls")
        if (  sort1 % 2==0 ){
            document.write(sort1+",");


        }
    else{
        document.write("blank,");
    }
    var sort2 = (prompt)("enter the number of a  diffrent d6 roll")
        if (  sort2 % 2==0 ){
            document.write(" "+sort2+",");


        }
    else{
        document.write(" blank,");
    }
    var sort3 = (prompt)("enter the number of a  diffrent d6 roll")
        if (  sort3 % 2==0 ){
            document.write(" "+sort3+",");


        }
    else{
        document.write(" blank,");
    }
    var sort4 = (prompt)("enter the number of a  diffrent d6 roll")
        if (  sort4 % 2==0 ){
            document.write(" "+sort4);


        }
    else{
        document.write(" blank");
    }
    }
    if (dungeonmaster==4) {
        var sort1 = (prompt)("enter the number of one of the d6 rolls")
        if (  sort1 % 2==0 ){
            document.write("blank,");


        }
    else{
        document.write(sort1+",");

    }
    var sort2 = (prompt)("enter the number of a diffrent d6 roll")
    if (  sort2 % 2==0 ){
        document.write(" blank,");


    }
else{
    document.write(" "+sort2+",");

}
var sort3 = (prompt)("enter the number of a diffrent d6 roll")
if (  sort3 % 2==0 ){
    document.write(" blank,");


}
else{
document.write(" "+sort3+",");

}
var sort4 = (prompt)("enter the number of a diffrent d6 roll")
if (  sort4 % 2==0 ){
    document.write(" blank");


}
else{
document.write(" "+sort4);

}
}
    }

    else
    {
        document.write("you know nothing about the bomb"); 
    }
    
});
const myBtn2= document.getElementById("myBtn2");
myBtn2.addEventListener("click",function(){
    var dungeonmaster= (prompt("have your dm enter a number 1-4"));
    if (dungeonmaster==1){  
   var i,n= Number (prompt("Enter the number of dice being used to create the bomb"));  
   var num= new Array(n);
   for(i=0;i<n;i++)
   
   num[i]=Number (prompt("Enter the number"+(i+1)));
   document.write("<font size=6> Before Sorting: "+num);

   num.sort();
 
   document.write("<br><br>this is the soultion: "+num);
   }
   if (dungeonmaster==2){  
      var i,n= Number (prompt("Enter the number of dice being used to create the bomb"));  
      var num= new Array(n);
      for(i=0;i<n;i++)
      
      num[i]=Number (prompt("Enter the number"+(i+1)));
      document.write("<font size=6> Before Sorting: "+num);
 
     
   num.sort(function(a,b){return(b-a);});
   
   
   document.write("<br><br>this is the soultion: "+num+"</font>")}
   if (dungeonmaster==3){  
    
          document.write("all even");


      
 
  
  }
  if (dungeonmaster==4) {
    document.write("all odd");
     
}

});

}
