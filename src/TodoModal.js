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

	//保存数据
	SaveNodify(todos){
		localStorage.setItem(this.STORE_KEY,JSON.stringify(todos));
		this.todos=todos;
		this.emit();
	}
	//添加项
	ADDTODO=(todo)=>{
		todo=Object.assign({},{id:Date.now(),completed:false},todo);//对象合并
		let todos=this.todos;
		todos.push(todo);
		this.SaveNodify(todos);
	}
	//勾选项
	toggle=(id)=>{
		let todos=this.todos;
		todos=todos.map((todo,index)=>{
			if (todo.id===id) {
				todo.completed=!todo.completed;
			}
			this.SaveNodify(todos);
		})
	}
	//删除项
	Remove=(id)=>{
		let todos=this.todos;
		let index=todos.findIndex(todo=>todo.id===id);//findIndex返回的是索引值
		todos.splice(index,1)//删除数组的一项
		//splice
		this.SaveNodify(todos);
	}
	toggleAll=(event)=>{
		let checked=event.target.checked;//event.target.checked获取true and  false
		let todos=this.todos;
		todos.map((todo,index)=>{
			return todo.completed=checked;
		})
		this.SaveNodify(todos);
	}
	del=()=>{
		let todos=this.todos;
		todos=todos.filter((todo)=>!todo.completed);
		console.log(todos);
		this.SaveNodify(todos);

	}
}
