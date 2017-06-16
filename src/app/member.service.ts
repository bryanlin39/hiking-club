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

  updateMember(localUpdatedMember) {
    var memberInFirebase = this.getMemberById(localUpdatedMember.$key);
    memberInFirebase.update({name: localUpdatedMember.name, age: localUpdatedMember.age, location: localUpdatedMember.location, bio: localUpdatedMember.bio})
  }

}
