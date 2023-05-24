document.getElementById('shorten-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const urlInput = document.getElementById('url-input').value;

  fetch(`https://tinyurl.com/api-create.php?url=${urlInput}`)
    .then(response => response.text())
    .then(data => {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `<a href="${data}" target="_blank">${data}</a>`;
    })
    .catch(error => {
      const resultDiv = document.getElementById('result');
      resultDiv.innerHTML = `Error: ${error.message}`;
    });
});
