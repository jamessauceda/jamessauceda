import React, { Component } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  background: white;
  padding: 50px 0;
  text-align: center;
  &:nth-child(even){
    background: #fbfbfb;
    border-top: #f0f0f0 1px solid;
    border-bottom: #f0f0f0 1px solid;
  }

  p {
    font-family: 'PT Serif',serif;
    color: #222;
    font-weight: 100;
    font-size: 16px;
    letter-spacing: .2px;
  }
`;
const ContentHalf = styled.div`
  background: white;
  padding: 16px;
  text-align: center;
  display: inline-block;
  width: 50%;
  &:nth-child(odd){
    border-right: 2px solid #f0f0f0;
  }
  &:nth-child(even){
    border-left: 2px solid #f0f0f0;
  }
`;
const Wrapper = styled.div`

`;
const Banner = styled.div.attrs(({ src }) => ({
  style: src ? { backgroundImage: `url(${src})` } : {},
}))`
  width: 100%;
  height: 400px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  margin: 24px 0;
`;

const Title = styled.div`
font-size: 28px;
color: #222;
letter-spacing: 0.2px;
padding-bottom: 4px;
`;

const Button = styled.div`
  border: 1px solid;
  padding: 8px 20px;
  right: 0px;
  display: inline-block;
  border-radius: 4px;
  &:hover {
    background: #eee;
  }
`;
export default class Design extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.userHasAuthenticated(false);
  }

  render() {
    return (
      <div className="Design">
        <h2>Design</h2>
        <Content>
          <Banner src="img/aam.png" />
          <Wrapper>
            <Title>All About Movers</Title>
            <p>Identity, Typography, Palatte</p>
          </Wrapper>
        </Content>
        <Content>
          <Banner src="img/jordan.png" />
          <Wrapper>
            <Title>Jordan Emily</Title>
            <p>Identity, Marketing</p>
          </Wrapper>
        </Content>
        <Content>
          <Banner src="img/booster.png" />
          <Wrapper>
            <Title>Booster Fules</Title>
            <p>Consepts</p>
          </Wrapper>
        </Content>
        <Content>
          <Banner src="img/nostalgic.png" />
          <Wrapper>
            <Title>I A M N O S T A L G I C</Title>
            <p>Identity, Typography, Palatte, Marketing</p>
          </Wrapper>
        </Content>
        <Content>
          <Banner src="img/legs.png" />
          <Wrapper>
            <Title>Favorite 88 Clothing</Title>
            <p>Identity, Marketing, Merch</p>
          </Wrapper>
        </Content>
        <ContentHalf>
          <Banner src="img/ang.png" />
          <Wrapper>
            <Title>ANG GAMING</Title>
            <p>Identity, Marketing</p>
          </Wrapper>
        </ContentHalf>
        <ContentHalf>
          <Banner src="img/dscvr.png" />
          <Wrapper>
            <Title>dscvr.io</Title>
            <p>Identity, Consepts</p>
          </Wrapper>
        </ContentHalf>
        <br /><br /><br /><br />
      </div>
    );
  }
}
