var jsmask = function (el, mask, options){
	let valueToReturn = '';
	const maskCharacters = "./\-|\\() _";
	let elementValue = String(el.value);
	let charactersBlocked;

	if(typeof options != 'undefined' && typeof options.type != 'undefined'){
		let type = typeof options.type;
		switch(typeof options.type){
			case 'number' :
				charactersBlocked = /[A-Za-z]/g;
				break;

			case 'string' :
				charactersBlocked = /[0-9]/g;
				break;

			default :
				charactersBlocked = /[^]/;
				break;
		}
		elementValue = elementValue.replace(charactersBlocked, '');
	}

	for(let i = 0; i < elementValue.length; i++){
		if(maskCharacters.indexOf(mask.charAt(i)) != -1){
			if(elementValue.charAt(i) != mask.charAt(i)){
				valueToReturn += mask.charAt(i) + elementValue.charAt(i);
			}else{
				valueToReturn += elementValue.charAt(i);
			}
		}else{
			valueToReturn += elementValue.charAt(i);
		}
	}
	el.value = valueToReturn.slice(0, mask.length);
}
window.jsmask = jsmask;