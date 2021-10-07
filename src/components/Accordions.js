import React, { useState } from 'react'
import styled from 'styled-components'
import { ChevronDown } from '../SVGs'

const StyledAccordion = styled.div`
  cursor: pointer;
`

const Body = styled.div`
  max-height: ${({ active }) => (active ? '100%' : '0')};
  overflow: hidden;
  opacity: ${({ active }) => (active ? '1' : '0')};
  transition: opacity 0.2s ease-in-out;
  padding: 0 1.5rem;
`

const HeadingFiveRuled = styled.h5`
  border-top: solid 0.5px rgba(204, 204, 204, 0.9);
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 0;
  text-transform: uppercase;
`

const AccordionControl = styled(HeadingFiveRuled)`
  .accordion-button {
    align-items: center;
    appearance: none;
    background: none;
    border: none;
    box-sizing: border-box;
    cursor: pointer;
    display: flex;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    letter-spacing: inherit;
    line-height: 1.1428571429;
    justify-content: space-between;
    padding: 1.5rem 1.5rem 1.5rem
      ${({ inset = false }) => (inset ? '1.5rem' : '0')};
    text-transform: inherit;
    width: 100%;

    &:hover {
      background-color: ${({ active }) =>
        active ? '' : 'rgba(109, 114, 120, .1)'};
    }
  }
  span {
    position: relative;
    top: 0.125rem;
  }
`
const AccordionButtonText = styled.span`
  display: inline-block;

  &:after {
    content: ' ';
    display: inline-block;
  }
`

const Icon = styled.div`
  transform: rotate(${({ active }) => (active ? '180deg' : '0')});
  transition: transform 0.2s ease-in-out;
`

const Group = styled.div`
  border-bottom: solid 0.5px rgba(204, 204, 204, 0.9);
`

const Accordion = ({ active, heading, Contents, handleOnClick }) => {
  return (
    <StyledAccordion onClick={handleOnClick}>
      <AccordionControl active={active} inset as="h3">
        <button
          aria-expanded={active ? 'true' : 'false'}
          className="accordion-button"
          data-cy="accordion-button"
          onClick={handleOnClick}
        >
          <AccordionButtonText>{heading}</AccordionButtonText>
          <Icon active={active}>
            <ChevronDown fill={'#CA3836'} />
          </Icon>
        </button>
      </AccordionControl>
      <Body active={active} data-cy="accordion-contents">{Contents}</Body>
    </StyledAccordion>
  )
}

export default ({ accordions = [] }) => {
    const [active, setActive] = useState(null)

    return (
        <Group data-cy="accordion-group">
        {accordions.map((accordion, index) => (
            <Accordion
              active={active === index}
              key={index}
              handleOnClick={() => {
                setActive(active === index ? null : index)
              }}
              {...accordion}
            />
          ))}
        </Group>
    )
}