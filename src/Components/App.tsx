import * as React from "react";

export interface IAppProps extends React.ClassAttributes<IAppProps> {

}

export interface IAppState {

}

export class App extends React.Component<IAppProps, IAppState> {
	public render() {
		return(
			<>
				<h1>Hello World</h1>
			</>
		);
	}
}