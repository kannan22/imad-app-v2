console.log('Loaded!');

//change the text of center text
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//move image
var img = document.getElementById('madi');
img.onclick = function ()
{
var interval = setInterval(moveRight, 100);
};
