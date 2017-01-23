/* tslint:disable */

// Type definitions for Meteor package matb33:collection-hooks
// Project: https://github.com/matb33/meteor-collection-hooks
// Source: https://github.com/twastvedt/typed-meteor-collection-hooks

module 'meteor/mongo' {
  module Mongo {
    interface Collection<T> {
      before: {
        find(hook: {(userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }): void}): void;
        findOne(hook: {(userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }): void}): void;
        insert(hook: {(userId: string, doc: T): void}): void;
        remove(hook: {(userId: string, doc: T): void}): void;
        update(hook: {(userId: string, doc: T, fieldNames: string[], modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void}): void;
        upsert(hook: {(userId: string, doc: T, selector: Mongo.Selector, modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void}): void;
      };
      after: {
        find(hook: {(userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }, cursor: Mongo.Cursor<T>): void}): void;
        findOne(hook: {(userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }, doc: T): void}): void;
        insert(hook: {(userId: string, doc: T): void}): void;
        remove(hook: {(userId: string, doc: T): void}): void;
        update(hook: {(userId: string, doc: T, fieldNames: string[], modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void}, options?: HookOptions): void;
        upsert(hook: {(userId: string, doc: T, selector: Mongo.Selector, modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void}): void;
      };
      direct: {
        find(selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
          sort?: Mongo.SortSpecifier;
          skip?: number;
          limit?: number;
          fields?: Mongo.FieldSpecifier;
          reactive?: boolean;
          transform?: Function;
        }): Mongo.Cursor<T>;
        findOne(selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
          sort?: Mongo.SortSpecifier;
          skip?: number;
          fields?: Mongo.FieldSpecifier;
          reactive?: boolean;
          transform?: Function;
        }): T;
        insert(doc: T, callback?: Function): string;
        remove(selector: Mongo.Selector | Mongo.ObjectID | string, callback?: Function): number;
        update(selector: Mongo.Selector | Mongo.ObjectID | string, modifier: Mongo.Modifier, options?: {
          multi?: boolean;
          upsert?: boolean;
        }, callback?: Function): number;
        upsert(selector: Mongo.Selector | Mongo.ObjectID | string, modifier: Mongo.Modifier, options?: {
          multi?: boolean;
        }, callback?: Function): {numberAffected?: number; insertedId?: string;};
      };
      hookOptions: CollectionOptions;
    }
  }

  var CollectionHooks: CollectionHooksStatic;

  interface CollectionHooksStatic {
    defaults: CollectionOptions;
  }

  interface HookOptions {
    fetchPrevious?: boolean;
  }

  interface CollectionOptions {
    before: {
      all: HookOptions;
      find: HookOptions;
      findOne: HookOptions;
      insert: HookOptions;
      remove: HookOptions;
      update: HookOptions;
      upsert: HookOptions;
    };
    after: {
      all: HookOptions;
      find: HookOptions;
      findOne: HookOptions;
      insert: HookOptions;
      remove: HookOptions;
      update: HookOptions;
      upsert: HookOptions;
    };
    all: {
      all: HookOptions;
      find: HookOptions;
      findOne: HookOptions;
      insert: HookOptions;
      remove: HookOptions;
      update: HookOptions;
      upsert: HookOptions;
    };
  }
}

module Mongo {
  interface Collection<T> {
    before: {
      find(hook: {(userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }): void}): void;
      findOne(hook: {(userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }): void}): void;
      insert(hook: {(userId: string, doc: T): void}): void;
      remove(hook: {(userId: string, doc: T): void}): void;
      update(hook: {(userId: string, doc: T, fieldNames: string[], modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void}): void;
      upsert(hook: {(userId: string, doc: T, selector: Mongo.Selector, modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void}): void;
    };
    after: {
      find(hook: {(userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }, cursor: Mongo.Cursor<T>): void}): void;
      findOne(hook: {(userId: string, selector: Mongo.Selector, options: { multi?: boolean; upsert?: boolean; }, doc: T): void}): void;
      insert(hook: {(userId: string, doc: T): void}): void;
      remove(hook: {(userId: string, doc: T): void}): void;
      update(hook: {(userId: string, doc: T, fieldNames: string[], modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void}, options?: HookOptions): void;
      upsert(hook: {(userId: string, doc: T, selector: Mongo.Selector, modifier: Mongo.Modifier, options: { multi?: boolean; upsert?: boolean; }): void}): void;
    };
    direct: {
      find(selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
        sort?: Mongo.SortSpecifier;
        skip?: number;
        limit?: number;
        fields?: Mongo.FieldSpecifier;
        reactive?: boolean;
        transform?: Function;
      }): Mongo.Cursor<T>;
      findOne(selector?: Mongo.Selector | Mongo.ObjectID | string, options?: {
        sort?: Mongo.SortSpecifier;
        skip?: number;
        fields?: Mongo.FieldSpecifier;
        reactive?: boolean;
        transform?: Function;
      }): T;
      insert(doc: T, callback?: Function): string;
      remove(selector: Mongo.Selector | Mongo.ObjectID | string, callback?: Function): number;
      update(selector: Mongo.Selector | Mongo.ObjectID | string, modifier: Mongo.Modifier, options?: {
        multi?: boolean;
        upsert?: boolean;
      }, callback?: Function): number;
      upsert(selector: Mongo.Selector | Mongo.ObjectID | string, modifier: Mongo.Modifier, options?: {
        multi?: boolean;
      }, callback?: Function): {numberAffected?: number; insertedId?: string;};
    };
    hookOptions: CollectionOptions;
  }
}

declare var CollectionHooks: CollectionHooksStatic;

interface CollectionHooksStatic {
  defaults: CollectionOptions;
}

interface HookOptions {
  fetchPrevious?: boolean;
}

interface CollectionOptions {
  before: {
    all: HookOptions;
    find: HookOptions;
    findOne: HookOptions;
    insert: HookOptions;
    remove: HookOptions;
    update: HookOptions;
    upsert: HookOptions;
  };
  after: {
    all: HookOptions;
    find: HookOptions;
    findOne: HookOptions;
    insert: HookOptions;
    remove: HookOptions;
    update: HookOptions;
    upsert: HookOptions;
  };
  all: {
    all: HookOptions;
    find: HookOptions;
    findOne: HookOptions;
    insert: HookOptions;
    remove: HookOptions;
    update: HookOptions;
    upsert: HookOptions;
  };
}
