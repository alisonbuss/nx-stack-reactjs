import { render } from '@testing-library/react';

import Welcome from '@lib/react/components/Welcome/Welcome';

describe('Welcome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Welcome message="Passing message to test!" />,
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the message', () => {
    const { getByText } = render(
      <Welcome message="Passing message to test!" />,
    );
    expect(getByText('Passing message to test!')).toBeTruthy();
  });
});
