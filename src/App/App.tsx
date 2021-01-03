import * as React from "react";
import { Panel } from "./Components/Panel";
import { Map } from "./Components/Map/Map";
import EventDetails from "./Components/EventDetails";
import historicPeriods from "../data/mockEvents.json"
import { IHistoricEvent } from "../Interfaces/IHistoricEvent";
import { IHistoricPeriod } from "../Interfaces/IHistoricPeriod";

export interface IAppProps extends React.ClassAttributes<IAppProps> {

}

export interface IAppState {
	expanded: boolean
	events: IHistoricEvent[]
	periods: IHistoricPeriod[]
	selectedEventIndex: number
}

export class App extends React.Component<IAppProps, IAppState> {

	constructor(props: IAppProps) {
		super(props)

		let events: IHistoricEvent[] = [];
		historicPeriods.map ( value => {
			events.push(...value.events)
		});


		this.state = {
			periods: historicPeriods,
			expanded:false,
			events: events,
			selectedEventIndex: 0,
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
					<Map center={ this.state.events[this.state.selectedEventIndex].location }/>
					<EventDetails title="test" expanded={this.state.expanded} onClick={this.togglePanel}/>
				</div>
				<Panel events={this.state.periods} selectedEventId={ this.state.events[this.state.selectedEventIndex].id}></Panel>
			</>
		);
	}
}