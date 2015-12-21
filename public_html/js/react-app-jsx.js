/*global Vue, todoStorage */

(function (exports) {

	'use strict';
	var allTodos = [];

	var NewTodo = React.createClass({
		getInitialState: function() {
			return {newTodo: ''};
		},
		onKeyup: function(e) {
			var value = e.target.value && e.target.value.trim();
			if(value && e.keyCode == 13) {
				allTodos.push(value);
				this.setState({
					newTodo: ''
				});
				this.forceUpdate();
			}
		},
		onChange: function(e) {
			this.setState({newTodo: e.target.value});
		},
		render: function(){
			return (
					<header className="header">
						<h1>todos</h1>
						<input className="new-todo"
						autofocus autoComplete="off"
						placeholder="What needs to be done?"
						onChange={this.onChange}
						onKeyUp={this.onKeyup}
						value={this.state.newTodo}/>
					</header>
				   );
		},
	});

	var Footer = React.createClass({
		getInitialState: function() {
			return {todos: allTodos};
		},
		render: function() {
			return(
					<footer className="footer">
						<span className="todo-count">
							<strong>remaining</strong> {this.state.todos.length} left
						</span>
						<RemoveCompleted />
					</footer>
				  );
		}
	});

	var RemoveCompleted = React.createClass({
		onClick: function() {
			allTodos = [];
			this.forceUpdate();
		},
		render: function(){
			return (
					<button className="clear-completed" onClick={this.onClick}>
						Clear completed
					</button>
				   );
		}
	});

	var App = React.createClass({
		getInitialState: function() {
			return {todos: allTodos};
		},
		render: function() {
			return (<div><NewTodo todos={this.state.todos} /><Footer todos={this.state.todos} /></div>);
		}
	});

	ReactDOM.render(<App />, document.getElementById("todoapp"));

})(window);
