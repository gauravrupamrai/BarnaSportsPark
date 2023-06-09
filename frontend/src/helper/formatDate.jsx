export const dateFormat = (date) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = (1 + d.getMonth()).toString().padStart(2, '0');
  const day = d.getDate().toString().padStart(2, '0');

  return `${year}-${month}-${day}`;
}