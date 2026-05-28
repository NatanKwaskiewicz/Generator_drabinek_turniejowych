import '@testing-library/jest-dom'

// @ts-ignore
global.TextEncoder = globalThis.TextEncoder ?? require('util').TextEncoder
// @ts-ignore
global.TextDecoder = globalThis.TextDecoder ?? require('util').TextDecoder

class ResizeObserverMock {
    observe() {}
    unobserve() {}
    disconnect() {}
}

Object.defineProperty(globalThis, 'ResizeObserver', {
    writable: true,
    configurable: true,
    value: ResizeObserverMock,
})
