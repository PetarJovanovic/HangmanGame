const input = document.getElementById('input');
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementById('result').innerHTML = input.value;
    document.getElementById('input').value = '';
  }
});
