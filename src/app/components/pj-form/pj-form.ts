import { Component, inject } from '@angular/core';
import { PjService } from '../../services/pj-service';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CLASS } from '../../consts/class';
import { FACTION } from '../../consts/faction';
import { RACE } from '../../consts/race';
import { SPEC } from '../../consts/spec';
import { Pj } from '../../interfaces/pj';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-pj-form',
  styleUrl: './pj-form.css',
  templateUrl: './pj-form.html',
})
export class PjForm {
  pjService=inject(PjService)
  fb=inject(FormBuilder)
  
  form=this.fb.nonNullable.group({
      name:["",[Validators.required]],
      user:["",[Validators.required]],
      lvl:[0,[Validators.required]],
      class:[CLASS.brujo,[Validators.required]],
      faction:[FACTION.horda,[Validators.required]],
      race:[RACE.no_muerto,[Validators.required]],
      spec:[SPEC.demonologia,[Validators.required]],
  })

  clases=Object.values(CLASS)
  factiones=Object.values(FACTION)
  razas=Object.values(RACE)
  specs=Object.values(SPEC)

  pj:Pj|null=null

  postPj(){
    if(this.form.invalid)return
    this.pj=this.form.getRawValue()
    this.pjService.postPj(this.pj)
  }

}
