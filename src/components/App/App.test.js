import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {

  let wrapper;
  
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
      description: 'Local Description Two of Dog',
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
  };

  let mockCurrentNews = mockNews.mockLocal;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when changeNewsType is called', () => {
    wrapper.instance().setState({ news: mockNews, currentNews: mockNews.mockLocal });
    expect(wrapper.state('currentNews')).toEqual(mockNews.mockLocal);

    wrapper.instance().changeNewsType('mockHealth');
    expect(wrapper.state('currentNews')).toEqual(mockNews.mockHealth);

  });

  it('should update state when searchNews is called', () => {
    wrapper.instance().setState({ news: mockNews, currentNews: mockNews.mockLocal });
    const expected = [{
      id: 2,
      headline: 'Local Headline Two',
      img: 'Local Image Two',
      description: 'Local Description Two of Dog',
      url: 'Local URL Two'
    }];
    wrapper.instance().searchNews('dog');
    expect(wrapper.state('currentNews')).toEqual(expected);

  });

});