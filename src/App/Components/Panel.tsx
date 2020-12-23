import * as React from "react";
import {EventList} from "./HistoricEvent/EventList";
import historicPeriods from "../../data/mockEvents.json"
import {IHistoricPeriod} from "../../Interfaces/IHistoricPeriod";

export interface IPanelProps {

}

export interface IPanelState {

}

export class Panel extends React.Component<IPanelProps, IPanelState> {
	public render() {
		return (
			<div className="panel">
				<EventList events={historicPeriods as IHistoricPeriod[]}/>
			</div>
		);
	}
}