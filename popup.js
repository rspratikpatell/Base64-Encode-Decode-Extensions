// Add event listener for the encode button
document.getElementById('encodeBtn').addEventListener('click', () => {
	const inputText = document.getElementById('inputText').value;
	const encodedText = btoa(inputText);
	document.getElementById('output').textContent = encodedText;
});

// Add event listener for the decode button
document.getElementById('decodeBtn').addEventListener('click', () => {
	const inputText = document.getElementById('inputText').value;
	try {
		const decodedText = atob(inputText);
		document.getElementById('output').textContent = decodedText;
	} catch (e) {
		document.getElementById('output').textContent = "Invalid Base64 string.";
	}
});

// Add event listener for the output text to copy it to clipboard
document.getElementById('output').addEventListener('click', () => {
	const outputText = document.getElementById('output').textContent;
	navigator.clipboard.writeText(outputText).then(() => {
		const message = document.getElementById('message');
		message.textContent = 'Text copied to clipboard';
		message.style.color = 'green';
		message.style.display = 'block';
		setTimeout(() => {
			message.style.display = 'none';
		}, 3000);
	}).catch(err => {
		const message = document.getElementById('message');
		message.textContent = 'Failed to copy text';
		message.style.color = 'red';
		message.style.display = 'block';
		setTimeout(() => {
			message.style.display = 'none';
		}, 3000);
	});
});