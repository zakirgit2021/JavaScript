/* var h = document.createElement('h1')
var myValue = document.createTextNode ('Hello World')
h.appendChild(myValue)
document.querySelector('h1').appendChild(h); */

var ul = document.getElementById('list');
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click', addItem)

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem)

function addItem(){
    var input = document.getElementById('input');
    var item = input.value;
    ul = document.getElementById('list');
    var textnode = document.createTextNode(item);

    if (item === ''){
      var parElement = document.getElementById("myPar");
      var textToAdd = document.createTextNode("Add a Task");
      parElement.appendChild(textToAdd);
      return false;

    }
    else{
      //create li
      li = document.createElement('li');

       //create chekbox
      var checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.setAttribute('id', 'check');
      
       //create label
      var label = document.createElement('lable');
      label.setAttribute('for', 'item')


      ul.appendChild(label);
      li.appendChild(checkbox);
      label.appendChild(textnode);
      li.appendChild(label);
      ul.insertBefore(li,ul.childNodes[0]);
  
      //li.className = 'visual';

      setTimeout(()=> {
      li.className = 'visual';
      },6)

      input.value = ''


    }

}
