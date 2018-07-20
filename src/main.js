var jsmask = function (el, mask, options){
	const maskCharacters = "./\-|\\() _\*";
	let valueToReturn = '';
	let elementValue = String(el.value);
	let charactersBlocked;
	let nextCharacter;

	for(let i = 0; i < elementValue.length; i++){
		switch (mask.charAt(i)) {
			case 'A' :
				charactersBlocked = /[^A-Z]/g;
				break;

			case 'a' :
				charactersBlocked = /[^a-z]/g;
				break;

			case '0' :
				charactersBlocked = /[^0-9]/g;
				break;

			case 'X' :
				charactersBlocked = /[^A-Za-z0-9]/g;
				break;

			case 'U' :
				charactersBlocked = /[^A-Z0-9]/g;
				break;

			case 'l' :
				charactersBlocked = /[^a-z0-9]/g;
				break;

			default :
				charactersBlocked = /[A-Za-z0-9]/g; 
				break;
		}

		nextCharacter = elementValue.charAt(i).replace(charactersBlocked, '');
		if(maskCharacters.indexOf(mask.charAt(i)) != -1){
			if(elementValue.charAt(i) != mask.charAt(i)){
				valueToReturn += mask.charAt(i) + nextCharacter;
			}else{
				valueToReturn += nextCharacter;
			}
		}else{
			valueToReturn += nextCharacter;
		}
	}
	el.value = valueToReturn.slice(0, mask.length);
}
window.jsmask = jsmask;
