import { getByTestId } from '@testing-library/react';
import {cleanup, fireEvent, render} from '@testing-library/react';
import Politics from './Politics';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('render politics component', async () => {
  const {queryAllByTestId, findAllByTestId} = render(
    <Politics />,
  );
//   expect(getByTestId("politics_card")).toHaveTextContent()
//   expect(1);
//   const politics_container = await queryAllByTestId("politics_card")
//   console.log("politics_container========================================================================================================", politics_container)
//   expect(politics_container.length).toBeGreaterThan(1);
// //   fireEvent.click(getByLabelText(/off/i));

//   expect(queryByLabelText(/on/i)).toBeTruthy();
});