import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import SortList from '../components/SortList';
import configureStore from '../configureStore';


describe('SortList', () => {
    const store = configureStore();

    const props = {
        filter: "all",
        sortByIncrease: false,
        onSortGames : (a,b) => {
            return true;
        }
    };

    it('should render sort list component', () => {
        const wrapper = shallow(<SortList {...props} store={store} />);
        expect(wrapper.length).to.equal(1);
    });

    xit('should call sorting function when clicked', () => {
        const onSortGames = sinon.spy();
        const wrapper = shallow(<SortList {...props} onSortGames={onSortGames} store={store} />);
        console.log(wrapper.debug());
        wrapper.find('a').simulate('click');
        expect(onSortGames.calledOnce).to.equal(true);
    });


    xit('should has class "sort"', () => {
        const wrapper = shallow(<SortList {...props} store={store} />);
        //console.log(wrapper.find('span'));
        expect(wrapper.find('span')).to.have.length(1);
    });
});

