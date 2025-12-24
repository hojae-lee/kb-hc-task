import js from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import tanstackQuery from '@tanstack/eslint-plugin-query'

/**
 * React 프로젝트용 ESLint 통합 설정
 */

export default [
  {
    ignores: [
      'dist/**',
      'build/**',
      'node_modules/**',
      '*.config.js',
      '*.config.cjs',
      '**/*.js',
      'tailwind.config.ts'
    ]
  },

  // 기본 설정들
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],
  eslintConfigPrettier,
  ...tanstackQuery.configs['flat/recommended'],

  // 메인 설정
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      'unused-imports': unusedImports,
      react,
      'react-hooks': reactHooks
    },
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    },
    rules: {
      // React Hook 규칙들
      ...reactHooks.configs.recommended.rules,

      // React 17+ JSX Transform 대응 (이미 jsx-runtime 설정에서 처리되지만 명시적으로 유지)
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Arrow function 강제 설정
      'arrow-body-style': 'off',
      'prefer-arrow-callback': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function'
        }
      ],

      // 미사용 import/변수 처리
      'unused-imports/no-unused-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_'
        }
      ],

      // TypeScript 엄격한 규칙들 완화
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unsafe-function-type': 'off',
      '@typescript-eslint/no-empty-object-type': 'off',
      '@typescript-eslint/no-wrapper-object-types': 'off',

      // 환경별 변수 허용
      'no-undef': 'off',

      // React 추가 규칙들
      'react/prop-types': 'off', // TypeScript 사용시 불필요
      'react/display-name': 'off' // arrow function에서는 불필요한 경우가 많음
    }
  }
]
