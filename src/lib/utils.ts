export function getLettersCase(str: string) {
	const lettersCapitalize: string[] = [];
	const strSplitWords = str.toLowerCase().split(' ');
	strSplitWords.forEach((word) => {
		lettersCapitalize.push(word.charAt(0).toUpperCase());
	});
	return lettersCapitalize;
}
