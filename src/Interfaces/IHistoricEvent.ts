export interface IHistoricEvent {
	id: string;
	date: string;
	description: string;
	location: Location;
}

export interface Location {
	lat: number;
	lng: number;
}