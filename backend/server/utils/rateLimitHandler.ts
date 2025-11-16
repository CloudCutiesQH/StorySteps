// Retry wrapper for OpenAI client calls with exponential backoff for rate limits
export async function withRateLimitRetry<T>(
  fn: () => Promise<T>,
  maxRetries = 5,
  initialDelayMs = 1000,
): Promise<T> {
  let lastError: Error | null = null;
  
  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error: unknown) {
      lastError = error as Error;
      const isRateLimited =
        error instanceof Error &&
        (error.message?.includes("429") || (error as any).status === 429);
      
      if (!isRateLimited) {
        throw error;
      }

      if (attempt === maxRetries - 1) {
        throw error;
      }

      // Exponential backoff: 1s, 2s, 4s, 8s, 16s, with random jitter
      const delayMs =
        initialDelayMs * Math.pow(2, attempt) +
        Math.random() * initialDelayMs * 0.1;
      
      console.log(
        `Rate limited (attempt ${attempt + 1}/${maxRetries}). Retrying in ${Math.round(delayMs)}ms...`,
      );
      
      await new Promise((resolve) => setTimeout(resolve, delayMs));
    }
  }

  throw lastError || new Error("Rate limit retry exhausted");
}
