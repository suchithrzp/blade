/* do not change this file, it is auto generated by storybook. */

import { configure, addDecorator, addParameters, addArgsEnhancer } from '@storybook/react-native';

import '@storybook/addon-ondevice-notes/register';
import '@storybook/addon-ondevice-controls/register';
import '@storybook/addon-ondevice-backgrounds/register';
import '@storybook/addon-ondevice-actions/register';

import { argsEnhancers } from '@storybook/addon-actions/dist/modern/preset/addArgs';

import { decorators, parameters } from './preview';

if (decorators) {
  decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
  addParameters(parameters);
}

argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));

const getStories = () => {
  return [
    require('../../src/components/Alert/Alert.stories.tsx'),
    require('../../src/components/Badge/Badge.stories.tsx'),
    require('../../src/components/Button/Button/Button.stories.tsx'),
    require('../../src/components/Button/IconButton/IconButton.stories.tsx'),
    require('../../src/components/Card/Card.stories.tsx'),
    require('../../src/components/Checkbox/Checkbox.stories.tsx'),
    require('../../src/components/Checkbox/CheckboxGroup.stories.tsx'),
    require('../../src/components/Counter/Counter.stories.tsx'),
    require('../../src/components/Dropdown/Dropdown.stories.tsx'),
    require('../../src/components/Icons/Icons.stories.tsx'),
    require('../../src/components/Indicator/Indicator.stories.tsx'),
    require('../../src/components/Input/BaseInput/BaseInput.stories.tsx'),
    require('../../src/components/Input/OTPInput/OTPInput.stories.tsx'),
    require('../../src/components/Input/PasswordInput/PasswordInput.stories.tsx'),
    require('../../src/components/Input/TextArea/TextArea.stories.tsx'),
    require('../../src/components/Input/TextInput/TextInput.stories.tsx'),
    require('../../src/components/Link/BaseLink/BaseLink.stories.tsx'),
    require('../../src/components/Link/Link/Link.stories.tsx'),
    require('../../src/components/List/List.stories.tsx'),
    require('../../src/components/ProgressBar/ProgressBar.stories.tsx'),
    require('../../src/components/Radio/Radio.stories.tsx'),
    require('../../src/components/SkipNav/SkipNav.stories.tsx'),
    require('../../src/components/Spinner/BaseSpinner/BaseSpinner.stories.tsx'),
    require('../../src/components/Spinner/Spinner/Spinner.stories.tsx'),
    require('../../src/components/Typography/BaseText/BaseText.stories.tsx'),
    require('../../src/components/Typography/Code/Code.stories.tsx'),
    require('../../src/components/Typography/Heading/Heading.stories.tsx'),
    require('../../src/components/Typography/Text/Text.stories.tsx'),
    require('../../src/components/Typography/Title/Title.stories.tsx'),
    require('../../src/components/VisuallyHidden/VisuallyHidden.stories.tsx'),
    require('../../src/storybook-recipes/AccessibilityInterop/AccessibilityInteropDemo.stories.tsx'),
    require('../../src/storybook-recipes/SimpleDashboard.stories.tsx'),
    require('../../src/storybook-recipes/SimpleForm.stories.tsx'),
    require('../../src/tokens/theme/overrideTheme.stories.tsx'),
    require('../../src/components/Button/BaseButton/BaseButton.stories.internal.tsx'),
  ];
};

configure(getStories, module, false);
