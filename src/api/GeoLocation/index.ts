import Geolocation from "@react-native-community/geolocation";
import { PermissionsAndroid, Platform } from "react-native";
import { api } from "..";

export const geoLocation = async (): Promise<{
  lat: number;
  lon: number;
  city: string;
}> => {
  try {
    if (Platform.OS === "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        throw new Error("Permissão negada para acessar a localização");
      }
    }

    return new Promise((resolve, reject) => {
      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const city = await getCityFromCordinates(latitude, longitude);
            resolve({ lat: latitude, lon: longitude, city });
          } catch (error) {
            reject(error);
          }
        },
        (error) =>
          reject(new Error("Error ao obter localização: " + error.message)),
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
      );
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const getCityFromCordinates = async (
  lat: number,
  lon: number
): Promise<string> => {
  try {
    const response = await api.get(`/geo/1.0/reverse`, {
      params: {
        lat,
        lon,
        lang: "pt_br",
      },
    });
    console.log("response api", response);

    if (response.data && response.data.length > 0) {
      return `${response.data[0].name}, ${response.data[0].state}`;
    } else {
      console.log("Resposta da API de localização:", response);
      throw new Error("Cidade não encontrada.");
    }
  } catch (error: any) {
    console.log("error", error);
    throw new Error("Erro ao buscar cidade");
  }
};
