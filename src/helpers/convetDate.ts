export const convertDate = (dateInput: string) => {
  const date = new Date(dateInput);
  const formatted = date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short',
  });

  return formatted;
};
