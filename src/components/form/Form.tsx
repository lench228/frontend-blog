import React, { useState } from 'react';
import { Select } from 'components/select';
import { OptionType } from 'src/constants/articleProps';

export const Form = () => {
	const [selectedFont, setSelectedFont] = useState('');
	const options: OptionType[] = [
		{
			className: '',
			optionClassName: '',
			title: '12',
			value: '12',
		},
		{
			className: '',
			optionClassName: '',
			title: '2',
			value: '2',
		},
		{
			className: '',
			optionClassName: '',
			title: '3',
			value: '3',
		},
		{
			className: '',
			optionClassName: '',
			title: '4',
			value: '4',
		},
	];
	return (
		<form className='form-horizontal'>
			<Select selected={options[0]} options={options} />
		</form>
	);
};
