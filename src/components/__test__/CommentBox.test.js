import React from 'react';
import CommentBox from '../CommentBox';
import { mount, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

let wrapped;

beforeEach(() => {
	wrapped = mount(<CommentBox />);
});

afterEach(() => {
	wrapped.unmount();
});

it('has a text area and a button', () => {
	expect(wrapped.find('textarea').length).toEqual(1);
	expect(wrapped.find('button').length).toEqual(1);
});

it('has an input field that accepts input', () => {
	wrapped.find('textarea').simulate('change', {
		target: { value: 'user input' },
	});
	wrapped.update();

	expect(wrapped.find('textarea').prop('value')).toEqual('user input');
});

it('when form is submitted, text area clears', () => {
	wrapped.find('textarea').simulate('change', {
		target: { value: 'user input' },
	});

	wrapped.update();
	wrapped.find('form').simulate('submit');
	wrapped.update();
	expect(wrapped.find('textarea').prop('value')).toEqual('');
});
