const random = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

const size = () => {
  return random(["Extra Small", "Small", "Medium", "Large", "Extra Large"]);
};

const color = () => {
  return random(["Red", "Orange", "Blue", "Yellow", "Green"]);
};

const designer = () => {
  return random([
    "Ralph Lauren",
    "Alexander Wang",
    "Grayse",
    "Marc NY Performance",
    "Scrapbook",
    "J Brand Ready to Wear",
    "Vintage Havana",
    "Neiman Marcus Cashmere Collection",
    "Derek Lam 10 Crosby",
    "Jordan",
  ]);
};

const type = () => {
  return random([
    "Cashmere",
    "Cardigans",
    "Crew and Scoop",
    "V-Neck",
    "Shoes",
    "Cowl & Turtleneck",
  ]);
};

const price = () => {
  return (Math.random() * 100).toFixed(2);
};

const generate = (count) => {
  const data = [];

  for (let i = 0; i < count; i++) {
    const currentSize = size();
    const currentColor = color();
    const currentDesigner = designer();
    const currentType = type();
    const currentPrice = price();

    data.push({
      name: `${currentDesigner} ${currentColor} ${currentSize}`,
      size: currentSize,
      color: currentColor,
      type: currentType,
      designer: currentDesigner,
      price: currentPrice,
      salesPrice: currentPrice * 8,
    });
  }

  return data;
};

export default generate;
