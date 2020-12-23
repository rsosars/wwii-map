import * as React from "react"

interface IEventListItemProps {
    title: string
    dateDisplayed: string
}

interface IEventListItemState {

}

export class EventListItem extends React.Component<IEventListItemProps, IEventListItemState> {

    public render(): React.ReactNode {
        const {title, dateDisplayed} = this.props;

        return (
            <div className="event">
                <div className="event-date">{ dateDisplayed }</div>
                <div className="event-title">{ title }</div>
            </div>
        );
    }
}