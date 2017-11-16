// 1. Runner (describe, it, test) ... Mochua
// 2. Assertion library (.equal, .deepEqual) ... Chai
// 3. Mocks (Stubs, doubles, ) ... Sinon

// JEST (JSX, modern JavaScript)
// Snapshot testing
// Shallow rendering

import React from 'react';
import TestRenderer from 'react-test-renderer';
import { Summary } from './Summary';

describe('Summary', () => {
  it('works', () => {
    const tree = TestRenderer.create(<Summary numberOfDeals={42} />).toJSON();

    expect(tree.children[1]).toEqual('42');

    expect(tree).toMatchSnapshot();
  });
});
