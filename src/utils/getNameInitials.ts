export const getNameInitials = (name: string) => {
  const nameArray = name.split(' ');
  return nameArray[0][0] + nameArray[nameArray.length - 1][0];
};
