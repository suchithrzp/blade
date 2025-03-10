import type { CSSObject } from 'styled-components';
import type { BaseBoxProps } from './types';
import { getIn, makeBorderSize, makeSize, makeSpace } from '~utils';
import type { Theme } from '~components/BladeProvider';

// allows 'auto' as spacing value
const getSpacingValue = <SpacingValue extends string | number | undefined>({
  value,
  theme,
}: {
  value: SpacingValue;
  theme: Theme;
}): string | undefined => {
  if (value === 'auto') return 'auto';
  /**
   * NOTE: don't allow numbers once we have the scale for sizing
   * DO NOT PUBLISH THIS COMPONENT PUBLICLY WITH THIS PIECE OF CODE
   */
  if (typeof value === 'number') {
    return makeSpace(value);
  }
  return value ? makeSpace(getIn(theme, value)) : undefined;
};

const getBaseBoxStyles = ({
  theme,
  display,
  flex,
  flexWrap,
  flexDirection,
  flexGrow,
  flexShrink,
  alignItems,
  alignContent,
  justifyContent,
  alignSelf,
  overflow,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  marginTop,
  marginBottom,
  marginLeft,
  marginRight,
  gap,
  width,
  height,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  position,
  transform,
  top,
  left,
  right,
  bottom,
  background,
  backgroundColor,
  zIndex,
  borderRadius,
}: BaseBoxProps & { theme: Theme }): CSSObject => ({
  display,
  flex,
  flexWrap,
  flexGrow,
  flexShrink,
  flexDirection,
  alignItems,
  alignContent,
  justifyContent,
  alignSelf,
  overflow,
  position,
  top,
  right,
  bottom,
  left,
  paddingTop: getSpacingValue({ value: paddingTop, theme }),
  paddingBottom: getSpacingValue({ value: paddingBottom, theme }),
  paddingLeft: getSpacingValue({ value: paddingLeft, theme }),
  paddingRight: getSpacingValue({ value: paddingRight, theme }),
  marginTop: getSpacingValue({ value: marginTop, theme }),
  marginBottom: getSpacingValue({ value: marginBottom, theme }),
  marginLeft: getSpacingValue({ value: marginLeft, theme }),
  marginRight: getSpacingValue({ value: marginRight, theme }),
  gap: getSpacingValue({ value: gap, theme }),
  width,
  height,
  minHeight: minHeight ? makeSize(minHeight) : undefined,
  minWidth: minWidth ? makeSize(minWidth) : undefined,
  maxHeight: maxHeight ? makeSize(maxHeight) : undefined,
  maxWidth: maxWidth ? makeSize(maxWidth) : undefined,
  transform,
  background,
  backgroundColor,
  zIndex,
  borderRadius: makeBorderSize(getIn(theme, `border.radius.${borderRadius}`)),
});

export default getBaseBoxStyles;
