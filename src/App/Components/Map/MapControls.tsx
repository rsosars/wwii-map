import * as React from "react";

export interface MapControlsProps {
  onNextClick: VoidFunction
  onPrevClick: VoidFunction
}

export class MapControls extends React.Component<MapControlsProps, {}> {
   
    constructor(props: any) {
      super(props);
    }
    
    render() {
      return (
        <div className="map-control-panel">
            <div className="map-button" onClick={this.props.onPrevClick}>Previous</div>
            <div className="map-control-curent-date">15 September 1945 (Stalingrad)</div>
            <div className="map-button but-next-event" onClick={this.props.onNextClick}>Next</div>
        </div>
      )
    }
 
}