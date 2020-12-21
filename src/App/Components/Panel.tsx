import * as React from "react";
import EventList from "./EventList";
export interface  IPanelProps {

}

export interface IPanelState {

}

export class Panel extends React.Component<IPanelProps, IPanelState> {
	public render() {
		return (<div className="panel">
			<EventList events={[]}/>
		</div>);
	}
}