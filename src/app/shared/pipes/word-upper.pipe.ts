import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'wordUpper'
})
export class WordUpperPipe implements PipeTransform {
	// для одного параметра
	// transform(value: string, wordPart1: string): string {
	// 	return value.replace(new RegExp('[А-Яа-я]*' + wordPart1 + '[а-я]*', 'g'), (match: string) => {
	// 		return match.toUpperCase();
	// 	});
	// }

	//для 2-х параметров
	transform(value: string, wordParts: string[]): string {
		let result = value;

		wordParts.forEach(item => {
			result = result.replace(new RegExp('[А-Яа-я]*' + item + '[а-я]*', 'g'), (match: string) => {
				return match.toUpperCase();
			});
		})
		return result;
	}

}
