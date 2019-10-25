import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PageHeader, ListGroup, ListGroupItem } from 'react-bootstrap';
import { invokeApig } from '../libs/awsLib';
import styled from 'styled-components';
import './Home.css';
const Nav = styled.div`
a{
  padding-right: 0px;
  align-items: center;
  display: flex;
  flex-direction: column;  
  font-size: 28px;
  font-weight: 100;
  line-height: 60px;
}
`;



export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      notes: [],
    };
  }

  async componentDidMount() {
    if (!this.props.isAuthenticated) {
      return;
    }

    try {
      const results = await this.notes();
      this.setState({ notes: results });
    } catch (e) {
      alert(e);
    }

    this.setState({ isLoading: false });
  }

  notes() {
    return invokeApig({ path: '/notes' });
  }

  handleNoteClick = event => {
    event.preventDefault();
    this.props.history.push(event.currentTarget.getAttribute('href'));
  };

  renderNotesList(notes) {
    return [{}].concat(notes).map((note, i) =>
      i !== 0 ? (
        <ListGroupItem
          key={note.noteId}
          href={`/notes/${note.noteId}`}
          onClick={this.handleNoteClick}
          header={note.content.trim().split('\n')[0]}
        >
          {'Created: ' + new Date(note.createdAt).toLocaleString()}
        </ListGroupItem>
      ) : (
          <ListGroupItem
            key="new"
            href="/notes/new"
            onClick={this.handleNoteClick}
          >
            <h4>
              <b>{'\uFF0B'}</b> Create a new note
          </h4>
          </ListGroupItem>
        ),
    );
  }

  renderLander() {
    return (
      <div>
        <div className="mobileNav">
          <Nav>
            <Link activeClassName="is-active" to="/web">
              Web
              </Link>
            <Link activeClassName="is-active" to="/design">
              Design
              </Link>
            <Link activeClassName="is-active" to="/music">
              Music
              </Link>
            <Link activeClassName="is-active" to="/photography">
              Photography
              </Link>
            <a href="mailto:jamesmartinsauceda@gmail.com?subject=From jamessauceda.com">
              Contact
              </a>
          </Nav>
        </div>
        <div className="lander">
          <img src="img/js-logo-animated.svg" width="50%" />
        </div>
      </div>
    );
  }

  renderNotes() {
    return (
      <div className="notes">
        <PageHeader>Your Notes</PageHeader>
        <ListGroup>
          {!this.state.isLoading && this.renderNotesList(this.state.notes)}
        </ListGroup>
      </div>
    );
  }

  render() {
    return (
      <div className="Home">
        {/* {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()} */}
        {this.renderLander()}
      </div>
    );
  }
}
