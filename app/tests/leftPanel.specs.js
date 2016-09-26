import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import LeftPanel from '../components/LeftPanel';
import configureStore from '../configureStore';


describe('LeftPanel', () => {
    const store = configureStore();

    const props = {
        groupProp : "all"
    };

    it('should render component', () => {
        const leftpanel = shallow(<LeftPanel {...props} store={store} />);
        expect(leftpanel.length).to.equal(1);
    });

    it('should contain 3 menu item', () => {
        const leftpanel = shallow(<LeftPanel {...props} store={store} />);
        console.log(leftpanel.debug());
        expect(leftpanel.find("li").length).to.equal(1);
    });

});

