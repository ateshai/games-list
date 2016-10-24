import React from 'react';
import {expect} from 'chai';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import {LeftPanelComponent} from '../components/LeftPanel';


describe('LeftPanel', () => {

    const props = {
        groupProp : "all",
        types:[{
                count: 10,
                gameType: "Action"
            },
            {
                count: 11,
                gameType: "Simulation"
            },
            {

                count: 12,
                gameType: "Adventure"
            }],
        ratings:[{
                count: 10,
                gameType: 1
            },
            {
                count: 11,
                gameType: 2
            },
            {

                count: 12,
                gameType: 3
            }]
    };

    it('should render leftpanel', () => {
        const leftpanel = shallow(<LeftPanelComponent {...props} />);
        expect(leftpanel.length).to.equal(1);
    });

    it('should contain a div with classname "row', () => {
        const leftpanel = shallow(<LeftPanelComponent {...props} />);
        expect(leftpanel.find('.row')).to.have.length(1);
    });

});

