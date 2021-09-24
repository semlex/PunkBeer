import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import BeerCard from '../beer-card/beer-card';

const CardsRow = ({cards, onToggleFavourite}) => {

    const elements = cards.map((card) => {
        const {label} = card;
        return (
            <Col className = "my-2" xs = "12" md = "6" lg = "4">
                <BeerCard 
                    {...card}
                    onToggleFavourite = {onToggleFavourite}/>
            </Col>
        );
    })
    return (
        <Container className = "cards-row">
            <Row>
                {elements}
            </Row>
        </Container>
    );
}

export default CardsRow;