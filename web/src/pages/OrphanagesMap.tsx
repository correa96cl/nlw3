import React from 'react';

import mapMarker from '../images/map-marker.svg';
import { Link } from 'react-router-dom';

import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanagens-map.css';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';




function OrphanagesMap() {
    return (
        <div id="page-map">
        <aside>
            <header>
                <img src={mapMarker} alt="Happy"/>

                <h2>Escolha um orfanato no mapa</h2>
                <p>Muitas crianças estão esperando a sua visita :)</p>
            </header>

            <footer>
                <strong>Santa Teresa</strong>
                <span>Rio de Janeiro</span>
            </footer>
        </aside>

        <Map
            center={[-22.9136196,-43.1843925]}
            zoom={15}
            style={{ 
                width: '100%',
                height: '100%'
             }}
        >
        {/*<TileLayer
        url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
            <TileLayer
                url={`http://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />
        </Map>

        <Link to="" className="create-orphanage">
            <FiPlus size={32} color="#fff" />
        </Link>
    </div>
    )
}

export default OrphanagesMap;