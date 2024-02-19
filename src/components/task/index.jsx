import { PythonInterpreter } from '../python_interpreter';
import { TaskWindow } from '../task_window';

function Task() {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '30px',
			}}
		>
			<TaskWindow
				task={
					'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, sequi!'
				}
			/>
			<PythonInterpreter />
		</div>
	);
}

export { Task };
