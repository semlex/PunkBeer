import React, {Component} from 'react';
import {Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';
import './beer-card.css';

export default class BeerCard extends Component {

  onToggleFavourite = (e) => {
    this.props.onToggleFavourite(this.props.id);
  }

  render() {
      const {label, description, img, favourite} = this.props;
      let classNames = 'fa fa-star';

      if (!favourite) {
        classNames += '-o';
      }

      return (
          <Card className = "beer-card flex-row">
            <div className = "beer-img-block d-flex py-3">
              <CardImg className = "beer-img" src = {img} alt=""/>
            </div>
            <CardBody className = "beer-body">
              <div className = "fav-button d-flex justify-content-end">
                <i
                  onClick = {this.onToggleFavourite}
                  className = {classNames}/>
              </div>
              <CardTitle tag = "h5" className = "beer-title mb-1">{label}</CardTitle>
              <CardText className = "beer-text d-block">{description}</CardText>
            </CardBody>
        </Card>
      )
  }
}