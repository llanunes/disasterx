import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


import enchenteIcon from '../assets/enchente.png';
import fogoIcon from '../assets/fogo.png';
import deslizamentoIcon from '../assets/deslizamento.png';

const AlertMap = ({ alerts, selectedCoordinates }) => {
  const getIcon = (category) => {
    const iconUrlMap = {
      Enchente: enchenteIcon,
      Incêndio: fogoIcon,
      Deslizamento: deslizamentoIcon,
    };

    return L.icon({
      iconUrl: iconUrlMap[category] || enchenteIcon, 
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });
  };

  const styles = {
    mapContainer: {
      height: '500px',
      width: '100%',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    },
  };

  return (
    <div style={styles.mapContainer}>
      <MapContainer
        center={selectedCoordinates}
        zoom={12}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {alerts.map((alert, index) => (
          <Marker
            key={index}
            position={alert.coordinates}
            icon={getIcon(alert.event)}
          >
            <Popup>
              <strong>{alert.event}</strong>
              <br />
              {alert.description}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AlertMap;
