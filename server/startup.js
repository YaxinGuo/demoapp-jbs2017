import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  Pet.remove({});  // clear the database
  Pet.insert({name:'Xiaoai',birthyear:2016,gender:'Female'});
  Pet.insert({name:'Youzi',birthyear:2016,gender:'Male'});
});
