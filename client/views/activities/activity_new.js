Template.activityNew.rendered = function() {
  $('.note-editable').css('min-height', '200px');
};

Template.activityNew.helpers({
});

Template.activityNew.events ({
});

AutoForm.hooks({
  'activityForm': {
    before: {
      insert: function(doc) {
        console.log(doc);
        doc.createdAt = new Date();
        return doc;
        // doc.dateCreated = new Date();
        // this.result(doc);
      }
    },
    onSuccess: function (operation, result, template) {
      console.log('New activitie inserted successfully!');
      Router.go('activitiesIndex', {_id: result});
    },

    onError: function(operation, error, template) {
      console.log(error);
    }
  }
 //    onSubmit: function (insertDoc, updateDoc, currentDoc) {
 //     if (customHandler(insertDoc)) {
 //       this.done();
 //     } else {
 //       this.done(new Error("Submission failed"));
 //     }
 //     return false;
 //   }
 // }

});
