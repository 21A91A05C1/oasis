function Convert()
{
    var type=document.getElementById('type').value;
    var temp=parseFloat(document.getElementById('number').value);
    var celsius=document.getElementById('Cel');
    var farenheit=document.getElementById('far');
    var kelvin=document.getElementById('kel');

    if(type==='c')
    {
        celsius.value=parseFloat(temp.toFixed(2));
        let faren=(temp)*9/5+32;
        farenheit.value=parseFloat(faren.toFixed(2));
        let kelv=(parseFloat(temp)+273.15);
        kelvin.value=parseFloat(kelv.toFixed(2));
    }
    else if(type==='f')
    {
        let cels=((temp-32)*5)/9;
        celsius.value=parseFloat(cels.toFixed(2));
        farenheit.value=parseFloat(temp.toFixed(2));
        let kelv=(parseFloat(temp)-32)*5/9+273.15;
        kelvin.value=parseFloat(kelv.toFixed(2));
    }
    else if(type==='k')
    {
        let faren = (temp - 273.15) * 9 / 5 + 32;
        farenheit.value = parseFloat(faren.toFixed(2));

        let cels = (temp)-273.15;
        celsius.value = parseFloat(cels.toFixed(2));

        kelvin.value=parseFloat(temp.toFixed(2));
    }
}
function Reset()
{
    document.getElementById('number').value='';
    document.getElementById('Cel').value='';
    document.getElementById('far').value='';
    document.getElementById('kel').value='';
}

