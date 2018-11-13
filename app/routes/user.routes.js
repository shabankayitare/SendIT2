
export default app => {
 
    const users = require('./controllers/user.controllers.js');
 
    // Create a new user delivery order
    app.post('/api/users', users.create);
 
    // Retrieve/fetch all users
    app.get('/api/users', users.findAll);
 
    // Retrieve/fetch a single user by Id
    app.get('/api/users/:id', users.findOne);
 
    // Update/cancel a user with Id
    app.put('/api/users/:id', users.update);
 
    // Delete a user with Id
    app.delete('/api/users/:id', users.delete);
};