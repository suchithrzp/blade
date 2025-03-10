/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import type { BadgeProps } from '../Badge';
import { Badge } from '../Badge';
import type { LinkProps } from '../Link';
import { Link } from '../Link';
import type { ButtonProps } from '../Button';
import { Button } from '../Button';
import { Divider } from './Divider';
import { useVerifyInsideCard, useVerifyAllowedComponents } from './CardContext';
import { ComponentIds } from './Card';
import BaseBox from '~components/Box/BaseBox';
import type { TextProps, TextVariant } from '~components/Typography';
import { Heading, Text } from '~components/Typography';
import type { IconComponent } from '~components/Icons';
import type { CounterProps } from '~components/Counter';
import { Counter } from '~components/Counter';
import { minHeight } from '~components/Button/BaseButton/buttonTokens';
import type { WithComponentId } from '~utils';
import {
  metaAttribute,
  MetaConstants,
  getComponentId,
  isValidAllowedChildren,
  makeSpace,
} from '~utils';
import type { TestID } from '~src/_helpers/types';

const CardHeaderIcon: WithComponentId<{ icon: IconComponent }> = ({ icon: Icon }) => {
  useVerifyInsideCard('CardHeaderIcon');

  return <Icon color="surface.text.normal.lowContrast" size="xlarge" />;
};
CardHeaderIcon.componentId = ComponentIds.CardHeaderIcon;

const CardHeaderCounter: WithComponentId<CounterProps> = (props) => {
  useVerifyInsideCard('CardHeaderCounter');

  return <Counter {...props} />;
};
CardHeaderCounter.componentId = ComponentIds.CardHeaderCounter;

const CardHeaderBadge: WithComponentId<BadgeProps> = (props) => {
  useVerifyInsideCard('CardHeaderBadge');

  return <Badge {...props} />;
};
CardHeaderBadge.componentId = ComponentIds.CardHeaderBadge;

const CardHeaderText: WithComponentId<TextProps<{ variant: TextVariant }>> = (props) => {
  useVerifyInsideCard('CardHeaderText');

  return <Text {...props} />;
};
CardHeaderText.componentId = ComponentIds.CardHeaderText;

const CardHeaderLink: WithComponentId<LinkProps> = (props) => {
  useVerifyInsideCard('CardHeaderLink');

  return <Link {...props} />;
};
CardHeaderLink.componentId = ComponentIds.CardHeaderLink;

type CardHeaderIconButtonProps = Omit<
  ButtonProps,
  'variant' | 'size' | 'iconPosition' | 'isFullWidth' | 'children'
> & {
  icon: IconComponent;
};

const CardHeaderIconButton: WithComponentId<CardHeaderIconButtonProps> = (props) => {
  useVerifyInsideCard('CardHeaderIconButton');

  return (
    <BaseBox width={makeSpace(minHeight.xsmall)}>
      <Button {...props} variant="tertiary" size="xsmall" iconPosition="left" isFullWidth />
    </BaseBox>
  );
};
CardHeaderIconButton.componentId = ComponentIds.CardHeaderIconButton;

type CardHeaderProps = {
  children?: React.ReactNode;
} & TestID;

const CardHeader: WithComponentId<CardHeaderProps> = ({ children, testID }) => {
  useVerifyInsideCard('CardHeader');
  useVerifyAllowedComponents(children, 'CardHeader', [
    ComponentIds.CardHeaderLeading,
    ComponentIds.CardHeaderTrailing,
  ]);

  return (
    <BaseBox
      marginBottom="spacing.7"
      {...metaAttribute({ name: MetaConstants.CardHeader, testID })}
    >
      <BaseBox
        marginBottom="spacing.7"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        {children}
      </BaseBox>
      <Divider />
    </BaseBox>
  );
};
CardHeader.componentId = ComponentIds.CardHeader;

type CardHeaderLeadingProps = {
  title: string;
  subtitle?: string;
  /**
   * prefix element of Card
   *
   * Accepts: `CardHeaderIcon` component
   */
  prefix?: React.ReactNode;
  /**
   * suffix element of Card
   *
   * Accepts: `CardHeaderCounter` component
   */
  suffix?: React.ReactNode;
};
const CardHeaderLeading: WithComponentId<CardHeaderLeadingProps> = ({
  title,
  subtitle,
  prefix,
  suffix,
}) => {
  useVerifyInsideCard('CardHeaderLeading');

  if (prefix && !isValidAllowedChildren(prefix, ComponentIds.CardHeaderIcon)) {
    throw new Error(
      `[Blade CardHeaderLeading]: Only \`${ComponentIds.CardHeaderIcon}\` component is accepted in prefix`,
    );
  }

  if (suffix && !isValidAllowedChildren(suffix, ComponentIds.CardHeaderCounter)) {
    throw new Error(
      `[Blade CardHeaderLeading]: Only \`${ComponentIds.CardHeaderCounter}\` component is accepted in prefix`,
    );
  }

  return (
    <BaseBox flex={1} display="flex" flexDirection="row">
      <BaseBox marginRight="spacing.3" alignSelf="center" display="flex">
        {prefix}
      </BaseBox>
      <BaseBox>
        <BaseBox display="flex" flexDirection="row" alignItems="center" flexWrap="wrap">
          <Heading size="small" variant="regular" type="normal">
            {title}
          </Heading>
          <BaseBox marginLeft="spacing.3">{suffix}</BaseBox>
        </BaseBox>
        <Text variant="body" size="small" weight="regular">
          {subtitle}
        </Text>
      </BaseBox>
    </BaseBox>
  );
};
CardHeaderLeading.componentId = ComponentIds.CardHeaderLeading;

type CardHeaderTrailingProps = {
  /**
   * Renders a visual ornament in card header trailing section
   *
   * Accepts: `CardHeaderLink`, `CardHeaderText`, `CardHeaderIconButton`, `CardHeaderBadge`
   */
  visual?: React.ReactNode;
};

const headerTrailingAllowedComponents = [
  ComponentIds.CardHeaderLink,
  ComponentIds.CardHeaderText,
  ComponentIds.CardHeaderIconButton,
  ComponentIds.CardHeaderBadge,
];

const CardHeaderTrailing: WithComponentId<CardHeaderTrailingProps> = ({ visual }) => {
  useVerifyInsideCard('CardHeaderTrailing');

  if (visual && !headerTrailingAllowedComponents.includes(getComponentId(visual)!)) {
    throw new Error(
      `[Blade CardHeaderTrailing]: Only one of \`${headerTrailingAllowedComponents.join(
        ', ',
      )}\` component is accepted in visual`,
    );
  }

  return <BaseBox alignSelf="center">{visual}</BaseBox>;
};
CardHeaderTrailing.componentId = ComponentIds.CardHeaderTrailing;

export {
  CardHeader,
  CardHeaderLeading,
  CardHeaderTrailing,
  CardHeaderBadge,
  CardHeaderIcon,
  CardHeaderCounter,
  CardHeaderText,
  CardHeaderLink,
  CardHeaderIconButton,
};
