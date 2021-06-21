import React from 'react';
import { shallow, configure } from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

let wrapped;

beforeEach(() => {
	wrapped = shallow(<App />);
});

it('shows a comment box', () => {
	expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
	expect(wrapped.find(CommentList).length).toEqual(1);
});
