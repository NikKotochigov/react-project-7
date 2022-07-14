import logo from './logo.svg';
import './App.css';
import { useLayoutEffect, useState } from "react"
import mapboxgl from 'mapbox-gl';

function App() {

  const [marker, setMarker] = useState();

  mapboxgl.accessToken = "pk.eyJ1IjoiYm9vYW5kcmV3IiwiYSI6ImNrd3M2ZGF1YzBhcDEyb21obzUwcDlvNXMifQ.q0NAPJB4RMgRRI8Fi9PWZg";

  useLayoutEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: [37.610641, 55.761994],
      zoom: 10
    });
    const marker = new mapboxgl.Marker()
      .setLngLat([37.610641, 55.761994])
      .addTo(map)
    setMarker(marker)
  }, []);

  const stores = {
    km20: [37.610641, 55.761994],
    belief: [37.601152, 55.733396],
    brandshop: [37.616812, 55.767839]
  };

  function handleShopChoice(e){
    marker.setLngLat(stores[e.target.value])
    setMarker(marker)
  }

  return (
    <>
      <div className="map-overlay">
        <h3>Выберите магазин: </h3>
        <select onChange={handleShopChoice}>
          <option value="km20">KM20</option>
          <option value="belief">BELIEF</option>
          <option value="brandshop">BRANDSHOP</option>
        </select>
      </div>
      <div id="map"></div>
    </>
  );
}

export default App;
