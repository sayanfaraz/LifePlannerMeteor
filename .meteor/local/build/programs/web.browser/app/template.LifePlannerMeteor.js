(function(){
Template.body.addContent((function() {
  var view = this;
  return HTML.DIV({
    "class": "container-fluid"
  }, HTML.Raw("\n        <!--TODAY-->\n        "), HTML.DIV({
    "class": "col-md-12"
  }, "\n            ", HTML.Raw("<h1>WELCOME :)</h1>"), "\n            ", HTML.Raw("<!--Inspirational Quote-->"), "\n            ", Spacebars.include(view.lookupTemplate("quoteTemplate")), "\n        "), HTML.Raw("\n        <!--ROW 1-->\n        "), HTML.DIV({
    "class": "col-md-12"
  }, "\n            ", HTML.DIV({
    "class": "col-md-4"
  }, "\n            ", HTML.Raw("<h2>TASKS YOU CAN FINISH</h2>"), "\n\n            ", HTML.Raw("<!--tasks, events, meetings, etc-->"), "\n            ", Spacebars.include(view.lookupTemplate("tasksDisplayTemplate")), "\n            ", Spacebars.include(view.lookupTemplate("tasksInputTemplate")), "\n            "), "\n\n            ", HTML.Raw("<!--WORKFLOW CONTROL CENTER-->"), "\n            ", HTML.DIV({
    "class": "col-md-8"
  }, "\n                ", HTML.DIV({
    "class": "col-md-5"
  }, "\n                    ", HTML.Raw("<h2>ON YOUR NEXT BREAK, TRY:</h2>"), "\n                    ", HTML.Raw("<!--break tips-->"), "\n                    ", Spacebars.include(view.lookupTemplate("breakTipsTemplate")), "\n                "), "\n                ", HTML.DIV({
    "class": "col-md-3"
  }, "\n                    ", HTML.Raw("<!--timer-->"), "\n                    ", Spacebars.include(view.lookupTemplate("timerTemplate")), "\n                "), "\n            "), "\n            "), HTML.Raw('\n\n\n            <!--PROJECT MANAGER-->\n            <div class="col-md-12">\n                <h2>PROJECTS</h2>\n            </div>\n    '));
}));
Meteor.startup(Template.body.renderToDocument);

Template.__checkName("quoteTemplate");
Template["quoteTemplate"] = new Template("Template.quoteTemplate", (function() {
  var view = this;
  return HTML.Raw("<h3>Insert inspirational quote here</h3>");
}));

Template.__checkName("tasksDisplayTemplate");
Template["tasksDisplayTemplate"] = new Template("Template.tasksDisplayTemplate", (function() {
  var view = this;
  return Blaze.Each(function() {
    return Spacebars.call(view.lookup("tasks_db_caller"));
  }, function() {
    return [ "\n        ", HTML.UL({
      "class": "list-group"
    }, "\n            ", HTML.LI({
      "class": "list-group-item"
    }, "\n                ", Blaze.View("lookup:task", function() {
      return Spacebars.mustache(view.lookup("task"));
    }), "\n            "), "\n        "), "\n        \n    " ];
  });
}));

Template.__checkName("tasksInputTemplate");
Template["tasksInputTemplate"] = new Template("Template.tasksInputTemplate", (function() {
  var view = this;
  return HTML.Raw('<form>\n        <div class="input-group">\n            <input type="text" class="form-control" placeholder="Add a task :D" id="newTask">\n            \n            <!--enter button-->\n            <span class="input-group-btn">\n                <button class="btn btn-default" type="submit" id="tasks-enter-button">\n                    <span class="glyphicon glyphicon-plus"></span>\n                </button>\n            </span>\n        </div>\n    </form>');
}));

Template.__checkName("breakTipsTemplate");
Template["breakTipsTemplate"] = new Template("Template.breakTipsTemplate", (function() {
  var view = this;
  return "";
}));

Template.__checkName("timerTemplate");
Template["timerTemplate"] = new Template("Template.timerTemplate", (function() {
  var view = this;
  return HTML.Raw('<h1 id="Timer">60:00 left till break</h1>\n    <button class="btn btn-default btn-block">\n        GO\n    </button>');
}));

})();
