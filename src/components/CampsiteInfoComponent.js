import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Label, Button } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

const required = val => val && val.length;
const maxLength = len => val => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);

function RenderCampsite({campsite}){


   

        return( 
            <div className="col-md-5 m-1">
                    <Card>
                        <CardImg top src={baseUrl + campsite.image} alt={campsite.name} />
                        <CardBody>
                            <CardTitle>{campsite.name}</CardTitle>
                            <CardText>{campsite.description}</CardText>
                        </CardBody>
                    </Card>
            </div>
        );

}

function RenderComments({comments, addComment, campsiteId}) {

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
                <CommentForm campsiteId={campsiteId} addComment={addComment} />
            </div>
        );

    }else{
        return <div> </div>;
    }

}


function CampsiteInfo(props) {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
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
                    <RenderComments 
                        comments={props.comments}
                        addComment={props.addComment}
                        campsiteId={props.campsite.id}
                    />
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

handleSubmit = (values) => {
    this.toggleModal();
    this.props.addComment(this.props.campsiteId, values.rating, values.author, values.text);
    console.log(this.props)
}

render(){

    return(
        <>
            <Button outline onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" aria-hidden="true"></i>Submit Comment</Button>
            <Modal isOpen={this.state.showModal} toggle={this.toggleModal}>
                <ModalHeader toggle={this.toggleModal}>
                    Submit Comment
                </ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <Label htmlFor="rating">Rating</Label>
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
                            <Label htmlFor="author">Your Name</Label>
                            <Control.text name="author" 
                                          id="author" 
                                          model=".author" 
                                          className="form-control" 
                                          placeholder="Your Name"
                                          validators={{
                                              required,
                                              minLength: minLength(2),
                                              maxLength: maxLength(15)
                                          }} />
                            <Errors model=".author"
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
                            <Label htmlFor="text">Comment</Label>
                            <Control.textarea model=".text"
                                              id="text"
                                              name="text"
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