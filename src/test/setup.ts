import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock Web Audio API
class MockAudioContext {
  state = 'running';
  currentTime = 0;
  destination = {};

  createOscillator() {
    return {
      type: 'sine',
      frequency: {
        setValueAtTime: vi.fn(),
        exponentialRampToValueAtTime: vi.fn()
      },
      connect: vi.fn(),
      start: vi.fn(),
      stop: vi.fn()
    };
  }

  createGain() {
    return {
      gain: {
        setValueAtTime: vi.fn(),
        exponentialRampToValueAtTime: vi.fn()
      },
      connect: vi.fn()
    };
  }

  createMediaStreamSource() {
    return {
      connect: vi.fn(),
      disconnect: vi.fn()
    };
  }

  createAnalyser() {
    return {
      fftSize: 256,
      frequencyBinCount: 128,
      getByteFrequencyData: vi.fn((arr: Uint8Array) => arr.fill(40))
    };
  }

  resume() {
    return Promise.resolve();
  }
}

(window as unknown as { AudioContext: typeof MockAudioContext }).AudioContext = MockAudioContext;

// Mock MediaDevices
Object.defineProperty(navigator, 'mediaDevices', {
  value: {
    getUserMedia: vi.fn().mockResolvedValue({
      getTracks: () => [{ stop: vi.fn() }]
    })
  },
  configurable: true
});

// Mock MediaRecorder
class MockMediaRecorder {
  state = 'inactive';
  mimeType = 'audio/webm';
  ondataavailable: ((e: { data: Blob }) => void) | null = null;
  onstop: (() => void) | null = null;

  static isTypeSupported() {
    return true;
  }

  start() {
    this.state = 'recording';
  }

  stop() {
    this.state = 'inactive';
    if (this.onstop) this.onstop();
  }
}

(window as unknown as { MediaRecorder: typeof MockMediaRecorder }).MediaRecorder = MockMediaRecorder;

// Mock canvas-confetti
vi.mock('canvas-confetti', () => ({
  default: vi.fn()
}));
