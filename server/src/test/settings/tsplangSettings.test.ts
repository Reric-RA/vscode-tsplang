/*
 *  Copyright 2018 Tektronix Inc.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
// tslint:disable:no-implicit-dependencies no-unused-expression
import { expect } from 'chai'
// tslint:disable-next-line:no-import-side-effect
import 'mocha'
// tslint:enable:no-implicit-dependencies

import { EnumerationSuggestionValue, TsplangSettings } from '../../settings'

describe('Settings', () => {
    describe('TsplangSettings', () => {
        describe('.defaults()', () => {
            it('returns default settings', () => {
                const expectedDefaults: TsplangSettings = {
                    enumerationSuggestions: EnumerationSuggestionValue.INLINE
                }

                expect(TsplangSettings.defaults()).to.deep.equal(expectedDefaults)
            })
        })
    })
})