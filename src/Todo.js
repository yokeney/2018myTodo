import React from 'react'
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody'
import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'
export default class TodoApp extends React.Component{
	constructor(){
		super();
		this.state={list:[{id:Date.now(),title:"react",completed:false},{id:Date.now(),title:"vue",completed:true}]};//初始化默认状态
	}
	ADDTODO=(todo)=>{
		console.log(todo);
		todo=Object.assign({},{id:Date.now(),completed:false},todo);//对象合并
		let todos=this.state.list;
		todos.push(todo);
		this.setState({todos})//往数组重新赋值
	}
	toggle=(id)=>{
		let todos=this.state.list;
		todos=todos.map(todo=>{
			if (todo.id===id) {
				todo.completed=!todo.completed;
			}
			this.setState({todos})
		})
	}
	render(){
		let main=(
			<ul className="list-group">
				{
						this.state.list.map((todo,index)=><TodoItem todo={todo} toggle={this.toggle} key={index}></TodoItem>)//里面item较复杂时单独
				}
			</ul>
		)
		return(
			<div className="container" style={{marginTop:100}}>
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<TodoHeader ADDTODO={this.ADDTODO} />
							</div>
							<div className="panel-body">
								{main}
							</div>
							<div className="panel-footer">
								<TodoFooter/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
