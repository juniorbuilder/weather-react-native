export const formatUVI = (uvi: number) => {
    if (uvi <= 2) return "Baixo";
    if (uvi <= 5) return "Moderado";
    if (uvi <= 7) return "Alto";
    if (uvi <= 10) return "Muito Alto";
    return "Extremo";
  };