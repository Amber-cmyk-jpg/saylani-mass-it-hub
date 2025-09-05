//Task 1: character Type chaecker
function checkChar() {
    let char = document.getElementById("charInput").value;
    let result = "";

    if (char.length !== 1) {
        result = "Please enter only one character!";
    } else {
        let ascii = char.charCodeAt(0);

        if (ascii >= 48 && ascii <= 57) {
            result = "It is a Number.";
        } 
        else if (ascii >= 65 && ascii <= 90) {
            result = "It is an Uppercase Letter.";
        } 
        else if (ascii >= 97 && ascii <= 122) {
            result = "It is a Lowercase Letter.";
        } 
        else {
            result = "It is a Special Character.";
        }
    }

    document.getElementById("result").innerText = result;
}

function resetForm() {
    document.getElementById("charInput").value = "";
    document.getElementById("result").innerText = "";
}

//Task 2: Larger Number Finder
function findLargerNum() {
    let n1 = parseInt(document.getElementById("int1").value);
    let n2 = parseInt(document.getElementById("int2").value);
    let result = "";

    if (isNaN(n1) || isNaN(n2)) {
        result = "Please enter two integers!";
    } else if (n1 > n2) {
        result = n1 + " is larger.";
    } else if (n2 > n1) {
        result = n2 + " is larger.";
    } else {
        result = "Both numbers are equal.";
    }

    document.getElementById("numResult").innerText = result;
}

function resetNums() {
    document.getElementById("int1").value = "";
    document.getElementById("int2").value = "";
    document.getElementById("numResult").innerText = "";
}

//Task 3: Positive, Negative or zero
function checkSign() {
    let num = parseFloat(document.getElementById("checkNum").value);
    let result = "";

    if (isNaN(num)) {
        result = "Please enter a number!";
    } else if (num > 0) {
        result = "The number is Positive.";
    } else if (num < 0) {
        result = "The number is Negative.";
    } else {
        result = "The number is Zero.";
    }

    document.getElementById("signResult").innerText = result;
}

function resetSign() {
    document.getElementById("checkNum").value = "";
    document.getElementById("signResult").innerText = "";
}

//Task 4: Vowel Checker
function checkVowel() {
    let char = document.getElementById("vowelChar").value.toLowerCase();
    let result = "";

    if (char.length !== 1 || !isNaN(char)) {
        result = "Please enter a single character!";
    } else {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        result = vowels.includes(char) ? "true (It is a vowel)" : "false (Not a vowel)";
    }

    document.getElementById("vowelResult").innerText = result;
}

function resetVowel() {
    document.getElementById("vowelChar").value = "";
    document.getElementById("vowelResult").innerText = "";
}

//Task 5: Password Validation
let correctPassword = "12345";
let userPassword = prompt("Enter your password:");

if (!userPassword) {
    alert("Please enter your password");
} else if (userPassword === correctPassword) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

//Task 6: Time-based Greeting
function checkGreeting() {
      var greeting;
      var hour = new Date().getHours(); // get current hour

      if (hour < 18) {
        greeting = "Good day";
      } else {
        greeting = "Good evening";
      }

      document.getElementById("results").innerText = greeting;
    }

    //Task 7: Time Range Greeting
    function checkTime() {
      let time = parseInt(document.getElementById("timeInput").value);
      let greeting = "";

      if (time >= 0 && time < 1200) {
        greeting = "Good Morning!";
      } else if (time >= 1200 && time < 1700) {
        greeting = "Good Afternoon!";
      } else if (time >= 1700 && time < 2100) {
        greeting = "Good Evening!";
      } else if (time >= 2100 && time <= 2359) {
        greeting = "Good Night!";
      } else {
        greeting = "Invalid time! Please enter a value between 0000 and 2359.";
      }

      document.getElementById("resulti").innerText = greeting;
    }