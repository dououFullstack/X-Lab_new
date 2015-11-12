// ***************************************************************
// ROUTES (activities)
// ***************************************************************
Router.configure({
  layoutTemplate: 'layout',
  notFoundTemplate: '404',
  yieldTemplates: {
    'header': { to: 'header' },
    'footer': { to: 'footer' },
    // 'activitiesIndex': { to: 'activitiesIndex'}
}
});

Router.map(function() {
    this.route('frontpage', {
        path: '/',
        template: 'frontpage'
  });
  // -------------------------------------------------------
  this.route('activitiesIndex', {
    template: 'activitiesIndex',
    path: '/activities',
    waitOn: function () {
      Meteor.subscribe('images');
      Meteor.subscribe('Allcomments');
    //   Meteor.subscribe('comments', this.params._id);
      return Meteor.subscribe('activities');
    },
    data: {
      activities: function () {
        return Activities.find({}, {sort: {createdAt: -1}});
      }
    }
  });

  // DOCUMENT NEW
  // -------------------------------------------------------
  this.route('activityNew', {
    template: 'activityNew',
    path: 'activities/new',
    waitOn: function () {
      return Meteor.subscribe('images');
    },
  });

  // DOCUMENT SHOW
  // -------------------------------------------------------
  this.route('activityShow', {
    template: 'activityShow',
    path: '/activities/:_id',
    waitOn: function () {
      Meteor.subscribe('images');
      Meteor.subscribe('comments');
      return [
          Meteor.subscribe('activity', this.params._id),
          Meteor.subscribe('comments', this.params._id),
      ];
    },
    data: function () {
      return Activities.findOne(this.params._id);
    }
  });

  // DOCUMENT EDIT
  // -------------------------------------------------------
  this.route('activityEdit', {
    template: 'activityEdit',
    path: '/activities/:_id/edit',
    waitOn: function () {
      return Meteor.subscribe('activity', this.params._id);
    },
    data: function () {
      return Activities.findOne(this.params._id);
    }
  });

});
