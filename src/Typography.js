import styled from 'styled-components'

export const CopyText = styled.div`
  p {
    color: #252525;
    font-family: 'din-2014';
    font-size: 1rem;
    line-height: 1.5;
    margin-bottom: 1rem;
  }
  em {
    font-weight: 700;
  }
  ul {
    padding: 0 0 1.8125rem;
  }
  li {
    color: #252525;
    font-family: 'din-2014';
    font-size: 1rem;
    line-height: 1.25;
    padding-left: 1.5rem;
    padding-bottom: 1rem;
    position: relative;
    &:before {
      border-radius: 50%;
      background-color: #ca3836;
      content: '';
      display: block;
      height: 0.25rem;
      left: 0.25rem;
      position: absolute;
      top: 0.5rem;
      width: 0.25rem;

      @include desktop {
        top: 0.175rem;
      }
    }
  }
`