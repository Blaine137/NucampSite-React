import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Label, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

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

    state = {
        showModal: false
    }

toggleModal = () => {

    this.setState( {showModal: !this.state.showModal} );

}

handleSubmit(values) {
    console.log("Current state is: " + JSON.stringify(values));
    alert("Current state is: " + JSON.stringify(values));
}

render(){

    return(
        <>
            <Button outline onClick={this.toggleModal}><i class="fa fa-pencil fa-lg" aria-hidden="true"></i>Submit Comment</Button>
            <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <Label htmlfor="rating">Rating</Label>
                            <Control.select model=".rating" 
                                            className="form-control" 
                                            name="rating" id="rating">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </Control.select>
                        </div>
                        <div className="form-group">
                            <Label htmlfor="name">Your Name</Label>
                            <Control.text name="name" 
                                          id="name" 
                                          model=".name" 
                                          className="form-control" 
                                          placeholder="Your Name"
                                          validators={{
                                              required,
                                              minLength: minLength(2),
                                              maxLength: maxLength(15)
                                          }} />
                            <Errors model=".name"
                                    className="text-danger"
                                    show="touched"
                                    component="div"
                                    messages={{
                                       required: 'Required',
                                       minLength: 'Must be at least 2 characters',
                                       maxLength: 'Must be 15 characters or less'
                                    }}/>
                        </div>
                        <div className="form-group">
                            <Label htmlfor="comment">Comment</Label>
                            <Control.textarea model=".comment"
                                              id="comment"
                                              name="comment"
                                              className="form-control"
                                              rows="6"/>
                        </div>
                        <div className="form-group">
                            <Button type="submit" color="primary">Submit</Button>
                        </div>
                    </LocalForm>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </Modal>
        </>
    );

}


}




export default CampsiteInfo;