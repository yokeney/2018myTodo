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



	changefilterType=(filterType)=>{
		this.setState({filterType})
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
				<li className="list-group-item"><input type="checkBox" checked={activeTodoCount===0} onChange={this.props.model.toggleAll}/>{activeTodoCount===0?"全选":"取消"}</li>
				:null}
					{
						showTodos.map((todo,index)=><TodoItem todo={todo} Remove={this.props.model.Remove} toggle={this.props.model.toggle} key={index}></TodoItem>)//里面item较复杂时单独
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
								<TodoFooter activeTodoCount={activeTodoCount}  changefilterType={this.changefilterType} Filter={this.state.filterType} del={this.props.model.del}/>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
