import * as React from "react";

export interface  IPanelProps {

}

export interface IPanelState {

}

export class Panel extends React.Component<IPanelProps, IPanelState> {
	public render() {
		return (<div className="panel">Side Panel</div>);
	}
}