import { expect } from "chai";
import { describe } from "razmin";
import { RPCProxy } from "./rpc-proxy";
import { RPCSession } from "./session";
import { TestChannel } from "./test-channel";
import { getRpcType } from "./internal";

describe('RPCProxy', it => {
    it.only('is remotable', () => {
        let [a, b] = TestChannel.makePair();
        let sessionA = new RPCSession(a);
        let proxy = RPCProxy.create(sessionA, 'abcdef', 'abcdef');
        expect(getRpcType(proxy.constructor)).to.equal('remotable');
    });
});