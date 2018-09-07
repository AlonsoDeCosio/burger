import React from 'react'
import { configure, shallow } from 'enzyme';
import Adaptor from 'enzyme-adapter-react-16';

import NavigationItem from './NavigationItem/NavigationItem'
import NavigationItems from './NavigationItems'

configure({adapter: new Adaptor()})

describe('<NavigationItems />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<NavigationItems />);
    })

    it('should render two <NavigationItem /> elemnets if not authenticated', () => {
        expect(wrapper.find(NavigationItem)).toHaveLength(2);
    });

    it('should render three <NavigationItem /> elemnets if authenticated', () => {
        //wrapper = shallow(<NavigationItems isAuthenticated/>);
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.find(NavigationItem)).toHaveLength(3);
    });

    it('should an exact logout button', () => {
        wrapper.setProps({isAuthenticated: true})
        expect(wrapper.contains(<NavigationItem link="/logout">Logout</ NavigationItem> )).toEqual(true);
    });
});