import {IHistoricEvent} from "./IHistoricEvent";

export interface IHistoricPeriod {
	id: string;
	date: string;
	events: IHistoricEvent[];
}