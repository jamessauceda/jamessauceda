import React, { Component } from 'react';
import styled from 'styled-components';
import media from '../libs/media';

const Content = styled.div`
  background: white;
  padding: 16px;
  text-align: center;
  &:nth-child(odd){
    background: #fbfbfb;
    border-top: #f0f0f0 1px solid;
    border-bottom: #f0f0f0 1px solid;
  }
`;
const ContentHalf = styled.div`
  background: white;
  padding: 16px;
  text-align: center;
  display: inline-block;
  width: 50%;
  ${media.max(480)`
  width: 100%;
  display: block;
`}
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
  ${media.max(480)`
    height: 180px;
  `}
`;

const Title = styled.div`
  padding-bottom: 40px;
  font-size: 20px;
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
export default class Web extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.userHasAuthenticated(false);
  }

  render() {
    return (
      <div className="Web">
        <h2>Web</h2>
        <Content>
          <Banner src="img/web1.png" />
          <Wrapper>
            <Title>Weedmaps.com</Title>
          </Wrapper>
        </Content>
        <Content>
          <Banner src="img/web2.png" />
          <Wrapper>
            <Title>Marijuana.com</Title>
          </Wrapper>
        </Content>
        <Content>
          <Banner src="img/web3.png" />
          <Wrapper>
            <Title>SouthernCaliforniaCoalition.com</Title>
          </Wrapper>
        </Content>
        <Content>
          <Banner src="img/web4.png" />
          <Wrapper>
            <Title>EmeraldOcean.com</Title>
          </Wrapper>
        </Content>
        <Content><h2>Targeted Marketing Pages</h2></Content>
        <ContentHalf>
          <Banner src="img/web5.png" />
          <Wrapper>
            <Title>Weedmaps.com/Summer</Title>
          </Wrapper>
        </ContentHalf>
        <ContentHalf>
          <Banner src="img/web6.png" />
          <Wrapper>
            <Title>Marijuanacup.com</Title>
          </Wrapper>
        </ContentHalf>
        <Content>
          <h2>GitHub</h2>
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="30" /><a href="https://github.com/jamessauceda" target="_blank">https://github.com/jamessauceda</a>
          <br /><br />
        </Content>
        <br /><br /><br /><br />
      </div>
    );
  }
}
