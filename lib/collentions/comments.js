Comments = new Mongo.Collection('comments');

// // Fixture data
// if (Activities.find().count() === 0) {
//   var now = new Date().getTime();
//
// // create two users
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
//     // title: 'Introducing Telescope',
//     title: "法兰黛【随波逐流我不介意】",
//     userId: sacha._id,
//     author: sacha.profile.name,
//     // url: 'http://sachagreif.com/introducing-telescope/',
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
//
//     Activities.insert({
//     title: '“敬你一碗边疆酒”东莞SoWhat"',
//     userId: tom._id,
//     author: tom.profile.name,
//     desc: "南二巷乐队，成立于2010年,《在路上》 从军行七首 王昌龄 青海长云暗雪山, 孤城遥望玉门关.黄沙百战穿金甲, 不破楼兰终不还. 他们是来自新疆的南二巷，他们的音乐总是带有边疆的狂放与不羁。温热多雨的南方滋养了多少文人墨客。而如今，单枪匹马，南二巷来了！带着西域的风沙，带着边疆的凄美，带着与生俱来的狂放，还带着边疆的酒！来，10月30日，东莞SoWhat Livehouse一起举起手中的酒杯，一起与南二巷感受狂放。",
//     picture: "X8fmaiXHvbSuKQaHe",
//     time: "2015-11-14T00:50:00.000Z",
//     where: "东莞 SO WHAT LIVEHOUSE",
//     limit: "腾邦梧桐基金",
//     fee: "33元/人",
//     submitted: new Date(now - 10 * 3600 * 1000)
//   });
//
//   Activities.insert({
//     title: '11.11 美女脱口秀专场',
//     userId: tom._id,
//     author: tom.profile.name,
//     desc: "  美女脱口秀专场----女人改（huo）变（hai）世界\n 大型美女脱口秀现场演出第二波强势来袭！\n这场演出汇聚了全国脱口秀圈里最好的女演（liu）员(mang).\n她们来自四面八方：北京，上海，广州，甘肃 ,还有外援来自美国纽约！\n她们是活跃在各个领域的精（shen）英(jing)，\n有律师、咨询师、女叫兽、小萝莉、美女住持、设计师以及无业闲散人员。\n这即将是一场前无古人的盛大演出！\n看完我们的演出你就一定会相信：女人改（huo）变(hai)世界！",
//     picture: "T7WLXYuFEbcCmTT54",
//     time: "2015-11-11T14:00:00.000Z",
//     where: "建国门内大街8号",
//     limit: "TOP2滴滴出行-滴滴快的174",
//     fee: "$80",
//     submitted: new Date(now - 12 * 3600 * 1000)
//   });
// }

Meteor.methods({
  commentInsert: function(commentAttributes) {
    // check(this.userId, String);
    check(commentAttributes, {
      activityId: String,
      body: String
    });

    var user = Meteor.user();
    var activity = Activities.findOne(commentAttributes.activityId);

    if (!activity)
      throw new Meteor.Error('invalid-comment', 'You must comment on a post');

    comment = _.extend(commentAttributes, {
      userId: user._id,
      author: user.username,
      submitted: new Date()
    });

    return Comments.insert(comment);
  }
});
