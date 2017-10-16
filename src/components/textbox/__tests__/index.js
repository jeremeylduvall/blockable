/* External Dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/* Internal dependencies */
import TextBox from '../';

describe( 'Textbox', () => {
	describe( 'renders', () => {
		test( 'with proper value', () => {
			const textbox = shallow( <TextBox value="My Button" /> );
			expect( textbox.html() ).to.equal( '<textarea name="eventtext"></textarea>' );
		} );
	} );
} );
