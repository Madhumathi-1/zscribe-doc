const endpoints = document.querySelectorAll('.endpoint');

endpoints.forEach(endpoint => {
  const toggleBtn = endpoint.querySelector('.toggle-btn');
  const requestParams = endpoint.querySelector('.request-params');
  const response = endpoint.querySelector('.response');

  toggleBtn.addEventListener('click', () => {
    if (requestParams.classList.contains('hidden')) {
      requestParams.classList.remove('hidden');
      response.classList.add('hidden');
      toggleBtn.textContent = 'Response';
    } else {
      requestParams.classList.add('hidden');
      response.classList.remove('hidden');
      toggleBtn.textContent = 'Request';
    }
  });
});
