// Check if the browser has geolocation capabilities.
if ('geolocation' in navigator) {
  // Get the current position of the device.
  navigator.geolocation.getCurrentPosition(success, error)

  // Start watching for changes in the device's location.
  const watcher = navigator.geolocation.watchPosition(success, error)

  // Stop watching for changes in the device's location.
  // Commented out because we don't want to stop watching.
  // But at some point we will want to stop watching.
  // navigator.geolocation.clearWatch(watcher);

  // What to do when we have the position.
  function success(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`)
  }

  // What to do when we have an error.
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`)
  }
} else {
  console.log('Geolocation is not supported by this browser.')
}
