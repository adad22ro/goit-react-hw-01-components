const generateRandomColor = percentage => {
  const hue = percentage * 1.2;
  return `hsl(${hue}, 100%, 50%)`;
};

export default generateRandomColor;
