function resetButton(){
    let one = document.getElementById('first name');
    if(one.value != ""){
        one.value = "";
    }
    let two = document.getElementById('last name');
    if(two.value!=""){
        two.value = "";
    }
    let three = document.getElementById('email');
    if(three.value!=""){
        three.value="";
    }
    let four = document.getElementById('job role');
    if(four.selectedIndex!=0){
        four.selectedIndex = 0;
    }
    let five = document.getElementById('address');
    if(five.value!=""){
        five.value="";
    }
    let six = document.getElementById('city');
    if(six.value!=""){
        six.value="";
    }
    let seven = document.getElementById('pincode');
    if(seven.value!=""){
        seven.value="";
    }
    let eight = document.getElementById('date');
    if(eight.value!=""){
        eight.value="dd-mm-yyyy";
    }
    let nine = document.getElementById('file');
    if(nine.value!=""){
        nine.value="";
    }
    

}