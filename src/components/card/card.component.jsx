import { Component } from "react";
import './card.styles.css'


function StringToBinary(str = '') {
        let res = '';
        res = str.split('').map(char => {
            return char.charCodeAt(0).toString(2);
        }).join(' ');
        return res;
};

class Card extends Component {

    render() {
        const {id, name, email} = this.props.robot;
        const url = `https://robohash.org/${id}?set=set1&size=180x180`;
        return (
            <div className="col">
                <div className="card custom-card my-4" style={{width: '18rem'}} key={id}>
                    <img 
                        src={url}
                        className='card-img-top' 
                        alt={`robot ${name}`} 
                    />
                    <div className="card-header"><h4>{name}</h4></div>
                    <div className='card-body'>
                        <p className='card-text'>{StringToBinary('Lorem ipsum')}</p>
                        <p className='card-text'>{email}</p>
                        <a href={url} class="btn btn-outline-info custom-color" target={"_blank"}>View My Page!</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;