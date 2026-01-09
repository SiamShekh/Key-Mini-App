class SmartError extends Error{
    public statusCode: number;
    public msg: string;
    constructor(msg:string, statusCode:number) {
        super();
        this.msg = msg;
        this.statusCode = statusCode;
    }
}

export default SmartError;