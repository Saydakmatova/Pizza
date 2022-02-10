import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
const GoogleMap = (props) => {
  return (
    <div style={{ marginTop: 50 }}>
      {/* <Map
        className="map"
        google={props.google}
        zoom={1}
        style={{ width: "100%", height: "700px" }}
        position={{ lat: 42.87907550405358, lng: 74.59300383432434 }}
      >
        <Marker
          title={"The marker`s title will appear as a tooltip."}
          position={{ lat: 42.87907550405358, lng: 74.59300383432434 }}
          onClick={props.onMarkerClick}
          name={"Current location"}
        />

        <InfoWindow onClose={props.onInfoWindowClose}></InfoWindow>
      </Map> */}
    </div>
  );
};
export default GoogleApiWrapper({
  apiKey: "AIzaSyBl8dNatG7XhMznos5YSs0If4lHHg-Y5sM",
})(GoogleMap);
