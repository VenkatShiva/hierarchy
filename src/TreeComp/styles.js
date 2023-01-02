import styled from 'styled-components';

export const Node = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ChildWrapper = styled.div`
  display: flex;
  border-top: 3px solid #964b00;
  margin: 0 1.5rem;
  &.not-more-one {
    border-top: 0px;
  }
`;

export const NodeElem = styled.div`
  padding: 1rem 1.5rem;
  margin: 1rem;
  border-radius: 0.25rem;
  background-color: #c5e0e8;
  color: #fc038a;
  position: relative;
  border: 2px solid rgb(119, 136, 153);
  font-size: 1.5rem;
  cursor: ${({ draggable }) => (draggable ? 'move' : 'auto')};
  &.down-arr {
    &::after {
      content: '';
      width: 3px;
      height: calc(1rem + 2px);
      position: absolute;
      top: 100%;
      background-color: #964b00;
      left: calc(50% - 1px);
    }
  }
  &::before {
    content: '';
    width: 3px;
    height: calc(1rem + 2px);
    position: absolute;
    bottom: 100%;
    background-color: #964b00;
    left: calc(50% - 1px);
  }
  &.no-top {
    &::before {
      display: none;
    }
  }
  &.on-drag {
    opacity: 0.5;
    &::before,
    &::after {
      display: none;
    }
  }
`;
