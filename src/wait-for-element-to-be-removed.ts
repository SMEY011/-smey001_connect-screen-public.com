import { ErrorWithStack } from './helpers/errors';
import type { WaitForOptions } from './wait-for';
import waitFor from './wait-for';

function isRemoved<T>(result: T): boolean {
  return !result || (Array.isArray(result) && !result.length);
}

export default async function waitForElementToBeRemoved<T>(
  expectation: () => T,
  options?: WaitForOptions,
): Promise<T> {
  // Created here so we get a nice stacktrace
  const timeoutError = new ErrorWithStack(
    'Timed out in waitForElementToBeRemoved.',
    waitForElementToBeRemoved,
  );

  // Elements have to be present initally and then removed.
  const initialElements = expectation();
  if (isRemoved(initialElements)) {
    throw new ErrorWithStack(
      'The element(s) given to waitForElementToBeRemoved are already removed. waitForElementToBeRemoved requires that the element(s) exist(s) before waiting for removal.',
      waitForElementToBeRemoved,
    );
  }

  return await waitFor(() => {
    let result;
    try {
      result = expectation();
    } catch {
      return initialElements;
    }

    if (!isRemoved(result)) {
      throw timeoutError;
    }

    return initialElements;
  }, options);
}
