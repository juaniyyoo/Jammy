import React from 'react';
import Paper from 'material-ui/Paper';
const ReactHighcharts = require('react-highcharts');
// var Highlight = require('react-highlight');
import './Dashboard.scss';

var priceData = [
  ['2016-07-03', 109.37007324729683],
  ['2016-07-04', 107.20109800732006],
  ['2016-07-05', 105.96921341070278],
  ['2016-07-06', 105.53663042705891],
  ['2016-07-07', 104.72179635031544],
  ['2016-07-08', 106.04365379762805],
  ['2016-07-09', 106.58008232475272],
  ['2016-07-10', 105.81421884142773],
  ['2016-07-11', 103.45146587136345],
  ['2016-07-12', 102.70120888695273],
  ['2016-07-13', 101.81488065007618],
  ['2016-07-14', 102.25882181393992],
  ['2016-07-15', 103.4959493435143],
  ['2016-07-16', 103.34225083885009],
  ['2016-07-17', 102.0151623900951],
  ['2016-07-18', 102.73592205854932],
  ['2016-07-19', 102.96795052010121],
  ['2016-07-20', 103.35102747741422],
  ['2016-07-21', 103.64976808905381],
  ['2016-07-22', 104.61409098955568],
  ['2016-07-23', 104.30493098359233],
  ['2016-07-24', 103.06791698562559],
  ['2016-07-25', 103.07120849024307],
  ['2016-07-26', 103.28298368298368],
  ['2016-07-27', 103.14947981689555],
  ['2016-07-28', 103.2677918771303],
  ['2016-07-29', 104.35752198368058],
  ['2016-07-30', 104.85750942809378],
  ['2016-07-31', 103.72531370380258],
  ['2016-08-01', 103.24048741234624],
  ['2016-08-02', 103.3598601291116],
  ['2016-08-03', 103.41040971982676],
  ['2016-08-04', 103.39155572461011],
  ['2016-08-05', 104.64184581171239],
  ['2016-08-06', 104.92444476967546],
  ['2016-08-07', 103.61910660934198],
  ['2016-08-08', 103.79494174900456],
  ['2016-08-09', 103.72778369641085],
  ['2016-08-10', 103.49485664259137],
  ['2016-08-11', 103.31213935372188],
  ['2016-08-12', 104.60893089273794],
  ['2016-08-13', 104.82200613411403],
  ['2016-08-14', 103.30454057423891],
  ['2016-08-15', 103.46066629339306],
  ['2016-08-16', 103.4834427684117],
  ['2016-08-17', 103.63252712958366],
  ['2016-08-18', 103.57313316574019],
  ['2016-08-19', 105.12156204073064],
  ['2016-08-20', 105.16059079061685],
  ['2016-08-21', 103.80337925474112]
];

var availabilityData = [
  ['2016-07-03', 5756],
  ['2016-07-04', 9875],
  ['2016-07-05', 12450],
  ['2016-07-06', 14117],
  ['2016-07-07', 14782],
  ['2016-07-08', 15895],
  ['2016-07-09', 16321],
  ['2016-07-10', 17135],
  ['2016-07-11', 17816],
  ['2016-07-12', 18409],
  ['2016-07-13', 19736],
  ['2016-07-14', 20625],
  ['2016-07-15', 21528],
  ['2016-07-16', 22104],
  ['2016-07-17', 22344],
  ['2016-07-18', 21504],
  ['2016-07-19', 21394],
  ['2016-07-20', 21414],
  ['2016-07-21', 21611],
  ['2016-07-22', 22648],
  ['2016-07-23', 23089],
  ['2016-07-24', 23562],
  ['2016-07-25', 23416],
  ['2016-07-26', 23644],
  ['2016-07-27', 24077],
  ['2016-07-28', 24400],
  ['2016-07-29', 25294],
  ['2016-07-30', 25773],
  ['2016-07-31', 26269],
  ['2016-08-01', 26148],
  ['2016-08-02', 26075],
  ['2016-08-03', 26142],
  ['2016-08-04', 26341],
  ['2016-08-05', 27035],
  ['2016-08-06', 27384],
  ['2016-08-07', 27499],
  ['2016-08-08', 27178],
  ['2016-08-09', 27275],
  ['2016-08-10', 27468],
  ['2016-08-11', 27779],
  ['2016-08-12', 28515],
  ['2016-08-13', 28745],
  ['2016-08-14', 28924],
  ['2016-08-15', 28627],
  ['2016-08-16', 28226],
  ['2016-08-17', 28251],
  ['2016-08-18', 28297],
  ['2016-08-19', 28633],
  ['2016-08-20', 28830],
  ['2016-08-21', 28580]
].map((elm) => [elm[0], elm[1] / 8.2]);

