import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapPin } from "lucide-react";

export function CafeFinder() {
  const [places, setPlaces] = useState([]);
  const [userLocation, setUserLocation] = useState([28.6139, 77.209]); // Default Delhi
  const mapRef = useRef(null);
  const userMarkerRef = useRef(null);

  const GEOAPIFY_KEY = "8ddd144ec7da40d99d6c3214dff49bc9";

  useEffect(() => {
    // Initialize map
    if (!mapRef.current) {
      mapRef.current = L.map("live-map").setView(userLocation, 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors",
      }).addTo(mapRef.current);

      userMarkerRef.current = L.marker(userLocation)
        .addTo(mapRef.current)
        .bindPopup("Fetching your location...")
        .openPopup();
    }

    const fetchNearbyCafes = async (lat, lon) => {
      try {
        const url = `https://api.geoapify.com/v2/places?categories=catering.cafe,catering,catering.fast_food&filter=circle:77.5452322,29.9672877,5013&bias=proximity:77.5452322,29.9672877&limit=20&apiKey=8ddd144ec7da40d99d6c3214dff49bc9`;

        const res = await fetch(url);
        const data = await res.json();

        if (!data.features || data.features.length === 0) {
          setPlaces([]);
          return;
        }

        const simplifiedPlaces = data.features.map((f) => ({
          place_id: f.properties.place_id,
          name: f.properties.name,
          street: f.properties.street,
          city: f.properties.city,
          lat: f.properties.lat,
          lon: f.properties.lon,
        }));

        setPlaces(simplifiedPlaces);

        // Clear old markers except user
        mapRef.current.eachLayer((layer) => {
          if (layer instanceof L.Marker && layer !== userMarkerRef.current) {
            mapRef.current.removeLayer(layer);
          }
        });

        // Add markers for cafes
        simplifiedPlaces.forEach((place) => {
          L.marker([place.lat, place.lon])
            .addTo(mapRef.current)
            .bindPopup(`<b>${place.name}</b><br>${place.street || ""}, ${place.city || ""}`);
        });
      } catch (err) {
        console.error("Error fetching cafes:", err);
      }
    };

    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          setUserLocation([latitude, longitude]);
          mapRef.current.setView([latitude, longitude], 15);
          userMarkerRef.current
            .setLatLng([latitude, longitude])
            .bindPopup("You are here")
            .openPopup();
          fetchNearbyCafes(latitude, longitude);
        },
        () => {
          fetchNearbyCafes(userLocation[0], userLocation[1]);
        }
      );
    } else {
      fetchNearbyCafes(userLocation[0], userLocation[1]);
    }
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>
        <MapPin style={{ color: "#2563eb", marginRight: "0.5rem" }} />
        Cafes Near You
      </h2>

      <div id="live-map" style={styles.mapBox}></div>

      <h3 style={styles.listHeading}>Nearby Cafes ☕</h3>
      <div style={styles.grid}>
        {places.length > 0 ? (
          places.map((p) => (
            <div key={p.place_id} style={styles.cafeBox}>
              <h4>{p.name}</h4>
              <p>
                {p.street || ""}, {p.city || ""}
              </p>
            </div>
          ))
        ) : (
          <p>Fetching nearby cafes...</p>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: { maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem", fontFamily: "system-ui, sans-serif" },
  title: { display: "flex", alignItems: "center", fontSize: "1.5rem", fontWeight: 600, marginBottom: "1rem" },
  mapBox: { width: "100%", height: "50vh", borderRadius: "12px", marginBottom: "1rem" },
  listHeading: { fontSize: "1.25rem", fontWeight: 500, marginBottom: "1rem" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "1rem" },
  cafeBox: { padding: "1rem", borderRadius: "8px", backgroundColor: "#f5f5f5", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" },
};
