import { Component, OnInit, Input } from '@angular/core';
import { MemberService } from '../member.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css'],
  providers: [MemberService]
})
export class UpdateMemberComponent implements OnInit {
  @Input() memberToUpdate;

  constructor(private memberService: MemberService, private router: Router) { }

  ngOnInit() {
  }

  beginUpdatingMember(member) {
    this.memberService.updateMember(member);
    this.router.navigate(['/admin'])
  }

}
