
export default app => {
 
    const parcels = require('../controllers/parcel.controllers.js');
 
    // Create a new parcel delivery order
    app.post('/api/parcels', parcels.create);
 
    // Retrieve/fetch all parcels
    app.get('/api/parcels', parcels.findAll);
 
    // Retrieve/fetch a single parcel by Id
    app.get('/api/parcels/:id', parcels.findOne);
 
    // Update/cancel a parcel with Id
    app.put('/api/parcels/:id', parcels.update);
 
    // Delete a parcel with Id
    app.delete('/api/parcels/:id', parcels.delete);
};