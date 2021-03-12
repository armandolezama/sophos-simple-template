/* eslint-disable no-unused-expressions */
import { fixture, assert } from "@open-wc/testing";
import '../sophos-icon';

describe('Suite cases', () => {
    it('First Test', async () => {
        const _element = await fixture('<sophos-icon></sophos-icon>');
        const data = {}
        assert.strictEqual(_element.iconDirection, data.iconDirection);
    });
});