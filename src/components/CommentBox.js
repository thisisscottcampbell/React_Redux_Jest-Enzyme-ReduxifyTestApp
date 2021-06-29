import React, { useState } from 'react';

const CommentBox = () => {
	const [comment, setComment] = useState('');

	const handleChange = (e) => setComment(e.target.value);

	const handleSubmit = (e) => {
		e.preventDefault();

		setComment('');
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h4>Add Comment</h4>
				<textarea value={comment} onChange={handleChange} />
				<div>
					<button>Submit</button>
				</div>
			</form>
		</div>
	);
};

export default CommentBox;
