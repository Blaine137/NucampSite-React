import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import CampsiteInfoComponent from './CampsiteInfoComponent';

class Directory extends Component{

        //constructor handles initial setup by defaulting values
    constructor(props){
        super(props); // calls the constructor of the parent class which is Component
        this.state = {
            selectedCampsite: null
        }; //end of state 
    } //end of constructor

    onCampsiteSelect(campsite){

        this.setState( { selectedCampsite: campsite } );

    }

    renderSelectedCampsite(campsite){

        if(campsite){
            return(
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name}/>
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }

        return <div />;

    }

    render(){

        const directory = this.props.campsites.map(campsite => {

            return(

                <div className="col-md-5" key={campsite.id}>
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
                <CampsiteInfoComponent campsite={this.state.selectedCampsite} />
            </div>
        ); //end of return

    } // end of render
} //end of class


export default Directory;