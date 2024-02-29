export const formatBirthDate = (value: string) => {
  if (value === 'unknown') {
    return 'N/A';
  }
  const matches = value.match(/^(\d+(?:\.\d+)?)([A-Za-z]+)$/);

  if (matches && matches.length === 3) {
    const number = matches[1];
    const letters = matches[2];
    return `${number} ${letters}`;
  } else {
    return null;
  }
};
