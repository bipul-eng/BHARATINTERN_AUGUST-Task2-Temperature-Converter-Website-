let celsiusinput=document.querySelector('#bipul')
let fahrenheitinput=document.querySelector('#bipuls')
let kelvininput=document.querySelector('#bipuli')
 
let btn=document.querySelector('#kink')

function roundnumber(number)
{
    return Math.round(number*100)/100
}

celsiusinput.addEventListener('input',function()
    {
        let ctemp=parseFloat(celsiusinput.value);
        let ftemp=(ctemp*(9/5))+32;
        let ktemp=ctemp*273.15;
          
        fahrenheitinput.value=roundnumber(ftemp);
        kelvininput.value=roundnumber(ktemp);
    }
);
fahrenheitinput.addEventListener('input',function()
    {
        let ftemp=parseFloat(fahrenheitinput.value);
        let ctemp=(ftemp-32)*(5/9);
        let ktemp=(ftemp-32)*(5/9)*273.15;
          
        celsiusinput.value=roundnumber(ctemp);
        kelvininput.value=roundnumber(ktemp);
    }
);
kelvininput.addEventListener('input',function()
    {
        let ktemp=parseFloat(kelvininput.value);
        let ctemp=ktemp-273.15;
        let ftemp=(ctemp*273.15)*(9/5)*32;
          
        celsiusinput.value=roundnumber(ftemp);
        fahrenheitinput.value=roundnumber(ktemp);
    }
);
btn.addEventListener('click',function()
{
    celsiusinput.value="";
    fahrenheitinput.value="";
    kelvininput.value="";
});