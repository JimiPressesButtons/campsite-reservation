module.exports= function(abbrivation){
	if(abbrivation==='wtr'){
		return('Water');
	}else if(abbrivation==='wtr,elec'){
		return('Water and Electricity');
	}else if(abbrivation==='wtr,elec,sewer'){
		return('Water, Electricity, and Sewer');
	}else if(abbrivation==='wtr,elec50,sewer'){
		return('Water, Electricity 50 amp, and Sewer');
	}else if(abbrivation==='tent'){
		return('Tent');
	}else if(abbrivation==='primitive (hike in)'){
		return('Primitive (hike in');
	}else if(abbrivation==='primitive'){
		return('Primitive');
	}else if(abbrivation==='backCountry'){
		return('Back Country');
	}else{
		return('unknown')
	}
}