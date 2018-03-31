import React from 'react';
import './App.css';
import Welcome from './Welcome';
import Clock from './Clock';
import Toggle from './Toggle';
import ToggleAltBinding from './ToggleAltBinding';
import {UserGreeting, GuestGreeting, Greeting, LoginControl} from './Login';
import Page from './PreventRendering';
import NumberList from './Lists';
import {NameForm, EssayForm, FlavorForm, Reservation} from './Forms';
import Calculator from './LiftStateUp';
import {WelcomeDialog, SignUpDialog} from './Composition';

class App extends React.Component {
	render() {
		return ( 
			<div>
				<h1>hello app</h1>
				<Welcome name="Alex" />
				<Welcome name="Ola" />
				<Clock />
				<Clock />
				<Toggle />
				<ToggleAltBinding />
				<Greeting isLoggedIn={false} />
				<Greeting isLoggedIn={true} />
				<LoginControl />
				<Page />
				<NumberList numbers={[1, 2, 3, 4, 5]} />
				<NameForm />
				<EssayForm />
				<FlavorForm />
				<Reservation />
				<Calculator />
				<WelcomeDialog />
				<SignUpDialog />
			</div>
		)
	}
}

export default App;
