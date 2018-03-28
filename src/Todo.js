import React from 'react'
import TodoHeader from './TodoHeader'
import TodoBody from './TodoBody'
import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'
export default class TodoApp extends React.Component{
	ADDTODO=(todo)=>{
		todo=Object.assign({},{id:Date.now(),completed:false},todo);//对象合并
		let todos=this.state.list;
		todos.push(todo);
		this.setState({todos})//往数组重新赋值
	}
	constructor(){
		super();
		this.state={list:[{id:Date.now(),title:"react",completed:false},{id:Date.now(),title:"vue",completed:false}]};//初始化默认状态
	}
	render(){
		let main=(
			<ul className="list-group">
				{
						this.state.list.map((todo,index)=><TodoItem todo={todo} key={index}></TodoItem>)
				}
			</ul>
		)
		return(
			<div className="container" style={{marginTop:100}}>
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<TodoHeader ADDTODO={this.ADDTODO}/>
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
