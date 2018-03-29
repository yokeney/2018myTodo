import React from 'react'
import ReactDOM from 'react-dom'
import Todo from './Todo'
import TodoModal from './TodoModal'
// import TabNav from './TabNav'
// import  './tab.css'
let model=new TodoModal();
function render(){
	ReactDOM.render(<Todo model={model}/>,document.querySelector("#root"))
}
model.subscribe(render);
render()
