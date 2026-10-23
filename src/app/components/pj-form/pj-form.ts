import { Component, inject } from '@angular/core';
import { PjService } from '../../services/pj-service';
import { FormBuilder } from '@angular/forms';

@Component({
  imports: [],
  selector: 'app-pj-form',
  styleUrl: './pj-form.css',
  templateUrl: './pj-form.html',
})
export class PjForm {
  pjService=inject(PjService)
  fb=inject(FormBuilder)
  
}
