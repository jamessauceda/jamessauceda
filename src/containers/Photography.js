import React, { Component } from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: white;
`;
const Wrapper = styled.div`
  padding: 16px;
`;
const Banner = styled.div.attrs(({ src }) => ({
  style: src ? { backgroundImage: `url(${src})` } : {},
}))`
  width: 100%;
  height: 400px;
  background-size: cover;
  font-size: 4px;
`;

const Title = styled.div`
  padding-bottom: 16px;
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
export default class Photography extends Component {
  render() {
    return (
      <div className="Photography">
        <h2>500px</h2>

        <a href="https://500px.com/james-martin" target="_blank">
          <Card>
            <Banner src="https://drscdn.500px.org/user_cover/14230553/q%3D65_m%3D2048/v2?webp=true&v=16&sig=777150a58c15cd006e2191cbd49dd8cc7c1ff8bb632973b4ecc5310e32825f5c" />
            <Wrapper>
              <Title>https://500px.com/james-martin</Title>
              <Button>Visit Gallery</Button>
            </Wrapper>
          </Card>
        </a>
      </div>
    );
  }
}
