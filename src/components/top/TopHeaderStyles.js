/* eslint linebreak-style: ["error", "windows"] */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: rgb(88, 151, 252);
  color: #efefef;
  justify-content: center;
  height: 50px;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

export const Logo = styled.div`
  display: block;
  background-color: rgb(112, 167, 255);
  height: 50px;
  width: 50px;
  position: absolute;
  left: 0; 
`;

export const Copy = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 50px;
`;

export const MenuButton = styled.div`
  display: block;
  background-color: rgb(112, 167, 255);
  float: right;
    position: absolute;
  right: 0; 
  width: 50px;
  height: 50px;
`;
