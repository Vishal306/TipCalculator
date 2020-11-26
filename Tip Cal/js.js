//Function for calculate tip
function Tipcalculator() {
    var amount = document.getElementById("amount").value;
    var feedback = document.getElementById("feedback").value;
    var numOfPeople = document.getElementById("spiltinto").value;

    //checking validation for amount
    var amountElement = document.getElementById("amount");
    if (!amountElement.checkValidity()) {
        document.getElementById("amountValidation").innerHTML = amountElement.validationMessage;
        return;
    }

    //checking validation for feedback
    if (feedback == 0) {
        alert("Slect an option");
        return;
    }
    //checking validation for number of people
    var numOfPeopleElement = document.getElementById("spiltinto");
    if (!numOfPeopleElement.checkValidity()) {
        document.getElementById("numberofpeopleValidation").innerHTML = numOfPeopleElement.validationMessage;
        return;
    }


    //to calculate tip for each person
    var total = (amount * feedback) / numOfPeople;
    
    total = total.toFixed(2);
    
    //to calculate total tip 
    var totalt = (amount * feedback);
    
    totalt = totalt.toFixed(2);

    //to display the tip for each person
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;

    //to display the total tip 
    document.getElementById("t_tipp").style.display = "block";
    document.getElementById("t_tip").innerHTML = totalt;

}

//Hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("t_tipp").style.display = "none";

//Onclick to call function
document.getElementById("calculate").onclick = function() {
    Tipcalculator();

};