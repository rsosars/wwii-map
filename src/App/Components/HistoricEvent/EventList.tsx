import * as React from "react";
import {IHistoricPeriod} from "../../../Interfaces/IHistoricPeriod";
import {EventListItem} from "./EventListItem";
import {PeriodTitleCard} from "./PeriodTitleCard";

interface IEventListProps {
    events: IHistoricPeriod[];
}

interface IEventListState {

}

export class EventList extends React.Component<IEventListProps, IEventListState> {


   public render(): React.ReactNode {
        return (
            <div className={"event-list"}>
                {this.listComponents}
            </div>
        );
    }

    private get listComponents(): React.ReactNode {
       return this.props.events.map((period: IHistoricPeriod) => {
            const items = period.events.map((event) => (<EventListItem
                title={event.description}
                dateDisplayed={event.date}
            />));

            return (
                <>
                    <PeriodTitleCard title={period.date}/>
                    {items}
                </>
            );
       });
    }
}