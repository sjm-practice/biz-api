/* eslint-env mocha */
/* global browser */

import * as chai from "chai";
const expect = chai.expect;

describe("Chimp Mocha", () => {
  describe("Page Title", () => {
    it("should be set to simple", () => {
      browser.url("http://localhost:3000");
      expect(browser.getTitle()).to.equal("simple");
    });
  });
});
