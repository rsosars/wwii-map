import * as React from "react";
import { Circle, GoogleMap, LoadScript } from '@react-google-maps/api'
import {MapControls, MapControlsProps} from "./MapControls"

type MapProps = {
    center: MapPosition
    mapControlFunctions: MapControlsProps
}

type MapPosition = {
    lat: number
    lng: number
}
export class Map extends React.Component<MapProps, {}> {
   
    constructor(props: any) {
      super(props);
    }
    
    render() {
      return (
        <div id="map-container">
         <MapControls 
          onNextClick={this.props.mapControlFunctions.onNextClick}
          onPrevClick={this.props.mapControlFunctions.onPrevClick}
          />
         <LoadScript
          googleMapsApiKey=""
        >
          <GoogleMap mapContainerClassName={"map"}
            center={this.props.center}
            zoom={6.5}
            onUnmount= {this.componentWillUnmount}
          >
            <Circle center={this.props.center} radius={15000}/>
          </GoogleMap>
        </LoadScript>
        </div>
      )
    }
 
}
