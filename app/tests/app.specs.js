import React from 'react';
import {expect} from 'chai';
import {shallow, mount} from 'enzyme';
import App from '../components/App';


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
});

