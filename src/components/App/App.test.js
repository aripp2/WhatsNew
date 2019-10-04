import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper;
  const mockChangeNewsType = jest.fn();
  
  const mockNews = {
    mockLocal: [{
      id: 1,
      headline: 'Local Headline One',
      img: 'Local Image One',
      description: 'Local Description One',
      url: 'Local URL One'
    },
    {
      id: 2,
      headline: 'Local Headline Two',
      img: 'Local Image Two',
      description: 'Local Description Two',
      url: 'Local URL Two'
    }],
    mockHealth: [{
      id: 1,
      headline: 'Health Headline One',
      img: 'Health Image One',
      description: 'Health Description One',
      url: 'Health URL One'
    },
    {
      id: 2,
      headline: 'Health Headline Two',
      img: 'Health Image Two',
      description: 'Health Description Two',
      url: 'Health URL Two'
    }]
  }

  beforeEach(() => {
    wrapper = shallow(<App />);
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when changeNewsType is called', () => {
    wrapper.instance().changeNewsType('mockHealth');
    console.log(wrapper.state().currentNews)

    expect(wrapper.state('currentNews')).toEqual(mockNews.mockHealth);

  });

});