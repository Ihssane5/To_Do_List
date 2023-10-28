Object_List = [];
const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const now = new Date();
let day = weekday[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
let number = now.getDate();
let month = now.getMonth() + 1;
let year = now.getFullYear();
const button = document.querySelector("#btn");
const input = document.getElementById("input");
const Ul = document.getElementById("ul");
button.addEventListener("click", add);
input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      add();
    }
  });
    

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}


minutes = addZero(minutes);
day = addZero(day);
number = addZero(number);
month = addZero(month);
hours = addZero(hours);

function date() {
    const date = document.querySelector("#date");
    date.innerHTML = day + "    " + number + "/"+month+"/"+year+ "  " + hours + ":" + minutes;
}

date();


function add() {
    const  text = input.value;
    // we test if the input is an empty value
    if (text == "" || text == " ") {
        modal();
    } else {
        let task = {
            task : text ,
            id : Object_List.length,
        };
       Object_List.unshift(task);
       input.value = " ";
       input.setAttribute("placeholer", "things to be done");
       display();
    }
}


function display() {
    // getting values from our list 
    const text = Object_List[0].task;
    const id = Object_List[0].id;
    // creating our li with their nested elements
    const li = document.createElement("li");
    const input = document.createElement("input");
    const  div = document.createElement("div");
    const icon = document.createElement("i");
    // bool 
        // setting attributes
    li.setAttribute("id", id);
    input.setAttribute("type", "checkbox");
    div.setAttribute("class", "task");
    icon.setAttribute("class", "fa-solid fa-trash-can");
    Ul.appendChild(li);
    li.appendChild(input);
    li.appendChild(div);
    li.appendChild(icon);
    // adding the text to the div
    div.innerHTML = text;
    icon.onclick =  function() {
                modal_delete_display(id);
                var modal = document.getElementById("modal_delete");
                let yesbtn = document.getElementById("yes");
                let nobtn = document.getElementById("no");
                yesbtn.addEventListener("click", function() {
                    modal.style.display = "none";
                    del(Object_List,id);
                });
                nobtn.addEventListener("click" ,function() {
                    modal.style.display = "none";
                });
                }
}
//delete the element 
function del(Object, index) {
    const element = document.getElementById(index);
    element.remove();  
    Object.splice(index,1);
}

// adding the time(done)
// modal window styling with html css and js(done ----> block user interaction)
function modal() {
    //getting the modal
    var modal = document.getElementById("modal");
    var btn = document.getElementById("ok");
    modal.style.display = "block";
    btn.onclick = function() {
        modal.style.display = "none";
    }
}
// enter key(done)
// prompt when deleting an element(done)

function modal_delete_display(id) {
    var modal = document.getElementById("modal_delete");
    const trash = document.getElementById(id);
    trash.addEventListener("click", function() {
        modal.style.display = "block";
    });
}

    
        
   
    
    
    
    

    
