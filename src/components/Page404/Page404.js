import React, {Component} from 'react';
import './Page404.css';

class Page404 extends Component {   

    render() {
        return (
            <div className="Page404">
                <div style={{fontSize: '48px', fontWeight: 'bold', marginBottom: '20px'}}>404</div>
                <div>You  might have not sign in . Please do it on Sign In page</div>
            </div>
        )
    }
}

export default Page404;