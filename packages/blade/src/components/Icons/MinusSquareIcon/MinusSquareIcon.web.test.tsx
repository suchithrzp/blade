import MinusSquareIcon from './';
import renderWithTheme from '~src/_helpers/testing/renderWithTheme.web';

describe('<MinusSquareIcon />', () => {
  it('should render MinusSquareIcon', () => {
    const { container } = renderWithTheme(
      <MinusSquareIcon color="feedback.icon.neutral.lowContrast" size="large" />,
    );
    expect(container).toMatchSnapshot();
  });
});
