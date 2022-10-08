import { Component } from "react";
import Card from '../card/card.component'


class CardListComponent extends Component {
    render() {
        const {robots} = this.props;
        return (
            <div className='card-list row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-3'>
                {robots.map((robot) => {
                    const {name, email, id} = robot;
                    return (
                        <Card robot={robot} />
                    )
                })}
            </div>
        );
    }
}

export default CardListComponent;