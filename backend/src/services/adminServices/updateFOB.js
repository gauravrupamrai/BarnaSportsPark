const Membership = require('../../models/membership');
const connectDatabase = require('../../database/db');
const util = require('../../utils/util');

async function getUnassignedFOB(){
    try {

        await connectDatabase();
        const unassignedFOB = await Membership.find({FOB: ''});

        return util.buildResponse(200, "Unassigned FOBs", unassignedFOB);
        
    } catch (error) {

        console.error("Error in getUnassignedFOB:", error);
        return util.buildResponse(500, "Internal Server Error", error);
        
    }
};

async function assignFOB(body){};

module.exports.getUnassignedFOB = getUnassignedFOB;
module.exports.assignFOB = assignFOB;
