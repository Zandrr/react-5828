var React = require('react');

var TodoItems = React.createClass({

	render: function() {
		var list_items = this.props.items.map(function(item, index){
			return(
				<div>
					<li>{item}</li>
				</div>
				);
		});
		return (
			<div>
				{list_items}
			</div>
		);
	}
});

module.exports = TodoItems;
