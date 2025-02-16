import React from 'react';
import renderer from 'react-test-renderer'; // 1: install this npm module as a dev dependency
import { render, fireEvent } from '@testing-library/react'
import Speak  from './Speak';

describe('<Speak />', () => {
  // 2. write this test
  it('matches snapshot', () => {
    const tree = renderer.create(<Speak />); // generates a DOM tree

    // snapshots are a JSON representation of the DOM tree
    expect(tree.toJSON()).toMatchSnapshot();
  });

  // Implementation details => 
  // - what props.speak is doing ...
  // - if props.speak is invoked...

  //what we want to test : 
  // - when our user clicks that button what happens in the app????

  it("displays a message when 'speak button is clicked' ", () => {
    const speak = jest.fn();
    let messageMock = '';
    const { getByText } = render(<Speak speak={speak} messageMock={messageMock}/>);

    // const button = getByText(/speak/i);
    fireEvent.click(getByText(/speak/i));
    // messageMock = 'Success!';

    expect(speak).toHaveBeenCalled();
    // console.log(button)
  })
});
