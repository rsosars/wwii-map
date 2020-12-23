import React from "react";

export interface IPeriodTitleCard {
	title: string
}

export class PeriodTitleCard extends React.Component<IPeriodTitleCard, any> {
	public render(): React.ReactNode {
		const {title} = this.props;

		return (<h2 className={"period-title"}>{`- ${title} -`}</h2>)
	}
}