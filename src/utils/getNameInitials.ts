export const getNameInitials = (name: string | undefined) => {
  if (name === '' || name === undefined) {
    return '';
  }
  const nameArray = name.split(' ');
  return nameArray[0][0] + nameArray[nameArray.length - 1][0];
};
