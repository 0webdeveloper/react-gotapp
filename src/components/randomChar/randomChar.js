import React, {Component} from 'react';
import './randomChar.css';
import gotService from '../../services/gotService';
import Spinner from '../spinner/';
import ErrorMessage from '../error/errorMessage';


export default class RandomChar extends Component {
    constructor() {
        super();
        this.updateChar();
        this.timerId = setInterval(this.updateChar, 1500);
        clearInterval(this.timerId);
        console.log('constructor');
    }
    gotService = new gotService();
    state = {
        char : {},
        loading: true,
        error: false
    };

    componentDidMount() {
        console.log('mounting');
    }

    componentWillUnmount() {
        console.log('unmounting');
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false

        });
    };

    onError = (err) => {
        this.setState({
            error: true,
            loading: false
        });
    }

    updateChar = () => {
        const id = Math.floor(Math.random()*140 + 25);
        // const id = 130000;
        this.gotService
          .getCharacter(id)
          .then(this.onCharLoaded)
          .catch(this.onError);
    }

    render() {


        console.log('render');
        const {char, loading, error} = this.state;
        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char} /> : null;
        

        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const View = ({char}) => {
    const {name, gender, born, died, culture} = char;

    return (
        <>
            <h4>Random Character: {name}</h4>
            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Gender </span>
                    <span>{gender}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Born </span>
                    <span>{born}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Died </span>
                    <span>{died}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                    <span className="term">Culture </span>
                    <span>{culture}</span>
                </li>
            </ul>
        </>
    )
}