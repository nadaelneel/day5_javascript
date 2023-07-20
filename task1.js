var xml = new XMLHttpRequest();
xml.open('Get' , 'http://127.0.0.1:5500/rockbands.json')
xml.send();
console.log(xml.readyState);
var arr1;


// bans
var arr2;
var band = document.getElementById("ban");
var art = document.getElementById("artist") ;
xml.onreadystatechange = function ()
{ 
    if (xml.readyState == 4 && xml.status == 200) {
        arr1 = JSON.parse(xml.responseText);
        arr2 =Object.keys(arr1);
        // assign values to Bans options
        for(var c =0 ; c<arr2.length ; c++)
        {
            band.innerHTML+=` <option  value = "${arr2[c]}">${arr2[c]} </option>`;
        }
    band.addEventListener("change" , function()
    {
        
        art.innerHTML = " ";
        if(band.value == "beatles")
        {
            art.innerHTML = " ";
            for(var x =0 ; x< arr1.beatles.length ;x++)
            {
                
                art.innerHTML +=` <option  value = "${arr1.beatles[x].name}">${arr1.beatles[x].name} </option>`;
            }
        }
        else if(band.value == "stones")
        {
  
            art.innerHTML = " "; 
            for(var y =0 ; y< arr1.stones.length ;y++)
            {
                 art.innerHTML +=` <option  value = "${arr1.stones[y].name}">${arr1.stones[y].name} </option>`;
            }
        }
        else if(band.value == "genesis")
        {
           
            art.innerHTML = " "; 
            for(var z =0 ; z< arr1.genesis.length ;z++)
            {
                 art.innerHTML +=` <option  value = "${arr1.genesis[z].name}">${arr1.genesis[z].name} </option>`;
            }
        }
        else if(band.value == "eagles")
        {
            art.innerHTML = " "; 
            for(var w =0 ; w< arr1.eagles.length ;w++)
            {
                art.innerHTML +=` <option  value = "${arr1.eagles[w].name}">${arr1.eagles[w].name} </option>`;
                
            }
        }
        else
        {
            art.innerHTML = ` <option  value = "select">select </option>`; 
        }
    })
    // artist change
    var link;
    art.addEventListener("change" , function()
    {
        for(var t=0 ; t<arr1.beatles.length ; t++ ){
            if(art.value == arr1.beatles[t].name)
            {
                link = arr1.beatles[t].value;
                open(link , "" , "_blank");
            }
        }
        for(var t=0 ; t<arr1.stones.length ; t++ )
        {
             if(art.value == arr1.stones[t].name)
            {
                 link = arr1.stones[t].value;
                open(link , "" , "_blank");
            }
        }
        for(var t=0 ; t<arr1.genesis.length ; t++ )
        {
            if(art.value == arr1.genesis[t].name)
            {
                link = arr1.genesis[t].value;
                open(link , "" , "_blank");
            }
        }
        for(var t=0 ; t<arr1.eagles.length ; t++ )
        {
            if(art.value == arr1.eagles[t].name)
            {
                link= arr1.eagles[t].value;
                open(link, "" , "_blank");
            }
          
        }
    })


        
      
}   
}
