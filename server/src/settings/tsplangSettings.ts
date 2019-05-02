/*
 *  Copyright Tektronix Inc.
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
'use strict'

import { CompletionItemKind, TextDocumentContentChangeEvent } from 'vscode-languageserver'

import { CompletionItem } from '../decorators'

import { SuggestionSortKind } from './suggestionSortKind'

export interface DebugOpenSettings {
    documentInitializationDelay: null | number
}

export interface DebugPrintSettings {
    documentChangeEvents: boolean
    rootStatementParseTime: boolean
    rootStatementParseTree: boolean
}

export interface TsplangSettings {
    debug: {
        open: DebugOpenSettings;
        outline: boolean;
        print: DebugPrintSettings;
    }
    outline: {
        showInstrumentSettings: boolean;
    }
    suggestions: {
        enumerationOrder: SuggestionSortKind;
        hideInputEnumerations: boolean;
    }
}
export namespace TsplangSettings {
    /**
     * Creates a TsplangSettings object with default values.
     * @returns A default TsplangSettings object.
     */
    export function defaults(): TsplangSettings {
        return {
            debug: {
                open: {
                    // tslint:disable-next-line: no-null-keyword
                    documentInitializationDelay: null
                },
                outline: false,
                print: {
                    documentChangeEvents: false,
                    rootStatementParseTime: false,
                    rootStatementParseTree: false
                }
            },
            outline: {
                showInstrumentSettings: false
            },
            suggestions: {
                enumerationOrder: SuggestionSortKind.INLINE,
                hideInputEnumerations: false
            }
        }
    }

    /**
     * Returns a formatted string representing the contents of the given event.
     * @param event The event whose contents should be formatted.
     * @returns A formatted string.
     */
    export function formatDocumentChangeEvent(event: TextDocumentContentChangeEvent): string {
        return [
            '{',
            '  range: {',
            `    start: ${JSON.stringify(event.range.start)}`,
            `      end: ${JSON.stringify(event.range.end)}`,
            '  },',
            `  rangeLength: ${event.rangeLength}`,
            `  text: "${event.text}"`,
            '}'
        ].join('\n')
    }

    /**
     * Removes all input-only enumeration completions from the given completion array.
     * @param completions An array of CompletionItem.
     * @returns A filtered array of CompletionItem.
     */
    export function hideInputEnumerations(completions: Array<CompletionItem>): Array<CompletionItem> {
        return completions.filter((value: CompletionItem) => {
            return value.kind === CompletionItemKind.EnumMember && !value.exclusive
        })
    }

    /**
     * Returns a Map from the given settings that can be used as a recipe to create CompletionItem.sortText.
     * @param settings The settings used to seed the sort map.
     * @returns A Map object keyed on a CompletionItemKind whose key-value is the desired SuggestionSortKind.
     */
    export function sortMap(settings: TsplangSettings): Map<CompletionItemKind, SuggestionSortKind> {
        return new Map([
            [CompletionItemKind.EnumMember, settings.suggestions.enumerationOrder]
        ])
    }
}
