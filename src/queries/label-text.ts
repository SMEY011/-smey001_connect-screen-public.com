import type { ReactTestInstance } from 'react-test-renderer';

import { findAll } from '../helpers/find-all';
import { matchAccessibilityLabel } from '../helpers/matchers/match-label-text';
import type { TextMatch, TextMatchOptions } from '../matches';
import type {
  FindAllByQuery,
  FindByQuery,
  GetAllByQuery,
  GetByQuery,
  QueryAllByQuery,
  QueryByQuery,
} from './make-queries';
import { makeQueries } from './make-queries';
import type { CommonQueryOptions } from './options';

type ByLabelTextOptions = CommonQueryOptions & TextMatchOptions;

function queryAllByLabelText(instance: ReactTestInstance) {
  return (text: TextMatch, queryOptions?: ByLabelTextOptions) => {
    return findAll(
      instance,
      (node) => matchAccessibilityLabel(node, text, queryOptions),
      queryOptions,
    );
  };
}

const getMultipleError = (labelText: TextMatch) =>
  `Found multiple elements with accessibility label: ${String(labelText)} `;
const getMissingError = (labelText: TextMatch) =>
  `Unable to find an element with accessibility label: ${String(labelText)}`;

const { getBy, getAllBy, queryBy, queryAllBy, findBy, findAllBy } = makeQueries(
  queryAllByLabelText,
  getMissingError,
  getMultipleError,
);

export type ByLabelTextQueries = {
  getByLabelText: GetByQuery<TextMatch, ByLabelTextOptions>;
  getAllByLabelText: GetAllByQuery<TextMatch, ByLabelTextOptions>;
  queryByLabelText: QueryByQuery<TextMatch, ByLabelTextOptions>;
  queryAllByLabelText: QueryAllByQuery<TextMatch, ByLabelTextOptions>;
  findByLabelText: FindByQuery<TextMatch, ByLabelTextOptions>;
  findAllByLabelText: FindAllByQuery<TextMatch, ByLabelTextOptions>;
};

export const bindByLabelTextQueries = (instance: ReactTestInstance): ByLabelTextQueries => ({
  getByLabelText: getBy(instance),
  getAllByLabelText: getAllBy(instance),
  queryByLabelText: queryBy(instance),
  queryAllByLabelText: queryAllBy(instance),
  findByLabelText: findBy(instance),
  findAllByLabelText: findAllBy(instance),
});
