import cors from "cors";

const ACCEPTED_ORIGINS: string[] = [
  "http://localhost:4200"
];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) =>
  cors({
    origin:(origin,callback)=>{
        if(acceptedOrigins.includes(origin as never)){
            return callback(null,true)
        }
        if(!origin){
            return callback(null,true)
        }
        return callback(new Error("Not allowed by CORS"))
    }
  });
