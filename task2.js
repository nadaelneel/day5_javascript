var xhr = new XMLHttpRequest();
xhr.open('Get' , 'https://jsonplaceholder.typicode.com/todos ')
xhr.send();
console.log(xhr.readyState);
var arr;
xhr.onreadystatechange = function()
{
    if(xhr.readyState == 4 && xhr.status == 200)
    {
        arr = JSON.parse(xhr.responseText);
        console.log(arr);
        for(var x= 0 ; x< arr.length ; x++)
        {
            if(arr[x].completed == true)
            {
                document.getElementById("mydiv").innerHTML +=` <tr><td>${arr[x].userId}</td><td>${arr[x].id}</td><td> ${arr[x].title}</td></tr>`;
            }
            
        }
    }
}
