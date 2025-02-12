export const timestampToDate = (timestamp: number): string => {
  const data = new Date(timestamp * 1000);

  const diasSemana = ["Dom", "Seg", "Ter", "Qua", "Quin", "Sex", "Sáb"];
  const abrev = diasSemana[data.getDay()];

  const dia = data.getDate().toString().padStart(2, "0");
  const mes = (data.getMonth() + 1).toString().padStart(2, "0");
  const ano = data.getFullYear();

  return `${abrev}. ${dia}/${mes}`;
};
