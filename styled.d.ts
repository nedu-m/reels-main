import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      black: string;
      white: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
    };
    isOpen: Interpolation<
      ThemedStyledProps<
        Pick<
          DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
          "key" | keyof HTMLAttributes<HTMLDivElement>
        > & {
          ref?:
            | ((instance: HTMLDivElement | null) => void)
            | RefObject<HTMLDivElement>
            | null
            | undefined;
        },
        DefaultTheme
      >
    >;
  }
}
