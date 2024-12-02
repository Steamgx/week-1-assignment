let grade = 79;
function gradings(grade) {
    if (grade<=80&&grade<=100)
        {return'A'} 
    else if (grade <=60 && grade<= 79) 
        {return'B';}
    else if (grade >= 50 & grade <= 59)
        {return'C';}
     else if (grade >= 40 & grade <= 49)
         { return'D';
    } else if (grade < 40) 
        {return 'E';}
  else {
        return "Please input a value between 0 and 100"
    }}
console.log(gradings(grade));l
