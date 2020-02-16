import React, { Component } from "react";
import { Navbar, NavbarGroup, Alignment, NavbarHeading } from '@blueprintjs/core';

const styles = {
    header: {
        color: 'burlywood',
        fontSize: '24px',
        fontWeight: '500',
        fontFamily: 'serif'
    }
}
class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Navbar>
                <NavbarGroup
                    align={Alignment.LEFT} >
                    <NavbarHeading
                        style={styles.header} >
                        Schedule Details
                    </NavbarHeading>
                </NavbarGroup>
            </Navbar>
        );
    }
}

export default NavigationBar;