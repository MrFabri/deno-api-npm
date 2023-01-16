import { config } from "https://deno.land/std@0.172.0/dotenv/mod.ts";

const env = await config({
    export: true,
    allowEmptyValues: true,
});

export default env;