import {readFileSync} from "node:fs";

const tokenFile: string = process.env.TOKEN_FILE || ".token";

try {
    process.env.METLINK_TOKEN = readFileSync(tokenFile, "utf-8");
} catch {
    process.env.METLINK_TOKEN = process.env.METLINK_TOKEN || ""
}
