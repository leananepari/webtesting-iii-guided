import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import { render, fireEvent} from '@testing-library/react';
import App, { asyncFunc } from './App';

describe('<App />', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<App />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  
});

describe('asyncFunc', () => {
  it('eventually resolves to success', () => {
    // let resolvedValue = null;
    asyncFunc().then(res => {
      const expected = 'Success!';
      let resolvedValue = res;
      expect(resolvedValue).toEqual(expected);
    })
  });
})

describe("speak", () => {
  it('Should pass "bark" into speak', () => {
    const { getByText, queryByText } = render(<App />);
    
    fireEvent.click(getByText(/speak/i));

    expect(queryByText(/bark/i)).toBeTruthy();
  })
})