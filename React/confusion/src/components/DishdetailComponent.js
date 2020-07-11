import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardBody, CardText, CardTitle } from 'reactstrap';

class DishDetail extends Component {
    constructor(props){
        super(props);

    }

    renderDish(dish){
        return(
        <div>
		    <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}/>
                <CardBody>
                    <CardTitle tag="h5">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
        );
        
    }
    renderComments=(dish)=>{
        const comments=dish.comments.map((comment)=>{
            return(
                <div>
                    <div key={comment.id} className="list-unstyled">
                        <p>{comment.comment}</p>
                        <p>-- {comment.author}</p>
                    </div>
                </div>
            );
        });
        return comments;
    }

    render(){
        return(
           <React.Fragment>
                <div className="col-12 col-md-5 mt-5">
                    {this.renderDish(this.props.dish)}
                </div>
                
                <div className="col-12 col-md-5 mt-5">
                <h4>Comments</h4>
                    {this.renderComments(this.props.dish)}
                </div>
            </React.Fragment>
        );
    }
}


export default DishDetail; 