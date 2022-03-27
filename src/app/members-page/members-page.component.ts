import { Component, OnInit } from '@angular/core';
import { MembersService } from '../members.service';

@Component({
  selector: 'app-members-page',
  templateUrl: './members-page.component.html',
  styleUrls: ['./members-page.component.css']
})
export class MembersPageComponent implements OnInit {
  membersList: Members[] = [];
  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.getmembersservice();
  }
  
  getmembersservice(): void {
    this.membersService.getMembersList()
    .subscribe(members => (this.membersList = members));
  }

}
