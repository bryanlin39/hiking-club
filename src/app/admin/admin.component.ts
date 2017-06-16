import { Component, OnInit } from '@angular/core';
import { Member } from '../member.model';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  submitForm(name: string, age: number, location: string, bio: string) {
    var date: string = new Date().toDateString();
    var newMember: Member = new Member(name, age, location, bio, date);
    this.memberService.addMember(newMember);
  }

}
