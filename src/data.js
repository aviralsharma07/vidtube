export const API_KEY = "AIzaSyCUV9IeeZ1cfX3hCbaMcfOGFIkCOGl6K5I";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K";
  } else {
    return value;
  }
};
