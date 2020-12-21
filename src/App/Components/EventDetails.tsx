import * as React from "react";

type EventDetailsProps = {
    title: string
}

const EventDetails: React.FunctionComponent<EventDetailsProps> = ( { title }: EventDetailsProps) => 
<div className="event-details">
    Here will come the details for the selected event
</div>

export default EventDetails
