function PythonInterpreterOutput({ output }) {
	return (
		<div>
			<h3>Вывод:</h3>
			{output.map((item, index) => (
				<p key={index} style={{ color: 'white' }}>
					{item}
				</p>
			))}
		</div>
	);
}

export { PythonInterpreterOutput };
