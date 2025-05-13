interface IInformation {
    hobby?:string,
    about?:string,
    progress?:string,
    sex?:string,
    facts?:string,
    nicknames?:string
}


export interface IUser {
    id: number;
    name: string;
    img:any;
    className?:string;
    idClass?:string;
    galery?:any[]
    information:IInformation
}