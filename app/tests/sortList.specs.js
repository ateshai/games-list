import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import {SortListComponent} from '../components/SortList';

describe('SortList', () => {

    const props = {
        filter: "all",
        sortByIncrease: false,
        onSortGames : (a,b) => {
            return true;
        }
    };

    it('should render sort list component', () => {
        const wrapper = shallow(<SortListComponent {...props} />);
        expect(wrapper.length).to.equal(1);
    });

    it('should call sorting function when clicked', () => {
        const onSortGames = sinon.spy();
        const wrapper = shallow(<SortListComponent {...props} onSortGames={ onSortGames } />);
        wrapper.find('a').simulate('click');
        expect(onSortGames.calledOnce).to.equal(true);
    });


    it('innerText must change on sort', () => {
        const wrapper = shallow(<SortListComponent {...props} />);
        expect(wrapper.find('span').text()).to.equal('Sort by:Increase');
        wrapper.find('a').simulate('click');
        expect(wrapper.find('span').text()).to.equal('Sort by:Decrease');
    });
});

