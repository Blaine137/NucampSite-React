import React from 'react';
import { Card, CardImg, CardImgOverlay,  CardTitle } from 'reactstrap';


    //object destructure props so the only props we get in this component is campsite and onClick
function RenderDirectoryItem({campsite, onClick}){

    return(

        <Card onClick={() => onClick(campsite.id)}>
            <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
            <CardImgOverlay>
                <CardTitle>{campsite.name}</CardTitle>
            </CardImgOverlay>
        </Card>

    );

}

function Directory(props) {

        const directory = props.campsites.map(campsite => {

            return(

                <div className="col-md-5 m-1" key={campsite.id}>
                    <RenderDirectoryItem campsite={campsite} onClick={props.onClick} />
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

} //end of class


export default Directory;