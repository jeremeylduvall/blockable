/* External Dependencies */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

/* Internal dependencies */
import Placeholder from '../';

describe( 'Placeholder', () => {
	describe( 'renders', () => {
		test( 'with proper type', () => {
			const placeholder = shallow( <Placeholder /> );
			expect( placeholder.html() ).to.equal(
				'<div class="placeholder"><span>Click a button above to add an event!</span></div>'
			);
		} );
	} );
} );