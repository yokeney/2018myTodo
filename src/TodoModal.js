export default class TodoModal{
	constructor(){
		//向localStorage写入时用key
		this.STORE_KEY="TODOS";
		this.todos=localStorage.getItem(this.STORE_KEY)?JSON.parse(localStorage.getItem(this.STORE_KEY)):[];//存放所有的todos
		//这里可以注册监听器，当模型数据发生
		this.listeners=[];
	}
	//订阅on(type,listener);emit
	subscribe(listener){
		this.listeners.push(listener);
	}
	emit(){
		this.listeners.forEach(listener=>listener())
	}
	//添加项
	ADDTODO=(todo)=>{
		todo=Object.assign({},{id:Date.now(),completed:false},todo);//对象合并
		let todos=this.todos;
		todos.push(todo);
		localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
		this.emit();
	}
}
