/* External Dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/* Internal dependencies */
import TimeSelect from '../';

describe( 'TimeSelect', () => {
	describe( 'renders', () => {
		test( 'with 20 children', () => {
			const selector = shallow( <TimeSelect /> );
			expect( selector.html() ).contain( '<select' );
			expect( selector.children() ).to.have.length( 20 );
		} );
	} );
} );
