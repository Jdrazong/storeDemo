import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import HighlightedFilterText from '../HighlightedFilterText';

describe('Products: HighlightedFilterText', () => {
    const baseProps = {
        name: 'example',
        nameFilter: 'test'
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<HighlightedFilterText {...baseProps} />);

        expect(wrapper.find('div')).to.have.length(1);
    });

    const propsWithMatchingText = {
        name: 'example',
        nameFilter: 'xam'
    };

    it('should render with highlighted text', () => {
        const wrapper = shallow(<HighlightedFilterText {...propsWithMatchingText} />);

        expect(wrapper.find('div')).to.have.length(1);
        expect(wrapper.find('span')).to.have.length(1);
    });
});
