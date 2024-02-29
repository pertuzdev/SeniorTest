export const separateNumberAndLetters = (value: string) => {
  // Using regular expression to match the number and letters
  const matches = value.match(/^(\d+)([A-Za-z]+)$/);

  // If there are matches
  if (matches && matches.length === 3) {
    const number = matches[1];
    const letters = matches[2];
    return `${number} ${letters}`;
  } else {
    // If the value doesn't match the expected format
    return null;
  }
};
