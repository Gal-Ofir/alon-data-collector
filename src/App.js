import React from 'react';
import './App.css';
import Chart from "./chart/Chart";
import {verifyHash, attemptLogin} from './utils/loginUtils'
import LoginModal from "./login/LoginModal";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showLoginModal: false
        };
    }

    getUserLoggedIn = () => {
        const hashInStorage = sessionStorage.getItem("loginSessKey");
        if (!hashInStorage) return false;
        return verifyHash(hashInStorage)
            .then(response => {
                return response.data.result;
            });
    };

    validateAndSubmitForm = (username, password, callback) => {
        if (!username || !password) {
            if (callback) callback(false);
            return;
        }

        attemptLogin(username, password)
            .then(response => {
                if (response.data.result) {
                    sessionStorage.setItem("loginSessKey", response.data.hash);
                    this.setState({showLoginModal: false});
                }
                if (callback) callback(response.data.result);
            });

    };

    componentDidMount() {
        const isLoggedIn = this.getUserLoggedIn();
        if (!isLoggedIn) {
            this.setState({showLoginModal: true});
        }
    }

    render() {
        return (
            <div className="App">
                <LoginModal
                    showLoginModal={this.state.showLoginModal}
                    validateAndSubmitForm={this.validateAndSubmitForm}
                />
                <Chart/>
            </div>
        );
    }
}

export default App;
