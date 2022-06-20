import jwt from "jsonwebtoken";
import CONFIG from "../config";

class jwtHelper {
  /**
   * Create an access token to login
   * @param {String} id refers to the user
   * @param {Object} extra any aditional payload for the token
   * @returns the signed token
   */
  static createAccessToken(id: string, extra = {}) {
    const tokenPayload = {
      sub: id,
      ...extra,
    };
    const options = {
      expiresIn: "1d",
    };
    const token = jwt.sign(tokenPayload, CONFIG.jwtAccess, options);
    return token;
  }

  static createRefreshToken(id, extra = {}) {
    const tokenPayload = {
      sub: id,
      ...extra,
    };
    const options = {
      expiresIn: "2d",
    };
    const token = jwt.sign(tokenPayload, config.jwtRefresh, options);
    return token;
  }

  static createRecoveryToken(id, extra = {}) {
    const tokenPayload = {
      sub: id,
      ...extra,
    };
    const options = {
      expiresIn: "10min",
    };
    const token = jwt.sign(tokenPayload, config.jwtRecovery, options);
    return token;
  }
  /**
   * When login or register return the access token and the recovery token
   * @param {String} id user id
   * @param {Object} extra additional info for jwt token, default has {sub, iat, exp}
   * @returns {Object} {accessToken, refreshToken}
   */
  static getTokens(id, extra = {}) {
    const accessToken = this.createAccessToken(id, extra);
    const refreshToken = this.createRefreshToken(id, extra);
    return { accessToken, refreshToken, id };
  }

  /**
   * Verify refresh token to get a new session token, replace old ones
   * @param {String} refreshToken a JSON Web Token for recovery sessions
   * @returns {Object} new Object with new access token and recovery token {accessToken, refreshToken}
   */
  static refreshTokens(refreshToken) {
    const payload = jwt.verify(refreshToken, config.jwtRefresh);
    const { sub, exp, iat, ...rest } = payload; //eslint-disable-line
    if (!payload) return null;
    return () => this.getTokens(sub, rest);
  }

  static verifyRefreshToken(token) {
    const payload = jwt.verify(token, config.jwtRecovery);
    return payload;
  }
}

export default jwtHelper;
