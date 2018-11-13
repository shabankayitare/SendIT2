const users = {
				user1: {
					username:"kayitare",
					parcelname: "ikarito",
					adress: "kigali",
					weight: 2,
					id: 1
				},
				user2: {
					username:"shaban",
					parcelname: "paper",
					adress: "nyamata",
					weight: 1,
					id: 2
				},
				user3: {
					username:"rwayitare",
					name: "ibiryo",
					adress: "huye",
					weight: 2,
					id: 3
				},
				user4: {
					username:"kayitaba",
					name: "laptop",
					adress: "kicukiro",
					weight: 2,
					id: 4
				}
			}
 
export function create(req, res) {
	const newuser = req.body;
    users[`user${newuser.id}`] = newuser;
	console.log(`--->After Post, users:\n${JSON.stringify(users, null, 4)}`);
    res.end(`Post Successfully: \n${JSON.stringify(newuser, null, 4)}`);
}

export function findAll(req, res) {
    console.log(`--->Find All: \n${JSON.stringify(users, null, 4)}`);
    res.end(`All users: \n${JSON.stringify(users, null, 4)}`);  
}

export function findOne(req, res) {
    const user = users[`user${req.params.id}`];
    console.log(`--->Find user: \n${JSON.stringify(user, null, 4)}`);
    res.end( `Find a user:\n${JSON.stringify(user, null, 4)}`);
}

export function update(req, res) {
	const id = parseInt(req.params.id);
	const updateduser = req.body; 
	if(users[`user${id}`] != null){
		// update data
		users[`user${id}`] = updateduser;
 
		console.log(`--->Update Successfully, users: \n${JSON.stringify(users, null, 4)}`)
		
		// return
		res.end(`Update Successfully! \n${JSON.stringify(updatedusers, null, 4)}`);
	}else{
		res.end(`Don't Exist user:\n:${JSON.stringify(updateduser, null, 4)}`);
	}
}

export function delete(req, res) {
	const deleteuser = users[`user${req.params.id}`];
    delete users[`user${req.params.id}`];
    console.log(`--->After deletion, user list:\n${JSON.stringify(users, null, 4)}` );
    res.end( `Deleted user: \n${JSON.stringify(deleteuser, null, 4)}`);
}