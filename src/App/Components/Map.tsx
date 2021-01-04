import * as React from "react";
import { Circle, GoogleMap, LoadScript } from '@react-google-maps/api'

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
      )
    }
 
}
