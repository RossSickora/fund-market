import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils'
import renderer from 'react-test-renderer';
import FundItem from './FundItem';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FundItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// it('changes the elevation to 6 on mouse entering the component', (done) => {
//     const component = renderer.create(<FundItem/>,);

//     let tree = component.toJSON();
//     expect(tree).toMatchSnapshot();


//     tree.props.onMouseOver();
//     tree = component.toJSON();
//     //expect(tree.children.elevation).toEqual(6);
//     expect(tree).toMatchSnapshot();

//     tree.props.onMouseOut();
//     tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
// });