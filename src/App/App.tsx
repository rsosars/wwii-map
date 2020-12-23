import * as React from "react";
import { Panel } from "./Components/Panel";
import Map from "./Components/Map";
import EventDetails from "./Components/EventDetails";
import { events } from "./Data/events.json";
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
					<Map center={events[0].center} />
					<EventDetails 
						title="test" 
						expanded={this.state.expanded} 
						onClick={this.togglePanel}
					/>
				</div>
				<Panel></Panel>
			</>
		);
	}
}