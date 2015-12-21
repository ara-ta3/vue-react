/*global Vue, todoStorage */

'use strict';

(function (exports) {

	'use strict';
	var allTodos = [];

	var NewTodo = React.createClass({
		displayName: 'NewTodo',

		getInitialState: function getInitialState() {
			return { newTodo: '' };
		},
		onKeyup: function onKeyup(e) {
			var value = e.target.value && e.target.value.trim();
			if (value && e.keyCode == 13) {
				allTodos.push(value);
				this.setState({
					newTodo: ''
				});
				this.forceUpdate();
			}
		},
		onChange: function onChange(e) {
			this.setState({ newTodo: e.target.value });
		},
		render: function render() {
			return React.createElement(
				'header',
				{ className: 'header' },
				React.createElement(
					'h1',
					null,
					'todos'
				),
				React.createElement('input', { className: 'new-todo',
					autofocus: true, autoComplete: 'off',
					placeholder: 'What needs to be done?',
					onChange: this.onChange,
					onKeyUp: this.onKeyup,
					value: this.state.newTodo })
			);
		}
	});

	var Footer = React.createClass({
		displayName: 'Footer',

		getInitialState: function getInitialState() {
			return { todos: allTodos };
		},
		render: function render() {
			return React.createElement(
				'footer',
				{ className: 'footer' },
				React.createElement(
					'span',
					{ className: 'todo-count' },
					React.createElement(
						'strong',
						null,
						'remaining'
					),
					' ',
					this.state.todos.length,
					' left'
				),
				React.createElement(RemoveCompleted, null)
			);
		}
	});

	var RemoveCompleted = React.createClass({
		displayName: 'RemoveCompleted',

		onClick: function onClick() {
			allTodos = [];
			this.forceUpdate();
		},
		render: function render() {
			return React.createElement(
				'button',
				{ className: 'clear-completed', onClick: this.onClick },
				'Clear completed'
			);
		}
	});

	var App = React.createClass({
		displayName: 'App',

		getInitialState: function getInitialState() {
			return { todos: allTodos };
		},
		render: function render() {
			return React.createElement(
				'div',
				null,
				React.createElement(NewTodo, { todos: this.state.todos }),
				React.createElement(Footer, { todos: this.state.todos })
			);
		}
	});

	ReactDOM.render(React.createElement(App, null), document.getElementById("todoapp"));
})(window);

