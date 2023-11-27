
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model cc_char
 * 
 */
export type cc_char = $Result.DefaultSelection<Prisma.$cc_charPayload>
/**
 * Model cc_char_chat
 * 
 */
export type cc_char_chat = $Result.DefaultSelection<Prisma.$cc_char_chatPayload>
/**
 * Model cc_char_chat_for_learn
 * 
 */
export type cc_char_chat_for_learn = $Result.DefaultSelection<Prisma.$cc_char_chat_for_learnPayload>
/**
 * Model cc_char_chat_log
 * 
 */
export type cc_char_chat_log = $Result.DefaultSelection<Prisma.$cc_char_chat_logPayload>
/**
 * Model cc_char_chat_premium
 * 
 */
export type cc_char_chat_premium = $Result.DefaultSelection<Prisma.$cc_char_chat_premiumPayload>
/**
 * Model cc_user
 * 
 */
export type cc_user = $Result.DefaultSelection<Prisma.$cc_userPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cc_chars
 * const cc_chars = await prisma.cc_char.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cc_chars
   * const cc_chars = await prisma.cc_char.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.cc_char`: Exposes CRUD operations for the **cc_char** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_chars
    * const cc_chars = await prisma.cc_char.findMany()
    * ```
    */
  get cc_char(): Prisma.cc_charDelegate<ExtArgs>;

  /**
   * `prisma.cc_char_chat`: Exposes CRUD operations for the **cc_char_chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_char_chats
    * const cc_char_chats = await prisma.cc_char_chat.findMany()
    * ```
    */
  get cc_char_chat(): Prisma.cc_char_chatDelegate<ExtArgs>;

  /**
   * `prisma.cc_char_chat_for_learn`: Exposes CRUD operations for the **cc_char_chat_for_learn** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_char_chat_for_learns
    * const cc_char_chat_for_learns = await prisma.cc_char_chat_for_learn.findMany()
    * ```
    */
  get cc_char_chat_for_learn(): Prisma.cc_char_chat_for_learnDelegate<ExtArgs>;

  /**
   * `prisma.cc_char_chat_log`: Exposes CRUD operations for the **cc_char_chat_log** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_char_chat_logs
    * const cc_char_chat_logs = await prisma.cc_char_chat_log.findMany()
    * ```
    */
  get cc_char_chat_log(): Prisma.cc_char_chat_logDelegate<ExtArgs>;

  /**
   * `prisma.cc_char_chat_premium`: Exposes CRUD operations for the **cc_char_chat_premium** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_char_chat_premiums
    * const cc_char_chat_premiums = await prisma.cc_char_chat_premium.findMany()
    * ```
    */
  get cc_char_chat_premium(): Prisma.cc_char_chat_premiumDelegate<ExtArgs>;

  /**
   * `prisma.cc_user`: Exposes CRUD operations for the **cc_user** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cc_users
    * const cc_users = await prisma.cc_user.findMany()
    * ```
    */
  get cc_user(): Prisma.cc_userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.6.0
   * Query Engine version: e95e739751f42d8ca026f6b910f5a2dc5adeaeee
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    cc_char: 'cc_char',
    cc_char_chat: 'cc_char_chat',
    cc_char_chat_for_learn: 'cc_char_chat_for_learn',
    cc_char_chat_log: 'cc_char_chat_log',
    cc_char_chat_premium: 'cc_char_chat_premium',
    cc_user: 'cc_user'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'cc_char' | 'cc_char_chat' | 'cc_char_chat_for_learn' | 'cc_char_chat_log' | 'cc_char_chat_premium' | 'cc_user'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      cc_char: {
        payload: Prisma.$cc_charPayload<ExtArgs>
        fields: Prisma.cc_charFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_charFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_charPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_charFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_charPayload>
          }
          findFirst: {
            args: Prisma.cc_charFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_charPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_charFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_charPayload>
          }
          findMany: {
            args: Prisma.cc_charFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_charPayload>[]
          }
          create: {
            args: Prisma.cc_charCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_charPayload>
          }
          createMany: {
            args: Prisma.cc_charCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cc_charDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_charPayload>
          }
          update: {
            args: Prisma.cc_charUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_charPayload>
          }
          deleteMany: {
            args: Prisma.cc_charDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cc_charUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cc_charUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_charPayload>
          }
          aggregate: {
            args: Prisma.Cc_charAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCc_char>
          }
          groupBy: {
            args: Prisma.cc_charGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Cc_charGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_charCountArgs<ExtArgs>,
            result: $Utils.Optional<Cc_charCountAggregateOutputType> | number
          }
        }
      }
      cc_char_chat: {
        payload: Prisma.$cc_char_chatPayload<ExtArgs>
        fields: Prisma.cc_char_chatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_char_chatFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_char_chatFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chatPayload>
          }
          findFirst: {
            args: Prisma.cc_char_chatFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_char_chatFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chatPayload>
          }
          findMany: {
            args: Prisma.cc_char_chatFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chatPayload>[]
          }
          create: {
            args: Prisma.cc_char_chatCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chatPayload>
          }
          createMany: {
            args: Prisma.cc_char_chatCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cc_char_chatDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chatPayload>
          }
          update: {
            args: Prisma.cc_char_chatUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chatPayload>
          }
          deleteMany: {
            args: Prisma.cc_char_chatDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cc_char_chatUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cc_char_chatUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chatPayload>
          }
          aggregate: {
            args: Prisma.Cc_char_chatAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCc_char_chat>
          }
          groupBy: {
            args: Prisma.cc_char_chatGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Cc_char_chatGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_char_chatCountArgs<ExtArgs>,
            result: $Utils.Optional<Cc_char_chatCountAggregateOutputType> | number
          }
        }
      }
      cc_char_chat_for_learn: {
        payload: Prisma.$cc_char_chat_for_learnPayload<ExtArgs>
        fields: Prisma.cc_char_chat_for_learnFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_char_chat_for_learnFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_for_learnPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_char_chat_for_learnFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_for_learnPayload>
          }
          findFirst: {
            args: Prisma.cc_char_chat_for_learnFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_for_learnPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_char_chat_for_learnFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_for_learnPayload>
          }
          findMany: {
            args: Prisma.cc_char_chat_for_learnFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_for_learnPayload>[]
          }
          create: {
            args: Prisma.cc_char_chat_for_learnCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_for_learnPayload>
          }
          createMany: {
            args: Prisma.cc_char_chat_for_learnCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cc_char_chat_for_learnDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_for_learnPayload>
          }
          update: {
            args: Prisma.cc_char_chat_for_learnUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_for_learnPayload>
          }
          deleteMany: {
            args: Prisma.cc_char_chat_for_learnDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cc_char_chat_for_learnUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cc_char_chat_for_learnUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_for_learnPayload>
          }
          aggregate: {
            args: Prisma.Cc_char_chat_for_learnAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCc_char_chat_for_learn>
          }
          groupBy: {
            args: Prisma.cc_char_chat_for_learnGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Cc_char_chat_for_learnGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_char_chat_for_learnCountArgs<ExtArgs>,
            result: $Utils.Optional<Cc_char_chat_for_learnCountAggregateOutputType> | number
          }
        }
      }
      cc_char_chat_log: {
        payload: Prisma.$cc_char_chat_logPayload<ExtArgs>
        fields: Prisma.cc_char_chat_logFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_char_chat_logFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_logPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_char_chat_logFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_logPayload>
          }
          findFirst: {
            args: Prisma.cc_char_chat_logFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_logPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_char_chat_logFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_logPayload>
          }
          findMany: {
            args: Prisma.cc_char_chat_logFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_logPayload>[]
          }
          create: {
            args: Prisma.cc_char_chat_logCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_logPayload>
          }
          createMany: {
            args: Prisma.cc_char_chat_logCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cc_char_chat_logDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_logPayload>
          }
          update: {
            args: Prisma.cc_char_chat_logUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_logPayload>
          }
          deleteMany: {
            args: Prisma.cc_char_chat_logDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cc_char_chat_logUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cc_char_chat_logUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_logPayload>
          }
          aggregate: {
            args: Prisma.Cc_char_chat_logAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCc_char_chat_log>
          }
          groupBy: {
            args: Prisma.cc_char_chat_logGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Cc_char_chat_logGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_char_chat_logCountArgs<ExtArgs>,
            result: $Utils.Optional<Cc_char_chat_logCountAggregateOutputType> | number
          }
        }
      }
      cc_char_chat_premium: {
        payload: Prisma.$cc_char_chat_premiumPayload<ExtArgs>
        fields: Prisma.cc_char_chat_premiumFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_char_chat_premiumFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_premiumPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_char_chat_premiumFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_premiumPayload>
          }
          findFirst: {
            args: Prisma.cc_char_chat_premiumFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_premiumPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_char_chat_premiumFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_premiumPayload>
          }
          findMany: {
            args: Prisma.cc_char_chat_premiumFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_premiumPayload>[]
          }
          create: {
            args: Prisma.cc_char_chat_premiumCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_premiumPayload>
          }
          createMany: {
            args: Prisma.cc_char_chat_premiumCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cc_char_chat_premiumDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_premiumPayload>
          }
          update: {
            args: Prisma.cc_char_chat_premiumUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_premiumPayload>
          }
          deleteMany: {
            args: Prisma.cc_char_chat_premiumDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cc_char_chat_premiumUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cc_char_chat_premiumUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_char_chat_premiumPayload>
          }
          aggregate: {
            args: Prisma.Cc_char_chat_premiumAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCc_char_chat_premium>
          }
          groupBy: {
            args: Prisma.cc_char_chat_premiumGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Cc_char_chat_premiumGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_char_chat_premiumCountArgs<ExtArgs>,
            result: $Utils.Optional<Cc_char_chat_premiumCountAggregateOutputType> | number
          }
        }
      }
      cc_user: {
        payload: Prisma.$cc_userPayload<ExtArgs>
        fields: Prisma.cc_userFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cc_userFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cc_userFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          findFirst: {
            args: Prisma.cc_userFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cc_userFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          findMany: {
            args: Prisma.cc_userFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>[]
          }
          create: {
            args: Prisma.cc_userCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          createMany: {
            args: Prisma.cc_userCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.cc_userDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          update: {
            args: Prisma.cc_userUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          deleteMany: {
            args: Prisma.cc_userDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.cc_userUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.cc_userUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$cc_userPayload>
          }
          aggregate: {
            args: Prisma.Cc_userAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCc_user>
          }
          groupBy: {
            args: Prisma.cc_userGroupByArgs<ExtArgs>,
            result: $Utils.Optional<Cc_userGroupByOutputType>[]
          }
          count: {
            args: Prisma.cc_userCountArgs<ExtArgs>,
            result: $Utils.Optional<Cc_userCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model cc_char
   */

  export type AggregateCc_char = {
    _count: Cc_charCountAggregateOutputType | null
    _avg: Cc_charAvgAggregateOutputType | null
    _sum: Cc_charSumAggregateOutputType | null
    _min: Cc_charMinAggregateOutputType | null
    _max: Cc_charMaxAggregateOutputType | null
  }

  export type Cc_charAvgAggregateOutputType = {
    CHAR_NO: number | null
    TEMPERATURE: number | null
    F_PENALTY: number | null
    P_PENALTY: number | null
  }

  export type Cc_charSumAggregateOutputType = {
    CHAR_NO: number | null
    TEMPERATURE: number | null
    F_PENALTY: number | null
    P_PENALTY: number | null
  }

  export type Cc_charMinAggregateOutputType = {
    CHAR_NO: number | null
    CHAR_NAME: string | null
    CHAR_TYPE: string | null
    CHAR_INFO: string | null
    UPD_ID: string | null
    UPD_DT: Date | null
    REG_ID: string | null
    REG_DT: Date | null
    STD_CODE_NAME: string | null
    STD_FULL_NAME: string | null
    STD_INC_ID: string | null
    STD_ID: string | null
    STD_TOKEN: string | null
    STD_ROLE: string | null
    STD_ERROR_MSG: string | null
    STD_STATUS: string | null
    THUMBNAIL: string | null
    TEMPERATURE: number | null
    F_PENALTY: number | null
    P_PENALTY: number | null
    STD_SHORT_NAME: string | null
  }

  export type Cc_charMaxAggregateOutputType = {
    CHAR_NO: number | null
    CHAR_NAME: string | null
    CHAR_TYPE: string | null
    CHAR_INFO: string | null
    UPD_ID: string | null
    UPD_DT: Date | null
    REG_ID: string | null
    REG_DT: Date | null
    STD_CODE_NAME: string | null
    STD_FULL_NAME: string | null
    STD_INC_ID: string | null
    STD_ID: string | null
    STD_TOKEN: string | null
    STD_ROLE: string | null
    STD_ERROR_MSG: string | null
    STD_STATUS: string | null
    THUMBNAIL: string | null
    TEMPERATURE: number | null
    F_PENALTY: number | null
    P_PENALTY: number | null
    STD_SHORT_NAME: string | null
  }

  export type Cc_charCountAggregateOutputType = {
    CHAR_NO: number
    CHAR_NAME: number
    CHAR_TYPE: number
    CHAR_INFO: number
    UPD_ID: number
    UPD_DT: number
    REG_ID: number
    REG_DT: number
    STD_CODE_NAME: number
    STD_FULL_NAME: number
    STD_INC_ID: number
    STD_ID: number
    STD_TOKEN: number
    STD_ROLE: number
    STD_ERROR_MSG: number
    STD_STATUS: number
    THUMBNAIL: number
    TEMPERATURE: number
    F_PENALTY: number
    P_PENALTY: number
    STD_SHORT_NAME: number
    _all: number
  }


  export type Cc_charAvgAggregateInputType = {
    CHAR_NO?: true
    TEMPERATURE?: true
    F_PENALTY?: true
    P_PENALTY?: true
  }

  export type Cc_charSumAggregateInputType = {
    CHAR_NO?: true
    TEMPERATURE?: true
    F_PENALTY?: true
    P_PENALTY?: true
  }

  export type Cc_charMinAggregateInputType = {
    CHAR_NO?: true
    CHAR_NAME?: true
    CHAR_TYPE?: true
    CHAR_INFO?: true
    UPD_ID?: true
    UPD_DT?: true
    REG_ID?: true
    REG_DT?: true
    STD_CODE_NAME?: true
    STD_FULL_NAME?: true
    STD_INC_ID?: true
    STD_ID?: true
    STD_TOKEN?: true
    STD_ROLE?: true
    STD_ERROR_MSG?: true
    STD_STATUS?: true
    THUMBNAIL?: true
    TEMPERATURE?: true
    F_PENALTY?: true
    P_PENALTY?: true
    STD_SHORT_NAME?: true
  }

  export type Cc_charMaxAggregateInputType = {
    CHAR_NO?: true
    CHAR_NAME?: true
    CHAR_TYPE?: true
    CHAR_INFO?: true
    UPD_ID?: true
    UPD_DT?: true
    REG_ID?: true
    REG_DT?: true
    STD_CODE_NAME?: true
    STD_FULL_NAME?: true
    STD_INC_ID?: true
    STD_ID?: true
    STD_TOKEN?: true
    STD_ROLE?: true
    STD_ERROR_MSG?: true
    STD_STATUS?: true
    THUMBNAIL?: true
    TEMPERATURE?: true
    F_PENALTY?: true
    P_PENALTY?: true
    STD_SHORT_NAME?: true
  }

  export type Cc_charCountAggregateInputType = {
    CHAR_NO?: true
    CHAR_NAME?: true
    CHAR_TYPE?: true
    CHAR_INFO?: true
    UPD_ID?: true
    UPD_DT?: true
    REG_ID?: true
    REG_DT?: true
    STD_CODE_NAME?: true
    STD_FULL_NAME?: true
    STD_INC_ID?: true
    STD_ID?: true
    STD_TOKEN?: true
    STD_ROLE?: true
    STD_ERROR_MSG?: true
    STD_STATUS?: true
    THUMBNAIL?: true
    TEMPERATURE?: true
    F_PENALTY?: true
    P_PENALTY?: true
    STD_SHORT_NAME?: true
    _all?: true
  }

  export type Cc_charAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_char to aggregate.
     */
    where?: cc_charWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_chars to fetch.
     */
    orderBy?: cc_charOrderByWithRelationInput | cc_charOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_charWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_chars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_chars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_chars
    **/
    _count?: true | Cc_charCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_charAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_charSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_charMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_charMaxAggregateInputType
  }

  export type GetCc_charAggregateType<T extends Cc_charAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_char]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_char[P]>
      : GetScalarType<T[P], AggregateCc_char[P]>
  }




  export type cc_charGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_charWhereInput
    orderBy?: cc_charOrderByWithAggregationInput | cc_charOrderByWithAggregationInput[]
    by: Cc_charScalarFieldEnum[] | Cc_charScalarFieldEnum
    having?: cc_charScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_charCountAggregateInputType | true
    _avg?: Cc_charAvgAggregateInputType
    _sum?: Cc_charSumAggregateInputType
    _min?: Cc_charMinAggregateInputType
    _max?: Cc_charMaxAggregateInputType
  }

  export type Cc_charGroupByOutputType = {
    CHAR_NO: number
    CHAR_NAME: string | null
    CHAR_TYPE: string | null
    CHAR_INFO: string | null
    UPD_ID: string | null
    UPD_DT: Date | null
    REG_ID: string | null
    REG_DT: Date | null
    STD_CODE_NAME: string | null
    STD_FULL_NAME: string | null
    STD_INC_ID: string | null
    STD_ID: string | null
    STD_TOKEN: string | null
    STD_ROLE: string | null
    STD_ERROR_MSG: string | null
    STD_STATUS: string | null
    THUMBNAIL: string | null
    TEMPERATURE: number | null
    F_PENALTY: number | null
    P_PENALTY: number | null
    STD_SHORT_NAME: string | null
    _count: Cc_charCountAggregateOutputType | null
    _avg: Cc_charAvgAggregateOutputType | null
    _sum: Cc_charSumAggregateOutputType | null
    _min: Cc_charMinAggregateOutputType | null
    _max: Cc_charMaxAggregateOutputType | null
  }

  type GetCc_charGroupByPayload<T extends cc_charGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_charGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_charGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_charGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_charGroupByOutputType[P]>
        }
      >
    >


  export type cc_charSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CHAR_NO?: boolean
    CHAR_NAME?: boolean
    CHAR_TYPE?: boolean
    CHAR_INFO?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    REG_ID?: boolean
    REG_DT?: boolean
    STD_CODE_NAME?: boolean
    STD_FULL_NAME?: boolean
    STD_INC_ID?: boolean
    STD_ID?: boolean
    STD_TOKEN?: boolean
    STD_ROLE?: boolean
    STD_ERROR_MSG?: boolean
    STD_STATUS?: boolean
    THUMBNAIL?: boolean
    TEMPERATURE?: boolean
    F_PENALTY?: boolean
    P_PENALTY?: boolean
    STD_SHORT_NAME?: boolean
  }, ExtArgs["result"]["cc_char"]>

  export type cc_charSelectScalar = {
    CHAR_NO?: boolean
    CHAR_NAME?: boolean
    CHAR_TYPE?: boolean
    CHAR_INFO?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    REG_ID?: boolean
    REG_DT?: boolean
    STD_CODE_NAME?: boolean
    STD_FULL_NAME?: boolean
    STD_INC_ID?: boolean
    STD_ID?: boolean
    STD_TOKEN?: boolean
    STD_ROLE?: boolean
    STD_ERROR_MSG?: boolean
    STD_STATUS?: boolean
    THUMBNAIL?: boolean
    TEMPERATURE?: boolean
    F_PENALTY?: boolean
    P_PENALTY?: boolean
    STD_SHORT_NAME?: boolean
  }


  export type $cc_charPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_char"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      CHAR_NO: number
      CHAR_NAME: string | null
      CHAR_TYPE: string | null
      CHAR_INFO: string | null
      UPD_ID: string | null
      UPD_DT: Date | null
      REG_ID: string | null
      REG_DT: Date | null
      STD_CODE_NAME: string | null
      STD_FULL_NAME: string | null
      STD_INC_ID: string | null
      STD_ID: string | null
      STD_TOKEN: string | null
      STD_ROLE: string | null
      STD_ERROR_MSG: string | null
      STD_STATUS: string | null
      THUMBNAIL: string | null
      TEMPERATURE: number | null
      F_PENALTY: number | null
      P_PENALTY: number | null
      STD_SHORT_NAME: string | null
    }, ExtArgs["result"]["cc_char"]>
    composites: {}
  }


  type cc_charGetPayload<S extends boolean | null | undefined | cc_charDefaultArgs> = $Result.GetResult<Prisma.$cc_charPayload, S>

  type cc_charCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cc_charFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Cc_charCountAggregateInputType | true
    }

  export interface cc_charDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_char'], meta: { name: 'cc_char' } }
    /**
     * Find zero or one Cc_char that matches the filter.
     * @param {cc_charFindUniqueArgs} args - Arguments to find a Cc_char
     * @example
     * // Get one Cc_char
     * const cc_char = await prisma.cc_char.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cc_charFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cc_charFindUniqueArgs<ExtArgs>>
    ): Prisma__cc_charClient<$Result.GetResult<Prisma.$cc_charPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cc_char that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cc_charFindUniqueOrThrowArgs} args - Arguments to find a Cc_char
     * @example
     * // Get one Cc_char
     * const cc_char = await prisma.cc_char.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cc_charFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_charFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cc_charClient<$Result.GetResult<Prisma.$cc_charPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cc_char that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_charFindFirstArgs} args - Arguments to find a Cc_char
     * @example
     * // Get one Cc_char
     * const cc_char = await prisma.cc_char.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cc_charFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_charFindFirstArgs<ExtArgs>>
    ): Prisma__cc_charClient<$Result.GetResult<Prisma.$cc_charPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cc_char that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_charFindFirstOrThrowArgs} args - Arguments to find a Cc_char
     * @example
     * // Get one Cc_char
     * const cc_char = await prisma.cc_char.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cc_charFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_charFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cc_charClient<$Result.GetResult<Prisma.$cc_charPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cc_chars that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_charFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_chars
     * const cc_chars = await prisma.cc_char.findMany()
     * 
     * // Get first 10 Cc_chars
     * const cc_chars = await prisma.cc_char.findMany({ take: 10 })
     * 
     * // Only select the `CHAR_NO`
     * const cc_charWithCHAR_NOOnly = await prisma.cc_char.findMany({ select: { CHAR_NO: true } })
     * 
    **/
    findMany<T extends cc_charFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_charFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_charPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cc_char.
     * @param {cc_charCreateArgs} args - Arguments to create a Cc_char.
     * @example
     * // Create one Cc_char
     * const Cc_char = await prisma.cc_char.create({
     *   data: {
     *     // ... data to create a Cc_char
     *   }
     * })
     * 
    **/
    create<T extends cc_charCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_charCreateArgs<ExtArgs>>
    ): Prisma__cc_charClient<$Result.GetResult<Prisma.$cc_charPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cc_chars.
     *     @param {cc_charCreateManyArgs} args - Arguments to create many Cc_chars.
     *     @example
     *     // Create many Cc_chars
     *     const cc_char = await prisma.cc_char.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cc_charCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_charCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cc_char.
     * @param {cc_charDeleteArgs} args - Arguments to delete one Cc_char.
     * @example
     * // Delete one Cc_char
     * const Cc_char = await prisma.cc_char.delete({
     *   where: {
     *     // ... filter to delete one Cc_char
     *   }
     * })
     * 
    **/
    delete<T extends cc_charDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cc_charDeleteArgs<ExtArgs>>
    ): Prisma__cc_charClient<$Result.GetResult<Prisma.$cc_charPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cc_char.
     * @param {cc_charUpdateArgs} args - Arguments to update one Cc_char.
     * @example
     * // Update one Cc_char
     * const cc_char = await prisma.cc_char.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cc_charUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_charUpdateArgs<ExtArgs>>
    ): Prisma__cc_charClient<$Result.GetResult<Prisma.$cc_charPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cc_chars.
     * @param {cc_charDeleteManyArgs} args - Arguments to filter Cc_chars to delete.
     * @example
     * // Delete a few Cc_chars
     * const { count } = await prisma.cc_char.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cc_charDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_charDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_chars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_charUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_chars
     * const cc_char = await prisma.cc_char.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cc_charUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cc_charUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cc_char.
     * @param {cc_charUpsertArgs} args - Arguments to update or create a Cc_char.
     * @example
     * // Update or create a Cc_char
     * const cc_char = await prisma.cc_char.upsert({
     *   create: {
     *     // ... data to create a Cc_char
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_char we want to update
     *   }
     * })
    **/
    upsert<T extends cc_charUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cc_charUpsertArgs<ExtArgs>>
    ): Prisma__cc_charClient<$Result.GetResult<Prisma.$cc_charPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cc_chars.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_charCountArgs} args - Arguments to filter Cc_chars to count.
     * @example
     * // Count the number of Cc_chars
     * const count = await prisma.cc_char.count({
     *   where: {
     *     // ... the filter for the Cc_chars we want to count
     *   }
     * })
    **/
    count<T extends cc_charCountArgs>(
      args?: Subset<T, cc_charCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_charCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_char.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_charAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cc_charAggregateArgs>(args: Subset<T, Cc_charAggregateArgs>): Prisma.PrismaPromise<GetCc_charAggregateType<T>>

    /**
     * Group by Cc_char.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_charGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cc_charGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_charGroupByArgs['orderBy'] }
        : { orderBy?: cc_charGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cc_charGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_charGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_char model
   */
  readonly fields: cc_charFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_char.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_charClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cc_char model
   */ 
  interface cc_charFieldRefs {
    readonly CHAR_NO: FieldRef<"cc_char", 'Int'>
    readonly CHAR_NAME: FieldRef<"cc_char", 'String'>
    readonly CHAR_TYPE: FieldRef<"cc_char", 'String'>
    readonly CHAR_INFO: FieldRef<"cc_char", 'String'>
    readonly UPD_ID: FieldRef<"cc_char", 'String'>
    readonly UPD_DT: FieldRef<"cc_char", 'DateTime'>
    readonly REG_ID: FieldRef<"cc_char", 'String'>
    readonly REG_DT: FieldRef<"cc_char", 'DateTime'>
    readonly STD_CODE_NAME: FieldRef<"cc_char", 'String'>
    readonly STD_FULL_NAME: FieldRef<"cc_char", 'String'>
    readonly STD_INC_ID: FieldRef<"cc_char", 'String'>
    readonly STD_ID: FieldRef<"cc_char", 'String'>
    readonly STD_TOKEN: FieldRef<"cc_char", 'String'>
    readonly STD_ROLE: FieldRef<"cc_char", 'String'>
    readonly STD_ERROR_MSG: FieldRef<"cc_char", 'String'>
    readonly STD_STATUS: FieldRef<"cc_char", 'String'>
    readonly THUMBNAIL: FieldRef<"cc_char", 'String'>
    readonly TEMPERATURE: FieldRef<"cc_char", 'Float'>
    readonly F_PENALTY: FieldRef<"cc_char", 'Float'>
    readonly P_PENALTY: FieldRef<"cc_char", 'Float'>
    readonly STD_SHORT_NAME: FieldRef<"cc_char", 'String'>
  }
    

  // Custom InputTypes

  /**
   * cc_char findUnique
   */
  export type cc_charFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char
     */
    select?: cc_charSelect<ExtArgs> | null
    /**
     * Filter, which cc_char to fetch.
     */
    where: cc_charWhereUniqueInput
  }


  /**
   * cc_char findUniqueOrThrow
   */
  export type cc_charFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char
     */
    select?: cc_charSelect<ExtArgs> | null
    /**
     * Filter, which cc_char to fetch.
     */
    where: cc_charWhereUniqueInput
  }


  /**
   * cc_char findFirst
   */
  export type cc_charFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char
     */
    select?: cc_charSelect<ExtArgs> | null
    /**
     * Filter, which cc_char to fetch.
     */
    where?: cc_charWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_chars to fetch.
     */
    orderBy?: cc_charOrderByWithRelationInput | cc_charOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_chars.
     */
    cursor?: cc_charWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_chars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_chars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_chars.
     */
    distinct?: Cc_charScalarFieldEnum | Cc_charScalarFieldEnum[]
  }


  /**
   * cc_char findFirstOrThrow
   */
  export type cc_charFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char
     */
    select?: cc_charSelect<ExtArgs> | null
    /**
     * Filter, which cc_char to fetch.
     */
    where?: cc_charWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_chars to fetch.
     */
    orderBy?: cc_charOrderByWithRelationInput | cc_charOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_chars.
     */
    cursor?: cc_charWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_chars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_chars.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_chars.
     */
    distinct?: Cc_charScalarFieldEnum | Cc_charScalarFieldEnum[]
  }


  /**
   * cc_char findMany
   */
  export type cc_charFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char
     */
    select?: cc_charSelect<ExtArgs> | null
    /**
     * Filter, which cc_chars to fetch.
     */
    where?: cc_charWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_chars to fetch.
     */
    orderBy?: cc_charOrderByWithRelationInput | cc_charOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_chars.
     */
    cursor?: cc_charWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_chars from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_chars.
     */
    skip?: number
    distinct?: Cc_charScalarFieldEnum | Cc_charScalarFieldEnum[]
  }


  /**
   * cc_char create
   */
  export type cc_charCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char
     */
    select?: cc_charSelect<ExtArgs> | null
    /**
     * The data needed to create a cc_char.
     */
    data?: XOR<cc_charCreateInput, cc_charUncheckedCreateInput>
  }


  /**
   * cc_char createMany
   */
  export type cc_charCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_chars.
     */
    data: cc_charCreateManyInput | cc_charCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cc_char update
   */
  export type cc_charUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char
     */
    select?: cc_charSelect<ExtArgs> | null
    /**
     * The data needed to update a cc_char.
     */
    data: XOR<cc_charUpdateInput, cc_charUncheckedUpdateInput>
    /**
     * Choose, which cc_char to update.
     */
    where: cc_charWhereUniqueInput
  }


  /**
   * cc_char updateMany
   */
  export type cc_charUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_chars.
     */
    data: XOR<cc_charUpdateManyMutationInput, cc_charUncheckedUpdateManyInput>
    /**
     * Filter which cc_chars to update
     */
    where?: cc_charWhereInput
  }


  /**
   * cc_char upsert
   */
  export type cc_charUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char
     */
    select?: cc_charSelect<ExtArgs> | null
    /**
     * The filter to search for the cc_char to update in case it exists.
     */
    where: cc_charWhereUniqueInput
    /**
     * In case the cc_char found by the `where` argument doesn't exist, create a new cc_char with this data.
     */
    create: XOR<cc_charCreateInput, cc_charUncheckedCreateInput>
    /**
     * In case the cc_char was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_charUpdateInput, cc_charUncheckedUpdateInput>
  }


  /**
   * cc_char delete
   */
  export type cc_charDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char
     */
    select?: cc_charSelect<ExtArgs> | null
    /**
     * Filter which cc_char to delete.
     */
    where: cc_charWhereUniqueInput
  }


  /**
   * cc_char deleteMany
   */
  export type cc_charDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_chars to delete
     */
    where?: cc_charWhereInput
  }


  /**
   * cc_char without action
   */
  export type cc_charDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char
     */
    select?: cc_charSelect<ExtArgs> | null
  }



  /**
   * Model cc_char_chat
   */

  export type AggregateCc_char_chat = {
    _count: Cc_char_chatCountAggregateOutputType | null
    _avg: Cc_char_chatAvgAggregateOutputType | null
    _sum: Cc_char_chatSumAggregateOutputType | null
    _min: Cc_char_chatMinAggregateOutputType | null
    _max: Cc_char_chatMaxAggregateOutputType | null
  }

  export type Cc_char_chatAvgAggregateOutputType = {
    CHAT_NO: number | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
  }

  export type Cc_char_chatSumAggregateOutputType = {
    CHAT_NO: number | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
  }

  export type Cc_char_chatMinAggregateOutputType = {
    CHAT_NO: number | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
    IS_LEARN: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAT_CONT: string | null
    REG_ID: string | null
  }

  export type Cc_char_chatMaxAggregateOutputType = {
    CHAT_NO: number | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
    IS_LEARN: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAT_CONT: string | null
    REG_ID: string | null
  }

  export type Cc_char_chatCountAggregateOutputType = {
    CHAT_NO: number
    CHAR_NO: number
    CHAT_ROOM_NO: number
    IS_LEARN: number
    REG_DT: number
    UPD_ID: number
    UPD_DT: number
    CHAT_CONT: number
    REG_ID: number
    _all: number
  }


  export type Cc_char_chatAvgAggregateInputType = {
    CHAT_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
  }

  export type Cc_char_chatSumAggregateInputType = {
    CHAT_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
  }

  export type Cc_char_chatMinAggregateInputType = {
    CHAT_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
    IS_LEARN?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAT_CONT?: true
    REG_ID?: true
  }

  export type Cc_char_chatMaxAggregateInputType = {
    CHAT_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
    IS_LEARN?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAT_CONT?: true
    REG_ID?: true
  }

  export type Cc_char_chatCountAggregateInputType = {
    CHAT_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
    IS_LEARN?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAT_CONT?: true
    REG_ID?: true
    _all?: true
  }

  export type Cc_char_chatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_char_chat to aggregate.
     */
    where?: cc_char_chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chats to fetch.
     */
    orderBy?: cc_char_chatOrderByWithRelationInput | cc_char_chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_char_chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_char_chats
    **/
    _count?: true | Cc_char_chatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_char_chatAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_char_chatSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_char_chatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_char_chatMaxAggregateInputType
  }

  export type GetCc_char_chatAggregateType<T extends Cc_char_chatAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_char_chat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_char_chat[P]>
      : GetScalarType<T[P], AggregateCc_char_chat[P]>
  }




  export type cc_char_chatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_char_chatWhereInput
    orderBy?: cc_char_chatOrderByWithAggregationInput | cc_char_chatOrderByWithAggregationInput[]
    by: Cc_char_chatScalarFieldEnum[] | Cc_char_chatScalarFieldEnum
    having?: cc_char_chatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_char_chatCountAggregateInputType | true
    _avg?: Cc_char_chatAvgAggregateInputType
    _sum?: Cc_char_chatSumAggregateInputType
    _min?: Cc_char_chatMinAggregateInputType
    _max?: Cc_char_chatMaxAggregateInputType
  }

  export type Cc_char_chatGroupByOutputType = {
    CHAT_NO: number
    CHAR_NO: number
    CHAT_ROOM_NO: number
    IS_LEARN: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAT_CONT: string | null
    REG_ID: string | null
    _count: Cc_char_chatCountAggregateOutputType | null
    _avg: Cc_char_chatAvgAggregateOutputType | null
    _sum: Cc_char_chatSumAggregateOutputType | null
    _min: Cc_char_chatMinAggregateOutputType | null
    _max: Cc_char_chatMaxAggregateOutputType | null
  }

  type GetCc_char_chatGroupByPayload<T extends cc_char_chatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_char_chatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_char_chatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_char_chatGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_char_chatGroupByOutputType[P]>
        }
      >
    >


  export type cc_char_chatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CHAT_NO?: boolean
    CHAR_NO?: boolean
    CHAT_ROOM_NO?: boolean
    IS_LEARN?: boolean
    REG_DT?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    CHAT_CONT?: boolean
    REG_ID?: boolean
  }, ExtArgs["result"]["cc_char_chat"]>

  export type cc_char_chatSelectScalar = {
    CHAT_NO?: boolean
    CHAR_NO?: boolean
    CHAT_ROOM_NO?: boolean
    IS_LEARN?: boolean
    REG_DT?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    CHAT_CONT?: boolean
    REG_ID?: boolean
  }


  export type $cc_char_chatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_char_chat"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      CHAT_NO: number
      CHAR_NO: number
      CHAT_ROOM_NO: number
      IS_LEARN: string | null
      REG_DT: Date | null
      UPD_ID: string | null
      UPD_DT: Date | null
      CHAT_CONT: string | null
      REG_ID: string | null
    }, ExtArgs["result"]["cc_char_chat"]>
    composites: {}
  }


  type cc_char_chatGetPayload<S extends boolean | null | undefined | cc_char_chatDefaultArgs> = $Result.GetResult<Prisma.$cc_char_chatPayload, S>

  type cc_char_chatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cc_char_chatFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Cc_char_chatCountAggregateInputType | true
    }

  export interface cc_char_chatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_char_chat'], meta: { name: 'cc_char_chat' } }
    /**
     * Find zero or one Cc_char_chat that matches the filter.
     * @param {cc_char_chatFindUniqueArgs} args - Arguments to find a Cc_char_chat
     * @example
     * // Get one Cc_char_chat
     * const cc_char_chat = await prisma.cc_char_chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cc_char_chatFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chatFindUniqueArgs<ExtArgs>>
    ): Prisma__cc_char_chatClient<$Result.GetResult<Prisma.$cc_char_chatPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cc_char_chat that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cc_char_chatFindUniqueOrThrowArgs} args - Arguments to find a Cc_char_chat
     * @example
     * // Get one Cc_char_chat
     * const cc_char_chat = await prisma.cc_char_chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cc_char_chatFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chatFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cc_char_chatClient<$Result.GetResult<Prisma.$cc_char_chatPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cc_char_chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chatFindFirstArgs} args - Arguments to find a Cc_char_chat
     * @example
     * // Get one Cc_char_chat
     * const cc_char_chat = await prisma.cc_char_chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cc_char_chatFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chatFindFirstArgs<ExtArgs>>
    ): Prisma__cc_char_chatClient<$Result.GetResult<Prisma.$cc_char_chatPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cc_char_chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chatFindFirstOrThrowArgs} args - Arguments to find a Cc_char_chat
     * @example
     * // Get one Cc_char_chat
     * const cc_char_chat = await prisma.cc_char_chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cc_char_chatFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chatFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cc_char_chatClient<$Result.GetResult<Prisma.$cc_char_chatPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cc_char_chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chatFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_char_chats
     * const cc_char_chats = await prisma.cc_char_chat.findMany()
     * 
     * // Get first 10 Cc_char_chats
     * const cc_char_chats = await prisma.cc_char_chat.findMany({ take: 10 })
     * 
     * // Only select the `CHAT_NO`
     * const cc_char_chatWithCHAT_NOOnly = await prisma.cc_char_chat.findMany({ select: { CHAT_NO: true } })
     * 
    **/
    findMany<T extends cc_char_chatFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chatFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_char_chatPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cc_char_chat.
     * @param {cc_char_chatCreateArgs} args - Arguments to create a Cc_char_chat.
     * @example
     * // Create one Cc_char_chat
     * const Cc_char_chat = await prisma.cc_char_chat.create({
     *   data: {
     *     // ... data to create a Cc_char_chat
     *   }
     * })
     * 
    **/
    create<T extends cc_char_chatCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chatCreateArgs<ExtArgs>>
    ): Prisma__cc_char_chatClient<$Result.GetResult<Prisma.$cc_char_chatPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cc_char_chats.
     *     @param {cc_char_chatCreateManyArgs} args - Arguments to create many Cc_char_chats.
     *     @example
     *     // Create many Cc_char_chats
     *     const cc_char_chat = await prisma.cc_char_chat.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cc_char_chatCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chatCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cc_char_chat.
     * @param {cc_char_chatDeleteArgs} args - Arguments to delete one Cc_char_chat.
     * @example
     * // Delete one Cc_char_chat
     * const Cc_char_chat = await prisma.cc_char_chat.delete({
     *   where: {
     *     // ... filter to delete one Cc_char_chat
     *   }
     * })
     * 
    **/
    delete<T extends cc_char_chatDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chatDeleteArgs<ExtArgs>>
    ): Prisma__cc_char_chatClient<$Result.GetResult<Prisma.$cc_char_chatPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cc_char_chat.
     * @param {cc_char_chatUpdateArgs} args - Arguments to update one Cc_char_chat.
     * @example
     * // Update one Cc_char_chat
     * const cc_char_chat = await prisma.cc_char_chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cc_char_chatUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chatUpdateArgs<ExtArgs>>
    ): Prisma__cc_char_chatClient<$Result.GetResult<Prisma.$cc_char_chatPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cc_char_chats.
     * @param {cc_char_chatDeleteManyArgs} args - Arguments to filter Cc_char_chats to delete.
     * @example
     * // Delete a few Cc_char_chats
     * const { count } = await prisma.cc_char_chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cc_char_chatDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chatDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_char_chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_char_chats
     * const cc_char_chat = await prisma.cc_char_chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cc_char_chatUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chatUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cc_char_chat.
     * @param {cc_char_chatUpsertArgs} args - Arguments to update or create a Cc_char_chat.
     * @example
     * // Update or create a Cc_char_chat
     * const cc_char_chat = await prisma.cc_char_chat.upsert({
     *   create: {
     *     // ... data to create a Cc_char_chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_char_chat we want to update
     *   }
     * })
    **/
    upsert<T extends cc_char_chatUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chatUpsertArgs<ExtArgs>>
    ): Prisma__cc_char_chatClient<$Result.GetResult<Prisma.$cc_char_chatPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cc_char_chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chatCountArgs} args - Arguments to filter Cc_char_chats to count.
     * @example
     * // Count the number of Cc_char_chats
     * const count = await prisma.cc_char_chat.count({
     *   where: {
     *     // ... the filter for the Cc_char_chats we want to count
     *   }
     * })
    **/
    count<T extends cc_char_chatCountArgs>(
      args?: Subset<T, cc_char_chatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_char_chatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_char_chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_char_chatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cc_char_chatAggregateArgs>(args: Subset<T, Cc_char_chatAggregateArgs>): Prisma.PrismaPromise<GetCc_char_chatAggregateType<T>>

    /**
     * Group by Cc_char_chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cc_char_chatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_char_chatGroupByArgs['orderBy'] }
        : { orderBy?: cc_char_chatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cc_char_chatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_char_chatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_char_chat model
   */
  readonly fields: cc_char_chatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_char_chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_char_chatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cc_char_chat model
   */ 
  interface cc_char_chatFieldRefs {
    readonly CHAT_NO: FieldRef<"cc_char_chat", 'Int'>
    readonly CHAR_NO: FieldRef<"cc_char_chat", 'Int'>
    readonly CHAT_ROOM_NO: FieldRef<"cc_char_chat", 'Int'>
    readonly IS_LEARN: FieldRef<"cc_char_chat", 'String'>
    readonly REG_DT: FieldRef<"cc_char_chat", 'DateTime'>
    readonly UPD_ID: FieldRef<"cc_char_chat", 'String'>
    readonly UPD_DT: FieldRef<"cc_char_chat", 'DateTime'>
    readonly CHAT_CONT: FieldRef<"cc_char_chat", 'String'>
    readonly REG_ID: FieldRef<"cc_char_chat", 'String'>
  }
    

  // Custom InputTypes

  /**
   * cc_char_chat findUnique
   */
  export type cc_char_chatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat
     */
    select?: cc_char_chatSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat to fetch.
     */
    where: cc_char_chatWhereUniqueInput
  }


  /**
   * cc_char_chat findUniqueOrThrow
   */
  export type cc_char_chatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat
     */
    select?: cc_char_chatSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat to fetch.
     */
    where: cc_char_chatWhereUniqueInput
  }


  /**
   * cc_char_chat findFirst
   */
  export type cc_char_chatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat
     */
    select?: cc_char_chatSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat to fetch.
     */
    where?: cc_char_chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chats to fetch.
     */
    orderBy?: cc_char_chatOrderByWithRelationInput | cc_char_chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_char_chats.
     */
    cursor?: cc_char_chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_char_chats.
     */
    distinct?: Cc_char_chatScalarFieldEnum | Cc_char_chatScalarFieldEnum[]
  }


  /**
   * cc_char_chat findFirstOrThrow
   */
  export type cc_char_chatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat
     */
    select?: cc_char_chatSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat to fetch.
     */
    where?: cc_char_chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chats to fetch.
     */
    orderBy?: cc_char_chatOrderByWithRelationInput | cc_char_chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_char_chats.
     */
    cursor?: cc_char_chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_char_chats.
     */
    distinct?: Cc_char_chatScalarFieldEnum | Cc_char_chatScalarFieldEnum[]
  }


  /**
   * cc_char_chat findMany
   */
  export type cc_char_chatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat
     */
    select?: cc_char_chatSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chats to fetch.
     */
    where?: cc_char_chatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chats to fetch.
     */
    orderBy?: cc_char_chatOrderByWithRelationInput | cc_char_chatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_char_chats.
     */
    cursor?: cc_char_chatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chats.
     */
    skip?: number
    distinct?: Cc_char_chatScalarFieldEnum | Cc_char_chatScalarFieldEnum[]
  }


  /**
   * cc_char_chat create
   */
  export type cc_char_chatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat
     */
    select?: cc_char_chatSelect<ExtArgs> | null
    /**
     * The data needed to create a cc_char_chat.
     */
    data: XOR<cc_char_chatCreateInput, cc_char_chatUncheckedCreateInput>
  }


  /**
   * cc_char_chat createMany
   */
  export type cc_char_chatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_char_chats.
     */
    data: cc_char_chatCreateManyInput | cc_char_chatCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cc_char_chat update
   */
  export type cc_char_chatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat
     */
    select?: cc_char_chatSelect<ExtArgs> | null
    /**
     * The data needed to update a cc_char_chat.
     */
    data: XOR<cc_char_chatUpdateInput, cc_char_chatUncheckedUpdateInput>
    /**
     * Choose, which cc_char_chat to update.
     */
    where: cc_char_chatWhereUniqueInput
  }


  /**
   * cc_char_chat updateMany
   */
  export type cc_char_chatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_char_chats.
     */
    data: XOR<cc_char_chatUpdateManyMutationInput, cc_char_chatUncheckedUpdateManyInput>
    /**
     * Filter which cc_char_chats to update
     */
    where?: cc_char_chatWhereInput
  }


  /**
   * cc_char_chat upsert
   */
  export type cc_char_chatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat
     */
    select?: cc_char_chatSelect<ExtArgs> | null
    /**
     * The filter to search for the cc_char_chat to update in case it exists.
     */
    where: cc_char_chatWhereUniqueInput
    /**
     * In case the cc_char_chat found by the `where` argument doesn't exist, create a new cc_char_chat with this data.
     */
    create: XOR<cc_char_chatCreateInput, cc_char_chatUncheckedCreateInput>
    /**
     * In case the cc_char_chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_char_chatUpdateInput, cc_char_chatUncheckedUpdateInput>
  }


  /**
   * cc_char_chat delete
   */
  export type cc_char_chatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat
     */
    select?: cc_char_chatSelect<ExtArgs> | null
    /**
     * Filter which cc_char_chat to delete.
     */
    where: cc_char_chatWhereUniqueInput
  }


  /**
   * cc_char_chat deleteMany
   */
  export type cc_char_chatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_char_chats to delete
     */
    where?: cc_char_chatWhereInput
  }


  /**
   * cc_char_chat without action
   */
  export type cc_char_chatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat
     */
    select?: cc_char_chatSelect<ExtArgs> | null
  }



  /**
   * Model cc_char_chat_for_learn
   */

  export type AggregateCc_char_chat_for_learn = {
    _count: Cc_char_chat_for_learnCountAggregateOutputType | null
    _avg: Cc_char_chat_for_learnAvgAggregateOutputType | null
    _sum: Cc_char_chat_for_learnSumAggregateOutputType | null
    _min: Cc_char_chat_for_learnMinAggregateOutputType | null
    _max: Cc_char_chat_for_learnMaxAggregateOutputType | null
  }

  export type Cc_char_chat_for_learnAvgAggregateOutputType = {
    CHAT_LEARN_NO: number | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
  }

  export type Cc_char_chat_for_learnSumAggregateOutputType = {
    CHAT_LEARN_NO: number | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
  }

  export type Cc_char_chat_for_learnMinAggregateOutputType = {
    CHAT_LEARN_NO: number | null
    CHAT_CONT: string | null
    REG_ID: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
  }

  export type Cc_char_chat_for_learnMaxAggregateOutputType = {
    CHAT_LEARN_NO: number | null
    CHAT_CONT: string | null
    REG_ID: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
  }

  export type Cc_char_chat_for_learnCountAggregateOutputType = {
    CHAT_LEARN_NO: number
    CHAT_CONT: number
    REG_ID: number
    REG_DT: number
    UPD_ID: number
    UPD_DT: number
    CHAR_NO: number
    CHAT_ROOM_NO: number
    _all: number
  }


  export type Cc_char_chat_for_learnAvgAggregateInputType = {
    CHAT_LEARN_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
  }

  export type Cc_char_chat_for_learnSumAggregateInputType = {
    CHAT_LEARN_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
  }

  export type Cc_char_chat_for_learnMinAggregateInputType = {
    CHAT_LEARN_NO?: true
    CHAT_CONT?: true
    REG_ID?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
  }

  export type Cc_char_chat_for_learnMaxAggregateInputType = {
    CHAT_LEARN_NO?: true
    CHAT_CONT?: true
    REG_ID?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
  }

  export type Cc_char_chat_for_learnCountAggregateInputType = {
    CHAT_LEARN_NO?: true
    CHAT_CONT?: true
    REG_ID?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
    _all?: true
  }

  export type Cc_char_chat_for_learnAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_char_chat_for_learn to aggregate.
     */
    where?: cc_char_chat_for_learnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_for_learns to fetch.
     */
    orderBy?: cc_char_chat_for_learnOrderByWithRelationInput | cc_char_chat_for_learnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_char_chat_for_learnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_for_learns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_for_learns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_char_chat_for_learns
    **/
    _count?: true | Cc_char_chat_for_learnCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_char_chat_for_learnAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_char_chat_for_learnSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_char_chat_for_learnMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_char_chat_for_learnMaxAggregateInputType
  }

  export type GetCc_char_chat_for_learnAggregateType<T extends Cc_char_chat_for_learnAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_char_chat_for_learn]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_char_chat_for_learn[P]>
      : GetScalarType<T[P], AggregateCc_char_chat_for_learn[P]>
  }




  export type cc_char_chat_for_learnGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_char_chat_for_learnWhereInput
    orderBy?: cc_char_chat_for_learnOrderByWithAggregationInput | cc_char_chat_for_learnOrderByWithAggregationInput[]
    by: Cc_char_chat_for_learnScalarFieldEnum[] | Cc_char_chat_for_learnScalarFieldEnum
    having?: cc_char_chat_for_learnScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_char_chat_for_learnCountAggregateInputType | true
    _avg?: Cc_char_chat_for_learnAvgAggregateInputType
    _sum?: Cc_char_chat_for_learnSumAggregateInputType
    _min?: Cc_char_chat_for_learnMinAggregateInputType
    _max?: Cc_char_chat_for_learnMaxAggregateInputType
  }

  export type Cc_char_chat_for_learnGroupByOutputType = {
    CHAT_LEARN_NO: number
    CHAT_CONT: string | null
    REG_ID: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAR_NO: number
    CHAT_ROOM_NO: number
    _count: Cc_char_chat_for_learnCountAggregateOutputType | null
    _avg: Cc_char_chat_for_learnAvgAggregateOutputType | null
    _sum: Cc_char_chat_for_learnSumAggregateOutputType | null
    _min: Cc_char_chat_for_learnMinAggregateOutputType | null
    _max: Cc_char_chat_for_learnMaxAggregateOutputType | null
  }

  type GetCc_char_chat_for_learnGroupByPayload<T extends cc_char_chat_for_learnGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_char_chat_for_learnGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_char_chat_for_learnGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_char_chat_for_learnGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_char_chat_for_learnGroupByOutputType[P]>
        }
      >
    >


  export type cc_char_chat_for_learnSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CHAT_LEARN_NO?: boolean
    CHAT_CONT?: boolean
    REG_ID?: boolean
    REG_DT?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    CHAR_NO?: boolean
    CHAT_ROOM_NO?: boolean
  }, ExtArgs["result"]["cc_char_chat_for_learn"]>

  export type cc_char_chat_for_learnSelectScalar = {
    CHAT_LEARN_NO?: boolean
    CHAT_CONT?: boolean
    REG_ID?: boolean
    REG_DT?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    CHAR_NO?: boolean
    CHAT_ROOM_NO?: boolean
  }


  export type $cc_char_chat_for_learnPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_char_chat_for_learn"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      CHAT_LEARN_NO: number
      CHAT_CONT: string | null
      REG_ID: string | null
      REG_DT: Date | null
      UPD_ID: string | null
      UPD_DT: Date | null
      CHAR_NO: number
      CHAT_ROOM_NO: number
    }, ExtArgs["result"]["cc_char_chat_for_learn"]>
    composites: {}
  }


  type cc_char_chat_for_learnGetPayload<S extends boolean | null | undefined | cc_char_chat_for_learnDefaultArgs> = $Result.GetResult<Prisma.$cc_char_chat_for_learnPayload, S>

  type cc_char_chat_for_learnCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cc_char_chat_for_learnFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Cc_char_chat_for_learnCountAggregateInputType | true
    }

  export interface cc_char_chat_for_learnDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_char_chat_for_learn'], meta: { name: 'cc_char_chat_for_learn' } }
    /**
     * Find zero or one Cc_char_chat_for_learn that matches the filter.
     * @param {cc_char_chat_for_learnFindUniqueArgs} args - Arguments to find a Cc_char_chat_for_learn
     * @example
     * // Get one Cc_char_chat_for_learn
     * const cc_char_chat_for_learn = await prisma.cc_char_chat_for_learn.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cc_char_chat_for_learnFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_for_learnFindUniqueArgs<ExtArgs>>
    ): Prisma__cc_char_chat_for_learnClient<$Result.GetResult<Prisma.$cc_char_chat_for_learnPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cc_char_chat_for_learn that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cc_char_chat_for_learnFindUniqueOrThrowArgs} args - Arguments to find a Cc_char_chat_for_learn
     * @example
     * // Get one Cc_char_chat_for_learn
     * const cc_char_chat_for_learn = await prisma.cc_char_chat_for_learn.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cc_char_chat_for_learnFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_for_learnFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cc_char_chat_for_learnClient<$Result.GetResult<Prisma.$cc_char_chat_for_learnPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cc_char_chat_for_learn that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_for_learnFindFirstArgs} args - Arguments to find a Cc_char_chat_for_learn
     * @example
     * // Get one Cc_char_chat_for_learn
     * const cc_char_chat_for_learn = await prisma.cc_char_chat_for_learn.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cc_char_chat_for_learnFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_for_learnFindFirstArgs<ExtArgs>>
    ): Prisma__cc_char_chat_for_learnClient<$Result.GetResult<Prisma.$cc_char_chat_for_learnPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cc_char_chat_for_learn that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_for_learnFindFirstOrThrowArgs} args - Arguments to find a Cc_char_chat_for_learn
     * @example
     * // Get one Cc_char_chat_for_learn
     * const cc_char_chat_for_learn = await prisma.cc_char_chat_for_learn.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cc_char_chat_for_learnFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_for_learnFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cc_char_chat_for_learnClient<$Result.GetResult<Prisma.$cc_char_chat_for_learnPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cc_char_chat_for_learns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_for_learnFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_char_chat_for_learns
     * const cc_char_chat_for_learns = await prisma.cc_char_chat_for_learn.findMany()
     * 
     * // Get first 10 Cc_char_chat_for_learns
     * const cc_char_chat_for_learns = await prisma.cc_char_chat_for_learn.findMany({ take: 10 })
     * 
     * // Only select the `CHAT_LEARN_NO`
     * const cc_char_chat_for_learnWithCHAT_LEARN_NOOnly = await prisma.cc_char_chat_for_learn.findMany({ select: { CHAT_LEARN_NO: true } })
     * 
    **/
    findMany<T extends cc_char_chat_for_learnFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_for_learnFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_char_chat_for_learnPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cc_char_chat_for_learn.
     * @param {cc_char_chat_for_learnCreateArgs} args - Arguments to create a Cc_char_chat_for_learn.
     * @example
     * // Create one Cc_char_chat_for_learn
     * const Cc_char_chat_for_learn = await prisma.cc_char_chat_for_learn.create({
     *   data: {
     *     // ... data to create a Cc_char_chat_for_learn
     *   }
     * })
     * 
    **/
    create<T extends cc_char_chat_for_learnCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_for_learnCreateArgs<ExtArgs>>
    ): Prisma__cc_char_chat_for_learnClient<$Result.GetResult<Prisma.$cc_char_chat_for_learnPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cc_char_chat_for_learns.
     *     @param {cc_char_chat_for_learnCreateManyArgs} args - Arguments to create many Cc_char_chat_for_learns.
     *     @example
     *     // Create many Cc_char_chat_for_learns
     *     const cc_char_chat_for_learn = await prisma.cc_char_chat_for_learn.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cc_char_chat_for_learnCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_for_learnCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cc_char_chat_for_learn.
     * @param {cc_char_chat_for_learnDeleteArgs} args - Arguments to delete one Cc_char_chat_for_learn.
     * @example
     * // Delete one Cc_char_chat_for_learn
     * const Cc_char_chat_for_learn = await prisma.cc_char_chat_for_learn.delete({
     *   where: {
     *     // ... filter to delete one Cc_char_chat_for_learn
     *   }
     * })
     * 
    **/
    delete<T extends cc_char_chat_for_learnDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_for_learnDeleteArgs<ExtArgs>>
    ): Prisma__cc_char_chat_for_learnClient<$Result.GetResult<Prisma.$cc_char_chat_for_learnPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cc_char_chat_for_learn.
     * @param {cc_char_chat_for_learnUpdateArgs} args - Arguments to update one Cc_char_chat_for_learn.
     * @example
     * // Update one Cc_char_chat_for_learn
     * const cc_char_chat_for_learn = await prisma.cc_char_chat_for_learn.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cc_char_chat_for_learnUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_for_learnUpdateArgs<ExtArgs>>
    ): Prisma__cc_char_chat_for_learnClient<$Result.GetResult<Prisma.$cc_char_chat_for_learnPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cc_char_chat_for_learns.
     * @param {cc_char_chat_for_learnDeleteManyArgs} args - Arguments to filter Cc_char_chat_for_learns to delete.
     * @example
     * // Delete a few Cc_char_chat_for_learns
     * const { count } = await prisma.cc_char_chat_for_learn.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cc_char_chat_for_learnDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_for_learnDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_char_chat_for_learns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_for_learnUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_char_chat_for_learns
     * const cc_char_chat_for_learn = await prisma.cc_char_chat_for_learn.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cc_char_chat_for_learnUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_for_learnUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cc_char_chat_for_learn.
     * @param {cc_char_chat_for_learnUpsertArgs} args - Arguments to update or create a Cc_char_chat_for_learn.
     * @example
     * // Update or create a Cc_char_chat_for_learn
     * const cc_char_chat_for_learn = await prisma.cc_char_chat_for_learn.upsert({
     *   create: {
     *     // ... data to create a Cc_char_chat_for_learn
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_char_chat_for_learn we want to update
     *   }
     * })
    **/
    upsert<T extends cc_char_chat_for_learnUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_for_learnUpsertArgs<ExtArgs>>
    ): Prisma__cc_char_chat_for_learnClient<$Result.GetResult<Prisma.$cc_char_chat_for_learnPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cc_char_chat_for_learns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_for_learnCountArgs} args - Arguments to filter Cc_char_chat_for_learns to count.
     * @example
     * // Count the number of Cc_char_chat_for_learns
     * const count = await prisma.cc_char_chat_for_learn.count({
     *   where: {
     *     // ... the filter for the Cc_char_chat_for_learns we want to count
     *   }
     * })
    **/
    count<T extends cc_char_chat_for_learnCountArgs>(
      args?: Subset<T, cc_char_chat_for_learnCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_char_chat_for_learnCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_char_chat_for_learn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_char_chat_for_learnAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cc_char_chat_for_learnAggregateArgs>(args: Subset<T, Cc_char_chat_for_learnAggregateArgs>): Prisma.PrismaPromise<GetCc_char_chat_for_learnAggregateType<T>>

    /**
     * Group by Cc_char_chat_for_learn.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_for_learnGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cc_char_chat_for_learnGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_char_chat_for_learnGroupByArgs['orderBy'] }
        : { orderBy?: cc_char_chat_for_learnGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cc_char_chat_for_learnGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_char_chat_for_learnGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_char_chat_for_learn model
   */
  readonly fields: cc_char_chat_for_learnFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_char_chat_for_learn.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_char_chat_for_learnClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cc_char_chat_for_learn model
   */ 
  interface cc_char_chat_for_learnFieldRefs {
    readonly CHAT_LEARN_NO: FieldRef<"cc_char_chat_for_learn", 'Int'>
    readonly CHAT_CONT: FieldRef<"cc_char_chat_for_learn", 'String'>
    readonly REG_ID: FieldRef<"cc_char_chat_for_learn", 'String'>
    readonly REG_DT: FieldRef<"cc_char_chat_for_learn", 'DateTime'>
    readonly UPD_ID: FieldRef<"cc_char_chat_for_learn", 'String'>
    readonly UPD_DT: FieldRef<"cc_char_chat_for_learn", 'DateTime'>
    readonly CHAR_NO: FieldRef<"cc_char_chat_for_learn", 'Int'>
    readonly CHAT_ROOM_NO: FieldRef<"cc_char_chat_for_learn", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * cc_char_chat_for_learn findUnique
   */
  export type cc_char_chat_for_learnFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_for_learn
     */
    select?: cc_char_chat_for_learnSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_for_learn to fetch.
     */
    where: cc_char_chat_for_learnWhereUniqueInput
  }


  /**
   * cc_char_chat_for_learn findUniqueOrThrow
   */
  export type cc_char_chat_for_learnFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_for_learn
     */
    select?: cc_char_chat_for_learnSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_for_learn to fetch.
     */
    where: cc_char_chat_for_learnWhereUniqueInput
  }


  /**
   * cc_char_chat_for_learn findFirst
   */
  export type cc_char_chat_for_learnFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_for_learn
     */
    select?: cc_char_chat_for_learnSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_for_learn to fetch.
     */
    where?: cc_char_chat_for_learnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_for_learns to fetch.
     */
    orderBy?: cc_char_chat_for_learnOrderByWithRelationInput | cc_char_chat_for_learnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_char_chat_for_learns.
     */
    cursor?: cc_char_chat_for_learnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_for_learns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_for_learns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_char_chat_for_learns.
     */
    distinct?: Cc_char_chat_for_learnScalarFieldEnum | Cc_char_chat_for_learnScalarFieldEnum[]
  }


  /**
   * cc_char_chat_for_learn findFirstOrThrow
   */
  export type cc_char_chat_for_learnFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_for_learn
     */
    select?: cc_char_chat_for_learnSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_for_learn to fetch.
     */
    where?: cc_char_chat_for_learnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_for_learns to fetch.
     */
    orderBy?: cc_char_chat_for_learnOrderByWithRelationInput | cc_char_chat_for_learnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_char_chat_for_learns.
     */
    cursor?: cc_char_chat_for_learnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_for_learns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_for_learns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_char_chat_for_learns.
     */
    distinct?: Cc_char_chat_for_learnScalarFieldEnum | Cc_char_chat_for_learnScalarFieldEnum[]
  }


  /**
   * cc_char_chat_for_learn findMany
   */
  export type cc_char_chat_for_learnFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_for_learn
     */
    select?: cc_char_chat_for_learnSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_for_learns to fetch.
     */
    where?: cc_char_chat_for_learnWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_for_learns to fetch.
     */
    orderBy?: cc_char_chat_for_learnOrderByWithRelationInput | cc_char_chat_for_learnOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_char_chat_for_learns.
     */
    cursor?: cc_char_chat_for_learnWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_for_learns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_for_learns.
     */
    skip?: number
    distinct?: Cc_char_chat_for_learnScalarFieldEnum | Cc_char_chat_for_learnScalarFieldEnum[]
  }


  /**
   * cc_char_chat_for_learn create
   */
  export type cc_char_chat_for_learnCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_for_learn
     */
    select?: cc_char_chat_for_learnSelect<ExtArgs> | null
    /**
     * The data needed to create a cc_char_chat_for_learn.
     */
    data: XOR<cc_char_chat_for_learnCreateInput, cc_char_chat_for_learnUncheckedCreateInput>
  }


  /**
   * cc_char_chat_for_learn createMany
   */
  export type cc_char_chat_for_learnCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_char_chat_for_learns.
     */
    data: cc_char_chat_for_learnCreateManyInput | cc_char_chat_for_learnCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cc_char_chat_for_learn update
   */
  export type cc_char_chat_for_learnUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_for_learn
     */
    select?: cc_char_chat_for_learnSelect<ExtArgs> | null
    /**
     * The data needed to update a cc_char_chat_for_learn.
     */
    data: XOR<cc_char_chat_for_learnUpdateInput, cc_char_chat_for_learnUncheckedUpdateInput>
    /**
     * Choose, which cc_char_chat_for_learn to update.
     */
    where: cc_char_chat_for_learnWhereUniqueInput
  }


  /**
   * cc_char_chat_for_learn updateMany
   */
  export type cc_char_chat_for_learnUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_char_chat_for_learns.
     */
    data: XOR<cc_char_chat_for_learnUpdateManyMutationInput, cc_char_chat_for_learnUncheckedUpdateManyInput>
    /**
     * Filter which cc_char_chat_for_learns to update
     */
    where?: cc_char_chat_for_learnWhereInput
  }


  /**
   * cc_char_chat_for_learn upsert
   */
  export type cc_char_chat_for_learnUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_for_learn
     */
    select?: cc_char_chat_for_learnSelect<ExtArgs> | null
    /**
     * The filter to search for the cc_char_chat_for_learn to update in case it exists.
     */
    where: cc_char_chat_for_learnWhereUniqueInput
    /**
     * In case the cc_char_chat_for_learn found by the `where` argument doesn't exist, create a new cc_char_chat_for_learn with this data.
     */
    create: XOR<cc_char_chat_for_learnCreateInput, cc_char_chat_for_learnUncheckedCreateInput>
    /**
     * In case the cc_char_chat_for_learn was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_char_chat_for_learnUpdateInput, cc_char_chat_for_learnUncheckedUpdateInput>
  }


  /**
   * cc_char_chat_for_learn delete
   */
  export type cc_char_chat_for_learnDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_for_learn
     */
    select?: cc_char_chat_for_learnSelect<ExtArgs> | null
    /**
     * Filter which cc_char_chat_for_learn to delete.
     */
    where: cc_char_chat_for_learnWhereUniqueInput
  }


  /**
   * cc_char_chat_for_learn deleteMany
   */
  export type cc_char_chat_for_learnDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_char_chat_for_learns to delete
     */
    where?: cc_char_chat_for_learnWhereInput
  }


  /**
   * cc_char_chat_for_learn without action
   */
  export type cc_char_chat_for_learnDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_for_learn
     */
    select?: cc_char_chat_for_learnSelect<ExtArgs> | null
  }



  /**
   * Model cc_char_chat_log
   */

  export type AggregateCc_char_chat_log = {
    _count: Cc_char_chat_logCountAggregateOutputType | null
    _avg: Cc_char_chat_logAvgAggregateOutputType | null
    _sum: Cc_char_chat_logSumAggregateOutputType | null
    _min: Cc_char_chat_logMinAggregateOutputType | null
    _max: Cc_char_chat_logMaxAggregateOutputType | null
  }

  export type Cc_char_chat_logAvgAggregateOutputType = {
    CHAT_LOG_NO: number | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
  }

  export type Cc_char_chat_logSumAggregateOutputType = {
    CHAT_LOG_NO: number | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
  }

  export type Cc_char_chat_logMinAggregateOutputType = {
    CHAT_LOG_NO: number | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
    IS_LEARN: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAT_CONT: string | null
    REG_ID: string | null
  }

  export type Cc_char_chat_logMaxAggregateOutputType = {
    CHAT_LOG_NO: number | null
    CHAR_NO: number | null
    CHAT_ROOM_NO: number | null
    IS_LEARN: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAT_CONT: string | null
    REG_ID: string | null
  }

  export type Cc_char_chat_logCountAggregateOutputType = {
    CHAT_LOG_NO: number
    CHAR_NO: number
    CHAT_ROOM_NO: number
    IS_LEARN: number
    REG_DT: number
    UPD_ID: number
    UPD_DT: number
    CHAT_CONT: number
    REG_ID: number
    _all: number
  }


  export type Cc_char_chat_logAvgAggregateInputType = {
    CHAT_LOG_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
  }

  export type Cc_char_chat_logSumAggregateInputType = {
    CHAT_LOG_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
  }

  export type Cc_char_chat_logMinAggregateInputType = {
    CHAT_LOG_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
    IS_LEARN?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAT_CONT?: true
    REG_ID?: true
  }

  export type Cc_char_chat_logMaxAggregateInputType = {
    CHAT_LOG_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
    IS_LEARN?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAT_CONT?: true
    REG_ID?: true
  }

  export type Cc_char_chat_logCountAggregateInputType = {
    CHAT_LOG_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
    IS_LEARN?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAT_CONT?: true
    REG_ID?: true
    _all?: true
  }

  export type Cc_char_chat_logAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_char_chat_log to aggregate.
     */
    where?: cc_char_chat_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_logs to fetch.
     */
    orderBy?: cc_char_chat_logOrderByWithRelationInput | cc_char_chat_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_char_chat_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_char_chat_logs
    **/
    _count?: true | Cc_char_chat_logCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_char_chat_logAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_char_chat_logSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_char_chat_logMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_char_chat_logMaxAggregateInputType
  }

  export type GetCc_char_chat_logAggregateType<T extends Cc_char_chat_logAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_char_chat_log]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_char_chat_log[P]>
      : GetScalarType<T[P], AggregateCc_char_chat_log[P]>
  }




  export type cc_char_chat_logGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_char_chat_logWhereInput
    orderBy?: cc_char_chat_logOrderByWithAggregationInput | cc_char_chat_logOrderByWithAggregationInput[]
    by: Cc_char_chat_logScalarFieldEnum[] | Cc_char_chat_logScalarFieldEnum
    having?: cc_char_chat_logScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_char_chat_logCountAggregateInputType | true
    _avg?: Cc_char_chat_logAvgAggregateInputType
    _sum?: Cc_char_chat_logSumAggregateInputType
    _min?: Cc_char_chat_logMinAggregateInputType
    _max?: Cc_char_chat_logMaxAggregateInputType
  }

  export type Cc_char_chat_logGroupByOutputType = {
    CHAT_LOG_NO: number
    CHAR_NO: number
    CHAT_ROOM_NO: number
    IS_LEARN: string | null
    REG_DT: Date
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAT_CONT: string | null
    REG_ID: string | null
    _count: Cc_char_chat_logCountAggregateOutputType | null
    _avg: Cc_char_chat_logAvgAggregateOutputType | null
    _sum: Cc_char_chat_logSumAggregateOutputType | null
    _min: Cc_char_chat_logMinAggregateOutputType | null
    _max: Cc_char_chat_logMaxAggregateOutputType | null
  }

  type GetCc_char_chat_logGroupByPayload<T extends cc_char_chat_logGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_char_chat_logGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_char_chat_logGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_char_chat_logGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_char_chat_logGroupByOutputType[P]>
        }
      >
    >


  export type cc_char_chat_logSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CHAT_LOG_NO?: boolean
    CHAR_NO?: boolean
    CHAT_ROOM_NO?: boolean
    IS_LEARN?: boolean
    REG_DT?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    CHAT_CONT?: boolean
    REG_ID?: boolean
  }, ExtArgs["result"]["cc_char_chat_log"]>

  export type cc_char_chat_logSelectScalar = {
    CHAT_LOG_NO?: boolean
    CHAR_NO?: boolean
    CHAT_ROOM_NO?: boolean
    IS_LEARN?: boolean
    REG_DT?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    CHAT_CONT?: boolean
    REG_ID?: boolean
  }


  export type $cc_char_chat_logPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_char_chat_log"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      CHAT_LOG_NO: number
      CHAR_NO: number
      CHAT_ROOM_NO: number
      IS_LEARN: string | null
      REG_DT: Date
      UPD_ID: string | null
      UPD_DT: Date | null
      CHAT_CONT: string | null
      REG_ID: string | null
    }, ExtArgs["result"]["cc_char_chat_log"]>
    composites: {}
  }


  type cc_char_chat_logGetPayload<S extends boolean | null | undefined | cc_char_chat_logDefaultArgs> = $Result.GetResult<Prisma.$cc_char_chat_logPayload, S>

  type cc_char_chat_logCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cc_char_chat_logFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Cc_char_chat_logCountAggregateInputType | true
    }

  export interface cc_char_chat_logDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_char_chat_log'], meta: { name: 'cc_char_chat_log' } }
    /**
     * Find zero or one Cc_char_chat_log that matches the filter.
     * @param {cc_char_chat_logFindUniqueArgs} args - Arguments to find a Cc_char_chat_log
     * @example
     * // Get one Cc_char_chat_log
     * const cc_char_chat_log = await prisma.cc_char_chat_log.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cc_char_chat_logFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_logFindUniqueArgs<ExtArgs>>
    ): Prisma__cc_char_chat_logClient<$Result.GetResult<Prisma.$cc_char_chat_logPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cc_char_chat_log that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cc_char_chat_logFindUniqueOrThrowArgs} args - Arguments to find a Cc_char_chat_log
     * @example
     * // Get one Cc_char_chat_log
     * const cc_char_chat_log = await prisma.cc_char_chat_log.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cc_char_chat_logFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_logFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cc_char_chat_logClient<$Result.GetResult<Prisma.$cc_char_chat_logPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cc_char_chat_log that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_logFindFirstArgs} args - Arguments to find a Cc_char_chat_log
     * @example
     * // Get one Cc_char_chat_log
     * const cc_char_chat_log = await prisma.cc_char_chat_log.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cc_char_chat_logFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_logFindFirstArgs<ExtArgs>>
    ): Prisma__cc_char_chat_logClient<$Result.GetResult<Prisma.$cc_char_chat_logPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cc_char_chat_log that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_logFindFirstOrThrowArgs} args - Arguments to find a Cc_char_chat_log
     * @example
     * // Get one Cc_char_chat_log
     * const cc_char_chat_log = await prisma.cc_char_chat_log.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cc_char_chat_logFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_logFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cc_char_chat_logClient<$Result.GetResult<Prisma.$cc_char_chat_logPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cc_char_chat_logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_logFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_char_chat_logs
     * const cc_char_chat_logs = await prisma.cc_char_chat_log.findMany()
     * 
     * // Get first 10 Cc_char_chat_logs
     * const cc_char_chat_logs = await prisma.cc_char_chat_log.findMany({ take: 10 })
     * 
     * // Only select the `CHAT_LOG_NO`
     * const cc_char_chat_logWithCHAT_LOG_NOOnly = await prisma.cc_char_chat_log.findMany({ select: { CHAT_LOG_NO: true } })
     * 
    **/
    findMany<T extends cc_char_chat_logFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_logFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_char_chat_logPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cc_char_chat_log.
     * @param {cc_char_chat_logCreateArgs} args - Arguments to create a Cc_char_chat_log.
     * @example
     * // Create one Cc_char_chat_log
     * const Cc_char_chat_log = await prisma.cc_char_chat_log.create({
     *   data: {
     *     // ... data to create a Cc_char_chat_log
     *   }
     * })
     * 
    **/
    create<T extends cc_char_chat_logCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_logCreateArgs<ExtArgs>>
    ): Prisma__cc_char_chat_logClient<$Result.GetResult<Prisma.$cc_char_chat_logPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cc_char_chat_logs.
     *     @param {cc_char_chat_logCreateManyArgs} args - Arguments to create many Cc_char_chat_logs.
     *     @example
     *     // Create many Cc_char_chat_logs
     *     const cc_char_chat_log = await prisma.cc_char_chat_log.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cc_char_chat_logCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_logCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cc_char_chat_log.
     * @param {cc_char_chat_logDeleteArgs} args - Arguments to delete one Cc_char_chat_log.
     * @example
     * // Delete one Cc_char_chat_log
     * const Cc_char_chat_log = await prisma.cc_char_chat_log.delete({
     *   where: {
     *     // ... filter to delete one Cc_char_chat_log
     *   }
     * })
     * 
    **/
    delete<T extends cc_char_chat_logDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_logDeleteArgs<ExtArgs>>
    ): Prisma__cc_char_chat_logClient<$Result.GetResult<Prisma.$cc_char_chat_logPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cc_char_chat_log.
     * @param {cc_char_chat_logUpdateArgs} args - Arguments to update one Cc_char_chat_log.
     * @example
     * // Update one Cc_char_chat_log
     * const cc_char_chat_log = await prisma.cc_char_chat_log.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cc_char_chat_logUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_logUpdateArgs<ExtArgs>>
    ): Prisma__cc_char_chat_logClient<$Result.GetResult<Prisma.$cc_char_chat_logPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cc_char_chat_logs.
     * @param {cc_char_chat_logDeleteManyArgs} args - Arguments to filter Cc_char_chat_logs to delete.
     * @example
     * // Delete a few Cc_char_chat_logs
     * const { count } = await prisma.cc_char_chat_log.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cc_char_chat_logDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_logDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_char_chat_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_logUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_char_chat_logs
     * const cc_char_chat_log = await prisma.cc_char_chat_log.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cc_char_chat_logUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_logUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cc_char_chat_log.
     * @param {cc_char_chat_logUpsertArgs} args - Arguments to update or create a Cc_char_chat_log.
     * @example
     * // Update or create a Cc_char_chat_log
     * const cc_char_chat_log = await prisma.cc_char_chat_log.upsert({
     *   create: {
     *     // ... data to create a Cc_char_chat_log
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_char_chat_log we want to update
     *   }
     * })
    **/
    upsert<T extends cc_char_chat_logUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_logUpsertArgs<ExtArgs>>
    ): Prisma__cc_char_chat_logClient<$Result.GetResult<Prisma.$cc_char_chat_logPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cc_char_chat_logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_logCountArgs} args - Arguments to filter Cc_char_chat_logs to count.
     * @example
     * // Count the number of Cc_char_chat_logs
     * const count = await prisma.cc_char_chat_log.count({
     *   where: {
     *     // ... the filter for the Cc_char_chat_logs we want to count
     *   }
     * })
    **/
    count<T extends cc_char_chat_logCountArgs>(
      args?: Subset<T, cc_char_chat_logCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_char_chat_logCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_char_chat_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_char_chat_logAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cc_char_chat_logAggregateArgs>(args: Subset<T, Cc_char_chat_logAggregateArgs>): Prisma.PrismaPromise<GetCc_char_chat_logAggregateType<T>>

    /**
     * Group by Cc_char_chat_log.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_logGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cc_char_chat_logGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_char_chat_logGroupByArgs['orderBy'] }
        : { orderBy?: cc_char_chat_logGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cc_char_chat_logGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_char_chat_logGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_char_chat_log model
   */
  readonly fields: cc_char_chat_logFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_char_chat_log.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_char_chat_logClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cc_char_chat_log model
   */ 
  interface cc_char_chat_logFieldRefs {
    readonly CHAT_LOG_NO: FieldRef<"cc_char_chat_log", 'Int'>
    readonly CHAR_NO: FieldRef<"cc_char_chat_log", 'Int'>
    readonly CHAT_ROOM_NO: FieldRef<"cc_char_chat_log", 'Int'>
    readonly IS_LEARN: FieldRef<"cc_char_chat_log", 'String'>
    readonly REG_DT: FieldRef<"cc_char_chat_log", 'DateTime'>
    readonly UPD_ID: FieldRef<"cc_char_chat_log", 'String'>
    readonly UPD_DT: FieldRef<"cc_char_chat_log", 'DateTime'>
    readonly CHAT_CONT: FieldRef<"cc_char_chat_log", 'String'>
    readonly REG_ID: FieldRef<"cc_char_chat_log", 'String'>
  }
    

  // Custom InputTypes

  /**
   * cc_char_chat_log findUnique
   */
  export type cc_char_chat_logFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_log
     */
    select?: cc_char_chat_logSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_log to fetch.
     */
    where: cc_char_chat_logWhereUniqueInput
  }


  /**
   * cc_char_chat_log findUniqueOrThrow
   */
  export type cc_char_chat_logFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_log
     */
    select?: cc_char_chat_logSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_log to fetch.
     */
    where: cc_char_chat_logWhereUniqueInput
  }


  /**
   * cc_char_chat_log findFirst
   */
  export type cc_char_chat_logFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_log
     */
    select?: cc_char_chat_logSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_log to fetch.
     */
    where?: cc_char_chat_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_logs to fetch.
     */
    orderBy?: cc_char_chat_logOrderByWithRelationInput | cc_char_chat_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_char_chat_logs.
     */
    cursor?: cc_char_chat_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_char_chat_logs.
     */
    distinct?: Cc_char_chat_logScalarFieldEnum | Cc_char_chat_logScalarFieldEnum[]
  }


  /**
   * cc_char_chat_log findFirstOrThrow
   */
  export type cc_char_chat_logFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_log
     */
    select?: cc_char_chat_logSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_log to fetch.
     */
    where?: cc_char_chat_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_logs to fetch.
     */
    orderBy?: cc_char_chat_logOrderByWithRelationInput | cc_char_chat_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_char_chat_logs.
     */
    cursor?: cc_char_chat_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_char_chat_logs.
     */
    distinct?: Cc_char_chat_logScalarFieldEnum | Cc_char_chat_logScalarFieldEnum[]
  }


  /**
   * cc_char_chat_log findMany
   */
  export type cc_char_chat_logFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_log
     */
    select?: cc_char_chat_logSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_logs to fetch.
     */
    where?: cc_char_chat_logWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_logs to fetch.
     */
    orderBy?: cc_char_chat_logOrderByWithRelationInput | cc_char_chat_logOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_char_chat_logs.
     */
    cursor?: cc_char_chat_logWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_logs.
     */
    skip?: number
    distinct?: Cc_char_chat_logScalarFieldEnum | Cc_char_chat_logScalarFieldEnum[]
  }


  /**
   * cc_char_chat_log create
   */
  export type cc_char_chat_logCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_log
     */
    select?: cc_char_chat_logSelect<ExtArgs> | null
    /**
     * The data needed to create a cc_char_chat_log.
     */
    data: XOR<cc_char_chat_logCreateInput, cc_char_chat_logUncheckedCreateInput>
  }


  /**
   * cc_char_chat_log createMany
   */
  export type cc_char_chat_logCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_char_chat_logs.
     */
    data: cc_char_chat_logCreateManyInput | cc_char_chat_logCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cc_char_chat_log update
   */
  export type cc_char_chat_logUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_log
     */
    select?: cc_char_chat_logSelect<ExtArgs> | null
    /**
     * The data needed to update a cc_char_chat_log.
     */
    data: XOR<cc_char_chat_logUpdateInput, cc_char_chat_logUncheckedUpdateInput>
    /**
     * Choose, which cc_char_chat_log to update.
     */
    where: cc_char_chat_logWhereUniqueInput
  }


  /**
   * cc_char_chat_log updateMany
   */
  export type cc_char_chat_logUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_char_chat_logs.
     */
    data: XOR<cc_char_chat_logUpdateManyMutationInput, cc_char_chat_logUncheckedUpdateManyInput>
    /**
     * Filter which cc_char_chat_logs to update
     */
    where?: cc_char_chat_logWhereInput
  }


  /**
   * cc_char_chat_log upsert
   */
  export type cc_char_chat_logUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_log
     */
    select?: cc_char_chat_logSelect<ExtArgs> | null
    /**
     * The filter to search for the cc_char_chat_log to update in case it exists.
     */
    where: cc_char_chat_logWhereUniqueInput
    /**
     * In case the cc_char_chat_log found by the `where` argument doesn't exist, create a new cc_char_chat_log with this data.
     */
    create: XOR<cc_char_chat_logCreateInput, cc_char_chat_logUncheckedCreateInput>
    /**
     * In case the cc_char_chat_log was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_char_chat_logUpdateInput, cc_char_chat_logUncheckedUpdateInput>
  }


  /**
   * cc_char_chat_log delete
   */
  export type cc_char_chat_logDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_log
     */
    select?: cc_char_chat_logSelect<ExtArgs> | null
    /**
     * Filter which cc_char_chat_log to delete.
     */
    where: cc_char_chat_logWhereUniqueInput
  }


  /**
   * cc_char_chat_log deleteMany
   */
  export type cc_char_chat_logDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_char_chat_logs to delete
     */
    where?: cc_char_chat_logWhereInput
  }


  /**
   * cc_char_chat_log without action
   */
  export type cc_char_chat_logDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_log
     */
    select?: cc_char_chat_logSelect<ExtArgs> | null
  }



  /**
   * Model cc_char_chat_premium
   */

  export type AggregateCc_char_chat_premium = {
    _count: Cc_char_chat_premiumCountAggregateOutputType | null
    _avg: Cc_char_chat_premiumAvgAggregateOutputType | null
    _sum: Cc_char_chat_premiumSumAggregateOutputType | null
    _min: Cc_char_chat_premiumMinAggregateOutputType | null
    _max: Cc_char_chat_premiumMaxAggregateOutputType | null
  }

  export type Cc_char_chat_premiumAvgAggregateOutputType = {
    CHAT_NO: number | null
  }

  export type Cc_char_chat_premiumSumAggregateOutputType = {
    CHAT_NO: number | null
  }

  export type Cc_char_chat_premiumMinAggregateOutputType = {
    CHAT_NO: number | null
    CHAR_NO: string | null
    CHAT_ROOM_NO: string | null
    IS_LEARN: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAT_CONT: string | null
    REG_ID: string | null
  }

  export type Cc_char_chat_premiumMaxAggregateOutputType = {
    CHAT_NO: number | null
    CHAR_NO: string | null
    CHAT_ROOM_NO: string | null
    IS_LEARN: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAT_CONT: string | null
    REG_ID: string | null
  }

  export type Cc_char_chat_premiumCountAggregateOutputType = {
    CHAT_NO: number
    CHAR_NO: number
    CHAT_ROOM_NO: number
    IS_LEARN: number
    REG_DT: number
    UPD_ID: number
    UPD_DT: number
    CHAT_CONT: number
    REG_ID: number
    _all: number
  }


  export type Cc_char_chat_premiumAvgAggregateInputType = {
    CHAT_NO?: true
  }

  export type Cc_char_chat_premiumSumAggregateInputType = {
    CHAT_NO?: true
  }

  export type Cc_char_chat_premiumMinAggregateInputType = {
    CHAT_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
    IS_LEARN?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAT_CONT?: true
    REG_ID?: true
  }

  export type Cc_char_chat_premiumMaxAggregateInputType = {
    CHAT_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
    IS_LEARN?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAT_CONT?: true
    REG_ID?: true
  }

  export type Cc_char_chat_premiumCountAggregateInputType = {
    CHAT_NO?: true
    CHAR_NO?: true
    CHAT_ROOM_NO?: true
    IS_LEARN?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    CHAT_CONT?: true
    REG_ID?: true
    _all?: true
  }

  export type Cc_char_chat_premiumAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_char_chat_premium to aggregate.
     */
    where?: cc_char_chat_premiumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_premiums to fetch.
     */
    orderBy?: cc_char_chat_premiumOrderByWithRelationInput | cc_char_chat_premiumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_char_chat_premiumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_premiums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_premiums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_char_chat_premiums
    **/
    _count?: true | Cc_char_chat_premiumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_char_chat_premiumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_char_chat_premiumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_char_chat_premiumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_char_chat_premiumMaxAggregateInputType
  }

  export type GetCc_char_chat_premiumAggregateType<T extends Cc_char_chat_premiumAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_char_chat_premium]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_char_chat_premium[P]>
      : GetScalarType<T[P], AggregateCc_char_chat_premium[P]>
  }




  export type cc_char_chat_premiumGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_char_chat_premiumWhereInput
    orderBy?: cc_char_chat_premiumOrderByWithAggregationInput | cc_char_chat_premiumOrderByWithAggregationInput[]
    by: Cc_char_chat_premiumScalarFieldEnum[] | Cc_char_chat_premiumScalarFieldEnum
    having?: cc_char_chat_premiumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_char_chat_premiumCountAggregateInputType | true
    _avg?: Cc_char_chat_premiumAvgAggregateInputType
    _sum?: Cc_char_chat_premiumSumAggregateInputType
    _min?: Cc_char_chat_premiumMinAggregateInputType
    _max?: Cc_char_chat_premiumMaxAggregateInputType
  }

  export type Cc_char_chat_premiumGroupByOutputType = {
    CHAT_NO: number
    CHAR_NO: string
    CHAT_ROOM_NO: string
    IS_LEARN: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    CHAT_CONT: string | null
    REG_ID: string | null
    _count: Cc_char_chat_premiumCountAggregateOutputType | null
    _avg: Cc_char_chat_premiumAvgAggregateOutputType | null
    _sum: Cc_char_chat_premiumSumAggregateOutputType | null
    _min: Cc_char_chat_premiumMinAggregateOutputType | null
    _max: Cc_char_chat_premiumMaxAggregateOutputType | null
  }

  type GetCc_char_chat_premiumGroupByPayload<T extends cc_char_chat_premiumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_char_chat_premiumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_char_chat_premiumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_char_chat_premiumGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_char_chat_premiumGroupByOutputType[P]>
        }
      >
    >


  export type cc_char_chat_premiumSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    CHAT_NO?: boolean
    CHAR_NO?: boolean
    CHAT_ROOM_NO?: boolean
    IS_LEARN?: boolean
    REG_DT?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    CHAT_CONT?: boolean
    REG_ID?: boolean
  }, ExtArgs["result"]["cc_char_chat_premium"]>

  export type cc_char_chat_premiumSelectScalar = {
    CHAT_NO?: boolean
    CHAR_NO?: boolean
    CHAT_ROOM_NO?: boolean
    IS_LEARN?: boolean
    REG_DT?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    CHAT_CONT?: boolean
    REG_ID?: boolean
  }


  export type $cc_char_chat_premiumPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_char_chat_premium"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      CHAT_NO: number
      CHAR_NO: string
      CHAT_ROOM_NO: string
      IS_LEARN: string | null
      REG_DT: Date | null
      UPD_ID: string | null
      UPD_DT: Date | null
      CHAT_CONT: string | null
      REG_ID: string | null
    }, ExtArgs["result"]["cc_char_chat_premium"]>
    composites: {}
  }


  type cc_char_chat_premiumGetPayload<S extends boolean | null | undefined | cc_char_chat_premiumDefaultArgs> = $Result.GetResult<Prisma.$cc_char_chat_premiumPayload, S>

  type cc_char_chat_premiumCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cc_char_chat_premiumFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Cc_char_chat_premiumCountAggregateInputType | true
    }

  export interface cc_char_chat_premiumDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_char_chat_premium'], meta: { name: 'cc_char_chat_premium' } }
    /**
     * Find zero or one Cc_char_chat_premium that matches the filter.
     * @param {cc_char_chat_premiumFindUniqueArgs} args - Arguments to find a Cc_char_chat_premium
     * @example
     * // Get one Cc_char_chat_premium
     * const cc_char_chat_premium = await prisma.cc_char_chat_premium.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cc_char_chat_premiumFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_premiumFindUniqueArgs<ExtArgs>>
    ): Prisma__cc_char_chat_premiumClient<$Result.GetResult<Prisma.$cc_char_chat_premiumPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cc_char_chat_premium that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cc_char_chat_premiumFindUniqueOrThrowArgs} args - Arguments to find a Cc_char_chat_premium
     * @example
     * // Get one Cc_char_chat_premium
     * const cc_char_chat_premium = await prisma.cc_char_chat_premium.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cc_char_chat_premiumFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_premiumFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cc_char_chat_premiumClient<$Result.GetResult<Prisma.$cc_char_chat_premiumPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cc_char_chat_premium that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_premiumFindFirstArgs} args - Arguments to find a Cc_char_chat_premium
     * @example
     * // Get one Cc_char_chat_premium
     * const cc_char_chat_premium = await prisma.cc_char_chat_premium.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cc_char_chat_premiumFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_premiumFindFirstArgs<ExtArgs>>
    ): Prisma__cc_char_chat_premiumClient<$Result.GetResult<Prisma.$cc_char_chat_premiumPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cc_char_chat_premium that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_premiumFindFirstOrThrowArgs} args - Arguments to find a Cc_char_chat_premium
     * @example
     * // Get one Cc_char_chat_premium
     * const cc_char_chat_premium = await prisma.cc_char_chat_premium.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cc_char_chat_premiumFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_premiumFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cc_char_chat_premiumClient<$Result.GetResult<Prisma.$cc_char_chat_premiumPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cc_char_chat_premiums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_premiumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_char_chat_premiums
     * const cc_char_chat_premiums = await prisma.cc_char_chat_premium.findMany()
     * 
     * // Get first 10 Cc_char_chat_premiums
     * const cc_char_chat_premiums = await prisma.cc_char_chat_premium.findMany({ take: 10 })
     * 
     * // Only select the `CHAT_NO`
     * const cc_char_chat_premiumWithCHAT_NOOnly = await prisma.cc_char_chat_premium.findMany({ select: { CHAT_NO: true } })
     * 
    **/
    findMany<T extends cc_char_chat_premiumFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_premiumFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_char_chat_premiumPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cc_char_chat_premium.
     * @param {cc_char_chat_premiumCreateArgs} args - Arguments to create a Cc_char_chat_premium.
     * @example
     * // Create one Cc_char_chat_premium
     * const Cc_char_chat_premium = await prisma.cc_char_chat_premium.create({
     *   data: {
     *     // ... data to create a Cc_char_chat_premium
     *   }
     * })
     * 
    **/
    create<T extends cc_char_chat_premiumCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_premiumCreateArgs<ExtArgs>>
    ): Prisma__cc_char_chat_premiumClient<$Result.GetResult<Prisma.$cc_char_chat_premiumPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cc_char_chat_premiums.
     *     @param {cc_char_chat_premiumCreateManyArgs} args - Arguments to create many Cc_char_chat_premiums.
     *     @example
     *     // Create many Cc_char_chat_premiums
     *     const cc_char_chat_premium = await prisma.cc_char_chat_premium.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cc_char_chat_premiumCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_premiumCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cc_char_chat_premium.
     * @param {cc_char_chat_premiumDeleteArgs} args - Arguments to delete one Cc_char_chat_premium.
     * @example
     * // Delete one Cc_char_chat_premium
     * const Cc_char_chat_premium = await prisma.cc_char_chat_premium.delete({
     *   where: {
     *     // ... filter to delete one Cc_char_chat_premium
     *   }
     * })
     * 
    **/
    delete<T extends cc_char_chat_premiumDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_premiumDeleteArgs<ExtArgs>>
    ): Prisma__cc_char_chat_premiumClient<$Result.GetResult<Prisma.$cc_char_chat_premiumPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cc_char_chat_premium.
     * @param {cc_char_chat_premiumUpdateArgs} args - Arguments to update one Cc_char_chat_premium.
     * @example
     * // Update one Cc_char_chat_premium
     * const cc_char_chat_premium = await prisma.cc_char_chat_premium.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cc_char_chat_premiumUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_premiumUpdateArgs<ExtArgs>>
    ): Prisma__cc_char_chat_premiumClient<$Result.GetResult<Prisma.$cc_char_chat_premiumPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cc_char_chat_premiums.
     * @param {cc_char_chat_premiumDeleteManyArgs} args - Arguments to filter Cc_char_chat_premiums to delete.
     * @example
     * // Delete a few Cc_char_chat_premiums
     * const { count } = await prisma.cc_char_chat_premium.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cc_char_chat_premiumDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_char_chat_premiumDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_char_chat_premiums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_premiumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_char_chat_premiums
     * const cc_char_chat_premium = await prisma.cc_char_chat_premium.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cc_char_chat_premiumUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_premiumUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cc_char_chat_premium.
     * @param {cc_char_chat_premiumUpsertArgs} args - Arguments to update or create a Cc_char_chat_premium.
     * @example
     * // Update or create a Cc_char_chat_premium
     * const cc_char_chat_premium = await prisma.cc_char_chat_premium.upsert({
     *   create: {
     *     // ... data to create a Cc_char_chat_premium
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_char_chat_premium we want to update
     *   }
     * })
    **/
    upsert<T extends cc_char_chat_premiumUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cc_char_chat_premiumUpsertArgs<ExtArgs>>
    ): Prisma__cc_char_chat_premiumClient<$Result.GetResult<Prisma.$cc_char_chat_premiumPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cc_char_chat_premiums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_premiumCountArgs} args - Arguments to filter Cc_char_chat_premiums to count.
     * @example
     * // Count the number of Cc_char_chat_premiums
     * const count = await prisma.cc_char_chat_premium.count({
     *   where: {
     *     // ... the filter for the Cc_char_chat_premiums we want to count
     *   }
     * })
    **/
    count<T extends cc_char_chat_premiumCountArgs>(
      args?: Subset<T, cc_char_chat_premiumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_char_chat_premiumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_char_chat_premium.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_char_chat_premiumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cc_char_chat_premiumAggregateArgs>(args: Subset<T, Cc_char_chat_premiumAggregateArgs>): Prisma.PrismaPromise<GetCc_char_chat_premiumAggregateType<T>>

    /**
     * Group by Cc_char_chat_premium.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_char_chat_premiumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cc_char_chat_premiumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_char_chat_premiumGroupByArgs['orderBy'] }
        : { orderBy?: cc_char_chat_premiumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cc_char_chat_premiumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_char_chat_premiumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_char_chat_premium model
   */
  readonly fields: cc_char_chat_premiumFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_char_chat_premium.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_char_chat_premiumClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cc_char_chat_premium model
   */ 
  interface cc_char_chat_premiumFieldRefs {
    readonly CHAT_NO: FieldRef<"cc_char_chat_premium", 'Int'>
    readonly CHAR_NO: FieldRef<"cc_char_chat_premium", 'String'>
    readonly CHAT_ROOM_NO: FieldRef<"cc_char_chat_premium", 'String'>
    readonly IS_LEARN: FieldRef<"cc_char_chat_premium", 'String'>
    readonly REG_DT: FieldRef<"cc_char_chat_premium", 'DateTime'>
    readonly UPD_ID: FieldRef<"cc_char_chat_premium", 'String'>
    readonly UPD_DT: FieldRef<"cc_char_chat_premium", 'DateTime'>
    readonly CHAT_CONT: FieldRef<"cc_char_chat_premium", 'String'>
    readonly REG_ID: FieldRef<"cc_char_chat_premium", 'String'>
  }
    

  // Custom InputTypes

  /**
   * cc_char_chat_premium findUnique
   */
  export type cc_char_chat_premiumFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_premium
     */
    select?: cc_char_chat_premiumSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_premium to fetch.
     */
    where: cc_char_chat_premiumWhereUniqueInput
  }


  /**
   * cc_char_chat_premium findUniqueOrThrow
   */
  export type cc_char_chat_premiumFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_premium
     */
    select?: cc_char_chat_premiumSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_premium to fetch.
     */
    where: cc_char_chat_premiumWhereUniqueInput
  }


  /**
   * cc_char_chat_premium findFirst
   */
  export type cc_char_chat_premiumFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_premium
     */
    select?: cc_char_chat_premiumSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_premium to fetch.
     */
    where?: cc_char_chat_premiumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_premiums to fetch.
     */
    orderBy?: cc_char_chat_premiumOrderByWithRelationInput | cc_char_chat_premiumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_char_chat_premiums.
     */
    cursor?: cc_char_chat_premiumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_premiums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_premiums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_char_chat_premiums.
     */
    distinct?: Cc_char_chat_premiumScalarFieldEnum | Cc_char_chat_premiumScalarFieldEnum[]
  }


  /**
   * cc_char_chat_premium findFirstOrThrow
   */
  export type cc_char_chat_premiumFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_premium
     */
    select?: cc_char_chat_premiumSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_premium to fetch.
     */
    where?: cc_char_chat_premiumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_premiums to fetch.
     */
    orderBy?: cc_char_chat_premiumOrderByWithRelationInput | cc_char_chat_premiumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_char_chat_premiums.
     */
    cursor?: cc_char_chat_premiumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_premiums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_premiums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_char_chat_premiums.
     */
    distinct?: Cc_char_chat_premiumScalarFieldEnum | Cc_char_chat_premiumScalarFieldEnum[]
  }


  /**
   * cc_char_chat_premium findMany
   */
  export type cc_char_chat_premiumFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_premium
     */
    select?: cc_char_chat_premiumSelect<ExtArgs> | null
    /**
     * Filter, which cc_char_chat_premiums to fetch.
     */
    where?: cc_char_chat_premiumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_char_chat_premiums to fetch.
     */
    orderBy?: cc_char_chat_premiumOrderByWithRelationInput | cc_char_chat_premiumOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_char_chat_premiums.
     */
    cursor?: cc_char_chat_premiumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_char_chat_premiums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_char_chat_premiums.
     */
    skip?: number
    distinct?: Cc_char_chat_premiumScalarFieldEnum | Cc_char_chat_premiumScalarFieldEnum[]
  }


  /**
   * cc_char_chat_premium create
   */
  export type cc_char_chat_premiumCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_premium
     */
    select?: cc_char_chat_premiumSelect<ExtArgs> | null
    /**
     * The data needed to create a cc_char_chat_premium.
     */
    data: XOR<cc_char_chat_premiumCreateInput, cc_char_chat_premiumUncheckedCreateInput>
  }


  /**
   * cc_char_chat_premium createMany
   */
  export type cc_char_chat_premiumCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_char_chat_premiums.
     */
    data: cc_char_chat_premiumCreateManyInput | cc_char_chat_premiumCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cc_char_chat_premium update
   */
  export type cc_char_chat_premiumUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_premium
     */
    select?: cc_char_chat_premiumSelect<ExtArgs> | null
    /**
     * The data needed to update a cc_char_chat_premium.
     */
    data: XOR<cc_char_chat_premiumUpdateInput, cc_char_chat_premiumUncheckedUpdateInput>
    /**
     * Choose, which cc_char_chat_premium to update.
     */
    where: cc_char_chat_premiumWhereUniqueInput
  }


  /**
   * cc_char_chat_premium updateMany
   */
  export type cc_char_chat_premiumUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_char_chat_premiums.
     */
    data: XOR<cc_char_chat_premiumUpdateManyMutationInput, cc_char_chat_premiumUncheckedUpdateManyInput>
    /**
     * Filter which cc_char_chat_premiums to update
     */
    where?: cc_char_chat_premiumWhereInput
  }


  /**
   * cc_char_chat_premium upsert
   */
  export type cc_char_chat_premiumUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_premium
     */
    select?: cc_char_chat_premiumSelect<ExtArgs> | null
    /**
     * The filter to search for the cc_char_chat_premium to update in case it exists.
     */
    where: cc_char_chat_premiumWhereUniqueInput
    /**
     * In case the cc_char_chat_premium found by the `where` argument doesn't exist, create a new cc_char_chat_premium with this data.
     */
    create: XOR<cc_char_chat_premiumCreateInput, cc_char_chat_premiumUncheckedCreateInput>
    /**
     * In case the cc_char_chat_premium was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_char_chat_premiumUpdateInput, cc_char_chat_premiumUncheckedUpdateInput>
  }


  /**
   * cc_char_chat_premium delete
   */
  export type cc_char_chat_premiumDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_premium
     */
    select?: cc_char_chat_premiumSelect<ExtArgs> | null
    /**
     * Filter which cc_char_chat_premium to delete.
     */
    where: cc_char_chat_premiumWhereUniqueInput
  }


  /**
   * cc_char_chat_premium deleteMany
   */
  export type cc_char_chat_premiumDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_char_chat_premiums to delete
     */
    where?: cc_char_chat_premiumWhereInput
  }


  /**
   * cc_char_chat_premium without action
   */
  export type cc_char_chat_premiumDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_char_chat_premium
     */
    select?: cc_char_chat_premiumSelect<ExtArgs> | null
  }



  /**
   * Model cc_user
   */

  export type AggregateCc_user = {
    _count: Cc_userCountAggregateOutputType | null
    _avg: Cc_userAvgAggregateOutputType | null
    _sum: Cc_userSumAggregateOutputType | null
    _min: Cc_userMinAggregateOutputType | null
    _max: Cc_userMaxAggregateOutputType | null
  }

  export type Cc_userAvgAggregateOutputType = {
    USER_NO: number | null
    PREMIUM_REMEMBER_CONV_COUNT: number | null
    PREMIUM_CURRENT_ROOM_NO: number | null
    TODAY_USER_USAGE: number | null
  }

  export type Cc_userSumAggregateOutputType = {
    USER_NO: number | null
    PREMIUM_REMEMBER_CONV_COUNT: number | null
    PREMIUM_CURRENT_ROOM_NO: number | null
    TODAY_USER_USAGE: number | null
  }

  export type Cc_userMinAggregateOutputType = {
    USER_NO: number | null
    USER_NAME: string | null
    REG_ID: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    USER_DISCORD_ID: string | null
    PREMIUM_REMEMBER_CONV_COUNT: number | null
    PREMIUM_CURRENT_ROOM_NO: number | null
    TODAY_USER_USAGE: number | null
  }

  export type Cc_userMaxAggregateOutputType = {
    USER_NO: number | null
    USER_NAME: string | null
    REG_ID: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    USER_DISCORD_ID: string | null
    PREMIUM_REMEMBER_CONV_COUNT: number | null
    PREMIUM_CURRENT_ROOM_NO: number | null
    TODAY_USER_USAGE: number | null
  }

  export type Cc_userCountAggregateOutputType = {
    USER_NO: number
    USER_NAME: number
    REG_ID: number
    REG_DT: number
    UPD_ID: number
    UPD_DT: number
    USER_DISCORD_ID: number
    PREMIUM_REMEMBER_CONV_COUNT: number
    PREMIUM_CURRENT_ROOM_NO: number
    TODAY_USER_USAGE: number
    _all: number
  }


  export type Cc_userAvgAggregateInputType = {
    USER_NO?: true
    PREMIUM_REMEMBER_CONV_COUNT?: true
    PREMIUM_CURRENT_ROOM_NO?: true
    TODAY_USER_USAGE?: true
  }

  export type Cc_userSumAggregateInputType = {
    USER_NO?: true
    PREMIUM_REMEMBER_CONV_COUNT?: true
    PREMIUM_CURRENT_ROOM_NO?: true
    TODAY_USER_USAGE?: true
  }

  export type Cc_userMinAggregateInputType = {
    USER_NO?: true
    USER_NAME?: true
    REG_ID?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    USER_DISCORD_ID?: true
    PREMIUM_REMEMBER_CONV_COUNT?: true
    PREMIUM_CURRENT_ROOM_NO?: true
    TODAY_USER_USAGE?: true
  }

  export type Cc_userMaxAggregateInputType = {
    USER_NO?: true
    USER_NAME?: true
    REG_ID?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    USER_DISCORD_ID?: true
    PREMIUM_REMEMBER_CONV_COUNT?: true
    PREMIUM_CURRENT_ROOM_NO?: true
    TODAY_USER_USAGE?: true
  }

  export type Cc_userCountAggregateInputType = {
    USER_NO?: true
    USER_NAME?: true
    REG_ID?: true
    REG_DT?: true
    UPD_ID?: true
    UPD_DT?: true
    USER_DISCORD_ID?: true
    PREMIUM_REMEMBER_CONV_COUNT?: true
    PREMIUM_CURRENT_ROOM_NO?: true
    TODAY_USER_USAGE?: true
    _all?: true
  }

  export type Cc_userAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_user to aggregate.
     */
    where?: cc_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_users to fetch.
     */
    orderBy?: cc_userOrderByWithRelationInput | cc_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cc_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cc_users
    **/
    _count?: true | Cc_userCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cc_userAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cc_userSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cc_userMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cc_userMaxAggregateInputType
  }

  export type GetCc_userAggregateType<T extends Cc_userAggregateArgs> = {
        [P in keyof T & keyof AggregateCc_user]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCc_user[P]>
      : GetScalarType<T[P], AggregateCc_user[P]>
  }




  export type cc_userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cc_userWhereInput
    orderBy?: cc_userOrderByWithAggregationInput | cc_userOrderByWithAggregationInput[]
    by: Cc_userScalarFieldEnum[] | Cc_userScalarFieldEnum
    having?: cc_userScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cc_userCountAggregateInputType | true
    _avg?: Cc_userAvgAggregateInputType
    _sum?: Cc_userSumAggregateInputType
    _min?: Cc_userMinAggregateInputType
    _max?: Cc_userMaxAggregateInputType
  }

  export type Cc_userGroupByOutputType = {
    USER_NO: number
    USER_NAME: string | null
    REG_ID: string | null
    REG_DT: Date | null
    UPD_ID: string | null
    UPD_DT: Date | null
    USER_DISCORD_ID: string | null
    PREMIUM_REMEMBER_CONV_COUNT: number | null
    PREMIUM_CURRENT_ROOM_NO: number | null
    TODAY_USER_USAGE: number | null
    _count: Cc_userCountAggregateOutputType | null
    _avg: Cc_userAvgAggregateOutputType | null
    _sum: Cc_userSumAggregateOutputType | null
    _min: Cc_userMinAggregateOutputType | null
    _max: Cc_userMaxAggregateOutputType | null
  }

  type GetCc_userGroupByPayload<T extends cc_userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cc_userGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cc_userGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cc_userGroupByOutputType[P]>
            : GetScalarType<T[P], Cc_userGroupByOutputType[P]>
        }
      >
    >


  export type cc_userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    USER_NO?: boolean
    USER_NAME?: boolean
    REG_ID?: boolean
    REG_DT?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    USER_DISCORD_ID?: boolean
    PREMIUM_REMEMBER_CONV_COUNT?: boolean
    PREMIUM_CURRENT_ROOM_NO?: boolean
    TODAY_USER_USAGE?: boolean
  }, ExtArgs["result"]["cc_user"]>

  export type cc_userSelectScalar = {
    USER_NO?: boolean
    USER_NAME?: boolean
    REG_ID?: boolean
    REG_DT?: boolean
    UPD_ID?: boolean
    UPD_DT?: boolean
    USER_DISCORD_ID?: boolean
    PREMIUM_REMEMBER_CONV_COUNT?: boolean
    PREMIUM_CURRENT_ROOM_NO?: boolean
    TODAY_USER_USAGE?: boolean
  }


  export type $cc_userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cc_user"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      USER_NO: number
      USER_NAME: string | null
      REG_ID: string | null
      REG_DT: Date | null
      UPD_ID: string | null
      UPD_DT: Date | null
      USER_DISCORD_ID: string | null
      PREMIUM_REMEMBER_CONV_COUNT: number | null
      PREMIUM_CURRENT_ROOM_NO: number | null
      TODAY_USER_USAGE: number | null
    }, ExtArgs["result"]["cc_user"]>
    composites: {}
  }


  type cc_userGetPayload<S extends boolean | null | undefined | cc_userDefaultArgs> = $Result.GetResult<Prisma.$cc_userPayload, S>

  type cc_userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<cc_userFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: Cc_userCountAggregateInputType | true
    }

  export interface cc_userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cc_user'], meta: { name: 'cc_user' } }
    /**
     * Find zero or one Cc_user that matches the filter.
     * @param {cc_userFindUniqueArgs} args - Arguments to find a Cc_user
     * @example
     * // Get one Cc_user
     * const cc_user = await prisma.cc_user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cc_userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, cc_userFindUniqueArgs<ExtArgs>>
    ): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cc_user that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {cc_userFindUniqueOrThrowArgs} args - Arguments to find a Cc_user
     * @example
     * // Get one Cc_user
     * const cc_user = await prisma.cc_user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cc_userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_userFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cc_user that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userFindFirstArgs} args - Arguments to find a Cc_user
     * @example
     * // Get one Cc_user
     * const cc_user = await prisma.cc_user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cc_userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_userFindFirstArgs<ExtArgs>>
    ): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cc_user that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userFindFirstOrThrowArgs} args - Arguments to find a Cc_user
     * @example
     * // Get one Cc_user
     * const cc_user = await prisma.cc_user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cc_userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_userFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cc_users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cc_users
     * const cc_users = await prisma.cc_user.findMany()
     * 
     * // Get first 10 Cc_users
     * const cc_users = await prisma.cc_user.findMany({ take: 10 })
     * 
     * // Only select the `USER_NO`
     * const cc_userWithUSER_NOOnly = await prisma.cc_user.findMany({ select: { USER_NO: true } })
     * 
    **/
    findMany<T extends cc_userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_userFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cc_user.
     * @param {cc_userCreateArgs} args - Arguments to create a Cc_user.
     * @example
     * // Create one Cc_user
     * const Cc_user = await prisma.cc_user.create({
     *   data: {
     *     // ... data to create a Cc_user
     *   }
     * })
     * 
    **/
    create<T extends cc_userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_userCreateArgs<ExtArgs>>
    ): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cc_users.
     *     @param {cc_userCreateManyArgs} args - Arguments to create many Cc_users.
     *     @example
     *     // Create many Cc_users
     *     const cc_user = await prisma.cc_user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cc_userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_userCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cc_user.
     * @param {cc_userDeleteArgs} args - Arguments to delete one Cc_user.
     * @example
     * // Delete one Cc_user
     * const Cc_user = await prisma.cc_user.delete({
     *   where: {
     *     // ... filter to delete one Cc_user
     *   }
     * })
     * 
    **/
    delete<T extends cc_userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, cc_userDeleteArgs<ExtArgs>>
    ): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cc_user.
     * @param {cc_userUpdateArgs} args - Arguments to update one Cc_user.
     * @example
     * // Update one Cc_user
     * const cc_user = await prisma.cc_user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cc_userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, cc_userUpdateArgs<ExtArgs>>
    ): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cc_users.
     * @param {cc_userDeleteManyArgs} args - Arguments to filter Cc_users to delete.
     * @example
     * // Delete a few Cc_users
     * const { count } = await prisma.cc_user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cc_userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, cc_userDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cc_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cc_users
     * const cc_user = await prisma.cc_user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cc_userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, cc_userUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cc_user.
     * @param {cc_userUpsertArgs} args - Arguments to update or create a Cc_user.
     * @example
     * // Update or create a Cc_user
     * const cc_user = await prisma.cc_user.upsert({
     *   create: {
     *     // ... data to create a Cc_user
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cc_user we want to update
     *   }
     * })
    **/
    upsert<T extends cc_userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, cc_userUpsertArgs<ExtArgs>>
    ): Prisma__cc_userClient<$Result.GetResult<Prisma.$cc_userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cc_users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userCountArgs} args - Arguments to filter Cc_users to count.
     * @example
     * // Count the number of Cc_users
     * const count = await prisma.cc_user.count({
     *   where: {
     *     // ... the filter for the Cc_users we want to count
     *   }
     * })
    **/
    count<T extends cc_userCountArgs>(
      args?: Subset<T, cc_userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cc_userCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cc_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cc_userAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cc_userAggregateArgs>(args: Subset<T, Cc_userAggregateArgs>): Prisma.PrismaPromise<GetCc_userAggregateType<T>>

    /**
     * Group by Cc_user.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cc_userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cc_userGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cc_userGroupByArgs['orderBy'] }
        : { orderBy?: cc_userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cc_userGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCc_userGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cc_user model
   */
  readonly fields: cc_userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cc_user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cc_userClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the cc_user model
   */ 
  interface cc_userFieldRefs {
    readonly USER_NO: FieldRef<"cc_user", 'Int'>
    readonly USER_NAME: FieldRef<"cc_user", 'String'>
    readonly REG_ID: FieldRef<"cc_user", 'String'>
    readonly REG_DT: FieldRef<"cc_user", 'DateTime'>
    readonly UPD_ID: FieldRef<"cc_user", 'String'>
    readonly UPD_DT: FieldRef<"cc_user", 'DateTime'>
    readonly USER_DISCORD_ID: FieldRef<"cc_user", 'String'>
    readonly PREMIUM_REMEMBER_CONV_COUNT: FieldRef<"cc_user", 'Int'>
    readonly PREMIUM_CURRENT_ROOM_NO: FieldRef<"cc_user", 'Int'>
    readonly TODAY_USER_USAGE: FieldRef<"cc_user", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * cc_user findUnique
   */
  export type cc_userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Filter, which cc_user to fetch.
     */
    where: cc_userWhereUniqueInput
  }


  /**
   * cc_user findUniqueOrThrow
   */
  export type cc_userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Filter, which cc_user to fetch.
     */
    where: cc_userWhereUniqueInput
  }


  /**
   * cc_user findFirst
   */
  export type cc_userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Filter, which cc_user to fetch.
     */
    where?: cc_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_users to fetch.
     */
    orderBy?: cc_userOrderByWithRelationInput | cc_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_users.
     */
    cursor?: cc_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_users.
     */
    distinct?: Cc_userScalarFieldEnum | Cc_userScalarFieldEnum[]
  }


  /**
   * cc_user findFirstOrThrow
   */
  export type cc_userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Filter, which cc_user to fetch.
     */
    where?: cc_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_users to fetch.
     */
    orderBy?: cc_userOrderByWithRelationInput | cc_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cc_users.
     */
    cursor?: cc_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cc_users.
     */
    distinct?: Cc_userScalarFieldEnum | Cc_userScalarFieldEnum[]
  }


  /**
   * cc_user findMany
   */
  export type cc_userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Filter, which cc_users to fetch.
     */
    where?: cc_userWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cc_users to fetch.
     */
    orderBy?: cc_userOrderByWithRelationInput | cc_userOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cc_users.
     */
    cursor?: cc_userWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cc_users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cc_users.
     */
    skip?: number
    distinct?: Cc_userScalarFieldEnum | Cc_userScalarFieldEnum[]
  }


  /**
   * cc_user create
   */
  export type cc_userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * The data needed to create a cc_user.
     */
    data?: XOR<cc_userCreateInput, cc_userUncheckedCreateInput>
  }


  /**
   * cc_user createMany
   */
  export type cc_userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cc_users.
     */
    data: cc_userCreateManyInput | cc_userCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * cc_user update
   */
  export type cc_userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * The data needed to update a cc_user.
     */
    data: XOR<cc_userUpdateInput, cc_userUncheckedUpdateInput>
    /**
     * Choose, which cc_user to update.
     */
    where: cc_userWhereUniqueInput
  }


  /**
   * cc_user updateMany
   */
  export type cc_userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cc_users.
     */
    data: XOR<cc_userUpdateManyMutationInput, cc_userUncheckedUpdateManyInput>
    /**
     * Filter which cc_users to update
     */
    where?: cc_userWhereInput
  }


  /**
   * cc_user upsert
   */
  export type cc_userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * The filter to search for the cc_user to update in case it exists.
     */
    where: cc_userWhereUniqueInput
    /**
     * In case the cc_user found by the `where` argument doesn't exist, create a new cc_user with this data.
     */
    create: XOR<cc_userCreateInput, cc_userUncheckedCreateInput>
    /**
     * In case the cc_user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cc_userUpdateInput, cc_userUncheckedUpdateInput>
  }


  /**
   * cc_user delete
   */
  export type cc_userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
    /**
     * Filter which cc_user to delete.
     */
    where: cc_userWhereUniqueInput
  }


  /**
   * cc_user deleteMany
   */
  export type cc_userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cc_users to delete
     */
    where?: cc_userWhereInput
  }


  /**
   * cc_user without action
   */
  export type cc_userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cc_user
     */
    select?: cc_userSelect<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const Cc_charScalarFieldEnum: {
    CHAR_NO: 'CHAR_NO',
    CHAR_NAME: 'CHAR_NAME',
    CHAR_TYPE: 'CHAR_TYPE',
    CHAR_INFO: 'CHAR_INFO',
    UPD_ID: 'UPD_ID',
    UPD_DT: 'UPD_DT',
    REG_ID: 'REG_ID',
    REG_DT: 'REG_DT',
    STD_CODE_NAME: 'STD_CODE_NAME',
    STD_FULL_NAME: 'STD_FULL_NAME',
    STD_INC_ID: 'STD_INC_ID',
    STD_ID: 'STD_ID',
    STD_TOKEN: 'STD_TOKEN',
    STD_ROLE: 'STD_ROLE',
    STD_ERROR_MSG: 'STD_ERROR_MSG',
    STD_STATUS: 'STD_STATUS',
    THUMBNAIL: 'THUMBNAIL',
    TEMPERATURE: 'TEMPERATURE',
    F_PENALTY: 'F_PENALTY',
    P_PENALTY: 'P_PENALTY',
    STD_SHORT_NAME: 'STD_SHORT_NAME'
  };

  export type Cc_charScalarFieldEnum = (typeof Cc_charScalarFieldEnum)[keyof typeof Cc_charScalarFieldEnum]


  export const Cc_char_chatScalarFieldEnum: {
    CHAT_NO: 'CHAT_NO',
    CHAR_NO: 'CHAR_NO',
    CHAT_ROOM_NO: 'CHAT_ROOM_NO',
    IS_LEARN: 'IS_LEARN',
    REG_DT: 'REG_DT',
    UPD_ID: 'UPD_ID',
    UPD_DT: 'UPD_DT',
    CHAT_CONT: 'CHAT_CONT',
    REG_ID: 'REG_ID'
  };

  export type Cc_char_chatScalarFieldEnum = (typeof Cc_char_chatScalarFieldEnum)[keyof typeof Cc_char_chatScalarFieldEnum]


  export const Cc_char_chat_for_learnScalarFieldEnum: {
    CHAT_LEARN_NO: 'CHAT_LEARN_NO',
    CHAT_CONT: 'CHAT_CONT',
    REG_ID: 'REG_ID',
    REG_DT: 'REG_DT',
    UPD_ID: 'UPD_ID',
    UPD_DT: 'UPD_DT',
    CHAR_NO: 'CHAR_NO',
    CHAT_ROOM_NO: 'CHAT_ROOM_NO'
  };

  export type Cc_char_chat_for_learnScalarFieldEnum = (typeof Cc_char_chat_for_learnScalarFieldEnum)[keyof typeof Cc_char_chat_for_learnScalarFieldEnum]


  export const Cc_char_chat_logScalarFieldEnum: {
    CHAT_LOG_NO: 'CHAT_LOG_NO',
    CHAR_NO: 'CHAR_NO',
    CHAT_ROOM_NO: 'CHAT_ROOM_NO',
    IS_LEARN: 'IS_LEARN',
    REG_DT: 'REG_DT',
    UPD_ID: 'UPD_ID',
    UPD_DT: 'UPD_DT',
    CHAT_CONT: 'CHAT_CONT',
    REG_ID: 'REG_ID'
  };

  export type Cc_char_chat_logScalarFieldEnum = (typeof Cc_char_chat_logScalarFieldEnum)[keyof typeof Cc_char_chat_logScalarFieldEnum]


  export const Cc_char_chat_premiumScalarFieldEnum: {
    CHAT_NO: 'CHAT_NO',
    CHAR_NO: 'CHAR_NO',
    CHAT_ROOM_NO: 'CHAT_ROOM_NO',
    IS_LEARN: 'IS_LEARN',
    REG_DT: 'REG_DT',
    UPD_ID: 'UPD_ID',
    UPD_DT: 'UPD_DT',
    CHAT_CONT: 'CHAT_CONT',
    REG_ID: 'REG_ID'
  };

  export type Cc_char_chat_premiumScalarFieldEnum = (typeof Cc_char_chat_premiumScalarFieldEnum)[keyof typeof Cc_char_chat_premiumScalarFieldEnum]


  export const Cc_userScalarFieldEnum: {
    USER_NO: 'USER_NO',
    USER_NAME: 'USER_NAME',
    REG_ID: 'REG_ID',
    REG_DT: 'REG_DT',
    UPD_ID: 'UPD_ID',
    UPD_DT: 'UPD_DT',
    USER_DISCORD_ID: 'USER_DISCORD_ID',
    PREMIUM_REMEMBER_CONV_COUNT: 'PREMIUM_REMEMBER_CONV_COUNT',
    PREMIUM_CURRENT_ROOM_NO: 'PREMIUM_CURRENT_ROOM_NO',
    TODAY_USER_USAGE: 'TODAY_USER_USAGE'
  };

  export type Cc_userScalarFieldEnum = (typeof Cc_userScalarFieldEnum)[keyof typeof Cc_userScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type cc_charWhereInput = {
    AND?: cc_charWhereInput | cc_charWhereInput[]
    OR?: cc_charWhereInput[]
    NOT?: cc_charWhereInput | cc_charWhereInput[]
    CHAR_NO?: IntFilter<"cc_char"> | number
    CHAR_NAME?: StringNullableFilter<"cc_char"> | string | null
    CHAR_TYPE?: StringNullableFilter<"cc_char"> | string | null
    CHAR_INFO?: StringNullableFilter<"cc_char"> | string | null
    UPD_ID?: StringNullableFilter<"cc_char"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_char"> | Date | string | null
    REG_ID?: StringNullableFilter<"cc_char"> | string | null
    REG_DT?: DateTimeNullableFilter<"cc_char"> | Date | string | null
    STD_CODE_NAME?: StringNullableFilter<"cc_char"> | string | null
    STD_FULL_NAME?: StringNullableFilter<"cc_char"> | string | null
    STD_INC_ID?: StringNullableFilter<"cc_char"> | string | null
    STD_ID?: StringNullableFilter<"cc_char"> | string | null
    STD_TOKEN?: StringNullableFilter<"cc_char"> | string | null
    STD_ROLE?: StringNullableFilter<"cc_char"> | string | null
    STD_ERROR_MSG?: StringNullableFilter<"cc_char"> | string | null
    STD_STATUS?: StringNullableFilter<"cc_char"> | string | null
    THUMBNAIL?: StringNullableFilter<"cc_char"> | string | null
    TEMPERATURE?: FloatNullableFilter<"cc_char"> | number | null
    F_PENALTY?: FloatNullableFilter<"cc_char"> | number | null
    P_PENALTY?: FloatNullableFilter<"cc_char"> | number | null
    STD_SHORT_NAME?: StringNullableFilter<"cc_char"> | string | null
  }

  export type cc_charOrderByWithRelationInput = {
    CHAR_NO?: SortOrder
    CHAR_NAME?: SortOrderInput | SortOrder
    CHAR_TYPE?: SortOrderInput | SortOrder
    CHAR_INFO?: SortOrderInput | SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
    REG_DT?: SortOrderInput | SortOrder
    STD_CODE_NAME?: SortOrderInput | SortOrder
    STD_FULL_NAME?: SortOrderInput | SortOrder
    STD_INC_ID?: SortOrderInput | SortOrder
    STD_ID?: SortOrderInput | SortOrder
    STD_TOKEN?: SortOrderInput | SortOrder
    STD_ROLE?: SortOrderInput | SortOrder
    STD_ERROR_MSG?: SortOrderInput | SortOrder
    STD_STATUS?: SortOrderInput | SortOrder
    THUMBNAIL?: SortOrderInput | SortOrder
    TEMPERATURE?: SortOrderInput | SortOrder
    F_PENALTY?: SortOrderInput | SortOrder
    P_PENALTY?: SortOrderInput | SortOrder
    STD_SHORT_NAME?: SortOrderInput | SortOrder
  }

  export type cc_charWhereUniqueInput = Prisma.AtLeast<{
    CHAR_NO?: number
    AND?: cc_charWhereInput | cc_charWhereInput[]
    OR?: cc_charWhereInput[]
    NOT?: cc_charWhereInput | cc_charWhereInput[]
    CHAR_NAME?: StringNullableFilter<"cc_char"> | string | null
    CHAR_TYPE?: StringNullableFilter<"cc_char"> | string | null
    CHAR_INFO?: StringNullableFilter<"cc_char"> | string | null
    UPD_ID?: StringNullableFilter<"cc_char"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_char"> | Date | string | null
    REG_ID?: StringNullableFilter<"cc_char"> | string | null
    REG_DT?: DateTimeNullableFilter<"cc_char"> | Date | string | null
    STD_CODE_NAME?: StringNullableFilter<"cc_char"> | string | null
    STD_FULL_NAME?: StringNullableFilter<"cc_char"> | string | null
    STD_INC_ID?: StringNullableFilter<"cc_char"> | string | null
    STD_ID?: StringNullableFilter<"cc_char"> | string | null
    STD_TOKEN?: StringNullableFilter<"cc_char"> | string | null
    STD_ROLE?: StringNullableFilter<"cc_char"> | string | null
    STD_ERROR_MSG?: StringNullableFilter<"cc_char"> | string | null
    STD_STATUS?: StringNullableFilter<"cc_char"> | string | null
    THUMBNAIL?: StringNullableFilter<"cc_char"> | string | null
    TEMPERATURE?: FloatNullableFilter<"cc_char"> | number | null
    F_PENALTY?: FloatNullableFilter<"cc_char"> | number | null
    P_PENALTY?: FloatNullableFilter<"cc_char"> | number | null
    STD_SHORT_NAME?: StringNullableFilter<"cc_char"> | string | null
  }, "CHAR_NO">

  export type cc_charOrderByWithAggregationInput = {
    CHAR_NO?: SortOrder
    CHAR_NAME?: SortOrderInput | SortOrder
    CHAR_TYPE?: SortOrderInput | SortOrder
    CHAR_INFO?: SortOrderInput | SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
    REG_DT?: SortOrderInput | SortOrder
    STD_CODE_NAME?: SortOrderInput | SortOrder
    STD_FULL_NAME?: SortOrderInput | SortOrder
    STD_INC_ID?: SortOrderInput | SortOrder
    STD_ID?: SortOrderInput | SortOrder
    STD_TOKEN?: SortOrderInput | SortOrder
    STD_ROLE?: SortOrderInput | SortOrder
    STD_ERROR_MSG?: SortOrderInput | SortOrder
    STD_STATUS?: SortOrderInput | SortOrder
    THUMBNAIL?: SortOrderInput | SortOrder
    TEMPERATURE?: SortOrderInput | SortOrder
    F_PENALTY?: SortOrderInput | SortOrder
    P_PENALTY?: SortOrderInput | SortOrder
    STD_SHORT_NAME?: SortOrderInput | SortOrder
    _count?: cc_charCountOrderByAggregateInput
    _avg?: cc_charAvgOrderByAggregateInput
    _max?: cc_charMaxOrderByAggregateInput
    _min?: cc_charMinOrderByAggregateInput
    _sum?: cc_charSumOrderByAggregateInput
  }

  export type cc_charScalarWhereWithAggregatesInput = {
    AND?: cc_charScalarWhereWithAggregatesInput | cc_charScalarWhereWithAggregatesInput[]
    OR?: cc_charScalarWhereWithAggregatesInput[]
    NOT?: cc_charScalarWhereWithAggregatesInput | cc_charScalarWhereWithAggregatesInput[]
    CHAR_NO?: IntWithAggregatesFilter<"cc_char"> | number
    CHAR_NAME?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    CHAR_TYPE?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    CHAR_INFO?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    UPD_ID?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    UPD_DT?: DateTimeNullableWithAggregatesFilter<"cc_char"> | Date | string | null
    REG_ID?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    REG_DT?: DateTimeNullableWithAggregatesFilter<"cc_char"> | Date | string | null
    STD_CODE_NAME?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    STD_FULL_NAME?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    STD_INC_ID?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    STD_ID?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    STD_TOKEN?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    STD_ROLE?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    STD_ERROR_MSG?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    STD_STATUS?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    THUMBNAIL?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
    TEMPERATURE?: FloatNullableWithAggregatesFilter<"cc_char"> | number | null
    F_PENALTY?: FloatNullableWithAggregatesFilter<"cc_char"> | number | null
    P_PENALTY?: FloatNullableWithAggregatesFilter<"cc_char"> | number | null
    STD_SHORT_NAME?: StringNullableWithAggregatesFilter<"cc_char"> | string | null
  }

  export type cc_char_chatWhereInput = {
    AND?: cc_char_chatWhereInput | cc_char_chatWhereInput[]
    OR?: cc_char_chatWhereInput[]
    NOT?: cc_char_chatWhereInput | cc_char_chatWhereInput[]
    CHAT_NO?: IntFilter<"cc_char_chat"> | number
    CHAR_NO?: IntFilter<"cc_char_chat"> | number
    CHAT_ROOM_NO?: IntFilter<"cc_char_chat"> | number
    IS_LEARN?: StringNullableFilter<"cc_char_chat"> | string | null
    REG_DT?: DateTimeNullableFilter<"cc_char_chat"> | Date | string | null
    UPD_ID?: StringNullableFilter<"cc_char_chat"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_char_chat"> | Date | string | null
    CHAT_CONT?: StringNullableFilter<"cc_char_chat"> | string | null
    REG_ID?: StringNullableFilter<"cc_char_chat"> | string | null
  }

  export type cc_char_chatOrderByWithRelationInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrderInput | SortOrder
    REG_DT?: SortOrderInput | SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    CHAT_CONT?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
  }

  export type cc_char_chatWhereUniqueInput = Prisma.AtLeast<{
    CHAT_NO?: number
    AND?: cc_char_chatWhereInput | cc_char_chatWhereInput[]
    OR?: cc_char_chatWhereInput[]
    NOT?: cc_char_chatWhereInput | cc_char_chatWhereInput[]
    CHAR_NO?: IntFilter<"cc_char_chat"> | number
    CHAT_ROOM_NO?: IntFilter<"cc_char_chat"> | number
    IS_LEARN?: StringNullableFilter<"cc_char_chat"> | string | null
    REG_DT?: DateTimeNullableFilter<"cc_char_chat"> | Date | string | null
    UPD_ID?: StringNullableFilter<"cc_char_chat"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_char_chat"> | Date | string | null
    CHAT_CONT?: StringNullableFilter<"cc_char_chat"> | string | null
    REG_ID?: StringNullableFilter<"cc_char_chat"> | string | null
  }, "CHAT_NO">

  export type cc_char_chatOrderByWithAggregationInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrderInput | SortOrder
    REG_DT?: SortOrderInput | SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    CHAT_CONT?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
    _count?: cc_char_chatCountOrderByAggregateInput
    _avg?: cc_char_chatAvgOrderByAggregateInput
    _max?: cc_char_chatMaxOrderByAggregateInput
    _min?: cc_char_chatMinOrderByAggregateInput
    _sum?: cc_char_chatSumOrderByAggregateInput
  }

  export type cc_char_chatScalarWhereWithAggregatesInput = {
    AND?: cc_char_chatScalarWhereWithAggregatesInput | cc_char_chatScalarWhereWithAggregatesInput[]
    OR?: cc_char_chatScalarWhereWithAggregatesInput[]
    NOT?: cc_char_chatScalarWhereWithAggregatesInput | cc_char_chatScalarWhereWithAggregatesInput[]
    CHAT_NO?: IntWithAggregatesFilter<"cc_char_chat"> | number
    CHAR_NO?: IntWithAggregatesFilter<"cc_char_chat"> | number
    CHAT_ROOM_NO?: IntWithAggregatesFilter<"cc_char_chat"> | number
    IS_LEARN?: StringNullableWithAggregatesFilter<"cc_char_chat"> | string | null
    REG_DT?: DateTimeNullableWithAggregatesFilter<"cc_char_chat"> | Date | string | null
    UPD_ID?: StringNullableWithAggregatesFilter<"cc_char_chat"> | string | null
    UPD_DT?: DateTimeNullableWithAggregatesFilter<"cc_char_chat"> | Date | string | null
    CHAT_CONT?: StringNullableWithAggregatesFilter<"cc_char_chat"> | string | null
    REG_ID?: StringNullableWithAggregatesFilter<"cc_char_chat"> | string | null
  }

  export type cc_char_chat_for_learnWhereInput = {
    AND?: cc_char_chat_for_learnWhereInput | cc_char_chat_for_learnWhereInput[]
    OR?: cc_char_chat_for_learnWhereInput[]
    NOT?: cc_char_chat_for_learnWhereInput | cc_char_chat_for_learnWhereInput[]
    CHAT_LEARN_NO?: IntFilter<"cc_char_chat_for_learn"> | number
    CHAT_CONT?: StringNullableFilter<"cc_char_chat_for_learn"> | string | null
    REG_ID?: StringNullableFilter<"cc_char_chat_for_learn"> | string | null
    REG_DT?: DateTimeNullableFilter<"cc_char_chat_for_learn"> | Date | string | null
    UPD_ID?: StringNullableFilter<"cc_char_chat_for_learn"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_char_chat_for_learn"> | Date | string | null
    CHAR_NO?: IntFilter<"cc_char_chat_for_learn"> | number
    CHAT_ROOM_NO?: IntFilter<"cc_char_chat_for_learn"> | number
  }

  export type cc_char_chat_for_learnOrderByWithRelationInput = {
    CHAT_LEARN_NO?: SortOrder
    CHAT_CONT?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
    REG_DT?: SortOrderInput | SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
  }

  export type cc_char_chat_for_learnWhereUniqueInput = Prisma.AtLeast<{
    CHAT_LEARN_NO?: number
    AND?: cc_char_chat_for_learnWhereInput | cc_char_chat_for_learnWhereInput[]
    OR?: cc_char_chat_for_learnWhereInput[]
    NOT?: cc_char_chat_for_learnWhereInput | cc_char_chat_for_learnWhereInput[]
    CHAT_CONT?: StringNullableFilter<"cc_char_chat_for_learn"> | string | null
    REG_ID?: StringNullableFilter<"cc_char_chat_for_learn"> | string | null
    REG_DT?: DateTimeNullableFilter<"cc_char_chat_for_learn"> | Date | string | null
    UPD_ID?: StringNullableFilter<"cc_char_chat_for_learn"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_char_chat_for_learn"> | Date | string | null
    CHAR_NO?: IntFilter<"cc_char_chat_for_learn"> | number
    CHAT_ROOM_NO?: IntFilter<"cc_char_chat_for_learn"> | number
  }, "CHAT_LEARN_NO">

  export type cc_char_chat_for_learnOrderByWithAggregationInput = {
    CHAT_LEARN_NO?: SortOrder
    CHAT_CONT?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
    REG_DT?: SortOrderInput | SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    _count?: cc_char_chat_for_learnCountOrderByAggregateInput
    _avg?: cc_char_chat_for_learnAvgOrderByAggregateInput
    _max?: cc_char_chat_for_learnMaxOrderByAggregateInput
    _min?: cc_char_chat_for_learnMinOrderByAggregateInput
    _sum?: cc_char_chat_for_learnSumOrderByAggregateInput
  }

  export type cc_char_chat_for_learnScalarWhereWithAggregatesInput = {
    AND?: cc_char_chat_for_learnScalarWhereWithAggregatesInput | cc_char_chat_for_learnScalarWhereWithAggregatesInput[]
    OR?: cc_char_chat_for_learnScalarWhereWithAggregatesInput[]
    NOT?: cc_char_chat_for_learnScalarWhereWithAggregatesInput | cc_char_chat_for_learnScalarWhereWithAggregatesInput[]
    CHAT_LEARN_NO?: IntWithAggregatesFilter<"cc_char_chat_for_learn"> | number
    CHAT_CONT?: StringNullableWithAggregatesFilter<"cc_char_chat_for_learn"> | string | null
    REG_ID?: StringNullableWithAggregatesFilter<"cc_char_chat_for_learn"> | string | null
    REG_DT?: DateTimeNullableWithAggregatesFilter<"cc_char_chat_for_learn"> | Date | string | null
    UPD_ID?: StringNullableWithAggregatesFilter<"cc_char_chat_for_learn"> | string | null
    UPD_DT?: DateTimeNullableWithAggregatesFilter<"cc_char_chat_for_learn"> | Date | string | null
    CHAR_NO?: IntWithAggregatesFilter<"cc_char_chat_for_learn"> | number
    CHAT_ROOM_NO?: IntWithAggregatesFilter<"cc_char_chat_for_learn"> | number
  }

  export type cc_char_chat_logWhereInput = {
    AND?: cc_char_chat_logWhereInput | cc_char_chat_logWhereInput[]
    OR?: cc_char_chat_logWhereInput[]
    NOT?: cc_char_chat_logWhereInput | cc_char_chat_logWhereInput[]
    CHAT_LOG_NO?: IntFilter<"cc_char_chat_log"> | number
    CHAR_NO?: IntFilter<"cc_char_chat_log"> | number
    CHAT_ROOM_NO?: IntFilter<"cc_char_chat_log"> | number
    IS_LEARN?: StringNullableFilter<"cc_char_chat_log"> | string | null
    REG_DT?: DateTimeFilter<"cc_char_chat_log"> | Date | string
    UPD_ID?: StringNullableFilter<"cc_char_chat_log"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_char_chat_log"> | Date | string | null
    CHAT_CONT?: StringNullableFilter<"cc_char_chat_log"> | string | null
    REG_ID?: StringNullableFilter<"cc_char_chat_log"> | string | null
  }

  export type cc_char_chat_logOrderByWithRelationInput = {
    CHAT_LOG_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrderInput | SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    CHAT_CONT?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
  }

  export type cc_char_chat_logWhereUniqueInput = Prisma.AtLeast<{
    CHAT_LOG_NO?: number
    AND?: cc_char_chat_logWhereInput | cc_char_chat_logWhereInput[]
    OR?: cc_char_chat_logWhereInput[]
    NOT?: cc_char_chat_logWhereInput | cc_char_chat_logWhereInput[]
    CHAR_NO?: IntFilter<"cc_char_chat_log"> | number
    CHAT_ROOM_NO?: IntFilter<"cc_char_chat_log"> | number
    IS_LEARN?: StringNullableFilter<"cc_char_chat_log"> | string | null
    REG_DT?: DateTimeFilter<"cc_char_chat_log"> | Date | string
    UPD_ID?: StringNullableFilter<"cc_char_chat_log"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_char_chat_log"> | Date | string | null
    CHAT_CONT?: StringNullableFilter<"cc_char_chat_log"> | string | null
    REG_ID?: StringNullableFilter<"cc_char_chat_log"> | string | null
  }, "CHAT_LOG_NO">

  export type cc_char_chat_logOrderByWithAggregationInput = {
    CHAT_LOG_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrderInput | SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    CHAT_CONT?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
    _count?: cc_char_chat_logCountOrderByAggregateInput
    _avg?: cc_char_chat_logAvgOrderByAggregateInput
    _max?: cc_char_chat_logMaxOrderByAggregateInput
    _min?: cc_char_chat_logMinOrderByAggregateInput
    _sum?: cc_char_chat_logSumOrderByAggregateInput
  }

  export type cc_char_chat_logScalarWhereWithAggregatesInput = {
    AND?: cc_char_chat_logScalarWhereWithAggregatesInput | cc_char_chat_logScalarWhereWithAggregatesInput[]
    OR?: cc_char_chat_logScalarWhereWithAggregatesInput[]
    NOT?: cc_char_chat_logScalarWhereWithAggregatesInput | cc_char_chat_logScalarWhereWithAggregatesInput[]
    CHAT_LOG_NO?: IntWithAggregatesFilter<"cc_char_chat_log"> | number
    CHAR_NO?: IntWithAggregatesFilter<"cc_char_chat_log"> | number
    CHAT_ROOM_NO?: IntWithAggregatesFilter<"cc_char_chat_log"> | number
    IS_LEARN?: StringNullableWithAggregatesFilter<"cc_char_chat_log"> | string | null
    REG_DT?: DateTimeWithAggregatesFilter<"cc_char_chat_log"> | Date | string
    UPD_ID?: StringNullableWithAggregatesFilter<"cc_char_chat_log"> | string | null
    UPD_DT?: DateTimeNullableWithAggregatesFilter<"cc_char_chat_log"> | Date | string | null
    CHAT_CONT?: StringNullableWithAggregatesFilter<"cc_char_chat_log"> | string | null
    REG_ID?: StringNullableWithAggregatesFilter<"cc_char_chat_log"> | string | null
  }

  export type cc_char_chat_premiumWhereInput = {
    AND?: cc_char_chat_premiumWhereInput | cc_char_chat_premiumWhereInput[]
    OR?: cc_char_chat_premiumWhereInput[]
    NOT?: cc_char_chat_premiumWhereInput | cc_char_chat_premiumWhereInput[]
    CHAT_NO?: IntFilter<"cc_char_chat_premium"> | number
    CHAR_NO?: StringFilter<"cc_char_chat_premium"> | string
    CHAT_ROOM_NO?: StringFilter<"cc_char_chat_premium"> | string
    IS_LEARN?: StringNullableFilter<"cc_char_chat_premium"> | string | null
    REG_DT?: DateTimeNullableFilter<"cc_char_chat_premium"> | Date | string | null
    UPD_ID?: StringNullableFilter<"cc_char_chat_premium"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_char_chat_premium"> | Date | string | null
    CHAT_CONT?: StringNullableFilter<"cc_char_chat_premium"> | string | null
    REG_ID?: StringNullableFilter<"cc_char_chat_premium"> | string | null
  }

  export type cc_char_chat_premiumOrderByWithRelationInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrderInput | SortOrder
    REG_DT?: SortOrderInput | SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    CHAT_CONT?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
  }

  export type cc_char_chat_premiumWhereUniqueInput = Prisma.AtLeast<{
    CHAT_NO?: number
    AND?: cc_char_chat_premiumWhereInput | cc_char_chat_premiumWhereInput[]
    OR?: cc_char_chat_premiumWhereInput[]
    NOT?: cc_char_chat_premiumWhereInput | cc_char_chat_premiumWhereInput[]
    CHAR_NO?: StringFilter<"cc_char_chat_premium"> | string
    CHAT_ROOM_NO?: StringFilter<"cc_char_chat_premium"> | string
    IS_LEARN?: StringNullableFilter<"cc_char_chat_premium"> | string | null
    REG_DT?: DateTimeNullableFilter<"cc_char_chat_premium"> | Date | string | null
    UPD_ID?: StringNullableFilter<"cc_char_chat_premium"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_char_chat_premium"> | Date | string | null
    CHAT_CONT?: StringNullableFilter<"cc_char_chat_premium"> | string | null
    REG_ID?: StringNullableFilter<"cc_char_chat_premium"> | string | null
  }, "CHAT_NO">

  export type cc_char_chat_premiumOrderByWithAggregationInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrderInput | SortOrder
    REG_DT?: SortOrderInput | SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    CHAT_CONT?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
    _count?: cc_char_chat_premiumCountOrderByAggregateInput
    _avg?: cc_char_chat_premiumAvgOrderByAggregateInput
    _max?: cc_char_chat_premiumMaxOrderByAggregateInput
    _min?: cc_char_chat_premiumMinOrderByAggregateInput
    _sum?: cc_char_chat_premiumSumOrderByAggregateInput
  }

  export type cc_char_chat_premiumScalarWhereWithAggregatesInput = {
    AND?: cc_char_chat_premiumScalarWhereWithAggregatesInput | cc_char_chat_premiumScalarWhereWithAggregatesInput[]
    OR?: cc_char_chat_premiumScalarWhereWithAggregatesInput[]
    NOT?: cc_char_chat_premiumScalarWhereWithAggregatesInput | cc_char_chat_premiumScalarWhereWithAggregatesInput[]
    CHAT_NO?: IntWithAggregatesFilter<"cc_char_chat_premium"> | number
    CHAR_NO?: StringWithAggregatesFilter<"cc_char_chat_premium"> | string
    CHAT_ROOM_NO?: StringWithAggregatesFilter<"cc_char_chat_premium"> | string
    IS_LEARN?: StringNullableWithAggregatesFilter<"cc_char_chat_premium"> | string | null
    REG_DT?: DateTimeNullableWithAggregatesFilter<"cc_char_chat_premium"> | Date | string | null
    UPD_ID?: StringNullableWithAggregatesFilter<"cc_char_chat_premium"> | string | null
    UPD_DT?: DateTimeNullableWithAggregatesFilter<"cc_char_chat_premium"> | Date | string | null
    CHAT_CONT?: StringNullableWithAggregatesFilter<"cc_char_chat_premium"> | string | null
    REG_ID?: StringNullableWithAggregatesFilter<"cc_char_chat_premium"> | string | null
  }

  export type cc_userWhereInput = {
    AND?: cc_userWhereInput | cc_userWhereInput[]
    OR?: cc_userWhereInput[]
    NOT?: cc_userWhereInput | cc_userWhereInput[]
    USER_NO?: IntFilter<"cc_user"> | number
    USER_NAME?: StringNullableFilter<"cc_user"> | string | null
    REG_ID?: StringNullableFilter<"cc_user"> | string | null
    REG_DT?: DateTimeNullableFilter<"cc_user"> | Date | string | null
    UPD_ID?: StringNullableFilter<"cc_user"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_user"> | Date | string | null
    USER_DISCORD_ID?: StringNullableFilter<"cc_user"> | string | null
    PREMIUM_REMEMBER_CONV_COUNT?: IntNullableFilter<"cc_user"> | number | null
    PREMIUM_CURRENT_ROOM_NO?: IntNullableFilter<"cc_user"> | number | null
    TODAY_USER_USAGE?: IntNullableFilter<"cc_user"> | number | null
  }

  export type cc_userOrderByWithRelationInput = {
    USER_NO?: SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
    REG_DT?: SortOrderInput | SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    USER_DISCORD_ID?: SortOrderInput | SortOrder
    PREMIUM_REMEMBER_CONV_COUNT?: SortOrderInput | SortOrder
    PREMIUM_CURRENT_ROOM_NO?: SortOrderInput | SortOrder
    TODAY_USER_USAGE?: SortOrderInput | SortOrder
  }

  export type cc_userWhereUniqueInput = Prisma.AtLeast<{
    USER_NO?: number
    AND?: cc_userWhereInput | cc_userWhereInput[]
    OR?: cc_userWhereInput[]
    NOT?: cc_userWhereInput | cc_userWhereInput[]
    USER_NAME?: StringNullableFilter<"cc_user"> | string | null
    REG_ID?: StringNullableFilter<"cc_user"> | string | null
    REG_DT?: DateTimeNullableFilter<"cc_user"> | Date | string | null
    UPD_ID?: StringNullableFilter<"cc_user"> | string | null
    UPD_DT?: DateTimeNullableFilter<"cc_user"> | Date | string | null
    USER_DISCORD_ID?: StringNullableFilter<"cc_user"> | string | null
    PREMIUM_REMEMBER_CONV_COUNT?: IntNullableFilter<"cc_user"> | number | null
    PREMIUM_CURRENT_ROOM_NO?: IntNullableFilter<"cc_user"> | number | null
    TODAY_USER_USAGE?: IntNullableFilter<"cc_user"> | number | null
  }, "USER_NO">

  export type cc_userOrderByWithAggregationInput = {
    USER_NO?: SortOrder
    USER_NAME?: SortOrderInput | SortOrder
    REG_ID?: SortOrderInput | SortOrder
    REG_DT?: SortOrderInput | SortOrder
    UPD_ID?: SortOrderInput | SortOrder
    UPD_DT?: SortOrderInput | SortOrder
    USER_DISCORD_ID?: SortOrderInput | SortOrder
    PREMIUM_REMEMBER_CONV_COUNT?: SortOrderInput | SortOrder
    PREMIUM_CURRENT_ROOM_NO?: SortOrderInput | SortOrder
    TODAY_USER_USAGE?: SortOrderInput | SortOrder
    _count?: cc_userCountOrderByAggregateInput
    _avg?: cc_userAvgOrderByAggregateInput
    _max?: cc_userMaxOrderByAggregateInput
    _min?: cc_userMinOrderByAggregateInput
    _sum?: cc_userSumOrderByAggregateInput
  }

  export type cc_userScalarWhereWithAggregatesInput = {
    AND?: cc_userScalarWhereWithAggregatesInput | cc_userScalarWhereWithAggregatesInput[]
    OR?: cc_userScalarWhereWithAggregatesInput[]
    NOT?: cc_userScalarWhereWithAggregatesInput | cc_userScalarWhereWithAggregatesInput[]
    USER_NO?: IntWithAggregatesFilter<"cc_user"> | number
    USER_NAME?: StringNullableWithAggregatesFilter<"cc_user"> | string | null
    REG_ID?: StringNullableWithAggregatesFilter<"cc_user"> | string | null
    REG_DT?: DateTimeNullableWithAggregatesFilter<"cc_user"> | Date | string | null
    UPD_ID?: StringNullableWithAggregatesFilter<"cc_user"> | string | null
    UPD_DT?: DateTimeNullableWithAggregatesFilter<"cc_user"> | Date | string | null
    USER_DISCORD_ID?: StringNullableWithAggregatesFilter<"cc_user"> | string | null
    PREMIUM_REMEMBER_CONV_COUNT?: IntNullableWithAggregatesFilter<"cc_user"> | number | null
    PREMIUM_CURRENT_ROOM_NO?: IntNullableWithAggregatesFilter<"cc_user"> | number | null
    TODAY_USER_USAGE?: IntNullableWithAggregatesFilter<"cc_user"> | number | null
  }

  export type cc_charCreateInput = {
    CHAR_NAME?: string | null
    CHAR_TYPE?: string | null
    CHAR_INFO?: string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    REG_ID?: string | null
    REG_DT?: Date | string | null
    STD_CODE_NAME?: string | null
    STD_FULL_NAME?: string | null
    STD_INC_ID?: string | null
    STD_ID?: string | null
    STD_TOKEN?: string | null
    STD_ROLE?: string | null
    STD_ERROR_MSG?: string | null
    STD_STATUS?: string | null
    THUMBNAIL?: string | null
    TEMPERATURE?: number | null
    F_PENALTY?: number | null
    P_PENALTY?: number | null
    STD_SHORT_NAME?: string | null
  }

  export type cc_charUncheckedCreateInput = {
    CHAR_NO?: number
    CHAR_NAME?: string | null
    CHAR_TYPE?: string | null
    CHAR_INFO?: string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    REG_ID?: string | null
    REG_DT?: Date | string | null
    STD_CODE_NAME?: string | null
    STD_FULL_NAME?: string | null
    STD_INC_ID?: string | null
    STD_ID?: string | null
    STD_TOKEN?: string | null
    STD_ROLE?: string | null
    STD_ERROR_MSG?: string | null
    STD_STATUS?: string | null
    THUMBNAIL?: string | null
    TEMPERATURE?: number | null
    F_PENALTY?: number | null
    P_PENALTY?: number | null
    STD_SHORT_NAME?: string | null
  }

  export type cc_charUpdateInput = {
    CHAR_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    CHAR_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    CHAR_INFO?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STD_CODE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STD_FULL_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STD_INC_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STD_TOKEN?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ROLE?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ERROR_MSG?: NullableStringFieldUpdateOperationsInput | string | null
    STD_STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    THUMBNAIL?: NullableStringFieldUpdateOperationsInput | string | null
    TEMPERATURE?: NullableFloatFieldUpdateOperationsInput | number | null
    F_PENALTY?: NullableFloatFieldUpdateOperationsInput | number | null
    P_PENALTY?: NullableFloatFieldUpdateOperationsInput | number | null
    STD_SHORT_NAME?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_charUncheckedUpdateInput = {
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAR_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    CHAR_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    CHAR_INFO?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STD_CODE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STD_FULL_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STD_INC_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STD_TOKEN?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ROLE?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ERROR_MSG?: NullableStringFieldUpdateOperationsInput | string | null
    STD_STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    THUMBNAIL?: NullableStringFieldUpdateOperationsInput | string | null
    TEMPERATURE?: NullableFloatFieldUpdateOperationsInput | number | null
    F_PENALTY?: NullableFloatFieldUpdateOperationsInput | number | null
    P_PENALTY?: NullableFloatFieldUpdateOperationsInput | number | null
    STD_SHORT_NAME?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_charCreateManyInput = {
    CHAR_NO?: number
    CHAR_NAME?: string | null
    CHAR_TYPE?: string | null
    CHAR_INFO?: string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    REG_ID?: string | null
    REG_DT?: Date | string | null
    STD_CODE_NAME?: string | null
    STD_FULL_NAME?: string | null
    STD_INC_ID?: string | null
    STD_ID?: string | null
    STD_TOKEN?: string | null
    STD_ROLE?: string | null
    STD_ERROR_MSG?: string | null
    STD_STATUS?: string | null
    THUMBNAIL?: string | null
    TEMPERATURE?: number | null
    F_PENALTY?: number | null
    P_PENALTY?: number | null
    STD_SHORT_NAME?: string | null
  }

  export type cc_charUpdateManyMutationInput = {
    CHAR_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    CHAR_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    CHAR_INFO?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STD_CODE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STD_FULL_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STD_INC_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STD_TOKEN?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ROLE?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ERROR_MSG?: NullableStringFieldUpdateOperationsInput | string | null
    STD_STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    THUMBNAIL?: NullableStringFieldUpdateOperationsInput | string | null
    TEMPERATURE?: NullableFloatFieldUpdateOperationsInput | number | null
    F_PENALTY?: NullableFloatFieldUpdateOperationsInput | number | null
    P_PENALTY?: NullableFloatFieldUpdateOperationsInput | number | null
    STD_SHORT_NAME?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_charUncheckedUpdateManyInput = {
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAR_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    CHAR_TYPE?: NullableStringFieldUpdateOperationsInput | string | null
    CHAR_INFO?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    STD_CODE_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STD_FULL_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    STD_INC_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    STD_TOKEN?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ROLE?: NullableStringFieldUpdateOperationsInput | string | null
    STD_ERROR_MSG?: NullableStringFieldUpdateOperationsInput | string | null
    STD_STATUS?: NullableStringFieldUpdateOperationsInput | string | null
    THUMBNAIL?: NullableStringFieldUpdateOperationsInput | string | null
    TEMPERATURE?: NullableFloatFieldUpdateOperationsInput | number | null
    F_PENALTY?: NullableFloatFieldUpdateOperationsInput | number | null
    P_PENALTY?: NullableFloatFieldUpdateOperationsInput | number | null
    STD_SHORT_NAME?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chatCreateInput = {
    CHAR_NO: number
    CHAT_ROOM_NO?: number
    IS_LEARN?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAT_CONT?: string | null
    REG_ID?: string | null
  }

  export type cc_char_chatUncheckedCreateInput = {
    CHAT_NO?: number
    CHAR_NO: number
    CHAT_ROOM_NO?: number
    IS_LEARN?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAT_CONT?: string | null
    REG_ID?: string | null
  }

  export type cc_char_chatUpdateInput = {
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chatUncheckedUpdateInput = {
    CHAT_NO?: IntFieldUpdateOperationsInput | number
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chatCreateManyInput = {
    CHAT_NO?: number
    CHAR_NO: number
    CHAT_ROOM_NO?: number
    IS_LEARN?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAT_CONT?: string | null
    REG_ID?: string | null
  }

  export type cc_char_chatUpdateManyMutationInput = {
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chatUncheckedUpdateManyInput = {
    CHAT_NO?: IntFieldUpdateOperationsInput | number
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chat_for_learnCreateInput = {
    CHAT_CONT?: string | null
    REG_ID?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAR_NO: number
    CHAT_ROOM_NO?: number
  }

  export type cc_char_chat_for_learnUncheckedCreateInput = {
    CHAT_LEARN_NO?: number
    CHAT_CONT?: string | null
    REG_ID?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAR_NO: number
    CHAT_ROOM_NO?: number
  }

  export type cc_char_chat_for_learnUpdateInput = {
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
  }

  export type cc_char_chat_for_learnUncheckedUpdateInput = {
    CHAT_LEARN_NO?: IntFieldUpdateOperationsInput | number
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
  }

  export type cc_char_chat_for_learnCreateManyInput = {
    CHAT_LEARN_NO?: number
    CHAT_CONT?: string | null
    REG_ID?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAR_NO: number
    CHAT_ROOM_NO?: number
  }

  export type cc_char_chat_for_learnUpdateManyMutationInput = {
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
  }

  export type cc_char_chat_for_learnUncheckedUpdateManyInput = {
    CHAT_LEARN_NO?: IntFieldUpdateOperationsInput | number
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
  }

  export type cc_char_chat_logCreateInput = {
    CHAR_NO: number
    CHAT_ROOM_NO?: number
    IS_LEARN?: string | null
    REG_DT?: Date | string
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAT_CONT?: string | null
    REG_ID?: string | null
  }

  export type cc_char_chat_logUncheckedCreateInput = {
    CHAT_LOG_NO?: number
    CHAR_NO: number
    CHAT_ROOM_NO?: number
    IS_LEARN?: string | null
    REG_DT?: Date | string
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAT_CONT?: string | null
    REG_ID?: string | null
  }

  export type cc_char_chat_logUpdateInput = {
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: DateTimeFieldUpdateOperationsInput | Date | string
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chat_logUncheckedUpdateInput = {
    CHAT_LOG_NO?: IntFieldUpdateOperationsInput | number
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: DateTimeFieldUpdateOperationsInput | Date | string
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chat_logCreateManyInput = {
    CHAT_LOG_NO?: number
    CHAR_NO: number
    CHAT_ROOM_NO?: number
    IS_LEARN?: string | null
    REG_DT?: Date | string
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAT_CONT?: string | null
    REG_ID?: string | null
  }

  export type cc_char_chat_logUpdateManyMutationInput = {
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: DateTimeFieldUpdateOperationsInput | Date | string
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chat_logUncheckedUpdateManyInput = {
    CHAT_LOG_NO?: IntFieldUpdateOperationsInput | number
    CHAR_NO?: IntFieldUpdateOperationsInput | number
    CHAT_ROOM_NO?: IntFieldUpdateOperationsInput | number
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: DateTimeFieldUpdateOperationsInput | Date | string
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chat_premiumCreateInput = {
    CHAR_NO: string
    CHAT_ROOM_NO: string
    IS_LEARN?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAT_CONT?: string | null
    REG_ID?: string | null
  }

  export type cc_char_chat_premiumUncheckedCreateInput = {
    CHAT_NO?: number
    CHAR_NO: string
    CHAT_ROOM_NO: string
    IS_LEARN?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAT_CONT?: string | null
    REG_ID?: string | null
  }

  export type cc_char_chat_premiumUpdateInput = {
    CHAR_NO?: StringFieldUpdateOperationsInput | string
    CHAT_ROOM_NO?: StringFieldUpdateOperationsInput | string
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chat_premiumUncheckedUpdateInput = {
    CHAT_NO?: IntFieldUpdateOperationsInput | number
    CHAR_NO?: StringFieldUpdateOperationsInput | string
    CHAT_ROOM_NO?: StringFieldUpdateOperationsInput | string
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chat_premiumCreateManyInput = {
    CHAT_NO?: number
    CHAR_NO: string
    CHAT_ROOM_NO: string
    IS_LEARN?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    CHAT_CONT?: string | null
    REG_ID?: string | null
  }

  export type cc_char_chat_premiumUpdateManyMutationInput = {
    CHAR_NO?: StringFieldUpdateOperationsInput | string
    CHAT_ROOM_NO?: StringFieldUpdateOperationsInput | string
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_char_chat_premiumUncheckedUpdateManyInput = {
    CHAT_NO?: IntFieldUpdateOperationsInput | number
    CHAR_NO?: StringFieldUpdateOperationsInput | string
    CHAT_ROOM_NO?: StringFieldUpdateOperationsInput | string
    IS_LEARN?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    CHAT_CONT?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type cc_userCreateInput = {
    USER_NAME?: string | null
    REG_ID?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    USER_DISCORD_ID?: string | null
    PREMIUM_REMEMBER_CONV_COUNT?: number | null
    PREMIUM_CURRENT_ROOM_NO?: number | null
    TODAY_USER_USAGE?: number | null
  }

  export type cc_userUncheckedCreateInput = {
    USER_NO?: number
    USER_NAME?: string | null
    REG_ID?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    USER_DISCORD_ID?: string | null
    PREMIUM_REMEMBER_CONV_COUNT?: number | null
    PREMIUM_CURRENT_ROOM_NO?: number | null
    TODAY_USER_USAGE?: number | null
  }

  export type cc_userUpdateInput = {
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER_DISCORD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    PREMIUM_REMEMBER_CONV_COUNT?: NullableIntFieldUpdateOperationsInput | number | null
    PREMIUM_CURRENT_ROOM_NO?: NullableIntFieldUpdateOperationsInput | number | null
    TODAY_USER_USAGE?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cc_userUncheckedUpdateInput = {
    USER_NO?: IntFieldUpdateOperationsInput | number
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER_DISCORD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    PREMIUM_REMEMBER_CONV_COUNT?: NullableIntFieldUpdateOperationsInput | number | null
    PREMIUM_CURRENT_ROOM_NO?: NullableIntFieldUpdateOperationsInput | number | null
    TODAY_USER_USAGE?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cc_userCreateManyInput = {
    USER_NO?: number
    USER_NAME?: string | null
    REG_ID?: string | null
    REG_DT?: Date | string | null
    UPD_ID?: string | null
    UPD_DT?: Date | string | null
    USER_DISCORD_ID?: string | null
    PREMIUM_REMEMBER_CONV_COUNT?: number | null
    PREMIUM_CURRENT_ROOM_NO?: number | null
    TODAY_USER_USAGE?: number | null
  }

  export type cc_userUpdateManyMutationInput = {
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER_DISCORD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    PREMIUM_REMEMBER_CONV_COUNT?: NullableIntFieldUpdateOperationsInput | number | null
    PREMIUM_CURRENT_ROOM_NO?: NullableIntFieldUpdateOperationsInput | number | null
    TODAY_USER_USAGE?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type cc_userUncheckedUpdateManyInput = {
    USER_NO?: IntFieldUpdateOperationsInput | number
    USER_NAME?: NullableStringFieldUpdateOperationsInput | string | null
    REG_ID?: NullableStringFieldUpdateOperationsInput | string | null
    REG_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    UPD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    UPD_DT?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER_DISCORD_ID?: NullableStringFieldUpdateOperationsInput | string | null
    PREMIUM_REMEMBER_CONV_COUNT?: NullableIntFieldUpdateOperationsInput | number | null
    PREMIUM_CURRENT_ROOM_NO?: NullableIntFieldUpdateOperationsInput | number | null
    TODAY_USER_USAGE?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type cc_charCountOrderByAggregateInput = {
    CHAR_NO?: SortOrder
    CHAR_NAME?: SortOrder
    CHAR_TYPE?: SortOrder
    CHAR_INFO?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    REG_ID?: SortOrder
    REG_DT?: SortOrder
    STD_CODE_NAME?: SortOrder
    STD_FULL_NAME?: SortOrder
    STD_INC_ID?: SortOrder
    STD_ID?: SortOrder
    STD_TOKEN?: SortOrder
    STD_ROLE?: SortOrder
    STD_ERROR_MSG?: SortOrder
    STD_STATUS?: SortOrder
    THUMBNAIL?: SortOrder
    TEMPERATURE?: SortOrder
    F_PENALTY?: SortOrder
    P_PENALTY?: SortOrder
    STD_SHORT_NAME?: SortOrder
  }

  export type cc_charAvgOrderByAggregateInput = {
    CHAR_NO?: SortOrder
    TEMPERATURE?: SortOrder
    F_PENALTY?: SortOrder
    P_PENALTY?: SortOrder
  }

  export type cc_charMaxOrderByAggregateInput = {
    CHAR_NO?: SortOrder
    CHAR_NAME?: SortOrder
    CHAR_TYPE?: SortOrder
    CHAR_INFO?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    REG_ID?: SortOrder
    REG_DT?: SortOrder
    STD_CODE_NAME?: SortOrder
    STD_FULL_NAME?: SortOrder
    STD_INC_ID?: SortOrder
    STD_ID?: SortOrder
    STD_TOKEN?: SortOrder
    STD_ROLE?: SortOrder
    STD_ERROR_MSG?: SortOrder
    STD_STATUS?: SortOrder
    THUMBNAIL?: SortOrder
    TEMPERATURE?: SortOrder
    F_PENALTY?: SortOrder
    P_PENALTY?: SortOrder
    STD_SHORT_NAME?: SortOrder
  }

  export type cc_charMinOrderByAggregateInput = {
    CHAR_NO?: SortOrder
    CHAR_NAME?: SortOrder
    CHAR_TYPE?: SortOrder
    CHAR_INFO?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    REG_ID?: SortOrder
    REG_DT?: SortOrder
    STD_CODE_NAME?: SortOrder
    STD_FULL_NAME?: SortOrder
    STD_INC_ID?: SortOrder
    STD_ID?: SortOrder
    STD_TOKEN?: SortOrder
    STD_ROLE?: SortOrder
    STD_ERROR_MSG?: SortOrder
    STD_STATUS?: SortOrder
    THUMBNAIL?: SortOrder
    TEMPERATURE?: SortOrder
    F_PENALTY?: SortOrder
    P_PENALTY?: SortOrder
    STD_SHORT_NAME?: SortOrder
  }

  export type cc_charSumOrderByAggregateInput = {
    CHAR_NO?: SortOrder
    TEMPERATURE?: SortOrder
    F_PENALTY?: SortOrder
    P_PENALTY?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type cc_char_chatCountOrderByAggregateInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
  }

  export type cc_char_chatAvgOrderByAggregateInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
  }

  export type cc_char_chatMaxOrderByAggregateInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
  }

  export type cc_char_chatMinOrderByAggregateInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
  }

  export type cc_char_chatSumOrderByAggregateInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
  }

  export type cc_char_chat_for_learnCountOrderByAggregateInput = {
    CHAT_LEARN_NO?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
  }

  export type cc_char_chat_for_learnAvgOrderByAggregateInput = {
    CHAT_LEARN_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
  }

  export type cc_char_chat_for_learnMaxOrderByAggregateInput = {
    CHAT_LEARN_NO?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
  }

  export type cc_char_chat_for_learnMinOrderByAggregateInput = {
    CHAT_LEARN_NO?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
  }

  export type cc_char_chat_for_learnSumOrderByAggregateInput = {
    CHAT_LEARN_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type cc_char_chat_logCountOrderByAggregateInput = {
    CHAT_LOG_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
  }

  export type cc_char_chat_logAvgOrderByAggregateInput = {
    CHAT_LOG_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
  }

  export type cc_char_chat_logMaxOrderByAggregateInput = {
    CHAT_LOG_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
  }

  export type cc_char_chat_logMinOrderByAggregateInput = {
    CHAT_LOG_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
  }

  export type cc_char_chat_logSumOrderByAggregateInput = {
    CHAT_LOG_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type cc_char_chat_premiumCountOrderByAggregateInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
  }

  export type cc_char_chat_premiumAvgOrderByAggregateInput = {
    CHAT_NO?: SortOrder
  }

  export type cc_char_chat_premiumMaxOrderByAggregateInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
  }

  export type cc_char_chat_premiumMinOrderByAggregateInput = {
    CHAT_NO?: SortOrder
    CHAR_NO?: SortOrder
    CHAT_ROOM_NO?: SortOrder
    IS_LEARN?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    CHAT_CONT?: SortOrder
    REG_ID?: SortOrder
  }

  export type cc_char_chat_premiumSumOrderByAggregateInput = {
    CHAT_NO?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type cc_userCountOrderByAggregateInput = {
    USER_NO?: SortOrder
    USER_NAME?: SortOrder
    REG_ID?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    USER_DISCORD_ID?: SortOrder
    PREMIUM_REMEMBER_CONV_COUNT?: SortOrder
    PREMIUM_CURRENT_ROOM_NO?: SortOrder
    TODAY_USER_USAGE?: SortOrder
  }

  export type cc_userAvgOrderByAggregateInput = {
    USER_NO?: SortOrder
    PREMIUM_REMEMBER_CONV_COUNT?: SortOrder
    PREMIUM_CURRENT_ROOM_NO?: SortOrder
    TODAY_USER_USAGE?: SortOrder
  }

  export type cc_userMaxOrderByAggregateInput = {
    USER_NO?: SortOrder
    USER_NAME?: SortOrder
    REG_ID?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    USER_DISCORD_ID?: SortOrder
    PREMIUM_REMEMBER_CONV_COUNT?: SortOrder
    PREMIUM_CURRENT_ROOM_NO?: SortOrder
    TODAY_USER_USAGE?: SortOrder
  }

  export type cc_userMinOrderByAggregateInput = {
    USER_NO?: SortOrder
    USER_NAME?: SortOrder
    REG_ID?: SortOrder
    REG_DT?: SortOrder
    UPD_ID?: SortOrder
    UPD_DT?: SortOrder
    USER_DISCORD_ID?: SortOrder
    PREMIUM_REMEMBER_CONV_COUNT?: SortOrder
    PREMIUM_CURRENT_ROOM_NO?: SortOrder
    TODAY_USER_USAGE?: SortOrder
  }

  export type cc_userSumOrderByAggregateInput = {
    USER_NO?: SortOrder
    PREMIUM_REMEMBER_CONV_COUNT?: SortOrder
    PREMIUM_CURRENT_ROOM_NO?: SortOrder
    TODAY_USER_USAGE?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use cc_charDefaultArgs instead
     */
    export type cc_charArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cc_charDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cc_char_chatDefaultArgs instead
     */
    export type cc_char_chatArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cc_char_chatDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cc_char_chat_for_learnDefaultArgs instead
     */
    export type cc_char_chat_for_learnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cc_char_chat_for_learnDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cc_char_chat_logDefaultArgs instead
     */
    export type cc_char_chat_logArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cc_char_chat_logDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cc_char_chat_premiumDefaultArgs instead
     */
    export type cc_char_chat_premiumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cc_char_chat_premiumDefaultArgs<ExtArgs>
    /**
     * @deprecated Use cc_userDefaultArgs instead
     */
    export type cc_userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = cc_userDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}