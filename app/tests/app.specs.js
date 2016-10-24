import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import App from '../components/App';
import LeftPanel from '../components/LeftPanel';
import RightPanel from '../components/RightPanel';


describe('app', () => {

    const props = {
        params: {
            groupProp : "all",
            groupPropVal: 'all'
        }
    };

    it('should render properly', () =>{
        expect(
            shallow(<App {...props}  />).length
        ).to.equal(1);
    });

    it('should contain LeftPanel', () =>{
        expect(
            shallow(<App {...props}  />).find(LeftPanel).length
        ).to.equal(1);
    });
    it('should contain RightPanel', () =>{
        expect(
            shallow(<App {...props}  />).find(RightPanel).length
        ).to.equal(1);
    });
});

