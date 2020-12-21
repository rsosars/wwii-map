import * as React from "react"

type EventShortProps = {
    title: string
    dateDisplayed: string
}

const EventListItem: React.FunctionComponent<EventShortProps> = ( { title, dateDisplayed }: EventShortProps) => 
<div className="event">
    <div className="event-date">{ dateDisplayed }</div>
    <div className="event-title">{ title }</div>
</div>

export {EventListItem, EventShortProps}