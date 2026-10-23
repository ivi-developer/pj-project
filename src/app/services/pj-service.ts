import { inject, Injectable, Service, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { single } from 'rxjs';
import { Pj } from '../interfaces/pj';

@Service()
@Injectable({providedIn:'root'})
    export class PjService {
        url=environment.url
        http=inject(HttpClient)
        pjs=signal<Pj[]>([])
        pjById=signal<Pj|null>(null)
        error=signal<string>('')
        getPjs(){
            this.http.get<Pj[]>(this.url).subscribe(data=>this.pjs.set(data),error=>this.error.set(error))
        }
        getPjById(id:number){
            this.http.get<Pj>(`${this.url}/${id}`).subscribe(data=>this.pjById.set(data),error=>this.error.set(error))
        }
        postPj(pj:Pj){
            this.http.post(this.url,pj).subscribe(()=>{this.getPjs},error=>this.error.set(error))
        }
        putPj(pj:Partial<Pj>,id:number){
            this.http.put(`${this.url}/${id}`,pj).subscribe(()=>{this.getPjs},error=>this.error.set(error))
        }
        deletePj(id:number){
            this.http.delete(`${this.url},${id}`).subscribe(()=>this.getPjs,error=>this.error.set(error))
        }
    }
