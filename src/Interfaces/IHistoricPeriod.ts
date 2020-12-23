import {IHistoricEvent} from "./IHistoricEvent";

export interface IHistoricPeriod {
	date: string;
	events: IHistoricEvent[];
}