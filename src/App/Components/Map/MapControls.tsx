import * as React from "react";

export interface MapControlsProps {
  onNextClick: VoidFunction
  onPrevClick: VoidFunction
  numberOfElements: number
  currentElement: number
}

export class MapControls extends React.Component<MapControlsProps, {}> {
   
    constructor(props: any) {
      super(props);
    }
    
    render() {
      const {currentElement, numberOfElements} = this.props;
      const prevDisabled = currentElement == 0
      const nextDisabled = currentElement == numberOfElements - 1
      return (
        <div className="map-control-panel">
            <button className="map-button" disabled={prevDisabled} onClick={this.props.onPrevClick}>Previous</button>
            <div className="map-control-curent-date">15 September 1945 (Stalingrad)</div>
            <button className="map-button but-next-event" disabled={nextDisabled} onClick={this.props.onNextClick}>Next</button>
        </div>
      )
    }
 
}