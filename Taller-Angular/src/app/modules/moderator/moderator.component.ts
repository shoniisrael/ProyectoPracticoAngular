import { Component } from '@angular/core';

@Component({
  selector: 'app-moderator',
  templateUrl: './moderator.component.html',
  styleUrls: ['./moderator.component.scss']
})
export class ModeratorComponent {
  moderatorsList = [
    { name: 'user1', photo: 'https://i.pravatar.cc/300' },
    { name: 'user2', photo: 'https://i.pravatar.cc/300' },
    { name: 'user3', photo: 'https://i.pravatar.cc/300' }]
}
