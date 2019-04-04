import React from "react";

export default class LeafletMap extends React.Component {
  componentDidMount() {
    var mymap = window.L.map("mapid").setView([59.876515, 29.828084], 13);

    window.L.tileLayer
      .provider("HERE.terrainDay", {
        app_id: "zAb9wgNk7o2spmyo5tHD",
        app_code: "jdH7-AVXp8NwySqSpB-5Wg"
      })
      .addTo(mymap);

    window.L.marker([59.876515, 29.828084])
      .addTo(mymap)
      .bindPopup("Здесь находится ПУНК")
      .openPopup();
    window.L.marker([59.891896, 29.833241])
      .addTo(mymap)
      .bindPopup("Здесь красивый лес");

    let popup = window.L.popup();
    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
    }

    mymap.on("click", onMapClick);
  }

  render() {
    return (
      <div className="ui inverted left floated ten wide column">
        <div id="mapid" style={{ height: "580px" }}>
          LeafletMap
        </div>
      </div>
    );
  }
}
