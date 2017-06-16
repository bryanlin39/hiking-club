import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  providers: [MemberService]
})
export class MembersComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  filterByExperience: string = 'allMembers'

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.members = this.memberService.getMembers();
  }

  goToMemberDetail(clickedMember) {
    this.router.navigate(['members', clickedMember.$key]);
  }

  goToUpdate(clickedMember) {
    this.router.navigate(['members', clickedMember.$key, 'update']);
  }

  beginDeletingMember(member) {
    if(confirm("Are you sure you want to remove this member from the club?")) {
      this.memberService.deleteMember(member);
    }
  }

  onChange(desiredExperience) {
    this.filterByExperience = desiredExperience;
  }

}
