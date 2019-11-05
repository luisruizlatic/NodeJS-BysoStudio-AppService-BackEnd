var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

mobileApp.tables.add('Person'); // Create a table for 'Person' with default settings
mobileApp.tables.add('Role'); // Create a table for 'Role' with default settings
mobileApp.tables.add('Workout'); // Create a table for 'Workout' with default settings
mobileApp.tables.add('WorkoutSession'); // Create a table for 'WorkoutSession' with default settings
mobileApp.tables.add('WorkoutSessionAttendees'); // Create a table for 'WorkoutSessionAttendees' with default settings


app.use(mobileApp);
app.listen(process.env.PORT || 3000);
