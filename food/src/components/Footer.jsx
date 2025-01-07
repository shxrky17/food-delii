import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.bg_dark};
  color: ${({ theme }) => theme.text_primary};
  text-align: center;
  padding: 16px 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Your Company Name. All rights reserved.
    </FooterContainer>
  );
};

export default Footer;
