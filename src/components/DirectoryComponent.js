import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';
import CampsiteInfo from './CampsiteInfoComponent';

class Directory extends Component{

        //constructor handles initial setup by defaulting values
    constructor(props){
        super(props); // calls the constructor of the parent class which is Component
        this.state = {
            selectedCampsite: null
        }; //end of state 
    } //end of constructor

    onCampsiteSelect = (campsite) => {

        this.setState( { selectedCampsite: campsite } );

    }


    render(){

        const directory = this.props.campsites.map(campsite => {

            return(

                <div className="col-md-5 m-1" key={campsite.id}>
                    <Card onClick={() => this.onCampsiteSelect(campsite)}>
                        <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                        <CardImgOverlay>
                            <CardTitle>{campsite.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>

            ); //end of return

        }); //end of directory

        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
                <CampsiteInfo campsite={this.state.selectedCampsite} />
            </div>
        ); //end of return

    } // end of render
} //end of class


export default Directory;