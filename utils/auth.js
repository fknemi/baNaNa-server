import './env.js';
import { auth } from "express-oauth2-jwt-bearer"
const jwtCheck = auth({
    audience: String(process.env.AUDIENCE),
    issuerBaseURL: String(process.env.ISSUER_BASE_URL),
    tokenSigningAlg: "RS256"
});

export {
    jwtCheck
}
