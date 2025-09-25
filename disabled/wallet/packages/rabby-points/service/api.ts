import { OpenApiService } from "@lux-wallet/lux-api";
import { WebSignApiPlugin } from "@lux-wallet/lux-api/dist/plugins/web-sign";

const api = new OpenApiService({
  store: {
    host: "https://api.luxwallet.xyz",
  },
  plugin: WebSignApiPlugin,
});

const apiReady = new Promise<OpenApiService>((resolve, reject) => {
  api
    .init()
    .then(() => resolve(api))
    .catch(reject);
});

export default apiReady;
