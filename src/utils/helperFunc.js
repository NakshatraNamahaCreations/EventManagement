export const getErrorMessage = (error) => {
  if (error && error.message) {
    return error.message;
  } else if (error && error.response && error.response.data && error.response.data.message) {
    return error.response.data.message;
  } else {
    return "An unexpected error occurred.";
  }
};

export async function getCurrentCity() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by this browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const geocodingUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

        try {
          const response = await fetch(geocodingUrl);
          const data = await response.json();

          if (data && data.address) {
            const city =
              data.address.city || data.address.town || data.address.village || "City not found";
            resolve(city);
          } else {
            resolve("City not found");
          }
        } catch (error) {
          reject("Error fetching location data.");
        }
      },
      (error) => {
        reject(error.message || "Error getting location.");
      }
    );
  });
}



