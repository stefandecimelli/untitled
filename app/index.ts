import express, {Express, Response, Request} from "express"

const port = 3000;
const app: Express = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, world?");
});

app.listen(port, () => {
  console.log("server started");
});
