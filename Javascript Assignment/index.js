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

    //---------------------Chapter 14-16---------------------//
    //Task 1: Empty Array using JS literal notation to store student names in an array. 
   let studentNamesLiteral = [];
        document.getElementById("emptyArrayResult").innerText = JSON.stringify(studentNamesLiteral);

    //Task 2: Empty Array using JS object notation to store student names in an array.
    let studentNamesObject = new Array();
 document.getElementById("emptyArrayObjResult").innerText = JSON.stringify(studentNamesObject);

 //Task 3: Declare and initialize a strings array.
 let fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];
    document.getElementById("fruitsNamesArrayResult").innerText = JSON.stringify(fruits);

    //Task 4: Declare and initialize a numbers array.
    let numbers = [1, 2, 3, 4, 5];
    document.getElementById("numbersArrayResult").innerText = JSON.stringify(numbers);

    //Task 5: Declare and initialize a boolean array.
    let booleanArray = [true, false, true, false];
    document.getElementById("booleanArrayResult").innerText = JSON.stringify(booleanArray);

    //Task 6: Declare and initialize a mixed array.
    let mixedArray = ["Hello", 42, true, 3.14, "World"];
document.getElementById("mixedArrayResult").innerText = JSON.stringify(mixedArray);

//Task 7: Declare and Initialize an array and store available education qualifications in Pakistan.
let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
let qualHtml = "<h3>Qualifications</h3><ol>";
for (let i = 0; i < qualifications.length; i++) {
    qualHtml += "<li>" + qualifications[i] + "</li>";
}
qualHtml += "</ol>";

document.getElementById("qualificationsBox").innerHTML = qualHtml;

//Task 8: Store 3 student names in an array. Take another array to store score of these three students.
let students = ["Michael", "John", "Tony"];
let scores = [320, 230, 480];
let totalMarks = 500;

let boxHtml = "<h3>Student Scores</h3><ul>";
for (let i = 0; i < students.length; i++) {
    let percentage = (scores[i] / totalMarks) * 100;
    boxHtml += "<li>Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentage.toFixed(2) + "%</li>";
}
boxHtml += "</ul>";

document.getElementById("studentScoresBox").innerHTML = boxHtml;

//Task 9: Initialize an array with color names. Display the array elements in your browser.
let colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
function displayColors() {
    document.getElementById("colorsArrayResult").innerText = colors.join(", ");
}
displayColors();

// a. Add color to the beginning
function addColorBeginning() {
    let color = prompt("Enter a color to add to the beginning:");
    if (color) {
        colors.unshift(color);
        displayColors();
    }
}

// b. Add color to the end
function addColorEnd() {
    let color = prompt("Enter a color to add to the end:");
    if (color) {
        colors.push(color);
        displayColors();
    }
}

// c. Add two more colors to the beginning
function addTwoColorsBeginning() {
    let color1 = prompt("Enter the first color to add to the beginning:");
    let color2 = prompt("Enter the second color to add to the beginning:");
    if (color2) colors.unshift(color2);
    if (color1) colors.unshift(color1);
    displayColors();
}

// d. Delete the first color
function deleteFirstColor() {
    colors.shift();
    displayColors();
}

// e. Delete the last color
function deleteLastColor() {
    colors.pop();
    displayColors();
}

// f. Add color at specific index
function addColorAtIndex() {
    let index = parseInt(prompt("Enter the index to add a color:"));
    let color = prompt("Enter the color name:");
    if (!isNaN(index) && color) {
        colors.splice(index, 0, color);
        displayColors();
    }
}

// g. Delete color(s) from specific index
function deleteColorsAtIndex() {
    let index = parseInt(prompt("Enter the index to start deleting color(s):"));
    let count = parseInt(prompt("How many colors do you want to delete?"));
    if (!isNaN(index) && !isNaN(count)) {
        colors.splice(index, count);
        displayColors();
    }
}

// Task 10: Store student scores in an array & sort in ascending order
let studentScores = [320, 230, 480, 120, 380];
let sortedScores = [...studentScores].sort(function(a, b) { return a - b; });
document.getElementById("sortedScoresResult").innerText =
    "Scores: " + studentScores.join(", ") + "\nSorted: " + sortedScores.join(", ");

// Task 11: Initialize an array with city names and copy 3 elements to selectedCities array
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(2, 4);

document.getElementById("citiesArrayResult").innerHTML =
    "<b>Cities List:</b><br>" + cities.join(", ") + "<br><br>";
document.getElementById("selectedCitiesArrayResult").innerHTML =
    "<b>Selected Cities:</b><br>" + selectedCities.join(", ");

// Task 12: Convert array to string using join()
let arr = ["This", "is", "my", "cat"];
let arrString = arr.join(" ");
document.getElementById("arrayToStringResult").innerHTML = "<b>Array:</b><br>" +
    arr.join(",") + "<br><br><b>String:</b><br>" + arrString;

    //Task 13: FIFO using array
let devices = ["keyboard", "mouse", "printer", "monitor"];
let fifoHtml = "<b>Devices:</b><br>" + devices.join(",") + "<br><br>";

for (let i = 0; i < devices.length; i++) {
    fifoHtml += "<b>Out:</b><br>" + devices[i] + "<br>";
}
document.getElementById("fifoBox").innerHTML = fifoHtml;

//Task 14: LIFO using array
let lifoHtml = "<b>Devices:</b><br>" + devices.join(",") + "<br><br>";
for (let i = devices.length - 1; i >= 0; i--) {
    lifoHtml += "<b>Out:</b><br>" + devices[i] + "<br>";
}
document.getElementById("lifoBox0").innerHTML = lifoHtml;

// Task 15: Dropdown menu using array
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
let dropdownHtml = '<select style="padding:8px; font-size:16px;">';
for (let i = 0; i < phoneManufacturers.length; i++) {
    dropdownHtml += '<option value="' + phoneManufacturers[i] + '">' + phoneManufacturers[i] + '</option>';
}
dropdownHtml += '</select>';
document.getElementById("dropdownBox").innerHTML = dropdownHtml;
    
//----------------------------------Chapter 17 - 20 ------------------------------------//

// Task 1: Declare and initialize an empty multidimensional array (array of arrays)
let multiArray = [[], [], []];
document.getElementById("multiArrayBox").innerHTML =
    "<b>Empty Multidimensional Array:</b><br>" + JSON.stringify(multiArray);

