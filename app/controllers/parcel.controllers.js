const parcels = {
				parcel1: {
					username:"kayitare",
					parcelname: "ikarito",
					adress: "kigali",
					weight: 2,
					id: 1
				},
				parcel2: {
					username:"shaban",
					parcelname: "paper",
					adress: "nyamata",
					weight: 1,
					id: 2
				},
				parcel3: {
					username:"rwayitare",
					name: "ibiryo",
					adress: "huye",
					weight: 2,
					id: 3
				},
				parcel4: {
					username:"kayitaba",
					name: "laptop",
					adress: "kicukiro",
					weight: 2,
					id: 4
				}
			}
 
export function create(req, res) {
	const newparcel = req.body;
    parcels[`parcels${newparcel.id}`] = newparcel;
	console.log(`--->After Post, parcels:\n${JSON.stringify(parcels, null, 4)}`);
    res.end(`Post Successfully: \n${JSON.stringify(newparcel, null, 4)}`);
}

export function findAll(req, res) {
    console.log(`--->Find All: \n${JSON.stringify(parcels, null, 4)}`);
    res.end(`All parcels: \n${JSON.stringify(parcels, null, 4)}`);  
}

export function findOne(req, res) {
    const parcel = parcels[`parcel${req.params.id}`];
    console.log(`--->Find parcel: \n${JSON.stringify(parcel, null, 4)}`);
    res.end( `Find a parcel:\n${JSON.stringify(parcel, null, 4)}`);
}

export function update(req, res) {
	const id = parseInt(req.params.id);
	const updatedparcel = req.body; 
	if(parcels[`parcel${id}`] != null){
		// update data
		parcels[`parcel${id}`] = updatedparcel;
 
		console.log(`--->Update Successfully, parcels: \n${JSON.stringify(parcels, null, 4)}`)
		
		// return
		res.end(`Update Successfully! \n${JSON.stringify(updatedparcel, null, 4)}`);
	}else{
		res.end(`Don't Exist parcel:\n:${JSON.stringify(updatedparcel, null, 4)}`);
	}
}

export function delete(req, res) {
	const deleteparcel = parcels[`parcel${req.params.id}`];
    delete parcels[`parcel${req.params.id}`];
    console.log(`--->After deletion, parcel list:\n${JSON.stringify(parcels, null, 4)}` );
    res.end( `Deleted parcel: \n${JSON.stringify(deleteparcel, null, 4)}`);
}