const {Flights} = require('../models/Flight')

// 1. Add/Book Flight
const addOrBookFlight = async (req, res) =>{
    try {
        const newflight = await req.body;
        Flights.push(newflight);
        res.json({msg: 'flight booked successfully!', newflight, Flights});
    } catch (error) {
        console.error(error);
    }
    

}
// 2. Get all Flight
const getAllFlights = async (req, res) => {
try {
    const flights = Flights;
    res.json(flights);
} catch (error) {
    console.error(error);
}
   
}

// 3. Get single Flight
const getSingleFlight = async (req, res) => {
    try {
        const id = await req.params.id;
        const flight = Flights.find(flig => flig.time === id);
        res.json(flight);
    } catch (error) {
        console.error(error);
    }
}
// 4. Update/Edit Flight
const updateOrEditFligt = (req, res) => {
    const id = req.params.id;
    const updatedFlight = {

    };
    res.send(updatedFlight);
}

// 5. Delete Flight
const deleteFligt = (req, res) => {
    const id = req.params.id;
    const deleteFlight = {

    };
    res.send(updatedFlight);
}

module.exports = {addOrBookFlight, getAllFlights, getSingleFlight, updateOrEditFligt, deleteFligt};