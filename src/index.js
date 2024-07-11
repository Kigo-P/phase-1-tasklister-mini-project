document.addEventListener("DOMContentLoaded", () => {
  // creating a function to prevent default behavior od the page and calling back the to do list
  document.getElementById("create-task-form").addEventListener('submit',(Event) =>{
    Event.preventDefault()
    toDoList(Event.target.newtaskdescription.value)
  } )
});

//fuction to create elements and append them, acts as a callback for the event listener above
function toDoList (todo){
  let ul = document.querySelector('ul')// creating elements
  let p = document.createElement('p')
  p.id = 'listed'
  let purchased = document.createElement('button')
  purchased.textContent = 'purchased'//adding text content
  purchased.style.padding = '3px'//adding styling
  purchased.style.margin = '3px'
  purchased.addEventListener('click', handlePurchased)
  let clear = document.createElement('button')
  clear.textContent = 'clear'
  clear.style.padding = '3px'
  clear.style.margin = '3px'
  clear.addEventListener('click', handleClear)//creating an event. must be done inside of the main function
  p.textContent = todo;
  ul.appendChild(p)
  p.appendChild(purchased)
  p.appendChild(clear)

}


function handlePurchased(e){
  e.target.parentNode.style.color = 'blue'
}
handlePurchased()

function handleClear(Event){
  Event.target.parentNode.remove()
}
