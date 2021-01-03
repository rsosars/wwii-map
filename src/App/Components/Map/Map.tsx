import * as React from "react";
import { Circle, GoogleMap, LoadScript } from '@react-google-maps/api'
import {MapControls} from "./MapControls"

type MapProps = {
    center: MapPosition
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
         <MapControls/>
         <LoadScript
          googleMapsApiKey="AIzaSyBsCwln3llWLvG66If_q6EzZWLRU4SPPx8"
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
