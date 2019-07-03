/*Simple To Do list, 
version 1.0
without svistoperdelki
*/

"use strict"

class ToDO {

    constructor(listName, container_id) {
        this.listName = listName;
        this.container = document.getElementById(container_id);
        this.createList();
    }

    createList() {
        let containerHead = document.createElement('div');
        containerHead.className = "containerHead"
        container.appendChild(containerHead);
        let headerEl = [
            ['h2', 'listHeaderText'],
            ['input', 'listInput'],
            ['div', 'listButton'],
        ];
        for (let i = 0; i < headerEl.length; i++) {
            let el = document.createElement(headerEl[i][0]);
            el.className = headerEl[i][1];
            containerHead.appendChild(el);
            if (headerEl[i][1] == 'listHeaderText') el.innerText = this.listName;
            if (headerEl[i][1] == 'listButton') {
                el.innerText = "ADD";
                el.addEventListener('click', this.addLi)
            }
            if (headerEl[i][1] == 'listInput') {
                el.setAttribute('placeholder', "Title...");
            }
        }
        let ul = document.createElement('ul');
        ul.className = "toDoUl";
        this.container.appendChild(ul)
    }

    addLi() {
        let text = document.querySelector('.listInput');
        if (text.value != "") {
            let ul = document.querySelector('.toDoUl');
            let li = document.createElement('li');
            li.innerText = text.value;

            let close = document.createElement("span");
            close.className = "closeLi";


            ul.appendChild(li);
            ul.lastChild.appendChild(close);
            close.appendChild(document.createTextNode("\u00D7"));
            close.addEventListener('click', function (e) {
                e.target.parentNode.remove();
            })
            text.value = "";

            li.addEventListener('click', function (e) {
                if (e.target.className == "") {
                    e.target.className = "checked";
                } else {
                    e.target.className = ""
                }
            });

        } else {
            text.setAttribute("placeholder", "Please, enter your goal")
        }
    }
}

let todoshka = new ToDO('Simple ToDo list (Class)', 'container');