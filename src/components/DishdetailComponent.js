import React, { Component } from "react";
import { Card, CardImg, CardBody, CardText, CardTitle } from "reactstrap";

class DishDetail extends Component {
  constructor(props) {
    super(props);

    this.renderComments = this.renderComments.bind(this);
  }
  renderComments(comments) {
    if (comments != null) {
      const coments = comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>
              -- {comment.author}, &nbsp;
              {new Intl.DateTimeFormat("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(new Date(comment.date))}
            </p>
          </li>
        );
      });
      return (
        <div className="col-12 col-md-10 m-1">
          <h4> Comments </h4>
          <ul className="list-unstyled">{coments}</ul>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  renderDish(dish) {
    if (dish != null) {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    if (this.props.dish != null) {
      return (
        <React.Fragment>
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            {this.renderComments(this.props.dish.comments)}
          </div>
        </React.Fragment>
      );
    } else return <div></div>;
  }
}

export default DishDetail;
