import React,{Component} from "react";
import * as filterTypes from './FilterTypes'
 export default class TodoFooter extends Component{
     render(){
         return (
             <div className="row">
                 <div className="col-xs-3 text-center">
                    你还有{this.props.activeTodoCount}代办事项
                 </div>
                 <div className="col-xs-6 text-center">
                    <button className={`btn ${this.props.Filter===filterTypes.ALL?"btn-success":"btn-danger"}`} onClick={()=>this.props.changefilterType(filterTypes.ALL)}>全部</button>
                    <button className={`btn ${this.props.Filter===filterTypes.ACTIVITE?"btn-success":"btn-danger"}`} style={{marginLeft:10}} onClick={()=>this.props.changefilterType(filterTypes.ACTIVITE)}>已完成</button>
                    <button className={`btn ${this.props.Filter===filterTypes.COMPLICED?"btn-success":"btn-danger"}`} style={{marginLeft:10}} onClick={()=>this.props.changefilterType(filterTypes.COMPLICED)}>未完成</button>
                 </div>
                 <div className="col-xs-3 text-center" ><button className="btn btn-md btn-danger" onClick={this.props.del}>删除已完成</button></div>
             </div>
         )
     }
 }
