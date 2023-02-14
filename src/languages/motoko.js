/*
Language: Motoko
Author: DFINITY Foundation
Description: Motoko smart contract language support
Website: https://internetcomputer.org
*/

function hljsDefineMotoko(hljs) {
    const keywords = [
        'actor',
        'and',
        'async',
        'assert',
        'await',
        'break',
        'case',
        'catch',
        'class',
        'continue',
        'debug',
        'debug_show',
        'do',
        'else',
        'false',
        'flexible',
        'for',
        'from_candid',
        'func',
        'if',
        'ignore',
        'in',
        'import',
        'label',
        'let',
        'loop',
        'module',
        'not',
        'null',
        'object',
        'or',
        'private',
        'public',
        'query',
        'return',
        'shared',
        'stable',
        'switch',
        'system',
        'throw',
        'to_candid',
        'true',
        'try',
        'type',
        'var',
        'while',
        'with',
    ];

    const typeKeywords = [
        'Any',
        'None',
        'Null',
        'Bool',
        'Int',
        'Int8',
        'Int16',
        'Int32',
        'Int64',
        'Nat',
        'Nat8',
        'Nat16',
        'Nat32',
        'Nat64',
        'Float',
        'Char',
        'Text',
        'Blob',
        'Error',
        'Principal',
    ];

    const literalKeywords = ['true', 'false', 'null'];

    const string = {
        className: 'string',
        variants: [
            {
                begin: /r(#*)"(.|\n)*?"\1(?!#)/,
            },
            {
                begin: /b?'\\?(x\w{2}|u\w{4}|U\w{8}|.)'/,
            },
        ],
    };

    const number = {
        className: 'number',
        variants: [
            {
                begin: '[+-]?\\b0[xX]([A-Fa-f0-9_]+)',
            },
            {
                begin: '[+-]?\\b(\\d[\\d_]*(\\.[0-9_]+)?([eE][+-]?[0-9_]+)?)',
            },
        ],
        relevance: 0,
    };

    return {
        name: 'Motoko',
        aliases: ['motoko', 'mo'],
        keywords: {
            $pattern: '[a-zA-Z_]\\w*',
            keyword: keywords
                .filter(
                    (k) => !literalKeywords.includes(k) && k !== 'async',
                )
                .join(' '),
            literal: literalKeywords.join(' '),
            built_in: `async ${typeKeywords.join(' ')}`,
        },
        illegal: '</',
        contains: [
            hljs.C_LINE_COMMENT_MODE,
            hljs.COMMENT('/\\*', '\\*/', {
                contains: ['self'],
            }),
            hljs.inherit(hljs.QUOTE_STRING_MODE, {
                begin: /b?"/,
                illegal: null,
            }),
            string,
            number,
            {
                className: 'symbol',
                begin: '#' + hljs.UNDERSCORE_IDENT_RE,
            },
            {
                className: 'function',
                beginKeywords: 'func',
                end: '(\\(|<|=|{)',
                excludeEnd: true,
                contains: [hljs.UNDERSCORE_TITLE_MODE],
            },
            {
                className: 'class',
                begin: '\\b(actor( class)?|module|object)\\b',
                keywords: 'actor class module object',
                end: '(\\(|<|{)',
                contains: [hljs.UNDERSCORE_TITLE_MODE],
                illegal: '[\\w\\d]',
            },
            {
                className: 'built_in',
                beginKeywords: 'import type',
                end: '(;|$|=)',
                excludeEnd: true,
                contains: [
                    hljs.QUOTE_STRING_MODE,
                    hljs.C_LINE_COMMENT_MODE,
                    hljs.COMMENT('/\\*', '\\*/', {
                        contains: ['self'],
                    }),
                ],
            },
        ],
    };
}

module.exports = hljsDefineMotoko;
