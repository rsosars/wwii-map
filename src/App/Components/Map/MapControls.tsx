import * as React from "react";

export interface MapControlsProps {

}

export class MapControls extends React.Component<MapControlsProps, {}> {
   
    constructor(props: any) {
      super(props);
    }
    
    render() {
      return (
        <div className="map-control-panel">
            <div className="map-button">Previous</div>
            <div className="map-control-curent-date">15 September 1945 (Stalingrad)</div>
            <div className="map-button but-next-event">Next</div>
        </div>
      )
    }
 
}