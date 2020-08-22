import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function RenderCampsite({campsite}){


   

        return( 
            <div className="col-md-5 m-1">
                    <Card>
                        <CardImg top src={campsite.image} alt={campsite.name}/>
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
            </div>
        );

}

function RenderComments({comments}) {

    if(comments){

        return(
            <div className="col-md-5 m-1">
                <h4>Comments</h4>
                {comments.map( comment => { 
                
                    return(
                        <div key={comment.id}>
                        <p>{comment.text}</p>
                        <p>-- {comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    );
                    
                    })}
                <CommentForm/>
            </div>
        );

    }else{
        return <div> </div>;
    }

}


function CampsiteInfo(props){

        //if campsite is not null or undefined set to a row else a empty div
    if(props.campsite){
            return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{props.campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className="row"> 
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
        return <div />;
    


}

class CommentForm extends React.Component{

render(){

    return(
        <Button outline><i class="fa fa-pencil fa-lg" aria-hidden="true"></i>Submit Comment</Button>
    );

}


}




export default CampsiteInfo;