import React from 'react';
import RegisterForm from '../formTypes/RegisterForm';
import LeadForm from '../formTypes/LeadForm';

class Template extends React.Component {
    partTowAccessList = ['popPush']
    middlePartEl = React.createRef();

    removeElement({current}) {
        current.parentElement.removeChild(current);
        document.querySelector('.bottomPart').style.display = 'block';
        setTimeout(() => {document.querySelector('.bottomPart').scrollIntoView({behavior: 'smooth'})}, 200)

    }
    renderSecondPart() {
        if(this.partTowAccessList.indexOf(this.props.classLP) > -1) {
            return (
                <section ref={this.middlePartEl} className="middlePart">
                    <p>“</p>
                    <p>{this.props.translate.middleSentence}</p>
                    <div onClick={() => this.removeElement(this.middlePartEl)}>
                        <p>Learn More</p>
                        <div>&#8595;</div>
                    </div>
                </section>
            )
        }
    }

    renderBottomPart() {
        if(this.props.translate.reviews) {
            return (
                <section className="bottomPart">
                    <div className="firstPart">
                        {this.renderSigns()}
                    </div>
                    <div className="secondPart">
                        <h1>{this.props.translate.reviews.title}</h1>
                        <div className="reviewsWrapper">
                            {this.renderReviews()}
                            <button className="btn btn-network">{this.props.translate.reviews.btn}</button>
                        </div>
                    </div>
                </section>
            )
        }
    }

    rednerPoints() {
        return this.props.translate.points ? this.props.translate.points.map(point => <li key={point}>{point}</li>) : '';
    }
    renderSigns() {
        return this.props.translate.signs ? this.props.translate.signs.map(sign => {
            return (
                <div key={sign.icon} className="signwrapper">
                    <i className={`fa fa-${sign.icon}`} />
                    <h2>{sign.title}</h2>
                    <p>{sign.description}</p>
                </div>
            )
        }) : '';
    }
    renderReviews() {
        return this.props.translate.reviews.reviews ? this.props.translate.reviews.reviews.map(review => {
            return (
                <div className="review" key={review.site}>
                    <a href={review.link} target="blank">{review.site}</a>
                    <p>{review.review}</p>
                </div>
            )
        }) : ''
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
            <div className={`template ${this.props.classLP}`}>
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
            {this.renderSecondPart()}
            {this.renderBottomPart()}
            </div>
        );
    }
}
 
export default Template;