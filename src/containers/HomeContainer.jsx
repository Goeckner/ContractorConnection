import { connect } from 'react-redux'
import { Carousel, ListGroup, ListGroupItem } from 'react-bootstrap'
import React from 'react'

const HomeContainer = props => (
    <div className="App">
      <header className="App-header">Firearm-Inclusion-Training</header>
      <div className="Carousel">
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={require('../diversity_hands.jpg')} />
            <Carousel.Caption>
              <h3>Firearms Training</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src={require('../diversity_hands.jpg')} />
            <Carousel.Caption>
              <h3>Inclusion and Diversity</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="ListGroup">
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
