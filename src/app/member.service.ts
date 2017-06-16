import { Injectable } from '@angular/core';
import { Member } from './member.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.members = database.list('members');
  }

  getMembers() {
    return this.members;
  }

  getMemberById(memberId: string) {
    return this.database.object('members/' + memberId);
  }

  addMember(newMember: Member) {
    this.members.push(newMember);
  }

  updateMember(memberToUpdate) {
    var memberInFirebase = this.getMemberById(memberToUpdate.$key);
    memberInFirebase.update({name: memberToUpdate.name, age: memberToUpdate.age, location: memberToUpdate.location, bio: memberToUpdate.bio, experience: memberToUpdate.experience})
  }

  deleteMember(memberToDelete) {
    var memberInFirebase = this.getMemberById(memberToDelete.$key);
    memberInFirebase.remove();
  }

}
