import React from 'react';
import {
  Col,
  Image
} from 'react-bootstrap'; //// Dependencies : BS, RRD
import {
  NavLink,
  Link
} from 'react-router-dom'; // ^^
const Section = (props) => {
  return (
    <Col md={6}>
          <div className="card">
              { // Does have link to github?
                (props.project_link_github)
                ? <h2><NavLink to={`/${props.project_link_github}/github`}>{props.title}</NavLink></h2>
                : <h2>{props.title}</h2>
              }
            {
              (props.project_link_github) 
              ? <div><NavLink to={`/${props.project_link_github}/github`}><Image src={props.img} thumbnail /></NavLink>
                <NavLink to={`/${props.project_link_github}/github`}><Image src={props.img_next} thumbnail /></NavLink>
                </div>
              : <div><Image src={props.img} thumbnail />
                <Image src={props.img_next} thumbnail /></div>
            }
            <h3 className="skills--header">Skills</h3>
            <ul className="skills">
              {props.skills}
            </ul>
            <p>
              {props.desc}
            </p>
            <ul>
              {
                (props.doesExist) // Link
                ? <li><Link to={`https://github.com/brandonv98/${props.project_link_github}`} rel="noreferrer noopener" target="_blank" className="social github">Github</Link></li>
                : <li></li>
              }
            </ul>
            <ul>
              {
                (props.doesHaveWebsite) // Link
                ? <li><p className="website-domain-name">View Website</p><Link to={`http://${props.website_link}`} rel="noreferrer noopener" target="_blank" className="social website"><p>View Website</p></Link></li>
                : <li></li>
              }
            </ul>
          </div>
        </Col>);
}
export default Section;