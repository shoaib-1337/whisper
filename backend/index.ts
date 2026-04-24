import app from "./src/app";
import { connectDB } from "./src/config/databse";

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT,()=> {
        console.log(`Server is running at port ${PORT}`);
        
    })
});
