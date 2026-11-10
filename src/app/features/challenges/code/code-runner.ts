/** Runs the student's code in a Web Worker, so an endless loop can be stopped and the page never freezes. */

export interface TestRun {
  /** What the function returned, shown as code (strings quoted). */
  got: string;
  /** The raw value as text, used to spot a reversed answer. */
  raw: string;
  ok: boolean;
}

export type RunResult =
  | { kind: 'done'; runs: TestRun[] }
  | { kind: 'missing' }
  | { kind: 'syntax'; message: string }
  | { kind: 'timeout' }
  | { kind: 'unsupported' };

const TIME_LIMIT_MS = 1500;

export function runInWorker(code: string, functionName: string, inputs: readonly number[]): Promise<RunResult> {
  const source = `${code}
;self.onmessage = function () {
  if (typeof ${functionName} !== 'function') { self.postMessage({ missing: true }); return; }
  var inputs = ${JSON.stringify(inputs)}, out = [];
  for (var i = 0; i < inputs.length; i++) {
    try {
      var r = ${functionName}(inputs[i]);
      out.push({ ok: true, got: typeof r === 'string' ? JSON.stringify(r) : String(r), raw: String(r) });
    } catch (e) {
      out.push({ ok: false, got: String((e && e.message) || e), raw: '' });
    }
  }
  self.postMessage({ out: out });
};`;

  let worker: Worker;
  let url: string;
  try {
    url = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }));
    worker = new Worker(url);
  } catch {
    return Promise.resolve({ kind: 'unsupported' });
  }

  return new Promise<RunResult>((resolve) => {
    const finish = (result: RunResult) => {
      clearTimeout(timer);
      worker.terminate();
      URL.revokeObjectURL(url);
      resolve(result);
    };
    const timer = setTimeout(() => finish({ kind: 'timeout' }), TIME_LIMIT_MS);
    worker.onmessage = (e: MessageEvent) => {
      const data = e.data as { missing?: boolean; out?: { ok: boolean; got: string; raw: string }[] };
      if (data.missing) finish({ kind: 'missing' });
      else finish({ kind: 'done', runs: (data.out ?? []).map((o) => ({ got: o.got, raw: o.raw, ok: o.ok })) });
    };
    worker.onerror = (e: ErrorEvent) => {
      e.preventDefault();
      finish({ kind: 'syntax', message: e.message || 'SyntaxError' });
    };
    worker.postMessage(1);
  });
}
