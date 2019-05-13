import React from 'react';
import { withRouter } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            username: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            email: this.state.email,
            username: this.state.username,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user, this.props.history);
    }

    renderErrors() {
        let errors = Object.keys(this.state.errors)

        if (errors.length > 0) {
            return (
                <ul>
                    {errors.map((error, i) => (
                        <li key={`error-${i}`}>
                            {this.state.errors[error]}
                        </li>
                    ))}
                </ul>
            );
        }
    }

    render() {
        return (
            <div className='modal-background'
                onClick={this.props.clearModal}>
                <div className="session-form-container"
                    onClick={e => e.stopPropagation()}>
                    <h1>SIGNUP</h1>
                    <form onSubmit={this.handleSubmit}
                        className="session-form">
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            placeholder="Email"
                        />
                        <input type="text"
                            value={this.state.username}
                            onChange={this.update('username')}
                            placeholder="Username"
                        />
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            placeholder="Password"
                        />
                        <input type="password"
                            value={this.state.password2}
                            onChange={this.update('password2')}
                            placeholder="Confirm Password"
                        />
                        <input type="submit" value="Submit" />
                        {this.renderErrors()}
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(SignupForm);