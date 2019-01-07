import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Filters from './Filters';
import SelectedCategoryContainer from './SelectedCategoryContainer';

describe('Products: Filters', () => {
    const baseProps = {
        setNameFilterValue: () => {},
        nameFilter: 'test'
    };

    it('should render with basic components', () => {
        const wrapper = shallow(<Filters {...baseProps} />);

        const input = wrapper.find('input');

        expect(input).to.have.length(1);
        expect(input.props().value).to.equal(baseProps.nameFilter);
        expect(wrapper.find(SelectedCategoryContainer)).to.have.length(1);
    });

    const propsWithSpy = {
        setNameFilterValue: global.sinonSandbox.spy(),
        nameFilter: 'test'
    };

    it('should change nameFilter', () => {
        const wrapper = shallow(<Filters {...propsWithSpy} />);

        const input = wrapper.find('input');

        input.simulate('change', { target: { value: 'test' } });
        expect(propsWithSpy.setNameFilterValue.calledOnce).to.equal(true);
        expect(propsWithSpy.setNameFilterValue.calledWith({ target: { value: 'test' } })).to.equal(true);
    });
});
