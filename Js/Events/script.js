// const headingObject = document.getElementById('heading')

// headingObject.innerHTML = 'Hello Wold'

// console.log(headingObject)
// const headingObject = document.getElementById('heading')
// const listObject = document.getElementById('list')

// const arr  = ['element1','element2','element3','element4','element5']

// const textNode = document.createTextNode('Hello World')


// arr.forEach((element) => {
//     const li = document.createElement('li')
//     li.innerHTML = element
//     listObject.appendChild(li)
// })
// const toggleTheme = () => {
//     console.log('toggling theme')
// }

///event
const body = document.querySelector('body')
const  button = document.querySelector('button')

const callback = (event)=>{
    console.log(event)
}

button.addEventListener('click', callback)