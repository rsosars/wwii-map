import * as React from "react"

interface IEventListItemProps {
    title: string
    dateDisplayed: string,
    selected: boolean
}

interface IEventListItemState {

}

export class EventListItem extends React.Component<IEventListItemProps, IEventListItemState> {

    public render(): React.ReactNode {
        const {title, dateDisplayed, selected} = this.props
        const classNames = selected ? "event selected" :  "event"
        return (
            <div className={classNames}>
                <div className="event-date">{ dateDisplayed }</div>
                <div className="event-title">{ title }</div>
            </div>
        );
    }
}