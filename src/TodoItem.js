import React,{Component} from "react";
 export default class TodoItem extends Component{
 	render(){
 		return (
			<li className="list-group-item">
				<div className="row">
					<div className="col-md-1">
						<input type="checkBox" checked={this.props.todo.completed} onChange={()=>this.props.toggle(this.props.todo.id)}/>
					</div>
					<div className="col-md-10" style={{textDecoration:this.props.todo.completed?"line-through":""}}>
						{this.props.todo.title}
					</div>
					<div className="col-md-1">
						<button className="btn btn-danger bnt-xs" onClick={()=>this.props.Remove(this.props.todo.id)} style={{paddingTop:0,paddingBottom:0,paddingRight:6,paddingLeft:6}} >X</button>
					</div>
				</div>
			</li>
 		)
 	}
 }
