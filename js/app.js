window.onload = function(){


function pusher(num, string, array, where) {
  for( var k = 0; k < num; k++){
    array.push(string);
  }
  for( var j = 0; j < ((((counter*2) - 1)- num)/2); j++) {
    array.push(" ");
    array.shift(" ");
  }
  layer.innerHTML = layerArray.join('');
  where.appendChild(layer);
}

var counter = 0;

function christmasTree(num, where) {
  var layer = document.createElement('pre');
  var layerArray = [];
  var width = (counter*2) - 1;
  if (counter === 0){
    pusher(1, "*", layerArray, where);
    counter++;
  }
  if (counter === num ) {
    pusher(1,"| |", layerArray, where);
    return;
  }
  pusher(width, "0", layerArray, where);
  counter++;
  christmasTree(num, where);
}

christmasTree(10, document.body);







};