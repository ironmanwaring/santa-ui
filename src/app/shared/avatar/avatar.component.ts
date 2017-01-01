import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input()
  src: String = '';
  
  size: string = 'large';
  
  getClass(): any {
    let classMap = {};
    classMap[this.size] = true;
    return classMap;
  }
}
