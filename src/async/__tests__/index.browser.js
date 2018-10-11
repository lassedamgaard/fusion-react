/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */
import './__browser__/prepare-render.browser.js';

process.on('unhandledRejection', e => {
  throw e;
});
