window.addEventListener("load", () => loadTracking(), false);

async function loadTracking() {
  let userAgent = navigator.userAgent ? navigator.userAgent : '';
  let referrer = document.referrer ? document.referrer : '';
  let hash = '';  

  let hashPromise = _getFingerprint();
  await hashPromise.then(function(result) {
    hash = result;
  }, function(err) {
    console.log(err); 
  });

  // Guardando datos en local storage
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem("hash", hash);
  } else {
    console.log("Sorry! No Web Storage support") 
  }

  // Data de la peticion
  let url = "https://swapi.dev/api/people/2/";
  data = {
    userAgent: userAgent,
    referrer: referrer,
    hash: hash
  };  
  // Peticion POST
  $.post(url, data)
    .done(function (result) {
      console.log("Success on post request to: " + url);
    })
    .fail(function (e) {
      console.log("Error on post request: " + e.responseText);
    });
}

// Generar hash con fingerprint2.js
function _getFingerprint () {
  return new Promise((resolve, reject) => {
    async function getHash () {
      const options = {
        excludes: {
          plugins: true,
          localStorage: true,
          adBlock: true,
          screenResolution: true,
          availableScreenResolution: true,
          enumerateDevices: true,
          pixelRatio: true,
          doNotTrack: true
        }
      }

      try {
        const components = await Fingerprint2.getPromise(options)
        const values = components.map(component => component.value)

        console.log('fingerprint hash components', components)

        // hash
        return String(Fingerprint2.x64hash128(values.join(''), 31))
      } catch (e) {
        reject(e)
      }
    }

    if (window.requestIdleCallback) {
      requestIdleCallback(async () => resolve(await getHash()))
    } else {
      setTimeout(async () => resolve(await getHash()), 500)
    }
  })
}