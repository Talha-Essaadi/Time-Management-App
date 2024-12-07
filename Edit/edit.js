const input = document.getElementById("input");
const addButton = document.getElementById("add");




var tasksKey = [];
var tasks = [];
var completeTasks= [];
//alert(localStorage.key())
var item = localStorage.length;
let trucking = 0;
//localStorage.clear() 
function getLocalKey() {
    for (let i = 0; i < localStorage.length; i++) {

        let key = localStorage.key(i);
       
        

        if (!isNaN(Number(key))) {
            tasksKey.push(key);
            // alert("its a number");
           } else {
            completeTasks.push(key);
             //alert("its not a  number");
           }
           tasksKey.sort((a, b) => a - b)
       
    }
}
getLocalKey() ;


/*

for (let i = 0; i < localStorage.length; i++) {
  let keyt = localStorage.key(i);
  if (!isNaN(Number(keyt))) {
   // alert("its a number");
  } else {
    //alert("its not a  number");
  }

  //alert(keyt)

}

*/
//alert(tasksKey[0]);


for (let i = 0; i < tasksKey.length; i++) {
    

    ///////////////////////////
    let value = localStorage.getItem(tasksKey[i]);
    // alert(localStorage.getItem(tasksKey[i]));
    
   
    //
    const newTask = document.createElement("li");
    newTask.setAttribute("id", tasksKey[i]);
    newTask.classList.add("biko");
    const span = document.createElement("span");

    span.textContent = value;
    //alert(tasksKey[i]);

  ////////////
  const complete = document.createElement("button");
    complete.textContent = "complete";
    complete.classList.add("button");
    complete.addEventListener("click", function () {
        span.style.textDecoration = "line-through";
           
       
        let truck = newTask.getAttribute("id");
        let keyValue = localStorage.getItem(truck);
        localStorage.setItem(truck+"-",keyValue);
        localStorage.removeItem(truck);
        window.location.reload();
        


     //  alert(keyValue);
    });

//////////// Complete ^^^^^^^

///////////
    const UpdateButton = document.createElement("button");
    UpdateButton.textContent = "Update";
    UpdateButton.classList.add("button");
    UpdateButton.addEventListener("click", function () {
        //span.style.textDecoration = "line-through";
        const update = document.querySelector(".update");
        update.style.display = "flex";
        const updateInput = document.getElementById("update-input");
        const save = document.getElementById("save");
        save.addEventListener("click", function  () {
            let value = updateInput.value ;
            let truck = newTask.getAttribute("id")
            localStorage.setItem(truck,value);
            update.style.display = "none";
            window.location.reload();
            
        })
       const cancel = document.getElementById("cancel");
       cancel.addEventListener("click", function () {
        update.style.display = "none";
       })
    });

    ///// Update ^^^^^^^

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.classList.add("button", "delete");
    deleteButton.addEventListener("click", function () {
        tasksContainers.removeChild(newTask);
        // localStorage.removeItem(?);
        let truck = newTask.getAttribute("id");
        localStorage.removeItem(truck);
        window.location.reload();
        


    });


    newTask.appendChild(deleteButton);

    newTask.appendChild(UpdateButton);
    newTask.appendChild(complete);

    newTask.appendChild(span);
    const tasksContainers = document.getElementById("tasksContainers");
    tasksContainers.appendChild(newTask);
  
    ////////////////
  
}

