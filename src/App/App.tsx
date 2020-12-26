import * as React from "react";
import { Panel } from "./Components/Panel";
import { Map } from "./Components/Map";
import EventDetails from "./Components/EventDetails";
export interface IAppProps extends React.ClassAttributes<IAppProps> {

}

export interface IAppState {
	expanded: boolean
}

export class App extends React.Component<IAppProps, IAppState> {

	constructor(props: IAppProps) {
		super(props)
		this.state = {
			expanded:false
		}
		this.togglePanel = this.togglePanel.bind(this);
	}

	togglePanel() {
		this.setState({
			expanded: !this.state.expanded
		})
		console.log(JSON.stringify(this.state));
	}

	public render() {
		return(
			<>
				<div className="firstColumn">
					<Map center={ {lat:52.5200, lng:13.4050}}/>
					<EventDetails title="test" expanded={this.state.expanded} onClick={this.togglePanel}/>
				</div>
				<Panel></Panel>
			</>
		);
	}
}