var needsData = [
  ['2016-07-03', 604],
  ['2016-07-04', 633],
  ['2016-07-05', 644],
  ['2016-07-06', 670],
  ['2016-07-07', 705],
  ['2016-07-08', 2736],
  ['2016-07-09', 3800],
  ['2016-07-10', 3300],
  ['2016-07-11', 2798],
  ['2016-07-12', 1640],
  ['2016-07-13', 1673],
  ['2016-07-14', 1862],
  ['2016-07-15', 2052],
  ['2016-07-16', 2110],
  ['2016-07-17', 2034],
  ['2016-07-18', 1950],
  ['2016-07-19', 1839],
  ['2016-07-20', 1841],
  ['2016-07-21', 1961],
  ['2016-07-22', 2164],
  ['2016-07-23', 2208],
  ['2016-07-24', 2256],
  ['2016-07-25', 2541],
  ['2016-07-26', 2864],
  ['2016-07-27', 2707],
  ['2016-07-28', 3440],
  ['2016-07-29', 3929],
  ['2016-07-30', 3577],
  ['2016-07-31', 2626],
  ['2016-08-01', 2614],
  ['2016-08-02', 2607],
  ['2016-08-03', 4214],
  ['2016-08-04', 4634],
  ['2016-08-05', 4703],
  ['2016-08-06', 2738],
  ['2016-08-07', 2749],
  ['2016-08-08', 2717],
  ['2016-08-09', 2727],
  ['2016-08-10', 2746],
  ['2016-08-11', 2777],
  ['2016-08-12', 2851],
  ['2016-08-13', 2874],
  ['2016-08-14', 2892],
  ['2016-08-15', 2862],
  ['2016-08-16', 2822],
  ['2016-08-17', 2825],
  ['2016-08-18', 2829],
  ['2016-08-19', 2863],
  ['2016-08-20', 2883],
  ['2016-08-21', 2858]
];

var priceConfig = {
  rangeSelector: {
    selected: 1
  },
  title: {
    text: 'Prix / nuitée'
  },
  series: [{
    name: 'Hébergement',
    data: priceData,
    tooltip: {
      valueDecimals: 2
    }
  }]
};

var availabilityConfig = {
  rangeSelector: {
    selected: 1
  },
  title: {
    text: "Nombre d'hébergements"
  },
  series: [{
    name: 'Disponibilités',
    data: availabilityData,
    tooltip: {
      valueDecimals: 2
    }
  }, {
    name: 'Besoins',
    data: needsData,
    tooltip: {
      valueDecimals: 2
    }
  }]
};

export const Dashboard = () => (
  <div className='dashboard-contcainer'>
    <div style={{ width: '100%', display: 'block' }}>
      <Paper className='dashboard-item-1' style={{ width: '98%', height: '440px' }}>
        <ReactHighcharts config={priceConfig} />
      </Paper>
    </div>
    <div style={{ width: '100%', display: 'block' }}>
      <Paper className='dashboard-item-1' style={{ width: '98%', height: '440px' }}>
        <ReactHighcharts config={availabilityConfig} />
      </Paper>
    </div>
    <div className='right-column'>
      <Paper className='dashboard-item-3'>
        test
      </Paper>
      <Paper className='dashboard-item-4'>
        test
      </Paper>
    </div>
  </div>
);

export default Dashboard;

/*
    <div className='left-column'>
      <Paper className='dashboard-item-2' style={{ width: '98%', height: '240px' }}>
        <img src={require("./img/heatmap.png")} style={{ width: '100%', height: '100%' }}/>
      </Paper>
    </div>
 */
