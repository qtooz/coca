export const usePriceSwitcher = () => {
  const switcher = document.querySelector('[data-price="switcher"]');
	const priceStarter = document.querySelector('[data-price="starter"]');
	const pricePopular = document.querySelector('[data-price="popular"]');
	const priceEnterprise = document.querySelector('[data-price="enterprise"]');
  const priceList = {
		starter: {
			default:120,
			withSale:100,
		},
		popular: {
			default: 1680,
			withSale: 1400,
		},
		enterprise: {
			default: 2520,
			withSale: 2100,
		}
	};

	const setPricesWithSale = () => {
		priceStarter.textContent = priceList.starter.withSale;
		pricePopular.textContent = priceList.popular.withSale;
		priceEnterprise.textContent = priceList.enterprise.withSale;
	};
	
	const setDefaultPrices = () => {
		priceStarter.textContent = priceList.starter.default;
		pricePopular.textContent = priceList.popular.default;
		priceEnterprise.textContent = priceList.enterprise.default;
	}
	
  switcher.checked = true;
setPricesWithSale();


  switcher.addEventListener('click', () => {
		if(switcher.checked) {
			setPricesWithSale();
		} else {
			setDefaultPrices();
		};
	});
};
