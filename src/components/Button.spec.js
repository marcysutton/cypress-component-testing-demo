import * as React from 'react'
import { mount } from '@cypress/react'
import Button from './Button'

describe('Buttons', () => {
    it('works with the keyboard', () => {
        mount(<Button>Test button</Button>)
        cy.get('button').contains('Test button').focus().realPress('Enter')
    })
})