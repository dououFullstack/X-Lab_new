// ***************************************************************
// DOCUMENTS COLLECTION
// ***************************************************************
// Create my collectionFS
Images = new FS.Collection("images", {
  stores: [new FS.Store.GridFS("images", {})]
});

Activities = new Meteor.Collection('activities');

ActivitySchema = new SimpleSchema({
  title: {
    type: String,
    label: "活动名称",
    optional: false,
    max: 20,
    optional: false
  },
  desc: {
    type: String,
    label: "活动内容(完整图文介绍)",
    optional: false,
  },
  picture: {
    type: String,
    optional: false,
    label: '上传背景图片',
    autoform: {
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Images',
        previewTemplate: 'myFilePreview',
        label: '选择照片',
      }
    }
  },
  time: {
    type: Date,
    label: "活动时间",
    optional: false,
    autoform: {
      afFieldInput: {
        type: "datetime-local"
      }
    }
  },
  where: {
    type: String,
    label: "活动地点",
    max: 1000,
    optional: false,
  },
  limit: {
    type: String,
    label: "发起组织&个人",
    max: 120,
    optional: true
  },
  fee: {
    type: String,
    label: "费用",
    max: 1000,
    optional: true
  },
  registration: {
  type: String,
  label: "报名方式",
  optional: true,
  autoform: {
    type: "select",
    options: function () {
      return [
        {label: "罗列", value: 2013},
        {label: "表格", value: 2014},
        {label: "跳转", value: 2015}
        ];
      }
    }
  },
  contact: {
    type: String,
    optional: true,
    label: "联系方式",
    autoform: {
      afFieldInput: {
        type: "text"
      }
    }
  },
  // content: {
  //   type: String,
  //   label: "活动内容(完整的图文介绍)",
  //   autoform: {
  //     height: 150,
  //     afFieldInput: {
  //       type: 'summernote',
  //       class: 'editor', // optional
  //       settings: {}// summernote options goes here
  //     }
  //   }
  // },
  createdAt: {
    type: Date,
    denyUpdate: false,
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      }
    }
  },
  updatedAt: {
    type: Date,
    optional: true,
    denyInsert: true,
    autoValue: function() {
      if (this.isUpdate) {
        return new Date();
      }
    }
  }
});

// Must remember to attach the schema to the collection
Activities.attachSchema(ActivitySchema);

// Custom validation messages with SimpleSchema. Remove if not needed
Activities.simpleSchema().messages({
  required: "[label] is required",
  minString: "[label] must be at least [min] characters",
  maxString: "[label] cannot exceed [max] characters",
  minNumber: "[label] must be at least [min]",
  maxNumber: "[label] cannot exceed [max]",
  minDate: "[label] must be on or before [min]",
  maxDate: "[label] cannot be after [max]",
  minCount: "You must specify at least [minCount] values",
  maxCount: "You cannot specify more than [maxCount] values",
  noDecimal: "[label] must be an integer",
  notAllowed: "[value] is not an allowed value",
  expectedString: "[label] must be a string",
  expectedNumber: "[label] must be a number",
  expectedBoolean: "[label] must be a boolean",
  expectedArray: "[label] must be an array",
  expectedObject: "[label] must be an object",
  expectedConstructor: "[label] must be a [type]",
  regEx: [
  {msg: "[label] failed regular expression validation"},
  {exp: SimpleSchema.RegEx.Email, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.WeakEmail, msg: "[label] must be a valid e-mail address"},
  {exp: SimpleSchema.RegEx.Domain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.WeakDomain, msg: "[label] must be a valid domain"},
  {exp: SimpleSchema.RegEx.IP, msg: "[label] must be a valid IPv4 or IPv6 address"},
  {exp: SimpleSchema.RegEx.IPv4, msg: "[label] must be a valid IPv4 address"},
  {exp: SimpleSchema.RegEx.IPv6, msg: "[label] must be a valid IPv6 address"},
  {exp: SimpleSchema.RegEx.Url, msg: "[label] must be a valid URL"},
  {exp: SimpleSchema.RegEx.Id, msg: "[label] must be a valid alphanumeric ID"}
  ],
  keyNotInSchema: "[label] is not allowed by the schema"
});

// Meteor methods related to collection
Meteor.methods({
  // someMethod: function(arg1, arg2) {
  //   return "some return value";
  // },
});
