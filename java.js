http://127.0.0.1:5500/index.html

// Question 1 

let userInput1 = prompt("Enter 1 to turn ON the light or 0 to turn OFF the light:");


if (userInput1 === "1")
    {
        console.log("The light is ON.");
    }
else if (userInput1 === "0") 
    {
        console.log("The light is OFF.");
    } 
else {
        console.log("Invalid Input. Please enter 1 or 0.");
     }



// Question 2


let userInput2 = prompt("(Red, Yellow, Green) Eneter one of them:");


if (userInput2 === "Red")
    {
        console.log("Stop.");
    }
else if (userInput2 === "Yellow") 
    {
        console.log("Slow Down.");
    } 
 else if (userInput2 === "Green") 
        {
            console.log("Go.");
        } 
else {
    console.log("Invalid Input. Please enter Correct color.");
     }



// Question 3


let userInput = prompt("Temperature in Celsius:");


if (userInput <= 0)
    {
         alert("Freezing.");
    }
else if (userInput > 0 && userInput <= 15) 
    {
          alert("Cold.");
    } 
else if (userInput > 15 && userInput <= 29) 
        {
           alert("Warm.");
        } 
else if (userInput >=30 && userInput <100) 
         {
             alert("Hot.");
          } 
else {
    alert("Invalid Input. Please enter Correct Temperature.");
     }



// Question No 5


let isDoorOpen = prompt("Is the door open? (yes or no)");
let isMotionDetected = prompt("Is motion detected? (yes or no)");


if (isDoorOpen === "yes" || isMotionDetected === "yes") {
    alert("Alarm Triggered");
} else if (isDoorOpen === "no" && isMotionDetected === "no") {
    alert("All Safe");
} else {
    alert("Invalid input. Please answer with 'yes' or 'no'.");
}




// Question No 11



let age = prompt("Enter your age:");
function checkVotingEligibility(age) {
    if (age >= 18) {
        alert("You are eligible to vote.");
    } else {
        alert("You are not eligible to vote. You need to be at least 18 years old.");
    }
}

// Example usage

checkVotingEligibility(Number(age)); // Convert input to a number and check eligibility






// Question No 7


var password = prompt("Enter your password:");
function Password(password)
{
    if (password.length >= 8) 
        {
        alert("Strong Password");
        } 
     else if (password.length >= 5 && password.length <= 7)
         {
        alert("Moderate Password");
         } 
    else
        {
        alert("Weak Password");
        }  
}
Password(password);





// Question 9


 weather =prompt("Sunny, Rainy, Cold");

if(weather === "Sunny")

{
    alert("Wear sunglasses");
}

  else if(weather === "Rainy")

  {
    alert("Take an umbrella");
  }

  else if(weather === "Cold")
  {
    alert("Wear a jacket");
  }
  else
  {
     alert("Invalid Number");
  }


// Question 12


num1 = prompt("Enter 1st Number");
num2 = prompt("Enter 2nd Number");

if (num1 > num2)
{
  alert("Number 1 is Greater");
}
else if (num2 > num1)
{
  alert("Number 2 is greater");
}
else( num1 ==num2)
{
  alert("Both Numbers are same");
}