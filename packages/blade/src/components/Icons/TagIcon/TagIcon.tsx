import { Svg, Path } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const TagIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} fill="none" viewBox="0 0 24 24">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2a1 1 0 0 1 1-1h10a1 1 0 0 1 .707.293L21.3 9.885a3 3 0 0 1 0 4.23l-.002.002-7.17 7.17a3.001 3.001 0 0 1-4.244 0l-8.59-8.58A1 1 0 0 1 1 12V2Zm2 1v8.585l8.297 8.287v.001a1 1 0 0 0 1.415 0l7.169-7.168a1 1 0 0 0 0-1.41L11.586 3H3Z"
        fill={iconColor}
      />
      <Path d="M10 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" fill={iconColor} />
    </Svg>
  );
};

export default TagIcon;
