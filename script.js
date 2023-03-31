const input = document.querySelector('.search')
const allLi = document.querySelectorAll('li')

const searchEngine = () => {
	const text = input.value.toLowerCase() //e.target.value
	allLi.forEach(el => {
		if (el.textContent.toLowerCase().match(text)) {  //el.textContent.toLowerCase().indexOF(text) !== -1
			el.classList.remove('hide')
		} else {
			el.classList.add('hide')
		}
	})
}

input.addEventListener('keyup', searchEngine)
