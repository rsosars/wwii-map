import * as React from "react";
import {EventList} from "./HistoricEvent/EventList";
import {IHistoricPeriod} from "../../Interfaces/IHistoricPeriod";

export interface IPanelProps {
	selectedEventId: string
	events: IHistoricPeriod[],
}

export interface IPanelState {
}

export class Panel extends React.Component<IPanelProps, IPanelState> {
	public render() {
		return (
			<div className="panel">
				<EventList 
					selectedEventId={ this.props.selectedEventId }
				 	events={this.props.events}/>
			</div>
		);
	}
}