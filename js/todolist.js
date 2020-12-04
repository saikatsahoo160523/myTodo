//import mysql from 'mysql';
//alert('Hello My App World');
console.log('jquery is working');

//classes names
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH = "lineThrough";


//select the Element
const clear = document.querySelector(".clear");

//show todays date
const dateElement = document.getElementById("date");
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString('en-US', options);


let LIST = [];
let id = 0;

/*LIST = [{}, {}, ...];

LIST[0] - > {
    name: "Drink Coffee",
    id: 0,
    done: false,
    trash: false

}

LIST[1] - > {
    name: "Drink Coffee",
    id: 1,
    done: true,
    trash: false

}; */


//perform to-do-list
const list = document.getElementById("list");

function addToDo(toDo, id, done, trash) {


    if (trash) { return; }

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const text = `<li class="item">
                    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
                    <p class="text ${LINE}"> ${toDo} </p>
                    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
                  </li>
                 `;


    const position = "beforeend";

    list.insertAdjacentHTML(position, text);

}
//addToDo("drink Cofee", 1, true, false);


const input = document.getElementById("input");
// add an item to the list user the enter key
document.addEventListener("keyup",
    function(event) {
        if (event.keyCode == 13) {
            const toDo = input.value;
            // if the input is not empty
            if (toDo) {
                addToDo(toDo, id, false, false);
                //addToDo(toDo);
                //$('#input').load('toDoAdd.php');
                //
                var startTime = 10;

                var request;
                //alert("B done");

                //event.preventDefault(); //
                // /*
                request = $.ajax({
                    type: "POST",
                    url: "/toDoAdd.php",
                    async: false,
                    cache: false,
                    success: function() {
                        callbackfn('Hello My App World');
                    },
                    error: function() {
                        callbackfn('error - Hello My App World');
                    }

                });


                function callbackfn(data) {
                    alert(data);
                };

                /*
                                request.done(function() {
                                    alert("A done");
                                });
                                let Success = 1;

                                $.ajax({
                                    type: "POST",
                                    url: "toDoAdd",
                                    async: false, //add this
                                }).done(function(data) {
                                    Success = true;
                                }).fail(function(data) {
                                    Success = false;
                                });*/

                //let frm = ` <form action="toDoAdd.php" method="post">hhh </form>`;

                alert("A done");

                //$.get("toDoAdd.php");

                LIST.push({
                    name: toDo,
                    id: id,
                    done: false,
                    trash: false
                });

                alert("B done");
                //input.value = "";
                id++;
            }
            input.value = "";
            alert("C done");
        }
    });



// complete to do
function completeToDO(element) {

    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);

    LIST[element.id].done = LIST[element.id].done ? false : true;

}


// remove to do

function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true;

}

// target the item created dynamically

list.addEventListener("click", function(event) {
    let element = event.target;
    //const elementJob = element.target.attributes.job.value; //complete o delete
    const elementJob = element.attributes.job.value; //complete o delete
    if (elementJob == "complete") {
        completeToDO(element);
    } else if (elementJob == "delete") {
        removeToDo(element);
    }

});