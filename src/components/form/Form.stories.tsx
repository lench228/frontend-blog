import type { Meta, StoryObj } from '@storybook/react';

import { Form } from './index';

const meta = {
	component: Form,
};

export default meta;
type Story = StoryObj<typeof Form>;

export const FormStory: Story = {
	render: () => {
		return (
			<>
				<Form />
			</>
		);
	},
};
