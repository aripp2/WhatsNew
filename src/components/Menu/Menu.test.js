import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu', () => {

  let wrapper;
  const mockChangeNewsType=jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Menu
      changeNewsType={mockChangeNewsType}
     />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should call the changeNewsType prop with the newsType when clicked', () => {

    wrapper.find('button').at(0).simulate('click');
    wrapper.find('button').at(4).simulate('click');

    expect(mockChangeNewsType).toHaveBeenCalledWith('local');
    expect(mockChangeNewsType).toHaveBeenCalledWith('health');

  });

});

