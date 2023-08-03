export type ColorRGB = `rgb(${number}, ${number}, ${number})`;
export type ColorRGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
export type ColorHex = `#${string}`;

export type Color = ColorRGB | ColorRGBA | ColorHex