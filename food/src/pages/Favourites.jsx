import styled from "styled-components";
import React from "react";
import ProducstCard from "../components/cardss/ProducstCard";


const Container = styled.div`
  padding: 20px 30px;
  padding-bottom: 200px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 20px 12px;
  }
  background: ${({ theme }) => theme.bg};
`;
const Section = styled.div`
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  gap: 28px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: center;
  @media (max-width: 760px) {
    gap: 16px;
  }
`;
const Favourites=()=>{
    return <Container>Favourites
        <Section>
            <Title>
                 <CardWrapper>
                    <ProducstCard/>
                    <ProducstCard/>
                    <ProducstCard/>
                    <ProducstCard/>
                    <ProducstCard/>
                    </CardWrapper>  
            </Title>
        </Section>
    </Container>;
}

export default Favourites;