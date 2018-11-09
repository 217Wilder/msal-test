/*
  * Copyright (c) Microsoft Corporation
  *  All Rights Reserved
  *  MIT License
  *
  * Permission is hereby granted, free of charge, to any person obtaining a copy of this
  * software and associated documentation files (the "Software"), to deal in the Software
  * without restriction, including without limitation the rights to use, copy, modify,
  * merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
  * permit persons to whom the Software is furnished to do so, subject to the following
  * conditions:
  *
  * The above copyright notice and this permission notice shall be
  * included in all copies or substantial portions of the Software.
  *
  * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
  * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS
  * OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
  * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT
  * OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
  */

import { Utils } from "./Utils";

/*
 * @hidden
 */
export class IdToken {

  issuer: string;
  objectId: string;
  subject: string;
  tenantId: string;
  version: string;
  preferredName: string;
  name: string;
  homeObjectId: string;
  nonce: string;
  expiration: string;
  rawIdToken: string;
  decodedIdToken: Object;
  sid: string;

  constructor(rawIdToken: string) {
    let issKey = "iss";
    let oidKey = "oid";
    let subKey = "sub";
    let tidKey = "tid";
    let verKey = "ver";
    let preferred_usernameKey = "preferred_username";
    let nameKey = "name";
    let nonceKey = "nonce";
    let expKey = "exp";
    let home_oidKey = "home_oid";
    let sidKey = "sid";
    if (Utils.isEmpty(rawIdToken)) {
      throw new Error("null or empty raw idtoken");
    }
    try {
      this.rawIdToken = rawIdToken;
      this.decodedIdToken = Utils.extractIdToken(rawIdToken);
      if (this.decodedIdToken) {
        if (this.decodedIdToken.hasOwnProperty(issKey)) {
          this.issuer = this.decodedIdToken[issKey];
        }

        if (this.decodedIdToken.hasOwnProperty(oidKey)) {
          this.objectId = this.decodedIdToken[oidKey];
        }

        if (this.decodedIdToken.hasOwnProperty(subKey)) {
          this.subject = this.decodedIdToken[subKey];
        }

        if (this.decodedIdToken.hasOwnProperty(tidKey)) {
          this.tenantId = this.decodedIdToken[tidKey];
        }

        if (this.decodedIdToken.hasOwnProperty(verKey)) {
          this.version = this.decodedIdToken[verKey];
        }

        if (this.decodedIdToken.hasOwnProperty(preferred_usernameKey)) {
          this.preferredName = this.decodedIdToken[preferred_usernameKey];
        }

        if (this.decodedIdToken.hasOwnProperty(nameKey)) {
          this.name = this.decodedIdToken[nameKey];
        }

        if (this.decodedIdToken.hasOwnProperty(nonceKey)) {
          this.nonce = this.decodedIdToken[nonceKey];
        }

        if (this.decodedIdToken.hasOwnProperty(expKey)) {
          this.expiration = this.decodedIdToken[expKey];
        }

        if (this.decodedIdToken.hasOwnProperty(home_oidKey)) {
          this.homeObjectId = this.decodedIdToken[home_oidKey];
        }

        if (this.decodedIdToken.hasOwnProperty(sidKey)) {
          this.sid = this.decodedIdToken[sidKey];
        }

      }
    } catch (e) {
      throw new Error("Failed to parse the returned id token");
    }
  }

}
