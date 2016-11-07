import React, {PropTypes} from 'react';

class Layout extends React.Component {
    render() {
        return (
            <div className='container-fluid'>
                <p>ACC Header....</p>
                {this.props.children}
            </div>
        );
    }
}

//propType validation
Layout.PropTypes = {
    children: PropTypes.object.isRequired
};

export default Layout;