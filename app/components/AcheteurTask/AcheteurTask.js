import React, { PropTypes } from 'react';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import './AcheteurTask.scss';


class AcheteurTask extends React.Component {
  static propTypes = {
    error:        PropTypes.string,
    onReservationClick: PropTypes.func.isRequired
  }

  reservation (id) {
    this.props.onReservationClick(id);
  };

  render () {
    var self= this
    var tasks = [
      {"id":1, "type":"night", "title":"Réservation chambres", "date":"01/12/2016", "description":"Barcelone pendant 3 jours"},
      {"id":2, "type":"night", "title":"Réservation chambres", "date":"04/12/2016", "description":"Paris pendant 1 jour"},
      {"id":3, "type":"night", "title":"Réservation chambres", "date":"15/12/2016", "description":"Bordeaux pendant 5 jours"},
      {"id":4, "type":"night", "title":"Réservation voiture de location", "date":"26/12/2016", "description":"Bordeaux pendant 10 jours"}
      ]
    var task = tasks.filter(function(item) {
      return item.id == self.props.params.id}
    )[0]
    var buys = [
      {"etablissement":1, "etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"68", "capacity":5, "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":2, "etablissementIcon":"booking", "type":"night", "name":"Booking", "averagePrice":"70", "capacity":8, "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"71", "capacity":4, "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":3, "etablissementIcon":"guesttoguest", "type":"night", "name":"Guest To Guest", "averagePrice":"50", "capacity":3, "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
      {"etablissement":1, "etablissementIcon":"airbnb", "type":"night", "name":"Air BnB", "averagePrice":"50", "capacity":2, "description":"C'est trop de la balle Air BnB!!!"},
      ]
    var buyingList = buys.map(function(aBuy, index){
      return (
        <Card key={index}>
          <CardHeader
            title={aBuy.name}
            subtitle={"Prix moyen = "+aBuy.averagePrice+" €"}
            actAsExpander={true}
            showExpandableButton={true}>
            <img src={require("./icons/"+aBuy.etablissementIcon+".png")} className="icone2" />
          </CardHeader>
          <CardActions>
            <FlatButton label="Réserver" />
            <FlatButton label="Ignorer" />
          </CardActions>
          <CardText expandable={true}>
            Capacité : {aBuy.capacity}
            <p>{aBuy.description}</p>
          </CardText>
        </Card>
      )
    })
    return (
      <div>
        <h2>Disponibilités pour le {task.date} : {task.title}</h2>
        <p>{task.description}</p>
        {buyingList}
      </div>
    );
  }
}

export default AcheteurTask;
