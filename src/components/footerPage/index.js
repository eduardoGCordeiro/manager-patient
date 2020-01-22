import React, { Component } from 'react';

import { CURRENT_YEAR } from '../../constants';

export default class Footer extends Component{
    render(){
        return (
            <footer className="footer">
                <div className="text-center py-3">© {CURRENT_YEAR} Copyright: Eduardo Cordeiro</div>
            </footer>
        );
    };
};

