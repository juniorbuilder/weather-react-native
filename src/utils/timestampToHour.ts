export const timestampToHour = (timestamp: number): string => {
  const data = new Date(timestamp * 1000);
  const agora = new Date();

  const options: Intl.DateTimeFormatOptions = {
    timeZone: "America/Sao_Paulo",
    hour: "2-digit",
    minute: "2-digit",
  };

  const horaFormatada = data.toLocaleTimeString("pt-BR", options);

  if (
    agora.getHours() === data.getHours() &&
    agora.getDate() === data.getDate()
  ) {
    return `Agora`;
  }

  return `${horaFormatada}h`;
};
