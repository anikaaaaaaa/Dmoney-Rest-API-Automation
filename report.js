const newman = require('newman');

 
newman.run({
    collection:`https://api.postman.com/collections/45419119-fabfb4f2-6f8a-49ea-9e37-dd084216d627?access_key=PMAT-01K9PM8HVD7YER5SCDTNE59916`,

    //collection:require('./collection/dmoney-user-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/` in the current working directory.
        }
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});