
console.log(document.getElementById('randTxt'));
document.getElementById('randTxt').innerHTML = "Changing value using document.getelementById Method, dynamically updating value using JS";
document.getElementById('randTxt').style.backgroundColor = "purple";
document.getElementById('randTxt').style.color = "#fff";
document.getElementById('randTxt').title = "Some random text in para element";

console.log("Print on the console");

console.log(document.getElementsByClassName('hdg'));
const id = 500;



function changeHdgStyle() {
    document.getElementsByClassName('hdg')[0].style.color = "red";
    document.getElementsByClassName('hdg')[1].style.color = "yellow";
    document.getElementsByClassName('hdg')[2].style.color = "purple";
    console.log(id)
}

function selctedCity() {
    console.log(document.getElementById('cities'));
    console.log(document.getElementById('cities').value);

    var ctyVal = document.getElementById('cities').value;
    document.getElementById('slctVal').innerHTML = ctyVal;
    document.getElementById('lastNm').value = ctyVal;
    console.log(id)
}

function mouseOverActn() {
    document.getElementById('btnSubmit').style.backgroundColor = "green";
    document.getElementById('btnSubmit').style.color = "white";
    console.log(id)
}

function mouseOutActn() {
    document.getElementById('btnSubmit').style.backgroundColor = "lightgrey";
    document.getElementById('btnSubmit').style.color = "black";
}

function keyPressActn() {
    var nm = document.getElementById('nmTxt').value;
    document.getElementById('txt').innerHTML = nm;
}


function enterName(fName, lName) {
    // alert("Hi, " + fName +" "+lName)
    console.log("Hi, " + fName + " " + lName)
    console.log(id)
}

enterName("Ram", "Kumar");

function Add(val1, val2) {
    var res = val1 + val2;
    return res;
}

var addRes = Add(10, val2);
console.log("Addition Results is " + addRes);

function getInpVal() {
    alert(document.getElementById('lastNm').value);
    var lstNm = document.getElementById('lastNm').value;
    console.log(lstNm)
}
var val2 = 20;

function addition() {

    let val1 = "arun";
    val2 = 30;
    const mbNbr = 12312312;
    var result = val1 + id;

    let isValid = true;
    let asd = null;
    console.log(asd)
    console.log(result);

}
console.log(val2);
//console.log(mbNbr)
//console.log(result)
addition();

function AddOpr() {
    console.log(document.getElementById('num1').value)
    console.log(document.getElementById('num2').value)
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let res = +num1 + +num2;
    document.getElementById('resInp').value = res;
}

function calculator(actType) {
    console.log(actType)
    let num1 = "0"; let num2 = "0";
    let res;

    if (actType == 'add') {
        num1 = document.getElementById('num1').value;
        num2 = document.getElementById('num2').value;
        res = +num1 + +num2;
        document.getElementById('resInp').value = res;
    }
    else if (actType == 'sub') {
        num1 = document.getElementById('num1').value;
        num2 = document.getElementById('num2').value;
        if (num1 > num2) {
            res = num1 - num2;
        }
        else {
            window.alert('Number 1 should be greater than number 2');
            res = null;
        }

        document.getElementById('resInp').value = res;
    }
    else if (actType == 'mul') {
        num1 = document.getElementById('num1').value;
        num2 = document.getElementById('num2').value;
        res = num1 * num2;
        document.getElementById('resInp').value = res;
    }
    else if (actType == 'div') {
        num1 = document.getElementById('num1').value;
        num2 = document.getElementById('num2').value;
        res = num1 / num2;
        document.getElementById('resInp').value = res;
    }

}

function sample() {

    var a = 200;
    var b = 40;

    var c = a > b ? 100 + a : 250;
    console.log(c);

}

sample();

function switchEx() {
    let age = document.getElementById('age').value;


    switch (age) {


        case "10":
            console.log("value of age is " + age);
            break;

        case "50":
            console.log("vaue of age is " + age);
            break;

        case "25":
            console.log("age provided is 25");
            break;

        case "15":
            console.log("age provided is 15");
            break;

        default:
            console.log('age provided doesnt mathces to the criteria');
            break;


    }

}

//switchEx();

function printNumbers() {

    let maxCount= 20;
    for (let i = 0; i <= maxCount; i++) {

        console.log(i);

    }


}

printNumbers();