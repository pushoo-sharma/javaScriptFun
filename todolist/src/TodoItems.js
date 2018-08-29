import React,{ Component }from "react";
class TodoItems extends Component {
    createTasks(item){
        return <li
        key = {item.key}>{item.items}</li>
    }
    render(){
        var todoentries = this.props.entries;
        var listItems = todoentries.map(this.createTasks);
        return(
            <ul className = "thelist">
                {listItems}
            </ul>
        );
    }
}
export default TodoItems;