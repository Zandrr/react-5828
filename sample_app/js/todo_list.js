var React = require('react');
var TodoItems = require('./todo_items');


var TodoList = React.createClass({

	getInitialState: function(){
		return {
			items: [],
			text: ''
		}
	},

	addItem: function(){
		var toAdd = this.refs.inputAdd.getDOMNode().value;
		var existingList = this.state.items;
		existingList.push(toAdd);

		this.setState({
			items: existingList,
		});
		document.getElementById("listApp").value = '';
	},

	render: function(){
		return (
			<div> 
				<h1> Todo List!</h1>
				<TodoItems items={this.state.items} />
				<input id="listApp" type="text" ref="inputAdd" />
				<button type="submit" onClick={this.addItem}>Add</button>
			</div>
		);
	}
});

module.exports = TodoList