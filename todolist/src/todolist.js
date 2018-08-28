import React ,{ Component } from "react";
import TodoItems from "./TodoItems";
class TodoList extends Component{
    constructor(props){
        super(props);
         this.state = {
             items : [],
         };
        this.addElement = this.addElement.bind();
    }
    addElement(e){
        if(this._inputElement.value !== ""){
            var newItem = {
                text : this._inputElement.value,
                key : Date.now(),
            };
        }
        this.setState((prevState)=>{
            return {
                items : prevState.items.concat(newItem)
            };
        });
        this._inputElement = "";
        console.log(this.state.items);
        e.preventDefault();
    }
    render (){
        return(
            <div className = "todoListMain">
                <div className = "header">
                    <form onSubmit ={this.addElement}>
                        <input
                        ref = {(a) => {this._inputElement = a}} 
                        placeholder = "Entre here !!">
                        </input>
                        <button type = "submit">
                        Submit
                        </button>
                    </form>
                </div>
                <TodoItems entries = {this.state.items}/>
            </div>
        );
    }
} 
export default TodoList;