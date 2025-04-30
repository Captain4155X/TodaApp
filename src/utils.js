import { config } from "./config";

export function createURL(path) {
    return `${config.serverURL}/${path}`
}