(function(){TasksDB = new Meteor.Collection("taskCol");

if (Meteor.isClient) {
    Template.tasksDisplayTemplate.helpers({
        tasks_db_caller: function () {
            return TasksDB.find();
        }
    });
    
    Template.tasksInputTemplate.events({
        'submit form': function () {
            var new_task = $('#newTask').val();
            TasksDB.insert({task: new_task});
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
    // code to run on server at startup
    });
}

})();
