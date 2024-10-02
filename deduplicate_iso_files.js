db = connect("localhost:27017/admin")

db.auth('admin','password');

db = db.getSiblingDB('file-server');


let agg = [{'$match': {'fileFormat.sha1': {'$ne': null}}}, {'$group': {'_id': '$fileFormat.sha1','count': {'$sum': 1}}}, {'$match': {'count': {'$gt': 1}}}, {'$project': {'fileFormat.sha1': '$_id', '_id': 0,'count': 1} }]


let result = db.ISO_Inventory.aggregate(agg).toArray();

let resstr = JSON.stringify(result);

let resjson = JSON.parse(resstr);

let resarr = [];

for (var res of resjson){

        resarr.push(res.fileFormat.sha1);

}

let query = {$and: [{"fileFormat.md5": {$exists: false}}, {"fileFormat.sha1": {$in: resarr}}]};

let filesToDeleteCount = db.ISO_Inventory.find(query).count();

let removeResult = db.ISO_Inventory.remove(query);

print (filesToDeleteCount);

printjson(removeResult);









