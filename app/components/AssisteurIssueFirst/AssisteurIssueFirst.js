import React, { PropTypes } from 'react';
import DatePicker from 'material-ui/DatePicker';
import TimePicker from 'material-ui/TimePicker';
import Divider from 'material-ui/Divider';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import Paper from 'material-ui/Paper';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';

export default class AssisteurIssueFirst extends React.Component {
  static propTypes = {
  };

  handleKeyPress (event) {
    if (event.key === 'Enter') {
      this.onValidation({});
    }
  }

  render () {
    return (
      <Paper className='page' style={{ marginLeft: '10px' }}>
        <AppBar title="Saisie incident"/>
        <div className='column-container'>
          <Paper className='page left-column' style={{ paddingLeft: '10px' }}>
            <h3 className='separator'>Appelant</h3>
            <Divider />
            <TextField
              className='issue-field half'
              hintText='Nom appelant'
              floatingLabelText='Nom appelant'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='nom-appelant'
              ref='nom-appelant'
            />
            <TextField
              className='issue-field half'
              hintText='Téléphone'
              floatingLabelText='Téléphone'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='telephone'
              ref='telephone'
            />
            <h3 className='separator'>Nom conducteur</h3>
            <Divider />
            <TextField
              className='issue-field half'
              hintText='VIN/Immat'
              floatingLabelText='VIN/Immat'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='immat'
              ref='immat'
            />
            <TextField
              className='issue-field half'
              hintText='Nom conducteur'
              floatingLabelText='Nom conducteur'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='nom-conducteur'
              ref='nom-conducteur'
            />
            <TextField
              className='issue-field full'
              hintText='Société, Entreprise, Association'
              floatingLabelText='Société, Entreprise, Association'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='company'
              ref='company'
            />
            <h3 className='separator'>Produit d'assistance</h3>
            <Divider />
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Produit' primaryText='...' />
              <MenuItem label='Produit' primaryText='Garantie constructeur' />
            </SelectField>
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Formule' primaryText='...' />
              <MenuItem label='Formule' primaryText='Garantie constructeur' />
            </SelectField>
          </Paper>
          <Paper className='page right-column' style={{ paddingLeft: '10px' }}>
            <h3 className='separator'>Client d'IMA - Nature d'assistance</h3>
            <Divider />
            <SelectField
              className='issue-field half'
            >
              <MenuItem label="Client d'IMA" primaryText='...' />
              <MenuItem label="Client d'IMA" primaryText='Garantie constructeur' />
            </SelectField>
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Nature Assurance' primaryText='...' />
              <MenuItem label='Nature Assurance' primaryText='Garantie constructeur' />
            </SelectField>
            <h3 className='separator'>Cause d'intervention</h3>
            <Divider />
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Cause' primaryText='...' />
              <MenuItem label='Cause' primaryText='Garantie constructeur' />
            </SelectField>
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Détail cause' primaryText='...' />
              <MenuItem label='Détail cause' primaryText='Garantie constructeur' />
            </SelectField>
            <DatePicker
              hintText='Date de survenance'
              className='issue-field half'
            />
            <TimePicker
              format='24hr'
              hintText='Heure'
              className='issue-field third'
            />
            <h3 className='separator'>Localisation</h3>
            <Divider />
            <TextField
              className='issue-field full'
              hintText='Adresse'
              floatingLabelText='Adresse'
              onKeyPress={(event) => this.handleKeyPress(event)}
              name='adresse'
              ref='adresse'
            />
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Ville' primaryText='...' />
              <MenuItem label='Ville' primaryText='Garantie constructeur' />
            </SelectField>
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Pays' primaryText='...' />
              <MenuItem label='Pays' primaryText='Garantie constructeur' />
            </SelectField>
            <SelectField
              className='issue-field half'
            >
              <MenuItem label='Région' primaryText='...' />
              <MenuItem label='Région' primaryText='Garantie constructeur' />
            </SelectField>
          </Paper>
        </div>
      </Paper>
    );
  }
}
