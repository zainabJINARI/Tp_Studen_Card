export class Student {

    id?:number
    fullname?:string
    schoolName?:string
    rib?:string

    constructor(id?:number,fullname?:string,schoolName?:string,rib?:string){
        this.id=id
        this.fullname=fullname
        this.rib=rib
        this.schoolName=schoolName
    }
}