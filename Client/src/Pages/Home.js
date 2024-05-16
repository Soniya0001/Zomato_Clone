import React from 'react';
import '../Styles/frontpage.css';
import Banner from './Banner';
import QuickSearch from './QuickSearch';
import axios from 'axios';  //help in connecting to API's
import Modal from 'react-modal';
const BASE_URL = window.env.REACT_APP_BASE_URL;

const customStyles = {
    overlay:{
        backgroundColor: "rgba(0,0,0,0.8)"
    },
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

class Homepage extends React.Component {

    constructor(){
        super();
        this.state = {
             loc:[],
             Mealtype:[]
        }
    }

  componentDidMount(){
    //location API
    axios({
         url: `${BASE_URL}/location`,
        method: 'get',
        headers: {'Content-Type': 'application/JSON'}
    })
    .then(res =>{
        this.setState({loc : res.data.location })
    })
    .catch((err => console.log(err)))

//Mealtype API
        axios({
            url: `${BASE_URL}/mealtype`,
            method: 'get',
            headers: {'Content-Type': 'application/JSON'}
        })
        .then(res =>{
            this.setState({Mealtype : res.data.Mealtype })
        })
        .catch((err => console.log(err)))
  }

    render() {
        const {loc, Mealtype } = this.state;
       // console.log( Mealtype);
        return (
            <div>
                {/* <!--Banner Part (upper)--> */}

                    <Banner locationData = { loc }/>

                {/* <!--Quick Searches Part (lower)--> */}

                <QuickSearch mealtypeData = { Mealtype }/>

            </div>
        )
    }
}


export default Homepage;
