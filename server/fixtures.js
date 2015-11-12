// if (Activities.find().count() === 0) {
//     var now = new Date().getTime();
//   var tomId = Meteor.users.insert({
//     profile: { name: 'Tom Coleman' }
//   });
//   var tom = Meteor.users.findOne(tomId);
//   var sachaId = Meteor.users.insert({
//     profile: { name: 'Sacha Greif' }
//   });
//   var sacha = Meteor.users.findOne(sachaId);
//
//   var telescopeId = Activities.insert({
//     title: "法兰黛【随波逐流我不介意】",
//     userId: sacha._id,
//     author: sacha.profile.name,
//     desc: "初来乍到，婉如清飏我们跟著风一起过来第一次的相遇 欸，随波逐流我不介意，我的眼望著天际。 让生命的流，载著浮，与沉。不奋力挣扎，不强求方向；让岩石来划伤，让波涛都经过。摩擦生出温柔之后，期待它长成真正的坚强。",
//     picture: "iH6jg5pW8ZDBQf2Yk",
//     time: "2015-12-26T13:00:00.000Z",
//     where: "海珠区工业大道北132号",
//     limit: "新圣堂影业 田羽生",
//     fee: "120元/人",
//     submitted: new Date(now - 7 * 3600 * 1000)
//   });
//
//   Comments.insert({
//       activityId: telescopeId,
//       userId: tom._id,
//       author: tom.profile.name,
//       submitted: new Date(now - 5 * 3600 * 1000),
//       body: 'Interesting project Sacha, can I get involved?'
//     });
//
//     Comments.insert({
//       activityId: telescopeId,
//       userId: sacha._id,
//       author: sacha.profile.name,
//       submitted: new Date(now - 3 * 3600 * 1000),
//       body: 'You sure can Tom!'
//     });
// }
