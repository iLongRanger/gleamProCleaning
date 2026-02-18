type Bucket = {
  count: number;
  resetAt: number;
};

const BUCKETS_KEY = "__gleampro_rate_limit_buckets__";

function getBuckets(): Map<string, Bucket> {
  const globalScope = globalThis as typeof globalThis & {
    [BUCKETS_KEY]?: Map<string, Bucket>;
  };

  if (!globalScope[BUCKETS_KEY]) {
    globalScope[BUCKETS_KEY] = new Map<string, Bucket>();
  }

  return globalScope[BUCKETS_KEY];
}

export function takeRateLimit(options: {
  key: string;
  windowMs: number;
  max: number;
}) {
  const { key, windowMs, max } = options;
  const now = Date.now();
  const buckets = getBuckets();

  const existing = buckets.get(key);
  if (!existing || existing.resetAt <= now) {
    const resetAt = now + windowMs;
    buckets.set(key, { count: 1, resetAt });
    return {
      allowed: true,
      remaining: max - 1,
      retryAfterSeconds: Math.ceil(windowMs / 1000),
    };
  }

  if (existing.count >= max) {
    return {
      allowed: false,
      remaining: 0,
      retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
    };
  }

  existing.count += 1;
  buckets.set(key, existing);

  return {
    allowed: true,
    remaining: Math.max(0, max - existing.count),
    retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - now) / 1000)),
  };
}
