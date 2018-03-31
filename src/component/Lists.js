import React from 'react';

class ListItem extends React.Component {
	render() {
		return (
			<li>{this.props.value}</li>
		);
	}
}

class NumberList extends React.Component {
	render() {
		const numbers = this.props.numbers;
		const listItems = numbers.map((number) =>
			<ListItem key={number.toString()} value={number} />
		);

		return (
			<ul>
				{listItems}
			</ul>
		);
	}
}

export default NumberList;