///////////////////////////////////////////////////////
///////////////////////////////////////////////////
for (let i = 0; i < completeTasks.length; i++) {
    

    ///////////////////////////
    let value = localStorage.getItem(completeTasks[i]);
    // alert(localStorage.getItem(completeTasks[i]));
    
   
    //
    const newTask = document.createElement("li");
    newTask.setAttribute("id", completeTasks[i]);
    newTask.classList.add("biko");
    const span = document.createElement("span");

    span.textContent = value;
    //alert(completeTasks[i]);
    span.style.textDecoration = "line-through";
  ////////////
  const complete = document.createElement("button");
    complete.textContent = "complete";
    complete.classList.add("button");
    complete.addEventListener("click", function () {
        span.style.textDecoration = "none";
           
       
        let truck = newTask.getAttribute("id");
        let newTruck = truck.replace('-','');
        
        let keyValue = localStorage.getItem(truck);
        
        localStorage.setItem(newTruck ,keyValue);
        localStorage.removeItem(truck);
        window.location.reload();
        


      // alert(newTruck);
    });

//////////// Complete ^^^^^^^

///////////
    const UpdateButton = document.createElement("button");
    UpdateButton.textContent = "Update";
    UpdateButton.classList.add("button");
    UpdateButton.addEventListener("click", function () {
        //span.style.textDecoration = "line-through";
        const update = document.querySelector(".update");
        update.style.display = "flex";
        const updateInput = document.getElementById("update-input");
        const save = document.getElementById("save");
        save.addEventListener("click", function  () {
            let value = updateInput.value ;
            let truck = newTask.getAttribute("id")
            localStorage.setItem(truck,value);
            update.style.display = "none";
            window.location.reload();
            
        })
       const cancel = document.getElementById("cancel");
       cancel.addEventListener("click", function () {
        update.style.display = "none";
       })
    });

    ///// Update ^^^^^^^

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.classList.add("button", "delete");
    deleteButton.addEventListener("click", function () {
        tasksContainers.removeChild(newTask);
        // localStorage.removeItem(?);
        let truck = newTask.getAttribute("id");
        localStorage.removeItem(truck);
        window.location.reload();
        


    });


    newTask.appendChild(deleteButton);

    newTask.appendChild(UpdateButton);
    newTask.appendChild(complete);

    newTask.appendChild(span);
    const tasksContainers = document.getElementById("tasksContainers");
    tasksContainers.appendChild(newTask);
  
    ////////////////
  

}
/*
let truck = localStorage.key(0) ;
let newTruck = truck.replace('-','');
alert(newTruck); */
//////////////////////////////////////////////////////
///////////////////////////////////////////////////////


addButton.addEventListener("click", createTask);

function createTask() {

    if (input.value === "") {
        alert("Enter un valeur");
        return;
    }

    function generateKey() {
        let largestKey = tasksKey[tasksKey.length - 1];

        
        if (tasksKey.length === 0) {
            return 1;

        } else {
            largestKey++;
            return largestKey;
        }

       
    }
    const inputValue = input.value;
    tasks.push(inputValue);
    item++;
    localStorage.setItem(generateKey(),inputValue);
    let key = generateKey() ;


    const newTask = document.createElement("li");
    newTask.setAttribute("id", item);
    newTask.classList.add("biko");
    const span = document.createElement("span");
    

    span.textContent = inputValue;

  ////////////
  const complete = document.createElement("button");
    complete.textContent = "complete";
    complete.classList.add("button");
    complete.addEventListener("click", function () {
        span.style.textDecoration = "line-through";
      


        
        let truck = newTask.getAttribute("id");
        let keyValue = localStorage.getItem(truck);
        localStorage.setItem(truck+"-",keyValue);
        localStorage.removeItem(truck);
        window.location.reload();
        

    });

//////////// Complete ^^^^^^^

   //////////  >>>>>>>>
   const UpdateButton = document.createElement("button");
   UpdateButton.textContent = "Update";
   UpdateButton.classList.add("button");
   UpdateButton.addEventListener("click", function () {
       //span.style.textDecoration = "line-through";
       const update = document.querySelector(".update");
       update.style.display = "flex";
       const updateInput = document.getElementById("update-input");
       const save = document.getElementById("save");
       save.addEventListener("click", function  () {
           let value = updateInput.value ;
           let truck = newTask.getAttribute("id")
           localStorage.setItem(truck,value);
           update.style.display = "none";
           window.location.reload();
           
       })
      const cancel = document.getElementById("cancel");
      cancel.addEventListener("click", function () {
       update.style.display = "none";
      })
   });
   //////////// ^^^^^^^

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "delete";
    deleteButton.classList.add("button", "delete");
    deleteButton.addEventListener("click", function () {
        tasksContainers.removeChild(newTask);
        let truck = newTask.getAttribute("id")
        localStorage.removeItem(truck);
        
        //

    });





    newTask.appendChild(deleteButton);
    newTask.appendChild(UpdateButton);
    newTask.appendChild(complete);
    newTask.appendChild(span);
    const tasksContainers = document.getElementById("tasksContainers");
    tasksContainers.appendChild(newTask);




    input.value = "";
    getLocalKey();
}











/*
const input = document.getElementById("input");
const task = document.getElementById("tasksContainers");

task.textContent = localStorage.getItem("value1");
input.addEventListener("keyup" , display) ;

const tasks = [] ;

function display () {


    localStorage.setItem("value1" , input.value);
    task.textContent = localStorage.getItem("value1");

 
    
}
*/