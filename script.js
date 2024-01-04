
  document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
  }, false);



  const button = document.querySelector("#random-location-button");
  const locations = [
    {
      name: "Airplane Boneyard",
      coordinates: {
        lat: 32.149989,
        lng: -110.835842,
      }
    },
    {
      name: "Satanic rites",
      coordinates: {
        lat: 52.4801256,
        lng: 62.1858301,
      }
    },
    {
      name: "It’s okay, Jesus loves us",
      coordinates: {
        lat: 43.6450740,
        lng: -115.9930810,
      }
    },
    {
      name: "The occultism of the Cartagena naval base",
      coordinates: {
        lat: 37.6587100,
        lng: -1.0134399,
      }
    },
    {
      name: "Romantic Island",
      coordinates: {
        lat: 43.9785280,
        lng: 15.3833720,
      }
    },
    {
      name: "A very musical forest",
      coordinates: {
        lat: -33.867886,
        lng: -63.987,
      }
    },
    {
      name: "shipwreck",
      coordinates: {
        lat: -33.836379,
        lng: 151.080506,
      }
    },
    {
      name: "heart-shaped lake",
      coordinates: {
        lat: 41.303921,
        lng: -81.901693,
      }
    },
    {
      name: "Mysterious Desert Pattern",
      coordinates: {
        lat: 40.452107,
        lng: 93.742118,
      }
    },
    {
      name: "Giant Target",
      coordinates: {
        lat: 37.563936,
        lng: -116.85123,
      }
    },
    {
      name: "World's biggest pool",
      coordinates: {
        lat: -33.350534,
        lng: -71.653268,
      }
    },
    {
      name: "Jesus Loves You",
      coordinates: {
        lat: 43.645074,
        lng: -115.993081,
      }
    },
    {
      name: "Northern Cyprus Flag",
      coordinates: {
        lat: 35.282902,
        lng: 33.376891,
      }
    },
    {
      name: "Potash Ponds",
      coordinates: {
        lat: 38.483378,
        lng: -109.681333,
      }
    },
    {
      name: "Coca-Cola logo",
      coordinates: {
        lat: -18.529211,
        lng: -70.249941,
      }
    },
    {
      name: "Multiple Landing Strips in the Desert",
      coordinates: {
        lat: 32.663367,
        lng: -111.487618,
      }
    },
    {
      name: "Oil Fields",
      coordinates: {
        lat: -37.654461,
        lng: -68.171228,
      }
    },
    {
      name: "Mattel Logo",
      coordinates: {
        lat: 33.921277,
        lng: -118.391674,
      }
    },
    {
      name: "Barringer Meteor Crater",
      coordinates: {
        lat: 35.027185,
        lng: -111.022388,
      }
    },
    {
      name: "Huge Bunny",
      coordinates: {
        lat: 44.244167,
        lng: 7.769444,
      }
    },
    {
      name: "Solar Field",
      coordinates: {
        lat: 34.871778,
        lng: -116.834192,
      }
    },
    {
      name: "Grand Prismatic Spring",
      coordinates: {
        lat: 44.525049,
        lng: -110.83819,
      }
    },
    {
      name: "Batman Symbol",
      coordinates: {
        lat: 26.357896,
        lng: 127.783809,
      }
    },
    {
      
      name: "ALIENS !!!!11!!?",
      coordinates: {
        lat: 45.703536,
        lng: 21.302092,
      }
    },
    {
      name: "plane On the forest",
      coordinates: {
        lat: 45.407817,
        lng: -123.008573,
      }
    },

    {
      name: "Russian Hexagonal Warehouses",
      coordinates: {
        lat: 54.35967,
        lng: 41.32853,
      }
    },
    {
      name: "UFO Crash site",
      coordinates: {
        lat: -25.89493,
        lng: 27.80137,
      }
    },
  ];

  button.addEventListener("click", function () {
  const location = locations[Math.floor(Math.random() * locations.length)];
  const name = (location.name)
    const url = `https://www.google.com/maps/@${location.coordinates.lat},${location.coordinates.lng},18z/data=!3m1!1e3`;
    alert('You are going to: ' + name)
    window.open(url, "_blank");
  });
