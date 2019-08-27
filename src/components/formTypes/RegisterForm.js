import React from 'react';
import { Field, reduxForm } from 'redux-form'

class RegisterForm extends React.Component {

    renderError({touched, error}) {
        if(touched) {
            return <small>{error}</small> 
        }
    }

    renderInput = ({input, label, type, meta}) => {
        const className = meta.touched && meta.error ? 'error' : '';
        return (
            <div className="field">
                <label>{label}</label>
                <input className={className} {...input} type={type} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit(formValues) {
        console.log(formValues);
    }

    render() {
        const {content, valid} = this.props
        if(!content) {
            return <div>Loading ...</div>
        }
        return (
            <div className="registerForm">
                <h1 className="registerForm__title">{content.register.title}</h1>
                <h3 className="registerForm__subtitle">{content.register.subtitle}</h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="email" component={this.renderInput} label="Email" type="email" />
                    <Field name="password" component={this.renderInput} label="Password" type="password" />
                    <Field name="confirmPassword" component={this.renderInput} label="Confirm Password" type="password" />
                    <button className="btn" disabled={!valid}>{content.register.button}</button>
                </form>
                <div className="privacy">
                    <small>
                        {content.privacy} <a href={content.privacy_link_1.link}>{content.privacy_link_1.text}</a> and <a href={content.privacy_link_2.link}>{content.privacy_link_2.text}</a>
                    </small>
                </div>
            </div>
        )
    }
}
const validate = formValues => {
    const errors = {}
    if (!formValues.email) {
        errors.email = 'Email Required'
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
        errors.email = 'Invalid email address'
      }
      if (!formValues.password) {
        errors.password = 'Password Required'
      } else if (formValues.password.length < 6) {
        errors.password = 'Password must be at least 6 characters'
      }
      if (formValues.confirmPassword !== formValues.password) {
        errors.confirmPassword = 'Confirm password must be the same as the password above'
      }

      return errors;
};
 
export default reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm);