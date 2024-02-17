var quoteArray = [];
var index = 0;
var textPosition = 0; /*where in the quote we are at */
var flag = true;
var destination = document.getElementById("typedtext");

window.addEventListener('load', typewriter);

/*var category = 'happiness'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
    headers: { 'X-Api-Key': 'iG3xi+UDKUNYkFvz6SU8Lw==Up1nNjNtESgudeA4'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        quoteArray[index] = response.json();
        return response.json();
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
*/
/*function loadQuote()
{
    const url = "https://api.quotable.io/random";

    fetch(url)

    .then(response =>{
        if(response.ok)
            return response.json();
        else    
            console.log(response.status);
    })

    .then(data =>{
        quoteArray[index] = data.content;
        //in array
    })
}*/

//display on screen

function typewriter()
{
    if(flag) //if flag set to true, get the quote
    {
        quoteArray[index] += ' ';
        flag = false;
    }

    destination.innerHTML = quoteArray[index].substring(0, textPosition) + '<span>\u25AE<span>';
    //everytime it is called, increase text posiition to 1
    if(textPosition++ != quoteArray[index].length)
    {
        setTimeout('typewriter()', 100);
    }
    else
    {
        //if text position equal to length of new quote, get a new quote
        quoteArray[index] = ' ';
        setTimeout('typewriter()', 3000);
        textPosition = 0;
        flag = true; //set back to true, generate a new quote
    }
}

