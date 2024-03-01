const form = document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height ==='' || height< 0 || isNaN(height) ){
        results.innerHTML=`Please give valid height ${height}`;
    }
    else if(weight ==='' || weight< 0 || isNaN(weight) ){
        results.innerHTML=`Please give valid height ${weight}`;
    }
    else{
        const bmi=(weight/((height *height) /10000)).toFixed(2);
        let guide;
        
        if(bmi<=18.6){
            guide="You are underweight";
        }
        else if(bmi>18.6&&bmi<24.9){
            guide="Congrats u r healthy person";
        }
        else{
            guide="You are Overweight";
        }
       
        results.innerHTML=` Your BMI is:<span>${bmi}</span> and  ${guide}`;
    }


})