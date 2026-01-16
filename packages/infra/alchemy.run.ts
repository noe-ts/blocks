import alchemy from "alchemy";
import { TanStackStart } from "alchemy/cloudflare";
import { config } from "dotenv";

config({ path: "./.env" });
config({ path: "../../apps/web/.env" });

const app = await alchemy("blocks");

export const web = await TanStackStart("web", {
  cwd: "../../apps/web",
  domains: ["explore-map.dbsq.fr"],
  bindings: {
    VITE_SERVER_URL: alchemy.env.VITE_SERVER_URL!,
    CORS_ORIGIN: alchemy.env.CORS_ORIGIN!,
  },
});

const salesforce = await TanStackStart("salesforce", {
  cwd: "../../apps/salesforce",
  domains: ["salesforce.dbsq.fr"],
  bindings: {
    VITE_SERVER_URL: alchemy.env.VITE_SERVER_URL!,
    CORS_ORIGIN: alchemy.env.CORS_ORIGIN!,
  },
});

console.log(`Web    -> ${web.url}`);
console.log(`Salesforce -> ${salesforce.url}`);

await app.finalize();
