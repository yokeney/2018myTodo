import React,{Component} from "react";
 export default class TodoHeader extends Component{
	 handle=(event)=>{
		 if (event.keyCode===13) {
			 event.preventDefault();
		 	let title=event.target.value;
			console.log(event.target.value);
			this.props.ADDTODO({title});
			event.target.value="";
		 }
	 }
 	render(){
 		return (
			<form >
				<div className="form-group">
					<input type="text" className="form-control"   onKeyDown={this.handle} />
				</div>
			</form>
 		)
 	}
 }
