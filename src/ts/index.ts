(async (): Promise<void> => {
  const response = await fetch('json/data.json');
  const json = await response.json();
  const messageElement = document.getElementById('message');
  messageElement.innerHTML = json.message;
})();
