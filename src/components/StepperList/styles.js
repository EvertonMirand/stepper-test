import styled from "styled-components";

const sizeValue = (value) => (typeof value === "string" ? value : `${value}px`);

export const ProgressBar = styled.ul`
  counter-reset: step;

  li {
    list-style-type: none;
    float: left;
    width: ${({ lineWidth }) => sizeValue(lineWidth)};
    position: relative;
    text-align: center;
    font-weight: 600;
  }

  li:before {
    content: counter(step);
    counter-increment: step;
    height: ${({ size }) => sizeValue(size)};
    width: ${({ size }) => sizeValue(size)};
    line-height: ${({ size }) => sizeValue(size)};
    border: 2px solid #ddd;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: white;
  }

  li:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: -1;
  }

  li:first-child:after {
    content: none;
  }

  li.active {
    color: #27ae60;
  }

  li.active:before {
    border-color: #27ae60;
  }

  li.active + li:after {
    background-color: #27ae60;
  }
`;
