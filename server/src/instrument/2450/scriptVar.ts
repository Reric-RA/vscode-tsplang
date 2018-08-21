'use strict'

import { CompletionItem, CompletionItemKind, MarkupKind, ParameterInformation, SignatureInformation } from 'vscode-languageserver'

const scriptVarCompletions: Array<CompletionItem> = [
    // No scriptVar namespace
    {
        data: ['scriptVar'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nfunction run()\n```\n\
\n\
Execute the script object.'
        },
        kind: CompletionItemKind.Method,
        label: 'run',
    },
    {
        data: ['scriptVar'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nfunction save(fileName)\n```\n\nscriptVar.save([fileName])\n\
\n\
Save a script to nonvolatile memory or to USB flash drive if a fileName string is specified.\n\
\n\
If specified, the fileName should be absolute, begin with "/usb1/", and end with either ".tsp" or no file extension. \
An error will be logged if fileName ends with a file extension that is not ".tsp".'
        },
        kind: CompletionItemKind.Method,
        label: 'save',
    },
    {
        data: ['scriptVar'],
        documentation: {
            kind: MarkupKind.Markdown,
            value: '```lua\nscriptVar.source\n```\n\nscriptVar.source -> string\n\
\n\
Returns the script body as a string with lines separated by newline characters.'
        },
        kind: CompletionItemKind.Constant,
        label: 'source',
    },
]

const scriptVarSignatures: Array<SignatureInformation> = [
    SignatureInformation.create(
        'scriptVar.save([fileName])',
        undefined,
        ParameterInformation.create(
            'fileName',
            'The file name to use when saving the script to a USB flash drive.'
        ),
    ),
]

export async function getScriptVarCompletions(): Promise<Array<CompletionItem>> {
    return new Promise<Array<CompletionItem>>((
        resolve: (value?: Array<CompletionItem>) => void,
        reject: (reason?: Error) => void
    ): void => {
        try {
            resolve(scriptVarCompletions)
        } catch (e) {
            reject(new Error(e.toString()))
        }
    })
}

export async function getScriptVarSignatures(): Promise<Array<SignatureInformation>> {
    return new Promise<Array<SignatureInformation>>((
        resolve: (value?: Array<SignatureInformation>) => void,
        reject: (reason?: Error) => void
    ): void => {
        try {
            resolve(scriptVarSignatures)
        } catch (e) {
            reject(new Error(e.toString()))
        }
    })
}
