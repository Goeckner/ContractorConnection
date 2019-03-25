import { connect } from 'react-redux'
import { Carousel, ListGroup, ListGroupItem } from 'react-bootstrap'
import React from 'react'

const HomeContainer = props => (
    <div className="App">
      <header className="App-header"><span class='title_span'>Inclusive Firearms Training</span></header>
      <div class="info1">
          <h3>Prospective students:</h3>
          <h4>Go to the Instructors page to find inclusive instructors in your area!</h4>
          <h3>Instructors:</h3>
          <h4>Log in to create a profile, then complete Training to show up on the Instructors page!</h4>
        </div>
      <div className="Carousel">
        <Carousel>
          <Carousel.Item class="item">
            <img width={900} height={500} alt="900x500" src={require('../training.jpg')} />
            <Carousel.Caption>
              <span class='carousel_span'>Firearms Training</span>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item class="item">
            <img width={900} height={500} alt="900x500" src={require('../diversity_hands.jpg')} />
            <Carousel.Caption>
              <span class='carousel_span'>Inclusion and Diversity</span>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="ListGroup"><h3 class="resources">Resources:</h3>
      <ListGroup>
        <ListGroupItem header="US Concealed Carry Association" bsStyle="info" href="https://www.usconcealedcarry.com/">usconcealedcarry.com</ListGroupItem>
        <ListGroupItem header="Armed and Diverse" bsStyle="info" href="https://www.nationalreview.com/2016/08/concealed-carry-race-sex/">nationalreview.com</ListGroupItem>
        <ListGroupItem header="10 Tips for Concealed Carry Beginners" bsStyle="info" href="http://concealednation.org/2014/07/10-tips-for-concealed-carry-beginners-and-friendly-reminders-for-experts/">concealednation.org</ListGroupItem>
      </ListGroup>
      </div>
    </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(HomeContainer)
