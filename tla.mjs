import { bungo } from "./bungo.mjs";

await bungo().catch(err => { throw err; });