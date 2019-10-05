import React from 'react';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('SearchForm', () => {

  let wrapper;
  const mockSearchNews = jest.fn();
  const mockInputEvent = {
    target: {
      name: 'searchInput',
      value: 'dog'
    }
  };
  const mockEvent = { preventDefault: jest.fn() };

  beforeEach(() => {
    wrapper = shallow(<SearchForm
      searchNews={mockSearchNews}
     />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
  
  it('should update state when input changes', () => {
    wrapper.instance().handleChange(mockInputEvent);
    expect(wrapper.state('searchInput')).toEqual('dog');
  });

  it('should reset state when resetInput is called', () => {
    wrapper.instance().handleChange(mockInputEvent);
    expect(wrapper.state('searchInput')).toEqual('dog');
    wrapper.instance().resetInput();
    expect(wrapper.state('searchInput')).toEqual('');
  });

  it('should call searchNews and resetInput when submitSearch is called', () => {
    wrapper.instance().resetInput = jest.fn();
    wrapper.instance().submitSearch(mockEvent);
    expect(mockSearchNews).toHaveBeenCalled();
    expect(wrapper.instance().resetInput).toHaveBeenCalled();
  });

  it('should call submitSearch when button is clicked', () => {
    wrapper.instance().submitSearch = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);
    expect(wrapper.instance().submitSearch).toHaveBeenCalledWith(mockEvent);
  });

});