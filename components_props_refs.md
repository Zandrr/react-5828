## Components

In React, components are the Frankenstein pieces, or Lego blocks, whatever floats your boat.  They are reusable blocks of code that will *render* blocks.

```javascript

var App = React.createClass({
	render: function(){
		return (
			<div>
				<h1> Hello, World! </h1>
				<p> This is Alex </p>
			</div>
		);
	}
});

React.render(< App />, document.body)

```

Above is our most basic component named App. We are rendering it by applying our App to our target (document.body).  Notice the enclosing div I put in the return statement.  This is because we can only return one node.  If I were to remove the div tags, we would get an error.


## Props


Okay, let's take a look at our first prop!


```javascript

var App2 = React.createClass({
	render: function(){
		return (
			<h1> Hello World </h1>
			<p> My name is, {this.props.name}</p>
		);
	}
});

React.render(< App2 name="Alex" />, document.body)

```

We can also define the types of our props, their default values, and whether or not they're required:


```javascript

getDefaultProps: function(){
	return {
		name: '',
		age: 0
	}
}

propTypes: {
	name: React.PropsType.string.required,
	age: React.PropsType.number

}

var App3 = React.createClass({
	render: function(){
		return (
			<h1> Hello World </h1>
			<p> My name is, {this.props.name}</p>
		);
	}
});

React.render(< App3 />, document.body)


```

## State

Unlike props, which are meant to be passed into components as static values or methods, state is meant to be maintained and updated by our component.



```javascript


getInitialState: function(){
	return{
		name: 'Alex',
		age: 22
	}
},

var App4 = React.createClass({
	render: function(){
		return (
			<h1> Hello World </h1>
			<p> My name is, {this.state.name}</p>
			<p>And I am {this.state.age} years old</p>
		);
	}
});

React.render(< App4 />, document.body)

```


Simple, right?!  We can also define helper functions so that we can see our one way state binding.

```javascript


getInitialState: function(){
	return{
		txt: 'Alex',
		age: 22
	}
},

update: function(e){
	this.setState({txt: e.target.value});
},

var App5 = React.createClass({
	render: function(){
		return (
			<h1> Hello World </h1>
			<input type="text" onChange={this.update}/>
			<h1>{this.state.txt}</h1>
		);
	}
});

React.render(< App5 />, document.body)


```


Woah!  State binding!  Now everything we type into the input box will show up in the second h1 tag.

## Refs

Refs are a way to get at the values of certain components and apply functions to them.

Check out the [Refs Example](refs-example/index.html).

> "*Refs (references) are especially useful when you need to: find the DOM markup rendered by a component (for instance, to position it absolutely), use React components in a larger non-React application, or transition your existing codebase to React.*" - Some Facebook employee
