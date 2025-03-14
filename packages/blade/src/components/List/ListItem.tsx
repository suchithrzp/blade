import styled from 'styled-components';
import React from 'react';
import { Text } from '../Typography';
import type { IconComponent } from '../Icons';
import { useTheme } from '../BladeProvider';
import { useListContext } from './ListContext';
import { UnorderedItemIcon } from './ListItemIcons';
import { ListItemElement } from './ListItemElement';
import {
  listItemBulletMarginRight,
  listItemBulletMarginTop,
  listItemOrderedBulletBoxSize,
  listItemMarginBottom,
  listItemMarginLeft,
} from './listTokens';
import type { ListProps } from './List';
import { getOrderedListItemBullet } from './getOrderedListItemBullet';
import BaseBox from '~components/Box/BaseBox';
import {
  getComponentId,
  getIn,
  isValidAllowedChildren,
  metaAttribute,
  MetaConstants,
} from '~utils';
import type { TestID } from '~src/_helpers/types';

type ListItemProps = {
  /**
   * Children to be rendered for ListItem. This can be a text, ListItemLink or another List.
   *
   */
  children: React.ReactNode;
  /**
   * Icon to be rendered for a ListItem's bullet.
   *
   */
  icon?: IconComponent;
  /**
   * This is a private prop to be used only for internal logic purposes.
   *
   */
  _itemNumber?: undefined;
} & TestID;

const StyledListItem = styled(ListItemElement)<{
  level?: number;
  variant: NonNullable<ListProps['variant']>;
  hasIcon: boolean;
}>(({ level, theme, variant, hasIcon }) => ({
  marginLeft: level
    ? getIn(
        theme,
        listItemMarginLeft[
          `${variant}${variant === 'unordered' && hasIcon ? 'WithIcon' : ''}` as NonNullable<
            ListProps['variant'] | 'unorderedWithIcon'
          >
        ][level],
      )
    : 0,
}));

const ListItem = ({
  children,
  icon: Icon,
  _itemNumber,
  testID,
}: ListItemProps): React.ReactElement => {
  const { level, size, icon: ListContextIcon, variant } = useListContext();
  const { theme, platform } = useTheme();
  const ItemIcon = Icon ?? ListContextIcon;

  if (level && level > 3) {
    throw new Error('[Blade List]: List Nesting is allowed only upto 3 levels.');
  }

  const childrenArray = React.Children.toArray(children);

  // Get children that are not a List component and are valid allowed children
  const validChildItem = childrenArray.filter((child) => {
    if (getComponentId(child) === 'List') return null;

    if (
      typeof child === 'string' ||
      isValidAllowedChildren(child, 'ListItemLink') ||
      isValidAllowedChildren(child, 'ListItemCode')
    ) {
      return child;
    } else {
      throw new Error(
        '[Blade List]: You can only pass a List, ListItemLink, ListItemCode or a string as a child to ListItem.',
      );
    }
  });
  // Get child that is a List component
  const childList = childrenArray.filter((child) =>
    getComponentId(child) === 'List' ? child : null,
  );
  const hasIcon = Boolean(ItemIcon);

  return (
    <StyledListItem
      level={level}
      variant={variant}
      hasIcon={hasIcon}
      {...metaAttribute({ name: MetaConstants.ListItem, testID })}
    >
      <BaseBox
        display="flex"
        flexDirection="row"
        alignItems="center"
        marginBottom={listItemMarginBottom}
      >
        {variant === 'unordered' ? (
          <BaseBox
            marginRight={listItemBulletMarginRight[variant]}
            marginTop={
              listItemBulletMarginTop[`${variant}${hasIcon ? 'WithIcon' : ''}`][platform][size]
            }
            display="flex"
            alignSelf="flex-start"
          >
            {ItemIcon ? (
              <ItemIcon size={size} color="surface.text.subdued.lowContrast" />
            ) : (
              <UnorderedItemIcon level={level} />
            )}
          </BaseBox>
        ) : (
          <BaseBox
            width={listItemOrderedBulletBoxSize[variant][platform][size]}
            height={listItemOrderedBulletBoxSize[variant][platform][size]}
            marginRight={listItemBulletMarginRight[variant]}
            marginTop={listItemBulletMarginTop[variant][platform][size]}
            display="flex"
            flexShrink={0}
            justifyContent="center"
            alignSelf="flex-start"
            alignItems="center"
            borderRadius={variant === 'ordered-filled' ? 'max' : undefined}
            backgroundColor={
              variant === 'ordered-filled'
                ? getIn(theme, 'colors.brand.gray.a100.lowContrast')
                : undefined
            }
          >
            <Text variant="body" type="subtle" size={variant === 'ordered' ? size : 'xsmall'}>
              {`${getOrderedListItemBullet({
                itemNumber: _itemNumber ?? 1,
                level: level ?? 1,
              })}${variant === 'ordered' ? '.' : ''}`}
            </Text>
          </BaseBox>
        )}
        <Text variant="body" size={size}>
          {validChildItem}
        </Text>
      </BaseBox>
      {childList}
    </StyledListItem>
  );
};

ListItem.componentId = 'ListItem';

export { ListItem };
export type { ListItemProps };
