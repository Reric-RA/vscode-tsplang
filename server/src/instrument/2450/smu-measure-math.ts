'use strict'

import { CompletionItem, CompletionItemKind, MarkupKind } from 'vscode-languageserver'

const smuMeasureMathCompletions: Array<CompletionItem> = [
    {
        data: ['measure', 'smu'],
        kind: CompletionItemKind.Module,
        label: 'math'
    },
    {
        data: ['math', 'measure', 'smu'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nsmu.measure.math.enable\n```\n\
\n\
Get or set the present math measurement setting to smu.ON or OFF. Defaults to smu.OFF.\n\
\n\
When set to smu.ON, the math operation specified by the math format attribute is performed before completing a \
measurement.\n\
\n\
This attribute is saved with the active function and retained until the next instrument reset or power cycle.'
        },
        kind: CompletionItemKind.Property,
        label: 'enable',
    },
    {
        data: ['math', 'measure', 'smu'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nsmu.measure.math.format\n```\n\
\n\
Get or set the math operation performed on each measurement to smu.MATH_\\*. Defaults to smu.MATH_PERCENT.\n\
\n\
Math calculations are applied to the input signal after relative offset but before limit tests.\n\
\n\
This attribute is saved with the active function and retained until the next instrument reset or power cycle.'
        },
        kind: CompletionItemKind.Property,
        label: 'format',
    },
    {
        data: ['math', 'measure', 'smu'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nsmu.measure.math.percent\n```\n\
\n\
Get or set the reference constant used by percent deviation to a number from -1e+12 to +1e+12. Defaults to 1.\n\
\n\
Only used when the math format attribute is set to smu.MATH_PERCENT.\n\
\n\
Percent deviation is calculated as `percent = ((in - ref) / ref) * 100` where \
*percent* is the supplied measurment result, \
*in* is the measurement with relative offset applied (if applicable), \
and *ref* is this attribute.\n\
\n\
This attribute is saved with the active function and retained until the next instrument reset or power cycle.'
        },
        kind: CompletionItemKind.Property,
        label: 'percent',
    },
]

export async function getSmuMeasureMathCompletions(): Promise<Array<CompletionItem>> {
    return new Promise<Array<CompletionItem>>((
        resolve: (value?: Array<CompletionItem>) => void,
        reject: (reason?: Error) => void
    ): void => {
        try {
            resolve(smuMeasureMathCompletions)
        } catch (e) {
            reject(new Error(e.toString()))
        }
    })
}
