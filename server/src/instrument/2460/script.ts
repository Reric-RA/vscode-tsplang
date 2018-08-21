/* tslint:disable:max-line-length */
'use strict'

import { CompletionItem, CompletionItemKind, MarkupKind, ParameterInformation, SignatureInformation } from 'vscode-languageserver'

const scriptCompletions: Array<CompletionItem> = [
    {
        detail: 'This function deletes a script from the run-time memory and nonvolatile memory.',
        documentation: {
            kind: MarkupKind.Markdown,
            value: 'When a script is deleted, the global variable referring to this script is also deleted.\n\nYou must delete an existing script before you can use the name of that script again. Scripts are not automatically overwritten.'
        },
        kind: CompletionItemKind.Function,
        label: 'script.delete',
    },
    {
        detail: 'This function creates a script from a specified file.',
        documentation: {
            kind: MarkupKind.Markdown,
            value: 'The named that is used for scriptVar must not already exist as a global variable. In addition, the scriptVar name must be a global reference and not a local variable, table, or array.\n\nFor external scripts, the root folder of the USB flash drive has the absolute path /usb1/.'
        },
        kind: CompletionItemKind.Function,
        label: 'script.load',
    },
]

const scriptSignatures: Array<SignatureInformation> = [
    SignatureInformation.create(
        'script.delete(scriptName)',
        undefined,
        ParameterInformation.create(
            'scriptName',
            'A string that represents the name of the script.'
        ),
    ),
    SignatureInformation.create(
        'script.load(file, scriptVar, scriptVar)',
        undefined,
        ParameterInformation.create(
            'file',
            'The path and file name of the script file to load; if scriptVar is not defined, this name is used as the global variable name for this script.'
        ),
        ParameterInformation.create(
            'scriptVar',
            'file.'
        ),
        ParameterInformation.create(
            'scriptVar',
            'The created script; a global variable with this name is used to reference the script.'
        ),
    ),
]

export async function getScriptCompletions(): Promise<Array<CompletionItem>> {
    return new Promise<Array<CompletionItem>>((
        resolve: (value?: Array<CompletionItem>) => void,
        reject: (reason?: Error) => void
    ): void => {
            try {
                resolve(scriptCompletions)
            }
            catch (e) {
                reject(new Error(e.toString()))
            }
    })
}

export async function getScriptSignatures(): Promise<Array<SignatureInformation>> {
    return new Promise<Array<SignatureInformation>>((
        resolve: (value?: Array<SignatureInformation>) => void,
        reject: (reason?: Error) => void
    ): void => {
        try {
            resolve(scriptSignatures)
        }
        catch (e) {
            reject(new Error(e.toString()))
        }
    })
}
