export const useBlockTab = () => {
	const listItem = document.querySelectorAll('.hero__list-item');
	const contentBlock = document.querySelectorAll('.hero__blog-slider');

		for (let item of listItem) {
			item.addEventListener('click', function() {

				for (let element of contentBlock) {
					element.classList.add('hide')
				}

				const content = document.querySelector('#' + item.dataset.tab)
				content.classList.remove('hide')
			})
		}
}