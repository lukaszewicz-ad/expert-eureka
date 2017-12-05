import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  background-color: #2E3641;
  color: #efefef;
  justify-content: center;
  height: 50px;
  margin: 0 auto;
  position: relative;
  width: 100%;
`;

export const Logo = styled.div`
  display: block;
  background-color: #454C46;
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
  display: inline-block;
    fill: #fff;
  right: 0; 
  width: 50px;
  height: 50px; 
`;
