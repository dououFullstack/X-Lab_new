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

Meteor.publish('Allcomments', function() {
  return Comments.find();
});

Meteor.publish('comments', function(actuvityId) {
  // check(actuvityId, String);
  console.log("typeof actuvityId", typeof actuvityId);
  return Comments.find({actuvityId: actuvityId});
});
