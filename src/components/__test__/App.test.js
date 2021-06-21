import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

it('shows a comment box', () => {
	const wrapped = shallow(<App />);

	expect(wrapped.find(CommentBox).length).toEqual(1);
});
