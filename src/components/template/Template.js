import React from 'react';
import RegisterForm from '../formTypes/RegisterForm';
import LeadForm from '../formTypes/LeadForm';

class Template extends React.Component {

    rednerPoints() {
        console.log(this.props.translate.points)
        return this.props.translate.points ? this.props.translate.points.map(point => <li key={point}>{point}</li>) : '';
    }
    renderForm() {
        const {formType} = this.props;
        const formContext = this.props.translate.form;
            if(formType === 'register') {
                return <RegisterForm content={formContext}/>
            } else if(formType === 'lead') {
                return <LeadForm content={{formContext}} />
            }
    }
    render() { 
        return ( 
            <div className={this.props.classLP}>
             <section className="first backgroundTop">
                <div className="container">
                <img className="logo" src={require('../../assets/img/admaven-logo-white-smaller.png')} alt="logo" />
                    <div className="wrapper">
                        <div className="context">
                            <h2 className="title"><span className="title__1">{this.props.translate.title_1}</span> {this.props.translate.title_2}</h2>
                            <h2 className="title__sub">{this.props.translate.subtitle__1} <br /> {this.props.translate.subtitle__2}</h2>
                            <div className="points"><ul>{this.rednerPoints()}</ul></div>
                        </div>
                        <div className="form">
                            {this.renderForm()}
                        </div>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}
 
export default Template;