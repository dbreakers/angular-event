import { Component, OnInit, Input } from '@angular/core';
import { MembersService } from '../members.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  //membersList = this.membersService.getMembersList();
  @Input() membersList: []|undefined;
  constructor(private membersService: MembersService) { this.membersList=[]; }

  ngOnInit(): void {
   
  }

}
