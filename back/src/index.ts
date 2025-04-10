import { PORT } from "./config/env"
import server from "./server"

server.listen(PORT, ()=>{
    console.log(`server listening on port ${PORT}`);
})