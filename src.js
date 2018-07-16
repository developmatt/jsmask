var jsmask = function (el, mask, options){
	let ret = '';
	var sc = "./\-|\\() _";
	let st = String(el.value);

	
	let ad;
	if(typeof options != 'undefined' && typeof options.type != 'undefined'){
		let type = typeof options.type;
		switch(typeof options.type){
			case 'number' :
				ad = /[A-Za-z]/g;
				break;

			case 'string' :
				ad = /[0-9]/g;
				break;

			default :
				ad = /[^]/;
				break;
		}
		st = st.replace(ad, '');
	}

	for(let i = 0; i < st.length; i++){
		if(sc.indexOf(mask.charAt(i)) != -1){
			if(st.charAt(i) != mask.charAt(i)){
				ret += mask.charAt(i) + st.charAt(i);
			}else{
				ret += st.charAt(i);
			}
		}else{
			ret += st.charAt(i);
		}
	}
	el.value = ret.slice(0, mask.length);
}

window.jsmask = jsmask;