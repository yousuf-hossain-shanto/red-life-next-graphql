import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import L from 'leaflet';
// import requiser from "../images/requiser.png"

const Map = ({ user, position = [40.8054,-74.0241] }) => {
  const me = L.divIcon({
    html: "<img src='" + user.avatar + "' />",
    className: 'image-icon',
    iconSize: [52, 52],
    popupAnchor: [0, -25]
  })
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=sk.eyJ1IjoieWhzaGFudG8iLCJhIjoiY2t1ejRhd2Y4MWFoMTJ4cmZsYWZpM2ptdyJ9.R-nfAVHED5klmG0VRmsumg`}
        attribution='Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>'
      />
      <Marker position={position} draggable={true} animate={true} icon={me}>
        <Popup>{user.name}</Popup>
      </Marker>
    </MapContainer>
  )
}

export default Map