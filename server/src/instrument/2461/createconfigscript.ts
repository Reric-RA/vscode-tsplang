/* tslint:disable:max-line-length */
'use strict'

import { CompletionItem, CompletionItemKind, MarkupKind, ParameterInformation, SignatureInformation } from 'vscode-languageserver'

const createconfigscriptCompletions: Array<CompletionItem> = [
    {
        detail: 'This function creates a setup file that captures most of the present settings of the instrument.',
        documentation: {
            kind: MarkupKind.Markdown,
            value: 'If scriptName is set to the name of an existing script, an event message is returned. You must delete the existing script before using the same script name. This function does not automatically overwrite existing scripts with the same name. This includes the autoexec script, which runs automatically when the instrument power is turned on. You can set scriptName to autoexec, but you must delete the existing autoexec script first using the autoexec.delete() command.\n\nOnce created, the script that contains the settings can be run and edited like any other script.'
        },
        kind: CompletionItemKind.Function,
        label: 'createconfigscript',
    },
]

const createconfigscriptSignatures: Array<SignatureInformation> = [
    SignatureInformation.create(
        'createconfigscript(scriptName)',
        undefined,
        ParameterInformation.create(
            'scriptName',
            'A string that represents the name of the script that will be created.'
        ),
    ),
]

export async function getCreateconfigscriptCompletions(): Promise<Array<CompletionItem>> {
    return new Promise<Array<CompletionItem>>((
        resolve: (value?: Array<CompletionItem>) => void,
        reject: (reason?: Error) => void
    ): void => {
            try {
                resolve(createconfigscriptCompletions)
            }
            catch (e) {
                reject(new Error(e.toString()))
            }
    })
}

export async function getCreateconfigscriptSignatures(): Promise<Array<SignatureInformation>> {
    return new Promise<Array<SignatureInformation>>((
        resolve: (value?: Array<SignatureInformation>) => void,
        reject: (reason?: Error) => void
    ): void => {
        try {
            resolve(createconfigscriptSignatures)
        }
        catch (e) {
            reject(new Error(e.toString()))
        }
    })
}
