import React from 'react';
import styled from 'styled-components';

import FlexCenterColumn from './utils/FlexCenterColumn';
import colors from './utils/colors';

const Container = styled(FlexCenterColumn)`
  margin-top: 32px;
  padding: 16px;
  text-align: center;
`
const ErrorContainer = styled.div`
  background: white;
  opacity: 0.9;
  margin-bottom: 32px;
  padding: 8px 24px;
  border: 2px solid ${colors.orangeLight};

  & > p {
  color: ${colors.gray1};
  font-size: 16px;
  font-weight: 400;
  line-height: 1.4;
  }
`
const Header = styled.h2`
  margin-top: 24px;
  font-size: 36px;
  font-weight: 300;
`

function GeoLocation({ currentAddress, fallbackRome, weather, isLoading }) {
  const { locality, countryRegion } = currentAddress;
  return (
    <Container>
      {(fallbackRome && weather && !isLoading) &&
        <ErrorContainer>
          <p>We couldn't find you, </p>
            <p> maybe you blocked us?</p> <span role="img" aria-label="flushed emoji">😳</span>
          <p>But hey! All roads lead to...</p>
        </ErrorContainer>
      }
      {(currentAddress && weather && !isLoading) &&
      <Header>{locality}, {countryRegion}</Header>
      }
    </Container>
  )
}

export default GeoLocation;