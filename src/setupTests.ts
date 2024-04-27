import '@testing-library/jest-dom';
import { server } from './mocks/server.js';
// Node.js 환경에서의 TextDecoder를 NodeTextDecoder로 가져옵니다.
import { TextEncoder, TextDecoder as NodeTextDecoder } from 'util';

// TypeScript에서의 타입 충돌을 방지하기 위해 별칭을 사용합니다.
const TextDecoderNode: typeof TextDecoder = NodeTextDecoder as any;

// 이제 TextDecoderNode를 TextDecoder 타입으로 사용할 수 있습니다.
declare global {
  var TextEncoder: typeof TextEncoder;
  var TextDecoder: typeof TextDecoderNode;
}

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoderNode;

// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
