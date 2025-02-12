import { api } from "..";

export const openWeather = async (
  lat: number,
  lon: number,
  exclude: string = "",
  units: string = "metric",
  lang: string = "pt_br"
) => {
  try {
    const response = await api.get("/data/3.0/onecall", {
      params: {
        lat,
        lon,
        exclude,
        units,
        lang,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error(
      "Erro na chamada da API: ",
      error.response?.data || error.message
    );
    throw new Error("Não foi possível buscar os dados de Clima");
  }
};
