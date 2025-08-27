import { bungo } from "./bungo.mjs";


await (async () => {
  await bungo().catch(err => { throw err; });
})();