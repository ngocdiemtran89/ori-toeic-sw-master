import { describe, it, expect } from 'vitest';
import { evaluateToeicResponse } from './aiEvaluator';
import { WRITING_QUESTIONS, SPEAKING_QUESTIONS } from '../data/mockQuestions';

describe('aiEvaluator - ETS Scoring Engine', () => {
  it('correctly scores Writing Part 1 with both keywords used in 1 sentence', async () => {
    const q1 = WRITING_QUESTIONS[0]; // givenKeywords: ['client', 'assist']
    const validResponse = 'The consultant is diligently assisting her client with important financial documents.';

    const result = await evaluateToeicResponse('writing', q1, {
      textContent: validResponse
    });

    expect(result.rawScore).toBe(3);
    expect(result.scaledScore).toBeGreaterThanOrEqual(180);
    expect(result.grammarCorrections).toHaveLength(0);
    expect(result.scores.taskCompletion).toBe(100);
  });

  it('penalizes Writing Part 1 when student writes more than 1 sentence', async () => {
    const q1 = WRITING_QUESTIONS[0];
    const multipleSentences = 'The consultant assists the person. The client looks satisfied.';

    const result = await evaluateToeicResponse('writing', q1, {
      textContent: multipleSentences
    });

    expect(result.rawScore).toBeLessThanOrEqual(2);
    expect(result.grammarCorrections.length).toBeGreaterThan(0);
    expect(result.grammarCorrections[0].explanation).toContain('ETS Part 1 bắt buộc chỉ được viết ĐÚNG 1 CÂU');
  });

  it('evaluates Writing Part 2 email response requirements', async () => {
    const q6 = WRITING_QUESTIONS[1]; // Email response
    const emailResponse = `Dear Mr. Miller,

Thank you very much for your prompt response regarding our Annual Gala Dinner reservation. I am delighted to confirm that our company event will proceed on December 18th in the Grand Ballroom as planned.

We anticipate having approximately 150 guests, with about 20 attendees requesting vegetarian meals. 

Could you please clarify whether the room rental includes wireless microphones and modern audiovisual equipment? Furthermore, what time will our technical team be granted access for stage setup?

Best regards,
Alex Nguyen`;

    const result = await evaluateToeicResponse('writing', q6, {
      textContent: emailResponse
    });

    expect(result.rawScore).toBeGreaterThanOrEqual(3);
    expect(result.scaledScore).toBeGreaterThanOrEqual(140);
    expect(result.scores.taskCompletion).toBeGreaterThan(0);
  });

  it('evaluates Speaking responses with phonetic and intonation feedback', async () => {
    const spkQ1 = SPEAKING_QUESTIONS[0];

    const result = await evaluateToeicResponse('speaking', spkQ1, {
      audioBase64: 'data:audio/webm;base64,GkXfo59ChoEBQveBAULygQ8USA==',
      durationSeconds: 35
    });

    expect(result.scaledScore).toBeGreaterThanOrEqual(150);
    expect(result.proficiencyLevel).toContain('Level');
    expect(result.scores.pronunciationFluency).toBeGreaterThan(0);
    expect(result.actionableAdvice.length).toBeGreaterThan(0);
  });
});
