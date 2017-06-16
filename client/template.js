Template.showpet.helpers({
  petlist() {return Pet.find()},
})

Template.addpet.events({
  'click button'(elt,instance) {
    const name = instance.$('#name').val();
    const year = instance.$('#birthyear').val();
    const gender = instance.$('#gender').val();
    const birthyear = parseInt(year);
    console.log('adding '+name);
    instance.$('#name').val("");
    instance.$('#birthyear').val("");
    instance.$('#gender').val("");
    Pet.insert({name:name,birthyear:birthyear,gender:gender})
    //People.insert({name.birthyear})
  }
})

Template.petrow.events({
  'click span'(elt,instance) {
    console.dir(this);
    console.log(this.pet._id);
    Pet.remove(this.pet._id);
  }
})
