import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [];

  @Output()
  public deletedId: EventEmitter<string> = new EventEmitter<string>();

  onDeleteCharacter(id?: string): void {
    //console.log({ id });
    if (!id) return;
    this.deletedId.emit(id);
  }
}
