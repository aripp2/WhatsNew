import React from 'react';
import { shallow } from 'enzyme';
import NewsContainer from './NewsContainer';

describe('NewsContainer', () => {
  it('should match the snapshot with all data passed in correctly', () => {

    const articles = [{
        image: "url",
        headline: "This is the headline",
        description: "This is the description",
        url:"link" 
      },
      {
        image: "another url",
        headline: "another headline",
        description: "another description",
        url: "another link" 
      }];
  
    const wrapper = shallow(<NewsContainer 
      news={articles}
    />);

    expect(wrapper).toMatchSnapshot();
  });
});


