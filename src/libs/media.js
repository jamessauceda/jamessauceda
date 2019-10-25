import { css } from 'styled-components';

export const sizes = {
  small: 320,
  medium: 640,
  mlarge: 832,
  large: 1024,
  xlarge: 1200,
  xxlarge: 1440,
};

const min = (pixels: number) => (...args: any) => css`
  @media only screen and (min-width: ${pixels}px) {
    ${css(...args)};
  }
`;

const max = (pixels: number) => (...args: any) => css`
  @media only screen and (max-width: ${pixels}px) {
    ${css(...args)};
  }
`;

const heightMin = (pixels: number) => (...args: any) => css`
  @media only screen and (min-height: ${pixels}px) {
    ${css(...args)};
  }
`;

const heightMax = (pixels: number) => (...args: any) => css`
  @media only screen and (max-height: ${pixels}px) {
    ${css(...args)};
  }
`;

export default {
  min,
  max,
  heightMin,
  heightMax,
  mobile: max(sizes.medium - 1),
  tablet: max(sizes.mlarge - 1),
  upToLarge: max(sizes.large - 1),
  small: min(sizes.small),
  medium: min(sizes.medium),
  mlarge: min(sizes.mlarge),
  large: min(sizes.large),
  xlarge: min(sizes.xlarge),
  xxlarge: min(sizes.xxlarge),
};
