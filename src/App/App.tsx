import * as React from "react";
import { Panel } from "./Components/Panel";
import Map from "./Components/Map";
import EventDetails from "./Components/EventDetails";
export interface IAppProps extends React.ClassAttributes<IAppProps> {

}

export interface IAppState {

}

export class App extends React.Component<IAppProps, IAppState> {
	public render() {
		return(
			<>
				<div className="firstColumn">
					<Map/>
					<EventDetails title="test"/>
				</div>
				<Panel></Panel>
			</>
		);
	}
}