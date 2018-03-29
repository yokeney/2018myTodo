import React from 'react'
import TodoHeader from './TodoHeader'
import TodoFooter from './TodoFooter'
import TodoItem from './TodoItem'
import * as filterTypes from './FilterTypes'
export default class TodoApp extends React.Component{
	constructor(){
		super();
		this.state={filterType:filterTypes.ALL};//初始化默认状态
	}
	//勾选项
	toggle=(id)=>{
		let todos=this.state.todo;
		todos=todos.map((todo,index)=>{
			if (todo.id===id) {
				todo.completed=!todo.completed;
			}
			this.setState({todos})
		})
	}
	//删除项
	Remove=(id)=>{
		let todos=this.state.todo;
		let index=todos.findIndex(todo=>todo.id===id);//findIndex返回的是索引值
		todos.splice(index,1)//删除数组的一项
		//splice
		this.setState({todos})
	}
	toggleAll=(event)=>{
		let checked=event.target.checked;//event.target.checked获取true and  false
		let todos=this.state.todo;
		todos.map((todo,index)=>{
			return todo.completed=checked;
		})
		this.setState({todos})
	}
	changefilterType=(filterType)=>{
		this.setState({filterType})
	}
	del=()=>{
		let todos=this.state.todo;
		todos=todos.filter((todo)=>!todo.completed);
		console.log(todos);
		this.setState({todos})

	}
	render(){
		let todos=this.props.model.todos;
		let activeTodoCount=todos.reduce((count,todo)=>count+(todo.completed?0:1),0);
		//刷选
		let showTodos=todos.filter((todo)=>{
			switch (this.state.filterType) {
				case filterTypes.ACTIVITE:
					return todo.completed;//显示未完成的
				case filterTypes.COMPLICED:
					return !todo.completed;//显示完成的
				default:
					return true;
			}
		})
		let main=(
				<ul className="list-group">
				{todos.length>0?
				<li className="list-group-item"><input type="checkBox" checked={activeTodoCount===0} onChange={this.toggleAll}/>{activeTodoCount===0?"全选":"取消"}</li>
				:null}
					{
						showTodos.map((todo,index)=><TodoItem todo={todo} Remove={this.Remove} toggle={this.toggle} key={index}></TodoItem>)//里面item较复杂时单独
					}
				</ul>
		)
		return(
			<div className="container" style={{marginTop:100}}>
				<div className="row">
					<div className="col-md-6 col-md-offset-3">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<TodoHeader ADDTODO={this.props.model.ADDTODO} />
							</div>
							<div className="panel-body">
								{main}
							</div>
							<div className="panel-footer">
								<TodoFooter activeTodoCount={activeTodoCount}  changefilterType={this.changefilterType} Filter={this.state.filterType} del={this.del}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
