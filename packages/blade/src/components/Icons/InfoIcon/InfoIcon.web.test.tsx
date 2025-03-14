import InfoIcon from '.';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.web';

describe('<InfoIcon />', () => {
  it('should render InfoIcon', () => {
    const { container } = renderWithTheme(
      <InfoIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
