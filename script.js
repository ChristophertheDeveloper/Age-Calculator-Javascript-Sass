let calculate_btn = document.getElementById('calculate_btn');
let calculate_age = document.getElementById('calculate_age');

calculate_btn.addEventListener('click',function(){

    let birth_date = document.getElementById('birth_date').value;
    birth_date = new Date(birth_date);
    
    let todayDate = new Date();
    
    totalAge = Date.now() - birth_date.getTime();

    ageYear = new Date(totalAge);
    ageYear = Math.abs(ageYear.getUTCFullYear() - 1970);

    calculate_age.innerHTML = "You Are " + ageYear + " Years Old" 


})