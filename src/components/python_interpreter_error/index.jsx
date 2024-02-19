function PythonInterpreterError({ error }) {
	return (
		<div>
			<h3>Ошибки:</h3>
			<p style={{ color: 'red' }}>{error}</p>
		</div>
	);
}

export { PythonInterpreterError };
