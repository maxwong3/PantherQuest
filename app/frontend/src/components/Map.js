import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import './Map.css';
import { buildingAPI } from '../services/api';
import BuildingDetails from './Building';
import Event from './Event';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const userIcon = L.divIcon({
  html: '<div style="font-size: 28px;">📍</div>',
  className: 'custom-user-icon',
  iconSize: [30, 30],
  iconAnchor: [15, 30],
});

const MapController = ({ userLocation }) => {
  const map = useMap();
  
  useEffect(() => {
    if (userLocation) {
      map.flyTo(userLocation, 17, { duration: 1.5 });
    }
  }, [userLocation, map]);
  
  return null;
};

const Map = ({ userLocation, user }) => {
  const [selectedBuilding, setSelectedBuilding] = useState(null);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [buildings, setBuildings] = useState([]);
  const [buildingEvents, setBuildingEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const pitt = [40.4443, -79.9608];

  //  builddings from API
  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const data = await buildingAPI.getAll();
        setBuildings(data);
      } catch (error) {
        console.error('Failed to fetch buildings:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBuildings();
  }, []);

  // events for selected building
  useEffect(() => {
    const fetchBuildingEvents = async () => {
      if (selectedBuilding) {
        try {
          const events = await buildingAPI.getEvents(selectedBuilding.id);
          setBuildingEvents(events);
        } catch (error) {
          console.error('Failed to fetch building events:', error);
          setBuildingEvents([]);
        }
      }
    };
    fetchBuildingEvents();
  }, [selectedBuilding]);

  // Bounds to restrict map to Pitt campus area
  const campusBounds = [
    [40.4350, -79.9750], // Southwest corner
    [40.4550, -79.9450]  // Northeast corner
  ];

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  return (
    <>
      <MapContainer 
        center={pitt} 
        zoom={15} 
        className="map-leaflet"
        minZoom={15}
        maxZoom={18}
        maxBounds={campusBounds}
        maxBoundsViscosity={1.0}
      >
        <MapController userLocation={userLocation} />
        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {buildings.map(building => {
          const icon = L.divIcon({
            html: `<div style="font-size: 28px;">${building.sprite}</div>`,
            className: 'building-icon',
            iconSize: [30, 30],
            iconAnchor: [15, 30],
          });

          return (
            <Marker 
              key={building.id} 
              position={building.position} 
              icon={icon}
              eventHandlers={{ click: () => setSelectedBuilding(building) }}
            >
              <Popup>{building.name}</Popup>
            </Marker>
          );
        })}
        
        {userLocation && (
          <Marker position={userLocation} icon={userIcon}>
            <Popup>You are here</Popup>
          </Marker>
        )}
      </MapContainer>
      
      {selectedBuilding && (
        <BuildingDetails 
          building={selectedBuilding}
          events={buildingEvents}
          onClose={() => setSelectedBuilding(null)}
          onEventClick={handleEventClick}
          visitedBuildings={[]}
          completedEvents={[]}
          user={user}
        />
      )}

      {selectedEvent && (
        <Event
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
};

export default Map;
