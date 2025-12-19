import { Component } from '@angular/core';
import {Card} from '../../shared/ui/card/card';

@Component({
  selector: 'app-projects',
  imports: [Card],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  chips = [
    {id: 'tdd', labels: ['Spring boot', 'AWS', 'PostgreSQL', 'Jenkins', 'GIT']},
    {id: 'ap', labels: ['Spring boot', 'AWS', 'PostgreSQL', 'Jenkins', 'GIT']},
    {id: 'report', labels: ['Spring boot', 'AWS', 'PostgreSQL', 'Jenkins', 'GIT']},
    {id: 'dyna', labels: ['Spring boot', 'AWS', 'GIT', 'Dynatrace']}
  ];

  getChips(id: string) {
    return this.chips.find(chip => id === chip.id)?.labels ?? [];
  }

}
