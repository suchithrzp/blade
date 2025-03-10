import { Svg, G, Path, Defs, ClipPath, Rect } from '../_Svg';
import type { IconComponent } from '..';
import useIconProps from '../useIconProps';

const CloudIcon: IconComponent = ({ size, color }) => {
  const { height, width, iconColor } = useIconProps({ size, color });

  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_60_394)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.49 9.03011C16.0571 4.92061 11.8447 2.38572 7.48287 3.12864C2.87457 3.91353 -0.365082 8.09555 0.0254645 12.7528C0.117768 14.1386 0.66873 16.1707 2.04111 17.8807C3.44928 19.6352 5.68719 21.0009 8.99998 21.0009H18C21.3137 21.0009 24 18.3146 24 15.0009C24 12.793 22.9167 11.2454 21.45 10.2919C20.2557 9.51543 18.8182 9.13309 17.49 9.03011ZM15.7717 10.2509C14.8621 6.72803 11.4054 4.48935 7.81868 5.10024C4.23196 5.71114 1.71122 8.96791 2.01911 12.5932L2.02058 12.6128C2.08934 13.6678 2.52767 15.2916 3.60089 16.6288C4.64159 17.9255 6.31278 19.0009 8.99998 19.0009H18C20.2091 19.0009 22 17.21 22 15.0009C22 13.5538 21.3332 12.6014 20.3599 11.9687C19.3434 11.3078 17.9824 11.0009 16.74 11.0009C16.284 11.0009 15.8857 10.6924 15.7717 10.2509Z"
          fill={iconColor}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_60_394">
          <Rect width="24" height="24" fill={iconColor} />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CloudIcon;
