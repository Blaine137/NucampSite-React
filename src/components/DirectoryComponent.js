import React, { Component } from 'react';

class Directory extends Component{

        //constructor handles initial setup by defaulting values
    constructor(props){
        super(props); // calls the constructor of the parent class which is Component
        this.state = {
            campsites: [
                {
                    id: 0,
                    name: 'React Lake Campground',
                    image: 'assets/images/react-lake.jpg',
                    elevation: 1233,
                    description: "Nestled in the foothills of the Chrome Mountains, this campground on the shores of the pristine React Lake is a favorite for fly fishers."
                },
                {
                  id: 1,
                  name: 'Chrome River Campground ',
                  image: 'assets/images/chrome-river.jpg',
                  elevation: 877,
                  description: "Spend a few sunny days and starry nights beneath a canopy of old-growth firs at this enchanting spot by the Chrome River."
                },
                {
                    id: 2,
                    name: 'Breadcrumb Trail Campground',
                    image: 'assets/images/breadcrumb-trail.jpg',
                    elevation: 2901,
                    description: "Let NuCamp be your guide to this off-the-beaten-path, hike-in-only campground."
                },
                {
                    id: 3,
                    name: 'Redux Woods Campground',
                    image: 'assets/images/redux-woods.jpg',
                    elevation: 42,
                    description: "You'll never want to leave this hidden gem, deep within the lush Redux Woods."
                }
            ],
        }; //end of state 
    } //end of constructor

    render(){

        const directory = this.state.campsites.map(campsite => {

            return(

                <div className="col" key={campsite.id}>
                    <img src={campsite.image} alt={campsite.name}/>
                    <h2>{campsite.name}</h2>
                    <p>{campsite.description}</p>
                </div>

            ); //end of return

        }); //end of directory

        return(
            <div className="container">
                <div className="row">
                    {directory}
                </div>
            </div>
        ); //end of return

    } // end of render
} //end of class

export default Directory;