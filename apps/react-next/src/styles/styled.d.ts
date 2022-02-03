import 'styled-components';

import theme from '@next/styles/theme';

export type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
