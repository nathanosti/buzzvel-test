// ** Styled Components Imports
import 'styled-components';
import { ColorHex, ColorRGBA } from './colorsType';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      white: ColorHex;
      blue: {
        primary: ColorHex;
        secondary: ColorHex;
        dark: ColorHex;
      };
      black: {
        primary: ColorHex;
        secondary: ColorHex;
        tertiary: ColorHex;
      };
      red: {
        primary: ColorHex;
      };
    };
    colorsOpacity: {
      blue: {
        primary(opacity: number): ColorRGBA;
      };
      black: {
        primary(opacity: number): ColorRGBA;
        secondary(opacity: number): ColorRGBA;
        tertiary(opacity: number): ColorRGBA;
      };
      white: {
        primary(opacity: number): ColorRGBA;
      };
    };
  }
}
