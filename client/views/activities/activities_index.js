Template.activitiesIndex.rendered = function() {
};

Template.activitiesIndex.helpers({
  file: function () {
    //console.log(this);
    var id = this.picture;
    //console.log('id:', id);
    return Images.findOne({_id: id});
  },
  commentsCount: function() {
    //   console.log("this :", this);
    //   console.log("this._id :", this._id);
      console.log("Comments :",Comments.find({activityId: this._id}).fetch());
    return Comments.find({activityId: this._id}).count();
},
});

Template.activitiesIndex.events ({
  'click .delete-activitie': function(e) {
    e.preventDefault();
    var item = this;

    if (confirm("Are you sure?")) {
      Activities.remove(item._id);
      console.log("Deleted!")
    }
  }
});

Template.registerHelper('formatdatetime', function(datetime){
  if (moment && datetime) {
    if(datetime.getDate() === new Date().getDate()){
      return "今天 " + moment(datetime).format("hh:mm");
    } else{
      return moment(datetime).format("YYYY-MM-DD hh:mm");
    }

  }
  else {
    return datetime;
  }
});

Template.registerHelper('formatdatetimeTime', function(datetime){
  if (moment && datetime) {
    if(datetime.getDate() === new Date().getDate()){
      return "今天 " + moment(datetime).format("hh:mm");
    } else{
      return moment(datetime).format("hh:mm");
    }

  }
  else {
    return datetime;
  }
});

Template.registerHelper('formatdatetimeDate', function(datetime){
  if (moment && datetime) {
    if(datetime.getDate() === new Date().getDate()){
      return "今天 " + moment(datetime).format("hh:mm");
    } else{
      return moment(datetime).format("YYYY-MM-DD");
    }

  }
  else {
    return datetime;
  }
});

Template.registerHelper('formatdatetimeMonth', function(datetime){
  if (moment && datetime) {
    if(datetime.getDate() === new Date().getDate()){
      return "今天 " + moment(datetime).format("hh:mm");
    } else{
      return moment(datetime).format("MM-DD");
    }

  }
  else {
    return datetime;
  }
});
