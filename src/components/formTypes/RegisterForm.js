import React from 'react';


class RegisterForm extends React.Component {
    render() {
        const {content} = this.props
        console.log(content)
        if(!content) {
            return <div>Loading ...</div>
        }
        return (
            <div>{content.privacy}</div>
        )
    }
}
 
export default RegisterForm;