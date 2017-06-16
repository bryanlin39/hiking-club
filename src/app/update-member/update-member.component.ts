import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css'],
  providers: [MemberService]
})
export class UpdateMemberComponent implements OnInit {
  @Input() memberToUpdate;

  constructor(private memberService: MemberService) { }

  ngOnInit() {
  }

  beginUpdatingMember(member) {
    this.memberService.updateMember(member);
  }

}
