"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Fix default marker icons in bundlers/Next
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "/leaflet/marker-icon-2x.png",
  iconUrl: "/leaflet/marker-icon.png",
  shadowUrl: "/leaflet/marker-shadow.png",
});

type OSMMapProps = {
  lat: number;
  lon: number;
  zoom?: number;
  className?: string;
};

export default function OSMMapClient({
  lat,
  lon,
  zoom = 12,
  className,
}: OSMMapProps) {
  return (
    <div
      className={className ?? "h-[520px] w-full rounded-2xl overflow-hidden"}>
      <MapContainer
        center={[lat, lon]}
        zoom={zoom}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>
            {lat}, {lon}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
