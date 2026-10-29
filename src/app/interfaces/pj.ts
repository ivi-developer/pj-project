import { CLASS } from "../consts/class";
import { FACTION } from "../consts/faction";
import { RACE } from "../consts/race";
import { SPEC } from "../consts/spec";

export interface Pj{
        id?:number,
        name:string,
        user:string,
        lvl:number,
        class:CLASS
        faction:FACTION,
        race:RACE,
        spec:SPEC,                      
}