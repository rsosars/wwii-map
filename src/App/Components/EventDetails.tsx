import * as React from "react";

type EventDetailsProps = {
    title: string
    expanded: boolean
    onClick: ()=> void
}

const EventDetails: React.FunctionComponent<EventDetailsProps> = ( { title, expanded, onClick }: EventDetailsProps) => {
    const expandedClass = expanded ? "expanded" : "" 
    const classNames = `event-details ${expandedClass}`
    console.log(expanded)
    return(
        <div className={classNames} onClick={onClick}>
            Here will come the details for the selected event
        </div>
    )
}



export default EventDetails
