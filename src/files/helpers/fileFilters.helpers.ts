import { Request } from "express";




export const fileFilter = (res: Request, file:Express.Multer.File, callback:Function) => {

    if(!file) return callback(new Error ("File is empty"), false)

    callback(null, true)
}