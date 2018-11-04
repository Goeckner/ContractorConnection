import { connect } from 'react-redux'
import { Carousel } from 'react-bootstrap'
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
    </div>
)

const mapStateToProps = state => ({
  ...state,
})

const mapDispatchToProps = dispatch => ({

})

const withConnect = connect(mapStateToProps, mapDispatchToProps)

export default withConnect(HomeContainer)
