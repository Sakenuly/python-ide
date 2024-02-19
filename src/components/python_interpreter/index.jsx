import { useState } from 'react';
import Sk from 'skulpt';
import Editor from '@monaco-editor/react';
import { PythonInterpreterError } from '../python_interpreter_error';
import { PythonInterpreterOutput } from '../python_interpreter_output';

function builtinRead(x) {
	if (
		Sk.builtinFiles === undefined ||
		Sk.builtinFiles['files'][x] === undefined
	)
		throw "File not found: '" + x + "'";
	return Sk.builtinFiles['files'][x];
}

function PythonInterpreter() {
	const [pythonCode, setPythonCode] = useState('');
	const [output, setOutput] = useState('');
	const [error, setError] = useState('');
	const splittedOutput = output.split('\n');

	function runPythonCode() {
		setOutput('');
		setError('');
		console.log(output);
		Sk.configure({
			output: (text) => setOutput((prevOutput) => prevOutput + text),
			read: builtinRead,
		});
		try {
			Sk.importMainWithBody('<stdin>', false, pythonCode);
		} catch (e) {
			setError((prevError) => prevError + e.toString() + '\n');
		}
	}

	return (
		<div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					gap: '30px',
					marginBottom: '30px',
				}}
			>
				<Editor
					onChange={(text) => {
						setPythonCode(text);
					}}
					theme='vs-dark'
					height='400px'
					defaultLanguage='python'
					value={pythonCode}
				/>
				<button
					style={{
						width: '200px',
						height: '40px',
						cursor: 'pointer',
					}}
					onClick={runPythonCode}
				>
					Запустить
				</button>
			</div>
			<div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
				<PythonInterpreterOutput output={splittedOutput} />

				<PythonInterpreterError error={error} />
			</div>
		</div>
	);
}

export { PythonInterpreter };
