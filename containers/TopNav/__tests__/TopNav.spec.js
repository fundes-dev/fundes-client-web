import { fireEvent, waitForElement } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TopNav from '../index';
import userSaga from '../../../store/sagas/user';

import renderWith from '../../../utils/test-utils';

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({
    pathname: '',
  })),
}));


const makeState = (other = {}) => ({
  user: {
    isAuthenticated: false,
    ...other,
  },
});

describe('Mock Login', () => {
  it("when user isn't authenticated and clicks Mock Login, it logs the user in", async () => {
    const state = makeState();

    const { getByText } = renderWith(
      <TopNav />,
      {
        state,
        sagas: userSaga,
      },
    );

    fireEvent.click(getByText('Mock Login'));
    await waitForElement(() => getByText('Mock Logout'));

    expect(
      getByText('Mock Logout'),
    ).toBeInTheDocument();
  });
});
