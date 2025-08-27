import { bungo } from "./bungo.mjs";


(async () => {
  await bungo().catch(err => { throw err; });
})();