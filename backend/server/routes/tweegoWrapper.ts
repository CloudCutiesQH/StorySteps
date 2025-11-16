
import { spawn } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import os from 'os';

export async function compileTwee(tweeString: string, options?: { format?: string; start?: string; modulesDir?: string; }) : Promise<string> {
  // write to temp file
  const tmpFile = path.join(os.tmpdir(), `twee-${Date.now()}.twee`);
  await fs.writeFile(tmpFile, tweeString, 'utf8');

  // build args
  const args: string[] = [];
  if (options?.format) {
    args.push('--format=' + options.format);
  }
  if (options?.start) {
    args.push('--start=' + options.start);
  }
  args.push('-o', '-');            // output to stdout
  args.push(tmpFile);

  return new Promise<string>((resolve, reject) => {
    const proc = spawn('/Users/dakot/go/bin/tweego', args, {
      env: {
        ...process.env,
        'TWEEGO_PATH': '/Users/dakot/research/StorySteps/backend/assets/story-formats',
      }
    }); // TODO: bad that this is hardcoded
    let stdout = '';
    let stderr = '';

    proc.stdout.on('data', (chunk) => { stdout += chunk.toString(); });
    proc.stderr.on('data', (chunk) => { stderr += chunk.toString(); });

    proc.on('error', (err) => {
      // clean up on error
      fs.unlink(tmpFile).catch(() => {});
      reject(err);
    });
    proc.on('close', (code) => {
      // clean up
      fs.unlink(tmpFile).catch(() => {});
      if (code === 0) {
        resolve(stdout);
      } else {
        reject(new Error(`Tweego exited with code ${code}, stderr: ${stderr}`));
      }
    });
  });
}
