/* External Dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/* Internal dependencies */
import Button from '../';

describe( 'Button', () => {
	describe( 'renders', () => {
		test( 'with proper type', () => {
			const button = shallow( <Button /> );
			expect( button.type() ).to.equal( 'input' );
		} );

		test( 'with className modifier', () => {
			const button = shallow( <Button className='buttonClass' /> );
			expect( button.hasClass( 'buttonClass' ) ).to.equal( true );
			expect( button.hasClass( 'notMyClass' ) ).to.equal( false );
		} );

		test( 'with proper value', () => {
			const button = shallow( <Button value="My Button" /> );
			expect( button.html() ).to.equal( '<input type="button" value="My Button"/>' );
		} );
	} );

	test( 'responds when clicked', () => {
		const spy = jest.fn();
		const button = shallow( <Button onClick={ spy } /> );
		button.simulate( 'click' );
	    expect( spy.mock.calls.length ).to.equal( 1 );
	} );
} );