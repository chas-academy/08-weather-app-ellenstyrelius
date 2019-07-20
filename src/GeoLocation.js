import React from 'react';
import styled from 'styled-components';

import FlexCenterColumn from './utils/FlexCenterColumn';
import colors from './utils/colors';

const Container = styled(FlexCenterColumn)`
  margin-top: 48px;
  padding: 16px;
`
const ErrorContainer = styled.div`
  background: ${colors.yellowLight};
  padding: 4px;
  text-align: center;
`
const ErrorText = styled.p`
  color: ${colors.gray1};
  font-size: 18px;
  line-height: 1.4;
`
const Header = styled.h2`
  margin-top: 24px;
  font-size: 40px;
  font-weight: 300;
`

function GeoLocation({ currentAddress, fallbackRome, weather, isLoading }) {
  const { locality, countryRegion } = currentAddress;
  return (
    <Container>
      {(fallbackRome && weather && !isLoading) &&
        <ErrorContainer>
          <ErrorText>We couldn't find you, </ErrorText>
            <ErrorText> maybe you blocked us? <span role="img" aria-label="flushed emoji">😳</span></ErrorText>
          <ErrorText>But hey! All roads lead to...</ErrorText>
        </ErrorContainer>
      }
      {(currentAddress && weather && !isLoading) &&
      <Header>{locality}, {countryRegion}</Header>
      }
    </Container>
  )
}

export default GeoLocation;