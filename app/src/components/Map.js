import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

// user location
const userIcon = L.divIcon({
  html: '<div style="font-size: 28px;">📍</div>',
  className: 'custom-user-icon',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

// handle map movements
const MapController = ({ userLocation }) => {
  const map = useMap();
  
  useEffect(() => {
    if (userLocation) {
      map.flyTo(userLocation, 17, {
        duration: 1.5
      });
    }
  }, [userLocation, map]);
  
  return null;
};

const Map = ({ userLocation }) => {
  // pitt coordinates
  const pitt = [40.4443, -79.9608];

  return (
    <MapContainer 
      center={pitt} 
      zoom={15} 
      className="map-leaflet"
    >
      <MapController userLocation={userLocation} />
      
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      <Marker position={pitt}>
        <Popup>
          University of Pittsburgh
        </Popup>
      </Marker>
      
      {userLocation && (
        <Marker position={userLocation} icon={userIcon}>
          <Popup>
            You are here
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;
