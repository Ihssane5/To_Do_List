
## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
in this project i have built a  responsive web to-do list with adding,deleting and checking tasks, it prompt the user  if he didn't type something, and alert him before deleting his tasks through a styled modal window.

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![Alt text](<./screenshots/desktop-design.png>)
![Alt text](<./screenshots/mobile-design.png>)

### Links

- Solution URL: [https://github.com/Ihssane5/To_Do_List.git]
- Live Site URL: [https://ihssane5.github.io/To_Do_List/]

## My process
My process begun with chosing the style of my apps,  and then make it real using html and css, then i moved to making it intercative using DOM, 

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- java script

### What I learned
 working in this challenge gave me a huge insight into DOM javascript,and teached me how to search for informations and try a lot because at some level it might work, as well as how i can make every single ideas  happens just by a little bit of patience on my self.
I'm really proud of the work i have done, in a special manner the style of my modal window and the interactivity i added to it.
 
```css
#modal {
    display: none; /*hidden by default*/
    width: 500px;
    height: 150px;
    z-index: 1;
    border-radius: 10px;
    border: 2px solid #D3A64C;
    overflow: auto;        /*enable scrolling if needed*/
    background-color: white;
    position: fixed;
    top: 6px;
    margin: auto;
    
}
```
```js
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


### Continued development

at this stage i want to solidify my knowledge in frontend with building more projects.


## Acknowledgments

I would like to thanks my friend who encourged me, and who supported me the moment i shed light on my work
