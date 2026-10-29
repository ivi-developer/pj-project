import { Component } from '@angular/core';
import { PjForm } from '../../components/pj-form/pj-form';
import { PjList } from '../../components/pj-list/pj-list';

@Component({
  imports: [PjForm,PjList],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {}
