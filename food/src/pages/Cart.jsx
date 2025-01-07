import React from "react";
import styled from "styled-components";
import TextInput from "../components/TextInput";
import Button from "../components/Button";
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
  width: 100%;
  max-width: 1400px;
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  gap: 28px;
`;
const Title = styled.div`
  font-size: 28px;
  font-weight: 500;
  display: flex;
  justify-content: ${({ center }) => (center ? "center" : "space-between")};
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  width: 100%;
  padding: 12px;
  @media (max-width: 750px) {
    flex-direction: column;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 1.2;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
  @media (max-width: 750px) {
    flex: 0.8;
  }
`;
const Table = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 30px;
  ${({ head }) => head && `margin-bottom: 22px`}
`;
const TableItem = styled.div`
  ${({ flex }) => flex && `flex: 1; `}
  ${({ bold }) =>
    bold &&
    `font-weight: 600; 
  font-size: 18px;`}
`;
const Counter = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.text_secondary + 40};
  border-radius: 8px;
  padding: 4px 12px;
`;
const Protitle = styled.div`
  color: ${({ theme }) => theme.primary};
  font-size: 16px;
  font-weight: 500;
`;
const ProDesc = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const ProSize = styled.div`
  font-size: 14px;
  font-weight: 500;
`;
const Product = styled.div`
  display: flex;
  gap: 16px;
`;
const Img = styled.img`
  height: 80px;
`;
const Details = styled.div`
  max-width: 130px;
  @media (max-width: 700px) {
    max-width: 60px;
  }
`;
const Subtotal = styled.div`
  font-size: 22px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
`;
const Delivery = styled.div`
  font-size: 18px;
  font-weight: 500;
  display: flex;
  gap: 6px;
  flex-direction: column;
`;

const Cart=()=>{
    return <Container>
        <Section>
            <Title>Yopur shopping Cart</Title>
            <Wrapper>
                <Left>L
                    <Table>
                        <TableItem>Product</TableItem>
                        <TableItem>subtotal</TableItem>
                        <TableItem>Product</TableItem>
                        <TableItem>quantity</TableItem>
                        
                    </Table>
                    <Table>
                        <TableItem flex>
                            <Product>
                                <Img src="https://media.istockphoto.com/id/1398630614/photo/bacon-cheeseburger-on-a-toasted-bun.webp?s=1024x1024&w=is&k=20&c=rXM2ry9bme764bKBGagwq4jYdjr7q98UiJLyHrl6BUU="/>
                                <Details/>
                                <Protitle>Title</Protitle>
                                <ProDesc>Title</ProDesc>
                                <ProSize>XL</ProSize>
                            
                            </Product>
                        </TableItem>
                        <TableItem>120</TableItem>
                        <TableItem>
                            <Counter>
                                <div>-</div>2<div>+</div>
                            </Counter>
                        </TableItem>
                        <TableItem>220</TableItem>
                        
                    </Table>
                </Left>
                <Right>
                    <Subtotal>Subtotal: 120</Subtotal>
                    <Delivery>Delivery detaisl
                        <div>
                            <div style={{display:"flex",gap:"6px",}}> <TextInput small placeholder="First  name"/>
                            <TextInput small placeholder="LAst  name"/></div>
                            <TextInput small placeholder="Email"/>
                            <TextInput small placeholder="pHone number"/>
                        </div>
                    </Delivery>
                    <Button text="place order"/>
                </Right>
            </Wrapper>
        </Section>
    </Container>
}

export default Cart;