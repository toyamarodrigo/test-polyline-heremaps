import React from "react";
import { LatLngExpression } from "leaflet";
import { MapContainer, Marker, Polyline, TileLayer, ZoomControl } from "react-leaflet";

interface Props {
  polyline: LatLngExpression[];
}

export const LeafletMap = ({ polyline }: Props) => {
  const hereTile = `https://2.base.maps.ls.hereapi.com/maptile/2.1/maptile/newest/normal.day.grey/{z}/{x}/{y}/512/png8?apiKey=${
    import.meta.env.VITE_HERE_API_KEY
  }&ppi=320`;

  return (
    <MapContainer
      center={[-34.7046285, -58.5289298]}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100vw", zIndex: 0 }}
      zoom={11}
      zoomControl={false}
    >
      <ZoomControl position="topright" />

      {polyline && <Polyline pathOptions={{ color: "red" }} positions={polyline} />}

      {polyline && (
        <>
          <Marker position={[polyline[0][0], polyline[0][1]]}>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Marker_icon_%28black%29.svg/1024px-Marker_icon_%28black%29.svg.png" />
            </div>
          </Marker>
          <Marker position={[polyline[polyline.length - 1][0], polyline[polyline.length - 1][1]]}>
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Marker_icon_%28black%29.svg/1024px-Marker_icon_%28black%29.svg.png" />
            </div>
          </Marker>
        </>
      )}

      <TileLayer url={hereTile} />
    </MapContainer>
  );
};
