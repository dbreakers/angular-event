import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  membersList = this.membersService.getMembersList();
  constructor(private membersService: MembersService) { }

  ngOnInit(): void {
  }

}
