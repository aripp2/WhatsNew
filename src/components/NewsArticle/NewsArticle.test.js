import React from 'react';
import { shallow } from 'enzyme';
import NewsArticle from './NewsArticle';

describe('NewsArticle', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    const wrapper = shallow(<NewsArticle
      image="url"
      headline="This is the headline"
      description="This is the description"
      url="link"
    />);

    expect(wrapper).toMatchSnapshot();
  });
});   

