/** @format */

const weight = document.querySelector('#weight');
const growth = document.querySelector('#growth');
const result = document.querySelector('.result');

export const calculateBMI = e => {
	e.preventDefault();

	let weightValue = weight.value;
	let growthtValue = growth.value;
	let growthEquel = (growthtValue / 100) ** 2;

	let resultValue = 0;

	if (weightValue <= 0 || growthtValue <= 0) {
		result.textContent = 'Podane dane są nieprawidłowe!';
		result.classList.add('danger');
		setTimeout(() => {
			result.textContent = '';
			result.classList.remove('danger');
			growth.value = '';
			weight.value = '';
		}, 3000);
	} else {
		resultValue = Math.floor(weightValue / growthEquel);

		if (resultValue > 25 && resultValue < 30) {
			result.textContent = `Twoje BMI wynosi: ${resultValue}. Oznacza to, że masz nadwagę`;
			result.classList.add('warning');
		} else if (resultValue >= 30 && resultValue < 35) {
			result.textContent = `Twoje BMI wynosi: ${resultValue}. Oznacza to, że masz otyłość stopnia I.`;
			result.classList.add('warning');
		} else if (resultValue > 35 && resultValue < 40) {
			result.textContent = `Twoje BMI wynosi: ${resultValue}. Oznacza to, że masz otyłość stopnia II.`;
			result.classList.add('warning');
		} else if (resultValue > 40) {
			result.textContent = `Twoje BMI wynosi: ${resultValue}. Oznacza to, że masz skrajną otyłość.`;
			result.classList.add('danger');
		} else if (resultValue < 25) {
			result.textContent = 'Zjedz coś. Masz niedowagę!!!';
		}
	}
};

export const resetCalculate = () => {
	growth.value = '';
	weight.value = '';
	result.textContent = '';
};
