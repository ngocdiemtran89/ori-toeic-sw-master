import { describe, it, expect } from 'vitest';
import { playExamTone, getSupportedMimeType } from './audio';

describe('audio utilities', () => {
  it('plays preparation start tone without errors', () => {
    expect(() => playExamTone('prep_start')).not.toThrow();
  });

  it('plays speak start tone without errors', () => {
    expect(() => playExamTone('speak_start')).not.toThrow();
  });

  it('plays stop warning tone without errors', () => {
    expect(() => playExamTone('stop')).not.toThrow();
  });

  it('detects supported audio MIME types', () => {
    const mimeType = getSupportedMimeType();
    expect(typeof mimeType).toBe('string');
  });
});
