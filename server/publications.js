// ***************************************************************
// PUBLICATIONS (For Documents collection)
// ***************************************************************

// DOCUMENTS INDEX
// -------------------------------------------------------
Meteor.publish('activities', function() {
  return Activities.find();
});

// DOCUMENT SHOW
// -------------------------------------------------------
Meteor.publish('activity', function(id) {
  return Activities.find(id);
});


Meteor.publish('images', function() {
  return Images.find();
});
