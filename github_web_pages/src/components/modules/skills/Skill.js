import React from 'react';
import {Route, NavLink} from 'react-router-dom'; // Dependances are : RRD, Bootstrap
import {
  Nav,
  Row,
  Col,
  Jumbotron,
  Panel,
  Grid
} from 'react-bootstrap'; // ^^
import PostCardCSS from './../../../PostCard.css';
const PostCard = (props) => {
  console.log(props);
  const corses = props.courses;
  return (
    <Col md={6}>

      <div>

        <ul className="content-block-list">
          <li className="grid-50 tablet-grid-50">
            <div className="content-block">
              <div className="grid-70 tablet-grid-70 mobile-grid-70 content-meta">
                <strong>Achievement</strong>
                <h3>{props.name}</h3>
                <p>{}</p>
                <div className="content-actions-container">
                  <span className="icon icon-complete"></span>
                  <strong>Achieved</strong>
                  <p>{props.earned_date}</p>
                </div>
              </div>
              <div className="grid-30 tablet-grid-30 mobile-grid-30 achievement-hero">
                <img alt="Thinking in Components" src={props.image}/>
              </div>
            </div>
          </li>
        </ul>

      </div>

    </Col>
  );
}
export default PostCard;