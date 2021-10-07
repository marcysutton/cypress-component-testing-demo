import * as React from 'react'
import { mount } from '@cypress/react'
import { CopyText } from '../Typography'
import AccordionGroup from './Accordions'

describe('Accordions', () => {
    it('Operates with the keyboard', () => {
        const accordionContent = [{
            heading: 'Hamburgers',
            Contents: (<CopyText><p>We love burgers! Locally sourced and made by hand, with adequate seasoning.</p></CopyText>)
        },{
            heading: 'Grilled Vegetables',
            Contents: (<CopyText><p>Eat something healthy on the side to feel great.</p></CopyText>)
        }]

        mount(<AccordionGroup accordions={accordionContent} />)

        cy.get('[data-cy="accordion-contents"] p').eq(0).should('not.be.visible')
        cy.get('[data-cy="accordion-button"]').eq(0).focus().contains('Hamburgers').realPress("Enter")
        cy.get('[data-cy="accordion-contents"] p').eq(0).should('be.visible').contains('We love burgers!')
        cy.get('[data-cy="accordion-contents"] p').eq(1).should('not.be.visible')

        cy.get('[data-cy="accordion-button"]').eq(1).focus().contains('Grilled Vegetables').realPress('Enter')
        cy.get('[data-cy="accordion-contents"] p').eq(1).should('be.visible')
        cy.get('[data-cy="accordion-contents"] p').eq(0).should('not.be.visible')
    })

    it('has a logical focus order', () => {
        const accordionContent = [{
            heading: 'Brioche Buns',
            Contents: (<CopyText><p>Brioche is fluffy and delicious but not very nourishing.</p></CopyText>)
        },{
            heading: 'Whole Grain Buns',
            Contents: (<CopyText><p>With more fiber and vitamins, whole grain buns are the way to go.</p></CopyText>)
        }]

        mount(<AccordionGroup accordions={accordionContent} />)

        cy.realPress('Tab')
        cy.focused().should('have.text', 'Brioche Buns')
        cy.realPress('Tab')
        cy.focused().should('have.text', 'Whole Grain Buns')
    })
})