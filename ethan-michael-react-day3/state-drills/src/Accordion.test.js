import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';
import toJson from 'enzyme-to-json';
import Accordion from './Accordion';

const testSections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  },
  {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  },
];

it('renders withou crashing', () => {

  const div = document.createElement('div');
  ReactDOM.render(<Accordion sections={testSections}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Snapshot Tests', () => {

  it('The component renders an empty ul when the sections prop is not supplied', () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('The component renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections={testSections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('The component opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={testSections} />);
    wrapper.find('button').at(0).simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('The component only opens the last section when multiple sections have been clicked.', () => {
    const wrapper = shallow(<Accordion sections={testSections} />);
    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(1).simulate('click');
    // wrapper.find('li#1 button').simulate('click');
    expect(toJson(wrapper)).toMatchSnapshot();
  });

});
