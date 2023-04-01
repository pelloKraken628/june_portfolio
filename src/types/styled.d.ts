import "styled-components";
interface IPalette {
  main: string;
  darker?: string;
  light?: string;
}

declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: {
      small: string;
      rounded: string;
    },
    palette: {
      common: {
        black: string;
        white: string;
      },
      primary: IPalette;
      secondary: IPalette;
    }
  }

}