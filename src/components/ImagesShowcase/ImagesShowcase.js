import React from 'react';
import styled from '@emotion/styled/macro';

class ImagesShowcase extends React.Component {
  state = {
    images: {
      0: 'photo-0.jpg',
      1: 'photo-1.jpg',
      2: 'photo-2.jpg'
    },
    imageNumber: 2,
    fadeIn: true
  };

  ImageContainer = styled.div({
    position: 'relative',
    paddingBottom: '100%',
  });

  Image = styled.div(() => {
    const { state } = this;
    const addedOpacity = (state.fadeIn) ? '1': '0';
    
    return {
    position: 'absolute',
    height: '100%',
    width: '100%',
    opacity: '0',
    opacity: addedOpacity,
    transition: 'opacity 1s ease',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundImage: `url("./images/personal/${state.images[state.imageNumber]}")`
  }});

  componentDidMount() {
    const { animationLogic } = this;
    animationLogic();
    setInterval(() => {
      animationLogic();
    }, 5100);
  };

  animationLogic = () => {
    const newNumber = (this.state.imageNumber !== 2)
      ? (this.state.imageNumber + 1) : 0;

    this.setState({ fadeIn: true })

    setTimeout(() => {
      this.setState({ fadeIn: false })
    }, 4000);

    setTimeout(() => {
      this.setState({ imageNumber: newNumber });
    }, 5000);
  };

  render() {
    const { ImageContainer, Image } = this;

    return (
      < >
        <ImageContainer>
          <Image />
        </ImageContainer>
      </ >
    );
  };
};

export default ImagesShowcase;


